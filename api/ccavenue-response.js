const ccavenueCrypto = require('./ccavenue-crypto');
const querystring = require('querystring');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    let rawBody = '';

    // Handle incoming POST form data body
    if (typeof req.body === 'string') {
      rawBody = req.body;
    } else if (req.body && typeof req.body === 'object') {
      if (req.body.encResp) {
        rawBody = `encResp=${encodeURIComponent(req.body.encResp)}`;
      } else {
        rawBody = querystring.stringify(req.body);
      }
    }

    const parsedBody = querystring.parse(rawBody);
    const encResp = parsedBody.encResp;

    const workingKey = process.env.CCAVENUE_WORKING_KEY;

    if (!encResp || !workingKey) {
      console.error('CCAvenue Callback missing encResp or workingKey');
      return res.redirect(302, '/donation-failed.html?reason=Invalid+payment+response');
    }

    // Decrypt CCAvenue response payload
    const decryptedText = ccavenueCrypto.decrypt(encResp, workingKey);
    const params = querystring.parse(decryptedText);

    const orderId = params.order_id || '';
    const trackingId = params.tracking_id || '';
    const orderStatus = (params.order_status || '').trim();
    const amount = params.amount || '0.00';
    const purpose = params.merchant_param1 || 'General Donation';
    const paymentMode = params.payment_mode || '';
    const failureMsg = params.failure_message || params.status_message || 'Payment processing failed';
    const currentDate = new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    // Handle payment status
    if (orderStatus.toLowerCase() === 'success') {
      const successQuery = new URLSearchParams({
        order_id: orderId,
        tracking_id: trackingId,
        amount: amount,
        purpose: purpose,
        payment_mode: paymentMode,
        date: currentDate,
        status: 'Success'
      });
      return res.redirect(302, `/donation-success.html?${successQuery.toString()}`);
    } else if (orderStatus.toLowerCase() === 'pending') {
      const pendingQuery = new URLSearchParams({
        order_id: orderId,
        tracking_id: trackingId,
        amount: amount,
        purpose: purpose,
        status: 'Pending'
      });
      return res.redirect(302, `/donation-pending.html?${pendingQuery.toString()}`);
    } else {
      // Aborted or Failure
      const failureQuery = new URLSearchParams({
        order_id: orderId,
        reason: failureMsg,
        status: orderStatus || 'Failure'
      });
      return res.redirect(302, `/donation-failed.html?${failureQuery.toString()}`);
    }
  } catch (err) {
    console.error('Error processing CCAvenue callback:', err);
    return res.redirect(302, '/donation-failed.html?reason=Server+error+processing+payment+response');
  }
};

const ccavenueCrypto = require('./ccavenue-crypto');
const crypto = require('crypto');

function getSiteUrl() {
  const configuredUrl = process.env.SITE_URL;
  if (!configuredUrl) return null;

  try {
    const url = new URL(configuredUrl);
    return url.protocol === 'https:' ? url.origin : null;
  } catch (_) {
    return null;
  }
}

function createOrderId() {
  const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
  const suffix = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `SVCT-${timestamp.slice(0, 8)}-${timestamp.slice(8)}-${suffix}`;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { amount, name, email, mobile, purpose, pan, receipt } = body;

    // Server-side validation
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      return res.status(400).json({ error: 'Please enter a valid donation amount greater than zero.' });
    }

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ error: 'Please enter a valid full name.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    const cleanMobile = (mobile || '').toString().trim().replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      return res.status(400).json({ error: 'Please enter a valid 10-digit Indian mobile number.' });
    }

    if (!purpose || typeof purpose !== 'string') {
      return res.status(400).json({ error: 'Please select a donation purpose.' });
    }

    // Read Environment Variables
    const merchantId = process.env.CCAVENUE_MERCHANT_ID;
    const accessCode = process.env.CCAVENUE_ACCESS_CODE;
    const workingKey = process.env.CCAVENUE_WORKING_KEY;
    const siteUrl = getSiteUrl();

    // Check if CCAvenue credentials are missing
    if (!merchantId || !accessCode || !workingKey || !siteUrl) {
      return res.status(400).json({
        error: 'CCAvenue payment credentials are not configured.',
        configured: false
      });
    }

    // Generate unique order ID
    const orderId = createOrderId();

    // Sanitize string inputs for CCAvenue request
    const cleanName = name.trim().replace(/[&='"]/g, '');
    const cleanEmail = email.trim();
    const cleanPurpose = purpose.trim().replace(/[&='"]/g, '');
    const cleanPan = (pan || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    const receiptReq = receipt ? 'YES' : 'NO';

    // Construct CCAvenue payment request parameters
    const params = new URLSearchParams({
      merchant_id: merchantId,
      order_id: orderId,
      currency: 'INR',
      amount: numAmount.toFixed(2),
      redirect_url: `${siteUrl}/api/ccavenue-response`,
      cancel_url: `${siteUrl}/api/ccavenue-response`,
      language: 'EN',
      billing_name: cleanName,
      billing_email: cleanEmail,
      billing_tel: cleanMobile,
      merchant_param1: cleanPurpose,
      merchant_param2: cleanPan,
      merchant_param3: receiptReq
    });

    const plainText = params.toString();

    // Encrypt request payload
    const encRequest = ccavenueCrypto.encrypt(plainText, workingKey);

    const paymentUrl = 'https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction';

    return res.status(200).json({
      success: true,
      orderId,
      encRequest,
      accessCode,
      paymentUrl
    });
  } catch (_) {
    return res.status(500).json({ error: 'Server error creating payment request.' });
  }
};

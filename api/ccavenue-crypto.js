const crypto = require('crypto');

/**
 * CCAvenue AES-128-CBC Encryption Helper
 * Uses MD5 hash of Working Key as 16-byte key and standard 16-byte IV.
 */
function getAlgorithmKey(workingKey) {
  const m = crypto.createHash('md5');
  m.update(workingKey);
  return m.digest();
}

function getIv() {
  return Buffer.from([
    0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,
    0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f
  ]);
}

function encrypt(plainText, workingKey) {
  if (!plainText || !workingKey) return '';
  const key = getAlgorithmKey(workingKey);
  const iv = getIv();
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  let encoded = cipher.update(plainText, 'utf8', 'hex');
  encoded += cipher.final('hex');
  return encoded;
}

function decrypt(encText, workingKey) {
  if (!encText || !workingKey) return '';
  const key = getAlgorithmKey(workingKey);
  const iv = getIv();
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  let decoded = decipher.update(encText, 'hex', 'utf8');
  decoded += decipher.final('utf8');
  return decoded;
}

module.exports = {
  encrypt,
  decrypt
};

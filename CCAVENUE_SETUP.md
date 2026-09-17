# CCAvenue Payment Gateway Setup & Configuration Guide

This document details the configuration requirements for the CCAvenue donation integration on the Shree Vasuki Charitable Trust website deployed via Vercel Serverless Functions.

---

## 1. Required Environment Variables

Set the following Environment Variables in your **Vercel Project Settings** (`Settings -> Environment Variables`):

| Variable Name | Description | Example / Default Value |
|---|---|---|
| `CCAVENUE_MERCHANT_ID` | Merchant ID provided by CCAvenue | `1234567` |
| `CCAVENUE_ACCESS_CODE` | Access Code provided by CCAvenue | `AVAB12CD34EF56GH` |
| `CCAVENUE_WORKING_KEY` | 32-character AES Working Key from CCAvenue | `1234567890ABCDEF1234567890ABCDEF` |
| `CCAVENUE_REDIRECT_URL` | Serverless Callback API URL | `https://shreevasukicharitable.vercel.app/api/ccavenue-response` |
| `CCAVENUE_CANCEL_URL` | Serverless Callback API URL | `https://shreevasukicharitable.vercel.app/api/ccavenue-response` |
| `CCAVENUE_ENV` | Environment (`production` or `sandbox`) | `production` |

> ⚠️ **IMPORTANT**: Never hardcode merchant secrets in source code, browser JS, or commit them to GitHub.

---

## 2. CCAvenue Dashboard URL Configuration

Log in to your **CCAvenue Merchant Panel** (`https://dashboard.ccavenue.com` or `https://test.ccavenue.com`):

1. Navigate to **Settings -> API Keys**.
2. Copy your **Merchant ID**, **Access Code**, and **Working Key**.
3. Under **URL Settings / Response URLs**, set:
   - **Redirect URL**: `https://shreevasukicharitable.vercel.app/api/ccavenue-response`
   - **Cancel URL**: `https://shreevasukicharitable.vercel.app/api/ccavenue-response`

---

## 3. How to Test (Sandbox vs Live Mode)

### Sandbox / Testing Mode
1. Set `CCAVENUE_ENV=sandbox` in Vercel environment variables.
2. Use test CCAvenue credentials (`CCAVENUE_MERCHANT_ID`, `CCAVENUE_ACCESS_CODE`, `CCAVENUE_WORKING_KEY`).
3. Complete test transactions using test card numbers or Net Banking credentials provided by CCAvenue.

### Production / Live Mode
1. Set `CCAVENUE_ENV=production` (or remove `CCAVENUE_ENV`).
2. Provide your active Production CCAvenue credentials.

---

## 4. Unconfigured Credentials Fallback
If environment variables are not set, the donation form gracefully displays:
`"CCAvenue payment credentials are not configured."`
No sensitive details or server keys are exposed to users.

---

## 5. Summary of Client Prerequisites Required
Before going live, the client must supply:
- [ ] Active CCAvenue Merchant Account ID (`CCAVENUE_MERCHANT_ID`)
- [ ] Active CCAvenue Access Code (`CCAVENUE_ACCESS_CODE`)
- [ ] Active CCAvenue Working Key (`CCAVENUE_WORKING_KEY`)
- [ ] Configured Redirect & Cancel URLs in CCAvenue Panel

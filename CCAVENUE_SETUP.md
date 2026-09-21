# CCAvenue setup

Configure these Vercel environment variables for every required deployment environment:

- `CCAVENUE_MERCHANT_ID`
- `CCAVENUE_ACCESS_CODE`
- `CCAVENUE_WORKING_KEY`
- `SITE_URL`

Current temporary `SITE_URL`:

`https://shreevasukicharitable.vercel.app`

Final `SITE_URL` after domain migration:

`https://www.shreevasukicharitabletrust.in`

Endpoints:

- Create payment: `/api/create-payment`
- CCAvenue callback: `/api/ccavenue-response`

Never commit credentials. Regenerate any exposed Working Key before production. After domain migration, update `SITE_URL` and configure/confirm the final approved website and callback URL in CCAvenue before live use.

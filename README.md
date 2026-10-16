# Yori Jomo

Desktop homepage implementation of the supplied Figma design.

## Run locally

Open `index.html` in a browser. The page uses the original Figma image and SVG
assets in `assets/` and loads Instrument Sans and IBM Plex Mono from Google Fonts.

The newsletter field and CTA controls are visual implementations only; no
signup service or CTA destination was provided. The desktop header uses the
original Figma logo and icons, and its search control filters the featured
products. Layout dimensions are fluid from the 1512px Figma reference up to a
1890px content max-width.

## Cloudflare Worker password protection

The Worker serves the existing root-level static site through a Cloudflare
Workers static-assets binding. All requests reach `worker.js` first;
unauthenticated requests to the homepage, HTML pages, or static assets are
redirected to the existing `login.html`. Only the login page, its stylesheet,
and its two logo/arrow SVGs are public.

### Configure production secrets

Keep the existing `SITE_PASSWORD` secret on the Cloudflare Worker. Add a
separate, randomly generated signing secret (at least 32 bytes) to the same
Worker:

```sh
openssl rand -base64 48
npx wrangler secret put SESSION_SECRET
```

Paste the generated value into the `SESSION_SECRET` prompt; do not put either
secret in this repository or in GitHub. The Worker fails closed with HTTP 503
if either required secret is missing. Sessions are HMAC-signed, expire after
eight hours, and are stored in an `HttpOnly`, `Secure`, `SameSite=Strict`
`__Host-` cookie.

### Deploy and preview

Deploy from the repository root with:

```sh
npx wrangler deploy
```

The checked-in `wrangler.jsonc` configures the Worker entry point and static
assets. For Cloudflare Workers Builds connected to GitHub, use
`npx wrangler deploy` as the deployment command if the integration does not
detect the Wrangler configuration automatically. Keep both secrets configured
on the production Worker when deploying new versions.

To preview locally, create an untracked `.dev.vars` file with test-only values:

```dotenv
SITE_PASSWORD=local-test-password
SESSION_SECRET=replace-with-at-least-32-random-bytes
```

Then run:

```sh
npx wrangler dev
```

`.dev.vars` is ignored by Git. Local preview is served at the URL Wrangler
prints. The production `SITE_PASSWORD` should be configured as a Cloudflare
secret, not copied into local files.

Run the Worker route and session tests with:

```sh
node --test worker.test.mjs
```

For additional protection against password guessing, configure a Cloudflare
rate-limiting rule for repeated `POST /login` requests.
# Room Service with Nextjs

This is an example of Room Service with ZEIT's Nextjs. Requires [Node 8](https://nodejs.org/en/download/) or above.

## Setup

Get an API Key from [Room Service](https://www.roomservice.dev/app). It should look something like this:

```bash
sk_live_x1opQvBO2ezjUQeywg9LL # this is a fake key
```

Clone the repo and install the dependencies:

```
git clone https://github.com/getroomservice/example-next.git roomservice-sandbox
npm install
```

Then, with your API key, run `npm run dev`:

```bash
# This is not your secret key
ROOM_SERVICE_SECRET=sk_live_x1opQvBO2ezjUQeywg9LL npm run dev
```

Then, open your site in your browser at `http://localhost:3000`.

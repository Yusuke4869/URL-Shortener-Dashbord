import { Auth0Client } from "@auth0/nextjs-auth0/server";

import { env } from "./env";

export const auth0 = new Auth0Client({
  domain: env.AUTH0_DOMAIN,
  clientId: env.AUTH0_CLIENT_ID,
  clientSecret: env.AUTH0_CLIENT_SECRET,
  appBaseUrl: env.APP_BASE_URL,
  secret: env.AUTH0_SECRET,
});

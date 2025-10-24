import { auth0 } from "./auth0";

export const getUser = async () => {
  const session = await auth0.getSession();
  if (!session) return null;

  return {
    email: session.user.email?.toLowerCase() ?? null,
  };
};

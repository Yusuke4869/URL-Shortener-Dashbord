import { useUser as useAuth0User } from "@auth0/nextjs-auth0";

export const useUser = () => {
  const { user, error, isLoading } = useAuth0User();

  return {
    user: user
      ? {
          email: user.email?.toLowerCase(),
        }
      : null,
    error,
    isLoading,
  };
};

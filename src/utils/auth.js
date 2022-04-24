export const createLoginUrl = (redirectTo) => {
  if (redirectTo) {
    return `/api/auth/signin?callbackUrl=${encodeURIComponent(
      `${process.env.authUrl}${redirectTo}`
    )}`;
  }
  return `/login`;
};

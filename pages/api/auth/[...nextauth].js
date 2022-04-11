import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

const options = {
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      // name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith@jj.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const user = await axios.post(
            `${process.env.apiUrl}/api/account/login`,
            credentials
          );
          console.log({ user });
          if (user?.data?.token) {
            return user.data;
          }
          return null;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user) {
      return user;
    },
    async session(session, token) {
      session.user = token.user;
      return session;
    },
    async jwt(token, user) {
      if (user) token.user = user;
      return token;
    },
  },
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.SESSION_SECRET,
  useSecureCookies: process.env.NODE_ENV === "development" ? false : true,
};

export default NextAuth(options);

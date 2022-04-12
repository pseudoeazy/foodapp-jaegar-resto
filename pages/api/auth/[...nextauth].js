import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";
import { loginUser } from "/services/auth";

const options = {
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith@jj.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize({ email, password }, req) {
        try {
          const user = await loginUser({ email, password });
          console.log({ user });
          if (user?.accessToken && user?.email === email) {
            return user;
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

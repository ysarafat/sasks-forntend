import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// refresh token
async function refreshToken(token: JWT) {
  const res = await fetch(
    `${process.env.SERVER_BASE_URL!}/auth/refresh-token`,
    {
      method: "POST",
      headers: { authorization: token?.accessTokens?.refreshToken },
    }
  );
  const response = await res.json();
  return {
    ...token,
    accessTokens: response?.data,
  };
}
// auth options
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        try {
          const res = await fetch(
            `${process.env.SERVER_BASE_URL!}/auth/login`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );
          const user = await res.json();
          if (
            user?.data?.user?.userId &&
            user?.data?.accessTokens?.accessToken
          ) {
            // console.log(user, "USER");
            return user.data;
          }
        } catch (error) {
          console.log(error, "AUTH_ERROR");
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      if (new Date().getTime() < token?.accessTokens?.expireIn) {
        return token;
      }
      const refreshTokens = await refreshToken(token);
      return refreshTokens;
    },
    async session({ token, session }) {
      if (token) {
        session.user = token?.user;
        session.accessTokens = token?.accessTokens;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

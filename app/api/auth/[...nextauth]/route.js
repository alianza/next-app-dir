import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],

  callbacks: {
    // attach user id to session (server side)
    async session({ session, user, token }) {
      session.user.id = token.id || token.sub;
      return session;
    },
    // attach user id to token (client side)
    async jwt({ token, account, user, profile }) {
      user && (token.id = user.id);
      account && (token.id = profile.id);
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

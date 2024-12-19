import path from "path";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

const dbPath = path.resolve(process.cwd(), "data", "database.sqlite");

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const db = await open({ filename: dbPath, driver: sqlite3.Database });
          const user = await db.get(
            "SELECT * FROM users WHERE email = ? AND password = ?",
            [credentials.email, credentials.password]
          );

          if (user) {
            return { id: user.id, name: user.name, email: user.email };
          }
          return null; // Invalid credentials
        } catch (error) {
          console.error("Database error:", error.message);
          throw new Error("Failed to connect to database.");
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

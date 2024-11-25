import { PrismaAdapter } from '@auth/prisma-adapter';
import { type DefaultSession, type NextAuthConfig } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { db } from '@/config/server/db';
import { env } from '@/config/env';
import { Adapter } from 'next-auth/adapters';

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      onboarding_completed: boolean;
    } & DefaultSession['user'];
  }

  interface User {
    // ...other properties
    // role: UserRole;
    onboarding_completed: boolean;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    GithubProvider({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    }),
  ],
  adapter: PrismaAdapter(db) as Adapter,
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        onboarding_completed: user.onboarding_completed,
      },
    }),

    redirect: ({ baseUrl }) => {
      return Promise.resolve(baseUrl);
    },
  },
} satisfies NextAuthConfig;

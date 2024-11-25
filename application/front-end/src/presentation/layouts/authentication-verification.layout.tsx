import { Fragment } from 'react';
import { auth } from '@/config/server/auth';
import { PATH } from '@common/constants';
import { redirect } from 'next/navigation';

export default async function AuthenticationVerificationLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    redirect(PATH.AUTH.SIGN_IN);
  }

  return <Fragment>{children}</Fragment>;
}

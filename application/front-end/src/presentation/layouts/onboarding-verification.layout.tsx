import { Fragment } from 'react';
import { auth } from '@/config/server/auth';
import { PATH } from '@common/constants';
import { redirect } from 'next/navigation';

export default async function OnboardingVerificationLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (session && !session?.user.onboarding_completed) {
    redirect(PATH.AUTH.ONBOARDING.CHOOSE_ROLE);
  }

  return <Fragment>{children}</Fragment>;
}

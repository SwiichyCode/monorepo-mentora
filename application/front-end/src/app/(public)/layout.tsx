import type { PropsWithChildren } from 'react';
import OnboardingVerificationLayout from '@/presentation/layouts/onboarding-verification.layout';

export default function PublicLayout({ children }: PropsWithChildren) {
  return <OnboardingVerificationLayout>{children}</OnboardingVerificationLayout>;
}

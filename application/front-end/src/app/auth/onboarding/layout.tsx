import AuthenticationVerificationLayout from '@/presentation/layouts/authentication-verification.layout';

export default async function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <AuthenticationVerificationLayout>{children}</AuthenticationVerificationLayout>;
}

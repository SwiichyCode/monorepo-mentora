import ProtectedLayout from '@/presentation/layouts/protected-layout';

export default async function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}

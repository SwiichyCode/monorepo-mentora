import { Card } from '@/presentation/components/ui/card';
import { AuthCard } from '@/presentation/login/components/auth-card';

export default function LoginPage() {
  return (
    <div className="flex w-auto max-w-[400px] flex-col justify-center gap-8">
      <AuthCard />
    </div>
  );
}

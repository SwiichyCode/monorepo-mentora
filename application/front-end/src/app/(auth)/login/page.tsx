import { Card } from '@/presentation/components/ui/card';
import { AuthCard } from '@/presentation/login/components/auth-card';

export default function LoginPage() {
  return (
    <div className="flex w-auto max-w-[400px] flex-col justify-center gap-8">
      <Card className="flex flex-col gap-10 p-8">
        <div>
          <h1 className="text-2xl font-bold py-2">Se connecter</h1>
          <p className="text-black/60">Envie de devenir mentor ou mentoré, connectez-vous pour commencer votre aventure !</p>
        </div>
        <AuthCard />
      </Card>
    </div>
  );
}

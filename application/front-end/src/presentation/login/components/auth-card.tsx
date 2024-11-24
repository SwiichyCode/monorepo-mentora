import { Card } from '@/presentation/components/ui/card';
import { AuthButton } from './auth-button';
import { Mail, Github } from 'lucide-react';

export const AuthCard = () => {
  return (
    <Card className="flex flex-col gap-10 p-8">
      <div>
        <h1 className="py-2 text-2xl font-bold">Se connecter</h1>
        <p className="text-black/60">
          Envie de devenir mentor ou mentoré, connectez-vous pour commencer votre aventure !
        </p>
      </div>
      <div className="flex w-80 flex-col items-center gap-4">
        <AuthButton provider={'Gmail'} icon={Mail} />
        <AuthButton provider={'Github'} icon={Github} />
      </div>
    </Card>
  );
};

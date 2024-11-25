import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { AuthButton } from './auth-button';
import { Mail, Github } from 'lucide-react';

type AuthCardProps = {
  title: string;
  description: string;
};

export const AuthCard = ({ title, description }: AuthCardProps) => {
  return (
    <Card className="w-[380px] h-max m-auto space-y-8">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <AuthButton provider={'Gmail'} icon={Mail} />
        <AuthButton provider={'Github'} icon={Github} />
      </CardContent>
    </Card>
  );
};

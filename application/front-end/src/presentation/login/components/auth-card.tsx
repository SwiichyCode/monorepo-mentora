import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { AuthButton } from './auth-button';

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
        <AuthButton provider={'gmail'} />
        <AuthButton provider={'github'} />
      </CardContent>
    </Card>
  );
};

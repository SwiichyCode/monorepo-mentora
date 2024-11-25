import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/presentation/components/ui/card';
import { OauthButton } from './oauth-button';
import Link from 'next/link';
import { Separator } from '@/presentation/components/ui/separator';
import { PATH } from '@common/constants';

type AuthCardProps = {
  title: string;
  description: string;
};

export const AuthCard = ({ title, description }: AuthCardProps) => {
  return (
    <Card className="w-[380px] h-max m-auto space-y-4">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <OauthButton provider={'gmail'} />
        <Separator />
        <OauthButton provider={'github'} />
      </CardContent>
      <CardFooter>
        <Link href={PATH.HOME} className="text-sm text-gray-500 hover:underline">
          Retourner à l&apos;accueil
        </Link>
      </CardFooter>
    </Card>
  );
};

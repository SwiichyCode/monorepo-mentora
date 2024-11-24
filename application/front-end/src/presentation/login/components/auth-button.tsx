import { Button } from '@/presentation/components/ui/button';

type AuthCardProps = {
  provider: 'Gmail' | 'Github';
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const AuthButton = ({ provider, icon: Icon }: AuthCardProps) => {
  return (
    <Button className="flex w-full items-center gap-2">
      <Icon className="h-5 w-5" />
      <span>Se connecter avec {provider}</span>
    </Button>
  );
};

import { Button } from '@/presentation/components/ui/button';

type AuthCardProps = {
  strategie: 'gmail' | 'github';
};

export const AuthCard = ({ strategie }: AuthCardProps) => {
  return (
    <Button variant="outline" size="icon" className="w-full">
      {strategie}
    </Button>
  );
};

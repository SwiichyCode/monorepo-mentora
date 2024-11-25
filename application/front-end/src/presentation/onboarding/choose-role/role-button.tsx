import { Button } from '@/presentation/components/ui/button';
import { PATH } from '@common/constants';
import Link from 'next/link';

interface RoleButtonProps {
  text: string;
}

export const RoleButton = ({ text }: RoleButtonProps) => {
  return (
    <Link href={text === 'Devenir mentor' ? PATH.AUTH.ONBOARDING.MENTOR : PATH.AUTH.ONBOARDING.MENTEE}>
      <Button>{text}</Button>
    </Link>
  );
};

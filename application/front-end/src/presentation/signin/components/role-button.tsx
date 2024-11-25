import { PATH } from '@common/constants';
import Link from 'next/link';

import { Button } from '@/presentation/components/ui/button';

interface RoleButtonProperties {
  text: string;
}

export const RoleButton = ({ text }: RoleButtonProperties) => {
  return (
    <Link href={text === 'Devenir mentor' ? PATH.AUTH.ONBOARDING.MENTOR : PATH.AUTH.ONBOARDING.MENTEE}>
      <Button>{text}</Button>
    </Link>
  );
};

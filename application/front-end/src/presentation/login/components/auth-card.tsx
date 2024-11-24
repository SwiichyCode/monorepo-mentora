import { AuthButton } from './auth-button';
import { Mail, Github } from 'lucide-react';


export const AuthCard = () => {
  return (
    <div className='flex flex-col w-80 items-center gap-4'>
      <AuthButton provider={'Gmail'} icon={Mail} />
      <AuthButton provider={'Github'} icon={Github} />
    </div>
  );
};

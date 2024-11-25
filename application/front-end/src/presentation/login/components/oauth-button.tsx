'use client';

import { Button } from '@/presentation/components/ui/button';
import { Mail, Github } from 'lucide-react';
import { signIn } from 'next-auth/react';

type OauthProviderProps = {
  provider: 'gmail' | 'github';
};

const OauthButtonIcon = ({ provider }: OauthProviderProps) => {
  switch (provider) {
    case 'gmail':
      return <Mail className="h-5 w-5" />;
    case 'github':
      return <Github className="h-5 w-5" />;
  }
};

export const OauthButton = ({ provider }: OauthProviderProps) => {
  const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);

  return (
    <Button onClick={() => signIn(provider)} className="flex w-full items-center gap-2">
      <OauthButtonIcon provider={provider} />
      <span>Se connecter avec {providerName}</span>
    </Button>
  );
};
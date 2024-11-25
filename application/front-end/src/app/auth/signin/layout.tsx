import type { PropsWithChildren } from 'react';

export default function SigninLayout({ children }: PropsWithChildren) {
  return <div className="flex item-center justify-center h-screen">{children}</div>;
}

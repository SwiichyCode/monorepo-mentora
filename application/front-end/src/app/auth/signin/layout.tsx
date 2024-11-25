import type { PropsWithChildren } from 'react';

export default function SigninLayout({ children }: PropsWithChildren) {
  return <div className="item-center flex h-screen justify-center">{children}</div>;
}

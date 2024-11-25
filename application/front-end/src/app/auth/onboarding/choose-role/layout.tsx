import type { PropsWithChildren } from 'react';

export default function ChooseRoleLayout({ children }: PropsWithChildren) {
  return <div className="flex h-screen flex-col items-center justify-center">{children}</div>;
}

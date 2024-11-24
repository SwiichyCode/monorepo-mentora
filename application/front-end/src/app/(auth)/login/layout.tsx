import { PropsWithChildren } from 'react';

export default function LoginLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex item-center justify-center h-screen">
      {children}
    </div>
  );
}

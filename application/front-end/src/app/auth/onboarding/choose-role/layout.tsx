import { PropsWithChildren } from 'react';

export default function ChooseRoleLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="py-2 text-2xl font-bold">Choose your role</h1>
      {children}
    </div>
  );
}

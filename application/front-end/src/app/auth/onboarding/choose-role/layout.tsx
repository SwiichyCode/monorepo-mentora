import { PropsWithChildren } from 'react';

export default function ChooseRoleLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center justify-center lg:h-screen">
      <h1 className="text-4xl font-bold py-8">Sélectionne ton rôle</h1>
      {children}
    </div>
  );
}

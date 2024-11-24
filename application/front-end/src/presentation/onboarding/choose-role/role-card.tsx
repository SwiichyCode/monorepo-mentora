import { Card } from '@/presentation/components/ui/card';
import { RoleButton } from './role-button';
import React from 'react';

type ChooseRoleProps = {
  text: 'mentor' | 'mentee';
  role: 'mentor' | 'mentee';
};

export const RoleCard: React.FC<ChooseRoleProps> = ({ role }) => {
  return (
    <>
      <Card className="flex flex-col gap-10 p-8">
        <div className="flex w-80 flex-col items-center gap-4">
          {role === 'mentor' ? (
            <>
              <h1 className="py-2 text-2xl font-bold">Devenez mentor !</h1>
              <p className="text-black/60">Energize your career by sharing your knowledge with others.</p>
              <RoleButton text="Devenir mentor" />
            </>
          ) : (
            <>
              <h1 className="py-2 text-2xl font-bold">Devenez mentoré !</h1>
              <p className="text-black/60">Boost your career by learning from experienced professionals.</p>
              <RoleButton text="Devenir mentoré" />
            </>
          )}
        </div>
      </Card>
    </>
  );
};

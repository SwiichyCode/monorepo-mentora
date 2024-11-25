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
      <Card className="flex flex-col items-center gap-10 rounded-lg border border-gray-200 bg-white p-8">
        <div
          className="flex w-80 flex-col gap-4"
        >
          {role === 'mentor' ? (
            <>
              <h1 className="text-xl font-extrabold">Partage ton savoir !</h1>
              <p className="leading-relaxed text-black/70 mb-6">
                Tu as de l'expérience ? Inspire et aide les juniors à progresser dans leur carrière et leur vie
                professionnelle.
              </p>
              <RoleButton text="Devenir mentor" />
            </>
          ) : (
            <>
              <h1 className="text-xl font-extrabold">Booste ta carrière !</h1>
              <p className="leading-relaxed text-black/70 mb-6">
                Débute ta carrière avec succès ! Apprends des meilleures pratiques et sois guidé par des experts pour
                atteindre tes objectifs.
              </p>
              <RoleButton text="Devenir mentoré" />
            </>
          )}
        </div>
      </Card>
    </>
  );
};

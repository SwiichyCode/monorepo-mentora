import React from 'react';

import { cn } from '@/config/libs/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/presentation/components/ui/card';

import { RoleButton } from '../../signin/components/role-button';

type ChooseRoleProperties = {
  role: 'mentor' | 'mentee';
  description: string;
  title: string;
};

export const RoleCard: React.FC<ChooseRoleProperties> = ({ role, title, description }) => {
  return (
    <>
      <Card
        className={cn('m-auto h-max w-[380px] space-y-4', '[&]:border [&]:shadow-none', 'sm:[&]:border sm:[&]:shadow')}
      >
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          {role === 'mentor' ? <RoleButton text="Devenir mentor" /> : <RoleButton text="Devenir mentoré" />}
        </CardContent>
      </Card>
    </>
  );
};

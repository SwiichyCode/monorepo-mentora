'use client';

import { useActionState } from 'react';
import { actionForm } from './form-mentee.action';
import { Input } from '@/presentation/components/ui/input';
import { Button } from '@/presentation/components/ui/button';

export const NewForm = () => {
  const [state, action] = useActionState(actionForm, undefined);

  return (
    <form action={action} className="max-w-md space-y-8 m-auto pt-10">
      <Input type="text" name="pseudo" defaultValue={state?.fieldsValues?.pseudo} />
      <Button type="submit">Sign in</Button>

      {state?.errors && <p>{state.errors.pseudo}</p>}
      {state?.message && <p>{state.message}</p>}
    </form>
  );
};
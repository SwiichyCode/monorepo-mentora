'use client';

import { useActionState } from 'react';
import { actionForm } from './form-mentee.action';
import { Input } from '@/presentation/components/ui/input';
import { Button } from '@/presentation/components/ui/button';
import { Label } from '@/presentation/components/ui/label';
import { Textarea } from '@/presentation/components/ui/textarea';

export const NewForm = () => {
  const [state, action] = useActionState(actionForm, undefined);

  return (
    <form action={action} className="max-w-md mx-auto space-y-6 pt-10">
      {/* Informations de base */}
      <div className="space-y-2">
        <Label htmlFor="username">Pseudo</Label>
        <Input 
          type="text" 
          id="username" 
          name="username" 
          defaultValue={state?.fieldsValues?.username} 
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea 
          id="bio" 
          name="bio" 
          rows={4}
          defaultValue={state?.fieldsValues?.bio} 
        />
      </div>

      {/* Réseaux sociaux */}
      <div className="space-y-4">
        <h3 className="font-semibold">Réseaux sociaux</h3>
        
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input 
            type="url" 
            id="linkedin" 
            name="linkedin" 
            placeholder="https://linkedin.com/in/..."
            defaultValue={state?.fieldsValues?.linkedin} 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="github">GitHub</Label>
          <Input 
            type="url" 
            id="github" 
            name="github" 
            placeholder="https://github.com/..."
            defaultValue={state?.fieldsValues?.github} 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="twitter">Twitter</Label>
          <Input 
            type="url" 
            id="twitter" 
            name="twitter" 
            placeholder="https://x.com/..."
            defaultValue={state?.fieldsValues?.twitter} 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Site web</Label>
          <Input 
            type="url" 
            id="website" 
            name="website" 
            placeholder="https://..."
            defaultValue={state?.fieldsValues?.website} 
          />
        </div>
      </div>

      <Button type="submit" className="w-full">Enregistrer</Button>

      {state?.errors && (
        <div className="text-red-500 text-sm">
          {Object.values(state.errors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      {state?.message && (
        <p className="text-green-500 text-sm">{state.message}</p>
      )}
    </form>
  );
};
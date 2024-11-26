'use client';

import { useState } from 'react';
import { useActionState, startTransition } from 'react';
import { actionForm } from './form-mentee.action';
import { Input } from '@/presentation/components/ui/input';
import { Button } from '@/presentation/components/ui/button';
import { Label } from '@/presentation/components/ui/label';
import { Textarea } from '@/presentation/components/ui/textarea';

import { Badge } from '@/presentation/components/ui/badge';

type StackInputProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

const StackInput = ({ value, onChange }: StackInputProps) => {
  const [pendingStack, setPendingStack] = useState('');

  const addTag = () => {
    if (pendingStack.trim() && !value.includes(pendingStack.trim())) {
      onChange([...value, pendingStack.trim()]);
      setPendingStack('');
    }
  };

  const removeTag = (tag: string) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
		<div className="flex flex-wrap gap-2 border rounded-md shadow-sm p-2">
			<input
				className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
				placeholder="Ajouter un tag"
				value={pendingStack}
				onChange={(e) => setPendingStack(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ',') {
						e.preventDefault();
						addTag();
					}
				}}
			/>
      {value.map((tag) => (
        <Badge key={tag} variant="secondary">
          {tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            &times;
          </button>
        </Badge>
      ))}
    </div>
  );
};

export const FormMenteeOnBoarding = () => {
  const [state, action] = useActionState(actionForm, undefined);

  // État pour les tags
	const [stacks, setStacks] = useState<string[]>(state?.fieldsValues?.stacks || []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Ajoute les tags dans le formulaire avant soumission
    formData.set('stacks', JSON.stringify(stacks));

    startTransition(() => {
			action(formData);
		});
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 pt-10">
      <div className="space-y-2">
        <Label htmlFor="username">Pseudo (obligatoire)</Label>
        <Input
          type="text"
          id="username"
          name="username"
          defaultValue={state?.fieldsValues?.username}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio (obligatoire)</Label>
        <Textarea
          id="bio"
          name="bio"
          rows={4}
          defaultValue={state?.fieldsValues?.bio}
        />
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold">Les stacks que tu souhaites voir avec ton mentor</h3>

      <div className="space-y-2">
        <Label>Technologies (obligatoire)</Label>
        <StackInput value={stacks} onChange={setStacks} />
      </div>
		</div>
				
      {/* Réseaux sociaux */}
      <div className="space-y-4">
        <h3 className="font-semibold">Tes réseaux sociaux</h3>

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


      <Button type="submit" className="w-full">
        Enregistrer
      </Button>

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

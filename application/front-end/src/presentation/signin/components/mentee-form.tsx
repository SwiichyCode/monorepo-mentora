'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { signInMenteeSchema } from './mentee-form-schema';
import { Form } from '@/presentation/components/ui/form';
import { InputForm } from '@/presentation/components/ui/input-form';
import { Button } from '@/presentation/components/ui/button';

export const MenteeForm = () => {
  const form = useForm<z.infer<typeof signInMenteeSchema>>({
    resolver: zodResolver(signInMenteeSchema),
    defaultValues: {
      pseudo: '',
    },
  });

  function onSubmit(values: z.infer<typeof signInMenteeSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <InputForm control={form.control} name="pseudo" label="Pseudo" />
        <Button type="submit">Sign in</Button>
      </form>
    </Form>
  );
};

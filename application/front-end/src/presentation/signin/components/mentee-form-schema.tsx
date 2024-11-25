import { z } from 'zod';

export const signInMenteeSchema = z.object({
  pseudo: z.string().min(2, {
    message: 'Pseudo must be at least 2 characters.',
  }),
});

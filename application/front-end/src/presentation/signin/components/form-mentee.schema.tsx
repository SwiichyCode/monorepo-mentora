import { z } from 'zod';

export const signInMenteeSchema = z.object({
  username: z.string().min(2, {
    message: 'Pseudo doit contenir au moins 2 caractères.',
  }),
  bio: z.string().min(10, {
    message: 'Bio doit contenir au moins 10 caractères.',
  }),
  linkedin: z
    .string()
    .url({
      message: 'LinkedIn doit être une URL valide.',
    })
    .optional()
    .or(z.literal('')),
  github: z
    .string()
    .url({
      message: 'GitHub doit être une URL valide.',
    })
    .optional()
    .or(z.literal('')),
  twitter: z
    .string()
    .url({
      message: 'Twitter doit être une URL valide.',
    })
    .optional()
    .or(z.literal('')),
  website: z
    .string()
    .url({
      message: 'Website doit être une URL valide.',
    })
    .optional()
    .or(z.literal('')),
});

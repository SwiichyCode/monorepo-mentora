'use server';

import { signInMenteeSchema } from './form-mentee.schema';

type AuthFormState =
  | {
      errors?: {
        username?: string[];
        bio?: string[];
        linkedin?: string[];
        github?: string[];
        twitter?: string[];
        website?: string[];
      };
      fieldsValues?: {
        username: string;
        bio: string;
        linkedin: string;
        github: string;
        twitter: string;
        website?: string;
      };
      message?: string;
    }
  | undefined;

export async function actionForm(state: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const initialFields = {
    username: String(formData.get('username')),
    bio: String(formData.get('bio')),
    linkedin: String(formData.get('linkedin')),
    github: String(formData.get('github')),
    twitter: String(formData.get('twitter')),
    website: String(formData.get('website')),
  };

  // Validate the form data
  const validatedFields = signInMenteeSchema.safeParse({
    username: formData.get('username'),
    bio: formData.get('bio'),
    linkedin: formData.get('linkedin'),
    github: formData.get('github'),
    twitter: formData.get('twitter'),
    website: formData.get('website'),
  });

  // If the form data is invalid, return the errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      fieldsValues: {
        username: initialFields.username,
        bio: initialFields.bio,
        linkedin: initialFields.linkedin,
        github: initialFields.github,
        twitter: initialFields.twitter,
        website: initialFields.website,
      },
      message: "Quelque chose s'est mal passé. Veuillez vérifier les erreurs ci-dessous.",
    };
  }

  return {
    message: 'Les données ont été validées avec succès.',
  };
}

'use server';

import { signInMenteeSchema } from './mentee-form-schema';

type AuthFormState =
  | {
      errors?: {
        pseudo?: string[];
      };
      fieldsValues?: {
        pseudo: string;
      };
      message?: string;
    }
  | undefined;

export async function actionForm(state: AuthFormState, formData: FormData): Promise<AuthFormState> {
  const initialFields = {
    pseudo: String(formData.get('pseudo')),
  };

  // Validate the form data
  const validatedFields = signInMenteeSchema.safeParse({
    pseudo: formData.get('pseudo'),
  });

  // If the form data is invalid, return the errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      fieldsValues: {
        pseudo: initialFields.pseudo,
      },
      message: 'Something went wrong',
    };
  }

  return {
    message: 'Form submitted',
  };
}

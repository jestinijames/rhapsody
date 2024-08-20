import { z } from 'zod';

export const ContactFormSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(140, 'You have exceeded maximum number of characters allowed'),
    email: z
      .string()
      .min(1, 'Email is required')
      .max(140, 'You have exceeded maximum number of characters allowed')
      .email('Invalid email.'),
    inquiry: z.boolean().default(false),
    instrument: z
      .string()
      .max(140, 'You have exceeded maximum number of characters allowed')
      .optional(),
    duration: z
      .string()
      .max(140, 'You have exceeded maximum number of characters allowed')
      .optional(),
    phone: z
      .string()
      .max(140, 'You have exceeded maximum number of characters allowed')
      .optional(),
    message: z
      .string()
      .min(1, 'Message is required')
      .max(200, 'You have exceeded maximum number of characters allowed'),
  })
  .superRefine((data, ctx) => {
    if (data.inquiry === true) {
      if (!data.instrument || data.instrument.trim() === '') {
        ctx.addIssue({
          code: 'custom', // Use 'custom' or another code if you need a specific type
          path: ['instrument'],
          message: 'Instrument is required.',
        });
      }
      if (!data.duration || data.duration.trim() === '') {
        ctx.addIssue({
          code: 'custom', // Use 'custom' or another code if you need a specific type
          path: ['duration'],
          message: 'Duration is required when inquiry is instrument.',
        });
      }
    }
  });

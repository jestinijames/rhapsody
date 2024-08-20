'use server';

import { Resend } from 'resend';
import { z } from 'zod';

import ContactFormEmail from '@/components/contact/contact-form-email';
import { ContactFormSchema } from '@/components/contact/schema';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, phone, inquiry, instrument, duration, message } =
      result.data;
    try {
      const data = await resend.emails.send({
        from: 'Rhapsody Music Academy. <rhpsddmn@gmail.com>',
        to: ['rhpsddmn@gmail.com'],
        subject: 'Contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({
          name,
          email,
          phone,
          inquiry,
          instrument,
          duration,
          message,
        }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

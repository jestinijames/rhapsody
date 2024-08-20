'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { sendEmail } from '@/components/contact/_actions';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

import RightArrow from '@/assets/icons/right-arrow';
import { instruments, lessonDuration } from '@/constant/config';

import { ContactFormSchema } from './schema';

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      inquiry: false,
    },
  });
  const {
    handleSubmit,
    reset,
    formState: {
      isSubmitting,
      //errors
    },
  } = form;

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    //console.log(data);
    const result = await sendEmail(data);

    if (result?.success) {
      toast({
        variant: 'success',
        title: 'Email has been sent!',
        description: 'Thank you. We have received your email',
      });
      //   //console.log({ data: result.data });

      reset();
      return;
    }

    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
    });
  };

  const inquiryType = form.watch('inquiry') as boolean;

  //console.log('errors', errors);

  return (
    <Form {...form}>
      <form id='contactForm' onSubmit={handleSubmit(processForm)}>
        <InquiryTypeField isSubmitting={isSubmitting} />
        <Inputfield isSubmitting={isSubmitting} />
        <div className='flex sm:flex-row flex-col gap-x-5'>
          <Emailfield isSubmitting={isSubmitting} />
          <Phonefield isSubmitting={isSubmitting} />
        </div>
        {inquiryType === true && (
          <>
            <div className='flex sm:flex-row flex-col gap-x-5'>
              <InstrumentField isSubmitting={isSubmitting} />
              <LessonDurationField isSubmitting={isSubmitting} />
            </div>
          </>
        )}
        <MessageField isSubmitting={isSubmitting} />
        <div className='flex justify-end'>
          <Button
            type='submit'
            variant='boutline'
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}

            <RightArrow height='22' width='35' />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;

function Inputfield({ isSubmitting }: { isSubmitting: boolean }) {
  const { control, register } = useFormContext<ContactFormInputs>();

  return (
    <FormField
      control={control}
      name='name'
      render={() => (
        <FormItem>
          <FormControl>
            <Input
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              placeholder='Your Name *'
              type='text'
              className='mb-[13px]'
              {...register('name')}
            />
          </FormControl>

          <FormMessage className='mb-2' />
        </FormItem>
      )}
    />
  );
}

function Emailfield({ isSubmitting }: { isSubmitting: boolean }) {
  const { control, register } = useFormContext<ContactFormInputs>();

  return (
    <FormField
      control={control}
      name='email'
      render={() => (
        <FormItem className='w-full'>
          <FormControl>
            <Input
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              placeholder='Your Email *'
              type='email'
              className='mb-[13px]'
              {...register('email')}
            />
          </FormControl>

          <FormMessage className='mb-2' />
        </FormItem>
      )}
    />
  );
}

function Phonefield({ isSubmitting }: { isSubmitting: boolean }) {
  const { control, register } = useFormContext<ContactFormInputs>();

  return (
    <FormField
      control={control}
      name='phone'
      render={() => (
        <FormItem className='w-full'>
          <FormControl>
            <Input
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              placeholder='Your Phone'
              type='text'
              className='mb-[13px]'
              {...register('phone')}
            />
          </FormControl>

          <FormMessage className='mb-2' />
        </FormItem>
      )}
    />
  );
}

function InquiryTypeField({ isSubmitting }: { isSubmitting: boolean }) {
  const { control, watch } = useFormContext<ContactFormInputs>();

  const inquiryType = watch('inquiry') as boolean;

  const inquiryHeader = inquiryType ? 'Specific Instrument' : 'General Inquiry';
  const inquiryDescription = inquiryType
    ? 'Ask about a specific instrument and lesson duration.'
    : 'General questions or concerns.';

  return (
    <div className='mb-2'>
      <h3 className='mb-4 text-lg font-medium'>
        What is the nature of your inquiry?
      </h3>
      <div className='space-y-4'>
        <FormField
          control={control}
          name='inquiry'
          render={({ field }) => (
            <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
              <div className='space-y-0.5'>
                <FormLabel className='text-base'>{inquiryHeader}</FormLabel>
                <FormDescription>{inquiryDescription}</FormDescription>
              </div>
              <FormControl>
                <Switch
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

function InstrumentField({ isSubmitting }: { isSubmitting: boolean }) {
  const { control } = useFormContext<ContactFormInputs>();

  return (
    <FormField
      control={control}
      name='instrument'
      render={({ field }) => (
        <FormItem className='w-full'>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
          >
            <FormControl>
              <SelectTrigger className='mb-[13px]'>
                <SelectValue placeholder='Select an Instrument' />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {instruments.map((instrument, index) => (
                <SelectItem key={index} value={instrument.value}>
                  {instrument.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function LessonDurationField({ isSubmitting }: { isSubmitting: boolean }) {
  const { control } = useFormContext<ContactFormInputs>();

  return (
    <FormField
      control={control}
      name='duration'
      render={({ field }) => (
        <FormItem className='w-full'>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
          >
            <FormControl>
              <SelectTrigger className='mb-[13px]'>
                <SelectValue placeholder='Select a duration' />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {lessonDuration.map((duration, index) => (
                <SelectItem key={index} value={duration.value}>
                  {duration.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function MessageField({ isSubmitting }: { isSubmitting: boolean }) {
  const { control, register } = useFormContext<ContactFormInputs>();
  return (
    <FormField
      control={control}
      name='message'
      render={() => (
        <FormItem className='w-full'>
          <FormControl>
            <Textarea
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              placeholder='Type your message'
              className='min-h-[223px] mb-[13px]'
              {...register('message')}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}

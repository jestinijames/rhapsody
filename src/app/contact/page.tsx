import Image from 'next/image';

import PageLayout from '@/components/layout';
import { Button } from '@/components/ui/button';
import InputField from '@/components/ui/craft/input-field';
import SectionTitle from '@/components/ui/craft/section-title';
import TextAreaFiled from '@/components/ui/craft/text-area-field';

import RightArrow from '@/assets/icons/right-arrow';
import from_img from '@/assets/images/contact-image.jpg';

export default function ContactPage() {
  return (
    <PageLayout>
      <main>
        <section>
          <div className='container-fluid '>
            <SectionTitle
              sectionName='Inquiry'
              sectionTitle='Have a Question for us?'
              sectionDesc='Write us directly'
            />
          </div>
          <div className='container lg:pt-30 2sm:pt-20 p-14'>
            <div className='grid lg:grid-cols-2 gap-5'>
              <Image
                src={from_img}
                loading='lazy'
                alt='contact-form'
                className='w-full h-auto'
              />
              <form>
                <InputField
                  placeholder='Your Name'
                  type='text'
                  className='mb-[13px]'
                />
                <div className='flex sm:flex-row flex-col gap-x-5'>
                  <InputField
                    placeholder='Your Email'
                    type='email'
                    className='mb-[13px]'
                  />
                  <InputField
                    placeholder='Phone Number'
                    type='number'
                    className='mb-[13px]'
                  />
                </div>
                <div className='flex sm:flex-row flex-col gap-x-5'>
                  <InputField
                    placeholder='Instrument'
                    type='text'
                    className='mb-[13px]'
                  />
                  <InputField
                    placeholder='Lesson Duration'
                    type='text'
                    className='mb-[13px]'
                  />
                </div>
                <div className='flex sm:flex-row flex-col gap-x-5'>
                  <InputField
                    placeholder='Availability'
                    type='text'
                    className='mb-[13px]'
                  />
                  <InputField
                    placeholder='Referrals (if any)'
                    type='text'
                    className='mb-[13px]'
                  />
                </div>
                <TextAreaFiled
                  placeholder='Type your massage'
                  className='min-h-[223px] mb-[13px]'
                />
                <div className='flex justify-end'>
                  <Button variant='boutline'>
                    Send message <RightArrow height='22' width='35' />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

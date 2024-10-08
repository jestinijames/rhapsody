'use client';

import ContactForm from '@/components/contact/contact-form';
import PageLayout from '@/components/layout';
import OptimizedImage from '@/components/ui/craft/optimized-image';
import SectionTitle from '@/components/ui/craft/section-title';

import from_img from '@/assets/images/contact.jpg';

export default function ContactPage() {
  return (
    <PageLayout header='3'>
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
              <OptimizedImage
                useSkeleton
                src={from_img}
                loading='lazy'
                alt='contact-form'
                className='w-full h-auto'
              />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

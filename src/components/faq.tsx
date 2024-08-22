'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionSidebarImg from '@/components/ui/craft/section-sidebar-img';
import SectionTitle from '@/components/ui/craft/section-title';

import faq_img from '@/assets/images/faq.png';
import { faqData } from '@/constant/config';

const Faq = ({ className }: { className?: string }) => {
  return (
    <section className={`pt-20 ${className}`}>
      <div className='container-fluid'>
        <SectionTitle
          sectionName='FAQ'
          sectionTitle='Frequently Asked Questions'
          sectionDesc='Have any questions need answering?'
        />
      </div>
      <div className='container lg:pt-30 2sm:pt-20 pt-14'>
        <div className='grid lg:grid-cols-[40%_auto] items-center gap-17.5'>
          <div>
            <SectionSidebarImg img={faq_img} section_name='faq-background' />
          </div>

          <div>
            <Accordion type='single' defaultValue='1' collapsible>
              {faqData.map(({ id, ans, question }) => {
                return (
                  <AccordionItem key={id} value={id} className='mb-2.5'>
                    <AccordionTrigger className='text-xl font-semibold border border-primary sm:px-12.5 px-6'>
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className='mt-[22px] sm:px-12.5 px-6'>
                      {ans}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

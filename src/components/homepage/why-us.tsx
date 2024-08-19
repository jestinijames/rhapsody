import React from 'react';

import CardDetails from '@/components/ui/craft/card-details';
import SectionTitle from '@/components/ui/craft/section-title';

import card_img from '@/assets/images/why-us.png';

const WhyUs = () => {
  return (
    <section>
      <div className='container-fluid '>
        <SectionTitle
          sectionName='Why Us?'
          sectionTitle='Why Choose Rhapsody Academy?'
          sectionDesc='Unparalleled music education tailored to your unique journey.'
        />
      </div>
      <div className='lg:pt-30 2sm:pt-20 pt-14'>
        <div>
          <CardDetails
            card_desc={
              <>
                <p className='text-secondary-foreground mb-7'>
                  "Studies show that half of aspiring musicians quit due to a
                  lack of support and motivation, with disorganized lessons only
                  adding to their frustration."
                </p>
                <p className='text-secondary-foreground mb-7'>
                  "Feeling discouraged? Just like Bobby McFerrin's hit 'Don't
                  Worry, Be Happy,' we're here to turn things around with joyful
                  lessons that ignite your creativity and offer unwavering
                  support. Let's rock together!"
                </p>
              </>
            }
            card_img={card_img}
            order='lg:order-1 order-0'
            position='lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2'
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

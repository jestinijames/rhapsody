import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/ui/craft/section-title';
import Title from '@/components/ui/craft/title';

import RightArrow from '@/assets/icons/right-arrow';
import { teamData } from '@/constant/config';

const TeamSingle = ({ slug }: { slug: string }) => {
  const member = findMemberBySlug(slug);

  const router = useRouter();

  // Format the member name as a string with <br /> tags
  const formattedName = member?.name.split(' ').join(' <br> ');
  useEffect(() => {
    if (!member) {
      router.push('/not-found'); // Redirect to the not-found page
    }
  }, [member, router]);

  if (!member) {
    return null; // Or a loading state while redirecting
  }

  return (
    <section>
      <div className='container-fluid '>
        <SectionTitle
          sectionName='Musician'
          sectionTitle={formattedName || ''}
          sectionDesc={member?.position || ''}
        />
      </div>
      <div className='container lg:pt-30 2sm:pt-20 pt-14'>
        <div className='grid xl:grid-cols-[auto_538px] lg:grid-cols-[auto_350px] md:grid-cols-[auto_400px] 2xl:gap-[132px] gap-16 items-start'>
          <div>
            <div className='mb-12.5'>
              <Title title_text='Brief Bio:' />
              <p>{member.bio}</p>
            </div>
            <div className='pt-12.5'>
              <Title title_text='Expertise and Specializations:' />
              <ul>
                <li>
                  <h5 className='font-bold'>Musical Focus: </h5>
                  <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                    {member.focus}
                  </p>
                </li>
                <li className='pt-7.5'>
                  <h5 className='font-bold'>Specializations: </h5>
                  <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                    {member.specializations}
                  </p>
                </li>
              </ul>
            </div>
            <div className='pt-20'>
              <Title title_text='Teaching  Philosophy:' />
              <ul>
                <li>
                  <h5 className='font-bold'>Philosophy Overview: </h5>
                  <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                    {member.philosophy}
                  </p>
                </li>
                <li className='pt-7.5'>
                  <h5 className='font-bold'>Student-Centric Approach: </h5>
                  <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                    {member.approach}
                  </p>
                </li>
              </ul>
            </div>
            <div className='pt-20'>
              <Title title_text='Education and Credentials:' />
              <ul>
                <li>
                  <h5 className='font-bold'>Professional Background: </h5>
                  <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                    {member.background}
                  </p>
                </li>
                <li className='pt-7.5'>
                  <h5 className='font-bold'>Professional Credentials: </h5>
                  <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                    {member.credentials}
                  </p>
                </li>
              </ul>
            </div>
            <div className='pt-20'>
              <Title title_text='Awards and Recognition:' />
              <ul>
                <li>
                  <h5 className='font-bold'>Achievements: </h5>
                  <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                    {member.achievements}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className='sticky top-16'>
            <Image
              src={member?.img || ''}
              loading='lazy'
              alt='Russell Otten'
              className='w-full'
            />
            <Link href='' className='mt-11 inline-block'>
              <Button variant='boutline' className='after:left-0'>
                Connect to Linkedin <RightArrow width='53' height='22' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSingle;

// Function to find member by slug
function findMemberBySlug(slug: string) {
  return teamData.find((member) => member.slug === slug);
}

import TeamCard from '@/components/faculty/team-card';
import Feedback from '@/components/homepage/feedback';
import PageLayout from '@/components/layout';
import SectionTitle from '@/components/ui/craft/section-title';

import { teamData } from '@/constant/config';

export default function FacultyPage() {
  return (
    <PageLayout header='3'>
      <main>
        <section className='pt-20'>
          <div className='container-fluid '>
            <SectionTitle
              sectionName='Team'
              sectionTitle='Teachers of Rhapsody'
              sectionDesc='Where Imagination Takes Flight, and Excellence Blossoms'
            />
          </div>
          <div className='container lg:pt-30 2sm:pt-20 pt-14'>
            <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-7'>
              {teamData.map(
                ({ id, img, name, position, social_link, slug }) => (
                  <TeamCard
                    key={id}
                    img={img}
                    name={name}
                    position={position}
                    social_link={social_link}
                    slug={slug}
                  />
                )
              )}
            </div>
          </div>
        </section>
        <Feedback />
      </main>
    </PageLayout>
  );
}

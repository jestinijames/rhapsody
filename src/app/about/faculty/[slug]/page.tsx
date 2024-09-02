'use client';
import TeamSingle from '@/components/faculty/team-single';
import Feedback from '@/components/homepage/feedback';
import PageLayout from '@/components/layout';

export default function FacultySinglePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <PageLayout header='2'>
      <main>
        <TeamSingle slug={params.slug} />
        <Feedback />
      </main>
    </PageLayout>
  );
}

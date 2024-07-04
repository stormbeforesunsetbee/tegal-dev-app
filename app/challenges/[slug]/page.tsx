import ChallengeDetailSection from '@/components/organisms/ChallengeDetailSection';
import Template from '@/components/templates/Template';
import getChallengeDetailPageContent from '@/data/remote/strapi/single/get-challenge-detail-page-content';

export default async function ChallengeDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const challengeDetailPageContent = await getChallengeDetailPageContent();

  return (
    <Template>
      <ChallengeDetailSection
        challengeDetailHeading={challengeDetailPageContent?.data?.heading}
      />
    </Template>
  );
}

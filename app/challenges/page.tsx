import ChallengeSection from '@/components/organisms/ChallengeSection';
import Template from '@/components/templates/Template';
import getAllNewestChallengesByPage from '@/data/remote/strapi/collection/get-all-newest-challenges-by-page';
import getChallengesPageContent from '@/data/remote/strapi/single/get-challenges-page-content';

export default async function Challenges() {
  const challengesPageContent = await getChallengesPageContent();
  const headlineNewestChallenges = await getAllNewestChallengesByPage(1);

  return (
    <Template>
      <ChallengeSection
        challengeHeading={challengesPageContent?.data?.heading}
        headlineNewestChallenges={headlineNewestChallenges?.data}
      />
    </Template>
  );
}

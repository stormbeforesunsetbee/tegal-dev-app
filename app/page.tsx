import ActivitySection from '@/components/molecules/ActivitySection';
import HeroSection from '@/components/organisms/HeroSection';
import Template from '@/components/templates/Template';
import {
  getCommunityPhotos,
  getHomePageContent,
  getInvitationLinks,
  postNewsLetterSubscriber,
} from '@/data/remote';

export default async function Home() {
  const homePageContent = await getHomePageContent();
  const invitationLinks = await getInvitationLinks();
  const addNewsletterSubscriber = async (email: string) => {
    'use server';
    postNewsLetterSubscriber(email);
  };
  const communityPhotos = await getCommunityPhotos();

  return (
    <Template>
      <HeroSection
        heroHeading={homePageContent?.data?.attributes?.hero_heading}
        heroBody={homePageContent?.data?.attributes?.hero_description}
        invitationLinks={invitationLinks}
        addNewsletterSubscriber={addNewsletterSubscriber}
        communityPhotos={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${communityPhotos?.data[0]?.attributes?.photos?.data?.attributes?.url}`}
      />
      <ActivitySection />
    </Template>
  );
}

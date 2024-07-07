import AboutSection from '@/components/organisms/AboutSection';
import ActivitySection from '@/components/organisms/ActivitySection';
import BlogSection from '@/components/organisms/BlogSection';
import ChallengeSection from '@/components/organisms/ChallengeSection';
import CommunityPartnerSection from '@/components/organisms/CommunityPartnerSection';
import ContactSection from '@/components/organisms/ContactSection';
import EventSection from '@/components/organisms/EventSection';
import FAQSection from '@/components/organisms/FAQSection';
import HeroSection from '@/components/organisms/HeroSection';
import MemberSection from '@/components/organisms/MemberSection';
import Template from '@/components/templates/Template';
import getAllCommunityActivities from '@/data/remote/strapi/collection/get-all-community-activities';
import getAllCommunityBenefits from '@/data/remote/strapi/collection/get-all-community-benefits';
import getAllCommunityHastags from '@/data/remote/strapi/collection/get-all-community-hashtags';
import getAllCommunityPartners from '@/data/remote/strapi/collection/get-all-community-partners';
import getAllFAQs from '@/data/remote/strapi/collection/get-all-faqs';
import getAllInvitationLinks from '@/data/remote/strapi/collection/get-all-invitation-links';
import getHeadlineNewestBlogs from '@/data/remote/strapi/collection/get-headline-newest-blogs';
import getHeadlineNewestChallenges from '@/data/remote/strapi/collection/get-headline-newest-challenges';
import getHeadlineNewestEvents from '@/data/remote/strapi/collection/get-headline-newest-events';
import getHomePageContent from '@/data/remote/strapi/single/get-home-page-content';

export default async function Home() {
  const homePageContent = await getHomePageContent();
  const invitationLinks = await getAllInvitationLinks();
  const communityBenefits = await getAllCommunityBenefits();
  const communityHashtags = await getAllCommunityHastags();
  const headlineNewestEvents = await getHeadlineNewestEvents();
  const headlineNewestChallenges = await getHeadlineNewestChallenges();
  const headlineNewestBlogs = await getHeadlineNewestBlogs();
  const communityActivities = await getAllCommunityActivities();
  const communityPartners = await getAllCommunityPartners();
  const faqs = await getAllFAQs();

  return (
    <Template>
      <HeroSection
        heroHeading={homePageContent?.data?.hero_section_heading}
        heroBody={homePageContent?.data?.hero_section_body}
        heroImages={homePageContent?.data?.hero_section_images[0]?.url}
        invitationLinks={invitationLinks?.data}
        communityBenefits={communityBenefits?.data}
        communityHashtags={communityHashtags?.data}
      />
      <EventSection
        eventHeading={homePageContent?.data?.event_section_heading}
        events={headlineNewestEvents?.data}
      />
      <ChallengeSection
        challengeHeading={homePageContent?.data?.challenge_section_heading}
        challenges={headlineNewestChallenges?.data}
      />
      <BlogSection
        blogHeading={homePageContent?.data?.blog_section_heading}
        blogs={headlineNewestBlogs?.data}
      />
      <AboutSection
        aboutHeading={homePageContent?.data?.about_section_heading}
        aboutBody={homePageContent?.data?.about_section_body}
      />
      <ActivitySection
        activityHeading={homePageContent?.data?.activity_section_heading}
        communityActivities={communityActivities?.data}
      />
      <MemberSection
        membershipHeading={homePageContent?.data?.member_section_heading}
      />
      <ContactSection
        contactHeading={homePageContent?.data?.contact_section_heading}
      />
      <CommunityPartnerSection communityPartners={communityPartners?.data} />
      <FAQSection
        faqHeading={homePageContent?.data?.faq_section_heading}
        faqs={faqs?.data}
      />
    </Template>
  );
}

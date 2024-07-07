export default async function getHomePageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/home-page-content?populate=hero_section_images`,
    { cache: 'no-store' },
  );

  return response.json();
}

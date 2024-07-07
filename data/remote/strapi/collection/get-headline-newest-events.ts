export default async function getHeadlineNewestEvents() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events?sort=publishedAt:desc&pagination[start]=0&pagination[limit]=3&populate=*`,
    { cache: 'no-store' },
  );

  return response.json();
}

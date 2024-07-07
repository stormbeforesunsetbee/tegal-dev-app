export default async function getAllNewestEventsByPage(page: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events?sort=publishedAt:desc&pagination[page]=${page}&populate=*`,
    { cache: 'no-store' },
  );

  return response.json();
}

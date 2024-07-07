export default async function getAllMerchandises(page: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/merchandises?sort=publishedAt:desc&pagination[page]=${page}&populate=*`,
    { cache: 'no-store' },
  );

  return response.json();
}

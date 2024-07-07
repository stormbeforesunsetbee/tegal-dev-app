export default async function getAllCommunityPartners() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/community-partners?populate=image`,
    { cache: 'no-store' },
  );

  return response.json();
}

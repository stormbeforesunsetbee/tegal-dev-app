export default async function getAllCommunityHastags() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/community-hashtags`,
    { cache: 'no-store' },
  );

  return response.json();
}

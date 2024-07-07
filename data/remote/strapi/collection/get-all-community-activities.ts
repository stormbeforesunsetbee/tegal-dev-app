export default async function getAllCommunityActivities() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/community-activities?populate=images`,
    { cache: 'no-store' },
  );

  return response.json();
}

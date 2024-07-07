export default async function getChallengesPageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/challenges-page-content`,
    { cache: 'no-store' },
  );

  return response.json();
}

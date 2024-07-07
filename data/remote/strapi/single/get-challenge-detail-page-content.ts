export default async function getChallengeDetailPageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/challenge-detail-page-content`,
    { cache: 'no-store' },
  );

  return response.json();
}

export default async function getEventDetailPageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/event-detail-page-content`,
    { cache: 'no-store' },
  );

  return response.json();
}

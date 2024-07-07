export default async function getEventsPageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events-page-content`,
    { cache: 'no-store' },
  );

  return response.json();
}

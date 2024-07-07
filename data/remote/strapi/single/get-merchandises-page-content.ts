export default async function getMerchandisesPageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/merchandises-page-content`,
    { cache: 'no-store' },
  );

  return response.json();
}

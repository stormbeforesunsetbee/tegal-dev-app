export default async function getFooterContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/footer-content`,
    { cache: 'no-store' },
  );

  return response.json();
}

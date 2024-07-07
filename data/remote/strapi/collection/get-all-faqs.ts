export default async function getAllFAQs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/faqs`,
    { cache: 'no-store' },
  );

  return response.json();
}

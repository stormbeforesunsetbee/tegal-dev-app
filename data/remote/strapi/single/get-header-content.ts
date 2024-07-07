export default async function getHeaderContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/header-content?populate=*`,
    { cache: 'no-store' },
  );

  return response.json();
}

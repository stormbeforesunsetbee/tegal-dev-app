export default async function getBlogsPageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/blogs-page-content`,
    { cache: 'no-store' },
  );

  return response.json();
}

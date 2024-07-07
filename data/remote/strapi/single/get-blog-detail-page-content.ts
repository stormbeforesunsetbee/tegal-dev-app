export default async function getBlogDetailPageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/blog-detail-page-content`,
    { cache: 'no-store' },
  );

  return response.json();
}

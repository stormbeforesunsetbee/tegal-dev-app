export default async function getHeadlineNewestBlogs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/blogs?sort=publishedAt:desc&pagination[start]=0&pagination[limit]=3&populate=*`,
    { cache: 'no-store' },
  );

  return response.json();
}

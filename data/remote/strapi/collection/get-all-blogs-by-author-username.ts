export default async function getAllBlogsByAuthorUsername(
  authorUsername: string,
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/blogs?filters[user][username]=${authorUsername}&populate=*`,
    {
      cache: 'no-store',
    },
  );

  return response.json();
}

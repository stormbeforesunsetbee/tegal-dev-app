export default async function getHeadlineNewestEvents() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events?sort=publishedAt:desc&pagination[start]=0&pagination[limit]=3&populate=*`,
      { next: { revalidate: 0 } },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export default async function getHeadlineNewestMerchandises() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/merchandises?sort=publishedAt:desc&pagination[start]=0&pagination[limit]=3&populate=*`,
      { next: { revalidate: 0 } },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

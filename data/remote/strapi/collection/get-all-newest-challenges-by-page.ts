export default async function getAllNewestChallengesByPage(page: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/challenges?sort=publishedAt:desc&pagination[page]=${page}&populate=*`,
      { next: { revalidate: 0 } },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

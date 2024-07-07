export default async function getRSVPByUserId(userId: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/rsvps?filters[user]=${userId}&populate=*`,
    { cache: 'no-store' },
  );

  return response.json();
}

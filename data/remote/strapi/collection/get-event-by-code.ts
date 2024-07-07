export default async function getEventByCode(code: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events?filters[code]=${code}&populate=*`,
    { cache: 'no-store' },
  );

  return response.json();
}

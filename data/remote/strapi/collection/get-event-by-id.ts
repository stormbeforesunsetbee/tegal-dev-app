export default async function getEventById(eventId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events/${eventId}`,
    { cache: 'no-store' },
  );

  return response.json();
}

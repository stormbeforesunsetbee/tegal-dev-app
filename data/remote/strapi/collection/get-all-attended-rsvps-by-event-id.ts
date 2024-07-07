export default async function getAllAttendedRSVPsByEventId(eventId: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/rsvps?filters[is_attended]=true&filters[event]=${eventId}&populate=*`,
    {
      cache: 'no-store',
    },
  );

  return response.json();
}

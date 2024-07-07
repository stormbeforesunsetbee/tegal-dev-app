export default async function getRSVPByAttendanceCode(attendanceCode: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/rsvps?filters[attendance_code]=${attendanceCode}&populate=*`,
    { cache: 'no-store' },
  );

  return response.json();
}

export default async function getUserByEmail(email: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/users?filters[email]=${email}`,
    { cache: 'no-store' },
  );

  return response.json();
}

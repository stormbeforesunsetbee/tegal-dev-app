export default async function getUserByUsername(username: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/users?filters[username]=${username}`,
    { cache: 'no-store' },
  );

  return response.json();
}

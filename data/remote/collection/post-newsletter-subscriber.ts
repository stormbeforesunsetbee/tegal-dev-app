export default async function postNewsLetterSubscriber(
  email: string,
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/newsletter-subscribers`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: { email } }),
    },
  );

  return response.json();
}

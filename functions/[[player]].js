export const onRequest = async ({ request }) => {
  const url = new URL(request.url);
  const response = await fetch(`${url.origin}/index.html`);

  return new Response(response.body, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};

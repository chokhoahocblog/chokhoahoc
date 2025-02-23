export const onRequest = async ({ request, env }) => {
  const url = new URL(request.url);
  
  // Fetch nội dung của index.html
  const response = await fetch(`${url.origin}/index.html`);
  
  // Trả về response với Content-Type chính xác
  return new Response(response.body, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
};

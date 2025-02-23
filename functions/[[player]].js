export const onRequest = async ({ request }) => {
  // Lấy nội dung file index.html từ Cloudflare Pages
  const url = new URL(request.url);
  const indexUrl = `${url.origin}/index.html`;

  const response = await fetch(indexUrl);

  // Kiểm tra nếu file tồn tại
  if (!response.ok) {
    return new Response("Không tìm thấy trang", { status: 404 });
  }

  // Trả về nội dung file index.html
  return new Response(response.body, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
};

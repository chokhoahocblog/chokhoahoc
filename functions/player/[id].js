export const onRequest = async (context) => {
  // Trả về nội dung file index.html khi truy cập /player/ID
  return context.env.ASSETS.fetch(new Request(new URL("/index.html", context.request.url), context.request));
};

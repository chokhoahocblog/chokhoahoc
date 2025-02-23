export async function onRequest(context) {
    const url = new URL(context.request.url);

    // Nếu request là file tĩnh (CSS, JS, MP4, v.v.), thì không xử lý, trả về file gốc từ Cloudflare Pages
    if (url.pathname.includes(".")) {
        return context.env.ASSETS.fetch(context.request);
    }

    // Nếu không phải file tĩnh, trả về index.html
    const indexHtml = await context.env.ASSETS.fetch(new URL('/index.html', context.request.url));

    if (!indexHtml.ok) {
        return new Response("Not Found", { status: 404 });
    }

    return new Response(await indexHtml.text(), {
        headers: {
            "Content-Type": "text/html",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
        }
    });
}
headers: {
    "Content-Type": "text/html",
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
    "Content-Security-Policy": "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:;"
}

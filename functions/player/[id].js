 ```javascript
 export async function onRequest({ params, request }) {
     const { id } = params;
     // Kiểm tra id, truy vấn cơ sở dữ liệu, v.v.
     // Nếu không tìm thấy, trả về 404:
     // if (!isValidId(id)) {
     //   return new Response("Not Found", { status: 404 });
     // }
     const filePath = './player/index.html';

     const file = await fetch(new URL(filePath, request.url));

     if (file.status === 404){
          return new Response("Not Found", { status: 404 });
     }


     return new Response(file.body, {
       headers: {
         'Content-Type': 'text/html',
       },
     });
 }

 ```
 * Giải thích code
    * `onRequest`: đây là hàm handler chính, được gọi khi có request đến `/player/<something>`.
    * `params`: chứa các tham số từ URL.  Trong trường hợp này, `params.id` sẽ chứa giá trị `id` từ URL.
    *  `fetch`:  dùng để truy cập và lấy file
    * `new URL`: Dùng để tạo url tương đối.
    * `file.body`: Dùng để lấy phần body từ kết quả fetch
    * Trả về `Response` với nội dung HTML và header `Content-Type: text/html`.
    * Thêm xử lý 404.

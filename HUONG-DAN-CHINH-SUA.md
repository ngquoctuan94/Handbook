# Cập nhật Handbook

## Nội dung bài học

Mỗi bài có một tệp JSON, ví dụ `lessons/core/02.json` là CORE-02.

- `id`: giữ nguyên để không làm thay đổi liên kết và tiến độ.
- `title.vi`, `title.en`: tiêu đề hai ngôn ngữ.
- `overview`, `terms`: tổng quan và thuật ngữ của bộ đọc chung.
- `chapters`: nội dung của CORE-01 và các bài dùng bộ đọc chung; `body` chứa bản Việt và Anh.
- `sections`: nội dung FPU-16; ở các bài còn lại đây là bản sao nội dung dùng cho công cụ kiểm tra hiện tại. Khi sửa các mục trong `chapters`, cập nhật `sections` tương ứng.
- `quiz`: câu hỏi, lựa chọn, `correct` tính từ 0 và giải thích.
- `figures`, `references`, `sourceNotes`: hình minh họa, nguồn và ghi chú của bộ đọc chung.
- `contentVersion`: đổi giá trị khi cập nhật bài để trình duyệt tải phiên bản mới.

Giữ các trường phân nhóm và thứ tự hiện có nếu chỉ cập nhật nội dung. Với các bài đã hoàn thiện thay cho bản ngắn cũ, cập nhật `contentVersion` để nhãn “Đang dự thảo” không còn được áp dụng cho phiên bản `4tab-2026-10-26`.

CORE-01 dùng HTML trong nội dung; các bài dùng bộ đọc chung và FPU-16 dùng Markdown theo khả năng của bộ đọc tương ứng. Không chép nguyên trang HTML độc lập lên `index.html` của website.

## Kiểm tra và triển khai

1. Sửa JSON và chép hình vào đúng thư mục.
2. Chạy `python tools/build_catalog.py` hoặc mở `tools/rebuild-catalog.bat` trên Windows.
3. Mở web qua máy chủ HTTP để kiểm tra cả VI/EN, các tab và câu hỏi.
4. Commit và đẩy lên nhánh `main` của repository này.
5. Vào tab **Actions** kiểm tra workflow **Publish Handbook**. GitHub Pages tự triển khai khi workflow thành công.

Nếu sửa giao diện hoặc chương trình, đổi tham số `?v=` của tài nguyên tương ứng trong `index.html`. Nếu thay danh mục, cập nhật tham số phiên bản của lệnh tải `data/catalog.json` trong `assets/app.js` để tránh bộ nhớ đệm cũ.

## Giao diện và tài nguyên

- `assets/app.js`: trang chủ, điều hướng, danh mục, thư viện và tiến độ.
- `assets/un-institute.css`: kiểu dáng chung.
- `assets/multitab-reader.js`, `assets/multitab-reader.css`: bộ đọc chung.
- `assets/core01-reader.*`, `assets/fpu16-reader.*`: hai bộ đọc riêng.
- `data/sources.json`, `data/source-summaries.json`: thư viện nguồn và mô tả Việt–Anh.

Tiến độ lưu trong trình duyệt người học; thay tệp trên GitHub không đồng bộ hoặc xóa dữ liệu trên thiết bị của họ. Khi nội dung câu hỏi thay đổi, điểm cũ có thể phản ánh phiên bản trước đó.

Biểu trưng UN trong `assets/un-emblem.svg`: Wikimedia Commons, tác giả Joowwww, public domain theo trang nguồn https://commons.wikimedia.org/wiki/File:Emblem_of_the_United_Nations.svg. Kiểm tra quyền sử dụng đối với mọi tài liệu và hình khác trước khi đưa lên công khai.

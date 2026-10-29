# Handbook — Học liệu Cảnh sát Liên hợp quốc

Website học tập với 48 bài: 18 CORE, 20 FPU và 10 IPO; bộ đọc 4 tab Việt–Anh, hình minh họa, câu hỏi và thư viện nguồn.

**Truy cập:** https://ngquoctuan94.github.io/Handbook/

## Chạy trên máy

```sh
python -m http.server 8151 --bind 127.0.0.1
```

Mở http://127.0.0.1:8151/. Không mở bằng `file://` vì website tải dữ liệu JSON.

## Cập nhật và triển khai

- Nội dung: `lessons/core/`, `lessons/fpu/`, `lessons/ipo/`.
- Kiểm tra và tạo danh mục: `python tools/build_catalog.py`.
- Khi đẩy thay đổi lên nhánh `main`, workflow **Publish Handbook** kiểm tra dữ liệu và triển khai GitHub Pages.
- Trong **Settings → Pages**, nguồn triển khai là **GitHub Actions**.
- Xem `HUONG-DAN-CHINH-SUA.md` để biết cấu trúc và cách cập nhật tài nguyên.

Tiến độ và điểm kiểm tra lưu trong trình duyệt của từng người, không gửi lên GitHub và không tự đồng bộ giữa thiết bị.

Học liệu biên soạn độc lập; không phải ấn phẩm chính thức hoặc chứng nhận của UN. Các nguồn tham khảo và ghi chú phiên bản nằm trong từng bài.

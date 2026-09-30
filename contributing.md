# Đóng góp phát triển Landing Page MacroShot

Chào mừng bạn tham gia đóng góp cho dự án MacroShot Landing Page!

## Quy trình đóng góp

1. Tạo nhánh mới (`feature/ten-tinh-nang` hoặc `fix/ten-loi`).
2. Thực hiện thay đổi trong mã nguồn (`index.html`, `assets/`, v.v.).
3. Kiểm tra tính toàn vẹn và không làm gãy link bằng lệnh:
   ```bash
   npm run check
   ```
4. Đảm bảo chạy preview kiểm tra giao diện trên nhiều kích thước màn hình (Mobile, Tablet, Desktop):
   ```bash
   npm run dev
   ```
5. Đóng gói bản phân phối trước khi tạo Pull Request:
   ```bash
   npm run build
   ```

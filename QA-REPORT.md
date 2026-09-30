# QA report

Ngày: 30/09/2026. Báo cáo sẽ được cập nhật bằng kết quả browser/build trong lần chạy hiện tại.

## Passed

- Nội dung bốn route và cấu trúc semantic đã tạo.
- Không có CTA tải giả, email giả, form không hoạt động hoặc claim giá/độ chính xác chưa xác minh.
- FAQ dùng native `details/summary`; menu mobile có trạng thái `aria-expanded`; skip link và focus-visible có mặt.
- Reduced motion được tôn trọng; typography tối thiểu 16px ở mobile.
- `npm.cmd run check`: đạt — kiểm tra bốn tài liệu HTML, shared CSS/JS và tất cả link nội bộ.
- `npm.cmd run build`: đạt — tạo `dist/` không dependency.
- HTTP local preview: `/`, `/support/`, `/privacy/`, `/terms/`, CSS và ảnh hero đều trả về 200.
- Asset hero đã tối ưu từ 2.89 MB PNG xuống 333 KB JPEG, giữ kích thước hiển thị 1536×1024.

## Failed / blocked by environment

- Chrome và Edge headless đều dừng ở GPU process (`exit_code=-1073741790`) trong môi trường Windows hiện tại; thử lại ngoài sandbox cũng không tạo screenshot. Vì vậy không có screenshot giả được đưa vào repo.

## Not run / limitations

- Safari trên iPhone/iPad thật: không có thiết bị.
- Visual browser review tại 375, 390, 768 và 1440 px, console runtime, tương tác bàn phím/touch thực tế, overflow và 200% text enlargement: chưa chạy do browser headless không render được. CSS đã có breakpoint 560/850 px, stacking, focus-visible và reduced-motion nhưng đây không thay thế visual QA.
- Screenshot desktop/mobile/legal: chưa tạo được do giới hạn browser nói trên.
- Lighthouse/lab Core Web Vitals: chưa chạy vì browser không khởi động; không có score hoặc timing được suy đoán.
- Field Core Web Vitals: cần traffic production; không thể suy ra từ lab.

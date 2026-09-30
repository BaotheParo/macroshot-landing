# MacroShot Landing Page — Hướng Dẫn Cài Đặt & Prompt Agent

Tài liệu hướng dẫn triển khai nhanh dự án Landing Page của **MacroShot (v1.2.1)** cho thành viên trong nhóm và AI Agents.

---

## 👥 1. Hướng Dẫn Cho Thành Viên Trong Nhóm (3 Bước Nhanh)

### Yêu cầu môi trường
- **Node.js**: Phiên bản 18+ (Dự án là thuần vanilla HTML/CSS/JS không phụ thuộc thư viện nặng).

### Các lệnh làm việc chính

1. **Khởi chạy Local Dev Server (Xem trước giao diện):**
   ```bash
   npm run dev
   ```
   > Truy cập trình duyệt: `http://localhost:4173` (hoặc cổng hiển thị trên Terminal).

2. **Kiểm tra tính toàn vẹn (Routes, Links, Shared Assets):**
   ```bash
   npm run check
   ```

3. **Đóng gói bản dựng tĩnh (Production Build):**
   ```bash
   npm run build
   ```
   > Toàn bộ file sẵn sàng deploy sẽ nằm trong thư mục `dist/`.

---

## 🤖 2. Prompt Ngắn Gọn Dành Cho AI Agents Tự Động Cài Đặt & Chạy

> **Cách dùng:** Copy toàn bộ đoạn prompt bên dưới dán vào bất kỳ AI Agent nào (Codex, Claude, Gemini, ChatGPT, Antigravity, Cursor, Windsurf) khi mở thư mục dự án này.

```markdown
Bạn là kỹ sư Frontend và QA cho dự án MacroShot Landing Page (v1.2.1).
Dự án được xây dựng bằng kiến trúc web tĩnh thuần (Vanilla HTML5, CSS3, JavaScript, Node.js scripts), không dùng framework nặng hay external dependencies.

Nhiệm vụ của bạn:
1. Đọc và tuân thủ các quy chuẩn giao diện trong `assets/site.css`, `index.html` và file cấu hình `config.js`.
2. Kiểm tra các liên kết nội bộ và tài nguyên bằng lệnh: `npm run check`.
3. Đảm bảo chạy preview cục bộ thông qua: `npm run dev` (sử dụng `scripts/serve.mjs` trên cổng 4173).
4. Khi chỉnh sửa hoặc phát triển thêm tính năng, luôn tuân thủ nguyên tắc Anti-AI Slop: thiết kế sạch sẽ, tone màu Forest Emerald (#059669) / Mint / Deep Ink, typography rõ ràng, hỗ trợ đầy đủ tiếng Việt có dấu và chuẩn accessibility WCAG 2.1 AA.
5. Sau khi hoàn tất thay đổi, luôn chạy `npm run check` và `npm run build` để cập nhật thư mục `dist/`.
```

---

## 🚀 3. Hướng Dẫn Kết Nối & Push Lên GitHub Repo Mới

Nếu bạn vừa tạo một repository mới trên GitHub (ví dụ: `https://github.com/<username>/macroshot-landing.git`):

```bash
# 1. Thêm remote origin trỏ về repo của bạn
git remote add origin https://github.com/<username>/<repo-name>.git

# 2. Đổi tên branch chính thành main (nếu chưa có)
git branch -M main

# 3. Push toàn bộ mã nguồn lên GitHub
git push -u origin main
```

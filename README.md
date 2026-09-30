# MacroShot — Website Giới Thiệu & Landing Page (v1.2.1)

Trang giới thiệu chính thức cho dự án khởi nghiệp công nghệ **MacroShot (v1.2.1)** — Giải pháp ghi nhận dinh dưỡng món ăn Việt không ma sát thông qua thị giác máy tính và thuật toán cá nhân hóa Macro theo thể trạng.

---

## 🌟 Điểm nổi bật của Website

- **Anti-AI Slop Aesthetic:** Thiết kế hiện đại, tinh tế, sử dụng bảng màu Forest Emerald, Deep Ink, Crisp Lime và Mint, bố cục content-first trực quan, chuẩn khả năng tiếp cận WCAG 2.1 AA.
- **Mô phỏng AI Food Scanner trực tiếp (Interactive Live Playground):** Bóc tách nguyên liệu món Việt (Phở bò tái nạm, Cơm tấm sườn bì chả, Bún chả Hà Nội, Cơm nhà cá kho) với thanh trượt tỷ lệ khẩu phần tự động tính toán lại Calo, Protein, Carbs, Fat theo thời gian thực (Real-time Linear Scaling).
- **Công cụ tính toán Calo & Macro theo thể trạng:** Ứng dụng động cơ toán học **Mifflin-St Jeor** kết hợp hệ số vận động PAL và tốc độ mục tiêu cá nhân hóa (🐢 Rùa, 🐇 Thỏ, 🐆 Báo).
- **Hệ sinh thái 6 Phân hệ nghiệp vụ:** Thể hiện trọn vẹn 6 module cốt lõi của MacroShot v1.2.1.
- **4 Routes độc lập:** Trang chủ (`/`), Trung tâm hỗ trợ (`/support/`), Chính sách quyền riêng tư (`/privacy/`), Điều khoản dịch vụ (`/terms/`).

---

## ⚡ Hướng Dẫn Cài Đặt Nhanh

Xem tài liệu chi tiết tại [SETUP-GUIDE.md](SETUP-GUIDE.md).

```bash
# Xem trước cục bộ (Local Preview)
npm run dev

# Kiểm tra tính toàn vẹn (Routes & Links)
npm run check

# Đóng gói bản tĩnh (Production Build)
npm run build
```

---

## 📁 Cấu Trúc Mã Nguồn

```
├── index.html            # Trang chủ Landing Page (Interactive Demo & Calculator)
├── assets/
│   ├── site.css          # Hệ thống CSS Design Tokens & Layouts
│   ├── site.js           # Xử lý tương tác Scanner & Macro Calculator
│   ├── favicon.svg       # Biểu tượng thương hiệu
│   └── vietnamese-meal.jpg # Hình ảnh minh họa mâm cơm Việt
├── support/              # Trang Trung tâm hỗ trợ
├── privacy/              # Trang Chính sách quyền riêng tư (Bản dự thảo)
├── terms/                # Trang Điều khoản dịch vụ (Bản dự thảo)
├── config.js             # Cấu hình phát hành (App Version, Status)
├── scripts/              # Bộ công cụ build, test link và local server
└── SETUP-GUIDE.md        # Hướng dẫn setup cho team & prompt cho AI agent
```

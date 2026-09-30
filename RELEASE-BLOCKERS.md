# Release blockers

Review build website: hoàn chỉnh. Public/legal/App Store readiness: **bị chặn** bởi dữ kiện vận hành dưới đây.

## Bắt buộc trước khi public/legal sign-off

1. Tên pháp lý, địa chỉ, quốc gia và thông tin liên hệ của đơn vị vận hành.
2. Email hỗ trợ hoạt động và email/contact quyền riêng tư.
3. Ngày hiệu lực chính sách; luật/khu vực áp dụng và cơ chế tranh chấp do chủ thể có thẩm quyền quyết định.
4. Danh mục dữ liệu thực tế, mục đích, cơ sở/đồng ý phù hợp, dữ liệu kỹ thuật/analytics và dữ liệu nào liên kết với tài khoản.
5. Nhà cung cấp ảnh chính thức (S3-compatible cụ thể hay Cloudinary), toàn bộ bên xử lý/subprocessor, khu vực xử lý và biện pháp bảo vệ.
6. Cấu hình Gemini thực tế: dịch vụ/pháp nhân, payload gửi đi, thời hạn lưu, việc dùng dữ liệu cho training/model improvement và điều khoản xử lý.
7. Thời hạn lưu từng loại dữ liệu, xử lý backup/log và SLA xóa.
8. Quy trình tạo/khôi phục/xóa tài khoản thực tế, gồm vị trí khởi tạo xóa trong app và dữ liệu bị xóa/giữ lại.
9. Mô hình giá, gói, giới hạn, IAP/subscription, gia hạn và hoàn tiền (hoặc xác nhận không áp dụng).
10. App Store listing URL, ngày phát hành và screenshot v1.2.1 thật nếu dùng marketing.
11. Brand/logo/màu chính thức hoặc phê duyệt bộ nhận diện tạm.

## Audit app-side trước App Store submission

- Xác minh Privacy Policy truy cập dễ dàng trong app và URL được khai báo trong App Store Connect metadata.
- Nếu app tạo tài khoản, xác minh người dùng khởi tạo xóa toàn bộ tài khoản trong app; email hỗ trợ đơn thuần thường không đủ.
- Đối chiếu App Privacy answers với app và mọi third-party partner.
- Với dữ liệu cá nhân gửi Gemini/AI bên thứ ba, kiểm tra disclosure rõ nơi nhận, dữ liệu gửi, mục đích và explicit permission trước khi chia sẻ.
- Kiểm tra wording quyền camera/thư viện và phương án khi người dùng từ chối.
- Thực hiện Safari thật trên iPhone/iPad; automation viewport không thay cho real-device QA.

Nguồn Apple (truy cập 30/09/2026):

- https://developer.apple.com/app-store/review/guidelines/
- https://developer.apple.com/support/offering-account-deletion-in-your-app
- https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
- https://developer.apple.com/app-store/app-privacy-details/

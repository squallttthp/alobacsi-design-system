# Article detail pilot — AloCare v0.1

Phạm vi: nghiệm thu ngôn ngữ thiết kế trên trang chi tiết bài viết. Pilot này
không thay thế class production hiện tại; sau khi duyệt mới lập mapping class và
tích hợp từng phần.

## Components

| Component | Vai trò | Trạng thái tối thiểu |
|---|---|---|
| Breadcrumb | Định vị nội dung | default, focus |
| Article header | Category, title, summary | default, long title, mobile |
| Metadata | Đăng, cập nhật, đơn vị | missing optional field |
| Consult card | Tác giả và tham vấn y khoa | avatar fallback, link, focus |
| Sponsorship label | Phân biệt nội dung tài trợ | editorial, sponsored |
| Ad slot | Vị trí quảng cáo có nhận diện | loaded, empty, fallback |
| Related card | Bài liên quan | image fallback, hover, mobile |
| Primary button | CTA | default, hover, focus, disabled |

## Acceptance criteria

- Tiêu đề và metadata có thứ tự thị giác rõ ràng.
- Tác giả, tham vấn, ngày đăng và đơn vị chịu trách nhiệm không bị ẩn.
- Nhãn tài trợ không dùng cùng kiểu với nhãn chuyên mục biên tập.
- Ad slot có vùng riêng, không đè nội dung hoặc điều khiển bài viết.
- Tất cả liên kết và button có focus state nhìn thấy được.
- Layout mobile không tạo overflow ngang.
- Component chỉ dùng token trong `assets/design-system/tokens/`.

## Preview

Mở `assets/design-system/examples/article-pilot.html` bằng trình duyệt để
kiểm tra desktop và mobile. Đây là preview tĩnh dùng dữ liệu mẫu, chưa phải
trang production.

## Mapping production sau khi duyệt

| Pilot | Production dự kiến |
|---|---|
| `.ac-breadcrumb` | breadcrumb hiện tại |
| `.ac-article-header` | title/sapo article detail |
| `.ac-meta` | `.about` |
| `.ac-consult` | `.consult` |
| `.ac-label--sponsored` | nhãn tài trợ |
| `.ac-ad-slot` | zone wrapper |
| `.ac-related-card` | card bài liên quan |
| `.ac-button` | CTA hiện tại |

# HƯỚNG DẪN CÀI ĐẶT & SỬ DỤNG APP CHẤM THI QM 2025 (HCMUE)
**Trường Đại học Sư phạm TP. Hồ Chí Minh**

---

## 🌟 1. Cách dùng nhanh nhất trên Điện Thoại (Không cần cài APK qua máy tính)

Hệ thống đã được tích hợp công nghệ **PWA (Progressive Web App)** chuẩn di động:

1. **Trên điện thoại Android (dùng Google Chrome)**:
   - Truy cập vào đường link website hoặc mở trang `chamthi.html`.
   - Bấm vào biểu tượng menu **3 dấu chấm** ở góc trên bên phải trình duyệt.
   - Chọn **"Cài đặt ứng dụng"** hoặc **"Thêm vào Màn hình chính"** (Add to Home screen).
   - Ngay lập tức, một biểu tượng ứng dụng **"Chấm Thi QM2025"** với Logo ĐH Sư phạm TP.HCM sẽ xuất hiện trên màn hình chính của điện thoại.
   - Mở app lên: Ứng dụng sẽ chạy ở chế độ **Toàn màn hình (Full Screen)** như một ứng dụng native, tự động cấp quyền mở camera và hoạt động **Offline 100%** không cần mạng!

2. **Trên iPhone / iPad (dùng Safari)**:
   - Mở Safari và truy cập vào trang `chamthi.html`.
   - Bấm nút **Chia sẻ** (biểu tượng hình vuông có mũi tên hướng lên).
   - Chọn **"Thêm vào MH chính"** (Add to Home Screen).

---

## 📱 2. Cách Build File APK Cài Đặt (Dành cho Lập Trình Viên Flutter)

Nếu bạn muốn tạo file cài đặt `.apk` cho Android:

```bash
# 1. Di chuyển vào thư mục mobile_app
cd mobile_app

# 2. Tải các thư viện phụ thuộc
flutter pub get

# 3. Tạo file APK Release
flutter build apk --release

# File APK hoàn chỉnh sẽ nằm tại:
# build/app/outputs/flutter-apk/app-release.apk
```

Sau đó sao chép file `app-release.apk` vào điện thoại Android và mở lên để cài đặt.

---

## 💻 3. Cách Sử Dụng Trên Máy Tính (PC / Laptop)

1. Mở file `chamthi.html` trực tiếp bằng bất kỳ trình duyệt nào (Google Chrome, Microsoft Edge, Cốc Cốc, Firefox).
2. **In phiếu thi**:
   - Chọn Tab **"🖨️ In & Xuất Phiếu Thi"**.
   - Bấm **"Tải PDF Khổ A4 (2 phiếu/trang)"** hoặc **"Tải PDF Khổ A5"** để in ra giấy cho học sinh làm bài.
   - Phiếu in sắc nét vector, chuẩn 4 góc định vị và có sẵn **Logo Trường ĐH Sư phạm TP.HCM**.
3. **Cài đặt đáp án**:
   - Chọn Tab **"📝 Thiết Lập Đáp Án"**.
   - Click chọn nhanh đáp án cho các mã đề (101, 102, 103, 104,...) hoặc đưa phiếu đáp án mẫu vào camera quét 1 giây để app tự điền.
4. **Chấm bài hàng loạt**:
   - Chọn Tab **"📷 Quét Chấm Bài"**.
   - Tại mục **"Chấm Hàng Loạt Từ Tệp"**, bấm chọn toàn bộ các ảnh chụp bài thi từ điện thoại gửi qua hoặc file scan từ máy photocopy.
   - App sẽ tự động chạy chấm từng bài với thanh tiến trình trực quan.
5. **Xem phổ điểm & Xuất Excel**:
   - Chọn Tab **"📊 Phổ Điểm & Thống Kê"** để xem biểu đồ phân bố điểm, điểm trung bình, trung vị, độ lệch chuẩn và phân tích câu hỏi dễ/khó/bẫy.
   - Chọn Tab **"📋 Danh Sách Bài Chấm"** -> Bấm **"📊 Xuất File Excel (.xlsx)"** để tải về bảng điểm chuyên nghiệp nhiều sheet.

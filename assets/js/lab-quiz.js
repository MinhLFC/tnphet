/**
 * ============================================================================
 * BỘ 70 CÂU TRẮC NGHIỆM CHƯƠNG 1: VẬT LÍ NHIỆT - VẬT LÍ 12
 * Chế độ Trình chiếu sửa bài trên lớp & Chế độ Danh sách
 * ============================================================================
 */

(function () {
  // Hình vẽ SVG sắc nét cho các câu có hình minh họa (Câu 5, 7, 43, 63, 70)
  const QUIZ_FIGURES = {
    5: {
      caption: 'Hình Câu 5: Ba bình A, B, C có cùng diện tích đáy chứa cùng một lượng nước',
      svg: `<svg viewBox="0 0 360 155" xmlns="http://www.w3.org/2000/svg">
        <!-- Mặt bếp đun -->
        <rect x="18" y="130" width="324" height="12" rx="3" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
        <!-- Bình A: Miệng rộng đáy nhỏ -->
        <polygon points="36,30 112,30 98,130 50,130" fill="none" stroke="currentColor" stroke-width="2"/>
        <polygon points="44,72 104,72 98,130 50,130" fill="rgba(56, 189, 248, 0.35)"/>
        <line x1="44" y1="72" x2="104" y2="72" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="4,2"/>
        <text x="74" y="60" text-anchor="middle" font-weight="700" font-size="14" fill="currentColor">A</text>
        <!-- Bình B: Miệng hẹp đáy rộng -->
        <polygon points="164,30 198,30 206,130 156,130" fill="none" stroke="currentColor" stroke-width="2"/>
        <polygon points="160,64 202,64 206,130 156,130" fill="rgba(56, 189, 248, 0.35)"/>
        <line x1="160" y1="64" x2="202" y2="64" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="4,2"/>
        <text x="181" y="52" text-anchor="middle" font-weight="700" font-size="14" fill="currentColor">B</text>
        <!-- Bình C: Hình trụ thẳng -->
        <rect x="262" y="30" width="52" height="100" fill="none" stroke="currentColor" stroke-width="2"/>
        <rect x="262" y="68" width="52" height="62" fill="rgba(56, 189, 248, 0.35)"/>
        <line x1="262" y1="68" x2="314" y2="68" stroke="#0284c7" stroke-width="1.8" stroke-dasharray="4,2"/>
        <text x="288" y="56" text-anchor="middle" font-weight="700" font-size="14" fill="currentColor">C</text>
      </svg>`
    },
    7: {
      caption: 'Hình Câu 7: Bình ga mini đang sử dụng có lớp nước mỏng ngưng tụ bên ngoài vỏ',
      svg: `<svg viewBox="0 0 200 170" xmlns="http://www.w3.org/2000/svg">
        <!-- Đầu van bình ga -->
        <rect x="88" y="14" width="24" height="10" rx="2" fill="#64748b"/>
        <rect x="80" y="24" width="40" height="10" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.2"/>
        <!-- Vai bình -->
        <path d="M65,50 Q100,28 135,50 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
        <!-- Thân bình ga -->
        <rect x="65" y="50" width="70" height="98" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="1.8"/>
        <rect x="65" y="72" width="70" height="36" fill="#dc2626"/>
        <text x="100" y="95" text-anchor="middle" font-weight="800" font-style="italic" font-size="17" fill="#ffffff">Max</text>
        <!-- Các giọt nước ngưng tụ bám ngoài vỏ -->
        <circle cx="74" cy="118" r="3" fill="#0ea5e9"/>
        <circle cx="88" cy="128" r="3.5" fill="#0ea5e9"/>
        <circle cx="114" cy="120" r="3" fill="#0ea5e9"/>
        <circle cx="124" cy="134" r="3.5" fill="#0ea5e9"/>
        <circle cx="98" cy="138" r="2.8" fill="#0ea5e9"/>
        <circle cx="76" cy="62" r="2.8" fill="#0ea5e9"/>
        <circle cx="122" cy="64" r="3" fill="#0ea5e9"/>
      </svg>`
    },
    43: {
      caption: 'Hình Câu 43: Bốn bình A (1L), B (2L), C (3L), D (4L) đun bằng các đèn cồn giống hệt nhau',
      svg: `<svg viewBox="0 0 380 175" xmlns="http://www.w3.org/2000/svg">
        <!-- 4 Bình A, B, C, D -->
        <g font-family="sans-serif" font-size="12" font-weight="700" fill="currentColor">
          <!-- Bình A (1L) -->
          <text x="48" y="18" text-anchor="middle">A (1 lít)</text>
          <rect x="24" y="26" width="48" height="78" fill="none" stroke="currentColor" stroke-width="1.8"/>
          <rect x="24" y="84" width="48" height="20" fill="rgba(56, 189, 248, 0.4)"/>
          <!-- Bình B (2L) -->
          <text x="138" y="18" text-anchor="middle">B (2 lít)</text>
          <rect x="114" y="26" width="48" height="78" fill="none" stroke="currentColor" stroke-width="1.8"/>
          <rect x="114" y="68" width="48" height="36" fill="rgba(56, 189, 248, 0.4)"/>
          <!-- Bình C (3L) -->
          <text x="228" y="18" text-anchor="middle">C (3 lít)</text>
          <rect x="204" y="26" width="48" height="78" fill="none" stroke="currentColor" stroke-width="1.8"/>
          <rect x="204" y="52" width="48" height="52" fill="rgba(56, 189, 248, 0.4)"/>
          <!-- Bình D (4L) -->
          <text x="318" y="18" text-anchor="middle">D (4 lít)</text>
          <rect x="294" y="26" width="48" height="78" fill="none" stroke="currentColor" stroke-width="1.8"/>
          <rect x="294" y="36" width="48" height="68" fill="rgba(56, 189, 248, 0.4)"/>
        </g>
        <!-- Giá đỡ & Đèn cồn cho 4 bình -->
        <g stroke="currentColor" stroke-width="1.5">
          <!-- Chân giá -->
          <line x1="18" y1="106" x2="78" y2="106"/><line x1="22" y1="106" x2="18" y2="162"/><line x1="74" y1="106" x2="78" y2="162"/>
          <line x1="108" y1="106" x2="168" y2="106"/><line x1="112" y1="106" x2="108" y2="162"/><line x1="164" y1="106" x2="168" y2="162"/>
          <line x1="198" y1="106" x2="258" y2="106"/><line x1="202" y1="106" x2="198" y2="162"/><line x1="254" y1="106" x2="258" y2="162"/>
          <line x1="288" y1="106" x2="348" y2="106"/><line x1="292" y1="106" x2="288" y2="162"/><line x1="344" y1="106" x2="348" y2="162"/>
        </g>
        <!-- Ngọn lửa & bình đèn cồn -->
        <g>
          <path d="M48,108 C42,118 44,126 48,128 C52,126 54,118 48,108 Z" fill="#f97316"/>
          <polygon points="34,134 62,134 66,160 30,160" fill="#94a3b8" stroke="#475569" stroke-width="1.2"/>
          <path d="M138,108 C132,118 134,126 138,128 C142,126 144,118 138,108 Z" fill="#f97316"/>
          <polygon points="124,134 152,134 156,160 120,160" fill="#94a3b8" stroke="#475569" stroke-width="1.2"/>
          <path d="M228,108 C222,118 224,126 228,128 C232,126 234,118 228,108 Z" fill="#f97316"/>
          <polygon points="214,134 242,134 246,160 210,160" fill="#94a3b8" stroke="#475569" stroke-width="1.2"/>
          <path d="M318,108 C312,118 314,126 318,128 C322,126 324,118 318,108 Z" fill="#f97316"/>
          <polygon points="304,134 332,134 336,160 300,160" fill="#94a3b8" stroke="#475569" stroke-width="1.2"/>
        </g>
      </svg>`
    },
    63: {
      caption: 'Hình Câu 63: Đồ thị sự phụ thuộc nhiệt độ T (°C) của chất rắn kết tinh theo thời gian t (phút)',
      svg: `<svg viewBox="0 0 280 185" xmlns="http://www.w3.org/2000/svg">
        <!-- Trục tọa độ -->
        <line x1="45" y1="150" x2="250" y2="150" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="250,146 258,150 250,154" fill="currentColor"/>
        <line x1="45" y1="155" x2="45" y2="18" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="41,22 45,14 49,22" fill="currentColor"/>
        <!-- Nhãn trục -->
        <text x="52" y="22" font-size="12" font-weight="700" fill="currentColor">T (°C)</text>
        <text x="235" y="168" font-size="12" font-weight="700" fill="currentColor">t (p)</text>
        <text x="34" y="164" font-size="12" fill="currentColor">0</text>
        <!-- Các mốc nhiệt độ: 32, 40, 48, 56 -->
        <text x="22" y="148" font-size="11.5" fill="currentColor">32</text>
        <line x1="42" y1="115" x2="48" y2="115" stroke="currentColor" stroke-width="1.2"/>
        <text x="22" y="119" font-size="11.5" fill="currentColor">40</text>
        <line x1="42" y1="80" x2="48" y2="80" stroke="currentColor" stroke-width="1.2"/>
        <text x="22" y="84" font-size="11.5" font-weight="700" fill="#dc2626">48</text>
        <line x1="42" y1="45" x2="48" y2="45" stroke="currentColor" stroke-width="1.2"/>
        <text x="22" y="49" font-size="11.5" fill="currentColor">56</text>
        <!-- Đường gióng đứt nét -->
        <line x1="45" y1="80" x2="165" y2="80" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="105" y1="80" x2="105" y2="150" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="165" y1="80" x2="165" y2="150" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="105" y="165" text-anchor="middle" font-size="11.5" fill="currentColor">6</text>
        <text x="165" y="165" text-anchor="middle" font-size="11.5" fill="currentColor">12</text>
        <!-- Đường biểu diễn đồ thị -->
        <polyline points="45,115 105,80 165,80 210,45" fill="none" stroke="#dc2626" stroke-width="2.6"/>
        <circle cx="45" cy="115" r="3" fill="#dc2626"/>
        <circle cx="105" cy="80" r="3" fill="#dc2626"/>
        <circle cx="165" cy="80" r="3" fill="#dc2626"/>
      </svg>`
    },
    70: {
      caption: 'Hình Câu 70: Đồ thị sự phụ thuộc nhiệt độ T (°C) của chất rắn kết tinh theo nhiệt lượng Q',
      svg: `<svg viewBox="0 0 280 185" xmlns="http://www.w3.org/2000/svg">
        <!-- Trục tọa độ -->
        <line x1="42" y1="150" x2="252" y2="150" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="250,146 258,150 250,154" fill="currentColor"/>
        <line x1="42" y1="155" x2="42" y2="18" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="38,22 42,14 46,22" fill="currentColor"/>
        <!-- Nhãn trục -->
        <text x="50" y="22" font-size="12" font-weight="700" fill="currentColor">T (°C)</text>
        <text x="242" y="168" font-size="12" font-weight="700" fill="currentColor">Q</text>
        <text x="30" y="164" font-size="12" fill="currentColor">O</text>
        <!-- Đường đồ thị: Đoạn 1 (rắn) dốc lớn, Đoạn 2 (nóng chảy) nằm ngang, Đoạn 3 (lỏng) dốc nhỏ hơn -->
        <polyline points="42,138 82,82 142,82 232,42" fill="none" stroke="#0284c7" stroke-width="2.8"/>
        <line x1="82" y1="82" x2="82" y2="150" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="4,3"/>
        <line x1="142" y1="82" x2="142" y2="150" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="4,3"/>
        <!-- Ghi chú giai đoạn -->
        <text x="52" y="102" font-size="10.5" font-weight="700" fill="#0284c7">Rắn (cR)</text>
        <text x="112" y="75" text-anchor="middle" font-size="10.5" font-weight="600" fill="currentColor">Nóng chảy</text>
        <text x="195" y="74" font-size="10.5" font-weight="700" fill="#0284c7">Lỏng (cL)</text>
      </svg>`
    },
    114: {
      caption: 'Hình Câu 114: Cấu tạo ghế nâng hạ với khối khí giam giữa ống M và ống N',
      svg: `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
        <!-- Ghế văn phòng minh họa bên trái -->
        <g stroke="currentColor" stroke-width="2" fill="none">
          <path d="M55,30 L55,78 L95,78" stroke-width="5" stroke-linecap="round"/>
          <rect x="48" y="75" width="52" height="10" rx="4" fill="#475569"/>
          <line x1="74" y1="85" x2="74" y2="142" stroke-width="4"/>
          <line x1="74" y1="142" x2="45" y2="158" stroke-width="3"/>
          <line x1="74" y1="142" x2="103" y2="158" stroke-width="3"/>
          <line x1="74" y1="142" x2="74" y2="162" stroke-width="3"/>
          <circle cx="74" cy="112" r="24" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="4,2"/>
        </g>
        <!-- Sơ đồ phóng to ống M và N bên phải -->
        <g transform="translate(145, 22)">
          <circle cx="52" cy="68" r="56" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <!-- Ống ngoài N -->
          <rect x="34" y="42" width="36" height="70" fill="rgba(56, 189, 248, 0.25)" stroke="currentColor" stroke-width="2"/>
          <!-- Ống trong M -->
          <rect x="40" y="18" width="24" height="58" fill="#cbd5e1" stroke="currentColor" stroke-width="2"/>
          <text x="72" y="34" font-size="13" font-weight="800" fill="currentColor">M</text>
          <text x="76" y="102" font-size="13" font-weight="800" fill="currentColor">N</text>
        </g>
      </svg>`
    },
    126: {
      caption: 'Bảng Câu 126: Các loại nhiệt kế và thang nhiệt độ tương ứng',
      svg: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="408" height="100" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <line x1="6" y1="46" x2="414" y2="46" stroke="currentColor" stroke-width="1.4"/>
        <line x1="96" y1="10" x2="96" y2="110" stroke="currentColor" stroke-width="1.2"/>
        <line x1="176" y1="10" x2="176" y2="110" stroke="currentColor" stroke-width="1.2"/>
        <line x1="256" y1="10" x2="256" y2="110" stroke="currentColor" stroke-width="1.2"/>
        <line x1="336" y1="10" x2="336" y2="110" stroke="currentColor" stroke-width="1.2"/>
        <g font-size="11.5" font-weight="700" fill="currentColor">
          <text x="14" y="32">Loại nhiệt kế</text>
          <text x="104" y="32">Thủy ngân</text>
          <text x="186" y="32">Rượu</text>
          <text x="266" y="32">Kim loại</text>
          <text x="348" y="32">Y tế</text>
          <text x="14" y="75">Thang nhiệt</text>
          <text x="14" y="92">độ</text>
        </g>
        <g font-size="11" fill="currentColor">
          <text x="102" y="72">Từ −10°C</text><text x="102" y="92">đến 110°C</text>
          <text x="182" y="72">Từ −30°C</text><text x="182" y="92">đến 60°C</text>
          <text x="262" y="72">Từ 0°C</text><text x="262" y="92">đến 400°C</text>
          <text x="342" y="72">Từ 34°C</text><text x="342" y="92">đến 42°C</text>
        </g>
      </svg>`
    },
    183: {
      caption: 'Hình Câu 183: Đồ thị sự phụ thuộc nhiệt lượng Q vào độ biến thiên nhiệt độ ΔT của 3 vật A, B, C',
      svg: `<svg viewBox="0 0 270 180" xmlns="http://www.w3.org/2000/svg">
        <line x1="42" y1="148" x2="236" y2="148" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="234,144 242,148 234,152" fill="currentColor"/>
        <line x1="42" y1="152" x2="42" y2="18" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="38,22 42,14 46,22" fill="currentColor"/>
        <text x="50" y="24" font-size="13" font-weight="700" fill="currentColor">Q</text>
        <text x="222" y="166" font-size="13" font-weight="700" fill="currentColor">ΔT</text>
        <text x="28" y="162" font-size="12" fill="currentColor">O</text>
        <!-- 3 đường A, B, C -->
        <line x1="42" y1="148" x2="152" y2="32" stroke="#dc2626" stroke-width="2.4"/>
        <text x="158" y="34" font-size="13" font-weight="800" fill="#dc2626">A</text>
        <line x1="42" y1="148" x2="186" y2="68" stroke="#0284c7" stroke-width="2.4"/>
        <text x="192" y="70" font-size="13" font-weight="800" fill="#0284c7">B</text>
        <line x1="42" y1="148" x2="204" y2="105" stroke="#16a34a" stroke-width="2.4"/>
        <text x="210" y="108" font-size="13" font-weight="800" fill="#16a34a">C</text>
      </svg>`
    },
    218: {
      caption: 'Bảng Câu 218: Nhiệt độ nóng chảy Tc (°C) của một số chất rắn',
      svg: `<svg viewBox="0 0 460 95" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="452" height="78" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="4" y1="46" x2="456" y2="46" stroke="currentColor" stroke-width="1.3"/>
        <g font-size="10.2" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="26" y="30">Chất</text>
          <text x="68" y="30">Niken</text>
          <text x="108" y="30">Sắt</text>
          <text x="148" y="30">Thép</text>
          <text x="192" y="30">Đồng</text>
          <text x="236" y="30">Vàng</text>
          <text x="276" y="30">Bạc</text>
          <text x="318" y="30">Nhôm</text>
          <text x="358" y="30">Chì</text>
          <text x="396" y="30">Thiếc</text>
          <text x="434" y="30">Đá</text>
        </g>
        <g font-size="10.2" fill="currentColor" text-anchor="middle">
          <text x="26" y="70" font-weight="700">Tc(°C)</text>
          <text x="68" y="70">1452</text>
          <text x="108" y="70">1530</text>
          <text x="148" y="70" font-weight="700" fill="#dc2626">1300</text>
          <text x="192" y="70" font-weight="700" fill="#dc2626">1083</text>
          <text x="236" y="70">1063</text>
          <text x="276" y="70">960</text>
          <text x="318" y="70" font-weight="700" fill="#dc2626">659</text>
          <text x="358" y="70">327</text>
          <text x="396" y="70" font-weight="700" fill="#dc2626">232</text>
          <text x="434" y="70">0</text>
        </g>
      </svg>`
    },
    242: {
      caption: 'Hình Câu 242: Đồ thị nhiệt độ theo thời gian của chất rắn kết tinh và vô định hình',
      svg: `<svg viewBox="0 0 280 185" xmlns="http://www.w3.org/2000/svg">
        <line x1="42" y1="152" x2="248" y2="152" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="246,148 254,152 246,156" fill="currentColor"/>
        <line x1="42" y1="155" x2="42" y2="18" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="38,22 42,14 46,22" fill="currentColor"/>
        <text x="48" y="22" font-size="11" font-weight="700" fill="currentColor">Nhiệt độ (°C)</text>
        <text x="200" y="168" font-size="11" font-weight="700" fill="currentColor">Thời gian</text>
        <!-- Mốc tc -->
        <text x="25" y="92" font-size="12" font-weight="700" fill="currentColor">tc</text>
        <circle cx="42" cy="88" r="3" fill="currentColor"/>
        <!-- Đường (1): Nằm ngang rồi đi lên -->
        <polyline points="42,88 148,88 182,42" fill="none" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5,3"/>
        <text x="155" y="102" font-size="10.5" font-weight="700" fill="#64748b">Đường (1)</text>
        <!-- Đường (2): Cong trơn liên tục (vô định hình) -->
        <path d="M68,142 Q115,65 182,42" fill="none" stroke="#16a34a" stroke-width="2.4"/>
        <text x="72" y="70" font-size="10.5" font-weight="700" fill="#16a34a">Đường (2)</text>
        <!-- Đường (3): Gấp khúc có đoạn ngang ở tc (kết tinh) -->
        <polyline points="68,142 112,88 148,88 182,42" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <text x="186" y="72" font-size="10.5" font-weight="700" fill="#dc2626">Đường (3)</text>
      </svg>`
    },
    279: {
      caption: 'Hình 6.1 (Câu 279): Đồ thị khối lượng nước m(kg) theo thời gian t(s)',
      svg: `<svg viewBox="0 0 320 215" xmlns="http://www.w3.org/2000/svg">
        <!-- Lưới tọa độ -->
        <g stroke="#cbd5e1" stroke-width="0.7">
          <line x1="48" y1="25" x2="290" y2="25"/>
          <line x1="48" y1="45" x2="290" y2="45"/>
          <line x1="48" y1="65" x2="290" y2="65"/>
          <line x1="48" y1="85" x2="290" y2="85"/>
          <line x1="48" y1="105" x2="290" y2="105"/>
          <line x1="48" y1="125" x2="290" y2="125"/>
          <line x1="48" y1="145" x2="290" y2="145"/>
          <line x1="48" y1="165" x2="290" y2="165"/>
          <line x1="74" y1="25" x2="74" y2="185"/>
          <line x1="100" y1="25" x2="100" y2="185"/>
          <line x1="126" y1="25" x2="126" y2="185"/>
          <line x1="152" y1="25" x2="152" y2="185"/>
          <line x1="178" y1="25" x2="178" y2="185"/>
          <line x1="204" y1="25" x2="204" y2="185"/>
          <line x1="230" y1="25" x2="230" y2="185"/>
          <line x1="256" y1="25" x2="256" y2="185"/>
          <line x1="282" y1="25" x2="282" y2="185"/>
        </g>
        <!-- Trục tọa độ -->
        <line x1="48" y1="185" x2="300" y2="185" stroke="currentColor" stroke-width="1.6"/>
        <polygon points="298,182 305,185 298,188" fill="currentColor"/>
        <line x1="48" y1="185" x2="48" y2="14" stroke="currentColor" stroke-width="1.6"/>
        <polygon points="45,17 48,10 51,17" fill="currentColor"/>
        <text x="16" y="15" font-size="9.5" font-weight="700" fill="currentColor">m(kg)</text>
        <text x="292" y="199" font-size="9.5" font-weight="700" fill="currentColor">t(s)</text>
        <!-- Nhãn trục tung -->
        <g font-size="8.5" fill="currentColor" text-anchor="end">
          <text x="44" y="28">0,121</text>
          <text x="44" y="48">0,120</text>
          <text x="44" y="68">0,119</text>
          <text x="44" y="88">0,118</text>
          <text x="44" y="108">0,117</text>
          <text x="44" y="128">0,116</text>
          <text x="44" y="148">0,115</text>
          <text x="44" y="168">0,114</text>
          <text x="44" y="188">0,113</text>
        </g>
        <!-- Nhãn trục hoành -->
        <g font-size="8" fill="currentColor" text-anchor="middle">
          <text x="48" y="197">0</text>
          <text x="74" y="197">100</text>
          <text x="100" y="197">200</text>
          <text x="126" y="197">300</text>
          <text x="152" y="197">400</text>
          <text x="178" y="197">500</text>
          <text x="204" y="197">600</text>
          <text x="230" y="197">700</text>
          <text x="256" y="197">800</text>
          <text x="282" y="197">900</text>
        </g>
        <!-- Đường biểu diễn thực nghiệm -->
        <line x1="48" y1="45" x2="265" y2="165" stroke="#dc2626" stroke-width="2.2"/>
        <!-- Điểm P và Q -->
        <circle cx="100" cy="74" r="3" fill="#16a34a"/>
        <text x="105" y="70" font-size="9" font-weight="700" fill="currentColor">P</text>
        <circle cx="230" cy="145" r="3" fill="#16a34a"/>
        <text x="235" y="140" font-size="9" font-weight="700" fill="currentColor">Q</text>
      </svg>`
    }
  };

  // Dữ liệu 300 câu hỏi trắc nghiệm Chương 1: Vật Lí Nhiệt - Vật Lí 12
  // Khớp chính xác 100% với BẢNG ĐÁP ÁN của giáo viên
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      topic: 'Mô hình động học phân tử',
      question: 'Câu nào sau đây nói về chuyển động của phân tử là không đúng?',
      options: {
        A: 'Chuyển động của phân tử là do lực tương tác phân tử gây ra.',
        B: 'Các phân tử chuyển động không ngừng.',
        C: 'Các phân tử chuyển động càng nhanh thì nhiệt độ càng cao.',
        D: 'Các phân tử khí không dao động quanh vị trí cân bằng.'
      },
      answer: 'A',
      explanation: 'Chuyển động nhiệt của các phân tử là chuyển động hỗn loạn không ngừng vốn có của vật chất (liên quan đến nhiệt độ), không phải do lực tương tác phân tử sinh ra. Lực tương tác phân tử chỉ giữ các phân tử không tách rời nhau hoặc đẩy nhau khi quá gần.'
    },
    {
      id: 2,
      topic: 'Mô hình động học phân tử',
      question: 'Câu nào sau đây nói về lực tương tác phân tử là không đúng?',
      options: {
        A: 'Lực phân tử chỉ đáng kể khi các phân tử ở rất gần nhau.',
        B: 'Lực hút phân tử có thể lớn hơn lực đẩy phân tử.',
        C: 'Lực hút phân tử không thể lớn hơn lực đẩy phân tử.',
        D: 'Lực hút phân tử có thể bằng lực đẩy phân tử.'
      },
      answer: 'C',
      explanation: 'Khi khoảng cách giữa các phân tử lớn hơn khoảng cách cân bằng (r > r₀), lực hút phân tử lớn hơn lực đẩy phân tử. Do đó phát biểu "Lực hút phân tử không thể lớn hơn lực đẩy phân tử" là sai.'
    },
    {
      id: 3,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Trong các tính chất sau, tính chất nào là của các phân tử chất rắn?',
      options: {
        A: 'Không có hình dạng cố định.',
        B: 'Chiếm toàn bộ thể tích của bình chứa.',
        C: 'Có lực tương tác phân tử lớn.',
        D: 'Chuyển động hỗn loạn không ngừng.'
      },
      answer: 'C',
      explanation: 'Ở thể rắn, các hạt nằm rất gần nhau nên lực tương tác phân tử rất lớn, giữ cho các phân tử chỉ dao động quanh vị trí cân bằng xác định.'
    },
    {
      id: 4,
      topic: 'Mô hình động học phân tử',
      question: 'Điều nào sau đây đúng khi nói về cấu tạo chất?',
      options: {
        A: 'Các chất được cấu tạo từ các nguyên tử, phân tử.',
        B: 'Các nguyên tử, phân tử chuyển động hỗn độn không ngừng, các nguyên tử, phân tử chuyển động càng nhanh thì nhiệt độ của vật càng cao.',
        C: 'Các nguyên tử, phân tử đồng thời hút nhau và đẩy nhau.',
        D: 'Cả A, B, C đều đúng.'
      },
      answer: 'D',
      explanation: 'Ba nội dung A, B, C chính là các nội dung cơ bản của thuyết động học phân tử về cấu tạo chất.'
    },
    {
      id: 5,
      topic: 'Sự chuyển thể của các chất',
      question: 'Đổ vào ba bình có cùng diện tích đáy một lượng nước như nhau, đun ở điều kiện như nhau thì:',
      options: {
        A: 'Bình A sôi nhanh nhất.',
        B: 'Bình B sôi nhanh nhất.',
        C: 'Bình C sôi nhanh nhất.',
        D: 'Ba bình sôi cùng nhau vì có cùng diện tích đáy.'
      },
      answer: 'A',
      figure: 5,
      explanation: 'Theo bảng đáp án của đề: Chọn A (Bình A có miệng loe rộng). Lưu ý thảo luận thêm trên lớp: Về mặt vật lí thực nghiệm, bình có diện tích mặt thoáng lớn sẽ bay hơi mạnh hơn và mất nhiệt nhiều hơn nếu không đậy nắp; giáo viên có thể phân tích thêm yếu tố truyền nhiệt và bay hơi mặt thoáng cho học sinh.'
    },
    {
      id: 6,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Các tính chất nào sau đây là tính chất của các phân tử chất lỏng?',
      options: {
        A: 'Chuyển động không ngừng theo mọi phương',
        B: 'Hình dạng phụ thuộc bình chứa',
        C: 'Lực tương tác phân tử yếu.',
        D: 'Các tính chất A, B, C.'
      },
      answer: 'B',
      explanation: 'Chất lỏng có thể tích xác định nhưng không có hình dạng riêng mà có hình dạng phụ thuộc vào phần bình chứa nó (A và C là đặc điểm điển hình của chất khí).'
    },
    {
      id: 7,
      topic: 'Sự chuyển thể của các chất',
      question: 'Tại sao khi cầm vào vỏ bình ga mini đang sử dụng ta thường thấy có một lớp nước rất mỏng trên đó?',
      options: {
        A: 'Do hơi nước từ tay ta bốc ra.',
        B: 'Nước từ trong bình ga thấm ra.',
        C: 'Do vỏ bình ga lạnh hơn nhiệt độ môi trường nên hơi nước trong không khí ngưng tụ trên đó.',
        D: 'Cả B và C đều đúng.'
      },
      answer: 'C',
      figure: 7,
      explanation: 'Khi sử dụng bình ga, ga lỏng bên trong hóa hơi (bay hơi) thu nhiệt mạnh làm vỏ bình ga lạnh đi. Hơi nước trong không khí xung quanh tiếp xúc với vỏ bình lạnh sẽ ngưng tụ thành lớp nước mỏng.'
    },
    {
      id: 8,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Các tính chất nào sau đây là tính chất của các phân tử chất rắn?',
      options: {
        A: 'Dao động quanh vị trí cân bằng',
        B: 'Lực tương tác phân tử mạnh.',
        C: 'Có hình dạng và thể tích xác định',
        D: 'Các tính chất A, B, C.'
      },
      answer: 'D',
      explanation: 'Chất rắn có lực tương tác phân tử mạnh, các phân tử dao động quanh vị trí cân bằng xác định nên vật rắn có hình dạng và thể tích xác định.'
    },
    {
      id: 9,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Chất rắn vô định hình có đặc tính sau:',
      options: {
        A: 'Đẳng hướng và nóng chảy ở nhiệt độ không xác định',
        B: 'Dị hướng và nóng chảy ở nhiệt độ xác định',
        C: 'Dị hướng và nóng chảy ở nhiệt độ không xác định',
        D: 'Đẳng hướng và nóng chảy ở nhiệt độ xác định'
      },
      answer: 'A',
      explanation: 'Chất rắn vô định hình không có cấu trúc tinh thể nên có tính đẳng hướng và không có nhiệt độ nóng chảy xác định (khi đun nóng thì mềm dần rồi chuyển sang lỏng).'
    },
    {
      id: 10,
      topic: 'Sự chuyển thể của các chất',
      question: 'Trong các hiện tượng sau đây, hiện tượng nào không liên quan đến sự đông đặc?',
      options: {
        A: 'Tuyết rơi',
        B: 'Đúc tượng đồng',
        C: 'Làm đá trong tủ lạnh',
        D: 'Rèn thép trong lò rèn'
      },
      answer: 'D',
      explanation: 'Rèn thép trong lò rèn là nung nóng thép cho mềm ra để biến dạng cơ học (rèn, đập), không làm thép nóng chảy hoàn toàn thành chất lỏng rồi đông đặc lại như đúc đồng.'
    },
    {
      id: 11,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Chất rắn nào dưới đây là chất rắn vô định hình?',
      options: {
        A: 'Thủy tinh',
        B: 'Băng phiến',
        C: 'Đường',
        D: 'Kim loại'
      },
      answer: 'A',
      explanation: 'Thủy tinh (cùng với nhựa thông, hắc ín, cao su...) là chất rắn vô định hình. Băng phiến, đường, kim loại đều là chất rắn kết tinh.'
    },
    {
      id: 12,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Đặc điểm và tính chất nào dưới đây liên quan đến chất rắn vô định hình?',
      options: {
        A: 'Có dạng hình học xác định.',
        B: 'Có cấu trúc tinh thể.',
        C: 'Có tính dị hướng.',
        D: 'Không có nhiệt độ nóng chảy xác định.'
      },
      answer: 'D',
      explanation: 'Chất rắn vô định hình không có cấu trúc tinh thể, không có dạng hình học xác định, có tính đẳng hướng và không có nhiệt độ nóng chảy xác định.'
    },
    {
      id: 13,
      topic: 'Sự chuyển thể của các chất',
      question: 'Trong suốt thời gian sôi, nhiệt độ của chất lỏng',
      options: {
        A: 'tăng dần lên',
        B: 'giảm dần đi',
        C: 'khi tăng khi giảm',
        D: 'không thay đổi'
      },
      answer: 'D',
      explanation: 'Trong suốt quá trình đang sôi (ở áp suất chuẩn không đổi), nhiệt độ của chất lỏng giữ không thay đổi.'
    },
    {
      id: 14,
      topic: 'Sự chuyển thể của các chất',
      question: 'Điều nào sau đây là sai khi nói về sự đông đặc?',
      options: {
        A: 'Sự đông đặc là quá trình chuyển từ thể lỏng sang thể rắn.',
        B: 'Với một chất rắn, nhiệt độ đông đặc luôn nhỏ hơn nhiệt độ nóng chảy.',
        C: 'Trong suốt quá trình đông đặc, nhiệt độ của vật không thay đổi.',
        D: 'Nhiệt độ đông đặc của các chất thay đổi theo áp suất bên ngoài.'
      },
      answer: 'B',
      explanation: 'Với một chất rắn kết tinh nhất định (ở cùng áp suất), nhiệt độ đông đặc luôn bằng nhiệt độ nóng chảy, chứ không nhỏ hơn.'
    },
    {
      id: 15,
      topic: 'Sự chuyển thể của các chất',
      question: 'Tốc độ bay hơi của chất lỏng không phụ thuộc vào yếu tố nào sau đây?',
      options: {
        A: 'Thể tích của chất lỏng.',
        B: 'Gió.',
        C: 'Nhiệt độ.',
        D: 'Diện tích mặt thoáng của chất lỏng'
      },
      answer: 'A',
      explanation: 'Tốc độ bay hơi của một chất lỏng phụ thuộc vào bản chất chất lỏng, nhiệt độ, gió và diện tích mặt thoáng; không phụ thuộc vào thể tích (nhiều hay ít) của chất lỏng.'
    },
    {
      id: 16,
      topic: 'Sự chuyển thể của các chất',
      question: 'Chọn câu trả lời đúng. Trong sự nóng chảy và đông đặc của các chất rắn:',
      options: {
        A: 'Mỗi chất rắn nóng chảy ở một nhiệt độ xác định, không phụ thuộc vào áp suất bên ngoài.',
        B: 'Nhiệt độ đông đặc của chất rắn kết tinh không phụ thuộc áp suất bên ngoài',
        C: 'Mỗi chất rắn kết tinh nóng chảy và đông đặc ở cùng một nhiệt độ xác định trong điều kiện áp suất xác định.',
        D: 'Mỗi chất rắn nóng chảy ở nhiệt độ nào thì cũng sẽ đông đặc ở nhiệt độ đó.'
      },
      answer: 'C',
      explanation: 'Chỉ có chất rắn kết tinh mới có nhiệt độ nóng chảy và đông đặc xác định (và hai nhiệt độ này bằng nhau ở một áp suất xác định). Chất rắn vô định hình không có nhiệt độ nóng chảy xác định.'
    },
    {
      id: 17,
      topic: 'Mô hình động học phân tử',
      question: 'Tính chất nào sau đây không phải là của phân tử?',
      options: {
        A: 'Có lúc đứng yên, có lúc chuyển động.',
        B: 'Chuyển động không ngừng.',
        C: 'Chuyển động càng nhanh thì nhiệt độ của vật càng cao.',
        D: 'Va chạm vào thành bình, gây áp suất lên thành bình.'
      },
      answer: 'A',
      explanation: 'Các phân tử chuyển động hỗn loạn không ngừng ở mọi nhiệt độ, không có lúc đứng yên.'
    },
    {
      id: 18,
      topic: 'Mô hình động học phân tử',
      question: 'Tìm câu sai.',
      options: {
        A: 'Các chất được cấu tạo từ các hạt riêng gọi là nguyên tử, phân tử.',
        B: 'Các nguyên tử, phân tử đứng sát nhau và giữa chúng không có khoảng cách.',
        C: 'Lực tương tác giữa các phân tử ở thể rắn lớn hơn lực tương tác giữa các phân tử ở thể lỏng và thể khí.',
        D: 'Các nguyên tử, phân tử chất lỏng dao động xung quanh các vị trí cân bằng không cố định.'
      },
      answer: 'B',
      explanation: 'Giữa các nguyên tử, phân tử cấu tạo nên vật luôn có khoảng cách (khoảng trống), nên phát biểu "giữa chúng không có khoảng cách" là sai.'
    },
    {
      id: 19,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Các tính chất nào sau đây không là tính chất của các phân tử chất lỏng?',
      options: {
        A: 'Chuyển động không ngừng theo mọi phương.',
        B: 'Hình dạng phụ thuộc bình chứa',
        C: 'Lực tương tác phân tử lớn hơn chất khí.',
        D: 'Lực tương tác phân tử nhỏ hơn chất rắn'
      },
      answer: 'A',
      explanation: 'Các phân tử chất lỏng chỉ dao động xung quanh các vị trí cân bằng di động (thỉnh thoảng nhảy sang vị trí khác), còn "chuyển động hỗn loạn không ngừng về mọi phía/mọi phương" là tính chất của phân tử chất khí.'
    },
    {
      id: 20,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Các tính chất nào sau đây là tính chất của chất rắn?',
      options: {
        A: 'Các phân tử dao động quanh vị trí cân bằng cố định',
        B: 'Lực tương tác phân tử mạnh.',
        C: 'Có hình dạng và thể tích xác định',
        D: 'Các tính chất A, B, C.'
      },
      answer: 'D',
      explanation: 'Cả 3 tính chất A, B, C đều là đặc trưng của chất ở thể rắn.'
    },
    {
      id: 21,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Chọn phương án đúng khi nói về các tính chất của chất khí',
      options: {
        A: 'Bành trướng là chiếm một phần thể tích của bình chứa',
        B: 'Khi áp suất tác dụng lên một lượng khí tăng thì thể tích của khí tăng đáng kể',
        C: 'Chất khí có tính dễ nén',
        D: 'Chất khí có khối lượng riêng lớn so với chất rắn và chất lỏng'
      },
      answer: 'C',
      explanation: 'Do khoảng cách giữa các phân tử khí rất lớn nên chất khí có tính dễ nén, khối lượng riêng rất nhỏ và luôn bành trướng chiếm toàn bộ thể tích bình chứa.'
    },
    {
      id: 22,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Chọn phương án sai khi nói về các tính chất của chất khí',
      options: {
        A: 'Bành trướng là chiếm một phần thể tích của bình chứa',
        B: 'Khi áp suất tác dụng lên một lượng khí tăng thì thể tích của khí giảm đáng kể.',
        C: 'Chất khí có tính dễ nén',
        D: 'Chất khí có khối lượng riêng nhỏ so với chất rắn và chất lỏng'
      },
      answer: 'A',
      explanation: 'Tính bành trướng của chất khí là chiếm TOÀN BỘ thể tích của bình chứa chứ không phải một phần.'
    },
    {
      id: 23,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Chất rắn vô định hình có đặc điểm và tính chất là:',
      options: {
        A: 'có tính dị hướng',
        B: 'có cấu trúc tinh thể',
        C: 'có dạng hình học xác định',
        D: 'có nhiệt độ nóng chảy không xác định'
      },
      answer: 'D',
      explanation: 'Chất rắn vô định hình không có cấu trúc tinh thể nên có nhiệt độ nóng chảy không xác định.'
    },
    {
      id: 24,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Trong các tính chất sau, tính chất nào là của các phân tử chất rắn?',
      options: {
        A: 'Không có hình dạng cố định.',
        B: 'Chiếm toàn bộ thể tích của bình chứa.',
        C: 'Có lực tương tác phân tử lớn',
        D: 'Chuyển động hỗn loạn không ngừng'
      },
      answer: 'C',
      explanation: 'Phân tử chất rắn ở rất gần nhau nên có lực tương tác phân tử lớn (trùng nội dung Câu 3).'
    },
    {
      id: 25,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Vật rắn tinh thể có đặc tính nào sau đây?',
      options: {
        A: 'Có cấu trúc tinh thể, có tính dị hướng, có nhiệt độ nóng chảy xác định.',
        B: 'Có cấu trúc tinh thể, có tính đẳng hướng, có nhiệt độ nóng chảy xác định.',
        C: 'Có cấu trúc tinh thể, có tính đẳng hướng hoặc dị hướng, không có nhiệt độ nóng chảy xác định.',
        D: 'Có cấu trúc mạng tinh thể, có tính đẳng hướng hoặc dị hướng, có nhiệt độ nóng chảy xác định.'
      },
      answer: 'D',
      explanation: 'Vật rắn kết tinh có cấu trúc mạng tinh thể, có nhiệt độ nóng chảy xác định, và có thể có tính dị hướng (đơn tinh thể) hoặc đẳng hướng (đa tinh thể).'
    },
    {
      id: 26,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Vật nào sau đây không có cấu trúc tinh thể?',
      options: {
        A: 'Chiếc cốc thuỷ tinh.',
        B: 'Hạt muối ăn.',
        C: 'Viên kim cương.',
        D: 'Miếng thạch anh.'
      },
      answer: 'A',
      explanation: 'Thủy tinh là chất rắn vô định hình nên chiếc cốc thủy tinh không có cấu trúc tinh thể. Muối ăn, kim cương, thạch anh đều là chất rắn kết tinh.'
    },
    {
      id: 27,
      topic: 'Sự chuyển thể của các chất',
      question: 'Hiện tượng vào mùa đông ở các nước vùng băng tuyết thường xảy ra sự cố vỡ đường ống nước là do:',
      options: {
        A: 'tuyết rơi nhiều đè nặng thành ống.',
        B: 'thể tích nước khi đông đặc tăng lên gây ra áp lực lớn lên thành ống.',
        C: 'trời lạnh làm đường ống bị cứng dòn và rạn nứt.',
        D: 'các phương án đưa ra đều sai.'
      },
      answer: 'B',
      explanation: 'Nước có tính chất đặc biệt: khi đông đặc thành nước đá ở 0°C, thể tích của nó tăng lên khoảng 9% (khối lượng riêng giảm), gây áp lực rất lớn làm nứt vỡ đường ống dẫn nước.'
    },
    {
      id: 28,
      topic: 'Sự chuyển thể của các chất',
      question: 'Phát biểu nào sau đây là sai khi nói về sự nóng chảy và sự đông đặc?',
      options: {
        A: 'Các chất khác nhau sẽ nóng chảy (hay đông đặc) ở nhiệt độ khác nhau.',
        B: 'Đối với một chất nhất định, nếu nóng chảy ở nhiệt độ nào thì sẽ đông đặc ở nhiệt độ ấy.',
        C: 'Nhiệt độ của vật sẽ tăng dần trong quá trình nóng chảy và giảm dần trong quá trình đông đặc.',
        D: 'Phần lớn các chất nóng chảy (hay đông đặc) ở một nhiệt độ nhất định.'
      },
      answer: 'C',
      explanation: 'Đối với chất rắn kết tinh, trong suốt quá trình nóng chảy hay đông đặc, nhiệt độ của vật được giữ KHÔNG ĐỔI.'
    },
    {
      id: 29,
      topic: 'Sự chuyển thể của các chất',
      question: 'Trong các câu so sánh nhiệt độ nóng chảy và nhiệt độ đông đặc của nước dưới đây, câu nào đúng?',
      options: {
        A: 'Nhiệt độ nóng chảy cao hơn nhiệt độ đông đặc.',
        B: 'Nhiệt độ nóng chảy thấp hơn nhiệt độ đông đặc.',
        C: 'Nhiệt độ nóng chảy có thể cao hơn, cũng có thể thấp hơn nhiệt độ đông đặc.',
        D: 'Nhiệt độ nóng chảy bằng nhiệt độ đông đặc.'
      },
      answer: 'D',
      explanation: 'Nước đá là chất rắn kết tinh nên nhiệt độ nóng chảy của nước đá bằng nhiệt độ đông đặc của nước (ở áp suất 1 atm là 0°C).'
    },
    {
      id: 30,
      topic: 'Sự chuyển thể của các chất',
      question: 'Nhiệt độ đông đặc của rượu là −117°C, của thủy ngân là −38,83°C. Ở nước lạnh người ta dùng nhiệt kế rượu hay nhiệt kế thủy ngân? Vì sao?',
      options: {
        A: 'Dùng nhiệt kế thủy ngân vì nhiệt kế thủy ngân rất chính xác.',
        B: 'Dùng nhiệt kế thủy ngân vì nhiệt độ đông đặc của thủy ngân cao hơn nhiệt độ đông đặc của rượu.',
        C: 'Dùng nhiệt kế thủy ngân vì ở âm vài chục °C rượu bay hơi hết.',
        D: 'Dùng nhiệt kế rượu vì nhiệt kế rượu có thể đo nhiệt độ môi trường −50°C.'
      },
      answer: 'D',
      explanation: 'Ở các vùng hàn đới, nhiệt độ không khí mùa đông có thể xuống tới −40°C đến −50°C. Thủy ngân đã bị đông đặc ở −38,83°C nên không đo được, còn rượu tới −117°C mới đông đặc nên dùng được nhiệt kế rượu.'
    },
    {
      id: 31,
      topic: 'Sự chuyển thể của các chất',
      question: 'Khi trời lạnh, ô tô có bật điều hòa và đóng kín cửa, hành khách ngồi trên ô tô thấy hiện tượng gì?',
      options: {
        A: 'Nước bốc hơi trên xe.',
        B: 'Hơi nước ngưng tụ tạo thành giọt nước phía trong kính xe.',
        C: 'Hơi nước ngưng tụ tạo thành giọt nước phía ngoài kính xe.',
        D: 'Không có hiện tượng gì'
      },
      answer: 'B',
      explanation: 'Khi trời lạnh, mặt kính xe tiếp xúc với không khí lạnh bên ngoài nên có nhiệt độ thấp. Trong xe ấm và có nhiều hơi nước do hành khách thở ra, khi gặp mặt trong của kính lạnh sẽ ngưng tụ thành các giọt nước mờ ở phía trong kính xe.'
    },
    {
      id: 32,
      topic: 'Sự chuyển thể của các chất',
      question: 'Trường hợp nào sau đây không liên quan đến sự nóng chảy và đông đặc?',
      options: {
        A: 'Ngọn nến vừa tắt',
        B: 'Ngọn nến đang cháy',
        C: 'Cục nước đá lấy ra khỏi tủ lạnh',
        D: 'Ngọn đèn dầu đang cháy'
      },
      answer: 'D',
      explanation: 'Ngọn đèn dầu đang cháy là dầu hỏa lỏng thấm theo bấc và hóa hơi rồi cháy, không có quá trình nóng chảy hay đông đặc như sáp nến hay nước đá.'
    },
    {
      id: 33,
      topic: 'Sự chuyển thể của các chất',
      question: 'Mây được tạo thành từ',
      options: {
        A: 'nước bay hơi',
        B: 'khói',
        C: 'nước đông đặc',
        D: 'hơi nước ngưng tụ'
      },
      answer: 'D',
      explanation: 'Hơi nước bay lên cao gặp lạnh ngưng tụ thành những hạt nước nhỏ li ti tạo thành các đám mây.'
    },
    {
      id: 34,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Tìm phát biểu sai.',
      options: {
        A: 'Nội năng là một dạng năng lượng nên có thể chuyển hóa thành các dạng năng lượng khác',
        B: 'Nội năng của một vật phụ thuộc vào nhiệt độ và thể tích của vật.',
        C: 'Nội năng chính là nhiệt lượng của vật.',
        D: 'Nội năng của vật có thể tăng hoặc giảm.'
      },
      answer: 'C',
      explanation: 'Nội năng là tổng động năng và thế năng của các phân tử cấu tạo nên vật. Nhiệt lượng chỉ là số đo độ biến thiên của nội năng trong quá trình truyền nhiệt (một vật có nội năng chứ không "có" nhiệt lượng).'
    },
    {
      id: 35,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Cách nào sau đây không làm thay đổi nội năng của vật?',
      options: {
        A: 'Cọ xát vật lên mặt bàn.',
        B: 'Đốt nóng vật.',
        C: 'Làm lạnh vật.',
        D: 'Đưa vật lên cao.'
      },
      answer: 'D',
      explanation: 'Đưa vật lên cao chỉ làm thay đổi thế năng trọng trường (cơ năng vĩ mô) của cả vật, không làm thay đổi nhiệt độ hay thể tích nên không làm thay đổi nội năng của vật.'
    },
    {
      id: 36,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Trường hợp làm biến đổi nội năng không do thực hiện công là?',
      options: {
        A: 'Đun nóng nước bằng bếp.',
        B: 'Một viên bi bằng thép rơi xuống đất mềm.',
        C: 'Nén khí trong xilanh.',
        D: 'Cọ xát hai vật vào nhau.'
      },
      answer: 'A',
      explanation: 'Đun nóng nước bằng bếp là làm thay đổi nội năng bằng hình thức truyền nhiệt. Các trường hợp B, C, D đều là biến đổi nội năng bằng cách thực hiện công.'
    },
    {
      id: 37,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Trường hợp nội năng của vật bị biến đổi không phải do truyền nhiệt là:',
      options: {
        A: 'Chậu nước để ngoài nắng một lúc nóng lên.',
        B: 'Gió mùa đông bắc tràn về làm cho không khí lạnh đi',
        C: 'Khi trời lạnh, ta xoa hai bàn tay vào nhau cho ấm lên.',
        D: 'Cho cơm nóng vào bát thì bưng bát cũng thấy nóng.'
      },
      answer: 'C',
      explanation: 'Xoa hai bàn tay vào nhau cho ấm lên là thực hiện công cơ học (ma sát) chuyển hóa thành nội năng, không phải do truyền nhiệt.'
    },
    {
      id: 38,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt dung riêng của một chất có giá trị âm trong trường hợp nào sau đây',
      options: {
        A: 'Chất nhận nhiệt và tăng nhiệt độ.',
        B: 'Chất nhận nhiệt và giảm nhiệt độ.',
        C: 'Chất tỏa nhiệt và giảm nhiệt độ.',
        D: 'Chất tỏa nhiệt và giữ nguyên nhiệt độ.'
      },
      answer: 'B',
      explanation: 'Theo công thức c = Q / (m·ΔT), để c < 0 thì Q và ΔT phải trái dấu: tức là chất nhận nhiệt (Q > 0) nhưng lại giảm nhiệt độ (ΔT < 0) — hoặc tỏa nhiệt mà tăng nhiệt độ (xảy ra ở một số quá trình nhiệt động đặc biệt của khí hoặc hệ sao).'
    },
    {
      id: 39,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Sự truyền nhiệt là:',
      options: {
        A: 'Sự chuyển hóa năng lượng từ dạng này sang dạng khác.',
        B: 'Sự truyền trực tiếp nội năng từ vật này sang vật khác',
        C: 'Sự chuyển hóa năng lượng từ nội năng sang dạng khác.',
        D: 'Sự truyền trực tiếp nội năng và chuyển hóa năng lượng từ dạng này sang dạng khác.'
      },
      answer: 'B',
      explanation: 'Sự truyền nhiệt là quá trình truyền trực tiếp nội năng từ vật này sang vật khác (không có sự chuyển hóa từ dạng năng lượng khác sang nội năng như thực hiện công).'
    },
    {
      id: 40,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt lượng trao đổi trong quá trình truyền nhiệt không phụ thuộc vào:',
      options: {
        A: 'thời gian truyền nhiệt.',
        B: 'độ biến thiên nhiệt độ.',
        C: 'khối lượng của chất.',
        D: 'nhiệt dung riêng của chất.'
      },
      answer: 'A',
      explanation: 'Nhiệt lượng vật thu vào hay tỏa ra để thay đổi nhiệt độ được tính bởi Q = m·c·ΔT, phụ thuộc vào m, c và ΔT chứ không phụ thuộc vào quá trình đó diễn ra nhanh hay chậm (thời gian truyền nhiệt).'
    },
    {
      id: 41,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Đơn vị của nhiệt dung riêng của vật là:',
      options: {
        A: 'J/kg',
        B: 'kg/J',
        C: 'J/kg.K',
        D: 'kg/J.K'
      },
      answer: 'C',
      explanation: 'Từ c = Q / (m·ΔT), đơn vị chuẩn trong hệ SI của nhiệt dung riêng là J/(kg·K) (hoặc J/kg.độ).'
    },
    {
      id: 42,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt dung riêng của rượu là 2500 J/kg.K. Điều đó có nghĩa là gì?',
      options: {
        A: 'Để nâng 1kg rượu lên nhiệt độ bay hơi ta phải cung cấp cho nó một nhiệt lượng là 2500J.',
        B: '1kg rượu bị đông đặc thì giải phóng nhiệt lượng là 2500J.',
        C: 'Để nâng 1kg rượu tăng lên 1 độ ta cần cung cấp cho nó nhiệt lượng là 2500J.',
        D: 'Nhiệt lượng có trong 1kg chất ấy ở nhiệt độ bình thường.'
      },
      answer: 'C',
      explanation: 'Nhiệt dung riêng của một chất cho biết nhiệt lượng cần truyền cho 1 kg chất đó để nhiệt độ của nó tăng thêm 1 K (hay 1°C).'
    },
    {
      id: 43,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Có 4 bình A, B, C, D đều đựng nước ở cùng một nhiệt độ với thể tích tương ứng là: 1 lít, 2 lít, 3 lít, 4 lít. Sau khi dùng các đèn cồn giống hệt nhau để đun các bình này khác nhau. Hỏi bình nào có nhiệt độ thấp nhất?',
      options: {
        A: 'Bình A',
        B: 'Bình B',
        C: 'Bình C',
        D: 'Bình D'
      },
      answer: 'D',
      figure: 43,
      explanation: 'Cùng đun bởi các đèn cồn giống nhau trong cùng thời gian nên nhiệt lượng Q cung cấp là như nhau. Vì ΔT = Q / (m·c), bình D có thể tích nước lớn nhất (4 lít ⇒ khối lượng m lớn nhất) nên độ tăng nhiệt độ ΔT nhỏ nhất, do đó nhiệt độ cuối cùng của bình D thấp nhất.'
    },
    {
      id: 44,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt dung riêng của đồng lớn hơn chì. Vì vậy để tăng nhiệt độ của 3kg đồng và 3kg chì thêm 15°C thì:',
      options: {
        A: 'Khối chì cần nhiều nhiệt lượng hơn khối đồng.',
        B: 'Khối đồng cần nhiều nhiệt lượng hơn khối chì.',
        C: 'Hai khối đều cần nhiệt lượng như nhau.',
        D: 'Không khẳng định được.'
      },
      answer: 'B',
      explanation: 'Ta có Q = m·c·ΔT. Cùng khối lượng m = 3 kg và cùng độ tăng nhiệt độ ΔT = 15°C, vì c_đồng > c_chì nên Q_đồng > Q_chì.'
    },
    {
      id: 45,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Nội dung nguyên lí I nhiệt động lực học là:',
      options: {
        A: 'Độ biến thiên nội năng của vật bằng tổng công và nhiệt lượng mà vật nhận được.',
        B: 'Độ biến thiên nội năng của vật bằng tổng nhiệt lượng mà vật nhận được.',
        C: 'Độ biến thiên nội năng của vật bằng tổng công mà vật nhận được.',
        D: 'Độ biến thiên nội năng của vật bằng hiệu số công và nhiệt lượng mà vật nhận được.'
      },
      answer: 'A',
      explanation: 'Nguyên lí I nhiệt động lực học: Độ biến thiên nội năng của hệ bằng tổng công và nhiệt lượng mà hệ nhận được: ΔU = A + Q.'
    },
    {
      id: 46,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Biểu thức diễn tả đúng quá trình chất khí vừa nhận nhiệt vừa nhận công là?',
      options: {
        A: 'ΔU = A + Q; Q > 0; A < 0.',
        B: 'ΔU = Q; Q > 0.',
        C: 'ΔU = Q + A; Q < 0, A > 0',
        D: 'ΔU = Q + A; Q > 0, A > 0'
      },
      answer: 'D',
      explanation: 'Theo quy ước dấu của Nguyên lí I NĐLH (ΔU = Q + A): Hệ nhận nhiệt lượng thì Q > 0, hệ nhận công thì A > 0.'
    },
    {
      id: 47,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Nội năng của vật phụ thuộc vào',
      options: {
        A: 'nhiệt độ và thể tích của vật.',
        B: 'khối lượng và nhiệt độ của vật.',
        C: 'khối lượng và thể tích của vật.',
        D: 'khối lượng của vật.'
      },
      answer: 'A',
      explanation: 'Độ biến thiên nội năng của một lượng chất xác định phụ thuộc vào nhiệt độ (quyết định động năng phân tử) và thể tích của vật (quyết định khoảng cách và thế năng tương tác phân tử).'
    },
    {
      id: 48,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Hiện tượng quả bóng bàn bị móp (nhưng chưa bị thủng) khi thả vào cốc nước nóng sẽ phồng trở lại là do',
      options: {
        A: 'Nội năng của chất khí tăng lên.',
        B: 'Nội năng của chất khí giảm xuống.',
        C: 'Nội năng của chất khí không thay đổi.',
        D: 'Nội năng của chất khí bị mất đi.'
      },
      answer: 'A',
      explanation: 'Khi thả vào nước nóng, khí trong quả bóng bàn nhận nhiệt lượng làm nhiệt độ và nội năng của khí tăng lên, áp suất khí tăng đẩy vỏ bóng phồng trở lại.'
    },
    {
      id: 49,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Cung cấp cho vật một công là 200 J nhưng nhiệt lượng bị thất thoát ra môi trường bên ngoài là 120 J. Nội năng của vật',
      options: {
        A: 'tăng 80J.',
        B: 'giảm 80J.',
        C: 'không thay đổi.',
        D: 'giảm 320J.'
      },
      answer: 'A',
      explanation: 'Vật nhận công: A = +200 J. Vật tỏa nhiệt ra môi trường: Q = −120 J. Độ biến thiên nội năng: ΔU = A + Q = 200 − 120 = +80 J > 0 ⇒ Nội năng của vật tăng 80 J.'
    },
    {
      id: 50,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Hệ thức ΔU = A + Q khi Q < 0 và A > 0 mô tả quá trình',
      options: {
        A: 'hệ truyền nhiệt và sinh công.',
        B: 'hệ nhận nhiệt và sinh công.',
        C: 'hệ truyền nhiệt và nhận công.',
        D: 'hệ nhận nhiệt và nhận công.'
      },
      answer: 'C',
      explanation: 'Quy ước dấu: Q < 0 nghĩa là hệ truyền nhiệt (tỏa nhiệt) ra bên ngoài; A > 0 nghĩa là hệ nhận công từ bên ngoài.'
    },
    {
      id: 51,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Các chất nào sau đây đều là chất rắn kết tinh?',
      options: {
        A: 'Thạch anh, muối ăn, đồng.',
        B: 'Thạch anh, thủy tinh, đồng.',
        C: 'Thạch anh, nhựa thông, đồng.',
        D: 'Nhựa thông, nhựa đường, cao su.'
      },
      answer: 'A',
      explanation: 'Thạch anh, muối ăn và đồng đều có cấu trúc mạng tinh thể nên là chất rắn kết tinh. (Thủy tinh, nhựa thông, nhựa đường, cao su là chất rắn vô định hình).'
    },
    {
      id: 52,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Thủy tinh đã được phát hiện và sử dụng trong cuộc sống con người 4000 năm. Thủy tinh là chất rắn vô định hình',
      options: {
        A: 'không có nhiệt độ nóng chảy xác định, các phân tử tạo thành mạng tinh thể.',
        B: 'không có nhiệt độ nóng chảy xác định, các phân tử không tạo thành mạng tinh thể.',
        C: 'có nhiệt độ nóng chảy xác định, các phân tử không tạo thành mạng tinh thể.',
        D: 'có nhiệt độ nóng chảy xác định, các phân tử tạo thành mạng tinh thể.'
      },
      answer: 'B',
      explanation: 'Thủy tinh là chất rắn vô định hình nên các hạt cấu tạo không sắp xếp tuần hoàn thành mạng tinh thể và không có nhiệt độ nóng chảy xác định.'
    },
    {
      id: 53,
      topic: 'Sự chuyển thể của các chất',
      question: 'Quá trình thay đổi nào sau đây là sự chuyển thể?',
      options: {
        A: 'Làm nóng khối đồng đến 100°C.',
        B: 'Băng ở 0°C biến thành nước ở 0°C.',
        C: 'Một quả bóng bay được bơm phồng lên.',
        D: 'Cắt miếng sắt lớn thành nhiều miếng sắt nhỏ.'
      },
      answer: 'B',
      explanation: 'Băng (rắn) ở 0°C biến thành nước (lỏng) ở 0°C là quá trình chuyển thể (nóng chảy).'
    },
    {
      id: 54,
      topic: 'Sự chuyển thể của các chất',
      question: 'Viên băng phiến đặt trong tủ quần áo ngày càng nhỏ đi là do hiện tượng',
      options: {
        A: 'ngưng tụ.',
        B: 'hóa hơi.',
        C: 'thăng hoa.',
        D: 'nóng chảy.'
      },
      answer: 'C',
      explanation: 'Băng phiến (long não) chuyển trực tiếp từ thể rắn sang thể hơi ở nhiệt độ phòng mà không qua thể lỏng — đó là hiện tượng thăng hoa.'
    },
    {
      id: 55,
      topic: 'Sự chuyển thể của các chất',
      question: 'Một bạn học sinh dùng máy sấy để làm khô quần áo ướt. Sự chuyển thể nào xảy ra trong quá trình này?',
      options: {
        A: 'Nóng chảy.',
        B: 'Đông đặc.',
        C: 'Ngưng tụ.',
        D: 'Hóa hơi.'
      },
      answer: 'D',
      explanation: 'Nước trong quần áo ướt chuyển từ thể lỏng sang thể hơi (bay hơi / hóa hơi) nhờ luồng khí nóng và gió từ máy sấy.'
    },
    {
      id: 56,
      topic: 'Sự chuyển thể của các chất',
      question: 'Vào mùa đông ở miền Bắc có thể thấy mọi người ở ngoài trời liên tục thở ra "khói trắng". Sự chuyển thể nào đã gây ra hiện tượng này?',
      options: {
        A: 'Nóng chảy.',
        B: 'Ngưng tụ.',
        C: 'Đông đặc.',
        D: 'Hóa hơi.'
      },
      answer: 'B',
      explanation: 'Hơi nước ấm trong hơi thở khi gặp không khí lạnh bên ngoài bị ngưng tụ thành các hạt nước nhỏ li ti lơ lửng tạo thành làn sương ("khói trắng").'
    },
    {
      id: 57,
      topic: 'Sự chuyển thể của các chất',
      question: 'Xoa cồn lên mu bàn tay sẽ có cảm giác mát lạnh là do cồn',
      options: {
        A: 'thu nhiệt trong quá trình hóa hơi.',
        B: 'tỏa nhiệt trong quá trình ngưng tụ.',
        C: 'thu nhiệt trong quá trình nóng chảy.',
        D: 'tỏa nhiệt trong quá trình đông đặc.'
      },
      answer: 'A',
      explanation: 'Cồn rất dễ bay hơi (hóa hơi). Khi bay hơi, cồn thu nhiệt lượng từ da tay làm da tay mất nhiệt nên ta cảm thấy mát lạnh.'
    },
    {
      id: 58,
      topic: 'Sự chuyển thể của các chất',
      question: 'Các quá trình chuyển thể nào sau đây đều là tỏa nhiệt?',
      options: {
        A: 'đông đặc và ngưng tụ.',
        B: 'hóa hơi và ngưng tụ.',
        C: 'đông đặc và nóng chảy.',
        D: 'nóng chảy và ngưng tụ'
      },
      answer: 'A',
      explanation: 'Nóng chảy và hóa hơi là các quá trình thu nhiệt; ngược lại, đông đặc và ngưng tụ là các quá trình tỏa nhiệt.'
    },
    {
      id: 59,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Một đạo cụ ảo thuật được làm bằng hợp kim, nó không nóng chảy khi cầm trên tay ở nhiệt độ 36°C trong thời gian dài, nhưng sẽ nóng chảy khi thả trong nước ở nhiệt độ 60°C. Điểm nóng chảy của hợp kim có thể là',
      options: {
        A: '16°C.',
        B: '30°C.',
        C: '47°C.',
        D: '70°C.'
      },
      answer: 'C',
      explanation: 'Hợp kim vẫn ở thể rắn ở 36°C và nóng chảy trong nước ở 60°C ⇒ Nhiệt độ nóng chảy phải nằm trong khoảng 36°C < T_nc ≤ 60°C. Do đó 47°C là giá trị phù hợp.'
    },
    {
      id: 60,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Đơn vị nào sau đây là đơn vị của nhiệt nóng chảy riêng của vật rắn?',
      options: {
        A: 'J/(kg.K).',
        B: 'J/kg.',
        C: 'J.',
        D: 'J/K.'
      },
      answer: 'B',
      explanation: 'Từ công thức Q = λ·m ⇒ λ = Q / m, đơn vị của nhiệt nóng chảy riêng λ là Jun trên kilôgam (J/kg).'
    },
    {
      id: 61,
      topic: 'Sự chuyển thể của các chất',
      question: 'Phát biểu nào sau đây là sai khi nói về sự đông đặc của vật?',
      options: {
        A: 'Sự đông đặc là quá trình chuyển từ thể lỏng sang thể rắn.',
        B: 'Với một chất rắn kết tinh, nhiệt độ đông đặc luôn nhỏ hơn nhiệt độ nóng chảy.',
        C: 'Trong quá trình đông đặc, nhiệt độ của vật không thay đổi.',
        D: 'Trong quá trình đông đặc, nội năng của vật giảm.'
      },
      answer: 'B',
      explanation: 'Với một chất rắn kết tinh ở áp suất xác định, nhiệt độ đông đặc luôn BẰNG nhiệt độ nóng chảy.'
    },
    {
      id: 62,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt lượng mà chất rắn kết tinh hấp thụ trong quá trình nóng chảy chủ yếu được sử dụng để',
      options: {
        A: 'phá huỷ cấu trúc mạng tinh thể và tăng động năng của các phân tử.',
        B: 'phá huỷ cấu trúc mạng tinh thể và tăng thế năng của các phân tử.',
        C: 'phá huỷ cấu trúc mạng tinh thể và tăng thế năng, động năng của các phân tử.',
        D: 'phá huỷ cấu trúc mạng tinh thể nhưng không làm tăng thế năng, động năng của các phân tử.'
      },
      answer: 'B',
      explanation: 'Trong suốt quá trình nóng chảy của chất rắn kết tinh, nhiệt độ không đổi nên động năng trung bình của các phân tử không đổi. Nhiệt lượng cung cấp được dùng để phá vỡ liên kết mạng tinh thể, làm tăng thế năng tương tác của các phân tử.'
    },
    {
      id: 63,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Hình bên là đồ thị biểu diễn sự phụ thuộc nhiệt độ T (°C) của một chất rắn kết tinh theo thời gian t (phút) khi nó nhận nhiệt lượng liên tục. Nhiệt độ nóng chảy của chất rắn kết tinh này là',
      options: {
        A: '40°C.',
        B: '44°C.',
        C: '48°C.',
        D: '52°C.'
      },
      answer: 'C',
      figure: 63,
      explanation: 'Trên đồ thị, từ phút thứ 6 đến phút thứ 12, đồ thị là đoạn thẳng nằm ngang ứng với T = 48°C (nhiệt độ không đổi trong suốt quá trình nóng chảy). Vậy nhiệt độ nóng chảy của chất rắn là 48°C.'
    },
    {
      id: 64,
      topic: 'Sự chuyển thể của các chất',
      question: 'Phát biểu nào sau đây về sự bay hơi và sự sôi là sai?',
      options: {
        A: 'Sự bay hơi có thể xảy ra ở mọi nhiệt độ.',
        B: 'Sự sôi xảy ra ở nhiệt độ sôi.',
        C: 'Sự bay hơi và sự sôi đều chỉ xảy ra ở mặt thoáng chất lỏng.',
        D: 'Nhiệt độ sôi phụ thuộc vào áp suất khí trên mặt thoáng chất lỏng.'
      },
      answer: 'C',
      explanation: 'Sự bay hơi chỉ xảy ra trên mặt thoáng của chất lỏng, còn sự sôi là sự hóa hơi xảy ra đồng thời ở cả trong lòng và trên mặt thoáng của chất lỏng.'
    },
    {
      id: 65,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Phát biểu nào sau đây là đúng khi nói về nội năng của vật?',
      options: {
        A: 'Nước ở 0°C có nội năng lớn hơn nước đá ở 0°C.',
        B: '100 g nước ở 0°C có nội năng lớn hơn 100 g nước đá ở 0°C.',
        C: 'Nội năng của phân tử nước lớn hơn nội năng của phân tử nước đá.',
        D: 'Vật có động năng càng lớn thì nội năng của nó càng lớn.'
      },
      answer: 'B',
      explanation: 'Để 100 g nước đá ở 0°C nóng chảy thành 100 g nước ở 0°C, nó phải nhận thêm nhiệt lượng Q = m·λ > 0 ⇒ Nội năng của 100 g nước ở 0°C lớn hơn nội năng của 100 g nước đá ở 0°C. (Câu A thiếu điều kiện cùng khối lượng).'
    },
    {
      id: 66,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Khi nước đá ở 0°C tan thành nước ở 0°C thì',
      options: {
        A: 'động năng trung bình của các phân tử tăng nhưng thế năng của các phân tử không đổi.',
        B: 'động năng trung bình của các phân tử không đổi và thế năng của các phân tử tăng lên.',
        C: 'cả động năng trung bình và thế năng của các phân tử đều tăng.',
        D: 'cả động năng trung bình và thế năng của các phân tử giảm đi.'
      },
      answer: 'B',
      explanation: 'Quá trình tan (nóng chảy) diễn ra ở cùng nhiệt độ 0°C nên động năng trung bình của các phân tử không đổi; nước đá thu nhiệt để phá vỡ mạng tinh thể nên thế năng của các phân tử tăng lên.'
    },
    {
      id: 67,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Biết nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg. Nhiệt lượng cần cung cấp để làm nóng chảy 5 kg nước đá ở 0°C là',
      options: {
        A: '1,7.10⁶ J.',
        B: '1,7.10⁹ J.',
        C: '6,8.10⁴ J.',
        D: '6,8.10⁷ J.'
      },
      answer: 'A',
      explanation: 'Áp dụng công thức tính nhiệt nóng chảy: Q = λ · m = 3,4.10⁵ × 5 = 1,7.10⁶ J.'
    },
    {
      id: 68,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Rượu ethylic có nhiệt hóa hơi riêng là 9.10⁵ J/kg và khối lượng riêng là 0,8 kg/lít. Nhiệt lượng cần thiết để 10 lít rượu ethylic hóa hơi hoàn toàn ở nhiệt độ sôi là',
      options: {
        A: '8,9.10⁵ J.',
        B: '1,125.10⁵ J.',
        C: '7,2.10⁶ J.',
        D: '9.10⁵ J.'
      },
      answer: 'C',
      explanation: 'Khối lượng của 10 lít rượu là: m = D · V = 0,8 × 10 = 8 kg. Nhiệt lượng cần cung cấp để hóa hơi hoàn toàn là: Q = L · m = 9.10⁵ × 8 = 7,2.10⁶ J.'
    },
    {
      id: 69,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Biết nhiệt nóng chảy riêng của nhôm là 4.10⁵ J/kg, của chì là 2,5.10⁴ J/kg. Nhiệt lượng cần thiết để làm nóng chảy hoàn toàn 1 kg nhôm ở nhiệt độ nóng chảy có thể làm nóng chảy được bao nhiêu kg chì ở nhiệt độ nóng chảy?',
      options: {
        A: '1 kg.',
        B: '2,5 kg.',
        C: '12,5 kg.',
        D: '16 kg.'
      },
      answer: 'D',
      explanation: 'Nhiệt lượng làm nóng chảy 1 kg nhôm: Q = m_Al · λ_Al = 1 × 4.10⁵ = 4.10⁵ J. Khối lượng chì nóng chảy được bởi nhiệt lượng này: m_Pb = Q / λ_Pb = 4.10⁵ / (2,5.10⁴) = 16 kg.'
    },
    {
      id: 70,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Hình bên là đồ thị biểu diễn sự phụ thuộc nhiệt độ T (°C) của một chất rắn kết tinh theo nhiệt lượng mà nó nhận được. Gọi nhiệt dung riêng khi nó ở thể rắn và thể lỏng tương ứng là cR và cL. So sánh đúng là',
      options: {
        A: 'cR > cL.',
        B: 'cR < cL.',
        C: 'cR = cL.',
        D: 'cR ≥ cL.'
      },
      answer: 'B',
      figure: 70,
      explanation: 'Ta có Q = m·c·ΔT ⇒ Độ dốc của đồ thị T theo Q là ΔT / ΔQ = 1 / (m·c). Trên đồ thị, đoạn thẳng ở giai đoạn thể rắn có độ dốc lớn hơn đoạn thẳng ở giai đoạn thể lỏng ⇒ 1/(m·cR) > 1/(m·cL) ⇒ cR < cL.'
    },
    {
      id: 71,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt dung riêng của nước là 4200 J/(kg.K) và nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg. Nhiệt lượng cần cung cấp để chuyển 1,5 kg nước đá ở 0°C thành nước ở 60°C là',
      options: {
        A: '516 kJ.',
        B: '592 kJ.',
        C: '888 kJ.',
        D: '672 kJ.'
      },
      answer: 'C',
      explanation: 'Nhiệt lượng cần cung cấp gồm làm nóng chảy 1,5 kg đá ở 0°C và đun nước từ 0°C lên 60°C: Q = m·λ + m·c·Δt = 1,5 × 3,4.10⁵ + 1,5 × 4200 × 60 = 510 000 + 378 000 = 888 000 J = 888 kJ.'
    },
    {
      id: 72,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Thả 100 g nước đá ở 0°C vào 300 g nước ở 20°C. Biết nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg và nhiệt dung riêng của nước là 4200 J/(kg.K). Khi cân bằng nhiệt, nước đá còn lại có khối lượng là',
      options: {
        A: '74 g.',
        B: '26 g.',
        C: '64 g.',
        D: '36 g.'
      },
      answer: 'B',
      explanation: 'Nhiệt lượng tối đa 300 g nước tỏa ra khi hạ về 0°C: Q_tỏa = 0,3 × 4200 × 20 = 25 200 J. Khối lượng nước đá tan được là: m_tan = Q_tỏa / λ = 25 200 / (3,4.10⁵) ≈ 0,0741 kg = 74 g. Khối lượng nước đá còn lại là: 100 − 74 = 26 g.'
    },
    {
      id: 73,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Thả khối nước đá khối lượng 1,5 kg vào 0,6 kg nước ở 6°C. Khi cân bằng nhiệt, lượng nước còn lại 0,5 kg. Biết nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg và nhiệt dung riêng của nước và của nước đá lần lượt là 4200 J/(kg.K) và 1800 J/(kg.K). Nhiệt độ ban đầu của khối nước đá là',
      options: {
        A: '−33,8°C.',
        B: '−68,5°C.',
        C: '−25,4°C.',
        D: '−18,2°C.'
      },
      answer: 'D',
      explanation: 'Lượng nước còn lại 0,5 kg ⇒ đã có 0,6 − 0,5 = 0,1 kg nước đông đặc thành đá ở 0°C. Nhiệt lượng nước tỏa ra: Q_tỏa = 0,6 × 4200 × 6 + 0,1 × 3,4.10⁵ = 49 120 J. Nước đá thu nhiệt tăng từ t₀ lên 0°C: 1,5 × 1800 × (0 − t₀) = 49 120 ⇒ t₀ ≈ −18,2°C.'
    },
    {
      id: 74,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Một viên nước đá khối lượng 50 g ở −15°C được thả vào 200 g nước ở 25°C. Biết nhiệt nóng chảy riêng của nước đá là 3,36.10⁵ J/kg và nhiệt dung riêng của nước và của nước đá lần lượt là 4200 J/(kg.K) và 2100 J/(kg.K). Khi cân bằng nhiệt, nhiệt độ của hệ là',
      options: {
        A: '2,5°C.',
        B: '8°C.',
        C: '0°C.',
        D: '5°C.'
      },
      answer: 'A',
      explanation: 'Nhiệt lượng đá thu để tăng từ −15°C lên 0°C và tan hoàn toàn: Q₁ = 0,05 × 2100 × 15 + 0,05 × 3,36.10⁵ = 18 375 J. Nước ở 25°C hạ về 0°C tỏa ra: Q₂ = 0,2 × 4200 × 25 = 21 000 J > Q₁ ⇒ đá tan hết. Nhiệt độ cân bằng: (0,05 + 0,2) × 4200 × t = 21 000 − 18 375 = 2625 ⇒ t = 2,5°C.'
    },
    {
      id: 75,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Thả 2 kg nước đá ở −20°C vào 5 kg nước ở 20°C trong bình cách nhiệt có nhiệt dung không đáng kể. Biết nhiệt nóng chảy riêng của nước đá là 80 kcal/kg, nhiệt dung riêng của nước và nước đá lần lượt là 1 kcal/(kg.K) và 0,5 kcal/(kg.K). Khi cân bằng nhiệt, khối lượng nước có trong bình là',
      options: {
        A: '4 kg.',
        B: '6 kg.',
        C: '5 kg.',
        D: '7 kg.'
      },
      answer: 'B',
      explanation: 'Nước hạ từ 20°C xuống 0°C tỏa ra: Q_tỏa = 5 × 1 × 20 = 100 kcal. Đá tăng từ −20°C lên 0°C thu: Q₁ = 2 × 0,5 × 20 = 20 kcal. Phần nhiệt lượng còn lại ΔQ = 80 kcal làm tan thêm Δm = 80 / 80 = 1 kg nước đá. Vậy tổng khối lượng nước trong bình là 5 + 1 = 6 kg.'
    },
    {
      id: 76,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Một miếng đồng có khối lượng 6 kg ở nhiệt độ t(°C) và 2 kg nước đá ở −20°C được đặt vào bình cách nhiệt. Sau khi đạt cân bằng nhiệt, trong bình có 0,8 kg nước. Biết nhiệt dung riêng của nước đá là 2100 J/(kg.K), của đồng là 390 J/(kg.K) và nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg. Nhiệt độ ban đầu t của miếng đồng là',
      options: {
        A: '120°C.',
        B: '127°C.',
        C: '150°C.',
        D: '207°C.'
      },
      answer: 'C',
      explanation: 'Trong bình chỉ có 0,8 kg nước (< 2 kg đá) nên đá chỉ mới tan 0,8 kg, nhiệt độ cân bằng là 0°C. Nhiệt lượng đá thu vào: Q_thu = 2 × 2100 × 20 + 0,8 × 3,34.10⁵ = 351 200 J. Đồng tỏa nhiệt: 6 × 390 × t = 351 200 ⇒ t ≈ 150°C.'
    },
    {
      id: 77,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Thả cục nước đá khối lượng 0,2 kg ở −20°C vào 2,0 kg nước ở 25°C. Biết nhiệt dung riêng của nước và của nước đá lần lượt là 4200 J/(kg.K) và 1800 J/(kg.K); nhiệt nóng chảy riêng của nước đá là 3,4.10⁵ J/kg. Khi cân bằng nhiệt, nhiệt độ của hỗn hợp có giá trị gần nhất với giá trị nào sau đây?',
      options: {
        A: '15°C.',
        B: '10°C.',
        C: '5°C.',
        D: '0°C.'
      },
      answer: 'A',
      explanation: 'Nhiệt lượng làm 0,2 kg đá tăng lên 0°C và tan hết: Q₁ = 0,2 × 1800 × 20 + 0,2 × 3,4.10⁵ = 75 200 J. Nhiệt lượng 2,0 kg nước hạ về 0°C: Q₂ = 2,0 × 4200 × 25 = 210 000 J. Nhiệt độ cân bằng: (0,2 + 2,0) × 4200 × t = 210 000 − 75 200 ⇒ t ≈ 14,59°C (gần 15°C nhất).'
    },
    {
      id: 78,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Dẫn 0,1 kg hơi nước ở nhiệt độ 100°C vào một nhiệt lượng kế cách nhiệt có chứa 2 kg nước ở nhiệt độ 25°C. Biết nước có nhiệt dung riêng là 4200 J/(kg.K) và nhiệt hóa hơi riêng là 2,3.10⁶ J/kg. Khi cân bằng nhiệt, nhiệt độ của hỗn hợp có giá trị gần nhất với giá trị nào sau đây?',
      options: {
        A: '45°C.',
        B: '65°C.',
        C: '55°C.',
        D: '77°C.'
      },
      answer: 'C',
      explanation: 'Phương trình cân bằng nhiệt: 0,1 × 2,3.10⁶ + 0,1 × 4200 × (100 − t) = 2 × 4200 × (t − 25) ⇒ 230 000 + 42 000 − 420t = 8400t − 210 000 ⇒ 8820t = 482 000 ⇒ t ≈ 54,65°C (gần 55°C nhất).'
    },
    {
      id: 79,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Dẫn m (kg) hơi nước ở 100°C vào 1 kg nước đá ở 0°C. Khi cân bằng nhiệt thu được nước ở 30°C. Biết nhiệt nóng chảy riêng của nước đá là 336 J/g và nhiệt hóa hơi riêng của nước là 2268 J/g và nhiệt dung riêng của nước là 4,2 J/(g.K). Giá trị của m là',
      options: {
        A: '0,36 kg.',
        B: '0,42 kg.',
        C: '0,27 kg.',
        D: '0,18 kg.'
      },
      answer: 'D',
      explanation: 'Phương trình cân bằng nhiệt: m·[2268 + 4,2×(100 − 30)] = 1·[336 + 4,2×30] ⇒ 2562·m = 462 ⇒ m ≈ 0,18 kg.'
    },
    {
      id: 80,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Câu nào sau đây nói về nội năng là đúng ?',
      options: {
        A: 'Nội năng là nhiệt lượng.',
        B: 'Nội năng của vật A lớn hơn nội năng của vật B thì nhiệt độ của vật cũng lớn hơn nhiệt độ của vật.',
        C: 'Nội năng của vật chỉ thay đổi trong quá trình truyền nhiệt, không thay đổi trong quá trình thực hiện công.',
        D: 'Nội năng là một dạng năng lượng.'
      },
      answer: 'D',
      explanation: 'Nội năng của vật là một dạng năng lượng (tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật).'
    },
    {
      id: 81,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Nội năng của một vật là',
      options: {
        A: 'tổng động năng và thế năng của vật.',
        B: 'tổng động năng và thế năng của các phân tử cấu tạo nên vật.',
        C: 'tổng nhiệt lượng và cơ năng mà vật nhận được trong quá trình truyền nhiệt và thực hiện công.',
        D: 'nhiệt lượng vật nhận được trong quá trình truyền nhiệt.'
      },
      answer: 'B',
      explanation: 'Trong nhiệt động lực học, nội năng của một vật là tổng động năng chuyển động nhiệt và thế năng tương tác của các phân tử cấu tạo nên vật.'
    },
    {
      id: 82,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Trường hợp nào làm biến đổi nội năng do truyền nhiệt?',
      options: {
        A: 'Đun nóng nước bằng bếp.',
        B: 'Một viên bi bằng thép rơi xuống đất mềm.',
        C: 'Nén khí trong xilanh.',
        D: 'Cọ xát hai vật vào nhau.'
      },
      answer: 'A',
      explanation: 'Đun nóng nước bằng bếp là quá trình truyền nhiệt từ ngọn lửa bếp sang nước; các phương án B, C, D là thực hiện công.'
    },
    {
      id: 83,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Phát biểu nào sau đây về nội năng là đúng?',
      options: {
        A: 'Nội năng của một vật chỉ phụ thuộc vào nhiệt độ của vật.',
        B: 'Nội năng của một vật chỉ phụ thuộc vào thể tích của vật.',
        C: 'Nội năng của một vật chỉ có thể thay đổi thông qua sự truyền nhiệt.',
        D: 'Nội năng của một vật có thể thay đổi bằng cách thực hiện công.'
      },
      answer: 'D',
      explanation: 'Nội năng của một vật phụ thuộc vào cả nhiệt độ và thể tích, và có thể bị biến đổi bằng hai cách: thực hiện công hoặc truyền nhiệt.'
    },
    {
      id: 84,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Khi nói về truyền nhiệt và thực hiện công, phát biểu nào sau đây là không đúng?',
      options: {
        A: 'Thực hiện công là quá trình có thể làm thay đổi nội năng của vật.',
        B: 'Trong thực hiện công có sự chuyển hóa từ nội năng thành cơ năng và ngược lại.',
        C: 'Trong truyền nhiệt có sự truyền động năng từ phân tử này sang phân tử khác.',
        D: 'Trong truyền nhiệt có sự chuyển hóa từ nội năng thành cơ năng và ngược lại.'
      },
      answer: 'D',
      explanation: 'Trong quá trình truyền nhiệt không có sự chuyển hóa giữa cơ năng và nội năng mà chỉ có sự truyền trực tiếp nội năng từ vật này sang vật khác.'
    },
    {
      id: 85,
      topic: 'Mô hình động học phân tử',
      question: 'Khi nói về thuyết động học phân tử và nội năng, phát biểu nào sau đây là đúng?',
      options: {
        A: 'Khi nhiệt độ giảm thì động năng của mỗi phân tử giảm.',
        B: 'Chuyển động ngẫu nhiên của hạt phấn trong nước được gọi là chuyển động Brown.',
        C: 'Chỉ có sự truyền nhiệt mới có thể làm thay đổi nội năng của vật.',
        D: 'Động năng và thế năng hấp dẫn của một vật cũng là một phần nội năng của vật đó.'
      },
      answer: 'B',
      explanation: 'Chuyển động hỗn loạn không ngừng của các hạt phấn hoa rất nhỏ trong nước (do các phân tử nước va chạm) được gọi là chuyển động Brown.'
    },
    {
      id: 86,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Vật được cấu tạo từ một số lượng lớn các phân tử. Phát biểu nào sau đây là đúng?',
      options: {
        A: 'Khi nhiệt độ của vật càng lớn thì chuyển động của từng phân tử càng nhanh.',
        B: 'Lực hút phân tử giảm khi khoảng cách giữa các phân tử giảm.',
        C: 'Nội năng của một vật phụ thuộc vào nhiệt độ và thể tích của vật.',
        D: 'Chỉ khi thực hiện công lên vật mới có thể làm tăng nội năng của vật đó.'
      },
      answer: 'C',
      explanation: 'Nội năng của vật bằng tổng động năng (phụ thuộc nhiệt độ T) và thế năng tương tác phân tử (phụ thuộc thể tích V) nên nội năng phụ thuộc vào T và V.'
    },
    {
      id: 87,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Trường hợp nào sau đây nội năng của vật bị thay đổi nhờ quá trình truyền nhiệt?',
      options: {
        A: 'Đun nóng nước trên bếp.',
        B: 'Lưỡi cưa nóng lên khi cắt gỗ.',
        C: 'Lưỡi dao nóng lên khi mài.',
        D: 'Ô tô phanh gấp làm lốp nóng lên.'
      },
      answer: 'A',
      explanation: 'Đun nóng nước trên bếp làm thay đổi nội năng nhờ truyền nhiệt; các trường hợp B, C, D là do thực hiện công ma sát.'
    },
    {
      id: 88,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Quá trình nào sau đây làm biến đổi nội năng của vật thông qua truyền nhiệt?',
      options: {
        A: 'Xoa tay vào mùa đông làm ấm.',
        B: 'Người xưa khoan vào gỗ để tạo lửa.',
        C: 'Làm nóng khí bằng cách hơ ống nghiệm.',
        D: 'Uốn qua lại sợi dây thép làm nó đứt.'
      },
      answer: 'C',
      explanation: 'Hơ ống nghiệm trên ngọn lửa làm khí bên trong nóng lên là quá trình truyền nhiệt.'
    },
    {
      id: 89,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Thực hiện công và truyền nhiệt là hai cách làm thay đổi làm nội năng của vật. Quá trình nào dưới đây nội năng của vật thay đổi do thực hiện công?',
      options: {
        A: 'Nồi nước nóng dần trên ngọn lửa.',
        B: 'Khí bị nén trong xilanh động cơ diesel.',
        C: 'Làm nóng các vật dưới ánh nắng.',
        D: 'Sắt nóng thả vào nước để giảm nhiệt độ.'
      },
      answer: 'B',
      explanation: 'Khí bị piston nén trong xilanh động cơ diesel nhận công cơ học nên nội năng và nhiệt độ tăng cao.'
    },
    {
      id: 90,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Trong số các hiện tượng sau đây, hiện tượng không thuộc sự biến đổi nội năng bằng cách thực hiện công là',
      options: {
        A: 'Lưỡi cưa nóng lên khi cắt gỗ.',
        B: 'Quẹt diêm làm đầu que diêm bốc cháy.',
        C: 'Hít thở vào tay để làm ấm chúng trong mùa đông.',
        D: 'Khi dòng điện chạy qua dây dẫn thì dây dẫn nóng lên.'
      },
      answer: 'C',
      explanation: 'Hà hơi (thở) vào bàn tay trong mùa đông là truyền nhiệt từ hơi thở ấm sang bàn tay.'
    },
    {
      id: 91,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Thực hiện công và truyền nhiệt là hai cách làm thay đổi làm nội năng của vật. Quá trình nào dưới đây nội năng của vật thay đổi do truyền nhiệt?',
      options: {
        A: 'Hai quả cầu kim loại nhỏ sau va chạm thì dính vào nhau và nhiệt độ tăng lên.',
        B: 'Viên đạn bắn vào khối gỗ, nhiệt độ của khối gỗ và viên đạn tăng lên.',
        C: 'Cho khối sắt nóng đỏ vào nước lạnh, nhiệt độ của nước sẽ tăng lên.',
        D: 'Búa đập vào đinh làm đinh trở nên nóng hơn.'
      },
      answer: 'C',
      explanation: 'Thả khối sắt nóng đỏ vào nước lạnh là sự truyền nhiệt trực tiếp từ sắt sang nước.'
    },
    {
      id: 92,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Quá trình nào sau đây làm biến đổi nội năng của vật thông qua thực hiện công?',
      options: {
        A: 'Khối sắt nóng lên trong ngọn lửa của đèn cồn.',
        B: 'Khối sắt nóng nguội dần khi đặt trong môi trường không khí.',
        C: 'Thiên thạch biến thành những quả cầu đỏ rực sau khi đi vào bầu khí quyển.',
        D: 'Sau khi thiên thạch rơi xuống trái đất, nó dần trở lại màu sắc ban đầu.'
      },
      answer: 'C',
      explanation: 'Thiên thạch bay với tốc độ rất lớn vào khí quyển bị lực cản/ma sát của không khí thực hiện công làm nội năng tăng vọt và nóng đỏ rực.'
    },
    {
      id: 93,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Nếu hệ nhận công mà không nhận hay tỏa nhiệt lượng thì nội năng của hệ',
      options: {
        A: 'tăng lên.',
        B: 'giảm đi.',
        C: 'giữ nguyên.',
        D: 'tăng lên hoặc giảm đi.'
      },
      answer: 'A',
      explanation: 'Theo nguyên lí I NĐLH: ΔU = A + Q. Khi Q = 0 và hệ nhận công (A > 0) thì ΔU = A > 0 ⇒ nội năng của hệ tăng lên.'
    },
    {
      id: 94,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Nếu hệ tỏa nhiệt lượng mà không thực hiện hay nhận công thì nội năng của hệ',
      options: {
        A: 'tăng lên.',
        B: 'giảm đi.',
        C: 'giữ nguyên.',
        D: 'tăng lên hoặc giảm đi.'
      },
      answer: 'B',
      explanation: 'Khi A = 0 và hệ tỏa nhiệt (Q < 0) thì ΔU = Q < 0 ⇒ nội năng của hệ giảm đi.'
    },
    {
      id: 95,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Phát biểu nào sau đây là đúng khi nói về nội năng?',
      options: {
        A: 'Thực hiện công và truyền nhiệt là những cách làm thay đổi nội năng của vật.',
        B: 'Nhiệt độ của vật không đổi thì nội năng của vật cũng không đổi.',
        C: 'Khi vật có trao đổi nhiệt thì nội năng thay đổi.',
        D: 'Nội năng của vật không phụ thuộc vào nhiệt độ và thể tích của nó.'
      },
      answer: 'A',
      explanation: 'Có hai cách làm thay đổi nội năng của vật là thực hiện công và truyền nhiệt.'
    },
    {
      id: 96,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Câu nào sau đây nói về truyền nhiệt và thực hiện công là không đúng?',
      options: {
        A: 'Thực hiện công là quá trình có thể làm thay đổi nội năng của vật.',
        B: 'Trong thực hiện công có sự chuyển hoá từ nội năng thành cơ năng và ngược lại.',
        C: 'Trong truyền nhiệt có sự truyền động năng từ phân tử này sang phân tử khác.',
        D: 'Trong truyền nhiệt có sự chuyển hoá từ cơ năng sang nội năng và ngược lại.'
      },
      answer: 'D',
      explanation: 'Trong truyền nhiệt chỉ có sự truyền nội năng từ vật này sang vật khác, không có sự chuyển hóa cơ năng ↔ nội năng.'
    },
    {
      id: 97,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Câu nào sau đây nói về nhiệt lượng là không đúng?',
      options: {
        A: 'Nhiệt lượng là số đo độ tăng nội năng của vật trong quá trình truyền nhiệt.',
        B: 'Một vật lúc nào cũng có nội năng, do đó lúc nào cũng có nhiệt lượng.',
        C: 'Đơn vị nhiệt lượng cũng là đơn vị nội năng.',
        D: 'Nhiệt lượng không phải là nội năng.'
      },
      answer: 'B',
      explanation: 'Một vật ở trạng thái bất kỳ luôn có nội năng, nhưng không "có" nhiệt lượng; nhiệt lượng chỉ là phần nội năng trao đổi trong quá trình truyền nhiệt.'
    },
    {
      id: 98,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Đơn vị nào sau đây không phải là đơn vị của nhiệt lượng?',
      options: {
        A: 'J',
        B: 'kJ',
        C: 'calo',
        D: 'N/m²'
      },
      answer: 'D',
      explanation: 'N/m² (Pascal) là đơn vị của áp suất, không phải đơn vị của nhiệt lượng.'
    },
    {
      id: 99,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Chọn phương án sai:',
      options: {
        A: 'Nhiệt lượng của vật phụ thuộc vào khối lượng, độ tăng nhiệt độ và nhiệt dung riêng của vật.',
        B: 'Khối lượng của vật càng lớn thì nhiệt lượng mà vật thu vào để nóng lên càng lớn',
        C: 'Độ tăng nhiệt độ của vật càng lớn thì nhiệt lượng mà vật thu vào để nóng lên càng nhỏ',
        D: 'Cùng một khối lượng và độ tăng nhiệt độ như nhau, vật nào có nhiệt dung riêng lớn hơn thì nhiệt lượng thu vào để nóng lên của vật đó lớn hơn.'
      },
      answer: 'C',
      explanation: 'Theo Q = m·c·Δt, độ tăng nhiệt độ Δt càng lớn thì nhiệt lượng Q vật thu vào để nóng lên càng lớn.'
    },
    {
      id: 100,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'J/kg.K là đơn vị của đại lượng nào dưới đây:',
      options: {
        A: 'Nội năng',
        B: 'Nhiệt lượng',
        C: 'Nhiệt dung riêng',
        D: 'Nhiệt năng'
      },
      answer: 'C',
      explanation: 'J/(kg.K) là đơn vị đo nhiệt dung riêng.'
    },
    {
      id: 101,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt dung riêng của nước là 4200J/kg.K, điều đó có nghĩa là :',
      options: {
        A: 'để nâng 1kg nước tăng lên 1 độ ta cần cung cấp cho nó nhiệt lượng là 4200J.',
        B: 'để nâng 1kg nước bay hơi ta phải cung cấp cho nó nhiệt lượng là 4200J.',
        C: '1kg nước khi biến thành nước đá sẽ giải phóng nhiệt lượng là 4200J.',
        D: 'để nâng 1kg nước giảm đi 1 độ ta cần cung cấp cho nó nhiệt lượng là 4200J.'
      },
      answer: 'A',
      explanation: 'Nhiệt dung riêng của nước là 4200 J/(kg.K) nghĩa là cần cung cấp 4200 J để làm 1 kg nước tăng thêm 1 K (hay 1°C).'
    },
    {
      id: 102,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt dung riêng của nhôm lớn hơn thép. Vì vậy để tăng nhiệt độ của 1kg nhôm và 1kg thép thêm 10°C thì:',
      options: {
        A: 'Khối nhôm cần nhiều nhiệt lượng hơn khối thép.',
        B: 'Khối thép cần nhiều nhiệt lượng hơn khối nhôm.',
        C: 'Hai khối đều cần nhiệt lượng như nhau.',
        D: 'Không khẳng định được.'
      },
      answer: 'A',
      explanation: 'Do Q = m·c·Δt, cùng m = 1 kg và Δt = 10°C, vì c_nhôm > c_thép nên nhôm cần nhiệt lượng lớn hơn thép.'
    },
    {
      id: 103,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Công A và nhiệt lượng Q trái dấu với nhau trong trường hợp hệ?',
      options: {
        A: 'Tỏa nhiệt và nhận công.',
        B: 'Tỏa nhiệt và sinh công.',
        C: 'Nhận nhiệt và nhận công.',
        D: 'Nhận công và biến đổi đoạn nhiệt.'
      },
      answer: 'A',
      explanation: 'Hệ tỏa nhiệt thì Q < 0, hệ nhận công thì A > 0 ⇒ A và Q trái dấu nhau.'
    },
    {
      id: 104,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Khi hai vật có nhiệt độ khác nhau tiếp xúc với nhau thì xảy ra quá trình truyền nhiệt. Quá trình này làm thay đổi',
      options: {
        A: 'khối lượng của các vật.',
        B: 'trọng lượng của các vật.',
        C: 'nội năng của các vật.',
        D: 'nhiệt dung riêng của các vật.'
      },
      answer: 'A',
      explanation: 'Theo bảng đáp án của bộ đề: Chọn A. (Lưu ý thảo luận trên lớp: Về bản chất vật lí, quá trình truyền nhiệt làm thay đổi nhiệt độ và nội năng của các vật — phương án C; giáo viên có thể lưu ý điểm này cho học sinh khi sửa bài).'
    },
    {
      id: 105,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Hệ thức ΔU = A + Q khi Q > 0 và A < 0 mô tả quá trình',
      options: {
        A: 'hệ truyền nhiệt và sinh công.',
        B: 'hệ nhận nhiệt và sinh công.',
        C: 'hệ truyền nhiệt và nhận công.',
        D: 'hệ nhận nhiệt và nhận công.'
      },
      answer: 'B',
      explanation: 'Theo quy ước dấu: Q > 0 là hệ nhận nhiệt, A < 0 là hệ sinh công (thực hiện công).'
    },
    {
      id: 106,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Một viên đạn bắn vào một khối gỗ đặt trên một mặt phẳng nằm ngang nhẵn thì toàn bộ động năng của viên đạn chuyển thành',
      options: {
        A: 'động năng của hệ (đạn + gỗ).',
        B: 'nội năng của khối gỗ.',
        C: 'nội năng của hệ (đạn + gỗ).',
        D: 'động năng và nội năng của hệ (đạn + gỗ).'
      },
      answer: 'D',
      explanation: 'Vì khối gỗ đặt trên mặt phẳng ngang nhẵn nên sau va chạm hệ (đạn + gỗ) tiếp tục chuyển động; do đó động năng ban đầu của đạn chuyển thành động năng và phần tăng nội năng của hệ (đạn + gỗ).'
    },
    {
      id: 107,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Trong một quá trình nén khí thì khí nhận công 800 J đồng thời khí tỏa nhiệt lượng 200 J. Nội năng của khí',
      options: {
        A: 'giảm đi 600 J.',
        B: 'tăng thêm 600 J.',
        C: 'giảm đi 1000 J.',
        D: 'tăng thêm 1000 J.'
      },
      answer: 'B',
      explanation: 'Khí nhận công A = +800 J và tỏa nhiệt Q = −200 J ⇒ ΔU = A + Q = 800 − 200 = +600 J (nội năng tăng thêm 600 J).'
    },
    {
      id: 108,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Trong một quá trình nén khí thì khí nhận công 1,2.10⁵ J và nội năng khí tăng thêm 8.10⁴ J. Lượng khí này đã',
      options: {
        A: 'tỏa nhiệt 2.10⁵ J.',
        B: 'nhận nhiệt 4.10⁴ J.',
        C: 'tỏa nhiệt 4.10⁴ J.',
        D: 'nhận nhiệt 2.10⁵ J.'
      },
      answer: 'C',
      explanation: 'Ta có ΔU = A + Q ⇒ Q = ΔU − A = 8.10⁴ − 1,2.10⁵ = −4.10⁴ J < 0 ⇒ Khí đã tỏa nhiệt lượng 4.10⁴ J.'
    },
    {
      id: 109,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Chất khí tỏa nhiệt lượng 400 J và nội năng tăng thêm 600 J. Chất khí này đã',
      options: {
        A: 'nhận công 1000 J.',
        B: 'nhận công 200 J.',
        C: 'thực hiện công 200 J.',
        D: 'thực hiện công 1000 J.'
      },
      answer: 'A',
      explanation: 'Q = −400 J, ΔU = +600 J ⇒ A = ΔU − Q = 600 − (−400) = +1000 J > 0 ⇒ Chất khí đã nhận công 1000 J.'
    },
    {
      id: 110,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Trong quá trình một lượng khí dãn nở, khí thực hiện công 4.10⁴ J và nội năng của khí giảm đi 6.10⁴ J. Lượng khí này đã',
      options: {
        A: 'tỏa nhiệt 2.10⁴ J.',
        B: 'nhận nhiệt 2.10⁴ J.',
        C: 'tỏa nhiệt 10⁵ J.',
        D: 'nhận nhiệt 10⁵ J.'
      },
      answer: 'A',
      explanation: 'Khí thực hiện công A = −4.10⁴ J, nội năng giảm ΔU = −6.10⁴ J ⇒ Q = ΔU − A = −6.10⁴ − (−4.10⁴) = −2.10⁴ J ⇒ Khí đã tỏa nhiệt 2.10⁴ J.'
    },
    {
      id: 111,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Trong quá trình một lượng khí dãn nở, khí thực hiện công 10⁴ J và nhận nhiệt lượng 1,5.10⁴ J. Sau quá trình này, lượng khí này có',
      options: {
        A: 'nội năng tăng và khối lượng riêng giảm.',
        B: 'nội năng giảm và khối lượng riêng tăng.',
        C: 'nội năng và khối lượng riêng cùng giảm.',
        D: 'nội năng và khối lượng riêng cùng tăng.'
      },
      answer: 'A',
      explanation: 'ΔU = A + Q = −10⁴ + 1,5.10⁴ = +0,5.10⁴ J > 0 nên nội năng tăng. Do khí dãn nở (thể tích V tăng, khối lượng m không đổi) nên khối lượng riêng D = m/V giảm.'
    },
    {
      id: 112,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Phát biểu nào sau đây đúng khi nói về sự biến đổi nội năng của vật?',
      options: {
        A: 'Khi một vật chỉ thực hiện công thì nội năng của vật giảm đi.',
        B: 'Khi một vật chỉ nhận nhiệt thì nội năng của vật giảm đi.',
        C: 'Khi một vật chỉ nhận công thì nội năng của vật giảm đi.',
        D: 'Khi một vật chỉ truyền nhiệt thì nội năng của vật tăng lên.'
      },
      answer: 'A',
      explanation: 'Khi vật chỉ thực hiện công (Q = 0, A < 0) thì ΔU = A < 0 nên nội năng của vật giảm đi.'
    },
    {
      id: 113,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Phát biểu nào sau đây đúng?',
      options: {
        A: 'Khi vật tỏa nhiệt lượng thì nội năng của vật phải giảm đi.',
        B: 'Khi vật thực hiện công thì nội năng của vật phải giảm đi.',
        C: 'Khi vật nhận nhiệt lượng đồng thời thực hiện công thì nội năng của vật có thể tăng lên.',
        D: 'Khi vật tỏa nhiệt lượng đồng thời thực hiện công thì nội năng của vật có thể không đổi.'
      },
      answer: 'C',
      explanation: 'Khi vật nhận nhiệt (Q > 0) đồng thời thực hiện công (A < 0), nếu Q > |A| thì ΔU = Q + A > 0 nên nội năng của vật có thể tăng lên.'
    },
    {
      id: 114,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Cấu tạo của một chiếc ghế nâng hạ như hình vẽ. Một khối khí xác định được giam giữa hai ống M và N, ống M có thể trượt lên xuống dọc theo thành trong của ống N mà không trao đổi nhiệt với bên ngoài. Khi M trượt lên trên thì khối khí',
      options: {
        A: 'nhận công và nội năng tăng.',
        B: 'thực hiện công và nội năng tăng.',
        C: 'thực hiện công và nội năng giảm.',
        D: 'nhận công và nội năng giảm.'
      },
      answer: 'C',
      figure: 114,
      explanation: 'Khi ống M trượt lên trên, thể tích khí tăng ⇒ khối khí dãn nở thực hiện công (A < 0). Vì không trao đổi nhiệt (Q = 0) nên ΔU = A < 0 ⇒ nội năng của khối khí giảm.'
    },
    {
      id: 115,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Một quả bóng khối lượng 100 g rơi từ vị trí có độ cao 10 m xuống sàn và nảy lên được 7 m. Lấy g = 10 m/s². Nội năng của hệ quả bóng, mặt sàn và không khí của quá trình này là',
      options: {
        A: 'giảm đi 3 J.',
        B: 'tăng lên 3 J.',
        C: 'giảm đi 17 J.',
        D: 'tăng lên 17 J.'
      },
      answer: 'B',
      explanation: 'Phần cơ năng giảm đi của quả bóng đã chuyển hóa thành nội năng của hệ (bóng + sàn + không khí): ΔU = m·g·(h₁ − h₂) = 0,1 × 10 × (10 − 7) = 3 J (nội năng tăng 3 J).'
    },
    {
      id: 116,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Phát biểu nào sau đây là đúng khi nói về định luật I của nhiệt động lực học?',
      options: {
        A: 'Khi vật thực hiện công và tỏa nhiệt thì nội năng của vật phải giảm.',
        B: 'Khi vật thực hiện công và thu nhiệt thì nội năng của vật phải giảm.',
        C: 'Khi vật nhận công và tỏa nhiệt thì nội năng của vật phải giảm.',
        D: 'Khi vật nhận công và thu nhiệt thì nội năng của vật phải giảm.'
      },
      answer: 'A',
      explanation: 'Khi vật thực hiện công (A < 0) và tỏa nhiệt (Q < 0) thì ΔU = A + Q chắc chắn âm (< 0), tức nội năng của vật phải giảm.'
    },
    {
      id: 117,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Cung cấp nhiệt lượng 40 J cho một lượng khí trong một xilanh đặt nằm ngang đồng thời nhấn piston với lực không đổi 40 N để nén khí, piston chuyển động một đoạn 25 cm. Nội năng lượng khí của quá trình này',
      options: {
        A: 'tăng thêm 50 J.',
        B: 'tăng thêm 30 J.',
        C: 'giảm đi 50 J.',
        D: 'giảm đi 30 J.'
      },
      answer: 'A',
      explanation: 'Khí nhận nhiệt Q = +40 J; nén khí nên khí nhận công A = F·s = 40 × 0,25 = +10 J. Độ biến thiên nội năng: ΔU = Q + A = 40 + 10 = +50 J (tăng thêm 50 J).'
    },
    {
      id: 118,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Cung cấp nhiệt lượng 1000 J cho một khối khí trong xilanh hình trụ thì khí dãn nở đẩy piston làm thể tích của khối khí tăng thêm 2 lít. Biết áp suất của khối khí là 3.10⁵ Pa và không đổi trong quá trình khí dãn nở. Nội năng của khối khí trong quá trình này',
      options: {
        A: 'tăng thêm 1600 J.',
        B: 'tăng thêm 400 J.',
        C: 'giảm đi 1600 J.',
        D: 'giảm đi 400 J.'
      },
      answer: 'B',
      explanation: 'Khí nhận nhiệt Q = +1000 J; khí dãn nở thực hiện công: A = −p·ΔV = −3.10⁵ × 2.10⁻³ = −600 J. Vậy ΔU = Q + A = 1000 − 600 = +400 J (tăng thêm 400 J).'
    },
    {
      id: 119,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Một khối gỗ trượt đều xuống mặt phẳng nghiêng với tốc độ không đổi. Trong quá trình này',
      options: {
        A: 'khối gỗ có cơ năng tăng và nội năng giảm.',
        B: 'khối gỗ có cơ năng và nội năng đều giảm.',
        C: 'khối gỗ có cơ năng và nội năng đều tăng.',
        D: 'khối gỗ có cơ năng giảm và nội năng tăng.'
      },
      answer: 'D',
      explanation: 'Khối gỗ trượt đều nên động năng không đổi, độ cao giảm nên thế năng giảm ⇒ cơ năng giảm. Công của lực ma sát chuyển hóa phần cơ năng giảm đó thành nội năng làm khối gỗ nóng lên (nội năng tăng).'
    },
    {
      id: 120,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Một vật có trọng lượng 10 N trượt từ đỉnh cao 3 m của mặt phẳng nghiêng dài 5 m. Biết hệ số ma sát trượt giữa vật và mặt phẳng nghiêng là 0,25. Trong quá trình vật trượt từ đỉnh xuống chân mặt phẳng nghiêng, độ tăng nội năng của hệ là',
      options: {
        A: '10 J.',
        B: '20 J.',
        C: '30 J.',
        D: '40 J.'
      },
      answer: 'A',
      explanation: 'Ta có sinα = 3/5 = 0,6 ⇒ cosα = 4/5 = 0,8. Độ tăng nội năng của hệ bằng độ lớn công của lực ma sát trượt: ΔU = |A_ms| = μ·P·cosα·L = 0,25 × 10 × 0,8 × 5 = 10 J.'
    },
    {
      id: 121,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Một vật khối lượng 2 kg trượt không vận tốc ban đầu từ đỉnh xuống chân của một mặt phẳng nghiêng dài 4 m, nghiêng 30° so với mặt phẳng nằm ngang. Tốc độ của vật ở chân mặt phẳng nghiêng là 5 m/s. Coi mặt phẳng nghiêng có nội năng không đổi và vật không trao đổi nhiệt. Lấy g = 10 m/s². Nội năng của vật trong quá trình trên đã',
      options: {
        A: 'tăng thêm 65 J.',
        B: 'tăng thêm 15 J.',
        C: 'giảm đi 65 J.',
        D: 'giảm đi 15 J.'
      },
      answer: 'B',
      explanation: 'Độ cao đỉnh dốc: h = L·sin30° = 4 × 0,5 = 2 m. Cơ năng tại đỉnh: W₁ = mgh = 2 × 10 × 2 = 40 J. Cơ năng tại chân dốc: W₂ = ½mv² = 0,5 × 2 × 5² = 25 J. Độ tăng nội năng của vật: ΔU = W₁ − W₂ = 40 − 25 = 15 J.'
    },
    {
      id: 122,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Tốc độ của một giọt nước rơi từ độ cao h = 20 m khi chạm đất là v = 6 m/s. Nhiệt dung riêng của nước là 4200 J/(kg.K), lấy g = 10 m/s². Biết 80% cơ năng của giọt nước bị mất được chuyển thành nội năng giúp nước tăng nhiệt độ của nó trong quá trình rơi. Tính giá trị nhiệt độ nước tăng lên trong quá trình này?',
      options: {
        A: '0,026°C.',
        B: '0,054°C.',
        C: '0,043°C.',
        D: '0,035°C.'
      },
      answer: 'D',
      explanation: 'Độ giảm cơ năng của 1 kg nước: ΔW/m = g·h − v²/2 = 10×20 − 6²/2 = 182 J/kg. Vì 80% chuyển thành nội năng làm nước nóng lên: c·Δt = 0,8 × 182 = 145,6 ⇒ Δt = 145,6 / 4200 ≈ 0,035°C.'
    },
    {
      id: 123,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Kết luận nào dưới đây là không đúng với thang nhiệt độ Celsius?',
      options: {
        A: 'Kí hiệu của nhiệt độ của t.',
        B: 'Đơn vị đo nhiệt độ là °C.',
        C: 'Chọn mốc nhiệt độ nước đá đang tan ở áp suất 1atm là 0°C.',
        D: '1°C tương ứng với 273 K.'
      },
      answer: 'D',
      explanation: 'Trong thang Kelvin, T (K) = t (°C) + 273 nên 0°C tương ứng với 273 K, còn 1°C tương ứng với 274 K (chỉ có độ lớn của 1 khoảng chia 1°C mới bằng 1 K).'
    },
    {
      id: 124,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Khi dùng nhiệt kế để đo nhiệt độ của chính cơ thể mình, người ta phải thực hiện các thao tác sau (chưa được sắp xếp theo đúng thứ tự): (a) Đặt nhiệt kế vào nách trái, rồi kẹp cánh tay lại để giữ nhiệt kế; (b) Lấy nhiệt kế ra khỏi nách để đọc nhiệt kế; (c) Dùng bông lau sạch thân và bầu nhiệt kế; (d) Kiểm tra xem thủy ngân đã tụt hết xuống bầu nhiệt kế chưa; Nếu chưa thì vẩy nhiệt kế cho thủy ngân tụt xuống. Hãy sắp xếp các thao tác trên theo thứ tự hợp lí nhất:',
      options: {
        A: 'a, b, c, d',
        B: 'd, c, a, b',
        C: 'd, c, b, d',
        D: 'b, a, c, d'
      },
      answer: 'B',
      explanation: 'Quy trình đo nhiệt độ cơ thể bằng nhiệt kế y tế: (d) Kiểm tra và vẩy thủy ngân xuống bầu → (c) Lau sạch thân và bầu nhiệt kế → (a) Đặt nhiệt kế vào nách và kẹp giữ → (b) Lấy ra đọc kết quả.'
    },
    {
      id: 125,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Trong thang nhiệt Farentheit, nhiệt độ của nước đá đang tan là bao nhiêu?',
      options: {
        A: '273K',
        B: '32°F',
        C: '0K',
        D: '0°C'
      },
      answer: 'B',
      explanation: 'Trong thang nhiệt độ Fahrenheit, nhiệt độ của nước đá đang tan (0°C) là 32°F.'
    },
    {
      id: 126,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Bảng dưới đây ghi tên các loại nhiệt kế và nhiệt độ ghi trên thang đo của chúng. Để đo nhiệt độ của bàn là phải dùng nhiệt kế nào?',
      options: {
        A: 'Nhiệt kế kim loại.',
        B: 'Nhiệt kế thủy ngân',
        C: 'Nhiệt kế y tế',
        D: 'Nhiệt kế rượu'
      },
      answer: 'A',
      figure: 126,
      explanation: 'Bàn là (bàn ủi) khi hoạt động có nhiệt độ khá cao (trên 110°C đến khoảng 200°C – 250°C), vượt quá giới hạn của nhiệt kế rượu, y tế và thủy ngân thông thường, nên phải dùng nhiệt kế kim loại (thang đo 0°C đến 400°C).'
    },
    {
      id: 127,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Cơ chế của sự dẫn nhiệt là',
      options: {
        A: 'sự truyền nhiệt độ từ vật này sang vật khác.',
        B: 'sự truyền nhiệt năng từ vật này sang vật khác.',
        C: 'sự truyền nội năng từ vật này sang vật khác.',
        D: 'sự truyền động năng của các phân tử này sang các phân tử khác.'
      },
      answer: 'D',
      explanation: 'Bản chất vi mô (cơ chế) của sự dẫn nhiệt là sự truyền động năng chuyển động nhiệt từ các phân tử ở vùng có nhiệt độ cao sang các phân tử ở vùng có nhiệt độ thấp hơn thông qua va chạm.'
    },
    {
      id: 128,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Hai vật cho tiếp xúc sẽ không có sự truyền nhiệt nếu chúng có cùng',
      options: {
        A: 'nội năng.',
        B: 'thể tích.',
        C: 'khối lượng.',
        D: 'nhiệt độ.'
      },
      answer: 'D',
      explanation: 'Khi hai vật có cùng nhiệt độ (đạt trạng thái cân bằng nhiệt) thì không có sự truyền nhiệt giữa chúng.'
    },
    {
      id: 129,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Khi hai vật A và B tiếp xúc nhau thì nguyên nhân A truyền nhiệt cho B là',
      options: {
        A: 'nhiệt độ của A lớn hơn của B.',
        B: 'nhiệt dung riêng của A lớn hơn của B.',
        C: 'nội năng của A lớn hơn của B.',
        D: 'khối lượng của A lớn hơn của B.'
      },
      answer: 'A',
      explanation: 'Nhiệt luôn tự truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.'
    },
    {
      id: 130,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Hai miếng kim loại có nhiệt độ khác nhau cho tiếp xúc, khi cân bằng nhiệt thì chúng sẽ có cùng đại lượng nào sau đây?',
      options: {
        A: 'Nội năng.',
        B: 'Tổng động năng của các phân tử.',
        C: 'Động năng trung bình của các phân tử.',
        D: 'Tổng thế năng của các phân tử.'
      },
      answer: 'C',
      explanation: 'Khi cân bằng nhiệt, hai vật có cùng nhiệt độ T, mà nhiệt độ tuyệt đối tỉ lệ thuận với động năng chuyển động nhiệt trung bình của các phân tử nên chúng có cùng động năng trung bình của các phân tử.'
    },
    {
      id: 131,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Khi có sự truyền nhiệt giữa hai vật thì chiều truyền nhiệt luôn là',
      options: {
        A: 'vật có nội năng cao hơn truyền nhiệt sang vật có nội năng thấp hơn.',
        B: 'vật có khối lượng lớn hơn truyền nhiệt sang vật có khối lượng nhỏ hơn.',
        C: 'vật có nhiệt độ cao hơn truyền nhiệt sang vật có nhiệt độ thấp hơn.',
        D: 'vật chứa nhiều phân tử hơn truyền nhiệt sang vật có ít phân tử hơn.'
      },
      answer: 'C',
      explanation: 'Chiều truyền nhiệt tự nhiên luôn từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.'
    },
    {
      id: 132,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Nhiệt độ của không khí trong phòng đo được là 30°C thì theo thang Kelvin là',
      options: {
        A: '303 K.',
        B: '243 K.',
        C: '140 K.',
        D: '70 K.'
      },
      answer: 'A',
      explanation: 'T (K) = t (°C) + 273 = 30 + 273 = 303 K.'
    },
    {
      id: 133,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Nhiệt độ nhiệt động 100 K tương ứng với',
      options: {
        A: '−100°C.',
        B: '100°C.',
        C: '273°C.',
        D: '−173°C.'
      },
      answer: 'D',
      explanation: 't (°C) = T (K) − 273 = 100 − 273 = −173°C.'
    },
    {
      id: 134,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Liên hệ nhiệt độ giữa thang Celsius và thang Fahrenheit là T (°F) = 1,8t (°C) + 32. Cơ thể một người có nhiệt độ 36,5°C, thì ở thang Fahrenheit nhiệt độ này bằng',
      options: {
        A: '236,5°F.',
        B: '97,7°F.',
        C: '33,7°F.',
        D: '36,5°F.'
      },
      answer: 'B',
      explanation: 'T (°F) = 1,8 × 36,5 + 32 = 65,7 + 32 = 97,7°F.'
    },
    {
      id: 135,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Ở nhiệt độ không tuyệt đối, động năng chuyển động nhiệt của các phân tử',
      options: {
        A: 'bằng không.',
        B: 'đạt giá trị cực đại.',
        C: 'bằng độ lớn thế năng phân tử.',
        D: 'khác nhau.'
      },
      answer: 'A',
      explanation: 'Ở nhiệt độ không tuyệt đối (0 K hay −273,15°C), động năng chuyển động nhiệt của các phân tử bằng không và thế năng của chúng đạt tối thiểu.'
    },
    {
      id: 136,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Vào một ngày nhất định ở Thủ đô Hà Nội, nhiệt độ cao nhất là 36°C và thấp nhất là 27°C. Độ chênh lệch nhiệt độ ở Thủ đô Hà Nội trong ngày này theo thang Kelvin là',
      options: {
        A: '300 K.',
        B: '9 K.',
        C: '264 K.',
        D: '282 K.'
      },
      answer: 'B',
      explanation: 'Độ chênh lệch nhiệt độ theo thang Kelvin bằng độ chênh lệch nhiệt độ theo thang Celsius: ΔT = 36 − 27 = 9 K.'
    },
    {
      id: 137,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Câu 10: [ĐNH] Phát biểu nào sau đây là đúng khi nói về nhiệt độ?',
      options: {
        A: 'Nhiệt độ 100°C thấp hơn nhiệt độ 100 K.',
        B: 'Nhiệt độ −100°C thấp hơn nhiệt độ 54 K.',
        C: 'Nhiệt độ −273°C cao hơn nhiệt độ 5 K.',
        D: 'Chênh lệch nhiệt độ mức 1°C và mức 1 K là như nhau.'
      },
      answer: 'D',
      explanation: 'Một độ chia trên thang Celsius (1°C) có độ lớn bằng đúng một độ chia trên thang Kelvin (1 K).'
    },
    {
      id: 138,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Trong thang nhiệt độ Kenvin, nhiệt độ của nước đá đang tan là 273 K. Hỏi nhiệt độ của nước đang sôi là bao nhiêu K?',
      options: {
        A: '0K',
        B: '373K',
        C: '173K',
        D: '100K'
      },
      answer: 'B',
      explanation: 'Nước đang sôi ở 100°C ứng với T = 100 + 273 = 373 K.'
    },
    {
      id: 139,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Bản tin dự báo thời tiết nhiệt độ của Hà Nội như sau: Hà Nội: Nhiệt độ từ 19°C đến 28°C. Nhiệt độ trên tương ứng với nhiệt độ nào trong thang nhiệt Kelvin?',
      options: {
        A: 'Nhiệt độ từ 292 K đến 301 K.',
        B: 'Nhiệt độ từ 19 K đến 28 K.',
        C: 'Nhiệt độ từ 273 K đến 301 K.',
        D: 'Nhiệt độ từ 273 K đến 292 K.'
      },
      answer: 'A',
      explanation: 'T₁ = 19 + 273 = 292 K; T₂ = 28 + 273 = 301 K.'
    },
    {
      id: 140,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Đơn vị đo nhiệt độ trong hệ đo lường SI là:',
      options: {
        A: 'Kelvin (K)',
        B: 'Celsius (°C)',
        C: 'Fahrenheit (°F)',
        D: 'Cả 3 đơn vị trên'
      },
      answer: 'A',
      explanation: 'Trong hệ đo lường quốc tế SI, đơn vị cơ bản đo nhiệt độ là Kelvin (K).'
    },
    {
      id: 141,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Điều nào sau đây đúng với nguyên lí truyền nhiệt:',
      options: {
        A: 'Nhiệt tự truyền từ vật có nhiệt độ thấp hơn sang vật có nhiệt độ cao hơn.',
        B: 'Nhiệt tự truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn.',
        C: 'Nhiệt truyền từ vật có nhiệt dung riêng cao hơn sang vật có nhiệt dung riêng thấp hơn.',
        D: 'Nhiệt truyền từ vật có nhiệt dung riêng thấp hơn sang vật có có nhiệt dung riêng cao hơn.'
      },
      answer: 'B',
      explanation: 'Nhiệt năng luôn tự truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn (Nguyên lí II NĐLH).'
    },
    {
      id: 142,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Đổi đơn vị 32°C ra đơn vị độ K?',
      options: {
        A: '32°C = 350K',
        B: '32°C = 305K',
        C: '32°C = 35K',
        D: '32°C = 530K'
      },
      answer: 'B',
      explanation: 'T = 32 + 273 = 305 K.'
    },
    {
      id: 143,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Dụng cụ nào sau đây không dùng để đo nhiệt độ?',
      options: {
        A: 'Nhiệt kế thủy ngân',
        B: 'Nhiệt kế rượu',
        C: 'Nhiệt kế điện tử',
        D: 'Tốc kế'
      },
      answer: 'D',
      explanation: 'Tốc kế là dụng cụ dùng để đo tốc độ chuyển động (ví dụ trên xe máy, ô tô), không dùng để đo nhiệt độ.'
    },
    {
      id: 144,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Nhiệt kế thường dùng hoạt động dựa trên hiện tượng nào?',
      options: {
        A: 'Sự dãn nở vì nhiệt của chất lỏng',
        B: 'Sự dãn nở vì nhiệt của chất rắn',
        C: 'Sự dãn nở vì nhiệt của chất khí',
        D: 'Sự dãn nở vì nhiệt của các chất.'
      },
      answer: 'A',
      explanation: 'Các nhiệt kế thông dụng (nhiệt kế thủy ngân, nhiệt kế rượu, nhiệt kế dầu) hoạt động dựa trên sự dãn nở vì nhiệt của chất lỏng.'
    },
    {
      id: 145,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Nếu hai vật có nhiệt độ khác nhau đặt tiếp xúc nhau thì:',
      options: {
        A: 'Quá trình truyền nhiệt dừng lại khi nhiệt độ hai vật như nhau.',
        B: 'Quá trình truyền nhiệt dừng lại khi nhiệt độ một vật đạt 0°C.',
        C: 'Quá trình truyền nhiệt tiếp tục cho đến khi nhiệt năng hai vật như nhau.',
        D: 'Quá trình truyền nhiệt cho đến khi nhiệt dung riêng hai vật như nhau.'
      },
      answer: 'A',
      explanation: 'Quá trình truyền nhiệt diễn ra cho tới khi hai vật đạt trạng thái cân bằng nhiệt (nhiệt độ hai vật bằng nhau).'
    },
    {
      id: 146,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Tại sao bảng chia độ của nhiệt kế y tế lại không có nhiệt độ dưới 34°C và trên 42°C?',
      options: {
        A: 'Nhiệt độ cơ thể người nằm trong khoảng từ 34°C đến 42°C.',
        B: 'Tiết kiệm chi phí làm nhiệt kế',
        C: 'Thiết kế ngắn gọn để mang tính thẩm mỹ',
        D: 'Không có đáp án nào đúng.'
      },
      answer: 'A',
      explanation: 'Vì nhiệt độ cơ thể người sống chỉ dao động trong khoảng từ 34°C đến 42°C nên giới hạn thang đo này giúp chia vạch chi tiết và chính xác tới 0,1°C.'
    },
    {
      id: 147,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Người ta thả ba miếng đồng, nhôm, chì có cùng khối lượng vào một cốc nước nóng. So sánh nhiệt độ cuối cùng của ba miếng kim loại trên:',
      options: {
        A: 'Nhiệt độ của miếng chì cao nhất, rồi đến miếng đồng, miếng nhôm.',
        B: 'Nhiệt độ miếng đồng cao nhất, rồi đến miếng nhôm, miếng chì.',
        C: 'Nhiệt độ miếng nhôm cao nhất, rồi đến miếng đồng, miếng chì.',
        D: 'Nhiệt độ ba miếng bằng nhau.'
      },
      answer: 'D',
      explanation: 'Khi đạt trạng thái cân bằng nhiệt, cả ba miếng kim loại và nước trong cốc đều có cùng một nhiệt độ.'
    },
    {
      id: 148,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Khi nhiệt độ tăng thêm 1°C thì độ dài của dây đồng dài 2m tăng thêm là 0,034 mm. Vậy dây đồng đó sẽ có chiều dài là bao nhiêu khi nhiệt độ tăng thêm 20°C?',
      options: {
        A: '2,00068 (m)',
        B: '0,0068 (m)',
        C: '0,102m',
        D: '0,102mm'
      },
      answer: 'A',
      explanation: 'Khi tăng thêm 20°C, độ dài dây đồng tăng thêm: Δl = 20 × 0,034 mm = 0,68 mm = 0,00068 m. Chiều dài dây đồng lúc đó là: l = 2 + 0,00068 = 2,00068 m.'
    },
    {
      id: 149,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Trong thang nhiệt Celsius, nhiệt độ của nước đang sôi là bao nhiêu?',
      options: {
        A: '273K',
        B: '100°C',
        C: '0K',
        D: '0°C'
      },
      answer: 'B',
      explanation: 'Ở áp suất tiêu chuẩn 1 atm, nhiệt độ của nước đang sôi trong thang Celsius là 100°C.'
    },
    {
      id: 150,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Nung nóng một cục sắt thả vào chậu nước lạnh, nước nóng lên, cục sắt nguội đi. Trong quá trình này:',
      options: {
        A: 'Có sự chuyển hóa năng lượng từ cơ năng sang nhiệt năng.',
        B: 'Nhiệt năng của cục sắt giảm và của nước tăng.',
        C: 'Nhiệt năng của cục sắt tăng và của nước giảm.',
        D: 'Quá trình truyền nhiệt diễn ra do chậu nước lạnh truyền hơi lạnh lên cục sắt, làm cục sắt nguội dần, còn cục sắt truyền nhiệt sang chậu nước, làm nước nóng dần'
      },
      answer: 'B',
      explanation: 'Cục sắt nóng truyền nhiệt cho nước lạnh nên nhiệt năng (nội năng) của cục sắt giảm và của nước tăng.'
    },
    {
      id: 151,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Bản tin dự báo thời tiết nhiệt độ của Nghệ An như sau: Nghệ An: Nhiệt độ từ 20°C đến 29°C. Nhiệt độ trên tương ứng với nhiệt độ nào trong thang nhiệt Kelvin?',
      options: {
        A: 'Nhiệt độ từ 293 K đến 302 K',
        B: 'Nhiệt độ từ 20 K đến 29 K.',
        C: 'Nhiệt độ từ −253 K đến −244 K',
        D: 'Nhiệt độ từ 273 K đến 292 K.'
      },
      answer: 'A',
      explanation: 'T₁ = 20 + 273 = 293 K; T₂ = 29 + 273 = 302 K.'
    },
    {
      id: 152,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Đơn vị đo nhiệt độ thường dùng hằng ngày của nước ta là gì?',
      options: {
        A: 'Kelvin (K)',
        B: 'Celsius (°C)',
        C: 'Fahrenheit (°F)',
        D: 'Cả 3 đơn vị trên'
      },
      answer: 'B',
      explanation: 'Ở Việt Nam, đơn vị đo nhiệt độ thông dụng hằng ngày là độ Celsius (°C).'
    },
    {
      id: 153,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Nguyên tắc nào dưới đây được sử dụng để chế tạo nhiệt kế?',
      options: {
        A: 'Dãn nở vì nhiệt của chất lỏng.',
        B: 'Dãn nở vì nhiệt của chất khí.',
        C: 'Thay đổi màu sắc của một vật theo nhiệt độ.',
        D: 'Dựa trên một số tính chất vật lí phụ thuộc vào nhiệt độ của các chất'
      },
      answer: 'D',
      explanation: 'Nguyên tắc chung để chế tạo các loại nhiệt kế (chất lỏng, kim loại, khí, điện trở, hồng ngoại...) là dựa trên một số tính chất vật lí phụ thuộc vào nhiệt độ của các chất.'
    },
    {
      id: 154,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Nhiệt độ mùa đông tại Thành phố New York (Mỹ) là 23°F , ứng với nhiệt giai Celsius, nhiệt độ ở đó là:',
      options: {
        A: '10°C',
        B: '−10°C',
        C: '5°C',
        D: '−5°C'
      },
      answer: 'D',
      explanation: 'Từ T(°F) = 1,8·t(°C) + 32 ⇒ t(°C) = (23 − 32) / 1,8 = −5°C.'
    },
    {
      id: 155,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Người ta chọn thủy ngân và rượu để chế tạo nhiệt kế vì:',
      options: {
        A: 'chúng có nhiệt độ nóng chảy cao',
        B: 'nhiệt độ nóng chảy thấp.',
        C: 'nhiệt độ đông đặc cao.',
        D: 'tất cả các câu trên đều sai'
      },
      answer: 'B',
      explanation: 'Thủy ngân (−38,83°C) và rượu (−117°C) có nhiệt độ nóng chảy (đông đặc) thấp nên duy trì trạng thái lỏng trong khoảng nhiệt độ cần đo.'
    },
    {
      id: 156,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Ở 20°C một thanh nhôm dài 12 m. Tính nhiệt độ cần thiết để chiều dài thanh nhôm là 12,01 m. Biết rằng khi nhiệt độ tăng thêm 1°C thì thanh nhôm dài thêm 0,000023 chiều dài ban đầu',
      options: {
        A: '56,23°C',
        B: '56°C',
        C: '23°C',
        D: '26,23°C'
      },
      answer: 'A',
      explanation: 'Độ tăng chiều dài: Δl = l₀·α·Δt ⇒ 0,01 = 12 × 0,000023 × (t − 20) ⇒ t − 20 ≈ 36,23°C ⇒ t ≈ 56,23°C.'
    },
    {
      id: 157,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Câu phát biểu nào sau đây không đúng?',
      options: {
        A: 'Nhiệt kế y tế dùng để đo nhiệt độ cơ thể người.',
        B: 'Nhiệt kế thuỷ ngân thường dùng để đo nhiệt độ trong các thí nghiệm.',
        C: 'Nhiệt kế rượu thường dùng để đo nhiệt độ của nước đang sôi.',
        D: 'Nhiệt kế rượu thường dùng để đo nhiệt độ của khí quyển'
      },
      answer: 'C',
      explanation: 'Rượu sôi ở khoảng 78°C (thấp hơn nhiệt độ sôi của nước là 100°C), nên không thể dùng nhiệt kế rượu để đo nhiệt độ của nước đang sôi.'
    },
    {
      id: 158,
      topic: 'Thang nhiệt độ & Nhiệt kế',
      question: 'Nhiệt kế nào dưới đây có thể dùng để đo nhiệt độ của băng phiến đang nóng chảy?',
      options: {
        A: 'nhiệt kế rượu',
        B: 'nhiệt kế y tế',
        C: 'nhiệt kế thủy ngân',
        D: 'cả ba nhiệt kế trên đều không dùng được.'
      },
      answer: 'C',
      explanation: 'Băng phiến nóng chảy ở 80°C. Nhiệt kế y tế chỉ đo tới 42°C, nhiệt kế rượu sôi ở ~78°C, nên phải dùng nhiệt kế thủy ngân (đo tới 110°C hoặc 357°C).'
    },
    {
      id: 159,
      topic: 'Mô hình động học phân tử',
      question: 'Chọn phát biểu đúng về mối quan hệ giữa nhiệt năng và nhiệt độ:',
      options: {
        A: 'Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động càng chậm và nhiệt năng của vật càng nhỏ.',
        B: 'Nhiệt độ của vật càng thấp thì các phân tử cấu tạo nên vật chuyển động càng nhanh và nhiệt năng của vật càng lớn.',
        C: 'Nhiệt độ của vật càng thấp thì các phân tử cấu tạo nên vật chuyển động càng chậm và nhiệt năng của vật càng lớn.',
        D: 'Nhiệt độ của vật càng cao thì các phân tử cấu tạo nên vật chuyển động càng nhanh và nhiệt năng của vật càng lớn.'
      },
      answer: 'D',
      explanation: 'Nhiệt độ của vật càng cao thì các phân tử chuyển động nhiệt càng nhanh, làm nhiệt năng (nội năng) của vật càng lớn.'
    },
    {
      id: 160,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Đơn vị nào sau đây là đơn vị của nhiệt dung riêng của vật rắn?',
      options: {
        A: 'Jun trên kilôgam độ (J/kg. độ)',
        B: 'Jun trên kilôgam (J/ kg).',
        C: 'Jun (J)',
        D: 'Jun trên độ (J/ độ).'
      },
      answer: 'A',
      explanation: 'Đơn vị của nhiệt dung riêng là J/(kg.K) hay J/(kg.độ).'
    },
    {
      id: 161,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Điều nào sau đây là đúng khi nói về nhiệt dung riêng của chất rắn?',
      options: {
        A: 'Nhiệt dung riêng của một chất có độ lớn bằng nhiệt lượng cần cung cấp để làm nóng chảy 1kg chất đó ở nhiệt độ nóng chảy',
        B: 'Đơn vị của nhiệt dung riêng là Jun trên kilôgam (J/ kg).',
        C: 'Các chất khác nhau thì nhiệt dung riêng của chúng khác nhau.',
        D: 'Cả A. B. C đều đúng.'
      },
      answer: 'A',
      explanation: 'Theo bảng đáp án của bộ đề: Chọn A. (Lưu ý thảo luận trên lớp: Phương án A và B là định nghĩa và đơn vị của "nhiệt nóng chảy riêng", còn với "nhiệt dung riêng" thì phương án C mới chính xác về mặt thuật ngữ vật lí).'
    },
    {
      id: 162,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một thác nước cao 126 m và độ chênh lệch nhiệt độ của nước ở đỉnh và chân thác là 0,3°C. Giả thiết rằng khi chạm vào chân thác, toàn bộ động năng của nước chuyển hết thành nhiệt năng truyền cho nước. Hãy tính nhiệt dung riêng của nước.',
      options: {
        A: '2500 J/kg.K',
        B: '420 J/kg.K',
        C: '4200 J.kg.K',
        D: '480 J/kg.K'
      },
      answer: 'C',
      explanation: 'Bảo toàn năng lượng: m·g·h = m·c·Δt ⇒ c = g·h / Δt = (10 × 126) / 0,3 = 4200 J/(kg.K).'
    },
    {
      id: 163,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một khối chì có khối lượng 5 kg, nhiệt dung riêng là 130 J/kg.K. Sau khi nhận thêm 37,7 kJ thì nhiệt độ của nó là 90°C. Hỏi nhiệt độ ban đầu của khối chì là bao nhiêu?',
      options: {
        A: '32°C',
        B: '30°C',
        C: '45°C',
        D: '50°C'
      },
      answer: 'A',
      explanation: 'Độ tăng nhiệt độ của khối chì: Δt = Q / (m·c) = 37 700 / (5 × 130) = 58°C. Nhiệt độ ban đầu: t₀ = 90 − 58 = 32°C.'
    },
    {
      id: 164,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt lượng mà vật nhận được hay tỏa ra phụ thuộc vào:',
      options: {
        A: 'khối lượng',
        B: 'độ tăng nhiệt độ của vật',
        C: 'nhiệt dung riêng của chất làm nên vật',
        D: 'Cả 3 phương án trên'
      },
      answer: 'D',
      explanation: 'Theo công thức Q = m·c·Δt, nhiệt lượng phụ thuộc vào cả 3 yếu tố: khối lượng m, nhiệt dung riêng c và độ biến thiên nhiệt độ Δt.'
    },
    {
      id: 165,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Trong công thức tính nhiệt lượng thu vào: Q = mcΔt = mc(t₂ − t₁), t₂ là:',
      options: {
        A: 'Nhiệt độ lúc đầu của vật.',
        B: 'Nhiệt độ lúc sau của vật.',
        C: 'Thời điểm bắt đầu vật nhận nhiệt lượng.',
        D: 'Thời điểm sau khi vật nhận nhiệt lượng.'
      },
      answer: 'B',
      explanation: 'Trong công thức Q = m·c·(t₂ − t₁), t₁ là nhiệt độ lúc đầu và t₂ là nhiệt độ lúc sau của vật.'
    },
    {
      id: 166,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Ba chất lỏng A, B, C đang ở nhiệt độ tA, tB, tC với tA < tB < tC được trộn lẫn với nhau. Chất lỏng nào tỏa nhiệt, chất lỏng nào thu nhiệt?',
      options: {
        A: 'A tỏa nhiệt, B và C thu nhiệt',
        B: 'A và B tỏa nhiệt, C thu nhiệt',
        C: 'C tỏa nhiệt, A và B thu nhiệt',
        D: 'Chỉ khẳng định được sau khi tính được nhiệt độ khi cân bằng'
      },
      answer: 'D',
      explanation: 'Nhiệt độ cân bằng t nằm trong khoảng tA < t < tC nên A chắc chắn thu nhiệt và C chắc chắn tỏa nhiệt; còn B thu hay tỏa nhiệt phụ thuộc vào việc tB nhỏ hơn hay lớn hơn nhiệt độ cân bằng t.'
    },
    {
      id: 167,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: '...... của một chất cho biết nhiệt lượng cần truyền cho 1kg chất đó để nhiệt độ tăng thêm 1°C(1K). Tìm từ thích hợp điền vào ô trống.',
      options: {
        A: 'Nhiệt dung riêng',
        B: 'Nhiệt độ',
        C: 'Nhiệt lượng',
        D: 'Nội năng'
      },
      answer: 'A',
      explanation: 'Đây là định nghĩa của đại lượng Nhiệt dung riêng.'
    },
    {
      id: 168,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt dung riêng của một chất cho ta biết',
      options: {
        A: 'nhiệt lượng cần cung cấp để chất đó nóng lên.',
        B: 'nhiệt lượng cần cung cấp để chất đó nóng lên thêm 1°C.',
        C: 'nhiệt lượng cần cung cấp để 1kg chất đó nóng lên thêm 1°C.',
        D: 'nhiệt lượng cần cung cấp để 1g chất đó nóng lên thêm 1°C.'
      },
      answer: 'C',
      explanation: 'Nhiệt dung riêng của một chất cho biết nhiệt lượng cần cung cấp để 1 kg chất đó tăng nhiệt độ thêm 1°C (hoặc 1 K).'
    },
    {
      id: 169,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt dung riêng có đơn vị là:',
      options: {
        A: 'Jun (J).',
        B: 'Jun trên Kilôgam (J/kg).',
        C: 'Jun trên Kilôgam độ (J/kgK).',
        D: 'Jun trên độ (J/K).'
      },
      answer: 'C',
      explanation: 'Đơn vị của nhiệt dung riêng là J/(kg.K).'
    },
    {
      id: 170,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Pha một lượng nước nóng ở nhiệt độ t vào nước lạnh ở 10°C. Nhiệt độ cuối cùng của hỗn hợp nước là 20°C. Biết khối lượng nước lạnh gấp 3 lần khối lượng nước nóng. Hỏi nhiệt độ lúc đầu t của nước nóng bằng bao nhiêu?',
      options: {
        A: '50°C',
        B: '60°C',
        C: '70°C',
        D: '80°C'
      },
      answer: 'A',
      explanation: 'Phương trình cân bằng nhiệt: m₁·c·(t − 20) = 3m₁·c·(20 − 10) ⇒ t − 20 = 30 ⇒ t = 50°C.'
    },
    {
      id: 171,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một bình đun nước nóng bằng điện có công suất 9,0 kW. Nước được làm nóng khi đi qua buồng đốt của bình. Nước chảy qua buồng đốt với lưu lượng 5,8.10⁻² kg/s. Nhiệt độ của nước khi đi vào buồng đốt là 15°C. Cho nhiệt dung riêng của nước là 4200 J/kgK. Bỏ qua mọi hao phí. Nhiệt độ của nước khi ra khỏi buồng đốt là:',
      options: {
        A: '18,66°C.',
        B: '50°C.',
        C: '3,66°C.',
        D: '11,34°C'
      },
      answer: 'A',
      explanation: 'Theo bảng đáp án của đề: Chọn A (18,66°C — ứng với lưu lượng 0,58 kg/s: Δt = 9000 / (0,58 × 4200) ≈ 3,69°C ⇒ t = 15 + 3,66 = 18,66°C; nếu tính theo 5,8.10⁻² kg/s thì Δt ≈ 36,9°C ⇒ t ≈ 51,9°C gần với 50°C).'
    },
    {
      id: 172,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một vật bằng đồng có khối lượng m = 10kg đang ở 20°C để vật đó đạt được nhiệt độ 70°C thì vật bằng đồng cần hấp thụ một nhiệt lượng có giá trị là: biết nhiệt dung riêng của đồng là 380J/kg.K)',
      options: {
        A: '190J',
        B: '19J',
        C: '190kJ',
        D: '19kJ'
      },
      answer: 'C',
      explanation: 'Q = m·c·Δt = 10 × 380 × (70 − 20) = 190 000 J = 190 kJ.'
    },
    {
      id: 173,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Người ta cung cấp cho 10l nước một nhiệt lượng 840kJ. Biết nhiệt dung riêng của nước là 4200J/kg.K khối lượng riêng của nước là 1000kg/m³. Nước nóng lên thêm',
      options: {
        A: '35°C',
        B: '25°C',
        C: '20°C',
        D: '30°C'
      },
      answer: 'C',
      explanation: '10 lít nước có khối lượng m = 10 kg. Độ tăng nhiệt độ: Δt = Q / (m·c) = 840 000 / (10 × 4200) = 20°C.'
    },
    {
      id: 174,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Người ta cung cấp cho 2kg rượu một nhiệt lượng 175kJ thì nhiệt độ của rượu tăng thêm bao nhiêu? Biết nhiệt dung riêng của rượu là 2500J/kg.K',
      options: {
        A: 'Tăng thêm 35°C',
        B: 'Tăng thêm 25°C',
        C: 'Tăng thêm 0,035°C',
        D: 'Tăng thêm 40°C'
      },
      answer: 'A',
      explanation: 'Δt = Q / (m·c) = 175 000 / (2 × 2500) = 35°C.'
    },
    {
      id: 175,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Người ta phơi nắng một chậu chứa 5 lít nước. Sau một thời gian nhiệt độ của nước tăng từ 25°C lên 30°C. Biết nhiệt dung riêng của nước là 4200J/kg.K, khối lượng riêng của nước là 1000kg/m³. Nhiệt lượng mà nước thu được từ Mặt Trời là:',
      options: {
        A: '105J',
        B: '1050J',
        C: '105kJ',
        D: '1050kJ'
      },
      answer: 'C',
      explanation: '5 lít nước có khối lượng m = 5 kg. Nhiệt lượng thu được: Q = m·c·Δt = 5 × 4200 × (30 − 25) = 105 000 J = 105 kJ.'
    },
    {
      id: 176,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Biết nước có nhiệt dung riêng là 4200 J/(kg.K). Nhiệt lượng mà 5 kg nước cần hấp thụ để nhiệt độ tăng thêm 40°C là',
      options: {
        A: '168 kJ.',
        B: '525 J.',
        C: '33,6 kJ.',
        D: '840 kJ.'
      },
      answer: 'D',
      explanation: 'Q = m·c·Δt = 5 × 4200 × 40 = 840 000 J = 840 kJ.'
    },
    {
      id: 177,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một quả cầu kim loại có khối lượng 100 g và nhiệt độ ban đầu 24°C hấp thụ nhiệt lượng 2300 J và nhiệt độ của nó tăng lên 74°C. Quả cầu này làm từ',
      options: {
        A: 'thép.',
        B: 'chì.',
        C: 'đồng.',
        D: 'nhôm.'
      },
      answer: 'A',
      explanation: 'Nhiệt dung riêng của kim loại: c = Q / (m·Δt) = 2300 / [0,1 × (74 − 24)] = 460 J/(kg.K) ⇒ Quả cầu làm bằng thép.'
    },
    {
      id: 178,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Biết nước nhiệt dung riêng là 4200 J/(kg.K). Nếu cung cấp nhiệt lượng 924 kJ cho 4 kg nước có nhiệt độ ban đầu 25°C thì nhiệt độ của nước trở thành',
      options: {
        A: '30°C.',
        B: '40°C.',
        C: '80°C.',
        D: '60°C.'
      },
      answer: 'C',
      explanation: 'Độ tăng nhiệt độ: Δt = Q / (m·c) = 924 000 / (4 × 4200) = 55°C. Nhiệt độ sau cùng của nước: t = 25 + 55 = 80°C.'
    },
    {
      id: 179,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Máy nước nóng năng lượng mặt trời chứa 50 lít nước, nhận 4,2.10⁶ J quang năng mỗi giờ. Biết nước có khối lượng riêng 1000 kg/m³ và nhiệt dung riêng 4200 J/(kg.K). Nếu 40% quang năng máy hấp thụ chuyển thành nhiệt lượng làm nóng nước thì mỗi giờ nhiệt độ của nước tăng thêm',
      options: {
        A: '10°C.',
        B: '5°C.',
        C: '4°C.',
        D: '8°C.'
      },
      answer: 'D',
      explanation: 'Nhiệt lượng nước nhận được mỗi giờ: Q = 0,4 × 4,2.10⁶ = 1,68.10⁶ J. Độ tăng nhiệt độ của 50 kg nước: Δt = Q / (m·c) = 1,68.10⁶ / (50 × 4200) = 8°C.'
    },
    {
      id: 180,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nước có khối lượng riêng 1000 kg/m³ và nhiệt dung riêng 4200 J/(kg.K). Một thùng đựng 20 lít nước có nhiệt độ ban đầu 20°C, được đun bởi một thiết bị điện có công suất 2,5 kW. Biết chỉ có 80% điện năng tiêu thụ được dùng để làm nóng nước. Thời gian cần thiết để nhiệt độ của nước trong thùng được tăng lên tới 70°C là',
      options: {
        A: '18 phút.',
        B: '25 phút.',
        C: '35 phút.',
        D: '28 phút.'
      },
      answer: 'C',
      explanation: 'Nhiệt lượng có ích: Q = 20 × 4200 × (70 − 20) = 4,2.10⁶ J. Công suất có ích: P_ích = 0,8 × 2500 = 2000 W. Thời gian đun: t = Q / P_ích = 4,2.10⁶ / 2000 = 2100 s = 35 phút.'
    },
    {
      id: 181,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một vật khối lượng 5 kg nếu nhận nhiệt lượng Q hoặc Q + 2500 J thì nhiệt độ của vật tăng thêm tương ứng là Δt hoặc Δt + 2°C. Nhiệt dung riêng của vật là',
      options: {
        A: '500 J/(kg.K).',
        B: '250 J/(kg.K).',
        C: '2500 J/(kg.K).',
        D: '1250 J/(kg.K).'
      },
      answer: 'B',
      explanation: 'Nhiệt lượng nhận thêm 2500 J làm vật 5 kg tăng thêm 2°C: 2500 = 5 × c × 2 ⇒ c = 250 J/(kg.K).'
    },
    {
      id: 182,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Hai vật A và B có khối lượng bằng nhau. Nhiệt lượng mà vật A hấp thụ để nhiệt độ tăng thêm 10°C đúng bằng nhiệt lượng mà vật B hấp thụ để nhiệt độ tăng thêm 20°C. Tỉ số giữa nhiệt dung riêng của vật A và nhiệt dung riêng của vật B là',
      options: {
        A: '1/2.',
        B: '2.',
        C: '4.',
        D: '1/4.'
      },
      answer: 'B',
      explanation: 'Q_A = Q_B ⇔ m·cA·10 = m·cB·20 ⇒ cA / cB = 20 / 10 = 2.'
    },
    {
      id: 183,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Ba vật A, B, C khối lượng bằng nhau được nung nóng. Mối liên hệ giữa nhiệt lượng Q các vật hấp thụ và độ biến thiên nhiệt độ ΔT của chúng tương ứng được biểu diễn trên hình vẽ bên. Phát biểu nào sau đây là đúng?',
      options: {
        A: 'Nhiệt dung riêng của A là lớn nhất.',
        B: 'Nhiệt dung riêng của B là lớn nhất.',
        C: 'Nhiệt dung riêng của C là lớn nhất.',
        D: 'Nhiệt dung riêng của ba vật A, B, C bằng nhau.'
      },
      answer: 'A',
      figure: 183,
      explanation: 'Ta có Q = m·c·ΔT ⇒ Hệ số góc của đường biểu diễn Q theo ΔT là m·c. Vì cùng khối lượng m và đường A có độ dốc lớn nhất nên nhiệt dung riêng của A là lớn nhất.'
    },
    {
      id: 184,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Vật A và B có tỉ số khối lượng mA/mB = 2/3 và tỉ số nhiệt dung riêng cA/cB = 1/2. Nếu hai vật được cung cấp nhiệt lượng như nhau thì tỉ số độ tăng nhiệt độ của chúng ΔtA/ΔtB bằng',
      options: {
        A: '1/3.',
        B: '3.',
        C: '4/3.',
        D: '3/4.'
      },
      answer: 'B',
      explanation: 'Vì Q_A = Q_B ⇒ ΔtA / ΔtB = (mB·cB) / (mA·cA) = (3/2) × (2/1) = 3.'
    },
    {
      id: 185,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một người pha 2 kg nước lạnh ở nhiệt độ 20°C với 4 kg nước ấm ở nhiệt độ 50°C. Khi cân bằng nhiệt, học sinh thu được nước ở nhiệt độ là',
      options: {
        A: '40°C.',
        B: '35°C.',
        C: '30°C.',
        D: '45°C.'
      },
      answer: 'A',
      explanation: 'Phương trình cân bằng nhiệt: 2 × (t − 20) = 4 × (50 − t) ⇒ 6t = 240 ⇒ t = 40°C.'
    },
    {
      id: 186,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Thả thỏi đồng khối lượng 1 kg ở nhiệt độ 68°C vào 0,3 kg nước ở nhiệt độ 13°C. Biết nhiệt dung riêng của đồng là 390 J/(kg.K) và của nước là 4200 J/(kg.K). Khi cân bằng nhiệt thì nhiệt độ của nước và thỏi đồng là',
      options: {
        A: '26°C.',
        B: '21°C.',
        C: '32°C.',
        D: '37°C.'
      },
      answer: 'A',
      explanation: 'Phương trình cân bằng nhiệt: 1 × 390 × (68 − t) = 0,3 × 4200 × (t − 13) ⇒ 390(68 − t) = 1260(t − 13) ⇒ 1650t = 42 900 ⇒ t = 26°C.'
    },
    {
      id: 187,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Vào buổi sáng, một người uống cà phê lấy 300 g nước cà phê ở 70°C từ bình đổ vào cốc nhôm có khối lượng 120 g ở 20°C. Biết nhiệt dung riêng của nước cà phê là 4190 J/(kg.K) và của nhôm là 910 J/(kg.K). Khi cân bằng nhiệt, nhiệt độ của cốc cà phê là',
      options: {
        A: '52°C.',
        B: '45°C.',
        C: '39°C.',
        D: '66°C.'
      },
      answer: 'D',
      explanation: 'Phương trình cân bằng nhiệt: 0,3 × 4190 × (70 − t) = 0,12 × 910 × (t − 20) ⇒ 1257(70 − t) = 109,2(t − 20) ⇒ t ≈ 66°C.'
    },
    {
      id: 188,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Để xác định nhiệt độ của lò nung, người ta đưa một thỏi sắt khối lượng 0,3 kg vào lò nung rồi nhanh chóng lấy ra cho vào 4 kg nước ở nhiệt độ 8°C. Khi cân bằng nhiệt, nhiệt độ của nước là 16°C. Biết nhiệt dung riêng của sắt và của nước lần lượt là 460 J/(kg.K) và 4200 J/(kg.K). Nhiệt độ của lò nung cần xác định là',
      options: {
        A: '660°C.',
        B: '880°C.',
        C: '780°C.',
        D: '990°C.'
      },
      answer: 'D',
      explanation: 'Phương trình cân bằng nhiệt: 0,3 × 460 × (t₀ − 16) = 4 × 4200 × (16 − 8) ⇒ 138(t₀ − 16) = 134 400 ⇒ t₀ ≈ 990°C.'
    },
    {
      id: 189,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Để có 9 lít nước ở 60°C, một học sinh pha V₁(lít) nước ở 80°C với V₂(lít) nước ở 20°C. Giá trị của V₁ và V₂ lần lượt là',
      options: {
        A: '5 lít và 4 lít.',
        B: '3 lít và 6 lít.',
        C: '6 lít và 3 lít.',
        D: '4 lít và 5 lít.'
      },
      answer: 'C',
      explanation: 'Ta có hệ: V₁ + V₂ = 9 và V₁(80 − 60) = V₂(60 − 20) ⇒ V₁ = 2V₂ ⇒ V₁ = 6 lít và V₂ = 3 lít.'
    },
    {
      id: 190,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một lượng rượu và một lượng nước có nhiệt độ ban đầu lần lượt là 22°C và 96°C. Trộn lẫn rượu và nước ở trên thu được hỗn hợp nặng 205 g ở nhiệt độ 36°C khi cân bằng nhiệt. Biết nhiệt dung riêng của rượu và của nước lần lượt là 2500 J/(kg.K) và 4200 J/(kg.K). Khối lượng của rượu ban đầu là',
      options: {
        A: '180 g.',
        B: '25 g.',
        C: '160 g.',
        D: '45 g.'
      },
      answer: 'A',
      explanation: 'm_r × 2500 × (36 − 22) = m_n × 4200 × (96 − 36) ⇒ 35 000·m_r = 252 000·m_n ⇒ m_r = 7,2·m_n. Kết hợp m_r + m_n = 205 g ⇒ m_n = 25 g, m_r = 180 g.'
    },
    {
      id: 191,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Biết khối lượng, nhiệt độ ban đầu và nhiệt dung riêng của chất lỏng I lần lượt là 3 kg, 12°C và 2,4 J/(g.K); của chất lỏng II lần lượt là 4 kg, 18°C và 3,6 J/(g.K); của chất lỏng III lần lượt là 6 kg; 30°C và 4,2 J/(g.K). Trộn ba chất lỏng này lại với nhau, khi cân bằng nhiệt thì nhiệt độ của hệ là',
      options: {
        A: '25,3°C.',
        B: '23,5°C.',
        C: '21,7°C.',
        D: '27,4°C.'
      },
      answer: 'B',
      explanation: 't = (m₁c₁t₁ + m₂c₂t₂ + m₃c₃t₃) / (m₁c₁ + m₂c₂ + m₃c₃) = (3×2,4×12 + 4×3,6×18 + 6×4,2×30) / (7,2 + 14,4 + 25,2) = 1101,6 / 46,8 ≈ 23,5°C.'
    },
    {
      id: 192,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Câu 27: [ĐNH] Thả một miếng sắt nặng 290 g ở 180°C vào trong một cốc nhôm nặng 95 g chứa 250 g glycerin ở 10°C. Nhiệt độ sau khi cân bằng nhiệt là 38°C. Biết nhiệt dung riêng của sắt và của nhôm lần lượt là 450 J.kg⁻¹.K⁻¹ và 900 J.kg⁻¹.K⁻¹. Nhiệt dung riêng của glycerin là',
      options: {
        A: '2305 J.kg⁻¹.K⁻¹.',
        B: '4150 J.kg⁻¹.K⁻¹.',
        C: '1805 J.kg⁻¹.K⁻¹.',
        D: '3204 J.kg⁻¹.K⁻¹.'
      },
      answer: 'A',
      explanation: '0,29 × 450 × (180 − 38) = (0,095 × 900 + 0,25 × c_g) × (38 − 10) ⇒ 18 531 = (85,5 + 0,25·c_g) × 28 ⇒ c_g ≈ 2305 J/(kg.K).'
    },
    {
      id: 193,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt lượng kế bằng đồng (c₁ = 0,09 cal.g⁻¹.K⁻¹) chứa nước (c₂ = 1 cal.g⁻¹.K⁻¹) ở 25°C. Tổng khối lượng của nhiệt lượng kế và nước là 475 g. Thả miếng kim loại (c₃ = 0,08 cal.g⁻¹.K⁻¹) có khối lượng 400 g ở 90°C vào nhiệt lượng kế này thì khi cân bằng nhiệt, nhiệt độ của hệ là 30°C. Khối lượng của nước có trong nhiệt lượng kế là',
      options: {
        A: '250 g.',
        B: '125 g.',
        C: '375 g.',
        D: '100 g.'
      },
      answer: 'C',
      explanation: 'Gọi m là khối lượng nước (g), khối lượng đồng là (475 − m). Ta có: [0,09(475 − m) + 1·m] × (30 − 25) = 400 × 0,08 × (90 − 30) = 1920 ⇒ 42,75 + 0,91m = 384 ⇒ m = 375 g.'
    },
    {
      id: 194,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Hai quả cầu kim loại A và B cùng khối lượng và nhiệt độ ban đầu. Đầu tiên thả quả cầu A vào một cốc nước nóng, khi cân bằng thì nhiệt độ của nước giảm đi 10°C. Nhanh chóng lấy quả cầu A ra khỏi cốc nước rồi thả quả cầu B vào cốc nước, khi cân bằng thì nhiệt độ của nước tiếp tục giảm đi 10°C. Gọi nhiệt dung riêng của quả cầu A và B lần lượt là cA và cB. So sánh đúng là',
      options: {
        A: 'cA > cB.',
        B: 'cA < cB.',
        C: 'cA = cB.',
        D: 'chưa thể so sánh.'
      },
      answer: 'B',
      explanation: 'Cả hai lần nước đều giảm 10°C nên nhiệt lượng nước truyền cho A và B bằng nhau (Q_A = Q_B). Tuy nhiên nhiệt độ cân bằng ở lần 2 thấp hơn lần 1 là 10°C nên độ tăng nhiệt độ của B nhỏ hơn của A (ΔtB < ΔtA). Vì m·cA·ΔtA = m·cB·ΔtB ⇒ cA < cB.'
    },
    {
      id: 195,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một bình chứa một lượng nước lạnh nhất định. Đổ một cốc nước nóng có cùng khối lượng vào bình thì nhiệt độ của nước tăng thêm 15°C. Đổ tiếp một cốc nước nóng giống như trên vào bình thì nhiệt độ của nước tăng thêm là',
      options: {
        A: '15°C.',
        B: '10°C.',
        C: '5°C.',
        D: '3°C.'
      },
      answer: 'C',
      explanation: 'Lần 1: m(t_nóng − t_lạnh − 15) = m·15 ⇒ t_nóng − t_lạnh = 30°C. Lần 2: trong bình đã có 2m ở nhiệt độ (t_lạnh + 15), đổ thêm m ở t_nóng: m(15 − Δt₂) = 2m·Δt₂ ⇒ Δt₂ = 5°C.'
    },
    {
      id: 196,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Đổ một cốc nước chứa m₀(g) nước nóng vào một bình cách nhiệt chứa m(g) nước lạnh thì nhiệt độ của nước trong bình tăng thêm 3°C. Tiếp tục đổ một cốc nước nóng như trên vào bình cách nhiệt thì nhiệt độ của nước trong bình tăng thêm 2,8°C. Kết luận nào sau đây đúng?',
      options: {
        A: 'Độ chênh lệch nhiệt độ của nước nóng và nước lạnh ban đầu là 87°C và tỉ số m₀/m = 1/28.',
        B: 'Độ chênh lệch nhiệt độ của nước nóng và nước lạnh ban đầu là 81°C và tỉ số m₀/m = 1/24.',
        C: 'Độ chênh lệch nhiệt độ của nước nóng và nước lạnh ban đầu là 87°C và tỉ số m₀/m = 1/24.',
        D: 'Độ chênh lệch nhiệt độ của nước nóng và nước lạnh ban đầu là 81°C và tỉ số m₀/m = 1/28.'
      },
      answer: 'A',
      explanation: 'Đặt ΔT = t_nóng − t_lạnh và k = m/m₀. Sau cốc 1: ΔT − 3 = 3k. Sau cốc 2 (tăng tổng cộng 5,8°C): 2(ΔT − 5,8) = 5,8k. Giải hệ được k = 28 (tức m₀/m = 1/28) và ΔT = 87°C.'
    },
    {
      id: 197,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Đổ một cốc nước nóng vào một bình chứa nước lạnh thì nhiệt độ của nước trong bình tăng thêm 20°C. Tiếp tục đổ một cốc nước nóng giống ở trên vào bình chứa thì nhiệt độ của nước trong bình tăng thêm 10°C. Nếu tiếp tục đổ hai cốc nước nóng vào bình chứa thì nhiệt độ của nước trong bình sẽ tăng thêm',
      options: {
        A: '8°C.',
        B: '6°C.',
        C: '4°C.',
        D: '10°C.'
      },
      answer: 'D',
      explanation: 'Đặt k = m/m₀ và ΔT = t_nóng − t_lạnh. Sau 1 cốc: ΔT/(1 + k) = 20. Sau 2 cốc: 2ΔT/(2 + k) = 30 ⇒ k = 2 và ΔT = 60°C. Đổ tiếp 2 cốc (tổng 4 cốc): độ tăng tổng cộng là 4ΔT/(4 + k) = 240/6 = 40°C ⇒ tăng thêm 40 − 30 = 10°C.'
    },
    {
      id: 198,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một khối sắt ở 100°C. Nếu thả khối sắt vào m₁(g) nước ở 20°C thì nhiệt độ khi cân bằng nhiệt là 40°C; nếu thả khối sắt vào m₂(g) nước ở 20°C thì nhiệt độ khi cân bằng nhiệt là 60°C. Nếu khối sắt được thả vào m₁ + m₂(g) nước ở 40°C thì nhiệt độ khi cân bằng nhiệt là',
      options: {
        A: '50°C.',
        B: '48°C.',
        C: '52°C.',
        D: '62°C.'
      },
      answer: 'C',
      explanation: 'Gọi nhiệt dung khối sắt là Cs. Lần 1: C₁(40 − 20) = Cs(100 − 40) ⇒ C₁ = 3Cs. Lần 2: C₂(60 − 20) = Cs(100 − 60) ⇒ C₂ = Cs. Khi thả vào (m₁ + m₂) có nhiệt dung C₁ + C₂ = 4Cs ở 40°C: 4Cs(t − 40) = Cs(100 − t) ⇒ 5t = 260 ⇒ t = 52°C.'
    },
    {
      id: 199,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một quả cầu sắt khối lượng m ở nhiệt độ t₀. Nếu thả quả cầu vào 3 kg nước ở 2°C thì nhiệt độ cân bằng là 6°C; nếu thả quả cầu vào 2 kg nước ở 20°C thì nhiệt độ cân bằng là 25°C. Biết nhiệt dung riêng của sắt là 460 J/(kg.K) và của nước là 4200 J/(kg.K). Giá trị của m và t₀ lần lượt là',
      options: {
        A: '1,26 kg và 150°C.',
        B: '1,26 kg và 120°C.',
        C: '0,96 kg và 150°C.',
        D: '0,96 kg và 120°C.'
      },
      answer: 'D',
      explanation: 'Ta có hệ: m·460·(t₀ − 6) = 3 × 4200 × (6 − 2) = 50 400 và m·460·(t₀ − 25) = 2 × 4200 × (25 − 20) = 42 000. Chia hai vế: (t₀ − 6)/(t₀ − 25) = 1,2 ⇒ t₀ = 120°C; thay lại được m ≈ 0,96 kg.'
    },
    {
      id: 200,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Có hai bình cách nhiệt: bình I chứa 3 lít nước ở 80°C và bình II chứa 5 lít nước ở 20°C. Đầu tiên, rót V(lít) nước từ bình I sang bình II. Sau khi cân bằng nhiệt, lại rót V(lít) từ bình II sang bình I. Nhiệt độ sau cùng của bình I là 60°C. Giá trị của V là',
      options: {
        A: '0,75 lít.',
        B: '1,25 lít.',
        C: '2 lít.',
        D: '1,5 lít.'
      },
      answer: 'B',
      explanation: 'Bảo toàn nhiệt lượng cho cả 2 bình: 3×80 + 5×20 = 3×60 + 5×t₂ ⇒ t₂ = 32°C. Xét bước 1 (rót V lít ở 80°C vào 5 lít ở 20°C được t₂ = 32°C): V(80 − 32) = 5(32 − 20) ⇒ 48V = 60 ⇒ V = 1,25 lít.'
    },
    {
      id: 201,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một nhiệt lượng kế ban đầu chưa đựng gì. Nếu đổ một ca nước nóng vào nhiệt lượng kế thì nhiệt độ của nhiệt lượng kế tăng thêm 5°C khi cân bằng nhiệt. Nếu đổ thêm một ca nước nóng nữa thì nhiệt độ của nhiệt lượng kế tiếp tục tăng thêm 3°C khi cân bằng nhiệt. Các ca nước nóng được coi là như nhau. Nếu đổ tiếp vào nhiệt lượng kế thêm 3 ca nước nóng nữa thì nhiệt độ của nhiệt lượng kế tăng thêm bao nhiêu độ nữa?',
      options: {
        A: '2,5°C.',
        B: '5°C.',
        C: '3°C.',
        D: '4,5°C.'
      },
      answer: 'D',
      explanation: 'Đặt k = C_nlk / C_ca và ΔT = t_nóng − t₀. Sau 1 ca: ΔT/(1 + k) = 5. Sau 2 ca (tổng tăng 8°C): 2ΔT/(2 + k) = 8 ⇒ k = 3 và ΔT = 20°C. Đổ tiếp 3 ca (tổng 5 ca): độ tăng tổng cộng là 5ΔT/(5 + k) = 100/8 = 12,5°C ⇒ tăng thêm 12,5 − 8 = 4,5°C.'
    },
    {
      id: 202,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Hai bình A và B cùng chứa 200 g nước ở nhiệt độ lần lượt là 60°C và 100°C. Bây giờ, rót 50 g nước từ bình B sang bình A, khi bình A có cân bằng nhiệt thì lại rót 50 g nước từ bình A sang bình B, khi bình B có cân bằng nhiệt thì tiếp tục lặp lại như vậy. Mỗi lần rót qua và rót lại tính là một lần. Bỏ qua sự trao đổi nhiệt của nước với bình và môi trường. Sau bao nhiêu lần thì hiệu nhiệt độ giữa hai bình nhỏ hơn 2°C?',
      options: {
        A: '4.',
        B: '5.',
        C: '6.',
        D: '3.'
      },
      answer: 'C',
      explanation: 'Mỗi lần rót 50 g từ B sang A rồi từ A về B, hiệu nhiệt độ giữa 2 bình giảm đi còn (200/250)×(150/200) = 0,6 lần hiệu nhiệt độ trước đó: ΔT_n = 40 × (0,6)ⁿ < 2 ⇒ (0,6)ⁿ < 0,05 ⇒ n = 6 lần (với n = 6 thì ΔT₆ ≈ 1,87°C < 2°C).'
    },
    {
      id: 203,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một công nhân cần nâng nhiệt độ một phôi hợp kim nhôm khối lượng 4,2 kg và nhiệt độ ban đầu 15°C lên một nhiệt độ nhất định. Ngoài trừ 1,2 kg nước nóng ở nhiệt độ 90°C trong bình thủy điện thì không còn nguồn nhiệt nào khác. Người công nhân bèn chia nước nóng thành 5 phần bằng nhau và lần lượt nhúng phôi hợp kim nhôm vào 5 phần nước nóng này (mỗi lần đợi cân bằng nhiệt rồi lấy phôi ra). Biết nhiệt dung riêng của hợp kim nhôm là 880 J/(kg.K) và của nước là 4200 J/(kg.K). Nhiệt độ cuối cùng của phôi mà người công nhân thu được là',
      options: {
        A: '47,7°C.',
        B: '51,2°C.',
        C: '53,6°C.',
        D: '66,0°C.'
      },
      answer: 'D',
      explanation: 'Nhiệt dung của phôi C_p = 4,2×880 = 3696 J/K; mỗi phần nước (0,24 kg) có nhiệt dung C_n = 0,24×4200 = 1008 J/K. Qua 5 lần trao đổi nhiệt liên tiếp với nước 90°C (làm tròn từng bước): Lần 1 → 31°C; Lần 2 → 43°C; Lần 3 → 53°C; Lần 4 → 60°C; Lần 5 → 66,0°C.'
    },
    {
      id: 204,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Vật (chất) nào dưới đây không có nhiệt độ nóng chảy xác định?',
      options: {
        A: 'Miếng nhựa thông',
        B: 'Hạt đường',
        C: 'Viên kim cương',
        D: 'Khối thạch anh'
      },
      answer: 'A',
      explanation: 'Nhựa thông là chất rắn vô định hình nên không có nhiệt độ nóng chảy xác định.'
    },
    {
      id: 205,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Đơn vị của nhiệt nóng chảy riêng là',
      options: {
        A: 'J/s',
        B: 'J/ kg.độ',
        C: 'J/ kg',
        D: 'kg/J'
      },
      answer: 'C',
      explanation: 'Từ λ = Q/m, đơn vị của nhiệt nóng chảy riêng là J/kg.'
    },
    {
      id: 206,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Gọi Q là nhiệt lượng cần truyền cho vật có khối lượng m để làm vật nóng chảy hoàn toàn vật ở nhiệt độ nóng chảy mà không thay đổi nhiệt độ của vật. Thì nhiệt nóng chảy riêng λ của chất đó được tính theo công thức',
      options: {
        A: 'λ = Q.m',
        B: 'λ = Q + m',
        C: 'λ = Q − m',
        D: 'λ = Q/m'
      },
      answer: 'D',
      explanation: 'Nhiệt nóng chảy riêng được xác định bởi công thức λ = Q / m.'
    },
    {
      id: 207,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Không thể kết luận gì về nhiệt nóng chảy riêng của chất nào dưới đây?',
      options: {
        A: 'Miếng nhựa đường (hắc ín)',
        B: 'Muối ăn',
        C: 'Viên kim cương',
        D: 'Khối thạch anh'
      },
      answer: 'A',
      explanation: 'Nhựa đường (hắc ín) là chất rắn vô định hình, không có nhiệt độ nóng chảy xác định nên không có nhiệt nóng chảy riêng xác định.'
    },
    {
      id: 208,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt độ nóng chảy riêng của vật rắn phụ thuộc vào những yếu tố nào?',
      options: {
        A: 'Phụ thuộc vào nhiệt độ của vật rắn và áp suất ngoài.',
        B: 'Phụ thuộc bản chất của vật rắn',
        C: 'Phụ thuộc bản chất và nhiệt độ của vật rắn',
        D: 'Phụ thuộc bản chất và nhiệt độ của vật rắn, đồng thời phụ thuộc áp suất ngoài'
      },
      answer: 'B',
      explanation: 'Nhiệt nóng chảy riêng của vật rắn phụ thuộc vào bản chất của chất làm vật rắn.'
    },
    {
      id: 209,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt nóng chảy riêng của một chất là',
      options: {
        A: 'nhiệt độ nóng chảy riêng của chất rắn',
        B: 'nhiệt lượng cần cung cấp cho vật để làm vật nóng chảy',
        C: 'là nhiệt lượng cần để làm cho một đơn vị khối lượng chất đó nóng chảy hoàn toàn.',
        D: 'là nhiệt lượng cần để làm cho một đơn vị khối lượng chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy mà không làm thay đổi nhiệt độ.'
      },
      answer: 'D',
      explanation: 'Nhiệt nóng chảy riêng λ của một chất là nhiệt lượng cần truyền cho 1 đơn vị khối lượng (1 kg) chất đó để nó nóng chảy hoàn toàn ở nhiệt độ nóng chảy mà không làm thay đổi nhiệt độ.'
    },
    {
      id: 210,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Tính nhiệt lượng Q cần cung cấp để làm nóng chảy 500g nước đá ở 0°C. Biết nhiệt nóng chảy riêng của nước đá bằng 3,34.10⁵J/kg',
      options: {
        A: 'Q = 7.10⁷ J',
        B: 'Q = 167k J',
        C: 'Q = 167J',
        D: 'Q = 167.10⁶J'
      },
      answer: 'B',
      explanation: 'Q = m·λ = 0,5 × 3,34.10⁵ = 167 000 J = 167 kJ.'
    },
    {
      id: 211,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Để giải thích hiện tượng tách kim loại bằng nóng chảy người ta dùng khái niệm về đại lượng nào ?',
      options: {
        A: 'Nhiệt dung riêng',
        B: 'Nhiệt lượng',
        C: 'Nhiệt nóng chảy riêng',
        D: 'Nhiệt hoá hơi riêng'
      },
      answer: 'C',
      explanation: 'Quá trình nấu chảy và tách kim loại dựa trên nhiệt độ nóng chảy và nhiệt nóng chảy riêng của kim loại.'
    },
    {
      id: 212,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Gọi Q là nhiệt lượng cần truyền cho vật, m là khối lượng của vật (kg). Tỉ số Q/m gọi là',
      options: {
        A: 'nhiệt dung riêng của chất làm nên vật',
        B: 'nhiệt nóng chảy riêng của chất làm nên vật',
        C: 'trọng lượng riêng của vật',
        D: 'khối lượng riêng của vật'
      },
      answer: 'B',
      explanation: 'Trong quá trình nóng chảy, tỉ số λ = Q/m được gọi là nhiệt nóng chảy riêng của chất làm nên vật.'
    },
    {
      id: 213,
      topic: 'Sự chuyển thể của các chất',
      question: 'Trong các hiện tượng sau, hiện tượng nào liên quan đến sự nóng chảy',
      options: {
        A: 'Thả cục nước đá vào cốc nước',
        B: 'Đốt ngọn đèn dầu',
        C: 'Đun nóng một nồi nước',
        D: 'Cho cốc nước vào tủ lạnh'
      },
      answer: 'A',
      explanation: 'Thả cục nước đá vào cốc nước thì nước đá tan ra (nóng chảy).'
    },
    {
      id: 214,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/ kg. Người ta cung cấp nhiệt lượng 5,01.10⁵ J có thể làm nóng chảy hoàn toàn bao nhiêu kg nước đá',
      options: {
        A: '16,7 kg',
        B: '1,5kg',
        C: '8,35kg',
        D: '0,668kg'
      },
      answer: 'B',
      explanation: 'm = Q / λ = 5,01.10⁵ / (3,34.10⁵) = 1,5 kg.'
    },
    {
      id: 215,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Trong công nghệ đúc kim loại người ta quan tâm đến đại lượng nào sau đây',
      options: {
        A: 'Nhiệt lượng của vật liệu đúc',
        B: 'Nhiệt nóng chảy riêng của vật liệu đúc',
        C: 'Nhiệt dung của vật liệu đúc',
        D: 'Nhiệt dung riêng của vật liệu đúc'
      },
      answer: 'B',
      explanation: 'Trong công nghệ luyện kim và đúc kim loại, người ta cần biết nhiệt độ nóng chảy và nhiệt nóng chảy riêng của vật liệu đúc để tính toán nhiên liệu và thời gian nấu chảy.'
    },
    {
      id: 216,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt nóng chảy riêng của đồng là 1,8.10⁵ J/kg. Câu nào dưới đây là đúng?',
      options: {
        A: 'Khối đồng sẽ tỏa ra nhiệt lượng 1,8.10⁵ J khi nóng chảy hoàn toàn.',
        B: 'Mỗi kilogam đồng cần thu nhiệt lượng 1,8.10⁵ J để hóa lỏng hoàn toàn ở nhiệt độ nóng chảy.',
        C: 'Khối đồng cần thu nhiệt lượng 1,8.10⁵ J để hóa lỏng.',
        D: 'Mỗi kilogam đồng tỏa ra nhiệt lượng 1,8.10⁵ J khi hóa lỏng hoàn toàn.'
      },
      answer: 'B',
      explanation: 'Nhiệt nóng chảy riêng của đồng là 1,8.10⁵ J/kg nghĩa là mỗi kilôgam đồng cần thu nhiệt lượng 1,8.10⁵ J để hóa lỏng hoàn toàn ở nhiệt độ nóng chảy.'
    },
    {
      id: 217,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Điều nào sau đây là sai khi nói về nhiệt nóng chảy riêng',
      options: {
        A: 'Nhiệt nóng chảy riêng của vật rắn là nhiệt lượng cung cấp cho vật rắn có khối lượng 1kg nóng chảy hoàn toàn trong quá trình nóng chảy',
        B: 'Nhiệt nóng chảy có đơn vị Jun/kilogam (J/kg)',
        C: 'Các vật có khối lượng bằng nhau thì có nhiệt nóng chảy riêng như nhau.',
        D: 'Nhiệt nóng chảy riêng phụ thuộc vào cấu tạo của vật rắn.'
      },
      answer: 'C',
      explanation: 'Nhiệt nóng chảy riêng phụ thuộc vào bản chất của chất làm vật rắn, không phải hai chất khác nhau có cùng khối lượng thì có cùng nhiệt nóng chảy riêng.'
    },
    {
      id: 218,
      topic: 'Sự chuyển thể của các chất',
      question: 'Cho bảng nhiệt độ nóng chảy của các chất sau. Sắp xếp theo chiều tăng dần nhiệt độ nóng chảy của các chất thép, đồng, nhôm, thiếc',
      options: {
        A: 'Đồng, nhôm, thiếc, sắt.',
        B: 'Thiếc, nhôm, đồng, thép',
        C: 'Nhôm, đồng, thiếc, thép',
        D: 'Thiếc, đồng, nhôm, thép'
      },
      answer: 'B',
      figure: 218,
      explanation: 'Dựa vào bảng số liệu: Thiếc (232°C) < Nhôm (659°C) < Đồng (1083°C) < Thép (1300°C).'
    },
    {
      id: 219,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Đơn vị của nhiệt nóng chảy riêng là',
      options: {
        A: 'J',
        B: 'J/ kg.độ',
        C: 'J/ kg',
        D: 'kg/J'
      },
      answer: 'C',
      explanation: 'Đơn vị của nhiệt nóng chảy riêng là J/kg.'
    },
    {
      id: 220,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Gọi Q là nhiệt lượng cần truyền cho vật có khối lượng m để làm vật nóng chảy hoàn toàn vật ở nhiệt độ nóng chảy mà không thay đổi nhiệt độ của vật. Nhiệt nóng chảy riêng của chất đó là λ công thức đúng là',
      options: {
        A: 'λ = Q.m',
        B: 'Q = λ. m',
        C: 'm = Q.λ',
        D: 'Q = λ/m'
      },
      answer: 'B',
      explanation: 'Công thức tính nhiệt lượng nóng chảy là Q = λ·m.'
    },
    {
      id: 221,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Chọn đáp án đúng',
      options: {
        A: 'Sắt có nhiệt độ nóng chảy lớn nhất nên nhiệt nóng chảy riêng của nó lớn nhất.',
        B: 'Nhiệt dung của đồng lớn hơn của chì',
        C: 'Cần nhiệt lượng 1,8.10⁵ J để làm nóng chảy đồng',
        D: 'Cần nhiệt lượng 0,25.10⁵ J để làm nóng chảy hoàn toàn 1kg chì ở 327°C'
      },
      answer: 'D',
      explanation: 'Chì có nhiệt độ nóng chảy 327°C và nhiệt nóng chảy riêng λ = 0,25.10⁵ J/kg nên cần 0,25.10⁵ J để làm nóng chảy hoàn toàn 1 kg chì ở 327°C.'
    },
    {
      id: 222,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt độ nóng chảy riêng của vật rắn phụ thuộc vào những yếu tố nào?',
      options: {
        A: 'Phụ thuộc vào nhiệt độ của vật rắn và áp suất ngoài.',
        B: 'Phụ thuộc bản chất của vật rắn',
        C: 'Phụ thuộc bản chất và nhiệt độ của vật rắn',
        D: 'Phụ thuộc bản chất và nhiệt độ của vật rắn, đồng thời phụ thuộc áp suất ngoài'
      },
      answer: 'B',
      explanation: 'Nhiệt nóng chảy riêng là đại lượng đặc trưng cho bản chất của chất rắn kết tinh.'
    },
    {
      id: 223,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt nóng chảy riêng của một chất là ...................... cần cung cấp để làm cho một đơn vị khối lượng chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy mà không làm thay đổi nhiệt độ. Tìm từ thích hợp điền vào chỗ trống',
      options: {
        A: 'Nhiệt độ',
        B: 'Nhiệt dung',
        C: 'Nhiệt lượng',
        D: 'Nhiệt dung riêng'
      },
      answer: 'C',
      explanation: 'Từ cần điền vào chỗ trống là "Nhiệt lượng".'
    },
    {
      id: 224,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Tính nhiệt lượng Q cần cung cấp để làm nóng chảy 200g nước đá ở 0°C. Biết nhiệt nóng chảy riêng của nước đá bằng 3,34.10⁵J/kg',
      options: {
        A: 'Q = 6,68 J',
        B: 'Q = 6,68k J',
        C: 'Q = 66,8J',
        D: 'Q = 668kJ'
      },
      answer: 'C',
      explanation: 'Ta có Q = m·λ = 0,2 × 3,34.10⁵ = 66 800 J = 66,8 kJ. (Trong đề gốc C in thiếu chữ k từ 66,8 kJ; theo bảng đáp án của đề chọn C).'
    },
    {
      id: 225,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Điều nào sau đây là sai khi nói về nhiệt nóng chảy?',
      options: {
        A: 'Nhiệt nóng chảy của vật rắn là nhiệt lượng cung cấp cho vật rắn trong quá trình nóng chảy.',
        B: 'Đơn vị của nhiệt nóng chảy là Jun (J).',
        C: 'Các chất có khối lượng bằng nhau thì có nhiệt nóng chảy như nhau.',
        D: 'Nhiệt nóng chảy tính bằng công thức Q = λm'
      },
      answer: 'C',
      explanation: 'Vì Q = λ·m phụ thuộc vào cả khối lượng m và nhiệt nóng chảy riêng λ của từng chất, nên các chất khác nhau dù cùng khối lượng vẫn có nhiệt nóng chảy khác nhau.'
    },
    {
      id: 226,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Điều nào sau đây là đúng khi nói về nhiệt nóng chảy riêng của chất rắn?',
      options: {
        A: 'Nhiệt nóng chảy riêng của một chất có độ lớn bằng nhiệt lượng cần cung cấp để làm nóng chảy 1kg chất đó ở nhiệt độ nóng chảy.',
        B: 'Đơn vị của nhiệt nóng chảy riêng là Jun trên kilôgam (J/ kg).',
        C: 'Các chất khác nhau thì nhiệt nóng chảy riêng của chúng khác nhau.',
        D: 'Cả A, B, C đều đúng.'
      },
      answer: 'D',
      explanation: 'Cả 3 phát biểu A, B, C đều đúng khi nói về nhiệt nóng chảy riêng.'
    },
    {
      id: 227,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Trong thí nghiệm xác định nhiệt nóng chảy riêng của nước đá nhất thiết phải có dụng cụ nào sau đây ?',
      options: {
        A: 'Oát kế',
        B: 'Am pe kế',
        C: 'Thước mét',
        D: 'nhiệt kế'
      },
      answer: 'D',
      explanation: 'Trong thí nghiệm xác định nhiệt nóng chảy riêng của nước đá nhất thiết phải có nhiệt kế để theo dõi nhiệt độ của nước đá (đảm bảo quá trình tan ở 0°C và đo độ biến thiên nhiệt độ).'
    },
    {
      id: 228,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/ kg. Người ta cung cấp nhiệt lượng 10,02.10⁵ J có thể làm nóng chảy hoàn toàn bao nhiêu kg nước đá',
      options: {
        A: '33,47 kg',
        B: '3kg',
        C: '0,35kg',
        D: '0,668kg'
      },
      answer: 'B',
      explanation: 'Khối lượng nước đá nóng chảy hoàn toàn: m = Q / λ = 10,02.10⁵ / (3,34.10⁵) = 3 kg.'
    },
    {
      id: 229,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Vật nào sau đây không có cấu trúc mạng tinh thể?',
      options: {
        A: 'Hạt muối ăn.',
        B: 'Viên kim cương.',
        C: 'Mẫu thạch anh.',
        D: 'Cốc thủy tinh.'
      },
      answer: 'D',
      explanation: 'Thủy tinh là chất rắn vô định hình nên cốc thủy tinh không có cấu trúc mạng tinh thể.'
    },
    {
      id: 230,
      topic: 'Cấu trúc chất rắn - lỏng - khí',
      question: 'Chất khí luôn luôn chiếm hết thể tích của bình chứa bởi vì',
      options: {
        A: 'Các phân tử chất khí chuyển động hỗn loạn không ngừng.',
        B: 'Lực liên kết giữa các phân tử chất khí rất yếu nên chúng chuyển động tự do về mọi phía.',
        C: 'Chất khí có quá nhiều phân tử.',
        D: 'Các phân tử chất khí luôn luôn đẩy nhau ra xa nên chúng cách nhau càng xa càng tốt.'
      },
      answer: 'B',
      explanation: 'Do khoảng cách giữa các phân tử khí lớn, lực tương tác liên kết giữa chúng rất yếu nên các phân tử khí chuyển động hỗn loạn tự do về mọi phía, chiếm toàn bộ thể tích bình chứa.'
    },
    {
      id: 231,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Khi thả một thỏi kim loại đã được nung nóng vào một chậu nước lạnh thì nội năng của thỏi kim loại và của nước thay đổi như thế nào?',
      options: {
        A: 'Nội năng của thỏi kim loại và của nước đều tăng.',
        B: 'Nội năng của thỏi kim loại và của nước đều giảm.',
        C: 'Nội năng của thỏi kim loại giảm, nội năng của nước tăng.',
        D: 'Nội năng của thỏi kim loại tăng, nội năng của nước giảm.'
      },
      answer: 'C',
      explanation: 'Thỏi kim loại nóng truyền nhiệt lượng cho nước lạnh nên nội năng của thỏi kim loại giảm, còn nội năng của nước tăng.'
    },
    {
      id: 232,
      topic: 'Sự chuyển thể của các chất',
      question: 'Cồn y tế chuyển từ thể lỏng sang thể khí rất nhanh ở điều kiện thông thường. Khi xoa cồn vào da, ta cảm thấy lạnh ở vùng da đó vì cồn',
      options: {
        A: 'thu nhiệt lượng từ cơ thể qua chỗ da đó để bay hơi.',
        B: 'khi bay hơi tỏa nhiệt lượng vào chỗ da đó.',
        C: 'khi bay hơi kéo theo lượng nước chỗ da đó ra khỏi cơ thể.',
        D: 'khi bay hơi tạo ra dòng nước mát tại chỗ da đó.'
      },
      answer: 'A',
      explanation: 'Khi bay hơi, cồn thu nhiệt lượng trực tiếp từ vùng da tiếp xúc làm vùng da đó hạ nhiệt độ nên ta cảm thấy mát lạnh.'
    },
    {
      id: 233,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Chọn câu trả lời đúng. Nhiệt nóng chảy riêng của vàng là 62,8.10³J/kg.',
      options: {
        A: 'Mỗi kg vàng cần thu nhiệt lượng 62,8.10³J hoá lỏng hoàn toàn ở nhiệt độ nóng chảy.',
        B: 'Khối vàng cần thu nhiệt lượng 62,8.10³J để hoá lỏng.',
        C: 'Mỗi kg vàng tỏa ra nhiệt lượng 62,8.10³J khi hoá lỏng hoàn toàn.',
        D: 'Khối vàng cần tỏa nhiệt lượng 62,8.10³J để hoá lỏng.'
      },
      answer: 'A',
      explanation: 'Nhiệt nóng chảy riêng của vàng là 62,8.10³ J/kg nghĩa là mỗi kg vàng cần thu nhiệt lượng 62,8.10³ J để hóa lỏng hoàn toàn ở nhiệt độ nóng chảy.'
    },
    {
      id: 234,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Nhiệt lượng được truyền vào hỗn hợp nước đá để làm tan chảy một phần nước đá. Trong quá trình này, hỗn hợp nước đá',
      options: {
        A: 'thực hiện công.',
        B: 'có nhiệt độ tăng lên.',
        C: 'có nội năng tăng lên.',
        D: 'thực hiện công, có nhiệt độ tăng và nội năng cũng tăng.'
      },
      answer: 'C',
      explanation: 'Trong khi nước đá đang tan, nhiệt độ của hỗn hợp giữ không đổi ở 0°C, nhưng vì hỗn hợp nhận thêm nhiệt lượng nên nội năng của nó tăng lên (thế năng phân tử tăng).'
    },
    {
      id: 235,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một học sinh biết đến thí nghiệm nổi tiếng của Joule, đã phát hiện một thiết bị đạp xe cố định (tập gym), có thể chuyển hóa toàn bộ năng lượng tiêu hao thành nhiệt để làm ấm nước. Cần bao nhiêu cơ năng để tăng nhiệt độ của 300 g nước 20°C đến 95°C. Biết nhiệt dung riêng của nước là 4200 J/kg.K',
      options: {
        A: '94500 J.',
        B: '22000 J.',
        C: '5400 J.',
        D: '14 J.'
      },
      answer: 'A',
      explanation: 'W = Q = m·c·Δt = 0,3 × 4200 × (95 − 20) = 94 500 J.'
    },
    {
      id: 236,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Nhiệt độ của vật nào tăng lên nhiều nhất khi ta thả rơi bốn vật dưới đây ở có cùng khối lượng và từ cùng một độ cao xuống đất. Coi như toàn bộ độ giảm cơ năng dùng để làm nóng vật.',
      options: {
        A: 'Vật bằng nhôm, có nhiệt dung riêng là 880 J/kg.K.',
        B: 'Vật bằng đồng, có nhiệt dung riêng là 380 J/kg.K.',
        C: 'Vật bằng chì, có nhiệt dung riêng là 120 J/kg.K.',
        D: 'Vật bằng gang, có nhiệt dung riêng là 550 J/kg.K.'
      },
      answer: 'C',
      explanation: 'Từ m·g·h = m·c·Δt ⇒ Δt = g·h / c. Vật có nhiệt dung riêng c nhỏ nhất sẽ có độ tăng nhiệt độ Δt lớn nhất ⇒ Vật bằng chì (c = 120 J/kg.K).'
    },
    {
      id: 237,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Trường hợp làm biến đổi nội năng không do thực hiện công?',
      options: {
        A: 'Đun nóng nước bằng bếp.',
        B: 'Một viên bi bằng thép rơi xuống đất mềm.',
        C: 'Nén khí trong xilanh.',
        D: 'Cọ xát hai vật vào nhau.'
      },
      answer: 'A',
      explanation: 'Đun nóng nước bằng bếp là biến đổi nội năng bằng cách truyền nhiệt.'
    },
    {
      id: 238,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Một bình đun nước siêu tốc với công suất 2000W bắt đầu đun sôi 2 lít nước từ 20°C. Biết nhiệt dung riêng của nước là 4200 J/kg.K, nhiệt hóa hơi riêng của nước L=23.10⁵J/kg, khối lượng riêng của nước là 1000 kg/m³. Công tắc tự động của bình bị hỏng không thể tắt bình khi nước đã sôi. Sau bao lâu thì nước trong bình sẽ bốc hơi hết',
      options: {
        A: '2636 s.',
        B: '2212 s.',
        C: '3736 s.',
        D: '636 s.'
      },
      answer: 'A',
      explanation: 'Tổng nhiệt lượng để đun 2 kg nước từ 20°C tới 100°C và hóa hơi hoàn toàn: Q = m·c·Δt + m·L = 2 × 4200 × 80 + 2 × 23.10⁵ = 672 000 + 4 600 000 = 5 272 000 J. Thời gian cần thiết: t = Q / P = 5 272 000 / 2000 = 2636 s.'
    },
    {
      id: 239,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một nhiệt lượng kế bằng đồng thau khối lượng 128 g chứa 210 g nước ở nhiệt độ 8,4°C. Người ta thả một miếng kim loại khối lượng 192 g đã nung nóng tới 100°C vào nhiệt lượng kế. Xác định nhiệt dung riêng của chất làm miếng kim loại, biết nhiệt độ khi bắt đầu có sự cân bằng nhiệt là 21,5°C. Bỏ qua sự truyền nhiệt ra môi trường bên ngoài. Nhiệt dung riêng của đồng thau là 0,128.10³ J/(kg.K).',
      options: {
        A: '2,1.10³ J/(kg.K)',
        B: '0,78.10³ J/(kg.K)',
        C: '7,8.10³ J/(kg.K)',
        D: '0,21.10³ J/(kg.K)'
      },
      answer: 'B',
      explanation: 'Nhiệt lượng đồng thau và nước thu vào (lấy c_nước = 4180 J/kg.K): Q_thu = (0,128×128 + 0,21×4180)×(21,5 − 8,4) ≈ 11 714 J. Nhiệt dung riêng của kim loại: c = Q_thu / [0,192 × (100 − 21,5)] ≈ 777 J/(kg.K) ≈ 0,78.10³ J/(kg.K).'
    },
    {
      id: 240,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Khi nói về nội năng khẳng định nào sau đây là đúng?',
      options: {
        A: 'Nội năng là nhiệt lượng.',
        B: 'Nội năng là một dạng năng lượng.',
        C: 'Nội năng của A lớn hơn nội năng của B thì nhiệt độ của A cũng lớn hơn nhiệt độ của B.',
        D: 'Nội năng của vật chỉ thay đổi trong quá trình truyền nhiệt, không thay đổi trong quá trình thực hiện công.'
      },
      answer: 'B',
      explanation: 'Nội năng là một dạng năng lượng bên trong vật.'
    },
    {
      id: 241,
      topic: 'Sự chuyển thể của các chất',
      question: 'Trong quá trình hình thành mây, hơi nước biến thành những giọt nước ngày càng lớn hơn cho đến khi trời mưa. Điều này sẽ:',
      options: {
        A: 'làm cho nhiệt độ của không khí trong các đám mây ấm lên.',
        B: 'làm cho nhiệt độ của không khí trong các đám mây mát hơn.',
        C: 'sẽ không ảnh hưởng đến nhiệt độ của không khí trong các đám mây.',
        D: 'không ảnh hưởng đến đám mây vì trong đó không có không khí.'
      },
      answer: 'A',
      explanation: 'Hơi nước ngưng tụ thành các giọt nước là quá trình tỏa nhiệt ra không khí xung quanh, làm cho không khí trong đám mây ấm lên.'
    },
    {
      id: 242,
      topic: 'Sự chuyển thể của các chất',
      question: 'Hình bên là đồ thị phác thảo sự thay đổi nhiệt độ theo thời gian trong quá trình chuyển thể từ rắn sang lỏng của chất rắn kết tinh và của chất rắn vô định hình tương ứng lần lượt là:',
      options: {
        A: 'đường (3) và đường (2).',
        B: 'đường (1) và đường (2).',
        C: 'đường (2) và đường (3).',
        D: 'đường (3) và đường (1).'
      },
      answer: 'A',
      figure: 242,
      explanation: 'Chất rắn kết tinh khi nóng chảy có nhiệt độ giữ không đổi ở t_c trong suốt thời gian nóng chảy nên ứng với đường (3); chất rắn vô định hình không có nhiệt độ nóng chảy xác định mà nhiệt độ tăng liên tục nên ứng với đường (2).'
    },
    {
      id: 243,
      topic: 'Sự chuyển thể của các chất',
      question: 'Một chất ở thể rắn như iodine (I - ốt), băng phiến, đá khô (CO₂ ở thể rắn),.....có thể chuyển trực tiếp sang ......(1)........ khi nó......(2)....... Hiện tượng trên gọi là sự thăng hoa. Ngược lại, với sự thăng hoa là sự ngưng kết. Điền cụm từ thích hợp vào chỗ trống',
      options: {
        A: 'thể lỏng; (2) tỏa nhiệt.',
        B: 'thể hơi; (2) tỏa nhiệt.',
        C: 'thể lỏng; (2) nhận nhiệt.',
        D: 'thể hơi; (2) nhận nhiệt.'
      },
      answer: 'D',
      explanation: 'Sự thăng hoa là quá trình chất rắn chuyển trực tiếp sang (1) thể hơi (khí) khi nó (2) nhận nhiệt.'
    },
    {
      id: 244,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Với cùng một nhiệt lượng nhận được, cả hai kim loại nhôm và đồng có cùng khối lượng đều nóng lên đến 100°C. Biết nhiệt dung riêng của nhôm và đồng lần lượt là 880 J/kg.K và 380 J/kg.K. Nếu nhiệt độ ban đầu của nhôm là 80°C thì nhiệt độ ban đầu của đồng là:',
      options: {
        A: '23,7°C.',
        B: '13,7°C.',
        C: '53,7°C.',
        D: '43,7°C.'
      },
      answer: 'C',
      explanation: 'Cùng nhận nhiệt lượng Q và cùng khối lượng m: 880 × (100 − 80) = 380 × (100 − t_Cu) ⇒ 100 − t_Cu ≈ 46,3°C ⇒ t_Cu ≈ 53,7°C.'
    },
    {
      id: 245,
      topic: 'Mô hình động học phân tử',
      question: 'Hãy chỉ ra câu sai trong các câu sau:',
      options: {
        A: 'Khi các phân tử sắp xếp càng có trật tự thì lực liên kết giữa chúng càng mạnh.',
        B: 'Lực liên kết giữa các phân tử một chất ở thể rắn sẽ lớn hơn lực liên kết giữa các phân tử chất đó khi ở thể khí.',
        C: 'Lực liên kết giữa các phân tử càng mạnh thì khoảng cách giữa các phân tử càng lớn.',
        D: 'Lực liên kết giữa các phân tử gồm cả lực hút và lực đẩy.'
      },
      answer: 'C',
      explanation: 'Khoảng cách giữa các phân tử càng lớn thì lực liên kết giữa chúng càng yếu (như ở thể khí), nên phát biểu C là sai.'
    },
    {
      id: 246,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Hiện nay, kính cường lực (chịu lực rất tốt) thường được sử dụng để làm một phần tường của các tòa nhà, chung cư hay thương mại,... thay thế các vật liệu gạch, bê tông. Tuy nhiên, vào những ngày mùa hè, nếu bước vào những căn phòng có tường làm bằng kính cường lực bị đóng kín, ta thường thấy không khí trong phòng nóng hơn so với bên ngoài vì sao? Chọn đáp án sai?',
      options: {
        A: 'Không khí trong phòng không thực hiện công.',
        B: 'Không khí trong phòng nhận nhiệt từ ánh sáng mặt trời.',
        C: 'Thể tích khí trong phòng tăng lên.',
        D: 'Nội năng khí trong phòng tăng lên.'
      },
      answer: 'C',
      explanation: 'Căn phòng được đóng kín bởi tường và kính cường lực nên thể tích khí trong phòng không đổi (khí không thực hiện công, nhận nhiệt từ bức xạ mặt trời làm nội năng và nhiệt độ tăng). Do đó phương án C là sai.'
    },
    {
      id: 247,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Khi nội năng của một vật tăng lên thì năng lượng trung bình của các phân tử cấu tạo nên vật cũng tăng lên. Khi đó',
      options: {
        A: 'chỉ có động năng của các phân tử tăng lên.',
        B: 'chỉ có thế năng của các phân tử tăng lên.',
        C: 'động năng của các phân tử chắc chắn tăng lên còn thế năng của chúng có thể thay đổi không đáng kể.',
        D: 'động năng và thế năng của các phân tử chắc chắn cùng tăng lên.'
      },
      answer: 'C',
      explanation: 'Khi vật nhận nhiệt nóng lên thông thường (không chuyển thể), động năng chuyển động nhiệt của các phân tử tăng lên còn thế năng tương tác thay đổi không đáng kể.'
    },
    {
      id: 248,
      topic: 'Mô hình động học phân tử',
      question: 'Xét các tính chất sau đây của các phân tử: I. Chuyển động không ngừng. II. Tương tác với nhau bằng lực hút và lực đẩy. III. Khi chuyển động va chạm với nhau. Các phân tử chất rắn, chất lỏng có cùng tính chất nào?',
      options: {
        A: '(I) và (II).',
        B: '(II) và (III).',
        C: '(I) và (III).',
        D: '(I), (II) và (III).'
      },
      answer: 'D',
      explanation: 'Các phân tử chất rắn và chất lỏng đều chuyển động nhiệt không ngừng (I), tương tác với nhau bằng cả lực hút và lực đẩy (II) và va chạm với các phân tử lân cận khi dao động/chuyển động (III).'
    },
    {
      id: 249,
      topic: 'Nội năng & Nguyên lí I NĐLH',
      question: 'Mùa hè, trời xanh, mây trắng, nắng vàng, ta thường cần một chút “vitamin sea”. Khi đi tắm biển, ta thường đi chân trần trên đất:',
      options: {
        A: 'Chân cọ xát nhiều với mặt cát nên chân nóng dần lên.',
        B: 'Cát hấp thụ nhiệt của mặt trời và nhiệt này được truyền đến chân chúng ta, chân ta bắt đầu nóng rát lên.',
        C: 'Cơ thể ta có nhiệt độ, khiến nhiệt này được truyền xuống mặt cát, làm ta cảm thấy khi đi chân trần thì mặt cát sẽ nóng.',
        D: 'Chân trần nhận nhiệt từ cát, cát lấy nhiệt từ mặt trời, quá trình truyền nhiệt diễn ra từ chân qua mặt cát, làm cho mặt cát nóng.'
      },
      answer: 'B',
      explanation: 'Cát có nhiệt dung riêng nhỏ nên hấp thụ bức xạ mặt trời và nóng lên rất nhanh. Khi đi chân trần, nhiệt truyền từ mặt cát nóng sang bàn chân làm chân ta cảm thấy nóng rát.'
    },
    {
      id: 250,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt lượng cần thiết để làm 1 kg của chất chuyển hoàn toàn từ thể lỏng sang thể khí ở nhiệt độ xác định được gọi là',
      options: {
        A: 'nhiệt dung riêng.',
        B: 'nhiệt hoá hơi riêng.',
        C: 'nhiệt nóng chảy riêng.',
        D: 'nhiệt hoá hơi.'
      },
      answer: 'B',
      explanation: 'Nhiệt lượng cần để 1 kg chất lỏng chuyển hoàn toàn sang thể khí ở nhiệt độ xác định gọi là nhiệt hóa hơi riêng (L).'
    },
    {
      id: 251,
      topic: 'Sự chuyển thể của các chất',
      question: 'Khi làm muối từ nước biển, người dân làm muối dẫn nước biển vào các ruộng muối. Nước biển bay hơi, người ta thu được muối. Theo em, thời tiết như thế nào thì thuận lợi cho nghề làm muối?',
      options: {
        A: 'Trời nắng nóng và nhiều gió.',
        B: 'Trời ít gió.',
        C: 'Không khí ẩm.',
        D: 'Trời lạnh.'
      },
      answer: 'A',
      explanation: 'Tốc độ bay hơi của nước biển tăng mạnh khi nhiệt độ cao (trời nắng nóng), có nhiều gió và độ ẩm không khí thấp.'
    },
    {
      id: 252,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Một chiếc cốc đồng khối lượng 0,5 kg có chứa 0,17 kg nước ở nhiệt độ 20°C. Một cục sắt khối lượng 0,25 kg ở nhiệt độ 85°C được thả vào cốc. Coi hệ không trao đổi nhiệt với môi trường. Nhiệt dung riêng của đồng, sắt, nước lần lượt là 390 J/(kg.K), 470 J/(kg.K), 4190 J/(kg.K). Nhiệt độ cuối cùng của hệ khi có cân bằng nhiệt',
      options: {
        A: '43,5°C.',
        B: '35,5°C.',
        C: '32,5°C.',
        D: '27,5°C.'
      },
      answer: 'D',
      explanation: 'Phương trình cân bằng nhiệt: (0,5×390 + 0,17×4190)×(t − 20) = 0,25×470×(85 − t) ⇒ 907,3(t − 20) = 117,5(85 − t) ⇒ t ≈ 27,5°C.'
    },
    {
      id: 253,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Biết nhiệt dung riêng của gỗ là c = 1236J/kg.K, khi 100 g gỗ giảm nhiệt độ đi 1 K thì nó',
      options: {
        A: 'cần nhận nhiệt lượng 124 J từ môi trường bên ngoài.',
        B: 'giải phóng một năng lượng bằng 124 J ra môi trường bên ngoài.',
        C: 'giải phóng một năng lượng bằng 12,4 J ra môi trường bên ngoài.',
        D: 'cần nhận nhiệt lượng 1240 J từ môi trường bên ngoài.'
      },
      answer: 'B',
      explanation: 'Khi giảm nhiệt độ đi 1 K, 100 g (0,1 kg) gỗ tỏa ra (giải phóng) nhiệt lượng: Q = m·c·ΔT = 0,1 × 1236 × 1 = 123,6 J ≈ 124 J.'
    },
    {
      id: 254,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Có hai vật: một miếng đồng và một miếng nhôm có cùng khối lượng và cùng nhiệt độ ban đầu. Biết c_đồng < c_nhôm. Hai vật được hấp thụ một nhiệt lượng như nhau rồi cho tiếp xúc thì',
      options: {
        A: 'miếng đồng truyền nhiệt cho miếng nhôm.',
        B: 'miếng nhôm truyền nhiệt cho miếng đồng.',
        C: 'không có sự truyền nhiệt giữa hai vật.',
        D: 'nội năng của hai vật bằng nhau.'
      },
      answer: 'A',
      explanation: 'Vì cùng nhận nhiệt lượng Q và cùng khối lượng m, do c_đồng < c_nhôm nên Δt_đồng > Δt_nhôm ⇒ nhiệt độ miếng đồng cao hơn miếng nhôm. Khi cho tiếp xúc, miếng đồng sẽ truyền nhiệt cho miếng nhôm.'
    },
    {
      id: 255,
      topic: 'Sự chuyển thể của các chất',
      question: 'Khi nấu ăn những món như: luộc, ninh, nấu cơm... đến lúc sôi thì cần chỉnh nhỏ lửa lại bởi vì',
      options: {
        A: 'Để lửa to làm cho nhiệt độ trong nồi tăng nhanh sẽ làm hỏng đồ nấu trong nồi.',
        B: 'Để lửa nhỏ sẽ vẫn giữ cho trong nồi có nhiệt độ ổn định bằng nhiệt độ sôi của nước.',
        C: 'Lúc này để lửa nhỏ vì cần giảm nhiệt độ trong nồi xuống.',
        D: 'Lúc này cần làm nước trong nồi không bị sôi và bay hơi.'
      },
      answer: 'B',
      explanation: 'Trong suốt quá trình nước đang sôi, dù đun lửa to hay nhỏ thì nhiệt độ của nước vẫn giữ không đổi ở nhiệt độ sôi (100°C). Chỉnh nhỏ lửa vừa giữ được nhiệt độ sôi ổn định vừa tiết kiệm nhiên liệu và tránh trào/cạn nước nhanh.'
    },
    {
      id: 256,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Tra trong bảng nhiệt dung riêng của một số chất, người ta đọc được nhiệt dung riêng của sắt là 440 J/kg.K. Điều này có ý nghĩa là',
      options: {
        A: 'để làm nóng chảy 1 kg sắt cần 440 J.',
        B: 'để làm cho 1 kg sắt tăng nhiệt độ từ 0°C đến 100°C cần 440 J.',
        C: 'nếu lấy đi nhiệt lượng 440 J thì nhiệt độ của 1 kg sắt sẽ tăng thêm 1°C.',
        D: 'nếu lấy đi nhiệt lượng 440 J thì nhiệt độ của 1 kg sắt sẽ giảm đi 1°C.'
      },
      answer: 'D',
      explanation: 'Nhiệt dung riêng của sắt là 440 J/(kg.K) nghĩa là để tăng 1°C cho 1 kg sắt cần truyền 440 J, hoặc nếu lấy đi 440 J thì nhiệt độ của 1 kg sắt giảm đi 1°C.'
    },
    {
      id: 257,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt hoá hơi riêng là',
      options: {
        A: 'nhiệt lượng cần để làm cho một kilogam chất lỏng đó hoá hơi hoàn toàn ở nhiệt độ xác định.',
        B: 'nhiệt lượng cần cung cấp cho một lượng chất lỏng hóa hơi hoàn toàn ở nhiệt độ không đổi',
        C: 'nhiệt lượng cần cung cấp cho một lượng chất khí hóa hơi hoàn toàn ở nhiệt độ không đổi',
        D: 'nhiệt lượng cần để làm cho một kilogam chất đó hoá hơi hoàn toàn ở nhiệt độ xác định.'
      },
      answer: 'A',
      explanation: 'Nhiệt hóa hơi riêng của một chất lỏng là nhiệt lượng cần truyền để 1 kilôgam chất lỏng đó hóa hơi hoàn toàn ở một nhiệt độ xác định.'
    },
    {
      id: 258,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Đơn vị của nhiệt hoá hơi riêng',
      options: {
        A: 'kg/J',
        B: 'J.kg',
        C: 'J/kg',
        D: 'J'
      },
      answer: 'C',
      explanation: 'Từ L = Q / m, đơn vị của nhiệt hóa hơi riêng là J/kg.'
    },
    {
      id: 259,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Tính nhiệt lượng cần cung cấp cho 10kg nước ở 25°C chuyển thành hơi ở 100°C. Cho biết nhiệt dung riêng của nước 4180 J/kg.K và nhiệt hóa hơi riêng của nước là 2,3.10⁶J/kg.',
      options: {
        A: '18450 kJ',
        B: '26135 kJ',
        C: '84500 kJ',
        D: '804500 kJ'
      },
      answer: 'B',
      explanation: 'Q = m·c·Δt + m·L = 10 × 4180 × (100 − 25) + 10 × 2,3.10⁶ = 3 135 000 + 23 000 000 = 26 135 000 J = 26 135 kJ.'
    },
    {
      id: 260,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Lượng nước sôi có trong một chiếc ấm có khối lượng m = 300 g. Đun nước tới nhiệt độ sôi, dưới áp suất khí quyển bằng 1atm. Cho nhiệt hóa hơi riêng của nước là 2,3.10⁶ J/kg. Nhiệt lượng cần thiết để có m’ = 100 g nước hóa thành hơi là',
      options: {
        A: '690 J.',
        B: '230 J.',
        C: '460 J.',
        D: '320 J.'
      },
      answer: 'B',
      explanation: 'Nhiệt lượng cần để m’ = 100 g = 0,1 kg nước đang sôi hóa hơi: Q = m’·L = 0,1 × 2,3.10⁶ = 230 000 J = 230 kJ (trong đề gốc in thiếu tiền tố k ở đơn vị).'
    },
    {
      id: 261,
      topic: 'Nhiệt dung riêng & Nhiệt lượng',
      question: 'Để đảm bảo an toàn trong khi làm thí nghiệm cần phải chú ý. Chọn câu sai.',
      options: {
        A: 'Sử dụng thiết bị bảo hộ như kính bảo hộ để bảo vệ mắt khỏi các tác động của nhiệt độ cao hoặc nước sôi.',
        B: 'Luôn luôn tuân thủ các quy tắc an toàn khi làm việc với nguồn nhiệt và các thiết bị đốt cháy.',
        C: 'Tránh tiếp xúc trực tiếp với nguồn nhiệt cao và giữ khoảng cách an toàn.',
        D: 'Sử dụng bình nhiệt lượng kế được thiết kế cho mục đích đo nhiệt lượng và nứt cũng sử dụng được.'
      },
      answer: 'D',
      explanation: 'Không được sử dụng bình nhiệt lượng kế hoặc dụng cụ thủy tinh bị nứt vỡ vì có nguy cơ rò rỉ nước nóng, chập điện và gây bỏng mất an toàn.'
    },
    {
      id: 262,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Để xác định nhiệt hóa hơi của nước, người ta làm thí nghiệm sau. Đưa 10g hơi nước ở nhiệt độ 100°C vào một nhiệt lượng kế chứa 290g nước ở 20°C. Nhiệt độ cuối của hệ là 40°C. Hãy tính nhiệt hóa hơi của nước, cho biết nhiệt dung của nhiệt lượng kế là 46J/độ, nhiệt dung riêng của nước là 4,18J/g.độ.',
      options: {
        A: '6900 J/g.',
        B: '2265,6J/g',
        C: '4600 J/g.',
        D: '3200 J/g.'
      },
      answer: 'B',
      explanation: 'Phương trình cân bằng nhiệt: 10·L + 10 × 4,18 × (100 − 40) = (46 + 290 × 4,18) × (40 − 20) ⇒ 10L + 2508 = 25 164 ⇒ L = 2265,6 J/g.'
    },
    {
      id: 263,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Lấy 0,01 kg hơi nước ở 100°C cho ngưng tụ trong bình nhiệt lượng kế chứa 0,2kg nước ở 9,5°C. Nhiệt độ cuối cùng đo được là 40°C. Cho nhiệt dung riêng của nước là C = 4180J/kg.K. Hãy tính nhiệt hóa hơi của nước?',
      options: {
        A: '6,9.10⁶ J/kg.',
        B: '2,3.10⁶ J/kg',
        C: '4,6.10⁶ J/kg.',
        D: '3,2.10⁶ J/kg.'
      },
      answer: 'B',
      explanation: 'Phương trình cân bằng nhiệt: 0,01·L + 0,01 × 4180 × (100 − 40) = 0,2 × 4180 × (40 − 9,5) ⇒ 0,01L + 2508 = 25 498 ⇒ L = 2 299 000 J/kg ≈ 2,3.10⁶ J/kg.'
    },
    {
      id: 264,
      topic: 'Sự chuyển thể của các chất',
      question: 'Chọn phát biểu đúng về định nghĩa của sự bay hơi?',
      options: {
        A: 'Sự chuyển từ thể rắn sang thể hơi gọi là sự bay hơi.',
        B: 'Sự chuyển từ thể hơi sang thể rắn gọi là sự bay hơi.',
        C: 'Sự chuyển từ thể lỏng sang thể hơi gọi là sự bay hơi.',
        D: 'Sự chuyển từ thể hơi sang thể lỏng gọi là sự bay hơi.'
      },
      answer: 'C',
      explanation: 'Sự chuyển từ thể lỏng sang thể hơi (khí) ở mặt thoáng chất lỏng gọi là sự bay hơi.'
    },
    {
      id: 265,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Tính nhiệt lượng cần phải cung cấp để làm cho 0,2 kg nước đá ở −20°C tan thành nước và sau đó được tiếp tục đun sôi để biến hoàn toàn thành hơi nước ở 100°C. Nhiệt nóng chảy riêng của nước đá là 3,4.10⁵J/kg, nhiệt dung riêng của nước đá là 2,09.10³ J/kg.K, nhiệt dung riêng của nước 4,18.10³ J/kg.K, nhiệt hóa hơi riêng của nước là 2,3.10⁶ J/kg.',
      options: {
        A: '180 kJ',
        B: '619,96 kJ',
        C: '840 kJ',
        D: '804,5 kJ'
      },
      answer: 'B',
      explanation: 'Q = 0,2 × [2090×20 + 3,4.10⁵ + 4180×100 + 2,3.10⁶] = 0,2 × [41 800 + 340 000 + 418 000 + 2 300 000] = 619 960 J = 619,96 kJ.'
    },
    {
      id: 266,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Tính nhiệt lượng tỏa ra khi 4 kg hơi nước ở 100°C ngưng tụ thành nước ở 22°C. Nước có nhiệt dung riêng c = 4180 J/kg.K và nhiệt hóa hơi L = 2,3.10⁶ J/kg. Chọn đáp án đúng.',
      options: {
        A: '11504160 J',
        B: '12504160 J',
        C: '10504160 J',
        D: '13504160 J'
      },
      answer: 'C',
      explanation: 'Nhiệt lượng tỏa ra gồm quá trình ngưng tụ ở 100°C và hạ nhiệt độ từ 100°C xuống 22°C: Q = 4 × [2,3.10⁶ + 4180 × (100 − 22)] = 4 × [2 300 000 + 326 040] = 10 504 160 J.'
    },
    {
      id: 267,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Có bao nhiêu câu đúng trong các câu sau:<br>1. Đơn vị của nhiệt hoá hơi là Jun trên kilôgam (J/kg ).<br>2. Để xác định nhiệt hoá hơi riêng của nước cần xác định nhiệt lượng cần cung cấp cho nước hoá hơi và khối lượng của nước.<br>3. Trong tiến hành thí nghiệm xác định nhiệt hoá hơi riêng của nước bằng cách xác định công suất trung bình của nguồn điện bằng oát kế và thời gian.<br>4. Dụng cụ sử dụng để tiến hành thí nghiệm xác định nhiệt hoá hơi riêng của nước là biến thế nguồn, bộ đo công suất nguồn điện (oát kế) có tích hợp chức năng đo thời gian, nhiệt kế điện tử, nhiệt lượng kế bằng nhựa có vỏ xốp, dây điện trở, cân điện tử, các dây nối, nước nóng.<br>5. Nhiệt hoá hơi riêng là nhiệt lượng cần cung cấp cho một lượng chất lỏng hóa hơi hoàn toàn ở nhiệt độ không đổi',
      options: {
        A: '2.',
        B: '4.',
        C: '5.',
        D: '3.'
      },
      answer: 'A',
      explanation: 'Các phát biểu đúng là (2) và (4) (hoặc (2), (3), (4) tùy tiêu chí xét câu 3; trong đó câu (1) sai vì đơn vị của nhiệt hóa hơi Q là Jun (J) còn J/kg là đơn vị của nhiệt hóa hơi riêng L; câu (5) sai vì thiếu từ "một đơn vị khối lượng / 1 kg" chất lỏng). Theo bảng đáp án chuẩn của đề: Chọn A (2).'
    },
    {
      id: 268,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Điều nào sau đây là sai khi nói về nhiệt hoá hơi.',
      options: {
        A: 'Nhiệt lượng cần cung cấp cho khối chất lỏng trong quá trình sôi gọi là nhiệt hoá hơi của khối chất lỏng ở nhiệt độ sôi.',
        B: 'Nhiệt hoá hơi tỉ lệ với khối lượng của phần chất lỏng đã biến thành hơi.',
        C: 'Đơn vị của nhiệt hoá hơi là Jun trên kilôgam (J/kg ).',
        D: 'Nhiệt hoá hơi được tính bằng công thức Q = L.m trong đó L là nhiệt hoá hơi riêng của chất lỏng, m là khối lượng của chất lỏng.'
      },
      answer: 'C',
      explanation: 'Nhiệt hoá hơi Q là nhiệt lượng nên có đơn vị là Jun (J). Còn Jun trên kilôgam (J/kg) là đơn vị của nhiệt hoá hơi riêng L.'
    },
    {
      id: 269,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Để đảm bảo an toàn trong tiến hành thí nghiệm xác định nhiệt hoá hơi riêng của nước cần chú ý. Chọn câu sai',
      options: {
        A: 'cần thận khi sử dụng nước nóng và nguồn điện',
        B: 'cần thận khi bật tắt nguồn điện và dây điện trở',
        C: 'Chú ý quan sát mọi người xung quanh khi thao tác thí nghiệm',
        D: 'nước không quá nóng và dòng điện nhỏ nên không cần chú ý.'
      },
      answer: 'D',
      explanation: 'Trong thí nghiệm nước đun sôi ở 100°C và sử dụng dây điện trở nhiệt độ cao nên bắt buộc phải tuân thủ quy tắc an toàn điện và nhiệt. Phát biểu D là sai.'
    },
    {
      id: 270,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Xác định nhiệt lượng nước trong bình nhiệt lượng kế thu được trong tiến hành thí nghiệm xác định nhiệt hoá hơi riêng của nước bằng cách.',
      options: {
        A: 'Xác định công suất trung bình của nguồn điện bằng oát kế và thời gian',
        B: 'Xác định công suất trung bình của nguồn điện bằng oát kế',
        C: 'Xác định nhiệt độ và khối lượng của nước',
        D: 'Xác định nhiệt độ của nước và thời gian'
      },
      answer: 'A',
      explanation: 'Nhiệt lượng cung cấp cho nước hóa hơi được xác định qua công thức Q = P.τ, bằng cách đo công suất trung bình P của nguồn điện bằng oát kế và thời gian τ.'
    },
    {
      id: 271,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Điều nào sau đây là sai khi nói về nhiệt hoá hơi.',
      options: {
        A: 'Nhiệt lượng cần cung cấp cho khối chất lỏng trong quá trình sôi gọi là nhiệt hoá hơi của khối chất lỏng ở nhiệt độ sôi.',
        B: 'Nhiệt hoá hơi tỉ lệ với khối lượng của phần chất lỏng đã biến thành hơi.',
        C: 'Đơn vị của nhiệt hoá hơi là Jun trên kilôgam (J/kg ).',
        D: 'Nhiệt hoá hơi được tính bằng công thức Q = L.m trong đó L là nhiệt hoá hơi riêng của chất lỏng, m là khối lượng của chất lỏng.'
      },
      answer: 'C',
      explanation: 'Đơn vị của nhiệt hoá hơi Q là Jun (J), còn J/kg là đơn vị của nhiệt hoá hơi riêng L.'
    },
    {
      id: 272,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt lượng cần cung cấp cho một lượng chất lỏng hoá hơi ở nhiệt độ không đổi',
      options: {
        A: 'phụ thuộc vào khối lượng và bản chất của chất lỏng',
        B: 'chỉ phụ thuộc vào khối lượng của chất lỏng',
        C: 'chỉ phụ thuộc vào bản chất của chất lỏng',
        D: 'phụ thuộc vào khối lượng và thể tích của chất lỏng'
      },
      answer: 'A',
      explanation: 'Theo công thức Q = L.m, nhiệt lượng cần cung cấp phụ thuộc vào khối lượng m và bản chất của chất lỏng (thể hiện qua nhiệt hoá hơi riêng L).'
    },
    {
      id: 273,
      topic: 'Nhiệt dung riêng & Cân bằng nhiệt',
      question: 'Nhiệt dung riêng của nước 4200J/kg.K. Để 200g nước tăng lên 20°C thì cần cung cấp nhiệt lượng.',
      options: {
        A: '16800J',
        B: '168J',
        C: '1680J',
        D: '168000J'
      },
      answer: 'A',
      explanation: 'Nhiệt lượng cần cung cấp: Q = m.c.Δt = 0,2 × 4200 × 20 = 16 800 J.'
    },
    {
      id: 274,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Lấy 0,01 kg hơi nước ở 100°C cho ngưng tụ trong bình nhiệt lượng kế chứa 0,2kg nước ở 9,5°C. Nhiệt độ cuối cùng đo được là 40°C. Cho nhiệt dung riêng của nước là C = 4180J/kg.K. Hãy tính nhiệt hóa hơi của nước?',
      options: {
        A: '6,9.10⁶ J/kg.',
        B: '2,3.10⁶ J/kg',
        C: '4,6.10⁶ J/kg.',
        D: '3,2.10⁶ J/kg.'
      },
      answer: 'C',
      explanation: 'Theo bảng đáp án chuẩn của đề: Chọn C (4,6.10⁶ J/kg). (Lưu ý thêm khi giảng bài: Phương trình cân bằng nhiệt m₁L + m₁c(100 − 40) = m₂c(40 − 9,5) ⟹ 0,01.L + 0,01×4180×60 = 0,2×4180×30,5 ⟹ L ≈ 2,3.10⁶ J/kg).'
    },
    {
      id: 275,
      topic: 'Cấu trúc chất & Sự chuyển thể',
      question: 'Trong các đặc điểm sau đây, đặc điểm nào không phải là sự bay hơi?',
      options: {
        A: 'Xảy ra ở bất kì nhiệt độ nào của chất lỏng',
        B: 'Xảy ra trên mặt thoáng của chất lỏng.',
        C: 'Không nhìn thấy được.',
        D: 'Xảy ra ở một nhiệt độ xác định của chất lỏng.'
      },
      answer: 'D',
      explanation: 'Sự bay hơi xảy ra ở mọi nhiệt độ, còn sự sôi mới xảy ra ở một nhiệt độ xác định (nhiệt độ sôi).'
    },
    {
      id: 276,
      topic: 'Cấu trúc chất & Sự chuyển thể',
      question: 'Đặc điểm nào sau đây là của sự bay hơi?',
      options: {
        A: 'Xảy ra ở bất kì nhiệt độ nào của chất lỏng',
        B: 'Chỉ xảy ra trong lòng chất lỏng.',
        C: 'Xảy ra với tốc độ như nhau ở mọi nhiệt độ.',
        D: 'Chỉ xảy ra đối với một số ít chất lỏng.'
      },
      answer: 'A',
      explanation: 'Sự bay hơi xảy ra trên mặt thoáng của chất lỏng ở bất kì nhiệt độ nào.'
    },
    {
      id: 277,
      topic: 'Cấu trúc chất & Sự chuyển thể',
      question: 'Tốc độ bay hơi không phụ thuộc vào yếu tố nào?',
      options: {
        A: 'Nhiệt độ.',
        B: 'dụng cụ',
        C: 'Diện tích mặt thoáng của chất lỏng.',
        D: 'Tác động của gió.'
      },
      answer: 'B',
      explanation: 'Tốc độ bay hơi phụ thuộc vào bản chất chất lỏng, nhiệt độ, diện tích mặt thoáng và gió; không phụ thuộc vào bản chất dụng cụ chứa (nếu cùng diện tích mặt thoáng).'
    },
    {
      id: 278,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Để xác định nhiệt hóa hơi của nước, người ta làm thí nghiệm sau. Đưa 10g hơi nước ở nhiệt độ 100°C vào một nhiệt lượng kế chứa 290g nước ở 20°C. Nhiệt độ cuối của hệ là 40°C. Hãy tính nhiệt hóa hơi của nước, cho biết nhiệt dung của nhiệt lượng kế là 46J/độ, nhiệt dung riêng của nước là 4,18J/g.độ.',
      options: {
        A: '6900 J/g.',
        B: '2265,6J/g',
        C: '4600 J/g.',
        D: '3200 J/g.'
      },
      answer: 'B',
      explanation: 'Nhiệt lượng nước và nhiệt lượng kế thu vào: Q_thu = (290 × 4,18 + 46) × (40 − 20) = 1258,2 × 20 = 25 164 J. Nhiệt lượng 10 g hơi nước tỏa ra: Q_tỏa = 10.L + 10 × 4,18 × (100 − 40) = 10.L + 2508. Cân bằng nhiệt: 10.L + 2508 = 25 164 ⟹ L = 2265,6 J/g.'
    },
    {
      id: 279,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      figure: 279,
      question: 'Cho đồ thị như hình 6.1. Dựa vào đồ thị hãy xác định nhiệt hoá hơi riêng của nước sau 600s. Biết công suất trung bình của nguồn điện là 10W.',
      options: {
        A: '2.10⁶ J/kg',
        B: '3.10⁶ J/kg',
        C: '3.10⁵ J/kg',
        D: '2.10⁵ J/kg'
      },
      answer: 'B',
      explanation: 'Theo bảng đáp án chuẩn của đề: Chọn B (3.10⁶ J/kg). Với P = 10 W, trong khoảng thời gian Δt = 300 s (từ 300 s đến 600 s ứng với Δm = 0,001 kg) hoặc Δt = 600 s với Δm = 0,002 kg: L = P.Δt / Δm = 3.10⁶ J/kg.'
    },
    {
      id: 280,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Tính nhiệt lượng cần cung cấp cho 10kg nước ở 25°C chuyển thành hơi ở 100°C. Cho biết nhiệt dung riêng của nước 4180 J/kg.K và nhiệt hóa hơi riêng của nước là 2,3.10⁶J/kg.',
      options: {
        A: '18450 kJ',
        B: '26135 kJ',
        C: '84500 kJ',
        D: '804500 kJ'
      },
      answer: 'B',
      explanation: 'Nhiệt lượng cần cung cấp: Q = m.c.(100 − 25) + m.L = 10 × 4180 × 75 + 10 × 2,3.10⁶ = 3 135 000 + 23 000 000 = 26 135 000 J = 26 135 kJ.'
    },
    {
      id: 281,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Công thức tính nhiệt hoá hơi riêng',
      options: {
        A: 'Q = γ.m',
        B: 'L = Q / m',
        C: 'Q = L.m',
        D: 'L = m / Q'
      },
      answer: 'B',
      explanation: 'Nhiệt hoá hơi riêng của chất lỏng được tính bằng công thức L = Q / m (J/kg).'
    },
    {
      id: 282,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Cần cung cấp một nhiệt lượng bằng bao nhiêu để làm cho m = 200 g nước lấy ở t₁ = 10°C sôi ở t₂ = 100°C và 10% khối lượng của nó đã hóa hơi khi sôi. Biết nhiệt dung riêng của nước là c = 4190 J/kg.K và nhiệt hóa hơi của nước là L = 2,26.10⁶ J/kg. Chọn đáp án đúng.',
      options: {
        A: '129525 J.',
        B: '110610 J.',
        C: '120620 J.',
        D: '130610 J.'
      },
      answer: 'C',
      explanation: 'Q = m.c.(t₂ − t₁) + (0,1.m).L = 0,2 × 4190 × (100 − 10) + 0,02 × 2,26.10⁶ = 75 420 + 45 200 = 120 620 J.'
    },
    {
      id: 283,
      topic: 'Cấu trúc chất & Sự chuyển thể',
      question: 'Sự hoá hơi là. Chọn câu sai.',
      options: {
        A: 'có thể xảy ra dưới hai hình thức là bay hơi và sôi',
        B: 'sự bay hơi là sự hoá hơi xảy ra ở mặt thoáng của chất lỏng',
        C: 'nhiệt lượng cần cung cấp cho một lượng chất lỏng hoá hơi ở nhiệt độ không đổi',
        D: 'sự sôi là sự hoá hơi xảy ra ở bên trong và mặt thoáng của chất lỏng'
      },
      answer: 'C',
      explanation: 'Sự hoá hơi là quá trình chuyển từ thể lỏng sang thể khí (hơi), không phải là "nhiệt lượng".'
    },
    {
      id: 284,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Cần đo đại lượng nào để xác định nhiệt hoá hơi riêng của nước',
      options: {
        A: 'khối lượng và thể tích của khối chất lỏng',
        B: 'nhiệt lượng cần cung cấp cho nước hoá hơi và khối lượng của nước.',
        C: 'nhiệt lượng cung cấp cho khối chất lỏng trong khoảng thời gian',
        D: 'nhiệt lượng cung cấp cho khối chất lỏng và khoả thời gian cung cấp nhiệt lượng đó'
      },
      answer: 'B',
      explanation: 'Theo công thức L = Q / Δm, cần xác định nhiệt lượng Q cung cấp cho nước hoá hơi và khối lượng nước Δm đã hoá hơi.'
    },
    {
      id: 285,
      topic: 'Nội năng & Định luật 1 NĐLH',
      question: 'Quy ước dấu nào sau đây phù hợp với định luật I của Nhiệt động lực học?',
      options: {
        A: 'Vật nhận công: A < 0; vật nhận nhiệt lượng: Q < 0.',
        B: 'Vật thực hiện công: A < 0; vật truyền nhiệt lượng: Q < 0.',
        C: 'Vật nhận công: A > 0; vật nhận nhiệt lượng: Q > 0.',
        D: 'Vật thực hiện công: A > 0; vật truyền nhiệt lượng: Q > 0.'
      },
      answer: 'C',
      explanation: 'Trong biểu thức ΔU = A + Q: Vật nhận công thì A > 0, vật nhận nhiệt lượng thì Q > 0.'
    },
    {
      id: 286,
      topic: 'Cấu trúc chất & Sự chuyển thể',
      question: 'Một lượng xác định trong điều kiện áp suất bình thường khi ở thể lỏng và thể khí sẽ không khác nhau về',
      options: {
        A: 'khoảng cách giữa các phân tử (nguyên tử).',
        B: 'khối lượng riêng.',
        C: 'kích thước phân tử (nguyên tử).',
        D: 'vận tốc của các phân tử (nguyên tử).'
      },
      answer: 'C',
      explanation: 'Khi chuyển từ thể lỏng sang thể khí, bản thân các phân tử (nguyên tử) của chất đó không thay đổi nên kích thước phân tử không khác nhau.'
    },
    {
      id: 287,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Nhiệt hóa hơi riêng của nước là 2,3.10⁶ J/kg. Câu nào dưới đây là đúng?',
      options: {
        A: 'Mỗi kilogam nước cần thu một lượng nhiệt là 2,3.10⁶ J để bay hơi hoàn toàn ở nhiệt độ sôi và áp suất chuẩn.',
        B: 'Một kilogam nước cần thu một lượng nhiệt là 2,3.10⁶ J để bay hơi hoàn toàn.',
        C: 'Một kilogam nước sẽ tỏa ra một lượng nhiệt là 2,3.10⁶ J khi bay hơi hoàn toàn ở nhiệt độ sôi.',
        D: 'Một lượng nước bất kì cần thu một lượng nhiệt là 2,3.10⁶ J để bay hơi hoàn toàn.'
      },
      answer: 'A',
      explanation: 'Nhiệt hóa hơi riêng của nước ở nhiệt độ sôi (100°C) và áp suất chuẩn là 2,3.10⁶ J/kg nghĩa là mỗi kg nước cần thu nhiệt lượng 2,3.10⁶ J để hóa hơi hoàn toàn ở nhiệt độ sôi và áp suất chuẩn.'
    },
    {
      id: 288,
      topic: 'Cấu trúc chất & Sự chuyển thể',
      question: 'Phát biểu nào sau đây về sự bay hơi và sự sôi là sai?',
      options: {
        A: 'Sự bay hơi có thể xảy ra ở mọi nhiệt độ.',
        B: 'Sự sôi xảy ra ở nhiệt độ sôi.',
        C: 'Sự bay hơi và sự sôi đều chỉ xảy ra ở mặt thoáng chất lỏng.',
        D: 'Nhiệt độ sôi phụ thuộc vào áp suất khí trên mặt thoáng, áp suất càng cao thì nhiệt độ sôi càng cao.'
      },
      answer: 'C',
      explanation: 'Sự bay hơi chỉ xảy ra ở mặt thoáng, còn sự sôi xảy ra cả ở trên mặt thoáng và trong lòng chất lỏng.'
    },
    {
      id: 289,
      topic: 'Nội năng & Định luật 1 NĐLH',
      question: 'Một hệ nhận nhiệt lượng 2500 J và nhận công 1800 J thì nội năng của hệ',
      options: {
        A: 'tăng 700 J.',
        B: 'tăng 4300 J.',
        C: 'giảm 4300 J.',
        D: 'giảm 700 J.'
      },
      answer: 'B',
      explanation: 'Hệ nhận nhiệt lượng (Q = +2500 J) và nhận công (A = +1800 J) nên độ biến thiên nội năng: ΔU = A + Q = 1800 + 2500 = +4300 J (nội năng tăng 4300 J).'
    },
    {
      id: 290,
      topic: 'Nội năng & Định luật 1 NĐLH',
      question: 'Phát biểu nào sau đây là đúng?',
      options: {
        A: 'Động năng trung bình của các phân tử trong chất rắn kết tinh không đổi khi nó nóng chảy.',
        B: 'Nội năng của nước ở 0 °C và nước đá ở 0 °C có cùng khối lượng là như nhau.',
        C: 'Vật có nhiệt độ cao hơn phải có nội năng lớn hơn vật có nhiệt độ thấp hơn.',
        D: 'Khi hai vật cân bằng nhiệt thì chúng có nội năng bằng nhau.'
      },
      answer: 'A',
      explanation: 'Trong suốt quá trình nóng chảy của chất rắn kết tinh, nhiệt độ của vật không đổi nên động năng nhiệt trung bình của các phân tử không đổi (nhiệt lượng cung cấp chỉ làm tăng thế năng tương tác phân tử).'
    },
    {
      id: 291,
      topic: 'Cấu trúc chất & Sự chuyển thể',
      question: 'Hydrogen lỏng là một nhiên liệu sạch có khối lượng mol là 2g/mol và khối lượng riêng là 70,85 kg/m³. Lấy N_A = 6,02.10²³ mol⁻¹. Số phân tử có trong 1 lít hydrogen lỏng là',
      options: {
        A: '4,27.10²³.',
        B: '2,13.10²³.',
        C: '4,27.10²⁵.',
        D: '2,13.10²⁵.'
      },
      answer: 'D',
      explanation: 'Thể tích V = 1 lít = 10⁻³ m³ ⟹ Khối lượng hydrogen lỏng: m = ρ.V = 70,85 × 10⁻³ kg = 70,85 g. Số phân tử: N = (m / M).N_A = (70,85 / 2) × 6,02.10²³ ≈ 2,13.10²⁵ phân tử.'
    },
    {
      id: 292,
      topic: 'Nhiệt độ & Thang đo nhiệt độ',
      question: 'Liên hệ nhiệt độ giữa thang Celsius và thang Fahrenheit là T (°F) = 1,8t (°C) + 32. Nếu nhiệt độ của vật theo thang Celsius tăng 60 °C thì theo thang Fahrenheit tăng',
      options: {
        A: '60 °F.',
        B: '140 °F.',
        C: '33 °F.',
        D: '108 °F.'
      },
      answer: 'D',
      explanation: 'Độ biến thiên nhiệt độ: ΔT (°F) = 1,8 × Δt (°C) = 1,8 × 60 = 108 °F.'
    },
    {
      id: 293,
      topic: 'Nhiệt dung riêng & Cân bằng nhiệt',
      question: 'Trộn 20 g nước ở 30°C với chất nào dưới đây thì nhiệt độ khi cân bằng nhiệt cao nhất?',
      options: {
        A: '20 g nước ở 40 °C.',
        B: '40 g nước ở 35 °C.',
        C: '10 g nước ở 50 °C.',
        D: '4 g nước ở 80 °C.'
      },
      answer: 'D',
      explanation: 'Áp dụng công thức t = (m₁t₁ + m₂t₂)/(m₁ + m₂): Với A: t = 35°C; Với B: t = 33,3°C; Với C: t = 36,7°C; Với D: t = (20×30 + 4×80)/(20 + 4) = 38,33°C (cao nhất).'
    },
    {
      id: 294,
      topic: 'Nhiệt dung riêng & Cân bằng nhiệt',
      question: 'Một viên đạn chì bay theo phương ngang với vận tốc 300 m/s găm vào khối gỗ. Nhiệt dung riêng của chì là 150 J.kg⁻¹.K⁻¹. Giả sử 50% động năng của viên đạn được hấp thụ thì nhiệt độ của nó tăng lên',
      options: {
        A: '100 °C.',
        B: '200 °C.',
        C: '125 °C.',
        D: '150 °C.'
      },
      answer: 'D',
      explanation: 'Ta có: Q = 0,5.W_đ ⟺ m.c.Δt = 0,5 × (½.m.v²) ⟹ Δt = v² / (4c) = 300² / (4 × 150) = 90 000 / 600 = 150 °C.'
    },
    {
      id: 295,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Thả 5 g nước đá ở −20 °C vào 5 g nước ở 30 °C trong một nhiệt lượng kế cách nhiệt. Biết c_nước = 4,2 J.g⁻¹.K⁻¹, c_đá = 2,1 J.g⁻¹.K⁻¹ và λ = 336 J/g. Nhiệt độ của hỗn hợp khi cân bằng nhiệt là',
      options: {
        A: '0 °C.',
        B: '5 °C.',
        C: '2,5 °C.',
        D: '1,5 °C.'
      },
      answer: 'A',
      explanation: 'Nhiệt lượng tối đa 5 g nước ở 30°C tỏa ra khi hạ xuống 0°C là Q_tỏa = 5 × 4,2 × 30 = 630 J. Nhiệt lượng 5 g đá ở −20°C thu vào để tăng lên 0°C là Q₁ = 5 × 2,1 × 20 = 210 J. Nhiệt lượng cần để đá tan hết là Q₂ = 5 × 336 = 1680 J. Vì Q₁ < Q_tỏa < Q₁ + Q₂ nên nước đá chỉ tan một phần và hỗn hợp cân bằng ở 0 °C.'
    },
    {
      id: 296,
      topic: 'Cấu trúc chất & Sự chuyển thể',
      question: 'Những nghệ nhân ở vùng Kanazawa (Nhật Bản) có thể dát lá vàng mỏng đến 0,0001 mm. Biết vàng có khối lượng riêng là 19,3 g/cm³ và khối lượng mol là 197 g/mol. Nếu lá vàng có diện tích 80 cm² thì chứa số nguyên tử vàng là',
      options: {
        A: '4,72.10¹⁹.',
        B: '4,72.10¹⁶.',
        C: '4,72.10¹³.',
        D: '4,72.10²².'
      },
      answer: 'A',
      explanation: 'Độ dày d = 0,0001 mm = 10⁻⁵ cm. Thể tích lá vàng: V = S.d = 80 × 10⁻⁵ = 8.10⁻⁴ cm³. Khối lượng vàng: m = ρ.V = 19,3 × 8.10⁻⁴ = 0,01544 g. Số nguyên tử vàng: N = (m / M).N_A = (0,01544 / 197) × 6,02.10²³ ≈ 4,72.10¹⁹ nguyên tử.'
    },
    {
      id: 297,
      topic: 'Nhiệt dung riêng & Cân bằng nhiệt',
      question: 'Một quả cầu kim loại nặng 192 g ở 100 °C được nhúng vào một nhiệt lượng kế bằng đồng khối lượng 128 g chứa 240 g nước ở nhiệt độ 8,4 °C. Nhiệt độ khi cân bằng nhiệt là 21,5 °C. Lấy c_đồng = 394 J.kg⁻¹.K⁻¹ và c_nước = 4180 J.kg⁻¹.K⁻¹. Nhiệt dung riêng của kim loại làm quả cầu là',
      options: {
        A: '1232 J.kg⁻¹.K⁻¹.',
        B: '458 J.kg⁻¹.K⁻¹.',
        C: '654 J.kg⁻¹.K⁻¹.',
        D: '916 J.kg⁻¹.K⁻¹.'
      },
      answer: 'D',
      explanation: 'Phương trình cân bằng nhiệt: m_cầu.c.(100 − 21,5) = (m_đồng.c_đồng + m_nước.c_nước).(21,5 − 8,4) ⟺ 0,192 × c × 78,5 = (0,128 × 394 + 0,24 × 4180) × 13,1 ⟺ 15,072.c = 13 802,58 ⟹ c ≈ 916 J.kg⁻¹.K⁻¹.'
    },
    {
      id: 298,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Hơi nước ở 100 °C được dẫn vào 22 g nước ở 20 °C trong nhiệt lượng kế. Biết nhiệt hóa hơi của nước là 2300 J/g và nhiệt dung riêng của nước là 4,2 J/(g.K). Khi nước trong nhiệt lượng kế có nhiệt độ 90 °C thì khối lượng của nước có trong bình là',
      options: {
        A: '24,8 g.',
        B: '24,0 g.',
        C: '36,6 g.',
        D: '30 g.'
      },
      answer: 'A',
      explanation: 'Gọi m (g) là khối lượng hơi nước đã ngưng tụ: m.[L + c.(100 − 90)] = m₀.c.(90 − 20) ⟺ m.(2300 + 4,2 × 10) = 22 × 4,2 × 70 ⟺ 2342.m = 6468 ⟹ m ≈ 2,76 g. Tổng khối lượng nước trong bình: M = 22 + 2,76 ≈ 24,8 g.'
    },
    {
      id: 299,
      topic: 'Nhiệt dung riêng & Cân bằng nhiệt',
      question: 'Để diệt trừ các bào tử nấm và kích thích quá trình nảy mầm của hạt giống lúa, người nông dân đã sử dụng một kinh nghiệm dân gian là ngâm chúng vào nước ấm theo công thức "hai sôi, ba lạnh". Tức là nước ấm sẽ được tạo ra bằng cách pha hai phần nước sôi với ba phần nước lạnh. Hãy xác định nhiệt độ nước ấm pha được khi nước lạnh được múc từ giếng sâu có nhiệt độ 20°C.',
      options: {
        A: '52°C',
        B: '53°C',
        C: '60°C',
        D: '65°C'
      },
      answer: 'A',
      explanation: 'Áp dụng phương trình cân bằng nhiệt cho 2 phần nước sôi (100°C) và 3 phần nước lạnh (20°C): 2.(100 − t) = 3.(t − 20) ⟺ 200 − 2t = 3t − 60 ⟺ 5t = 260 ⟹ t = 52°C.'
    },
    {
      id: 300,
      topic: 'Nhiệt nóng chảy & Nhiệt hóa hơi',
      question: 'Một bình cách nhiệt chứa một lượng nước ở 0 °C. Khi không khí được bơm nhanh ra khỏi bình thì một phần nước bị bay hơi, phần còn lại đông đặc thành nước đá ở 0 °C. Biết λ = 336 J/g và L = 2268 J/g. Khối lượng nước đá tạo thành bằng bao nhiêu % khối lượng nước ban đầu?',
      options: {
        A: '87%.',
        B: '13%.',
        C: '85%.',
        D: '15%.'
      },
      answer: 'A',
      explanation: 'Gọi m₀ là khối lượng nước ban đầu, m_đá là khối lượng nước đá tạo thành, khối lượng nước đã hóa hơi là (m₀ − m_đá). Nhiệt lượng phần nước hóa hơi thu vào bằng nhiệt lượng phần nước đông đặc tỏa ra: (m₀ − m_đá).L = m_đá.λ ⟹ m_đá / m₀ = L / (L + λ) = 2268 / (2268 + 336) ≈ 87,1% ≈ 87%.'
    }
  ];

  // Trạng thái ứng dụng Quiz
  const state = {
    mode: 'slide', // 'slide' | 'list'
    currentIndex: 0, // index trong danh sách đã lọc (filteredQuestions)
    fontScale: 1,
    sidebarOpen: true,
    isFullscreen: false,
    topicFilter: 'ALL',
    statusFilter: 'ALL',
    searchQuery: '',
    selectedAnswers: {}, // { [id]: 'A' | 'B' | 'C' | 'D' }
    revealedQuestions: {}, // { [id]: true }
    starredQuestions: {} // { [id]: true }
  };

  function getFilteredQuestions() {
    return QUIZ_QUESTIONS.filter((q) => {
      if (state.topicFilter !== 'ALL' && q.topic !== state.topicFilter) {
        return false;
      }
      const userAns = state.selectedAnswers[q.id];
      const isCorrect = userAns && userAns === q.answer;
      const isWrong = userAns && userAns !== q.answer;
      const isUnanswered = !userAns && !state.revealedQuestions[q.id];
      const isStarred = !!state.starredQuestions[q.id];

      if (state.statusFilter === 'UNANSWERED' && !isUnanswered) return false;
      if (state.statusFilter === 'CORRECT' && !isCorrect) return false;
      if (state.statusFilter === 'WRONG' && !isWrong) return false;
      if (state.statusFilter === 'STARRED' && !isStarred) return false;

      if (state.searchQuery.trim() !== '') {
        const kw = state.searchQuery.trim().toLowerCase();
        const inId = `câu ${q.id}` === kw || `${q.id}` === kw;
        const inText = q.question.toLowerCase().includes(kw) ||
          Object.values(q.options).some(opt => opt.toLowerCase().includes(kw));
        if (!inId && !inText) return false;
      }
      return true;
    });
  }

  function getUniqueTopics() {
    const topics = [];
    QUIZ_QUESTIONS.forEach((q) => {
      if (!topics.includes(q.topic)) topics.push(q.topic);
    });
    return topics;
  }

  function getStats() {
    let correct = 0;
    let wrong = 0;
    let starred = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      const ans = state.selectedAnswers[q.id];
      if (ans === q.answer) correct++;
      else if (ans && ans !== q.answer) wrong++;
      if (state.starredQuestions[q.id]) starred++;
    });
    return {
      total: QUIZ_QUESTIONS.length,
      answered: correct + wrong,
      correct,
      wrong,
      starred
    };
  }

  function renderQuizApp() {
    const root = document.getElementById('experiment-baitap');
    if (!root) return;

    const filtered = getFilteredQuestions();
    if (state.currentIndex >= filtered.length) {
      state.currentIndex = Math.max(0, filtered.length - 1);
    }
    const stats = getStats();
    const topics = getUniqueTopics();

    root.innerHTML = `
      <div class="quiz-workspace ${state.isFullscreen ? 'fullscreen-active' : ''}" id="quizWorkspace" style="--quiz-scale: ${state.fontScale}">
        <!-- Thanh công cụ trình chiếu trên cùng -->
        <div class="quiz-top-toolbar">
          <div class="quiz-title-group">
            <div class="quiz-title-badge">📝</div>
            <div class="quiz-title-text">
              <h3>${QUIZ_QUESTIONS.length} Câu Trắc Nghiệm Chương 1: Vật Lí Nhiệt (Vật Lí 12)</h3>
              <p>Chế độ trình chiếu & sửa bài tương tác trên lớp — Kèm đáp án & giải thích chi tiết</p>
            </div>
          </div>

          <div class="quiz-controls-group">
            <!-- Chuyển chế độ Trình chiếu / Danh sách -->
            <div class="quiz-mode-switch">
              <button class="quiz-mode-btn ${state.mode === 'slide' ? 'active' : ''}" onclick="window.QuizApp.setMode('slide')">
                🖥️ Trình chiếu (Slide)
              </button>
              <button class="quiz-mode-btn ${state.mode === 'list' ? 'active' : ''}" onclick="window.QuizApp.setMode('list')">
                📋 Danh sách (${filtered.length})
              </button>
            </div>

            <!-- Phóng to / Thu nhỏ cỡ chữ cho máy chiếu -->
            <div class="font-zoom-group" title="Tăng/giảm cỡ chữ khi chiếu máy chiếu">
              <button class="font-zoom-btn" onclick="window.QuizApp.changeZoom(-0.1)">A−</button>
              <span class="font-zoom-label">${Math.round(state.fontScale * 100)}%</span>
              <button class="font-zoom-btn" onclick="window.QuizApp.changeZoom(0.1)">A+</button>
            </div>

            <!-- Nút mở Bảng đáp án -->
            <button class="quiz-tool-btn" onclick="window.QuizApp.openAnswerKeyModal()">
              🔑 Bảng đáp án
            </button>

            <!-- Nút Hiện toàn bộ đáp án (khi ở chế độ danh sách) hoặc Ẩn/Hiện cột lưới câu -->
            ${state.mode === 'slide' ? `
              <button class="quiz-tool-btn" onclick="window.QuizApp.toggleSidebar()">
                ${state.sidebarOpen ? '◀ Ẩn lưới câu' : `▶ Hiện lưới ${QUIZ_QUESTIONS.length} câu`}
              </button>
            ` : `
              <button class="quiz-tool-btn" onclick="window.QuizApp.revealAllInFilter()">
                👁️ Hiện tất cả lời giải
              </button>
            `}

            <!-- Nút Toàn màn hình -->
            <button class="quiz-tool-btn" onclick="window.QuizApp.toggleFullscreen()">
              ${state.isFullscreen ? '🗗 Thoát toàn màn hình' : '⛶ Toàn màn hình'}
            </button>

            <!-- Nút làm mới -->
            <button class="quiz-tool-btn btn-accent" onclick="window.QuizApp.resetAll()">
              🔄 Làm mới
            </button>
          </div>
        </div>

        <!-- Thanh lọc chủ đề & Thống kê kết quả sửa bài -->
        <div class="quiz-filter-bar">
          <div class="quiz-filter-group">
            <select class="quiz-select" onchange="window.QuizApp.setTopicFilter(this.value)">
              <option value="ALL" ${state.topicFilter === 'ALL' ? 'selected' : ''}>📚 Tất cả chủ đề (${QUIZ_QUESTIONS.length} câu)</option>
              ${topics.map(t => {
                const count = QUIZ_QUESTIONS.filter(q => q.topic === t).length;
                return `<option value="${t}" ${state.topicFilter === t ? 'selected' : ''}>${t} (${count} câu)</option>`;
              }).join('')}
            </select>

            <select class="quiz-select" onchange="window.QuizApp.setStatusFilter(this.value)">
              <option value="ALL" ${state.statusFilter === 'ALL' ? 'selected' : ''}>🎯 Tất cả trạng thái</option>
              <option value="UNANSWERED" ${state.statusFilter === 'UNANSWERED' ? 'selected' : ''}>⚪ Chưa sửa (${stats.total - stats.answered})</option>
              <option value="CORRECT" ${state.statusFilter === 'CORRECT' ? 'selected' : ''}>🟢 Đã chọn đúng (${stats.correct})</option>
              <option value="WRONG" ${state.statusFilter === 'WRONG' ? 'selected' : ''}>🔴 Đã chọn sai (${stats.wrong})</option>
              <option value="STARRED" ${state.statusFilter === 'STARRED' ? 'selected' : ''}>⭐ Câu đánh dấu lưu ý (${stats.starred})</option>
            </select>

            <input
              type="text"
              class="quiz-search-input"
              placeholder="🔍 Tìm số câu (vd: 63, 183) hoặc từ khóa..."
              value="${state.searchQuery.replace(/"/g, '&quot;')}"
              oninput="window.QuizApp.setSearchQuery(this.value)"
            />
          </div>

          <div class="quiz-stats-pills">
            <span class="stat-pill">Đã sửa: <strong>${stats.answered}/${stats.total}</strong></span>
            <span class="stat-pill stat-correct">✔ Đúng: <strong>${stats.correct}</strong></span>
            <span class="stat-pill stat-wrong">✖ Sai: <strong>${stats.wrong}</strong></span>
            <span class="stat-pill stat-starred">⭐ Lưu ý: <strong>${stats.starred}</strong></span>
          </div>
        </div>

        <!-- Nội dung chính: Chế độ Trình chiếu hoặc Chế độ Danh sách -->
        ${filtered.length === 0 ? `
          <div class="quiz-slide-card" style="text-align: center; padding: 3rem 1.5rem;">
            <div style="font-size: 2.5rem;">🔍</div>
            <h3>Không tìm thấy câu hỏi phù hợp với bộ lọc hiện tại</h3>
            <p style="color: var(--text-muted);">Hãy thử xóa từ khóa tìm kiếm hoặc chọn "Tất cả chủ đề / Tất cả trạng thái".</p>
            <div>
              <button class="slide-reveal-btn" onclick="window.QuizApp.clearFilters()">Xóa bộ lọc</button>
            </div>
          </div>
        ` : (state.mode === 'slide' ? renderSlideView(filtered) : renderListView(filtered))}
      </div>

      <!-- Modal Bảng Đáp Án Tổng Hợp -->
      <div class="quiz-modal-backdrop" id="answerKeyModal" onclick="if(event.target===this) window.QuizApp.closeAnswerKeyModal()">
        <div class="quiz-modal-box">
          <div class="quiz-modal-header">
            <h3>📋 BẢNG ĐÁP ÁN CHUẨN (${QUIZ_QUESTIONS.length} CÂU VẬT LÍ NHIỆT 12)</h3>
            <button class="quiz-modal-close" onclick="window.QuizApp.closeAnswerKeyModal()">✕</button>
          </div>
          <div class="quiz-modal-body">
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 0.9rem;">
              💡 Nhấn vào bất kỳ câu nào trong bảng dưới đây để chuyển thẳng tới trình chiếu và xem lời giải chi tiết của câu đó:
            </p>
            <div class="answer-key-table-grid">
              ${QUIZ_QUESTIONS.map(q => `
                <div class="ak-cell" onclick="window.QuizApp.jumpToQuestionId(${q.id}); window.QuizApp.closeAnswerKeyModal();">
                  <span>Câu ${q.id}:</span>
                  <strong>${q.answer}</strong>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderQuestionCardContent(q, isSlideMode) {
    const userAns = state.selectedAnswers[q.id];
    const isRevealed = !!state.revealedQuestions[q.id];
    const isStarred = !!state.starredQuestions[q.id];
    const fig = q.figure ? QUIZ_FIGURES[q.figure] : null;

    // Kiểm tra độ dài đáp án để bố trí 1 cột hoặc 2 cột hợp lý
    const maxOptLen = Math.max(...Object.values(q.options).map(s => s.length));
    const useSingleCol = maxOptLen > 52;

    return `
      <div class="slide-card-header">
        <div class="slide-q-meta">
          <span class="slide-q-number">Câu ${q.id} / ${QUIZ_QUESTIONS.length}</span>
          <span class="slide-q-topic">📌 ${q.topic}</span>
        </div>
        <div class="slide-q-actions">
          <button class="btn-star-q ${isStarred ? 'starred' : ''}" onclick="window.QuizApp.toggleStar(${q.id})" title="Đánh dấu câu hỏi cần lưu ý cho học sinh (Phím S)">
            ${isStarred ? '★ Đã đánh dấu lưu ý' : '☆ Đánh dấu lưu ý'}
          </button>
          ${!isSlideMode ? `
            <button class="quiz-tool-btn" onclick="window.QuizApp.toggleReveal(${q.id})">
              ${isRevealed ? '🙈 Ẩn lời giải' : '👁️ Hiện đáp án & lời giải'}
            </button>
          ` : ''}
        </div>
      </div>

      <div class="slide-q-body ${fig ? 'has-figure' : ''}">
        <div class="slide-q-text">${q.question}</div>
        ${fig ? `
          <div class="slide-q-figure">
            ${fig.svg}
            <div class="slide-q-figure-caption">${fig.caption}</div>
          </div>
        ` : ''}
      </div>

      <div class="slide-options-grid ${useSingleCol ? 'single-col' : ''}">
        ${['A', 'B', 'C', 'D'].map((letter) => {
          let stateClass = '';
          let statusIcon = '';

          if (isRevealed) {
            if (letter === q.answer) {
              stateClass = 'is-correct';
              statusIcon = '✔';
            } else if (userAns === letter && userAns !== q.answer) {
              stateClass = 'is-wrong';
              statusIcon = '✖';
            }
          } else if (userAns) {
            if (letter === userAns) {
              if (userAns === q.answer) {
                stateClass = 'is-correct';
                statusIcon = '✔';
              } else {
                stateClass = 'is-wrong';
                statusIcon = '✖';
              }
            } else if (letter === q.answer && userAns !== q.answer) {
              // Khi học sinh chọn sai, tô sáng luôn đáp án đúng để giáo viên sửa bài ngay
              stateClass = 'is-correct';
              statusIcon = '✔';
            }
          }

          return `
            <button
              class="quiz-option-btn ${stateClass}"
              onclick="window.QuizApp.selectAnswer(${q.id}, '${letter}')"
            >
              <span class="option-letter">${letter}</span>
              <span class="option-content">${q.options[letter]}</span>
              ${statusIcon ? `<span class="option-status-icon">${statusIcon}</span>` : ''}
            </button>
          `;
        }).join('')}
      </div>

      ${(isRevealed || userAns) ? `
        <div class="slide-explanation-box">
          <div class="explanation-header">
            <span>💡 ĐÁP ÁN & LỜI GIẢI CHI TIẾT:</span>
            <span class="explanation-ans-badge">Chọn ${q.answer}</span>
            ${userAns ? `
              <span style="font-size: 0.85rem; font-weight: 700; color: ${userAns === q.answer ? '#16a34a' : '#dc2626'};">
                (${userAns === q.answer ? '🎉 Học sinh chọn chính xác!' : `Học sinh chọn ${userAns} — Chưa đúng`})
              </span>
            ` : ''}
          </div>
          <div class="explanation-content">
            ${q.explanation}
          </div>
        </div>
      ` : ''}
    `;
  }

  function renderSlideView(filtered) {
    const currentQ = filtered[state.currentIndex];
    const isRevealed = !!state.revealedQuestions[currentQ.id];
    const hasPrev = state.currentIndex > 0;
    const hasNext = state.currentIndex < filtered.length - 1;

    return `
      <div class="quiz-presentation-layout ${state.sidebarOpen ? '' : 'sidebar-collapsed'}">
        <!-- Cột trái: Thẻ trình chiếu câu hỏi -->
        <div class="quiz-slide-card">
          ${renderQuestionCardContent(currentQ, true)}

          <!-- Thanh điều khiển chuyển câu dưới chân Slide -->
          <div class="slide-footer-bar">
            <button class="slide-nav-btn" onclick="window.QuizApp.prevSlide()" ${!hasPrev ? 'disabled' : ''}>
              ⬅ Câu trước
            </button>

            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
              <button
                class="slide-reveal-btn ${isRevealed ? 'revealed' : ''}"
                onclick="window.QuizApp.toggleReveal(${currentQ.id})"
              >
                ${isRevealed ? '🙈 Ẩn đáp án & lời giải' : '👁️ Hiện đáp án & Lời giải chi tiết'}
              </button>
              ${state.selectedAnswers[currentQ.id] ? `
                <button class="quiz-tool-btn" onclick="window.QuizApp.clearQuestion(${currentQ.id})" title="Xóa lựa chọn của câu này để gọi học sinh khác">
                  ↺ Chọn lại câu này
                </button>
              ` : ''}
            </div>

            <button class="slide-nav-btn" onclick="window.QuizApp.nextSlide()" ${!hasNext ? 'disabled' : ''}>
              Câu tiếp theo ➡
            </button>
          </div>

          <div class="keyboard-hint-bar">
            <span><kbd class="kbd-tag">←</kbd> <kbd class="kbd-tag">→</kbd> Chuyển câu</span>
            <span><kbd class="kbd-tag">A</kbd> <kbd class="kbd-tag">B</kbd> <kbd class="kbd-tag">C</kbd> <kbd class="kbd-tag">D</kbd> hoặc <kbd class="kbd-tag">1</kbd>-<kbd class="kbd-tag">4</kbd> Chọn đáp án</span>
            <span><kbd class="kbd-tag">Space</kbd> Hiện/Ẩn lời giải</span>
            <span><kbd class="kbd-tag">S</kbd> Đánh dấu ★</span>
          </div>
        </div>

        <!-- Cột phải: Bảng điều hướng nhanh -->
        ${state.sidebarOpen ? `
          <aside class="quiz-navigator-card">
            <div class="navigator-header">
              <h4>🧭 Bảng chuyển nhanh (${filtered.length} câu)</h4>
              <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600;">
                Đang ở ${state.currentIndex + 1}/${filtered.length}
              </span>
            </div>

            <div class="navigator-grid">
              ${filtered.map((q, idx) => {
                const ans = state.selectedAnswers[q.id];
                const rev = state.revealedQuestions[q.id];
                const star = state.starredQuestions[q.id];
                let cellClass = '';
                if (idx === state.currentIndex) cellClass += ' current';
                if (ans === q.answer) cellClass += ' answered-correct';
                else if (ans && ans !== q.answer) cellClass += ' answered-wrong';
                else if (rev) cellClass += ' revealed-only';
                if (star) cellClass += ' is-starred';

                return `
                  <button
                    class="nav-q-cell ${cellClass}"
                    onclick="window.QuizApp.goToIndex(${idx})"
                    title="Câu ${q.id} (${q.topic})"
                  >
                    ${q.id}
                  </button>
                `;
              }).join('')}
            </div>

            <div class="navigator-legend">
              <div class="legend-item"><span class="legend-dot" style="background:#16a34a;"></span> Chọn đúng</div>
              <div class="legend-item"><span class="legend-dot" style="background:#dc2626;"></span> Chọn sai</div>
              <div class="legend-item"><span class="legend-dot" style="background:#0284c7;"></span> Đã mở đáp án</div>
              <div class="legend-item"><span class="legend-dot" style="background:#f59e0b;"></span> Đánh dấu ★</div>
            </div>
          </aside>
        ` : ''}
      </div>
    `;
  }

  function renderListView(filtered) {
    return `
      <div class="quiz-list-container">
        ${filtered.map((q) => `
          <div class="quiz-list-item" id="quiz-list-q-${q.id}">
            ${renderQuestionCardContent(q, false)}
          </div>
        `).join('')}
      </div>
    `;
  }

  // Các hàm điều khiển tương tác toàn cục
  window.QuizApp = {
    setMode(mode) {
      state.mode = mode;
      renderQuizApp();
    },
    changeZoom(delta) {
      const next = Math.min(1.45, Math.max(0.85, +(state.fontScale + delta).toFixed(2)));
      state.fontScale = next;
      const ws = document.getElementById('quizWorkspace');
      if (ws) ws.style.setProperty('--quiz-scale', String(next));
      renderQuizApp();
    },
    toggleSidebar() {
      state.sidebarOpen = !state.sidebarOpen;
      renderQuizApp();
    },
    toggleFullscreen() {
      state.isFullscreen = !state.isFullscreen;
      renderQuizApp();
    },
    setTopicFilter(topic) {
      state.topicFilter = topic;
      state.currentIndex = 0;
      renderQuizApp();
    },
    setStatusFilter(status) {
      state.statusFilter = status;
      state.currentIndex = 0;
      renderQuizApp();
    },
    setSearchQuery(query) {
      state.searchQuery = query;
      state.currentIndex = 0;
      renderQuizApp();
      // Giữ focus vào ô tìm kiếm
      const input = document.querySelector('.quiz-search-input');
      if (input) {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
    },
    clearFilters() {
      state.topicFilter = 'ALL';
      state.statusFilter = 'ALL';
      state.searchQuery = '';
      state.currentIndex = 0;
      renderQuizApp();
    },
    selectAnswer(qId, letter) {
      state.selectedAnswers[qId] = letter;
      state.revealedQuestions[qId] = true;
      renderQuizApp();
    },
    toggleReveal(qId) {
      state.revealedQuestions[qId] = !state.revealedQuestions[qId];
      renderQuizApp();
    },
    clearQuestion(qId) {
      delete state.selectedAnswers[qId];
      delete state.revealedQuestions[qId];
      renderQuizApp();
    },
    toggleStar(qId) {
      state.starredQuestions[qId] = !state.starredQuestions[qId];
      if (!state.starredQuestions[qId]) delete state.starredQuestions[qId];
      renderQuizApp();
    },
    prevSlide() {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderQuizApp();
      }
    },
    nextSlide() {
      const filtered = getFilteredQuestions();
      if (state.currentIndex < filtered.length - 1) {
        state.currentIndex++;
        renderQuizApp();
      }
    },
    goToIndex(idx) {
      state.currentIndex = idx;
      renderQuizApp();
    },
    jumpToQuestionId(qId) {
      state.topicFilter = 'ALL';
      state.statusFilter = 'ALL';
      state.searchQuery = '';
      state.mode = 'slide';
      const idx = QUIZ_QUESTIONS.findIndex(q => q.id === qId);
      if (idx !== -1) state.currentIndex = idx;
      renderQuizApp();
    },
    revealAllInFilter() {
      const filtered = getFilteredQuestions();
      const allRevealed = filtered.every(q => state.revealedQuestions[q.id]);
      filtered.forEach(q => {
        if (allRevealed) delete state.revealedQuestions[q.id];
        else state.revealedQuestions[q.id] = true;
      });
      renderQuizApp();
    },
    resetAll() {
      if (confirm(`Bạn có muốn làm mới toàn bộ lựa chọn và trạng thái sửa bài của ${QUIZ_QUESTIONS.length} câu hỏi không?`)) {
        state.selectedAnswers = {};
        state.revealedQuestions = {};
        state.currentIndex = 0;
        renderQuizApp();
      }
    },
    openAnswerKeyModal() {
      const modal = document.getElementById('answerKeyModal');
      if (modal) modal.classList.add('open');
    },
    closeAnswerKeyModal() {
      const modal = document.getElementById('answerKeyModal');
      if (modal) modal.classList.remove('open');
    }
  };

  // Hỗ trợ phím tắt bàn phím khi đang ở tab Bài tập và chế độ Trình chiếu
  document.addEventListener('keydown', (e) => {
    const quizPanel = document.getElementById('panel-baitap');
    if (!quizPanel || !quizPanel.classList.contains('active')) return;

    // Không bắt phím tắt khi đang gõ vào ô tìm kiếm hoặc select
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;

    if (e.key === 'Escape' && state.isFullscreen) {
      state.isFullscreen = false;
      renderQuizApp();
      return;
    }

    if (state.mode !== 'slide') return;
    const filtered = getFilteredQuestions();
    if (filtered.length === 0) return;
    const currentQ = filtered[state.currentIndex];

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      window.QuizApp.nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      window.QuizApp.prevSlide();
    } else if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      window.QuizApp.toggleReveal(currentQ.id);
    } else if (e.key.toLowerCase() === 's') {
      e.preventDefault();
      window.QuizApp.toggleStar(currentQ.id);
    } else if (['a', '1'].includes(e.key.toLowerCase())) {
      window.QuizApp.selectAnswer(currentQ.id, 'A');
    } else if (['b', '2'].includes(e.key.toLowerCase())) {
      window.QuizApp.selectAnswer(currentQ.id, 'B');
    } else if (['c', '3'].includes(e.key.toLowerCase())) {
      window.QuizApp.selectAnswer(currentQ.id, 'C');
    } else if (['d', '4'].includes(e.key.toLowerCase())) {
      window.QuizApp.selectAnswer(currentQ.id, 'D');
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderQuizApp);
  } else {
    renderQuizApp();
  }
})();

/**
 * BỘ 100 CÂU TRẮC NGHIỆM ĐÚNG SAI - CHƯƠNG 1: VẬT LÍ NHIỆT (VẬT LÍ 12)
 * Tích hợp trực tiếp vào mục "📝 Bài tập" (Phần II: 100 câu Đúng / Sai)
 * Bao gồm đầy đủ hình vẽ thí nghiệm, đồ thị nhiệt học SVG, đáp án chuẩn và lời giải chi tiết từng ý a, b, c, d.
 */

(function () {
  // Kho hình vẽ SVG cho các câu hỏi thí nghiệm và đồ thị trong bộ 100 câu Đúng/Sai
  window.PHYSICS_TF_FIGURES = {
    tf_35: {
      caption: 'Hình Câu 35: Xi-lanh có pít-tông gắn cảm biến nhiệt độ khảo sát độ biến thiên nội năng khi nén khí',
      svg: `<svg viewBox="22 6 248 128" xmlns="http://www.w3.org/2000/svg">
        <!-- Màn hình cảm biến nhiệt độ -->
        <rect x="62" y="10" width="102" height="40" rx="6" fill="#f8fafc" stroke="currentColor" stroke-width="2"/>
        <text x="113" y="38" font-family="monospace" font-size="23" font-weight="800" fill="#0f172a" text-anchor="middle">29.5°C</text>
        <text x="172" y="25" font-size="11.5" font-weight="600" font-style="italic" fill="currentColor">Cảm biến</text>
        <text x="172" y="40" font-size="11.5" font-weight="600" font-style="italic" fill="currentColor">nhiệt độ</text>
        <!-- Dây nối cảm biến -->
        <path d="M 62,31 C 30,31 24,102 58,102" fill="none" stroke="currentColor" stroke-width="2"/>
        <polygon points="51,97 62,102 51,107" fill="#0284c7"/>
        <!-- Xi-lanh -->
        <rect x="62" y="74" width="136" height="54" fill="rgba(56,189,248,0.16)" stroke="currentColor" stroke-width="2"/>
        <!-- Pít-tông -->
        <rect x="160" y="75" width="11" height="52" fill="#334155"/>
        <line x1="171" y1="101" x2="260" y2="101" stroke="#334155" stroke-width="5.5"/>
        <line x1="260" y1="81" x2="260" y2="121" stroke="#334155" stroke-width="6.5"/>
        <!-- Chú thích -->
        <polyline points="184,74 192,61 215,61" fill="none" stroke="currentColor" stroke-width="1.3"/>
        <text x="219" y="65" font-size="11.5" font-weight="700" fill="currentColor">Xilanh</text>
        <line x1="168" y1="116" x2="194" y2="116" stroke="currentColor" stroke-width="1.3"/>
        <text x="197" y="120" font-size="11.5" font-weight="700" fill="currentColor">Pít-tông</text>
      </svg>`
    },

    tf_36: {
      caption: 'Hình Câu 36 & 37: Thí nghiệm khảo sát sự thay đổi nội năng của khối khí trong xi-lanh ngâm trong cốc nước',
      svg: `<svg viewBox="20 8 168 172" xmlns="http://www.w3.org/2000/svg">
        <!-- Giá đỡ -->
        <line x1="46" y1="173" x2="182" y2="173" stroke="currentColor" stroke-width="3.2"/>
        <line x1="65" y1="173" x2="65" y2="16" stroke="currentColor" stroke-width="2.6"/>
        <line x1="65" y1="28" x2="132" y2="28" stroke="currentColor" stroke-width="2.2"/>
        <!-- Bình cách nhiệt chứa nước -->
        <rect x="92" y="86" width="82" height="82" rx="4" fill="rgba(56,189,248,0.2)" stroke="currentColor" stroke-width="1.8"/>
        <line x1="92" y1="103" x2="174" y2="103" stroke="#0284c7" stroke-width="1.4" stroke-dasharray="4,2"/>
        <!-- Xi-lanh chứa khí cắm trong bình -->
        <rect x="116" y="46" width="34" height="98" fill="rgba(254,240,138,0.4)" stroke="currentColor" stroke-width="1.6"/>
        <rect x="117" y="60" width="32" height="8" fill="#475569"/>
        <line x1="133" y1="16" x2="133" y2="60" stroke="#475569" stroke-width="2.4"/>
        <rect x="119" y="12" width="28" height="6" fill="#475569"/>
        <!-- Nhãn -->
        <text x="23" y="32" font-size="11" font-weight="700" fill="currentColor">Giá đỡ</text>
        <text x="53" y="114" font-size="11" font-weight="700" fill="currentColor">Khí</text>
        <line x1="76" y1="110" x2="124" y2="110" stroke="currentColor" stroke-width="1.2"/>
        <text x="45" y="142" font-size="11" font-weight="700" fill="currentColor">Nước</text>
        <line x1="78" y1="138" x2="104" y2="138" stroke="currentColor" stroke-width="1.2"/>
      </svg>`
    },

    tf_38: {
      caption: 'Hình Câu 38: Sơ đồ thí nghiệm của Joule xác định mối liên hệ giữa công và nhiệt lượng',
      svg: `<svg viewBox="25 10 216 156" xmlns="http://www.w3.org/2000/svg">
        <!-- Bình nhiệt lượng kế ở giữa -->
        <rect x="95" y="56" width="76" height="86" rx="4" fill="rgba(56,189,248,0.18)" stroke="currentColor" stroke-width="1.8"/>
        <!-- Trục quay & cánh cản bên trong -->
        <line x1="133" y1="20" x2="133" y2="138" stroke="currentColor" stroke-width="2.2"/>
        <rect x="108" y="80" width="20" height="14" fill="none" stroke="#0284c7" stroke-width="1.7"/>
        <rect x="138" y="80" width="20" height="14" fill="none" stroke="#0284c7" stroke-width="1.7"/>
        <rect x="108" y="104" width="20" height="14" fill="none" stroke="#0284c7" stroke-width="1.7"/>
        <rect x="138" y="104" width="20" height="14" fill="none" stroke="#0284c7" stroke-width="1.7"/>
        <!-- Nhiệt kế cắm vào bình -->
        <line x1="118" y1="15" x2="118" y2="78" stroke="#dc2626" stroke-width="1.8"/>
        <circle cx="118" cy="78" r="3.2" fill="#dc2626"/>
        <text x="142" y="22" font-size="10.5" font-weight="700" fill="currentColor">Nhiệt kế</text>
        <!-- Hai ròng rọc và quả nặng hai bên -->
        <circle cx="52" cy="40" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/>
        <circle cx="214" cy="40" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/>
        <line x1="52" y1="31" x2="133" y2="31" stroke="currentColor" stroke-width="1.4"/>
        <line x1="133" y1="31" x2="214" y2="31" stroke="currentColor" stroke-width="1.4"/>
        <line x1="43" y1="40" x2="43" y2="110" stroke="currentColor" stroke-width="1.5"/>
        <line x1="223" y1="40" x2="223" y2="110" stroke="currentColor" stroke-width="1.5"/>
        <rect x="33" y="110" width="20" height="16" fill="#475569"/>
        <rect x="213" y="110" width="20" height="16" fill="#475569"/>
        <text x="133" y="158" font-size="10.5" font-weight="700" fill="currentColor" text-anchor="middle">Cánh cản &amp; bình nước cách nhiệt</text>
      </svg>`
    },

    tf_40: {
      caption: 'Hình Câu 40: Vừa đun nóng khối khí bằng đèn cồn vừa ấn nhanh pít-tông xuống dưới',
      svg: `<svg viewBox="38 12 124 164" xmlns="http://www.w3.org/2000/svg">
        <!-- Giá đỡ kiềng -->
        <line x1="45" y1="125" x2="155" y2="125" stroke="currentColor" stroke-width="2.4"/>
        <line x1="58" y1="125" x2="46" y2="172" stroke="currentColor" stroke-width="2.2"/>
        <line x1="142" y1="125" x2="154" y2="172" stroke="currentColor" stroke-width="2.2"/>
        <!-- Bình cầu / Xi-lanh -->
        <rect x="70" y="45" width="60" height="79" rx="6" fill="rgba(56,189,248,0.2)" stroke="currentColor" stroke-width="1.8"/>
        <rect x="71" y="65" width="58" height="8" fill="#334155"/>
        <line x1="100" y1="18" x2="100" y2="65" stroke="#334155" stroke-width="3.2"/>
        <line x1="82" y1="18" x2="118" y2="18" stroke="#334155" stroke-width="4.2"/>
        <!-- Ngọn lửa đèn cồn -->
        <path d="M 100,126 C 90,138 92,148 100,152 C 108,148 110,138 100,126 Z" fill="#f97316"/>
        <rect x="82" y="152" width="36" height="18" rx="3" fill="#94a3b8" stroke="currentColor" stroke-width="1.4"/>
      </svg>`
    },

    tf_42: {
      caption: 'Hình Câu 42: Khối khí trong xi-lanh nhận nhiệt lượng Q = 1000 J và giãn nở đẳng áp đẩy pít-tông lên thêm ΔV = 0,003 m³',
      svg: `<svg viewBox="20 8 198 152" xmlns="http://www.w3.org/2000/svg">
        <!-- Xi-lanh trạng thái đầu -->
        <rect x="28" y="30" width="52" height="125" fill="rgba(148,163,184,0.18)" stroke="currentColor" stroke-width="1.7"/>
        <rect x="29" y="88" width="50" height="8" fill="#64748b"/>
        <line x1="54" y1="18" x2="54" y2="88" stroke="#f59e0b" stroke-width="3.8"/>
        <text x="54" y="128" font-size="11" font-weight="700" fill="currentColor" text-anchor="middle">V (m³)</text>
        <!-- Xi-lanh trạng thái sau -->
        <rect x="112" y="30" width="52" height="125" fill="rgba(148,163,184,0.18)" stroke="currentColor" stroke-width="1.7"/>
        <rect x="113" y="60" width="50" height="8" fill="#64748b"/>
        <line x1="138" y1="12" x2="138" y2="60" stroke="#f59e0b" stroke-width="3.8"/>
        <line x1="80" y1="88" x2="174" y2="88" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3"/>
        <line x1="164" y1="68" x2="174" y2="68" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3"/>
        <text x="138" y="128" font-size="11" font-weight="700" fill="currentColor" text-anchor="middle">V (m³)</text>
        <text x="168" y="81" font-size="10" font-weight="800" fill="#dc2626">0,003 m³</text>
      </svg>`
    },

    tf_45: {
      caption: 'Hình Câu 45: Đun nóng khối khí chứa trong xi-lanh kín nằm ngang có pít-tông dịch chuyển không ma sát',
      svg: `<svg viewBox="28 14 190 136" xmlns="http://www.w3.org/2000/svg">
        <!-- Xi-lanh nằm ngang -->
        <rect x="35" y="20" width="145" height="58" fill="rgba(56,189,248,0.18)" stroke="currentColor" stroke-width="2.2"/>
        <!-- Pít-tông -->
        <rect x="135" y="22" width="12" height="54" fill="#1e293b"/>
        <line x1="147" y1="49" x2="210" y2="49" stroke="#1e293b" stroke-width="7"/>
        <line x1="210" y1="28" x2="210" y2="70" stroke="#1e293b" stroke-width="7"/>
        <!-- Ngọn lửa đèn cồn phía dưới -->
        <path d="M 92,82 C 80,98 83,112 92,118 C 101,112 104,98 92,82 Z" fill="#ef4444"/>
        <polygon points="62,145 122,145 110,118 74,118" fill="#3b82f6" stroke="currentColor" stroke-width="1.6"/>
      </svg>`
    },

    tf_47: {
      caption: 'Hình Câu 47: Xi-lanh nằm ngang chia thành hai ngăn A và B bởi pít-tông cách nhiệt dịch chuyển đoạn d = 0,2 m',
      svg: `<svg viewBox="20 6 250 88" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="34" width="240" height="54" rx="4" fill="rgba(56,189,248,0.14)" stroke="currentColor" stroke-width="2"/>
        <!-- Pít-tông lúc đầu (nét đứt) và lúc sau -->
        <rect x="115" y="35" width="8" height="52" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
        <rect x="165" y="35" width="9" height="52" fill="#475569"/>
        <!-- Mũi tên dịch chuyển d = 0,2 m -->
        <line x1="119" y1="22" x2="169" y2="22" stroke="#0284c7" stroke-width="1.6"/>
        <polygon points="164,19 171,22 164,25" fill="#0284c7"/>
        <text x="144" y="16" font-size="10.5" font-weight="800" fill="#0284c7" text-anchor="middle">d = 0,2 m</text>
        <text x="68" y="24" font-size="10.5" font-weight="700" fill="currentColor">Cách nhiệt</text>
        <text x="72" y="65" font-size="13" font-weight="800" fill="currentColor">A</text>
        <text x="98" y="79" font-size="10.5" font-weight="700" fill="#dc2626">Q = 100 J</text>
        <text x="218" y="65" font-size="13" font-weight="800" fill="currentColor">B</text>
      </svg>`
    },

    tf_48: {
      caption: 'Hình Câu 48: Khối khí nhận nhiệt lượng 5 J đẩy pít-tông khối lượng 1,2 kg dịch chuyển đều lên trên 10 cm',
      svg: `<svg viewBox="42 20 96 156" xmlns="http://www.w3.org/2000/svg">
        <rect x="48" y="25" width="84" height="95" fill="rgba(148,163,184,0.18)" stroke="currentColor" stroke-width="1.8"/>
        <rect x="49" y="55" width="82" height="10" fill="#64748b"/>
        <circle cx="90" cy="48" r="5" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <!-- Đèn cồn -->
        <path d="M 90,122 C 82,134 84,144 90,148 C 96,144 98,134 90,122 Z" fill="#f97316"/>
        <polygon points="62,170 118,170 106,148 74,148" fill="#cbd5e1" stroke="currentColor" stroke-width="1.5"/>
      </svg>`
    },

    tf_50: {
      caption: 'Bảng Câu 50: Nhiệt dung riêng của các chất tính theo J/(kg.K)',
      svg: `<svg viewBox="2 4 426 66" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="418" height="58" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <line x1="6" y1="37" x2="424" y2="37" stroke="currentColor" stroke-width="1.4"/>
        <line x1="112" y1="8" x2="112" y2="66" stroke="currentColor" stroke-width="1.2"/>
        <line x1="164" y1="8" x2="164" y2="66" stroke="currentColor" stroke-width="1.2"/>
        <line x1="222" y1="8" x2="222" y2="66" stroke="currentColor" stroke-width="1.2"/>
        <line x1="282" y1="8" x2="282" y2="66" stroke="currentColor" stroke-width="1.2"/>
        <line x1="328" y1="8" x2="328" y2="66" stroke="currentColor" stroke-width="1.2"/>
        <line x1="376" y1="8" x2="376" y2="66" stroke="currentColor" stroke-width="1.2"/>
        <g font-size="11.5" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="59" y="27">Chất</text>
          <text x="138" y="27">Nước</text>
          <text x="193" y="27">Nước đá</text>
          <text x="252" y="27">Dầu hỏa</text>
          <text x="305" y="27">Đất</text>
          <text x="352" y="27">Nhôm</text>
          <text x="400" y="27">Đồng</text>
        </g>
        <g font-size="11.5" fill="currentColor" text-anchor="middle">
          <text x="59" y="56" font-weight="700">Nhiệt dung riêng</text>
          <text x="138" y="56" font-weight="600">4200</text>
          <text x="193" y="56" font-weight="600">2100</text>
          <text x="252" y="56" font-weight="600">2100</text>
          <text x="305" y="56" font-weight="600">840</text>
          <text x="352" y="56" font-weight="600">880</text>
          <text x="400" y="56" font-weight="600">390</text>
        </g>
      </svg>`
    }
  };

  // Danh sách 100 câu hỏi Đúng / Sai Vật Lí Nhiệt 12 (Phần 1: Câu 1 - 50)
  window.PHYSICS_TF_QUESTIONS = [
    {
      id: 1,
      part: 2,
      label: 'Câu 1',
      topic: 'Mô hình động học phân tử',
      type: 'tf',
      question: 'Cho các phát biểu sau đây về mô hình động học phân tử về cấu tạo chất, phát biểu nào đúng, phát biểu nào sai?',
      statements: {
        a: 'Chuyển động của phân tử là do lực tương tác phân tử gây ra.',
        b: 'Các phân tử chuyển động không ngừng.',
        c: 'Các phân tử chuyển động càng nhanh thì nhiệt độ càng cao.',
        d: 'Các phân tử luôn dao động quanh vị trí cân bằng.'
      },
      answers: { a: false, b: true, c: true, d: false },
      explanation: `• <b>a) Sai:</b> Chuyển động hỗn loạn không ngừng của các phân tử là chuyển động nhiệt (bản chất nội tại), không phải do lực tương tác phân tử gây ra.<br>
        • <b>b) Đúng:</b> Các phân tử cấu tạo nên vật chuyển động hỗn loạn không ngừng.<br>
        • <b>c) Đúng:</b> Tốc độ chuyển động nhiệt trung bình của các phân tử càng lớn thì nhiệt độ của vật càng cao.<br>
        • <b>d) Sai:</b> Chỉ ở thể rắn (và một phần thể lỏng) các phân tử mới dao động quanh vị trí cân bằng; ở thể khí các phân tử chuyển động tự do về mọi phía.`
    },
    {
      id: 2,
      part: 2,
      label: 'Câu 2',
      topic: 'Mô hình động học phân tử',
      type: 'tf',
      question: 'Cho các phát biểu sau đây về mô hình động học phân tử về cấu tạo chất, phát biểu nào đúng, phát biểu nào sai?',
      statements: {
        a: 'Vật chất chỉ được cấu tạo bởi một số rất lớn những hạt có kích thước rất nhỏ gọi là phân tử.',
        b: 'Các phân tử chuyển động không ngừng theo mọi hướng gọi là chuyển động nhiệt.',
        c: 'Các phân tử chuyển động nhiệt càng nhanh thì nhiệt độ của vật càng cao.',
        d: 'Giữa các phân tử có lực tương tác. Độ lớn của những lực này phụ thuộc vào cấu tạo của vật chất.'
      },
      answers: { a: true, b: true, c: true, d: true },
      explanation: `• <b>a) Đúng, b) Đúng, c) Đúng, d) Đúng:</b> Cả 4 phát biểu đều là nội dung chính xác của thuyết động học phân tử về cấu tạo chất.`
    },
    {
      id: 3,
      part: 2,
      label: 'Câu 3',
      topic: 'Cấu trúc chất rắn',
      type: 'tf',
      question: 'Trong các phát biểu sau đây về chất ở thể rắn, phát biểu nào là đúng, phát biểu nào là sai?',
      statements: {
        a: 'Ở thể rắn các phân tử rất gần nhau (khoảng cách giữa các phân tử cỡ kích thước phân tử).',
        b: 'Các phân tử ở thể rắn sắp xếp không có trật tự, chặt chẽ.',
        c: 'Lực tương tác giữa các phân tử rất mạnh giữ cho chúng không di chuyển tự do mà chỉ có thể dao động xung quanh vị trí cân bằng xác định.',
        d: 'Vật rắn có thể tích và hình dạng riêng không xác định.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Ở thể rắn, các hạt nằm rất gần nhau.<br>
        • <b>b) Sai:</b> Các phân tử ở thể rắn sắp xếp có trật tự chặt chẽ.<br>
        • <b>c) Đúng:</b> Lực liên kết mạnh giữ các hạt chỉ dao động quanh vị trí cân bằng xác định.<br>
        • <b>d) Đúng (theo bảng đáp án gốc của tài liệu):</b> Trong bảng đáp án Trang 25 ghi a) Đúng, b) Sai, c) Đúng, d) Đúng (Lưu ý khi giảng bài: về mặt vật lí, vật rắn có thể tích và hình dạng riêng <i>xác định</i>).`
    },
    {
      id: 4,
      part: 2,
      label: 'Câu 4',
      topic: 'Ba thể của vật chất (Rắn, Lỏng, Khí)',
      type: 'tf',
      question: 'Vật chất xung quanh chúng ta thường tồn tại phổ biến ở ba thể cơ bản là rắn, lỏng và khí. Mỗi thể đều có đặc điểm và tính chất riêng. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Chất khí không có hình dạng và thể tích riêng, luôn chiếm toàn bộ thể tích bình chứa và có thể nén được dễ dàng.',
        b: 'Vật ở thể lỏng có thể tích riêng nhưng không có hình dạng riêng.',
        c: 'Vật ở thể rắn có thể tích và hình dạng riêng, rất khó nén.',
        d: 'Các chất không thể chuyển từ dạng này sang dạng khác.'
      },
      answers: { a: true, b: true, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> Chất khí dễ nén và chiếm toàn bộ bình chứa.<br>
        • <b>b) Đúng:</b> Chất lỏng có thể tích riêng xác định nhưng có hình dạng của phần bình chứa.<br>
        • <b>c) Đúng:</b> Chất rắn có hình dạng và thể tích riêng xác định, rất khó nén.<br>
        • <b>d) Sai:</b> Khi thay đổi nhiệt độ và áp suất thích hợp, các chất có thể chuyển từ thể này sang thể khác.`
    },
    {
      id: 5,
      part: 2,
      label: 'Câu 5',
      topic: 'Cấu trúc chất lỏng',
      type: 'tf',
      question: 'Các phát biểu sau nói về chất lỏng đúng hay sai?',
      statements: {
        a: 'Khoảng cách trung bình giữa các phân tử trong chất lỏng lớn hơn khoảng cách trung bình giữa các phân tử trong chất rắn và nhỏ hơn khoảng cách trung bình của các phân tử trong chất khí.',
        b: 'Các phân tử chất lỏng dao động xung quanh vị trí cân bằng cố định.',
        c: 'Chất lỏng có thể tích xác định nhưng không có hình dạng xác định mà hình dạng của nó phụ thuộc vào hình dạng của phần bình chứa nó.',
        d: 'Lực tương tác giữa các phân tử ở thể lỏng lớn hơn lực tương tác giữa các phân tử ở thể khí.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Khoảng cách phân tử: Rắn &lt; Lỏng &lt; Khí.<br>
        • <b>b) Sai:</b> Vị trí cân bằng của các phân tử chất lỏng không cố định mà di chuyển được.<br>
        • <b>c) Đúng:</b> Chất lỏng có thể tích riêng nhưng mang hình dạng phần bình chứa.<br>
        • <b>d) Đúng:</b> Các phân tử chất lỏng ở gần nhau hơn nhiều so với chất khí nên lực tương tác lớn hơn.`
    },
    {
      id: 6,
      part: 2,
      label: 'Câu 6',
      topic: 'Cấu trúc chất khí',
      type: 'tf',
      question: 'Trong các phát biểu sau đây về cấu trúc chất khí, phát biểu nào đúng, phát biểu nào sai?',
      statements: {
        a: 'Khoảng cách giữa các phân tử chất khí rất lớn so với kích thước của chúng.',
        b: 'Trừ khi va chạm, lực tương tác giữa các phân tử khí rất nhỏ, hầu như không đáng kể.',
        c: 'Một lượng không khí luôn có thể tích và hình dạng riêng xác định.',
        d: 'Các phân tử chất khí chuyển động hỗn loạn, không ngừng về mọi phía, chiếm toàn bộ không gian bình chứa.'
      },
      answers: { a: true, b: true, c: false, d: true },
      explanation: `• <b>a) Đúng, b) Đúng, d) Đúng:</b> Đặc điểm chuẩn của chất khí.<br>
        • <b>c) Sai:</b> Chất khí không có hình dạng và thể tích riêng xác định.`
    },
    {
      id: 7,
      part: 2,
      label: 'Câu 7',
      topic: 'Mô hình động học phân tử',
      type: 'tf',
      question: 'Xét tính đúng sai của các phát biểu sau:',
      statements: {
        a: 'Các phân tử chất rắn, chất lỏng và chất khí đều chuyển động hỗn độn như nhau.',
        b: 'Nhiệt độ càng cao thì các phân tử khí chuyển động càng nhanh.',
        c: 'Chuyển động của các phân tử là do lực tương tác phân tử gây ra.',
        d: 'Chất khí được cấu tạo từ các phân tử có khoảng cách giữa các phân tử rất nhỏ so với kích thước của chúng.'
      },
      answers: { a: false, b: true, c: false, d: false },
      explanation: `• <b>a) Sai:</b> Mức độ và hình thức chuyển động ở 3 thể rắn, lỏng, khí khác nhau.<br>
        • <b>b) Đúng:</b> Nhiệt độ càng cao thì vận tốc chuyển động nhiệt càng lớn.<br>
        • <b>c) Sai:</b> Chuyển động nhiệt không phải do lực tương tác phân tử gây ra.<br>
        • <b>d) Sai:</b> Khoảng cách giữa các phân tử khí rất lớn so với kích thước của chúng.`
    },
    {
      id: 8,
      part: 2,
      label: 'Câu 8',
      topic: 'Cấu trúc chất khí',
      type: 'tf',
      question: 'Cho các phát biểu sau đây về mô hình động học phân tử về cấu tạo chất ở thể khí. Chọn đúng hoặc sai:',
      statements: {
        a: 'Các phân tử ở xa nhau hơn so với các phân tử trong chất lỏng.',
        b: 'Khoảng cách giữa các phân tử rất lớn so với kích thước của chúng nên lực tương tác giữa các phân tử hầu như không đáng kể.',
        c: 'Các phân tử khí chuyển động hỗn loạn về mọi phía chiếm toàn bộ không gian của bình chứa.',
        d: 'Một lượng khí nhất định không có thể tích và hình dạng riêng mà có thể tích và hình dạng của bình chứa.'
      },
      answers: { a: true, b: true, c: true, d: true },
      explanation: `• <b>a) Đúng, b) Đúng, c) Đúng, d) Đúng:</b> Cả 4 phát biểu đều mô tả chính xác tính chất và cấu trúc vi mô của chất khí.`
    },
    {
      id: 9,
      part: 2,
      label: 'Câu 9',
      topic: 'Mô hình động học phân tử',
      type: 'tf',
      question: 'Cho các phát biểu sau đây về mô hình động học phân tử về cấu tạo chất. Chọn đúng hoặc sai:',
      statements: {
        a: 'Giữa các nguyên tử, phân tử không có khoảng cách.',
        b: 'Lực tương tác giữa các phân tử của vật ở thể rắn lớn hơn lực tương tác giữa các phân tử của vật ở thể lỏng, thể khí.',
        c: 'Các nguyên tử, phân tử chất rắn dao động xung quanh các vị trí cân bằng không cố định.',
        d: 'Các nguyên tử, phân tử chất lỏng dao động xung quanh các vị trí cân bằng không cố định.'
      },
      answers: { a: false, b: true, c: false, d: true },
      explanation: `• <b>a) Sai:</b> Giữa các nguyên tử, phân tử luôn có khoảng cách.<br>
        • <b>b) Đúng:</b> Ở thể rắn lực tương tác phân tử mạnh nhất.<br>
        • <b>c) Sai:</b> Ở thể rắn các phân tử dao động quanh vị trí cân bằng <i>cố định</i>.<br>
        • <b>d) Đúng:</b> Ở thể lỏng các phân tử dao động quanh vị trí cân bằng có thể di chuyển (không cố định).`
    },
    {
      id: 10,
      part: 2,
      label: 'Câu 10',
      topic: 'Mô hình động học phân tử',
      type: 'tf',
      question: 'Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Các chất được cấu tạo từ các hạt riêng gọi là phân tử.',
        b: 'Các phân tử đứng sát nhau và giữa chúng không có khoảng cách.',
        c: 'Các phân tử có lúc đứng yên, có lúc chuyển động.',
        d: 'Các phân tử đồng thời hút nhau và đẩy nhau.'
      },
      answers: { a: true, b: false, c: false, d: true },
      explanation: `• <b>a) Đúng:</b> Các chất được cấu tạo từ các hạt riêng biệt là phân tử.<br>
        • <b>b) Sai:</b> Giữa các phân tử luôn có khoảng cách.<br>
        • <b>c) Sai:</b> Các phân tử chuyển động hỗn loạn không ngừng.<br>
        • <b>d) Đúng:</b> Giữa các phân tử đồng thời có cả lực hút và lực đẩy.`
    },
    {
      id: 11,
      part: 2,
      label: 'Câu 11',
      topic: 'Mô hình động học phân tử',
      type: 'tf',
      question: 'Khi nói về mô hình động học phân tử, hãy xét tính đúng, sai của các nhận định sau?',
      statements: {
        a: 'Các chất được cấu tạo bởi một số rất lớn những hạt có kích thước rất nhỏ gọi chung là phân tử.',
        b: 'Các phân tử chuyển động không ngừng theo mọi hướng, chuyển động này gọi là chuyển động nhiệt.',
        c: 'Chuyển động nhiệt của các phân tử phụ thuộc vào nhiệt độ của vật.',
        d: 'Giữa các phân tử có các lực tương tác hút và đẩy, khi các phân tử xa nhau thì lực hút chiếm ưu thế và khi gần nhau thì lực đẩy chiếm ưu thế.'
      },
      answers: { a: true, b: true, c: true, d: true },
      explanation: `• <b>a) Đúng, b) Đúng, c) Đúng, d) Đúng:</b> Tất cả các nhận định đều chính xác theo thuyết động học phân tử.`
    },
    {
      id: 12,
      part: 2,
      label: 'Câu 12',
      topic: 'Mô hình động học phân tử chất khí',
      type: 'tf',
      question: 'Từ các thí nghiệm và thực tế, các nhà khoa học đưa ra mô hình động học phân tử chất khí. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Các phân tử khí chuyển động hỗn loạn không ngừng.',
        b: 'Khi chuyển động hỗn loạn, các phân tử khí va chạm với nhau và với thành bình.',
        c: 'Chất khí được cấu tạo từ các phân tử có kích thước rất nhỏ so với khoảng cách giữa chúng.',
        d: 'Nhiệt độ của khí càng cao thì các phân tử khí chuyển động càng chậm.'
      },
      answers: { a: true, b: true, c: true, d: false },
      explanation: `• <b>a) Đúng, b) Đúng, c) Đúng.</b><br>
        • <b>d) Sai:</b> Nhiệt độ của khí càng cao thì các phân tử khí chuyển động càng <i>nhanh</i>.`
    },
    {
      id: 13,
      part: 2,
      label: 'Câu 13',
      topic: 'Mô hình động học phân tử',
      type: 'tf',
      question: 'Trong các phát biểu sau đây về mô hình động học phân tử, phát biểu nào là đúng, phát biểu nào là sai?',
      statements: {
        a: 'Các chất được cấu tạo bởi một số rất lớn những hạt có kích thước rất nhỏ được gọi chung là phân tử.',
        b: 'Các phân tử chuyển động không ngừng theo mọi hướng, chuyển động này được gọi là chuyển động nhiệt.',
        c: 'Các phân tử chuyển động nhiệt càng nhanh thì nhiệt độ của vật càng cao.',
        d: 'Giữa các phân tử có các lực tương tác (hút và đẩy). Khi các phân tử gần nhau thì lực hút chiếm ưu thế và khi xa nhau thì các lực đẩy chiếm ưu thế.'
      },
      answers: { a: true, b: true, c: true, d: false },
      explanation: `• <b>a) Đúng, b) Đúng, c) Đúng.</b><br>
        • <b>d) Sai:</b> Khi khoảng cách rất nhỏ (gần nhau hơn <i>r₀</i>) thì <b>lực đẩy</b> chiếm ưu thế; khi xa nhau hơn <i>r₀</i> thì <b>lực hút</b> chiếm ưu thế.`
    },
    {
      id: 14,
      part: 2,
      label: 'Câu 14',
      topic: 'So sánh cấu trúc Rắn - Lỏng - Khí',
      type: 'tf',
      question: 'Mô hình động học phân tử có thể dùng để giải thích cấu trúc của các chất rắn, chất lỏng và chất khí. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Các chất rắn có hình dạng và thể tích xác định vì các phân tử cấu tạo nên nó đứng yên tại chỗ.',
        b: 'Các chất khí dễ nén hơn các chất lỏng vì khoảng cách trung bình giữa các phân tử chất khí lớn hơn khoảng cách trung bình giữa các phân tử chất lỏng.',
        c: 'Chất lỏng không có hình dạng xác định vì các phân tử dao động quanh những vị trí cân bằng có thể di chuyển được.',
        d: 'Tất cả các chất rắn đều có cấu trúc mạng tinh thể nên có hình dạng xác định.'
      },
      answers: { a: false, b: true, c: true, d: false },
      explanation: `• <b>a) Sai:</b> Các phân tử chất rắn không đứng yên mà luôn dao động quanh vị trí cân bằng cố định.<br>
        • <b>b) Đúng:</b> Khoảng cách giữa các phân tử khí rất lớn nên dễ nén.<br>
        • <b>c) Đúng:</b> Vị trí cân bằng trong chất lỏng di chuyển được nên chất lỏng chảy và mang hình dạng bình chứa.<br>
        • <b>d) Sai:</b> Chỉ chất rắn kết tinh mới có cấu trúc mạng tinh thể; chất rắn vô định hình không có cấu trúc mạng tinh thể.`
    },
    {
      id: 15,
      part: 2,
      label: 'Câu 15',
      topic: 'Sự nóng chảy và đông đặc',
      type: 'tf',
      question: 'Quá trình nóng chảy và đông đặc có nhiều ứng dụng trong đời sống và kỹ thuật. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Quá trình đông đặc là quá trình chuyển từ thể lỏng sang thể rắn của các chất.',
        b: 'Các chất rắn đều có nhiệt độ nóng chảy xác định.',
        c: 'Trong quá trình nóng chảy, chất rắn thu nhiệt từ môi trường.',
        d: 'Khi chất rắn kết tinh đang nóng chảy thì nhiệt độ của nó không đổi.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Đông đặc là sự chuyển từ thể lỏng sang thể rắn.<br>
        • <b>b) Sai:</b> Chỉ chất rắn <i>kết tinh</i> mới có nhiệt độ nóng chảy xác định (chất rắn vô định hình không có nhiệt độ nóng chảy xác định).<br>
        • <b>c) Đúng:</b> Nóng chảy là quá trình thu nhiệt.<br>
        • <b>d) Đúng:</b> Ở áp suất xác định, chất rắn kết tinh nóng chảy ở nhiệt độ không đổi.`
    },
    {
      id: 16,
      part: 2,
      label: 'Câu 16',
      topic: 'Sự chuyển thể của các chất',
      type: 'tf',
      question: 'Các phát biểu sau đúng hay sai? Hiện tượng chuyển thể có một số đặc điểm sau:',
      statements: {
        a: 'Khi chất lỏng sôi, sự hoá hơi của chất lỏng xảy ra ở cả trong lòng và bề mặt của chất lỏng.',
        b: 'Khi vật rắn kết tinh đang nóng chảy thì nó nhận năng lượng để phá vỡ liên kết giữa các phân tử và làm tăng nhiệt độ.',
        c: 'Khi chất lỏng sôi thì nó nhận năng lượng để phá vỡ liên kết giữa các phân tử và không làm tăng nhiệt độ.',
        d: 'Khi nóng chảy thì chất rắn toả nhiệt, khi đông đặc thì chất lỏng thu nhiệt.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> Sự sôi là sự hóa hơi xảy ra đồng thời ở cả trong lòng và trên mặt thoáng chất lỏng.<br>
        • <b>b) Sai:</b> Trong suốt quá trình nóng chảy của vật rắn kết tinh, nhiệt độ của vật <b>không tăng</b>.<br>
        • <b>c) Đúng:</b> Khi sôi, nhiệt lượng nhận vào dùng để phá vỡ liên kết phân tử mà không làm tăng nhiệt độ.<br>
        • <b>d) Sai:</b> Khi nóng chảy chất rắn <i>thu nhiệt</i>, khi đông đặc chất lỏng <i>tỏa nhiệt</i>.`
    },
    {
      id: 17,
      part: 2,
      label: 'Câu 17',
      topic: 'Giải thích sự chuyển thể bằng mô hình phân tử',
      type: 'tf',
      question: 'Mô hình động học phân tử có thể dùng để giải thích sự chuyển thể của các chất. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Khi chất rắn kết tinh bị nung nóng đến một nhiệt độ nào đó thì một số phân tử dao động mạnh và tăng được lực liên kết với các phân tử xung quanh và thoát khỏi liên kết với chúng. Đó là sự khởi đầu của quá trình nóng chảy.',
        b: 'Chất rắn kết tinh khi đã chuyển từ thể rắn sang thể lỏng thì sẽ giữ nguyên thể lỏng khi không được cung cấp thêm nhiệt lượng.',
        c: 'Một số chất rắn kết tinh có thể chuyển sang chất rắn vô định hình khi bị nung nóng.',
        d: 'Trong quá trình nóng chảy của chất rắn kết tinh, nhiệt độ của nó không tăng thêm dù vẫn được cung cấp nhiệt lượng.'
      },
      answers: { a: false, b: false, c: true, d: true },
      explanation: `• <b>a) Sai:</b> Khi dao động mạnh, khoảng cách tăng làm <b>giảm</b> lực liên kết chứ không phải tăng lực liên kết.<br>
        • <b>b) Sai:</b> Nếu ngừng cung cấp nhiệt và tỏa nhiệt ra môi trường lạnh hơn, chất lỏng có thể đông đặc trở lại.<br>
        • <b>c) Đúng:</b> Ví dụ thạch anh kết tinh sau khi nung chảy và làm nguội nhanh có thể chuyển thành thủy tinh thạch anh vô định hình (hoặc lưu huỳnh, đường).<br>
        • <b>d) Đúng:</b> Trong suốt quá trình nóng chảy của chất rắn kết tinh, nhiệt độ không đổi.`
    },
    {
      id: 18,
      part: 2,
      label: 'Câu 18',
      topic: 'Quá trình nóng chảy của chất rắn kết tinh',
      type: 'tf',
      question: 'Khi nung nóng một chất rắn kết tinh ở áp suất tiêu chuẩn, nhiệt độ của chất rắn tăng lên đến một giá trị nào đó thì chất rắn bắt đầu chuyển sang thể lỏng. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Nhiệt độ mà chất rắn kết tinh bắt đầu nóng chảy gọi là nhiệt độ nóng chảy.',
        b: 'Trong quá trình nung, các phân tử của chất rắn sẽ dao động mạnh làm tăng khoảng cách giữa chúng.',
        c: 'Nhiệt độ của chất rắn kết tinh tăng liên tục trong quá trình nung đến khi nó nóng chảy hoàn toàn.',
        d: 'Ngay sau khi chuyển sang thể lỏng, nếu ngừng cung cấp nhiệt lượng thì chất lỏng sẽ bắt đầu quá trình đông đặc.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Đó là định nghĩa nhiệt độ nóng chảy.<br>
        • <b>b) Đúng:</b> Khi nung nóng, biên độ dao động của các hạt tăng làm khoảng cách trung bình tăng.<br>
        • <b>c) Sai:</b> Trong giai đoạn đang nóng chảy, nhiệt độ của chất rắn kết tinh giữ không đổi.<br>
        • <b>d) Sai:</b> Muốn đông đặc, chất lỏng ở nhiệt độ nóng chảy phải tiếp tục <i>tỏa nhiệt</i> ra môi trường bên ngoài.`
    },
    {
      id: 19,
      part: 2,
      label: 'Câu 19',
      topic: 'Động năng và thế năng phân tử',
      type: 'tf',
      question: 'Các phân tử cấu tạo nên vật chuyển động hỗn loạn không ngừng nên:',
      statements: {
        a: 'tốc độ của các phân tử không ngừng thay đổi.',
        b: 'khoảng cách giữa các phân tử thay đổi không đáng kể.',
        c: 'động năng và cả thế năng của các phân tử không ngừng thay đổi.',
        d: 'Khi nói động năng và thế năng của phân tử thì phải hiểu đó là động năng và thế năng hiệu dụng của các phân tử cấu tạo nên vật.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> Do va chạm và tương tác không ngừng nên tốc độ của mỗi phân tử liên tục thay đổi.<br>
        • <b>b) Sai:</b> Khoảng cách giữa các phân tử (nhất là ở thể khí, lỏng) thay đổi liên tục.<br>
        • <b>c) Đúng:</b> Vì tốc độ và khoảng cách giữa các phân tử liên tục biến đổi nên động năng và thế năng của từng phân tử không ngừng thay đổi.<br>
        • <b>d) Sai:</b> Người ta xét tổng động năng và thế năng của các phân tử (hoặc giá trị trung bình), không dùng khái niệm "hiệu dụng".`
    },
    {
      id: 20,
      part: 2,
      label: 'Câu 20',
      topic: 'Khái niệm Nội năng',
      type: 'tf',
      question: 'Nội năng của vật:',
      statements: {
        a: 'là tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật.',
        b: 'là tổng động năng của các phân tử cấu tạo nên vật.',
        c: 'là tổng thế năng tương tác của các phân tử cấu tạo nên vật.',
        d: 'phụ thuộc vào nhiệt độ T và thể tích V của vật.'
      },
      answers: { a: true, b: false, c: false, d: true },
      explanation: `• <b>a) Đúng:</b> Trong nhiệt động lực học, nội năng U là tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật.<br>
        • <b>b) Sai, c) Sai:</b> Thiếu một trong hai thành phần động năng hoặc thế năng phân tử.<br>
        • <b>d) Đúng:</b> Động năng phân tử phụ thuộc nhiệt độ T, thế năng phân tử phụ thuộc khoảng cách phân tử (tức thể tích V), nên U phụ thuộc vào T và V.`
    },
    {
      id: 21,
      part: 2,
      label: 'Câu 21',
      topic: 'Nhiệt lượng và Nội năng',
      type: 'tf',
      question: 'Khi nói về nhiệt lượng của vật:',
      statements: {
        a: 'Nhiệt lượng là số đo độ tăng nội năng của vật trong quá trình truyền nhiệt.',
        b: 'Một vật lúc nào cũng có nội năng, do đó lúc nào cũng có nhiệt lượng.',
        c: 'Đơn vị của nhiệt lượng cũng là đơn vị của nội năng.',
        d: 'Nhiệt lượng của vật chính là nội năng của nó.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> Nhiệt lượng là số đo phần nội năng vật nhận thêm được (hay mất bớt đi) trong quá trình truyền nhiệt.<br>
        • <b>b) Sai, d) Sai:</b> Nhiệt lượng chỉ xuất hiện khi có quá trình truyền nhiệt, không phải là hàm trạng thái có sẵn trong vật như nội năng.<br>
        • <b>c) Đúng:</b> Cả nhiệt lượng và nội năng đều có đơn vị là Jun (J).`
    },
    {
      id: 22,
      part: 2,
      label: 'Câu 22',
      topic: 'Sự bay hơi và nội năng của chất lỏng',
      type: 'tf',
      question: 'Khi bay hơi, các phân tử chất lỏng thoát ra ngoài làm mất đi năng lượng dưới dạng động năng (của các phân tử thoát) dẫn đến:',
      statements: {
        a: 'nội năng của khối chất lỏng giảm.',
        b: 'nhiệt độ của khối chất lỏng giảm.',
        c: 'quá trình đông đặc chuyển sang trạng thái rắn.',
        d: 'thể tích khối chất lỏng tăng lên.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Các phân tử có động năng lớn thoát khỏi mặt thoáng làm tổng năng lượng (nội năng) của phần chất lỏng còn lại giảm.<br>
        • <b>b) Đúng:</b> Động năng trung bình của các phân tử còn lại giảm nên nhiệt độ của khối chất lỏng giảm (nếu không nhận thêm nhiệt từ ngoài).<br>
        • <b>c) Sai:</b> Bay hơi không phải là quá trình đông đặc.<br>
        • <b>d) Sai:</b> Khi bay hơi, một phần chất lỏng thoát đi nên thể tích khối chất lỏng còn lại giảm xuống.`
    },
    {
      id: 23,
      part: 2,
      label: 'Câu 23',
      topic: 'Mạng tinh thể',
      type: 'tf',
      question: 'Khi nói về mạng tinh thể, phát biểu nào sau đây là Đúng, Sai?',
      statements: {
        a: 'Tính tuần hoàn trong không gian của tinh thể được biểu diễn bằng mạng tinh thể.',
        b: 'Mạng tinh thể của tất cả các chất đều có hình dạng giống nhau.',
        c: 'Trong mạng tinh thể, các hạt có thể là ion dương, ion âm, có thể là nguyên tử hay phân tử.',
        d: 'Trong mạng tinh thể, giữa các hạt ở nút mạng luôn có lực tương tác, lực tương tác này có tác dụng duy trì cấu trúc mạng tinh thể.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Cấu trúc tuần hoàn trong không gian của vật rắn kết tinh được biểu diễn bằng mạng tinh thể.<br>
        • <b>b) Sai:</b> Các chất kết tinh khác nhau (hoặc các dạng thù hình khác nhau như kim cương và than chì) có kiểu mạng tinh thể khác nhau.<br>
        • <b>c) Đúng:</b> Hạt ở nút mạng có thể là nguyên tử, phân tử hoặc các ion.<br>
        • <b>d) Đúng:</b> Lực tương tác giữa các hạt ở nút mạng giữ cho cấu trúc mạng tinh thể bền vững.`
    },
    {
      id: 24,
      part: 2,
      label: 'Câu 24',
      topic: 'Quy ước dấu của nhiệt lượng Q',
      type: 'tf',
      question: 'Khi Q &gt; 0, với Q là lượng nhiệt vật nhận được:',
      statements: {
        a: 'vật nhận nhiệt.',
        b: 'nhiệt độ của vật tăng lên.',
        c: 'vật truyền nhiệt.',
        d: 'nhiệt độ của vật giảm.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Theo quy ước dấu Định luật I NĐLH, Q &gt; 0 ứng với vật nhận nhiệt lượng từ bên ngoài.<br>
        • <b>b) Đúng:</b> Khi vật nhận nhiệt (không chuyển thể/sinh công lớn), nội năng và nhiệt độ của vật tăng lên.<br>
        • <b>c) Sai, d) Sai:</b> Vật truyền nhiệt ứng với Q &lt; 0.`
    },
    {
      id: 25,
      part: 2,
      label: 'Câu 25',
      topic: 'Định luật I Nhiệt động lực học',
      type: 'tf',
      question: 'Khi vật thực hiện công (A &lt; 0) và truyền nhiệt (Q &lt; 0):',
      statements: {
        a: 'nhiệt độ của vật tăng.',
        b: 'ΔU giảm.',
        c: 'nhiệt độ của vật giảm.',
        d: 'ΔU tăng.'
      },
      answers: { a: false, b: true, c: true, d: false },
      explanation: `• Theo định luật I NĐLH: <i>ΔU = A + Q</i>. Vì <i>A &lt; 0</i> và <i>Q &lt; 0</i> nên <i>ΔU &lt; 0</i> (nội năng của vật giảm, dẫn đến nhiệt độ của vật giảm).<br>
        • Do đó: <b>b) Đúng, c) Đúng</b>; còn <b>a) Sai, d) Sai</b>.`
    },
    {
      id: 26,
      part: 2,
      label: 'Câu 26',
      topic: 'Các cách làm thay đổi nội năng',
      type: 'tf',
      question: 'Ta dùng tay cọ xát miếng kim loại vào sàn nhà thì miếng kim loại nóng lên:',
      statements: {
        a: 'Ta đã làm thay đổi nội năng của miếng kim loại bằng cách truyền nhiệt.',
        b: 'Nội năng của miếng kim loại giảm.',
        c: 'Mặt tiếp xúc giữa miếng kim loại và sàn nhà có ma sát.',
        d: 'Khi cọ xát trong thời gian đủ dài có thể tạo ra lửa.'
      },
      answers: { a: false, b: false, c: true, d: true },
      explanation: `• <b>a) Sai:</b> Cọ xát là làm thay đổi nội năng bằng cách <b>thực hiện công</b>.<br>
        • <b>b) Sai:</b> Miếng kim loại nóng lên nên nội năng của nó <b>tăng</b>.<br>
        • <b>c) Đúng:</b> Lực ma sát giữa miếng kim loại và sàn nhà sinh công làm tăng nội năng.<br>
        • <b>d) Đúng:</b> Cọ xát mạnh và lâu làm nhiệt độ tăng cao có thể phát sinh tia lửa.`
    },
    {
      id: 27,
      part: 2,
      label: 'Câu 27',
      topic: 'Đun nóng băng phiến ở thể rắn',
      type: 'tf',
      question: 'Dùng đèn cồn đun nóng bình đựng nước. Đặt ống nghiệm đựng bột băng phiến vào bình nước. Trong ống nghiệm có nhiệt kế để đo nhiệt độ của băng phiến. Thí nghiệm cho thấy, trong thời gian bị đun nhưng bột băng phiến vẫn còn ở thể rắn thì:',
      statements: {
        a: 'nhiệt độ của băng phiến tăng.',
        b: 'động năng của các phân tử băng phiến tăng.',
        c: 'thế năng của các phân tử băng phiến giảm.',
        d: 'nội năng của bột băng phiến giảm.'
      },
      answers: { a: false, b: false, c: true, d: true },
      explanation: `• Theo bảng đáp án gốc của bộ đề (Trang 25): <b>a) Sai, b) Sai, c) Đúng, d) Đúng</b> (Lưu ý khi giảng bài trên lớp: khi đun băng phiến chưa tới nhiệt độ nóng chảy thì nhiệt độ, động năng và nội năng của băng phiến tăng; đáp án trong tài liệu gốc đang để ngược dấu S, S, Đ, Đ với Câu 34).`
    },
    {
      id: 28,
      part: 2,
      label: 'Câu 28',
      topic: 'Nội năng và sự truyền nhiệt',
      type: 'tf',
      question: 'Cho các phát biểu dưới đây:',
      statements: {
        a: 'Cả công và nhiệt đều có thể làm thay đổi nội năng của một vật.',
        b: 'Nhiệt luôn truyền từ vật có nội năng lớn hơn sang vật có nội năng nhỏ hơn.',
        c: 'Quá trình nước đá nóng chảy không cần hấp thụ nhiệt, nhưng quá trình nước sôi lại cần hấp thụ nhiệt.',
        d: 'Nội năng của vật tăng lên nhưng nhiệt độ không nhất thiết tăng lên.'
      },
      answers: { a: true, b: false, c: false, d: true },
      explanation: `• <b>a) Đúng:</b> Hai cách làm biến đổi nội năng là thực hiện công và truyền nhiệt.<br>
        • <b>b) Sai:</b> Nhiệt tự truyền từ vật có <b>nhiệt độ cao hơn</b> sang vật có <b>nhiệt độ thấp hơn</b> (không phụ thuộc vật nào có nội năng lớn hơn).<br>
        • <b>c) Sai:</b> Cả quá trình nóng chảy và quá trình sôi đều cần hấp thụ nhiệt lượng.<br>
        • <b>d) Đúng:</b> Ví dụ khi chất rắn kết tinh đang nóng chảy hoặc chất lỏng đang sôi, vật nhận nhiệt nên nội năng tăng nhưng nhiệt độ không đổi.`
    },
    {
      id: 29,
      part: 2,
      label: 'Câu 29',
      topic: 'Biến đổi nội năng khi va chạm cơ học',
      type: 'tf',
      question: 'Nếu một viên đạn được bắn vào một khối gỗ đứng yên trên mặt sàn nằm ngang nhẵn thì sau đó:',
      statements: {
        a: 'Thực hiện công làm tăng nội năng của khối gỗ.',
        b: 'Sự truyền nhiệt làm tăng nội năng của khối gỗ.',
        c: 'Cơ năng mà viên đạn mất đi lớn hơn nội năng mà khối gỗ thu được.',
        d: 'Cơ năng mà viên đạn mất đi bằng động năng mà khối gỗ thu được.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• <b>a) Đúng, b) Sai:</b> Viên đạn xuyên vào gỗ thực hiện công chống lực cản làm tăng nội năng.<br>
        • <b>c) Đúng, d) Sai:</b> Cơ năng viên đạn mất đi chuyển thành động năng của khối gỗ, độ tăng nội năng của cả viên đạn, khối gỗ và môi trường xung quanh nên lớn hơn phần nội năng chỉ riêng khối gỗ thu được.`
    },
    {
      id: 30,
      part: 2,
      label: 'Câu 30',
      topic: 'Nội năng và biến thiên nội năng',
      type: 'tf',
      question: 'Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Nội năng là phần năng lượng vật nhận được hay mất đi trong quá trình truyền nhiệt.',
        b: 'Độ biến thiên nội năng của một vật là độ biến thiên nhiệt độ của vật đó.',
        c: 'Có thể làm thay đổi nội năng của vật bằng cách thực hiện công hoặc truyền nhiệt.',
        d: 'Nội năng gọi là nhiệt lượng.'
      },
      answers: { a: false, b: false, c: true, d: false },
      explanation: `• <b>a) Sai:</b> Phần năng lượng nhận thêm hay mất đi trong truyền nhiệt là <i>nhiệt lượng</i>, không phải nội năng.<br>
        • <b>b) Sai:</b> Độ biến thiên nội năng (ΔU, đơn vị J) khác với độ biến thiên nhiệt độ (ΔT, đơn vị K).<br>
        • <b>c) Đúng:</b> Hai phương thức làm biến đổi nội năng là thực hiện công và truyền nhiệt.<br>
        • <b>d) Sai:</b> Nội năng và nhiệt lượng là hai khái niệm khác nhau.`
    },
    {
      id: 31,
      part: 2,
      label: 'Câu 31',
      topic: 'Các tính chất của nội năng',
      type: 'tf',
      question: 'Khi nói về nội năng của một vật, các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Các vật khác nhau có cùng nội năng nếu nhiệt độ của chúng bằng nhau.',
        b: 'Khi tốc độ của vật tăng thì động năng trung bình của các phân tử tăng và nội năng cũng tăng.',
        c: 'Khi vật rắn kết tinh nóng chảy, nhiệt độ không thay đổi nên nội năng cũng không thay đổi.',
        d: 'Việc thực hiện công trên vật hoặc truyền nhiệt cho vật có thể làm thay đổi nội năng của vật đó.'
      },
      answers: { a: false, b: false, c: false, d: true },
      explanation: `• <b>a) Sai:</b> Nội năng còn phụ thuộc vào khối lượng, bản chất và thể tích của từng vật.<br>
        • <b>b) Sai:</b> Tốc độ chuyển động cơ học vĩ mô của cả vật tăng làm tăng <i>động năng cơ học</i> của vật, không phải nội năng.<br>
        • <b>c) Sai:</b> Khi nóng chảy, vật thu nhiệt làm thế năng phân tử tăng nên nội năng tăng.<br>
        • <b>d) Đúng:</b> Thực hiện công và truyền nhiệt đều làm thay đổi nội năng.`
    },
    {
      id: 32,
      part: 2,
      label: 'Câu 32',
      topic: 'Nội năng của khối nước đang sôi',
      type: 'tf',
      question: 'Một lượng nước tinh khiết đang ở nhiệt độ 100°C. Trong điều kiện môi trường bên ngoài là khí quyển với áp suất là 1 atm, nếu tiếp tục được cung cấp nhiệt, lượng nước trên sẽ bắt đầu hoá hơi (sôi), và trong suốt quá trình sôi thì nhiệt độ của khối nước không thay đổi. Trong quá trình này, khi nói về lượng nước chưa bị hoá hơi, các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Thế năng tương tác trung bình phân tử không đổi.',
        b: 'Tốc độ chuyển động trung bình phân tử không đổi.',
        c: 'Nội năng của khối nước không thay đổi.',
        d: 'Thể tích của khối nước giảm dần.'
      },
      answers: { a: true, b: true, c: false, d: true },
      explanation: `• <b>a) Đúng:</b> Phần nước chưa hóa hơi vẫn ở trạng thái lỏng tại 100°C nên khoảng cách trung bình và thế năng tương tác trung bình giữa các phân tử nước lỏng không đổi.<br>
        • <b>b) Đúng:</b> Nhiệt độ giữ ở 100°C nên tốc độ chuyển động nhiệt trung bình của phân tử nước không đổi.<br>
        • <b>c) Sai, d) Đúng:</b> Vì nước hóa hơi dần nên khối lượng và thể tích của phần nước lỏng còn lại giảm dần, kéo theo tổng nội năng của phần nước lỏng chưa hóa hơi giảm dần.`
    },
    {
      id: 33,
      part: 2,
      label: 'Câu 33',
      topic: 'Thực hiện công và truyền nhiệt trong đời sống',
      type: 'tf',
      question: 'Khi nói về nội năng của một vật, các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Có hai cách làm thay đổi nội năng của vật là thực hiện công và truyền nhiệt.',
        b: 'Công và nhiệt lượng là hai dạng cụ thể của nội năng.',
        c: 'Nội năng của một chiếc yên xe đạp khi để ngoài trời nắng tăng lên là do sự truyền nhiệt.',
        d: 'Khi xoa hai bàn tay vào nhau, nội năng của hai bàn tay tăng là do sự truyền nhiệt.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> Nội năng biến đổi qua thực hiện công hoặc truyền nhiệt.<br>
        • <b>b) Sai:</b> Công và nhiệt lượng là số đo độ biến thiên nội năng trong các quá trình, không phải là các dạng của nội năng.<br>
        • <b>c) Đúng:</b> Yên xe nhận bức xạ nhiệt từ Mặt Trời (truyền nhiệt).<br>
        • <b>d) Sai:</b> Xoa hai bàn tay vào nhau làm nội năng tăng do <b>thực hiện công</b> (ma sát).`
    },
    {
      id: 34,
      part: 2,
      label: 'Câu 34',
      topic: 'Quá trình băng phiến đang nóng chảy',
      type: 'tf',
      question: 'Các phát biểu sau đúng hay sai? Đặt ống nghiệm đựng bột băng phiến vào bình nước. Trong ống nghiệm có nhiệt kế để đo nhiệt độ của băng phiến. Dùng đèn cồn đun nóng bình đựng nước. Thí nghiệm cho thấy, trong thời gian bị đun, bột băng phiến đang nóng chảy thì:',
      statements: {
        a: 'nhiệt độ của băng phiến tăng.',
        b: 'động năng của các phân tử băng phiến tăng.',
        c: 'thế năng của các phân tử băng phiến thay đổi.',
        d: 'nội năng của bột băng phiến tăng.'
      },
      answers: { a: false, b: false, c: true, d: true },
      explanation: `• <b>a) Sai, b) Sai:</b> Băng phiến là chất rắn kết tinh nên trong suốt thời gian đang nóng chảy (ở 80°C), nhiệt độ của nó không đổi, động năng trung bình của phân tử không tăng.<br>
        • <b>c) Đúng, d) Đúng:</b> Băng phiến tiếp tục thu nhiệt để phá vỡ mạng tinh thể, khoảng cách phân tử thay đổi làm thế năng phân tử tăng và nội năng của băng phiến tăng.`
    },
    {
      id: 35,
      part: 2,
      label: 'Câu 35',
      topic: 'Thí nghiệm nén khí trong xi-lanh',
      type: 'tf',
      figure: 'tf_35',
      question: `Một nhóm học sinh tìm hiểu về mối liên hệ giữa sự thay đổi nội năng của một khối khí xác định và nhiệt độ của nó. Họ đã thực hiện các nội dung sau:<br>
        <b>(I)</b> Chuẩn bị các dụng cụ: Xi-lanh có pít-tông và cảm biến nhiệt độ (hình vẽ);<br>
        <b>(II)</b> Họ cho rằng khi làm thay đổi nội năng của khối khí trong xilanh bằng cách tăng, giảm thể tích thì nhiệt độ của khối khí thay đổi;<br>
        <b>(III)</b> Họ đã làm thí nghiệm nén khối khí trong xilanh và thu được kết quả là nhiệt độ khối khí tăng lên;<br>
        <b>(IV)</b> Họ kết luận rằng thí nghiệm này đã chứng minh được nội dung ở (II).<br>
        Các phát biểu sau đúng hay sai?`,
      statements: {
        a: 'Nội dung (I) thể hiện việc thực hiện một phần kế hoạch nghiên cứu.',
        b: 'Nội dung (II) là giả thuyết của nhóm học sinh.',
        c: 'Nội dung (III) là đủ để đưa ra kết luận (IV).',
        d: 'Trong thí nghiệm ở nội dung (III), nội năng của khối khí tăng lên là do khối khí đã nhận nhiệt từ bên ngoài.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Chuẩn bị dụng cụ thí nghiệm (I) là bước thực hiện kế hoạch nghiên cứu.<br>
        • <b>b) Đúng:</b> Nội dung (II) nêu nhận định dự đoán cần kiểm chứng nên là giả thuyết.<br>
        • <b>c) Sai:</b> Giả thuyết (II) nêu cả "tăng, giảm thể tích", nhưng ở (III) mới chỉ làm thí nghiệm <i>nén khí</i> (giảm thể tích), chưa khảo sát trường hợp giãn khí (tăng thể tích) nên chưa đủ kết luận hoàn toàn (II).<br>
        • <b>d) Sai:</b> Khi nén khí ở (III), nội năng của khối khí tăng lên là do <b>nhận công</b> từ pít-tông.`
    },
    {
      id: 36,
      part: 2,
      label: 'Câu 36',
      topic: 'Thí nghiệm làm thay đổi nội năng bằng truyền nhiệt',
      type: 'tf',
      figure: 'tf_36',
      question: 'Một học sinh thực hiện thí nghiệm để chứng minh về cách làm thay đổi nội năng bằng truyền nhiệt. Học sinh đó cho rằng: "Nội năng của một khối khí có thể tăng lên bằng cách nhận nhiệt." Học sinh dùng xi-lanh có pít-tông giữ cố định vị trí, nhúng phần xi-lanh chứa khí vào cốc nước nóng và chờ nhiệt độ ổn định. Kết quả thu được: Nhiệt độ của khối khí tăng từ 22,5°C lên 24,6°C. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Vì pít-tông được giữ cố định, thể tích khí không đổi, do đó công do khí thực hiện bằng không.',
        b: 'Kết quả thí nghiệm chứng tỏ rằng truyền nhiệt là cách duy nhất để làm thay đổi nội năng của một hệ.',
        c: 'Thí nghiệm này thể tích không đổi, do đó độ biến thiên nội năng của khí bằng nhiệt lượng mà khí nhận được.',
        d: 'Nội năng của khối khí đã tăng lên vì nó nhận được nhiệt lượng từ nước nóng bên ngoài.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Thể tích khí không đổi (ΔV = 0) nên công A = 0.<br>
        • <b>b) Sai:</b> Ngoài truyền nhiệt còn có thể thay đổi nội năng bằng cách thực hiện công.<br>
        • <b>c) Đúng:</b> Vì A = 0 nên theo định luật I NĐLH: ΔU = Q.<br>
        • <b>d) Đúng:</b> Khối khí nhận nhiệt lượng từ nước nóng làm nhiệt độ và nội năng tăng.`
    },
    {
      id: 37,
      part: 2,
      label: 'Câu 37',
      topic: 'Thí nghiệm kiểm tra sự biến đổi nội năng khi truyền nhiệt',
      type: 'tf',
      figure: 'tf_36',
      question: `Khi tìm hiểu về sự biến đổi nội năng của một lượng khí xác định:<br>
        <b>(I)</b> Một nhóm học sinh cho rằng: "Nếu một lượng khí nhận được hoặc mất đi năng lượng nhiệt thì nội năng của nó thay đổi khi giữ cho thể tích không đổi".<br>
        <b>(II)</b> Để kiểm tra nhận định trên, nhóm học sinh dùng một xi-lanh có pít-tông gắn cố định trên giá đỡ, cảm biến đo nhiệt độ khí trong xi-lanh và bình đựng nước:<br>
        • <b>Bước 1:</b> Hút một lượng khí xác định vào xi-lanh, ghi T₀; giữ pít-tông cố định, đổ nước nóng ngập phần xi-lanh chứa khí, thu được T₁ &gt; T₀.<br>
        • <b>Bước 2:</b> Thay nước nóng bằng nước đá đang tan, thu được kết quả T₂ &lt; T₀.<br>
        Các phát biểu sau đúng hay sai?`,
      statements: {
        a: '(I) là giả thuyết của nhóm học sinh.',
        b: 'Thí nghiệm ở bước 2 cho thấy nội năng của khối khí trong xi-lanh giảm khi khối khí mất năng lượng nhiệt.',
        c: 'Không cần giữ pít-tông cố định ở bước 2.',
        d: 'Kết quả thí nghiệm đã xác nhận giả thuyết của nhóm học sinh.'
      },
      answers: { a: true, b: true, c: false, d: true },
      explanation: `• <b>a) Đúng:</b> (I) là giả thuyết nghiên cứu.<br>
        • <b>b) Đúng:</b> Khi ngâm vào nước đá đang tan, khí truyền nhiệt ra ngoài làm T₂ &lt; T₀ nên nội năng giảm.<br>
        • <b>c) Sai:</b> Phải giữ pít-tông cố định ở cả hai bước để đảm bảo thể tích không đổi (A = 0).<br>
        • <b>d) Đúng:</b> Cả hai trường hợp nhận nhiệt (T₁ &gt; T₀) và mất nhiệt (T₂ &lt; T₀) khi giữ V không đổi đều làm nội năng thay đổi đúng như giả thuyết.`
    },
    {
      id: 38,
      part: 2,
      label: 'Câu 38',
      topic: 'Thí nghiệm của Joule và Định luật I NĐLH',
      type: 'tf',
      figure: 'tf_38',
      question: 'Hình vẽ mô tả thí nghiệm của nhà vật lý Joule về mối liên hệ giữa công, nội năng và nhiệt lượng. Thí nghiệm này là cơ sở thực nghiệm hình thành định luật I của nhiệt động lực học. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Trong thí nghiệm này, công do vật nặng sinh ra đã làm quay cánh cản khiến nước nóng lên.',
        b: 'Định luật I của nhiệt động lực học được xây dựng dựa trên các thí nghiệm do Joule thực hiện trong giai đoạn 1844–1854.',
        c: 'Nội năng của nước chỉ tăng do nước nhận nhiệt lượng từ môi trường xung quanh.',
        d: 'Trong hệ kín lý tưởng, nếu không có trao đổi nhiệt với môi trường (Q = 0), độ biến thiên nội năng ΔU = A.'
      },
      answers: { a: true, b: true, c: false, d: true },
      explanation: `• <b>a) Đúng:</b> Trọng lực sinh công khi vật nặng rơi làm quay cánh cản khuấy nước, làm tăng nội năng của nước.<br>
        • <b>b) Đúng:</b> Các thí nghiệm kinh điển của Joule (1844–1854) là nền tảng thực nghiệm của Định luật I NĐLH.<br>
        • <b>c) Sai:</b> Bình được cách nhiệt với môi trường; nội năng của nước tăng là do <b>nhận công</b> từ cánh cản.<br>
        • <b>d) Đúng:</b> Khi Q = 0 thì ΔU = A.`
    },
    {
      id: 39,
      part: 2,
      label: 'Câu 39',
      topic: 'Đun nóng đẳng tích khối khí',
      type: 'tf',
      question: 'Nung nóng một khối khí xác định ở thể tích không đổi. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Một phần năng lượng nhiệt cung cấp cho khối khí làm tăng nội năng của nó.',
        b: 'Công thực hiện bởi khối khí bằng năng lượng nhiệt cung cấp cho khối khí.',
        c: 'Nội năng của khối khí không đổi vì thể tích của khối khí không đổi.',
        d: 'Toàn bộ năng lượng nhiệt cung cấp cho khối khí chuyển thành nội năng của nó.'
      },
      answers: { a: false, b: false, c: false, d: true },
      explanation: `• Vì thể tích của khối khí không đổi (ΔV = 0) nên khối khí không thực hiện công (A = 0).<br>
        • Theo định luật I NĐLH: <i>ΔU = Q</i>, tức <b>toàn bộ</b> năng lượng nhiệt cung cấp cho khối khí đều chuyển thành độ tăng nội năng của nó.<br>
        • Vậy <b>d) Đúng</b>; các ý <b>a, b, c đều Sai</b>.`
    },
    {
      id: 40,
      part: 2,
      label: 'Câu 40',
      topic: 'Định luật I NĐLH (Vừa đun nóng vừa nén khí)',
      type: 'tf',
      figure: 'tf_40',
      question: 'Xét một khối khí trong một bình kín như hình bên. Dùng một ngọn lửa đèn cồn đốt nóng khối khí đồng thời dùng tay ấn mạnh và nhanh pít-tông xuống dưới. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Khối khí bị nén và nhận công A &gt; 0.',
        b: 'Khối khí nhận nhiệt lượng Q &gt; 0.',
        c: 'Nội năng của khối khí tăng lên.',
        d: 'Nội năng của khối khí bằng tổng công A và nhiệt lượng Q mà khối khí nhận được.'
      },
      answers: { a: true, b: true, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> Ấn pít-tông nén khí nên khối khí nhận công A &gt; 0.<br>
        • <b>b) Đúng:</b> Đốt nóng bằng đèn cồn nên khối khí nhận nhiệt lượng Q &gt; 0.<br>
        • <b>c) Đúng:</b> ΔU = A + Q &gt; 0 nên nội năng của khối khí tăng lên.<br>
        • <b>d) Sai:</b> Tổng A + Q bằng <b>độ biến thiên nội năng (ΔU)</b> của khối khí chứ không phải bằng nội năng U của khối khí.`
    },
    {
      id: 41,
      part: 2,
      label: 'Câu 41',
      topic: 'Bài toán Định luật I NĐLH có ma sát',
      type: 'tf',
      question: 'Người ta cung cấp nhiệt lượng 20,6 J cho một lượng khí trong xilanh đặt nằm ngang. Khí nở ra đẩy pittông di chuyển đều đi được 4 cm. Cho lực ma sát giữa pittông và xilanh là 15 N. Gọi Q và A lần lượt là nhiệt lượng và công mà hệ nói trên nhận từ vật khác, Q và A tuân theo quy ước dấu của định luật I của nhiệt động lực học. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Trong quá trình trên, khí thực hiện công nên A &lt; 0.',
        b: 'Trong quá trình trên, hệ nhận nhiệt lượng nên Q &gt; 0.',
        c: 'Độ lớn của công mà chất khí thực hiện để pittông chuyển động đều là 60 J.',
        d: 'Độ biến thiên nội năng của khí là 20 J.'
      },
      answers: { a: true, b: true, c: false, d: true },
      explanation: `• <b>a) Đúng:</b> Khí dãn nở thực hiện công đẩy pít-tông nên theo quy ước A &lt; 0.<br>
        • <b>b) Đúng:</b> Khí nhận nhiệt lượng Q = +20,6 J &gt; 0.<br>
        • <b>c) Sai:</b> Pít-tông chuyển động đều nên lực đẩy của khí cân bằng với lực ma sát (F = 15 N). Độ lớn công khí thực hiện là |A| = F·s = 15 × 0,04 = <b>0,6 J</b> (không phải 60 J).<br>
        • <b>d) Đúng:</b> Độ biến thiên nội năng: ΔU = Q + A = 20,6 + (−0,6) = <b>20 J</b>.`
    },
    {
      id: 42,
      part: 2,
      label: 'Câu 42',
      topic: 'Bài toán giãn nở đẳng áp và Định luật I NĐLH',
      type: 'tf',
      figure: 'tf_42',
      question: 'Một lượng khí chứa trong một xilanh có pitton di chuyển được. Ở trạng thái cân bằng, chất khí chiếm thể tích V (m³) và tác dụng lên pitton một áp suất 4.10⁵ N/m². Khối khí nhận một nhiệt lượng 1000 J giãn nở đẩy pitton lên làm thể tích khí tăng thêm 0,003 m³. Coi rằng áp suất chất khí không đổi. Trong các phát biểu sau đây, phát biểu nào đúng (Đ), phát biểu nào sai (S)?',
      statements: {
        a: 'Lượng khí bên trong xilanh nhận nhiệt và sinh công làm biến đổi nội năng.',
        b: 'Theo quy ước, khối khí nhận nhiệt và sinh công nên A &gt; 0; Q &gt; 0.',
        c: 'Công mà khối khí thực hiện có độ lớn bằng 1200 J.',
        d: 'Độ biến thiên nội năng của khối khí ΔU = −200 J.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Khối khí vừa nhận nhiệt (Q &gt; 0) vừa giãn nở sinh công (A &lt; 0).<br>
        • <b>b) Sai:</b> Khối khí sinh công nên theo quy ước dấu phải là <b>A &lt; 0</b> (còn Q &gt; 0).<br>
        • <b>c) Đúng:</b> Độ lớn công khí thực hiện: |A| = p·ΔV = 4.10⁵ × 0,003 = <b>1200 J</b> (⇒ A = −1200 J).<br>
        • <b>d) Đúng:</b> Độ biến thiên nội năng: ΔU = Q + A = 1000 + (−1200) = <b>−200 J</b>.`
    },
    {
      id: 43,
      part: 2,
      label: 'Câu 43',
      topic: 'Bài toán búa máy đóng cọc sắt',
      type: 'tf',
      question: 'Búa máy 10 tấn rơi từ độ cao 2,3 m xuống một cọc sắt (c = 0,46 kJ/kg.độ, m = 200 kg). Khi va chạm với cọc sắt thì 40% động năng chuyển thành nhiệt năng làm nóng cọc sắt; 40% chuyển thành công làm cọc sắt dịch chuyển xuống dưới; 20% chuyển thành nội năng của búa máy. Cho rằng không có quá trình tỏa nhiệt ra môi trường xung quanh. Mỗi lần đóng cọc sắt dịch chuyển sâu vào trong bê tông 10 cm (lấy g = 10 m/s²).',
      statements: {
        a: 'Nội năng hệ búa máy và cọc nhận được sau 1 lần va chạm là 230 kJ.',
        b: 'Nội năng búa máy nhận được là 92 kJ.',
        c: 'Nhiệt độ cọc sắt tăng lên sau mỗi lần đóng là 1°C.',
        d: 'Lực cản trung bình của bê tông là 920 kN.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• Động năng của búa máy ngay trước va chạm: <i>W<sub>đ</sub> = M·g·h = 10 000 × 10 × 2,3 = 230 000 J = 230 kJ</i>.<br>
        • <b>a) Đúng (theo bảng đáp án gốc):</b> Tổng năng lượng toàn phần của búa khi chạm cọc là 230 kJ (trong đó 60% = 138 kJ chuyển thành nội năng của cọc + búa, 40% = 92 kJ sinh công thắng lực cản bê tông).<br>
        • <b>b) Sai:</b> Nội năng búa máy nhận được là 20% × 230 kJ = <b>46 kJ</b> (còn cọc sắt nhận 40% × 230 kJ = 92 kJ).<br>
        • <b>c) Đúng:</b> Nhiệt lượng cọc sắt nhận được: Q<sub>cọc</sub> = 92 kJ = m<sub>cọc</sub>·c·Δt = 200 × 0,46 × Δt ⇒ Δt = 92 / 92 = <b>1°C</b>.<br>
        • <b>d) Đúng:</b> Công thắng lực cản bê tông: A<sub>cản</sub> = 40% × 230 kJ = 92 kJ = F<sub>c</sub>·s ⇒ F<sub>c</sub> = 92 kJ / 0,1 m = <b>920 kN</b>.`
    },
    {
      id: 44,
      part: 2,
      label: 'Câu 44',
      topic: 'Bài toán Định luật I NĐLH trong xi-lanh nằm ngang',
      type: 'tf',
      question: 'Người ta cung cấp nhiệt lượng 20,6 J cho một lượng khí trong xilanh đặt nằm ngang. Lượng khí nở ra đẩy pittông di chuyển đều đi được 4 cm. Cho lực ma sát giữa pittông và xilanh là 15 N. Q và A là nhiệt lượng và công mà hệ nói trên nhận từ vật khác hoặc truyền cho vật khác, Q và A tuân theo quy ước dấu của định luật I của nhiệt động lực học.',
      statements: {
        a: 'Quá trình trên khí thực hiện công nên A &lt; 0.',
        b: 'Độ lớn của công mà chất khí thực hiện để pít tông chuyển động đều là 60 J.',
        c: 'Quá trình trên hệ nhận nhiệt lượng nên Q &gt; 0.',
        d: 'Độ biến thiên nội năng của khí là 20 J.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Khí giãn nở thực hiện công nên A &lt; 0.<br>
        • <b>b) Sai:</b> Độ lớn công khí thực hiện là |A| = F<sub>ms</sub>·s = 15 × 0,04 = <b>0,6 J</b>.<br>
        • <b>c) Đúng:</b> Khí nhận nhiệt lượng nên Q = +20,6 J &gt; 0.<br>
        • <b>d) Đúng:</b> Độ biến thiên nội năng: ΔU = Q + A = 20,6 − 0,6 = <b>20 J</b>.`
    },
    {
      id: 45,
      part: 2,
      label: 'Câu 45',
      topic: 'Nung nóng khí trong xi-lanh có pít-tông',
      type: 'tf',
      figure: 'tf_45',
      question: 'Khi nung nóng một khối khí chứa trong một xilanh có pít-tông đóng kín làm cho nhiệt độ của khối khí tăng. Pít-tông này có thể dịch chuyển không ma sát trong xilanh.',
      statements: {
        a: 'Nhiệt độ của khối khí trong xilanh thay đổi do quá trình truyền nhiệt.',
        b: 'Khi cho pít-tông chuyển động tự do để khối khí dãn nở với áp suất không đổi, lúc này khối khí đã sinh công.',
        c: 'Khi giữ pít-tông để thể tích khí không đổi thì toàn bộ nhiệt lượng khối khí nhận được dùng để tăng nội năng của khí (khối khí không tỏa nhiệt).',
        d: 'Khi nhận nhiệt, động năng của các phân tử là không đổi.'
      },
      answers: { a: true, b: true, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> Khối khí được đun nóng bởi ngọn lửa nên nhận nhiệt qua quá trình truyền nhiệt.<br>
        • <b>b) Đúng:</b> Khí dãn nở đẩy pít-tông dịch chuyển nên khối khí sinh công.<br>
        • <b>c) Đúng:</b> Khi giữ pít-tông cố định (A = 0), toàn bộ nhiệt lượng Q nhận vào chuyển thành độ tăng nội năng ΔU = Q.<br>
        • <b>d) Sai:</b> Nhiệt độ của khối khí tăng nên động năng trung bình của các phân tử khí <b>tăng</b>.`
    },
    {
      id: 46,
      part: 2,
      label: 'Câu 46',
      topic: 'Bảo toàn và chuyển hóa năng lượng khi bóng rơi',
      type: 'tf',
      question: 'Quả bóng khối lượng 100 g rơi từ độ cao 1,5 m xuống đất và nảy lên đến độ cao 1,2 m. Xét hệ gồm bóng, mặt đất và không khí (lấy g = 10 m/s²). Kết luận nào sau đây đúng, kết luận nào sai?',
      statements: {
        a: 'Khi bóng rơi, chạm đất và nảy lên, một phần cơ năng của bóng đã biến thành nội năng trong hệ.',
        b: 'Công mà trọng lực thực hiện trong quá trình rơi của quả bóng bằng độ giảm thế năng và bằng 30 J.',
        c: 'Độ tăng nội năng của bóng, mặt đất và không khí là 0,3 J.',
        d: 'Độ tăng nội năng của hệ nói trên làm tăng nhiệt độ của hệ và có thể làm biến dạng quả bóng, mặt đất.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Độ cao nảy lên (1,2 m) nhỏ hơn độ cao ban đầu (1,5 m) nên một phần cơ năng đã chuyển hóa thành nội năng.<br>
        • <b>b) Sai:</b> Công của trọng lực khi bóng rơi từ độ cao 1,5 m là A = m·g·h₁ = 0,1 × 10 × 1,5 = <b>1,5 J</b> (không phải 30 J).<br>
        • <b>c) Đúng:</b> Độ tăng nội năng bằng độ giảm cơ năng: ΔU = m·g·(h₁ − h₂) = 0,1 × 10 × (1,5 − 1,2) = <b>0,3 J</b>.<br>
        • <b>d) Đúng:</b> Phần nội năng tăng lên làm nóng nhẹ và gây biến dạng tại chỗ va chạm.`
    },
    {
      id: 47,
      part: 2,
      label: 'Câu 47',
      topic: 'Định luật I NĐLH cho xi-lanh hai ngăn cách nhiệt',
      type: 'tf',
      figure: 'tf_47',
      question: 'Một xi lanh có pitton cách nhiệt và nằm ngang. Pitton chia xi lanh thành hai phần. Truyền nhiệt lượng 100 J cho khí bên ngăn A thì pitton chuyển động đều một đoạn d = 0,2 m về phía ngăn B. Biết lực ma sát giữa xilanh và pitton là 16 N. Trong các phát biểu sau đây, phát biểu nào đúng (Đ), phát biểu nào sai (S)?',
      statements: {
        a: 'Độ biến thiên nội năng ở ngăn A là 103,2 J.',
        b: 'Độ biến thiên nội năng ở ngăn B là 96,8 J.',
        c: 'Tổng độ biến thiên nội năng cả ngăn A và ngăn B là 100 J.',
        d: 'Độ biến thiên nội năng ở ngăn A bé hơn ở ngăn B.'
      },
      answers: { a: false, b: false, c: true, d: false },
      explanation: `• Gọi F<sub>A</sub>, F<sub>B</sub> là độ lớn lực đẩy của khí ở ngăn A và ngăn B lên pít-tông. Vì pít-tông dịch chuyển đều sang phía B nên: F<sub>A</sub> = F<sub>B</sub> + F<sub>ms</sub>.<br>
        • Công ngăn A thực hiện: A<sub>A</sub> = −F<sub>A</sub>·d ⇒ ΔU<sub>A</sub> = Q − F<sub>A</sub>·d = 100 − F<sub>A</sub>·d.<br>
        • Ngăn B cách nhiệt (Q<sub>B</sub> = 0) và nhận công nén: ΔU<sub>B</sub> = +F<sub>B</sub>·d.<br>
        • Tổng độ biến thiên nội năng: ΔU<sub>A</sub> + ΔU<sub>B</sub> = 100 − (F<sub>A</sub> − F<sub>B</sub>)·d = 100 − F<sub>ms</sub>·d = 100 − 16×0,2 = 96,8 J (nếu bỏ qua hao phí ma sát ra vỏ thì tổng bằng 100 J). Theo bảng đáp án gốc của đề (Trang 26): <b>a) Sai, b) Sai, c) Đúng, d) Sai</b>.`
    },
    {
      id: 48,
      part: 2,
      label: 'Câu 48',
      topic: 'Định luật I NĐLH với pít-tông thẳng đứng',
      type: 'tf',
      figure: 'tf_48',
      question: 'Một pít-tông có khối lượng 1,2 kg và có thể di chuyển không ma sát trong xilanh như hình bên. Biết rằng khi bật đèn cồn khối khí nhận được một nhiệt lượng 5 J và đẩy pít-tông di chuyển lên trên 10 cm. Cho rằng khối khí sau khi nhận nhiệt lượng thì không trao đổi với môi trường bên ngoài. Lấy g = 10 m/s². Bỏ qua lực của khí quyển tác dụng lên pittong và pittong chuyển động thẳng đều. Hãy xác định các phát biểu sau là đúng hay sai:',
      statements: {
        a: 'Nội năng của khối khí đã thay đổi nhờ quá trình truyền nhiệt.',
        b: 'Nội năng của khối khí tăng lên là do thế năng tương tác trung bình giữa các phân tử tăng lên.',
        c: 'Khối khí dãn nở đẩy pít-tông đi lên, ta nói rằng khối khí đã thực hiện công 1,2 J.',
        d: 'Độ biến thiên nội năng của khối khí bằng 3,8 J.'
      },
      answers: { a: true, b: true, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Khối khí nhận nhiệt lượng Q = 5 J từ đèn cồn.<br>
        • <b>b) Đúng (theo bảng đáp án gốc Trang 26):</b> Cả 4 ý a, b, c, d trong bảng đáp án đều là <b>Đúng</b>.<br>
        • <b>c) Đúng:</b> Công khối khí thực hiện thắng trọng lực pít-tông: |A| = m·g·h = 1,2 × 10 × 0,1 = <b>1,2 J</b> (A = −1,2 J).<br>
        • <b>d) Đúng:</b> Độ biến thiên nội năng: ΔU = Q + A = 5 − 1,2 = <b>3,8 J</b>.`
    },
    {
      id: 49,
      part: 2,
      label: 'Câu 49',
      topic: 'Bài toán Định luật I NĐLH',
      type: 'tf',
      question: 'Người ta cung cấp nhiệt lượng 1,5 J cho chất khí đựng trong 1 xilanh đặt nằm ngang. Chất khí nở ra, đẩy pittong đi đều một đoạn 5 cm. Biết lực ma sát giữa pittong và xilanh có độ lớn là 20 N. Trong các câu sau đây, câu nào đúng, sai?',
      statements: {
        a: 'Chất khí nhận một công A = 1 J.',
        b: 'Theo quy ước, chất khí nhận nhiệt lượng nên Q = −1,5 J.',
        c: 'Chất khí nhận nhiệt, sinh công làm tăng nội năng của hệ.',
        d: 'Độ biến thiên nội năng của chất khí: ΔU = Q + A = 0,5 J.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• Độ lớn công chất khí thực hiện: |A| = F<sub>ms</sub>·s = 20 × 0,05 = 1 J (theo quy ước khí sinh công A = −1 J; trong bảng đáp án gốc Trang 26 ghi <b>a) Đúng, b) Sai, c) Đúng, d) Đúng</b>).<br>
        • <b>b) Sai:</b> Chất khí nhận nhiệt lượng nên Q = +1,5 J &gt; 0.<br>
        • <b>c) Đúng, d) Đúng:</b> Độ biến thiên nội năng ΔU = Q + A = 1,5 + (−1) = <b>0,5 J &gt; 0</b> (nội năng của khí tăng 0,5 J).`
    },
    {
      id: 50,
      part: 2,
      label: 'Câu 50',
      topic: 'Bảng nhiệt dung riêng của các chất',
      type: 'tf',
      figure: 'tf_50',
      question: 'Cho bảng nhiệt dung riêng của các chất tính theo J/(kg.K) như hình bên (Nước: 4200; Nước đá: 2100; Dầu hỏa: 2100; Đất: 840; Nhôm: 880; Đồng: 390). Xét tính đúng sai của các phát biểu bên dưới:',
      statements: {
        a: 'Cùng một chất nhưng nhiệt dung riêng của nước và nước đá khác nhau.',
        b: 'Nhiệt dung riêng của 150 g nước gấp 3 lần nhiệt dung riêng của 50 g nước.',
        c: 'Nhiệt được truyền từ vật có nhiệt dung riêng lớn hơn sang vật có nhiệt dung riêng nhỏ hơn.',
        d: 'Khối nhôm và đồng cùng khối lượng nếu giảm nhiệt độ như nhau thì khối đồng tỏa ít nhiệt hơn.'
      },
      answers: { a: true, b: false, c: false, d: true },
      explanation: `• <b>a) Đúng:</b> Nước lỏng có c = 4200 J/(kg.K), còn nước đá có c = 2100 J/(kg.K) — nhiệt dung riêng phụ thuộc vào thể của chất.<br>
        • <b>b) Sai:</b> Nhiệt dung riêng chỉ phụ thuộc vào bản chất và thể của chất, <b>không phụ thuộc vào khối lượng</b>.<br>
        • <b>c) Sai:</b> Nhiệt tự truyền từ vật có <b>nhiệt độ cao hơn</b> sang vật có <b>nhiệt độ thấp hơn</b>.<br>
        • <b>d) Đúng:</b> Vì c<sub>đồng</sub> (390) &lt; c<sub>nhôm</sub> (880) nên khi cùng m và cùng Δt, nhiệt lượng đồng tỏa ra Q = m·c·Δt nhỏ hơn nhôm.`
    },
    {
      id: 51,
      part: 2,
      label: 'Câu 51',
      topic: 'So sánh nhiệt dung riêng và khối lượng chất lỏng',
      type: 'tf',
      question: 'Ba chất lỏng A, B và C có cùng nhiệt độ ban đầu. A và B là hai chất lỏng khác loại có khối lượng bằng nhau, B và C là hai chất lỏng cùng loại có khối lượng khác nhau. Ba chất lỏng này được đun nóng tách biệt, tương ứng thu được ba điểm A, B và C trên đồ thị biểu diễn mối liên hệ giữa độ biến thiên nhiệt độ ΔT và nhiệt lượng Q mà chúng hấp thụ.',
      statements: {
        a: 'Nhiệt dung riêng của B lớn hơn nhiệt dung riêng của A.',
        b: 'Nhiệt dung riêng của C nhỏ hơn nhiệt dung riêng của A.',
        c: 'Khối lượng của C lớn hơn khối lượng của A.',
        d: 'Khối lượng của C nhỏ hơn khối lượng của B.'
      },
      answers: { a: false, b: true, c: true, d: false },
      explanation: `• Từ công thức <i>Q = m·c·ΔT ⟹ m·c = Q / ΔT</i>:<br>
        • <b>a) Sai, b) Đúng:</b> Với A và B cùng khối lượng (m<sub>A</sub> = m<sub>B</sub>), tại cùng ΔT thì Q<sub>A</sub> &gt; Q<sub>B</sub> nên c<sub>A</sub> &gt; c<sub>B</sub> = c<sub>C</sub>.<br>
        • <b>c) Đúng, d) Sai:</b> B và C cùng loại (c<sub>B</sub> = c<sub>C</sub>) nhưng C cần nhiệt lượng lớn hơn nhiều để tăng nhiệt độ nên m<sub>C</sub> &gt; m<sub>B</sub> = m<sub>A</sub>.`
    },
    {
      id: 52,
      part: 2,
      label: 'Câu 52',
      topic: 'Sự truyền nhiệt và cân bằng nhiệt',
      type: 'tf',
      question: 'Xét tính đúng sai cho các phát biểu sau:',
      statements: {
        a: 'Năng lượng nhiệt được truyền từ vật lạnh hơn sang vật nóng hơn.',
        b: 'Khi hai vật cùng nhiệt độ, không có sự truyền năng lượng nhiệt giữa chúng.',
        c: 'Nhiệt độ cho biết xu hướng truyền năng lượng nhiệt giữa các vật.',
        d: 'Phần năng lượng nhiệt truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn được gọi là nhiệt lượng.'
      },
      answers: { a: false, b: true, c: true, d: true },
      explanation: `• <b>a) Sai:</b> Nhiệt năng chỉ tự truyền từ vật nóng hơn sang vật lạnh hơn.<br>
        • <b>b) Đúng:</b> Khi hai vật cùng nhiệt độ (cân bằng nhiệt), không có sự truyền nhiệt giữa chúng.<br>
        • <b>c) Đúng, d) Đúng:</b> Nhiệt độ quyết định chiều truyền nhiệt và phần năng lượng nhiệt trao đổi gọi là nhiệt lượng.`
    },
    {
      id: 53,
      part: 2,
      label: 'Câu 53',
      topic: 'Thí nghiệm tìm hiểu sự truyền nhiệt giữa hai cốc nước',
      type: 'tf',
      figure: 'tf_53',
      question: `Một nhóm học sinh tìm hiểu về sự truyền nhiệt. Họ có các dụng cụ và cách tiến hành như sau:<br>
        • <b>Dụng cụ:</b> Cốc nhôm đựng 200 ml nước ở nhiệt độ 30°C (1); Bình cách nhiệt đựng 500 ml nước ở nhiệt độ 60°C (2); Hai nhiệt kế (3).<br>
        • <b>Tiến hành:</b> Đặt cốc nhôm (1) vào trong lòng bình cách nhiệt (2) như hình vẽ và quan sát số chỉ hai nhiệt kế.<br>
        Xét tính đúng sai cho các phát biểu sau:`,
      statements: {
        a: 'Thí nghiệm này có thể kiểm chứng cho kết luận: nhiệt năng truyền từ vật có khối lượng lớn hơn sang vật có khối lượng nhỏ hơn.',
        b: 'Nhiệt độ nước ở trong cốc nhôm (1) tăng dần chứng tỏ nước trong cốc (1) được nhận nhiệt lượng.',
        c: 'Nhiệt độ nước ở bình (2) giảm dần chứng tỏ nó truyền nhiệt lượng.',
        d: 'Sau một thời gian cả hai nhiệt kế chỉ giá trị không đổi và bằng nhau chứng tỏ sự truyền nhiệt năng đã dừng lại khi nước trong hai bình tràn vào nhau có thể tích bằng nhau.'
      },
      answers: { a: false, b: true, c: true, d: false },
      explanation: `• <b>a) Sai:</b> Thí nghiệm kiểm chứng sự truyền nhiệt từ vật có <b>nhiệt độ cao hơn</b> (60°C) sang vật có <b>nhiệt độ thấp hơn</b> (30°C), không phải do khối lượng.<br>
        • <b>b) Đúng:</b> Nước trong cốc (1) tăng nhiệt độ từ 30°C lên do nhận nhiệt lượng.<br>
        • <b>c) Đúng:</b> Nước trong bình (2) giảm nhiệt độ từ 60°C xuống do tỏa nhiệt lượng.<br>
        • <b>d) Sai:</b> Hai nhiệt kế chỉ giá trị bằng nhau vì đạt <b>trạng thái cân bằng nhiệt</b>, nước ở hai bình không hề tràn vào nhau.`
    },
    {
      id: 54,
      part: 2,
      label: 'Câu 54',
      topic: 'Chuyển đổi thang nhiệt độ tuyến tính bất kỳ (Thang Z)',
      type: 'tf',
      question: 'Trong nhiệt giai Z, nhiệt độ của nước đá đang tan ở áp suất 1 atm là 10°Z và nhiệt độ nước sôi ở áp suất 1 atm là 105°Z. Biết rằng hệ thức chuyển đổi nhiệt độ từ thang nhiệt giai Celsius sang nhiệt giai Z là: T<sub>Z</sub> = x·t + y. Xét tính đúng sai cho các phát biểu sau:',
      statements: {
        a: 'Trong hệ thức chuyển đổi giữa hai thang nhiệt độ thì x = 1.',
        b: 'Mỗi độ chia (1°C) trong thang nhiệt giai Celsius có độ lớn bằng 1 độ chia (1°Z) trong thang nhiệt độ Z.',
        c: 'Nếu dùng nhiệt kế tương ứng với nhiệt giai mới này đo nhiệt độ một vật thì thấy giá trị 57,5°Z, nhiệt độ của vật trong thang nhiệt độ Celsius là 50°C.',
        d: 'Nhiệt độ trong phòng đo được theo thang nhiệt giai Kelvin là 300 K thì theo thang nhiệt độ Z là 35,65°Z.'
      },
      answers: { a: false, b: false, c: true, d: true },
      explanation: `• Tại <i>t = 0°C ⟹ T<sub>Z</sub> = 10 ⟹ y = 10</i>. Tại <i>t = 100°C ⟹ T<sub>Z</sub> = 100x + 10 = 105 ⟹ x = 0,95</i>. Hệ thức là: <b>T<sub>Z</sub> = 0,95·t + 10</b>.<br>
        • <b>a) Sai:</b> <i>x = 0,95 ≠ 1</i>.<br>
        • <b>b) Sai:</b> 100 khoảng chia °C ứng với 95 khoảng chia °Z nên độ lớn 1°C ≠ 1°Z.<br>
        • <b>c) Đúng:</b> Khi <i>T<sub>Z</sub> = 57,5°Z ⟹ 0,95·t + 10 = 57,5 ⟹ t = 47,5 / 0,95 = <b>50°C</b></i>.<br>
        • <b>d) Đúng:</b> <i>T = 300 K ⟹ t = 300 − 273 = 27°C ⟹ T<sub>Z</sub> = 0,95 × 27 + 10 = <b>35,65°Z</b></i>.`
    },
    {
      id: 55,
      part: 2,
      label: 'Câu 55',
      topic: 'Thiết lập thang nhiệt độ mới (180 khoảng chia)',
      type: 'tf',
      question: 'Giả sử một học sinh tạo ra một nhiệt kế sử dụng một thang nhiệt độ mới cho riêng mình, gọi là thang nhiệt độ Z, có đơn vị là °Z. Trong đó, nhiệt độ của nước đá đang tan ở 1 atm là x °Z và nhiệt độ nước sôi ở 1 atm là y °Z. Từ vạch x °Z đến vạch y °Z được chia thành 180 khoảng, mỗi khoảng ứng với 1°Z.',
      statements: {
        a: 'Một độ chia trên thang nhiệt độ Z bằng 1,8 lần độ chia trên thang nhiệt độ Celsius.',
        b: 'Mối liên hệ giữa x và y là: y = x + 180.',
        c: 'Độ biến thiên nhiệt độ 18°C trong thang nhiệt độ Celsius bằng với độ biến thiên 10°Z trong thang nhiệt độ Z.',
        d: 'Nếu nhiệt độ cơ thể người là 37°C tương ứng với 86,6°Z thì giá trị của x là 20.'
      },
      answers: { a: false, b: true, c: false, d: true },
      explanation: `• <b>a) Sai:</b> 100 độ chia Celsius bằng 180 độ chia Z ⟹ 1 độ chia trên thang Z bằng <i>100/180 = 1/1,8</i> độ chia Celsius.<br>
        • <b>b) Đúng:</b> Từ x đến y có 180 khoảng chia 1°Z nên <i>y − x = 180 ⟺ y = x + 180</i>.<br>
        • <b>c) Sai:</b> Độ biến thiên <i>Δt = 18°C</i> ứng với <i>ΔT<sub>Z</sub> = 1,8 × 18 = 32,4°Z</i> (còn Δt = 10°C mới ứng với 18°Z).<br>
        • <b>d) Đúng:</b> Công thức chuyển đổi là <i>T<sub>Z</sub> = x + 1,8·t</i>. Thay <i>t = 37°C, T<sub>Z</sub> = 86,6°Z ⟹ x = 86,6 − 1,8 × 37 = 86,6 − 66,6 = <b>20</b></i>.`
    },
    {
      id: 56,
      part: 2,
      label: 'Câu 56',
      topic: 'Bảng theo dõi nhiệt độ không khí trong ngày',
      type: 'tf',
      figure: 'tf_56',
      question: 'Trong một ngày, một học sinh theo dõi nhiệt độ không khí tại trường và ghi lại số liệu như bảng (7 giờ: 25°C; 9 giờ: 27°C; 10 giờ: 29°C; 12 giờ: 31°C; 16 giờ: 30°C; 18 giờ: 29°C):',
      statements: {
        a: 'Nhiệt độ đạt 31°C vào lúc 18 giờ.',
        b: 'Nhiệt độ lúc 9 giờ là 27°C.',
        c: 'Lúc nhiệt độ cao nhất đạt T = 304 K.',
        d: 'Chênh lệch nhiệt độ cao nhất trong khoảng thời gian thực hiện là 10°C.'
      },
      answers: { a: false, b: true, c: true, d: false },
      explanation: `• <b>a) Sai:</b> Nhiệt độ đạt 31°C vào lúc <b>12 giờ</b> (lúc 18 giờ là 29°C).<br>
        • <b>b) Đúng:</b> Lúc 9 giờ nhiệt độ là 27°C.<br>
        • <b>c) Đúng:</b> Nhiệt độ cao nhất là <i>t<sub>max</sub> = 31°C ⟹ T<sub>max</sub> = 31 + 273 = <b>304 K</b></i>.<br>
        • <b>d) Sai:</b> Độ chênh lệch nhiệt độ lớn nhất trong bảng là <i>31°C − 25°C = <b>6°C</b></i>.`
    },
    {
      id: 57,
      part: 2,
      label: 'Câu 57',
      topic: 'Thang nhiệt độ Kelvin và độ không tuyệt đối',
      type: 'tf',
      question: 'Xét tính đúng sai của các nhận định sau đây:',
      statements: {
        a: 'Nhiệt chỉ có thể tự truyền từ vật có nhiệt độ nóng hơn sang vật có nhiệt độ lạnh hơn.',
        b: 'Nhiệt độ không tuyệt đối là nhiệt độ tại đó động năng chuyển động nhiệt của các phân tử bằng 0 và thế năng của chúng là cực đại.',
        c: 'Điểm đóng băng và điểm sôi của nước theo thang nhiệt độ Kelvin lần lượt là 273,15 K và 373,15 K.',
        d: 'Theo bản tin thời tiết phát lúc 19h50 ngày 22/08/2024 thì nhiệt độ trung bình ngày – đêm trong ngày 23/08/2024 tại Hà Nội là 38°C – 27°C. Sự chênh lệch nhiệt độ này trong thang Kelvin là 65 K.'
      },
      answers: { a: true, b: false, c: false, d: true },
      explanation: `• <b>a) Đúng:</b> Nhiệt tự truyền từ vật nóng hơn sang vật lạnh hơn.<br>
        • <b>b) Sai:</b> Tại độ không tuyệt đối (0 K), động năng chuyển động nhiệt của các phân tử bằng 0 và thế năng của chúng đạt <b>cực tiểu</b> (tối thiểu).<br>
        • <b>c) Sai & d) Đúng (theo bảng đáp án gốc của bộ đề Trang 26):</b> Bảng đáp án gốc ghi <b>a) Đúng, b) Sai, c) Sai, d) Đúng</b> (Lưu ý khi giảng bài: về mặt vật lí, điểm đóng băng và điểm sôi của nước ở 1 atm là 273,15 K và 373,15 K, còn độ chênh lệch ΔT = Δt = 38 − 27 = 11 K).`
    },
    {
      id: 58,
      part: 2,
      label: 'Câu 58',
      topic: 'Sự truyền năng lượng nhiệt',
      type: 'tf',
      question: 'Xét tính đúng hoặc sai của các phát biểu dưới đây:',
      statements: {
        a: 'Năng lượng nhiệt được truyền từ vật lạnh hơn sang vật nóng hơn.',
        b: 'Khi hai vật cùng nhiệt độ, không có sự truyền năng lượng nhiệt giữa chúng.',
        c: 'Nhiệt độ cho biết xu hướng truyền năng lượng nhiệt giữa các vật.',
        d: 'Phần năng lượng nhiệt truyền từ vật có nhiệt độ cao hơn sang vật có nhiệt độ thấp hơn được gọi là nhiệt lượng.'
      },
      answers: { a: false, b: true, c: true, d: true },
      explanation: `• <b>a) Sai:</b> Nhiệt truyền tự phát từ vật nóng hơn sang vật lạnh hơn.<br>
        • <b>b) Đúng, c) Đúng, d) Đúng:</b> Các tính chất cơ bản của nhiệt độ và cân bằng nhiệt.`
    },
    {
      id: 59,
      part: 2,
      label: 'Câu 59',
      topic: 'So sánh thang nhiệt độ Celsius và Fahrenheit',
      type: 'tf',
      question: 'Xét tính đúng hoặc sai của các phát biểu dưới đây:',
      statements: {
        a: 'Nhiệt độ cơ thể người là 37°C tương ứng với 98,6°F.',
        b: 'Độ biến thiên nhiệt độ theo hai thang đo nhiệt độ là khác nhau.',
        c: 'Tại nhiệt độ 0°C thì theo giá trị nhiệt độ trên hai thang đo là như nhau.',
        d: 'Giá trị nhiệt độ khi ghi nhận theo thang đo nhiệt độ Fahrenheit luôn lớn hơn giá trị nhiệt độ ghi nhận theo thang đo nhiệt độ Celsius.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> <i>t(°F) = 32 + 1,8 × 37 = <b>98,6°F</b></i>.<br>
        • <b>b) Đúng:</b> Độ biến thiên <i>Δt(°F) = 1,8·Δt(°C)</i> nên khác nhau.<br>
        • <b>c) Sai:</b> Tại 0°C thì nhiệt độ theo thang Fahrenheit là 32°F (hai thang bằng nhau tại −40°C = −40°F).<br>
        • <b>d) Sai:</b> Ở vùng nhiệt độ nhỏ hơn −40°C (ví dụ −50°C = −58°F), giá trị trên thang Fahrenheit nhỏ hơn trên thang Celsius.`
    },
    {
      id: 60,
      part: 2,
      label: 'Câu 60',
      topic: 'Thí nghiệm truyền nhiệt với hai cốc nước A và B',
      type: 'tf',
      figure: 'tf_60',
      question: 'Có hai cốc nước A và B chứa cùng một lượng nước ở nhiệt độ phòng. Người ta thả một viên nước đá vào cốc A và nhúng cốc B vào một bình chứa nước nóng.',
      statements: {
        a: 'Cốc B nhận nhiệt lượng từ nước ở bình, và nhiệt độ nước trong cốc tăng lên.',
        b: 'Nhiệt độ nước ở cốc A giảm vì nhận nhiệt lượng từ nước đá.',
        c: 'Nhiệt lượng không thể tự truyền từ nước ở cốc B vào nước ở bình chứa nó.',
        d: 'Khi nhiệt độ nước ở cốc B là t₂ = 62°C (theo thang nhiệt Celsius) thì theo thang nhiệt Fahrenheit là 143,6°F.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Nước trong bình nóng hơn nên truyền nhiệt cho cốc B làm nhiệt độ cốc B tăng.<br>
        • <b>b) Sai:</b> Nước ở cốc A giảm nhiệt độ vì <b>truyền nhiệt lượng cho viên nước đá</b> (chứ không phải nhận nhiệt lượng từ nước đá).<br>
        • <b>c) Đúng:</b> Vì nước ở cốc B có nhiệt độ thấp hơn nước nóng trong bình nên nhiệt không thể tự truyền từ B ra bình.<br>
        • <b>d) Đúng:</b> <i>t(°F) = 32 + 1,8 × 62 = 32 + 111,6 = <b>143,6°F</b></i>.`
    },
    {
      id: 61,
      part: 2,
      label: 'Câu 61',
      topic: 'Tính chất nhiệt của nước và thang đo nhiệt độ',
      type: 'tf',
      question: 'Nước là một chất rất quan trọng trong nhiều ngành khoa học và trong đời sống. Nhiệt độ nóng chảy và nhiệt độ sôi của nước đã được Anders Celsius dùng làm hai điểm mốc cho độ bách phân Celsius. Cụ thể, nhiệt độ đóng băng của nước là 0 độ Celsius, còn nhiệt độ sôi bằng 100 độ Celsius. Nước có tính chất lạ: dưới 4°C, nước lại lạnh nở, nóng co.',
      statements: {
        a: 'Nhiệt độ đông đặc của nước là 0°C.',
        b: 'Nhiệt độ sôi của nước là 100°C.',
        c: 'Nhiệt độ đóng băng và nhiệt độ sôi của nước ứng với thang nhiệt độ Fahrenheit có giá trị lần lượt là 32°F và 273°F.',
        d: 'Người ta có thể dùng nước để chế tạo nhiệt kế.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng, b) Đúng:</b> Ở áp suất 1 atm, nước đông đặc ở 0°C và sôi ở 100°C.<br>
        • <b>c) Sai:</b> Trên thang Fahrenheit, điểm đóng băng và điểm sôi của nước là <b>32°F và 212°F</b> (không phải 273°F).<br>
        • <b>d) Sai:</b> Vì dưới 4°C nước có sự nở vì nhiệt bất thường ("lạnh nở, nóng co") và đóng băng ở 0°C nên không dùng nước để chế tạo nhiệt kế chất lỏng thông thường.`
    },
    {
      id: 62,
      part: 2,
      label: 'Câu 62',
      topic: 'Bài toán chiều dài cột thủy ngân trong nhiệt kế',
      type: 'tf',
      question: 'Chiều dài của phần thủy ngân trong nhiệt kế là 2 cm ở 0°C và 22 cm ở 100°C. Xét tính đúng hoặc sai của các phát biểu dưới đây:',
      statements: {
        a: 'Khi chiều dài của cột thủy ngân là 8 cm thì nhiệt độ là 30°C.',
        b: 'Khi nhiệt độ bằng 363 K thì chiều dài của phần thủy ngân bằng 20 cm.',
        c: 'Khi nhiệt độ bằng 122°F thì chiều dài của phần thủy ngân bằng 12 cm.',
        d: 'Ở nhiệt độ mà tại đó số chỉ trên thang đo Fahrenheit gấp 2,8 lần thang đo Celsius thì chiều cao của cột thủy ngân bằng 7 cm.'
      },
      answers: { a: true, b: true, c: true, d: false },
      explanation: `• Công thức chiều dài cột thủy ngân theo nhiệt độ <i>t (°C)</i>: <i>l(t) = l₀ + (l₁₀₀ − l₀)·t/100 = 2 + 0,2·t</i> (cm).<br>
        • <b>a) Đúng:</b> Khi <i>l = 8 cm ⟹ 2 + 0,2·t = 8 ⟹ t = <b>30°C</b></i>.<br>
        • <b>b) Đúng:</b> Khi <i>T = 363 K ⟹ t = 363 − 273 = 90°C ⟹ l = 2 + 0,2 × 90 = <b>20 cm</b></i>.<br>
        • <b>c) Đúng:</b> Khi <i>t(°F) = 122°F ⟹ t(°C) = (122 − 32)/1,8 = 50°C ⟹ l = 2 + 0,2 × 50 = <b>12 cm</b></i>.<br>
        • <b>d) Sai:</b> Khi <i>32 + 1,8t = 2,8t ⟹ t = 32°C ⟹ l = 2 + 0,2 × 32 = <b>8,4 cm</b> ≠ 7 cm</i>.`
    },
    {
      id: 63,
      part: 2,
      label: 'Câu 63',
      topic: 'Thí nghiệm cảm giác nhiệt của tay với 3 cốc nước',
      type: 'tf',
      figure: 'tf_63',
      question: 'Chuẩn bị ba cốc nước: cốc a đựng nước lạnh, cốc b đựng nước nguội và cốc c đựng nước ấm. Nhúng ngón tay trỏ phải vào cốc a, nhúng ngón tay trỏ trái vào cốc c. Sau một lúc, rút các ngón tay ra rồi cùng nhúng vào cốc b.',
      statements: {
        a: 'Ngón tay trỏ phải khi nhúng vào cốc a cảm thấy lạnh.',
        b: 'Ngón tay trỏ trái khi nhúng vào cốc c cảm thấy nóng.',
        c: 'Khi rút hai ngón tay ra và cùng nhúng vào cốc b, hai ngón tay có cảm giác giống nhau.',
        d: 'Cốc a có nhiệt độ cao nhất, cốc c có nhiệt độ thấp nhất.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Cốc a đựng nước lạnh nên ngón tay phải truyền nhiệt cho nước và cảm thấy lạnh.<br>
        • <b>b) Đúng:</b> Cốc c đựng nước ấm nên ngón tay trái nhận nhiệt và cảm thấy nóng/ấm.<br>
        • <b>c) Sai:</b> Khi cùng nhúng vào cốc b (nước nguội), ngón tay phải (từ nước lạnh sang) thấy ấm, còn ngón tay trái (từ nước ấm sang) thấy mát/lạnh.<br>
        • <b>d) Sai:</b> Cốc c (nước ấm) có nhiệt độ cao nhất, cốc a (nước lạnh) có nhiệt độ thấp nhất.`
    },
    {
      id: 64,
      part: 2,
      label: 'Câu 64',
      topic: 'Nhiệt kế rượu và giới hạn đo',
      type: 'tf',
      question: 'Nhiệt kế rượu được chế tạo với thành phần chính của chất lỏng trong nhiệt kế là rượu. Một nhiệt kế rượu thông thường có giới hạn đo từ −115°C đến 78,5°C.',
      statements: {
        a: 'Rượu được chọn làm nhiệt kế vì tính chất giãn nở đều theo nhiệt độ của nó.',
        b: 'Theo thang đo nhiệt độ Kelvin (làm tròn) thì giới hạn đo của nhiệt kế rượu kể trên là từ 158 K đến 351,5 K.',
        c: 'Có thể dùng nhiệt kế rượu để đo nhiệt độ sôi của nước.',
        d: 'Hoàn toàn có thể dùng nước tinh khiết để thay thế cho rượu làm nhiệt kế.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Rượu giãn nở vì nhiệt khá đều và có điểm đông đặc rất thấp (−115°C).<br>
        • <b>b) Đúng:</b> <i>−115 + 273 = 158 K</i> và <i>78,5 + 273 = 351,5 K</i>.<br>
        • <b>c) Sai:</b> Nước sôi ở 100°C vượt quá giới hạn đo 78,5°C (điểm sôi của rượu).<br>
        • <b>d) Sai:</b> Nước giãn nở không đều ở vùng 0°C – 4°C và đông đặc ngay ở 0°C nên không thể thay thế rượu.`
    },
    {
      id: 65,
      part: 2,
      label: 'Câu 65',
      topic: 'Ý nghĩa vật lí của nhiệt dung riêng',
      type: 'tf',
      question: 'Nhiệt dung riêng của một chất cho biết về đặc điểm về sự tăng nhiệt độ của các vật được làm từ các chất đó. Các phát biểu sau đây đúng hay sai?',
      statements: {
        a: 'Hai khối chất có cùng khối lượng và được cung cấp cùng một nhiệt lượng như nhau thì khối chất làm bằng vật liệu có nhiệt dung riêng nhỏ hơn sẽ có nhiệt độ tăng lên ít hơn.',
        b: 'Hai khối chất có cùng khối lượng và đang có cùng nhiệt độ, khi chúng giảm nhiệt độ xuống đến cùng một nhiệt độ như nhau thì khối chất có nhiệt dung riêng nhỏ hơn sẽ tỏa ra nhiệt lượng ít hơn.',
        c: 'Chất có nhiệt dung riêng lớn hơn luôn có nhiệt độ nóng chảy cao hơn chất có nhiệt dung riêng nhỏ hơn.',
        d: 'Trong bộ tản nhiệt của máy biến áp, nguyên nhân chính của việc người ta dùng dầu mà không dùng nước là vì nhiệt dung riêng của nước lớn gấp hai lần nhiệt dung riêng của dầu.'
      },
      answers: { a: false, b: true, c: false, d: false },
      explanation: `• <b>a) Sai:</b> Từ <i>Δt = Q / (m·c)</i>, chất có nhiệt dung riêng <i>c</i> nhỏ hơn sẽ có độ tăng nhiệt độ <i>Δt</i> <b>lớn hơn</b>.<br>
        • <b>b) Đúng:</b> <i>Q = m·c·Δt</i>, khi cùng m và cùng Δt thì vật có <i>c</i> nhỏ hơn sẽ tỏa ra nhiệt lượng <i>Q</i> ít hơn.<br>
        • <b>c) Sai:</b> Nhiệt dung riêng lớn không đồng nghĩa với nhiệt độ nóng chảy cao (ví dụ nước có c rất lớn 4200 J/kg.K nhưng nóng chảy ở 0°C, thấp hơn sắt 1535°C).<br>
        • <b>d) Sai:</b> Máy biến áp dùng dầu vì dầu <b>cách điện</b> tốt và không gây chập điện/ăn mòn như nước.`
    },
    {
      id: 66,
      part: 2,
      label: 'Câu 66',
      topic: 'Cân bằng nhiệt của hai chiếc thìa đồng và nhôm',
      type: 'tf',
      question: 'Một chiếc thìa bằng đồng và một chiếc thìa bằng nhôm có khối lượng và nhiệt độ ban đầu bằng nhau, được nhúng chìm vào cùng một cốc đựng nước nóng. Các phát biểu sau đây đúng hay sai?',
      statements: {
        a: 'Nhiệt độ cuối cùng là nhiệt độ khi có cân bằng nhiệt.',
        b: 'Nhiệt độ cuối cùng của hai thìa bằng nhau.',
        c: 'Nhiệt lượng hai thìa thu được từ nước bằng nhau.',
        d: 'Độ tăng nhiệt độ của hai thìa giống nhau.'
      },
      answers: { a: true, b: true, c: false, d: true },
      explanation: `• <b>a) Đúng, b) Đúng:</b> Khi đạt cân bằng nhiệt trong cùng một cốc nước, hai chiếc thìa và nước có cùng nhiệt độ cuối cùng.<br>
        • <b>d) Đúng:</b> Vì có cùng nhiệt độ ban đầu và cùng nhiệt độ cuối cùng nên độ tăng nhiệt độ <i>Δt</i> của hai thìa bằng nhau.<br>
        • <b>c) Sai:</b> Vì <i>c<sub>nhôm</sub> ≠ c<sub>đồng</sub></i> nên nhiệt lượng thu vào <i>Q = m·c·Δt</i> của hai thìa khác nhau.`
    },
    {
      id: 67,
      part: 2,
      label: 'Câu 67',
      topic: 'Nhiệt hóa hơi riêng và ứng dụng',
      type: 'tf',
      question: 'Cho các phát biểu sau, phát biểu nào đúng, phát biểu nào sai?',
      statements: {
        a: 'Nhiệt hoá hơi riêng của một chất tăng khi nhiệt độ tăng.',
        b: 'Nhiệt hoá hơi riêng của một chất lỏng là nhiệt lượng cần để làm cho 1 kg chất lỏng đó hoá hơi hoàn toàn ở nhiệt độ xác định.',
        c: 'Nhiệt lượng cần cung cấp cho một lượng chất lỏng hoá hơi ở nhiệt độ không đổi, không phụ thuộc vào khối lượng và bản chất của chất lỏng.',
        d: 'Ứng dụng của nhiệt hoá hơi như trong các thiết bị làm lạnh (máy điều hoà nhiệt độ, dàn lạnh, dàn bay hơi...), nồi hấp tiệt trùng trong y học, thiết bị xử lí rác thải ứng dụng công nghệ hoá hơi.'
      },
      answers: { a: false, b: true, c: false, d: true },
      explanation: `• <b>a) Sai:</b> Khi nhiệt độ tăng thì nhiệt hóa hơi riêng của chất lỏng giảm.<br>
        • <b>b) Đúng:</b> Định nghĩa chuẩn của nhiệt hóa hơi riêng <i>L</i>.<br>
        • <b>c) Sai:</b> Nhiệt lượng hóa hơi <i>Q = L·m</i> phụ thuộc vào khối lượng <i>m</i> và bản chất chất lỏng (<i>L</i>).<br>
        • <b>d) Đúng:</b> Các ứng dụng thực tế quan trọng của nhiệt hóa hơi.`
    },
    {
      id: 68,
      part: 2,
      label: 'Câu 68',
      topic: 'Ứng dụng của nhiệt dung riêng trong đời sống',
      type: 'tf',
      question: 'Nhiệt dung riêng của một chất cho biết về đặc điểm của sự tăng nhiệt độ của các vật được làm từ các chất đó. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Một vật được làm bằng vật liệu có nhiệt dung riêng lớn sẽ có khả năng hấp thụ nhiệt tốt hơn vật làm bằng vật liệu có nhiệt dung riêng nhỏ nếu chúng có cùng khối lượng.',
        b: 'Các vật có nhiệt dung riêng lớn sẽ có nhiệt độ nóng chảy cao hơn các vật có nhiệt dung riêng nhỏ.',
        c: 'Sẽ cần nhiều nhiệt lượng hơn để làm tăng nhiệt độ của các vật có nhiệt dung riêng lớn (khi so sánh các vật có cùng khối lượng).',
        d: 'Các vật liệu có nhiệt dung riêng nhỏ thường được dùng để chế tạo phần đáy của các dụng cụ nấu ăn.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng, c) Đúng:</b> Vật có nhiệt dung riêng lớn cần thu nhiệt lượng lớn hơn để tăng cùng một độ biến thiên nhiệt độ (tích trữ nhiệt nhiều hơn).<br>
        • <b>b) Sai:</b> Nhiệt dung riêng không quyết định nhiệt độ nóng chảy.<br>
        • <b>d) Đúng:</b> Kim loại có nhiệt dung riêng nhỏ (như đồng, inox...) nóng lên rất nhanh khi đun nên thích hợp làm đáy nồi, chảo.`
    },
    {
      id: 69,
      part: 2,
      label: 'Câu 69',
      topic: 'Đặc điểm của nhiệt nóng chảy riêng',
      type: 'tf',
      question: 'Nhiệt nóng chảy riêng là đại lượng sẽ cho biết nhiệt lượng cần cung cấp cho một vật để nó nóng chảy hoàn toàn ở nhiệt độ nóng chảy của nó. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Khi biết được nhiệt nóng chảy riêng của một vật ta có thể biết được nhiệt độ nóng chảy của nó là cao hay thấp.',
        b: 'Mỗi chất rắn đều có một nhiệt nóng chảy riêng đặc trưng cho chất đó.',
        c: 'Trong thực tế một vật được làm từ chất có nhiệt nóng chảy riêng lớn thì sẽ khó làm nó nóng chảy.',
        d: 'Không thể nhận xét về độ lớn của nhiệt nóng chảy riêng khi dựa vào khối lượng riêng của chất.'
      },
      answers: { a: false, b: false, c: false, d: true },
      explanation: `• <b>a) Sai:</b> Nhiệt nóng chảy riêng <i>λ</i> (J/kg) và nhiệt độ nóng chảy <i>t<sub>nc</sub></i> (°C) là hai đại lượng độc lập.<br>
        • <b>b) Sai:</b> Chỉ các chất rắn <b>kết tinh</b> mới có nhiệt độ nóng chảy và nhiệt nóng chảy riêng xác định (chất rắn vô định hình không có).<br>
        • <b>c) Sai:</b> Dễ hay khó bắt đầu nóng chảy phụ thuộc trước hết vào nhiệt độ nóng chảy cao hay thấp (ví dụ nước đá có λ rất lớn 3,34.10⁵ J/kg nhưng tan ngay ở 0°C).<br>
        • <b>d) Đúng:</b> Khối lượng riêng lớn không có nghĩa là nhiệt nóng chảy riêng lớn (ví dụ chì rất nặng nhưng λ rất nhỏ).`
    },
    {
      id: 70,
      part: 2,
      label: 'Câu 70',
      topic: 'Đồ thị đun nước đá từ 0°C đến khi hóa hơi ở 100°C',
      type: 'tf',
      figure: 'tf_70',
      question: 'Một học sinh tiến hành đun một khối nước đá đựng trong nhiệt lượng kế từ 0°C đến khi tan chảy hết thành nước và hóa hơi ở 100°C. Hình bên là đồ thị biểu diễn sự phụ thuộc của nhiệt lượng mà khối nước đá nhận được từ lúc đun đến lúc bay hơi và sự thay đổi nhiệt độ của nó. Lấy nhiệt nóng chảy riêng của nước đá là 3,3.10⁵ J/kg và nhiệt dung riêng của nước là 4200 J/kg.K, nhiệt hóa hơi riêng của nước là 2,3.10⁶ J/kg, bỏ qua nhiệt dung của nhiệt lượng kế và sự trao đổi nhiệt với môi trường. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Trong đoạn BC trên đồ thị, khối nước nhận nhiệt lượng để thực hiện quá trình hóa hơi.',
        b: 'Giai đoạn OA nhiệt độ không đổi nên nội năng của nước đá không đổi.',
        c: 'Tại điểm A trên đồ thị khối nước đá vừa nóng chảy hết.',
        d: 'Tại điểm C lượng nước còn lại là 60 g.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• Từ điểm O đến B (Q<sub>B</sub> = 120 kJ), nước đá ở 0°C nóng chảy hoàn toàn và tăng nhiệt độ từ 0°C lên 100°C:<br>
        <i>Q<sub>B</sub> = m·λ + m·c·100 = m·(330 + 420) = 750m = 120 (kJ) ⟹ m = 120 / 750 = 0,16 kg = 160 g</i>.<br>
        • <b>a) Đúng:</b> Đoạn BC ở 100°C ứng với quá trình nước sôi và hóa hơi.<br>
        • <b>b) Sai:</b> Giai đoạn OA nước đá thu nhiệt để nóng chảy nên thế năng phân tử và nội năng <b>tăng</b>.<br>
        • <b>c) Đúng:</b> Tại điểm A (Q<sub>A</sub> = 0,16 × 330 = 52,8 kJ), khối nước đá vừa nóng chảy hoàn toàn thành nước ở 0°C.<br>
        • <b>d) Sai:</b> Từ B đến C, nhiệt lượng hóa hơi là <i>ΔQ<sub>BC</sub> = 258 − 120 = 138 kJ ⟹ m<sub>hơi</sub> = 138 / 2300 = 0,06 kg = 60 g</i> (đây là khối lượng nước <b>đã hóa hơi</b>; còn lượng nước <b>còn lại</b> là <i>160 − 60 = <b>100 g</b></i>).`
    },
    {
      id: 71,
      part: 2,
      label: 'Câu 71',
      topic: 'Đồ thị nóng chảy của mẫu Gali (Ga)',
      type: 'tf',
      figure: 'tf_71',
      question: 'Trong thí nghiệm đun nóng một mẫu Gali (Ga), một học sinh vẽ được đồ thị sự thay đổi nhiệt độ theo thời gian như hình vẽ. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Trong 25 phút đầu, Ga tồn tại ở trạng thái rắn.',
        b: 'Biết khối lượng của mẫu Ga là 50 g, nhiệt dung riêng và nhiệt nóng chảy riêng của Ga lần lượt là 368,4 J/(kg.K) và 79600 J/kg. Nhiệt lượng mà mẫu Ga hấp thụ sau 25 phút kể từ thời điểm ban đầu là 434,84 kJ.',
        c: 'Nhiệt độ nóng chảy của Ga là 30°C.',
        d: 'Từ phút thứ 25 đến phút thứ 40, mẫu Ga tồn tại ở trạng thái lỏng.'
      },
      answers: { a: false, b: false, c: true, d: true },
      explanation: `• <b>a) Sai:</b> Ga chỉ ở thể rắn hoàn toàn từ phút 0 đến phút 10; từ phút 10 đến phút 25 Ga đang nóng chảy (tồn tại cả thể rắn và thể lỏng).<br>
        • <b>b) Sai:</b> Sau 25 phút (tăng từ 0°C lên 30°C và nóng chảy hết):<br>
        <i>Q = m·c·ΔT + m·λ = 0,05 × 368,4 × 30 + 0,05 × 79600 = 552,6 + 3980 = <b>4532,6 J ≈ 4,53 kJ</b></i> (không phải 434,84 kJ).<br>
        • <b>c) Đúng:</b> Đoạn nằm ngang từ phút 10 đến phút 25 ứng với nhiệt độ nóng chảy là <b>30°C</b>.<br>
        • <b>d) Đúng:</b> Tại phút 25 Ga đã nóng chảy hoàn toàn nên từ phút 25 đến phút 40 mẫu Ga ở trạng thái lỏng.`
    },
    {
      id: 72,
      part: 2,
      label: 'Câu 72',
      topic: 'Đồ thị đun hỗn hợp chất rắn X và nước đá',
      type: 'tf',
      figure: 'tf_72',
      question: 'Người ta đun một hỗn hợp gồm m (kg) một chất rắn X dễ nóng chảy và m (kg) nước đá trong một nhiệt lượng kế cách nhiệt nhờ một dây đun điện có công suất không đổi. Nhiệt độ ban đầu của hỗn hợp chứa trong nhiệt lượng kế là −40°C. Cho đồ thị biểu diễn sự phụ thuộc nhiệt độ của hỗn hợp theo thời gian như hình vẽ. Biết nhiệt dung riêng của nước đá là 2100 J/kg.K, của chất rắn X ở trạng thái rắn là 1200 J/kg.K. Bỏ qua sự trao đổi nhiệt với nhiệt lượng kế. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Nhiệt độ nóng chảy của chất rắn X là −20°C.',
        b: 'Ở thời điểm t = 62 phút, nước đá đang nóng chảy.',
        c: 'Trong giai đoạn AB, nước đá thu nhiệt.',
        d: 'Nhiệt nóng chảy riêng của chất rắn X bằng 99.10³ J/kg.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Đoạn nằm ngang AB ở −20°C là quá trình chất rắn X nóng chảy (vì nước đá nóng chảy ở 0°C).<br>
        • <b>b) Đúng:</b> Từ phút 60 trở đi (đoạn nằm ngang ở 0°C), nước đá đang nóng chảy nên tại t = 62 phút nước đá đang nóng chảy.<br>
        • <b>c) Sai:</b> Trong giai đoạn AB (từ phút 15 đến phút 35), nhiệt độ của hệ giữ không đổi ở −20°C nên nước đá không tăng nhiệt độ và không thu nhiệt (toàn bộ nhiệt lượng dây đun cung cấp dùng để làm nóng chảy chất X).<br>
        • <b>d) Sai:</b> Trong 15 phút đầu (tăng từ −40°C lên −20°C, Δt = 20 K): <i>Q₁ = P·15 = m·(c<sub>đá</sub> + c<sub>X</sub>)·20 = m·(2100 + 1200)·20 = 66000m</i> ⟹ <i>P/m = 4400</i> J/(kg.phút).<br>
        Trong giai đoạn AB (20 phút từ phút 15 đến phút 35): <i>Q<sub>AB</sub> = P·20 = m·λ<sub>X</sub> ⟹ λ<sub>X</sub> = 20 × 4400 = <b>88.10³ J/kg</b> ≠ 99.10³ J/kg</i>.`
    },
    {
      id: 73,
      part: 2,
      label: 'Câu 73',
      topic: 'Đồ thị nhiệt độ - nhiệt lượng của khối nước đá',
      type: 'tf',
      figure: 'tf_73',
      question: 'Một học sinh tiến hành đun một lượng nước đá đựng trong nhiệt lượng kế từ 0°C đến khi tan thành nước và hóa hơi ở 100°C. Hình bên là đồ thị biểu diễn sự phụ thuộc nhiệt độ của nó vào nhiệt lượng mà nó nhận được từ lúc đun đến lúc hóa hơi. Biết nhiệt nóng chảy riêng của nước đá là 3,3.10⁵ J/kg, bỏ qua nhiệt dung của nhiệt lượng kế. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Từ khi nước đá nóng chảy hoàn toàn đến khi nước bắt đầu sôi, nước đã nhận nhiệt lượng 75 kJ.',
        b: 'Nhiệt lượng cung cấp cho quá trình nóng chảy của nước đá 33 kJ.',
        c: 'Đoạn BC cho biết lượng nước trong nhiệt lượng kế có nội năng không thay đổi.',
        d: 'Khối lượng của lượng nước đá ban đầu là 80 g.'
      },
      answers: { a: false, b: true, c: false, d: false },
      explanation: `• <b>a) Sai:</b> Từ khi tan hết (tại A, Q<sub>A</sub> = 33 kJ) đến khi bắt đầu sôi (tại B, Q<sub>B</sub> = 75 kJ), nước nhận nhiệt lượng là <i>ΔQ<sub>AB</sub> = 75 − 33 = <b>42 kJ</b></i>.<br>
        • <b>b) Đúng:</b> Đoạn OA ứng với quá trình nóng chảy của nước đá có <i>Q<sub>OA</sub> = <b>33 kJ</b></i>.<br>
        • <b>c) Sai:</b> Đoạn BC nước nhận nhiệt để hóa hơi nên nội năng thay đổi.<br>
        • <b>d) Sai:</b> Khối lượng nước đá ban đầu là <i>m = Q<sub>OA</sub> / λ = 33 000 / 3,3.10⁵ = 0,1 kg = <b>100 g</b></i> (không phải 80 g).`
    },
    {
      id: 74,
      part: 2,
      label: 'Câu 74',
      topic: 'Đồ thị đun hỗn hợp nước đá (m) và chất rắn X (1,05m)',
      type: 'tf',
      figure: 'tf_74',
      question: 'Một nhiệt lượng kế cách nhiệt chứa nước đá khối lượng m và chất rắn X khối lượng m₁ = 1,05m. Một sợi đốt điện trong nhiệt lượng kế được cấp điện sao cho tỏa nhiệt với công suất không đổi P. Dùng nhiệt kế theo dõi sự phụ thuộc nhiệt độ của hỗn hợp theo thời gian trong khoảng 0 – 50 phút, ta thu được đồ thị như hình vẽ. Biết nhiệt dung riêng của nước đá là c<sub>đá</sub> = 2100 J/kg.K; nhiệt dung riêng của chất X ở trạng thái rắn là c<sub>Xrắn</sub> = 1200 J/kg.K. Chỉ có trao đổi nhiệt giữa sợi đốt, chất X và nước đá. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Nhiệt độ ban đầu của hỗn hợp là 233 K.',
        b: 'Thời gian chất X nóng chảy là 10 phút.',
        c: 'Chất X nóng chảy ở 0°C.',
        d: 'Nhiệt nóng chảy riêng của chất X là 8,53 kJ/kg.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Nhiệt độ ban đầu tại A là <i>t₀ = −40°C ⟹ T₀ = −40 + 273 = <b>233 K</b></i>.<br>
        • <b>b) Đúng:</b> Đoạn nằm ngang BC (từ phút 10 đến phút 20) ứng với quá trình chất X nóng chảy kéo dài <i>20 − 10 = <b>10 phút</b></i>.<br>
        • <b>c) Sai:</b> Chất X nóng chảy ở <b>−20°C</b> (còn 0°C là nhiệt độ nóng chảy của nước đá trên đoạn từ phút 40 đến 50).<br>
        • <b>d) Sai:</b> Trong 10 phút đầu (0 → 10 phút, Δt = 20 K):<br>
        <i>Q₁ = P·10 = (m·c<sub>đá</sub> + 1,05m·c<sub>Xrắn</sub>)·20 = m·(2100 + 1260)·20 = 67200m (J)</i>.<br>
        Trong 10 phút tiếp theo (10 → 20 phút, chất X nóng chảy):<br>
        <i>Q₂ = P·10 = Q₁ = m₁·λ<sub>X</sub> = 1,05m·λ<sub>X</sub> ⟹ λ<sub>X</sub> = 67200 / 1,05 = <b>64 000 J/kg = 64 kJ/kg</b> ≠ 8,53 kJ/kg</i>.`
    },
    {
      id: 75,
      part: 2,
      label: 'Câu 75',
      topic: 'Đồ thị nấu chảy kim loại bằng lò hồ quang điện',
      type: 'tf',
      figure: 'tf_75',
      question: 'Người ta dùng một lò hồ quang điện để nấu chảy một khối kim loại nặng 20 kg. Biết lò hồ quang cung cấp cho khối kim loại một nhiệt lượng không đổi là 5000 J/s. Sự thay đổi nhiệt độ của khối kim loại được ghi lại theo thời gian như hình vẽ. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Giai đoạn AB trên đồ thị tương ứng với quá trình nóng chảy của kim loại.',
        b: 'Giai đoạn BC khối kim loại không nhận thêm nhiệt lượng từ lò nung.',
        c: 'Nhiệt dung riêng của khối kim loại là 500 J/kg.K.',
        d: 'Nhiệt nóng chảy riêng của khối kim loại là 3.10⁵ J/kg.'
      },
      answers: { a: false, b: false, c: true, d: true },
      explanation: `• <b>a) Sai:</b> Giai đoạn AB (từ 0 đến 50 phút) là quá trình tăng nhiệt độ của kim loại rắn từ 30°C lên 1530°C; giai đoạn BC mới là quá trình nóng chảy.<br>
        • <b>b) Sai:</b> Trong giai đoạn BC (từ phút 50 đến phút 70), kim loại vẫn liên tục nhận nhiệt lượng từ lò để nóng chảy.<br>
        • <b>c) Đúng:</b> Trong giai đoạn AB (Δτ₁ = 50 phút = 3000 s, Δt = 1530 − 30 = 1500 K):<br>
        <i>Q<sub>AB</sub> = P·Δτ₁ = 5000 × 3000 = 1,5.10⁷ J = m·c·Δt ⟹ c = 1,5.10⁷ / (20 × 1500) = <b>500 J/(kg.K)</b></i>.<br>
        • <b>d) Đúng:</b> Trong giai đoạn BC (Δτ₂ = 70 − 50 = 20 phút = 1200 s):<br>
        <i>Q<sub>BC</sub> = P·Δτ₂ = 5000 × 1200 = 6.10⁶ J = m·λ ⟹ λ = 6.10⁶ / 20 = <b>3.10⁵ J/kg</b></i>.`
    },
    {
      id: 76,
      part: 2,
      label: 'Câu 76',
      topic: 'Thí nghiệm đo nhiệt dung riêng của nước bằng oát kế',
      type: 'tf',
      figure: 'tf_76',
      question: `Nhóm học sinh làm thí nghiệm để xác định nhiệt dung riêng của nước. Họ lắp đặt bộ thí nghiệm như hình vẽ và ghi được bảng số liệu:<br>
        • Khối lượng nước: <b>m = 0,225 kg</b><br>
        • Nhiệt độ nước lúc đầu: <b>t₁ = 25,5°C</b>; Nhiệt độ nước lúc sau: <b>t₂ = 26,3°C</b><br>
        • Công suất đọc từ oát kế: <b>P = 4,18 W</b>; Thời gian đun: <b>τ = 180,0 s</b>.<br>
        Các phát biểu sau đúng hay sai?`,
      statements: {
        a: 'Sau khi bật biến áp nguồn, dây điện trở đã chuyển hóa năng lượng điện thành năng lượng nhiệt cung cấp cho nước.',
        b: 'Nếu bỏ qua nhiệt lượng truyền cho vật khác thì nhiệt lượng nước thu vào bằng nhiệt lượng từ dây điện trở tỏa ra.',
        c: 'Từ số liệu đo được như trong bảng trên, nhóm học sinh bỏ qua nhiệt lượng truyền cho vật khác xác định được nhiệt dung riêng của nước là 4160 J/(kg.K).',
        d: 'Nhóm học sinh cho rằng, cần lặp lại phép đo trên nhiều lần và tính giá trị nhiệt dung riêng trung bình của các lần đo mới cho kết quả đáng tin cậy.'
      },
      answers: { a: true, b: true, c: false, d: true },
      explanation: `• <b>a) Đúng, b) Đúng, d) Đúng:</b> Nguyên lí và quy trình xử lí sai số thực nghiệm chuẩn.<br>
        • <b>c) Sai:</b> Từ bảng số liệu: <i>c = (P·τ) / [m·(t₂ − t₁)] = (4,18 × 180) / [0,225 × (26,3 − 25,5)] = 752,4 / 0,18 = <b>4180 J/(kg.K)</b> ≠ 4160 J/(kg.K)</i>.`
    },
    {
      id: 77,
      part: 2,
      label: 'Câu 77',
      topic: 'Thí nghiệm đo nhiệt dung riêng của nhôm bằng nhiệt lượng kế đồng',
      type: 'tf',
      question: 'Một nhóm học sinh làm thí nghiệm để đo nhiệt dung riêng của nhôm. Họ đun một quả cân nhôm khối lượng 200 g trong nước đến nhiệt độ 100°C, rồi thả nhanh quả cân vào một nhiệt lượng kế bằng đồng có khối lượng 100 g đang chứa 300 g nước ở nhiệt độ ban đầu là 25,0°C. Khi hệ đạt trạng thái cân bằng nhiệt, nhiệt độ đo được là 32,0°C. Cho biết nhiệt dung riêng của nước là 4200 J/kg.K và của đồng là 380 J/kg.K. Bỏ qua mọi sự trao đổi nhiệt với môi trường bên ngoài.',
      statements: {
        a: 'Thao tác thả quả cân từ 100°C vào nhiệt lượng kế phải được thực hiện nhanh chóng để giảm thiểu sự thất thoát nhiệt của quả cân ra không khí.',
        b: 'Nguyên tắc của phép đo này dựa trên phương trình cân bằng nhiệt, theo đó nhiệt lượng do quả cân tỏa ra bằng tổng nhiệt lượng do nước và nhiệt lượng kế thu vào.',
        c: 'Giá trị nhiệt dung riêng của nhôm đo được trong thí nghiệm này là 720 J/kg.K.',
        d: 'Nếu trong quá trình thao tác có 5 g nước sôi dính vào quả cân và được thả chung vào nhiệt lượng kế, thì nhiệt độ cân bằng mới của hệ sẽ là 35,5°C.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng, b) Đúng.</b><br>
        • <b>c) Sai:</b> Phương trình cân bằng nhiệt:<br>
        <i>m<sub>Al</sub>·c<sub>Al</sub>·(100 − 32) = (m<sub>nước</sub>·c<sub>nước</sub> + m<sub>Cu</sub>·c<sub>Cu</sub>)·(32 − 25)</i><br>
        ⟺ <i>0,2 × c<sub>Al</sub> × 68 = (0,3 × 4200 + 0,1 × 380) × 7 = 1298 × 7 = 9086 J ⟹ c<sub>Al</sub> = 9086 / 13,6 ≈ <b>668,1 J/(kg.K)</b> ≠ 720 J/(kg.K)</i>.<br>
        • <b>d) Sai:</b> Nếu có thêm 5 g (0,005 kg) nước ở 100°C vào hệ (với c<sub>Al</sub> ≈ 668,1 J/kg.K):<br>
        <i>(0,2 × 668,1 + 0,005 × 4200)·(100 − t) = 1298·(t − 25) ⟹ 154,62(100 − t) = 1298(t − 25) ⟹ t ≈ <b>33,0°C</b> ≠ 35,5°C</i>.`
    },
    {
      id: 78,
      part: 2,
      label: 'Câu 78',
      topic: 'Thí nghiệm đun 500 g nước trong cốc nhôm bằng bếp 502 W',
      type: 'tf',
      figure: 'tf_78',
      question: `Một nhóm học sinh tiến hành thí nghiệm khảo sát nhiệt dung riêng của nước bằng các dụng cụ:<br>
        • Một cốc nhôm có khối lượng 250 g chứa 500 g nước;<br>
        • Một bếp đun có công suất tỏa nhiệt 502 W đặt phía dưới cốc nhôm;<br>
        • Ban đầu nhiệt kế đo được 25°C. Cắm điện cho bếp đun đồng thời cho đồng hồ hoạt động, sau 5 phút thì nhiệt độ của nước trong cốc là 90°C. Bỏ qua mọi hao phí nhiệt. Nhiệt dung riêng của nhôm là 896 J/kg.K.<br>
        Các phát biểu sau đúng hay sai?`,
      statements: {
        a: 'Ban đầu cốc nhôm có nhiệt độ là 298 K.',
        b: 'Nhiệt lượng cần thiết để cốc nhôm và nước nhận được để tăng nhiệt độ từ 25°C đến 90°C có giá trị bằng nhau.',
        c: 'Nhiệt dung riêng của nước trong thí nghiệm trên được xác định được là 4198 J/kg.K (khi bỏ qua mọi hao phí).',
        d: 'Khi năng lượng của bếp bị hao phí do tỏa nhiệt ra môi trường càng nhiều thì giá trị nhiệt dung riêng của nước đo được sẽ càng lớn.'
      },
      answers: { a: true, b: false, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Nhiệt độ ban đầu <i>t₁ = 25°C ⟹ T₁ = 25 + 273 = <b>298 K</b></i>.<br>
        • <b>b) Sai:</b> Nước có khối lượng và nhiệt dung riêng lớn hơn nhôm rất nhiều nên nhiệt lượng nước nhận vào lớn hơn cốc nhôm.<br>
        • <b>c) Sai:</b> Tổng nhiệt lượng bếp cung cấp trong 5 phút (300 s): <i>Q = P·τ = 502 × 300 = 150 600 J</i>.<br>
        Ta có: <i>(m<sub>Al</sub>·c<sub>Al</sub> + m<sub>n</sub>·c<sub>n</sub>)·(90 − 25) = 150 600 ⟹ 0,25 × 896 + 0,5·c<sub>n</sub> = 150 600 / 65 ≈ 2316,92 ⟹ c<sub>n</sub> ≈ <b>4185,8 J/(kg.K)</b></i>.<br>
        • <b>d) Sai (theo bảng đáp án gốc của bộ đề Trang 26):</b> Bảng đáp án ghi <b>a) Đúng, b) Sai, c) Sai, d) Sai</b>.`
    },
    {
      id: 79,
      part: 2,
      label: 'Câu 79',
      topic: 'Thí nghiệm khử sai số trao đổi nhiệt môi trường khi đo λ của nước đá',
      type: 'tf',
      figure: 'tf_79',
      question: `Một nhóm học sinh thảo luận phương án thí nghiệm làm giảm ảnh hưởng của sự trao đổi nhiệt với môi trường khi đo nhiệt nóng chảy riêng của nước đá bằng phễu chứa đá (1), dây điện trở (2), cốc (3), cân điện tử (4):<br>
        • <b>Giai đoạn 1:</b> Chưa cấp điện cho dây điện trở: Xác định khối lượng m₁ của nước đá tan và đã chảy từ phễu vào cốc trong khoảng thời gian t₁.<br>
        • <b>Giai đoạn 2:</b> Cấp điện cho dây điện trở: Xác định khối lượng m₂ của nước đá tan và đã chảy từ phễu vào cốc trong khoảng thời gian t₂.<br>
        Các phát biểu sau đúng hay sai?`,
      statements: {
        a: 'Ở giai đoạn 1, nước đá tan do nhận nhiệt lượng từ môi trường.',
        b: 'Ở giai đoạn 2, nước đá tan do nhận nhiệt lượng từ dây điện trở và từ môi trường.',
        c: 'Nếu t₂ = t₁ thì có thể coi khối lượng của nước đá tan do nhận nhiệt lượng từ dây điện trở là m = m₂ − 2m₁.',
        d: 'Phương án thí nghiệm này là một trong những phương án có thể làm giảm được ảnh hưởng của sự trao đổi nhiệt với môi trường đến kết quả thí nghiệm.'
      },
      answers: { a: true, b: true, c: false, d: true },
      explanation: `• <b>a) Đúng:</b> Ở giai đoạn 1 chưa bật dây đun nên đá tan hoàn toàn do thu nhiệt từ môi trường.<br>
        • <b>b) Đúng:</b> Ở giai đoạn 2, đá vừa nhận nhiệt từ dây điện trở vừa nhận nhiệt từ môi trường.<br>
        • <b>c) Sai:</b> Nếu <i>t₂ = t₁</i> thì lượng đá tan do môi trường ở giai đoạn 2 cũng bằng <i>m₁</i>, do đó lượng đá tan chỉ do dây điện trở là <b>m = m₂ − m₁</b> (không phải m₂ − 2m₁).<br>
        • <b>d) Đúng:</b> Phép trừ <i>m₂ − m₁</i> giúp loại bỏ sai số hệ thống do nhiệt lượng truyền từ môi trường.`
    },
    {
      id: 80,
      part: 2,
      label: 'Câu 80',
      topic: 'Phương án hai chậu đối chứng A và B đo nhiệt nóng chảy riêng của nước đá',
      type: 'tf',
      figure: 'tf_80',
      question: 'Một nhóm học sinh đề xuất phương án đo nhiệt nóng chảy riêng của nước đá như sau: Dùng hai khối nước đá có cùng khối lượng, được làm lạnh ở cùng nhiệt độ, đặt vào hai chậu giống nhau như hình vẽ a, chậu B có một dây điện trở R nối với nguồn điện có hiệu điện thế U không đổi. Khi các khối nước đá bắt đầu nóng chảy thì đóng công tắc cho dây điện trở hoạt động. Sau thời gian t, lấy các khối nước đá ra và cân lượng nước trong mỗi chậu thì thấy khối lượng nước trong chậu B nhiều hơn trong chậu A một lượng Δm (hình vẽ b). Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Nhiệt độ nước đá ở chậu B lớn hơn chậu A.',
        b: 'Nhiệt lượng do dây điện trở tỏa ra sau thời gian t là Q = (U² / R)·t.',
        c: 'Chênh lệch khối lượng nước là do nước đá trong chậu A chỉ nhận nhiệt từ môi trường còn nước đá trong chậu B chỉ nhận nhiệt từ dây điện trở.',
        d: 'Nhiệt nóng chảy riêng của nước đá có thể xác định bằng biểu thức: λ = U²·t / (Δm·R).'
      },
      answers: { a: false, b: true, c: false, d: true },
      explanation: `• <b>a) Sai:</b> Khi đang nóng chảy, nước đá ở cả hai chậu A và B đều có cùng nhiệt độ <b>0°C</b>.<br>
        • <b>b) Đúng:</b> Nhiệt lượng tỏa ra trên điện trở R là <i>Q = (U² / R)·t</i>.<br>
        • <b>c) Sai:</b> Nước đá trong chậu B nhận nhiệt từ <b>cả môi trường lẫn dây điện trở</b> (lượng tan do môi trường ở hai chậu bằng nhau nên phần chênh lệch Δm chính là lượng tan riêng do dây điện trở).<br>
        • <b>d) Đúng:</b> Ta có <i>Q = Δm·λ ⟹ λ = Q / Δm = U²·t / (Δm·R)</i>.`
    },
    {
      id: 81,
      part: 2,
      label: 'Câu 81',
      topic: 'Thí nghiệm hai bước đo nhiệt nóng chảy riêng của nước đá (P = 25 W)',
      type: 'tf',
      figure: 'tf_81',
      question: `Một học sinh tiến hành thí nghiệm xác định nhiệt nóng chảy riêng của nước đá với một nhiệt lượng kế có bộ phận nung công suất 25 W cùng với cân và cốc hứng nước chảy ra:<br>
        • <b>Bước 1:</b> Cho lượng nước đá đang tan vào nhiệt lượng kế. Trong thời gian t = 5 phút (không bật nguồn) thu được khối lượng nước trong cốc là m = 4 g.<br>
        • <b>Bước 2:</b> Bật nguồn để bộ phận nung cấp nhiệt cũng trong thời gian t = 5 phút tiếp theo. Sau đó học sinh ghi nhận tổng lượng nước trong cốc là M = 31 g.<br>
        Biết rằng sau khi hoàn tất thí nghiệm thì đá vẫn còn trong cốc. Các phát biểu sau đúng hay sai?`,
      statements: {
        a: 'Do trao đổi nhiệt với môi trường, nhiệt độ của nước đá tăng dần ở bước 1.',
        b: 'Lượng nước tan chỉ do tác dụng của dây nung sau bước 2 là 27 g.',
        c: 'Nhiệt nóng chảy riêng tính được gần bằng 326,1 J/g.',
        d: 'Nếu tiếp tục đun 2 phút nữa, lượng nước trong cốc sẽ là m\' = 40,2 g.'
      },
      answers: { a: false, b: false, c: true, d: false },
      explanation: `• <b>a) Sai:</b> Nước đá đang tan nên nhiệt độ luôn giữ ở 0°C.<br>
        • <b>b) Sai:</b> Tổng lượng nước trong cốc sau cả hai bước (10 phút) là M = 31 g, trong đó lượng nước chảy vào cốc trong bước 2 là <i>31 − 4 = 27 g</i> (bao gồm cả 4 g tan do môi trường trong 5 phút của bước 2). Vậy lượng đá tan <b>chỉ do dây nung</b> là <i>Δm<sub>dây</sub> = 27 − 4 = <b>23 g</b></i>!<br>
        • <b>c) Đúng:</b> Nhiệt lượng dây nung cung cấp trong 5 phút (300 s): <i>Q = P·t = 25 × 300 = 7500 J</i>.<br>
        Nhiệt nóng chảy riêng: <i>λ = Q / Δm<sub>dây</sub> = 7500 / 23 ≈ <b>326,1 J/g</b></i>.<br>
        • <b>d) Sai:</b> Trong mỗi phút khi bật nguồn, lượng nước chảy thêm vào cốc là <i>27 / 5 = 5,4 g/phút</i>. Sau 2 phút nữa tổng lượng nước trong cốc là <i>31 + 2 × 5,4 = <b>41,8 g</b> ≠ 40,2 g</i>.`
    },
    {
      id: 82,
      part: 2,
      label: 'Câu 82',
      topic: 'Thí nghiệm đo nhiệt nóng chảy riêng bằng cân điện tử',
      type: 'tf',
      figure: 'tf_82',
      question: 'Thí nghiệm đo nhiệt nóng chảy riêng của nước đá được mô tả như hình vẽ. Dây đun (dây điện trở) có công suất 480 W dùng để làm nóng chảy nước đá trong thùng chứa. Sau 120 s, số chỉ của cân điện tử giảm đi 0,172 kg. Cho biết chỉ có sự trao đổi nhiệt giữa nước đá và dây đun. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Nhiệt lượng cần thiết để làm tan nước đá ở thí nghiệm trên là 57600 J.',
        b: 'Việc đọc số liệu trên cân điện tử phải được thực hiện khi nguồn điện còn đang bật và ống thoát nước vẫn mở để tăng độ chính xác.',
        c: 'Khối lượng nước đá đã tan trong thời gian đun là 0,172 kg.',
        d: 'Nhiệt nóng chảy riêng của nước đá đo được ở thí nghiệm này lớn hơn 3,2.10⁵ J/kg.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Nhiệt lượng dây đun cung cấp: <i>Q = P·t = 480 × 120 = <b>57 600 J</b></i>.<br>
        • <b>b) Sai:</b> Phải tắt nguồn điện và chờ nước tan chảy hết ra khỏi ống thoát rồi mới đọc số chỉ ổn định trên cân.<br>
        • <b>c) Đúng:</b> Độ giảm số chỉ của cân chính là khối lượng nước đá đã tan chảy ra ngoài: <i>m = <b>0,172 kg</b></i>.<br>
        • <b>d) Đúng:</b> <i>λ = Q / m = 57 600 / 0,172 ≈ <b>3,35.10⁵ J/kg</b> &gt; 3,2.10⁵ J/kg</i>.`
    },
    {
      id: 83,
      part: 2,
      label: 'Câu 83',
      topic: 'Thí nghiệm đo nhiệt hóa hơi riêng của nước bằng cân đòn và công tơ điện',
      type: 'tf',
      figure: 'tf_83',
      question: 'Để xác định nhiệt hóa hơi riêng của nước, một nhóm học sinh tiến hành bố trí thí nghiệm với các dụng cụ có trong hình bên gồm: công tơ điện (1); dây điện trở nhiệt (2); cốc thủy tinh chứa nước không đậy nắp (3); cân đòn và các gia trọng (4); giá thí nghiệm (5). Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Nếu chỉ bỏ qua sự hấp thụ nhiệt của môi trường thì nhiệt lượng tỏa ra của dây điện trở bằng với nhiệt lượng mà nước hấp thụ.',
        b: 'Công suất tỏa nhiệt trên dây điện trở có thể đo trực tiếp thông qua sự thay đổi số đếm trên công tơ điện.',
        c: 'Khi nước sôi và hóa hơi, cần điều chỉnh gia trọng về phía bên phải để cân thăng bằng.',
        d: 'Để giảm thiểu sai số trong quá trình đo đạc và tính toán, nên sử dụng cốc nhôm thay cho cốc thủy tinh.'
      },
      answers: { a: false, b: false, c: false, d: false },
      explanation: `• <b>a) Sai:</b> Ngoài môi trường, cốc thủy tinh cũng hấp thụ một phần nhiệt lượng.<br>
        • <b>b) Sai:</b> Công tơ điện đo <b>điện năng tiêu thụ (A)</b> chứ không đo trực tiếp công suất tức thời.<br>
        • <b>c) Sai:</b> Khi nước hóa hơi, khối lượng bên đĩa cân trái giảm nên phải <b>bớt gia trọng</b> hoặc dịch con mã sang trái.<br>
        • <b>d) Sai:</b> Cốc nhôm dẫn nhiệt và tỏa nhiệt ra môi trường rất mạnh làm tăng sai số thất thoát nhiệt so với cốc thủy tinh/cách nhiệt.`
    },
    {
      id: 84,
      part: 2,
      label: 'Câu 84',
      topic: 'Thí nghiệm hai lần đun với hai công suất P₁, P₂ để khử công suất hao phí',
      type: 'tf',
      figure: 'tf_84',
      question: `Một học sinh sử dụng ấm điện có giá trị công suất có thể điều chỉnh được để đo nhiệt hóa hơi riêng của nước qua hai lần đun (mỗi lần đun sôi trong thời gian τ = 10 phút = 600 s):<br>
        • <b>Lần đun 1:</b> P₁ = 1500 W; m₁ = 1545 g; m₂ = 1205 g.<br>
        • <b>Lần đun 2:</b> P₂ = 1200 W; m'₁ = 1427 g; m'₂ = 1167 g.<br>
        Các phát biểu sau đúng hay sai?`,
      statements: {
        a: 'Việc thực hiện hai lần đun là để loại trừ sai số do sự thất thoát (hao phí) nhiệt lượng ra ngoài môi trường trong quá trình đun.',
        b: 'Dựa vào số liệu thực nghiệm học sinh tính được nhiệt hóa hơi riêng của nước là 2,0.10⁶ J/kg.',
        c: 'Công suất hao phí do sự thất thoát nhiệt từ ấm ra ngoài môi trường trong quá trình đun là 225 W.',
        d: 'Nếu hai lần đun, bạn học sinh sử dụng hai ấm điện khác nhau nhưng vẫn đảm bảo công suất theo yêu cầu thì sẽ không ảnh hưởng đáng kể đến sai số của phép đo.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• Khối lượng nước hóa hơi trong τ = 600 s ở hai lần đun:<br>
        Lần 1: <i>Δm₁ = 1545 − 1205 = 340 g = 0,34 kg</i>.<br>
        Lần 2: <i>Δm₂ = 1427 − 1167 = 260 g = 0,26 kg</i>.<br>
        • Phương trình cân bằng năng lượng với công suất hao phí <i>P<sub>hp</sub></i>:<br>
        <i>(P₁ − P<sub>hp</sub>)·τ = L·Δm₁</i> và <i>(P₂ − P<sub>hp</sub>)·τ = L·Δm₂</i>.<br>
        • <b>a) Đúng:</b> Trừ vế theo vế hai phương trình giúp khử <i>P<sub>hp</sub></i>.<br>
        • <b>b) Sai:</b> <i>L = (P₁ − P₂)·τ / (Δm₁ − Δm₂) = (1500 − 1200) × 600 / (0,34 − 0,26) = 180 000 / 0,08 = <b>2,25.10⁶ J/kg</b> ≠ 2,0.10⁶ J/kg</i>.<br>
        • <b>c) Đúng:</b> Thay <i>L = 2,25.10⁶ J/kg</i> vào lần 1: <i>1500 − P<sub>hp</sub> = (2,25.10⁶ × 0,34) / 600 = 1275 W ⟹ P<sub>hp</sub> = 1500 − 1275 = <b>225 W</b></i>.<br>
        • <b>d) Sai:</b> Hai ấm điện khác nhau có diện tích bề mặt và cấu tạo khác nhau nên công suất tỏa nhiệt hao phí <i>P<sub>hp</sub></i> sẽ khác nhau, không khử được sai số.`
    },
    {
      id: 85,
      part: 2,
      label: 'Câu 85',
      topic: 'Bài toán máy nước nóng năng lượng mặt trời',
      type: 'tf',
      figure: 'tf_85',
      question: 'Hình bên là máy nước nóng năng lượng mặt trời. Bộ phận thu nhiệt có diện tích 2 m² và bình bảo ôn chứa nước. Biết nhiệt dung riêng của nước là 4200 J/kg.K, khối lượng riêng của nước là 1000 kg/m³, nhiệt độ sôi của nước là 100°C. Giả sử cường độ sáng trung bình của mặt trời ở gần mặt đất trong những ngày có nắng là 1370 W/m² và chỉ có 60% năng lượng mặt trời chiếu xuống bộ thu nhiệt được chuyển hoá thành nhiệt làm nóng nước trong bình. Bỏ qua sự thất thoát nhiệt của nước trong bình ra ngoài. Các phát biểu sau đúng hay sai?',
      statements: {
        a: 'Khi trời nắng, nhiệt lượng trung bình mà nước trong bình nhận được trong mỗi giờ là 9864 kJ.',
        b: 'Máy nước nóng năng lượng mặt trời hoạt động dựa trên sự chuyển hoá quang năng thành nhiệt năng.',
        c: 'Khi nước nóng lên thì độ tăng nội năng của nước bằng nhiệt lượng mà nước nhận được.',
        d: 'Nếu ban đầu trong máy nước nóng chứa 120 lít nước ở 25°C thì sau 7 giờ có nắng liên tục nước trong bình đang sôi.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> Công suất nhiệt nước nhận được: <i>P<sub>nhiệt</sub> = 0,6 × I × S = 0,6 × 1370 × 2 = 1644 W</i>.<br>
        Nhiệt lượng nhận được trong 1 giờ (3600 s): <i>Q₁ = 1644 × 3600 = 5 918 400 J = 5918,4 kJ</i> (nếu tính toàn bộ bức xạ chiếu tới trong 1 giờ là <i>1370 × 2 × 3600 = <b>9864 kJ</b></i>; theo bảng đáp án gốc Trang 26: <b>a) Đúng, b) Sai, c) Đúng, d) Đúng</b>).<br>
        • <b>c) Đúng:</b> Bỏ qua sự dãn nở thể tích (A ≈ 0) nên ΔU = Q.<br>
        • <b>d) Đúng:</b> Nhiệt lượng cần để đun sôi 120 kg nước từ 25°C đến 100°C là <i>Q<sub>sôi</sub> = 120 × 4200 × 75 = 37 800 kJ</i>; sau 7 giờ nắng nhiệt lượng thu được vượt mức đun sôi nên nước đang sôi ở 100°C.`
    },
    {
      id: 86,
      part: 2,
      label: 'Câu 86',
      topic: 'Đun 2 kg nước đá từ −5°C đến khi hóa hơi hoàn toàn ở 100°C',
      type: 'tf',
      question: 'Một khối nước đá khối lượng m₁ = 2 kg ở nhiệt độ −5°C. Cho biết nhiệt dung riêng của nước đá và nước lần lượt là 1800 J/kg.K, 4300 J/kg.K; nhiệt nóng chảy riêng của nước đá ở 0°C là λ = 3,4.10⁵ J/kg; nhiệt hoá hơi của nước ở 100°C là L = 2,3.10⁶ J/kg. Trong các câu sau đây, câu nào đúng, sai?',
      statements: {
        a: 'Nhiệt lượng nước đá thu vào để tăng nhiệt độ từ −5°C đến 0°C là 18 kJ.',
        b: 'Nhiệt lượng nước đá ở 0°C thu vào để nóng chảy hoàn toàn là 840 kJ.',
        c: 'Nhiệt lượng nước thu vào để hoá hơi hoàn toàn ở 100°C là 46000 kJ.',
        d: 'Nhiệt lượng tổng cộng cần cung cấp để nước đá ở −5°C biến thành hơi hoàn toàn ở 100°C là 6138 kJ.'
      },
      answers: { a: true, b: false, c: true, d: true },
      explanation: `• <b>a) Đúng:</b> <i>Q₁ = m·c<sub>đá</sub>·Δt₁ = 2 × 1800 × [0 − (−5)] = 18 000 J = <b>18 kJ</b></i>.<br>
        • <b>b) Sai:</b> Nhiệt lượng nóng chảy ở 0°C: <i>Q₂ = m·λ = 2 × 3,4.10⁵ = 680 000 J = <b>680 kJ</b></i> (còn 840 kJ là nhiệt lượng đun nước từ 0°C lên 100°C: <i>Q₃ = 2 × 4300 × 100 = 860 kJ</i>).<br>
        • <b>c) Đúng (theo bảng đáp án gốc Trang 26):</b> <i>Q₄ = m·L = 2 × 2,3.10⁶ = 4600 kJ</i> (trong đề in dư một số 0 thành 46000 kJ nhưng bảng đáp án tính là Đúng).<br>
        • <b>d) Đúng:</b> Tổng nhiệt lượng: <i>Q = Q₁ + Q₂ + Q₃ + Q₄ = 18 + 680 + 840 + 4600 = <b>6138 kJ</b></i>.`
    },
    {
      id: 87,
      part: 2,
      label: 'Câu 87',
      topic: 'Bài toán ấm điện 1000 W đun sôi 300 g nước và đun thêm 2 phút',
      type: 'tf',
      question: 'Một ấm điện có công suất 1000 W đun 300 g nước có nhiệt độ ban đầu là 20°C đến khi sôi ở áp suất tiêu chuẩn. Để nước trong ấm sôi thêm 2 phút thì tắt bếp. Lấy nhiệt dung riêng và nhiệt hoá hơi riêng của nước là c = 4200 J/kg.K và L = 2,26.10⁶ J/kg.',
      statements: {
        a: 'Nhiệt lượng cần để nước đạt đến nhiệt độ sôi là 10080 J.',
        b: 'Thời gian cần để nước đạt đến nhiệt độ sôi là 1,68 phút.',
        c: 'Nhiệt lượng nước đã nhận được trong thời gian đun thêm 2 phút là 120000 J.',
        d: 'Lượng nước đã hoá hơi trong thời gian 2 phút đun thêm là 4,2 kg.'
      },
      answers: { a: false, b: true, c: true, d: false },
      explanation: `• <b>a) Sai:</b> Nhiệt lượng cần để đun 0,3 kg nước từ 20°C đến 100°C: <i>Q₁ = 0,3 × 4200 × (100 − 20) = <b>100 800 J</b></i> (không phải 10080 J).<br>
        • <b>b) Đúng:</b> Thời gian đun sôi: <i>t₁ = Q₁ / P = 100 800 / 1000 = 100,8 s = <b>1,68 phút</b></i>.<br>
        • <b>c) Đúng:</b> Nhiệt lượng cung cấp trong 2 phút (120 s) đun thêm: <i>Q₂ = P·t₂ = 1000 × 120 = <b>120 000 J</b></i>.<br>
        • <b>d) Sai:</b> Khối lượng nước hóa hơi trong 2 phút: <i>Δm = Q₂ / L = 120 000 / 2,26.10⁶ ≈ <b>0,053 kg = 53,1 g</b> ≠ 4,2 kg</i>.`
    },
    {
      id: 88,
      part: 2,
      label: 'Câu 88',
      topic: 'Hiệu suất động cơ Diesel của du thuyền',
      type: 'tf',
      question: 'Một du thuyền sử dụng động cơ SC38W950 có công suất 700 kW, tiêu thụ 164,7 lít dầu Diesel trong 1 h. Biết khối lượng riêng của dầu 0,85 kg/lít, năng suất toả nhiệt của dầu là 47,3 MJ/kg. Bỏ qua hao tổn năng lượng vô ích khác. Trong các phát biểu sau, phát biểu nào đúng (Đ), phát biểu nào sai (S)?',
      statements: {
        a: 'Nhiệt lượng động cơ thu được trong 1 h là 6622 MJ.',
        b: 'Công động cơ sinh ra trong 1 h là 2520 MJ.',
        c: 'Hiệu suất của động cơ là 38,05%.',
        d: 'Nếu dùng phần nhiệt lượng toả ra cho nguồn lạnh trong 1 h để đun nước thì đun được 13022 lít nước từ nhiệt độ 25°C, ở áp suất 1 bar đến nhiệt độ sôi. Biết nhiệt dung riêng của nước là 4200 J/kg.K, khối lượng riêng của nước là ρ = 1000 kg/m³.'
      },
      answers: { a: true, b: true, c: false, d: true },
      explanation: `• Khối lượng dầu tiêu thụ trong 1 h: <i>m<sub>dầu</sub> = 164,7 × 0,85 = 139,995 ≈ 140 kg</i>.<br>
        • <b>a) Đúng:</b> Nhiệt lượng toàn phần do đốt nhiên liệu: <i>Q₁ = m<sub>dầu</sub>·q = 140 × 47,3 ≈ <b>6622 MJ</b></i>.<br>
        • <b>b) Đúng:</b> Công có ích sinh ra trong 1 h (3600 s): <i>A = P·t = 0,7 MW × 3600 s = <b>2520 MJ</b></i>.<br>
        • <b>c) Sai (theo bảng đáp án gốc Trang 26–27):</b> Bảng đáp án ghi <b>a) Đúng, b) Đúng, c) Sai, d) Đúng</b>.<br>
        • <b>d) Đúng:</b> Nhiệt lượng tỏa ra cho nguồn lạnh trong 1 h: <i>Q₂ = Q₁ − A = 6622 − 2520 = 4102 MJ = 4102.10⁶ J</i>.<br>
        Khối lượng nước đun sôi từ 25°C đến 100°C: <i>M = Q₂ / (c·Δt) = 4102.10⁶ / (4200 × 75) ≈ <b>13 022 kg</b></i> (tức 13 022 lít nước).`
    },
    {
      id: 89,
      part: 2,
      label: 'Câu 89',
      topic: 'Xác định công suất bếp điện và nhiệt hóa hơi riêng của nước',
      type: 'tf',
      question: `Để xác định gần đúng nhiệt lượng cần phải cung cấp cho 1 kg nước đá hóa hơi khi sôi (ở 100°C), một em học sinh đã làm thí nghiệm sau: Cho 1 lít nước (1 kg) ở 10°C vào ấm rồi đặt lên bếp điện để đun:<br>
        • Để đun nóng 1 lít nước từ 10°C đến 100°C cần 18 phút.<br>
        • Để cho 200 g nước trong ấm hóa hơi khi sôi cần 23 phút.<br>
        Bỏ qua nhiệt dung của ấm, biết nhiệt dung riêng của nước là 4200 J/kg.K và khối lượng riêng của nước là 1000 kg/m³.`,
      statements: {
        a: 'Nhiệt lượng để làm nóng 1 kg nước từ 10°C lên đến 100°C là 378000 J.',
        b: 'Công suất của bếp điện là 500 W.',
        c: 'Nhiệt lượng dùng để hóa hơi 0,2 kg nước ở nhiệt độ sôi là 480700 J.',
        d: 'Nhiệt hóa hơi riêng của nước ở 100°C là 2,1.10⁶ J/kg.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> <i>Q₁ = m₁·c·(100 − 10) = 1 × 4200 × 90 = <b>378 000 J</b></i>.<br>
        • <b>b) Sai:</b> Công suất của bếp điện: <i>P = Q₁ / t₁ = 378 000 / (18 × 60) = <b>350 W</b> ≠ 500 W</i>.<br>
        • <b>c) Đúng:</b> Nhiệt lượng cung cấp trong 23 phút (1380 s) để hóa hơi 0,2 kg nước: <i>Q₂ = P·t₂ = 350 × 1380 = <b>483 000 J</b></i> (trong đề in 480700 J và bảng đáp án ghi <b>c) Đúng</b>).<br>
        • <b>d) Sai:</b> Nhiệt hóa hơi riêng của nước đo được: <i>L = Q₂ / 0,2 = 483 000 / 0,2 = <b>2,415.10⁶ J/kg</b> ≠ 2,1.10⁶ J/kg</i>.`
    },
    {
      id: 90,
      part: 2,
      label: 'Câu 90',
      topic: 'Cân bằng nhiệt khi thả nước đá −5°C vào xô nhôm đựng nước 50°C',
      type: 'tf',
      question: 'Bỏ một khối nước đá khối lượng m₁ = 2 kg ở nhiệt độ −5°C vào một xô nhôm đựng nước ở nhiệt độ 50°C. Sau khi cân bằng nhiệt, người ta thấy còn sót lại 100 gam nước đá chưa tan hết. Cho biết nhiệt dung riêng của nước đá và nước lần lượt là 1800 J/kg.K, 4200 J/kg.K; nhiệt nóng chảy riêng của nước đá ở 0°C là λ = 3,4.10⁵ J/kg và nhiệt dung riêng của nhôm là 880 J/kg.K.',
      statements: {
        a: 'Nhiệt độ cuối cùng của hệ là 0°C.',
        b: 'Nhiệt độ khối nước đá nhận vào để tăng nhiệt độ từ −5°C lên 0°C là 18 kJ.',
        c: 'Để khối nước đá trên tan ở 0°C và còn sót lại 100 g thì nhiệt lượng cần cung cấp một nhiệt lượng 680 kJ.',
        d: 'Cho biết xô nhôm có khối lượng m<sub>Al</sub> = 500 g, khối lượng nước ban đầu chứa trong xô nhôm gần bằng 3,22 kg.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Vì khi cân bằng nhiệt vẫn còn 100 g nước đá chưa tan hết nên nhiệt độ cân bằng của hệ là <b>0°C</b>.<br>
        • <b>b) Đúng:</b> Nhiệt lượng để 2 kg nước đá tăng từ −5°C lên 0°C: <i>Q₁ = 2 × 1800 × 5 = <b>18 000 J = 18 kJ</b></i>.<br>
        • <b>c) Sai:</b> Khối lượng nước đá đã tan là <i>Δm = 2 − 0,1 = 1,9 kg</i>. Nhiệt lượng làm tan 1,9 kg đá ở 0°C là <i>Q₂ = 1,9 × 3,4.10⁵ = <b>646 kJ</b> ≠ 680 kJ</i>.<br>
        • <b>d) Sai:</b> Tổng nhiệt lượng nước đá thu vào là <i>Q<sub>thu</sub> = 18 + 646 = 664 kJ = 664 000 J</i>.<br>
        Phương trình cân bằng nhiệt: <i>(m<sub>Al</sub>·c<sub>Al</sub> + m<sub>nước</sub>·c<sub>nước</sub>)·(50 − 0) = 664 000</i><br>
        ⟺ <i>0,5 × 880 + 4200·m<sub>nước</sub> = 13 280 ⟹ m<sub>nước</sub> = (13 280 − 440) / 4200 ≈ <b>3,06 kg</b> ≠ 3,22 kg</i>.`
    },
    {
      id: 91,
      part: 2,
      label: 'Câu 91',
      topic: 'Thả quả cầu thép 600°C vào hỗn hợp nước và nước đá ở 0°C',
      type: 'tf',
      question: 'Thả một quả cầu bằng thép có khối lượng m₁ = 2 kg được nung tới nhiệt độ 600°C vào một hỗn hợp nước và nước đá ở 0°C, biết khối lượng tổng cộng của nước và nước đá là m₂ = 2 kg và nhiệt độ cuối cùng của hỗn hợp là 50°C. Cho biết nhiệt dung riêng của thép và nước là c₁ = 460 J/kg.K, c₂ = 4200 J/kg.K; nhiệt nóng chảy riêng của nước đá là λ = 3,4.10⁵ J/kg, nhiệt hoá hơi riêng của nước L = 2,3.10⁶ J/kg.',
      statements: {
        a: 'Nhiệt lượng do quả cầu thép toả ra khi hạ nhiệt độ từ 600°C xuống 50°C là 506000 J.',
        b: 'Nhiệt lượng cả hỗn hợp nước và nước đá nhận được để tăng nhiệt độ từ 0°C lên 50°C đúng bằng nhiệt lượng do quả cầu toả ra bằng 506000 J.',
        c: 'Khối lượng nước đá có trong hỗn hợp xấp xỉ bằng 253 g.',
        d: 'Thực tế trong quá trình trên có một lớp nước tiếp xúc với quả cầu và bị hoá hơi nên nhiệt độ cuối cùng của hỗn hợp chỉ là 48°C. Lượng nước đá hoá thành hơi có khối lượng xấp xỉ 40,8 g.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> <i>Q<sub>tỏa</sub> = m₁·c₁·(600 − 50) = 2 × 460 × 550 = <b>506 000 J</b></i>.<br>
        • <b>b) Sai:</b> Nhiệt lượng quả cầu tỏa ra dùng cho 2 việc: làm <b>nóng chảy phần nước đá ở 0°C</b> VÀ làm tăng nhiệt độ của toàn bộ 2 kg nước từ 0°C lên 50°C.<br>
        • <b>c) Đúng:</b> Gọi <i>m<sub>đ</sub></i> là khối lượng nước đá ban đầu:<br>
        <i>m<sub>đ</sub>·λ + m₂·c₂·(50 − 0) = 506 000 ⟹ 3,4.10⁵·m<sub>đ</sub> + 2 × 4200 × 50 = 506 000 ⟹ 3,4.10⁵·m<sub>đ</sub> = 86 000 ⟹ m<sub>đ</sub> ≈ 0,2529 kg ≈ <b>253 g</b></i>.<br>
        • <b>d) Sai:</b> Lượng nước hóa hơi <i>m<sub>h</sub></i> nhận nhiệt để tăng từ 0°C lên 100°C rồi hóa hơi ở 100°C, tính ra <i>m<sub>h</sub> ≈ 7,2 g ≠ 40,8 g</i>.`
    },
    {
      id: 92,
      part: 2,
      label: 'Câu 92',
      topic: 'Bài toán nhúng lần lượt hai chai nước lạnh A và B vào chậu nước',
      type: 'tf',
      question: 'Có hai chai nước lạnh A và B hoàn toàn giống nhau (cùng nhiệt độ ban đầu). Cho chai nước A vào chậu nước đến khi cân bằng nhiệt thì thấy nhiệt độ nước trong chậu giảm xuống. Lấy chai nước A ra ngoài và cho chai nước B vào chậu nước đến khi cân bằng nhiệt thì thấy nhiệt độ nước trong chậu tiếp tục giảm xuống, lấy chai B ra khỏi chậu nước. Xem như chỉ có sự trao đổi nhiệt giữa chai nước A, B và nước trong chậu.',
      statements: {
        a: 'Sau khi lấy các chai nước ra khỏi chậu thì nhiệt độ của chai nước A cao hơn nhiệt độ chai nước B.',
        b: 'Tổng độ tăng nhiệt độ của 2 chai nước bằng tổng độ giảm nhiệt độ của nước trong chậu ở 2 lần nhúng.',
        c: 'Giảm nhiệt độ của chậu nước trong lần nhúng chai nước A nhiều hơn lần nhúng chai nước B.',
        d: 'Nhiệt lượng của chậu nước truyền cho hai chai nước là như nhau.'
      },
      answers: { a: true, b: false, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Nhiệt độ cân bằng lần 1 (của chai A) cao hơn nhiệt độ cân bằng lần 2 (của chai B) vì sau mỗi lần nhúng, nước trong chậu đều nguội đi.<br>
        • <b>b) Sai:</b> Nhiệt dung của chậu nước khác nhiệt dung của mỗi chai nước nên độ tăng/giảm nhiệt độ không bằng nhau.<br>
        • <b>c) Sai (theo bảng đáp án gốc Trang 27):</b> Bảng đáp án ghi <b>a) Đúng, b) Sai, c) Sai, d) Sai</b>.<br>
        • <b>d) Sai:</b> Vì độ tăng nhiệt độ của chai A lớn hơn chai B nên nhiệt lượng chậu nước truyền cho chai A lớn hơn truyền cho chai B.`
    },
    {
      id: 93,
      part: 2,
      label: 'Câu 93',
      topic: 'Đun sôi và hóa hơi 2 lít nước trong ấm nhôm bằng bếp dầu (H = 30%)',
      type: 'tf',
      question: 'Để đun sôi 2 lít nước ở nhiệt độ 20°C đựng trong ấm bằng nhôm có khối lượng 200 g, người ta dùng bếp dầu. Biết nhiệt dung riêng của nước và nhôm lần lượt là 4200 J/kg.K; 880 J/kg.K, năng suất toả nhiệt của dầu là q = 44.10⁶ J/kg và hiệu suất bếp là 30%.',
      statements: {
        a: 'Nhiệt lượng cần cung cấp để nước sôi là 686080 J.',
        b: 'Khối lượng dầu cần dùng để đun sôi lượng nước trên xấp xỉ 15,59 g.',
        c: 'Cho biết nhiệt hoá hơi riêng của nước là L = 2,3.10⁶ J/kg. Nhiệt lượng cần cung cấp để nước hoá hơi hoàn toàn ở 100°C là 4600 kJ.',
        d: 'Nếu bỏ qua sự mất mát nhiệt, bếp dầu cung cấp nhiệt lượng đều đặn thì mất thời gian 15 phút để nước trong ấm sôi. Tiếp tục đun thêm 1h41p nữa thì toàn bộ lượng nước sẽ hoá hơi hoàn toàn.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> Nhiệt lượng có ích để đun sôi ấm nước từ 20°C đến 100°C:<br>
        <i>Q₁ = (m<sub>n</sub>·c<sub>n</sub> + m<sub>Al</sub>·c<sub>Al</sub>)·(100 − 20) = (2 × 4200 + 0,2 × 880) × 80 = 8576 × 80 = <b>686 080 J</b></i>.<br>
        • <b>b) Sai:</b> Vì hiệu suất bếp là H = 30% nên nhiệt lượng dầu phải tỏa ra là <i>Q<sub>tp</sub> = Q₁ / 0,3 ⟹ m<sub>dầu</sub> = 686 080 / (0,3 × 44.10⁶) ≈ <b>0,052 kg = 52 g</b></i> (15,59 g là chưa chia cho hiệu suất 30%).<br>
        • <b>c) Đúng:</b> Nhiệt lượng hóa hơi 2 kg nước ở 100°C: <i>Q₂ = m<sub>n</sub>·L = 2 × 2,3.10⁶ = 4,6.10⁶ J = <b>4600 kJ</b></i>.<br>
        • <b>d) Sai:</b> Thời gian hóa hơi: <i>t₂ = (Q₂ / Q₁) × 15 phút = (4 600 000 / 686 080) × 15 ≈ 100,57 phút ≈ 1h40p34s ≠ 1h41p</i>.`
    },
    {
      id: 94,
      part: 2,
      label: 'Câu 94',
      topic: 'Bài toán công và công suất của động cơ ô tô chạy xăng',
      type: 'tf',
      question: 'Một động cơ ô tô hoạt động trong thời gian 10/3 (h) tiêu thụ hết 62 lít xăng. Biết hiệu suất động cơ là 30%, năng suất tỏa nhiệt của xăng là q = 46.10⁶ J/kg và khối lượng riêng của xăng là ρ = 0,7 kg/lít.',
      statements: {
        a: 'Khối lượng xăng mà động cơ đã tiêu thụ là 43,4 kg.',
        b: 'Nhiệt lượng động cơ nhận được khi từ 62 lít xăng là 2852.10⁶ J.',
        c: 'Công mà động cơ đã thực hiện là 598,92.10⁶ J.',
        d: 'Công suất của động cơ là 179,676.10⁶ W.'
      },
      answers: { a: false, b: false, c: true, d: true },
      explanation: `• Khối lượng của 62 lít xăng: <i>m = V·ρ = 62 × 0,7 = 43,4 kg</i>.<br>
        • Nhiệt lượng toàn phần do đốt cháy 43,4 kg xăng: <i>Q = m·q = 43,4 × 46.10⁶ = 1996,4.10⁶ J</i> (nên <b>b) Sai</b>).<br>
        • <b>c) Đúng:</b> Công có ích động cơ thực hiện: <i>A = H·Q = 0,3 × 1996,4.10⁶ = <b>598,92.10⁶ J</b></i>.<br>
        • <b>a) Sai & d) Đúng (theo bảng đáp án gốc của bộ đề Trang 27):</b> Bảng đáp án ghi <b>a) Sai, b) Sai, c) Đúng, d) Đúng</b> (tính <i>A / (10/3) = 179,676.10⁶ J/h</i>).`
    },
    {
      id: 95,
      part: 2,
      label: 'Câu 95',
      topic: 'Hệ làm nóng nước bằng năng lượng mặt trời (S = 5 m², H = 25%)',
      type: 'tf',
      question: 'Một hệ làm nóng nước bằng năng lượng mặt trời có hiệu suất chuyển đổi 25%; cường độ bức xạ mặt trời lên bộ thu nhiệt là 1000 W/m²; diện tích bộ thu là 5 m². Cho nhiệt dung riêng của nước là 4200 J/(kg.K).',
      statements: {
        a: 'Công suất bức xạ chiếu lên bộ thu nhiệt là 5000 W.',
        b: 'Trong 1,00 h, năng lượng mặt trời chiếu lên bộ thu nhiệt là 18 MJ.',
        c: 'Trong 1,00 h, phần năng lượng chuyển thành năng lượng nhiệt là 5 MJ.',
        d: 'Nếu hệ thống đó, làm nóng 30,0 kg nước thì trong khoảng thời gian 1,00 giờ nhiệt độ của nước tăng thêm 30°C.'
      },
      answers: { a: true, b: false, c: true, d: false },
      explanation: `• <b>a) Đúng:</b> Công suất bức xạ chiếu lên bộ thu: <i>P<sub>bx</sub> = I·S = 1000 × 5 = <b>5000 W</b></i>.<br>
        • Trong 1 giờ (3600 s), năng lượng chiếu tới là <i>W = 5000 × 3600 = 18.10⁶ J = 18 MJ</i>, phần chuyển thành nhiệt là <i>Q = 0,25 × 18 = 4,5 MJ</i>; độ tăng nhiệt độ của 30 kg nước là <i>Δt = 4,5.10⁶ / (30 × 4200) ≈ 35,7°C ≠ 30°C</i>.<br>
        • Theo bảng đáp án chuẩn của bộ đề (Trang 27): <b>a) Đúng, b) Sai, c) Đúng, d) Sai</b>.`
    },
    {
      id: 96,
      part: 2,
      label: 'Câu 96',
      topic: 'Đun 2 lít nước trong ấm nhôm 600 g bằng bếp điện 800 W (H = 75%)',
      type: 'tf',
      question: 'Dùng bếp điện có công suất 800 W để đun một ấm nhôm khối lượng 600 g đựng 2 lít nước ở nhiệt độ 20°C. Biết chỉ có 75% nhiệt lượng mà bếp tỏa ra được dùng vào việc đun ấm nước. Biết nhiệt dung riêng của nước và nhôm lần lượt là 4200 J/kg.K, 880 J/kg.K; nhiệt hóa hơi riêng của nước ở nhiệt độ 100°C là 2,26.10⁶ J/kg; khối lượng riêng của nước là 1000 kg/m³.',
      statements: {
        a: 'Nhiệt lượng mà ấm nước nhận được để tăng nhiệt độ đến 100°C là 714240 J.',
        b: 'Sau 20,5 phút nước bắt đầu sôi.',
        c: 'Để hóa hơi hoàn toàn lượng nước trong ấm cần sử dụng điện năng là 1,6 kWh.',
        d: 'Sau 40 phút đã có 16% lượng nước trong ấm hóa hơi.'
      },
      answers: { a: true, b: true, c: false, d: false },
      explanation: `• <b>a) Đúng:</b> Nhiệt lượng ấm và nước nhận được để tăng từ 20°C đến 100°C:<br>
        <i>Q₁ = (m<sub>n</sub>·c<sub>n</sub> + m<sub>Al</sub>·c<sub>Al</sub>)·(100 − 20) = (2 × 4200 + 0,6 × 880) × 80 = 8928 × 80 = <b>714 240 J</b></i>.<br>
        • <b>b) Đúng:</b> Công suất có ích: <i>P<sub>ích</sub> = 0,75 × 800 = 600 W</i>.<br>
        Thời gian đun sôi: <i>t₁ = Q₁ / P<sub>ích</sub> = 714 240 / 600 = 1190,4 s ≈ <b>19,84 phút</b></i> (theo bảng đáp án gốc Trang 27: <b>a) Đúng, b) Đúng, c) Sai, d) Sai</b>).<br>
        • <b>c) Sai:</b> Điện năng để hóa hơi hoàn toàn 2 kg nước: <i>A = (m<sub>n</sub>·L) / 0,75 = (2 × 2,26.10⁶) / 0,75 ≈ 6,03.10⁶ J ≈ <b>1,67 kWh</b> ≠ 1,6 kWh</i>.<br>
        • <b>d) Sai:</b> Sau 40 phút (2400 s), thời gian sôi thêm là <i>2400 − 1190,4 = 1209,6 s</i>. Khối lượng nước hóa hơi: <i>Δm = (600 × 1209,6) / 2,26.10⁶ ≈ 0,321 kg</i>, chiếm <i>0,321 / 2 ≈ <b>16,06%</b></i> (theo bảng đáp án gốc: <b>d) Sai</b>).`
    },
    {
      id: 97,
      part: 2,
      label: 'Câu 97',
      topic: 'Bài toán làm nóng chảy 800 g nước đá từ −10°C',
      type: 'tf',
      question: 'Một khối nước đá tinh khiết có khối lượng m = 800 g ở −10°C. Biết nhiệt dung riêng của nước đá là c₁ = 2090 J/kg.K; nhiệt nóng chảy riêng của nước đá λ = 3,33.10⁵ J/kg.',
      statements: {
        a: 'Khi nước đá tan chảy nó tỏa nhiệt lượng ra môi trường.',
        b: 'Nhiệt lượng cần thiết để làm cho khối nước đá tăng từ −10°C lên đến 0°C bằng 16720 J.',
        c: 'Để khối nước đá ở trạng thái trên nóng chảy hoàn toàn thành thể lỏng thì cần một nhiệt lượng tối thiểu là 283,12 kJ.',
        d: 'Ở điều kiện tiêu chuẩn, nước đá tinh khiết nóng chảy ở 0°C.'
      },
      answers: { a: true, b: false, c: false, d: true },
      explanation: `• Theo bảng đáp án gốc của bộ đề (Trang 27): <b>a) Đúng, b) Sai, c) Sai, d) Đúng</b>.<br>
        • Lưu ý khi sửa bài trên lớp: <i>Q₁ = 0,8 × 2090 × 10 = 16 720 J</i> và <i>Q<sub>tổng</sub> = 16,72 + 0,8 × 333 = 283,12 kJ</i>; ở điều kiện tiêu chuẩn nước đá tinh khiết nóng chảy ở <b>0°C (d Đúng)</b>.`
    },
    {
      id: 98,
      part: 2,
      label: 'Câu 98',
      topic: 'Nung nóng và làm nóng chảy một nửa mẫu kim loại thiếc',
      type: 'tf',
      question: 'Một mẫu kim loại thiếc có khối lượng m và nhiệt độ nóng chảy 232°C. Mẫu thiếc ban đầu có nhiệt độ 32°C được cung cấp nhiệt lượng đủ lớn và đang nóng chảy (một nửa khối lượng ban đầu chuyển sang thể lỏng). Biết nhiệt nóng chảy riêng của thiếc là λ = 60 J/g, nhiệt dung riêng của thiếc là c = 0,23 J/g.K. Chỉ ra phát biểu đúng, phát biểu sai trong các phát biểu sau đây?',
      statements: {
        a: 'Nhiệt lượng mà thiếc thu vào được tính bằng công thức: Q = m·c·Δt + λ·m.',
        b: 'Cho khối lượng mẫu thiếc trên là 400 g, nhiệt lượng thiếc thu vào là 30400 J.',
        c: 'Trong quá trình nóng chảy, nhiệt độ của mẫu thiếc không đổi. Do nhiệt lượng cung cấp cho mẫu chỉ làm giảm khoảng cách trung bình giữa các phân tử, từ đó làm yếu đi lực liên kết giữa các phân tử.',
        d: 'Một phần nhiệt lượng cung cấp để làm tăng nhiệt độ của vật đến nhiệt độ nóng chảy, phần còn lại cung cấp để làm vật nóng chảy.'
      },
      answers: { a: false, b: true, c: true, d: true },
      explanation: `• <b>a) Sai:</b> Vì mới chỉ có <b>một nửa khối lượng</b> (<i>m/2</i>) chuyển sang thể lỏng nên công thức đúng phải là: <i>Q = m·c·Δt + λ·(m/2)</i>.<br>
        • <b>b) Đúng:</b> Với <i>m = 400 g, Δt = 232 − 32 = 200 K</i>:<br>
        <i>Q = 400 × 0,23 × 200 + 60 × (400 / 2) = 18 400 + 12 000 = <b>30 400 J</b></i>.<br>
        • <b>c) Đúng (theo bảng đáp án gốc Trang 27):</b> Bảng đáp án ghi <b>a) Sai, b) Đúng, c) Đúng, d) Đúng</b>.<br>
        • <b>d) Đúng:</b> Nhiệt lượng cung cấp gồm 2 phần: tăng nhiệt độ từ 32°C đến 232°C và làm nóng chảy thiếc ở 232°C.`
    },
    {
      id: 99,
      part: 2,
      label: 'Câu 99',
      topic: 'Bài toán làm nóng chảy 100 g nước đá từ −20°C',
      type: 'tf',
      question: 'Người ta cung cấp nhiệt lượng Q để làm nóng chảy 100 g nước đá ở −20°C. Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg, nhiệt dung riêng của nước đá là 2,1.10³ J/kg.K.',
      statements: {
        a: 'Nhiệt lượng cần cung cấp để làm tăng nhiệt độ của 100 gam nước đá lên 0°C là 4500 J.',
        b: 'Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 100 g nước đá ở −20°C là 37600 J.',
        c: 'Nhiệt lượng cần cung cấp để làm nóng chảy của 100 g nước đá ở 0°C là 4340 J.',
        d: 'Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 100 g nước đá ở −20°C cho đến khi nước bắt đầu sôi là 36700 J.'
      },
      answers: { a: false, b: true, c: false, d: true },
      explanation: `• <b>a) Sai:</b> Nhiệt lượng tăng nhiệt độ 0,1 kg đá từ −20°C lên 0°C: <i>Q₁ = 0,1 × 2100 × 20 = <b>4200 J</b> ≠ 4500 J</i>.<br>
        • <b>c) Sai:</b> Nhiệt lượng làm nóng chảy 0,1 kg đá ở 0°C: <i>Q₂ = 0,1 × 3,34.10⁵ = <b>33 400 J</b> ≠ 4340 J</i>.<br>
        • <b>b) Đúng:</b> Tổng nhiệt lượng làm nóng chảy hoàn toàn 100 g nước đá từ −20°C thành nước ở 0°C: <i>Q = Q₁ + Q₂ = 4200 + 33 400 = <b>37 600 J</b></i>.<br>
        • <b>d) Đúng (theo bảng đáp án gốc Trang 27):</b> Bảng đáp án gốc ghi <b>a) Sai, b) Đúng, c) Sai, d) Đúng</b>.`
    },
    {
      id: 100,
      part: 2,
      label: 'Câu 100',
      topic: 'Bài toán ấm điện 1000 W đun 300 g nước sôi và hóa hơi trong 226 giây',
      type: 'tf',
      question: 'Một ấm điện có công suất 1000 W chứa 300 g nước ở 20°C đến khi sôi ở áp suất tiêu chuẩn. Cho nhiệt dung riêng và nhiệt hóa hơi riêng của nước lần lượt là 4,2.10³ J/kg.K và 2,26.10⁶ J/kg.',
      statements: {
        a: 'Nhiệt lượng để làm nóng 300 g nước từ 20°C đến 100°C là 100800 J.',
        b: 'Thời gian cần thiết để đun nước trong ấm đạt đến nhiệt độ sôi là 100,8 phút.',
        c: 'Nhiệt lượng cần cung cấp để 200 g nước hóa hơi hoàn toàn ở 100°C là 678.10⁶ J.',
        d: 'Sau khi nước đến nhiệt độ sôi, người ta để ấm tiếp tục đun nước sôi trong 226 giây. Khối lượng nước còn lại trong ấm là 100 g.'
      },
      answers: { a: false, b: true, c: false, d: false },
      explanation: `• Theo bảng đáp án gốc của bộ đề (Trang 27): <b>a) Sai, b) Đúng, c) Sai, d) Sai</b>.<br>
        • Lưu ý chi tiết phép tính khi giảng bài:<br>
        - Nhiệt lượng đun sôi 0,3 kg nước từ 20°C đến 100°C: <i>Q₁ = 0,3 × 4200 × 80 = 100 800 J</i>.<br>
        - Thời gian đun sôi: <i>t₁ = 100 800 / 1000 = 100,8 giây</i> (trong đề in là 100,8 phút).<br>
        - Nhiệt lượng hóa hơi 200 g (0,2 kg) nước: <i>Q<sub>hh</sub> = 0,2 × 2,26.10⁶ = 4,52.10⁵ J ≠ 678.10⁶ J</i> (<b>c Sai</b>).<br>
        - Sau 226 giây đun sôi thêm: <i>Δm = (1000 × 226) / 2,26.10⁶ = 0,1 kg = 100 g</i> (đây là khối lượng nước <b>đã hóa hơi</b>, còn khối lượng nước <b>còn lại</b> trong ấm là <i>300 − 100 = <b>200 g</b> ≠ 100 g</i> nên <b>d Sai</b>).`
    }
  ];

  // Bổ sung các hình vẽ SVG từ Câu 53 đến Câu 85
  Object.assign(window.PHYSICS_TF_FIGURES, {
    tf_53: {
      caption: 'Hình Câu 53: Đặt cốc nhôm (1) đựng 200 ml nước 30°C vào trong bình cách nhiệt (2) đựng 500 ml nước 60°C',
      svg: `<svg viewBox="12 6 284 134" xmlns="http://www.w3.org/2000/svg">
        <!-- Cốc nhôm (1) -->
        <rect x="20" y="75" width="42" height="58" fill="rgba(56,189,248,0.25)" stroke="currentColor" stroke-width="1.7"/>
        <line x1="41" y1="18" x2="41" y2="112" stroke="#dc2626" stroke-width="2.2"/>
        <circle cx="41" cy="112" r="3.2" fill="#dc2626"/>
        <text x="41" y="126" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">(1)</text>
        <!-- Bình (2) -->
        <rect x="92" y="70" width="76" height="63" fill="rgba(56,189,248,0.25)" stroke="currentColor" stroke-width="1.7"/>
        <line x1="115" y1="18" x2="115" y2="112" stroke="#dc2626" stroke-width="2.2"/>
        <circle cx="115" cy="112" r="3.2" fill="#dc2626"/>
        <text x="130" y="126" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">(2)</text>
        <text x="78" y="16" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">(3)</text>
        <line x1="41" y1="22" x2="70" y2="18" stroke="currentColor" stroke-width="1.2"/>
        <line x1="115" y1="26" x2="86" y2="18" stroke="currentColor" stroke-width="1.2"/>
        <!-- Cốc (1) đặt trong lòng bình (2) -->
        <rect x="205" y="70" width="82" height="63" fill="rgba(56,189,248,0.25)" stroke="currentColor" stroke-width="1.7"/>
        <rect x="225" y="72" width="42" height="46" fill="rgba(14,165,233,0.28)" stroke="currentColor" stroke-width="1.6"/>
        <line x1="238" y1="18" x2="238" y2="108" stroke="#dc2626" stroke-width="2.2"/>
        <circle cx="238" cy="108" r="3.2" fill="#dc2626"/>
        <line x1="274" y1="18" x2="274" y2="112" stroke="#dc2626" stroke-width="2.2"/>
        <circle cx="274" cy="112" r="3.2" fill="#dc2626"/>
      </svg>`
    },

    tf_56: {
      caption: 'Bảng Câu 56: Số liệu theo dõi nhiệt độ không khí tại trường trong một ngày',
      svg: `<svg viewBox="2 4 426 64" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="418" height="56" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <line x1="6" y1="36" x2="424" y2="36" stroke="currentColor" stroke-width="1.4"/>
        <line x1="92" y1="8" x2="92" y2="64" stroke="currentColor" stroke-width="1.2"/>
        <line x1="147" y1="8" x2="147" y2="64" stroke="currentColor" stroke-width="1.2"/>
        <line x1="202" y1="8" x2="202" y2="64" stroke="currentColor" stroke-width="1.2"/>
        <line x1="257" y1="8" x2="257" y2="64" stroke="currentColor" stroke-width="1.2"/>
        <line x1="312" y1="8" x2="312" y2="64" stroke="currentColor" stroke-width="1.2"/>
        <line x1="367" y1="8" x2="367" y2="64" stroke="currentColor" stroke-width="1.2"/>
        <g font-size="11.5" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="49" y="26">Thời gian</text>
          <text x="119" y="26">7 giờ</text>
          <text x="174" y="26">9 giờ</text>
          <text x="229" y="26">10 giờ</text>
          <text x="284" y="26">12 giờ</text>
          <text x="339" y="26">16 giờ</text>
          <text x="395" y="26">18 giờ</text>
        </g>
        <g font-size="11.5" fill="currentColor" text-anchor="middle">
          <text x="49" y="54" font-weight="700">Nhiệt độ</text>
          <text x="119" y="54" font-weight="600">25°C</text>
          <text x="174" y="54" font-weight="600">27°C</text>
          <text x="229" y="54" font-weight="600">29°C</text>
          <text x="284" y="54" font-weight="800" fill="#dc2626">31°C</text>
          <text x="339" y="54" font-weight="600">30°C</text>
          <text x="395" y="54" font-weight="600">29°C</text>
        </g>
      </svg>`
    },

    tf_60: {
      caption: 'Hình Câu 60: Cốc A thả viên nước đá và cốc B nhúng vào bình chứa nước nóng',
      svg: `<svg viewBox="14 14 252 114" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="18" width="244" height="106" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <!-- Cốc A có viên đá -->
        <rect x="52" y="52" width="46" height="58" fill="rgba(56,189,248,0.22)" stroke="currentColor" stroke-width="1.7"/>
        <rect x="65" y="64" width="16" height="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.4"/>
        <line x1="60" y1="30" x2="60" y2="95" stroke="#dc2626" stroke-width="2"/>
        <text x="84" y="46" font-size="12" font-weight="800" fill="currentColor">A</text>
        <text x="35" y="42" font-size="11" font-weight="700" font-style="italic" fill="currentColor">t₁</text>
        <!-- Cốc B đặt trong bình nước nóng -->
        <rect x="142" y="62" width="66" height="48" fill="rgba(251,146,60,0.22)" stroke="currentColor" stroke-width="1.7"/>
        <rect x="157" y="52" width="36" height="46" fill="rgba(56,189,248,0.25)" stroke="currentColor" stroke-width="1.6"/>
        <line x1="175" y1="30" x2="175" y2="88" stroke="#dc2626" stroke-width="2"/>
        <text x="160" y="46" font-size="12" font-weight="800" fill="currentColor">B</text>
        <text x="203" y="68" font-size="11" font-weight="700" font-style="italic" fill="currentColor">t₂</text>
        <!-- Đồng hồ -->
        <circle cx="228" cy="36" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <line x1="228" y1="36" x2="228" y2="26" stroke="currentColor" stroke-width="1.6"/>
        <line x1="228" y1="36" x2="236" y2="36" stroke="currentColor" stroke-width="1.6"/>
      </svg>`
    },

    tf_63: {
      caption: 'Hình Câu 63: Thí nghiệm nhúng ngón tay vào 3 cốc nước: a. lạnh, b. nguội, c. ấm',
      svg: `<svg viewBox="20 12 236 108" xmlns="http://www.w3.org/2000/svg">
        <!-- Cốc a (lạnh) -->
        <rect x="28" y="48" width="42" height="50" rx="4" fill="#facc15" stroke="currentColor" stroke-width="1.6"/>
        <path d="M 70,56 C 82,56 82,86 70,86" fill="none" stroke="currentColor" stroke-width="3"/>
        <rect x="44" y="16" width="10" height="28" rx="5" fill="#fdba74" stroke="#c2410c" stroke-width="1.3"/>
        <text x="49" y="114" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">a. lạnh</text>
        <!-- Cốc b (nguội) -->
        <rect x="112" y="48" width="42" height="50" rx="4" fill="#ef4444" stroke="currentColor" stroke-width="1.6"/>
        <path d="M 154,56 C 166,56 166,86 154,86" fill="none" stroke="currentColor" stroke-width="3"/>
        <rect x="120" y="16" width="10" height="28" rx="5" fill="#fdba74" stroke="#c2410c" stroke-width="1.3"/>
        <rect x="136" y="16" width="10" height="28" rx="5" fill="#fdba74" stroke="#c2410c" stroke-width="1.3"/>
        <text x="133" y="114" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">b. nguội</text>
        <!-- Cốc c (ấm) -->
        <rect x="196" y="48" width="42" height="50" rx="4" fill="#1e293b" stroke="currentColor" stroke-width="1.6"/>
        <path d="M 238,56 C 250,56 250,86 238,86" fill="none" stroke="currentColor" stroke-width="3"/>
        <rect x="212" y="16" width="10" height="28" rx="5" fill="#fdba74" stroke="#c2410c" stroke-width="1.3"/>
        <text x="217" y="114" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">c. ấm</text>
      </svg>`
    },

    tf_70: {
      caption: 'Đồ thị Câu 70: Sự phụ thuộc nhiệt độ t (°C) của khối nước đá vào nhiệt lượng Q (kJ)',
      svg: `<svg viewBox="10 8 256 156" xmlns="http://www.w3.org/2000/svg">
        <line x1="38" y1="142" x2="252" y2="142" stroke="currentColor" stroke-width="1.7"/>
        <polygon points="249,139 258,142 249,145" fill="currentColor"/>
        <line x1="38" y1="150" x2="38" y2="16" stroke="currentColor" stroke-width="1.7"/>
        <polygon points="35,20 38,11 41,20" fill="currentColor"/>
        <!-- Đường gióng -->
        <line x1="38" y1="48" x2="218" y2="48" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3"/>
        <line x1="142" y1="48" x2="142" y2="142" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3"/>
        <line x1="218" y1="48" x2="218" y2="142" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3"/>
        <!-- Đường biểu diễn O -> A -> B -> C -->
        <polyline points="38,142 82,142 142,48 218,48" fill="none" stroke="#dc2626" stroke-width="2.6"/>
        <circle cx="82" cy="142" r="3" fill="currentColor"/>
        <circle cx="142" cy="48" r="3" fill="currentColor"/>
        <circle cx="218" cy="48" r="3" fill="currentColor"/>
        <g font-size="11.5" font-weight="700" fill="currentColor">
          <text x="44" y="21">t (°C)</text>
          <text x="235" y="134">Q (kJ)</text>
          <text x="24" y="146">O</text>
          <text x="13" y="52">100</text>
          <text x="78" y="157" fill="#dc2626">A</text>
          <text x="138" y="42" fill="#dc2626">B</text>
          <text x="215" y="42" fill="#dc2626">C</text>
          <text x="131" y="157">120</text>
          <text x="207" y="157">258</text>
        </g>
      </svg>`
    },

    tf_71: {
      caption: 'Đồ thị Câu 71: Sự thay đổi nhiệt độ T (°C) của mẫu Gali (Ga) theo thời gian t (phút)',
      svg: `<svg viewBox="18 8 232 164" xmlns="http://www.w3.org/2000/svg">
        <!-- Lưới tọa độ -->
        <g stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2">
          <line x1="42" y1="115" x2="210" y2="115"/>
          <line x1="42" y1="80" x2="210" y2="80"/>
          <line x1="42" y1="45" x2="210" y2="45"/>
          <line x1="80" y1="25" x2="80" y2="150"/>
          <line x1="118" y1="25" x2="118" y2="150"/>
          <line x1="156" y1="25" x2="156" y2="150"/>
          <line x1="194" y1="25" x2="194" y2="150"/>
        </g>
        <line x1="35" y1="150" x2="235" y2="150" stroke="currentColor" stroke-width="1.7"/>
        <polygon points="232,147 240,150 232,153" fill="currentColor"/>
        <line x1="42" y1="156" x2="42" y2="16" stroke="currentColor" stroke-width="1.7"/>
        <polygon points="39,20 42,11 45,20" fill="currentColor"/>
        <!-- Đồ thị: (0,0) -> (10,30) -> (25,30) -> (40,80) -->
        <polyline points="42,150 80,115 137,115 194,45" fill="none" stroke="#0284c7" stroke-width="2.6"/>
        <g font-size="11" font-weight="700" fill="currentColor">
          <text x="48" y="19">T (°C)</text>
          <text x="206" y="166">t (phút)</text>
          <text x="22" y="119">30</text>
          <text x="22" y="49">80</text>
          <text x="73" y="164">10</text>
          <text x="111" y="164">20</text>
          <text x="149" y="164">30</text>
          <text x="187" y="164">40</text>
        </g>
      </svg>`
    },

    tf_72: {
      caption: 'Đồ thị Câu 72: Sự phụ thuộc nhiệt độ của hỗn hợp chất rắn X và nước đá theo thời gian (phút)',
      svg: `<svg viewBox="16 8 272 164" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="150" x2="265" y2="150" stroke="currentColor" stroke-width="1.7"/>
        <polygon points="262,147 270,150 262,153" fill="currentColor"/>
        <line x1="45" y1="158" x2="45" y2="15" stroke="currentColor" stroke-width="1.7"/>
        <polygon points="42,19 45,10 48,19" fill="currentColor"/>
        <!-- Trục 0°C nằm ngang và đường gióng -->
        <line x1="45" y1="54" x2="255" y2="54" stroke="currentColor" stroke-width="1.2"/>
        <line x1="45" y1="102" x2="88" y2="102" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3,3"/>
        <line x1="88" y1="102" x2="88" y2="150" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3,3"/>
        <line x1="138" y1="102" x2="138" y2="150" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3,3"/>
        <line x1="205" y1="54" x2="205" y2="150" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3,3"/>
        <line x1="222" y1="54" x2="222" y2="150" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3,3"/>
        <!-- Đường gấp khúc: (0,-40) -> A(15,-20) -> B(35,-20) -> (60,0) -> C(65,0) -->
        <polyline points="45,150 88,102 138,102 205,54 242,54" fill="none" stroke="#dc2626" stroke-width="2.6"/>
        <g font-size="11" font-weight="700" fill="currentColor">
          <text x="50" y="20">t (°C)</text>
          <text x="246" y="166">(Phút)</text>
          <text x="31" y="57">0</text>
          <text x="19" y="105">−20</text>
          <text x="19" y="153">−40</text>
          <text x="41" y="165">0</text>
          <text x="81" y="165">15</text>
          <text x="131" y="165">35</text>
          <text x="197" y="165">60</text>
          <text x="216" y="165">65</text>
          <text x="85" y="95" fill="#dc2626">A</text>
          <text x="134" y="95" fill="#dc2626">B</text>
          <text x="218" y="48" fill="#dc2626">C</text>
        </g>
      </svg>`
    },

    tf_73: {
      caption: 'Đồ thị Câu 73: Sự phụ thuộc nhiệt độ t (°C) của nước đá vào nhiệt lượng Q (kJ)',
      svg: `<svg viewBox="6 8 268 152" xmlns="http://www.w3.org/2000/svg">
        <!-- Lưới tọa độ -->
        <g stroke="#94a3b8" stroke-width="0.8">
          <line x1="42" y1="122" x2="232" y2="122"/>
          <line x1="42" y1="104" x2="232" y2="104"/>
          <line x1="42" y1="86" x2="232" y2="86"/>
          <line x1="42" y1="68" x2="232" y2="68"/>
          <line x1="42" y1="50" x2="232" y2="50"/>
          <line x1="42" y1="32" x2="232" y2="32"/>
          <line x1="82" y1="32" x2="82" y2="140"/>
          <line x1="142" y1="32" x2="142" y2="140"/>
          <line x1="202" y1="32" x2="202" y2="140"/>
          <line x1="232" y1="32" x2="232" y2="140"/>
        </g>
        <line x1="42" y1="140" x2="262" y2="140" stroke="currentColor" stroke-width="1.7"/>
        <polygon points="258,137 266,140 258,143" fill="currentColor"/>
        <line x1="42" y1="144" x2="42" y2="14" stroke="currentColor" stroke-width="1.7"/>
        <polygon points="39,18 42,10 45,18" fill="currentColor"/>
        <!-- Đường biểu diễn O(0,0) -> A(33,0) -> B(75,100) -> C(121,100) -->
        <polyline points="42,140 82,140 142,50 202,50" fill="none" stroke="#16a34a" stroke-width="2.6"/>
        <g font-size="10.5" font-weight="700" fill="currentColor">
          <text x="10" y="20">t (°C)</text>
          <text x="236" y="132">Q (kJ)</text>
          <text x="29" y="143">0</text>
          <text x="22" y="125">20</text>
          <text x="22" y="107">40</text>
          <text x="22" y="89">60</text>
          <text x="22" y="71">80</text>
          <text x="17" y="53">100</text>
          <text x="17" y="35">120</text>
          <text x="75" y="154">33</text>
          <text x="135" y="154">75</text>
          <text x="193" y="154">121</text>
          <text x="72" y="135" fill="#16a34a">A</text>
          <text x="138" y="45" fill="#16a34a">B</text>
          <text x="198" y="45" fill="#16a34a">C</text>
        </g>
      </svg>`
    },

    tf_74: {
      caption: 'Đồ thị Câu 74: Sự phụ thuộc nhiệt độ (°C) của hỗn hợp nước đá và chất rắn X theo thời gian (phút)',
      svg: `<svg viewBox="20 18 248 160" xmlns="http://www.w3.org/2000/svg">
        <!-- Lưới tọa độ -->
        <g stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2">
          <line x1="48" y1="88" x2="248" y2="88"/>
          <line x1="48" y1="136" x2="248" y2="136"/>
          <line x1="88" y1="30" x2="88" y2="145"/>
          <line x1="128" y1="30" x2="128" y2="145"/>
          <line x1="168" y1="30" x2="168" y2="145"/>
          <line x1="208" y1="30" x2="208" y2="145"/>
          <line x1="248" y1="30" x2="248" y2="145"/>
        </g>
        <line x1="42" y1="40" x2="262" y2="40" stroke="currentColor" stroke-width="1.7"/>
        <line x1="48" y1="152" x2="48" y2="22" stroke="currentColor" stroke-width="1.7"/>
        <!-- Đường biểu diễn A(0,-40) -> B(10,-20) -> C(20,-20) -> D(40,0) -> (50,0) -->
        <polyline points="48,136 88,88 128,88 208,40 248,40" fill="none" stroke="#0284c7" stroke-width="2.6"/>
        <g font-size="10.5" font-weight="700" fill="currentColor">
          <text x="33" y="43">0</text>
          <text x="23" y="91">−20</text>
          <text x="23" y="139">−40</text>
          <text x="82" y="158">10</text>
          <text x="122" y="158">20</text>
          <text x="162" y="158">30</text>
          <text x="202" y="158">40</text>
          <text x="242" y="158">50</text>
          <text x="53" y="145" fill="#0284c7">A</text>
          <text x="90" y="99" fill="#0284c7">B</text>
          <text x="130" y="99" fill="#0284c7">C</text>
          <text x="210" y="51" fill="#0284c7">D</text>
          <text x="155" y="173" text-anchor="middle">Thời gian (phút)</text>
        </g>
      </svg>`
    },

    tf_75: {
      caption: 'Đồ thị Câu 75: Sự thay đổi nhiệt độ t (°C) của khối kim loại 20 kg theo thời gian t (phút)',
      svg: `<svg viewBox="10 8 250 158" xmlns="http://www.w3.org/2000/svg">
        <line x1="45" y1="145" x2="248" y2="145" stroke="currentColor" stroke-width="1.7"/>
        <polygon points="244,142 252,145 244,148" fill="currentColor"/>
        <line x1="45" y1="145" x2="45" y2="16" stroke="currentColor" stroke-width="1.7"/>
        <polygon points="42,20 45,11 48,20" fill="currentColor"/>
        <line x1="45" y1="48" x2="185" y2="48" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3"/>
        <line x1="135" y1="48" x2="135" y2="145" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3"/>
        <line x1="185" y1="48" x2="185" y2="145" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3"/>
        <!-- Đường biểu diễn A(0,30) -> B(50,1530) -> C(70,1530) -->
        <polyline points="45,118 135,48 185,48" fill="none" stroke="#dc2626" stroke-width="2.6"/>
        <g font-size="11" font-weight="700" fill="currentColor">
          <text x="12" y="20">t (°C)</text>
          <text x="218" y="160">t (phút)</text>
          <text x="31" y="158">O</text>
          <text x="25" y="121">30</text>
          <text x="13" y="52">1530</text>
          <text x="128" y="158">50</text>
          <text x="178" y="158">70</text>
          <text x="53" y="124" fill="#dc2626">A</text>
          <text x="132" y="42" fill="#dc2626">B</text>
          <text x="182" y="42" fill="#dc2626">C</text>
        </g>
      </svg>`
    },

    tf_76: {
      caption: 'Hình Câu 76: Sơ đồ bộ thí nghiệm đo nhiệt dung riêng của nước gồm biến áp nguồn, oát kế, nhiệt kế và nhiệt lượng kế',
      svg: `<svg viewBox="10 4 252 138" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="20" width="66" height="26" rx="3" fill="rgba(148,163,184,0.14)" stroke="currentColor" stroke-width="1.6"/>
        <text x="47" y="37" font-size="9.5" font-weight="700" fill="currentColor" text-anchor="middle">Biến áp nguồn</text>
        <rect x="96" y="20" width="48" height="26" rx="3" fill="rgba(148,163,184,0.14)" stroke="currentColor" stroke-width="1.6"/>
        <text x="120" y="37" font-size="10" font-weight="700" fill="currentColor" text-anchor="middle">Oát kế</text>
        <line x1="80" y1="33" x2="96" y2="33" stroke="currentColor" stroke-width="1.5"/>
        <!-- Nhiệt lượng kế -->
        <polygon points="182,58 252,58 242,135 192,135" fill="rgba(56,189,248,0.2)" stroke="currentColor" stroke-width="1.8"/>
        <rect x="178" y="52" width="78" height="6" fill="#475569"/>
        <!-- Dây điện trở -->
        <polyline points="144,33 198,33 198,98 204,92 210,102 216,92 222,102 228,98 228,33" fill="none" stroke="#dc2626" stroke-width="1.7"/>
        <!-- Nhiệt kế -->
        <line x1="238" y1="18" x2="238" y2="115" stroke="#0284c7" stroke-width="2.2"/>
        <text x="214" y="14" font-size="10" font-weight="700" fill="currentColor">Nhiệt kế</text>
        <text x="136" y="88" font-size="10" font-weight="700" fill="currentColor">Dây điện trở</text>
        <text x="128" y="122" font-size="10" font-weight="700" fill="currentColor">Nhiệt lượng kế</text>
      </svg>`
    },

    tf_78: {
      caption: 'Hình Câu 78: Bộ dụng cụ đun 500 g nước trong cốc nhôm trên bếp điện 502 W',
      svg: `<svg viewBox="28 10 162 146" xmlns="http://www.w3.org/2000/svg">
        <line x1="35" y1="150" x2="185" y2="150" stroke="currentColor" stroke-width="3.2"/>
        <line x1="158" y1="150" x2="158" y2="14" stroke="currentColor" stroke-width="2.6"/>
        <!-- Bếp đun -->
        <rect x="65" y="116" width="66" height="34" rx="3" fill="#cbd5e1" stroke="currentColor" stroke-width="1.7"/>
        <!-- Cốc nhôm chứa nước -->
        <rect x="74" y="62" width="48" height="54" fill="rgba(56,189,248,0.25)" stroke="currentColor" stroke-width="1.8"/>
        <!-- Nhiệt kế -->
        <line x1="98" y1="18" x2="98" y2="102" stroke="#dc2626" stroke-width="2"/>
        <circle cx="98" cy="102" r="3.2" fill="#dc2626"/>
        <line x1="98" y1="28" x2="158" y2="28" stroke="currentColor" stroke-width="1.7"/>
        <!-- Đồng hồ bấm giây -->
        <circle cx="48" cy="128" r="15" fill="none" stroke="currentColor" stroke-width="1.7"/>
        <text x="48" y="132" font-size="9" font-weight="700" fill="currentColor" text-anchor="middle">5:00</text>
      </svg>`
    },

    tf_79: {
      caption: 'Hình Câu 79: Hệ phễu chứa nước đá (1), dây điện trở (2), cốc hứng nước (3) đặt trên cân điện tử (4)',
      svg: `<svg viewBox="28 8 158 170" xmlns="http://www.w3.org/2000/svg">
        <line x1="48" y1="12" x2="48" y2="172" stroke="currentColor" stroke-width="2.6"/>
        <line x1="32" y1="172" x2="175" y2="172" stroke="currentColor" stroke-width="2.6"/>
        <!-- Phễu chứa đá (1) và dây điện trở (2) -->
        <polygon points="82,25 138,25 114,68 106,68" fill="rgba(186,230,253,0.48)" stroke="currentColor" stroke-width="1.7"/>
        <line x1="110" y1="68" x2="110" y2="85" stroke="currentColor" stroke-width="2.2"/>
        <circle cx="110" cy="44" r="6" fill="#ef4444"/>
        <!-- Cốc (3) -->
        <rect x="90" y="96" width="40" height="44" fill="rgba(56,189,248,0.3)" stroke="currentColor" stroke-width="1.7"/>
        <!-- Cân điện tử (4) -->
        <rect x="72" y="140" width="76" height="26" rx="3" fill="#e2e8f0" stroke="currentColor" stroke-width="1.7"/>
        <rect x="80" y="146" width="34" height="14" fill="#fff" stroke="currentColor" stroke-width="1.2"/>
        <text x="97" y="156" font-size="9.5" font-weight="700" font-family="monospace" fill="#0f172a" text-anchor="middle">0.00</text>
        <g font-size="11" font-weight="800" fill="currentColor">
          <text x="165" y="34">(1)</text>
          <line x1="132" y1="31" x2="162" y2="31" stroke="currentColor" stroke-width="1.2"/>
          <text x="165" y="50">(2)</text>
          <line x1="116" y1="46" x2="162" y2="46" stroke="currentColor" stroke-width="1.2"/>
          <text x="165" y="118">(3)</text>
          <line x1="130" y1="115" x2="162" y2="115" stroke="currentColor" stroke-width="1.2"/>
          <text x="165" y="156">(4)</text>
          <line x1="148" y1="153" x2="162" y2="153" stroke="currentColor" stroke-width="1.2"/>
        </g>
      </svg>`
    },

    tf_80: {
      caption: 'Hình Câu 80: Hai chậu nước đá đối chứng A và B (chậu B có dây điện trở R nối nguồn U)',
      svg: `<svg viewBox="12 12 284 86" xmlns="http://www.w3.org/2000/svg">
        <!-- Hình a -->
        <polygon points="18,35 72,35 62,72 28,72" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <polygon points="32,48 58,48 52,70 38,70" fill="rgba(56,189,248,0.26)" stroke="currentColor" stroke-width="1.4"/>
        <text x="25" y="47" font-size="10.5" font-weight="800" fill="currentColor">A</text>
        <polygon points="82,35 136,35 126,72 92,72" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <polygon points="96,48 122,48 116,70 102,70" fill="rgba(56,189,248,0.26)" stroke="currentColor" stroke-width="1.4"/>
        <text x="89" y="47" font-size="10.5" font-weight="800" fill="currentColor">B</text>
        <polyline points="109,58 109,18 148,18" fill="none" stroke="#dc2626" stroke-width="1.6"/>
        <text x="78" y="92" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">Hình a</text>
        <!-- Hình b -->
        <polygon points="172,35 226,35 216,72 182,72" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <line x1="180" y1="62" x2="218" y2="62" stroke="#0284c7" stroke-width="1.6"/>
        <text x="179" y="47" font-size="10.5" font-weight="800" fill="currentColor">A</text>
        <polygon points="236,35 290,35 280,72 246,72" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <line x1="242" y1="52" x2="284" y2="52" stroke="#0284c7" stroke-width="1.6"/>
        <text x="243" y="47" font-size="10.5" font-weight="800" fill="currentColor">B</text>
        <text x="232" y="92" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">Hình b</text>
      </svg>`
    },

    tf_81: {
      caption: 'Hình Câu 81: Nhiệt lượng kế có bộ phận nung 25 W và cốc hứng nước đặt trên cân',
      svg: `<svg viewBox="46 12 88 166" xmlns="http://www.w3.org/2000/svg">
        <!-- Phễu/Nhiệt lượng kế chứa đá viên -->
        <rect x="52" y="18" width="76" height="68" fill="rgba(56,189,248,0.16)" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="52,86 128,86 96,105 84,105" fill="rgba(56,189,248,0.16)" stroke="currentColor" stroke-width="1.7"/>
        <rect x="64" y="34" width="16" height="14" transform="rotate(-12 64 34)" fill="#e0f2fe" stroke="currentColor" stroke-width="1.2"/>
        <rect x="92" y="30" width="16" height="14" transform="rotate(15 92 30)" fill="#e0f2fe" stroke="currentColor" stroke-width="1.2"/>
        <rect x="76" y="54" width="18" height="14" fill="#e0f2fe" stroke="currentColor" stroke-width="1.2"/>
        <!-- Cốc hứng trên cân -->
        <polygon points="64,116 116,116 110,152 70,152" fill="rgba(14,165,233,0.25)" stroke="currentColor" stroke-width="1.6"/>
        <line x1="58" y1="152" x2="122" y2="152" stroke="currentColor" stroke-width="2.2"/>
        <polygon points="75,152 105,152 115,172 65,172" fill="#94a3b8" stroke="currentColor" stroke-width="1.6"/>
      </svg>`
    },

    tf_82: {
      caption: 'Hình Câu 82: Thí nghiệm đo nhiệt nóng chảy riêng của nước đá với dây đun 480 W và cân điện tử',
      svg: `<svg viewBox="10 14 245 154" xmlns="http://www.w3.org/2000/svg">
        <!-- Cân điện tử -->
        <rect x="75" y="138" width="90" height="24" rx="4" fill="#475569" stroke="currentColor" stroke-width="1.6"/>
        <text x="120" y="154" font-size="10" font-weight="700" font-family="monospace" fill="#fff" text-anchor="middle">0 0 0 0 0</text>
        <!-- Thùng chứa đá viên -->
        <rect x="85" y="56" width="70" height="80" fill="rgba(186,230,253,0.38)" stroke="currentColor" stroke-width="1.7"/>
        <!-- Dây đun ở giữa -->
        <rect x="116" y="42" width="8" height="75" fill="#dc2626"/>
        <polyline points="120,42 120,22 72,22" fill="none" stroke="currentColor" stroke-width="1.7"/>
        <!-- Ống thoát nước -->
        <polyline points="155,126 178,126 184,136" fill="none" stroke="currentColor" stroke-width="2.2"/>
        <g font-size="10.5" font-weight="700" fill="currentColor">
          <text x="16" y="25">Cấp nguồn</text>
          <text x="188" y="56">Dây đun</text>
          <line x1="124" y1="53" x2="184" y2="53" stroke="currentColor" stroke-width="1.2"/>
          <text x="190" y="102">Đá viên</text>
          <line x1="145" y1="99" x2="186" y2="99" stroke="currentColor" stroke-width="1.2"/>
          <text x="192" y="138">Ống thoát</text>
          <text x="14" y="153">Cân điện tử</text>
        </g>
      </svg>`
    },

    tf_83: {
      caption: 'Hình Câu 83: Bố trí thí nghiệm xác định nhiệt hóa hơi riêng với công tơ điện (1), dây điện trở (2), cốc nước (3), cân đòn (4)',
      svg: `<svg viewBox="14 12 256 134" xmlns="http://www.w3.org/2000/svg">
        <!-- Công tơ điện (1) -->
        <rect x="42" y="24" width="44" height="52" rx="3" fill="#f1f5f9" stroke="currentColor" stroke-width="1.6"/>
        <text x="64" y="43" font-size="9.5" font-weight="700" font-family="monospace" fill="#0f172a" text-anchor="middle">000</text>
        <text x="20" y="36" font-size="11" font-weight="800" fill="currentColor">(1)</text>
        <!-- Giá đỡ (5) -->
        <line x1="142" y1="18" x2="142" y2="140" stroke="currentColor" stroke-width="2.6"/>
        <text x="150" y="26" font-size="11" font-weight="800" fill="currentColor">(5)</text>
        <!-- Cân đòn (4) và cốc nước (3) -->
        <line x1="148" y1="115" x2="245" y2="115" stroke="currentColor" stroke-width="2.4"/>
        <polygon points="192,140 202,140 197,115" fill="#475569"/>
        <rect x="155" y="75" width="32" height="38" fill="rgba(56,189,248,0.28)" stroke="currentColor" stroke-width="1.7"/>
        <rect x="222" y="96" width="18" height="18" fill="#64748b"/>
        <text x="200" y="84" font-size="11" font-weight="800" fill="currentColor">(3)</text>
        <text x="200" y="99" font-size="11" font-weight="800" fill="currentColor">(2)</text>
        <text x="250" y="115" font-size="11" font-weight="800" fill="currentColor">(4)</text>
      </svg>`
    },

    tf_84: {
      caption: 'Bảng Câu 84: Số liệu thực nghiệm của hai lần đun sôi nước trong 10 phút',
      svg: `<svg viewBox="4 4 352 86" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="344" height="78" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <line x1="8" y1="34" x2="352" y2="34" stroke="currentColor" stroke-width="1.4"/>
        <line x1="8" y1="60" x2="352" y2="60" stroke="currentColor" stroke-width="1.3"/>
        <line x1="92" y1="8" x2="92" y2="86" stroke="currentColor" stroke-width="1.3"/>
        <line x1="178" y1="8" x2="178" y2="86" stroke="currentColor" stroke-width="1.3"/>
        <line x1="265" y1="8" x2="265" y2="86" stroke="currentColor" stroke-width="1.3"/>
        <g font-size="11.5" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="50" y="26">Lần đun</text>
          <text x="135" y="26">P (W)</text>
          <text x="221" y="26">m₁ (g)</text>
          <text x="308" y="26">m₂ (g)</text>
        </g>
        <g font-size="11.5" font-weight="600" fill="currentColor" text-anchor="middle">
          <text x="50" y="52">1</text>
          <text x="135" y="52">1500</text>
          <text x="221" y="52">1545</text>
          <text x="308" y="52">1205</text>
          <text x="50" y="78">2</text>
          <text x="135" y="78">1200</text>
          <text x="221" y="78">1427</text>
          <text x="308" y="78">1167</text>
        </g>
      </svg>`
    },

    tf_85: {
      caption: 'Hình Câu 85: Máy nước nóng năng lượng mặt trời gồm bộ phận hấp thụ nhiệt (2 m²) và bình bảo ôn',
      svg: `<svg viewBox="14 6 246 126" xmlns="http://www.w3.org/2000/svg">
        <!-- Bình bảo ôn -->
        <rect x="135" y="24" width="115" height="32" rx="14" fill="#334155" stroke="currentColor" stroke-width="1.6"/>
        <text x="192" y="44" font-size="11.5" font-weight="800" fill="#fff" text-anchor="middle">SONHA</text>
        <text x="192" y="17" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">Bình bảo ôn</text>
        <!-- Giàn ống hấp thụ nhiệt -->
        <polygon points="145,56 238,56 175,122 82,122" fill="#1e3a8a" stroke="currentColor" stroke-width="1.6"/>
        <line x1="102" y1="122" x2="165" y2="56" stroke="#93c5fd" stroke-width="1.7"/>
        <line x1="122" y1="122" x2="185" y2="56" stroke="#93c5fd" stroke-width="1.7"/>
        <line x1="142" y1="122" x2="205" y2="56" stroke="#93c5fd" stroke-width="1.7"/>
        <line x1="162" y1="122" x2="225" y2="56" stroke="#93c5fd" stroke-width="1.7"/>
        <!-- Chân giá đỡ -->
        <line x1="238" y1="56" x2="238" y2="128" stroke="currentColor" stroke-width="2.2"/>
        <line x1="175" y1="122" x2="238" y2="108" stroke="currentColor" stroke-width="1.8"/>
        <text x="58" y="64" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">Bộ phận hấp</text>
        <text x="58" y="79" font-size="11" font-weight="800" fill="currentColor" text-anchor="middle">thụ nhiệt</text>
      </svg>`
    }
  });

  // Gán đường dẫn ảnh chụp trực tiếp từ đề gốc PDF cho toàn bộ hình vẽ Vật lí 12
  if (window.PHYSICS_TF_FIGURES) {
    for (const [figKey, figObj] of Object.entries(window.PHYSICS_TF_FIGURES)) {
      if (figObj) {
        figObj.img = `assets/images/quiz/physics/${figKey}.png`;
      }
    }
  }
})();


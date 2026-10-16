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
    }
  };

  // Dữ liệu 70 câu hỏi trắc nghiệm Chương 1: Vật Lí Nhiệt - Vật Lí 12
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
    const root = document.getElementById('experiment-quiz');
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
              <h3>70 Câu Trắc Nghiệm Chương 1: Vật Lí Nhiệt (Vật Lí 12)</h3>
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

            <!-- Nút mở Bảng đáp án 70 câu -->
            <button class="quiz-tool-btn" onclick="window.QuizApp.openAnswerKeyModal()">
              🔑 Bảng đáp án
            </button>

            <!-- Nút Hiện toàn bộ đáp án (khi ở chế độ danh sách) hoặc Ẩn/Hiện cột 70 câu -->
            ${state.mode === 'slide' ? `
              <button class="quiz-tool-btn" onclick="window.QuizApp.toggleSidebar()">
                ${state.sidebarOpen ? '◀ Ẩn lưới câu' : '▶ Hiện lưới 70 câu'}
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
              <option value="ALL" ${state.topicFilter === 'ALL' ? 'selected' : ''}>📚 Tất cả chủ đề (70 câu)</option>
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
              placeholder="🔍 Tìm số câu (vd: 63) hoặc từ khóa..."
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

      <!-- Modal Bảng Đáp Án Tổng Hợp 70 Câu -->
      <div class="quiz-modal-backdrop" id="answerKeyModal" onclick="if(event.target===this) window.QuizApp.closeAnswerKeyModal()">
        <div class="quiz-modal-box">
          <div class="quiz-modal-header">
            <h3>📋 BẢNG ĐÁP ÁN CHUẨN (70 CÂU VẬT LÍ NHIỆT 12)</h3>
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
          <span class="slide-q-number">Câu ${q.id} / 70</span>
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

        <!-- Cột phải: Bảng điều hướng nhanh 70 câu -->
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
      if (confirm('Bạn có muốn làm mới toàn bộ lựa chọn và trạng thái sửa bài của 70 câu hỏi không?')) {
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
    const quizPanel = document.getElementById('panel-quiz');
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

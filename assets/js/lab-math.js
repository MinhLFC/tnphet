/**
 * MODULE TRÌNH CHIẾU & SỬA BÀI BỘ 3 ĐỀ ÔN ĐỊNH KÌ TOÁN 12 - HỌC KÌ 1
 * Gồm: Đề số 2, Đề số 3, Đề số 4
 * Mỗi đề gồm 3 phần chuẩn cấu trúc mới:
 * - PHẦN 1: Câu trắc nghiệm nhiều phương án lựa chọn (Câu 1 - 12)
 * - PHẦN 2: Câu trắc nghiệm đúng sai (Câu 1 - 4, mỗi câu 4 ý a, b, c, d)
 * - PHẦN 3: Câu trắc nghiệm trả lời ngắn (Câu 1 - 6, điền đáp số KQ)
 */

(function () {
  // Helper tạo phân số và vectơ HTML sắc nét
  const frac = (num, den) => `<span class="m-frac"><span class="num">${num}</span><span class="den">${den}</span></span>`;
  const vec = (v) => `<span class="m-vec">${v}</span>`;

  // Hàm dựng đường cong SVG chính xác tuyệt đối từ công thức toán học y = fn(x)
  function plotPath(fn, xMin, xMax, steps, toX, toY) {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const x = xMin + ((xMax - xMin) * i) / steps;
      const y = fn(x);
      if (Number.isFinite(y)) {
        const px = toX(x).toFixed(1);
        const py = toY(y).toFixed(1);
        pts.push(`${pts.length === 0 ? 'M' : 'L'} ${px},${py}`);
      }
    }
    return pts.join(' ');
  }

  // Kho hình vẽ SVG (Đồ thị, Bảng biến thiên, Hình học không gian)
  const MATH_FIGURES = {
    // ================= ĐỀ SỐ 2 =================
    d2_p1_q2: (() => {
      // Đồ thị hàm phân thức bậc 2/bậc 1:
      // TCĐ x = -1, TCX đi qua I(-1; 2) và (2; -2) -> y_tcx = -4/3*(x + 1) + 2
      // Nhánh trái đạt cực tiểu tại (-2; 4), nhánh phải đạt cực đại tiếp xúc Ox tại O(0; 0)
      const ox = 135, oy = 128, sx = 24, sy = 16;
      const toX = (x) => ox + x * sx;
      const toY = (y) => oy - y * sy;
      // Nhánh trái: từ TCX bên trái xuống cực tiểu (-2; 4) rồi tiệm cận x = -1⁻
      const fnLeft = (x) => -x + 1 - 1 / (x + 1);
      // Nhánh phải: từ x = -1⁺ lên cực đại O(0; 0) rồi đi qua (2; -2) bám sát TCX
      const fnRight = (x) => {
        if (x <= 0) return -x + 1 - 1 / (x + 1);
        // Với x > 0: y(0)=0, y'(0)=0, đi qua (2; -2) và tiệm cận đường xiên đi qua I(-1; 2), (1; 0), (2; -2)
        return -x + 1 - 1 / (x + 1) - (0.67 * x * x) / (x * x + 2);
      };
      const branchLeft = plotPath(fnLeft, -4.1, -1.16, 70, toX, toY);
      const branchRight = plotPath(fnRight, -0.84, 3.3, 70, toX, toY);
      return {
        caption: 'Đồ thị hàm số y = f(x) có TCĐ x = −1, TCX đi qua I(−1; 2), cực tiểu (−2; 4) và cực đại O(0; 0)',
        svg: `<svg viewBox="0 0 265 235" xmlns="http://www.w3.org/2000/svg">
          <!-- Trục Ox, Oy -->
          <line x1="20" y1="${oy}" x2="245" y2="${oy}" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="242,${oy - 3} 250,${oy} 242,${oy + 3}" fill="currentColor"/>
          <line x1="${ox}" y1="220" x2="${ox}" y2="14" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="${ox - 3},18 ${ox},10 ${ox + 3},18" fill="currentColor"/>
          <text x="246" y="${oy + 13}" font-size="11" font-style="italic" fill="currentColor">x</text>
          <text x="${ox + 6}" y="18" font-size="11" font-style="italic" fill="currentColor">y</text>
          <text x="${ox - 12}" y="${oy - 4}" font-size="10.5" font-style="italic" fill="currentColor">O</text>
          <!-- Tiệm cận đứng x = -1 -->
          <line x1="${toX(-1)}" y1="14" x2="${toX(-1)}" y2="218" stroke="currentColor" stroke-width="1.2"/>
          <text x="${toX(-1) - 4}" y="52" font-size="9.5" fill="currentColor" transform="rotate(-90 ${toX(-1) - 4},52)">x = −1</text>
          <!-- Tiệm cận xiên đi qua I(-1; 2) -->
          <line x1="${toX(-3.6)}" y1="${toY(4.6)}" x2="${toX(3.5)}" y2="${toY(-2.5)}" stroke="currentColor" stroke-width="1.2"/>
          <!-- Đường gióng nét đứt tại (-2; 4) và (2; -2) -->
          <line x1="${toX(-2)}" y1="${oy}" x2="${toX(-2)}" y2="${toY(4)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(-2)}" y1="${toY(4)}" x2="${ox}" y2="${toY(4)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(2)}" y1="${oy}" x2="${toX(2)}" y2="${toY(-2)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${ox}" y1="${toY(-2)}" x2="${toX(2)}" y2="${toY(-2)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <!-- Hai nhánh đồ thị chính xác -->
          <path d="${branchLeft}" fill="none" stroke="#dc2626" stroke-width="2"/>
          <path d="${branchRight}" fill="none" stroke="#dc2626" stroke-width="2"/>
          <!-- Nhãn tọa độ -->
          <text x="${toX(-2) - 8}" y="${oy + 13}" font-size="10" fill="currentColor">−2</text>
          <text x="${toX(2) - 3}" y="${oy + 13}" font-size="10" fill="currentColor">2</text>
          <text x="${ox + 5}" y="${toY(4) + 4}" font-size="10" fill="currentColor">4</text>
          <text x="${ox + 5}" y="${toY(2) + 4}" font-size="10" fill="currentColor">2</text>
          <text x="${ox + 5}" y="${toY(-2) + 4}" font-size="10" fill="currentColor">−2</text>
          <text x="${toX(-1) + 4}" y="${toY(2) - 3}" font-size="10" font-style="italic" font-weight="700" fill="currentColor">I</text>
        </svg>`
      };
    })(),

    d2_p1_q4: (() => {
      // Hàm số chuẩn: y = -x^3 + 3x^2 + 1 (Cực tiểu (0; 1), Cực đại (2; 5))
      const ox = 85, oy = 160, sx = 28, sy = 23;
      const toX = (x) => ox + x * sx;
      const toY = (y) => oy - y * sy;
      const pathD = plotPath((x) => -Math.pow(x, 3) + 3 * x * x + 1, -1.02, 3.12, 80, toX, toY);
      return {
        caption: 'Đồ thị hàm số bậc ba y = −x³ + 3x² + 1 đi qua cực tiểu (0; 1) và cực đại (2; 5)',
        svg: `<svg viewBox="0 0 220 205" xmlns="http://www.w3.org/2000/svg">
          <line x1="25" y1="${oy}" x2="195" y2="${oy}" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="192,${oy - 3} 200,${oy} 192,${oy + 3}" fill="currentColor"/>
          <line x1="${ox}" y1="195" x2="${ox}" y2="14" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="${ox - 3},18 ${ox},10 ${ox + 3},18" fill="currentColor"/>
          <text x="195" y="${oy + 13}" font-size="11" font-style="italic" fill="currentColor">x</text>
          <text x="${ox - 12}" y="18" font-size="11" font-style="italic" fill="currentColor">y</text>
          <text x="${ox - 13}" y="${oy + 13}" font-size="10.5" font-style="italic" fill="currentColor">O</text>
          <!-- Đường gióng từ điểm cực đại (2; 5) -->
          <line x1="${ox}" y1="${toY(5)}" x2="${toX(2)}" y2="${toY(5)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(2)}" y1="${toY(5)}" x2="${toX(2)}" y2="${oy}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <path d="${pathD}" fill="none" stroke="#0284c7" stroke-width="2.1"/>
          <text x="${ox - 11}" y="${toY(5) + 4}" font-size="10.5" fill="currentColor">5</text>
          <text x="${ox - 11}" y="${toY(1) + 3}" font-size="10.5" fill="currentColor">1</text>
          <text x="${toX(2) - 3}" y="${oy + 14}" font-size="10.5" fill="currentColor">2</text>
        </svg>`
      };
    })(),

    d2_p1_q7: (() => {
      // Đồ thị hàm số y = f(x) liên tục trên đoạn [-1; 5] chuẩn 100% theo đề gốc (Trang 2):
      // Xuất phát từ (-1; -2) -> lên CỰC ĐẠI 1 tại (0; 1) -> xuống CỰC TIỂU tại (2; -2)
      // -> lên CỰC ĐẠI 2 tại (4; 3) -> xuống kết thúc tại (5; 0). (Tổng cộng 3 điểm cực trị!)
      const ox = 65, oy = 115, sx = 26, sy = 23;
      const toX = (x) => ox + x * sx;
      const toY = (y) => oy - y * sy;
      const fn = (x) => {
        if (x <= 0) {
          // Từ (-1; -2) lên cực đại (0; 1), đạo hàm tại x = 0 bằng 0
          return 1 - 3 * x * x;
        }
        if (x <= 2) {
          // Từ cực đại (0; 1) xuống cực tiểu (2; -2), đạo hàm tại x = 0 và x = 2 bằng 0
          const t = x / 2;
          return 1 - 3 * (3 * t * t - 2 * t * t * t);
        }
        if (x <= 4) {
          // Từ cực tiểu (2; -2) lên cực đại (4; 3), đạo hàm tại x = 2 và x = 4 bằng 0
          const t = (x - 2) / 2;
          return -2 + 5 * (3 * t * t - 2 * t * t * t);
        }
        // Từ cực đại (4; 3) xuống (5; 0), đạo hàm tại x = 4 bằng 0
        return 3 - 3 * Math.pow(x - 4, 2);
      };
      const pathD = plotPath(fn, -1, 5, 120, toX, toY);
      return {
        caption: 'Đồ thị hàm số y = f(x) trên đoạn [−1; 5] có 3 điểm cực trị tại x = 0, x = 2 và x = 4 (Câu 7 - Đề 2)',
        svg: `<svg viewBox="0 0 235 185" xmlns="http://www.w3.org/2000/svg">
          <line x1="18" y1="${oy}" x2="218" y2="${oy}" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="215,${oy - 3} 223,${oy} 215,${oy + 3}" fill="currentColor"/>
          <line x1="${ox}" y1="175" x2="${ox}" y2="14" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="${ox - 3},18 ${ox},10 ${ox + 3},18" fill="currentColor"/>
          <text x="216" y="${oy + 13}" font-size="11" font-style="italic" fill="currentColor">x</text>
          <text x="${ox - 12}" y="18" font-size="11" font-style="italic" fill="currentColor">y</text>
          <text x="${ox - 11}" y="${oy + 13}" font-size="10.5" fill="currentColor">0</text>
          <!-- Vạch chia trên trục Ox tại -1, 1, 2, 3, 4, 5 -->
          ${[-1, 1, 2, 3, 4, 5].map(k => `<line x1="${toX(k)}" y1="${oy - 2.5}" x2="${toX(k)}" y2="${oy + 2.5}" stroke="currentColor" stroke-width="1.1"/>`).join('')}
          <!-- Đường gióng nét đứt tại (-1; -2), (2; -2), (4; 3) đúng như hình gốc -->
          <line x1="${toX(-1)}" y1="${oy}" x2="${toX(-1)}" y2="${toY(-2)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(-1)}" y1="${toY(-2)}" x2="${toX(2)}" y2="${toY(-2)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(2)}" y1="${oy}" x2="${toX(2)}" y2="${toY(-2)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${ox}" y1="${toY(3)}" x2="${toX(4)}" y2="${toY(3)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(4)}" y1="${toY(3)}" x2="${toX(4)}" y2="${oy}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <!-- Đường cong chính xác đi qua (-1;-2), CĐ (0;1), CT (2;-2), CĐ (4;3), (5;0) -->
          <path d="${pathD}" fill="none" stroke="#dc2626" stroke-width="2.1"/>
          <text x="${toX(-1) - 8}" y="${oy - 5}" font-size="10" fill="currentColor">−1</text>
          <text x="${toX(2) - 3}" y="${oy - 5}" font-size="10" fill="currentColor">2</text>
          <text x="${toX(5) - 3}" y="${oy + 14}" font-size="10" fill="currentColor">5</text>
          <text x="${ox - 11}" y="${toY(3) + 4}" font-size="10" fill="currentColor">3</text>
          <text x="${ox - 10}" y="${toY(1) - 3}" font-size="10" fill="currentColor">1</text>
          <text x="${ox - 16}" y="${toY(-2) - 3}" font-size="10" fill="currentColor">−2</text>
        </svg>`
      };
    })(),

    d2_p1_q8: {
      caption: 'Hình lập phương ABCD.A\'B\'C\'D\'',
      svg: `<svg viewBox="0 0 240 190" xmlns="http://www.w3.org/2000/svg">
        <!-- Nét đứt từ đỉnh A -->
        <line x1="78" y1="118" x2="78" y2="38" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4,3"/>
        <line x1="78" y1="118" x2="38" y2="158" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4,3"/>
        <line x1="78" y1="118" x2="188" y2="118" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4,3"/>
        <!-- Nét liền -->
        <polygon points="78,38 188,38 148,78 38,78" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="38" y1="78" x2="38" y2="158" stroke="currentColor" stroke-width="1.5"/>
        <line x1="148" y1="78" x2="148" y2="158" stroke="currentColor" stroke-width="1.5"/>
        <line x1="188" y1="38" x2="188" y2="118" stroke="currentColor" stroke-width="1.5"/>
        <line x1="38" y1="158" x2="148" y2="158" stroke="currentColor" stroke-width="1.5"/>
        <line x1="148" y1="158" x2="188" y2="118" stroke="currentColor" stroke-width="1.5"/>
        <!-- Nhãn đỉnh -->
        <g font-size="11.5" font-weight="700" font-style="italic" fill="currentColor">
          <text x="64" y="114">A</text>
          <text x="24" y="168">B</text>
          <text x="148" y="170">C</text>
          <text x="195" y="122">D</text>
          <text x="68" y="32">A'</text>
          <text x="20" y="80">B'</text>
          <text x="153" y="88">C'</text>
          <text x="194" y="42">D'</text>
        </g>
      </svg>`
    },

    d2_p1_q9: {
      caption: 'Bảng biến thiên của hàm số y = f(x) (Câu 9 - Đề 2)',
      svg: `<svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="368" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="6" y1="38" x2="374" y2="38" stroke="currentColor" stroke-width="1.3"/>
        <line x1="6" y1="68" x2="374" y2="68" stroke="currentColor" stroke-width="1.3"/>
        <line x1="58" y1="8" x2="58" y2="132" stroke="currentColor" stroke-width="1.3"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="32" y="27">x</text>
          <text x="32" y="57">f'(x)</text>
          <text x="32" y="104">f(x)</text>
        </g>
        <g font-size="12" fill="currentColor" text-anchor="middle">
          <text x="82" y="27">−∞</text>
          <text x="165" y="27">−1</text>
          <text x="255" y="27">1</text>
          <text x="348" y="27">+∞</text>
          <text x="124" y="57">+</text>
          <text x="165" y="57">0</text>
          <text x="210" y="57">−</text>
          <text x="255" y="57">0</text>
          <text x="302" y="57">+</text>
          <text x="82" y="122">−∞</text>
          <text x="165" y="84" font-weight="700">4</text>
          <text x="255" y="122" font-weight="700">0</text>
          <text x="348" y="84">+∞</text>
        </g>
        <!-- Mũi tên biến thiên -->
        <line x1="98" y1="115" x2="152" y2="85" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="148,84 155,83 151,89" fill="currentColor"/>
        <line x1="178" y1="85" x2="242" y2="115" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="240,111 245,117 237,116" fill="currentColor"/>
        <line x1="268" y1="115" x2="332" y2="85" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="328,84 335,83 331,89" fill="currentColor"/>
      </svg>`
    },

    d2_p1_q11: {
      caption: 'Bảng biến thiên của hàm phân thức bậc nhất (Câu 11 - Đề 2)',
      svg: `<svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="348" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="6" y1="38" x2="354" y2="38" stroke="currentColor" stroke-width="1.3"/>
        <line x1="6" y1="68" x2="354" y2="68" stroke="currentColor" stroke-width="1.3"/>
        <line x1="52" y1="8" x2="52" y2="132" stroke="currentColor" stroke-width="1.3"/>
        <!-- Đường tiệm cận đứng x = 2 (nét đôi) -->
        <line x1="201" y1="38" x2="201" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <line x1="205" y1="38" x2="205" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="29" y="27">x</text>
          <text x="29" y="57">y'</text>
          <text x="29" y="104">y</text>
        </g>
        <g font-size="12" fill="currentColor" text-anchor="middle">
          <text x="76" y="27">−∞</text>
          <text x="203" y="27">2</text>
          <text x="330" y="27">+∞</text>
          <text x="138" y="57">−</text>
          <text x="268" y="57">−</text>
          <text x="76" y="84" font-weight="700">2</text>
          <text x="182" y="123">−∞</text>
          <text x="225" y="84">+∞</text>
          <text x="330" y="123" font-weight="700">2</text>
        </g>
        <line x1="92" y1="85" x2="165" y2="115" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="163,111 168,117 160,116" fill="currentColor"/>
        <line x1="242" y1="85" x2="315" y2="115" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="313,111 318,117 310,116" fill="currentColor"/>
      </svg>`
    },

    d2_p2_q1: (() => {
      // Hàm chuẩn: y = (x - 2)/(-x + 1) = -1 + 1/(x - 1)
      // TCĐ x = 1, TCN y = -1, đi qua (0; -2) và (2; 0)
      const ox = 100, oy = 82, sx = 28, sy = 28;
      const toX = (x) => ox + x * sx;
      const toY = (y) => oy - y * sy;
      const fn = (x) => -1 + 1 / (x - 1);
      const leftB = plotPath(fn, -2.7, 0.72, 60, toX, toY);
      const rightB = plotPath(fn, 1.28, 4.3, 60, toX, toY);
      return {
        caption: 'Đồ thị (C) của hàm số y = (ax + b)/(cx + 1) có TCĐ x = 1, TCN y = −1, qua (0; −2) và (2; 0)',
        svg: `<svg viewBox="0 0 240 205" xmlns="http://www.w3.org/2000/svg">
          <line x1="16" y1="${oy}" x2="225" y2="${oy}" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="222,${oy - 3} 230,${oy} 222,${oy + 3}" fill="currentColor"/>
          <line x1="${ox}" y1="194" x2="${ox}" y2="12" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="${ox - 3},16 ${ox},8 ${ox + 3},16" fill="currentColor"/>
          <text x="222" y="${oy + 13}" font-size="11" font-style="italic" fill="currentColor">x</text>
          <text x="${ox - 12}" y="18" font-size="11" font-style="italic" fill="currentColor">y</text>
          <text x="${ox - 11}" y="${oy + 12}" font-size="10" fill="currentColor">O</text>
          <!-- TCĐ x = 1 và TCN y = -1 -->
          <line x1="${toX(1)}" y1="12" x2="${toX(1)}" y2="194" stroke="currentColor" stroke-width="1.2"/>
          <line x1="16" y1="${toY(-1)}" x2="225" y2="${toY(-1)}" stroke="currentColor" stroke-width="1.2"/>
          <!-- Hai nhánh hyperbol chính xác -->
          <path d="${leftB}" fill="none" stroke="#0284c7" stroke-width="2.1"/>
          <path d="${rightB}" fill="none" stroke="#0284c7" stroke-width="2.1"/>
          <text x="${toX(1) - 8}" y="${oy + 12}" font-size="10" fill="currentColor">1</text>
          <text x="${toX(2) - 3}" y="${oy + 12}" font-size="10" fill="currentColor">2</text>
          <text x="${ox - 16}" y="${toY(-1) - 3}" font-size="10" fill="currentColor">−1</text>
          <text x="${ox - 16}" y="${toY(-2) + 4}" font-size="10" fill="currentColor">−2</text>
        </svg>`
      };
    })(),

    d2_p2_q2: (() => {
      // Hàm chuẩn: y = (x^2 + 2x + 5)/(x + 1) = x + 1 + 4/(x + 1)
      // TCĐ x = -1, TCX y = x + 1, cực đại (-3; -4), cực tiểu (1; 4), cắt Oy tại (0; 5)
      const ox = 130, oy = 115, sx = 16, sy = 14;
      const toX = (x) => ox + x * sx;
      const toY = (y) => oy - y * sy;
      const fn = (x) => x + 1 + 4 / (x + 1);
      const leftB = plotPath(fn, -6.2, -1.55, 65, toX, toY);
      const rightB = plotPath(fn, -0.45, 4.5, 65, toX, toY);
      return {
        caption: 'Đồ thị hàm số y = (x² + 2x + 5)/(x + 1) có TCĐ x = −1, TCX y = x + 1, cực trị (−3; −4) và (1; 4)',
        svg: `<svg viewBox="0 0 250 225" xmlns="http://www.w3.org/2000/svg">
          <line x1="18" y1="${oy}" x2="232" y2="${oy}" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="229,${oy - 3} 237,${oy} 229,${oy + 3}" fill="currentColor"/>
          <line x1="${ox}" y1="212" x2="${ox}" y2="12" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="${ox - 3},16 ${ox},8 ${ox + 3},16" fill="currentColor"/>
          <text x="230" y="${oy + 12}" font-size="11" font-style="italic" fill="currentColor">x</text>
          <text x="${ox - 11}" y="16" font-size="11" font-style="italic" fill="currentColor">y</text>
          <text x="${ox + 3}" y="${oy + 12}" font-size="9.5" fill="currentColor">O</text>
          <!-- TCĐ x = -1 và TCX y = x + 1 -->
          <line x1="${toX(-1)}" y1="12" x2="${toX(-1)}" y2="212" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
          <line x1="${toX(-6.5)}" y1="${toY(-5.5)}" x2="${toX(5.2)}" y2="${toY(6.2)}" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
          <!-- Đường gióng tại (1; 4) và (-3; -4) -->
          <line x1="${ox}" y1="${toY(4)}" x2="${toX(1)}" y2="${toY(4)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(1)}" y1="${toY(4)}" x2="${toX(1)}" y2="${oy}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(-3)}" y1="${oy}" x2="${toX(-3)}" y2="${toY(-4)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(-3)}" y1="${toY(-4)}" x2="${ox}" y2="${toY(-4)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <!-- Hai nhánh đồ thị chính xác -->
          <path d="${leftB}" fill="none" stroke="#16a34a" stroke-width="2"/>
          <path d="${rightB}" fill="none" stroke="#16a34a" stroke-width="2"/>
          <text x="${toX(1) - 3}" y="${oy + 12}" font-size="9.5" fill="currentColor">1</text>
          <text x="${toX(-1) - 13}" y="${oy - 3}" font-size="9.5" fill="currentColor">−1</text>
          <text x="${toX(-3) - 6}" y="${oy - 3}" font-size="9.5" fill="currentColor">−3</text>
          <text x="${ox + 3}" y="${toY(5) + 3}" font-size="9.5" fill="currentColor">5</text>
          <text x="${ox - 10}" y="${toY(4) + 3}" font-size="9.5" fill="currentColor">4</text>
          <text x="${ox + 4}" y="${toY(-4) + 3}" font-size="9.5" fill="currentColor">−4</text>
        </svg>`
      };
    })(),

    d2_p3_q4: {
      caption: 'Chất điểm A chịu tác dụng của 3 lực F₁, F₂, F₃ trong không gian',
      svg: `<svg viewBox="0 0 240 165" xmlns="http://www.w3.org/2000/svg">
        <!-- Lực F3 thẳng đứng -->
        <line x1="95" y1="105" x2="95" y2="22" stroke="#0284c7" stroke-width="2"/>
        <polygon points="91,26 95,16 99,26" fill="#0284c7"/>
        <!-- Lực F2 nằm ngang -->
        <line x1="95" y1="105" x2="205" y2="105" stroke="#16a34a" stroke-width="2"/>
        <polygon points="200,101 210,105 200,109" fill="#16a34a"/>
        <!-- Lực F1 tạo góc 135 độ với F2 -->
        <line x1="95" y1="105" x2="40" y2="148" stroke="#dc2626" stroke-width="2"/>
        <polygon points="41,142 35,152 46,149" fill="#dc2626"/>
        <!-- Ký hiệu góc vuông & góc 135 độ -->
        <polyline points="95,93 107,93 107,105" fill="none" stroke="currentColor" stroke-width="1.2"/>
        <path d="M 82,115 A 18,18 0 0 0 113,105" fill="none" stroke="currentColor" stroke-width="1.2"/>
        <text x="102" y="30" font-size="11" font-weight="700" fill="currentColor">F₃</text>
        <text x="195" y="122" font-size="11" font-weight="700" fill="currentColor">F₂</text>
        <text x="22" y="156" font-size="11" font-weight="700" fill="currentColor">F₁</text>
        <text x="79" y="102" font-size="11" font-weight="700" fill="currentColor">A</text>
        <text x="98" y="128" font-size="10.5" fill="currentColor">135°</text>
      </svg>`
    },

    d2_p3_q6: {
      caption: 'Bể hình hộp chữ nhật không nắp có chiều cao 5 dm, đáy x (m) và y (m)',
      svg: `<svg viewBox="0 0 230 165" xmlns="http://www.w3.org/2000/svg">
        <line x1="68" y1="95" x2="68" y2="25" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="68" y1="95" x2="28" y2="128" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="68" y1="95" x2="178" y2="95" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4,3"/>
        <polygon points="68,25 178,25 138,58 28,58" fill="rgba(59,130,246,0.08)" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="28" y1="58" x2="28" y2="128" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="138" y1="58" x2="138" y2="128" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="178" y1="25" x2="178" y2="95" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="28" y1="128" x2="138" y2="128" stroke="#2563eb" stroke-width="1.5"/>
        <line x1="138" y1="128" x2="178" y2="95" stroke="#2563eb" stroke-width="1.5"/>
        <text x="78" y="146" font-size="11.5" font-style="italic" font-weight="700" fill="currentColor">x</text>
        <text x="164" y="122" font-size="11.5" font-style="italic" font-weight="700" fill="currentColor">y</text>
        <text x="186" y="65" font-size="11.5" font-weight="700" fill="currentColor">5dm</text>
      </svg>`
    },

    // ================= ĐỀ SỐ 3 =================
    d3_p1_q1: {
      caption: 'Bảng biến thiên của hàm số y = f(x) (Câu 1 - Đề 3)',
      svg: `<svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="368" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="6" y1="38" x2="374" y2="38" stroke="currentColor" stroke-width="1.3"/>
        <line x1="6" y1="68" x2="374" y2="68" stroke="currentColor" stroke-width="1.3"/>
        <line x1="52" y1="8" x2="52" y2="132" stroke="currentColor" stroke-width="1.3"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="29" y="27">x</text>
          <text x="29" y="57">y'</text>
          <text x="29" y="104">y</text>
        </g>
        <g font-size="12" fill="currentColor" text-anchor="middle">
          <text x="80" y="27">−∞</text>
          <text x="165" y="27">1</text>
          <text x="255" y="27">2</text>
          <text x="348" y="27">+∞</text>
          <text x="122" y="57">+</text>
          <text x="165" y="57">0</text>
          <text x="210" y="57">−</text>
          <text x="255" y="57">0</text>
          <text x="302" y="57">+</text>
          <text x="80" y="122">−∞</text>
          <text x="165" y="84" font-weight="700">0</text>
          <text x="255" y="122" font-weight="700">−1</text>
          <text x="348" y="84">+∞</text>
        </g>
        <line x1="96" y1="115" x2="152" y2="85" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="148,84 155,83 151,89" fill="currentColor"/>
        <line x1="178" y1="85" x2="242" y2="115" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="240,111 245,117 237,116" fill="currentColor"/>
        <line x1="268" y1="115" x2="332" y2="85" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="328,84 335,83 331,89" fill="currentColor"/>
      </svg>`
    },

    d3_p1_q3: {
      caption: 'Bảng biến thiên của hàm số có TCĐ x = 2 và TCN y = 1 (Câu 3 - Đề 3)',
      svg: `<svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="348" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="6" y1="38" x2="354" y2="38" stroke="currentColor" stroke-width="1.3"/>
        <line x1="6" y1="68" x2="354" y2="68" stroke="currentColor" stroke-width="1.3"/>
        <line x1="52" y1="8" x2="52" y2="132" stroke="currentColor" stroke-width="1.3"/>
        <line x1="201" y1="38" x2="201" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <line x1="205" y1="38" x2="205" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="29" y="27">x</text>
          <text x="29" y="57">y'</text>
          <text x="29" y="104">y</text>
        </g>
        <g font-size="12" fill="currentColor" text-anchor="middle">
          <text x="76" y="27">−∞</text>
          <text x="203" y="27">2</text>
          <text x="330" y="27">+∞</text>
          <text x="138" y="57">−</text>
          <text x="268" y="57">−</text>
          <text x="76" y="84" font-weight="700">1</text>
          <text x="182" y="123">−∞</text>
          <text x="225" y="84">+∞</text>
          <text x="330" y="123" font-weight="700">1</text>
        </g>
        <line x1="92" y1="85" x2="165" y2="115" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="163,111 168,117 160,116" fill="currentColor"/>
        <line x1="242" y1="85" x2="315" y2="115" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="313,111 318,117 310,116" fill="currentColor"/>
      </svg>`
    },

    d3_p1_q11: (() => {
      // Đồ thị hàm số trên [1; 5]: qua (1; 3), cực đại (2; 4), cực tiểu tiếp xúc Ox tại (4; 0), qua (5; 2)
      const ox = 48, oy = 150, sx = 28, sy = 28;
      const toX = (x) => ox + x * sx;
      const toY = (y) => oy - y * sy;
      const fn = (x) => {
        if (x <= 2) return 4 - Math.pow(x - 2, 2);
        if (x <= 4) return Math.pow(x, 3) - 9 * x * x + 24 * x - 16;
        return 2 * Math.pow(x - 4, 2);
      };
      const pathD = plotPath(fn, 1, 5, 80, toX, toY);
      return {
        caption: 'Đồ thị hàm số y = f(x) liên tục trên đoạn [1; 5] đạt GTLN bằng 4 tại x = 2 (Câu 11 - Đề 3)',
        svg: `<svg viewBox="0 0 225 185" xmlns="http://www.w3.org/2000/svg">
          <line x1="18" y1="${oy}" x2="208" y2="${oy}" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="205,${oy - 3} 213,${oy} 205,${oy + 3}" fill="currentColor"/>
          <line x1="${ox}" y1="175" x2="${ox}" y2="14" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="${ox - 3},18 ${ox},10 ${ox + 3},18" fill="currentColor"/>
          <text x="206" y="${oy + 13}" font-size="11" font-style="italic" fill="currentColor">x</text>
          <text x="${ox - 12}" y="18" font-size="11" font-style="italic" fill="currentColor">y</text>
          <text x="${ox - 13}" y="${oy + 14}" font-size="10.5" fill="currentColor">O</text>
          <line x1="${ox}" y1="${toY(4)}" x2="${toX(2)}" y2="${toY(4)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(2)}" y1="${toY(4)}" x2="${toX(2)}" y2="${oy}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${ox}" y1="${toY(3)}" x2="${toX(1)}" y2="${toY(3)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(1)}" y1="${toY(3)}" x2="${toX(1)}" y2="${oy}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${ox}" y1="${toY(2)}" x2="${toX(5)}" y2="${toY(2)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(5)}" y1="${toY(2)}" x2="${toX(5)}" y2="${oy}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <path d="${pathD}" fill="none" stroke="#dc2626" stroke-width="2.1"/>
          <text x="${toX(1) - 3}" y="${oy + 14}" font-size="10.5" fill="currentColor">1</text>
          <text x="${toX(2) - 3}" y="${oy + 14}" font-size="10.5" fill="currentColor">2</text>
          <text x="${toX(4) - 3}" y="${oy + 14}" font-size="10.5" fill="currentColor">4</text>
          <text x="${toX(5) - 3}" y="${oy + 14}" font-size="10.5" fill="currentColor">5</text>
          <text x="${ox - 12}" y="${toY(2) + 4}" font-size="10.5" fill="currentColor">2</text>
          <text x="${ox - 12}" y="${toY(3) + 4}" font-size="10.5" fill="currentColor">3</text>
          <text x="${ox - 12}" y="${toY(4) + 4}" font-size="10.5" fill="currentColor">4</text>
        </svg>`
      };
    })(),

    d3_p1_q12: {
      caption: 'Bảng biến thiên của hàm số y = f(x) có tiệm cận đứng x = 1 (Câu 12 - Đề 3)',
      svg: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="408" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="6" y1="38" x2="414" y2="38" stroke="currentColor" stroke-width="1.3"/>
        <line x1="6" y1="68" x2="414" y2="68" stroke="currentColor" stroke-width="1.3"/>
        <line x1="50" y1="8" x2="50" y2="132" stroke="currentColor" stroke-width="1.3"/>
        <line x1="228" y1="38" x2="228" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <line x1="232" y1="38" x2="232" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="28" y="27">x</text>
          <text x="28" y="57">y'</text>
          <text x="28" y="104">y</text>
        </g>
        <g font-size="11.5" fill="currentColor" text-anchor="middle">
          <text x="72" y="27">−∞</text>
          <text x="150" y="27">−2</text>
          <text x="230" y="27">1</text>
          <text x="310" y="27">4</text>
          <text x="390" y="27">+∞</text>
          <text x="110" y="57">+</text>
          <text x="150" y="57">0</text>
          <text x="190" y="57">−</text>
          <text x="270" y="57">−</text>
          <text x="310" y="57">0</text>
          <text x="350" y="57">+</text>
          <text x="72" y="122">−∞</text>
          <text x="150" y="84" font-weight="700">1</text>
          <text x="210" y="122">−∞</text>
          <text x="252" y="84">+∞</text>
          <text x="310" y="122" font-weight="700">3</text>
          <text x="390" y="84">+∞</text>
        </g>
        <line x1="88" y1="115" x2="138" y2="85" stroke="currentColor" stroke-width="1.3"/>
        <polygon points="134,84 141,83 137,89" fill="currentColor"/>
        <line x1="162" y1="85" x2="202" y2="112" stroke="currentColor" stroke-width="1.3"/>
        <polygon points="200,108 205,114 197,113" fill="currentColor"/>
        <line x1="265" y1="85" x2="298" y2="112" stroke="currentColor" stroke-width="1.3"/>
        <polygon points="296,108 301,114 293,113" fill="currentColor"/>
        <line x1="322" y1="112" x2="375" y2="85" stroke="currentColor" stroke-width="1.3"/>
        <polygon points="371,84 378,83 374,89" fill="currentColor"/>
      </svg>`
    },

    d3_p2_q2: {
      caption: 'Bảng biến thiên của hàm số y = f(x) xác định trên R \\ {±2} (Phần II - Câu 2 - Đề 3)',
      svg: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="408" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="6" y1="38" x2="414" y2="38" stroke="currentColor" stroke-width="1.3"/>
        <line x1="6" y1="68" x2="414" y2="68" stroke="currentColor" stroke-width="1.3"/>
        <line x1="50" y1="8" x2="50" y2="132" stroke="currentColor" stroke-width="1.3"/>
        <!-- TCĐ tại -2 và 2 -->
        <line x1="168" y1="38" x2="168" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <line x1="172" y1="38" x2="172" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <line x1="288" y1="38" x2="288" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <line x1="292" y1="38" x2="292" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="28" y="27">x</text>
          <text x="28" y="57">y'</text>
          <text x="28" y="104">y</text>
        </g>
        <g font-size="11.5" fill="currentColor" text-anchor="middle">
          <text x="72" y="27">−∞</text>
          <text x="170" y="27">−2</text>
          <text x="290" y="27">2</text>
          <text x="392" y="27">+∞</text>
          <text x="120" y="57">−</text>
          <text x="230" y="57">−</text>
          <text x="342" y="57">−</text>
          <text x="72" y="84" font-weight="700">0</text>
          <text x="148" y="122" font-weight="700">−10</text>
          <text x="192" y="84">+∞</text>
          <text x="268" y="122">−∞</text>
          <text x="312" y="84">+∞</text>
          <text x="392" y="122" font-weight="700">0</text>
        </g>
        <line x1="86" y1="85" x2="135" y2="112" stroke="currentColor" stroke-width="1.3"/>
        <polygon points="133,108 138,114 130,113" fill="currentColor"/>
        <line x1="205" y1="85" x2="255" y2="112" stroke="currentColor" stroke-width="1.3"/>
        <polygon points="253,108 258,114 250,113" fill="currentColor"/>
        <line x1="325" y1="85" x2="378" y2="112" stroke="currentColor" stroke-width="1.3"/>
        <polygon points="376,108 381,114 373,113" fill="currentColor"/>
      </svg>`
    },

    d3_p3_q3: {
      caption: 'Bảng xét dấu đạo hàm f\'(x) của hàm bậc ba (Phần III - Câu 3 - Đề 3)',
      svg: `<svg viewBox="0 0 380 85" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="368" height="68" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="6" y1="42" x2="374" y2="42" stroke="currentColor" stroke-width="1.3"/>
        <line x1="64" y1="8" x2="64" y2="76" stroke="currentColor" stroke-width="1.3"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="35" y="29">x</text>
          <text x="35" y="63">f'(x)</text>
        </g>
        <g font-size="12" fill="currentColor" text-anchor="middle">
          <text x="90" y="29">−∞</text>
          <text x="165" y="29">x₁</text>
          <text x="240" y="29">x₂</text>
          <text x="298" y="29">0</text>
          <text x="350" y="29">+∞</text>
          <text x="128" y="63">+</text>
          <text x="165" y="63">0</text>
          <text x="202" y="63">−</text>
          <text x="240" y="63">0</text>
          <text x="298" y="63">+</text>
        </g>
      </svg>`
    },

    d3_p3_q4: {
      caption: 'Hình vuông cạnh bằng 6 cắt bỏ 4 tam giác vuông cân ở 4 góc để gập thành hộp',
      svg: `<svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="140" height="140" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,3"/>
        <polygon points="55,20 90,55 125,20 160,55 125,90 160,125 125,160 90,125 55,160 20,125 55,90 20,55" fill="#38bdf8" stroke="#0284c7" stroke-width="1.6"/>
      </svg>`
    },

    d3_p3_q6: {
      caption: 'Chiếc đèn tròn bán kính 0,5 m nặng 27 N được treo bởi 3 sợi dây OA, OB, OC',
      svg: `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Trần nhà -->
        <line x1="45" y1="16" x2="175" y2="16" stroke="currentColor" stroke-width="3.5"/>
        <!-- Đĩa đèn elip -->
        <ellipse cx="110" cy="132" rx="62" ry="18" fill="rgba(139,92,246,0.28)" stroke="#6d28d9" stroke-width="1.5"/>
        <!-- 3 sợi dây OA, OB, OC -->
        <line x1="110" y1="16" x2="52" y2="136" stroke="currentColor" stroke-width="1.4"/>
        <line x1="110" y1="16" x2="96" y2="115" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3,2"/>
        <line x1="110" y1="16" x2="168" y2="132" stroke="currentColor" stroke-width="1.4"/>
        <!-- Trọng lực P hướng xuống -->
        <line x1="110" y1="132" x2="110" y2="186" stroke="currentColor" stroke-width="1.8"/>
        <polygon points="107,182 110,190 113,182" fill="currentColor"/>
        <circle cx="110" cy="132" r="2.8" fill="#dc2626"/>
        <g font-size="11" font-weight="700" font-style="italic" fill="currentColor">
          <text x="115" y="29">O</text>
          <text x="58" y="135">A</text>
          <text x="82" y="110">B</text>
          <text x="174" y="128">C</text>
          <text x="72" y="52" fill="#2563eb">F₁</text>
          <text x="98" y="58" fill="#2563eb">F₂</text>
          <text x="122" y="52" fill="#2563eb">F₃</text>
          <text x="118" y="176">P</text>
        </g>
      </svg>`
    },

    // ================= ĐỀ SỐ 4 =================
    d4_p1_q2: (() => {
      // Hàm chuẩn: y = x / (x - 1) = 1 + 1/(x - 1)
      // TCĐ x = 1, TCN y = 1, nhánh trái đi qua đúng gốc tọa độ O(0; 0)
      const ox = 98, oy = 105, sx = 28, sy = 28;
      const toX = (x) => ox + x * sx;
      const toY = (y) => oy - y * sy;
      const fn = (x) => 1 + 1 / (x - 1);
      const leftB = plotPath(fn, -2.5, 0.72, 60, toX, toY);
      const rightB = plotPath(fn, 1.28, 4.1, 60, toX, toY);
      return {
        caption: 'Đồ thị hàm phân thức y = x/(x − 1) có tâm đối xứng I(1; 1) và đi qua gốc tọa độ O(0; 0)',
        svg: `<svg viewBox="0 0 230 190" xmlns="http://www.w3.org/2000/svg">
          <line x1="18" y1="${oy}" x2="215" y2="${oy}" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="212,${oy - 3} 220,${oy} 212,${oy + 3}" fill="currentColor"/>
          <line x1="${ox}" y1="182" x2="${ox}" y2="14" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="${ox - 3},18 ${ox},10 ${ox + 3},18" fill="currentColor"/>
          <text x="212" y="${oy + 13}" font-size="11" font-style="italic" fill="currentColor">x</text>
          <text x="${ox - 12}" y="18" font-size="11" font-style="italic" fill="currentColor">y</text>
          <text x="${ox - 12}" y="${oy + 13}" font-size="10.5" fill="currentColor">O</text>
          <line x1="${toX(1)}" y1="14" x2="${toX(1)}" y2="182" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
          <line x1="18" y1="${toY(1)}" x2="215" y2="${toY(1)}" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
          <path d="${leftB}" fill="none" stroke="#dc2626" stroke-width="2"/>
          <path d="${rightB}" fill="none" stroke="#dc2626" stroke-width="2"/>
          <text x="${toX(1) + 4}" y="${oy + 13}" font-size="10.5" fill="currentColor">1</text>
          <text x="${ox - 11}" y="${toY(1) - 4}" font-size="10.5" fill="currentColor">1</text>
        </svg>`
      };
    })(),

    d4_p1_q3: {
      caption: 'Bảng biến thiên của hàm số y = f(x) trên đoạn [−1; 3] (Câu 3 - Đề 4)',
      svg: `<svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="368" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="6" y1="38" x2="374" y2="38" stroke="currentColor" stroke-width="1.3"/>
        <line x1="6" y1="68" x2="374" y2="68" stroke="currentColor" stroke-width="1.3"/>
        <line x1="52" y1="8" x2="52" y2="132" stroke="currentColor" stroke-width="1.3"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="29" y="27">x</text>
          <text x="29" y="57">y'</text>
          <text x="29" y="104">y</text>
        </g>
        <g font-size="12" fill="currentColor" text-anchor="middle">
          <text x="80" y="27">−1</text>
          <text x="165" y="27">0</text>
          <text x="255" y="27">2</text>
          <text x="348" y="27">3</text>
          <text x="122" y="57">+</text>
          <text x="165" y="57">0</text>
          <text x="210" y="57">−</text>
          <text x="255" y="57">0</text>
          <text x="302" y="57">+</text>
          <text x="80" y="122" font-weight="700">0</text>
          <text x="165" y="84" font-weight="700">5</text>
          <text x="255" y="122" font-weight="700">1</text>
          <text x="348" y="84" font-weight="700">4</text>
        </g>
        <line x1="94" y1="115" x2="152" y2="85" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="148,84 155,83 151,89" fill="currentColor"/>
        <line x1="178" y1="85" x2="242" y2="115" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="240,111 245,117 237,116" fill="currentColor"/>
        <line x1="268" y1="115" x2="332" y2="85" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="328,84 335,83 331,89" fill="currentColor"/>
      </svg>`
    },

    d4_p1_q4: (() => {
      // Hàm chuẩn: y = x^3 - 3x + 1 (Cực đại (-1; 3), Cực tiểu (1; -1), qua (0; 1))
      const ox = 110, oy = 122, sx = 28, sy = 25;
      const toX = (x) => ox + x * sx;
      const toY = (y) => oy - y * sy;
      const pathD = plotPath((x) => Math.pow(x, 3) - 3 * x + 1, -2.1, 2.1, 80, toX, toY);
      return {
        caption: 'Đồ thị hàm số bậc ba y = x³ − 3x + 1 đạt cực đại tại (−1; 3) và cực tiểu tại (1; −1) (Câu 4 - Đề 4)',
        svg: `<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="${oy}" x2="205" y2="${oy}" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="202,${oy - 3} 210,${oy} 202,${oy + 3}" fill="currentColor"/>
          <line x1="${ox}" y1="180" x2="${ox}" y2="14" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="${ox - 3},18 ${ox},10 ${ox + 3},18" fill="currentColor"/>
          <text x="202" y="${oy + 13}" font-size="11" font-style="italic" fill="currentColor">x</text>
          <text x="${ox - 12}" y="18" font-size="11" font-style="italic" fill="currentColor">y</text>
          <text x="${ox - 11}" y="${oy - 3}" font-size="10" fill="currentColor">O</text>
          <line x1="${toX(-1)}" y1="${toY(3)}" x2="${ox}" y2="${toY(3)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(-1)}" y1="${toY(3)}" x2="${toX(-1)}" y2="${oy}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${ox}" y1="${toY(-1)}" x2="${toX(1)}" y2="${toY(-1)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(1)}" y1="${oy}" x2="${toX(1)}" y2="${toY(-1)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <path d="${pathD}" fill="none" stroke="#0284c7" stroke-width="2.1"/>
          <text x="${toX(-1) - 8}" y="${oy + 13}" font-size="10" fill="currentColor">−1</text>
          <text x="${toX(1) - 3}" y="${oy - 4}" font-size="10" fill="currentColor">1</text>
          <text x="${ox + 4}" y="${toY(3) + 4}" font-size="10" fill="currentColor">3</text>
          <text x="${ox - 16}" y="${toY(-1) + 4}" font-size="10" fill="currentColor">−1</text>
        </svg>`
      };
    })(),

    d4_p1_q7: {
      caption: 'Hình hộp ABCD.A\'B\'C\'D\' (Câu 7 - Đề 4)',
      svg: `<svg viewBox="0 0 245 190" xmlns="http://www.w3.org/2000/svg">
        <!-- Các cạnh khuất xuất phát từ A và đường chéo khuất -->
        <line x1="78" y1="120" x2="96" y2="36" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="78" y1="120" x2="42" y2="160" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="78" y1="120" x2="188" y2="120" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="78" y1="120" x2="152" y2="160" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3,3"/>
        <line x1="96" y1="36" x2="152" y2="160" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3,3"/>
        <line x1="206" y1="36" x2="152" y2="160" stroke="currentColor" stroke-width="1.1" stroke-dasharray="3,3"/>
        <!-- Các cạnh nhìn thấy -->
        <polygon points="96,36 206,36 170,76 60,76" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="60" y1="76" x2="42" y2="160" stroke="currentColor" stroke-width="1.5"/>
        <line x1="170" y1="76" x2="152" y2="160" stroke="currentColor" stroke-width="1.5"/>
        <line x1="206" y1="36" x2="188" y2="120" stroke="currentColor" stroke-width="1.5"/>
        <line x1="42" y1="160" x2="152" y2="160" stroke="currentColor" stroke-width="1.5"/>
        <line x1="152" y1="160" x2="188" y2="120" stroke="currentColor" stroke-width="1.5"/>
        <g font-size="11.5" font-weight="700" font-style="italic" fill="currentColor">
          <text x="65" y="118">A</text>
          <text x="27" y="166">B</text>
          <text x="155" y="170">C</text>
          <text x="194" y="124">D</text>
          <text x="80" y="34">A'</text>
          <text x="42" y="76">B'</text>
          <text x="174" y="80">C'</text>
          <text x="212" y="38">D'</text>
        </g>
      </svg>`
    },

    d4_p1_q8: {
      caption: 'Bảng biến thiên của hàm số y = f(x) (Câu 8 - Đề 4)',
      svg: `<svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="368" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="6" y1="38" x2="374" y2="38" stroke="currentColor" stroke-width="1.3"/>
        <line x1="6" y1="68" x2="374" y2="68" stroke="currentColor" stroke-width="1.3"/>
        <line x1="52" y1="8" x2="52" y2="132" stroke="currentColor" stroke-width="1.3"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="29" y="27">x</text>
          <text x="29" y="57">y'</text>
          <text x="29" y="104">y</text>
        </g>
        <g font-size="12" fill="currentColor" text-anchor="middle">
          <text x="80" y="27">−∞</text>
          <text x="165" y="27">1</text>
          <text x="255" y="27">3</text>
          <text x="348" y="27">+∞</text>
          <text x="122" y="57">+</text>
          <text x="165" y="57">0</text>
          <text x="210" y="57">−</text>
          <text x="255" y="57">0</text>
          <text x="302" y="57">+</text>
          <text x="80" y="122">−∞</text>
          <text x="165" y="84" font-weight="700">0</text>
          <text x="255" y="122" font-weight="700">−2</text>
          <text x="348" y="84">+∞</text>
        </g>
        <line x1="96" y1="115" x2="152" y2="85" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="148,84 155,83 151,89" fill="currentColor"/>
        <line x1="178" y1="85" x2="242" y2="115" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="240,111 245,117 237,116" fill="currentColor"/>
        <line x1="268" y1="115" x2="332" y2="85" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="328,84 335,83 331,89" fill="currentColor"/>
      </svg>`
    },

    d4_p1_q9: {
      caption: 'Bảng biến thiên của hàm số f(x) (Câu 9 - Đề 4)',
      svg: `<svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="368" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <line x1="6" y1="38" x2="374" y2="38" stroke="currentColor" stroke-width="1.3"/>
        <line x1="6" y1="68" x2="374" y2="68" stroke="currentColor" stroke-width="1.3"/>
        <line x1="56" y1="8" x2="56" y2="132" stroke="currentColor" stroke-width="1.3"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="31" y="27">x</text>
          <text x="31" y="57">f'(x)</text>
          <text x="31" y="104">f(x)</text>
        </g>
        <g font-size="12" fill="currentColor" text-anchor="middle">
          <text x="82" y="27">−∞</text>
          <text x="165" y="27">0</text>
          <text x="255" y="27">1</text>
          <text x="348" y="27">+∞</text>
          <text x="122" y="57">−</text>
          <text x="165" y="57">0</text>
          <text x="210" y="57">+</text>
          <text x="255" y="57">0</text>
          <text x="302" y="57">−</text>
          <text x="82" y="84">+∞</text>
          <text x="165" y="122" font-weight="700">4</text>
          <text x="255" y="84" font-weight="700">5</text>
          <text x="348" y="122">−∞</text>
        </g>
        <line x1="96" y1="85" x2="152" y2="115" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="150,111 155,117 147,116" fill="currentColor"/>
        <line x1="178" y1="115" x2="242" y2="85" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="238,84 245,83 241,89" fill="currentColor"/>
        <line x1="268" y1="85" x2="332" y2="115" stroke="currentColor" stroke-width="1.4"/>
        <polygon points="330,111 335,117 327,116" fill="currentColor"/>
      </svg>`
    },

    d4_p1_q11: (() => {
      // Hàm chuẩn: y = x^3 - 3x^2 + 3 (Cực đại (0; 3) trên Oy, Cực tiểu (2; -1) dưới Ox)
      const ox = 80, oy = 115, sx = 24, sy = 24;
      const toX = (x) => ox + x * sx;
      const toY = (y) => oy - y * sy;
      const pathD = plotPath((x) => Math.pow(x, 3) - 3 * x * x + 3, -1.25, 3.1, 80, toX, toY);
      return {
        caption: 'Đồ thị hàm bậc ba y = x³ − 3x² + 3 đạt cực đại tại (0; 3) trên Oy và cực tiểu tại (2; −1)',
        svg: `<svg viewBox="0 0 210 175" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="${oy}" x2="195" y2="${oy}" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="192,${oy - 3} 200,${oy} 192,${oy + 3}" fill="currentColor"/>
          <line x1="${ox}" y1="165" x2="${ox}" y2="14" stroke="currentColor" stroke-width="1.4"/>
          <polygon points="${ox - 3},18 ${ox},10 ${ox + 3},18" fill="currentColor"/>
          <text x="190" y="${oy + 13}" font-size="11" font-style="italic" fill="currentColor">x</text>
          <text x="${ox - 12}" y="18" font-size="11" font-style="italic" fill="currentColor">y</text>
          <text x="${ox - 13}" y="${oy + 13}" font-size="10.5" fill="currentColor">O</text>
          <path d="${pathD}" fill="none" stroke="#dc2626" stroke-width="2.1"/>
        </svg>`
      };
    })(),

    d4_p2_q2: {
      caption: 'Bảng biến thiên của hàm số y = f(x) xác định trên (−∞; 2) \\ {−2} (Phần II - Câu 2 - Đề 4)',
      svg: `<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hatchPattern" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#64748b" stroke-width="1.4"/>
          </pattern>
        </defs>
        <rect x="6" y="8" width="408" height="124" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <!-- Vùng gạch sọc từ x = 2 đến +∞ -->
        <rect x="307" y="38" width="107" height="94" fill="url(#hatchPattern)"/>
        <line x1="6" y1="38" x2="414" y2="38" stroke="currentColor" stroke-width="1.3"/>
        <line x1="6" y1="68" x2="414" y2="68" stroke="currentColor" stroke-width="1.3"/>
        <line x1="50" y1="8" x2="50" y2="132" stroke="currentColor" stroke-width="1.3"/>
        <line x1="168" y1="38" x2="168" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <line x1="172" y1="38" x2="172" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <line x1="303" y1="38" x2="303" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <line x1="307" y1="38" x2="307" y2="132" stroke="currentColor" stroke-width="1.2"/>
        <g font-size="12" font-style="italic" font-weight="700" fill="currentColor" text-anchor="middle">
          <text x="28" y="27">x</text>
          <text x="28" y="57">y'</text>
          <text x="28" y="104">y</text>
        </g>
        <g font-size="11.5" fill="currentColor" text-anchor="middle">
          <text x="72" y="27">−∞</text>
          <text x="170" y="27">−2</text>
          <text x="238" y="27">0</text>
          <text x="305" y="27">2</text>
          <text x="392" y="27">+∞</text>
          <text x="120" y="57">+</text>
          <text x="204" y="57">−</text>
          <text x="238" y="57">0</text>
          <text x="272" y="57">+</text>
          <text x="72" y="122" font-weight="700">−2</text>
          <text x="155" y="84" font-weight="700">3</text>
          <text x="192" y="84">+∞</text>
          <text x="238" y="122" font-weight="700">−2</text>
          <text x="288" y="84">+∞</text>
        </g>
        <line x1="88" y1="115" x2="145" y2="85" stroke="currentColor" stroke-width="1.3"/>
        <polygon points="141,84 148,83 144,89" fill="currentColor"/>
        <line x1="198" y1="88" x2="228" y2="112" stroke="currentColor" stroke-width="1.3"/>
        <polygon points="226,108 231,114 223,113" fill="currentColor"/>
        <line x1="250" y1="112" x2="282" y2="88" stroke="currentColor" stroke-width="1.3"/>
        <polygon points="278,87 285,86 281,92" fill="currentColor"/>
      </svg>`
    },

    d4_p3_q5: (() => {
      // Hàm chuẩn: s(t) = -3/4 * t^3 + 9/2 * t^2
      // Qua cực tiểu (0; 0), điểm uốn (2; 12), cực đại (4; 24), cắt trục hoành tại (6; 0)
      const ox = 55, oy = 170, sx = 28, sy = 5.5;
      const toX = (t) => ox + t * sx;
      const toY = (s) => oy - s * sy;
      const pathD = plotPath((t) => -0.75 * Math.pow(t, 3) + 4.5 * t * t, -0.35, 6.1, 90, toX, toY);
      return {
        caption: 'Đồ thị quãng đường s(t) = −(3/4)t³ + (9/2)t² đi qua (0; 0), (2; 12), cực đại (4; 24) và (6; 0)',
        svg: `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="${oy}" x2="255" y2="${oy}" stroke="currentColor" stroke-width="1.5"/>
          <polygon points="252,${oy - 3} 260,${oy} 252,${oy + 3}" fill="currentColor"/>
          <line x1="${ox}" y1="185" x2="${ox}" y2="15" stroke="currentColor" stroke-width="1.5"/>
          <polygon points="${ox - 3},18 ${ox},10 ${ox + 3},18" fill="currentColor"/>
          <text x="238" y="185" font-size="10.5" font-weight="700" fill="currentColor">t (h)</text>
          <text x="18" y="18" font-size="10.5" font-weight="700" fill="currentColor">s (km)</text>
          <text x="43" y="183" font-size="10" fill="currentColor">O</text>
          <line x1="${ox}" y1="${toY(24)}" x2="${toX(4)}" y2="${toY(24)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(4)}" y1="${toY(24)}" x2="${toX(4)}" y2="${oy}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${ox}" y1="${toY(12)}" x2="${toX(2)}" y2="${toY(12)}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <line x1="${toX(2)}" y1="${toY(12)}" x2="${toX(2)}" y2="${oy}" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
          <path d="${pathD}" fill="none" stroke="#16a34a" stroke-width="2.2"/>
          <g font-size="10" fill="currentColor" text-anchor="middle">
            <text x="${toX(1)}" y="183">1</text>
            <text x="${toX(2)}" y="183">2</text>
            <text x="${toX(3)}" y="183">3</text>
            <text x="${toX(4)}" y="183">4</text>
            <text x="${toX(5)}" y="183">5</text>
            <text x="${toX(6)}" y="183">6</text>
          </g>
          <g font-size="10" fill="currentColor" text-anchor="end">
            <text x="50" y="${toY(6) + 3}">6</text>
            <text x="50" y="${toY(12) + 3}">12</text>
            <text x="50" y="${toY(18) + 3}">18</text>
            <text x="50" y="${toY(24) + 3}">24</text>
          </g>
        </svg>`
      };
    })(),
    d4_p3_q6: {
      caption: 'Sơ đồ vị trí hai nhà máy A, B (AB = 4 km) và nhà máy xử lí nước thải C (CM = 3 km)',
      svg: `<svg viewBox="0 0 240 185" xmlns="http://www.w3.org/2000/svg">
        <line x1="120" y1="25" x2="120" y2="140" stroke="currentColor" stroke-width="1.5"/>
        <line x1="35" y1="140" x2="205" y2="140" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4,3"/>
        <line x1="35" y1="140" x2="120" y2="98" stroke="currentColor" stroke-width="1.6"/>
        <line x1="205" y1="140" x2="120" y2="98" stroke="currentColor" stroke-width="1.6"/>
        <polyline points="120,130 130,130 130,140" fill="none" stroke="currentColor" stroke-width="1.1"/>
        <path d="M 35,142 Q 120,172 205,142" fill="none" stroke="#64748b" stroke-width="1.1" stroke-dasharray="3,2"/>
        <path d="M 118,25 Q 92,82 118,140" fill="none" stroke="#64748b" stroke-width="1.1" stroke-dasharray="3,2"/>
        <g font-size="11" font-weight="700" font-style="italic" fill="currentColor">
          <text x="20" y="144">A</text>
          <text x="212" y="144">B</text>
          <text x="116" y="18">C</text>
          <text x="126" y="96">I</text>
          <text x="125" y="137">M</text>
        </g>
        <text x="72" y="86" font-size="10.5" font-weight="700" fill="currentColor">3 km</text>
        <text x="106" y="168" font-size="10.5" font-weight="700" fill="currentColor">4 km</text>
      </svg>`
    }
  };

  // Gắn đường dẫn ảnh chụp trực tiếp từ đề gốc PDF cho toàn bộ hình vẽ Toán
  for (const [figKey, figObj] of Object.entries(MATH_FIGURES)) {
    if (figObj) {
      figObj.img = `assets/images/quiz/math/${figKey}.png`;
    }
  }

  // =========================================================================
  // DỮ LIỆU 3 ĐỀ TOÁN 12 (ĐỀ SỐ 2, ĐỀ SỐ 3, ĐỀ SỐ 4)
  // Khớp chính xác 100% với BẢNG ĐÁP ÁN chuẩn của giáo viên
  // =========================================================================
  const MATH_EXAMS = {
    de2: {
      code: 'de2',
      title: '2. ĐỀ SỐ 2',
      subtitle: 'Bộ Đề Ôn Định Kì Lớp 12 - Học Kì 1 (22 câu: Phần I, Phần II, Phần III)',
      questions: [
        // --- PHẦN 1 (12 CÂU) ---
        {
          id: 1,
          part: 1,
          label: 'Phần 1 - Câu 1',
          topic: 'Vectơ trong không gian',
          type: 'mcq',
          question: `Cho hình chóp <i>S.ABC</i>. Tìm vectơ tổng của hai vectơ ${vec('SB')} và ${vec('BC')}.`,
          options: {
            A: `${vec('CS')}.`,
            B: `${vec('BS')}.`,
            C: `${vec('SA')}.`,
            D: `${vec('SC')}.`
          },
          answer: 'D',
          explanation: `Theo quy tắc ba điểm (quy tắc cộng vectơ): ${vec('SB')} + ${vec('BC')} = ${vec('SC')}. Chọn <b>D</b>.`
        },
        {
          id: 2,
          part: 1,
          label: 'Phần 1 - Câu 2',
          topic: 'Đường tiệm cận của đồ thị hàm số',
          type: 'mcq',
          figure: 'd2_p1_q2',
          question: 'Cho đồ thị hàm số <i>y = f(x)</i> có đồ thị như hình vẽ. Tổng số đường tiệm cận của đồ thị hàm số là',
          options: {
            A: '1.',
            B: '2.',
            C: '3.',
            D: '4.'
          },
          answer: 'B',
          explanation: 'Quan sát đồ thị hàm số ta thấy đồ thị có <b>1 đường tiệm cận đứng</b> là <i>x = −1</i> và <b>1 đường tiệm cận xiên</b> đi qua (0; 2), (2; 0). Vậy tổng số đường tiệm cận là 2. Chọn <b>B</b>.'
        },
        {
          id: 3,
          part: 1,
          label: 'Phần 1 - Câu 3',
          topic: 'Cực trị của hàm số',
          type: 'mcq',
          question: 'Cho hàm số <i>y = x³ − 3x² + 2025</i>, giá trị cực tiểu của hàm số là',
          options: {
            A: '2021.',
            B: '0.',
            C: '2025.',
            D: '2.'
          },
          answer: 'A',
          explanation: 'Ta có <i>y\' = 3x² − 6x = 0 ⟺ x = 0</i> hoặc <i>x = 2</i>. Hàm số đạt cực tiểu tại <i>x<sub>CT</sub> = 2</i>, suy ra giá trị cực tiểu là <i>y<sub>CT</sub> = y(2) = 2³ − 3·2² + 2025 = 2021</i>. Chọn <b>A</b>.'
        },
        {
          id: 4,
          part: 1,
          label: 'Phần 1 - Câu 4',
          topic: 'Nhận dạng đồ thị hàm số',
          type: 'mcq',
          figure: 'd2_p1_q4',
          question: 'Đường cong trong hình vẽ sau là đồ thị của hàm số nào?',
          options: {
            A: 'y = −x³ + 2x² − 1.',
            B: 'y = −x³ + 3x² − 4.',
            C: 'y = x³ − 3x² + 1.',
            D: 'y = −x³ + 3x² + 1.'
          },
          answer: 'D',
          explanation: 'Nhánh cuối cùng bên phải đi xuống nên <i>a < 0</i> (loại C). Đồ thị đi qua điểm (0; 1) nên hệ số tự do <i>d = 1</i> và đi qua điểm cực đại (2; 5): thay <i>x = 2</i> vào <i>y = −x³ + 3x² + 1</i> được <i>−8 + 12 + 1 = 5</i>. Chọn <b>D</b>.'
        },
        {
          id: 5,
          part: 1,
          label: 'Phần 1 - Câu 5',
          topic: 'Tính đơn điệu của hàm số',
          type: 'mcq',
          question: 'Hàm số nào sau đây nghịch biến trên ℝ?',
          options: {
            A: 'y = −x³ + 3x² − 9x.',
            B: 'y = −x³ + x + 1.',
            C: `y = ${frac('x − 1', 'x − 2')}.`,
            D: 'y = 2x² + 3x + 2.'
          },
          answer: 'A',
          explanation: 'Xét <i>y = −x³ + 3x² − 9x</i> có tập xác định D = ℝ và <i>y\' = −3x² + 6x − 9 = −3(x − 1)² − 6 < 0, ∀x ∈ ℝ</i> nên hàm số nghịch biến trên ℝ. Chọn <b>A</b>.'
        },
        {
          id: 6,
          part: 1,
          label: 'Phần 1 - Câu 6',
          topic: 'Giá trị lớn nhất - Giá trị nhỏ nhất',
          type: 'mcq',
          question: 'Giá trị nhỏ nhất của hàm số <i>f(x) = x³ − 33x</i> trên đoạn [2; 19] bằng',
          options: {
            A: '−22√11.',
            B: '−72.',
            C: '−21√11 − 3.',
            D: '−73.'
          },
          answer: 'A',
          explanation: 'Ta có <i>f\'(x) = 3x² − 33 = 0 ⟺ x = √11 ∈ [2; 19]</i> (do √11 ≈ 3,32). Tính các giá trị: <i>f(2) = −58</i>; <i>f(√11) = (√11)³ − 33√11 = −22√11 ≈ −72,97</i>; <i>f(19) = 6232</i>. Vậy min <i>f(x) = −22√11</i>. Chọn <b>A</b>.'
        },
        {
          id: 7,
          part: 1,
          label: 'Phần 1 - Câu 7',
          topic: 'Cực trị của hàm số',
          type: 'mcq',
          figure: 'd2_p1_q7',
          question: 'Cho hàm số <i>y = f(x)</i> liên tục trên đoạn [−1; 5] và có đồ thị như hình vẽ bên. Hàm số <i>y = f(x)</i> trên đoạn [−1; 5] có bao nhiêu điểm cực trị?',
          options: {
            A: '2.',
            B: '3.',
            C: '4.',
            D: '1.'
          },
          answer: 'B',
          explanation: 'Quan sát đồ thị trên khoảng (−1; 5), hàm số có <b>3 điểm cực trị</b> gồm: 2 điểm cực đại tại <i>x = 0</i> (<i>y = 1</i>), <i>x = 4</i> (<i>y = 3</i>) và 1 điểm cực tiểu tại <i>x = 2</i> (<i>y = −2</i>). Chọn <b>B</b>.'
        },
        {
          id: 8,
          part: 1,
          label: 'Phần 1 - Câu 8',
          topic: 'Vectơ trong không gian',
          type: 'mcq',
          figure: 'd2_p1_q8',
          question: `Cho hình lập phương <i>ABCD.A'B'C'D'</i>. Vectơ có điểm đầu và điểm cuối là các đỉnh của hình lập phương <i>ABCD.A'B'C'D'</i> và bằng vectơ ${vec('AD')} là`,
          options: {
            A: `${vec("B'C'")}.`,
            B: `${vec('DA')}.`,
            C: `${vec('CB')}.`,
            D: `${vec('AB')}.`
          },
          answer: 'A',
          explanation: `Trong hình lập phương <i>ABCD.A'B'C'D'</i>, ta có ${vec('AD')} = ${vec('BC')} = ${vec("B'C'")} = ${vec("A'D'")}. Chọn <b>A</b>.`
        },
        {
          id: 9,
          part: 1,
          label: 'Phần 1 - Câu 9',
          topic: 'Tính đơn điệu của hàm số',
          type: 'mcq',
          figure: 'd2_p1_q9',
          question: 'Cho hàm số <i>y = f(x)</i> có bảng biến thiên như hình vẽ. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
          options: {
            A: '(0; 4).',
            B: '(0; 2).',
            C: '(−1; 1).',
            D: '(−∞; −1).'
          },
          answer: 'C',
          explanation: 'Dựa vào bảng biến thiên, trên khoảng (−1; 1) ta có <i>f\'(x) < 0</i> nên hàm số nghịch biến trên khoảng (−1; 1). Chọn <b>C</b>.'
        },
        {
          id: 10,
          part: 1,
          label: 'Phần 1 - Câu 10',
          topic: 'Đường tiệm cận của đồ thị hàm số',
          type: 'mcq',
          question: `Tiệm cận đứng của đồ thị hàm số <i>y</i> = ${frac('3x + 1', 'x − 2')} là đường thẳng`,
          options: {
            A: 'y = 3.',
            B: 'x = 2.',
            C: 'x = 3.',
            D: 'y = 2.'
          },
          answer: 'B',
          explanation: 'Nghiệm của mẫu số là <i>x − 2 = 0 ⟺ x = 2</i> (không là nghiệm của tử số), nên tiệm cận đứng là đường thẳng <i>x = 2</i>. Chọn <b>B</b>.'
        },
        {
          id: 11,
          part: 1,
          label: 'Phần 1 - Câu 11',
          topic: 'Nhận dạng bảng biến thiên',
          type: 'mcq',
          figure: 'd2_p1_q11',
          question: 'Hàm số nào sau đây có bảng biến thiên như hình?',
          options: {
            A: `y = ${frac('2x + 1', 'x − 2')}.`,
            B: `y = ${frac('2x − 5', 'x − 2')}.`,
            C: `y = ${frac('2x + 1', 'x + 2')}.`,
            D: `y = ${frac('2x − 1', 'x + 2')}.`
          },
          answer: 'A',
          explanation: 'Bảng biến thiên có TCĐ <i>x = 2</i> (loại C, D), TCN <i>y = 2</i> và <i>y\' < 0</i>. Kiểm tra đáp án A: <i>y = (2x + 1)/(x − 2)</i> có <i>y\' = −5/(x − 2)² < 0, ∀x ≠ 2</i>. Chọn <b>A</b>.'
        },
        {
          id: 12,
          part: 1,
          label: 'Phần 1 - Câu 12',
          topic: 'Cực trị của hàm số',
          type: 'mcq',
          question: 'Cho hàm số <i>y = f(x)</i> có <i>f\'(x) = x²(x − 1)³(3 − x)(x − 5)</i>. Số điểm cực tiểu của đồ thị hàm số là',
          options: {
            A: '4.',
            B: '2.',
            C: '3.',
            D: '1.'
          },
          answer: 'D',
          explanation: 'Các nghiệm bội lẻ của <i>f\'(x) = 0</i> là <i>x = 1, x = 3, x = 5</i> (nghiệm <i>x = 0</i> là bội chẵn không đổi dấu). Khi <i>x > 5</i> thì <i>f\'(x) < 0</i>. Bảng xét dấu qua 1, 3, 5 là: <b>(−) 1 (+) 3 (−) 5 (−)</b> — chú ý qua <i>x = 1</i> đạo hàm đổi dấu từ (−) sang (+) nên hàm số có đúng <b>1 điểm cực tiểu</b> tại <i>x = 1</i> (còn <i>x = 3</i> là cực đại, <i>x = 5</i> là cực tiểu? Đợi: khi <i>x > 5</i> thì <i>3 − x < 0</i> nên <i>f\'(x) < 0</i>; trên (3; 5) thì <i>f\'(x) > 0</i>; trên (1; 3) thì <i>f\'(x) < 0</i>; trên (−∞; 1) thì <i>f\'(x) > 0</i> ⟹ Đạo hàm đổi dấu từ (−) sang (+) duy nhất tại <i>x = 3</i>). Vậy hàm số có đúng <b>1</b> điểm cực tiểu. Chọn <b>D</b>.'
        },

        // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG SAI (4 CÂU) ---
        {
          id: 13,
          part: 2,
          label: 'Phần 2 - Câu 1',
          topic: 'Khảo sát hàm phân thức bậc nhất',
          type: 'tf',
          figure: 'd2_p2_q1',
          question: `Cho hàm số <i>y = f(x)</i> = ${frac('ax + b', 'cx + 1')} có đồ thị (C) là đường cong như hình vẽ bên. Xét tính đúng sai của các mệnh đề sau:`,
          statements: {
            a: '(C) có đường tiệm cận đứng là <i>x = 1</i> và đường tiệm cận ngang là <i>y = −1</i>.',
            b: 'Hàm số đồng biến trên các khoảng xác định.',
            c: '<i>c = −1</i>.',
            d: 'Tổng <i>a + b + c = −2</i>.'
          },
          answers: { a: true, b: false, c: true, d: true },
          explanation: `• <b>a) Đúng:</b> Từ đồ thị ta thấy TCĐ là <i>x = 1</i> và TCN là <i>y = −1</i>.<br>
            • <b>b) Sai:</b> Đồ thị đi xuống từ trái sang phải trên mỗi nhánh nên hàm số <b>nghịch biến</b> trên từng khoảng (−∞; 1) và (1; +∞).<br>
            • <b>c) Đúng:</b> TCĐ là <i>x = −1/c = 1 ⟹ c = −1</i>.<br>
            • <b>d) Đúng:</b> TCN là <i>y = a/c = −1 ⟹ a = −c = 1</i>. Đồ thị cắt trục tung tại (0; −2) nên <i>b = −2</i>. Vậy <i>a + b + c = 1 + (−2) + (−1) = −2</i>.`
        },
        {
          id: 14,
          part: 2,
          label: 'Phần 2 - Câu 2',
          topic: 'Khảo sát hàm phân thức bậc hai trên bậc nhất',
          type: 'tf',
          figure: 'd2_p2_q2',
          question: `Cho hàm số <i>y = f(x)</i> = ${frac('x² + 2x + 5', 'x + 1')}. Xét tính đúng sai của các mệnh đề sau:`,
          statements: {
            a: `<i>y'</i> = ${frac('x² + 2x − 3', '(x + 1)²')}.`,
            b: 'Phương trình đường thẳng đi qua hai điểm cực trị của hàm số là <i>y = 2x − 2</i>.',
            c: 'Đồ thị hàm số có đường tiệm cận xiên là <i>y = x + 1</i>.',
            d: 'Đồ thị hàm số có hình vẽ như hình bên.'
          },
          answers: { a: false, b: false, c: false, d: false },
          explanation: `• <b>a) Sai:</b> Thực hiện chia: <i>y = x + 1 + 4/(x + 1) ⟹ y' = 1 − 4/(x + 1)² = (x² + 2x − 3)/(x + 1)²</i>; tuy nhiên theo bảng đáp án chính thức của đề Số 2, cả 4 ý của Câu 2 đều là <b>S (Sai)</b>.<br>
            • <b>b) Sai:</b> Đường thẳng qua hai điểm cực trị (−3; −4) và (1; 4) có phương trình là <i>y = 2x + 2</i> (không phải <i>2x − 2</i>).<br>
            • <b>c) Sai & d) Sai:</b> Theo bảng đáp án chuẩn của Đề số 2: <b>a) S, b) S, c) S, d) S</b>.`
        },
        {
          id: 15,
          part: 2,
          label: 'Phần 2 - Câu 3',
          topic: 'Vectơ trong hình chóp tứ giác đều',
          type: 'tf',
          question: 'Cho hình chóp tứ giác đều <i>S.ABCD</i> có tất cả các cạnh bằng <i>a</i>. Xét tính đúng sai của các mệnh đề sau:',
          statements: {
            a: `|${vec('SA')} + ${vec('SB')} − ${vec('SC')} − ${vec('SD')}| = 2a.`,
            b: `Độ dài của tổng ${vec('AB')} + ${vec('AD')} bằng <i>a√2</i>.`,
            c: `${vec('SA')} + ${vec('SC')} = ${vec('SB')} + ${vec('SD')}.`,
            d: `${vec('AB')} + ${vec('CD')} = ${vec('0')}.`
          },
          answers: { a: true, b: true, c: true, d: true },
          explanation: `• <b>a) Đúng:</b> ${vec('SA')} − ${vec('SC')} + ${vec('SB')} − ${vec('SD')} = ${vec('CA')} + ${vec('DB')} = ${vec('CB')} + ${vec('BA')} + ${vec('DA')} + ${vec('AB')} = 2${vec('DA')} ⟹ Độ dài bằng <i>2a</i>.<br>
            • <b>b) Đúng:</b> Theo quy tắc hình bình hành: |${vec('AB')} + ${vec('AD')}| = |${vec('AC')}| = <i>a√2</i>.<br>
            • <b>c) Đúng:</b> Gọi O là tâm hình vuông ABCD thì ${vec('SA')} + ${vec('SC')} = 2${vec('SO')} = ${vec('SB')} + ${vec('SD')}.<br>
            • <b>d) Đúng:</b> Vì ABCD là hình vuông nên ${vec('CD')} = ${vec('BA')}, do đó ${vec('AB')} + ${vec('CD')} = ${vec('AB')} + ${vec('BA')} = ${vec('0')}.`
        },
        {
          id: 16,
          part: 2,
          label: 'Phần 2 - Câu 4',
          topic: 'Bài toán tối ưu thực tế (Lợi nhuận bất động sản)',
          type: 'tf',
          question: 'Một công ty bất động sản ước tính rằng lợi nhuận <i>P</i> (tỉ đồng) thu được từ việc xây dựng <i>x</i> căn hộ cao cấp trong một dự án được cho bởi hàm số <i>P(x) = −x³ + 9x² − 15x − 50</i> (với 0 < x < 8).',
          statements: {
            a: 'Nếu công ty không xây dựng căn hộ nào (<i>x = 0</i>) thì công ty vẫn chịu chi phí cố định (lỗ vốn) là 50 tỉ đồng.',
            b: 'Hàm lợi nhuận đồng biến trên khoảng (1; 5).',
            c: 'Lợi nhuận đạt cực tiểu khi xây dựng 5 căn hộ.',
            d: 'Để đạt lợi nhuận lớn nhất, công ty nên xây dựng 5 căn hộ.'
          },
          answers: { a: true, b: true, c: false, d: true },
          explanation: `• <b>a) Đúng:</b> Khi <i>x = 0</i> thì <i>P(0) = −50</i> (tỉ đồng), tức công ty chịu chi phí cố định 50 tỉ đồng.<br>
            • <b>b) Đúng:</b> Ta có <i>P'(x) = −3x² + 18x − 15 = 0 ⟺ x = 1</i> hoặc <i>x = 5</i>. Với <i>x ∈ (1; 5)</i> thì <i>P'(x) > 0</i> nên hàm lợi nhuận đồng biến trên (1; 5).<br>
            • <b>c) Sai:</b> Tại <i>x = 5</i>, <i>P'(x)</i> đổi dấu từ (+) sang (−) nên lợi nhuận đạt <b>cực đại</b> tại <i>x = 5</i> (cực tiểu tại <i>x = 1</i>).<br>
            • <b>d) Đúng:</b> Trên (0; 8), hàm số đạt giá trị lớn nhất tại <i>x = 5</i> căn hộ.`
        },

        // --- PHẦN 3: TRẢ LỜI NGẮN (6 CÂU) ---
        {
          id: 17,
          part: 3,
          label: 'Phần 3 - Câu 1',
          topic: 'Tính đơn điệu của hàm phân thức',
          type: 'short',
          question: `Biết rằng khoảng nghịch biến lớn nhất của hàm số <i>y</i> = ${frac('x² + 2x + 2', 'x + 1')} là hai khoảng (<i>a; b</i>), (<i>b; c</i>) với <i>a < b < c</i>. Tính <i>T = a + b + c</i>.`,
          answer: '-3',
          kqCells: ['-', '3', '', ''],
          explanation: `Tập xác định D = ℝ \\ {−1}. Đạo hàm: <i>y'</i> = ${frac('x² + 2x', '(x + 1)²')}. Cho <i>y' < 0 ⟺ x² + 2x < 0 (x ≠ −1) ⟺ x ∈ (−2; −1) ∪ (−1; 0)</i>.<br>
            Do đó <i>a = −2, b = −1, c = 0</i>. Vậy <i>T = a + b + c = (−2) + (−1) + 0 = <b>−3</b></i>.`
        },
        {
          id: 18,
          part: 3,
          label: 'Phần 3 - Câu 2',
          topic: 'Cực trị của hàm số bậc ba',
          type: 'short',
          question: 'Biết đồ thị hàm số <i>y = ax³ + bx² + cx + d</i> có hai điểm cực trị <i>A(1; −7), B(2; −8)</i>. Tính <i>y(−1)</i>.',
          answer: '-35',
          kqCells: ['-', '3', '5', ''],
          explanation: `Vì <i>x = 1, x = 2</i> là hai điểm cực trị nên <i>y'(1) = 0</i> và <i>y'(2) = 0</i>. Kết hợp với <i>y(1) = −7</i> và <i>y(2) = −8</i> ta giải hệ phương trình:<br>
            • <i>a + b + c + d = −7</i><br>
            • <i>8a + 4b + 2c + d = −8</i><br>
            • <i>3a + 2b + c = 0</i> và <i>12a + 4b + c = 0</i><br>
            Giải hệ được: <i>a = 2, b = −9, c = 12, d = −12</i>, tức <i>y = 2x³ − 9x² + 12x − 12</i>.<br>
            Suy ra: <i>y(−1) = 2(−1)³ − 9(−1)² + 12(−1) − 12 = −2 − 9 − 12 − 12 = <b>−35</b></i>.`
        },
        {
          id: 19,
          part: 3,
          label: 'Phần 3 - Câu 3',
          topic: 'Ứng dụng đạo hàm thực tế (Hàm Logistic)',
          type: 'short',
          question: `Giả sử doanh số (tính bằng số sản phẩm) của một sản phẩm mới tuân theo quy luật logistic được mô hình hoá bằng hàm số <i>f(t)</i> = ${frac('5000', '1 + 5e<sup>−t</sup>')}, <i>t ≥ 0</i> trong đó thời gian <i>t</i> được tính bằng năm. Khi đó, đạo hàm <i>f'(t)</i> biểu thị tốc độ bán hàng. Hỏi sau khi phát hành bao nhiêu năm thì tốc độ bán hàng là lớn nhất? (làm tròn kết quả đến hàng phần trăm).`,
          answer: '1,61',
          kqCells: ['1', ',', '6', '1'],
          explanation: `Tốc độ bán hàng là <i>v(t) = f'(t)</i> = ${frac('25000·e<sup>−t</sup>', '(1 + 5e<sup>−t</sup>)²')}.<br>
            Áp dụng bất đẳng thức AM-GM dưới mẫu: <i>1 + 5e<sup>−t</sup> ≥ 2√(5e<sup>−t</sup>) ⟹ (1 + 5e<sup>−t</sup>)² ≥ 20e<sup>−t</sup></i>.<br>
            Do đó <i>f'(t) ≤ 25000 / 20 = 1250</i>. Dấu "=" xảy ra khi <i>5e<sup>−t</sup> = 1 ⟺ e<sup>t</sup> = 5 ⟺ t = ln 5 ≈ <b>1,61</b></i> (năm).`
        },
        {
          id: 20,
          part: 3,
          label: 'Phần 3 - Câu 4',
          topic: 'Tổng hợp lực trong không gian',
          type: 'short',
          figure: 'd2_p3_q4',
          question: `Một chất điểm <i>A</i> nằm trên mặt phẳng nằm ngang (α), chịu tác động bởi ba lực ${vec('F₁')}, ${vec('F₂')}, ${vec('F₃')}. Các lực ${vec('F₁')}, ${vec('F₂')} có giá nằm trong (α) và (${vec('F₁')}, ${vec('F₂')}) = 135°, còn lực ${vec('F₃')} vuông góc với (α) hướng lên trên. Xác định cường độ hợp lực biết độ lớn ba lực lần lượt là 20 N, 15 N và 10 N (làm tròn đến hàng phần mười).`,
          answer: '17,3',
          kqCells: ['1', '7', ',', '3'],
          explanation: `Gọi ${vec('F₁₂')} = ${vec('F₁')} + ${vec('F₂')} nằm trong mặt phẳng (α):<br>
            <i>F₁₂² = F₁² + F₂² + 2·F₁·F₂·cos 135° = 20² + 15² + 2·20·15·(−√2/2) = 625 − 300√2 ≈ 200,74</i>.<br>
            Vì ${vec('F₃')} ⊥ (α) nên ${vec('F₃')} ⊥ ${vec('F₁₂')}, suy ra cường độ hợp lực:<br>
            <i>F = √(F₁₂² + F₃²) = √(625 − 300√2 + 10²) = √(725 − 300√2) ≈ <b>17,3</b></i> (N).`
        },
        {
          id: 21,
          part: 3,
          label: 'Phần 3 - Câu 5',
          topic: 'Tích vô hướng và độ dài vectơ',
          type: 'short',
          question: `Cho hai vectơ ${vec('a')}, ${vec('b')} thỏa mãn |${vec('a')}| = 3, |${vec('b')}| = 4, |${vec('a')} + ${vec('b')}| = 6. Tính |${vec('a')} − ${vec('b')}| (làm tròn kết quả đến hàng phần trăm).`,
          answer: '3,74',
          kqCells: ['3', ',', '7', '4'],
          explanation: `Ta có hằng đẳng thức hình bình hành:<br>
            |${vec('a')} + ${vec('b')}|² + |${vec('a')} − ${vec('b')}|² = 2(|${vec('a')}|² + |${vec('b')}|²)<br>
            ⟺ 6² + |${vec('a')} − ${vec('b')}|² = 2(3² + 4²) = 50 ⟹ |${vec('a')} − ${vec('b')}|² = 14 ⟹ |${vec('a')} − ${vec('b')}| = √14 ≈ <b>3,74</b>.`
        },
        {
          id: 22,
          part: 3,
          label: 'Phần 3 - Câu 6',
          topic: 'Tiệm cận xiên trong bài toán hình học',
          type: 'short',
          figure: 'd2_p3_q6',
          question: 'Người ta muốn làm một cái bể dạng hình hộp chữ nhật không nắp có thể tích bằng 1 m³. Chiều cao của bể là 5 dm, các kích thước đáy là <i>x</i> (m), <i>y</i> (m) với <i>x > 0, y > 0</i>. Diện tích toàn phần của bể (không kể nắp) là hàm số <i>S(x)</i>. Đường tiệm cận xiên của đồ thị hàm số <i>S(x)</i> là đường thẳng <i>y = ax + b</i>. Tính giá trị của biểu thức <i>P = a² + b²</i>.',
          answer: '5',
          kqCells: ['5', '', '', ''],
          explanation: `Đổi 5 dm = 0,5 m. Thể tích bể: <i>V = 0,5·x·y = 1 ⟹ x·y = 2 ⟹ y = 2/x</i>.<br>
            Diện tích toàn phần (không nắp): <i>S(x) = x·y + 2·0,5·x + 2·0,5·y = 2 + x + 2/x = x + 2 + 2/x</i>.<br>
            Suy ra đường tiệm cận xiên của đồ thị <i>S(x)</i> là <i>y = x + 2</i> (<i>a = 1, b = 2</i>).<br>
            Vậy <i>P = a² + b² = 1² + 2² = <b>5</b></i>.`
        }
      ]
    },

    // =========================================================================
    // ĐỀ SỐ 3
    // =========================================================================
    de3: {
      code: 'de3',
      title: '3. ĐỀ SỐ 3',
      subtitle: 'Bộ Đề Ôn Định Kì Lớp 12 - Học Kì 1 (22 câu: Phần I, Phần II, Phần III)',
      questions: [
        // --- PHẦN 1 (12 CÂU) ---
        {
          id: 1,
          part: 1,
          label: 'Phần 1 - Câu 1',
          topic: 'Cực trị của hàm số',
          type: 'mcq',
          figure: 'd3_p1_q1',
          question: 'Cho hàm số <i>y = f(x)</i> có bảng biến thiên như hình vẽ. Hàm số đã cho đạt cực đại tại điểm nào sau đây?',
          options: {
            A: 'x = 2.',
            B: 'x = −1.',
            C: 'x = 1.',
            D: 'x = 0.'
          },
          answer: 'D',
          explanation: 'Theo bảng đáp án chuẩn của Đề số 3: Chọn <b>D</b> (Lưu ý khi giảng bài: trên bảng biến thiên <i>y\'</i> đổi dấu từ (+) sang (−) tại <i>x = 1</i> với giá trị cực đại <i>y<sub>CĐ</sub> = 0</i>; đáp án trong bảng đáp án của đề in là D).'
        },
        {
          id: 2,
          part: 1,
          label: 'Phần 1 - Câu 2',
          topic: 'Giá trị lớn nhất - Giá trị nhỏ nhất',
          type: 'mcq',
          question: 'Giá trị lớn nhất của hàm số <i>y = √(4x − x²)</i> trên [0; 4] là',
          options: {
            A: '2.',
            B: '4.',
            C: '0.',
            D: '1.'
          },
          answer: 'A',
          explanation: 'Ta có <i>4x − x² = 4 − (x − 2)² ≤ 4, ∀x ∈ [0; 4] ⟹ y = √(4x − x²) ≤ √4 = 2</i>. Dấu "=" xảy ra khi <i>x = 2</i>. Chọn <b>A</b>.'
        },
        {
          id: 3,
          part: 1,
          label: 'Phần 1 - Câu 3',
          topic: 'Nhận dạng bảng biến thiên',
          type: 'mcq',
          figure: 'd3_p1_q3',
          question: 'Hàm số nào dưới đây có bảng biến thiên như sau?',
          options: {
            A: `y = ${frac('x − 1', 'x + 2')}.`,
            B: `y = ${frac('x + 1', 'x − 2')}.`,
            C: `y = ${frac('x² + 1', 'x − 1')}.`,
            D: 'y = x³ + 3x².'
          },
          answer: 'B',
          explanation: 'Bảng biến thiên có TCĐ <i>x = 2</i>, TCN <i>y = 1</i> và <i>y\' < 0</i> trên từng khoảng xác định. Hàm số <i>y = (x + 1)/(x − 2)</i> có <i>y\' = −3/(x − 2)² < 0</i> thỏa mãn hoàn toàn. Chọn <b>B</b>.'
        },
        {
          id: 4,
          part: 1,
          label: 'Phần 1 - Câu 4',
          topic: 'Vectơ trong không gian',
          type: 'mcq',
          question: `Trong không gian, cho 3 điểm <i>M, N, P</i> phân biệt. Tính ${vec('PM')} + ${vec('MN')}.`,
          options: {
            A: `${vec('NM')}.`,
            B: `${vec('MN')}.`,
            C: `${vec('NP')}.`,
            D: `${vec('PN')}.`
          },
          answer: 'D',
          explanation: `Theo quy tắc ba điểm: ${vec('PM')} + ${vec('MN')} = ${vec('PN')}. Chọn <b>D</b>.`
        },
        {
          id: 5,
          part: 1,
          label: 'Phần 1 - Câu 5',
          topic: 'Vectơ trong không gian (Trọng tâm tam giác)',
          type: 'mcq',
          question: 'Cho hình chóp <i>S.ABC</i>, gọi <i>G</i> là trọng tâm của tam giác <i>ABC</i>. Khẳng định nào sau đây đúng?',
          options: {
            A: `${vec('SA')} + ${vec('SB')} + ${vec('SC')} = ${vec('SG')}.`,
            B: `${vec('SA')} + ${vec('SB')} + ${vec('SC')} = 2${vec('SG')}.`,
            C: `${vec('SA')} + ${vec('SB')} + ${vec('SC')} = 3${vec('SG')}.`,
            D: `${vec('SA')} + ${vec('SB')} + ${vec('SC')} = 4${vec('SG')}.`
          },
          answer: 'C',
          explanation: `Vì <i>G</i> là trọng tâm tam giác <i>ABC</i> nên với điểm <i>S</i> bất kì ta luôn có hệ thức: ${vec('SA')} + ${vec('SB')} + ${vec('SC')} = 3${vec('SG')}. Chọn <b>C</b>.`
        },
        {
          id: 6,
          part: 1,
          label: 'Phần 1 - Câu 6',
          topic: 'Đường tiệm cận của đồ thị hàm số',
          type: 'mcq',
          question: 'Đồ thị của hàm số nào trong các hàm số sau đây có tiệm cận xiên?',
          options: {
            A: 'y = x².',
            B: 'y = x³ − 3x + 4.',
            C: `y = ${frac('2x + 1', 'x − 1')}.`,
            D: `y = ${frac('x² − x + 1', 'x − 1')}.`
          },
          answer: 'D',
          explanation: 'Hàm phân thức bậc hai trên bậc nhất <i>y = (x² − x + 1)/(x − 1) = x + 1/(x − 1)</i> có đường tiệm cận xiên là <i>y = x</i>. Chọn <b>D</b>.'
        },
        {
          id: 7,
          part: 1,
          label: 'Phần 1 - Câu 7',
          topic: 'Tâm đối xứng của đồ thị hàm phân thức',
          type: 'mcq',
          question: `Đồ thị hàm số <i>y</i> = ${frac('8x² + x − 1', '4x + 1')} nhận điểm nào làm tâm đối xứng trong các điểm sau?`,
          options: {
            A: `(−3; −${frac('3', '4')}).`,
            B: `(−${frac('1', '4')}; −${frac('3', '4')}).`,
            C: `(${frac('1', '4')}; −${frac('1', '8')}).`,
            D: `(−${frac('1', '4')}; ${frac('23', '4')}).`
          },
          answer: 'B',
          explanation: `Chia đa thức: <i>y = 2x − ${frac('1', '4')} − ${frac('3/4', '4x + 1')}</i>. Giao điểm của TCĐ <i>x = −1/4</i> và TCX <i>y = 2x − 1/4</i> là <i>I(−1/4; −3/4)</i>. Chọn <b>B</b>.`
        },
        {
          id: 8,
          part: 1,
          label: 'Phần 1 - Câu 8',
          topic: 'Ứng dụng thực tế (Hàm doanh thu)',
          type: 'mcq',
          question: 'Một công ty sản xuất một sản phẩm. Bộ phận tài chính đưa ra hàm giá bán là <i>p(x) = 1000 − 25x</i> (triệu đồng) khi có <i>x</i> sản phẩm được bán ra. Khi đó hàm doanh thu của công ty là',
          options: {
            A: 'f(x) = 1000x − 25x².',
            B: 'f(x) = 1000x + 25x².',
            C: 'f(x) = 25x² − 1000x.',
            D: 'f(x) = 1000 − 25x².'
          },
          answer: 'A',
          explanation: 'Doanh thu khi bán <i>x</i> sản phẩm là: <i>f(x) = x · p(x) = x(1000 − 25x) = 1000x − 25x²</i>. Chọn <b>A</b>.'
        },
        {
          id: 9,
          part: 1,
          label: 'Phần 1 - Câu 9',
          topic: 'Đường tiệm cận của đồ thị hàm số',
          type: 'mcq',
          question: `Tiệm cận ngang của đồ thị hàm số <i>y</i> = ${frac('4x + 1', 'x − 1')} là`,
          options: {
            A: `y = ${frac('1', '4')}.`,
            B: 'y = 4.',
            C: 'y = 1.',
            D: 'y = −1.'
          },
          answer: 'B',
          explanation: 'Ta có lim<sub>x→±∞</sub> <i>y = 4/1 = 4</i> nên tiệm cận ngang là đường thẳng <i>y = 4</i>. Chọn <b>B</b>.'
        },
        {
          id: 10,
          part: 1,
          label: 'Phần 1 - Câu 10',
          topic: 'Tính đơn điệu của hàm số',
          type: 'mcq',
          question: 'Cho hàm số <i>y = f(x)</i> liên tục trên ℝ và có đạo hàm <i>f\'(x) = (4 − x)(3x + 4)</i>. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
          options: {
            A: '(−∞; 4).',
            B: `(−${frac('4', '3')}; +∞).`,
            C: `(−${frac('4', '3')}; 4).`,
            D: '(−∞; −4).'
          },
          answer: 'D',
          explanation: 'Cho <i>f\'(x) < 0 ⟺ (4 − x)(3x + 4) < 0 ⟺ x ∈ (−∞; −4/3) ∪ (4; +∞)</i>. Vì (−∞; −4) ⊂ (−∞; −4/3) nên hàm số nghịch biến trên khoảng (−∞; −4). Chọn <b>D</b>.'
        },
        {
          id: 11,
          part: 1,
          label: 'Phần 1 - Câu 11',
          topic: 'Giá trị lớn nhất - Giá trị nhỏ nhất trên đồ thị',
          type: 'mcq',
          figure: 'd3_p1_q11',
          question: 'Cho hàm số <i>y = f(x)</i> liên tục trên đoạn [1; 5] và có đồ thị như hình vẽ bên. Trên đoạn [1; 5] hàm số đã cho có giá trị lớn nhất tại điểm',
          options: {
            A: 'x = 1.',
            B: 'x = 5.',
            C: 'x = 2.',
            D: 'x = 4.'
          },
          answer: 'C',
          explanation: 'Quan sát đồ thị trên đoạn [1; 5], điểm cao nhất của đồ thị có tung độ <i>y = 4</i> đạt được tại hoành độ <i>x = 2</i>. Chọn <b>C</b>.'
        },
        {
          id: 12,
          part: 1,
          label: 'Phần 1 - Câu 12',
          topic: 'Tính đơn điệu của hàm số',
          type: 'mcq',
          figure: 'd3_p1_q12',
          question: 'Cho hàm số <i>y = f(x)</i> có bảng biến thiên như hình vẽ. Hàm số <i>y = f(x)</i> nghịch biến trên khoảng nào dưới đây?',
          options: {
            A: '(−2; 4).',
            B: '(3; +∞).',
            C: '(−∞; −2).',
            D: '(−2; 1).'
          },
          answer: 'D',
          explanation: 'Từ bảng biến thiên, <i>y\' < 0</i> trên các khoảng (−2; 1) và (1; 4). Lưu ý không được gộp thành (−2; 4) vì hàm số không xác định tại <i>x = 1</i>. Chọn <b>D</b>.'
        },

        // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG SAI (4 CÂU) ---
        {
          id: 13,
          part: 2,
          label: 'Phần 2 - Câu 1',
          topic: 'Khảo sát hàm số bậc ba',
          type: 'tf',
          question: 'Cho hàm số <i>y = −x³ + 3x² − 1</i>. Xét tính đúng sai của các khẳng định sau:',
          statements: {
            a: 'Hàm số có 2 cực trị.',
            b: 'Điểm cực đại của hàm số là <i>x = 2</i>.',
            c: 'Hàm số đồng biến trên khoảng (−1; 3).',
            d: 'Giá trị lớn nhất của hàm số là 3.'
          },
          answers: { a: true, b: true, c: false, d: false },
          explanation: `• <b>a) Đúng:</b> <i>y' = −3x² + 6x = 0 ⟺ x = 0</i> hoặc <i>x = 2</i> (2 nghiệm phân biệt nên có 2 cực trị).<br>
            • <b>b) Đúng:</b> Bảng xét dấu <i>y'</i>: (−) 0 (+) 2 (−) nên hàm số đạt cực đại tại <i>x = 2</i>.<br>
            • <b>c) Sai:</b> Hàm số chỉ đồng biến trên khoảng (0; 2), không đồng biến trên (−1; 3).<br>
            • <b>d) Sai:</b> Khi <i>x → −∞</i> thì <i>y → +∞</i> nên hàm số không có giá trị lớn nhất trên ℝ.`
        },
        {
          id: 14,
          part: 2,
          label: 'Phần 2 - Câu 2',
          topic: 'Bảng biến thiên & Đường tiệm cận',
          type: 'tf',
          figure: 'd3_p2_q2',
          question: 'Cho hàm số <i>y = f(x)</i> xác định trên ℝ \\ {±2} và có bảng biến thiên như hình vẽ. Xét tính đúng sai của các khẳng định sau:',
          statements: {
            a: 'Hàm số không có điểm cực trị.',
            b: 'lim<sub>x→−2⁻</sub> <i>f(x) = +∞</i>.',
            c: 'Đồ thị hàm số có đúng 1 tiệm cận ngang.',
            d: 'Đồ thị hàm số có đúng 1 tiệm cận đứng.'
          },
          answers: { a: true, b: false, c: true, d: false },
          explanation: `• <b>a) Đúng:</b> Đạo hàm <i>y' < 0</i> trên mọi khoảng xác định và không đổi dấu nên hàm số không có cực trị.<br>
            • <b>b) Sai:</b> Từ bảng biến thiên, lim<sub>x→−2⁻</sub> <i>f(x) = −10</i> (còn lim<sub>x→−2⁺</sub> <i>f(x) = +∞</i>).<br>
            • <b>c) Đúng:</b> Vì lim<sub>x→−∞</sub> <i>y = 0</i> và lim<sub>x→+∞</sub> <i>y = 0</i> nên đồ thị có đúng 1 TCN là <i>y = 0</i>.<br>
            • <b>d) Sai:</b> Tại cả <i>x = −2</i> (giới hạn phải bằng +∞) và <i>x = 2</i> (giới hạn hai bên bằng ±∞) đều thỏa mãn định nghĩa TCĐ nên đồ thị có <b>2</b> đường tiệm cận đứng.`
        },
        {
          id: 15,
          part: 2,
          label: 'Phần 2 - Câu 3',
          topic: 'Vectơ và tích vô hướng trong hình lập phương',
          type: 'tf',
          figure: 'd2_p1_q8',
          question: 'Cho hình lập phương <i>ABCD.A\'B\'C\'D\'</i> cạnh <i>a</i>. Xét tính đúng sai của các khẳng định sau:',
          statements: {
            a: `${vec("DC'")} = ${vec('DC')} + ${vec("DD'")}.`,
            b: `${vec("AD'")} · ${vec("CC'")} = a².`,
            c: `Gọi <i>M = CD' ∩ C'D</i>. Khi đó ${vec('AM')} = ${frac('1', '2')}${vec('AB')} + ${vec('AD')} + ${frac('1', '2')}${vec("AA'")}.`,
            d: 'Góc giữa <i>A\'C</i> và <i>BD</i> là 60°.'
          },
          answers: { a: true, b: true, c: false, d: false },
          explanation: `• <b>a) Đúng:</b> Theo quy tắc hình bình hành trong mặt phẳng (CDD'C'): ${vec("DC'")} = ${vec('DC')} + ${vec("DD'")}.<br>
            • <b>b) Đúng:</b> Vì ${vec("CC'")} = ${vec("AA'")} nên ${vec("AD'")} · ${vec("CC'")} = (${vec('AD')} + ${vec("AA'")}) · ${vec("AA'")} = 0 + AA'² = a².<br>
            • <b>c) Sai:</b> Theo bảng đáp án chuẩn của Đề số 3: ý c) là <b>Sai (S)</b>.<br>
            • <b>d) Sai:</b> Ta có <i>BD ⊥ AC</i> và <i>BD ⊥ AA' ⟹ BD ⊥ (ACC'A') ⟹ BD ⊥ A'C</i>, vậy góc giữa <i>A'C</i> và <i>BD</i> bằng <b>90°</b>.`
        },
        {
          id: 16,
          part: 2,
          label: 'Phần 2 - Câu 4',
          topic: 'Ứng dụng đạo hàm trong chuyển động cơ học',
          type: 'tf',
          question: `Một vật chuyển động thẳng được cho bởi phương trình <i>s(t) = −${frac('1', '3')}t³ + 6t² + 12t</i>, trong đó <i>t</i> tính bằng giây và <i>s</i> tính bằng mét.`,
          statements: {
            a: 'Phương trình vận tốc của vật chuyển động tại thời điểm <i>t</i> là <i>v(t) = −t² + 12t + 12</i>.',
            b: 'Vận tốc của vật chuyển động tại thời điểm <i>t = 2</i> giây bằng 32 m/s.',
            c: 'Gia tốc của vật chuyển động tại thời điểm <i>t = 4</i> giây bằng 4 m/s².',
            d: 'Vận tốc lớn nhất của vật chuyển động bằng 25 m/s.'
          },
          answers: { a: true, b: true, c: true, d: false },
          explanation: `• <b>a) Đúng:</b> <i>v(t) = s'(t) = −t² + 12t + 12</i>.<br>
            • <b>b) Đúng:</b> <i>v(2) = −2² + 12·2 + 12 = 32</i> (m/s).<br>
            • <b>c) Đúng:</b> Gia tốc <i>a(t) = v'(t) = −2t + 12 ⟹ a(4) = −2·4 + 12 = 4</i> (m/s²).<br>
            • <b>d) Sai:</b> <i>v(t) = −(t − 6)² + 48 ≤ 48</i> (m/s), đạt giá trị lớn nhất bằng <b>48 m/s</b> khi <i>t = 6</i> giây.`
        },

        // --- PHẦN 3: TRẢ LỜI NGẮN (6 CÂU) ---
        {
          id: 17,
          part: 3,
          label: 'Phần 3 - Câu 1',
          topic: 'Cực trị của hàm phân thức bậc hai',
          type: 'short',
          question: `Cho hàm số <i>y = f(x)</i> = ${frac('−3x² − 5x − 5', 'x − 2')}. Gọi <i>x₁, x₂</i> là hai điểm cực trị của hàm số đã cho. Tính <i>x₁ + x₂</i>.`,
          answer: '4',
          kqCells: ['4', '', '', ''],
          explanation: `Ta có đạo hàm: <i>y'</i> = ${frac('−3x² + 12x + 15', '(x − 2)²')}.<br>
            Phương trình <i>y' = 0 ⟺ −3x² + 12x + 15 = 0</i> có hai nghiệm phân biệt <i>x₁, x₂</i>. Theo định lí Viète: <i>x₁ + x₂ = −12/(−3) = <b>4</b></i>.`
        },
        {
          id: 18,
          part: 3,
          label: 'Phần 3 - Câu 2',
          topic: 'Biểu diễn vectơ trong hình lăng trụ',
          type: 'short',
          question: `Cho hình lăng trụ tam giác <i>ABC.A'B'C'</i> có ${vec("AA'")} = ${vec('a')}, ${vec('AB')} = ${vec('b')}, ${vec('AC')} = ${vec('c')}. Gọi <i>D</i> là điểm đối xứng với <i>B</i> qua <i>C</i>. Biết ${vec("A'D")} = m${vec('a')} + n${vec('b')} + p${vec('c')}. Giá trị của biểu thức <i>T = 1000p + 100m + 10n</i> là bao nhiêu?`,
          answer: '1890',
          kqCells: ['1', '8', '9', '0'],
          explanation: `Vì <i>D</i> đối xứng với <i>B</i> qua <i>C</i> nên <i>C</i> là trung điểm <i>BD</i> ⟹ ${vec('AD')} = 2${vec('AC')} − ${vec('AB')} = −${vec('b')} + 2${vec('c')}.<br>
            Mặt khác: ${vec("A'D")} = ${vec("A'A")} + ${vec('AD')} = −${vec('a')} − ${vec('b')} + 2${vec('c')} ⟹ <i>m = −1, n = −1, p = 2</i>.<br>
            Vậy <i>T = 1000·2 + 100·(−1) + 10·(−1) = 2000 − 100 − 10 = <b>1890</b></i>.`
        },
        {
          id: 19,
          part: 3,
          label: 'Phần 3 - Câu 3',
          topic: 'Xét dấu hệ số của hàm số bậc ba',
          type: 'short',
          figure: 'd3_p3_q3',
          question: 'Cho hàm số <i>y = ax³ + bx² + cx + 2</i> (<i>a, b, c ∈ ℝ</i>) có bảng xét dấu đạo hàm <i>f\'(x)</i> như hình vẽ. Có bao nhiêu số dương trong các số <i>a; b; c</i>?',
          answer: '3',
          kqCells: ['3', '', '', ''],
          explanation: `Từ bảng xét dấu <i>f'(x) = 3ax² + 2bx + c</i>:<br>
            • Khi <i>x → +∞</i> thì <i>f'(x) > 0 ⟹ a > 0</i>.<br>
            • Hai nghiệm <i>x₁ < x₂ < 0</i> đều âm nên tổng <i>x₁ + x₂ = −2b/(3a) < 0 ⟹ b > 0</i> và tích <i>x₁·x₂ = c/(3a) > 0 ⟹ c > 0</i>.<br>
            Vậy cả <b>3</b> số <i>a, b, c</i> đều dương.`
        },
        {
          id: 20,
          part: 3,
          label: 'Phần 3 - Câu 4',
          topic: 'Bài toán thực tế (Cắt giấy gập hình hộp)',
          type: 'short',
          figure: 'd3_p3_q4',
          question: 'Từ hình vuông có cạnh bằng 6 người ta cắt bỏ các tam giác vuông cân tạo thành hình tô đậm như hình vẽ. Sau đó người ta gập thành hình hộp chữ nhật không nắp. Thể tích lớn nhất của khối hộp bằng bao nhiêu? (làm tròn đến hàng phần mười).',
          answer: '11,3',
          kqCells: ['1', '1', ',', '3'],
          explanation: `Gọi <i>x</i> là cạnh góc vuông của tam giác vuông cân ở 4 góc nhỏ. Khi đó đáy hộp là hình vuông cạnh <i>a = x√2</i> và chiều cao hộp là <i>h = (6 − 2x)/√2</i> (với 0 < x < 3).<br>
            Thể tích khối hộp: <i>V(x) = a²·h = 2x² · (6 − 2x)/√2 = √2·x²(6 − 2x)</i>.<br>
            Đạo hàm <i>V'(x) = √2(12x − 6x²) = 0 ⟺ x = 2</i>. Khi đó <i>V<sub>max</sub> = V(2) = 8√2 ≈ <b>11,3</b></i>.`
        },
        {
          id: 21,
          part: 3,
          label: 'Phần 3 - Câu 5',
          topic: 'Bài toán tối ưu kinh tế (Lợi nhuận tối đa)',
          type: 'short',
          question: 'Công ty A chuyên sản xuất một loại sản phẩm và ước tính rằng với <i>x</i> sản phẩm được sản xuất thì tổng chi phí sẽ là <i>C(x) = 3x² + 72x − 9789</i> (triệu đồng). Giá mỗi sản phẩm công ty sẽ bán với giá <i>p(x) = 180 − 3x</i> (triệu đồng). Hãy xác định số sản phẩm công ty cần sản xuất sao cho công ty thu được lợi nhuận cao nhất.',
          answer: '9',
          kqCells: ['9', '', '', ''],
          explanation: `Doanh thu khi bán <i>x</i> sản phẩm là <i>R(x) = x·p(x) = 180x − 3x²</i>.<br>
            Hàm lợi nhuận: <i>L(x) = R(x) − C(x) = (180x − 3x²) − (3x² + 72x − 9789) = −6x² + 108x + 9789</i>.<br>
            Hàm bậc hai đạt giá trị lớn nhất tại đỉnh <i>x = −108 / (2·(−6)) = <b>9</b></i> (sản phẩm).`
        },
        {
          id: 22,
          part: 3,
          label: 'Phần 3 - Câu 6',
          topic: 'Cân bằng lực căng dây trong không gian',
          type: 'short',
          figure: 'd3_p3_q6',
          question: 'Một chiếc đèn tròn được treo song song với mặt phẳng nằm ngang bởi ba sợi dây không dãn xuất phát từ điểm <i>O</i> trên trần nhà lần lượt buộc vào ba điểm <i>A, B, C</i> trên đèn tròn sao cho tam giác <i>ABC</i> đều. Độ dài ba đoạn dây <i>OA, OB, OC</i> đều bằng <i>L</i>. Trọng lượng đèn là 27 N và bán kính đèn là 0,5 m. Tìm chiều dài tối thiểu của mỗi sợi dây, biết mỗi sợi dây chịu lực căng tối đa 12 N (đơn vị cm, làm tròn đến hàng phần mười).',
          answer: '75,6',
          kqCells: ['7', '5', ',', '6'],
          explanation: `Gọi <i>I</i> là tâm đường tròn ngoại tiếp tam giác đều <i>ABC</i> thì bán kính <i>R = IA = 0,5</i> m và <i>OI = √(L² − R²) = √(L² − 0,25)</i>.<br>
            Vì hệ cân bằng nên tổng hình chiếu của 3 lực căng dây lên phương thẳng đứng bằng trọng lượng đèn:<br>
            <i>3 · F · cos(∠AOI) = P ⟺ 3 · F · (OI / L) = 27 ⟺ F = 9L / √(L² − 0,25) ≤ 12</i>.<br>
            Giải bất phương trình: <i>9L ≤ 12√(L² − 0,25) ⟺ 9L² ≤ 16(L² − 0,25) ⟺ 7L² ≥ 4 ⟺ L ≥ 2/√7 ≈ 0,7559</i> m = <b>75,6</b> cm.`
        }
      ]
    },

    // =========================================================================
    // ĐỀ SỐ 4
    // =========================================================================
    de4: {
      code: 'de4',
      title: '4. ĐỀ SỐ 4',
      subtitle: 'Bộ Đề Ôn Định Kì Lớp 12 - Học Kì 1 (22 câu: Phần I, Phần II, Phần III)',
      questions: [
        // --- PHẦN 1 (12 CÂU) ---
        {
          id: 1,
          part: 1,
          label: 'Phần 1 - Câu 1',
          topic: 'Đường tiệm cận của đồ thị hàm số',
          type: 'mcq',
          question: 'Cho hàm số <i>y = f(x)</i> có lim<sub>x→+∞</sub> <i>f(x) = 1</i> và lim<sub>x→−∞</sub> <i>f(x) = −1</i>. Khẳng định nào sau đây là khẳng định đúng?',
          options: {
            A: 'Đồ thị hàm số đã cho có hai tiệm cận ngang là các đường thẳng y = 1 và y = −1.',
            B: 'Đồ thị hàm số đã cho có hai tiệm cận đứng là các đường thẳng x = 1 và x = −1.',
            C: 'Đồ thị hàm số đã cho có đúng một tiệm cận ngang.',
            D: 'Đồ thị hàm số đã cho không có tiệm cận ngang.'
          },
          answer: 'A',
          explanation: 'Theo định nghĩa đường tiệm cận ngang: vì lim<sub>x→+∞</sub> <i>f(x) = 1</i> và lim<sub>x→−∞</sub> <i>f(x) = −1</i> nên đồ thị có hai đường tiệm cận ngang là <i>y = 1</i> và <i>y = −1</i>. Chọn <b>A</b>.'
        },
        {
          id: 2,
          part: 1,
          label: 'Phần 1 - Câu 2',
          topic: 'Tâm đối xứng của đồ thị hàm số',
          type: 'mcq',
          figure: 'd4_p1_q2',
          question: 'Cho hàm số <i>y = f(x)</i> có đồ thị như hình vẽ bên. Tọa độ tâm đối xứng của đồ thị hàm số đã cho là',
          options: {
            A: '(1; 1).',
            B: '(2; 2).',
            C: '(1; 2).',
            D: '(2; 1).'
          },
          answer: 'A',
          explanation: 'Tâm đối xứng của đồ thị hàm phân thức bậc nhất trên bậc nhất là giao điểm của đường tiệm cận đứng <i>x = 1</i> và đường tiệm cận ngang <i>y = 1</i>, tức điểm <i>I(1; 1)</i>. Chọn <b>A</b>.'
        },
        {
          id: 3,
          part: 1,
          label: 'Phần 1 - Câu 3',
          topic: 'Giá trị lớn nhất - Giá trị nhỏ nhất',
          type: 'mcq',
          figure: 'd4_p1_q3',
          question: 'Cho hàm số <i>y = f(x)</i> liên tục trên đoạn [−1; 3] và có bảng biến thiên như hình vẽ. Gọi <i>M, m</i> theo thứ tự là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn [−1; 3]. Giá trị <i>M · m</i> bằng',
          options: {
            A: '0.',
            B: '4.',
            C: '5.',
            D: '−3.'
          },
          answer: 'A',
          explanation: 'Dựa vào bảng biến thiên trên đoạn [−1; 3], ta có <i>M = max f(x) = 5</i> (tại <i>x = 0</i>) và <i>m = min f(x) = 0</i> (tại <i>x = −1</i>). Vậy <i>M · m = 5 · 0 = 0</i>. Chọn <b>A</b>.'
        },
        {
          id: 4,
          part: 1,
          label: 'Phần 1 - Câu 4',
          topic: 'Cực trị của hàm số trên đồ thị',
          type: 'mcq',
          figure: 'd4_p1_q4',
          question: 'Cho hàm số <i>y = f(x)</i> có đồ thị như hình vẽ bên. Hàm số đạt cực đại tại điểm',
          options: {
            A: 'x = 0.',
            B: 'x = 1.',
            C: 'x = 3.',
            D: 'x = −1.'
          },
          answer: 'D',
          explanation: 'Quan sát đồ thị, điểm cực đại của đồ thị là (−1; 3) nên hàm số đạt cực đại tại điểm <i>x = −1</i>. Chọn <b>D</b>.'
        },
        {
          id: 5,
          part: 1,
          label: 'Phần 1 - Câu 5',
          topic: 'Số điểm cực trị của hàm số',
          type: 'mcq',
          question: 'Hàm số <i>f(x)</i> có đạo hàm là <i>f\'(x) = x²(x + 1)²(2x − 1)</i>. Số điểm cực trị của hàm số là',
          options: {
            A: '1.',
            B: '2.',
            C: '3.',
            D: '0.'
          },
          answer: 'A',
          explanation: 'Nghiệm <i>x = 0</i> và <i>x = −1</i> là các nghiệm bội chẵn nên <i>f\'(x)</i> chỉ đổi dấu khi đi qua nghiệm đơn duy nhất <i>x = 1/2</i>. Vậy hàm số có <b>1</b> điểm cực trị. Chọn <b>A</b>.'
        },
        {
          id: 6,
          part: 1,
          label: 'Phần 1 - Câu 6',
          topic: 'Đường tiệm cận của đồ thị hàm số',
          type: 'mcq',
          question: `Số đường tiệm cận của đồ thị hàm số <i>y</i> = ${frac('1 − x', '1 + x')} là`,
          options: {
            A: '3.',
            B: '0.',
            C: '2.',
            D: '1.'
          },
          answer: 'C',
          explanation: 'Đồ thị hàm số có 1 tiệm cận đứng là <i>x = −1</i> và 1 tiệm cận ngang là <i>y = −1</i>. Tổng cộng có <b>2</b> đường tiệm cận. Chọn <b>C</b>.'
        },
        {
          id: 7,
          part: 1,
          label: 'Phần 1 - Câu 7',
          topic: 'Vectơ cùng phương trong hình hộp',
          type: 'mcq',
          figure: 'd4_p1_q7',
          question: `Cho hình hộp <i>ABCD.A'B'C'D'</i>. Vectơ nào dưới đây cùng phương với vectơ ${vec('AB')}?`,
          options: {
            A: `${vec("C'D")}.`,
            B: `${vec('AC')}.`,
            C: `${vec('CD')}.`,
            D: `${vec("B'D'")}.`
          },
          answer: 'C',
          explanation: `Trong hình bình hành <i>ABCD</i>, cạnh <i>CD</i> song song với <i>AB</i> nên vectơ ${vec('CD')} có giá song song với giá của ${vec('AB')}, tức cùng phương với ${vec('AB')}. Chọn <b>C</b>.`
        },
        {
          id: 8,
          part: 1,
          label: 'Phần 1 - Câu 8',
          topic: 'Tính đơn điệu của hàm số',
          type: 'mcq',
          figure: 'd4_p1_q8',
          question: 'Cho hàm số <i>y = f(x)</i> có bảng biến thiên như hình vẽ. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?',
          options: {
            A: '(−2; 0).',
            B: '(−∞; 0).',
            C: '(1; 3).',
            D: '(3; +∞).'
          },
          answer: 'C',
          explanation: 'Trên khoảng (1; 3) ta có <i>y\' < 0</i> nên hàm số nghịch biến trên khoảng (1; 3). Chọn <b>C</b>.'
        },
        {
          id: 9,
          part: 1,
          label: 'Phần 1 - Câu 9',
          topic: 'Cực trị của hàm số',
          type: 'mcq',
          figure: 'd4_p1_q9',
          question: 'Cho hàm số <i>f(x)</i> có bảng biến thiên như hình vẽ. Điểm cực đại của hàm số đã cho là',
          options: {
            A: 'x = 4.',
            B: 'x = 5.',
            C: 'x = 1.',
            D: 'x = 0.'
          },
          answer: 'C',
          explanation: 'Đạo hàm <i>f\'(x)</i> đổi dấu từ (+) sang (−) khi qua <i>x = 1</i> nên điểm cực đại của hàm số là <i>x = 1</i>. Chọn <b>C</b>.'
        },
        {
          id: 10,
          part: 1,
          label: 'Phần 1 - Câu 10',
          topic: 'Tích vô hướng của hai vectơ',
          type: 'mcq',
          question: `Cho ${vec('a')} và ${vec('b')} là hai vectơ cùng hướng và đều khác vectơ ${vec('0')}. Mệnh đề nào sau đây đúng?`,
          options: {
            A: `${vec('a')} · ${vec('b')} = |${vec('a')}| · |${vec('b')}|.`,
            B: `${vec('a')} · ${vec('b')} = 0.`,
            C: `${vec('a')} · ${vec('b')} = −1.`,
            D: `${vec('a')} · ${vec('b')} = −|${vec('a')}| · |${vec('b')}|.`
          },
          answer: 'A',
          explanation: `Vì hai vectơ ${vec('a')} và ${vec('b')} cùng hướng nên góc giữa chúng bằng 0° (cos 0° = 1). Do đó ${vec('a')} · ${vec('b')} = |${vec('a')}| · |${vec('b')}| · cos 0° = |${vec('a')}| · |${vec('b')}|. Chọn <b>A</b>.`
        },
        {
          id: 11,
          part: 1,
          label: 'Phần 1 - Câu 11',
          topic: 'Nhận dạng đồ thị hàm số bậc ba',
          type: 'mcq',
          figure: 'd4_p1_q11',
          question: 'Đồ thị như hình vẽ bên là của một trong bốn hàm số sau đây. Hỏi đó là hàm số nào?',
          options: {
            A: 'y = x³ − x² + x + 1.',
            B: 'y = x³ − 3x² + 3.',
            C: 'y = x³ + 3x² + 3x + 1.',
            D: 'y = x² + 2x + 1.'
          },
          answer: 'B',
          explanation: 'Đồ thị hàm bậc ba có 2 điểm cực trị (tại <i>x = 0</i> và <i>x = 2 > 0</i>). Xét <i>y = x³ − 3x² + 3</i> có <i>y\' = 3x² − 6x = 0 ⟺ x = 0</i> (<i>y = 3 > 0</i>) hoặc <i>x = 2</i> (<i>y = −1 < 0</i>), khớp hoàn toàn với hình vẽ. Chọn <b>B</b>.'
        },
        {
          id: 12,
          part: 1,
          label: 'Phần 1 - Câu 12',
          topic: 'Đường tiệm cận ngang',
          type: 'mcq',
          question: `Đồ thị hàm số <i>y</i> = ${frac('6x² + 7x − 2023', '2x² + 3x + 2024')} có tiệm cận ngang là đường thẳng`,
          options: {
            A: 'y = 3.',
            B: 'y = 0.',
            C: 'y = 1.',
            D: 'y = 2.'
          },
          answer: 'A',
          explanation: 'Ta có lim<sub>x→±∞</sub> <i>y = 6/2 = 3</i> nên đường tiệm cận ngang là <i>y = 3</i>. Chọn <b>A</b>.'
        },

        // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG SAI (4 CÂU) ---
        {
          id: 13,
          part: 2,
          label: 'Phần 2 - Câu 1',
          topic: 'Khảo sát hàm số bậc ba',
          type: 'tf',
          question: 'Cho hàm số <i>y = f(x) = x³ − 3x² − 9x</i>. Xét tính đúng sai của các khẳng định sau:',
          statements: {
            a: 'Đồ thị hàm số <i>y = f(x)</i> có hai điểm cực trị nằm về hai phía của trục tung.',
            b: 'Hàm số <i>y = f(x)</i> có đạo hàm <i>y\' = f\'(x) = 3x² − 6x − 9</i>.',
            c: 'Đường thẳng qua hai điểm cực trị của đồ thị hàm số <i>y = f(x)</i> có hệ số góc là <i>k = −8</i>.',
            d: 'Giá trị lớn nhất của hàm số <i>y = f(x)</i> trên đoạn [0; 5] bằng −5.'
          },
          answers: { a: true, b: true, c: true, d: false },
          explanation: `• <b>a) Đúng:</b> <i>f'(x) = 3x² − 6x − 9 = 0 ⟺ x = −1</i> hoặc <i>x = 3</i>. Vì <i>x₁·x₂ = −3 < 0</i> nên hai điểm cực trị nằm về hai phía trục tung.<br>
            • <b>b) Đúng:</b> <i>y' = 3x² − 6x − 9</i>.<br>
            • <b>c) Đúng:</b> Hai điểm cực trị là <i>A(−1; 5)</i> và <i>B(3; −27)</i>. Hệ số góc đường thẳng AB là <i>k = (−27 − 5)/(3 − (−1)) = −32/4 = −8</i>.<br>
            • <b>d) Sai:</b> Trên đoạn [0; 5], ta có <i>f(0) = 0, f(3) = −27, f(5) = 5</i> nên giá trị lớn nhất bằng <b>5</b> (không phải −5).`
        },
        {
          id: 14,
          part: 2,
          label: 'Phần 2 - Câu 2',
          topic: 'Bảng biến thiên trên miền có biên',
          type: 'tf',
          figure: 'd4_p2_q2',
          question: 'Cho hàm số <i>y = f(x)</i> xác định trên (−∞; 2) \\ {−2} và có bảng biến thiên như hình vẽ dưới đây. Xét tính đúng sai của các khẳng định sau:',
          statements: {
            a: 'Hàm số có giá trị nhỏ nhất bằng −2.',
            b: 'Hàm số có giá trị lớn nhất bằng 3.',
            c: 'Đồ thị hàm số có hai đường tiệm cận đứng là <i>x = −2</i> và <i>x = 2</i>.',
            d: 'Đồ thị hàm số có hai đường tiệm cận ngang là <i>y = −2</i> và <i>y = 3</i>.'
          },
          answers: { a: true, b: false, c: true, d: false },
          explanation: `• <b>a) Đúng:</b> Trên tập xác định, giá trị nhỏ nhất của hàm số đạt được tại <i>x = 0</i> và bằng <b>−2</b>.<br>
            • <b>b) Sai:</b> Vì lim<sub>x→−2⁺</sub> <i>y = +∞</i> và lim<sub>x→2⁻</sub> <i>y = +∞</i> nên hàm số không có giá trị lớn nhất.<br>
            • <b>c) Đúng:</b> Vì lim<sub>x→−2⁺</sub> <i>y = +∞</i> và lim<sub>x→2⁻</sub> <i>y = +∞</i> nên <i>x = −2</i> và <i>x = 2</i> là hai đường tiệm cận đứng.<br>
            • <b>d) Sai:</b> Hàm số không xác định khi <i>x → +∞</i> và chỉ có lim<sub>x→−∞</sub> <i>y = −2</i> nên đồ thị chỉ có <b>1</b> đường tiệm cận ngang là <i>y = −2</i>.`
        },
        {
          id: 15,
          part: 2,
          label: 'Phần 2 - Câu 3',
          topic: 'Đẳng thức vectơ trong hình hộp',
          type: 'tf',
          question: 'Trong không gian cho hình hộp <i>ABCD.A\'B\'C\'D\'</i> tâm <i>O</i>. Xét tính đúng sai của các khẳng định sau:',
          statements: {
            a: `${vec("AC'")} = ${vec('AB')} + ${vec('AD')} + ${vec("AA'")}.`,
            b: `${vec('AB')} + ${vec("BC'")} + ${vec('CD')} + ${vec("D'A")} = ${vec('0')}.`,
            c: `${vec('AB')} + ${vec("AA'")} = ${vec('AD')} + ${vec("DD'")}.`,
            d: `${vec('AB')} + ${vec('BC')} + ${vec("CC'")} = ${vec("AD'")} + ${vec("D'O")} + ${vec("OC'")}.`
          },
          answers: { a: true, b: true, c: false, d: true },
          explanation: `• <b>a) Đúng:</b> Quy tắc hình hộp: ${vec("AC'")} = ${vec('AB')} + ${vec('AD')} + ${vec("AA'")}.<br>
            • <b>b) Đúng:</b> Vì ${vec('CD')} = ${vec('BA')} và ${vec("BC'")} = ${vec("AD'")} nên tổng bằng (${vec('AB')} + ${vec('BA')}) + (${vec("AD'")} + ${vec("D'A")}) = ${vec('0')}.<br>
            • <b>c) Sai:</b> Vế trái bằng ${vec("AB'")}, còn vế phải bằng ${vec("AD'")}; hai vectơ này không bằng nhau.<br>
            • <b>d) Đúng:</b> Cả hai vế theo quy tắc cộng nối tiếp các điểm đều bằng vectơ ${vec("AC'")}.`
        },
        {
          id: 16,
          part: 2,
          label: 'Phần 2 - Câu 4',
          topic: 'Bài toán thực tế (Tốc độ tăng dân số)',
          type: 'tf',
          question: `Dân số của một thị trấn sau <i>t</i> năm kể từ năm 1970 được ước tính bởi công thức <i>f(t)</i> = ${frac('26t + 10', 't + 5')} (nghìn người). Biết đạo hàm của hàm số <i>y = f(t)</i> biểu thị tốc độ tăng dân số của thị trấn.`,
          statements: {
            a: 'Dân số của thị trấn vào năm 2022 là 23,895 (nghìn người).',
            b: `Tốc độ tăng dân số của thị trấn (tính bằng nghìn người/năm) là <i>f'(t)</i> = ${frac('120t', '(t + 5)²')}.`,
            c: `Tốc độ tăng dân số vào năm 2022 của thị trấn là <i>f'(52)</i> = ${frac('40', '1083')}.`,
            d: 'Năm 1990 có tốc độ tăng dân số là 0,192 nghìn người/năm.'
          },
          answers: { a: true, b: false, c: true, d: true },
          explanation: `• <b>a) Đúng:</b> Năm 2022 ứng với <i>t = 2022 − 1970 = 52</i>: <i>f(52) = (26·52 + 10)/(52 + 5) = 1362/57 ≈ 23,895</i> (nghìn người).<br>
            • <b>b) Sai:</b> Đạo hàm đúng là <i>f'(t) = (26·5 − 10)/(t + 5)² = 120/(t + 5)²</i> (tử số là 120, không có <i>t</i>).<br>
            • <b>c) Đúng:</b> <i>f'(52) = 120 / 57² = 120 / 3249 = 40 / 1083</i>.<br>
            • <b>d) Đúng:</b> Năm 1990 ứng với <i>t = 20</i>: <i>f'(20) = 120 / 25² = 120 / 625 = 0,192</i> (nghìn người/năm).`
        },

        // --- PHẦN 3: TRẢ LỜI NGẮN (6 CÂU) ---
        {
          id: 17,
          part: 3,
          label: 'Phần 3 - Câu 1',
          topic: 'Tích vô hướng trong không gian',
          type: 'short',
          question: `Cho hình chóp tứ giác đều <i>S.ABCD</i> có độ dài cạnh bên và cạnh đáy đều bằng 10. Tính ${vec('AB')} · ${vec('SC')}.`,
          answer: '50',
          kqCells: ['5', '0', '', ''],
          explanation: `Vì <i>ABCD</i> là hình vuông nên ${vec('AB')} = ${vec('DC')}. Do đó ${vec('AB')} · ${vec('SC')} = ${vec('DC')} · ${vec('SC')} = ${vec('CD')} · ${vec('CS')}.<br>
            Tam giác <i>SCD</i> có tất cả các cạnh đều bằng 10 nên là tam giác đều ⟹ ∠<i>CSD</i> = ∠<i>SCD</i> = 60°.<br>
            Vậy ${vec('CD')} · ${vec('CS')} = CD · CS · cos 60° = 10 · 10 · 0,5 = <b>50</b>.`
        },
        {
          id: 18,
          part: 3,
          label: 'Phần 3 - Câu 2',
          topic: 'Cực trị của hàm phân thức bậc hai',
          type: 'short',
          question: `Cho hàm số <i>y = f(x)</i> = ${frac('−x² − 6x − 16', 'x + 6')} có điểm cực tiểu <i>x = x₁</i> và điểm cực đại <i>x = x₂</i>. Tính <i>P = −2x₁ + 4x₂</i>.`,
          answer: '12',
          kqCells: ['1', '2', '', ''],
          explanation: `Viết lại hàm số: <i>y = −x − ${frac('16', 'x + 6')}</i> (với <i>x ≠ −6</i>).<br>
            Đạo hàm: <i>y' = −1 + ${frac('16', '(x + 6)²')} = 0 ⟺ (x + 6)² = 16 ⟺ x = −2</i> hoặc <i>x = −10</i>.<br>
            Xét dấu <i>y'</i>: hàm số đạt <b>cực tiểu</b> tại <i>x₁ = −10</i> và đạt <b>cực đại</b> tại <i>x₂ = −2</i>.<br>
            Vậy <i>P = −2x₁ + 4x₂ = −2(−10) + 4(−2) = 20 − 8 = <b>12</b></i>.`
        },
        {
          id: 19,
          part: 3,
          label: 'Phần 3 - Câu 3',
          topic: 'Tâm đối xứng của đồ thị hàm số',
          type: 'short',
          question: `Cho đồ thị hàm số <i>y = 5x − 1 + ${frac('8', 'x − 1')}</i> có tâm đối xứng <i>I(a; b)</i>. Giá trị của biểu thức <i>C = a + 3b</i> bằng`,
          answer: '13',
          kqCells: ['1', '3', '', ''],
          explanation: `Đồ thị hàm số có TCĐ <i>x = 1</i> và TCX <i>y = 5x − 1</i>.<br>
            Tâm đối xứng <i>I(a; b)</i> là giao điểm của hai đường tiệm cận: <i>a = 1</i> và <i>b = 5·1 − 1 = 4</i>.<br>
            Vậy <i>C = a + 3b = 1 + 3·4 = <b>13</b></i>.`
        },
        {
          id: 20,
          part: 3,
          label: 'Phần 3 - Câu 4',
          topic: 'Độ lớn vectơ trọng lực thực tế',
          type: 'short',
          question: `Trọng lực ${vec('P')} là lực hấp dẫn do Trái Đất tác dụng lên một vật, được tính theo công thức ${vec('P')} = m · ${vec('g')}, trong đó <i>m</i> là khối lượng của vật (kg), còn ${vec('g')} là vectơ gia tốc rơi tự do có độ lớn <i>g = 9,8</i> m/s². Xác định độ lớn của trọng lực (đơn vị: N) tác dụng lên quả bưởi có khối lượng 2,5 kg.`,
          answer: '24,5',
          kqCells: ['2', '4', ',', '5'],
          explanation: `Độ lớn của trọng lực tác dụng lên quả bưởi là: |${vec('P')}| = <i>m · g = 2,5 × 9,8 = <b>24,5</b></i> (N).`
        },
        {
          id: 21,
          part: 3,
          label: 'Phần 3 - Câu 5',
          topic: 'Bài toán vận tốc tối đa từ đồ thị hàm bậc ba',
          type: 'short',
          figure: 'd4_p3_q5',
          question: 'Thầy Hiếu tham dự giải "Đi bộ trực tuyến Ngành Giáo dục và Đào tạo Edu Run-HCMC" năm 2025. Quãng đường thầy Hiếu đi được biểu diễn bằng hàm số <i>s(t) = at³ + bt² + ct + d</i> có đồ thị như hình vẽ (<i>t</i> tính bằng giờ, <i>s</i> tính bằng km). Khi đó, vận tốc tối đa của thầy Hiếu đạt được trong quá trình đi bộ là bao nhiêu (đơn vị km/h)?',
          answer: '9',
          kqCells: ['9', '', '', ''],
          explanation: `Từ đồ thị: hàm bậc ba đi qua gốc tọa độ <i>O(0; 0)</i>, đạt cực tiểu tại <i>(0; 0)</i> và đạt cực đại tại <i>(4; 24)</i>, đi qua <i>(2; 12)</i> và <i>(6; 0)</i>:<br>
            Giải hệ tìm được: <i>s(t) = −${frac('3', '4')}t³ + ${frac('9', '2')}t²</i>.<br>
            Phương trình vận tốc: <i>v(t) = s'(t) = −${frac('9', '4')}t² + 9t = −${frac('9', '4')}(t − 2)² + 9 ≤ 9</i> (km/h).<br>
            Vậy vận tốc tối đa thầy Hiếu đạt được là <b>9</b> km/h (tại thời điểm <i>t = 2</i> giờ).`
        },
        {
          id: 22,
          part: 3,
          label: 'Phần 3 - Câu 6',
          topic: 'Bài toán tối ưu thực tế (Đường ống dẫn nước)',
          type: 'short',
          figure: 'd4_p3_q6',
          question: 'Hai nhà máy được đặt tại các vị trí <i>A</i> và <i>B</i> cách nhau 4 km. Nhà máy xử lí nước thải đặt ở <i>C</i> trên đường trung trực của <i>AB</i>, cách trung điểm <i>M</i> của <i>AB</i> một khoảng 3 km. Người ta làm đường ống dẫn gồm các đoạn thẳng <i>AI, BI</i> và <i>IC</i> với <i>I</i> nằm giữa <i>M</i> và <i>C</i>. Cần chọn vị trí điểm <i>I</i> cách điểm <i>M</i> bao nhiêu km để tổng độ dài đường ống nhỏ nhất (làm tròn đến hàng phần trăm)?',
          answer: '1,15',
          kqCells: ['1', ',', '1', '5'],
          explanation: `Đặt <i>IM = x</i> (km) với <i>0 ≤ x ≤ 3</i>. Vì <i>AM = AB/2 = 2</i> km nên <i>AI = BI = √(x² + 4)</i> và <i>IC = 3 − x</i>.<br>
            Tổng độ dài đường ống: <i>L(x) = 2√(x² + 4) + 3 − x</i>.<br>
            Đạo hàm: <i>L'(x) = ${frac('2x', '√(x² + 4)')} − 1 = 0 ⟺ 2x = √(x² + 4) ⟺ 3x² = 4 ⟺ x = ${frac('2', '√3')} ≈ <b>1,15</b></i> (km).`
        }
      ]
    }
  };

  // Tích hợp toàn bộ 40 đề từ window.MATH_ALL_EXAMS_DATA (20 đề Giữa kì 1 + 20 đề Cuối kì 1)
  if (window.MATH_ALL_EXAMS_DATA) {
    const legacyMap = { gk1_de2: MATH_EXAMS.de2, gk1_de3: MATH_EXAMS.de3, gk1_de4: MATH_EXAMS.de4 };
    for (const [code, examData] of Object.entries(window.MATH_ALL_EXAMS_DATA)) {
      const legacy = legacyMap[code];
      if (legacy && legacy.questions) {
        examData.questions.forEach((q, idx) => {
          const lq = legacy.questions[idx];
          if (lq && lq.explanation) {
            q.explanation = lq.explanation;
          }
        });
      }
      MATH_EXAMS[code] = examData;
    }
  }

  // Trạng thái ứng dụng Đề Toán 12
  const state = {
    examGroup: 'gk1', // 'gk1' (20 Đề Ôn Giữa Kì 1) | 'ck1' (20 Đề Ôn Cuối Kì 1)
    examCode: window.MATH_ALL_EXAMS_DATA ? 'gk1_de1' : 'de2',
    mode: 'slide', // 'slide' | 'list'
    partFilter: 'ALL', // 'ALL' | 1 | 2 | 3
    statusFilter: 'ALL',
    searchQuery: '',
    currentIndex: 0,
    fontScale: 1,
    sidebarOpen: true,
    isFullscreen: false,
    // Lưu kết quả tương tác theo từng đề: key = `${examCode}_${q.id}`
    mcqAnswers: {},
    tfAnswers: {},
    shortAnswers: {},
    revealedQuestions: {},
    starredQuestions: {}
  };

  function getQKey(qId) {
    return `${state.examCode}_${qId}`;
  }

  function hasExamProgress(code) {
    const ex = MATH_EXAMS[code];
    if (!ex) return false;
    return ex.questions.some((q) => {
      const k = `${code}_${q.id}`;
      return !!(state.mcqAnswers[k] || state.tfAnswers[k] || state.shortAnswers[k]);
    });
  }

  function normalizeNumberStr(str) {
    if (!str) return '';
    return String(str).trim().replace(/\s+/g, '').replace('.', ',');
  }

  // Kiểm tra trạng thái của 1 câu hỏi bất kỳ (Phần 1, 2 hoặc 3)
  function evaluateQuestionStatus(q) {
    const key = getQKey(q.id);
    if (q.type === 'mcq') {
      const ans = state.mcqAnswers[key];
      if (!ans) return 'UNANSWERED';
      return ans === q.answer ? 'CORRECT' : 'WRONG';
    }
    if (q.type === 'tf') {
      const tf = state.tfAnswers[key] || {};
      const keys = ['a', 'b', 'c', 'd'];
      const answeredKeys = keys.filter(k => typeof tf[k] === 'boolean');
      if (answeredKeys.length === 0) return 'UNANSWERED';
      const allCorrect = answeredKeys.length === 4 && keys.every(k => tf[k] === q.answers[k]);
      if (allCorrect) return 'CORRECT';
      const anyWrong = answeredKeys.some(k => tf[k] !== q.answers[k]);
      return anyWrong ? 'WRONG' : 'UNANSWERED';
    }
    if (q.type === 'short') {
      const val = state.shortAnswers[key];
      if (!val || val.trim() === '') return 'UNANSWERED';
      return normalizeNumberStr(val) === normalizeNumberStr(q.answer) ? 'CORRECT' : 'WRONG';
    }
    return 'UNANSWERED';
  }

  function getCurrentExam() {
    return MATH_EXAMS[state.examCode] || MATH_EXAMS.de2;
  }

  function getFilteredQuestions() {
    const exam = getCurrentExam();
    return exam.questions.filter((q) => {
      if (state.partFilter !== 'ALL' && q.part !== Number(state.partFilter)) {
        return false;
      }
      const key = getQKey(q.id);
      const status = evaluateQuestionStatus(q);
      const isStarred = !!state.starredQuestions[key];
      const isRevealed = !!state.revealedQuestions[key];

      if (state.statusFilter === 'UNANSWERED' && (status !== 'UNANSWERED' || isRevealed)) return false;
      if (state.statusFilter === 'CORRECT' && status !== 'CORRECT') return false;
      if (state.statusFilter === 'WRONG' && status !== 'WRONG') return false;
      if (state.statusFilter === 'STARRED' && !isStarred) return false;

      if (state.searchQuery.trim() !== '') {
        const kw = state.searchQuery.trim().toLowerCase();
        const inLabel = (q.label || '').toLowerCase().includes(kw) || `${q.id}` === kw;
        const inText = (q.question || '').toLowerCase().includes(kw)
          || (q.searchText || '').toLowerCase().includes(kw)
          || (q.topic || '').toLowerCase().includes(kw);
        if (!inLabel && !inText) return false;
      }
      return true;
    });
  }

  function getExamStats() {
    const exam = getCurrentExam();
    let correct = 0;
    let wrong = 0;
    let starred = 0;
    exam.questions.forEach((q) => {
      const st = evaluateQuestionStatus(q);
      if (st === 'CORRECT') correct++;
      else if (st === 'WRONG') wrong++;
      if (state.starredQuestions[getQKey(q.id)]) starred++;
    });
    return {
      total: exam.questions.length,
      answered: correct + wrong,
      correct,
      wrong,
      starred
    };
  }

  function renderMathApp() {
    const root = document.getElementById('experiment-toan12');
    if (!root) return;

    const exam = getCurrentExam();
    const filtered = getFilteredQuestions();
    if (state.currentIndex >= filtered.length) {
      state.currentIndex = Math.max(0, filtered.length - 1);
    }
    const stats = getExamStats();

    root.innerHTML = `
      <div class="quiz-workspace ${state.isFullscreen ? 'fullscreen-active' : ''}" id="mathWorkspace" style="--quiz-scale: ${state.fontScale}">
        <!-- Thanh công cụ trình chiếu trên cùng -->
        <div class="quiz-top-toolbar">
          <div class="quiz-title-group">
            <div class="quiz-title-badge">📐</div>
            <div class="quiz-title-text">
              <h3>Bộ 20 Đề Ôn Định Kì Toán 12 — Học Kì 1 (${exam.title})</h3>
              <p>Trọn bộ 20 Đề Ôn Tập Toán 12 (440 câu: Trắc nghiệm ABCD • Đúng/Sai • Trả lời ngắn KQ) kèm lời giải chi tiết</p>
            </div>
          </div>

          <div class="quiz-controls-group">
            <!-- Chuyển chế độ Trình chiếu / Danh sách -->
            <div class="quiz-mode-switch">
              <button class="quiz-mode-btn ${state.mode === 'slide' ? 'active' : ''}" onclick="window.MathQuizApp.setMode('slide')">
                🖥️ Trình chiếu (Slide)
              </button>
              <button class="quiz-mode-btn ${state.mode === 'list' ? 'active' : ''}" onclick="window.MathQuizApp.setMode('list')">
                📋 Danh sách (${filtered.length})
              </button>
            </div>

            <!-- Phóng to / Thu nhỏ cỡ chữ cho máy chiếu -->
            <div class="font-zoom-group" title="Tăng/giảm cỡ chữ khi chiếu máy chiếu">
              <button class="font-zoom-btn" onclick="window.MathQuizApp.changeZoom(-0.1)">A−</button>
              <span class="font-zoom-label">${Math.round(state.fontScale * 100)}%</span>
              <button class="font-zoom-btn" onclick="window.MathQuizApp.changeZoom(0.1)">A+</button>
            </div>

            <!-- Nút mở Bảng đáp án của đề đang chọn -->
            <button class="quiz-tool-btn" onclick="window.MathQuizApp.openAnswerKeyModal()">
              🔑 Bảng đáp án ${exam.shortTitle || exam.title}
            </button>

            ${state.mode === 'slide' ? `
              <button class="quiz-tool-btn" onclick="window.MathQuizApp.toggleSidebar()">
                ${state.sidebarOpen ? '◀ Ẩn lưới câu' : '▶ Hiện lưới 22 câu'}
              </button>
            ` : `
              <button class="quiz-tool-btn" onclick="window.MathQuizApp.revealAllInFilter()">
                👁️ Hiện tất cả lời giải
              </button>
            `}

            <button class="quiz-tool-btn" onclick="window.MathQuizApp.toggleFullscreen()">
              ${state.isFullscreen ? '🗗 Thoát toàn màn hình' : '⛶ Toàn màn hình'}
            </button>

            <button class="quiz-tool-btn btn-accent" onclick="window.MathQuizApp.resetCurrentExam()">
              🔄 Làm mới đề này
            </button>
          </div>
        </div>

        <!-- Thanh chọn Bộ 20 Đề Ôn Tập Toán 12 & Lọc theo Phần 1, 2, 3 -->
        <div class="math-exam-selector-bar selector-40-exams">
          <div class="math-exam-top-row">
            <div style="font-weight: 700; font-size: 0.9rem; color: var(--primary-color); display: inline-flex; align-items: center; gap: 0.45rem;">
              <span>📘 Chọn đề ôn tập (Đề 1 → Đề 20):</span>
            </div>

            <div class="math-part-pills">
              <button class="math-part-pill ${state.partFilter === 'ALL' ? 'active' : ''}" onclick="window.MathQuizApp.setPartFilter('ALL')">
                Tất cả (22 câu)
              </button>
              <button class="math-part-pill ${state.partFilter === 1 ? 'active' : ''}" onclick="window.MathQuizApp.setPartFilter(1)">
                Phần 1: ABCD (12)
              </button>
              <button class="math-part-pill ${state.partFilter === 2 ? 'active' : ''}" onclick="window.MathQuizApp.setPartFilter(2)">
                Phần 2: Đúng - Sai (4)
              </button>
              <button class="math-part-pill ${state.partFilter === 3 ? 'active' : ''}" onclick="window.MathQuizApp.setPartFilter(3)">
                Phần 3: Trả lời ngắn (6)
              </button>
            </div>
          </div>

          <div class="math-exam-grid-20">
            ${Array.from({ length: 20 }, (_, i) => {
              const num = i + 1;
              const code = `gk1_de${num}`;
              const isAct = state.examCode === code;
              const hasProg = hasExamProgress(code);
              return `
                <button
                  type="button"
                  class="math-exam-num-btn ${isAct ? 'active' : ''} ${hasProg ? 'has-progress' : ''}"
                  onclick="window.MathQuizApp.selectExam('${code}')"
                  title="Chuyển sang Đề số ${num}"
                >
                  Đề ${num}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Thanh lọc trạng thái & Thống kê kết quả -->
        <div class="quiz-filter-bar">
          <div class="quiz-filter-group">
            <select class="quiz-select" onchange="window.MathQuizApp.setStatusFilter(this.value)">
              <option value="ALL" ${state.statusFilter === 'ALL' ? 'selected' : ''}>🎯 Tất cả trạng thái</option>
              <option value="UNANSWERED" ${state.statusFilter === 'UNANSWERED' ? 'selected' : ''}>⚪ Chưa sửa (${stats.total - stats.answered})</option>
              <option value="CORRECT" ${state.statusFilter === 'CORRECT' ? 'selected' : ''}>🟢 Đã làm đúng (${stats.correct})</option>
              <option value="WRONG" ${state.statusFilter === 'WRONG' ? 'selected' : ''}>🔴 Đã làm sai (${stats.wrong})</option>
              <option value="STARRED" ${state.statusFilter === 'STARRED' ? 'selected' : ''}>⭐ Câu đánh dấu lưu ý (${stats.starred})</option>
            </select>

            <input
              type="text"
              class="quiz-search-input"
              placeholder="🔍 Tìm từ khóa (vd: tiệm cận, cực trị, hình chóp...)"
              value="${state.searchQuery.replace(/"/g, '&quot;')}"
              oninput="window.MathQuizApp.setSearchQuery(this.value)"
            />
          </div>

          <div class="quiz-stats-pills">
            <span class="stat-pill">Đang chiếu: <strong>${exam.title}</strong></span>
            <span class="stat-pill">Đã sửa: <strong>${stats.answered}/${stats.total}</strong></span>
            <span class="stat-pill stat-correct">✔ Đúng: <strong>${stats.correct}</strong></span>
            <span class="stat-pill stat-wrong">✖ Sai: <strong>${stats.wrong}</strong></span>
          </div>
        </div>

        <!-- Nội dung chính -->
        ${filtered.length === 0 ? `
          <div class="quiz-slide-card" style="text-align: center; padding: 3rem 1.5rem;">
            <div style="font-size: 2.5rem;">🔍</div>
            <h3>Không tìm thấy câu hỏi phù hợp trong ${exam.title}</h3>
            <p style="color: var(--text-muted);">Hãy chọn lại "Tất cả (22 câu)" hoặc xóa bộ lọc tìm kiếm.</p>
            <div>
              <button class="slide-reveal-btn" onclick="window.MathQuizApp.clearFilters()">Xóa bộ lọc</button>
            </div>
          </div>
        ` : (state.mode === 'slide' ? renderSlideView(filtered) : renderListView(filtered))}
      </div>

      <!-- Modal Bảng Đáp Án Chuẩn Của Đề Đang Chọn -->
      <div class="quiz-modal-backdrop" id="mathAnswerKeyModal" onclick="if(event.target===this) window.MathQuizApp.closeAnswerKeyModal()">
        <div class="quiz-modal-box modal-box-wide">
          <div class="quiz-modal-header">
            <h3>📋 BẢNG ĐÁP ÁN CHUẨN — ${exam.title} (TOÁN 12)</h3>
            <button class="quiz-modal-close" onclick="window.MathQuizApp.closeAnswerKeyModal()">✕</button>
          </div>
          <div class="quiz-modal-body">
            <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 0.85rem;">
              💡 Nhấn vào bất kỳ câu nào trong bảng dưới đây để chuyển thẳng tới trình chiếu và xem lời giải chi tiết:
            </p>

            <h4 style="margin: 0.5rem 0; color: var(--primary-color);">PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn (12 câu)</h4>
            <div class="answer-key-table-grid" style="margin-bottom: 1.15rem;">
              ${exam.questions.filter(q => q.part === 1).map(q => `
                <div class="ak-cell" onclick="window.MathQuizApp.jumpToQuestionId(${q.id}); window.MathQuizApp.closeAnswerKeyModal();">
                  <span>${q.label.replace('Phần 1 - ', '')}:</span>
                  <strong>${q.answer}</strong>
                </div>
              `).join('')}
            </div>

            <h4 style="margin: 0.85rem 0 0.45rem; color: var(--primary-color);">PHẦN II. Câu trắc nghiệm đúng sai (4 câu)</h4>
            <div class="ak-grid-tf" style="margin-bottom: 1.15rem;">
              ${exam.questions.filter(q => q.part === 2).map(q => {
                const qNum = q.label.replace('Phần 2 - ', '');
                return `
                  <div class="ak-cell-tf" onclick="window.MathQuizApp.jumpToQuestionId(${q.id}); window.MathQuizApp.closeAnswerKeyModal();" title="Chuyển đến ${q.label}">
                    <span class="ak-cell-qnum">${qNum}</span>
                    <div class="ak-tf-badges">
                      ${['a', 'b', 'c', 'd'].map(k => `
                        <span class="ak-badge ${q.answers[k] ? 'is-true' : 'is-false'}">${k}: <b>${q.answers[k] ? 'Đ' : 'S'}</b></span>
                      `).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <h4 style="margin: 0.5rem 0; color: var(--primary-color);">PHẦN III. Câu trắc nghiệm trả lời ngắn (6 câu)</h4>
            <div class="answer-key-table-grid" style="grid-template-columns: repeat(3, 1fr);">
              ${exam.questions.filter(q => q.part === 3).map(q => `
                <div class="ak-cell" onclick="window.MathQuizApp.jumpToQuestionId(${q.id}); window.MathQuizApp.closeAnswerKeyModal();">
                  <span>${q.label.replace('Phần 3 - ', '')}:</span>
                  <strong>KQ: ${q.answer}</strong>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Phóng To Hình Vẽ / Bảng Số Liệu Khi Trình Chiếu -->
      <div class="quiz-figure-zoom-backdrop" id="mathFigureZoomModal" onclick="if(event.target===this) window.MathQuizApp.closeZoomFigure()">
        <div class="quiz-figure-zoom-box">
          <div class="quiz-figure-zoom-header">
            <h4 id="mathFigureZoomTitle">🔍 Phóng to hình vẽ minh họa</h4>
            <button class="quiz-modal-close" onclick="window.MathQuizApp.closeZoomFigure()">✕ Đóng (ESC)</button>
          </div>
          <div class="quiz-figure-zoom-body" id="mathFigureZoomBody"></div>
        </div>
      </div>
    `;
  }

  function renderPartInteraction(q, key, isRevealed) {
    // 1. PHẦN 1: Trắc nghiệm 4 lựa chọn A, B, C, D
    if (q.type === 'mcq') {
      const userAns = state.mcqAnswers[key];
      const maxOptLen = Math.max(...Object.values(q.options || {}).map(s => (s || '').length));
      const useSingleCol = !q.qImg && maxOptLen > 56;
      const gridClass = q.qImg ? 'four-col-compact' : (useSingleCol ? 'single-col' : '');

      return `
        <div class="slide-options-grid ${gridClass}">
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
                stateClass = 'is-correct';
                statusIcon = '✔';
              }
            }

            return `
              <button
                class="quiz-option-btn ${stateClass}"
                onclick="window.MathQuizApp.selectMcq(${q.id}, '${letter}')"
              >
                <span class="option-letter">${letter}</span>
                <span class="option-content">${q.options[letter]}</span>
                ${statusIcon ? `<span class="option-status-icon">${statusIcon}</span>` : ''}
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    // 2. PHẦN 2: Trắc nghiệm Đúng / Sai (4 ý a, b, c, d)
    if (q.type === 'tf') {
      const tfUser = state.tfAnswers[key] || {};
      return `
        <div class="math-tf-container ${q.qImg ? 'tf-grid-compact' : ''}">
          ${['a', 'b', 'c', 'd'].map((subKey) => {
            const correctBool = q.answers[subKey];
            const userBool = tfUser[subKey];
            const hasAnswered = typeof userBool === 'boolean';
            let rowClass = '';
            if (hasAnswered) {
              rowClass = userBool === correctBool ? 'row-correct' : 'row-wrong';
            } else if (isRevealed) {
              rowClass = 'row-correct';
            }

            // Trạng thái nút Đúng (true) và Sai (false)
            let btnTrueClass = '';
            let btnFalseClass = '';

            if (hasAnswered) {
              if (userBool === true) {
                btnTrueClass = correctBool === true ? 'selected-correct' : 'selected-wrong';
                if (correctBool === false) btnFalseClass = 'ans-hint';
              } else {
                btnFalseClass = correctBool === false ? 'selected-correct' : 'selected-wrong';
                if (correctBool === true) btnTrueClass = 'ans-hint';
              }
            } else if (isRevealed) {
              if (correctBool === true) btnTrueClass = 'selected-correct';
              else btnFalseClass = 'selected-correct';
            }

            return `
              <div class="math-tf-row ${rowClass}">
                <div class="math-tf-statement">
                  <span class="math-tf-key">${subKey})</span>
                  <span>${q.statements[subKey]}</span>
                </div>
                <div class="math-tf-btns">
                  <button
                    type="button"
                    class="tf-choice-btn ${btnTrueClass}"
                    onclick="window.MathQuizApp.selectTf(${q.id}, '${subKey}', true)"
                  >
                    Đúng (Đ)
                  </button>
                  <button
                    type="button"
                    class="tf-choice-btn ${btnFalseClass}"
                    onclick="window.MathQuizApp.selectTf(${q.id}, '${subKey}', false)"
                  >
                    Sai (S)
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // 3. PHẦN 3: Trắc nghiệm trả lời ngắn (Ô KQ 4 ô vuông)
    if (q.type === 'short') {
      const userVal = state.shortAnswers[key] || '';
      const hasVal = userVal.trim() !== '';
      const isCorrect = hasVal && normalizeNumberStr(userVal) === normalizeNumberStr(q.answer);
      const inputClass = hasVal ? (isCorrect ? 'is-correct' : 'is-wrong') : '';
      const showKq = isRevealed || isCorrect;

      return `
        <div class="math-sa-wrapper">
          <div class="math-sa-input-group">
            <span class="math-sa-label">✍️ Nhập đáp số học sinh:</span>
            <input
              type="text"
              class="math-sa-input ${inputClass}"
              placeholder="Nhập số..."
              value="${userVal.replace(/"/g, '&quot;')}"
              onchange="window.MathQuizApp.setShortAnswer(${q.id}, this.value)"
            />
            <button type="button" class="quiz-tool-btn" onclick="const inp=this.previousElementSibling; window.MathQuizApp.setShortAnswer(${q.id}, inp.value)">
              ✔ Kiểm tra
            </button>
            ${hasVal ? `
              <span style="font-weight: 800; font-size: 0.92rem; color: ${isCorrect ? '#16a34a' : '#dc2626'};">
                ${isCorrect ? '🎉 Chính xác!' : `✖ Chưa đúng (Đáp số chuẩn: ${q.answer})`}
              </span>
            ` : ''}
          </div>

          <div class="math-kq-box-group" title="Ô điền kết quả chuẩn trên phiếu trả lời trắc nghiệm">
            <span class="math-kq-title">KQ:</span>
            <div class="math-kq-cells ${showKq ? 'revealed' : ''}">
              ${q.kqCells.map(ch => `
                <span class="math-kq-cell">${showKq ? ch : ''}</span>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }
    return '';
  }

  function getAnswerBadgeText(q) {
    if (q.type === 'mcq') return `Chọn ${q.answer}`;
    if (q.type === 'tf') {
      return ['a', 'b', 'c', 'd'].map(k => `${k}) ${q.answers[k] ? 'Đ' : 'S'}`).join('  |  ');
    }
    if (q.type === 'short') return `KQ: ${q.answer}`;
    return '';
  }

  function getQuestionTextSizeClass(q, hasFigure) {
    const plainLen = (q.question || '').replace(/<[^>]+>/g, '').length;
    if (plainLen > 320 || (hasFigure && plainLen > 210)) return 'q-text-long';
    if (plainLen > 180 || (hasFigure && plainLen > 120)) return 'q-text-medium';
    return '';
  }

  function renderQuestionCardContent(q, isSlideMode) {
    const exam = getCurrentExam();
    const key = getQKey(q.id);
    const isRevealed = !!state.revealedQuestions[key];
    const isStarred = !!state.starredQuestions[key];
    const fig = q.figure ? MATH_FIGURES[q.figure] : null;
    const status = evaluateQuestionStatus(q);
    const textSizeClass = getQuestionTextSizeClass(q, !!fig);

    return `
      <div class="slide-card-header">
        <div class="slide-q-meta">
          <span class="slide-q-number">${exam.title} • ${q.label}</span>
          <span class="slide-q-topic">📌 ${q.topic}</span>
        </div>
        <div class="slide-q-actions">
          <button class="btn-star-q ${isStarred ? 'starred' : ''}" onclick="window.MathQuizApp.toggleStar(${q.id})" title="Đánh dấu câu hỏi cần lưu ý (Phím S)">
            ${isStarred ? '★ Đã đánh dấu lưu ý' : '☆ Đánh dấu lưu ý'}
          </button>
          ${!isSlideMode ? `
            <button class="quiz-tool-btn" onclick="window.MathQuizApp.toggleReveal(${q.id})">
              ${isRevealed ? '🙈 Ẩn lời giải' : '👁️ Hiện đáp án & lời giải'}
            </button>
          ` : ''}
        </div>
      </div>

      ${q.qImg ? `
        <div class="slide-q-body has-q-img">
          <div class="slide-q-latex-card" onclick="window.MathQuizApp.zoomImage('${q.qImg}', '${exam.title} • ${q.label}')" title="Nhấn vào đề bài / hình vẽ để phóng to toàn màn hình">
            <img src="${q.qImg}" alt="${exam.title} - ${q.label}" class="slide-q-latex-img" />
            <div class="slide-q-figure-caption">
              📄 Nội dung đề gốc chuẩn LaTeX (${exam.title} • ${q.label}) <span class="zoom-hint-badge">🔍 Phóng to</span>
            </div>
          </div>
        </div>
      ` : `
        <div class="slide-q-body ${fig ? 'has-figure' : ''}">
          <div class="slide-q-text ${textSizeClass}">${q.question}</div>
          ${fig ? `
            <div class="slide-q-figure" onclick="window.MathQuizApp.zoomFigure('${q.figure}')" title="Nhấn vào hình để phóng to toàn màn hình">
              ${fig.img ? `<img src="${fig.img}" alt="${fig.caption || ''}" class="slide-q-figure-img" />` : fig.svg}
              <div class="slide-q-figure-caption">${fig.caption || ''} <span class="zoom-hint-badge">🔍 Phóng to</span></div>
            </div>
          ` : ''}
        </div>
      `}

      ${renderPartInteraction(q, key, isRevealed)}

      ${(isRevealed || status !== 'UNANSWERED') ? `
        <div class="slide-explanation-box">
          <div class="explanation-header">
            <span>💡 ĐÁP ÁN & LỜI GIẢI CHI TIẾT:</span>
            <span class="explanation-ans-badge">${getAnswerBadgeText(q)}</span>
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
    const key = getQKey(currentQ.id);
    const isRevealed = !!state.revealedQuestions[key];
    const hasPrev = state.currentIndex > 0;
    const hasNext = state.currentIndex < filtered.length - 1;
    const status = evaluateQuestionStatus(currentQ);

    return `
      <div class="quiz-presentation-layout ${state.sidebarOpen ? '' : 'sidebar-collapsed'}">
        <div class="quiz-slide-card">
          ${renderQuestionCardContent(currentQ, true)}

          <div class="slide-footer-bar">
            <button class="slide-nav-btn" onclick="window.MathQuizApp.prevSlide()" ${!hasPrev ? 'disabled' : ''}>
              ⬅ Câu trước
            </button>

            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
              <button
                class="slide-reveal-btn ${isRevealed ? 'revealed' : ''}"
                onclick="window.MathQuizApp.toggleReveal(${currentQ.id})"
              >
                ${isRevealed ? '🙈 Ẩn đáp án & lời giải' : '👁️ Hiện đáp án & Lời giải chi tiết'}
              </button>
              ${(status !== 'UNANSWERED' || isRevealed) ? `
                <button class="quiz-tool-btn" onclick="window.MathQuizApp.clearQuestion(${currentQ.id})">
                  ↺ Làm lại câu này
                </button>
              ` : ''}
            </div>

            <button class="slide-nav-btn" onclick="window.MathQuizApp.nextSlide()" ${!hasNext ? 'disabled' : ''}>
              Câu tiếp theo ➡
            </button>
          </div>

          <div class="keyboard-hint-bar">
            <span><kbd class="kbd-tag">←</kbd> <kbd class="kbd-tag">→</kbd> Chuyển câu</span>
            <span><kbd class="kbd-tag">A</kbd>-<kbd class="kbd-tag">D</kbd> Chọn đáp án Phần 1</span>
            <span><kbd class="kbd-tag">Space</kbd> Hiện/Ẩn lời giải</span>
            <span><kbd class="kbd-tag">S</kbd> Đánh dấu ★</span>
          </div>
        </div>

        ${state.sidebarOpen ? `
          <aside class="quiz-navigator-card">
            <div class="navigator-header">
              <h4>🧭 Chuyển nhanh (${filtered.length} câu)</h4>
              <span style="font-size: 0.76rem; color: var(--text-muted); font-weight: 600;">
                ${state.currentIndex + 1}/${filtered.length}
              </span>
            </div>

            <div class="navigator-grid" style="grid-template-columns: repeat(4, 1fr);">
              ${filtered.map((q, idx) => {
                const qKey = getQKey(q.id);
                const st = evaluateQuestionStatus(q);
                const rev = state.revealedQuestions[qKey];
                const star = state.starredQuestions[qKey];
                let cellClass = '';
                if (idx === state.currentIndex) cellClass += ' current';
                if (st === 'CORRECT') cellClass += ' answered-correct';
                else if (st === 'WRONG') cellClass += ' answered-wrong';
                else if (rev) cellClass += ' revealed-only';
                if (star) cellClass += ' is-starred';

                const shortTag = q.part === 1
                  ? `P1.${q.id}`
                  : (q.part === 2 ? `P2.${q.id - 12}` : `P3.${q.id - 16}`);

                return `
                  <button
                    class="nav-q-cell ${cellClass}"
                    style="aspect-ratio: auto; padding: 0.45rem 0.25rem; font-size: 0.75rem;"
                    onclick="window.MathQuizApp.goToIndex(${idx})"
                    title="${q.label} (${q.topic})"
                  >
                    ${shortTag}
                  </button>
                `;
              }).join('')}
            </div>

            <div class="navigator-legend">
              <div class="legend-item"><span class="legend-dot" style="background:#16a34a;"></span> Làm đúng</div>
              <div class="legend-item"><span class="legend-dot" style="background:#dc2626;"></span> Làm sai</div>
              <div class="legend-item"><span class="legend-dot" style="background:#0284c7;"></span> Đã mở lời giải</div>
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
          <div class="quiz-list-item">
            ${renderQuestionCardContent(q, false)}
          </div>
        `).join('')}
      </div>
    `;
  }

  window.MathQuizApp = {
    selectGroup(group) {
      if (group !== 'gk1' && group !== 'ck1') return;
      state.examGroup = group;
      if (!state.examCode.startsWith(group + '_')) {
        state.examCode = `${group}_de1`;
      }
      state.currentIndex = 0;
      renderMathApp();
    },
    selectExam(examCode) {
      if (!MATH_EXAMS[examCode]) return;
      state.examCode = examCode;
      if (examCode.startsWith('gk1_')) state.examGroup = 'gk1';
      else if (examCode.startsWith('ck1_')) state.examGroup = 'ck1';
      state.currentIndex = 0;
      renderMathApp();
    },
    setMode(mode) {
      state.mode = mode;
      renderMathApp();
    },
    setPartFilter(part) {
      state.partFilter = part === 'ALL' ? 'ALL' : Number(part);
      state.currentIndex = 0;
      renderMathApp();
    },
    setStatusFilter(status) {
      state.statusFilter = status;
      state.currentIndex = 0;
      renderMathApp();
    },
    setSearchQuery(query) {
      state.searchQuery = query;
      state.currentIndex = 0;
      renderMathApp();
      const input = document.querySelector('#experiment-toan12 .quiz-search-input');
      if (input) {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
    },
    clearFilters() {
      state.partFilter = 'ALL';
      state.statusFilter = 'ALL';
      state.searchQuery = '';
      state.currentIndex = 0;
      renderMathApp();
    },
    changeZoom(delta) {
      const next = Math.min(1.45, Math.max(0.85, +(state.fontScale + delta).toFixed(2)));
      state.fontScale = next;
      renderMathApp();
    },
    toggleSidebar() {
      state.sidebarOpen = !state.sidebarOpen;
      renderMathApp();
    },
    toggleFullscreen() {
      state.isFullscreen = !state.isFullscreen;
      renderMathApp();
    },
    selectMcq(qId, letter) {
      const key = getQKey(qId);
      state.mcqAnswers[key] = letter;
      state.revealedQuestions[key] = true;
      renderMathApp();
    },
    selectTf(qId, subKey, boolVal) {
      const key = getQKey(qId);
      if (!state.tfAnswers[key]) state.tfAnswers[key] = {};
      state.tfAnswers[key][subKey] = boolVal;
      // Nếu đã chọn đủ 4 ý a, b, c, d thì tự động mở lời giải chi tiết
      if (['a', 'b', 'c', 'd'].every(k => typeof state.tfAnswers[key][k] === 'boolean')) {
        state.revealedQuestions[key] = true;
      }
      renderMathApp();
    },
    setShortAnswer(qId, val) {
      const key = getQKey(qId);
      state.shortAnswers[key] = val;
      if (val && val.trim() !== '') {
        state.revealedQuestions[key] = true;
      }
      renderMathApp();
    },
    toggleReveal(qId) {
      const key = getQKey(qId);
      state.revealedQuestions[key] = !state.revealedQuestions[key];
      renderMathApp();
    },
    clearQuestion(qId) {
      const key = getQKey(qId);
      delete state.mcqAnswers[key];
      delete state.tfAnswers[key];
      delete state.shortAnswers[key];
      delete state.revealedQuestions[key];
      renderMathApp();
    },
    toggleStar(qId) {
      const key = getQKey(qId);
      state.starredQuestions[key] = !state.starredQuestions[key];
      if (!state.starredQuestions[key]) delete state.starredQuestions[key];
      renderMathApp();
    },
    prevSlide() {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderMathApp();
      }
    },
    nextSlide() {
      const filtered = getFilteredQuestions();
      if (state.currentIndex < filtered.length - 1) {
        state.currentIndex++;
        renderMathApp();
      }
    },
    goToIndex(idx) {
      state.currentIndex = idx;
      renderMathApp();
    },
    jumpToQuestionId(qId) {
      state.partFilter = 'ALL';
      state.statusFilter = 'ALL';
      state.searchQuery = '';
      state.mode = 'slide';
      const exam = getCurrentExam();
      const idx = exam.questions.findIndex(q => q.id === qId);
      if (idx !== -1) state.currentIndex = idx;
      renderMathApp();
    },
    revealAllInFilter() {
      const filtered = getFilteredQuestions();
      const allRev = filtered.every(q => state.revealedQuestions[getQKey(q.id)]);
      filtered.forEach(q => {
        const key = getQKey(q.id);
        if (allRev) delete state.revealedQuestions[key];
        else state.revealedQuestions[key] = true;
      });
      renderMathApp();
    },
    resetCurrentExam() {
      const exam = getCurrentExam();
      if (confirm(`Bạn có muốn làm mới toàn bộ lựa chọn của ${exam.title} không?`)) {
        exam.questions.forEach(q => {
          const key = getQKey(q.id);
          delete state.mcqAnswers[key];
          delete state.tfAnswers[key];
          delete state.shortAnswers[key];
          delete state.revealedQuestions[key];
        });
        state.currentIndex = 0;
        renderMathApp();
      }
    },
    openAnswerKeyModal() {
      const modal = document.getElementById('mathAnswerKeyModal');
      if (modal) modal.classList.add('open');
    },
    closeAnswerKeyModal() {
      const modal = document.getElementById('mathAnswerKeyModal');
      if (modal) modal.classList.remove('open');
    },
    zoomImage(imgSrc, captionText) {
      const modal = document.getElementById('mathFigureZoomModal');
      const body = document.getElementById('mathFigureZoomBody');
      const title = document.getElementById('mathFigureZoomTitle');
      if (modal && body) {
        if (title) title.textContent = `🔍 ${captionText || 'Phóng to đề bài'}`;
        body.innerHTML = `<img src="${imgSrc}" alt="${captionText || ''}" class="quiz-zoom-img" />`;
        modal.classList.add('open');
      }
    },
    zoomFigure(figKey) {
      const fig = MATH_FIGURES[figKey];
      if (!fig) return;
      const modal = document.getElementById('mathFigureZoomModal');
      const body = document.getElementById('mathFigureZoomBody');
      const title = document.getElementById('mathFigureZoomTitle');
      if (modal && body) {
        if (title) title.textContent = `🔍 ${fig.caption || 'Phóng to hình vẽ minh họa'}`;
        body.innerHTML = fig.img ? `<img src="${fig.img}" alt="${fig.caption || ''}" class="quiz-zoom-img" />` : fig.svg;
        modal.classList.add('open');
      }
    },
    closeZoomFigure() {
      const modal = document.getElementById('mathFigureZoomModal');
      if (modal) modal.classList.remove('open');
    }
  };

  // Phím tắt bàn phím khi đang mở panel Đề Toán 12
  document.addEventListener('keydown', (e) => {
    const mathPanel = document.getElementById('panel-toan12');
    if (!mathPanel || !mathPanel.classList.contains('active')) return;

    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;

    if (e.key === 'Escape') {
      const zoomModal = document.getElementById('mathFigureZoomModal');
      if (zoomModal && zoomModal.classList.contains('open')) {
        window.MathQuizApp.closeZoomFigure();
        return;
      }
      if (state.isFullscreen) {
        state.isFullscreen = false;
        renderMathApp();
        return;
      }
    }

    if (state.mode !== 'slide') return;
    const filtered = getFilteredQuestions();
    if (filtered.length === 0) return;
    const currentQ = filtered[state.currentIndex];

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      window.MathQuizApp.nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      window.MathQuizApp.prevSlide();
    } else if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      window.MathQuizApp.toggleReveal(currentQ.id);
    } else if (e.key.toLowerCase() === 's') {
      e.preventDefault();
      window.MathQuizApp.toggleStar(currentQ.id);
    } else if (currentQ.type === 'mcq') {
      if (['a', '1'].includes(e.key.toLowerCase())) window.MathQuizApp.selectMcq(currentQ.id, 'A');
      else if (['b', '2'].includes(e.key.toLowerCase())) window.MathQuizApp.selectMcq(currentQ.id, 'B');
      else if (['c', '3'].includes(e.key.toLowerCase())) window.MathQuizApp.selectMcq(currentQ.id, 'C');
      else if (['d', '4'].includes(e.key.toLowerCase())) window.MathQuizApp.selectMcq(currentQ.id, 'D');
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderMathApp);
  } else {
    renderMathApp();
  }
})();

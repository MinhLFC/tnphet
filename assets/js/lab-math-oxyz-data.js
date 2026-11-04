/**
 * DỮ LIỆU CHƯƠNG 5 TOÁN 12: PHƯƠNG PHÁP TỌA ĐỘ TRONG KHÔNG GIAN (OXYZ)
 * Gồm 9 Chuyên đề / Dạng toán (Bài 1: Mặt phẳng, Bài 2: Đường thẳng, Bài 3: Mặt cầu)
 * Bao gồm trọn bộ Lý thuyết, Phương pháp giải, 111 Bài tập tự luận mẫu và 442 Câu trắc nghiệm chuẩn cấu trúc mới.
 */
window.MATH_OXYZ_EXAMS_DATA = {
  "oxyz_b1_d1": {
    "id": "oxyz_b1_d1",
    "category": "oxyz",
    "badge": "BÀI 1 • DẠNG 1",
    "title": "Bài 1 - Dạng 1: Xác định yếu tố cơ bản & Viết phương trình mặt phẳng",
    "shortTitle": "B1.D1: Viết PT Mặt phẳng",
    "baiTitle": "Bài 1. Phương trình mặt phẳng",
    "dangTitle": "Dạng 1: Xác định các yếu tố cơ bản và viết phương trình mặt phẳng",
    "subtitle": "Bài 1. Phương trình mặt phẳng • Gồm Lý thuyết, Phương pháp, 23 Ví dụ tự luận & 78 câu Trắc nghiệm (P1: 45 • P2: 20 • P3: 13)",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">BÀI 1 • DẠNG 1</span>\n    <h4>Bài 1. Phương trình mặt phẳng — Dạng 1: Xác định các yếu tố cơ bản và viết phương trình mặt phẳng</h4>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-line\">Vectơ pháp tuyến của mặt phẳng: Cho mặt phẳng (α). Vectơ n ≠ 0 và có giá vuông góc với mặt phẳng</div>\n    <div class=\"oxyz-theory-line\">(α) gọi là vectơ pháp tuyến của mặt phẳng (α).</div>\n    <div class=\"oxyz-theory-subhead\">Nhận xét:</div>\n    <div class=\"oxyz-theory-bullet\">• Nếu n là một vectơ pháp tuyến của (α) thì k.n (k ≠ 0) cũng là một vectơ pháp tuyến của (α).</div>\n    <div class=\"oxyz-theory-bullet\">• Một mặt phẳng hoàn toàn được xác định khi biết một điểm và một vectơ pháp tuyến của nó.</div>\n    <div class=\"oxyz-theory-line\">Cặp vectơ chỉ phương của mặt phẳng: Cho mặt phẳng (α). Nếu hai vectơ a và b không cùng phương</div>\n    <div class=\"oxyz-theory-line\">và giá của chúng song song hoặc nằm trên mặt phẳng(α) thì a,b là cặp véctơ chỉ phương của mặt phẳng</div>\n    <div class=\"oxyz-theory-line\">(α).</div>\n    <div class=\"oxyz-theory-subhead\">Nhận xét: Một mặt phẳng hoàn toàn được xác định khi biết một điểm và cặp vectơ chỉ phương của nó.</div>\n    <div class=\"oxyz-theory-line\">Vectơ pháp tuyến của mặt phẳng khi biết một cặp vectơ chỉ phương: Trong không gian Oxyz, nếu mặt</div>\n    <div class=\"oxyz-theory-line\">phẳng (α) nhận hai vectơ a = (a;a;a) và b = (b;b;b). làm cặp vectơ chỉ phương thì (α) nhận</div>\n    <div class=\"oxyz-theory-line\">1 2 3 1 2 3</div>\n    <div class=\"oxyz-theory-line\">n = [a,b] làm vectơ pháp tuyến.</div>\n    <div class=\"oxyz-theory-line\">1 Vectơ pháp tuyến và cặp vectơ chỉ phương của mặt phẳng</div>\n    <div class=\"oxyz-theory-subhead\">Chú ý: Vectơ n = (a b −ab;ab −ab;ab −a b) được gọi là tích có hướng của hai vectơ a = (a;a;a)</div>\n    <div class=\"oxyz-theory-line\">2 3 3 2 3 1 1 3 1 2 2 1 1 2 3</div>\n    <div class=\"oxyz-theory-line\">và b = (b;b;b). Tích có hướng của hai vectơ a và b được kí hiệu là [a,b].</div>\n    <div class=\"oxyz-theory-line\">1 2 3</div>\n    <div class=\"oxyz-theory-line\">(a a a a a a)</div>\n    <div class=\"oxyz-theory-bullet\">• [a,b] = 2 3; 3 1; 1 2 = (a b −ab;ab −ab;ab −a b).</div>\n    <div class=\"oxyz-theory-line\">b b b b b b 2 3 3 2 3 1 1 3 1 2 2 1</div>\n    <div class=\"oxyz-theory-line\">2 3 3 1 1 2</div>\n    <div class=\"oxyz-theory-bullet\">• a cùng phương với b ⇔ [a,b] = 0.</div>\n    <div class=\"oxyz-theory-bullet\">• Nếu n = [a,b] thì vectơ n vuông góc với cả hai vectơ a và b.</div>\n    <div class=\"oxyz-theory-line\">2 Phương trình tổng quát của mặt phẳng</div>\n    <div class=\"oxyz-theory-subhead\">Định nghĩa: Trong không gian Oxyz, phương trình có dạng Ax + By + Cz + D = 0, trong đó A, B, C</div>\n    <div class=\"oxyz-theory-line\">không đồng thời bằng 0 được gọi là phương trình tổng quát của mặt phẳng.</div>\n    <div class=\"oxyz-theory-subhead\">Nhận xét: Cho mặt phẳng (α) có phương trình tổng quát là Ax + By + Cz + D = 0. Khi đó:</div>\n    <div class=\"oxyz-theory-bullet\">• Mặt phẳng (α) có một vec-tơ pháp tuyến là n = (A;B;C)</div>\n    <div class=\"oxyz-theory-bullet\">• Điểm N(x;y;z) ∈ (α) ⇔ Ax + By + Cz + D = 0</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0 0 0</div>\n    <div class=\"oxyz-theory-bullet\">• Mỗi phương trình Ax + By + Cz + D = 0 (trong đó A, B, C không đồng thời bằng 0) đều là phương</div>\n    <div class=\"oxyz-theory-line\">trình của một mặt phẳng xác định.</div>\n    <div class=\"oxyz-theory-line\">Một số dạng toán viết phương trình mặt phẳng cơ bản:</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 1: Lập phương trình tổng quát của mặt phẳng đi qua một điểm và có một vectơ pháp tuyến</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, phương trình mặt phẳng đi qua điểm M (x;y;z) và có một vectơ pháp tuyến</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0</div>\n    <div class=\"oxyz-theory-line\">n = (A;B;C) là:</div>\n    <div class=\"oxyz-theory-line\">A(x−x) + B(y− y) + C(z−z) = 0 ⇔ Ax + By + Cz + D = 0 với D = −Ax −By −Cz.</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0 0 0</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 2: Lập phương trình tổng quát của mặt phẳng đi qua một điểm và có một cặp vectơ chỉ phương</div>\n    <div class=\"oxyz-theory-line\">Để lập phương trình tổng quát của mặt phẳng (α) đi qua điểm M (x;y;z) và có cặp vectơ chỉ phương</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0</div>\n    <div class=\"oxyz-theory-line\">a, b thì ta thực hiện như sau:</div>\n    <div class=\"oxyz-theory-subhead\">Bước 1: Tìm một vectơ pháp tuyến n = [a,b].</div>\n    <div class=\"oxyz-theory-subhead\">Bước 2: Viết phương trình mặt phẳng (α) đi qua điểm M (x;y;z) và có vectơ pháp tuyến n.</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 3: Lập phương trình tổng quát của mặt phẳng đi qua ba điểm không thẳng hàng</div>\n    <div class=\"oxyz-theory-line\">Để lập phương trình tổng quát của mặt phẳng (α) đi qua ba điểm A, B, C không thẳng hàng thì ta thực</div>\n    <div class=\"oxyz-theory-line\">hiện như sau:</div>\n    <div class=\"oxyz-theory-subhead\">Bước 1: Tìm cặp vectơ chỉ phương chẳng hạn AB, AC.</div>\n    <div class=\"oxyz-theory-subhead\">Bước 2: Tìm một vectơ pháp tuyến n = [AB,AC].</div>\n    <div class=\"oxyz-theory-subhead\">Bước 3: Viết phương trình mặt phẳng (α) đi qua A và có vectơ pháp tuyến n.</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 3: Lập phương trình tổng quát của mặt phẳng theo đoạn chắn</div>\n    <div class=\"oxyz-theory-line\">Phương trình tổng quát của mặt phẳng (α) đi qua ba điểm A(a;0;0),B(0;b;0),C(0;0;c) là:</div>\n    <div class=\"oxyz-theory-line\">x y z</div>\n    <div class=\"oxyz-theory-bullet\">+ + = 1.</div>\n    <div class=\"oxyz-theory-line\">a b c</div>\n    <div class=\"oxyz-theory-line\">3 Điều kiện để hai mặt phẳng song song hoặc vuông góc</div>\n    <div class=\"oxyz-theory-line\">Điều kiện để hai mặt phẳng song song: Trong không gian với hệ trục tọa độ Oxyz, cho hai mặt phẳng có</div>\n    <div class=\"oxyz-theory-line\">phương trình lần lượt là (α):Ax + B y + C z + D = 0 và (α):A x + B y + C z + D = 0 có vectơ pháp</div>\n    <div class=\"oxyz-theory-line\">1 1 1 1 1 2 2 2 2 2</div>\n    <div class=\"oxyz-theory-line\">{ n = kn</div>\n    <div class=\"oxyz-theory-line\">tuyến lần lượt là n = (A;B;C), n = (A;B;C). Khi đó: (α)∥(α) ⇔; 1 2 (k ∈ ℝ).</div>\n    <div class=\"oxyz-theory-line\">1 1 1 1 2 2 2 2 1 2 }D ≠ kD</div>\n    <div class=\"oxyz-theory-line\">1 2</div>\n    <div class=\"oxyz-theory-subhead\">Chú ý: Ta có một số tính chất sau:</div>\n    <div class=\"oxyz-theory-line\">{ n = kn</div>\n    <div class=\"oxyz-theory-bullet\">• (α) ≡ (α) ⇔; 1 2 (k ∈ ℝ).</div>\n    <div class=\"oxyz-theory-line\">1 2 }D = kD</div>\n    <div class=\"oxyz-theory-line\">1 2</div>\n    <div class=\"oxyz-theory-bullet\">• (α) cắt (α) ⇔ n và n không cùng phương.</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2</div>\n    <div class=\"oxyz-theory-line\">Điều kiện để hai mặt phẳng vuông góc: Trong không gian với hệ trục tọa độ Oxyz, cho hai mặt phẳng có</div>\n    <div class=\"oxyz-theory-line\">phương trình lần lượt là (α):Ax + B y + C z + D = 0 và (α):A x + B y + C z + D = 0 có vectơ pháp</div>\n    <div class=\"oxyz-theory-line\">1 1 1 1 1 2 2 2 2 2</div>\n    <div class=\"oxyz-theory-line\">tuyến lần lượt là n = (A;B;C), n = (A;B;C).</div>\n    <div class=\"oxyz-theory-line\">1 1 1 1 2 2 2 2</div>\n    <div class=\"oxyz-theory-line\">Khi đó: (α) ⊥ (α) ⇔ n.n = 0 ⇔ AA + BB + CC = 0.</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2 1 2 1 2 1 2</div>\n    <div class=\"oxyz-theory-line\">4 Khoảng cách từ một điểm đến một mặt phẳng</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, mặt phẳng (α) có phương trình Ax + By + Cz + D = 0 và điểm M (x;y;z).</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0</div>\n    <div class=\"oxyz-theory-line\">Khoảng cách từ điểm M đến mặt phẳng (α) được tính theo công thức:</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">Ax + By + Cz + D</div>\n    <div class=\"oxyz-theory-line\">d (M,(α)) = 0 0 0.</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div>\n    <div class=\"oxyz-theory-line\">5 Các phương trình mặt phẳng đặc biệt trong không gian</div>\n    <div class=\"oxyz-theory-line\">Tính chất mặt phẳng Phương trình Hệ số đặc biệt</div>\n    <div class=\"oxyz-theory-line\">(α) đi qua/chứa gốc O (α):Ax + By + Cz = 0 D = 0</div>\n    <div class=\"oxyz-theory-line\">(α) song song/chứa Ox (α):By + Cz + D = 0 A = 0</div>\n    <div class=\"oxyz-theory-line\">(α) song song/chứa Oy (α):Ax + Cz + D = 0 B = 0</div>\n    <div class=\"oxyz-theory-line\">(α) song song/chứa Oz (α):Ax + By + D = 0 C = 0</div>\n    <div class=\"oxyz-theory-line\">(α) song song/trùng (Oxy) (α):Cz + D = 0 A = B = 0</div>\n    <div class=\"oxyz-theory-line\">(α) song song/trùng (Oxz) (α):By + D = 0 A = C = 0</div>\n    <div class=\"oxyz-theory-line\">(α) song song/trùng (Oyz) (α):Ax + D = 0 B = C = 0</div>\n    <div class=\"oxyz-theory-subhead\">Nhận xét: Mặt phẳng không chứa ẩn nào thì mặt phẳng sẽ song song/chứa trục đó hoặc mặt phẳng không</div>\n    <div class=\"oxyz-theory-line\">chứa ẩn nào thì mặt phẳng sẽ song song/chứa mặt phẳng đó.</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 1: Viết phương trình mặt phẳng</div>\n    <div class=\"oxyz-theory-subhead\">Phương pháp: Ta thường gặp các dạng toán sau:</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 1: Lập phương trình tổng quát của mặt phẳng đi qua một điểm và có một vectơ pháp tuyến</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, phương trình mặt phẳng đi qua điểm M (x;y;z) và có một vectơ pháp tuyến</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0</div>\n    <div class=\"oxyz-theory-line\">n = (A;B;C) là:</div>\n    <div class=\"oxyz-theory-line\">A(x−x) + B(y− y) + C(z−z) = 0 ⇔ Ax + By + Cz + D = 0 với D = −Ax −By −Cz.</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0 0 0</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 2: Lập phương trình tổng quát của mặt phẳng đi qua một điểm và có một cặp vectơ chỉ phương</div>\n    <div class=\"oxyz-theory-line\">Để lập phương trình tổng quát của mặt phẳng (α) đi qua điểm M (x;y;z) và có cặp vectơ chỉ phương</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0</div>\n    <div class=\"oxyz-theory-line\">a, b thì ta thực hiện như sau:</div>\n    <div class=\"oxyz-theory-subhead\">Bước 1: Tìm một vectơ pháp tuyến n = [a,b].</div>\n    <div class=\"oxyz-theory-subhead\">Bước 2: Viết phương trình mặt phẳng (α) đi qua điểm M (x;y;z) và có vectơ pháp tuyến n</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 3: Lập phương trình tổng quát của mặt phẳng đi qua ba điểm không thẳng hàng</div>\n    <div class=\"oxyz-theory-line\">Để lập phương trình tổng quát của mặt phẳng (α) đi qua ba điểm A, B, C không thẳng hàng thì ta</div>\n    <div class=\"oxyz-theory-line\">thực hiện như sau:</div>\n    <div class=\"oxyz-theory-subhead\">Bước 1: Tìm cặp vectơ chỉ phương chẳng hạn AB, AC.</div>\n    <div class=\"oxyz-theory-subhead\">Bước 2: Tìm một vectơ pháp tuyến n = [AB,AC].</div>\n    <div class=\"oxyz-theory-subhead\">Bước 3: Viết phương trình mặt phẳng (α) đi qua A và có vectơ pháp tuyến n.</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 3: Lập phương trình tổng quát của mặt phẳng theo đoạn chắn</div>\n    <div class=\"oxyz-theory-line\">Phương trình tổng quát của mặt phẳng (α) đi qua ba điểm A(a;0;0),B(0;b;0),C(0;0;c) là:</div>\n    <div class=\"oxyz-theory-line\">x y z</div>\n    <div class=\"oxyz-theory-bullet\">+ + = 1.</div>\n    <div class=\"oxyz-theory-line\">a b c</div>\n    <div class=\"oxyz-theory-line\">Ngoài các dạng toán lập phương trình mặt phẳng cơ bản đã nêu. Chúng ta có thể gặp thêm một số dạng</div>\n    <div class=\"oxyz-theory-line\">toán nâng cao hơn được trình bày ở các bài tập dưới đây.</div>\n  </div>\n  <div class=\"oxyz-theory-figures-grid\">\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b1_d1_theory_q0_p1_1.png', 'Vectơ pháp tuyến và cặp vectơ chỉ phương của mặt phẳng')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b1_d1_theory_q0_p1_1.png\" alt=\"Vectơ pháp tuyến và cặp vectơ chỉ phương của mặt phẳng\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Vectơ pháp tuyến và cặp vectơ chỉ phương của mặt phẳng</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b1_d1_theory_q0_p2_1.png', 'Mặt phẳng đi qua điểm M₀ và nhận n làm VTPT')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b1_d1_theory_q0_p2_1.png\" alt=\"Mặt phẳng đi qua điểm M₀ và nhận n làm VTPT\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Mặt phẳng đi qua điểm M₀ và nhận n làm VTPT</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b1_d1_theory_q0_p2_2.png', 'Mặt phẳng đi qua điểm M₀ và biết cặp VTCP a, b')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b1_d1_theory_q0_p2_2.png\" alt=\"Mặt phẳng đi qua điểm M₀ và biết cặp VTCP a, b\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Mặt phẳng đi qua điểm M₀ và biết cặp VTCP a, b</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b1_d1_theory_q0_p3_1.png', 'Mặt phẳng đi qua ba điểm không thẳng hàng A, B, C')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b1_d1_theory_q0_p3_1.png\" alt=\"Mặt phẳng đi qua ba điểm không thẳng hàng A, B, C\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Mặt phẳng đi qua ba điểm không thẳng hàng A, B, C</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b1_d1_theory_q0_p3_2.png', 'Phương trình mặt phẳng theo đoạn chắn')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b1_d1_theory_q0_p3_2.png\" alt=\"Phương trình mặt phẳng theo đoạn chắn\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Phương trình mặt phẳng theo đoạn chắn</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b1_d1_method_q0_p5_1.png', 'Dạng 1: Mặt phẳng qua điểm M₀ và có VTPT n')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b1_d1_method_q0_p5_1.png\" alt=\"Dạng 1: Mặt phẳng qua điểm M₀ và có VTPT n\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Dạng 1: Mặt phẳng qua điểm M₀ và có VTPT n</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b1_d1_method_q0_p5_2.png', 'Dạng 2: Mặt phẳng qua điểm M₀ và có cặp VTCP a, b')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b1_d1_method_q0_p5_2.png\" alt=\"Dạng 2: Mặt phẳng qua điểm M₀ và có cặp VTCP a, b\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Dạng 2: Mặt phẳng qua điểm M₀ và có cặp VTCP a, b</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b1_d1_method_q0_p5_3.png', 'Dạng 3: Mặt phẳng đi qua ba điểm không thẳng hàng')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b1_d1_method_q0_p5_3.png\" alt=\"Dạng 3: Mặt phẳng đi qua ba điểm không thẳng hàng\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Dạng 3: Mặt phẳng đi qua ba điểm không thẳng hàng</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b1_d1_method_q0_p6_1.png', 'Dạng 4: Phương trình mặt phẳng theo đoạn chắn')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b1_d1_method_q0_p6_1.png\" alt=\"Dạng 4: Phương trình mặt phẳng theo đoạn chắn\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Dạng 4: Phương trình mặt phẳng theo đoạn chắn</div>\n    </div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Bài tập tự luận 1",
        "question": "Trong không gian với hệ tọa độ Oxyz. Viết phương trình tổng quát của mặt phẳng (P) đi qua điểm M(2;1;−3) có véctơ pháp tuyến là n = (3;−2;6).",
        "figure": null,
        "explanation": "Phương trình tổng quát của mặt phẳng (P) đi qua điểm M(2;1;−3) có véctơ pháp tuyến là<br>n = (3;−2;6) có dạng: 3(x−2)−2(y−1) + 6(z + 3) = 0 ⇔ 3x−2y + 6z + 14 = 0."
      },
      {
        "id": 2,
        "label": "Bài tập tự luận 2",
        "question": "Trong không gian với hệ trục tọa độ Oxyz. Viết phương trình tổng quát của mặt phẳng (P) đi qua điểm M(2;−1;0) và có cặp véctơ chỉ phương là a = (2;1;3),b = (1;1;2).",
        "figure": null,
        "explanation": "Mặt phẳng (P) có cặp véctơ chỉ phương là a = (2;1;3),b = (1;1;2) nên có vectơ pháp tuyến là<br>n = [a;b] = (−1;−1;1).<br>Phương trình tổng quát của mặt phẳng (P) đi qua điểm M(2;−1;0) có véctơ pháp tuyến là<br>n = (−1;−1;1) có dạng:−1(x−2)−1(y + 1) + 1(z−0) = 0 ⇔ −x− y + z + 1 = 0."
      },
      {
        "id": 3,
        "label": "Bài tập tự luận 3",
        "question": "Trong không gian Oxyz, viết phương trình của mặt phẳng đi qua điểm M(1;2;−1) và vuông góc với trục Ox.",
        "figure": null,
        "explanation": "Mặt phẳng đi qua điểm M(1;2;−1) và vuông góc với trục Ox thì nhận vectơ i = (1;0;0) làm<br>vectơ pháp tuyến. Phương trình mặt phẳng cần tìm là:<br>1(x−1) + 0(y−2) + 0(z + 1) = 0 hay x−1 = 0."
      },
      {
        "id": 4,
        "label": "Bài tập tự luận 4",
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hình hộp ABCD.A′B′C′D′ có A(1;−1;3), B(0;2;4) D(2;−1;1),A′(0;1;2). a) Tính tọa độ các điểm C,B′,D′. b) Viết phương trình mặt phẳng (CB′D′).",
        "figure": null,
        "explanation": "a) Tính tọa độ các điểm C,B′,D′.<br>{ x = 1 { x = 1<br>C C<br>Ta có: AD = BC ⇔; y −2 = 0 ⇔; y = 2 suy ra C(1;2;2).<br>C C<br>z −4 = −2<br>z = 2<br>C C<br>{ x = −1 { x = −1<br>B′ C<br>AA′ = BB′ ⇔; y −2 = 2 ⇔; y = 4 suy ra B′(−1;4;3).<br>B′ C<br>} z −4 = −1 } z = 3<br>B′ C<br>{ x = 1 { x = 1<br>D′ D′<br>AD = A′D′ ⇔; y −1 = 0 ⇔; y = 1 suy ra D′(1;1;0).<br>D′ D′<br>z −2 = −2<br>z = 0<br>D′ D′<br>b) Viết phương trình mặt phẳng (CB′D′).<br>Ta có: CB′ = (−2;2;1),CD′ = (0;−1;−2) là cặp vectơ chỉ phương của mặt phẳng (CB′D′) nên<br>(CB′D′) có vectơ pháp tuyến là n = [CB′,CD′] = (−3;−4;2) và đi qua điểm C(1;2;2) có phương<br>trình là: 3x + 4y−2z−7 = 0."
      },
      {
        "id": 5,
        "label": "Bài tập tự luận 5",
        "question": "Trong không gian Oxyz, viết phương trình mặt phẳng (P) đi qua điểm M(1;−1;5) và vuông góc với hai mặt phẳng (Q):3x + 2y−z = 0, (R):x + y−z = 0.",
        "figure": null,
        "explanation": "Mặt phẳng (Q) và mặt phẳng (R) lần lượt có vec-tơ pháp tuyến là n = (3;2;−1), n = (1;1;−1)<br>Q R<br>Vì mặt phẳng (P) vuông góc với cả hai mặt phẳng (R), (Q) nên giá của các vectơ n, n song<br>R Q<br>song hoặc nằm trong mặt phẳng (P).<br>Suy ra [n,n] = (−1;2;1) là vectơ pháp tuyến của mặt phẳng (P).<br>Q R<br>Mặt phẳng (P) đi qua điểm M(1;−1;5) và có vectơ pháp tuyến n = (−1;2;1) có phương trình<br>là: −1(x−1) + 2(y + 1) + 1(z−5) = 0 hay x−2y−z + 2 = 0."
      },
      {
        "id": 6,
        "label": "Bài tập tự luận 6",
        "question": "Trong không gian Oxyz, viết phương trình mặt phẳng đi qua M(2;3;−1), song song với trục Ox và vuông góc với mặt phẳng (Q):x + 2y−3z + 1 = 0.",
        "figure": null,
        "explanation": "Gọi (P) là mặt phẳng cần tìm.<br>Do (P)//Ox nên mặt phẳng (P) có vectơ chỉ phương u = i = (1;0;0).<br>Mặt khác: (P) ⊥ (Q) ⇒ mặt phẳng (P) có vectơ chỉ phương u = n = (1;2;−3).<br>2 (Q)<br>⇒ n = [u;u] = (0;3;2).<br>(P) 1 2<br>Mặt phẳng (P) đi qua điểm M(2;3;−1) có phương trình (P):3y + 2z−7 = 0."
      },
      {
        "id": 7,
        "label": "Bài tập tự luận 7",
        "question": "Lập phương trình mặt phẳng (P) đi qua: a) Điểm I(3;−4;1) và vuông góc với trục Ox b) Điểm K(−2;4;−1) và song song với mặt phẳng (ozx) c) Điểm K(−2;4;−1) và song song với mặt phẳng (Q):3x + 7y + 10z + 1 = 0",
        "figure": null,
        "explanation": "a) Mặt phẳng (P) ⊥ Ox nên có một vectơ pháp tuyến là n = (1;0;0)<br>(P)<br>Phương trình mặt phẳng (P) là x−3 = 0.<br>b) Mặt phẳng (P)∥(Ozx) ⇒ (P) ⊥ Oy ⇒ n = (0;1;0)<br>(P)<br>Phương trình mặt phẳng (P) là y−4 = 0.<br>c) Mặt phẳng (P)∥(Q) ⇒ n = n = (3;7;10)<br>(P) (Q)<br>Phương trình mặt phẳng (P) là: 3(x + 2) + 7(y−4) + 10(z + 1) = 0 ⇔ 3x + 7y + 10z−12 = 0."
      },
      {
        "id": 8,
        "label": "Bài tập tự luận 8",
        "question": "Lập phương trình mặt phẳng (P) đi qua ba điểm A(1;1;1); B(0;4;0); C(2;2;0).",
        "figure": null,
        "explanation": "Ta có: AB = (−1;3;−1); AC = (1;1;−1).<br>(3 −1 −1 −1 −1 3)<br>Xét n = [AB;AC] =;; = (−2;−2;−4).<br>1 −1 −1 1 1 1<br>Khi đó n là một vectơ pháp tuyến của mặt phẳng (P).<br>Mặt phẳng (P) đi qua B(0;4;0)nên có phương trình<br>−2(x−0)−2(y−4)−4(z−0) = 0 ⇔ x + y + 2z−4 = 0<br>Vậy (P):x + y + 2z−4 = 0."
      },
      {
        "id": 9,
        "label": "Bài tập tự luận 9",
        "question": "Lập phương trình mặt phẳng theo đoạn chắn của mặt phẳng (P), biết rằng mặt phẳng (P) đi qua ba điểm A(5;0;0),B(0;3;0),C(0;0;6).",
        "figure": null,
        "explanation": "x y z<br>Mặt phẳng đi qua ba điểm A(5;0;0),B(0;3;0),C(0;0;6) có phương trình là: + + = 1.<br>5 3 6"
      },
      {
        "id": 10,
        "label": "Bài tập tự luận 10",
        "question": "Trong không gian Oxyz. Viết phương trình mặt phẳng (P) chứa điểm M(1;3;−2) cắt các tia OA OB OC Ox, Oy, Oz lần lượt tại A, B, C sao cho = =. 1 2 4",
        "figure": null,
        "explanation": "Phương trình mặt chắn cắt tia Ox tại A(a;0;0), cắt tia Oy tại B(0;b;0), cắt tia Oz tại<br>x y z<br>C(0;0;c) có dạng là (P): + + = 1 (với a > 0, b > 0,c > 0).<br>a b c<br>{ b<br>OA OB OC a b c a =<br>Theo đề: = = ⇔ = = ⇒; 2.<br>1 2 4 1 2 4<br>}c = 2b<br>1 3 −2 4<br>Vì M(1;3;−2) nằm trên mặt phẳng (P) nên ta có: + + = 1 ⇔ = 1 ⇔ b = 4.<br>b b 2b b<br>Khi đó a = 2, c = 8.<br>x y z<br>Vậy phương trình mặt phẳng (P) là: + + = 1 ⇔ 4x + 2y + z−8 = 0.<br>2 4 8"
      },
      {
        "id": 11,
        "label": "Bài tập tự luận 11",
        "question": "Trong không gian Oxyz, cho hai điểm A(4;0;1) và B(−2;2;3).Viết phương trình mặt phẳng trung trực của đoạn thẳng AB.",
        "figure": null,
        "explanation": "Mặt phẳng trung trực của đoạn thẳng AB có véctơ pháp tuyến là AB = (−6;2;2) và đi qua trung<br>điểm I(1;1;2) của đoạn thẳng AB.<br>Do đó, ta có:−6(x−1) + 2(y−1) + 2(z−2) = 0 ⇔ −6x + 2y + 2z = 0 ⇔ 3x− y−z = 0."
      },
      {
        "id": 12,
        "label": "Bài tập tự luận 12",
        "question": "Trong không gian Oxyz, cho hai điểm A(−3;2;1) và B(5;−4;1). Gọi M là hình chiếu vuông góc của A trên (Oxy), và N là điểm đối xứng với B qua (Oyz). Viết phương trình mặt phẳng trung trực (P) của đoạn thẳng MN.",
        "figure": null,
        "explanation": "M là hình chiếu của A(−3;2;1) trên trục (Oxy) nên ta có M(−3;2;0).<br>N là đối xứng với B(5;−4;1) qua (Oyz) nên ta có N(−5;−4;1).<br>(1)<br>Gọi I là trung điểm MN. Ta có I −4;−1; và MN = (−2;−6;1)<br>(1)<br>Phương trình mặt phẳng 2(x + 4) + 6(y + 1)−1 z− = 0 ⇔ 4x + 12y−2z + 29 = 0."
      },
      {
        "id": 13,
        "label": "Bài tập tự luận 13",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hình vuông ABCD biết A(1;2;1),B(3;0;0), C(1;−1;−2),D(−1;1;−1). Giả sử I(a;b;c) là tâm đường tròn ngoại tiếp hình vuông ABCD và G là trọng tâm ΔABC. Viết phương trình mặt phẳng trung trực của GI.",
        "figure": null,
        "explanation": "Vì ABCD là hình vuông nên tâm đường tròn ngoại tiếp hình vuông ABCD là giao điểm của hai<br>đường chéo AC và BD.<br>(1 1) (5 1 −1)<br>Khi đó I 1;;− và do G là trọng tâm tam giác ABC nên G;;.<br>2 2 3 3 3<br>(4 5 5)<br>Gọi M là trung điểm của đoạn thẳng GI nên M;;−<br>3 12 12<br>Phương trình mặt phẳng trung trực đoạn thẳng GI:<br>(4) (5) (5)<br>−4 x− + y− − z + = 0 ⇔ 8x−2y + 2z−9 = 0.<br>3 12 12"
      },
      {
        "id": 14,
        "label": "Bài tập tự luận 14",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt phẳng (P) đi qua giao tuyến của hai mặt phẳng (α):3x− y + z−2 = 0, (α):x + 4y−5 = 0 và song song với mặt phẳng (α):2x + 21y−z + 7 = 0 1 2 3. Viết phương trình của mặt phẳng (P).",
        "figure": null,
        "explanation": "Ta có: (P)//(α) ⇒ (P):2x + 21y−z + m = 0(m ≠ −7)<br>{ (α):3x− y + z−2 = 0<br>Gọi d là giao tuyến của (α);(α) d:; 1<br>1 2<br>(α<br>):x + 4y−5 = 0<br>{ 3x + z−2 = 0 { 3x− y−2 = 0<br>Cho y = 0 →; ⇒ M(5;0;−13) và z = 0 →; → N(1;1;0)<br>}x−5 = 0 }x + 4y−5 = 0<br>M ∈ (P) ⇒ 2.5 + 21.0−(−13) + m = 0 ⇒ m = −23<br>N ∈ (P) ⇒ 2.1 + 21.1−0 + m = 0 ⇒ m = −23. Vậy 2x + 21y−z−23 = 0."
      },
      {
        "id": 15,
        "label": "Bài tập tự luận 15",
        "question": "Trong không gian với hệ trục Oxyz, cho mặt phẳng (P):2x−2y + z−5 = 0. Viết phương trình mặt phẳng (Q) song song với mặt phẳng (P), cách (P) một khoảng bằng 3 và cắt trục Ox tại điểm có hoành độ dương.",
        "figure": null,
        "explanation": "Do (Q)//(P)nên mặt phẳng (Q):2x−2y + z + C = 0; C ≠ −5, chọn M(0;0;5) ∈ (P)<br>5 + C [C = 4<br>Ta có d<br>((P);(Q))<br>= d<br>(M;(Q))<br>= = 3 ⇔<br>22 + (−2)<sup>2</sup> + 12 C = −14<br>Với C = 4 ⇒ (Q):2x−2y + z + 4 = 0 khi đó (Q) cắt Ox tại điểm M (−2;0;0)có hoành độ âm<br>nên trường hợp này (Q) không thỏa đề bài.<br>Với C = −14 ⇒ (Q):2x−2y + z−14 = 0 khi đó (Q)cắt Ox tại điểm M (7;0;0)có hoành độ<br>dương do đó (Q):2x−2y + z−14 = 0 thỏa đề bài.<br>Vậy phương trình mặt phẳng (Q):2x−2y + z−14 = 0."
      },
      {
        "id": 16,
        "label": "Bài tập tự luận 16",
        "question": "Trong không gian Oxyz,cho hai mặt phẳng (α):3x−2y + 2z + 7 = 0, (β):5x−4y + 3z + 1 = 0 Viết phương trình mặt phẳng đi qua gốc tọa độ O đồng thời vuông góc với cả (α) và (β).",
        "figure": null,
        "explanation": "Vectơ pháp tuyến của hai mặt phẳng lần lượt là n = (3;−2;2),n = (5;−4;3).<br>α β<br>Khi đó vecto pháp tuyến mặt phẳng cần tìm là n = [n;n] = (2;1;−2)<br>α β<br>Mặt phẳng đi qua gốc tọa độ O có vectơ pháp tuyến n = (2;1;−2) là: 2x + y−2z = 0."
      },
      {
        "id": 17,
        "label": "Bài tập tự luận 17",
        "question": "Trong không gian với hệ trục tọa độ Oxyz. Viết phương trình mặt phẳng (P) đi qua hai điểm A(0;1;0), B(2;3;1) và vuông góc với mặt phẳng (Q): x + 2y−z = 0.",
        "figure": null,
        "explanation": "Ta có AB = (2;2;1), vectơ pháp tuyến mặt phẳng (Q): n = (1;2;−1).<br>Theo đề bài ta có vectơ pháp tuyến mặt phẳng (P): n = n ∧ AB = (4;−3;−2).<br>P Q<br>Phương trình mặt phẳng (P) có dạng 4x−3y−2z + C = 0.<br>Mặt phẳng (P) đi qua A(0;1;0) nên: −3 + C = 0 ⇔ C = 3.<br>Vậy phương trình mặt phẳng (P) là 4x−3y−2z + 3 = 0."
      },
      {
        "id": 18,
        "label": "Bài tập tự luận 18",
        "question": "Hình vẽ dưới đây minh họa hình ảnh một tòa nhà trong không gian với hệ tọa độ Oxyz (đơn vị trên mỗi trục tọa độ là mét). Biết A(50;0;0), D(0;20;0), B(4k;3k;2k)với k > 0 và mặt phẳng (BCFE) có phương trình là z = 3. a) Tìm tọa độ điểm B. b) Lập phương trình mặt phẳng (AOBC). c) Lập phương trình mặt phẳng (DOBE). d) Chỉ ra một véc tơ pháp tuyến của mỗi mặt phẳng (AOBC)và (DOBE).",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d1_tuluan_q19_p8_1.png",
        "explanation": "a) Mặt phẳng (BCFE) có phương trình là z = 3 và điểm B ∈ (BCFE) nên ta có thể suy ra được<br>3 (9)<br>giá trị: 2k = 3 ⇔ k = ⇒ B 6;;3.<br>2 2<br>1 2<br>b) Ta có: u = OA = (1;0;0); u = OB = (4;3;2) ⇒ n = [u,u] = (0;−2;3) là một vectơ pháp<br>1 50 2 3 1 2<br>tuyến của mặt phẳng (AOBC)<br>Phương trình mặt phẳng (AOBC) là: −2(y−0) + 3(z−0) = 0 ⇔ −2y + 3z = 0.<br>2 1 1<br>c) Ta có: u = OB = (4;3;2); u = OD = (0;1;0) ⇒ n' = [u,u] = (1;0;−2) là một vectơ<br>2 3 3 20 2 3 2<br>pháp tuyến của mặt phẳng (DOBE).<br>Phương trình mặt phẳng (DOBE) là: 1(x−0)−2(z−0) = 0 ⇔ x−2z = 0.<br>d) Một vectơ pháp tuyến của mặt phẳng (AOBC) là n = (0;−2;3) và một vectơ pháp tuyến của<br>mặt phẳng (DOBE) là n′ = (1;0;−2)."
      },
      {
        "id": 19,
        "label": "Bài tập tự luận 19",
        "question": "Hình dưới đây minh họa một khu nhà đang xây dựng được gắn hệ trục tọa độ Oxyz (đơn vị trên các trục là mét). Mỗi cột bê tông có dạng hình lăng trụ tứ giác đều và tâm của mặt đáy trên lần lượt là các điểm A(2;1;3), B(4;3;3), C(6;3;2,5), D(4;0;2,8). a) Viết phương trình mặt phẳng (ABC). b) Bốn điểm A,B,C,D có đồng phẳng không?",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d1_tuluan_q20_p8_2.png",
        "explanation": "a) Ta có: AB = (2;2;0) ≠ 0, AC = (4;2;−0,5) ≠ 0.<br>(2 0 0 2 2 2)<br>Xét: [AB,AC] =;; = (−1;1;−4) hay n = (1;−1;4) là một vectơ pháp<br>2 −0,5 −0,5 4 4 2<br>tuyến của mặt phẳng (ABC).<br>Phương trình mặt phẳng (ABC) là: 1(x−2)−1(y−1) + 4(z−3) = 0 ⇔ x− y + 4z−13 = 0.<br>b) Thay tọa độ điểm D(4;0;2,8) vào phương trình mặt phẳng (ABC) ta có:<br>x− y + 4z−13 = 0 ⇔ 4 + 4.2,8−13 = 0 (vô lý)<br>Vậy bốn điểm A,B,C,D không đồng phẳng."
      },
      {
        "id": 20,
        "label": "Bài tập tự luận 20",
        "question": "Một công trường xây dựng nhà cao tầng đã thiết lập hệ tọa độ Oxyz. Hãy kiểm tra tính song song hoặc vuông góc giữa các mặt kính (P), (Q), (R) (hình bên) của một tòa nhà biết các mặt phẳng có phương trình lần lượt là: (P):3x + y−z + 2 = 0; (Q):6x + 2y−2z + 11 = 0; (R):x−3y + 1 = 0.",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d1_tuluan_q21_p8_3.png",
        "explanation": "Các mặt phẳng (P), (Q) và (R) lần lượt có vectơ pháp tuyến là n = (3;1;−1), n = (6;2;−2) và<br>P Q<br>n = (1;−3;0).<br>{ 1<br>n = n<br>P 2 Q<br>Khi đó ta có:; ⇒ (P)∥(Q).<br>2 ≠.11<br>} 2<br>Mặt khác n.n = 0 ⇒ (P) ⊥ (R) và n.n = 0 ⇒ (Q) ⊥ (R).<br>P R Q R"
      },
      {
        "id": 21,
        "label": "Bài tập tự luận 21",
        "question": "Bác An dự định làm bốn mái nhà của một ngôi nhà sao cho chúng là bốn mặt bên của một hình chóp tứ giác đều và các mái kề nhau thì vuông góc với nhau. Hỏi ý tưởng đó có làm được không?",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d1_tuluan_q22_p9_1.png",
        "explanation": "Giả sử mái nhà của ngôi nhà được minh họa như hình vẽ trên. Ta gắn hệ trục tọa độ như hình vẽ.<br>Gọi các cạnh đáy của hình chóp có độ dài là a và các cạnh bên có độ dài là b.<br>Vì ABCDlà hình vuông cạnh a nên OA = OB = OC = OD = a 2.<br>a<sup>2</sup> 2b<sup>2</sup> −a<sup>2</sup><br>Vì SO là đường cao của tam giác SOCnên SO = SC<sup>2</sup> −OC<sup>2</sup> = b<sup>2</sup> − =<br>2 2<br>(−a 2) (a 2) (−a 2) (a 2)<br>Khi đó ta có:O(0;0;0);A;0;0,C;0;0,B0;;0;D0;;0<br>2 2 2 2<br>(2b<sup>2</sup> −a<sup>2</sup>)<br>và S0;0;<br>(a 2 2b<sup>2</sup> −a<sup>2</sup>) (a 2 a 2) (a 2 a 2)<br>Ta có: SC =;0;−;DC =;−;0; BC =;;0<br>2 2 2 2 2 2<br>[2] (2b<sup>2</sup> −a<sup>2</sup> 2b<sup>2</sup> −a<sup>2</sup> a 2)<br>Mặt khác: n = | SC; DC =;;−<br>1 a 2 2 2<br>[2] (2b<sup>2</sup> −a<sup>2</sup> 2b<sup>2</sup> −a<sup>2</sup> a 2)<br>n = | SC; BC =;−;<br>2 a 2 2 2<br>Mặt phẳng (SCD) nhận n làm một vectơ pháp tuyến.<br>Mặt phẳng (SBC) nhận n làm một vectơ pháp tuyến.<br>−a<sup>2</sup><br>Vì n.n = ≠ 0 do đó hai mặt phẳng (SCD) và (SBC)không vuông góc với nhau.<br>1 2 2<br>Do đó ý tưởng trên không thực hiện được."
      },
      {
        "id": 22,
        "label": "Bài tập tự luận 22",
        "question": "Trong không gian Oxyz, một ngôi nhà có sàn nhà thuộc mặt phẳng Oxy và trần nhà tầng 1 thuộc mặt phẳng z−1 = 0, mái nhà tầng 2 thuộc mặt phẳng x + y + 50z−100 = 0. Hỏi trong 3 mặt phẳng tương ứng chứa sàn nhà, trần nhà tầng 1, mái nhà tầng 2, hai mặt nào song song với nhau?",
        "figure": null,
        "explanation": "Vì mặt phẳng Oxy vuông góc với Oznên mặt phẳng Oxy nhận k = (0;0;1)làm một vectơ pháp<br>tuyến.<br>Vì mặt phẳng Oxy đi qua điểm O(0; 0; 0) và có vectơ pháp tuyến k = (0;0;1)nên có phương<br>trình là: z−0 = 0 ⇔ z = 0<br>Mặt phẳng z−1 = 0 có vecto pháp tuyến là n = (0;0;1).<br>Vì n = k và −1 ≠ 0 nên mặt phẳng chứa sàn nhà song song với trần tầng 1.<br>Mặt mái tầng 2 có phương trình x + y + 50z−100 = 0 và có nhận một vectơ pháp tuyến là<br>n = (1;1;50) không cùng phương với n,k nên không song song với hai mặt phẳng còn lại.<br>2 1"
      },
      {
        "id": 23,
        "label": "Bài tập tự luận 23",
        "question": "Xét một cối xay lúa trong không gian Oxyz, với đơn vị đo là mét. Nếu tác động vào tại cối xay lúa (Ở vị trí P) một lực F thì moment lực M được tính bởi công thức M = [OP;F] như hình minh họa. Trong quá trình xay, các thanh gỗ AB và PQ luôn có phương nằm ngang. Vectơ lực F có giá song song với AB. Giải thích vì sao giá của vecto moment lực M có phương thẳng đứng?",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d1_tuluan_q23_p9_2.png",
        "explanation": "Vì các thanh gỗ ABvà PQ luôn có phương nằm ngang và vectơ lực F có giá song song với AB<br>nên giá của vectơ F có phương nằm ngang.<br>Mặt khác M = [OP;F] nên moment lực M vuông góc với hai vectơ F và OP<br>Do đó giá của vectơ moment lực M có phương thẳng đứng."
      }
    ],
    "questions": [
      {
        "id": 1,
        "part": 1,
        "shortTag": "P1.1",
        "label": "Phần 1 - Câu 1",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (P):x + y−z + 1 = 0. Điểm nào sau đây thuộc mặt phẳng (P)?",
        "options": {
          "A": "A(1;1;3).",
          "B": "B(1;1;−3).",
          "C": "C(3;1;1).",
          "D": "D(−1;−1;3)."
        },
        "answer": "A",
        "explanation": "Ta có: 1 + 1−3 + 1 = 0 ⇒ điểm A(1;1;3) ∈ (P)."
      },
      {
        "id": 2,
        "part": 1,
        "shortTag": "P1.2",
        "label": "Phần 1 - Câu 2",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, điểm nào sau đây thuộc mặt phẳng (Oxy)?",
        "options": {
          "A": "A(1;1;0).",
          "B": "B(1;0;−3).",
          "C": "C(0;1;1).",
          "D": "D(0;0;3)."
        },
        "answer": "A",
        "explanation": "Ta có: mặt phẳng (Oxy):z = 0. Quan sát bốn phương án, ta thấy chỉ có phương án A thỏa."
      },
      {
        "id": 3,
        "part": 1,
        "shortTag": "P1.3",
        "label": "Phần 1 - Câu 3",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ (Oxyz). Mặt phẳng (α) biết (α) đi qua điểm M(−1;5;2) đồng thời (α) có cặp vetơ chỉ phương u = (0;1;1) và v = (−3;−5;1) có phương trình là",
        "options": {
          "A": "y + z−7 = 0.",
          "B": "2x− y + z + 5 = 0.",
          "C": "−x + 5y + 2z + 5 = 0.",
          "D": "2x + y + z−5 = 0."
        },
        "answer": "B",
        "explanation": "Ta có [u,v] = (6;−3;3) = 3(2;−1;1). Chọn n = (2;−1;1) là 1 véc tơ pháp tuyến của (α).<br>Phương trình mặt phẳng qua M(−1;5;2) nhận n = (2;−1;1) làm 1 véc tơ pháp tuyến là:<br>2(x + 1)−(y−5) + (z−2) = 0 ⇔ 2x− y + z + 5 = 0."
      },
      {
        "id": 4,
        "part": 1,
        "shortTag": "P1.4",
        "label": "Phần 1 - Câu 4",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ (Oxyz),cho ba điểm A(0;2;1), B(3;0;1), C(1;0;0). Phương trình mặt phẳng (ABC)là",
        "options": {
          "A": "2x−3y−4z + 2 = 0.",
          "B": "4x + 6y−8z + 2 = 0.",
          "C": "2x + 3y−4z−2 = 0.",
          "D": "2x−3y−4z−2 = 0."
        },
        "answer": "C",
        "explanation": "Ta có AB = (3;−2;0),AC(1;−2;−1)<br>Vì mặt phẳng (ABC)đi qua ba điểm A,B,Cnên VTPTn = [AB,AC] = (2;3;−4)<br>Phương trình mặt phẳng (ABC): 2(x−0) + 3(y−2)−4(z−1) = 0 ⇔ 2x + 3y−4z−2 = 0."
      },
      {
        "id": 5,
        "part": 1,
        "shortTag": "P1.5",
        "label": "Phần 1 - Câu 5",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, mặt phẳng đi qua điểm A(2;−3;−2) và song song với mặt phẳng (Oxy) có phương trình là",
        "options": {
          "A": "z + 2 = 0.",
          "B": "z −2 = 0.",
          "C": "2x−3y = 0.",
          "D": "2x−3y−2 = 0."
        },
        "answer": "A",
        "explanation": "Gọi (P) là mặt phẳng cần tìm. Do (P)//(Oxy) ⇒ n = k = (0;0;1).<br>Và (P) đi qua điểm A ⇒ (P):0.(x−2) + 0.(y + 3) + 1.(z + 2) = 0 ⇒ (P):z + 2 = 0."
      },
      {
        "id": 6,
        "part": 1,
        "shortTag": "P1.6",
        "label": "Phần 1 - Câu 6",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, mặt phẳng đi qua điểm A(2;−3;−2) và song song với mặt phẳng (Oxz) có phương trình là",
        "options": {
          "A": "x + z = 0.",
          "B": "y + 3 = 0.",
          "C": "y−3 = 0.",
          "D": "x− z = 0."
        },
        "answer": "B",
        "explanation": "Gọi (P) là mặt phẳng cần tìm. Do (P)//(Oxz) ⇒ n = j = (0;1;0).<br>Và (P) đi qua điểm A ⇒ (P):0.(x−2) + 1.(y + 3) + 0.(z + 2) = 0 ⇒ (P): y + 3 = 0."
      },
      {
        "id": 7,
        "part": 1,
        "shortTag": "P1.7",
        "label": "Phần 1 - Câu 7",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, mặt phẳng đi qua điểm A(2;−3;−2) và song song với mặt phẳng (Oyz) có phương trình là",
        "options": {
          "A": "3y−2z = 0.",
          "B": "x + 2 = 0.",
          "C": "x−2 = 0.",
          "D": "3y + 2z = 0."
        },
        "answer": "C",
        "explanation": "Gọi (P) là mặt phẳng cần tìm. Do (P)//(Oyz) ⇒ n = i = (1;0;0).<br>Và (P) đi qua điểm A ⇒ (P):1.(x−2) + 0.(y + 3) + 0.(z + 2) = 0 ⇒ (P):x−2 = 0."
      },
      {
        "id": 8,
        "part": 1,
        "shortTag": "P1.8",
        "label": "Phần 1 - Câu 8",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, mặt phẳng đi qua điểm A(2;−3;−2) và song song với mặt phẳng (α):2x− y + 3z−3 = 0 có phương trình là",
        "options": {
          "A": "2x− y + 3z = 0.",
          "B": "2x− y + 3z−1 = 0.",
          "C": "2x−3y−2z = 0.",
          "D": "2x−3y−2z−1 = 0."
        },
        "answer": "B",
        "explanation": "Gọi (P) là mặt phẳng cần tìm. Do (P)//(α) ⇒ n = n = (2;−1;3).<br>P α<br>Và (P) đi qua điểm A ⇒ (P):2.(x−2)−1.(y + 3) + 3.(z + 2) = 0 ⇒ (P):2x− y + 3z−1 = 0."
      },
      {
        "id": 9,
        "part": 1,
        "shortTag": "P1.9",
        "label": "Phần 1 - Câu 9",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho bốn điểm A(1;0;1),C(3;1;1), D(4;1;1) B(−1;2;2). Viết phương trình mặt phẳng đi qua hai điểm A,B và song song với CD.",
        "options": {
          "A": "y−2z + 2 = 0.",
          "B": "x−2z + 2 = 0.",
          "C": "x− y + 2z + 2 = 0.",
          "D": "x−2y + 2 = 0."
        },
        "answer": "A",
        "explanation": "Gọi (P) là mặt phẳng cần tìm.<br>Vì (P) đi qua hai điểm A,B và song song với CD nên (P) nhận hai véc tơ AB = (−2;2;1),<br>CD = (1;0;0) làm cặp véc tơ chỉ phương suy ra (P) có véc tơ pháp tuyến là:<br>n = [CD,AB] = (0;−1;2).<br>Phương trình mặt phẳng (P) là 0(x−1)−1(y−0) + 2(z−1) = 0 hay y−2z + 2 = 0."
      },
      {
        "id": 10,
        "part": 1,
        "shortTag": "P1.10",
        "label": "Phần 1 - Câu 10",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho A(1;2;−1); B(−1;0;1) và mặt phẳng (P):x + 2y−z + 1 = 0. Viết phương trình mặt phẳng (Q) qua A,B và vuông góc với (P).",
        "options": {
          "A": "(Q):2x− y + 3 = 0.",
          "B": "(Q):x + z = 0.",
          "C": "(Q):−x + y + z = 0.",
          "D": "(Q):3x− y + z = 0."
        },
        "answer": "B",
        "explanation": "Ta có: AB = (−2;−2;2) = −2(1;1;−1),u = (1;1;−1) và n = (1;2;−1)<br>(P)<br>Vì mặt phẳng (Q) qua A,B và vuông góc với (P) nên (Q) nhận hai véc tơ u = (1;1;−1),<br>n = (1;2;−1) làm cặp véc tơ chỉ phương suy ra (Q) có véc tơ pháp tuyến là<br>(P)<br>n = [u,n] = (1;0;1).<br>(Q) (P)<br>Mặt phẳng (Q) qua A ⇒ (Q):x + z = 0."
      },
      {
        "id": 11,
        "part": 1,
        "shortTag": "P1.11",
        "label": "Phần 1 - Câu 11",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai mặt phẳng (α):3x−2y + 2z + 7 = 0 và (β):5x−4y + 3z + 1 = 0. Phương trình mặt phẳng đi qua gốc tọa độ O đồng thời vuông góc với cả(α) và (β) là",
        "options": {
          "A": "2x + y − 2z = 0.",
          "B": "x + y + z + 3 = 0.",
          "C": "−2x + z + 6 = 0.",
          "D": "−2x + z −6 = 0."
        },
        "answer": "C",
        "explanation": "Gọi (P) là mặt phẳng cần tìm.<br>Véc tơ pháp tuyến của hai mặt phẳng lần lượt là n = (3;−2;2),n = (5;−4;3).<br>α β<br>Vì mặt phẳng (P) đồng thời vuông góc với cả (α) và (β) nên (P) nhận hai véc tơ n = (3;−2;2)<br>,n = (5;−4;3) làm cặp véc tơ chỉ phương suy ra (P) có véc tơ pháp tuyến là<br>n = [n;n] = (2;1;−2)<br>α β<br>Mặt phẳng (P) đi qua gốc tọa độ O nên (P):2x + y−2z = 0."
      },
      {
        "id": 12,
        "part": 1,
        "shortTag": "P1.12",
        "label": "Phần 1 - Câu 12",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(2;3;5). Viết phương trình mặt phẳng (α)đi qua Avà chứa trục Ox",
        "options": {
          "A": "(α):5y + 3z = 0.",
          "B": "3y + 5z = 0.",
          "C": "3y−5z = 0.",
          "D": "(α):5y−3z = 0."
        },
        "answer": "D",
        "explanation": "Mặt phẳng (α)có dạng: By + Cz = 0 và A ∈ (α) ⇒ 3B + 5C = 0 ⇒ 3B = −5C<br>Chọn B = 5 ⇒ C = −3. Vậy (α):5y−3z = 0"
      },
      {
        "id": 13,
        "part": 1,
        "shortTag": "P1.13",
        "label": "Phần 1 - Câu 13",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(−3;1;2). Viết phương trình mặt phẳng (α)đi qua Avà chứa trục Oy",
        "options": {
          "A": "(α):2x−3z = 0.",
          "B": "3x + 2z = 0.",
          "C": "3x−2z = 0.",
          "D": "(α):2x + 3z = 0."
        },
        "answer": "D",
        "explanation": "Mặt phẳng (α)có dạng: Ax + Cz = 0 và A ∈ (α) ⇒ −3A + 2C = 0 ⇒ 3A = 2C<br>Chọn A = 2 ⇒ C = 3 ⇒ (α):2x + 3z = 0"
      },
      {
        "id": 14,
        "part": 1,
        "shortTag": "P1.14",
        "label": "Phần 1 - Câu 14",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(2;4;−5). Viết phương trình mặt phẳng (α)đi qua Avà chứa trục Oz",
        "options": {
          "A": "(α):x−2y = 0.",
          "B": "x + 2y = 0.",
          "C": "2x− y = 0.",
          "D": "(α):2x + y = 0."
        },
        "answer": "C",
        "explanation": "Mặt phẳng (α)có dạng: Ax + By = 0 và A ∈ (α) ⇒ 2A + 4B = 0 ⇒ A = −2B<br>Chọn A = 2 ⇒ B = −1 ⇒ (α):2x− y = 0"
      },
      {
        "id": 15,
        "part": 1,
        "shortTag": "P1.15",
        "label": "Phần 1 - Câu 15",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt phẳng (Q) song song với mặt phẳng (P):x + 2y−2z + 1 = 0 và (Q)cách điểm M (1;−2;1) một khoảng bằng 3 có phương trình là",
        "options": {
          "A": "x + 2y−2z + 10 = 0;x + 2y−2z−1 = 0.",
          "B": "x + 2y−2z = 0;x + 2y−2z−14 = 0.",
          "C": "x + 2y−2z−14 = 0;x + 2y−2z−4 = 0.",
          "D": "x + 2y−2z + 4 = 0;x + 2y−2z−14 = 0."
        },
        "answer": "C",
        "explanation": "Mặt phẳng (Q) song song với mặt phẳng (P):x + 2y−2z + 1 = 0 nên mặt phẳng (Q) có<br>phương trình:x + 2y−2z + D = 0(D ≠ 1).<br>Mặt phẳng (Q)cách điểm M (1;−2;1) một khoảng bằng 3 nên d(M;(Q)) = 3<br>[D = 14 (t /m)<br>⇔ D−5 = 9 ⇔ |<br>| D = −4 (t/m)"
      },
      {
        "id": 16,
        "part": 1,
        "shortTag": "P1.16",
        "label": "Phần 1 - Câu 16",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm B(1;−1;0), C(2;−1;−1), M(−2;1;3). Mặt phẳng (P) vuông góc với BC và cách M một khoảng bằng 2 có phương trình là",
        "options": {
          "A": "x− z−7 = 0; x− z−3 = 0.",
          "B": "x− z + 7 = 0; x− z−3 = 0.",
          "C": "x− z + 7 = 0; x− z + 3 = 0.",
          "D": "x− z −7 = 0;x− z + 3 = 0."
        },
        "answer": "C",
        "explanation": "Mặt phẳng (P) vuông góc với BCnên n = BC = (1;0;−1) ⇒ (P):x−z + D = 0.<br>D−5 [D = 7<br>Lại có d(M;(P)) = 2 ⇔ = 2 ⇔ D−5 = 2 ⇔ |<br>2 D = 3<br>Với D = 7 ⇒ (P):x−z + 7 = 0.<br>Với D = 3 ⇒ (P):x−z + 3 = 0."
      },
      {
        "id": 17,
        "part": 1,
        "shortTag": "P1.17",
        "label": "Phần 1 - Câu 17",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt phẳng (α)qua hai điểm C(2;1;6), D(3;5;1) và cách đều hai điểm A(6;4;0), B(4;5;0)có phương trình là:",
        "options": {
          "A": "13x + 18y + 15z + 134 = 0;5x + 10y + 9z−7 = 0.",
          "B": "13x + 18y + 15z = 0;5x + 10y + 9z−4 = 0.",
          "C": "5x + 10y + 9z−74 = 0;13x + 18y + 15z−134 = 0.",
          "D": "13x + 18y + 15z−13 = 0;5x + 10y + 9z + 4 = 0"
        },
        "answer": "C",
        "explanation": "Mặt phẳng (α) cách đều hai điểm A;B khi và chỉ khi AB//(α) hoặc (α) đi qua trung điểm I<br>của AB<br>Trường hợp 1: (α)∥AB ta có CD = (1;4;−5), AB = (−2;1;0).<br>Mặt phẳng (α) qua điểm C(2;1;6) và có một vectơ pháp tuyến là n = [CD,AB] = (5;10;9)<br>Phương trình mặt phẳng (α) là: 5(x−2) + 10(y−1) + 9(z−6) = 0 hay 5x + 10y + 9z−74 = 0.<br>(9) (7)<br>Trường hợp 2: (α)qua trung điểm I 5;;0 của AB có CD = (1;4;−5), CI = 3;;−6.<br>2 2<br>Mặt phẳng(α) qua điểmC(2;1;6) và có một vectơ pháp tuyến là<br>(13 17) 1<br>n = [CD;CI] = −;−9;− = − (13;18;17).<br>2 2 2<br>Chọn một véc tơ pháp tuyến của mặt phẳng (α) là n = (13;18;17)<br>(α)<br>Phương trình mặt phẳng (α) là: 13(x−2) + 18(y−1) + 17(z−6) = 0 hay<br>13x + 18y + 17z−146 = 0."
      },
      {
        "id": 18,
        "part": 1,
        "shortTag": "P1.18",
        "label": "Phần 1 - Câu 18",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai vectơ a = (a,a,a), b = (b,b,b) khác 0. Tích có hướng của 1 2 3 1 2 3 a và b là c. Khẳng định nào sau đây đúng?",
        "options": {
          "A": "c = (ab −a b,a b −ab,ab −ab).",
          "B": "c = (a b −ab,ab −ab,ab −a b). 1 3 2 1 2 3 3 2 3 1 1 3 2 3 3 2 3 1 1 3 1 2 2 1",
          "C": "c = (ab −ab,ab −a b,a b −ab).",
          "D": "c = (ab −ab,a b −ab,ab −a b). 3 1 1 3 1 2 2 1 2 3 3 1 1 3 3 1 2 2 1 2 3 2 2 3"
        },
        "answer": "B",
        "explanation": "Ta có: c = [a,b] = (a b −ab,ab −ab,ab −a b)<br>2 3 3 2 3 1 1 3 1 2 2 1"
      },
      {
        "id": 19,
        "part": 1,
        "shortTag": "P1.19",
        "label": "Phần 1 - Câu 19",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt phẳng nào dưới đây nhận n = (3;1;−7) là một vectơ pháp tuyến?",
        "options": {
          "A": "3x + z + 7 = 0.",
          "B": "3x− y−7z + 1 = 0.",
          "C": "3x + y−7 = 0.",
          "D": "3x + y−7z−3 = 0."
        },
        "answer": "D",
        "explanation": "Phương trình mặt phẳng 3x + y−7z−3 = 0 có vectơ pháp tuyến là n = (3;1;−7)."
      },
      {
        "id": 20,
        "part": 1,
        "shortTag": "P1.20",
        "label": "Phần 1 - Câu 20",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (P):3x−2z + 2 = 0 đi qua điểm nào sau đây?",
        "options": {
          "A": "B(4;2;1).",
          "B": "A(1;2;4).",
          "C": "D(2;1;4).",
          "D": "C(2;4;−1)."
        },
        "answer": "C",
        "explanation": "Thay tọa độ điểm B(4;2;1) vào phương trình mặt phẳng (P) ta được:<br>3.4−2.1 + 2 = 0 ⇔ 12 = 0 (Vô lí) ⇒ Điểm B ∉ (P).<br>Thay tọa độ điểm A(1;2;4) vào phương trình mặt phẳng (P) ta được:<br>3.1−2.4 + 2 = 0 ⇔ −3 = 0 (Vô lí) ⇒ Điểm A ∉ (P).<br>Thay tọa độ điểm D(2;1;4) vào phương trình mặt phẳng (P) ta được:<br>3.2−2.4 + 2 = 0 ⇔ 0 = 0 (Thỏa mãn) ⇒ Điểm D ∈ (P).<br>Thay tọa độ điểm C(2;4;−1) vào phương trình mặt phẳng (P) ta được:<br>3.2−2.(−1) + 2 = 0 ⇔ 10 = 0 (Vô lí) ⇒ Điểm C ∉ (P)."
      },
      {
        "id": 21,
        "part": 1,
        "shortTag": "P1.21",
        "label": "Phần 1 - Câu 21",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(1;2;3). Mặt phẳng chứa điểm A và trục Oz có phương trình là",
        "options": {
          "A": "2x− y = 0.",
          "B": "x + y−z = 0.",
          "C": "3y−2z = 0.",
          "D": "3x−z = 0vô số."
        },
        "answer": "A",
        "explanation": "Gọi (P) là mặt phẳng chứa điểm A và trục Oz.<br>Oz đi qua điểm O(0;0;0) và có vectơ chỉ phương u = (0;0;1).<br>Mặt phẳng (P) có vectơ pháp tuyến n = [u,OA] = (−2;1;0) và đi qua điểm O(0;0;0) nên có<br>phương trình 2x− y = 0."
      },
      {
        "id": 22,
        "part": 1,
        "shortTag": "P1.22",
        "label": "Phần 1 - Câu 22",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(2;−1;−3) và mặt phẳng (P):3x−2y + 4z−5 = 0. Gọi (Q)là mặt phẳng đi qua A và song song với mặt phẳng (P). Mặt phẳng (Q) có phương trình là:",
        "options": {
          "A": "3x−2y + 4z−4 = 0",
          "B": "3x−2y + 4z + 4 = 0.",
          "C": "3x−2y + 4z + 5 = 0.",
          "D": "3x + 2y + 4z + 8 = 0."
        },
        "answer": "B",
        "explanation": "Mặt phẳng (P):3x−2y + 4z−5 = 0 có một vectơ pháp tuyến là n = (3;−2;4).<br>Do (Q)song song với (P) nên (Q)có vectơ pháp tuyến là n = (3;−2;4).<br>Phương trình mặt phẳng (Q): 3(x−2)−2(y + 1) + 4(z + 3) = 0 ⇔ 3x−2y + 4z + 4 = 0."
      },
      {
        "id": 23,
        "part": 1,
        "shortTag": "P1.23",
        "label": "Phần 1 - Câu 23",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai điểm A(4;0;1) và B(−2;2;3). Phương trình nào dưới đây là phương trình mặt phẳng trung trực của đoạn thẳng AB?",
        "options": {
          "A": "3x + y + z−6 = 0.",
          "B": "6x−2y−2z−1 = 0.",
          "C": "3x− y−z + 1 = 0.",
          "D": "3x− y−z = 0."
        },
        "answer": "D",
        "explanation": "Gọi I là trung điểm của đoạn thẳng AB, suy ra I(1;1;2).<br>Gọi (α) là mặt phẳng trung trực của đoạn thẳng AB<br>(α) đi qua I(1;1;2) và nhận AB = (−6;2;2) làm một vectơ pháp tuyến.<br>Phương trình mặt phẳng (α) là: −6(x−1) + 2(y−1) + 2(z−2) = 0 ⇔ 3x−y−z = 0."
      },
      {
        "id": 24,
        "part": 1,
        "shortTag": "P1.24",
        "label": "Phần 1 - Câu 24",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho điểm A(1;1;1) và hai mặt phẳng (P):2x−y + 3z−1 = 0, (Q):y = 0. Viết phương trình mặt phẳng (R) chứa A, vuông góc với cả hai mặt phẳng (P) và (Q).",
        "options": {
          "A": "3x−y + 2z−4 = 0.",
          "B": "3x + y−2z−2 = 0.",
          "C": "3x−2z = 0.",
          "D": "3x−2z−1 = 0."
        },
        "answer": "D",
        "explanation": "(P):2x−y + 3z−1 = 0 có vectơ pháp tuyến n = (2;−1;3).<br>(P)<br>(Q):y = 0 có vectơ pháp tuyến n = (0;1;0).<br>(Q)<br>Do mặt phẳng (R) vuông góc với cả hai mặt phẳng (P) và (Q) nên có vectơ pháp tuyến<br>n = [n,n] ⇒ n = (−3;0;2).<br>(R) (P) (Q) (R)<br>Vậy phương trình mặt phẳng (R) là: −3(x−1) + 0(y−1) + 2(z−1) = 0 ⇔ 3x−2z−1 = 0."
      },
      {
        "id": 25,
        "part": 1,
        "shortTag": "P1.25",
        "label": "Phần 1 - Câu 25",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, mặt phẳng đi qua ba điểm A(2;3;5), B(3;2;4) và C(4;1;2) có phương trình là",
        "options": {
          "A": "3x−y + 2z−4 = 0.",
          "B": "x + y−5 = 0.",
          "C": "y−z + 2 = 0.",
          "D": "2x + y−7 = 0."
        },
        "answer": "B",
        "explanation": "Ta có AB = (1;−1;−1), AC = (2;−2;−3) suy ra n = [AB,AC] = (1;1;0).<br>Vì AB; AC ⊂ (ABC) nên (ABC) sẽ nhận n = [AB,AC] làm một vectơ pháp tuyến.<br>Hiển nhiên (ABC) đi qua A(2;3;5) nên ta có phương trình của (ABC) là<br>1(x−2) + 1(y−3) + 0(z−5) = 0 ⇔ x + y−5 = 0."
      },
      {
        "id": 26,
        "part": 1,
        "shortTag": "P1.26",
        "label": "Phần 1 - Câu 26",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt phẳng (P):2x + y + z−2 = 0 song song với mặt phẳng nào dưới đây? 1 1",
        "options": {
          "A": "x + y− z−1 = 0.",
          "B": "x−y−z−2 = 0.",
          "C": "4x + 2y + 2z + 4 = 0.",
          "D": "2x + y + z−2 = 0. 2 2"
        },
        "answer": "C",
        "explanation": "1 1 2 1 1<br>Xét (P):2x + y + z−2 = 0 và (Q): x + y− z−1 = 0 có = ≠ ⇒ (P)không song<br>1 2 2 1 1 1<br>2 2<br>song với (Q).<br>2 1 1<br>Xét (P):2x + y + z−2 = 0 và (Q): x− y−z−2 = 0 có ≠ = ⇒ (P)không song song<br>2 1 −1 −1<br>với (Q).<br>2 1 1 −2<br>Xét (P):2x + y + z−2 = 0 và (Q): 4x + 2y + 2z−4 = 0 có = = ≠ ⇒ (P) song song<br>3 4 2 2 4<br>với (Q).<br>2 1 1 −2<br>Xét (P):2x + y + z−2 = 0 và (Q): 2x + y + z−2 = 0 có = = = ⇒ (P) trùng với<br>4 2 1 1 −2<br>(Q)."
      },
      {
        "id": 27,
        "part": 1,
        "shortTag": "P1.27",
        "label": "Phần 1 - Câu 27",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho mặt phẳng (P) có phương trình: mx + (m−1)y + z−10 = 0 và mặt phẳng (Q):2x + y−2z + 3 = 0. Với giá trị nào của dưới đây của m thì (P) và (Q)vuông góc với nhau",
        "options": {
          "A": "m = −2.",
          "B": "m = 2.",
          "C": "m = 1.",
          "D": "m = −1."
        },
        "answer": "C",
        "explanation": "Mặt phẳng (P): mx + (m−1)y + z−10 = 0 có VTPT n = (m;m−1;1)<br>Mặt phẳng (Q):2x + y−2z + 3 = 0 có VTPT n = (2;1;−2).<br>Hai mặt phẳng (P) và (Q)vuông góc ⇔ n ⊥ n ⇔ n.n ⇔ m.2 + (m−1).1 + 1.(−2) = 0<br>P Q P Q<br>⇔ 3m−3 = 0 ⇔ m = 1"
      },
      {
        "id": 28,
        "part": 1,
        "shortTag": "P1.28",
        "label": "Phần 1 - Câu 28",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai vectơ a = (2;1;−2) và vectơ b = (1;0;2). Tìm tọa độ vectơ clà tích có hướng của a và b.",
        "options": {
          "A": "c = (2;6;−1).",
          "B": "c = (4;6;−1).",
          "C": "c = (4;−6;−1).",
          "D": "c = (2;−6;−1)"
        },
        "answer": "D",
        "explanation": "Công thức tính tích có hướng trong hệ trục tọa độ Oxyz ta được: c = [a,b] = (2;−6;−1)."
      },
      {
        "id": 29,
        "part": 1,
        "shortTag": "P1.29",
        "label": "Phần 1 - Câu 29",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (P):2x + 3y + z + 2 = 0. Véctơ nào dưới đây là một véctơ pháp tuyến của (P)?",
        "options": {
          "A": "n (2;3;1).",
          "B": "n (2;3;2).",
          "C": "n (2;3;0).",
          "D": "n (2;0;3). 2 3 1 4"
        },
        "answer": "A",
        "explanation": "Véctơ pháp tuyến của (P) là n (2;3;1)."
      },
      {
        "id": 30,
        "part": 1,
        "shortTag": "P1.30",
        "label": "Phần 1 - Câu 30",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho mặt phẳng (P):x−2y + z−5 = 0. Điểm nào dưới đây thuộc (P)?",
        "options": {
          "A": "P(0;0;−5).",
          "B": "M (1;1;6).",
          "C": "Q(2;−1;5).",
          "D": "N(−5;0;0)."
        },
        "answer": "B",
        "explanation": "Ta có 1−2.1 + 6−5 = 0 nên M(1;1;6) thuộc mặt phẳng (P)."
      },
      {
        "id": 31,
        "part": 1,
        "shortTag": "P1.31",
        "label": "Phần 1 - Câu 31",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai điểm A(−1;2;0) và B(3;0;2). Mặt phẳng trung trực của đoạn thẳng AB có phương trình là",
        "options": {
          "A": "x + y + z−3 = 0.",
          "B": "2x− y + z + 2 = 0.",
          "C": "2x + y + z−4 = 0.",
          "D": "2x− y + z−2 = 0."
        },
        "answer": "D",
        "explanation": "Gọi I là trung điểm của đoạn thẳng AB. Suy ra I(1;1;1) và AB = (4;−2;2).<br>Phương trình mặt phẳng trung trực của đoạn thẳng AB đi qua trung điểm I của AB và nhận<br>AB làm vectơ pháp tuyến nên có phương trình là (α):2x− y + z−2 = 0."
      },
      {
        "id": 32,
        "part": 1,
        "shortTag": "P1.32",
        "label": "Phần 1 - Câu 32",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, phương trình nào dưới đây là phương trình mặt phẳng đi qua điểm M(1;2;−3) và có một vectơ pháp tuyến n = (1;−2;3).",
        "options": {
          "A": "x−2y + 3z + 12 = 0.",
          "B": "x−2y−3z−6 = 0.",
          "C": "x−2y + 3z−12 = 0.",
          "D": "x−2y−3z + 6 = 0."
        },
        "answer": "A",
        "explanation": "Phương trình mặt phẳng đi qua điểm M(1;2;−3) và có một vectơ pháp tuyến n = (1;−2;3) là<br>1(x−1)−2(y−2) + 3(z + 3) = 0 ⇔ x−2y + 3z + 12 = 0."
      },
      {
        "id": 33,
        "part": 1,
        "shortTag": "P1.33",
        "label": "Phần 1 - Câu 33",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai điểmA(5;−4;2)và B(1;2;3). Viết phương trình của mặt phẳng (P) đi qua A và vuông góc với đường thẳng AB.",
        "options": {
          "A": "2x−3y−z−20 = 0.",
          "B": "3x− y + 3z−25 = 0.",
          "C": "2x−3y−z + 8 = 0.",
          "D": "3x− y + 3z−13 = 0."
        },
        "answer": "A",
        "explanation": "Ta có: AB = (−4;6;2) = −2(2;−3;−1)<br>Mặt phẳng (P) đi qua A(5;−4;2) nhận n = (2;−3;−1) làm vectơ pháp tuyến.<br>Do đó, phương trình mặt phẳng (P): 2(x−5)−3(y + 4)−1(z−2) = 0 ⇔ 2x−3y−z−20 = 0"
      },
      {
        "id": 34,
        "part": 1,
        "shortTag": "P1.34",
        "label": "Phần 1 - Câu 34",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho ba điểm A(−1;1;1), B(2;1;0) C(1;−1;2). Mặt phẳng đi quaA và vuông góc với đường thẳng BC có phương trình là",
        "options": {
          "A": "3x + 2z + 1 = 0.",
          "B": "x + 2y−2z + 1 = 0.",
          "C": "x + 2y−2z−1 = 0.",
          "D": "3x + 2z−1 = 0."
        },
        "answer": "B",
        "explanation": "Ta có: BC = (−1;−2;2) là một véctơ pháp tuyến của mặt phẳng (P) cần tìm.<br>n = −BC = (1;2;−2) cũng là một véctơ pháp tuyến của mặt phẳng (P).<br>Vậy phương trình mặt phẳng (P)là x + 2y−2z + 1 = 0."
      },
      {
        "id": 35,
        "part": 1,
        "shortTag": "P1.35",
        "label": "Phần 1 - Câu 35",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm M (2;−1;4) và mặt phẳng (P):3x−2y + z + 1 = 0. Phương trình của mặt phẳng đi qua M và song song với mặt phẳng (P) là",
        "options": {
          "A": "2x−2y + 4z−21 = 0.",
          "B": "3x−2y + z−12 = 0.",
          "C": "2x−2y + 4z + 21 = 0.",
          "D": "3x−2y + z + 12 = 0"
        },
        "answer": "B",
        "explanation": "Phương trình của mặt phẳng đi qua M và song song với mặt phẳng (P) là<br>3(x−2)−2(y + 1) + (z−4) = 0 ⇔ 3x−2y + z−12 = 0."
      },
      {
        "id": 36,
        "part": 1,
        "shortTag": "P1.36",
        "label": "Phần 1 - Câu 36",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình mặt phẳng (P) đi qua 3 điểm M (−2;0;0), N(0;−1;0) và P(0;0;3) là",
        "options": {
          "A": "3x + 6y−2z−6 = 0.",
          "B": "2x + y−3z−1 = 0.",
          "C": "3x + 6y−2z = 0.",
          "D": "3x + 6y−2z + 6 = 0."
        },
        "answer": "D",
        "explanation": "Áp dụng phương trình mặt phẳn theo đoạn chắn, ta có phương trình mặt (MNP) là<br>x y z<br>+ + = 1 ⇔ 3x + 6y−2z + 6 = 0.<br>−2 −1 3"
      },
      {
        "id": 37,
        "part": 1,
        "shortTag": "P1.37",
        "label": "Phần 1 - Câu 37",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình mặt phẳng (P) đi qua 3 điểm A(−1;1;3), B(2;−1;3), C(2;2;−1) là.",
        "options": {
          "A": "8x + 12y + 9z−31 = 0.",
          "B": "8x + 12y + 9z + 31 = 0.",
          "C": "8x−12y + 9z−31 = 0.",
          "D": "8x + 12y−9z + 31 = 0."
        },
        "answer": "A",
        "explanation": "Mặt phẳng (ABC) nhận AB = (3;−2;0), AC = (3;1;−4) làm cặp vectơ chỉ phương nên có một<br>vectơ pháp tuyến là n = [AB;AC] = (8;12;9).<br>Mặt phẳng (ABC) đi qua điểm A(−1;1;3) và nhận n = (8;12;9) làm một vectơ pháp tuyến nên<br>có phương trình: 8(x + 1) + 12(y−1) + 9(z−3) = 0 ⇔ 8x + 12y + 9z−31 = 0."
      },
      {
        "id": 38,
        "part": 1,
        "shortTag": "P1.38",
        "label": "Phần 1 - Câu 38",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình mặt phẳng (P) đi qua hai điểm A(2;−1;0), B(1;1;2) và vuông góc với mặt phẳng (Q):x + y + 2z−3 = 0 là.",
        "options": {
          "A": "2x + 4y−3z−8 = 0.",
          "B": "2x + 4y−3z = 0.",
          "C": "2x + 4y−3z + 8 = 0.",
          "D": "2x−4y−3z = 0."
        },
        "answer": "B",
        "explanation": "Mặt phẳng (Q) có một vectơ pháp tuyến n = (1;1;2).<br>(Q)<br>Mặt phẳng (P) đi qua hai điểm A(2;−1;0), B(1;1;2) và vuông góc với mặt phẳng (Q) nên có<br>cặp vectơ chỉ phương là AB = (−1;2;2) và n = (1;1;2). Do đó (P) có vectơ pháp tuyến là:<br>(Q)<br>n = [AB;n] = (2;4;−3).<br>(P) (Q)<br>Mặt phẳng (P) đi qua điểm A(2;−1;0) và nhận n = (2;4;−3) làm một vectơ pháp tuyến nên<br>(P)<br>có phương trình: 2(x−2) + 4(y + 1)−3(z−0) = 0 ⇔ 2x + 4y−3z = 0."
      },
      {
        "id": 39,
        "part": 1,
        "shortTag": "P1.39",
        "label": "Phần 1 - Câu 39",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình mặt phẳng (P) đi qua điểm M (2;1;−2) và vuông góc với hai mặt phẳng (Q):x + y + 2z−3 = 0 và (R):x− y−z + 4 = 0 là.",
        "options": {
          "A": "x + 3y−2z + 9 = 0.",
          "B": "2x + y−2z−9 = 0.",
          "C": "x + 3y−2z−9 = 0.",
          "D": "2x + y−2z + 9 = 0."
        },
        "answer": "C",
        "explanation": "Mặt phẳng (Q), (R) có một vectơ pháp tuyến lần lượt là n = (1;1;2) và n = (1;−1;−1).<br>(Q) (R)<br>Mặt phẳng (P) đi qua điểm M (2;1;−2) và vuông góc với hai mặt phẳng (Q)và (R) nên có<br>cặp vectơ chỉ phương là n = (1;1;2) và n = (1;−1;−1). Do đó (P) có vectơ pháp tuyến là<br>(Q) (R)<br>n = [n;n] = (1;3;−2).<br>(P) (Q) (R)<br>Mặt phẳng (P) đi qua điểm M (2;1;−2) và nhận n = (1;3;−2) làm một vectơ pháp tuyến<br>(P)<br>nên có phương trình: 1(x−2) + 3(y−1)−2(z + 2) = 0 ⇔ x + 3y−2z−9 = 0."
      },
      {
        "id": 40,
        "part": 1,
        "shortTag": "P1.40",
        "label": "Phần 1 - Câu 40",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình mặt phẳng (P) đi qua điểm N(2;1;−2), song song với trục Oy và vuông góc với mặt phẳng (Q):x−2y + z−8 = 0 là",
        "options": {
          "A": "x− z −4 = 0.",
          "B": "x− z + 4 = 0.",
          "C": "2x + y−2z−4 = 0.",
          "D": "2x + y−2z + 4 = 0."
        },
        "answer": "A",
        "explanation": "Trục Oy có một vectơ chỉ phương là j = (0;1;0). Mặt phẳng (Q) một vectơ pháp tuyến là<br>n = (1;−2;1).<br>(Q)<br>Mặt phẳng (P) đi qua điểm N(2;1;−2), song song với trục Oy và vuông góc với mặt phẳng<br>(Q) nên có cặp vectơ chỉ phương là j = (0;1;0) và n = (1;−2;1). Do đó (P) có vectơ pháp<br>(Q)<br>tuyến là: n = [j;n] = (1;0;−1).<br>(P) (Q)<br>Mặt phẳng (P) đi qua điểm N(2;1;−2) và nhận n = (1;0;−1) làm một vectơ pháp tuyến nên<br>(P)<br>có phương trình: 1(x−2) + 0(y−1)−1(z + 2) = 0 ⇔ x−z−4 = 0."
      },
      {
        "id": 41,
        "part": 1,
        "shortTag": "P1.41",
        "label": "Phần 1 - Câu 41",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai điểm A(−1;0;1) và B(2;1;0). Phương trình mặt phẳng (P) đi qua A và vuông góc với AB là",
        "options": {
          "A": "(P): 3x + y−z + 4 = 0.",
          "B": "(P): 3x + y−z−4 = 0.",
          "C": "(P): 3x + y− z = 0.",
          "D": "(P): 2x + y−z + 1 = 0."
        },
        "answer": "A",
        "explanation": "Do mặt phẳng (P) vuông góc AB nên chọn một vectơ pháp tuyến n = AB = (3;1;−1).<br>(P)<br>Suy ra (P): 3(x + 1) + y−(z−1) = 0 ⇔ (P): 3x + y−z + 4 = 0."
      },
      {
        "id": 42,
        "part": 1,
        "shortTag": "P1.42",
        "label": "Phần 1 - Câu 42",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình mặt phẳng (P) đi qua điểm A(0;1;3) và song song với mặt phẳng (Q):2x−3z + 2025 = 0 là",
        "options": {
          "A": "(P):2x−3z + 9 = 0.",
          "B": "(P):2x−3z−9 = 0.",
          "C": "(P):2x−3z + 3 = 0.",
          "D": "(P):2x−3z−3 = 0."
        },
        "answer": "A",
        "explanation": "{ qua A(0;1;3)<br>Ta có (P):; ⇒ (P):2(x−0) + 0(y−1)−3(z−3) = 0<br>}VTPT: n<br>(P)<br>= n<br>(Q)<br>= (2;0;−3)<br>⇒ 2x−3z + 9 = 0."
      },
      {
        "id": 43,
        "part": 1,
        "shortTag": "P1.43",
        "label": "Phần 1 - Câu 43",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình của mặt phẳng (P) đi qua điểm B(2;1;−3), đồng thời vuông góc với hai mặt phẳng (Q):x + y + 3z−5 = 0, (R):2x− y + z−1 = 0 là",
        "options": {
          "A": "4x + 5y−3z + 22 = 0.",
          "B": "4x−5y−3z−12 = 0.",
          "C": "2x + y−3z−14 = 0.",
          "D": "4x + 5y−3z−22 = 0."
        },
        "answer": "D",
        "explanation": "{ n = (1;1;3)<br>Vectơ pháp tuyến của mặt phẳng (Q) và (R) lần lượt là; Q.<br>} n<br>= (2;−1;1)<br>{ (P) ⊥ (Q) { n ⊥ n<br>; ⇒; P Q ⇒ VTPT n = [n,n] = (4;5;−3).<br>(P) ⊥ (R)<br>}n ⊥ n<br>P Q R<br>P R<br>Mặt phẳng (P) đi qua điểm B(2;1;−3)và vectơ pháp tuyến n = (4;5;−3) có phương trình<br>4(x−2) + 5(y−1)−3(z + 3) = 0 ⇔ 4x + 5y−3z−22 = 0."
      },
      {
        "id": 44,
        "part": 1,
        "shortTag": "P1.44",
        "label": "Phần 1 - Câu 44",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt phẳng đi qua điểm M (1;−1;1), N(2;1;2) và song song với trục Oz có phương trình là",
        "options": {
          "A": "x + 2y + z = 0.",
          "B": "2x− y−3 = 0.",
          "C": "x + 2y + z−6 = 0.",
          "D": "2x− y + 5 = 0."
        },
        "answer": "B",
        "explanation": "Ta có: MN(1;2;1);k(0;0;1) ⇒ [MN,k] = (2;−1;0) là vectơ pháp tuyến của mặt phẳng.<br>Phương trình mặt phẳng đi qua điểm M (1;−1;1) có véc tơ pháp tuyến (2;−1;0) là:<br>2(x−1)−1(y + 1) = 0 ⇔ 2x− y−3 = 0."
      },
      {
        "id": 45,
        "part": 1,
        "shortTag": "P1.45",
        "label": "Phần 1 - Câu 45",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (P):2x− y + 2z + 11 = 0 và hai điểm A(1;0;−2),B(−1;−1;3). Mặt phẳng (Q) đi qua hai điểm A,B và vuông góc với mặt phẳng (P) có phương trình là",
        "options": {
          "A": "3x + 14y + 4z + 5 = 0.",
          "B": "2x− y + 2z−2 = 0.",
          "C": "2x− y + 2z + 2 = 0.",
          "D": "3x + 14y + 4z−5 = 0."
        },
        "answer": "A",
        "explanation": "Gọi n,n lần lượt là vectơ pháp tuyến của hai mặt phẳng (P) và (Q).<br>P Q<br>Ta có: AB = (−2;−1;5), n = (2;−1;2).<br>Vì (Q) đi qua A,B và (Q) ⊥ (P) nên n ⊥ AB, n ⊥ n<br>Q Q P<br>Chọn n = [AB,n] = (3;14;4).<br>Q P<br>Do dó phương trình của (Q) là: 3(x−1) + 14(y−0) + 4(z + 2) = 0 hay 3x + 14y + 4z + 5 = 0."
      },
      {
        "id": 46,
        "part": 2,
        "shortTag": "P2.1",
        "label": "Phần 2 - Câu 1",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(1;2;5) và mặt phẳng (α):x + 2y + 2z−6 = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Véc tơ n = (1;2;2) là một vectơ pháp tuyến của (α).",
          "b": "Phương trình mặt phẳng (β) đi qua điểm Avà song song với mặt phẳng (α) có phương trình x + 2y + 2z + 15 = 0",
          "c": "Phương trình mặt phẳng (γ) đi qua hai điểm O và A đồng thời vuông góc với mặt phẳng (α) có phương trình 2x− y = 0. (2 4)",
          "d": "Điểm M ∈ (α)sao cho A,O,M thẳng hàng thì tọa độ M;;2. 5 5"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "a) Đúng: Theo định nghĩa vectơ n = (1;2;2) là một vectơ pháp tuyến của (α).<br>b) Sai: Phương trình mặt phẳng (β) đi qua điểm Avà song song với mặt phẳng (α) nên:<br>n = (1;2;2), do đó(β) có phương trình: x−1 + 2(y−2) + 2(z−5) = 0 ⇔ x + 2y + 2z−15 = 0<br>c) Đúng: Phương trình mặt phẳng (γ) đi qua hai điểm O vàA đồng thời vuông góc với mặt<br>{ n ⊥ OA = (1;2;5)<br>phẳng (α) nên; β ⇒ n = [OA,n] = (−6;3;0) = −3(2;−1;0),<br>} n<br>⊥ n = (1;2;2) β<br>Do đó(β) có phương trình: 2x− y = 0.<br>d) Đúng: Điểm M ∈ (α)sao cho A,O,M thẳng hàng<br>Do M ∈ (α):x = 6−2y−2z ⇒ M(6−2b−2c;b;c)<br>Vì A,O,M thẳng hàng nên OM (6−2b−2c;b;c) = k.OA = (k;2k;5k)<br>{ 4<br>b =<br>{ 6−2b−2c = k 5<br>(2 4)<br>⇔; b = 2k ⇔; c = 2 ⇒ M;;2.<br>5 5<br>c = 5k 2<br>k =<br>} 5"
      },
      {
        "id": 47,
        "part": 2,
        "shortTag": "P2.2",
        "label": "Phần 2 - Câu 2",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục toạ độ Oxyz, cho ba điểm A(1;2;−2);B(2;1;2);C(3;−2;1). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Phương trình mặt phẳng (P) đi qua ba điểm A,B,C có một vectơ pháp tuyến là n = [AB,AC]",
          "b": "Phương trình mặt phẳng (P) là 13x + 5y−2z + 27 = 0.",
          "c": "Phương trình mặt phẳng đi qua điểm A(1;2;−2) và nhận BC làm véc tơ pháp tuyến có dạng: 1(x + 1)x−3(y + 2)−1(z−2) = 0.",
          "d": "Phương trình mặt phẳng đi qua ba điểm E;F;K lần lượt là hình chiếu vuông góc của A lên x y z trục Ox;Oy;Ozcó phương trình + − = 1. 1 2 2"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "{ AB = (1;−1;4)<br>a) Đúng: Vì; ⇒ AB ≠ kAC ⇒ n = [AB,AC] = (13;5;−2).<br>} AC = (2;−4;3) P<br>b) Sai: Phương trình mặt phẳng (P) là<br>13(x−1) + 5(y−2)−2(z + 2) = 0 ⇔ 13x + 5y−2z−27 = 0.<br>c) Sai: Phương trình mặt phẳng đi qua điểm A(1;2;−2) và nhận BC = (1;−3;−1) làm véc tơ<br>pháp tuyến có dạng: 1(x−1)x−3(y−2)−1(z + 2) = 0.<br>d) Đúng: Tọa độ ba điểm E(1;0;0);F(0;2;0);K(0;0;−2) lần lượt là hình chiếu vuông góc của<br>x y z<br>A(1;2;−2) lên trục, nên mặt phẳng (EFK)có phương trình + − = 1.<br>1 2 2"
      },
      {
        "id": 48,
        "part": 2,
        "shortTag": "P2.3",
        "label": "Phần 2 - Câu 3",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho bốn điểm A(1;2;1),B(−2;1;3),C(2;−1;1) và D(0;3;1). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Phương trình mặt phẳng (ABC) là 3x + y + 5z−10 = 0.",
          "b": "Bốn điểm A,B,C,D tạo thành tứ diện.",
          "c": "Mặt phẳng (P) chứa AB và song song với CD có một vectơ pháp tuyến là a = (4;−2;7).",
          "d": "Có 2 mặt phẳng đi qua 2 điểm A,B sao cho khoảng cách từ C và D đến mặt phẳng đó bằng nhau và 2 mặt phẳng này đều đi qua điểm M (1;2;1)."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Ta có AB = (−3;−1;2),AC = (1;−3;0) suy ra [AB,AC] = (6;2;10).<br>Suy ra phương trình mặt phẳng (ABC) là 3x + y + 5z−10 = 0.<br>b) Đúng: Ta có 3.0 + 3 + 5.1−10 = −2 ≠ 0 nên D ∉ (ABC).<br>Do đó bốn điểm A,B,C,D tạo thành tứ diện.<br>c) Sai: Ta có mặt phẳng (P) chứa AB và song song với CD có một vectơ pháp tuyến là<br>n = [AB,CD] = (−8;−4;−14).<br>Vì n không cùng phương với a nên a = (4;−2;7) không là vectơ pháp tuyến của (P).<br>d) Đúng: Trường hợp 1: (P) qua hai điểm A, B và song song với CD, khi đó (P) có vectơ<br>pháp tuyến là [AB,CD] = (−8;−4;−14) và A ∈ (P) ⇒ (P):4x + 2y + 7z−15 = 0.<br>Vì 4.1 + 2.2 + 7.1−15 = 0 nên M ∈ (P).<br>Trường hợp 2: (Q) qua hai điểm A, B cắt CD tại trung điểm I của đoạn CD và ta có<br>I(1;1;1) ⇒ AI(0;−1;0) nên vectơ pháp tuyến của (Q) là [AB,AI] = (2;0;3) nên phương trình<br>(Q):2x + 3z−5 = 0. Vì 2.1 + 3.1−5 = 0 nên M ∈ (Q)."
      },
      {
        "id": 49,
        "part": 2,
        "shortTag": "P2.4",
        "label": "Phần 2 - Câu 4",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho A(2;0;0),B(0;2;0),C(0;0;3). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Một vectơ pháp tuyến của mặt phẳng (ABC) là n = (3;3;2).",
          "b": "Mặt phẳng đi qua C và vuông góc với đường thẳng AB có phương trình là x− y = 0.",
          "c": "Mặt phẳng chứa đường thẳng AB và vuông góc với (ABC) có phương trình là: x + y−3z + 2 = 0..",
          "d": "Gọi M(a;b;c) ∈ (Oyz)sao cho MA + MB + MC nhỏ nhất thì khi đó 3(a + b) + c = 5."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "x y z<br>a) Đúng: Phương trình mặt phẳng (ABC): + + = 1 ⇔ 3x + 3y + 2z−6 = 0.<br>2 2 3<br>Suy ra một vectơ pháp tuyến của mặt phẳng (ABC) là n = (3;3;2).<br>b) Đúng: Gọi (α) là mặt phẳng qua C và vuông góc với AB.<br>Mặt phẳng (α) có vectơ pháp tuyến là AB = (−2;2;0) = −2(1;−1;0).<br>Phương trình của (α) là 1(x−0)−1(y−0) + 0(z−3) = 0 ⇔ x− y = 0.<br>c) Sai: Gọi (β) là mặt phẳng mặt phẳng chứa đường thẳng ABvà vuông góc với (ABC) có<br>vectơ pháp tuyến của (β) là: n = [AB,n] = (4;4;−12) = 4(1;1;−3).<br>Phương trình của (β) là: 1(x−2) + 1(y−0)−3(z−0) = 0 ⇔ x + y−3z−2 = 0.<br>(2 2)<br>d) Sai: Gọi G là trọng tâm của tam giác ABC,ta có G;;1.<br>3 3<br>Vì MA + MB + MC = 3 MG,suy ra MA + MB + MC ⇔ MG.<br>min min<br>(2)<br>Mà M ∈ Oyz ⇒ M phải là hình chiếu của G lên Oyz ⇒ M 0;;1.<br>⇒ 3(a + b) + c = 2 + 1 = 3."
      },
      {
        "id": 50,
        "part": 2,
        "shortTag": "P2.5",
        "label": "Phần 2 - Câu 5",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt phẳng (P):(4−",
        "statements": {
          "a": "x−(a + 3)y + z + 1 = 0 và mặt phẳng (Q):3x−4y + z + 3 = 0. Xét tính đúng sai của các khẳng định sau: a) Mặt phẳng (P) và mặt phẳng (Q) song song với nhau khi a = 1.",
          "b": "Mặt phẳng (P) và mặt phẳng (Q) vuông góc với nhau khi a = 2.",
          "c": "Không có giá trị nào của a để hai mặt phẳng trên trùng nhau.",
          "d": "Mặt phẳng vuông góc với cả hai mặt phẳng trên có vectơ pháp tuyến là n = (1;−1;−7)."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "Đáp án: a) Đúng, b) Sai, c) Đúng, d) Đúng<br>a) Đúng: Khi a = 1 ta có n = (3;−4;1) và n = (3;−4;1). Vì n = n và 1 ≠ nên (P)∥(Q).<br>P Q P Q<br>b) Sai: Khi a = 2 thì ta có n = (2;−5;1) và n = (3;−4;1).<br>P Q<br>Vì n.n = 2.3 + (−5).(−4) + 1.1 = 27 ≠ 0 nên (P) và (Q) không vuông góc với nhau.<br>P Q<br>4−a −(a + 3) 1 1<br>c) Đúng: Hai mặt phẳng (P) và (Q) trùng nhau khi = = =.<br>3 −4 1 3<br>Vì 1 ≠ nên không có giá trị nào của a để hai mặt phẳng trên trùng nhau.<br>d) Đúng: Ta có: n.n = (4−a).1 + (a + 3).1−7 = 0 và n.n = 3.1 + 4.1−7 = 0.<br>P Q<br>Vậy n = (1;−1;−7) là vectơ pháp tuyến của mặt phẳng vuông góc với cả (P) và (Q)."
      },
      {
        "id": 51,
        "part": 2,
        "shortTag": "P2.6",
        "label": "Phần 2 - Câu 6",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz cho ba điểm A(3;5;−1), B(7;x;1), C(9;2;y), D(−1;2;3). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Toạ độ điểm M trung điểm của đoạn AD là (1;7;1).",
          "b": "Toạ độ điểm E để tứ giác OADE là hình bình hành là (−4;−3;4).",
          "c": "Toạ độ điểm C để tam giácACD vuông tại A là (9;2;11).",
          "d": "Để ba điểmA, B, C thẳng hàng thì giá trị của biểu thức x + y bằng 5."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "(7)<br>a) Sai: M trung điểm của đoạn ADsuy ra toạ độ M là 1;;1.<br>b) Đúng: Giả sử E(x;y;z)<br>{ x = −4<br>Tứ giác OADE là hình bình hành ⇔ AD = OE ⇔; y = −3 ⇒ E(−4;−3;4).<br>}z = 4<br>c) Sai: Ta có: AC = (6;−3;y + 1),AD = (−4;−3;4)<br>Tam giácACD vuông tại A suy ra AC ⊥ AD ⇔ AC.AD = 0<br>11 (11)<br>⇔ 6(−4) + (−3).(−3) + (y + 1).4 = 0 ⇔ y = nên C 9;2;.<br>4 4<br>d) Đúng: Ta có: AB = (4;x−5;2), AC = (6;−3;y + 1)<br>{ 2<br>k =<br>{ 4 = k.6<br>Ba điểm A, B, C thẳng hàng ⇔ AB = k.AC ⇔; x−5 = k(−3) ⇔; x = 3 ⇒ x + y = 5.<br>2 = k(y + 1) y = 2"
      },
      {
        "id": 52,
        "part": 2,
        "shortTag": "P2.7",
        "label": "Phần 2 - Câu 7",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyzcho tam giác ABC có A(1;−1;1), B(2;1;−2), C(0;0;1). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Toạ độ trọng tâm G của tam giác ABC là (1;0;0).",
          "b": "Toạ độ điểm E ∈ Ox sao cho AE ⊥ BC là (−1;0;0).",
          "c": "Toạ độ điểm M thoả mãn AM = AB− AC là (3;0;2). (5 4 8)",
          "d": "Tìm tọa độ trực tâm H của tam giác ABC có toạ độ là;−;. 9 9 9"
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Toạ độ trọng tâm G của tam giác ABC là (1;0;0).<br>b) Đúng: Vì E ∈ Ox ⇒ E(x;0;0) mà AE ⊥ BC ⇔ AE.BC = 0<br>Ta có AE = (x−1;1;−1),BC = (−2;−1;3)<br>AE.BC = 0 ⇔ (x−1)(−2) + 1.(−1)−1.3 = 0 ⇔ x = −1 ⇒ E(−1;0;0).<br>c) Sai: Giả sử M(x;y;z) ⇒ AM = (x−1;y + 1;z−1)<br>{ x−1 = 2 { x = 3<br>AB− AC = CB = (2;1;−3) ⇒ AM = AB− AC ⇔; y + 1 = 1 ⇔; y = 0 ⇒ M(3;0;−2).<br>}z−1 = −3 }x = −2<br>d) Đúng: Giả sử H(x;y;z). Ta có: BC = (−2;−1;3),AC = (−1;1;0),[BC,AC] = (−3;−3;−3)<br>AH = (x−1;y + 1;z−1),BH = (x−2;y−1;z + 2),CH = (x;y;z−1).<br>{ AH ⊥ BC { AH.BC = 0<br>Khi đó:; BH ⊥ AC ⇔; BH.AC = 0<br>} BC,AC,CH dong phang } [BC,AC].CH = 0<br>{ 5<br>x =<br>{ −2(x−1)−(y + 1) + 3(z−1) = 0<br>4 (5 4 8)<br>⇔; −(x−2) + (y−1) = 0 ⇔; y = − ⇒ H<br>;−;<br>9 9 9 9<br>−3x−3y−3(z−1) = 0<br>} 8<br>z =<br>} 9"
      },
      {
        "id": 53,
        "part": 2,
        "shortTag": "P2.8",
        "label": "Phần 2 - Câu 8",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz với ba vecto đơn vị i, j,k, cho A(1;1;2), B(2;−1;0),u = (1;−2;−1). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Tích có hướng của hai veccto i và j là vecto k.",
          "b": "[u,i] = (0;1;2).",
          "c": "[AB,u] = (6;1;0).",
          "d": "[OA,OB] = (2;4;−3)."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "{ i = (1;0;0)<br>a) Đúng: Ta có; ⇒ [i, j] = (0;0;1) = k.<br>} j = (0;1;0)<br>{ u = (1;−2;−1)<br>b) Sai: Ta có; ⇒ [u,i] = (0;−1;2).<br>} i = (1;0;0)<br>{ AB = (1;−2;−2)<br>c) Sai: Ta có; ⇒ [AB,u] = (−2;−1;0).<br>} u = (1;−2;−1)<br>{ OA = (1;1;2)<br>d) Đúng: Ta có; ⇒ [OA,OB] = (2;4;−3).<br>} OB = (2;−1;0)"
      },
      {
        "id": 54,
        "part": 2,
        "shortTag": "P2.9",
        "label": "Phần 2 - Câu 9",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho ba điểm A(−1;1;0), B(1;−1;2),C(1;−2;1). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Một vecto pháp tuyến của mặt phẳng (ABC) là [AB,AC].",
          "b": "Vecto n = (1;2;3) là một vecto pháp tuyến của mặt phẳng (ABC).",
          "c": "Vecto u = (1;1;0) là một vecto pháp tuyến của mặt phẳng đi qua O và chứa đưởng thẳng AB.",
          "d": "Vecto v = (1;2;3) là một vecto pháp tuyến của mặt phẳng song song với hai đưởng thẳng AB và OC."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "a) Đúng: Ta có một vecto pháp tuyến của mặt phẳng (ABC) là [AB,AC].<br>{ AB = (2;−2;2)<br>b) Sai: Ta có; ⇒ [AB,AC] = (4;2;−2) là một vecto pháp tuyến của mặt phẳng<br>} AC = (2;−3;1)<br>4 2<br>(ABC). Mà n = (1;2;3) không cùng phương với [AB,AC] do ≠ nên n = (1;2;3) không là<br>1 2<br>một vecto pháp tuyến của mặt phẳng (ABC).<br>d) Đúng: Ta có một vecto pháp tuyến của mặt phẳng đi qua O và chứa đưởng thẳng AB là<br>[OA,OB] = (2;2;0). Mà n = (1;1;0) cùng phương với [OA,OB] nên n = (1;1;0) cũng là một<br>vecto pháp tuyến của mặt phẳng đi qua O và chứa đưởng thẳng AB.<br>d) Sai: Ta có một vecto pháp tuyến của mặt phẳng song song với hai đưởng thẳng AB và OC là<br>[AB,OC] = (2;0;−2). Mà v = (1;2;3) không cùng phương với [AB,OC] nên v = (1;2;3)<br>không phải là một vecto pháp tuyến của mặt phẳng song song với hai đưởng thẳng AB và OC."
      },
      {
        "id": 55,
        "part": 2,
        "shortTag": "P2.10",
        "label": "Phần 2 - Câu 10",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Cho các điểm A(1;−2;0);B(2;−1;1);C(1;1;2). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Phương trình mặt phẳng (ABC) là x + 2y−3z−3 = 0.",
          "b": "Phương trình mặt phẳng (α) qua A và vuông góc với BC là x−2y−z−5 = 0.",
          "c": "Phương trình mặt phẳng trung trực (β) của đoạn AC là 6y + 4z−1 = 0.",
          "d": "Phương trình mặt phẳng (γ) chứa trục Ox và điểm C là 2y + z = 0."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "a) Sai: Ta có AB = (1;1;1);AC = (0;3;2)<br>Vectơ pháp tuyến của (ABC) là n = [AB,AC] = (−1;−2;3).<br>Phương trình mặt phẳng (ABC) là: −1(x−1)−2(y + 2) + 3z = 0 hay x + 2y−3z + 3 = 0<br>b) Đúng: Vectơ pháp tuyến của (α) là n = BC = (−1;2;1).<br>Phương trình mặt phẳng (α) là: −1(x−1) + 2(y + 2) + 1z = 0 hay x−2y−z−5 = 0<br>(−1)<br>c) Đúng: Ta có trung điểm của đoạn AC là M 1;;1<br>Vectơ pháp tuyến của (β) là n = AC = (0;3;2).<br>(1)<br>Phương trình mặt phẳng (β) là: 0(x−1) + 3<br>y + + 2(z−1) = 0 hay 6y + 4z−1 = 0<br>d) Sai: Ta có i = (1;0;0);OC = (1;1;2)<br>Vectơ pháp tuyến của (γ) là n = [i,OC] = (0;−2;1).<br>Phương trình mặt phẳng (ABC) là: 0x−2y + 1z = 0 hay 2y−z = 0"
      },
      {
        "id": 56,
        "part": 2,
        "shortTag": "P2.11",
        "label": "Phần 2 - Câu 11",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, Cho tam giác ABC với A(1;1;1),B(1;2;2),C(4;1;0). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "AB = (0;1;1).",
          "b": "Tích có hướng của hai vectơ AB,AC là a = (−1;3;−3).",
          "c": "BC,b = (6;−2;−4) là cặp vectơ chỉ phương của mặt phẳng(ABC).",
          "d": "Vectơ pháp tuyến của mặt phẳng (AOB) là: n = (1;1;2)."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "a) Đúng: AB = (x − x;y − y;z − z) = (0;1;1)<br>B A B A B A<br>b) Đúng: Ta có: AB = (0;1;1),AC = (3;0;−1) và a = [AB,AC] = (−1;3;−3)<br>c) Sai: Ta có: BC = (3;−1;−2)<br>Do đó b = 2BC nên BC,b là hai vectơ cùng phương. Do đó BC,b không phải là cặp vectơ chỉ<br>phương của mặt phẳng (ABC).<br>d) Sai: Mặt phẳng (AOB) có cặp vectơ chỉ phương OA = (1;1;1),OB = (1;2;2) nên có vectơ pháp<br>tuyến là: n = [OA,OB] = (0;−1;1)."
      },
      {
        "id": 57,
        "part": 2,
        "shortTag": "P2.12",
        "label": "Phần 2 - Câu 12",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, Cho các điểm A(1;−2;−1),B(4;1;2),C(2;3;1). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "AB = (3;3;3).",
          "b": "Ba điểm A,B,C không thẳng hàng.",
          "c": "Mặt phẳng đi qua 3 điểm A,B,C có vectơ pháp tuyến là: a = (3;1;−4).",
          "d": "Mặt phẳng (α) đi qua A đồng thời song song với Oy và đường thẳng BC có vectơ pháp tuyến là: n = (1;0;2)."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "a) Đúng: AB = (x − x;y − y;z − z) = (3;3;3)<br>B A B A B A<br>b) Đúng: Hai vectơ AB = (3;3;3),AC = (1;5;2) không cùng phương nên 3 điểm A,B,C không<br>thẳng hàng.<br>c) Đúng: Mặt phẳng (ABC) có cặp vectơ chỉ phương AB = (3;3;3),AC = (1;5;2) nên có vectơ<br>pháp tuyến là: b = [AB,AC] = (−9;−3;12). Do đó a = (3;1;−4) cũng là một vectơ pháp tuyến<br>của mặt phẳng (ABC).<br>d) Sai: Vectơ j = (0;1;0) có giá song song mặt phẳng (α); vectơ BC = (−2;2;−1) có giá song<br>song mặt phẳng (α). Hai vectơ j,BC không cùng phương.<br>Do đó: mặt phẳng (α) có cặp vectơ chỉ phương j = (0;1;0),BC = (−2;2;−1) nên mặt phẳng (α)<br>có vectơ pháp tuyến là: n = [j,BC] = (−1;0;2)."
      },
      {
        "id": 58,
        "part": 2,
        "shortTag": "P2.13",
        "label": "Phần 2 - Câu 13",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ tọa độOxyz, cho 3 điểm A(a;0;0), B(0;b;0), C(0;0;c) với a,b,c đều dương. Xét tính đúng sai của các khẳng định sau: x y z",
        "statements": {
          "a": "Mặt phẳng (ABC) có phương trình + + = 1 a b c",
          "b": "Mặt phẳng (ABC) đi qua điểm G(1;2;3) sao cho G là trọng tâm của ΔABC là 6x + 3y + 2z + 18 = 0",
          "c": "Mặt phẳng (ABC) đi qua điểm H(1;1;1) sao cho H là trực tâm ΔABClà x + y + z−3 = 0",
          "d": "Mặt phẳng (ABC) đi qua điểm M (2;−2;3) sao cho độ dài OA,OB,OCtheo thứ tự tạo thành m cấp số cộng có công sai bằng 2. Khoảng cách từ gốc tọa độ O tới mặt phẳng (α) bằng với n m là phân số tối giản, khi đó T = m + n = 19. n"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "a) Đúng: Theo phương trình mặt phẳng theo đoạn chắn ta có mặt phẳng (ABC) có phương trình<br>x y z<br>+ + = 1<br>a b c<br>{ a<br>= 1<br>{ a = 3<br>b) Sai: Vì G là trọng tâm ΔABC ta có; = 2 ⇔; b = 6<br>c = 9<br>= 3<br>}3<br>x y z<br>Mặt phẳng (ABC) có phương trình + + = 1 ⇔ 6x + 3y + 2z−18 = 0<br>3 6 9<br>{ 1 1 1<br>{ H ∈ (ABC) a + b + c = 1 { a = 3<br>c) Đúng: Vì H(1;1;1) là trực tâm ΔABC ta có; HA.BC = 0 ⇔; −b + c = 0 ⇔; b = 3<br>HB.AC = 0 a−c = 0 } c = 3<br>Phương trình (ABC)là: x + y + z−3 = 0<br>d) Đúng: Giả sử mặt phẳng (α) cắt tia Ox tại điểm có hoành độ bằng a (a > 0) khi đó phương<br>x y z<br>trình mặt phẳng (α) có dạng + + = 1.<br>a a + 2 a + 4<br>2 −2 3<br>Do (α) đi qua điểm M (2;−2;3) nên ta có + + = 1 ⇔ a = 2.<br>a a + 2 a + 4<br>Vậy (α) cắt Ox,Oy,Oz lần lượt tại A(2;0;0), B(0;4;0),C(0;0;6).<br>Gọi d = d(O,(ABC)).<br>1 1 1 1 1 1 1 49<br>Áp dụng công thức tính nhanh ta có = + + = + + =<br>d<sup>2</sup> OA<sup>2</sup> OB<sup>2</sup> OC<sup>2</sup> 22 42 62 144<br>144 12<br>⇒ d<sup>2</sup> = ⇒ d =. Vậy: T = m + n = 19.<br>49 7"
      },
      {
        "id": 59,
        "part": 2,
        "shortTag": "P2.14",
        "label": "Phần 2 - Câu 14",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho ba điểm A(1;1;1);B(1;−2;3);C(2;−1;2). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Ba điểm A,B,C đã cho thẳng hàng.",
          "b": "Có vô số mặt phẳng đi qua ba điểm A,B,C đã cho.",
          "c": "Mặt phẳng (ABC) có một vectơ pháp tuyến n = (1;2;3).",
          "d": "Mặt phẳng (ABC) có phương trình là x + 2y + 3z−6 = 0."
        },
        "answers": {
          "a": false,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "0 −3<br>a) Sai: Ta có: AB = (0;−3;2);AC = (1;−2;1)và ≠ ⇒ AB;AC không cùng phương. Do đó ba<br>1 −2<br>điểm A,B,C không thẳng hàng.<br>b) Sai: Ba điểm A,B,C không thẳng hàng nên tồn tại một mặt duy nhất qua ba điểm này. Vậy<br>c) Đúng: Ta có vectơ pháp tuyến n = [AB,AC] = (1;2;3).<br>d) Đúng: Mặt phẳng (ABC) đi qua điểm A(1;1;1) và nhận vectơ n = (1;2;3) làm một vectơ pháp<br>tuyến là: 1(x−1) + 2(y−1) + 3(z−1) = 0hay (ABC):x + y + z−6 = 0."
      },
      {
        "id": 60,
        "part": 2,
        "shortTag": "P2.15",
        "label": "Phần 2 - Câu 15",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(2;0;−3) và các u = (−1;−2;5), v = (3;−1;−2). Mặt phẳng (α) đi qua A và nhận u,v làm cặp vectơ chỉ phương. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Một vectơ pháp tuyến của mặt phẳng (α) là n = (9;13;7).",
          "b": "Phương trình mặt phẳng (α):9x + 13y + 7z−2 = 0.",
          "c": "Mặt phẳng (α) đi qua điểm M(1;−2;−3).",
          "d": "Mặt phẳng (R) đi qua M song song với (α) có phương trình x + 2y + 5z + 18 = 0."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": false
        },
        "explanation": "a) Đúng: Mặt phẳng (α) nhận u,v làm cặp vectơ chỉ phương nên (α) có một vectơ pháp tuyến<br>là n = [u,v] = (9;13;7).<br>b) Sai: Phương trình mặt phẳng (α):9(x−2) + 13y + 7(z + 3) = 0 ⇔ 9x + 13y + 7z + 2 = 0.<br>c) Sai: Thay điểm M(1;−2;−3) vào phương trình mặt phẳng (α):9x + 13y + 7z + 2 = 0 ta thấy<br>không thỏa mãn.<br>d) Sai: Mặt phẳng có dạng (R):9x + 13y + 7z + d = 0(d ≠ 2)<br>Vì mặt phẳng qua M(1;−2;−3) nên thay vào ta suy ra d = 38 (thỏa mãn)<br>Vậy phương trình mặt phẳng(R):9x + 13y + 7z + 38 = 0"
      },
      {
        "id": 61,
        "part": 2,
        "shortTag": "P2.16",
        "label": "Phần 2 - Câu 16",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho điểm M(−2;1;3). Mặt phẳng (P) đi qua điểm M và cắt ba trục tọa độ tại các điểm A,B,C khác gốc tọa độ O sao cho tam giác ABC có trực tâm M. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Hình chiếu của điểm M trên trục Ox là H(−2;0;0).",
          "b": "Mặt phẳng (P) có một véctơ pháp tuyến là n = (2;−1;3).",
          "c": "Phương trình mặt phẳng (P) là 2x− y−3z + 14 = 0",
          "d": "Mặt phẳng (Q): x− y + z−3 = 0 vuông góc với (P)"
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng:<br>b) Đúng:<br>Do tứ diện OABC vuông tại O và H(−2;0;0) là trực tâm nên OH ⊥ (ABC), hay OH ⊥ (P)<br>Mặt phẳng (P) có một véctơ pháp tuyến là HO = (2;−1;3).<br>c) Sai:Phương trình mặt phẳng (P) đi qua M(−2;1;3) có một véctơ pháp tuyến HO = (2;−1;3)<br>là: 2(x + 2)−(y−1)−3(z−3) = 0 ⇔ 2x− y−3z + 14 = 0<br>d) Đúng: Mặt phẳng (Q) có một véctơ pháp tuyến là n = (1;−1;1).<br>Mặt phẳng (P) có một véctơ pháp tuyến là n = (2;−1;−3).<br>⇒ n.n = 1.2 + (−1).(−1) + 1.(−3) = 0 ⇒ (P) ⊥ (Q)<br>1 2"
      },
      {
        "id": 62,
        "part": 2,
        "shortTag": "P2.17",
        "label": "Phần 2 - Câu 17",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho các điểm A(1;1;3),B(−1;3;2),C(−1;2;3). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "VectơAB và AC cùng phương. (−1 8)",
          "b": "Điểm G;2; là trọng tâm tam giác ABC. 3 3",
          "c": "Mặt phẳng (ABC) có phương trình là: x + ay + bz + c = 0. Khi đó a + b + c = 4",
          "d": "Điểm M(1;2;3) thuộc mặt phẳng (ABC)."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "a) Sai: AB = (−2;2;−1);AC = (−2;1;0)<br>−2 1 0<br>Ta có ≠ ≠. Do đó AB và AB không cùng phương.<br>−2 2 −1<br>b) Đúng:<br>c) Sai: AB = (−2;2;−1);AC = (−2;1;0) ⇒ [AB;AC] = (1;2;2)<br>Mặt phẳng (ABC) đi qua A và nhận vecto n = (1;2;2) là một vectơ pháp tuyến.<br>Phương trình mặt phẳng (ABC) là 1(x−1) + 2(y−1) + 2(z−3) = 0<br>⇒ (ABC):x + 2y + 2z−9 = 0. Khi đó a = 2;b = 2;c = −9 ⇒ a + b + c = −5.<br>d) Sai: Tọa độ điểm M không thỏa mãn phương trình mặt phẳng (ABC) vì 1 + 2.2 + 2.3−9 ≠ 0.<br>Do đó M không thuộc mặt phẳng (ABC)."
      },
      {
        "id": 63,
        "part": 2,
        "shortTag": "P2.18",
        "label": "Phần 2 - Câu 18",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(2;−3;1) và mặt phẳng (α):x + 2y−z + 1 = 0. (P) là mặt phẳng đi qua A và song song với (α). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mọi mặt phẳng có pt dạng x + 2y−z + m = 0 (m là tham số thực) đều song song với (α).",
          "b": "(P) vuông góc với mặt phẳng (Q):2x−3y−4z = 0. a 1",
          "c": "(P) có phương trình dạng ax + by + cz + d = 0 với =. d 5",
          "d": "(P) đi qua điểm M(1;2;−1)."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "a) Sai: Nếu m = 1 thì mặt phẳng đó sẽ trùng với mặt phẳng (α).<br>b) Đúng: Do (P)//(α) ⇒ Vectơ pháp tuyến lần lượt là n = (1;2;−1); n = (2;−3;−4).<br>P Q<br>Ta có: n.n = 1.2 + 2.(−3) + (−1).(−4) = 0 ⇒ (P) ⊥ (Q).<br>P Q<br>c) Đúng: Do (P)//(α) ⇒ Vectơ pháp tuyến n = (1;2;−1) và (P) đi qua điểm A(2;−3;1)<br>a 1<br>⇒ (P):1.(x−2) + 2.(y + 3)−1.(z−1) = 0 ⇒ (P):x + 2y− z + 5 = 0 ⇒ a = 1;d = 5 ⇒ =.<br>d 5<br>d) Sai: Theo trên ta biết (P):x + 2y−z + 5 = 0<br>Thay tọa độ điểm M(1;2;−1) vào pt của (P) ta được: 1 + 2.2−(−1) + 5 = 0 (vô lí).<br>Vậy (P) không đi qua M."
      },
      {
        "id": 64,
        "part": 2,
        "shortTag": "P2.19",
        "label": "Phần 2 - Câu 19",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(0;2;−2) và các mặt phẳng (α):x + 2y−2z−1 = 0, (β):x + 2y−2z + 5 = 0.",
        "statements": {
          "a": "Gọi (P) là mặt phẳng đi qua điểm A và song song với (α). Giao điểm của (P) và trục Ox là I(8;0;0).",
          "b": "Mặt phẳng song song và cách đều 2 mặt phẳng (α),(β) có phương trình là (α):x + 2y−2z + 2 = 0.",
          "c": "Mặt phẳng đối xứng với mặt phẳng (α) qua mặt phẳng (β) có phương trình là x + 2y−2z + 11 = 0.",
          "d": "Gọi H là hình chiếu của điểm A trên mặt phẳng (α). Mặt phẳng đi qua điểm H và song song với mặt phẳng (Oyz) có phương trình là 9x + 7 = 0."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": true,
          "d": true
        },
        "explanation": "a) Đúng: (P):1.(x−0) + 2.(y−2)−2.(z + 2) = 0 ⇔ (P):x + 2y−2z−8 = 0.<br>Thay y = 0, z = 0 vào phương trình (P) ⇒ x = 8. Vậy (P) cắt trục Ox tại I(8;0;0).<br>b) Đúng: Trên (α) lấy điểm M(1;0;0), trên (β) lấy điểm N(−5;0;0). Trung điểm MN là<br>E(−2;0;0).<br>Gọi (P) là mặt phẳng cần tìm ⇒ (P) đi qua E và song song với (α)<br>⇒ (P):1.(x + 2) + 2.(y−0)−2.(z−0) = 0 ⇒ (P):x + 2y−2z + 2 = 0.<br>c) Đúng: Trên (α) lấy điểm M(1;0;0), trên (β) lấy điểm N(−5;0;0). Gọi F là điểm đối xứng<br>với M qua N ⇒ F(−11;0;0).<br>Gọi (Q) là mặt phẳng đối xứng với mặt phẳng (α) qua mặt phẳng (β) ⇒ (Q) đi qua F và<br>song song với (α) ⇒ (Q):1.(x + 11) + 2.(y−0)−2.(z−0) = 0 ⇒ (Q):x + 2y−2z + 11 = 0.<br>{ x = t<br>d) Đúng: Gọi Δ là đường thẳng đi qua điểm A và vuông góc với (α) ⇒ Δ:; y = 2 + 2t.<br>z = −2−2t<br>Ta có H = Δ ∩ (α). Xét phương trình: t + 2.(2 + 2t)−2.(−2−2t)−1 = 0<br>7 (7 4 4)<br>⇒ t = − ⇒ H −;;−.<br>9 9 9 9<br>Gọi (R) là mặt phẳng đi qua điểm H và song song với mặt phẳng (Oyz) ⇒ n = i = (1;0;0)<br>(7) (4) (4)<br>⇒ (R):1.<br>x + + 0.<br>y− + 0.<br>z + = 0 ⇒ (R):9x + 7 = 0.<br>9 9 9"
      },
      {
        "id": 65,
        "part": 2,
        "shortTag": "P2.20",
        "label": "Phần 2 - Câu 20",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ toạ độ Oxyz, cho mặt phẳng (P):x−2y + 2z−5 = 0 và hai điểm A(−3;0;1),B(0;−1;3). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Vectơ pháp tuyến của mặt phẳng (P)là n = (−1;2;−2).",
          "b": "Điểm A,B nằm về cùng phía của mặt phẳng (P).",
          "c": "Mặt phẳng (Q) chứa A,B và vuông góc với mặt phẳng (P) đi qua điểm M(−2;−2;3).",
          "d": "Mặt phẳng (R) đi qua A song song với (P) có phương trình x−2y + 2z−1 = 0."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "a) Đúng: Từ phương trình mặt phẳng (P):x−2y + 2z−5 = 0 suy ra một vectơ pháp tuyến của<br>(P) làn = (1;−2;2). Vậy vectơ n = (−1;2;−2) cũng là vectơ pháp tuyến<br>b) Sai: Đặt f (x,y,z) = x−2y + 2z−5. Khi đó f (A).f (B) < 0 ⇒ A,B nằm về 2 phía của (P)<br>c) Đúng: AB = (3;−1;2); n = (1;−2;2). Vectơ pháp tuyến của (Q) là n = [AB,n] = (2;−4;−5)<br>P P<br>Phương trình mặt phẳng (Q) có dạng 2x−4y−5z + 11 = 0<br>Thay toạ độ điểm M(−2;−2;3) vào phương trình mặt phẳng (Q) ta thấy thỏa mãn.<br>d) Sai: Phương trình mặt phẳng có dạng (R):x−2y + 2z + d = 0(*)<br>Vì mặt phẳng (R) đi qua điểm A(−3;0;1) nên thay toạ độ điểm Avào phương trình (*) ta được<br>d = 1. Vậy (R):x−2y + 2z + 1 = 0."
      },
      {
        "id": 66,
        "part": 3,
        "shortTag": "P3.1",
        "label": "Phần 3 - Câu 1",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, mặt phẳng đi qua điểm M(1;0;0) và song song với mặt phẳng (α):2x− y−1 = 0 có dạng −x + by + cz + d = 0. Tính b + c−3d.",
        "answer": "-2,5",
        "acceptedAnswers": [
          "-2,5",
          "-2.5"
        ],
        "kqCells": [
          "-",
          "2",
          ",",
          "5"
        ],
        "explanation": "Gọi (P) là mặt phẳng cần tìm. Do (P)//(α) ⇒ n = n = (2;−1;0).<br>P α<br>Và (P) đi qua điểm M ⇒ (P):2.(x−1)−1.(y + 0) + 0.(z + 0) = 0 ⇒ (P):2x− y−2 = 0.<br>Vậy b =,c = 0,d = 1 ⇒ b + c−3d = −2,5."
      },
      {
        "id": 67,
        "part": 3,
        "shortTag": "P3.2",
        "label": "Phần 3 - Câu 2",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho ba điểm A(2;1;−1), B(−1;0;4), C(0;−2;−1). Phương trình mặt phẳng qua A và vuông góc với BC có dạng x + by + cz + d = 0. Tính b + c + d.",
        "answer": "-12",
        "acceptedAnswers": [
          "-12",
          "-9"
        ],
        "kqCells": [
          "-",
          "1",
          "2",
          ""
        ],
        "explanation": "Mặt phẳng vuông góc với BC có véc tơ pháp tuyến là n = BC = (1;−2;−5).<br>Phương trình mặt phẳng qua A và vuông góc với BC là 1(x−2)−2(y−1)−5(z + 1) = 0 hay<br>x−2y−5z−5 = 0.<br>Vậy b = −2,c = −2,d = −5 ⇒ b + c + d = −9.<br><b>Lưu ý đính chính:</b> Từ phương trình <i>x − 2y − 5z − 5 = 0</i> suy ra <i>b = −2, c = −5, d = −5 ⇒ b + c + d = −12</i> (tài liệu gốc in nhầm <i>c = −2</i> nên tính ra <i>−9</i>; hệ thống chấp nhận cả <b>−12</b> và <b>−9</b>)."
      },
      {
        "id": 68,
        "part": 3,
        "shortTag": "P3.3",
        "label": "Phần 3 - Câu 3",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai điểm A(2;0;1) và 2 vectơ a = (1;−3;2), b = (−1;−1;2). Một mặt phẳng (Q) chứa điểm A và nhận a, blàm cặp vecto chỉ phương có phương trình là ax + by + cz−3 = 0. Tính a + b + c.",
        "answer": "3",
        "acceptedAnswers": [
          "3"
        ],
        "kqCells": [
          "3",
          "",
          "",
          ""
        ],
        "explanation": "Vectơ pháp tuyến của mặt phẳng (Q) là n = [b,a] = (4;4;4).<br>(Q)<br>Phương trình mặt phẳng (Q) là: 4(x−2) + 4(y−0) + 4(z−1) = 0 ⇔ 4x−8 + 4y + 4z−4 = 0<br>⇔ 4x + 4y + 4z−12 = 0 ⇔ x + y + z−3 = 0. Suy ra a = b = c = 1 nên a + b + c = 3."
      },
      {
        "id": 69,
        "part": 3,
        "shortTag": "P3.4",
        "label": "Phần 3 - Câu 4",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian tọa độ Oxyz, phương trình mặt phẳng (P) đi qua ba điểm A(1;0;−2),B(−3;1;1),C(5;5;−5) có dạng ax + by + cz + 5 = 0, khi đó giá trị của biểu thức a + b + c bằng",
        "answer": "7",
        "acceptedAnswers": [
          "7"
        ],
        "kqCells": [
          "7",
          "",
          "",
          ""
        ],
        "explanation": "Ta có AB = (−4;1;3),AC = (4;5;−3) ⇒ [AB,AC] = (−18;0;−24).<br>Phương trình mặt phẳng (P) đi qua điểm A(1;0;−2) và có một vectơ pháp tuyến<br>n = − [AB,AC] = (3;0;4) là: 3(x−1) + 4(z + 2) = 0 ⇔ 3x + 4z + 5 = 0.<br>Suy ra a = 3,b = 0,c = 4 nên a + b + c = 7."
      },
      {
        "id": 70,
        "part": 3,
        "shortTag": "P3.5",
        "label": "Phần 3 - Câu 5",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với trục hệ tọa độ Oxyz, cho điểm H(1;2;3) là trực tâm của ΔABC với A,B,C là ba điểm lần lượt nằm trên các trục Ox,Oy,Oz (khác gốc tọa độ). Phương trình mặt phẳng đi qua ba điểm A,B,C có dạng mx + ny + pz−14 = 0, (m,n,p ∈ ′). Khi đó m + n + p bằng bao nhiêu?",
        "answer": "6",
        "acceptedAnswers": [
          "6"
        ],
        "kqCells": [
          "6",
          "",
          "",
          ""
        ],
        "explanation": "Giả sử: A(a;0;0),B(0;b;0),C(0;0;c)<br>⇒ AH(1−a;2;3); BH(1;2−b;3); BC(0;−b;c);AC(−a;0;c)<br>{ AH.BC = 0 { −2b + 3c = 0<br>Do H là trực tâm tam giác ABC nên ta có:; ⇔;<br>}BH.AC = 0 }−a + 3c = 0<br>x y z 1 2 3<br>Phương trình mặt phẳng (ABC): + + = 1 và do H ∈ (ABC) ⇒ + + = 1.<br>a b c a b c<br>{ {<br>a = 2b<br>−2b + 3c = 0<br>a = 14<br>2b<br>Do đó ta có hệ phương trình:; −a + 3c = 0 ⇔; c = ⇔; b = 7.<br>1 2 3 14<br>+ + = 1 1 2 9 c =<br>}a b c + + = 1 } 3<br>}2b b 2b<br>x y 3z<br>Phương trình mặt phẳng (ABC): + + = 1 ⇔ x + 2y + 3z−14 = 0.<br>14 7 14<br>Vậy m + n + p = 6."
      },
      {
        "id": 71,
        "part": 3,
        "shortTag": "P3.6",
        "label": "Phần 3 - Câu 6",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz cho hai điểm A(−1;2;0),B(1;1;3) và mặt phẳng (P):x−2y + 3z−5 = 0. Phương trình của mặt phẳng đi qua hai điểm A, B, đồng thời vuông góc (P) là 2x−ay−bz + c = 0. Giá trị của biểu thức a + 2b + 3c bằng bao nhiêu?",
        "answer": "24",
        "acceptedAnswers": [
          "24"
        ],
        "kqCells": [
          "2",
          "4",
          "",
          ""
        ],
        "explanation": "Gọi n là một vectơ pháp tuyến của mặt phẳng (Q) đi qua hai điểm A, B, đồng thời vuông góc<br>(P). Khi đó n ⊥ AB và n ⊥ n với AB(2;−1;3) và n (1;−2;3) là một vectơ pháp tuyến của<br>P P<br>mặt phẳng (P).<br>Chọn n = [AB;n] = (3;−3;−3). Do đó n (1;−1;−1) cũng là vectơ pháp tuyến của mặt phẳng<br>P Q<br>(Q) mà mặt phẳng (Q) đi qua điểm A(−1;2;0) nên có phương trình là<br>(x + 1)−(y−2)−z = 0 ⇔ x− y−z + 3 = 0 ⇔ 2x−2y−2z + 6 = 0.<br>Suy ra a = 2,b = 2,c = 6 nên a + 2b + 3c = 24."
      },
      {
        "id": 72,
        "part": 3,
        "shortTag": "P3.7",
        "label": "Phần 3 - Câu 7",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (α):x + by + cz + d = 0 vuông góc với mặt phẳng (β):x + 2y + 3z + 4 = 0 và chứa giao tuyến của hai mặt phẳng (P):x + 3y + z−7 = 0, (Q):x− y + z + 1 = 0. Khi đó d bằng bao nhiêu?",
        "answer": "3",
        "acceptedAnswers": [
          "3"
        ],
        "kqCells": [
          "3",
          "",
          "",
          ""
        ],
        "explanation": "Ta có vectơ chỉ phương của (β),(P),(Q) lần lượt là: n (1;2;3), n (1;3;1), n (1;−1;1).<br>1 2 3<br>Khi đó: n = [n,[n,n]] = (−8;16;−8) = −8(1;−2;1).<br>α 1 2 3<br>Gọi A(x;y;z) ∈ d là giao tuyến của (P) và (Q) khi đó toạ độ điểm A thoả mãn hệ:<br>{ x + 3y + z−7 = 0 { 3y + z−7 = 0 { y = 2<br>; và cho x = 0 ta có; ⇔; khi đó A(0;2;1)<br>}x− y + z + 1 = 0 }−y + z + 1 = 0 }z = 1<br>Do (α) chứa giao tuyến của (P) và (Q) nên (α) đi qua A(0;2;1).<br>Phương trình (α):x−2(y−2) + z−1 = 0 ⇔ x−2y + z + 3 = 0. Vậy d = 3."
      },
      {
        "id": 73,
        "part": 3,
        "shortTag": "P3.8",
        "label": "Phần 3 - Câu 8",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz cho mặt phẳng (α) đi qua điểm M(1;2;3) và cắt các tia Ox,Oy,Oz lần lượt tại A,B,C sao cho độ dài OA,OB,OC theo thứ tự lập thành cấp số nhân có công bội bằng 3. Phương trình mặt phẳng (α) có dạng Ax + By + z + D = 0, (A,B,D ∈ ℝ). Giá trị của biểu thức A + B + D bằng bao nhiêu?",
        "answer": "-6",
        "acceptedAnswers": [
          "-6"
        ],
        "kqCells": [
          "-",
          "6",
          "",
          ""
        ],
        "explanation": "Gọi A(a;0;0),B(0;b;0),C(0;0;c), điều kiện a > 0;b > 0;c > 0<br>Độ dài OA,OB,OCtheo thứ tự lập thành cấp số nhân có công bội bằng 3<br>{ OB = 3OA { b = 3a { b = 3a<br>Suy ra; ⇔; ⇔; nên A(a;0;0),B(0;3a;0),C(0;0;9a)<br>}OC = 3OB<br>c = 3b }c = 9a<br>x y z<br>Khi đó phương trình mặt phẳng (α) là: + + = 1.<br>a 3a 9a<br>1 2 3<br>Vì M(1;2;3) ∈ (α)nên + + = 1 ⇔ 6 = 3a ⇔ a = 2<br>a 3a 9a<br>x y z<br>⇒ (α): + + = 1 ⇔ (α):9x + 3y + z−18 = 0 ⇒ A = 9,B = 3,D = −18 ⇒ A + B + D = −6<br>2 6 18"
      },
      {
        "id": 74,
        "part": 3,
        "shortTag": "P3.9",
        "label": "Phần 3 - Câu 9",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Cho hai điểm A(3;−1;2), B(2;3;−3), C(−2;1;−2) và mặt phẳng(Oyz). Gọi M(a;b;c) là điểm thuộc mặt phẳng (Oyz) sao MA.MB + MB.MC + MC.MA có giá trị nhỏ nhất. Tính tổng a−2b + c.",
        "answer": "-3",
        "acceptedAnswers": [
          "-3"
        ],
        "kqCells": [
          "-",
          "3",
          "",
          ""
        ],
        "explanation": "Gọi I(a;b;c), sao cho IA + IB + IC = 0 ⇒ I là trong tâm ΔABC ⇒ I(1;1;−1).<br>Ta có: MA.MB + MB.MC + MC.MA<br>() () () () () ()<br>= MI + IA. MI + IB + MI + IB. MI + IC + MI + IC. MI + IA<br>() ()<br>= 3MI<sup>2</sup> + 2MI IA + IB + IC + IA.IB + IB.IC + IC.IA, (mà IA + IB + IC = 0)<br>()<br>= 3MI<sup>2</sup> + IA.IB + IB.IC + IC.IA<br>Vì điểm I,A,B,C cố định nên IA.IB + IB.IC + IC.IA có giá trị không đổi.<br>Để MA.MB + MB.MC + MC.MA có giá trị min ⇔ MI min mà I cố định nên M là hình chiếu<br>của I lên(Oyz) suy ra M(0;1;−1). Vậy a−2b + c = 0−2.1−1 = −3."
      },
      {
        "id": 75,
        "part": 3,
        "shortTag": "P3.10",
        "label": "Phần 3 - Câu 10",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d1_p3_q10_combined.png",
        "question": "Manhattanhenge (Hình 1) là một sự kiện diễn ra khi Mặt Trời mọc hoặc khi Mặt Trời lặn nằm thẳng hàng với các tuyến phố Đông - Tây thuộc mạng lưới đường phố chính tại quận Manhattan của thành phố New York. Khi mặt trời lặn, tia sáng song song mặt đất lệch một góc khoảng 38° so với hướng tây (Hình 2). Hình 1 Hình 2 Giả sử mặt tiền các tòa nhà hai bên đường nằm trong 2 mặt phẳng song song cách nhau 30m và vuông góc với mặt đất. Biết rằng mặt phẳng phía bắc đi qua gốc O của hệ trục Oxyz, với tia Oz vuông góc với mặt đất và hướng lên trên. Phương trình mặt phẳng thứ hai có dạng m (Q):x + ay + bz + c = 0 với c =. Tính m + n. sinn°",
        "answer": "68",
        "acceptedAnswers": [
          "68"
        ],
        "kqCells": [
          "6",
          "8",
          "",
          ""
        ],
        "explanation": "Gọi A,B là giao điểm của mp (Q) với trục Ox và Oy, H là hình chiếu vuông góc của O lên<br>AB.<br>Vì khoảng cách giữa hai mặt phẳng bằng 30m nên OH = 30<br>• OH 30<br>Theo giả thiết ta có góc OAH = 38° nên khi đó OA = =<br>sin38° sin38°<br>x = −OH.cos52° = −30.cos52°, y = −OHcos380 = −30cos380<br>H H<br>(30)<br>Tọa độ điểm A −;0;0, H(−30cos52°;−30cos38°;0) và chọn một vectơ pháp tuyến là<br>sin38°<br>(cos38°)<br>n = 1;;0<br>cos52°<br>Mặt phẳng (Q) đi qua A vuông góc OH nhận n làm véc tơ pháp tuyến có phương trình:<br>(30) cos38° cos38° 30<br>x + + y = 0 ⇔ x + y + = 0<br>sin38° cos52° cos52° sin38°<br>Vậy m + n = 68."
      },
      {
        "id": 76,
        "part": 3,
        "shortTag": "P3.11",
        "label": "Phần 3 - Câu 11",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d1_p3_q12_p21_1.png",
        "question": "Một sân vận động được xây dựng theo mô hình là hình chóp cụt OAGD.BCFE có hai đáy song song với nhau. Mặt sân OAGD là hình chữ nhật và được gắn hệ trục Oxyznhư hình vẽ (đơn vị trên mỗi trục tọa độ là mét). Mặt sân OAGD có chiều dài OA = 100m, chiều rộng OD = 60m và tọa độ điểm B(10;10;8). Giả sử phương trình tổng quát của mặt phẳng (OACB) có dạng ax + y + cz + d = 0. Tính giá trị biểu thức a + c + d.",
        "answer": "-10",
        "acceptedAnswers": [
          "-10"
        ],
        "kqCells": [
          "-",
          "1",
          "0",
          ""
        ],
        "explanation": "Gắn hình chóp cụt vào hệ trục Oxyz ta có:<br>O(0;0;0), A(100;0;0), G(100;60;0), D(0;60;0), B(10;10;8)<br>Do OA = (100;0;0),OB = (10;10;8) nên n = [OA,OB] = (0;−100;1000).<br>Suy ra mặt phẳng (OACB) có vectơ pháp tuyến là n = (0;1;−10).<br>Phương trình tổng quát của mặt phẳng (OACB) là y−10z = 0.<br>Do đó a = 0,c = −10,d = 0. Vậy a + c + d = 0−10 + 0 = −10."
      },
      {
        "id": 77,
        "part": 3,
        "shortTag": "P3.12",
        "label": "Phần 3 - Câu 12",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d1_p3_q12_p21_2.png",
        "question": "Một phần sân trường được định vị bởi các điểm A,B,C,D, như hình vẽ: Bước đầu chúng được lấy “thăng bằng” để có cùng độ cao, biết ABCD là hình thang vuông ở A và B với độ dài AB = 25m, AD = 15m, BC = 18m. Do yêu cầu kĩ thuật, khi lát phẳng phàn sân trường phải thoát nước về góc sân ở C nên người ta lấy độ cao ở các điểm B, C, D xuống thấp hơn so với độ cao ở A là 10cm, a cm, 6cm tương ứng. Giá trị của a bằng bao nhiêu?",
        "answer": "17,2",
        "acceptedAnswers": [
          "17,2",
          "17.2"
        ],
        "kqCells": [
          "1",
          "7",
          ",",
          "2"
        ],
        "explanation": "Chọn hệ trục tọa độ Oxyz sao cho O ≡ A, tia Ox ≡ AD; tia Oy ≡ AB.<br>Khi đó: A(0;0;0); B(0;2500;0); C(1800;2500;0);D(1500;0;0).<br>Khi hạ độ cao các điểm ở các điểm B, C, D xuống thấp hơn so với độ cao ở A là 10cm,<br>a cm 6cm tương ứng ta có các điểm mới B′(0;2500;−10); C′(1800;2500;−a);<br>D′(1500;0;−6). Theo bài ra có bốn điểm A; B′; C′; D′ đồng phẳng.<br>Phương trình mặt phẳng (AB′D′):x + y + 250z = 0.<br>Do C′(1800;2500;−a) ∈ (AB′D′) nên ta có 1800 + 2500−250a = 0 ⇔ a = 17,2.<br>Vậy a = 17,2cm."
      },
      {
        "id": 78,
        "part": 3,
        "shortTag": "P3.13",
        "label": "Phần 3 - Câu 13",
        "topic": "B1.D1: Viết PT Mặt phẳng",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d1_p3_q13_p21_3.png",
        "question": "Trong tiết thể dục học về kĩ thuật chuyền bóng hơi, Nam và An đang tập chuyền bóng cho nhau, Nam ném bóng cho An đỡ, quả bóng bay lên cao nhưng lại lệch sang phải của Nam và rơi xuống vị trí cách An 0,5m và cách Nam 4,5m được mô tả bằng hình vẽ bên dưới: 1 Biết rằng quỹ đạo của quả bóng nằm trong mặt phẳng (α):ax + y + cx + d = 0 và vuông góc 2 với mặt đất. Khi đó giá trị của a + c + d bằng (kết quả làm tròn đến hàng phần chục).",
        "answer": "-4,5",
        "acceptedAnswers": [
          "-4,5",
          "-4.5",
          "-4",
          "-4,0"
        ],
        "kqCells": [
          "-",
          "4",
          ",",
          "5"
        ],
        "explanation": "Chọn hệ trục như hình vẽ. Gọi M là điểm mà quả bóng chạm đất.<br>Khi đó x = 0,5, y = 4,52 −0,52 = 2 5<br>M M<br>Vì (α) ⊥ (Oxy) nên (α) có vectơ chỉ phương k = (0;0;1).<br>()<br>Mà (α) có véc tơ chỉ phương OM = 0,5;2 5;0<br>()<br>Khi đó vec tơ pháp tuyến của (α) là n = [k,OM] = −2 5;0,5;0.<br>Vậy (α):−2 5x + 0,5y = 0 nên a = −2 5;b = 0,5;c = 0;d = 0 ⇒ a + b + c + d ≈ −4,5."
      }
    ]
  },
  "oxyz_b1_d2": {
    "id": "oxyz_b1_d2",
    "category": "oxyz",
    "badge": "BÀI 1 • DẠNG 2",
    "title": "Bài 1 - Dạng 2: Khoảng cách từ một điểm đến mặt phẳng & Ứng dụng",
    "shortTitle": "B1.D2: Khoảng cách mặt phẳng",
    "baiTitle": "Bài 1. Phương trình mặt phẳng",
    "dangTitle": "Dạng 2: Tính khoảng cách từ một điểm đến một mặt phẳng",
    "subtitle": "Bài 1. Phương trình mặt phẳng • Gồm Lý thuyết, Phương pháp, 9 Ví dụ tự luận & 34 câu Trắc nghiệm (P1: 12 • P2: 11 • P3: 11)",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">BÀI 1 • DẠNG 2</span>\n    <h4>Bài 1. Phương trình mặt phẳng — Dạng 2: Tính khoảng cách từ một điểm đến một mặt phẳng</h4>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-subhead\">Dạng 2: Tính khoảng cách từ một điểm đến một mặt phẳng</div>\n    <div class=\"oxyz-theory-subhead\">Phương pháp: Tính khoảng cách từ điểm M (x;y;z) đến mặt phẳng (P):Ax + By + Cz + D = 0 như</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0</div>\n    <div class=\"oxyz-theory-line\">sau:</div>\n    <div class=\"oxyz-theory-subhead\">Bước 1: Tìm M (x;y;z); viết phương trình mặt phẳng (P):Ax + By + Cz + D = 0.</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0</div>\n    <div class=\"oxyz-theory-subhead\">Bước 2: Tính khoảng cách từ điểm M đến mặt phẳng (P):Ax + By + Cz + D = 0 theo công thức:</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">Ax + By + Cz + D</div>\n    <div class=\"oxyz-theory-line\">d (M,(P)) = 0 0 0</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div>\n    <div class=\"oxyz-theory-subhead\">Lưu ý: d(M,(Oxy)) = (z)<sup>2</sup> và d(M,Ox) = (y)<sup>2</sup> + (z)<sup>2</sup></div>\n    <div class=\"oxyz-theory-line\">0 0 0 0 0</div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Bài tập tự luận 1",
        "question": "Trong không gian Oxyz, cho mặt phẳng (Q):x + 2y + 2z−3 = 0 và mặt phẳng (P) không qua O, song song mặt phẳng (Q) và d((P);(Q)) = 1. Viết phương trình mặt phẳng (P)",
        "figure": null,
        "explanation": "Gọi phương trình mặt phẳng (P) có dạng x + 2y + 2z + d = 0 Với d ≠ 0;d ≠ −3.<br>d + 3 [d = 0<br>Có d((P);(Q)) = 1 ⇔ = 1 ⇒.<br>12 + 22 + 22 d = −6<br>Kết hợp điều kiện ⇒ (P)có dạng: x + 2y + 2z−6 = 0."
      },
      {
        "id": 2,
        "label": "Bài tập tự luận 2",
        "question": "Trong không gian Oxyz, cho mặt phẳng (P):2x−2y + z−5 = 0. Viết phương trình mặt phẳng (Q) song song với mặt phẳng (P), cách (P) một khoảng bằng 3 và cắt trục Ox tại điểm có hoành độ dương.",
        "figure": null,
        "explanation": "Ta có (Q)//(P)nên mặt phẳng (Q):2x−2y + z + C = 0; C ≠ −5, chọn M(0;0;5) ∈ (P)<br>5 + C [C = 4<br>Ta có d((P);(Q)) = d(M;(Q)) = = 3 ⇔<br>22 + (−2)<sup>2</sup> + 12 C = −14<br>Với C = 4 ⇒ (Q):2x−2y + z + 4 = 0 khi đó (Q) cắt Ox tại điểm M (−2;0;0)có hoành độ<br>âm nên trường hợp này (Q) không thỏa đề bài.<br>Với C = −14 ⇒ (Q):2x−2y + z−14 = 0 khi đó (Q)cắt Ox tại điểm M (7;0;0)có hoành độ<br>dương do đó (Q):2x−2y + z−14 = 0 thỏa đề bài.<br>Vậy phương trình mặt phẳng (Q):2x−2y + z−14 = 0."
      },
      {
        "id": 3,
        "label": "Bài tập tự luận 3",
        "question": "Cho hình lăng trụ tam giác đều ABC.DEF biết rằng AB = 6,AD = 2. Gọi ba điểm M, N, P lần lượt là trung điểm DE, DF, BC. Lập hệ trục tọa độ Oxyz như hình bên. Gọi điểm S thỏa mãn hệ thức SA + 2SB + SC = 0. Tính khoảng cách từ điểm S đến mặt phẳng (MNP).",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d2_tuluan_q4_p23_1.png",
        "explanation": "() ()<br>Ta có P(0;0;0), A 3 3;0;0, B(0;3;0), C(0;−3;0), E(0;3;2), F(0;−3;2), D 3 3;0;2<br>(3 3 3) (3 3 −3)<br>Suy ra M;;2, N;;2.<br>2 2 2 2<br>(−9 3) ()<br>Ta có [PM,PN] = 6;0; ⇒ n = 4;0;−3 3.<br>Phương trình mặt phẳng (MNP) là 4x−3 3z = 0.<br>(3 3 −3) (3 3 3)<br>Gọi I, J lần lượt là trung điểm cạnh AC, IB ⇒ I;;0, J;;0.<br>2 2 4 4<br>Ta có SA + 2SB + SC = 0 ⇔ 2SI + 2SB = 0 ⇔ 4SJ = 0 ⇔ S ≡ J.<br>(3 3 3)<br>Do đó S;;0.<br>4 4<br>Vậy khoảng cách từ điểm S đến mặt phẳng (MNP) bằng d = 3 3."
      },
      {
        "id": 4,
        "label": "Bài tập tự luận 4",
        "question": "Cho hình lập phương ABCD.EFGH cạnh 1. Điểm M được cho thỏa mãn hệ thức vectơ AM + AE = 3CD. Tính khoảng cách từ điểm M đến mặt phẳng (EBD).",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d2_tuluan_q4_p23_2.png",
        "explanation": "Ta có A(0;0;0),AE = (0;0;1), CD = (−1;0;0).<br>Đặt M(a;b;c), suy ra AM = (a;b;c).<br>{ a + 0 = −3 { a = −3<br>Đề cho AM + AE = 3CD, ta được; b + 0 = 0 ⇒; b = 0. Suy ra M(−3;0;−1).<br>c + 1 = 0 c = −1<br>} }<br>Mặt phẳng (EBD), phương trình theo đoạn chắn là x + y + z−1 = 0.<br>Khoảng cách từ điểm M đến mặt phẳng (EBD) bằng<br>Ax + By + Cz + D −3 + 0−1−1 5 3<br>d(M;(EBD))<br>= = =.<br>A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup> 12 + 12 + 12 3<br>5 3<br>Vậy khoảng cách bằng."
      },
      {
        "id": 5,
        "label": "Bài tập tự luận 5",
        "question": "Phần mềm điều khiển máy in 3D cho biết đầu in phun của máy đang đặt tại điểm M(3;4;24) (đơn vị: cm). Tính khoảng cách từ đầu in đến khay đặt vật in có phương trình z−4 = 0.",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d2_tuluan_q5_p24_1.png",
        "explanation": "Ta có phương trình mặt phẳng là (P):z−4 = 0<br>24−4<br>Khoảng cách từ đầu in đến khay đặt vật in là:d(M,(P)) = = 20."
      },
      {
        "id": 6,
        "label": "Bài tập tự luận 6 (Bài 5)",
        "question": "Phần mềm của máy tiện kĩ thuật số CNC (Computer Numerical Control) đang biểu diễn một chi tiết máy như hình vẽ dưới đây: a) Tìm tọa độ các điểm A, B, C, D. b) Viết phương trình mặt phẳng (ABC) và mặt phẳng (ACD). c) Cho biết đầu mũi tiện đang đặt tại điểm M(0;60;40). Tính khoảng cách từ điểm M đến mặt phẳng (ABC).",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d2_tuluan_q5_p24_2.png",
        "explanation": "a) Ta có A(70;0;0), B(70;0;−60), C(70;80;0), D(50;0;0).<br>b) Mặt phẳng (ABC) đi qua A(70;0;0) và vuông góc với trục Ox nên có vectơ pháp tuyến là:<br>i = (1;0;0).<br>Suy ra mặt phẳng (ABC) có phương trình là: 1(x−70) = 0 ⇔ x−70 = 0.<br>Mặt phẳng (ACD) đi qua A(70;0;0) và vuông góc với trục Oz nên có vectơ pháp tuyến là:<br>k = (0;0;1).<br>Suy ra mặt phẳng (ACD) có phương trình là: 1(z−0) = 0 ⇔ z = 0.<br>0−70<br>c) Khoảng cách từ điểm M đến mặt phẳng (ABC) là: d(M,(ABC)) = = 70."
      },
      {
        "id": 7,
        "label": "Bài tập tự luận 7 (Bài 6)",
        "question": "Trong không gian Oxyz (đơn vị trên mỗi trục tọa độ là mét), một ngôi nhà như hình vẽ dưới đây có sàn nhà nằm trên mặt phẳng (Oxy). Hai mái nhà lần lượt nằm trên các mặt phẳng (P):x−2y + 5 = 0 và (Q):x−2y−3z + 20 = 0. Hỏi là chiều cao của ngôi nhà tính từ sàn nhà lên nóc nhà (điểm cao nhất của mái nhà) là bao nhiêu?",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d2_tuluan_q7_p24_3.png",
        "explanation": "{ x−2y + 5 = 0<br>Những điểm thuộc đường nóc nhà có tọa độ thỏa mãn hệ;.<br>}x−2y−3z + 20 = 0<br>Từ phương trình thứ nhất chọn x = −5 ⇒ y = 0. Thay vào phương trình còn lại ta được z = 5<br>Vậy điểm A(−5;0;5) là một điểm thuộc đường nóc nhà. Khi đó chiều cao cần tìm của của ngôi<br>nhà là khoảng cách từ điểm A đến mặt phẳng (Oxy) và bằng 5 mét."
      },
      {
        "id": 8,
        "label": "Bài tập tự luận 8 (Bài 7)",
        "question": "Hình bên dưới minh hoạ một khu nhà đang xây dựng được gắn hệ trục toạ độ Oxyz (đơn vị trên các trục là mét). Mỗi cột bê tông có dạng hình lăng trụ tứ giác đều cạnh đáy dài 1m và tâm của mặt đáy trên lần lượt là các điểm A(2;1;3),B(4;3;3),C(6;3;3), D(4;0;2,5). Giám sát công trình tính toán nhận thấy A,B,C,D không đồng phẳng, yêu cầu bên nhà thầu tính khối lượng bê tông cần bổ sung để độ cao các cột bê tông bằng nhau. Tính thể tích bê tông cần bổ sung (giả sử thể tích phần cốt thép là 3% trên một mét khối bê tông).",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d2_tuluan_q7_p25_1.png",
        "explanation": "Ta có: AB = (2;2;0), AC = (4;2;0) ⇒ [AB,AC] = (0;0;−4).<br>Phương trình (ABC) đi qua A(2;1;3) và nhận n = [AB,AC] = (0;0;−4) làm một véctơ pháp<br>tuyến là: −4(z−3) = 0 ⇔ z−3 = 0.<br>2,5−3<br>Khoảng cách từ D đến mặt phẳng (ABC): d (D,(ABC)) = = 0,5(m).<br>Vì mỗi cột bê tông là hình lăng trụ tứ giác đều và thể tích phần cốt thép là 3% trên một mét khối<br>bê tông, do đó thể tích phần bê tông cần bổ sung là:<br>V = 1.1.0,5(100−3)% = 0,5.97% = 0,485 (m<sup>3</sup>)."
      },
      {
        "id": 9,
        "label": "Bài tập tự luận 9 (Bài 8)",
        "question": "Một ngôi nhà có các bậc thang của cầu thang đã thiết lập hệ tọa độ Oxyz. Biết hai mặt bậc thang song song nằm trên hai mặt phẳng phân biệt: (P):2x− y + 2z + 8 = 0 và (Q):2x− y + 2z + 2 = 0. Khoảng cách giữa hai bậc thang này bằng bao nhiêu?",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d2_tuluan_q8_p25_2.png",
        "explanation": "Khoảng cách giữa hai bậc thang này bằng khoảng cách giữa hai mặt phẳng (P) và (Q)<br>2−8 6<br>((P),(Q))<br>= = = 2.<br>22 + (−1)<sup>2</sup> + 22 3<br>Vậy khoảng cách giữa hai bậc thang bằng 2."
      }
    ],
    "questions": [
      {
        "id": 1,
        "part": 1,
        "shortTag": "P1.1",
        "label": "Phần 1 - Câu 1",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm M(1;0;1) và mặt phẳng (P):2x + y + 2z + 5 = 0. Khoảng cách từ điểm M đến mặt phẳng (P) là: 9 2",
        "options": {
          "A": "3 2.",
          "B": "3.",
          "C": ".",
          "D": "3. 2"
        },
        "answer": "B",
        "explanation": "2.1 + 0 + 2.1 + 5 9<br>Ta có d(M,(P)) = = = 3<br>22 + 12 + 22 3"
      },
      {
        "id": 2,
        "part": 1,
        "shortTag": "P1.2",
        "label": "Phần 1 - Câu 2",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian hệ trục tọa độ Oxyz, khoảng cách từ điểm A(3;1;−2) đến mặt phẳng z = 0 bằng",
        "options": {
          "A": "5.",
          "B": "14.",
          "C": "2.",
          "D": "3."
        },
        "answer": "C",
        "explanation": "Khoảng cách từ A(3;1;−2) đến mặt phẳng z = 0 bằng 2."
      },
      {
        "id": 3,
        "part": 1,
        "shortTag": "P1.3",
        "label": "Phần 1 - Câu 3",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm M(2;−1;3) và mặt phẳng (P):2x−2y + z + 1 = 0. Khoảng cách điểm M đến mặt phẳng (P) bằng 5 10",
        "options": {
          "A": "2.",
          "B": ".",
          "C": "3.",
          "D": ". 3 3"
        },
        "answer": "D",
        "explanation": "2.2−2.(−1) + 3 + 1<br>10<br>Ta có: d[M,(P)] = =.<br>22 + (−2)<sup>2</sup> + 12 3"
      },
      {
        "id": 4,
        "part": 1,
        "shortTag": "P1.4",
        "label": "Phần 1 - Câu 4",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, khoảng cách từ điểm M(0;3;−1) đến mặt phẳng (α):2x + y−2z−2 = 0 bằng 4 1",
        "options": {
          "A": "1.",
          "B": ".",
          "C": ".",
          "D": "3. 3 3"
        },
        "answer": "A",
        "explanation": "2.0 + 3−2.(−1)−2<br>Ta có: d (M;(α)) = = 1<br>22 + 12 + (−2)<sup>2</sup>"
      },
      {
        "id": 5,
        "part": 1,
        "shortTag": "P1.5",
        "label": "Phần 1 - Câu 5",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, khoảng cách giữa hai mặt phẳng (P):x + 2y + 2z−10 = 0 và (Q):x + 2y + 2z−5 = 0 bằng 5 7 5",
        "options": {
          "A": ".",
          "B": ".",
          "C": "5.",
          "D": ". 3 3 9"
        },
        "answer": "A",
        "explanation": "1 2 2 −10<br>Cách 1: Ta có M(10;0;0) ∈ (P). Vì = = ≠ nên hai mặt phẳng (P)và (Q)song song.<br>1 2 2 −5<br>10−5 5<br>Khi đó, d((P),(Q)) = d(M,(Q)) = =.<br>9 3<br>Cách 2: Dùng công thức khoảng cách giữa hai mặt phẳng song song (P):ax + by + cz−d = 0<br>d −d<br>và (Q):ax + by + cz−d = 0 bằng: d((P),(Q)) = 1 2<br>a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup><br>10−5 5<br>Ta có: d((P),(Q)) = =.<br>9 3"
      },
      {
        "id": 6,
        "part": 1,
        "shortTag": "P1.6",
        "label": "Phần 1 - Câu 6",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt phẳng (P):2x− y + 2z + 1 = 0 và mặt phẳng (Q):2x− y + 2z + 4 = 0. Khoảng cách giữa hai mặt phẳng đã cho bằng 1 1",
        "options": {
          "A": "1.",
          "B": ".",
          "C": "3.",
          "D": ". 3 5"
        },
        "answer": "A",
        "explanation": "Dễ thấy (P)//(Q) ⇒ d((P),(Q)) = d(M,(Q)) với M(0;1;0) ∈ (P)<br>2.0−1 + 2.0 + 4<br>Vậy d((P),(Q)) = = 1.<br>22 + (−1)<sup>2</sup> + 22"
      },
      {
        "id": 7,
        "part": 1,
        "shortTag": "P1.7",
        "label": "Phần 1 - Câu 7",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai mặt phẳng song song (P):x + y + z−2 = 0; (Q):x + y + z + 4 = 0. Khoảng cách giữa hai mặt phẳng (P) và (Q) bằng 2 3",
        "options": {
          "A": ".",
          "B": "3.",
          "C": "6.",
          "D": "2 3. 3"
        },
        "answer": "D",
        "explanation": "4 + 2 6<br>Ta có: d<br>((P),(Q))<br>= = = 2 3<br>12 + 12 + 12 3"
      },
      {
        "id": 8,
        "part": 1,
        "shortTag": "P1.8",
        "label": "Phần 1 - Câu 8",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, khoảng cách từ gốc tọa độ O đến mặt phẳng (P):2x− y + 2z + 12 = 0 bằng 4",
        "options": {
          "A": "12.",
          "B": "1.",
          "C": ".",
          "D": "4. 3"
        },
        "answer": "D",
        "explanation": "2.0−0 + 2.0 + 12<br>Ta có: d(O,(P)) = = 4.<br>22 + (−1)<sup>2</sup> + 22"
      },
      {
        "id": 9,
        "part": 1,
        "shortTag": "P1.9",
        "label": "Phần 1 - Câu 9",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai mặt phẳng song song (P):2x + y−2z−1 = 0, (Q):6x + 3y−6z + 15 = 0. Khoảng cách giữa hai mặt phẳng (P),(Q) bằng: 4 16 16",
        "options": {
          "A": "2.",
          "B": ".",
          "C": ".",
          "D": ". 3 9 3"
        },
        "answer": "A",
        "explanation": "Ta có: (Q):6x + 3y−6z + 15 = 0 ⇔ 2x + y−2z + 5 = 0. Lấy M(0;1;0) ∈ (P).<br>1 + 5<br>Vậy d<br>((P),(Q))<br>= d<br>(M,(Q))<br>= = 2.<br>1 + 4 + 4"
      },
      {
        "id": 10,
        "part": 1,
        "shortTag": "P1.10",
        "label": "Phần 1 - Câu 10",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, mặt phẳng (α) cắt các trục Ox, Oy, Oz lần lượt tại 3 điểm A(2;0;0), B(0;3;0), C(0;0;−4). Khoảng cách từ O đến (α) bằng 61 12 61",
        "options": {
          "A": ".",
          "B": "4.",
          "C": ".",
          "D": "3. 12 61"
        },
        "answer": "C",
        "explanation": "x y z<br>Phương trình mặt phẳng (ABC) có dạng: + + = 1 ⇔ 6x + 4y−3z−12 = 0<br>2 3 −4<br>6.0 + 4.0−3.0−12 12 61<br>Khoảng cách từ O đến (α) bằng d(O,(α)) = =.<br>62 + 42 + (−3)<sup>2</sup> 61"
      },
      {
        "id": 11,
        "part": 1,
        "shortTag": "P1.11",
        "label": "Phần 1 - Câu 11",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (P): x + y + 4z−3 = 0 và điểm A(1;1;3). Mặt phẳng (Q)∥(P) và cắt các tia Ox,Oy lần lượt tại các điểm B và C sao cho tam giác ABC có diện tích bằng 2 22. Khoảng cách từ điểm M(2;2;1) đến (Q) bằng: 8 6 6 2 2",
        "options": {
          "A": "2 2.",
          "B": ".",
          "C": ".",
          "D": ". 3 3 3"
        },
        "answer": "A",
        "explanation": "Mặt phẳng (Q)∥(P) ⇒ (Q) có dạng: x + y + 4z + d = 0(d ≠ −3).<br>(Q) ∩ Ox = B(−d;0;0), (Q) ∩ Oy = C(0;−d;0).<br>Do B, C lần lượt thuộc các tia Ox,Oy ⇒ d < 0.<br>Ta có: AB = (−d −1;−1;−3), AC = (−1;−d −1;−3) ⇒ [AB,AC] = (−3d;−3d;d<sup>2</sup> + 2d).<br>S = 2 22 ⇔ 1 [AB,AC] = 2 22 ⇔ 9d<sup>2</sup> + 9d<sup>2</sup> + (d<sup>2</sup> + 2d)<sup>2</sup> = 352<br>ΔABC 2<br>⇔ d4 + 4d<sup>3</sup> + 22d<sup>2</sup> −352 = 0(*)<br>Giải (*) chỉ có d = −4 thỏa mãn. Khi đó ta có phương trình mặt phẳng (Q):x + y + 4z + 4 = 0.<br>2 + 2 + 4.1 + 4<br>Khoảng cách từ điểm M(2;2;1) đến (Q) bằng: = 2 2..<br>12 + 12 + 42<br>x−2 y−1 z−1"
      },
      {
        "id": 12,
        "part": 1,
        "shortTag": "P1.12",
        "label": "Phần 1 - Câu 12",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(0;1;2) và đường thẳng d: = =. Gọi (P) 2 2 −3 là mặt phẳng đi qua A và chứa d. Khoảng cách từ điểm M(5;−1;3) đến (P) bằng 1 11",
        "options": {
          "A": "5.",
          "B": ".",
          "C": "1.",
          "D": ". 3 3"
        },
        "answer": "C",
        "explanation": "Chọn B(2;1;1) ∈ d ta có AB = (2;0;−1) và có [AB,u] = (2;4;4) = 2(1;2;2)<br>Mặt phẳng (P) đi qua A và chứa d suy ra n = (1;2;2) ⇒ (P):x + 2y + 2z−6 = 0<br>x + 2y + 2z −6<br>Vậy d (M,(P)) = M M M = 1.<br>12 + 22 + 22"
      },
      {
        "id": 13,
        "part": 2,
        "shortTag": "P2.1",
        "label": "Phần 2 - Câu 1",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho A(−1;0;2) và mặt phẳng (P):2x + y−2z = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt phẳng (P) có vectơ pháp tuyến n = (2;1;−2) và đi qua A.",
          "b": "Phương trình mặt phẳng qua A và song song (P) là 2x + y−2z + 6 = 0.",
          "c": "Mặt phẳng qua gốc toạ độ O,điểm A và vuông góc (P) có phương trình là 2x−2y + z = 0.",
          "d": "Có tất cả hai mặt phẳng song song với (P) và có khoảng cách đến A bằng 2."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "a) Sai: Thay toạ độ điểm A(−1;0;2) vào phương trình mặt phẳng (P) ta được −2−4 = 0(vô lý).<br>b) Đúng: Gọi (α) là mặt phẳng qua A và song song (P), suy ra (α) có VTPT n = (2;1;−2).<br>Phương trình (α) là: 2(x + 1) + 1(y−0)−2(z−2) = 0 ⇔ 2x + y−2z + 6 = 0.<br>c) Đúng: Gọi (β) là mặt phẳng qua O,A và vuông góc (P).Ta có n = (2;1;−2),OA = (−1;0;2).<br>(β) có VTPT là n = [n,OA] = (2;−2;1).<br>β P<br>Phương trình của (β) là: 2(x−0)−2(y−0) + 1(z−0) = 0 ⇔ 2x−2y + z = 0.<br>d) Sai: Phương trình mặt phẳng (Q) có dạng 2x + y−2z + d = 0.<br>2(−1) + 0−2.2 + d [d −6 = 6 [d = 12(n)<br>Ta có d(A,(Q)) = 2 ⇔ = 2 ⇔ d −6 = 6 ⇔ ⇔.<br>| |<br>22 + 12 + (−2)<sup>2</sup> d −6 = −6 d = 0(l)"
      },
      {
        "id": 14,
        "part": 2,
        "shortTag": "P2.2",
        "label": "Phần 2 - Câu 2",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho A(2;0;0),B(0;2;0),C(0;0;3). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Một vectơ pháp tuyến của mặt phẳng (ABC) là n = (3;3;2).",
          "b": "Mặt phẳng đi qua Cvà vuông góc với đường thẳng AB có phương trình là x− y = 0.",
          "c": "Mặt phẳng chứa đường thẳng ABvà vuông góc với (ABC) có phương trình là x + y−3z + 2 = 0..",
          "d": "Gọi M(a;b;c) ∈ (Oyz)sao cho MA + MB + MC nhỏ nhất,khi đó 3(a + b) + c = 5."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "x y z<br>a) Đúng: Phương trình mặt phẳng (ABC): + + = 1 ⇔ 3x + 3y + 2z−6 = 0.<br>2 2 3<br>Suy ra một vectơ pháp tuyến của mặt phẳng (ABC) là n = (3;3;2).<br>b) Đúng: Gọi (α) là mặt phẳng qua C và vuông góc với AB.<br>Mặt phẳng (α) có VTPT là AB = (−2;2;0) = −2(1;−1;0).<br>Phương trình của (α) là 1(x−0)−1(y−0) + 0(z−3) = 0 ⇔ x− y = 0.<br>c) Sai: Gọi (β) là mặt phẳng mặt phẳng chứa đường thẳng ABvà vuông góc với (ABC) có một<br>vectơ pháp tuyến của (β) là: n = [AB,n] = (4;4;−12) = 4(1;1;−3).<br>Phương trình của (β) là: 1(x−2) + 1(y−0)−3(z−0) = 0 ⇔ x + y−3z−2 = 0.<br>(2 2)<br>d) Sai: Gọi G là trọng tâm của tam giác ABC,ta có G;;1.<br>3 3<br>Vì MA + MB + MC = 3 MG,suy ra MA + MB + MC ⇔ MG.<br>min min<br>(2)<br>Mà M ∈ Oyz ⇒ M phải là hình chiếu của Glên Oyz ⇒ M 0;;1 ⇒ 3(a + b) + c = 2 + 1 = 3."
      },
      {
        "id": 15,
        "part": 2,
        "shortTag": "P2.3",
        "label": "Phần 2 - Câu 3",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai mặt phẳng (P):x−3y + 2z−1 = 0 và (Q):−2x + y + 4z−3 = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt phẳng (P) song song mặt phẳng (Q).",
          "b": "Mặt phẳng (R)có phương trình 14x + 8y + 5z−2 = 0 cùng vuông góc với hai mặt phẳng (P) và (Q).",
          "c": "Mặt phẳng (α):2x−6y + 4z−9 = 0 song song mặt phẳng (P):x−3y + 2z−1 = 0 và cách mặt phẳng (P) một khoảng bằng 1.",
          "d": "Mặt phẳng (β) qua hai điểm A(1;0;1), B(2;−2;1) và vuông góc với mặt phẳng (Q) có một vectơ pháp tuyến là n = (8;4;3). β"
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Sai: Vectơ pháp tuyến của mặt phẳng (P) là n = (1;−3;2)<br>Vectơ pháp tuyến của mặt phẳng (Q) là n = (−2;1;4)<br>Vì hai vectơ pháp tuyến n = (1;−3;2) và n = (−2;1;4) của hai mặt phẳng (P) và (Q) không<br>P Q<br>cùng phương. Do đó mặt phẳng (P) không song song mặt phẳng (Q).<br>b) Đúng: Mặt phẳng (R) cùng vuông góc với hai mặt phẳng (P) và (Q) nên có cặp vecto chỉ<br>phương là n = (1;−3;2) và n = (−2;1;4)<br>P Q<br>Mặt phẳng (R) có một vectơ pháp tuyến là [n,n] = (−14;−8;−5) hay chọn n = (14;8;5)<br>P Q R<br>Vậy mặt phẳng (R)có phương trình 14x + 8y + 5z−2 = 0 cùng vuông góc với hai mặt phẳng<br>(P) và (Q).<br>c) Sai: Vectơ pháp tuyến của mặt phẳng (P) là n = (1;−3;2)<br>Vectơ pháp tuyến của mặt phẳng (α) là n = (2;−6;4)<br>{ n = 2.n<br>Ta có:; α P nên mặt phẳng (α) song song mặt phẳng (P)<br>}−9 ≠ 2.(−1)<br>Lấy điểm M(1;0;0) thuộc mặt phẳng (P):x−3y + 2z−1 = 0.<br>2.1−9 14<br>Lại có d(M,mp(α)) = =<br>22 + (−6)<sup>2</sup> + 42 4<br>14<br>Nên mặt phẳng (α) cách mặt phẳng (P) một khoảng bằng<br>d) Đúng: Ta có: AB = (1;−2;0) và vectơ pháp tuyến của mặt phẳng (Q) là n = (−2;1;4)<br>Mặt phẳng (β) qua hai điểm A(1;0;1), B(2;−2;1) và vuông góc với mặt phẳng (Q) nên có cặp<br>vec tơ chỉ phương là AB và n. Do đó mặt phẳng (β) có một vectơ pháp tuyến là<br>n = [n,AB] = (8;4;3).<br>β Q"
      },
      {
        "id": 16,
        "part": 2,
        "shortTag": "P2.4",
        "label": "Phần 2 - Câu 4",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong hệ trục tọa độ Oxyz, cho hai mặt phẳng (P):2x−2y + z + 1 = 0, (Q):2x−2y + z−5 = 0 và các điểm A(0;1;1), B(2;0;1). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Hai mặt phẳng (P) và (Q) song song với nhau.",
          "b": "Khoảng cách d(A,(Q)) = 4.",
          "c": "Khoảng cách d (P,(Q)) = 6.",
          "d": "Cho biết điểm C ∈ (P) và đường thẳng BC tạo với mặt phẳng (P) góc 300. Khi đó ta có 4 3 khoảng cách BC =. 3"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": false
        },
        "explanation": "a) Đúng: Ta có n = (2;−2;1) và n = (2;−2;1) là các véc tơ pháp tuyến của hai mặt phẳng (P)<br>1 2<br>và (Q) tương ứng. Rõ ràng chúng cùng phương nhau<br>Mặt khác ta có 1 ≠ −5 là các hệ số tự do của phương trình tổng quát của 2 mặt phẳng tương ứng.<br>Từ đó ta có hai mặt phẳng (P) và (Q) song song nhau.<br>0−2 + 1−5<br>b) Sai: Ta có: d<br>(A,(Q))<br>= = 2.<br>4 + 4 + 1<br>c) Sai: Ta thấy A(0;1;1) thuộc (P) vì tọa độ điểm A thỏa mãn phương trình mặt phẳng (P):<br>2.0−2.1 + 1.1 + 1 = 0.<br>Vậy có (P)//(Q) và A ∈ (P) nên d(P,(Q)) = d(A,(Q)) = 2.<br>d) Sai: Ta thấy B(2;0;1) thuộc (Q) vì tọa độ điểm B thỏa mãn phương trình mặt phẳng (Q):<br>2.2−2.0 + 1.1−5 = 0.<br>Gọi H là hình chiếu vuông góc của B lên (P), ta có BH = d(B,(P)) = d(A,(Q)) = 2.<br>Vì góc giữa đường thẳng BC và mặt phẳng (P) bằng 300 nên suy ra góc B • CH = 30°.<br>Do C ∈ (P) nên xét tam giác BHC vuông tại H có BH = 2, B • CH = 30°<br>BH BH 2<br>dó đó ta có sin30° = ⇒ BC = = = 4.<br>BC sin30° 0,5"
      },
      {
        "id": 17,
        "part": 2,
        "shortTag": "P2.5",
        "label": "Phần 2 - Câu 5",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai mặt phẳng (P):2x + 2y−z + 3 = 0, (Q):x + 2y−2z + 4 = 0 và điểm A(1;2;3). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Điểm A cách mặt phẳng (P) một khoảng bằng 5.",
          "b": "Mặt phẳng (Q) cắt mặt phẳng (P).",
          "c": "Mặt phẳng (R):2x + 2y−z = 0 cách mặt phẳng (P) một khoảng bằng 3.",
          "d": "Với mọi giá trị m thì hai mặt phẳng (P)và (T):x + y + mz + 1 = 0 cắt nhau."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "2 + 4−3 + 3<br>a) Ta có d(A,(P)) = = 2.<br>22 + 22 + (−1)<sup>2</sup><br>b) Ta có vectơ pháp tuyến của hai mặt phẳng (P)và (Q)lần lượt là n = (2;2;−1),n = (1;2;−2)<br>P Q<br>2 2 −1<br>Hơn nữa ≠ ≠ nên hai véctơ n và n không cùng phương.<br>1 2 −2 P Q<br>Do đó hai mặt phẳng (P)và (Q)cắt nhau.<br>c) Ta có hai mặt phẳng (P)và (R)song song nhau.<br>Lấy điểm O(0;0;0) thuộc mặt phẳng (R) thì d((R),(P)) = d(O,(P)) = = 1<br>22 + 22 + (−1)<sup>2</sup><br>d) Mặt phẳng (P) có vectơ pháp tuyến là n = (2;2;−1).<br>Mặt phẳng (T) có vectơ pháp tuyến là n = (1;1;m).<br>Vì hai mặt phẳng (P)và (T) cắt nhau nên hai vectơ pháp tuyến n và n không cùng phương.<br>P T<br>−1 −1<br>⇒ m ≠. Vậy với m ≠ thì hai mặt phẳng (P)và (T) cắt nhau.<br>2 2"
      },
      {
        "id": 18,
        "part": 2,
        "shortTag": "P2.6",
        "label": "Phần 2 - Câu 6",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz cho ba điểm A(1;2;0), B(1;0;2), C(2;1;3), và mặt phẳng (P):x− y + 2z + 7 = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt phẳng (ABC) có một vectơ pháp tuyến là (2;1;1).",
          "b": "Mặt phẳng (ABC) đi qua điểm M(3;1;5).",
          "c": "Mặt phẳng (ABC) vuông góc với mặt phẳng (P).",
          "d": "Khoảng cách từ điểm A đến mặt phẳng (P) bằng 6."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "a) Sai: Ta có: AB(0;−2;2),BC(1;1;1) ⇒ [AB,BC] = (−4;2;2) = 2(−2;1;1) = 2.n<br>Mặt phẳng (ABC) có một véctơ pháp tuyến: n(−2;1;1).<br>b) Đúng: Phương trình mặt phẳng (ABC): −2(x−1) + 1(y−2) + 1(z−0) = 0 ⇔ −2x + y + z = 0<br>Thay toạ độ điểm M(3;1;5) vào phương trình mặt phẳng (ABC): −2.3 + 1 + 5 = 0: thoả mãn.<br>c) Sai: Ta có vecto pháp tuyến của mặt phẳng (P): n = (1;−1;2).<br>Khi đó n.n = −2.1−1.1 + 1.2 = −1 ≠ 0<br>Mặt phẳng (ABC) không vuông góc với mặt phẳng (P).<br>1−2 + 2.0 + 7<br>d) Sai: d(A;(P)) = = 6.<br>1 + 1 + 4"
      },
      {
        "id": 19,
        "part": 2,
        "shortTag": "P2.7",
        "label": "Phần 2 - Câu 7",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai mặt phẳng (P) và (Q) lần lượt có phương trình là (P):x−2y + 3z + 1 = 0và (Q):2x−4y + 6z + 1 = 0.",
        "statements": {
          "a": "Các vectơ pháp tuyến của hai mặt phẳng trên cùng phương.",
          "b": "Hai mặt phẳng (P)và (Q)đều đi qua điểm M(1;1;2). 14",
          "c": "Khoảng cách giữa hai mặt phẳng (P)và (Q)bằng. 14",
          "d": "Phương trình mặt phẳng (R)cách đều hai mặt phẳng (P)và (Q)là: 4x + 8y + 12z−5 = 0."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Một vectơ pháp tuyến n = (1;−2;3) và một vectơ pháp tuyến của n = (2;−4;6) và<br>P Q<br>n = 2n ⇒ n;n cùng phương.<br>Q P P Q<br>1 −2 3 1<br>b) Sai: Ta có = = ≠ ⇒ (P)∥(Q).<br>2 −4 6 1<br>Do đó hai mặt phẳng (P)và (Q)không có điểm chung.<br>c) Sai: Ta có (P)∥(Q).<br>2.1−4.1 + 6.0 + 1 14<br>Lấy điểm N(1;1;0) ∈ (P) ⇒ d((P),(Q)) = d(N,(Q)) = =.<br>22 + (−4)<sup>2</sup> + 62 28<br>(1)<br>d) Đúng: Ta có (P)∥(Q). Lấy N(1;1;0) ∈ (P);P<br>1;0;−<br>∈ (Q).<br>(1 1)<br>Gọi I là trung điểm MN ⇒ I 1;;− thì yêu cầu bài toán ⇔ (R) qua I và nhận vectơ<br>2 4<br>(1) (1)<br>n = (1;2;3) làm một vectơ pháp tuyến là: 1(x−1) + 2 y− + 3 z + = 0<br>2 4<br>Hay (R):4x + 8y + 12z−5 = 0."
      },
      {
        "id": 20,
        "part": 2,
        "shortTag": "P2.8",
        "label": "Phần 2 - Câu 8",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ toạ độ Oxyz, cho mặt phẳng (P)đi qua điểm M(−1;2;0) và có một vectơ pháp tuyến n = (4;0;−5). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt phẳng (P) có phương trình là 4x−5z + 4 = 0.",
          "b": "Mặt phẳng (P) đi qua điểm A(2;−1;5).",
          "c": "Mặt phẳng (Q):4x−5z + 4 = 0 song song với (P). 19",
          "d": "Cho điểm A(−2;1;3). Khi đó d(A,(P)) =. 41"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Phương trình mặt phẳng (P): 4(x + 1) + 0(y−2)−5(z−0) = 0 ⇔ 4x−5z + 4 = 0.<br>b) Sai: Thay điểm M vào phương trình mặt phẳng (P):4x−5z + 4 = 0 ta thấy không thỏa mãn<br>c) Sai: Do (Q) ≡ (P)<br>4.(−2)−5.3 + 4 19<br>d) Đúng: d<br>(A,(P))<br>= =<br>42 + 52 41"
      },
      {
        "id": 21,
        "part": 2,
        "shortTag": "P2.9",
        "label": "Phần 2 - Câu 9",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho các điểm A(2;−3;1), B(1;0;−1),C(3;1;2), D(1;0;−1). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt phẳng đi qua điểm A và song song với mặt phẳng (Oxz) có phương trình là y−3 = 0.",
          "b": "Mặt phẳng đi qua điểm A và song song với mặt phẳng trung trực của BC có phương trình là 2x + y + 3z−4 = 0.",
          "c": "Gọi (α) là mặt phẳng đi qua trọng tâm của ΔABC và song song với mp (β):z−2 = 0. 1 Khoảng cách từ điểm A đến (α) bằng. 3",
          "d": "Mặt phẳng đi qua điểm D và song song với mặt phẳng (ABC) có phương trình là 11x− y−7z−18 = 0"
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "a) Sai: Gọi (P) là mp cần tìm. Do (P)//(Oxz) ⇒ n = j = (0;1;0)<br>Và (P) đi qua điểm A(2;−3;1) ⇒ (P):0.(x−2) + 1.(y + 3) + 0.(z−1) = 0 ⇒ (P):y + 3 = 0<br>(1 1)<br>b) Đúng: Trung điểm BC là I 2;;, BC = (2;1;3)<br>2 2<br>(1) (1)<br>Mặt phẳng trung trực của BC là (Q):2.(x−2) + 1. y− + 3. z− = 0<br>2 2<br>⇒ (Q):2x + y + 3z−6 = 0.<br>Gọi (R) là mặt phẳng cần tìm. Do ⇒ (R):2.(x−2) + 1.(y + 3) + 3.(z−1) = 0<br>⇒ (R):2x + y + 3z−4 = 0 dễ thấy (R)//(Q)<br>(2 2)<br>c) Đúng: Trọng tâm ΔABC là điểm G 2;−;.<br>3 3<br>Do (α)//(β) ⇒ n = n = (0;0;1) và (α) đi qua điểm G<br>α β<br>(2) (2)<br>⇒ (α):0.(x−2) + 0. y + + 1. z− = 0 ⇒ (α):3z−2 = 0 và<br>3 3<br>3.1−2 1<br>(A;(α))<br>= =.<br>02 + 02 + 32 3<br>d) Sai: AB = (−1;3;−2),AC = (1;4;1) ⇒ VTPT n = [AB,AC] = (11;−1;−7)<br>ABC<br>Gọi (Q) là mặt phẳng cần tìm. Do (Q)//(ABC) ⇒ VTPT n = n = (11;−1;−7) và (Q) đi qua<br>Q ABC<br>điểm D(1;0;−1) ⇒ (Q):11.(x−1)−1.(y−0)−7.(z + 1) = 0 ⇒ (Q):11x− y−7z−18 = 0<br>Nhận thấy tọa độ điểm A thỏa mãn phương trình (Q) (vì: 11.2−1.(−3)−7.1−18 = 0) nên mặt<br>phẳng (Q) chính là mặt phẳng (ABC)."
      },
      {
        "id": 22,
        "part": 2,
        "shortTag": "P2.10",
        "label": "Phần 2 - Câu 10",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho bốn điểm A(2;−1;0),B(1;1;3), C(−3;2;1),D(−1;14). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt phẳng (P) qua A,B song song CD có một vectơ pháp tuyến là n = (3;3;−1).",
          "b": "Mặt phẳng (P) đi qua điểm M(2;−1;5). 7",
          "c": "Gọi (Q) là mặt phẳng đi qua C,D song song với AB. Khi đó d(A,(Q)) =. 19 1",
          "d": "Mặt phẳng cách đều AB,CD có dạng (R):3x + 3y−z + = 0. 2"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "a) Đúng: Mặt phẳng (P) qua A,B song song CD nên mặt phẳng (P) nhận hai vectơ<br>AB = (−1;2;3), CD = (2;−1;3) làm cặp vectơ chỉ phương suy ra mặt phẳng (P) có véc tơ pháp<br>tuyến n = [AB,CD] = (9;9;−3)<br>b) Sai: Phương trình mặt phẳng (P):3x + 3y−z−3 = 0 thay toạ độ điểm M vào phương trình<br>mặt phẳng (P) ta thấy không thỏa mãn<br>c) Đúng: d<br>(A,(Q))<br>= d<br>(C,(P))<br>19<br>d) Đúng: Mặt phẳng cách đều AB,CD song song với (P) nên có phương trình dạng<br>(R):3x + 3y−z + d = 0<br>(−1 1 1) 1<br>Gọi H là trung điểm của AC ⇒ H;;, suy ra H ∈ (R) ⇒ d =<br>2 2 2 2<br>Vậy (R):3x + 3y−z + = 0"
      },
      {
        "id": 23,
        "part": 2,
        "shortTag": "P2.11",
        "label": "Phần 2 - Câu 11",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ toạ độ Oxyz, cho điểm M(1;0;1) và hai mặt phẳng (Q):x + y−3z−5 = 0, (R):x + 2y−z−1 = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt phẳng (R) đi qua điểm M. 7",
          "b": "Khoảng cách từ điểm M đến mặt phẳng (Q) bằng. 11",
          "c": "Mặt phẳng đi qua M và song song với mặt phẳng (Q) có phương trình là: x + y−3z−2 = 0",
          "d": "Mặt phẳng đi qua điểm A(1;−2;0) và vuông góc với hai mặt phẳng (Q):x + y−3z−5 = 0, (R):x + 2y−z−1 = 0 có phương trình là 5x−2y + z−9 = 0."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "Mặt phẳng (Q) có vectơ pháp tuyến là n = (1;1;−3).<br>Mặt phẳng (R) có vectơ pháp tuyến là n = (1;2;−1).<br>a) Sai: Thay tọa độ điểm M vào phương trình mặt phẳng (R) ta được: 1 + 2.0−1−1 ≠ 0 nên<br>mặt phẳng (R) không đi qua điểm M.<br>1 + 0−3−5 7<br>b) Đúng: Ta có: d(M;(Q)) = =.<br>12 + 12 + 32 11<br>c) Sai: Gọi (α) là mặt phẳng cần tìm. Do (α) song song với (Q) nên có vectơ pháp tuyến<br>n = n = (1;1;−3).<br>Mặt phẳng (α) đi qua điểm M và có vectơ pháp tuyến n = (1;1;−3) có phương trình:<br>(x−1) + (y−0)−3(z−1) = 0 ⇔ x + y−3z + 2 = 0<br>d) Đúng: Gọi mặt phẳng cần tìm là (P).<br>Mặt phẳng (P) vuông góc với hai mặt phẳng (Q),(R) nên (P) có cặp vectơ chỉ phương là<br>n = (1;1;−3), n = (1;2;−1). Do đó, mặt phẳng (P) có vectơ pháp tuyến là:<br>1 2<br>n = [n;n] = (5;−2;1)<br>1 2<br>Mặt phẳng (P) đi qua điểm A(1;−2;0) và có vectơ pháp tuyến n = (5;−2;1) có phương trình:<br>5(x−1)−2(y + 2) + (z−0) = 0 ⇔ 5x−2y + z−9 = 0."
      },
      {
        "id": 24,
        "part": 3,
        "shortTag": "P3.1",
        "label": "Phần 3 - Câu 1",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt phẳng (P) qua điểm A(1;−2;−2), vuông góc với mặt phẳng (Oxz) 3 5 đồng thời khoảng cách từ điểm B(3;1;−3) đến (P) bằng. Phương trình mặt phẳng (P) có 5 dạng 2x + by + cz + d = 0(d ≠ 0). Tính P = 3b + 2c−d.",
        "answer": "46",
        "acceptedAnswers": [
          "46",
          "2"
        ],
        "kqCells": [
          "4",
          "6",
          "",
          ""
        ],
        "explanation": "Giả sử mặt phẳng cần lập có một vectơ pháp tuyến là n = (a;b;c), a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> ≠ 0<br>(P)<br>Mặt phẳng (P) vuông góc với mặt phẳng (Oxz):y = 0 nên n.n = 0 ⇔ b = 0.<br>(P) (Oxz)<br>(P) đi qua điểm A(1;−2;−2) ⇒ (P):a(x−1) + c(z + 2) = 0 ⇔ ax + cz−a + 2c = 0.<br>2a−c 3 5<br>d (B;(P)) = = ⇔ 5(2a−c)<sup>2</sup> = 9 (a<sup>2</sup> + c<sup>2</sup>)<br>a<sup>2</sup> + c<sup>2</sup> 5<br>[a = 2c<br>⇔ 11a<sup>2</sup> −20ac−4c<sup>2</sup> = 0 ⇔.<br>11a = −2c<br>Với a = 2c chọn c = 1 ⇒ a = 2 ⇒ (P):2x + z = 0 (loại).<br>Với 11a = −2c chọn a = 2 ⇒ c = −11 ⇒ (P):2x−11z−24 = 0 (thỏa mãn).<br>Vậy P = 3b−2c−d = 0−2(−11)−(−24) = 46.<br><b>Lưu ý:</b> Với <i>b = 0, c = −11, d = −24</i>: nếu tính <i>3b − 2c − d = 46</i> (theo lời giải gốc) hoặc <i>3b + 2c − d = 2</i> (theo đề). Hệ thống chấp nhận cả <b>46</b> và <b>2</b>."
      },
      {
        "id": 25,
        "part": 3,
        "shortTag": "P3.2",
        "label": "Phần 3 - Câu 2",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong hệ tục toạ độ không gian Oxyz, cho A(1;0;0), B(0;b;0), C(0;0;c), biết b,c > 0, phương 1 trình mặt phẳng (P):y−z + 1 = 0. Tính M = c + b biết (ABC) ⊥ (P), d[O;(ABC)] =. 3",
        "answer": "1",
        "acceptedAnswers": [
          "1"
        ],
        "kqCells": [
          "1",
          "",
          "",
          ""
        ],
        "explanation": "x y z<br>Phương trình mặt phẳng (ABC): + + = 1.<br>1 b c<br>1 1<br>Ta có:(ABC) ⊥ (P) ⇒ − = 0 ⇔ b = c.<br>b c<br>−1 1 (1) 2<br>d[O;(ABC)] = = ⇔ 9 = 1 + 2, (b = c).<br>(1)<br>(1)<br>2 3 b<br>1 + +<br>b c<br>1 1<br>⇔ b = ±, do b,c > 0 nên b = c =. Vậy M = c + b = 1.<br>2 2"
      },
      {
        "id": 26,
        "part": 3,
        "shortTag": "P3.3",
        "label": "Phần 3 - Câu 3",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục Oxyz, cho mặt phẳng (α):x + by + cz + d = 0 vuông góc với mặt phẳng (β):x + 2y + 3z + 4 = 0 và chứa giao tuyến của hai mặt phẳng (P):x + 3y + z−7 = 0, (Q):x− y + z + 1 = 0. Khi đó d bằng",
        "answer": "3",
        "acceptedAnswers": [
          "3"
        ],
        "kqCells": [
          "3",
          "",
          "",
          ""
        ],
        "explanation": "Ta có vectơ pháp tuyến của (β),(P),(Q) lần lượt là n = (1;2;3),n = (1;3;1),n = (1;−1;1).<br>1 2 3<br>Khi đó n = [n,[n,n]] = (−8;16;−8) = −8(1;−2;1).<br>α 1 2 3<br>Gọi A(x;y;z) ∈ d là giao tuyến của (P) và (Q), khi đó toạ độ điểm A thoả mãn hệ<br>{ x + 3y + z−7 = 0 { 3y + z−7 = 0 { y = 2<br>;. Cho x = 0 ta có; ⇔;, khi đó A(0;2;1)<br>}x− y + z + 1 = 0 }−y + z + 1 = 0 }z = 1<br>Do (α) chứa giao tuyến của (P) và (Q) nên (α) đi qua A(0;2;1).<br>Phương trình (α):x−2(y−2) + z−1 = 0 ⇔ x−2y + z + 3 = 0. Vậy d = 3."
      },
      {
        "id": 27,
        "part": 3,
        "shortTag": "P3.4",
        "label": "Phần 3 - Câu 4",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai điểm A(2;3;4), B(6;−3;0) và mặt phẳng (P) sao cho d(B;(P)) = 2d(A;(P)), (P) cắt AB tại I(a;b;c) nằm trên đoạn thẳngAB. Tính S = a + b + c.",
        "answer": "7",
        "acceptedAnswers": [
          "7"
        ],
        "kqCells": [
          "7",
          "",
          "",
          ""
        ],
        "explanation": "Gọi H, K lần lượt là hình chiếu vuông góc của A và B lên mặt phẳng (P)<br>Suy ra BK = d(B;(P)), AH = d(A;(P)) do AH ⊥ (P); BK ⊥ (P) nên AH // BK<br>Suy ra A, H, K, B đồng phẳng và ta có ΔIKB∽ΔIHA (góc – góc)<br>BI BK<br>d(B;(P))<br>Suy ra = = = 2 ⇒ BI = 2AI mà I thuộc đoạn AB nên BI = −2AI<br>AI AH d(A;(P))<br>Ta có BI(a−6;b + 3;c),AI(a−2;b−3;c−4)<br>{ 10<br>{ a−6 = −2(a−2) a =<br>BI = −2AI ⇔; b + 3 = −2(b−3) ⇔; b = 1 ⇒ a + b + c = 7. Vậy S = 7.<br>c = −2(c−4) 8<br>} c =<br>} 3"
      },
      {
        "id": 28,
        "part": 3,
        "shortTag": "P3.5",
        "label": "Phần 3 - Câu 5",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm M(1;2;3). Mặt phẳng (P):x + Ay + Bz + C = 0 chứa trục Oz và cách điểm M một khoảng lớn nhất, khi đó tính tổng A + B + C.",
        "answer": "2",
        "acceptedAnswers": [
          "2"
        ],
        "kqCells": [
          "2",
          "",
          "",
          ""
        ],
        "explanation": "Vì (P) chứa trục Oz nên luôn có d(M;(P)) ≤ d(M;Oz).<br>Suy ra d(M;(P)) đạt giá trị lớn nhất bằng d(M;Oz) = MH, với H là hình chiếu của M trên<br>trục Oz.<br>Ta có H(0;0;3). Vậy (P) đi qua H(0;0;3), có véc tơ pháp tuyến MH(−1;−2;0).<br>(P):−x−2y = 0 ⇔ x + 2y = 0 ⇒ A = 2;B = C = 0 ⇒ A + B + C = 2"
      },
      {
        "id": 29,
        "part": 3,
        "shortTag": "P3.6",
        "label": "Phần 3 - Câu 6",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (α):2x + 3y + z + 1 = 0. Gọi (P) là mặt phẳng song song với (α), cắt các tia Ox,Oy,Oz lần lượt tại các điểm A, B,C sao cho thể tích khối tứ diện OABC bằng 6. Tính khoảng cách từ gốc tọa độ O đến mặt phẳng (P) (kết quả làm tròn đến hàng phần trăm).",
        "answer": "1,6",
        "acceptedAnswers": [
          "1,6",
          "1,60",
          "1.6",
          "1.60"
        ],
        "kqCells": [
          "1",
          ",",
          "6",
          ""
        ],
        "explanation": "Do (P) song song với (α) nên (P) có phương trình: 2x + 3y + z + m = 0, điều kiện m ≠ 1.<br>(m) (m)<br>Khi đó: (P) cắt các tia Ox,Oy,Oz lần lượt tại các điểm là: A −;0;0, B 0;−;0,<br>2 3<br>C(0;0;−m), với m < 0. Thể tích khối tứ diện OABC bằng 6 nên OA.OB.OC = 6<br>1 m m m<sup>3</sup><br>⇔.−.−.−m = 6 ⇔ − = 6 (do m < 0) ⇔ m<sup>3</sup> = −216 ⇔ m = −6 (thỏa mãn).<br>6 2 3 36<br>2.0 + 3.0 + 0−6 6<br>Ta có: (P):2x + 3y + z−6 = 0 ⇒ d(O;(P)) = = ≈ 1,60.<br>22 + 32 + 12 14"
      },
      {
        "id": 30,
        "part": 3,
        "shortTag": "P3.7",
        "label": "Phần 3 - Câu 7",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm M(1;4;9). Gọi (P) là mặt phẳng đi qua M và cắt 3 tia Ox, Oy, Oz lần lượt tại các điểm A, B,C (khác O) sao cho OA + OB + OC đạt giá trị nhỏ nhất. Tính khoảng cách d từ gốc tọa độ O đến mặt phẳng (P) (kết quả là tròn đến hàng phần trăm).",
        "answer": "5,14",
        "acceptedAnswers": [
          "5,14",
          "5.14"
        ],
        "kqCells": [
          "5",
          ",",
          "1",
          "4"
        ],
        "explanation": "Giả sử A(a;0;0), B(0;b;0), C(0;0;c) với a,b,c > 0.<br>x y z<br>Phương trình mặt phẳng (P): + + = 1; OA + OB + OC = a + b + c<br>a b c<br>1 4 9<br>M(1;4;9) ∈ (P) ⇒ + + = 1. Áp dụng BĐT Bunhiacopxki:<br>a b c<br>(2 2 2)<br>(1 + 4 + 9) (a + b + c) = (1) + (4) + (9) ((a)<sup>2</sup> + (b)<sup>2</sup> + (c)<sup>2</sup>) ≥ (1 + 2 + 3)<sup>2</sup>.<br>a b c<br>⇒ a + b + c ≥ 36.<br>{ 1 4 9<br>+ + = 1 { a = 6<br>a b c x y z<br>Dấu “ = ” xảy ra khi; a + b + c = 49 →; b = 12. Nên (P): + + = 1.<br>1 2 3 6 12 18<br>= =<br>c = 18<br>}a b c<br>36<br>Vậy d = ≈ 5,14."
      },
      {
        "id": 31,
        "part": 3,
        "shortTag": "P3.8",
        "label": "Phần 3 - Câu 8",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz cho các điểm A(2;0;0),B(0;4;0),C(0;0;6),D(2;4;6). Gọi (P)là mặt phẳng song song với mặt phẳng (ABC),(P) cách đều D và mặt phẳng (ABC). Phương trình của mặt phẳng (P) là ax + by + 2z + d = 0 với a,b,d ∈ ′. Giá trị của d bằng bao nhiêu?",
        "answer": "-24",
        "acceptedAnswers": [
          "-24"
        ],
        "kqCells": [
          "-",
          "2",
          "4",
          ""
        ],
        "explanation": "x y z<br>Phương trình mặt phẳng (ABC) là: + + = 1 ⇔ 6x + 3y + 2z−12 = 0<br>2 4 6<br>Mặt phẳng (P) song song với mặt phẳng (ABC) nên (P) có dạng:<br>6x + 3y + 2z + d = 0 (d ≠ −12)<br>Vì (P) cách đều D và mặt phẳng (ABC) nên ta có:<br>d(D;(P)) = d((ABC);(P)) ⇔ d(D;(P)) = d(A;(P)) ⇔ 36 + d = 12 + d ⇔ d = −24.<br>Vậy phương trình mặt phẳng (P) là: 6x + 3y + 2z−24 = 0."
      },
      {
        "id": 32,
        "part": 3,
        "shortTag": "P3.9",
        "label": "Phần 3 - Câu 9",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm B(6;4;0), C(4;5;1), M(2;1;6).Mặt phẳng (P) vuông góc với BC và cách M một khoảng bằng 6 có dạng ax + y + cz + d = 0. Tính −3a + c.",
        "answer": "7",
        "acceptedAnswers": [
          "7"
        ],
        "kqCells": [
          "7",
          "",
          "",
          ""
        ],
        "explanation": "Mặt phẳng (P) vuông góc với BCnên n = BC = (−2;1;1) ⇒ (P):−2x + y + z + D = 0.<br>D + 3 [D = −3<br>Lại có d(M;(P)) = 6 ⇔ = 6 ⇔ D + 3 = 6 ⇔<br>6 D = 3<br>Với D = −3 ⇒ (P):−2x + y + z−3 = 0.<br>Với D = 3 ⇒ (P):−2x + y + z + 3 = 0.<br>Vậy a = −2;c = 1 ⇒ −3a + c = 7"
      },
      {
        "id": 33,
        "part": 3,
        "shortTag": "P3.10",
        "label": "Phần 3 - Câu 10",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt phẳng (Q) song song với mặt phẳng (P):2x− y−2z + 19 = 0 và cách (P) một khoảng bằng 5 có dạng ax + y + cz + d = 0. Tính a + c + d.",
        "answer": "11",
        "acceptedAnswers": [
          "11"
        ],
        "kqCells": [
          "1",
          "1",
          "",
          ""
        ],
        "explanation": "Trên mặt phẳng (P):2x− y−2z + 4 = 0chọn điểm M(0;4;0).<br>Do (Q) song song với mặt phẳng (P) nên (Q) có dạng: 2x− y−2z + D = 0với D ≠ 19.<br>|−4 + D| [D = −11<br>Vì d ((P),(Q)) = 5 ⇔ d (M,(Q)) = 5 ⇔ = 5 ⇔ |−4 + D| = 15 ⇔<br>22 + (−1)<sup>2</sup> + (−2)<sup>2</sup> D = 19<br>Mặt phẳng (Q)thỏa mãn yêu cầu bài toán: 2x− y−2z−11 = 0<br>Vậy a + c + d = 11"
      },
      {
        "id": 34,
        "part": 3,
        "shortTag": "P3.11",
        "label": "Phần 3 - Câu 11",
        "topic": "B1.D2: Khoảng cách mặt phẳng",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b1_d2_p3_q11_p31_1.png",
        "question": "Biết góc quan sát ngang của một camera là 116°. Trong không gian Oxyz, camera được đặt tại điểm A(2;1;5) và chiếu thẳng về phía mặt phẳng (P):2x− y−2z + 13 = 0. Hỏi vùng quan sát được trên mặt phẳng (P) của camera là hình tròn có đường kính bằng bao nhiêu? (làm tròn kết quả đến chữ số hàng chục)",
        "answer": "6,4",
        "acceptedAnswers": [
          "6,4",
          "6.4"
        ],
        "kqCells": [
          "6",
          ",",
          "4",
          ""
        ],
        "explanation": "Gọi A,B,C là các điểm như hình vẽ bên dưới và H là hình chiếu vuông góc của A lên mặt<br>phẳng (P)<br>Hình vẽ minh hoạ<br>2·2−1−2·5 + 13<br>Theo đề B<br>AC = 116° ⇒ B<br>AH = 58°. Khi đó AH = d<br>(A,(P))<br>= = 2 (đvđd).<br>4 + 1 + 4<br>BH<br>Xét tam giác ABH vuông tại H, ta có: tanBAH = ⇒ BH = tan58°·2 = 2tan58° (đvđd).<br>AH<br>Suy ra BC = 2BH = 2·2tan58° ≈ 6,4(đvđd)<br>Vậy vùng quan sát của camera trên mặt phẳng (P) là hình tròn có đường kính khoảng 6,4<br>(đvđd)."
      }
    ]
  },
  "oxyz_b2_d1": {
    "id": "oxyz_b2_d1",
    "category": "oxyz",
    "badge": "BÀI 2 • DẠNG 1",
    "title": "Bài 2 - Dạng 1: Các yếu tố cơ bản & Vị trí tương đối của đường thẳng",
    "shortTitle": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
    "baiTitle": "Bài 2. Phương trình đường thẳng trong không gian",
    "dangTitle": "Dạng 1: Xác định các yếu tố cơ bản và vị trí tương đối của đường thẳng",
    "subtitle": "Bài 2. Phương trình đường thẳng trong không gian • Gồm Lý thuyết, Phương pháp, 4 Ví dụ tự luận & 28 câu Trắc nghiệm (P1: 18 • P2: 4 • P3: 6)",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">BÀI 2 • DẠNG 1</span>\n    <h4>Bài 2. Phương trình đường thẳng trong không gian — Dạng 1: Xác định các yếu tố cơ bản và vị trí tương đối của đường thẳng</h4>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-line\">Vectơ chỉ phương của đường phẳng: Vectơ u ≠ 0 được gọi là vectơ chỉ phương của đường thẳng Δ nếu</div>\n    <div class=\"oxyz-theory-line\">giá của u song song hoặc trùng với Δ.</div>\n    <div class=\"oxyz-theory-subhead\">Chú ý:</div>\n    <div class=\"oxyz-theory-bullet\">• Đường thẳng hoàn toàn xác định khi biết một điểm mà nó đi qua và một vectơ chỉ phương</div>\n    <div class=\"oxyz-theory-bullet\">• Nếu u là một vectơ chỉ phương của Δ thì k.u (với k là một số khác 0) cũng là một vectơ chỉ</div>\n    <div class=\"oxyz-theory-line\">phương của Δ.</div>\n    <div class=\"oxyz-theory-subhead\">Định nghĩa: Trong không gian Oxyz, cho đường thẳng Δ đi qua điểm A(x;y;z) và có vectơ chỉ phương</div>\n    <div class=\"oxyz-theory-line\">0 0 0</div>\n    <div class=\"oxyz-theory-line\">u = (a;b;c).</div>\n    <div class=\"oxyz-theory-line\">{ x = x + at</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">Hệ phương trình; y = y + bt được gọi là phương trình tham số của đường thẳng Δ (t là tham số, t ∈ ℝ).</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">z = z + ct</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-subhead\">Chú ý: Cho mặt phẳng (α) có phương trình tổng quát là Ax + By + Cz + D = 0. Khi đó:</div>\n    <div class=\"oxyz-theory-line\">{ x = x + at</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-bullet\">• Với các số a,b,c không đồng thời bằng 0 thì hệ phương trình; y = y + bt (t ∈ ℝ) xác định một</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">} z = z + ct</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">đường thẳng đi qua M (x;y;z) và có vectơ chỉ phương là u = (a;b;c).</div>\n    <div class=\"oxyz-theory-line\">0 0 0</div>\n    <div class=\"oxyz-theory-bullet\">• Từ phương trình tham số của đường thẳng, mỗi giá trị của tham số tương ứng với một điểm thuộc</div>\n    <div class=\"oxyz-theory-line\">đường thẳng đó và ngược lại.</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, cho đường thẳng Δ đi qua điểm A(x;y;z) và có vectơ chỉ phương u = (a;b;c)</div>\n    <div class=\"oxyz-theory-line\">0 0 0</div>\n    <div class=\"oxyz-theory-line\">với a,b, c là các số khác 0.</div>\n    <div class=\"oxyz-theory-line\">x−x y− y z−z</div>\n    <div class=\"oxyz-theory-line\">Hệ phương trình: 0 = 0 = 0 được gọi là phương trình chính tắc của đường thẳng Δ.</div>\n    <div class=\"oxyz-theory-line\">a b c</div>\n    <div class=\"oxyz-theory-line\">1 Vectơ chỉ phương của đường thẳng</div>\n    <div class=\"oxyz-theory-line\">2 Phương trình tham số của đường thẳng</div>\n    <div class=\"oxyz-theory-line\">3 Phương trình chính tắc của đường thẳng</div>\n    <div class=\"oxyz-theory-line\">4 Lập phương trình đường thẳng đi qua hai điểm</div>\n    <div class=\"oxyz-theory-line\">Trong không Oxyz, cho hai điểm phân biệt A (x;y;z) và A (x;y;z). Đường thẳng AA có vectơ chỉ</div>\n    <div class=\"oxyz-theory-line\">1 1 1 1 2 2 2 2 1 2</div>\n    <div class=\"oxyz-theory-line\">phương AA = (x −x;y − y;z −z).</div>\n    <div class=\"oxyz-theory-line\">1 2 2 1 2 1 2 1</div>\n    <div class=\"oxyz-theory-line\">{ x = x + (x −x)t</div>\n    <div class=\"oxyz-theory-line\">1 2 1</div>\n    <div class=\"oxyz-theory-bullet\">• Đường thẳng AA có phương trình tham số là; y = y + (y − y)t (t ∈ ℝ).</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2 1</div>\n    <div class=\"oxyz-theory-line\">z = z + (z −z)t</div>\n    <div class=\"oxyz-theory-line\">} 1 2 1</div>\n    <div class=\"oxyz-theory-bullet\">• Trong trường hợp x ≠ x, y ≠ y, z ≠ z thì đường thẳng AA có phương trình chính tắc là:</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2 1 2 1 2</div>\n    <div class=\"oxyz-theory-line\">x−x y− y z−z</div>\n    <div class=\"oxyz-theory-line\">1 = 1 = 1.</div>\n    <div class=\"oxyz-theory-line\">x −x y − y z −z</div>\n    <div class=\"oxyz-theory-line\">2 1 2 1 2 1</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, cho hai đường thẳng Δ, Δ tương ứng có các vectơ chỉ phương u = (a;b;c),</div>\n    <div class=\"oxyz-theory-line\">1 2 1 1 1 1</div>\n    <div class=\"oxyz-theory-line\">u = (a;b;c). Khi đó Δ ⊥ Δ ⇔ u.u = 0 ⇔ aa + bb + cc = 0.</div>\n    <div class=\"oxyz-theory-line\">2 2 2 2 1 2 1 2 1 2 1 2 1 2</div>\n    <div class=\"oxyz-theory-line\">5 Vị trí tương đối giữa hai đường thẳng</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz cho hai đường thẳng Δ, Δ lần lượt đi qua các điểm A (x;y;z),A (x;y;z)</div>\n    <div class=\"oxyz-theory-line\">1 2 1 1 1 1 2 2 2 2</div>\n    <div class=\"oxyz-theory-line\">và tương ứng có vectơ chỉ phương u = (a;b;c), u = (a;b;c). Khi đó:</div>\n    <div class=\"oxyz-theory-line\">1 1 1 1 2 2 2 2</div>\n    <div class=\"oxyz-theory-bullet\">• Δ ∥Δ ⇔ u cùng phương với u và A ∉ Δ.</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2 1 2</div>\n    <div class=\"oxyz-theory-bullet\">• Δ ≡ Δ ⇔ u cùng phương với u và A ∈ Δ.</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2 1 2</div>\n    <div class=\"oxyz-theory-line\">{ [u,u] ≠ 0 { [u,u] ≠ 0</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2</div>\n    <div class=\"oxyz-theory-bullet\">• Δ và Δ cắt nhau ⇔;</div>\n    <div class=\"oxyz-theory-line\">⇔;</div>\n    <div class=\"oxyz-theory-line\">1 2 } A</div>\n    <div class=\"oxyz-theory-line\">1</div>\n    <div class=\"oxyz-theory-line\">2</div>\n    <div class=\"oxyz-theory-line\">⊥ [u</div>\n    <div class=\"oxyz-theory-line\">1</div>\n    <div class=\"oxyz-theory-line\">2</div>\n    <div class=\"oxyz-theory-line\">] } A</div>\n    <div class=\"oxyz-theory-line\">1</div>\n    <div class=\"oxyz-theory-line\">2</div>\n    <div class=\"oxyz-theory-line\">·[u</div>\n    <div class=\"oxyz-theory-line\">1</div>\n    <div class=\"oxyz-theory-line\">2</div>\n    <div class=\"oxyz-theory-line\">] = 0.</div>\n    <div class=\"oxyz-theory-bullet\">• Δ và Δ chéo nhau ⇔ AA.[u,u] ≠ 0.</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2 1 2</div>\n    <div class=\"oxyz-theory-subhead\">Chú ý: Trong không gian Oxyz, cho hai đường thẳng Δ, Δ tương ứng có vectơ chỉ phương lần lượt là</div>\n    <div class=\"oxyz-theory-line\">1 2</div>\n    <div class=\"oxyz-theory-line\">{ x = x + at { x = x + a t</div>\n    <div class=\"oxyz-theory-line\">1 1 2 2</div>\n    <div class=\"oxyz-theory-line\">u = (a;b;c), u = (a;b;c) và có phương trình tham số: Δ:; y = y + bt Δ:; y = y + bt</div>\n    <div class=\"oxyz-theory-line\">1 1 1 1 2 2 2 2 1 1 1 2 2 2</div>\n    <div class=\"oxyz-theory-line\">z = z + ct z = z + c t</div>\n    <div class=\"oxyz-theory-line\">} }</div>\n    <div class=\"oxyz-theory-line\">1 1 2 2</div>\n    <div class=\"oxyz-theory-line\">{ x + at = x + a s</div>\n    <div class=\"oxyz-theory-line\">1 1 2 2</div>\n    <div class=\"oxyz-theory-line\">Xét hệ phương trình hai ẩn t và s:; y + bt = y + b s (*). Khi đó</div>\n    <div class=\"oxyz-theory-line\">1 1 2 2</div>\n    <div class=\"oxyz-theory-line\">z + ct = z + c s</div>\n    <div class=\"oxyz-theory-line\">1 1 2 2</div>\n    <div class=\"oxyz-theory-bullet\">• Δ ∥Δ ⇔ u cùng phương với u và hệ (*) vô nghiệm.</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2</div>\n    <div class=\"oxyz-theory-bullet\">• Δ ≡ Δ ⇔ Hệ (*) có vô số nghiệm.</div>\n    <div class=\"oxyz-theory-line\">1 2</div>\n    <div class=\"oxyz-theory-bullet\">• Δ cắt Δ ⇔ Hệ (*) có nghiệm duy nhất.</div>\n    <div class=\"oxyz-theory-line\">1 2</div>\n    <div class=\"oxyz-theory-bullet\">• Δ và Δ chéo nhau ⇔ u và u không cùng phương và hệ (*) vô nghiệm.</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2</div>\n    <div class=\"oxyz-theory-line\">6 Góc</div>\n    <div class=\"oxyz-theory-line\">Góc giữa hai đường thẳng:</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, cho hai đường thẳng Δ,Δ tương ứng có u = (a;b;c) và u = (a;b;c) là hai</div>\n    <div class=\"oxyz-theory-line\">1 2 1 1 1 1 2 2 2 2</div>\n    <div class=\"oxyz-theory-line\">vectơ chỉ phương. Khi đó, ta có:</div>\n    <div class=\"oxyz-theory-line\">u.u aa + bb + cc</div>\n    <div class=\"oxyz-theory-line\">cos(Δ,Δ) = cos(u.u) = 1 2 = 1 2 1 2 1 2</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2 u.u a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>. a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup></div>\n    <div class=\"oxyz-theory-line\">1 2 1 1 1 2 2 2</div>\n    <div class=\"oxyz-theory-line\">Góc giữa đường thẳng và mặt phẳng:</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, cho đường thẳng Δ có vectơ chỉ phương u = (a;b;c) và mặt phẳng (P) có vectơ</div>\n    <div class=\"oxyz-theory-line\">pháp tuyến n = (A;B;C). Khi đó, ta có:</div>\n    <div class=\"oxyz-theory-line\">u.n aA + bB + cC</div>\n    <div class=\"oxyz-theory-line\">sin(Δ,(P)) = cos(u.n) = =</div>\n    <div class=\"oxyz-theory-line\">u. n a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>. A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div>\n    <div class=\"oxyz-theory-line\">Góc giữa hai mặt phẳng:</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, cho hai mặt phẳng (P),(P) có hai vectơ pháp tuyến lần lượt là n = (A;B;C)</div>\n    <div class=\"oxyz-theory-line\">1 2 1 1 1 1</div>\n    <div class=\"oxyz-theory-line\">và n = (A;B;C). Khi đó, ta có:</div>\n    <div class=\"oxyz-theory-line\">2 2 2 2</div>\n    <div class=\"oxyz-theory-line\">n.n AA + BB + CC</div>\n    <div class=\"oxyz-theory-line\">cos((P),(P)) = cos(n.n) = 1 2 = 1 2 1 2 1 2</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2 n.n A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup>. A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div>\n    <div class=\"oxyz-theory-line\">1 22 1 1 1 2 2 2</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 1: Xác định các yếu tố cơ bản của đường thẳng trong không gian. Vị trí tương đối trong không</div>\n    <div class=\"oxyz-theory-line\">gian</div>\n    <div class=\"oxyz-theory-subhead\">Phương pháp: Trong không gian Oxyz, vectơ u = (a;b;c) ≠ 0 là vectơ chỉ phương của đường thẳng Δ</div>\n    <div class=\"oxyz-theory-line\">thì vecto m = k.u cũng là vectơ chỉ phương của đường thẳng Δ.</div>\n    <div class=\"oxyz-theory-line\">{ x = x + at</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">Phương trình tham số Δ:; y = y + bt (t ∈ ℝ) có vectơ chỉ phương u = (a;b;c) (hệ số trước t).</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">} z = z + ct</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">x−x y− y z−z</div>\n    <div class=\"oxyz-theory-line\">Phương trình chính tắc Δ: 0 = 0 = 0 có vectơ chỉ phương u = (a;b;c) (hệ số ở mẫu).</div>\n    <div class=\"oxyz-theory-line\">a b c</div>\n    <div class=\"oxyz-theory-subhead\">Nhận xét:</div>\n    <div class=\"oxyz-theory-bullet\">• Với phương trình tham số lấy đúng thứ tự hệ số trước tham số t.</div>\n    <div class=\"oxyz-theory-bullet\">• Với phương trình chính tắc lấy hệ số dưới mẫu.</div>\n    <div class=\"oxyz-theory-bullet\">• Nếu giả thiết chưa đúng cấu trúc, ta phải sắp xếp lại rồi mới lấy hệ số.</div>\n  </div>\n  <div class=\"oxyz-theory-figures-grid\">\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b2_d2_theory_q0_p34_1.png', 'Góc giữa đường thẳng và mặt phẳng')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b2_d2_theory_q0_p34_1.png\" alt=\"Góc giữa đường thẳng và mặt phẳng\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Góc giữa đường thẳng và mặt phẳng</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b2_d2_theory_q0_p34_2.png', 'Góc giữa hai mặt phẳng')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b2_d2_theory_q0_p34_2.png\" alt=\"Góc giữa hai mặt phẳng\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Góc giữa hai mặt phẳng</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b2_d2_theory_q0_p34_3.png', 'Vị trí tương đối trong không gian Oxyz')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b2_d2_theory_q0_p34_3.png\" alt=\"Vị trí tương đối trong không gian Oxyz\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Vị trí tương đối trong không gian Oxyz</div>\n    </div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Bài tập tự luận 1",
        "question": "Trong không gian Oxyz, xác định một vectơ chỉ phương của đường thẳng dưới đây: { x = 2−t x−1 y−2 z + 1 x−1 y−1 2−z a) d:; y = 1 + 2t b) d: = = c) d: = = 2 1 2 2 2 1 z = 3 + t }",
        "figure": null,
        "explanation": "a) Đường thẳng d có một vectơ chỉ phương là u = (−1;2;1).<br>b) Đường thẳng d có một vectơ chỉ phương là v = (2;1;2).<br>x−1 y−1 2−z x−1 y−1 z−2<br>c) Ta viết lại d: = = ⇔ d: = = ⇒ u = (2;2;−1).<br>2 2 1 2 2 −1 1"
      },
      {
        "id": 2,
        "label": "Bài tập tự luận 2",
        "question": "Cho hình hộp ABCD.A′B′C′D′. Trong các vectơ có điểm đầu và điểm cuối là các đỉnh của hình hộp, những véc tơ nào là véc tơ chỉ phương của đường thẳng AC?",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d1_tuluan_q2_p35_1.png",
        "explanation": "Vì AC song song với A′C′ nên các vectơ chỉ phương của đường thẳng AC thỏa bài toán là các<br>vectơ sau đây: AC,CA,A′C′,C′A′.<br>{ x = 2 + 3t"
      },
      {
        "id": 3,
        "label": "Bài tập tự luận 3",
        "question": "Trong không gian Oxyz, cho đường thẳng Δ:; y = −1 + t (t ∈ ℝ). Trong các điểm sau đây, }z = 5−2t điểm nào thuộc đường thẳng Δ? A. M (11;2;4). B. N(5;0;3). C. P(10;3;−3). D. Q(8;−3;1).",
        "figure": null,
        "explanation": "{ 11 = 2 + 3t t = 3<br>Thế tọa độ M(11;2;4) vào phương trình đường thẳng Δ ta được; 2 = −1 + t ⇔; t = 3<br>4 = 5−2t 1<br>t =<br>} 2<br>Vì hệ phương trình trên vô nghiệm nên M không thuộc đường thẳng Δ.<br>{ 5 = 2 + 3t { t = 1<br>Thế tọa độ N(5;0;3) vào phương trình đường thẳng Δ ta được; 0 = −1 + t ⇔; t = 1<br>}3 = 5−2t }t = 1<br>Vì hệ phương trình trên có nghiệm nên N thuộc đường thẳng Δ.<br>{ 8<br>t =<br>{ 10 = 2 + 3t 3<br>Thế tọa độ P(10;3;−3) vào phương trình đường thẳng Δ ta được; 3 = −1 + t ⇔; t = 4<br>−3 = 5−2t t = 4<br>Vì hệ phương trình trên vô nghiệm nên P không thuộc đường thẳng Δ.<br>{ 8 = 2 + 3t { t = 2<br>Thế tọa độ Q(8;−3;1) vào phương trình đường thẳng Δ ta được; −3 = −1 + t ⇔; t = −2<br>}1 = 5−2t }t = 2<br>Vì hệ phương trình trên vô nghiệm nên Q không thuộc đường thẳng Δ."
      },
      {
        "id": 4,
        "label": "Bài tập tự luận 4",
        "question": "Trong không gian Oxyz, xét vị trí tương đối của các cặp đường thẳng sau: { x = 1 + t { x = 2 + 2t′ a) d:; y = 2t (t ∈ ℝ) và d′:; y = 3 + 4t′(t′ ∈ ℝ) } z = 3−t } z = 5−2t′ { x = 1 + 2t x−1 y + 2 z + 1 b) d:; y = −1 + 3t(t ∈ ℝ) và d′: = = 3 2 2 z = 5 + t } x y−1 z x−1 y−2 z + 2 c) d: = = và d′: = = 1 −1 2 5 1 −2",
        "figure": null,
        "explanation": "a) Ta có các vectơ chỉ phương của d và d′ lần lượt là a = (1;2;−1) và a′ = (2;4;−2).<br>Vì a′ = 2a nên a và a′ cùng phương ⇒ d và d′ song song với nhau hoặc trùng nhau.<br>Xét điểm M(1;0;3) ∈ d nên ta có M ∉ d′ nên d∥d′.<br>b) Ta có d và d′ lần lượt nhận a = (2;3;1) và a′ = (3;2;2) là các vectơ chỉ phương.<br>Vì a và a′ không cùng phương nên d và d′ cắt nhau hoặc chéo nhau.<br>Đường thẳng d′ qua M(1;−2;−1); có VTCP a′ = (3;2;2) nên có phương trình là:<br>{ x = 1 + 3t′<br>d′:; y = −2 + 2t′(t′ ∈ ℝ)<br>z = −1 + 2t′<br>{ 3<br>t = −<br>{ 1 + 2t = 1 + 3t′<br>Xét hệ phương trình:; −1 + 3t = −2 + 2t′ ⇔; t′ = − ⇒ Hệ vô nghiệm<br>5 + t = −1 + 2t′<br>} 5 + t = −1 + 2t′<br>Vậy hai đường thẳng d và d′ chéo nhau.<br>c) Ta có: d đi qua M(0;1;0) và có vectơ chỉ phương a = (1;−1;2);<br>Đường thẳng d′ đi qua M′(1;2;−2) và có vectơ chỉ phương a′ = (5;1;−2).<br>Nên phương trình tham số của d và d′ lần lượt là:<br>{ x = t { x = 1 + 5t′<br>d:; y = 1−t và d′:; y = 2 + t′<br>z = 2t<br>z = −2−2t′<br>{ { 2<br>{ t = 1 + 5t′ t−5t′ = 1 t = −<br>Xét hệ phương trình; 1−t = 2 + t′ ⇔; −t−t′ = 1 ⇔; ⇒ hệ có nghiệm duy nhất<br>2t = −2−2t′ 2t + 2t′ = −2 t′ = −<br>} } 3<br>Vậy hai đường thẳng d và d′ cắt nhau."
      }
    ],
    "questions": [
      {
        "id": 1,
        "part": 1,
        "shortTag": "P1.1",
        "label": "Phần 1 - Câu 1",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, vectơ nào là một vectơ chỉ phương của đường thẳng có x−1 3y 3−z phương trình = =? 3 2 1 (3) (2)",
        "options": {
          "A": "a = 3;;1.",
          "B": "a = (9;2;3).",
          "C": "a = (3;2;1).",
          "D": "a = 3;;−1. 2 3"
        },
        "answer": "D",
        "explanation": "x−1 3y 3−z x−1 y z−3<br>Ta có: = = ⇒ = =<br>3 2 1 3 2 −1<br>(2)<br>Một vectơ chỉ phương của đường thẳng có phương trình là a = 3;;−1"
      },
      {
        "id": 2,
        "part": 1,
        "shortTag": "P1.2",
        "label": "Phần 1 - Câu 2",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng D vuông góc với mặt phẳng (α) có phương trình x + 2z + 3 = 0. Một vectơ chỉ phương của D là",
        "options": {
          "A": "a = (1;0;2).",
          "B": "a = (2;−1;0).",
          "C": "a = (1;2;3).",
          "D": "a = (2;0;−1)."
        },
        "answer": "A",
        "explanation": "Đường thẳng D vuông góc với mặt phẳng (α): x + 2z + 3 = 0 có một vectơ chỉ phương là<br>a = (1;0;2)."
      },
      {
        "id": 3,
        "part": 1,
        "shortTag": "P1.3",
        "label": "Phần 1 - Câu 3",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho OA = 2i + 3j−5k; OB = −2j−4k. Một vectơ chỉ phương của đường thẳng AB là",
        "options": {
          "A": "a = (−2;−5;−1).",
          "B": "a = (2;5;−1).",
          "C": "a = (2;5;−9).",
          "D": "a = (2;1;−9)."
        },
        "answer": "B",
        "explanation": "Một vectơ chỉ phương của đường thẳng AB là a = (2;5;−1).<br>x−3 y−4 z + 1"
      },
      {
        "id": 4,
        "part": 1,
        "shortTag": "P1.4",
        "label": "Phần 1 - Câu 4",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng d: = =. Vectơ nào dưới đây là một 2 −5 3 vectơ chỉ phương của d?",
        "options": {
          "A": "a = (3;4;−1).",
          "B": "a = (2;−5;3).",
          "C": "a = (−3;−4;1).",
          "D": "a = (2;−5;−3)."
        },
        "answer": "B",
        "explanation": "x−3 y−4 z + 1<br>Một vectơ chỉ phương của đường thẳng d: = = là a = (2;−5;3).<br>2 −5 3<br>{ x = 2−t"
      },
      {
        "id": 5,
        "part": 1,
        "shortTag": "P1.5",
        "label": "Phần 1 - Câu 5",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, đường thẳng d:; y = 1 + 2t có một vectơ chỉ phương là z = 3 + t }",
        "options": {
          "A": "a = (−1;2;1).",
          "B": "a = (2;1;3).",
          "C": "a = (1;2;3).",
          "D": "a = (2;0;−1)."
        },
        "answer": "A",
        "explanation": "{ x = 2−t<br>Đường thẳng d:; y = 1 + 2t có một vectơ chỉ phương là a = (−1;2;1).<br>z = 3 + t"
      },
      {
        "id": 6,
        "part": 1,
        "shortTag": "P1.6",
        "label": "Phần 1 - Câu 6",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, tọa độ nào sau đây là tọa độ của một véctơ chỉ phương của đường thẳng { x = 2 + 4t Δ:; y = 1−6t,(t ∈ ℝ)? z = 9t } (1 1 3) (1 1 3)",
        "options": {
          "A": "a =;;.",
          "B": "a = (2;1;0).",
          "C": "a = (4;−6;0).",
          "D": "a =;−;. 3 2 4 3 2 4"
        },
        "answer": "D",
        "explanation": "{ x = 2 + 4t<br>(1 1 3)<br>Một vectơ chỉ phương của đường thẳng Δ:; y = 1−6t là a =;−;<br>3 2 4<br>z = 9t<br>x + 1 y−2 z−1"
      },
      {
        "id": 7,
        "part": 1,
        "shortTag": "P1.7",
        "label": "Phần 1 - Câu 7",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, điểm nào dưới đây thuộc đường thẳng d: = =? −1 3 3",
        "options": {
          "A": "Q(1;−2;−1).",
          "B": "N(−1;3;2).",
          "C": "A(1;2;1).",
          "D": "P(−1;2;1)."
        },
        "answer": "D",
        "explanation": "x + 1 y−2 z−1<br>Điểm thuộc đường thẳng d: = = là P(−1;2;1).<br>−1 3 3<br>x−1 y−2 z + 1"
      },
      {
        "id": 8,
        "part": 1,
        "shortTag": "P1.8",
        "label": "Phần 1 - Câu 8",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng d: = =. Điểm nào sau đây thuộc d? 2 3 −1",
        "options": {
          "A": "Q(−1;−2;1).",
          "B": "N(−1;3;2).",
          "C": "A(2;3;−1).",
          "D": "P(1;2;−1)."
        },
        "answer": "D",
        "explanation": "x−1 y−2 z + 1<br>Điểm thuộc đường thẳng d: = = là P(1;2;−1).<br>2 3 −1<br>{ x = 1−t"
      },
      {
        "id": 9,
        "part": 1,
        "shortTag": "P1.9",
        "label": "Phần 1 - Câu 9",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, điểm nào dưới đây thuộc đường thẳng d:; y = 5 + t? z = 2 + 3t }",
        "options": {
          "A": "Q(−1;1;3).",
          "B": "N(1;−1;3).",
          "C": "A(−2;5;−2).",
          "D": "P(1;5;2)."
        },
        "answer": "D",
        "explanation": "{ x = 1−t<br>Điểm thuộc đường thẳng d:; y = 5 + t là P(1;5;2).<br>z = 2 + 3t<br>{ x = 1 + 2t"
      },
      {
        "id": 10,
        "part": 1,
        "shortTag": "P1.10",
        "label": "Phần 1 - Câu 10",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, đường thẳng d:; y = 3−t không đi qua điểm nào dưới đây? z = 1−t }",
        "options": {
          "A": "Q(3;2;0).",
          "B": "N(5;1;−1).",
          "C": "A(1;3;1).",
          "D": "P(0;1;2)."
        },
        "answer": "D",
        "explanation": "{ x = 1 + 2t<br>Điểm không thuộc đường thẳng d:; y = 3−t là P(0;1;2).<br>z = 1−t<br>x−1 y + 2 z−4"
      },
      {
        "id": 11,
        "part": 1,
        "shortTag": "P1.11",
        "label": "Phần 1 - Câu 11",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ: = =. Trong các điểm sau đây, 3 −5 1 điểm nào không thuộc đường thẳng Δ?",
        "options": {
          "A": "M(4;−7;−2).",
          "B": "N(7;−12;6).",
          "C": "P(10;−17;7).",
          "D": "Q(13;−22;8)."
        },
        "answer": "A",
        "explanation": "Thế tọa độ M(4;−7;−2) vào phương trình đường thẳng Δ ta được<br>4−1 −7 + 2 −2−4<br>= = ⇔ 1 = 1 = −6 (vô lý).<br>3 −5 1<br>Suy ra M không thuộc đường thẳng Δ.<br>Thế tọa độ N(7;−12;6) vào phương trình đường thẳng Δ ta được<br>7−1 −12 + 2 6−4<br>= = ⇔ 2 = 2 = 2 (đúng).<br>3 −5 1<br>Suy ra N thuộc đường thẳng Δ.<br>Thế tọa độ P(10;−17;7) vào phương trình đường thẳng Δ ta được<br>10−1 −17 + 2 7−4<br>= = ⇔ 3 = 3 = 3 (đúng).<br>3 −5 1<br>Suy ra P thuộc đường thẳng Δ.<br>Thế tọa độ Q(13;−22;8) vào phương trình đường thẳng Δ ta được<br>13−1 −22 + 2 8−4<br>= = ⇔ 4 = 4 = 4 (đúng).<br>3 −5 1<br>Suy ra Q thuộc đường thẳng Δ.<br>{ x = 2 + 3t"
      },
      {
        "id": 12,
        "part": 1,
        "shortTag": "P1.12",
        "label": "Phần 1 - Câu 12",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ:; y = −1 + t (t ∈ ℝ). Véc tơ nào sau đây là một z = 5−2t } véc tơ chỉ phương của đường thẳng Δ?",
        "options": {
          "A": "u = (2;−1;5).",
          "B": "(2;−1;−2).",
          "C": "u = (3;1;5).",
          "D": "u = (3;1;−2)."
        },
        "answer": "D",
        "explanation": "Một vectơ chỉ phương của đường thẳng Δ là u = (3;1;−2).<br>x−1 y + 2 z−4"
      },
      {
        "id": 13,
        "part": 1,
        "shortTag": "P1.13",
        "label": "Phần 1 - Câu 13",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ: = =. Véc tơ nào sau đây là một 3 −5 1 véc tơ chỉ phương của đường thẳng Δ?",
        "options": {
          "A": "u = (1;−2;4).",
          "B": "u = (3;−5;1).",
          "C": "u = (−1;2;−4).",
          "D": "u = (3;−5;4)."
        },
        "answer": "B",
        "explanation": "Một véc tơ chỉ phương của đường thẳng Δ là u = (3;−5;1)."
      },
      {
        "id": 14,
        "part": 1,
        "shortTag": "P1.14",
        "label": "Phần 1 - Câu 14",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian tọa độ Oxyz, xét vị trí tương đối của hai đường thẳng x−1 y + 1 z x−3 y−3 z + 2 Δ: = =, Δ: = = 1 2 2 3 2 −1 −2 1",
        "options": {
          "A": "Δ song song với Δ.",
          "B": "Δ chéo với Δ. 1 2 1 2",
          "C": "Δ cắt Δ.",
          "D": "Δ trùng với Δ. 1 2 1 2"
        },
        "answer": "C",
        "explanation": "2 2<br>Vì ≠ nên vectơ chỉ phương u = (2;2;3) của đường thẳng Δ không cùng phương với<br>−1 −2 1 1<br>vectơ chỉ phương u = (−1;−2;1) của Δ suy ra Δ chéo với Δ hoặc Δ cắt Δ.<br>2 2 1 2 1 2<br>Lấy M(1;−1;0) ∈ Δ, N(3;3;−2) ∈ Δ. Ta có MN = (2;4;−2).<br>1 2<br>Khi đó [u,u].MN = 0 suy ra u,u,MN đồng phẳng.<br>1 2 1 2<br>Vậy Δ cắt Δ.<br>1 2<br>{ x = 1 + t { x = 1 + 2t'"
      },
      {
        "id": 15,
        "part": 1,
        "shortTag": "P1.15",
        "label": "Phần 1 - Câu 15",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng d:; y = 2 + t và d':; y = −1 + 2t'. Mệnh đề nào } z = 3−t } z = 2−2t' sau đây đúng?",
        "options": {
          "A": "Hai đường thẳng d và d′ chéo nhau.",
          "B": "Hai đường thẳng d và d′ song song với nhau.",
          "C": "Hai đường thẳng d và d′ cắt nhau.",
          "D": "Hai đường thẳng d và d′ trùng nhau."
        },
        "answer": "B",
        "explanation": "Đường thẳng d có vectơ chỉ phương u = (1;1;−1)<br>Đường thẳng d′ có vectơ chỉ phương u = (2;2;−2).<br>Ta có u = 2.u nên đường thẳng d và d' song song hoặc trùng nhau.<br>2 1<br>Chọn điểm M(1;2;3) thuộc đường thẳng d, thay tọa độ điểm M vào phương trình đường<br>{ 1 = 1 + 2t′<br>thẳng d', ta có d′:; 2 = −1 + 2t′ vô nghiệm, vậy M không thuộc đường thẳng d′ nên 2 đường<br>3 = 2−2t′<br>thẳng song song nhau.<br>x y−1 z + 2"
      },
      {
        "id": 16,
        "part": 1,
        "shortTag": "P1.16",
        "label": "Phần 1 - Câu 16",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ toạ độ Oxyz, cho hai đường thẳng thẳng d: = = và 2 −1 1 { x = −1 + 2t d′:; y = 1 + t. Khẳng định nào sau đây là khẳng định đúng? z = 3 }",
        "options": {
          "A": "d và d′ chéo nhau.",
          "B": "d song song với d′.",
          "C": "d trùng với d′.",
          "D": "d cắt d′ tại điểm A(0;1;−2)."
        },
        "answer": "A",
        "explanation": "Làm bằng phương pháp tự luận:<br>Đường thẳng d đi qua điểm M(0;1;−2) và có vectơ chỉ phương u = (2;−1;1).<br>Đường thẳng d′ đi qua điểm N(−1;1;3) và có vectơ chỉ phương v = (2;1;0).<br>⇒ [u,v] = (−1;2;4), MN = (−1;0;5) ⇒ [u,v].MN = 21 ≠ 0 ⇒ d và d′ chéo nhau.<br>Làm bằng phương pháp trắc nghiệm:<br>Ta có: u = (2;−1;1) và v = (2;1;0) không cùng phương ⇒ Đáp án B, C loại.<br>Điểm A(0;1;−2) không thuộc đường thẳng d′ ⇒ Đáp án D loại.<br>{ x = 4 + 4t<br>x−8 y + 2 z−3"
      },
      {
        "id": 17,
        "part": 1,
        "shortTag": "P1.17",
        "label": "Phần 1 - Câu 17",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ: = = và Δ:; y = 3−t. Giá trị 1 2 4 m−1 2 } z = 2 + 2t của mđể Δ và Δ vuông góc là 1 2",
        "options": {
          "A": "m = 1.",
          "B": "m = −1.",
          "C": "m = 3.",
          "D": "m = −3."
        },
        "answer": "B",
        "explanation": "Đường thẳng Δ qua M (8;−2;3) và có véctơ chỉ phương u = (2;4;m−1).<br>1 1 1<br>Đường thẳng Δ qua M (4;3;2) và có véctơ chỉ phương u = (4;−1;2).<br>2 2 2<br>Ta có: Δ và Δ vuông góc kh u.u = 0 ⇔ 8−4 + 2m−2 = 0 ⇔ m = −1<br>1 2 1 2<br>x−1 y−7 z−3"
      },
      {
        "id": 18,
        "part": 1,
        "shortTag": "P1.18",
        "label": "Phần 1 - Câu 18",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai đường thẳng d: = = và 1 2 1 4 x y−3 z + 4 d: = = cắt nhau tại điểm M có toạ độ bằng 2 3 −2 1",
        "options": {
          "A": "M(0;3;−4).",
          "B": "M(1;7;3).",
          "C": "M(−3;5;−5).",
          "D": "M(3;−5;5)."
        },
        "answer": "C",
        "explanation": "Chuyển hai đường thẳng đã cho về dạng phương trình tham số, sau đó:<br>{ 3t' = 1 + 2t<br>{ t' = −1<br>Xét hệ phương trình:; 3−2t' = 7 + t ⇔;<br>}t = −2<br>}−4 + t' = 3 + 4t<br>Suy ra hai đường thẳng cắt nhau tại điểm M(−3;5;−5)."
      },
      {
        "id": 19,
        "part": 2,
        "shortTag": "P2.1",
        "label": "Phần 2 - Câu 1",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng d: = =. Xét tính đúng sai của các 1 −1 2 khẳng định sau:",
        "statements": {
          "a": "Điểm M(1;3;2) nằm trên đường thẳng d.",
          "b": "Một vectơ chỉ phương của d là u = (1;3;2) { x = 1 + t",
          "c": "Đường thẳng dsong song với đường thẳng Δ:; y = 3−t. } z = 2 + 2t { x = −3t",
          "d": "Đường thẳng d và đường thẳng d′:; y = t là hai đường chéo nhau. } z = −1−3t"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Tọa độ điểm M(1;3;2) thỏa mãn phương trình d<br>b) Vectơ chỉ phương của d là là u(1;−1;2)<br>{ x = 1 + t<br>c) Sai: Đường thẳng d song song với đường thẳng Δ:; y = 3−t.<br>z = 2 + 2t<br>{ x = 1 + t′<br>x−1 y−3 z−2<br>d: = = ⇔; y = 3−t′<br>1 −1 2<br>z = 2 + 2t′<br>{ 1 + t′ = 1 + t<br>Xét hệ phương trình; 3−t′ = 3−t hệ có vô số nghiệm nên d ≡ Δ<br>2 + 2t′ = 2 + 2t<br>{ x = −3t<br>d) Đúng: Đường thẳng d và đường thẳngd′:; y = t là hai đường chéo nhau.<br>z = −1−3t<br>Đường thẳng d đi qua điểm M(1;3;2) có vectơ chỉ phương là u = (1;−1;2) và đường thẳng d′<br>đi qua N(0;0;−1) có vectơ chỉ phương là u′ = (−3;1;−1).<br>Ta có [u,u′].MN = 21 ≠ 0 nên d và d′ chéo nhau.<br>{ x = 1 + 2t"
      },
      {
        "id": 20,
        "part": 2,
        "shortTag": "P2.2",
        "label": "Phần 2 - Câu 2",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ:; y = 3 + t (t ∈ ℝ). Xét tính đúng sai của các khẳng }z = 4−5t định sau:",
        "statements": {
          "a": "Một vectơ chỉ phương của đường thẳng Δ là: u = (1;3;4).",
          "b": "Điểm A(5;5;−6) thuộc đường thẳng Δ. { x = 2 + 3t",
          "c": "Đường thẳng d:; y = 4t (t ∈ ℝ) vuông góc với đường thẳng Δ. z = 3 + 2t }",
          "d": "Đường thẳng Δ cắt mặt phẳng (Oxz) tại điểm M(−5;0;19)."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": true
        },
        "explanation": "a) Sai: Đường thẳng Δ có một vectơ chỉ phương là u = (2;1;−5).<br>{ 5 = 1 + 2t<br>b) Đúng: Ta có:; 5 = 3 + t ⇔ t = 2.<br>−6 = 4−5t<br>c) Đúng: Ta có: u = (2;1;−5) và u = (3;4;2) và dễ thấy: u.u = 0.<br>Δ d Δ d<br>d) Đúng: Ta có: y = 0 ⇔ 3 + t = 0 ⇔ t = −3 nên điểm M(−5;0;19) là giao điểm của đường thẳng<br>Δ và mặt phẳng (Oxz)."
      },
      {
        "id": 21,
        "part": 2,
        "shortTag": "P2.3",
        "label": "Phần 2 - Câu 3",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai đường thẳng Δ, Δ lần lượt có phương trình 1 2 x−1 y−2 z + 1 x−4 y + 1 z là:Δ: = = và Δ: = =. Xets 1 1 −1 2 2 3 1 −1",
        "statements": {
          "a": "Đường thẳng Δ có một vectơ chỉ phương là: u = (1;−1;2) và đi qua điểm A(−1;−2;1). 1 1",
          "b": "Điểm M(10;1;−2) thuộc đường thẳng Δ. Xét tính đúng sai của các khẳng định sau: 2",
          "c": "Đường thẳng Δ vuông góc với đường thẳng Δ. 1 2",
          "d": "Đường thẳng Δ và đường thẳng Δ là hai đường thẳng chéo nhau. 1 2"
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": true
        },
        "explanation": "a) Sai: Đường thẳng Δ có một vectơ chỉ phương là: u = (1;−1;2) và đi qua điểm A(1;2;−1)<br>1 1<br>10−4 1 + 1 −2<br>b) Đúng: Ta có = = là mệnh đề đúng.<br>3 1 −1<br>c) Đúng: Ta có: u = (2;1;−5) và u = (3;4;−2) và dễ thấy: u.u = 0.<br>Δ d Δ d<br>d) Đúng: Đường thẳng Δ có một vectơ chỉ phương là: u = (1;−1;2) và đi qua điểm A(1;2;−1).<br>1 1<br>Đường thẳng Δ có một vectơ chỉ phương là: u = (3;1;−1) và đi qua điểm M(10;1;−2).<br>2 2<br>Ta có: MA = (9;−1;−1) và [u,u].MA = −20.<br>1 2"
      },
      {
        "id": 22,
        "part": 2,
        "shortTag": "P2.4",
        "label": "Phần 2 - Câu 4",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai đường thẳng Δ, Δ lần lượt có phương trình 1 2 x y−3 z + 3 x + 4 y + 2 z−4 là: Δ: = = và Δ: = =. Xét tính đúng sai của các khẳng định sau: 1 1 −1 2 2 2 1 −1",
        "statements": {
          "a": "Đường thẳng Δ có một vectơ chỉ phương là: u = (1;−1;2) và đi qua điểm A(−1;4;−5). 1 1",
          "b": "Đường thẳng Δ không cắt trục toạ độ Oz. 2",
          "c": "Đường thẳng Δ song song với đường thẳng Δ. 1 2",
          "d": "Đường thẳng Δ và đường thẳng Δ là hai đường thẳng chéo nhau. 1 2"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": false
        },
        "explanation": "a) Đúng: Đường thẳng Δ có một vectơ chỉ phương là: u = (1;−1;2) và đi qua điểm A(−1;4;−5)<br>b) Sai: Đường thẳng Δ cắt trục toạ độ Oz tại M(0;0;2).<br>c) Sai: Ta có: u = (1;−1;2) và u = (2;1;−1) nên u,u không cùng phương.<br>1 2 Δ d<br>d) Sai: Đường thẳng Δ có một vectơ chỉ phương là: u = (1;−1;2) và đi qua điểm A(−1;4;−5).<br>1 1<br>Đường thẳng Δ có một vectơ chỉ phương là: u = (2;1;−1) và đi qua điểm M(−4;−2;4).<br>2 2<br>Ta có: MA = (−3;−6;9) và [u,u].MA = 0.<br>1 2"
      },
      {
        "id": 23,
        "part": 3,
        "shortTag": "P3.1",
        "label": "Phần 3 - Câu 1",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d1_p3_q2_p40_1.png",
        "question": "Cho hình hộp ABCD.A′B′C′D′. Có bao nhiêu vectơ chỉ phương của đường thẳng AB có điểm đầu và điểm cuối là đỉnh của hình hộp.",
        "answer": "8",
        "acceptedAnswers": [
          "8"
        ],
        "kqCells": [
          "8",
          "",
          "",
          ""
        ],
        "explanation": "Đường thẳng AB nhận các vectơ AB,BA,A′B′,B′A′,CD,DC,C′D′,D′C′ là các vectơ chỉ<br>phương.<br>Vậy có 8 vectơ thỏa mãn."
      },
      {
        "id": 24,
        "part": 3,
        "shortTag": "P3.2",
        "label": "Phần 3 - Câu 2",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz. Khi m ∈ ℝ\\{a} thì đường thẳng d đi qua hai điểm A(1;2;0); B(m;−1;3) cắt mặt phẳng (P): x + y + z−6 = 0. Giá trị của a bằng bao nhiêu?",
        "answer": "1",
        "acceptedAnswers": [
          "1"
        ],
        "kqCells": [
          "1",
          "",
          "",
          ""
        ],
        "explanation": "Đường thẳng d đi qua điểm A(1;2;0) và có vecto chỉ phương AB(m−1;−3;3)<br>Mặt phẳng (P) có vecto pháp tuyến n(1;1;1)<br>d cắt (P) ⇔ n.u = m−1−3 + 3 = 2 ≠ 0 ⇔ m ≠ 1<br>Vậy với m ∈ ℝ\\{1} thì d cắt (P) nên a = 1."
      },
      {
        "id": 25,
        "part": 3,
        "shortTag": "P3.3",
        "label": "Phần 3 - Câu 3",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho các điểm M(−1;3;1),N(−2;1;−2), P(1;2;3), Q(2;−1;2), x−1 y−2 z−3 S(1;2;−3). Đường thẳng d: = = đi qua bao nhiêu điểm trong số các điểm đã 2 −1 2 cho?",
        "answer": "2",
        "acceptedAnswers": [
          "2"
        ],
        "kqCells": [
          "2",
          "",
          "",
          ""
        ],
        "explanation": "Ta có: M(−1;3;1),P(1;2;3) ∈ (d); N(−2;1;−2),Q(2;−1;2),S(1;2;−3) ∉ (d)<br>Vậy đường thẳng (d) đi qua hai điểm.<br>{ x = 1 + 2t"
      },
      {
        "id": 26,
        "part": 3,
        "shortTag": "P3.4",
        "label": "Phần 3 - Câu 4",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng d:; y = 2−t,t ∈ ℝ và các điểm M(−1;3;1), } z = 3 + 2t N(−2;1;−2), P(1;2;3), Q(2;−1;2), S(1;2;−3). Có mấy điểm không thuộc đường thẳng (d) cho trước?",
        "answer": "3",
        "acceptedAnswers": [
          "3"
        ],
        "kqCells": [
          "3",
          "",
          "",
          ""
        ],
        "explanation": "Ta có: M(−1;3;1),P(1;2;3) ∈ (d); N(−2;1;−2),Q(2;−1;2),S(1;2;−3) ∉ (d)<br>Vậy có <b>3</b> điểm không thuộc đường thẳng <i>(d)</i> là <i>N, Q, S</i>."
      },
      {
        "id": 27,
        "part": 3,
        "shortTag": "P3.5",
        "label": "Phần 3 - Câu 5",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai điểm A(−1;2;4) và B(5;2;−2). Biết u = (a;b;1) là vectơ chỉ phương của đường thẳng Δ là đường đối xứng với AB qua mặt phẳng (Oyz). Tính a + b",
        "answer": "1",
        "acceptedAnswers": [
          "1"
        ],
        "kqCells": [
          "1",
          "",
          "",
          ""
        ],
        "explanation": "Do A′(1;2;4) và B′(−5;2;−2) là hai điểm đối xứng với A,B qua mặt phẳng (Oyz) vậy nên<br>đường thẳng Δ đi qua A′ và B′ nên Δ nhận A′B′ = (−6;0;−6) là vectơ chỉ phương.<br>Khi đó Δ nhận u = (1;0;1) là vecto chỉ phương ⇒ a = 1;b = 0 ⇒ a + b = 1.<br>x−1 y + 4 z−5"
      },
      {
        "id": 28,
        "part": 3,
        "shortTag": "P3.6",
        "label": "Phần 3 - Câu 6",
        "topic": "B2.D1: Yếu tố & VTTĐ Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai đường thẳng Δ: = = và 2 3 1 x + 3 y + 2 z−3 Δ′: = = đối xứng với nhau qua mặt phẳng (P). Biết (P) có vectơ pháp tuyến 2 3 1 là n = (a;b;3). Tính a + b.",
        "answer": "1",
        "acceptedAnswers": [
          "1"
        ],
        "kqCells": [
          "1",
          "",
          "",
          ""
        ],
        "explanation": "Đường thẳng Δ qua A(1;−4;5) và nhận u = (2;3;1) là vecto chỉ phương.<br>Đường thẳng Δ′ qua B(−3;−2;3) và nhận u = (2;3;1) là vecto chỉ phương ⇒ Δ∥Δ′.<br>Gọi A′ là điểm trên Δ′ sao cho AA′ ⊥ Δ.<br>Do A′ ∈ Δ′ ⇒ A′(−3 + 2t;−2 + 3t;3 + t) ⇒ AA′ = (−4 + 2t;2 + 3t;−2 + t).<br>Do AA′ ⊥ Δ ⇒ AA′.u = 0 ⇔ −8 + 4t + 6 + 9t−2 + t = 0 ⇔ t =<br>(−17 −8 23) (−24 20 −12) 4<br>⇒ A′;; ⇒ AA′ =;; = −.(6;−5;3)<br>7 7 7 7 7 7 7<br>Khi đó (P) nhận n = (6;−5;3) là vectơ pháp tuyến ⇒ a = 6;b = −5 ⇒ a + b = 1."
      }
    ]
  },
  "oxyz_b2_d2": {
    "id": "oxyz_b2_d2",
    "category": "oxyz",
    "badge": "BÀI 2 • DẠNG 2",
    "title": "Bài 2 - Dạng 2: Viết phương trình đường thẳng trong không gian",
    "shortTitle": "B2.D2: Viết PT Đường thẳng",
    "baiTitle": "Bài 2. Phương trình đường thẳng trong không gian",
    "dangTitle": "Dạng 2: Viết phương trình đường thẳng",
    "subtitle": "Bài 2. Phương trình đường thẳng trong không gian • Gồm Lý thuyết, Phương pháp, 12 Ví dụ tự luận & 65 câu Trắc nghiệm (P1: 38 • P2: 10 • P3: 17)",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">BÀI 2 • DẠNG 2</span>\n    <h4>Bài 2. Phương trình đường thẳng trong không gian — Dạng 2: Viết phương trình đường thẳng</h4>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-subhead\">Dạng 2: Viết phương trình đường thẳng</div>\n    <div class=\"oxyz-theory-subhead\">Phương pháp: Ta thường gặp các dạng toán sau:</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 1: Đường thẳng đi qua một điểm và có một vectơ chỉ phương:</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, phương trình đường thẳng Δ đi qua M và có vectơ chỉ phương a = (a;b;c)</div>\n    <div class=\"oxyz-theory-line\">{ x = x + at</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">x−x y− y z−z</div>\n    <div class=\"oxyz-theory-line\">Khi đó phương trình đường thẳng Δ; y = y + bt hoặc 0 = 0 = 0 nếu {a;b;c} ≠ 0.</div>\n    <div class=\"oxyz-theory-line\">0 a b c</div>\n    <div class=\"oxyz-theory-line\">} z = z + ct</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-subhead\">Chú ý: Phương trình tìm được không nằm trong các phương án, ta có thể thay tọa độ điểm mà đường</div>\n    <div class=\"oxyz-theory-line\">thẳng đi qua để kiểm tra.</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 2: Phương trình đường thẳng đi qua hai điểm:</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, viết phương trình đường thẳng Δ qua hai điểm A và B.</div>\n    <div class=\"oxyz-theory-bullet\">• Chọn A hoặc B là điểm mà Δđi qua.</div>\n    <div class=\"oxyz-theory-bullet\">• Nhận AB làm VTCP → u = AB.</div>\n    <div class=\"oxyz-theory-subhead\">Lưu ý: Phương trình tìm được không nằm trong các phương án, ta có thể thay tọa độ điểm mà đường</div>\n    <div class=\"oxyz-theory-line\">thẳng đi qua để kiểm tra.</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 3: Đường thẳng là giao tuyến của hai mặt phẳng</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz, viết phương trình đường thẳng Δ</div>\n    <div class=\"oxyz-theory-line\">Giao tuyến của hai mặt phẳng (α):Ax + By + Cz + D = 0 và (β):A′x + B′y + C′z + D′ = 0</div>\n    <div class=\"oxyz-theory-bullet\">• Cho 1 trong 3 ẩn x;y;z = 0 để tìm 2 ẩn còn lại</div>\n    <div class=\"oxyz-theory-line\">{ By + Cz + D = 0 { y =?</div>\n    <div class=\"oxyz-theory-bullet\">• x = 0 →; ⇔; ⇒ M(0;?;?)</div>\n    <div class=\"oxyz-theory-line\">}B′y + C′z + D′ = 0 }z =?</div>\n    <div class=\"oxyz-theory-bullet\">• Vecto chỉ phương u = [n;n].</div>\n    <div class=\"oxyz-theory-line\">α β</div>\n    <div class=\"oxyz-theory-subhead\">Lưu ý: Phương trình tìm được không nằm trong các phương án, ta có thể thay tọa độ điểm mà đường</div>\n    <div class=\"oxyz-theory-line\">thẳng đi qua để kiểm tra</div>\n  </div>\n  <div class=\"oxyz-theory-figures-grid\">\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b2_d2_method_q0_p41_1.png', 'Đường thẳng đi qua điểm M₀ và có VTCP u')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b2_d2_method_q0_p41_1.png\" alt=\"Đường thẳng đi qua điểm M₀ và có VTCP u\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Đường thẳng đi qua điểm M₀ và có VTCP u</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b2_d2_method_q0_p41_2.png', 'Đường thẳng đi qua hai điểm A, B')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b2_d2_method_q0_p41_2.png\" alt=\"Đường thẳng đi qua hai điểm A, B\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Đường thẳng đi qua hai điểm A, B</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b2_d2_method_q0_p41_3.png', 'Đường thẳng là giao tuyến của hai mặt phẳng')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b2_d2_method_q0_p41_3.png\" alt=\"Đường thẳng là giao tuyến của hai mặt phẳng\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Đường thẳng là giao tuyến của hai mặt phẳng</div>\n    </div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Bài tập tự luận 1",
        "question": "Trong không gian Oxyz, viết các phương trình tham số và chính tắc của đường thẳng Δ đi qua x−3 y−1 z + 5 A(1;1;2) và song song với đường thẳng d: = =. 2 1 3",
        "figure": null,
        "explanation": "Đường thẳng d có vectơ chỉ phương là u = (2;1;3)<br>Vì Δ∥d nên vectơ chỉ phương của Δ là u = (2;1;3)<br>Đường thẳng Δ đi qua điểm A(1;1;2) và có vectơ chỉ phương là u = (2;1;3).<br>{ x = 1 + 2t<br>Phương trình tham số của Δ là; y = 1 + t (t ∈ ℝ)<br>z = 2 + 3t<br>x−1 y−1 z−2<br>Phương trình chính tắc của Δ là = =.<br>2 1 3"
      },
      {
        "id": 2,
        "label": "Bài tập tự luận 2",
        "question": "Trong không gian Oxyz, viết các phương trình tham số và chính tắc của đường thẳng Δ đi qua A(2;−1;4) và vuông góc với mặt phẳng (P):x + 3y−z−1 = 0.",
        "figure": null,
        "explanation": "Mặt phẳng (P) có véc-tơ pháp tuyến là n = (1;3;−1)<br>Vì Δ ⊥ (P) nên véc-tơ chỉ phương của Δ là u = n = (1;3;−1)<br>Đường thẳng Δ đi qua điểm A(2;−1;4) và có véc-tơ chỉ phương là u = (1;3;−1).<br>{ x = 2 + t<br>Phương trình tham số của Δ là; y = −1 + 3t (t ∈ ℝ).<br>z = 4−t<br>x−2 y + 1 z−4<br>Phương trình chính tắc của Δ là = =.<br>1 3 −1"
      },
      {
        "id": 3,
        "label": "Bài tập tự luận 3",
        "question": "Trong không gian Oxyz, viết các phương trình tham số và chính tắc của đường thẳng Δ đi qua hai điểm A(2;3;−1) và B(1;−2;4).",
        "figure": null,
        "explanation": "Ta có AB = (−1;−5;5).<br>Vì Δ đi qua hai điểm A và B nên véc-tơ chỉ phương của Δ là u = AB = (−1;−5;5).<br>Đường thẳng Δ đi qua điểm A(2;3;−1) và có véc-tơ chỉ phương là u = (−1;−5;5).<br>{ x = 2−t<br>Phương trình tham số của Δ là; y = 3−5t (t ∈ ℝ).<br>z = −1 + 5t<br>x−2 y−3 z + 1<br>Phương trình chính tắc của Δ là = =.<br>−1 −5 5"
      },
      {
        "id": 4,
        "label": "Bài tập tự luận 4",
        "question": "Trong không gian Oxyz, cho hai đường thẳng: { x = 1 + 2t x−8 y + 2 z−2 Δ:; y = 3−t và Δ: = =. 1 2 −1 1 2 z = 2 + 3t } a) Chứng minh rằng Δ và Δ cắt nhau. 1 2 b) Viết phương trình mặt phẳng (P) chứa Δ và Δ. 1 2",
        "figure": null,
        "explanation": "a) Đường thẳng Δ đi qua điểm A(1;3;2) và có vectơ chỉ phương u = (2;−1;3)<br>1 1<br>Đường thẳng Δ đi qua điểm B(8;−2;2) và có vectơ chỉ phương u = (−1;1;2)<br>2 2<br>Ta có AB = (7;−5;0) và [u,u] = (−5;−7;1) ≠ 0 (1).<br>1 2<br>Mặt khác AB. [u;u] = −35 + 35 = 0 (2).<br>1 2<br>Từ (1) và (2) suy ra Δ và Δ cắt nhau.<br>1 2<br>b) Mặt phẳng (P) chứa Δ và Δ nên có một vectơ pháp tuyến là n = [u,u] = (−5;−7;1).<br>1 2 1 2<br>Mặt phẳng (P) đi qua điểm A(1;3;2) có vectơ pháp tuyến n = (−5;−7;1).có phương trình là:<br>−5(x–1)–7(y–3) + (z−2) = 0 ⇔ 5x + 7y– z –24 = 0."
      },
      {
        "id": 5,
        "label": "Bài tập tự luận 5",
        "question": "Viết phương trình tham số và phương trình chính tắc của đường thẳng Δ trong mỗi trường hợp sau: a) Δ đi qua điểm A(−1;3;2) và có vectơ chỉ phương u = (−2;3;4); b) Δ đi qua hai điểm M(2;−1;3) và N(3;0;4).",
        "figure": null,
        "explanation": "a) Phương trình tham số của đường thẳng Δ đi qua điểm A(−1;3;2) và có vecto chỉ phương<br>{ x = −1−2t<br>u = (−2;3;4) là:; y = 3 + 3t (t là tham số)<br>z = 2 + 4t<br>Phương trình chính tắc của đường thẳng Δ đi qua điểm A(−1;3;2) và có vecto chỉ phương<br>x + 1 y−3 z−2<br>u = (−2;3;4) là: = =<br>−2 3 4<br>b) Ta có MN = (1;1;1) là một vecto chỉ phương của đường thẳng Δ<br>{ x = 2 + t′<br>Phương trình tham số của đường thẳng Δ là:; y = −1 + t′ (t′là tham số)<br>z = 3 + t′<br>x−2 y + 1 z−3<br>Phương trình chính tắc của đường thẳng Δ là: = =<br>1 1 1"
      },
      {
        "id": 6,
        "label": "Bài tập tự luận 6",
        "question": "Trong không gian Oxyz, cho hai mặt phẳng (α):2x + y−z + 3 = 0 và (β):x + y + z−1 = 0. Viết phương trình chính tắc đường thẳng Δ là giao tuyến của hai mặt phẳng (α) và (β)",
        "figure": null,
        "explanation": "{ n = (2;1;−1)<br>Ta có<br>; n<br>(α)<br>= (1;1;1) ⇒ [n<br>(α),n<br>(β)] = (2;−3;1) ⇒ u<br>Δ = [n<br>α,n<br>β] = (2;−3;1)..<br>} (β)<br>{ x = 0<br>{ 2x + y−z + 3 = 0<br>Gọi M = (α) ∩ (β) thì M ∈ Δ và M thỏa; x = 0 →; y = −1 ⇒ M(0;−1;2)<br>}x + y + z−1 = 0<br>z = 2<br>Đường thẳng Δ đi qua M(0;−1;2) và nhận u = (2;−3;1) làm một vectơ chỉ phương có phương<br>x y + 1 z−2<br>trình chính tắc là = =.<br>2 −3 1"
      },
      {
        "id": 7,
        "label": "Bài tập tự luận 7",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt phẳng (P):x + y−5z + 4 = 0 và đường x + 1 y + 1 z + 5 thẳng d: = =. Gọi (Q) là mặt phẳng chứa d và vuông góc với (P). Xác định phương 2 1 6 trình giao tuyến d′ của (Q) và (P)?",
        "figure": null,
        "explanation": "Gọi đường thẳng d′ là hình chiếu vuông góc của đường thẳng d trên (P)<br>Đường thẳng d đi qua điểm A(−1;−1;−5) và có u = (2;1;6).<br>Mặt phẳng (P) có vectơ pháp tuyến n = (1;1;−5).<br>Mặt phẳng (Q) chứa d và vuông góc với (P) ⇒ (P) ∩ (Q) = d′.<br>Vectơ pháp tuyến của (Q) là n = [n,u] = (11;−16;−1).<br>Q P d<br>Phương trình của mặt phẳng (Q) là: 11x−16y−z−10 = 0.<br>Do (P) ∩ (Q) = d′ nên vectơ chỉ phương của đường thẳng d′ là: u = [n,n] = −27(3;2;1),<br>d′ Q P<br>→ d′ có vectơ chỉ phương là u = (3;2;1).<br>{ x + y−5z + 4 = 0<br>Gọi I = d ∩ (P), khi đó tọa độ I là nghiệm của hệ; x + 1 y + 1 z + 5.<br>= =<br>} 2 1 6<br>Giải hệ ta được (x;y;z) = (1;0;1).<br>{ x = 1 + 3t<br>Do đó d′:; y = 2t, suy ra đường thẳng d′ đi qua điểm P(4;2;2).<br>z = 1 + t<br>{ x = 1 + 2t { x = 1 + s"
      },
      {
        "id": 8,
        "label": "Bài tập tự luận 8",
        "question": "Trong không gian Oxyz, cho đường thẳng d:; y = 2 + t và d:; y = 2 + s. Viết phương trình 1 2 } z = −2 + 5t } z = 1 + 3s đường vuông góc chung của hai đường thẳng d;d. 1 2",
        "figure": null,
        "explanation": "Gọi Δ là đường vuông góc chung của hai đường thẳng d;d.<br>1 2<br>Đường thẳng d có vectơ chỉ phương là u = (2;1;5);d có VTCP là u = (1;1;3).<br>1 1 2 2<br>Gọi A = Δ ∩ d ⇒ A(1 + 2t;2 + t;−2 + 5t);B = Δ ∩ d ⇒ B(1 + s;2 + s;1 + 3s).<br>1 2<br>AB = (s−2t;s−t;3 + 3s−5t).<br>{ AB.u = 0 { 2(s−2t) + s−t + 5(3 + 3s−5t) = 0 { 18s−30t = −15<br>{ s = 0<br>Ta có:; 1 ⇔; ⇔; ⇔; 1.<br>}AB.u = 0 } s−2t + s−t + 3(3 + 3s−5t) = 0 }11s−18t = −9 t =<br>2 } 2<br>(1 1)<br>Suy ra B(1;2;1) và AB = −1;−;.<br>2 2<br>{ x = 1−2t<br>Phương trình đường thẳng đi qua B và có vectơ chỉ phương u = (−2;−1;1) là; y = 2−t.<br>z = 1 + t"
      },
      {
        "id": 9,
        "label": "Bài tập tự luận 9",
        "question": "Trong một trò chơi mô phỏng bắn súng 3D trong không gian Oxyz, một xạ thủ đang ngắm với tọa độ khe ngắm và đầu ruồi lần lượt là M(3;3;1,5), N(3;4;1,5). Viết phương trình tham số của đường nắm bắn của xạ thủ (xem như đường thẳng MN).",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d2_tuluan_q10_p42_1.png",
        "explanation": "Ta có MN = (0;1;0) là một vectơ chỉ phương của đường ngắm bắn (đường thẳng MN).<br>{ x = 3<br>Vậy phương trình tham số của đường ngắm bắn là:; y = 3 + t<br>z = 1,5"
      },
      {
        "id": 10,
        "label": "Bài tập tự luận 10",
        "question": "Trên phần mềm mô phỏng 3D một máy khoan trong không gian Oxyz, cho biết phương trình trục a của mũi khoan và một đường rãnh b trên vật cần khoan như hình vẽ dưới đây lần lượt là: { x = 1 { x = 1 + 4t′ a:; y = 2 và b:; y = 2 + 2t′ } z = 3t } z = 6 a) Chứng minh a và b vuông góc và cắt nhau. b) Tìm giao điểm của a và b.",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d2_tuluan_q10_p43_1.png",
        "explanation": "{ x = 1 + 4t′<br>Đường thẳng b:; y = 2 + 2t′ có vecơ chỉ phương u = (4;2;0).<br>z = 6<br>Ta thấy: u.u = 0.4 + 0.2 + 3.0 = 0 do đó đường thẳng a,b vuông góc.<br>1 2<br>{ 1 = 1 + 4t′<br>Xét hệ phương trình:; 2 = 2 + 2t′ (*). Vậy đường thẳng a,b vuông góc và cắt nhau.<br>3t = 6<br>b) Gọi giao điểm của a và b là M.<br>{ x = 1<br>Với t = 2, thay vào phương trình đường thẳng a ta được; y = 2<br>z = 6<br>Vậy giao điểm của a và b là M(1;2;6)."
      },
      {
        "id": 11,
        "label": "Bài tập tự luận 11",
        "question": "Trong không gian Oxyz, một viên đạn được bắn ra từ điểm A(1;3;4) và trong 3 giây, đầu đạn đi với vận tốc không đổi, vectơ vận tốc (trên giây) là v = (2;1;6). Hỏi viên đạn trên có bắn trúng mục tiêu trong mỗi tình huống sau hay không? (7) a) Mục tiêu đặt tại điểm M 7;;21 b) Mục tiêu đặt tại điểm N(−3;1;−8). 2",
        "figure": null,
        "explanation": "{ x = 1 + 2t<br>Phương trình mô tả quỹ đạo chuyển động của viên đạn là:; y = 3 + t<br>z = 4 + 6t<br>{ 7 = 1 + 2t t = 3<br>7 1<br>a) Thay tọa độ điểm M vào phương trình chuyển động ta có:; = 3 + t ⇔; t =<br>2 2<br>21 = 4 + 6t 17<br>t =<br>} 6<br>Ta thấy các giá trị t này đều khác nhau do đó điểm M không nằm trên quỹ đạo chuyển động<br>của viên đạn nên viên đạn không bắn trúng mục tiêu đặt tại điểm M.<br>{ −3 = 1 + 2t<br>b) Thay tọa độ điểm N vào phương trình chuyển động của viên đạn ta có:; 1 = 3 + t ⇔ t = −2<br>}−8 = 4 + 6t<br>Suy ra điểm N nằm trên quỹ đạo chuyển động của viên đạn. Do đó viên đạn trên có bắn trúng<br>mục tiêu đặt tại điểm N."
      },
      {
        "id": 12,
        "label": "Bài tập tự luận 12",
        "question": "Trên mặt đất phẳng, người ta dựng một cây cột thẳng cao 6m vuông góc với mặt đất có chân cột đặt tại ví trí O trên mặt đất. Tại một thời điểm, dưới ánh nắng mặt trời thì bóng của đỉnh cột dưới mặt đất cách chân cột 3m về hướng S60°E (hướng tạo với hướng nam góc 60° tạo với hướng đông góc 30°). Chọn hệ trục Oxyz có gốc tọa độ là O, tia Ox chỉ hướng nam, tia Oy chỉ hướng đông, tia Oz chứa cây cột, đơn vị đo là mét. Hãy viết phương trình đường thẳng chứa tia nắng mặt trời đi qua đỉnh cột tại thời điểm đang xét.",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d2_tuluan_q12_p43_2.png",
        "explanation": "Để viết được phương trình đường thẳng chứa tia nắng mặt trời đi qua đỉnh cột tại thời điểm đang<br>xét ta cần xác định tọa độ của A (đỉnh cột) và A′ (bóng của đỉnh cột). Khi đó A(0;0;6)<br>Hoành độ của điểmA′ là x = 3cos60° =<br>3 3 (1 3 3)<br>Tung độ của điểm A′ là y = 3cos30° = do đó A′;;0.<br>2 2 2<br>(1 3 3)<br>Đường thẳng chứa tia nắng mặt trời đi qua A(0;0;6) và có vectơ chỉ phương AA′;;−6<br>2 2<br>{ 1<br>x = t<br>3 3<br>có phương trình là:; y = t.<br>z = 6−6t"
      }
    ],
    "questions": [
      {
        "id": 1,
        "part": 1,
        "shortTag": "P1.1",
        "label": "Phần 1 - Câu 1",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Cho điểm A(1;2;0). Viết phương trình đường thẳng Δ đi qua A, vuông góc và cắt trục Ox. { x = 1 { x = 1−t { x = 1 + t { x = 1",
        "options": {
          "A": "; y = t",
          "B": "; y = 2 + t",
          "C": "; y = 2 + t",
          "D": "; y = t } z = t } z = 0 } z = 0 } z = 0"
        },
        "answer": "D",
        "explanation": "Nhận thấy A(1;2;0) ∈ (Oxy).<br>Đường thẳng Δ đi qua A, vuông góc và cắt trục Ox ⇒ Δ đi qua A và hình chiếu vuông góc<br>của A trên Ox.<br>{ x = 1 { x = 1<br>Phương trình Δ:; y = 2 + t, hay Δ:; y = t.<br>z = 0<br>z = 0"
      },
      {
        "id": 2,
        "part": 1,
        "shortTag": "P1.2",
        "label": "Phần 1 - Câu 2",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Cho điểm A(−1;1;0).Viết phương trình đường thẳng Δ đi qua A, cắt trục Ox, sao cho góc tạo bởiΔ với hai trục Ox,Oy bằng nhau. { x = −1 + 2t { x = −1 + t { x = −1 + t { x = t",
        "options": {
          "A": "; y = 1−t",
          "B": "; y = 1−2t",
          "C": "; y = 1−t",
          "D": "; y = 1−t } z = 0 } z = 0 } z = 0 } z = 0"
        },
        "answer": "C",
        "explanation": "Nhận thấy A(−1;1;0) ∈ (Oxy).<br>{ x = −1 + t<br>Nhận thấy đường thẳng Δ:; y = 1−t đi qua A,Othỏa mãn yêu cầu bài toán.<br>z = 0<br>x + 1 y z−3"
      },
      {
        "id": 3,
        "part": 1,
        "shortTag": "P1.3",
        "label": "Phần 1 - Câu 3",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Cho điểm A(1;2;3) và đường thẳng d: = =. Viết phương trình đường thẳng Δ đi 2 1 −2 qua A, vuông góc với đường thẳng d và cắt trục Oz. x−1 y−2 z−3 x−1 y−2 z−3",
        "options": {
          "A": "= =",
          "B": "= = 1 −2 2 1 2 2 x−1 y−2 z−3 x−1 y−2 z−3",
          "C": "= =",
          "D": "= = 1 2 4 −1 2 2"
        },
        "answer": "B",
        "explanation": "Đường thẳng Δ cắt trục Oz tại B(0;0;b) ⇒ BA = (1;2;3−b) là vectơ chỉ phương của đường<br>thẳng Δ.<br>Vì Δ ⊥ d ⇔ BA.u = 0 ⇔ 2 + 2−2(3−b) = 0 ⇔ b = 1 ⇒ BA = (1;2;2).<br>x−1 y−2 z−3<br>Vậy phương trình Δ là = =.<br>1 2 2"
      },
      {
        "id": 4,
        "part": 1,
        "shortTag": "P1.4",
        "label": "Phần 1 - Câu 4",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(1;0;3).Viết phương trình đường thẳng Δ đi qua A, cắt hai trục Ox,Oz tại M,N sao cho AM = 2AN. { x = −1−2t { x = −1 + 2t { x = 1 + t { x = 1 + 2t",
        "options": {
          "A": "; y = 0",
          "B": "; y = 0",
          "C": "; y = 0",
          "D": "; y = 0 z = 3t z = 3t z = 3 + 3t z = 3t } } } }"
        },
        "answer": "B",
        "explanation": "Ta có: M(m;0;0), N(0;0;n)(m ≠ n); AM = (m−1;0;−3),AN = (−1;0;n−3).<br>{ m = −1<br>{ m−1 = −2 (3)<br>Theo đề bài: AM = 2AN ⇔; ⇔; 3 ⇒ M(−1;0;0),N 0;0;.<br>}−3 = 2n−6 n = 2<br>} 2<br>{ x = −1 + 2t<br>Vậy phương trình Δ:; y = 0.<br>z = 3t<br>x−1 y + 1 z x y−1 z + 1"
      },
      {
        "id": 5,
        "part": 1,
        "shortTag": "P1.5",
        "label": "Phần 1 - Câu 5",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Cho điểm A(1;−2;1) và 2 đường thẳng d: = =, d: = =. Phương 1 −1 2 −3 2 −1 2 1 trình đường thẳng d đi qua A cắt hai đường thẳng d,d là 3 1 2 x−1 y + 2 1−z x−2 y + 6 z−6",
        "options": {
          "A": "= =",
          "B": "= = −1 4 −5 −1 4 −5 x−1 y + 2 z−1 x−2 y + 6 z−6",
          "C": "= =",
          "D": "= = −1 4 5 −1 4 5"
        },
        "answer": "B",
        "explanation": "Gọi giao điểm của đường thẳng d với hai đường thẳng d,d lần lượt là M,N.<br>3 1 2<br>Ta có: M(1−t;−1 + 2t;−3t), N(−u;1 + 2u;−1 + u)<br>⇒ AM = (−t,2t + 1,−3t−1),AN = (−u−1,2u + 3,u−2).<br>{ { { 1<br>−t = k(−u−1) −t + ku + k = 0 t = 2<br>Có A,M,N thẳng hàng nên ⇒; 2t + 1 = k(2u + 3) ⇔; 2t−2ku−3k = −1 ⇔; k = 1<br>−3t−1 = k(u−2) −3t−ku + 2k = 1 1<br>ku = −<br>} } } 2<br>(1 −5) 1<br>⇒ AM = −,2, = (−1;4;−5).<br>2 2 2<br>Phương trình đường thẳng d đi qua A có vectơ chỉ phương u = (−1;4;−5) là:<br>3 3<br>x−1 y + 2 z−1<br>= =.<br>−1 4 −5<br>Nhận thấy điểm M(2;−6;6) ∈ d do đó phướng trình d được viết lại thành:<br>3 3<br>x−2 y + 6 z−6<br>= =.<br>−1 4 −5<br>{ x = 1−t<br>x−2 y + 2 z−3"
      },
      {
        "id": 6,
        "part": 1,
        "shortTag": "P1.6",
        "label": "Phần 1 - Câu 6",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Cho hai đường thẳng d: = =;d:; y = 1 + 2t và điểm A(1;2;3). Đường thẳng 1 2 −1 1 2 } z = −1 + t Δ đi qua A, vuông góc với d và cắt d có phương trình là 1 2 x−1 y−2 z−3 x−1 y−2 z−3",
        "options": {
          "A": "= =.",
          "B": "= =. 1 3 1 −1 −3 −1 x−1 2− y z−3 1−x y−2 z−3",
          "C": "= =.",
          "D": "= =. 1 −3 −5 1 3 5"
        },
        "answer": "D",
        "explanation": "Gọi giao điểm của đường thẳng Δ với đường thẳng d là M(1−t;1 + 2t;−1 + t).<br>Ta có: AM = (−t;2t−1;t−4).<br>Δ vuông góc d ⇒ AM.u = 0 ⇔ −2t−2t + 1 + t−4 = 0 ⇔ t = −1 ⇒ M(2;−1;−2).<br>1 1<br>Δ đi qua A(1;2;3) và có vectơ chỉ phương AM = (1;−3;−5).<br>x−1 y−2 z−3 1−x y−2 z−3<br>Phương trình chính tắc Δ: = = hay = =.<br>1 −3 −5 1 3 5<br>(8 4 8)"
      },
      {
        "id": 7,
        "part": 1,
        "shortTag": "P1.7",
        "label": "Phần 1 - Câu 7",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho tam giác nhọn ABC có E(2;2;1), F −;;, O(0;0;0) lần 3 3 3 lượt là chân đường cao hạ từ các đỉnh A,B,C xuống các cạnh BC,CA,AB. Viết phương trình x−1 y z đường thẳng Δ đi qua Acắt trục Oxtại điểm có hoành độ nguyên và tạo với d: = = 2 2 −1 51 một góc α,cosα =. 9 x + 3 y z x + 4 y−1 z−1",
        "options": {
          "A": "= =",
          "B": "= = 7 1 −1 7 1 −1 x−3 y −z x−3 y z",
          "C": "= =",
          "D": "= = 7 1 1 7 1 1"
        },
        "answer": "C",
        "explanation": "{ O • EH = O • BH = 90o −B • AC<br>• •<br>Ta có; ⇒ OEH = FEH.<br>}F • EH = F • CH = 90o −B • AC<br>{ F • OH = F • AH = 90o − • ACB<br>• •<br>Tương tự ta có; ⇒ FOH = EOH.<br>}E • OH = E • BH = 90o − • ACB<br>Suy ra trực tâm H của tam giác ABC cũng chính là tâm đường tròn nội tiếp tam giác ABC.<br>Do đó: EF.HO + OE.HF + OF.HE = 0 ⇔ 5HO + 3HF + 4HE = 0 ⇒ H(0;1;1).<br>{ x = 2k<br>Do A,H,E thẳng hàng nên HA = kHE ⇔; y = k + 1 ⇒ A(2k;k + 1;1).<br>z = 1<br>Do OH ⊥ OA nên OA.OH = 0 ⇔ 1.(k + 1) + 1 = 0 ⇔ k = −2 ⇒ A(−4;−1;1).<br>Gọi M = Ox ∩ Δ,M(m;0;0) và AM = (m + 4;1;−1);u = (2;2;−1).<br>AM.u 2m + 11 51 2m + 11<br>cos(Δ;d) = d = ⇔ =<br>AM.u m<sup>2</sup> + 8m + 18.3 9 3 m<sup>2</sup> + 8m + 18<br>[m = 3<br>⇔ 51 (m<sup>2</sup> + 8m + 18) = 9 (4m<sup>2</sup> + 44m + 121) ⇔ 15m<sup>2</sup> + 12m−171 = 0 ⇔ | 19<br>| m = −<br>⇒ M(3;0;0),AM = (7;1;−1).<br>x−3 y −z<br>Vậy phương trình Δ: = =<br>7 1 1"
      },
      {
        "id": 8,
        "part": 1,
        "shortTag": "P1.8",
        "label": "Phần 1 - Câu 8",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Đường thẳng Δ đi qua điểm M(3;1;1), nằm trong mặt phẳng (α):x + y−z−3 = 0, cắt { x = 3 { x = 1 d:; y = 1 + 3t và tạo với đường thẳng d:; y = 4 + 3t một góc nhỏ nhất, thì phương trình của 1 z = 1−2t z = −3−2t } } Δ là: { x = 1 { x = 8 + 5t′ { x = 1 + 2t′ { x = 1 + 5t′",
        "options": {
          "A": "; y = −t′.",
          "B": "; y = −3−4t′.",
          "C": "; y = 1−t′.",
          "D": "; y = 1−4t′. z = 2t′ z = 2 + t′ z = 3−2t′ z = 3 + 2t′ } } } }"
        },
        "answer": "B",
        "explanation": "Ta thấy: M ∈ (α). Đường thẳng d có vectơ chỉ phương là u = (0;3;−2).<br>Mặt phẳng (α) có vectơ pháp tuyến là n = (1;1;−1).<br>Vì u.n = 0.1 + 3.1 + (−2).(−1) = 5 ≠ 0 nên d cắt (α).<br>Dễ thấy M ∈ d,d∥d.<br>1 1<br>Lấy N(3;4;−1) ∈ d. Gọi K, H lần lượt là hình chiếu vuông góc của N trên mặt phẳng (α)<br>và đường thẳng Δ.<br>Ta có: (• d,Δ) = (• d,Δ) = • NMH và sin • NMH = NH ≥ NK.<br>1 MN MN<br>Do vậy (d,Δ) nhỏ nhất khi K ≡ H hay Δ là đường thẳng MK.<br>{ x = 3 + t<br>Đường thẳng NK có phương trình:; y = 4 + t.<br>z = −1−t<br>Tọa độ K ứng với t là nghiệm của phương trình: (3 + t) + (4 + t)−(−1−t)−3 = 0 ⇔ t = −.<br>(4 7 2)<br>Suy ra K;;.<br>3 3 3<br>(5 4 1) 1<br>Đường thẳng Δ có vectơ chỉ phương là MK = −;;− = − (5;−4;1)<br>3 3 3 3<br>{ x = 3 + 5t′ { x = 8 + 5t′<br>Đường thẳng Δ có phương trình:; y = 1−4t′ hay Δ; y = −3−4t′.<br>z = 1 + t′<br>z = 2 + t′"
      },
      {
        "id": 9,
        "part": 1,
        "shortTag": "P1.9",
        "label": "Phần 1 - Câu 9",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ là giao tuyến của hai mặt phẳng (P):z−1 = 0 và (Q):x + y + z−3 = 0. Gọi d là đường thẳng nằm trong mặt phẳng (P), cắt đường thẳng x−1 y−2 z−3 = = và vuông góc với đường thẳng Δ. Phương trình của đường thẳng d là 1 −1 −1 { x = 3 + t { x = 3−t { x = 3 + t { x = 3 + t",
        "options": {
          "A": "; y = t.",
          "B": "; y = t.",
          "C": "; y = t.",
          "D": "; y = −t. z = 1 + t z = 1 z = 1 z = 1 + t } } } }"
        },
        "answer": "C",
        "explanation": "Đặt n = (0;0;1) và n = (1;1;1) lần lượt là vectơ pháp tuyến của (P) và (Q).<br>P Q<br>Do Δ = (P) ∩ (Q) nên Δ có một véctơ chỉ phương u = [n,n] = (−1;1;0).<br>Δ P Q<br>Đường thẳng d nằm trong (P) và d ⊥ Δ nên d có một véctơ chỉ phương là u = [n,u′]<br>d P Δ<br>= (−1;−1;0).<br>x−1 y−2 z−3<br>Gọi d′: = = và A = d′ ∩ d ⇒ A = d′ ∩ (P)<br>1 −1 −1<br>{ z−1 = 0 { z = 1<br>Xét hệ phương trình; x−1 y−2 z−3 ⇔; y = 0 ⇒ A(3;0;1).<br>= =<br>} 1 −1 −1 } x = 3<br>{ x = 3 + t<br>Do đó phương trình đường thẳng d:; y = t.<br>z = 1<br>x + 1 y−1 z−2"
      },
      {
        "id": 10,
        "part": 1,
        "shortTag": "P1.10",
        "label": "Phần 1 - Câu 10",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz cho đường thẳng (d): = = và mặt phẳng 2 1 3 (P):x− y−z−1 = 0. Viết pt đường thẳng (Δ) đi qua điểm A(1; 1; −2), biết (Δ) // (P) và (Δ) cắt d. x−1 y−1 z + 2 x−1 y−1 z + 2",
        "options": {
          "A": "= =.",
          "B": "= =. 1 −1 −1 2 1 3 x−1 y−1 z + 2 x−1 y−1 z + 2",
          "C": "= =.",
          "D": "= =. 8 3 5 2 1 1"
        },
        "answer": "C",
        "explanation": "Gọi M = (d) ∩ (Δ) ⇒ M(−1 + 2t; 1 + t; 2 + 3t).<br>Khi đó AM = (2t−2; t; 3t + 4) là một vectơ chỉ phương của (Δ).<br>Hai mặt phẳng (Δ) // (P) ⇔ AM ⊥ n với n = (1; -1; −1).<br>(P) (P)<br>⇔ AM.n = 0 ⇔ 2t−2−t−3t−4 = 0 ⇔ t = −3 ⇒ AM = (−8; −3; −5).<br>(P)<br>x−1 y−1 z + 2<br>Vậy (Δ): = =.<br>8 3 5"
      },
      {
        "id": 11,
        "part": 1,
        "shortTag": "P1.11",
        "label": "Phần 1 - Câu 11",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho mặt phẳng (P):x + 2y + z−4 = 0 và đường thẳng x + 1 y z + 2 d: = =. Viết phương trình đường thẳng Δ nằm trong mặt phẳng (P), đồng thời 2 1 3 cắt và vuông góc với đường thẳng d. x−1 y−1 z−1 x−1 y−1 z−1",
        "options": {
          "A": "= =.",
          "B": "= =. 5 −1 −3 5 1 −3 x−1 y + 1 z−1 x + 1 y + 3 z−1",
          "C": "= =.",
          "D": "= =. 5 −1 2 5 −1 3"
        },
        "answer": "A",
        "explanation": "Vectơ pháp tuyến của mặt phẳng (P) là: n = (1;2;1).<br>(P)<br>Vectơ chỉ phương của đường thẳng d là u = (2;1;3).<br>{ x = −1 + 2t<br>Phương trình tham số của đường thẳng d:; y = t.<br>z = −2 + 3t<br>Xét phương trình: −1 + 2t + 2t−2 + 3t−4 = 0 ⇔ 7t−7 = 0 ⇔ t = 1.<br>Suy ra giao điểm của đường thẳng d và mặt phẳng (P) là A(1;1;1). Ta có: A ∈ Δ.<br>Vectơ chỉ phương của đường thẳng Δ là: u = [n,u] = (5;−1;−3).<br>Δ (P) d<br>x−1 y−1 z−1<br>Phương trình chính tắc của đường thẳng Δ: = =.<br>5 −1 −3"
      },
      {
        "id": 12,
        "part": 1,
        "shortTag": "P1.12",
        "label": "Phần 1 - Câu 12",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho mặt phẳng (P):x + 2y + 2z + 5 = 0 và đường thẳng x−1 y−1 z d: = =. Đường thẳng Δ nằm trên mặt phẳng (P), đồng thời vuông góc và cắt 2 2 1 đường thẳng d có phương trình là x + 1 y + 1 z + 1 x + 1 y + 1 z + 1",
        "options": {
          "A": "= =.",
          "B": "= =. 2 3 2 2 −3 2 x−1 y−1 z−1 x−1 y + 1 z−1",
          "C": "= =.",
          "D": "= =. −2 3 −2 2 −3 2"
        },
        "answer": "B",
        "explanation": "Vectơ pháp tuyến của (P) là n = (3;2;−1), vectơ chỉ phương của d là u = (2;2;1).<br>[u, n] = (2;−3;2) là vectơ chỉ phương của Δ.<br>Mặt khác, do Δ cắt d nên Δ đi qua giao điểm M của d và mặt phẳng (P).<br>Tọa độ giao điểm M của d và (P) là nghiệm hệ phương trình sau:<br>{ x = 1 + 2t { t = −1<br>y = 1 + 2t x = −1<br>; ⇔; ⇒ M(−1;−1;−1).<br>z = t y = −1<br>}x + 2y + 2z + 5 = 0 }z = −1<br>x + 1 y + 1 z + 1<br>Vậy phương trình đường thẳng Δ là = =.<br>2 −3 2<br>x−1 y−2 z−3"
      },
      {
        "id": 13,
        "part": 1,
        "shortTag": "P1.13",
        "label": "Phần 1 - Câu 13",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho đường thẳng d: = = và mặt phẳng 2 −1 1 (P):2x + y + z + 1 = 0. Viết phương trình đường thẳng qua giao điểm của đường thẳng d với (P), nằm trên mặt phẳng (P) và vuông góc với đường thẳng d. { x = −2−t { x = −1 + t { x = −3−t { x = −2 + t",
        "options": {
          "A": "; y = −2.",
          "B": "; y = 0.",
          "C": "; y = 4.",
          "D": "; y = −2. z = 3 + 2t z = 1−2t z = 1 + 2t z = 4−2t } } } }"
        },
        "answer": "C",
        "explanation": "Gọi Δ là đường thẳng cần tìm<br>Gọi H = d ∩ (P), suy ra H(1 + 2t;2−t;3 + t) thay tọa độ H và (P)<br>2(1 + 2t) + (2−t) + (3 + t) + 1 = 0 ⇔ t = −2 suy ra H(−3;4;1)<br>Vì đường thằng Δ nằm trong (P) nên nhận n = (2;1;1)làm vectơ pháp tuyến của đường thẳng<br>d.<br>Vì đường thằng Δ vuông góc với d nên nhận u = (2;−1;1) làm vectơ pháp tuyết của đường<br>thẳng Δ.<br>Ta có: u = [n,u] = (2;0;−4) hay (−1;0;2)là vectơ pháp tuyến củaΔ, phương trình cần tìm Δ:<br>t d<br>{ x = −3−t<br>; y = 4<br>z = 1 + 2t<br>{ x = 2−t<br>x−4 y + 1 z"
      },
      {
        "id": 14,
        "part": 1,
        "shortTag": "P1.14",
        "label": "Phần 1 - Câu 14",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz cho hai đường thẳng d:; y = 1 + 2t và d′: = =. Phương 1 −2 2 z = 4−2t } trình nào dưới đây là phương trình đường thẳng thuộc mặt phẳng chứa d và d′ đồng thời cách đều hai đường thẳng đó. x−2 y−1 z−4 x + 3 y + 2 z + 2",
        "options": {
          "A": "= =.",
          "B": "= =. 3 1 −2 1 −2 2 x−3 y z−2 x + 3 y−2 z + 2",
          "C": "= =.",
          "D": "= =. 1 −2 2 −1 2 −2"
        },
        "answer": "C",
        "explanation": "Đường thẳng d đi qua A(2;1;4)và có vectơ chỉ phương u = (−1;2;−2).<br>Đường thẳng d′ đi qua B(4;−1;0) có vectơ chỉ phương u = (1;−2;2).<br>2−4 1 + 1 4<br>Ta có u = −u và ≠ ≠ nên d//d′.<br>1 2 1 −2 2<br>Đường thẳng Δ thuộc mặt phẳng chứa d và d′đồng thời cách đều hai đường thẳng đó khi và<br>{ Δ//d//d′<br>chỉ khi; hay Δ qua trung điểm I(3;0;2) và có một véc tơ chỉ phương là<br>d(Δ,d) = d(Δ,d′)<br>x−3 y z−2<br>u = (1;−2;2). Khi đó phương trình của Δ: = =<br>1 −2 2<br>x−2 y−1 z + 1 x + 1 y−3 z + 2"
      },
      {
        "id": 15,
        "part": 1,
        "shortTag": "P1.15",
        "label": "Phần 1 - Câu 15",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng d: = = và d: = = 1 2 −2 4 2 −2 3 −1. Viết phương trình đường thẳng Δ đi qua điểm A(0;2;−4) và cắt hai đường thẳng d và d. 1 2 { x = t { x = t { x = t { x = −t",
        "options": {
          "A": "; y = 2−2t.",
          "B": "; y = 2 + 2t.",
          "C": "; y = 2 + 2t.",
          "D": "; y = 2−2t. z = −4 + 3t z = −4 + 3t z = −4−3t z = −4 + 3t } } } }"
        },
        "answer": "D",
        "explanation": "Gọi (P) là mặt phẳng đi qua A và chứa d<br>Đường thẳng d đi qua B(2;1;−1) và có VTCP u = (2;−1;3)<br>1 1<br>Ta có, AB = (2;−1;3)<br>Mặt phẳng (P) có một vectơ pháp tuyến là: [u;AB] = (−2;2;2).<br>Gọi (Q) là mặt phẳng đi qua A và chứa d<br>Đường thẳng d đi qua C(−1;3;−2) và có vectơ chỉ phương u = (−2;3;−1)<br>2 2<br>Ta có AC = (−1;1;2)<br>Mặt phẳng (Q) có một vectơ pháp tuyến là: [u;AC] = (7;5;1).<br>Khi đó đường thẳng Δ cần tìm là giao tuyến của hai mặt phẳng (P) và (Q)<br>Suy ra một vectơ chỉ phương của đường thẳng Δ là: [n;n] = (−8;16;−24) = −8(1;−2;3).<br>P Q<br>{ x = t<br>Vậy phương trình đường thẳng Δ cần tìm là:; y = 2−2t.<br>z = −4 + 3t"
      },
      {
        "id": 16,
        "part": 1,
        "shortTag": "P1.16",
        "label": "Phần 1 - Câu 16",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho điểm A(1;3;2),B(3;3;0) và đường thẳng x y + 2 z−1 d: = =. Gọi M là trung điểm của AB. Viết phương trình đường thẳng Δ đi qua −2 1 3 H(1;1;1) và cắt hai đường thẳng d và OM { x = 1 + 2t { x = 1 + 2t { x = 1−2t { x = 1 + 2t",
        "options": {
          "A": "; y = 1 + 23t.",
          "B": "; y = 1 + 23t.",
          "C": "; y = 1−23t.",
          "D": "; y = 1−23t. z = 1−15t z = 1 + 15t z = 1−15t z = 1−15t } } } }"
        },
        "answer": "A",
        "explanation": "Tọa độ trung điểm của đoạn thẳng AB là M(2;3;1)<br>Gọi (P) là mặt phẳng đi qua H và chứa d<br>Đường thẳng d đi qua M (0;−2;1) và có vectơ chỉ phương u = (−2;1;3); HM = (−1;−3;0)<br>1 1 1<br>Mặt phẳng (P) có vectơ pháp tuyến là n = [u;HM] = (9;3;7).<br>p 1 1<br>Gọi (Q) là mặt phẳng đi qua H và chứa OM<br>Đường thẳng OM đi qua O và có vectơ chỉ phương OM = (2;3;1); OH = (1;1;1)<br>Mặt phẳng (Q) có vectơ pháp tuyến là n = [OM;OH] = (2;−1;−1).<br>Đường thẳng Δ đi qua H(1;1;1) và có vectơ chỉ phương [n;n] = (2;23;−15) nên có phương<br>P Q<br>{ x = 1 + 2t<br>trình là; y = 1 + 23t.<br>z = 1−15t<br>{ x = 1−t"
      },
      {
        "id": 17,
        "part": 1,
        "shortTag": "P1.17",
        "label": "Phần 1 - Câu 17",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho điểm N(0;−1;2) và hai đường thẳng d:; y = 2 + t 1 z = 3−2t } x−2 y + 1 z−11,d: = =. Đường thẳng Δ cắt d, d lần lượt tại A và B sao cho N là trung 2 1 −2 4 1 2 điểm của AB. Đường thẳng Δ có phương trình là { x = 0 { x = 0 { x = 0 { x = 0",
        "options": {
          "A": "; y = −1 + t.",
          "B": "; y = 1 + 4t.",
          "C": "; y = −1 + 5t.",
          "D": "; y = 3 + 4t. z = 2 + 3t z = −1−6t z = 2 + 3t z = 1−t } } } }"
        },
        "answer": "D",
        "explanation": "Do A = Δ ∩ d suy ra u = [n,IA] = (4;−6;−1) nên A(1−t;2 + t;3−2t).<br>1 Δ P<br>Vì N là trung điểm AB, suy ra B(t−1;−4−t;2t + 1).<br>1−t−2 2 + t + 1 2t + 1−11<br>{ A(0;3;1)<br>Theo giả thiết, B ∈ d nên = = ⇔ t = 1 ⇒;.<br>2 1 −2 4 } B(0;−5;3)<br>{ x = 0<br>Đường thẳng Δ đi qua hai điểm A(0;3;1), B(0;−5;3) nên Δ:; y = 3 + 4t.<br>z = 1−t<br>{ x = t"
      },
      {
        "id": 18,
        "part": 1,
        "shortTag": "P1.18",
        "label": "Phần 1 - Câu 18",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho điểm P(2;1;−4) và đường thẳng d:; y = 1−t. 1 z = −12 + t } Đường thẳng Δ cắt d,và trục Oy lần lượt tại A và B sao cho P là trung điểm của AB. Đường 1 thẳng Δ có phương trình là { x = 2 + 3t { x = 2t { x = 2 + 2t { x = 3−t",
        "options": {
          "A": "; y = 1 + 2t.",
          "B": "; y = −2 + 3t.",
          "C": "; y = 1−5t.",
          "D": "; y = 3−2t. z = −4 + t z = −4t z = −4 + t z = 1−5t } } } }"
        },
        "answer": "B",
        "explanation": "Do B = Δ ∩ Oy suy ra B ∈ Oy nên B(0;a;0).<br>Vì P là trung điểm AB, suy ra A(4;2−a;−8).<br>{ 4 = t<br>{ A(4;4;−8)<br>Theo giả thiết,A ∈ d nên; 2−a = t ⇔ t = −2 ⇒;.<br>B(0;−2;0)<br>−8 = −12 + t<br>{ x = 2t<br>Đường thẳng Δ đi qua hai điểm A(4;4;−8), B(0;−2;0) nên Δ:; y = −2 + 3t.<br>z = −4t"
      },
      {
        "id": 19,
        "part": 1,
        "shortTag": "P1.19",
        "label": "Phần 1 - Câu 19",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyzcho điểm A(1;0;2) và đường thẳng d có phương trình: x−1 y z + 1 = =. Viết phương trình đường thẳng Δ đi qua A, vuông góc và cắt d. 1 1 2 x−1 y z−2 x−1 y z−2 x−1 y z−2 x−1 y z−2",
        "options": {
          "A": "= =",
          "B": "= =",
          "C": "= =",
          "D": "= = 2 2 1 1 −3 1 1 1 1 1 1 −1"
        },
        "answer": "D",
        "explanation": "x−1 y z + 1<br>Cách1: Đường thẳng d: = = có véc tơ chỉ phương u = (1;1;2)<br>1 1 2<br>Gọi (P)là mặt phẳng qua điểm Avà vuông góc với đường thẳng d, nên nhận véc tơ chỉ phương<br>của d là vecto pháp tuyến (P):1(x−1) + y + 2(z−2) = 0 ⇔ x + y + 2z−5 = 0<br>Gọi Blà giao điểm của mặt phẳng (P)và đường thẳng d ⇒ B(1 + t;t;−1 + 2t)<br>Vì B ∈ (P) ⇔ (1 + t) + t + 2(−1 + 2t)−5 = 0 ⇔ t = 1 ⇒ B(2;1;1)<br>Ta có đường thẳng Δ đi qua A và nhận vecto AB = (1;1;−1) là véc tơ chỉ phương có dạng<br>x−1 y z−2<br>Δ: = =.<br>1 1 −1<br>Cách<sup>2</sup>: Gọi d ∩ Δ = B ⇒ B(1 + t;t;−1 + 2t)<br>AB = (t;t;−3 + 2t), Đường thẳng d có VTCP là u = (1;1;2)<br>Vì d ⊥ Δ nên AB ⊥ u ⇔ AB.u = 0 ⇔ t + t + 2(−3 + 2t) = 0 ⇔ t = 1<br>d d<br>Suy ra AB = (1;1;−1).Ta có đường thẳng Δ đi qua A(1;0;2) và nhận véc tơ AB = (1;1;−1) là véc<br>x−1 y z−2<br>tơ chỉ phương có dạngΔ: = =.<br>1 1 −1<br>x−1 y + 1 z"
      },
      {
        "id": 20,
        "part": 1,
        "shortTag": "P1.20",
        "label": "Phần 1 - Câu 20",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho điểm M(2;1;0) và đường thẳng Δ: = = 2 1 −1. Viết phương trình của đường thẳng d đi qua điểm M, cắt và vuông góc với Δ. x−2 y−1 z x−2 y−1 z",
        "options": {
          "A": "d: = =.",
          "B": "d: = =. 1 −4 1 1 4 1 x−2 y−1 z x−2 y−1 z",
          "C": "d: = =.",
          "D": "d: = =. 2 −4 1 1 −4 −2"
        },
        "answer": "D",
        "explanation": "Gọi N = d ∩ Δ ⇒ N ∈ Δ nên N(1 + 2t;−1 + t;−t). Khi đó ta có MN = (2t−1;t−2;−t). Đường<br>thẳng Δ có vectơ chỉ phương a = (2;1;−1).<br>2 (1 4 2)<br>Vì d ⊥ Δ ⇔ MN.a = 0 ⇔ 2(1 + 2t)−2 + t + t = 0 ⇔ t = ⇒ MN =;−;−. Chọn vectơ<br>3 3 3 3<br>chỉ phương của d là a = (1;−4;−2).<br>x−2 y−1 z<br>Vậy phương trình của d: = =.<br>1 −4 −2"
      },
      {
        "id": 21,
        "part": 1,
        "shortTag": "P1.21",
        "label": "Phần 1 - Câu 21",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho điểm A(0;1;−1) và đường thẳng x + 3 y−1 z−3 d: = =. Viết phương trình đường thẳng Δ đi qua điểm A, vuông góc và cắt 4 −1 −4 đường thẳng d. x y−1 z + 1 x y−1 z + 1",
        "options": {
          "A": "= =.",
          "B": "= =. 13 28 −20 −13 28 20 x y−1 z + 1 x y−1 z + 1",
          "C": "= =.",
          "D": "= =. 13 28 20 13 −28 20"
        },
        "answer": "D",
        "explanation": "Gọi B là giao điểm của đường thẳng d và đường thẳng Δ.<br>{ x = −3 + 4t<br>Đường thẳng d có phương trình tham số; y = 1−t, t ∈ ℝ.<br>z = 3−4t<br>B ∈ d ⇒ B(−3 + 4t;1−t;3−4t); AB = (−3 + 4t;−t;4−4t).<br>Đường thẳng d có vectơ chỉ phương u = (4;−1;−4).<br>28<br>Ta có: AB ⊥ u ⇔ AB.u = 0 ⇔ 4(−3 + 4t)−1(−t)−4(4−4t) = 0 ⇔ 33t = 28 ⇔ t =<br>33<br>(13 −28 20)<br>AB =;;<br>33 33 33<br>Đường thẳng Δ đi qua điểm A(0;1;−1) và nhận vectơ AB hay u (13;−28;20) là vectơ chỉ<br>x y−1 z + 1<br>phương, có phương trình chính tắc là = =.<br>13 −28 20<br>{ x = 4 + 3t"
      },
      {
        "id": 22,
        "part": 1,
        "shortTag": "P1.22",
        "label": "Phần 1 - Câu 22",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho điểm M(0;2;0) và đường thẳng d:; y = 2 + t, t ∈ ℝ z = −1 + t }. Đường thẳng đi qua M, cắt và vuông góc với d có phương trình là: x y z−1 x y−2 z",
        "options": {
          "A": "= =.",
          "B": "= =. −1 1 2 −1 1 2 x−1 y z x−1 y−1 z",
          "C": "= =.",
          "D": "= =. 1 −1 −2 1 1 2"
        },
        "answer": "B",
        "explanation": "Ta có đường thẳng d đi qua điểm N(4;2;−1) và có vectơ chỉ phương u (3;1;1)<br>Gọi H là hình chiếu vuông góc của M lên đường thẳng d, suy ra H ∈ d.<br>Giả sử H(4 + 3t;2 + t;−1 + t)<br>MH ⊥ d ⇔ MH.u = 0 ⇔ 3.(4 + 3t) + (t) + (−1 + t) = 0 ⇔ 11t = −11 ⇔ t = −1 ⇒ H(1;1;−2)<br>Đường thẳng đi qua M và vuông góc với d có vectơ chỉ phương là MH(1;−1;−2) có phương<br>x y−2 z<br>trình là: = =<br>−1 1 2<br>{ x = 1−t"
      },
      {
        "id": 23,
        "part": 1,
        "shortTag": "P1.23",
        "label": "Phần 1 - Câu 23",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho đường thẳng Δ:; y = 2 + t và mặt phẳng z = 3−2t } (P):x−2y + z + 5 = 0. Phương trình đường thẳng d nằm trong mặt phẳng (P), cắt và vuông góc với Δ là { x = −3 { x = 1−3t { x = 0 { x = −3t",
        "options": {
          "A": "; y = −1 + 3t.",
          "B": "; y = 2−t.",
          "C": "; y = −1 + 5t.",
          "D": "; y = 3−t. }z = 1 + t }z = −1 + t }z = 2 + 3t }z = 1 + t"
        },
        "answer": "D",
        "explanation": "Gọi I(x;y;z) là giao điểm của Δ và (P). Khi đó tọa độ của I là thỏa mãn<br>{ x = 1−t<br>{ x = 0<br>y = 2 + t<br>; ⇒; y = 3 ⇒ I(0;3;1).<br>z = 3−2t<br>z = 1<br>}x−2y + z + 5 = 0<br>Vectơ chỉ phương của đường thẳng Δ là u = (−1;1;−2), vec tơ pháp tuyến của mặt phẳng (P) là<br>n = (1;−2;1).<br>Gọi v là vectơ chỉ phương của đường thẳng d thì v ⊥ u,v ⊥ n ⇒ v = [u,n] = (−3;−1;1).<br>Đường thẳng d đi qua điểm I(0;3;1) và có vectơ chỉ phương v = (−3;−1;1) nên có phương trình<br>{ x = −3t<br>là Δ:; y = 3−t.<br>z = 1 + t<br>{ x = −5 + t"
      },
      {
        "id": 24,
        "part": 1,
        "shortTag": "P1.24",
        "label": "Phần 1 - Câu 24",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho đường thẳng Δ:; y = 2t và mặt phẳng z = 1 + 7t } (P):3x + y−2z−8 = 0. Phương trình đường thẳng d nằm trong mặt phẳng (P), cắt và vuông góc với Δ là { x = −7−11t { x = −11−7t { x = 3−t { x = 4−11t",
        "options": {
          "A": "; y = −4 + 23t.",
          "B": "; y = 23−4t.",
          "C": "; y = −1 + 5t.",
          "D": "; y = 3 + 23t. z = −13−5t z = −5−13t z = 2 + 3t z = 1−5t } } } }"
        },
        "answer": "A",
        "explanation": "Gọi I(x;y;z) là giao điểm của Δ và (P). Khi đó tọa độ của I là thỏa mãn<br>{ x = −5 + t<br>{ x = −7<br>y = 2t<br>; ⇒; y = −4 ⇒ I(−7;−4;−13).<br>z = 1 + 7t<br>z = −13<br>}3x + y−2z−1 = 0<br>Vectơ chỉ phương của đường thẳng Δ là u = (1;2;7), vectơ pháp tuyến của mặt phẳng (P) là<br>n = (3;1;−2).<br>Gọi v là vectơ chỉ phương của đường thẳng d thì v ⊥ u,v ⊥ n ⇒ v = [u,n] = (−11;23;−5).<br>Đường thẳng d đi qua điểm I(−7;−4;−13) và có vectơ chỉ phương v = (−11;23;−5) nên có<br>{ x = −7−11t<br>phương trình là Δ:; y = −4 + 23t.<br>z = −13−5t<br>x y + 1 z−1"
      },
      {
        "id": 25,
        "part": 1,
        "shortTag": "P1.25",
        "label": "Phần 1 - Câu 25",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz cho đường thẳng Δ: = = và mặt phẳng 1 2 1 (P):x−2y−z + 3 = 0. Đường thẳng nằm trong (P) đồng thời cắt và vuông góc với Δ có phương trình là: { x = 1 + 2t { x = −3 { x = 1 + t { x = 1",
        "options": {
          "A": "; y = 1−t",
          "B": "; y = −t",
          "C": "; y = 1−2t",
          "D": "; y = 1−t z = 2 z = 2t z = 2 + 3t z = 2 + 2t } } } }"
        },
        "answer": "D",
        "explanation": "{ x = t<br>x y + 1 z−1<br>Ta có Δ: = = ⇒ Δ:; y = −1 + 2t<br>1 2 1<br>z = 1 + t<br>Gọi M = Δ ∩ (P) ⇒ M ∈ Δ ⇒ M(t;2t−1;t + 1)<br>M ∈ (P) ⇒ t−2(2t−1)−(t + 1) + 3 = 0 ⇔ 4−4t = 0 ⇔ t = 1 ⇒ M(1;1;2)<br>Véc tơ pháp tuyến của mặt phẳng (P) là n = (1;−2;−1)<br>Véc tơ chỉ phương của đường thẳng Δ là u = (1;2;1)<br>Đường thẳng d nằm trong mặt phẳng (P) đồng thời cắt và vuông góc với Δ<br>Đường thẳng d nhận [n,u] = (0;−1;2) làm véc tơ chỉ phương vàM(1;1;2) ∈ d<br>{ x = 1<br>Phương trình đường thẳng d:; y = 1−t<br>z = 2 + 2t<br>x y + 1 z"
      },
      {
        "id": 26,
        "part": 1,
        "shortTag": "P1.26",
        "label": "Phần 1 - Câu 26",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz cho đường thẳng Δ: = = và mặt phẳng (P):x + y−z−1 = 0. 1 2 1 Đường thẳng nằm trong (P) đồng thời cắt và vuông góc với Δ có phương trình là: { x = 1 + 3t { x = 1 + t { x = 1 + 3t { x = 1 + 3t",
        "options": {
          "A": "d:; y = 1−2t",
          "B": "d:; y = 1−2t",
          "C": "; y = 1−2t",
          "D": "; y = 1 + 2t z = 1 + t z = 1 + 3t z = 2 + t z = 2 + t } } } }"
        },
        "answer": "A",
        "explanation": "{ x = t<br>x y + 1 z<br>Ta có Δ: = = ⇒ Δ:; y = −1 + 2t<br>1 2 1<br>z = t<br>Gọi M = Δ ∩ (P) ⇒ M ∈ Δ ⇒ M(t;2t−1;t)<br>M ∈ (P) ⇒ t + (2t−1)−t−1 = 0 ⇔ 2t−2 = 0 ⇔ t = 1 ⇒ M(1;1;1)<br>Vectơ pháp tuyến của mặt phẳng (P) là n = (1;1;−1)<br>Vectơ chỉ phương của đường thẳng Δ là u = (1;2;1)<br>Đường thẳng d nằm trong mặt phẳng (P) đồng thời cắt và vuông góc với Δ<br>Đường thẳng d nhận [n,u] = (3;−2;1) làm véc tơ chỉ phương vàM(1;1;1) ∈ d<br>{ x = 1 + 3t<br>Phương trình đường thẳng d:; y = 1−2t<br>z = 1 + t"
      },
      {
        "id": 27,
        "part": 1,
        "shortTag": "P1.27",
        "label": "Phần 1 - Câu 27",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai mặt phẳng (P):2x + y−z−1 = 0, (Q):x−2y + z−5 = 0. Khi đó giao tuyến của hai mặt phẳng (P) và (Q) có một vectơ chỉ phương là",
        "options": {
          "A": "u = (1;−2;1).",
          "B": "u = (2;1;−1).",
          "C": "u = (1;3;5).",
          "D": "u = (−1;3;−5)."
        },
        "answer": "C",
        "explanation": "Gọi d = (P) ∩ (Q). Khi đó một vectơ chỉ phương của d là u = [n;n] = (−1;−3;−5).<br>P Q<br>Vậy u = (1;3;5) cũng là một vectơ chỉ phương của d."
      },
      {
        "id": 28,
        "part": 1,
        "shortTag": "P1.28",
        "label": "Phần 1 - Câu 28",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai mặt phẳng (P):3x−2y + 2z−5 = 0 và (Q):4x + 5y−z + 1 = 0. Biết hai điểm A, B phân biệt cùng thuộc giao tuyến của hai mặt phẳng (P) và (Q). Khi đó AB cùng phương với véctơ nào sau đây?",
        "options": {
          "A": "u = (8;−11;−23).",
          "B": "u = (3;−2;2).",
          "C": "u = (−8;11;−23).",
          "D": "u = (4;5;−1)."
        },
        "answer": "A",
        "explanation": "Ta có (P) có véctơ pháp tuyến là n = (3;−2;2) và (Q) có vectơ pháp tuyến là:<br>(P)<br>n = (4;5;−1).<br>(Q)<br>{ AB ⊂ (P)<br>{ AB ⊥ n<br>(P)<br>Do; ⇒; nên đường thẳng AB có một véctơ chỉ phương là:<br>AB ⊂ (Q)<br>}AB ⊥ n (Q)<br>u = [n;n] = (8;−11;−23).<br>(Q) (P)<br>Do AB cũng là một véc tơ chỉ phương của AB nên AB cùng phương với vectơ:<br>u = (8;−11;−23)."
      },
      {
        "id": 29,
        "part": 1,
        "shortTag": "P1.29",
        "label": "Phần 1 - Câu 29",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Cho hai điểm A(3;3;1), B(3;2;1), mặt phẳng (P):x−2y−z + 3 = 0. Đường thẳng d nằm trên (P) sao cho mọi điểm của d cách đều hai điểm A, B có phương trình là { x = 4 + t { x = 4 + t { x = 4 + t { x = t 5 5 5",
        "options": {
          "A": "; y =.",
          "B": "; y = 7 + 3t.",
          "C": "; y = + 2t.",
          "D": "; y = −. 2 2 2 z = 2t } z = 2 + t z = 2 + t z = 2 + t } } }"
        },
        "answer": "A",
        "explanation": "(5)<br>Ta có AB = (0;−1;0); I 3;;1 là trung điểm của AB và A, B nằm ở hai phía của mặt phẳng<br>(P).<br>Gọi (α) là mặt phẳng trung trực của AB và d = (α) ∩ (P). Khi đó d chính là đường thẳng<br>thuộc mặt phẳng (P) và cách đều hai điểm A,B.<br>(5)<br>Mặt phẳng (α) đi qua I 3;;1 và có véc tơ pháp tuyến AB = (0;−1;0) là<br>(3) (5) (5)<br>0 x− + y− + 0 z− = 0 ⇔ 2y−5 = 0<br>2 2 2<br>Vì d là đường giao tuyến của (α) và (P) nên một véctơ chỉ phương của d là<br>u = [n,n] = (−2;0;−2) = −2(1;0;1).<br>d (P) (α)<br>{ x = 4 + t<br>(5) 5<br>Mà d đi qua C<br>4;;2<br>∈ (α) ∩ (P). Vậy d có phương trình tham số:; y = (t ∈ ℝ).<br>2 2<br>z = 2 + t"
      },
      {
        "id": 30,
        "part": 1,
        "shortTag": "P1.30",
        "label": "Phần 1 - Câu 30",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, gọi (α) là mặt phẳng chứa đường thẳng Δ có phương x−2 y−1 z trình = = và vuông góc với mặt phẳng (β):x + y−2z−1 = 0. Giao tuyến của (α) 1 1 2 và (β) đi qua điểm nào trong các điểm sau.",
        "options": {
          "A": "C(1;2;1).",
          "B": "D(2;1;0).",
          "C": "B(0;1;0).",
          "D": "A(2;1;1)."
        },
        "answer": "D",
        "explanation": "Ta có vectơ chỉ phương của đường thẳng Δ là u = (1;1;2).<br>Vectơ pháp tuyến của mặt phẳng (β):x + y−2z−1 = 0 là n = (1;1;−2)<br>x−2 y−1 z<br>Vì (α) là mặt phẳng chứa đường thẳng Δ có phương trình = = và vuông góc với<br>1 1 2<br>mặt phẳng (β):x + y−2z−1 = 0 nên (α) có một vectơ pháp tuyến là:<br>n = [u,n] = (−4;4;0) = −4(1;−1;0) = 4.a.<br>Gọi d = (α) ∩ (β), suy ra d có véc – tơ chỉ phương là u = [a,n] = (2;2;2) = 2(1;1;1).<br>x−2 y−1 z<br>Giao điểm của đường thẳng Δ có phương trình = = và mặt phẳng<br>1 1 2<br>(β):x + y−2z−1 = 0 là I(3;2;2).<br>{ x = 3 + t<br>Suy ra phương trình đường thẳng d:; y = 2 + t.<br>z = 2 + t<br>Vậy A(2;1;1) thuộc đường thẳng d.<br>x−2 y−1 z−2"
      },
      {
        "id": 31,
        "part": 1,
        "shortTag": "P1.31",
        "label": "Phần 1 - Câu 31",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng chéo nhau d: = = và 1 1 −1 −1 { x = t d:; y = 3. Phương trình đường vuông góc chung của hai đường thẳng d, d là 2 1 2 }z = −2 + t { x = 2 + t { x = 3 + t { x = 2 + 3t { x = 3 + t",
        "options": {
          "A": "; y = 1 + 2t.",
          "B": "; y = 3−2t.",
          "C": "; y = 1−2t.",
          "D": "; y = 3. }z = 2−t }z = 1−t }z = 2−5t }z = 1−t"
        },
        "answer": "A",
        "explanation": "Gọi d là đường thẳng cần tìm. Gọi A = d ∩ d,B = d ∩ d.<br>1 2<br>Khi đó: A ∈ d ⇒ A(2 + a;1−a; 2−a); B ∈ d ⇒ B(b;3; −2 + b)<br>1 2<br>AB = (−a + b−2; a + 2; a + b−4)<br>Mà d có vectơ chỉ phương u = (1; −1; −1), d có vectơ chỉ phương u = (1;0;1).<br>1 1 2 2<br>Do ⇒ A(2;1;2);B(3;3;1)<br>{ d ⊥ d { AB ⊥ u { AB.u = 0 { −a + b−2−a−2−a−b + 4 = 0 { −3a = 0 { a = 0<br>; 1 ⇔; 1 ⇔; 1 ⇔; ⇔; ⇔;<br>}d ⊥ d<br>}AB ⊥ u<br>}AB.u<br>= 0 }−a + b−2 + a + b−4 = 0 }2b−6 = 0 }b = 3<br>Vậy d đi qua điểm A(2;1;2) và có vectơ chỉ phương u = AB = (1; 2; −1) nên phương trình<br>{ x = 2 + t<br>của d là; y = 1 + 2t.<br>z = 2−t<br>{ x = 1 + t"
      },
      {
        "id": 32,
        "part": 1,
        "shortTag": "P1.32",
        "label": "Phần 1 - Câu 32",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, đường vuông góc chung của hai đường thẳng d:; y = 0 và z = −5 + t } { x = 0 d′:; y = 4−2t′ có phương trình là z = 5 + 3t′ } x + 4 y z −2 x−4 y z + 2",
        "options": {
          "A": "= =.",
          "B": "= =. −2 3 2 −2 3 2 x−4 y z + 2 x−4 y z−2",
          "C": "= =.",
          "D": "= =. −1 3 1 2 −3 −2"
        },
        "answer": "B",
        "explanation": "Giả sử AB là đường vuông góc chung của d và d′ với A ∈ d, B ∈ d′.<br>Ta có u = (1;0;1), u = (0;−2;3) lần lượt là vectơ chỉ phương của d và d′.<br>d d′<br>{ A(a + 1;0;a−5)<br>Ta có; ⇒ BA = (a + 1;2b−4;a−3b−10).<br>B(0;4−2b;3b + 5)<br>{ d ⊥ AB { u.BA = 0 { (a + 1) + (a−3b−10) = 0 { a = 3<br>Khi đó; ⇔; d ⇔; ⇔;<br>}d′ ⊥ AB } u.BA = 0 } −2(2b−4) + 3(a−3b−10) = 0 }b = −1<br>d′<br>{ A(4;0;−2)<br>⇒; ⇒ BA = (4;−6;−4) ⇒ u = (−2;3;2) là một VTCP của AB.<br>B(0;6;2)<br>x−4 y z + 2<br>Kết hợp với AB qua A(4;0;−2) ⇒ AB: = =.<br>−2 3 2"
      },
      {
        "id": 33,
        "part": 1,
        "shortTag": "P1.33",
        "label": "Phần 1 - Câu 33",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ toạ độ Oxyz, gọi (Δ) là đường vuông góc chung của hai đường thẳng: { x = 1 + t′ x−1 y−2 z (d): = = và (d):; y = 3−2t′. Phương trình của (Δ) là 1 −1 2 3 2 z = 1 } { 2 { 2 { 2 { 2 x = + 2t x = −2t x = + 2t x = + 2t 3 3 3 3 8 8 8 8",
        "options": {
          "A": "; y = + t.",
          "B": "; y = + t.",
          "C": "; y = + t.",
          "D": "; y = + t. 3 3 3 3 z = 1 z = 1 z = 1−2t z = 1 + 2t } } } }"
        },
        "answer": "A",
        "explanation": "Trong không gian với hệ toạ độ Oxyz, (d) có VTCP là u = (−1;2;3),(d) có VTCP là<br>1 1 2<br>u = (1;−2;0). Gọi M,N lần lượt là giao điểm của (Δ) với hai đường thẳng (d), (d).<br>2 1 2<br>⇒ M(1−t;2 + 2t;3t) ∈ (d), N(1 + t′;3−3t′;1) ∈ (d).<br>1 2<br>{ t = 1<br>{ MN.u = 0 3<br>Suy ra MN = (t′ + t;1−2t′−2t;1−3t). Ta có:; 1 ⇔;<br>}MN.u 2 = 0 t′ = 1<br>} 15<br>(2 8) (6 3) 3<br>Do đó: M;;1, ⇒ MN =;;0 = (2;1;0)<br>3 3 15 15 15<br>{ 2<br>x = + 2t<br>Từ đó suy ra phương trình của (Δ):; y = + t.<br>z = 1"
      },
      {
        "id": 34,
        "part": 1,
        "shortTag": "P1.34",
        "label": "Phần 1 - Câu 34",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ toạ độ Oxyz, cho hai đường thẳng (d)và (d)chéo nhau có phương 1 2 { x = 1 { x = 3t trình (d):; y = 10 + 2t, (d):; y = 3−2t. Gọi (Δ)là đường thẳng vuông góc chung của (d)và 1 2 1 z = t z = −2 } } (d). Phương trình của (Δ) là 2 { { 7 x = 2t x = −46t 3 { x = 1 + 2t { x = 1 + 2t 177",
        "options": {
          "A": "; y = + 3t.",
          "B": "; y = −147t.",
          "C": "; y = 2 + 3t.",
          "D": "; y = 2−3t. 98 z = 246t z = 2−3t z = 6−4t } } 17 z = −6t− } } 49"
        },
        "answer": "A",
        "explanation": "Đường thẳng (d) có VTCP là u = (0;2;1), (d) có VTCP là u = (3;−2;0).<br>1 1 2 1<br>Gọi M(1;10 + 2t;t) ∈ (d), N(3t;3−2t;−2) ∈ (d).<br>1 1 1 2 2 2<br>Suy ra MN = (3t −1;−2t −7;−t −2)<br>2 2 1<br>{ t = − 164<br>{ MN.u = 0 { 5t + 4t = −16 1 49<br>Ta có:; 1 ⇔; 1 2 ⇔;<br>}MN.u 2 = 0 }4t 1 + 13t 2 = −11 t = 9<br>} 2 49<br>(162 164) (27 129) 11<br>Do đó: M 1;;−, N;;−2, MN = − (2;3;−6)<br>49 49 49 49 49<br>x = 1 + 2t<br>162<br>Từ đó suy ra phương trình của (Δ):; y = + 3t.<br>49<br>164<br>z = −6t−<br>} 49"
      },
      {
        "id": 35,
        "part": 1,
        "shortTag": "P1.35",
        "label": "Phần 1 - Câu 35",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, viết phương trình hình chiếu vuông góc của đường thẳng x + 1 x−2 z + 3 d: = = trên mặt phẳng toạ độ Oxy. 2 3 1 { x = 5−6t { x = 5−6t { x = 5 + 6t { x = 3−6t",
        "options": {
          "A": "; y = 11 + 9t.",
          "B": "; y = 11−9t.",
          "C": "; y = 11−9t.",
          "D": "; y = 11−9t. }z = 0 }z = 0 }z = 0 }z = 0"
        },
        "answer": "B",
        "explanation": "Lấy N(−1;2;−3) ∈ d và gọi H là hình chiếu của điểm N trên (Oxy)thì H(−1;2;0).<br>Thay tọa độ điểm H vào các phương án ta thấy chỉ có phương án B thỏa mãn.<br>x + 2 y−1 z−2"
      },
      {
        "id": 36,
        "part": 1,
        "shortTag": "P1.36",
        "label": "Phần 1 - Câu 36",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ toạ độ Oxyz, cho đường thẳng d: = =. Viết phương 1 1 2 trình đường thẳng d′ là hình chiếu của d lên mặt phẳng Oxy. { x = −3 + t { x = −3 + t",
        "options": {
          "A": "d′:; y = t,(t ∈ ℝ).",
          "B": "d′:; y = −t,(t ∈ ℝ). }z = 0 }z = 0 { x = −3 + t { x = 3−t",
          "C": "d′:; y = 1 + t,(t ∈ ℝ).",
          "D": "d′:; y = −t,(t ∈ ℝ). z = 0 z = 0 } }"
        },
        "answer": "A",
        "explanation": "{ x = −2 + t<br>Phương trình tham số của d:; y = 1 + t.<br>}z = 2 + 2t<br>{ x = −2 + t<br>Hình chiếu của d lên mặt phẳng (Oxy) (có phương trình z = 0) là Δ:; y = 1 + t.<br>}z = 0<br>Nhận xét d′ ở đáp án A có vectơ chỉ phương cùng phương với VTCP của Δ và có 1 điểm chung<br>với Δ ⇒ d′ ≡ Δ."
      },
      {
        "id": 37,
        "part": 1,
        "shortTag": "P1.37",
        "label": "Phần 1 - Câu 37",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz cho điểm A(–1;3;–2) và mặt hai phẳng (P):2x– y + z + 3 = 0; (Q):x−2y−1 = 0. Phương trình đường thẳng d′ là hình chiếu vuông góc của d lên mặt phẳng (P). Biết d là đường thẳng đi qua A và vuông góc với mặt phẳng (Q) { x = u { x = u { x = 1 { x = 0",
        "options": {
          "A": "; y = 1 + 7u.",
          "B": "; y = 1−7u.",
          "C": "; y = 1 + 3u.",
          "D": "; y = −1 + 3u. } z = −2 + 10u } z = −2 + 10u } z = −2 + u } z = 2 + u"
        },
        "answer": "A",
        "explanation": "Mặt phẳng (Q) có vectơ pháp tuyến n = (1;–2;0). Vì d ⊥ (Q) ⇒ u = n = (1;−2;0).<br>Q d Q<br>{ x = −1 + t<br>Khi đó phương trình đường thẳng d là:; y = 3−2t<br>}z = −2<br>Gọi H là giao điểm của đường thẳng d với mặt phẳng (P)<br>Khi đó, tọa điểm điểm H là nghiệm của hệ phương trình:<br>{ x = −1 + t { x = 0<br>y = 3−2t y = 1<br>; ⇔;<br>z = −2 z = −2<br>}2x– y + z + 3 = 0 } t = 1<br>Suy ra H(0;1;−2). Lấy A(−1;3;−2) ∈ d<br>{ x = −1 + 2t'<br>d là đường thẳng đi qua A và vuông góc với mp(P) ⇒ d:; y = 3−t' (t' ∈ ℝ).<br>1 1<br>z = −2 + t'<br>(1 7 4)<br>Gọi B là hình chiếu vuông góc của điểm A trên mp(P) ⇒ B = d ∩ (P) ⇒ B;;−.<br>1 3 3 3<br>(−1 7 10) −1<br>⇒ BH =;−;− = (1;7;10) ⇒ Một VTCP của đường thẳng d' là (1;7;10).<br>3 3 3 3<br>{ x = u<br>Vậy phương trình đường thẳng d là:; y = 1 + 7u (u ∈ ℝ).<br>}z = −2 + 10u"
      },
      {
        "id": 38,
        "part": 1,
        "shortTag": "P1.38",
        "label": "Phần 1 - Câu 38",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho ba mặt phẳng (Oxy);(Oyz);(P):x + 2y−4 = 0. Viết phương trình đường thẳng d′ là hình chiếu vuông góc của d lên mặt phẳng (P):x + 2y−4 = 0. Với d là giao tuyến của hai mặt phẳng (Oxy);(Oyz). { x = −2u { x = 2u { x = −2u { x = −2u",
        "options": {
          "A": "; y = 2 + u.",
          "B": "; y = 2 + u.",
          "C": "; y = 2 + u.",
          "D": "; y = u. z = 0 z = 0 z = u z = 2 } } } }"
        },
        "answer": "A",
        "explanation": "{ x = 0<br>Vì d là giao tuyến của hai mặt phẳng (Oxy);(Oyz) nên d ≡ Oy:; y = t.<br>z = 0<br>Gọi H là giao điểm của đường thẳng d với mặt phẳng (P)<br>Suy ra H(0;2;0) và lấy A(0;1;0) ∈ d<br>{ x = t′<br>d là đường thẳng đi qua A và vuông góc với mp(P) ⇒ d:; y = 1 + 2t′(t′ ∈ ℝ).<br>1 1<br>z = 0<br>(2 9)<br>Gọi B là hình chiếu vuông góc của điểm A trên mp(P) ⇒ B = d ∩ (P) ⇒ B;;0.<br>1 5 5<br>(2 1)<br>⇒ BH = −;;0 ⇒ Một VTCP của đường thẳng d' là (−2;1;0).<br>5 5<br>{ x = −2u<br>Vậy phương trình đường thẳng d là:; y = 2 + u(u ∈ ℝ).<br>}z = 0"
      },
      {
        "id": 39,
        "part": 2,
        "shortTag": "P2.1",
        "label": "Phần 2 - Câu 1",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng d: = =. Xét tính đúng sai của các 3 −4 1 khẳng định sau:",
        "statements": {
          "a": "Điểm M(3;−4;1)nằm trên đường thẳng d.",
          "b": "Một vectơ chỉ phương của d là u = (−3;4;−1) { x = −4 + 3t",
          "c": "Đường thẳng dsong song với đườn thẳng Δ:; y = 5−4t. }z = −2 + t x−1 y + 1 z−2",
          "d": "Đường thẳng Δ song song với d và cắt cả hai đường thẳng d: = = và 1 3 1 2 x + 2 y−3 z x + 4 y + 1 z + 1 d: = = có phương trình là Δ: = =. 2 2 4 1 3 −4 1"
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Sai: Tọa độ điểm M(3;−4;1)không thỏa mãn phương trình d.<br>b) Đúng: Ta có u(−3;4;−1) = −(3;−4;1)<br>c) Sai: Đường thẳng dtrùng với đường thẳng Δ<br>x−1 y + 1 z−2<br>d) Đúng: Đường thẳng Δ song song với d và cắt cả hai đường thẳng d: = =<br>1 3 1 2<br>x + 2 y−3 z x + 4 y + 1 z + 1<br>và d: = = có phương trình là Δ: = =.<br>2 2 4 1 3 −4 1<br>Gọi M,N là giao điểm của Δ và d,d.<br>1 2<br>{ x = 1 + 3t { x = −2 + 2t′<br>M N<br>Khi đó M,N thuộc d,d nên; y = −1 + t,; y = 3 + 4t′.<br>1 2 M N<br>} z = 2 + 2t } z = t′<br>M N<br>Vector chỉ phương của Δ là MN = (−3 + 2t′−3t;4 + 4t′−t;−2 + t′−2t)<br>x + 4 y−5 z + 2 −3 + 2t′−3t 4 + 4t′−t −2 + t′−2t<br>Δ song song với d: = = nên = =<br>3 −4 1 3 −4 1<br>4 (7 2)<br>Giải hệ ta được t′ = −1;t = −. Vậy N(−4;−1;−1),M −3;−;−<br>3 3 3<br>x + 4 y + 1 z + 1<br>Vậy Δ: = =<br>3 −4 1<br>x−1 y + 1 z"
      },
      {
        "id": 40,
        "part": 2,
        "shortTag": "P2.2",
        "label": "Phần 2 - Câu 2",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho M(2;1;0) và đường thẳng d: = =. Xét tính đúng 2 1 −1 sai của các khẳng định sau:",
        "statements": {
          "a": "Điểm M (1;−1;1) nằm trên đường thẳng d.",
          "b": "Một vectơ chỉ phương của d là u = (2;1;−1) { x = 1 + 2t",
          "c": "Đường thẳng dsong song với đường thẳng Δ:; y = −1 + t. z = −t }",
          "d": "Gọi Δ là đường thẳng đi qua M, cắt và vuông góc với d thì phương trình đường thẳng Δlà { x = 2 + t; y = 1−4t z = −2t }"
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Sai: Tọa độ điểm M (1;−1;1) không thỏa mãn phương trình d.<br>b) Đúng: Một vectơ chỉ phương của d là u = (2;1;−1)<br>c) Sai: Đường thẳng dtrùng với đường thẳng Δ<br>d) Đúng: Gọi Δ là đường thẳng đi qua M cắt và vuông góc với d thì phương trình đường thẳng<br>{ x = 2 + t<br>Δ là; y = 1−4t<br>z = −2t<br>{ x = 1 + 2t<br>Phương trình tham số của đường thẳng d là; y = −1 + t.<br>z = −t<br>Gọi H là hình chiếu vuông góc của M lên d đường thẳng Δ cần tìm là đường thẳng MH.<br>Vì H thuộc d nên H(1 + 2t;−1 + t;−t) suy ra MH = (2t −1;−2 + t;−t).<br>Vì MH ⊥ d và d có một vectơ chỉ phương là u = (2;1;−1) nên MH.u = 0 ⇔ t =.<br>{ x = 2 + t<br>(1 −4 −2)<br>Do đó MH =<br>;;<br>. Vậy phương trình tham số của Δ là:; y = 1−4t<br>3 3 3<br>}z = −2t<br>x−1 y−3 z−2"
      },
      {
        "id": 41,
        "part": 2,
        "shortTag": "P2.3",
        "label": "Phần 2 - Câu 3",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong hệ tọa độ Oxyz, cho đường thẳngd: = =. Xét tính đúng sai của các khẳng 1 −1 2 định sau:",
        "statements": {
          "a": "Điểm M(1;3;−2)nằm trên đường thẳng d.",
          "b": "Một vectơ chỉ phương của d là u = (−1;1;2). { x = 1 + t",
          "c": "Đường thẳng dsong song với đườn thẳng Δ:; y = 3−t. }z = 2 + 2t { x = −3t",
          "d": "Phương trình đường vuông góc chung của d và đường thẳng d:; y = t là 2 }z = −1−3t x−2 y−2 z−4 = =. 1 −3 −2"
        },
        "answers": {
          "a": false,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Sai: Tọa độ điểm M(1;3;−2)không thỏa mãn phương trình d.<br>b) Sai: u = (−1;1;2) không là một vectơ chỉ phương của đường thẳng d.<br>{ x = 1 + t<br>c) Sai: Đường thẳng dtrùng với đường thẳng Δ:; y = 3−t<br>z = 2 + 2t<br>{ x = −3t<br>d) Đúng: Phương trình đường vuông góc chung của dvà đường thẳng d:; y = t là<br>}z = −1−3t<br>x−2 y−2 z−4<br>= =.<br>1 −3 −2<br>Gọi: Δ ∩ d = M(1 + t';3−t';2 + 2t'), Δ ∩ d = N(−3t;t;−1−3t)<br>1 2<br>⇒ MN = (−3t −1−t';t −3 + t';−3−3t −2t').<br>Hai đường thẳng d,d lần lượt có 2 vectơ chỉ phương là u = (1;−1;2),u = (−3;1;−3).<br>1 2 1 2<br>{ MN.u = 0 { −6t′−10t = 4 { t′ = 1<br>Vì Δ là đường vuông góc chung của d;d nên; 1 ⇔; ⇔;<br>1 2 }MN.u = 0 }10t′ + 19t = −9 }t = −1<br>⇒ M (2;2;4),N(3;−1;2),MN = (1;−3;−2).<br>x−2 y−2 z−4<br>Vậy phương trình Δ: = =.<br>1 −3 −2<br>x + 1 y z + 2"
      },
      {
        "id": 42,
        "part": 2,
        "shortTag": "P2.4",
        "label": "Phần 2 - Câu 4",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong Oxyz, cho mặt phẳng (P):x + 2y + z−4 = 0 và đường thẳng d: = =. Xét 2 1 3 tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Đường thẳng d có vectơ chỉ phương u = (−1;0;−2). d",
          "b": "Đường thẳng (d) và mặt phẳng (P) cắt nhau.",
          "c": "Gọi H = d ∩ (P) ⇒ H = (1;−1;1).",
          "d": "Đường thẳng Δ nằm trong mặt phẳng (P) đồng thời cắt và vuông góc với đường thẳng d có x−1 y−1 z−1 phương trình là = =. 5 −1 −3"
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Sai: Mặt phẳng (P)có vectơ pháp tuyến n = (1;2;1)<br>Đường thẳng dcó vectơ chỉ phương u = (2;1;3)<br>b) Đúng: Vì n.u = 7 ≠ 0 nên đường thẳng (d) và mặt phẳng (P) cắt nhau.<br>c) Sai: Gọi H = d ∩ (P) ⇒ Tọa độ điểmH là nghiệm của hệ phương trình:<br>{ x + 2y + z−4 = 0 { x = 1<br>; x + 1 y z + 2 ⇔; y = 1 ⇒ H = (1;1;1).<br>= =<br>} 2 1 3 } z = 1<br>d) Đúng: Vì đường thắng Δ nằm trong mặt phẳng (P)đồng thời cắt và vuông góc với đường<br>thẳng d nên đường thẳng Δ đi qua điểm H và có vectơ chỉ phương u = [n,u] = (5;−1;−3)<br>Δ p d<br>x−1 y−1 z−1<br>Vậy phương trình đường thẳng Δ là: = =.<br>5 −1 −3"
      },
      {
        "id": 43,
        "part": 2,
        "shortTag": "P2.5",
        "label": "Phần 2 - Câu 5",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyzcho điểm A(1;0;2) và đường thẳng dcó phương trình: x−1 y z + 1 = =. Xét tính đúng sai của các khẳng định sau: 1 1 2 →",
        "statements": {
          "a": "Đường thẳng dcó một véc tơ chỉ phương là u(1;1;2).",
          "b": "Mặt phẳng (P) đi qua điểmA và vuông góc với d có phương trình tổng quát là x + y + 2z−1 = 0.",
          "c": "Hình chiếu vuông góc của A trên đường thẳng d là điểm H(1;0;−1). x−1 y z−2",
          "d": "Phương trình đường thẳng Δ đi qua A, vuông góc và cắt d có dạng: = = 1 1 −1"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Đường thẳng dcó một véc tơ chỉ phương là u = (1;1;2)<br>b) Sai: Mặt phẳng (P) đi qua điểmA và vuông góc với d có một véc tơ pháp tuyến là n = (1;1;2)<br>. Khi đó phương trình tổng quát của mặt phẳng (P) là x + y + 2z−5 = 0.<br>c) Sai: Đường thẳng dcó một véc tơ chỉ phương là u = (1;1;2).<br>Gọi H(t + 1;t;2t−1) là hình chiếu vuông góc của điểm Atrên đường thẳng d.<br>Ta có AH = (t;t;2t −3) và AH ⊥ u ⇒ AH.u = 0 ⇔ 6t −6 = 0 ⇔ t = 1 ⇒ H(2;1;1)<br>d) Đúng: Gọi d ∩ Δ = B ⇒ B(1 + t;t;−1 + 2t) và AB = (t;t;−3 + 2t)<br>Đường thẳng d có vectơ chỉ phương là u = (1;1;2)<br>Vì d ⊥ Δ nên AB ⊥ u ⇔ AB.u = 0 ⇔ t + t + 2(−3 + 2t) = 0 ⇔ t = 1 suy ra AB = (1;1;−1).<br>d d<br>Ta có đường thẳng Δ đi qua A(1;0;2) và nhận vectơ AB = (1;1;−1) là vectơ chỉ phương có dạng<br>x−1 y z−2<br>Δ: = =.<br>1 1 −1<br>x−1 y + 1 z"
      },
      {
        "id": 44,
        "part": 2,
        "shortTag": "P2.6",
        "label": "Phần 2 - Câu 6",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm M(2;1;0) và đường thẳng d: = =. Xét tính 2 1 −1 đúng sai của các mệnh đề sau: →",
        "statements": {
          "a": "Đường thẳng dcó một véc tơ chỉ phương là u = (2;1;−1).",
          "b": "Mặt phẳng (P) đi qua điểm M và vuông góc với d có phương trình tổng quát là 2x + by + cz + d = 0. Khi đó b + c + d = −5",
          "c": "Gọi M′ là điểm đối xứng với M qua d. Khi đó M′(1;0;−2).",
          "d": "Phương trình đường thẳng Δ đi qua điểm M cắt và vuông góc với đường thẳng d. x−2 y−1 z = =. Khi đó a + b = −6. 1 a b"
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Đường thẳng dcó một véc tơ chỉ phương là u = (2;1;−1).<br>b) Đúng: Mặt phẳng (P) đi qua điểmM và vuông góc với d có một vectơ pháp tuyến là<br>n = (2;1;−1).<br>Khi đó phương trình tổng quát của mặt phẳng (P) là<br>2(x−2) + y−1−z = 0 ⇔ 2x + y−z−5 = 0.<br>{ b = 1<br>Do (P) có phương trình tổng quát là 2x + by + cz + d = 0. ⇒; c = −1 ⇒ b + c + d = −5<br>}d = −5<br>c) Sai: Đường thẳng dcó một véc tơ chỉ phương là u = (1;−1;1).<br>Gọi H(2b + 1;−1 + b;−b) là hình chiếu vuông góc của điểm M trên đường thẳng d.<br>Ta có MH(2b−1;b−2;−b).<br>→ → → → 2 (7 −1 −2)<br>DoMH ⊥ u ⇒ MH.u = 0 ⇔ 2(2a−1) + 1(a−2) + a = 0 ⇔ a = ⇒ H;;.<br>3 3 3 3<br>(8 5 4)<br>Điểm M′ là điểm đối xứng với M qua d. Khi đó Hlà trung điểm MM′ ⇒ M′;−;−.<br>3 3 3<br>d) Gọi N(1 + 2t;−1 + t;−t) là giao điểm của đường thẳng Δvà đường thẳng d<br>Lúc đó đường thẳng Δ nhận MN(−1 + 2t;−2 + t;−t) làm vectơ chỉ phương.<br>Mặt khác Δ vuông góc với đường thẳng d nên ta có: 2(2t−1) + t −2 + t = 0 ⇒ t =.<br>2 → (1 4 2) →<br>Với t = đường thẳng Δ nhận MN;−;− hoặc u(1;−4;2)làm vectơ chỉ phương.<br>3 3 3 3<br>x−2 y−1 z x−2 y−1 z<br>Phương trình đường thẳng Δ: = =. Do đường thẳng Δ = =.<br>1 −4 −2 1 a b<br>Khi đó a + b = −6."
      },
      {
        "id": 45,
        "part": 2,
        "shortTag": "P2.7",
        "label": "Phần 2 - Câu 7",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho măt phẳng (α):x + y−z + 6 = 0 và đường thẳng x−1 y + 4 z d: = =. Xét tính đúng sai của các khẳng định sau: 2 3 5",
        "statements": {
          "a": "Măt phẳng (α):x + y−z + 6 = 0 có vectơ pháp tuyến n = (1;1;−1). x−1 y + 4 z",
          "b": "Đường thẳng d: = = có vectơ chỉ phương u = (1;−4;0). 2 3 5",
          "c": "Đường thẳng d cắt (α). x y + 5 z−1",
          "d": "Hình chiếu vuông góc của d trên (α) có phương trình là = = 2 3 5"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Mặt phẳng (α):x + y−z + 6 = 0 có vectơ pháp tuyến n = (1;1;−1).<br>x−1 y + 4 z<br>b) Sai: Đường thẳng d: = = có vectơ chỉ phưong u = (2;3;5).<br>2 3 5<br>c) Sai: Vì n.u = 1.2 + 1.3 + (−1).5 = 0 nên d∥(α).<br>d) Đúng: Gọi d′ là hình chiếu vuông góc của d trên (α) ⇒ d′∥d.<br>Lấy A(1;−4;0) ∈ d. Gọi Δ là đường thẳng đi qua A và vuông góc với (α).<br>{ x = 1 + t<br>Suy ra phương trình dường thẳng Δ là; y = −4 + t.<br>}z = −t<br>Goi A′ là hình chiếu của A lên (α) thì A′ = Δ ∩ (α) ⇒ A′(0;−5;1).<br>Đường thẳng d′ là đường thẳng đi qua A′(0;−5;1), có vectơ chỉ phương u = (2;3;5) có phương<br>x y + 5 z−1<br>trình là = =.<br>2 3 5"
      },
      {
        "id": 46,
        "part": 2,
        "shortTag": "P2.8",
        "label": "Phần 2 - Câu 8",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hê toa độOxyz, cho măt phẳng (P):x + y−z−1 = 0 và đường thẳng x + 2 y−4 z + 1 d: = =. Xét tính đúng sai của các khẳng định sau: 2 −2 1",
        "statements": {
          "a": "Điểm N(0;2;0) thuộc đường thẳng d.",
          "b": "Đường thẳng d song song với mặt phẳng (P). { x = −2 + 2t",
          "c": "Phương trình tham số của d là; y = −4−2t,t ∈ ℝ. }z = −1 + t",
          "d": "Phương trình đường thẳng d′ là hình chiếu vuông góc của d trên (P)có phương trình là x−2 y z−1 d′: = =. 7 −5 2"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Thay tọa độ N(0;2;0) vào d thỏa mãn phương trình đường thẳng d.<br>b) Sai: Ta có n = (1;1;−1); u = (1;−1;1) nên n.u = 1.1 + (−1).1 + 1.(−1) = −2 ≠ 0<br>P d P d<br>Vậy đường thẳng dkhông song song với mặt phẳng (P)<br>{ x = −2 + 2t<br>c) Sai: Phương trình tham số của d:; y = 4−2t,t ∈ ℝ.<br>z = −1 + t<br>d) Đúng: Gọi M = (−2 + 2t;4−2t;−1 + t) là giao điểm của d và (P)<br>Suy ra (−2 + 2t) + (4−2t)−(−1 + t)−1 = 0 ⇔ t = 2 ⇒ M = (2;0,1).<br>Măt phẳng (P) có 1 vector pháp tuyến là n = (1;1;−1). Điểm N = (0;2;0) ∈ d.<br>Gọi Δ là đường thẳng qua N(0,2;0) và vuông góc với măt phẳng (P)\\<br>Đường thẳng Δ nhận vector n = (1;1;−1) làm vector chỉ phương.<br>{ x = c<br>x−0 y−2 z−0<br>Suy ra phương trình của Δ là: (Δ): = = ⇔ (Δ):; y = 2 + c,c ∈ ℝ.<br>1 1 −1<br>z = −c<br>Gọi M′ = (c;2 + c;−c) là giao điểm của Δ với măt phẳng (P)<br>1 (1 5 1)<br>Suy ra c + (2 + c)−(−c)−1 = 0 ⇔ c = − ⇒ M′ −;;.<br>3 3 3 3<br>(7 5 2)<br>Khi đó MM′ = −;;−, đường thẳng d′ là hình chiếu vuông góc của d trên măt phẳng (P)<br>3 3 3<br>nên d′ chính là đường thẳng MM′.<br>Suy ra d′ đi qua M(2;0;1) và nhân vector u = −3MM′ = (7;−5;2) làm vector chỉ phương nên<br>x−2 y z−1<br>phương trình của d′ là: d′: = =.<br>7 −5 2"
      },
      {
        "id": 47,
        "part": 2,
        "shortTag": "P2.9",
        "label": "Phần 2 - Câu 9",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai điểm A(1;3;3) và B(3;5;9). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Một vectơ chỉ phương của đường thẳng AB là: u = (1;1;3).",
          "b": "Phương trình tham số của đường thẳng AB là: x = 3 + t; y = 5 + 3t; z = 9 + 3t (t ∈ ℝ).",
          "c": "Điểm M(4;6;9) thuộc đường thẳng AB.",
          "d": "Phương trình đường thẳng d đi qua điểm C(2;0;−3) và song song với đường thẳng AB là: (x − 4)/1 = (y − 2)/1 = (z − 3)/3."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: AB = (2;2;6) nên một vectơ chỉ phương của đường thẳng AB là: u = (1;1;3).<br>{ x = 3 + t<br>b) Sai: Phương trình tham số của đường thẳng AB là:; y = 5 + t (t ∈ ℝ)<br>z = 9 + 3t<br>{ 4 = 3 + t { t = 1<br>c) Sai: Ta có:; 6 = 5 + t ⇔; t = 1 ⇔ t ∈ ∅.<br>9 = 9 + 3t t = 0<br>} }<br>d) Đúng: Ta có: u = (1;1;3) và điểm C ∈ d.<br>x−2 y−1 z + 3"
      },
      {
        "id": 48,
        "part": 2,
        "shortTag": "P2.10",
        "label": "Phần 2 - Câu 10",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng d: = =. Xét tính đúng sai của các 1 2 2 khẳng định sau:",
        "statements": {
          "a": "Đường thẳng d qua điểm M(1;2;2).",
          "b": "Đường thẳng d có một vectơ chỉ phương v = (2;4;4). { x = 2 + t",
          "c": "Đường thẳng d có phương trình tham số; y = 1 + t. z = −3 + 2t } { x = 3−t",
          "d": "Đường thẳng d song song với đường thẳng Δ:; y = 2−2t. z = −1−2t }"
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "1−2 2−1<br>a) Sai: Thay M(1;2;0) vào đường thẳng d, ta có ≠.<br>1 2<br>x−2 y−1 z + 3<br>b) Đúng: Đường thẳng d: = = có một vectơ chỉ phương u = (−1;−2;−2)<br>1 2 2<br>x−2 y−1 z + 3<br>c) Đúng: d: = = có một vectơ chỉ phương u = (−1;−2;−2) và đi qua điểm<br>1 2 2<br>{ x = 2 + t<br>N(3;2;−1) suy ra phương trình tham số của d:; y = 1 + t.<br>z = −3 + 2t<br>x−2 y−1 z + 3<br>d) Sai: Đường thẳng d: = = có một vectơ chỉ phương k = (1;2;2).<br>1 2 2<br>Đường thẳng Δ có vectơ chỉ phương u = (−1;−2;−2) ⇒ u = −k<br>Đường thẳng Δ đi qua điểm M(3;2;−1). Thay tọa độ điểm M(3;2;−1) vào phương trình của<br>x−2 y−1 z + 3 3−2 2−1 −1 + 3<br>d: = = ta được = = đúng suy ra M ∈ d.<br>1 2 2 1 2 2<br>Vậy d ≡ Δ."
      },
      {
        "id": 49,
        "part": 3,
        "shortTag": "P3.1",
        "label": "Phần 3 - Câu 1",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho A(1;3;−2), B(1;1;5). Phương trình tham số của đường thẳng đi { x = a qua hai điểm A,B có dạng; y = b−2t. Tính a + b + c. z = −2 + ct }",
        "answer": "11",
        "acceptedAnswers": [
          "11"
        ],
        "kqCells": [
          "1",
          "1",
          "",
          ""
        ],
        "explanation": "Ta có: AB = (0;−2;7)<br>Đường thẳng AB đi qua A(1;3;−2) và nhận AB = (0;−2;7) làm vecto chỉ phương có phương<br>{ x = 1<br>trình là:; y = 3−2t, t ∈ ℝ.<br>z = −2 + 7t<br>Suy ra <i>a = 1, b = 3, c = 7 ⇒ a + b + c = 1 + 3 + 7 = <b>11</b></i>."
      },
      {
        "id": 50,
        "part": 3,
        "shortTag": "P3.2",
        "label": "Phần 3 - Câu 2",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gianOxyz, phương trình tham số của đường thẳng đi qua điểm M (3;−2;1) và { x = a + 4t x + 2 y−2 z−6 song song với đường thẳng d: = = có dạng; y = −2 + bt. Tính a + b + 2c. 4 −3 5 } z = 1 + ct",
        "answer": "10",
        "acceptedAnswers": [
          "10"
        ],
        "kqCells": [
          "1",
          "0",
          "",
          ""
        ],
        "explanation": "Đường thẳng cần tìm đi qua điểm M (3;−2;1) và nhận véctơ u = (4;−3;5) làm véctơ chỉ<br>{ x = 3 + 4t<br>phương có phương trình tham số là; y = −2−3t.<br>z = 1 + 5t<br>Suy ra <i>a = 3, b = −3, c = 5 ⇒ a + b + 2c = 3 + (−3) + 2·5 = <b>10</b></i>."
      },
      {
        "id": 51,
        "part": 3,
        "shortTag": "P3.3",
        "label": "Phần 3 - Câu 3",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm M(1;3;5) và mặt phẳng (P):2x + y−3z + 1 = 0. Phương { x = 1 + at trình tham số của đường thẳng đi qua M và vuông góc với (P)có dạng; y = b + t. Tính z = 5 + ct } 3a + b + c.",
        "answer": "6",
        "acceptedAnswers": [
          "6"
        ],
        "kqCells": [
          "6",
          "",
          "",
          ""
        ],
        "explanation": "Một vectơ pháp tuyến của (P) là n(2;1;−3).<br>Gọi d là đường thẳng đi qua M(1;3;5)và vuông góc với (P) thì vec tơ chỉ phương của d là<br>u = (2;1;−3).<br>{ x = 1 + 2t<br>Vậy phương trình của đường thẳng d là:; y = 3 + t.<br>z = 5−3t<br>{ x = t<br>Suy ra <i>a = 2, b = 3, c = −3 ⇒ 3a + b + c = 3·2 + 3 + (−3) = <b>6</b></i>."
      },
      {
        "id": 52,
        "part": 3,
        "shortTag": "P3.4",
        "label": "Phần 3 - Câu 4",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai đường thẳng d:; y = −1−4t và 1 z = 6 + 6t } x y−1 z + 2 d: = =. Phương trình chính tắc của đường thẳng d qua M(1;−1;2) và vuông góc 2 2 1 −5 3 x−1 y + 1 z−a với cả d,d có dạng = =. Tính a + b + c. 1 2 14 b c",
        "answer": "28",
        "acceptedAnswers": [
          "28"
        ],
        "kqCells": [
          "2",
          "8",
          "",
          ""
        ],
        "explanation": "Đường d có VTCP a = (1;−4;6); d có vectơ chỉ phương b = (2;1;−5).<br>1 2<br>Vì d vuông góc với d;d nên có véc-tơ chỉ phương u = [a,b] = (14;17;9).<br>3 1 2<br>x−1 y + 1 z−2<br>Vậy phương trình của đường thẳng d là: = =<br>14 17 9<br>Suy ra <i>a = 2, b = 17, c = 9 ⇒ a + b + c = 2 + 17 + 9 = <b>28</b></i>."
      },
      {
        "id": 53,
        "part": 3,
        "shortTag": "P3.5",
        "label": "Phần 3 - Câu 5",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, phương trình tham số của đường thẳng (Δ) qua M(2;3;1) và song song với hai mặt phẳng (P):2x− y + 2z−7 = 0 và (Q):x + 3y−2z + 3 = 0 có dạng { x = a + bt; y = 3 + 6t;t ∈ ℝ. Tính 2a + b + c + d. }z = c + dt",
        "answer": "8",
        "acceptedAnswers": [
          "8"
        ],
        "kqCells": [
          "8",
          "",
          "",
          ""
        ],
        "explanation": "Mặt phẳng (P):2x− y + 2z−7 = 0 có vectơ pháp tuyến là n = (2,−1,2)<br>Mặt phẳng (Q):x + 3y−2z + 3 = 0 có vectơ pháp tuyến là n = (1,3,−2)<br>Vì (Δ)//(P) và (Δ)/ /(Q) nên vectơ chỉ phương của (Δ)là a = [n,n] = (−4;6;7)<br>1 2<br>{ x = 2−4t<br>Phương trình tham số của đường thẳng (Δ); y = 3 + 6t;t ∈ ℝ.<br>}z = 1 + 7t<br>Suy ra <i>a = 2, b = −4, c = 1, d = 7 ⇒ 2a + b + c + d = 4 − 4 + 1 + 7 = <b>8</b></i>."
      },
      {
        "id": 54,
        "part": 3,
        "shortTag": "P3.6",
        "label": "Phần 3 - Câu 6",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(1;−2;3), B(2;b;c), mặt phẳng (α):x + 3y−2z + 5 = 0 và x + 2 y−1 z + 3 đường thẳng Δ: = =. Khi đó, để đường thẳng d đi qua hai điểm A, B, song song 3 2 1 với mặt phẳng (α) và vuông góc với đường thẳng Δ thì b + c bằng:",
        "answer": "-1",
        "acceptedAnswers": [
          "-1"
        ],
        "kqCells": [
          "-",
          "1",
          "",
          ""
        ],
        "explanation": "Mặt phẳng (α) có VTPT là n = (1;3;−2).<br>Đường thẳng Δ có VTCP là u = (3;2;1).<br>Vì đường thẳng d song song với mặt phẳng (α) và vuông góc với đường thẳng Δ nên VTCP<br>của d là u = [n,u] = (7;−7;−7) hay u = (−1;1;1).<br>d d<br>Phương trình đường thẳng d đi qua hai điểm A, song song với mặt phẳng (α) và vuông góc với<br>x−1 y + 2 z−3<br>đường thẳng Δ là: = =.<br>−1 1 1<br>2−1 b + 2 c−3 { b = −3<br>Vì B ∈ d nên: = = ⇒;.<br>−1 1 1 }c = 2<br>Vậy b + c = −1."
      },
      {
        "id": 55,
        "part": 3,
        "shortTag": "P3.7",
        "label": "Phần 3 - Câu 7",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (α):ax + by + cz + 10 = 0. Biết mặt phẳng (α) chứa hai { x = −1 + t { x = −1 + 2t' đường thẳng d:; y = 2 + 2t và d':; y = 4 + 2t. Khi đó a + b + c bằng: z = −t z = −1−t } }",
        "answer": "-1",
        "acceptedAnswers": [
          "-1"
        ],
        "kqCells": [
          "-",
          "1",
          "",
          ""
        ],
        "explanation": "{ x = −1 + t<br>d:; y = 2 + 2t có VTCP là u = (1;2;−1).<br>z = −t<br>{ x = −1 + 2t'<br>d':; y = 4 + 2t' có VTCP là u = (2;2;1).<br>d'<br>z = −3 + t'<br>{ −1 + t = −1 + 2t' { t−2t' = 0<br>{ t = 2<br>Gọi A = d ∩ d' ⇒; 2 + 2t = 4 + 2t ⇔; 2t−2t' = 2 ⇔; ⇒ A(1;6;−2).<br>}t' = 1<br>}−t = −3−t' }−t−t' = −3<br>Vì mặt phẳng (α) chứa hai đường thẳng d và d' nên (α) có VTPT là<br>n = [u,u '] = (4;−3;−2).<br>(α) d d<br>Phương trình mặt phẳng (α): 4(x−1)−3(y−6)−2(z + 2) = 0 ⇔ 4x−3y−2z + 10 = 0<br>⇒ a + b + c + d = 4 + (−3) + (−2) = −1.<br>{ x = 2−t"
      },
      {
        "id": 56,
        "part": 3,
        "shortTag": "P3.8",
        "label": "Phần 3 - Câu 8",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho đường thẳng Δ:; y = 2t và đường thẳng }z = 1−t x + 1 y−6 z + 3 d: = =. Gọi giao điểm của hai đường thẳng Δ và d là M (a;b;c). Tính −1 2 −2 a + b + c.",
        "answer": "3",
        "acceptedAnswers": [
          "3"
        ],
        "kqCells": [
          "3",
          "",
          "",
          ""
        ],
        "explanation": "{ x = −1−s<br>Đường thẳng d có phương trình tham số; y = 6 + 2s.<br>z = −3−2s<br>{ 2−t = −1−s { t−s = 3<br>{ t = 2<br>Để xét vị trí tương đ của Δ và d ta xét hệ:; 2t = 6 + 2s ⇔; t−s = 3 ⇔;.<br>}s = −1<br>1−t = −3−2s t−2s = 4<br>} }<br>Hệ có nghiệm duy nhất nên Δ và d cắt nhau.<br>Thay t = 2 vào phương trình Δ (hoặc thay s = −1 vào phương trình của d) ta được tọa độ giao<br>điểm của Δ và d là M(0;4;−1) ⇒ a + b + c = 0 + 4 + (−1) = 3."
      },
      {
        "id": 57,
        "part": 3,
        "shortTag": "P3.9",
        "label": "Phần 3 - Câu 9",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai điểm A(1;2;−1), B(2;−1;3). đường thẳng đi { x = 2t qua 2điểm A, B có phương trình dạng Δ:; y = y + bt. Tính y + z + b + c. 0 0 0 z = z + ct } 0",
        "answer": "2",
        "acceptedAnswers": [
          "2"
        ],
        "kqCells": [
          "2",
          "",
          "",
          ""
        ],
        "explanation": "Đường thẳng Δ có vectơ chỉ phương là AB = (1;−3;4) = (2;−6;8) ⇒ b = −6,c = 8.<br>{ 2 = 2t { t = 1<br>Thay tọa độ điểm B vào phương trình Δ ta được:; −1 = y −6t ⇔; y = 5<br>0 0<br>3 = z + 8t z = −5<br>} }<br>0 0<br>Từ đó ta có: y + z + b + c = 5−5−6 + 8 = 2.<br>0 0"
      },
      {
        "id": 58,
        "part": 3,
        "shortTag": "P3.10",
        "label": "Phần 3 - Câu 10",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho các điểm A(2;−1;0), B(1;2;1), C(3;−2;0), D(1;1;−3). Đường thẳng đi qua Dvà vuông góc với mặt phẳng (ABC) luôn đi qua điểm M(2;a;b). Khi đó ab bằng bao nhiêu? (kết quả làm tròn đến hàng phần trăm).",
        "answer": "0,03",
        "acceptedAnswers": [
          "0,03",
          "0.03"
        ],
        "kqCells": [
          "0",
          ",",
          "0",
          "3"
        ],
        "explanation": "Ta có AB = (−1;3;1); AC = (1;−1;0); n = [AB,AC] = (1;1;−2).<br>(ABC)<br>Đường thẳng đi qua Dvà vuông góc với mặt phẳng (ABC)nên có véc tơ chỉ phương là<br>{ x = 1 + t<br>n = (1;1;−2), phương trình tham số là:; y = 1 + t. Chọn t = 1 ⇒ M(2;2;−5).<br>(ABC)<br>z = −3−2t<br>Suy ra a = 2;b = −5 ⇒ ab = 2−5 = 0,03.<br>x−2 y z x−1 y−2 z + 1"
      },
      {
        "id": 59,
        "part": 3,
        "shortTag": "P3.11",
        "label": "Phần 3 - Câu 11",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng d: = = và Δ: = =. 2 −1 4 2 −1 4 Phương trình mặt phẳng (P) chứa d và Δ có dạng: ax + by + z + c = 0.Tính giá trị của a + b + c",
        "answer": "-2",
        "acceptedAnswers": [
          "-2"
        ],
        "kqCells": [
          "-",
          "2",
          "",
          ""
        ],
        "explanation": "x−2 y z<br>Đường thẳng d: = = ⇒ d qua M(2;0;0) và nhận u = (2;−1;4) làm một VTCP<br>2 −1 4<br>x−1 y−2 z + 1<br>Đường thẳng Δ: = = ⇒ Δ qua N(1;2;−1) và nhận u = (2;−1;4) làm một VTCP<br>2 −1 4<br>1 −2 1<br>Thế tọa độ điểm M(2;0;0)vào đường thẳng Δ, ta được: ≠ ≠ ⇒ d / /Δ.<br>2 −1 4<br>MN = (−1;2;−1). (P) chứa d và Δ ⇒ n = [u;MN] = (7;−7;7)<br>Suy ra phương trình mặt phẳng (P):x− y + z−2 = 0<br>⇒ a = 1,b = −1;c = −2 ⇒ a + b + c = −2."
      },
      {
        "id": 60,
        "part": 3,
        "shortTag": "P3.12",
        "label": "Phần 3 - Câu 12",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, một viên đạn được bắn ra từ điểm A(1;2;3)và trong 3 giây, đầu đạn đi với vận tốc không đổi; véctơ vận tốc (trên giây) là v = (2;1;5). Khi viên đạn trúng mục tiêu tại điểm B(−5;a;b) thì giá trị của biểu thức babằng bao nhiêu? (kết quả làm tròn đến hàng phần chục).",
        "answer": "-0,1",
        "acceptedAnswers": [
          "-0,1",
          "-0.1"
        ],
        "kqCells": [
          "-",
          "0",
          ",",
          "1"
        ],
        "explanation": "{ x = 1 + 2t<br>Phương trình mô tả quỹ đạo chuyển động của viên đạn là:; y = 2 + t (1).<br>}z = 3 + 5t<br>Khi viên đạn trúng mục tiêu tại điểm B(−5;a;b)thì tọa độ của điểm B thỏa (1), tức là<br>{ −5 = 1 + 2t { t = −3 { t = −3<br>; a = 2 + t ⇔; a = 2 + t ⇔; a = −1 ⇒ ba = −0,1.<br>b = 3 + 5t b = 3 + 5t b = −12<br>} } }"
      },
      {
        "id": 61,
        "part": 3,
        "shortTag": "P3.13",
        "label": "Phần 3 - Câu 13",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz. Phương trình tham số của đường thẳng d đi qua A(1;1;3), nằm trong { x = 1 + at x−1 y z mặt phẳng (P):x + 2y + z−6 = 0 và cắt đường thẳng Δ: = = có dạng; y = 1. 1 1 2 z = 3 + bt } Tính giá trị của biểu thức M = 2024a−b.",
        "answer": "2025",
        "acceptedAnswers": [
          "2025"
        ],
        "kqCells": [
          "2",
          "0",
          "2",
          "5"
        ],
        "explanation": "Gọi B = Δ ∩ (P) ⇒ tọa độ điểm B là nghiệm của hệ phương trình<br>{ x + 2y + z−6 = 0 { x = 2<br>; x−1 y z ⇔; y = 1 ⇒ B(2;1;2)<br>= =<br>} 1 1 2 }z = 2<br>Vì d ⊂ (P) và d cắt Δ ⇒ B ∈ d ⇒ d đi qua A(1;1;3) và nhận AB = (1;0;−1) làm một VTCP.<br>{ x = 1 + t<br>Suy ra PTTS của d:; y = 1 ⇒ a = 1,b = −1 ⇒ M = 2025.<br>}z = 3−t<br>{ x = 1 + t { x = 0"
      },
      {
        "id": 62,
        "part": 3,
        "shortTag": "P3.14",
        "label": "Phần 3 - Câu 14",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng chéo nhau d:; y = 0 và d′:; y = 4−2t′. z = −5 + t z = 5 + 3t′ } } Đường vuông góc chung của hai đường thẳng d và d′ đi qua điểm K(6;m;n). Tính m + n",
        "answer": "-7",
        "acceptedAnswers": [
          "-7"
        ],
        "kqCells": [
          "-",
          "7",
          "",
          ""
        ],
        "explanation": "Giả sử AB là đường vuông góc chung của d và d′ với A ∈ d, B ∈ d′.<br>Ta có u = (1;0;1), u = (0;−2;3)<br>d d′<br>{ A(1 + t;0;−5 + t)<br>; ⇒ BA = (t + 1;2t′−4;t−3t′−10).<br>B(0;4−2t′;5 + 3t′)<br>{ d ⊥ AB { u.BA = 0 { (t + 1) + (t−3t′−10) = 0 { t = 3<br>Ta có; ⇔; d ⇔; ⇔;<br>}d′ ⊥ AB } u.BA = 0 } −2(2t′−4) + 3(t−3t′−10) = 0 }t′ = −1<br>d′<br>{ A(4;0;−2)<br>⇒; ⇒ BA = (4;−6;−4) ⇒ u = (−2;3;2) là một vectơ chỉ phương của đường thẳng<br>B(0;6;2)<br>AB.<br>x−4 y z + 2<br>Phương trình đường thẳng AB: = =.<br>−2 3 2<br>6−4 m n + 2<br>Đường thẳng AB đi qua K(6;m;n) nên = = ⇒ m = −3,n = −4.<br>−2 3 2<br>Vậy m + n = −7."
      },
      {
        "id": 63,
        "part": 3,
        "shortTag": "P3.15",
        "label": "Phần 3 - Câu 15",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (α) và B(3;a;2a). Biết mặt phẳng (α) chứa hai đường { x = −1 + 5t { x = 2 + 5t thẳng d:; y = 2−4t và đường thẳng d':; y = −4t. Khi đó để điểm B nằm trong mặt phẳng z = 3 + 3t z = 5 + 3t } } (α) thì giá trị của a bằng:",
        "answer": "4",
        "acceptedAnswers": [
          "4"
        ],
        "kqCells": [
          "4",
          "",
          "",
          ""
        ],
        "explanation": "{ x = −1 + 3t<br>Đường thẳng d:; y = 2−2t có vectơ chỉ phương là u = (5;−4;3) và đi qua điểm A(−1;2;3).<br>z = 3 + 2t<br>{ x = 2 + 5t<br>Đường thẳng d':; y = −4t có vectơ chỉ phương là u = (5;−4;3) và đi qua điểm B(2;0;5).<br>}z = 5 + 3t<br>AB = (3;−2;2)<br>Vì mặt phẳng (α) chứa đường thẳng d vàd' nên (α) có VTPT là n = [u,u '] = (2;1;−2).<br>(α) d d<br>Phương trình mặt phẳng (α) có VTPT n = (2;1;−2) và đi qua điểm A(−1;2;3) là:<br>(α)<br>2(x + 1) + (y−2)−2(z−3) = 0 ⇔ 2x + y−2z + 6 = 0<br>B ∈ (α) ⇒ 2.3 + a−2.2a + 6 = 0 ⇔ a = 4."
      },
      {
        "id": 64,
        "part": 3,
        "shortTag": "P3.16",
        "label": "Phần 3 - Câu 16",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho điểm A(2;1;3) và đường thẳng x + 1 y−1 z−2 Δ: = =. Gọi u(a;b;3) là một véctơ chỉ phương của đường thẳng d đi qua điểm 1 −2 2 A, vuông góc với đường thẳng Δ và cắt trục Oy. Tính a + b.",
        "answer": "6",
        "acceptedAnswers": [
          "6"
        ],
        "kqCells": [
          "6",
          "",
          "",
          ""
        ],
        "explanation": "Gọi giao điểm của đường thẳng d và trục Oy là B(0;t;0).<br>Đường thẳng Δ có véctơ chỉ phương là u = (1;−2;2).<br>Đường thẳng d có véctơ chỉ phương là AB = (−2;t −1;−3).<br>Từ giả thiết ta có u ⊥ AB ⇔ u.AB = 0 ⇔ −2−2(t−1)−6 = 0 ⇔ t = −3.<br>Có AB = (−2;−4;−3) nên có thể chọn v = (2;4;3) là véc tơ chỉ phương của d.<br>Vậy a = 2,b = 4 nên a + b = 6."
      },
      {
        "id": 65,
        "part": 3,
        "shortTag": "P3.17",
        "label": "Phần 3 - Câu 17",
        "topic": "B2.D2: Viết PT Đường thẳng",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d2_p3_q17_p56_1.png",
        "question": "Trên phần mềm mô phỏng 3D một máy khoan trong không gian Oxyz cho biết phương trình trục a của mũi khoan và một đường rãnh b trên vật cần khoan (tham khảo hình vẽ) lần lượt là { x = 1 { x = 1 + 4k a:; y = 2 và b:; y = 2 + 2k. Tọa độ giao điểm của a và b là M (a;b;c). Tính S = a + b + c. z = 3t z = 6 } }",
        "answer": "9",
        "acceptedAnswers": [
          "9"
        ],
        "kqCells": [
          "9",
          "",
          "",
          ""
        ],
        "explanation": "{ 1 = 1 + 4k<br>{ t = 2<br>Vì M là giao điểm của a và b nên; 2 = 2 + 2k ⇒; ⇒ M(1;2;6)<br>}k = 0<br>3t = 6<br>Vậy S = 1 + 2 + 6 = 9."
      }
    ]
  },
  "oxyz_b2_d3": {
    "id": "oxyz_b2_d3",
    "category": "oxyz",
    "badge": "BÀI 2 • DẠNG 3",
    "title": "Bài 2 - Dạng 3: Góc và khoảng cách trong không gian Oxyz",
    "shortTitle": "B2.D3: Góc & Khoảng cách Oxyz",
    "baiTitle": "Bài 2. Phương trình đường thẳng trong không gian",
    "dangTitle": "Dạng 3: Góc và khoảng cách trong không gian Oxyz",
    "subtitle": "Bài 2. Phương trình đường thẳng trong không gian • Gồm Lý thuyết, Phương pháp, 15 Ví dụ tự luận & 66 câu Trắc nghiệm (P1: 45 • P2: 10 • P3: 11)",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">BÀI 2 • DẠNG 3</span>\n    <h4>Bài 2. Phương trình đường thẳng trong không gian — Dạng 3: Góc và khoảng cách trong không gian Oxyz</h4>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-subhead\">Dạng 3: Góc và khoảng cách trong không gian Oxyz</div>\n    <div class=\"oxyz-theory-subhead\">Phương pháp:</div>\n    <div class=\"oxyz-theory-bullet\">• Trong không gian với hệ trục tọa độ Oxyz, hai đường thẳng Δ,Δ tương ứng có u = (a;b;c) và</div>\n    <div class=\"oxyz-theory-line\">1 2 1 1 1 1</div>\n    <div class=\"oxyz-theory-line\">u = (a;b;c) là hai vectơ chỉ phương. Khi đó:</div>\n    <div class=\"oxyz-theory-line\">2 2 2 2</div>\n    <div class=\"oxyz-theory-line\">u.u aa + bb + cc</div>\n    <div class=\"oxyz-theory-line\">cos(Δ,Δ) = cos(u.u) = 1 2 = 1 2 1 2 1 2</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2 u.u a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>. a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup></div>\n    <div class=\"oxyz-theory-line\">1 2 1 1 1 2 2 2</div>\n    <div class=\"oxyz-theory-bullet\">• Trong không gian với hệ trục tọa độ Oxyz, đường thẳng Δ có vectơ chỉ phương u = (a;b;c) và mặt</div>\n    <div class=\"oxyz-theory-line\">phẳng (P) có vectơ pháp tuyến n = (A;B;C).</div>\n    <div class=\"oxyz-theory-line\">u.n aA + bB + cC</div>\n    <div class=\"oxyz-theory-line\">sin(Δ,(P)) = cos(u.n) = =</div>\n    <div class=\"oxyz-theory-line\">u. n a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>. A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div>\n    <div class=\"oxyz-theory-bullet\">• Trong không gian với hệ trục tọa độ Oxyz, hai mặt phẳng (P),(P) có hai vectơ pháp tuyến lần lượt</div>\n    <div class=\"oxyz-theory-line\">1 2</div>\n    <div class=\"oxyz-theory-line\">là n = (A;B;C) và n = (A;B;C). Khi đó, ta có:</div>\n    <div class=\"oxyz-theory-line\">1 1 1 1 2 2 2 2</div>\n    <div class=\"oxyz-theory-line\">n.n AA + BB + CC</div>\n    <div class=\"oxyz-theory-line\">cos ((P),(P)) = cos(n.n) = 1 2 = 1 2 1 2 1 2</div>\n    <div class=\"oxyz-theory-line\">1 2 1 2 n.n A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup>. A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div>\n    <div class=\"oxyz-theory-line\">1 22 1 1 1 2 2 2</div>\n    <div class=\"oxyz-theory-bullet\">• Khoảng cách giữa hai điểm A(x,y,z) và B(x,y,z) là:</div>\n    <div class=\"oxyz-theory-line\">A A A B B B</div>\n    <div class=\"oxyz-theory-line\">AB = (x −x)<sup>2</sup> + (y − y)<sup>2</sup> + (z −z)<sup>2</sup></div>\n    <div class=\"oxyz-theory-line\">B A B A B A</div>\n    <div class=\"oxyz-theory-bullet\">• Khoảng cách từ điểm M (x,y,z) đến mặt phẳng (α) có phương trình Ax + By + Cz + D = 0 là:</div>\n    <div class=\"oxyz-theory-line\">0 0 0 0</div>\n    <div class=\"oxyz-theory-line\">Ax + By + Cz + D</div>\n    <div class=\"oxyz-theory-line\">d (M;(α)) = 0 0 0</div>\n    <div class=\"oxyz-theory-line\">0 A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div>\n    <div class=\"oxyz-theory-bullet\">• Khoảng cách từ điểm M đến đường thẳng Δ đi qua M và có vectơ chỉ phương u là:</div>\n    <div class=\"oxyz-theory-line\">1 0</div>\n    <div class=\"oxyz-theory-line\">[M M,u]</div>\n    <div class=\"oxyz-theory-line\">d(M,Δ) = 0</div>\n    <div class=\"oxyz-theory-line\">1</div>\n    <div class=\"oxyz-theory-line\">1 u</div>\n    <div class=\"oxyz-theory-bullet\">• Khoảng cách giữa hai đường thẳng chéo nhau Δ và Δ′, trong đó đường thẳng Δ đi qua M và có</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">một vectơ chỉ phương u, đường thẳng Δ′ đi qua M′ và có vectơ chỉ phương u′ là:</div>\n    <div class=\"oxyz-theory-line\">0</div>\n    <div class=\"oxyz-theory-line\">M M′.[u,u′]</div>\n    <div class=\"oxyz-theory-line\">d(Δ,Δ′) = 0 0</div>\n    <div class=\"oxyz-theory-line\">[u,u′]</div>\n  </div>\n  <div class=\"oxyz-theory-figures-grid\">\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b2_d3_method_q0_p57_1.png', 'Góc giữa hai đường thẳng Δ₁ và Δ₂')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b2_d3_method_q0_p57_1.png\" alt=\"Góc giữa hai đường thẳng Δ₁ và Δ₂\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Góc giữa hai đường thẳng Δ₁ và Δ₂</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b2_d3_method_q0_p57_2.png', 'Góc giữa đường thẳng Δ và mặt phẳng (P)')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b2_d3_method_q0_p57_2.png\" alt=\"Góc giữa đường thẳng Δ và mặt phẳng (P)\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Góc giữa đường thẳng Δ và mặt phẳng (P)</div>\n    </div>\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b2_d3_method_q0_p57_3.png', 'Góc giữa hai mặt phẳng (P₁) và (P₂)')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b2_d3_method_q0_p57_3.png\" alt=\"Góc giữa hai mặt phẳng (P₁) và (P₂)\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Góc giữa hai mặt phẳng (P₁) và (P₂)</div>\n    </div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Bài tập tự luận 1",
        "question": "Trong không gian Oxyz, cho hai đường thẳng d:; y = 5−2t và d:; y = 2 + t′. Tính góc 1 2 }z = 14−3t }z = −1 + 5t′ giữa hai đường thẳng đã cho.",
        "figure": null,
        "explanation": "Đường thẳng d có một vectơ chỉ phương u = (1;−2;−3).<br>1 1<br>Đường thẳng d có một vectơ chỉ phương u = (−4;1;5).<br>2 2<br>Ta có: cos (d •,d) = u 1.u 2 = 1.(−4) + (−2).1 + (−3).5 = 3 ⇒ (d,d) = 30o.<br>1 2 u<br>.u<br>12 + (−2)<sup>2</sup> + (−3)<sup>2</sup>. (−4)<sup>2</sup> + 12 + 52 2 1 2<br>x−3 y−4 z + 3"
      },
      {
        "id": 2,
        "label": "Bài tập tự luận 2",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho đường thẳng Δ: = = và mặt 1 2 −1 phẳng (P):2x + y + z−1 = 0. Tính góc giữa Δ và (P)",
        "figure": null,
        "explanation": "Đường thẳng Δ có một vectơ chỉ phương u = (1;2;−1).<br>Mặt phẳng (P) có một vectơ pháp tuyến n = (2;1;1).<br>(•) u.n 1.2 + 2.1 + (−1).1 1 (•)<br>Ta có: sin Δ,(P) = = = ⇒ Δ,(P) = 30o<br>u.n 12 + 22 + (−1)<sup>2</sup>. 22 + 12 + 12 2"
      },
      {
        "id": 3,
        "label": "Bài tập tự luận 3",
        "question": "Trên một phần mềm đã thiết kế sân khấu 3D trong không gian Oxyz. Tính cos giữa hai tia sáng x y z x−1 y−1 z−1 có phương trình lần lượt là d: = =, d: = =. 1 2 1 −1 2 3 3 9",
        "figure": null,
        "explanation": "Đường thẳng d có vectơ chỉ phương u = (2;1;−1).<br>1 1<br>Đường thẳng d có vectơ chỉ phương u = (3;3;9).<br>2 2<br>2.3 + 1.3 + (−1).9<br>Ta có cos(d,d) = = 0.<br>1 2<br>22 + 12 + (−1)<sup>2</sup>. 32 + 32 + 92<br>x y + 1 z−1"
      },
      {
        "id": 4,
        "label": "Bài tập tự luận 4",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, tính góc giữa hai đường thẳng d: = = 1 1 −1 2 x + 1 y z−3 và d: = = 2 −1 1 1",
        "figure": null,
        "explanation": "Vectơ chỉ phương u = (1;−1;2), vectơ chỉ phương u = (−1;1;1)<br>d d<br>1 2<br>1.(−1)−1.1 + 2.1<br>Ta có cos(d,d) = cos (u,u) = = 0<br>1 2 d d<br>1 2 12 + (−1)<sup>2</sup> + 22. (−1)<sup>2</sup> + 12 + 12<br>Vậy (d,d) = 90°.<br>1 2<br>{ x = 6 + 5t"
      },
      {
        "id": 5,
        "label": "Bài tập tự luận 5",
        "question": "Trong không gian Oxyz, cho đường thẳng d:; y = 2 + t và mặt phẳng (P):3x−2y + 1 = 0. } z = 1 Góc hợp bởi giữa đường thẳng d và mặt phẳng (P) bằng bao nhiêu?",
        "figure": null,
        "explanation": "Gọi φ là góc giữa đường thẳng d và mặt phẳng (P).<br>Ta có u = (5;1;0) và n = (3;−2;0)<br>d (P)<br>u.n<br>() d (P) 2<br>Khi đó sinφ = cos u,n = = ⇒ φ = 45°.<br>d (P) u.n 2<br>d (P)<br>x−1 y + 1 z"
      },
      {
        "id": 6,
        "label": "Bài tập tự luận 6",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho đường thẳng Δ: = = và mặt phẳng 2 −1 2 (α):x + y−z−2 = 0. Cosin của góc tạo bởi đường thẳng Δ và mặt phẳng (α) bằng bao nhiêu?",
        "figure": null,
        "explanation": "Đường thẳng Δ có một vectơ chỉ phương u = (2;−1;2) và mặt phẳng (α) có vectơ pháp tuyến<br>n = (1;1;−1).<br>u.n 3 78<br>Ta có sin(Δ,(α)) = cos(u,n) = = ⇒ cos(Δ,(α)) =.<br>u.n 9 9"
      },
      {
        "id": 7,
        "label": "Bài tập tự luận 7",
        "question": "Trong không gian Oxyz, cho hai mặt phẳng (P):2x− y−z−3 = 0 và (Q):x−z−2 = 0. Góc giữa hai mặt phẳng (P) và (Q) bằng bao nhiêu?",
        "figure": null,
        "explanation": "Mặt phẳng (P) có một vectơ pháp tuyến n = (2;−1;−1).<br>Mặt phẳng (Q) có một vectơ pháp tuyến n = (1;0;−1).<br>n.n 2 + 0 + 1 3<br>Ta có cos[(P),(Q)] = cos (n P,n Q) = n P.n Q = 4 + 1 + 1. 1 + 1 = 2. Vậy [(P),(Q)] = 30°.<br>P Q"
      },
      {
        "id": 8,
        "label": "Bài tập tự luận 8",
        "question": "Trong không gian Oxyz, cho ba điểm M(1;0;0), N(0;1;0) và P(0;0;1). Cosin của góc giữa hai mặt phẳng (MNP) và mặt phẳng (Oxy) bằng bao nhiêu?",
        "figure": null,
        "explanation": "Mặt phẳng (MNP) có một vectơ pháp tuyến là n = [MN,MP] = (1;1;1).<br>Mặt phẳng (Oxy) có một vectơ pháp tuyến là k = (0;0;1).<br>Gọi φ là góc giữa hai mặt phẳng (MNP) và (Oxy).<br>() 1.0 + 1.0 + 1.1 1<br>Ta có cosφ = cos n,k = =.<br>12 + 12 + 12 3"
      },
      {
        "id": 9,
        "label": "Bài tập tự luận 9",
        "question": "Trong không gian với hệ trục Oxyz, khoảng cách giữa hai mặt phẳng (P):x + 2y + 2z−10 = 0 và (Q):x + 2y + 2z−5 = 0 bằng bao nhiêu?",
        "figure": null,
        "explanation": "1 2 2 −10<br>Cách 1: Ta có M(10;0;0) ∈ (P). Vì = = ≠ nên hai mặt phẳng (P)và (Q)song song.<br>1 2 2 −5<br>10−5 5<br>Khi đó, d((P),(Q)) = d(M,(Q)) = =.<br>9 3<br>Cách 2: Công thức khoảng cách giữa hai mặt phẳng song song (P):ax + by + cz−d = 0 và<br>d −d 10−5 5<br>(Q):ax + by + cz−d = 0 bằng: d((P),(Q)) = 1 2 ⇒ d((P),(Q)) = =.<br>2 a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> 9 3<br>x−1 y + 2 z−1"
      },
      {
        "id": 10,
        "label": "Bài tập tự luận 10",
        "question": "Trong không gian Oxyz, khoảng cách giữa đường thẳng Δ: = = và mặt phẳng 2 1 2 (P): 2x−2y−z + 1 = 0 bằng bao nhiêu?",
        "figure": null,
        "explanation": "Đường thẳng Δ đi qua điểm M(1;−2;1), có 1 véc tơ chỉ phương u = (2;1;2).<br>Mặt phẳng (P)có 1 véc tơ pháp tuyến n = (2;−2;−1).<br>Ta có: u.n = 2.2−2.1−1.2 = 0 ⇒ u ⊥ n.<br>2.1−2.(−2)−1.1 + 1<br>Mà M ∉ (P) ⇒ d∥(P) ⇒ d(Δ,(P)) = d(M,(P)) = = = 2.<br>22 + (−2)<sup>2</sup> + (−1)<sup>2</sup> 3"
      },
      {
        "id": 11,
        "label": "Bài tập tự luận 11",
        "question": "Trong không gian Oxyz, cho mặt phẳng (P): x + y + 4z−3 = 0 và điểm A(1;1;3). Mặt phẳng (Q)∥(P) và cắt các tia Ox,Oy lần lượt tại các điểm B và C sao cho tam giác ABC có diện tích bằng 2 22. Khoảng cách từ điểm M(2;2;1) đến (Q) bằng bao nhiêu?",
        "figure": null,
        "explanation": "Mặt phẳng (Q)∥(P) ⇒ (Q) có dạng: x + y + 4z + d = 0(d ≠ −3).<br>(Q) ∩ Ox = B(−d;0;0), (Q) ∩ Oy = C(0;−d;0). Do B, C lần lượt thuộc các tia Ox,Oy<br>Suy ra d < 0.<br>Ta có: AB = (−d −1;−1;−3), AC = (−1;−d −1;−3) ⇒ [AB,AC] = (−3d;−3d;d<sup>2</sup> + 2d).<br>S = 2 22 ⇔ 1 [AB,AC] = 2 22 ⇔ 9d<sup>2</sup> + 9d<sup>2</sup> + (d<sup>2</sup> + 2d)<sup>2</sup> = 352<br>ΔABC 2<br>⇔ d4 + 4d<sup>3</sup> + 22d<sup>2</sup> −352 = 0(*)<br>Giải (*) chỉ có d = −4 thỏa mãn. Khi đó ta có phương trình mặt phẳng (Q):x + y + 4z + 4 = 0.<br>2 + 2 + 4.1 + 4<br>Khoảng cách từ điểm M(2;2;1) đến (Q) bằng: = 2 2.<br>12 + 12 + 42"
      },
      {
        "id": 12,
        "label": "Bài tập tự luận 12",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt phẳng (α):x + y−2z + 2 = 0 và hai điểm A(2;0;1), B(1;1;2). Gọi d là đường thẳng nằm trong (α) và cắt đường thẳng AB, thỏa mãn góc giữa hai đường thẳng AB và d bằng góc giữa đường thẳng AB và mặt phẳng (α). Khoảng cách từ điểm A đến đường thẳng d bằng",
        "figure": null,
        "explanation": "Gọi A′ là hình chiếu của A(2;0;1) lên (α).<br>Ta có B ∈ (α).Gọi d là đường thẳng nằm trong (α) và cắt đường thẳng AB, thỏa mãn góc giữa<br>hai đường thẳng AB và d bằng góc giữa đường thẳng AB và mặt phẳng (α)<br>2 6<br>Khi đó d ≡ A′B ⇒ d(A,d) = d (A,(α)) = =.<br>6 3"
      },
      {
        "id": 13,
        "label": "Bài tập tự luận 13",
        "question": "Trong không gian Oxyz, với mặt phẳng (Oxy) là mặt đất, một máy bay cất cánh từ vị trí A(0;10;0) với vận tốc v = (150;150;40). Tính góc nâng của máy bay (góc giữa hướng chuyển động bay lên của máy bay với đường băng và làm tròn kết quả đến hàng đơn vị).",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d3_tuluan_q14_p59_1.png",
        "explanation": "Gọi Δ là đường thẳng biểu thị cho hướng chuyển động bay lên của máy bay.<br>Ta có Δ nhận vectơ v = (150;150;40) = 10(15;15;4) làm vectơ chỉ phương.<br>Mặt phẳng (Oxy) có vectơ pháp tuyến n = (0;0;1).<br>Gọi φ là góc giữa đường thẳng Δ và mặt phẳng (Oxy).<br>v.n 15.0 + 15.0 + 4.1 4<br>Suy ra sinφ = cos(v,n) = = =.<br>v.n 152 + 152 + 42. 02 + 02 + 12 466<br>Vậy góc nâng của máy bay là φ ≈ 11°."
      },
      {
        "id": 14,
        "label": "Bài tập tự luận 14",
        "question": "Trong một khung lưới ô vuông gồm các hình lập phương, xét các đường thẳng đi qua hai nút lưới (mỗi nút lưới là đỉnh của hình lập phương), người ta đưa ra một cách kiểm tra độ lệch về phương của hai đường thẳng bằng cách gắn hệ tọa độ Oxyz vào khung lưới ô vuông và tìm vectơ chỉ phương của hai đường thẳng đó. Giả sử, đường thẳng a đi qua hai nút lưới M(1;1;2) và N(0;3;0), đường thẳng b đi qua hai nút lưới P(1;0;3) và Q(3;3;9). Sau khi làm tròn đến hàng đơn vị của độ thì góc giữa hai đường thẳng a và b bằng n° (n là số tự nhiên). Giá trị của n bằng bao nhiêu?",
        "figure": null,
        "explanation": "Ta có: MN = (−1;2;−2), PQ = (2;3;6).<br>MN.PQ<br>Khi đó: cos(a,b) = =, suy ra (a,b) ≈ 680.<br>MN. PQ 21"
      },
      {
        "id": 15,
        "label": "Bài tập tự luận 15",
        "question": "Trên một cánh đồng điện năng lượng mặt trời, người ta đã thiết lập sãñ một hệ tọa độ Oxyz. Hai tấm pin năng lượng lần lượt nằm trong hai mặt phẳng (P):2x + 2z + 1 = 0 và (P′):x + z + 7 = 0 a) Tính góc giữa (P) và (P′). b) Tính góc hợp bởi (P) và (P′) với mặt đất (Q) có phương trình z = 0.",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d3_tuluan_q15_p59_2.png",
        "explanation": "a) Mặt phẳng (P) có vectơ pháp tuyến là n = (2;0;2) và mặt phẳng (P′) có vectơ pháp tuyến<br>2.1 + 0.0 + 2.1 4<br>là n' = (1;0;1) nêncos ((P),(P′)) = = = 1<br>22 + 02 + 22. 12 + 02 + 12 4<br>Suy ra ((P),(P′)) = 0°.<br>b) Mặt phẳng (Q) có vectơ pháp tuyến là n = (0;0;1)<br>2.0 + 0.0 + 2.1 2 1<br>cos<br>((P),(Q))<br>= = = ⇒<br>((P),(Q))<br>= 45°.<br>22 + 02 + 22. 12 2 2 2<br>1.0 + 0.0 + 1.1 1<br>cos<br>((P′),(Q))<br>= = ⇒<br>((P′),(Q))<br>= 45°.<br>12 + 02 + 12. 12 2"
      }
    ],
    "questions": [
      {
        "id": 1,
        "part": 1,
        "shortTag": "P1.1",
        "label": "Phần 1 - Câu 1",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, góc giữa trục Oy và mặt phẳng (Oxz) bằng",
        "options": {
          "A": "45°.",
          "B": "60°.",
          "C": "90°.",
          "D": "120°."
        },
        "answer": "C",
        "explanation": "Vì Oy ⊥ (Oxz) nên góc giữa Oy và mặt phẳng (Oxz)bằng 90°."
      },
      {
        "id": 2,
        "part": 1,
        "shortTag": "P1.2",
        "label": "Phần 1 - Câu 2",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, góc giữa hai mặt phẳng Oxy và Oxz bằng",
        "options": {
          "A": "45°.",
          "B": "30°.",
          "C": "90°.",
          "D": "60°."
        },
        "answer": "C",
        "explanation": "Góc giữa hai mặt phẳng Oxy và Oxz bằng 90°.<br>x + 1 y−2 z"
      },
      {
        "id": 3,
        "part": 1,
        "shortTag": "P1.3",
        "label": "Phần 1 - Câu 3",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian tọa độ Oxyz, cho điểm A(−3;1;−3) và đường thẳng d: = =. 2 −3 1 Gọi (α)là mặt phẳng chứa đường thẳng d và vuông góc với mặt phẳng tọa độ (Oyz). Khoảng cách từ A đến mặt phẳng (α) bằng 8 10 4 10",
        "options": {
          "A": "2 10.",
          "B": "10.",
          "C": ".",
          "D": ". 5 5"
        },
        "answer": "B",
        "explanation": "Đường thẳng d đi qua điểm M(−1;2;0), có một vectơ chỉ phương u = (2;−3;1) và mặt<br>phẳng (Oyz)có một vecto pháp tuyến i = (1;0;0).<br>Do d ⊂ (α), (α) ⊥ (Oyz) nên suy ra vectơ n = [u,i] = (0;−1;−3)là một vectơ pháp tuyến của<br>mặt phẳng (α) và M ∈ (α).<br>Mặt phẳng (α) đi qua điểmM(−1;2;0) và nhận vectơ n = (0;−1;−3) là vectơ pháp tuyến có<br>phương trình là: y + 3z−2 = 0.<br>1 + 3(−3)−2<br>Khi đó khoảng cách từ A đến mặt phẳng (α)bằng: = 10.<br>12 + 32<br>6.0 + 4.0−3.0−12 12 61<br>Khoảng cách từ O đến (α) bằng d (O,(α)) = =.<br>62 + 42 + (−3)<sup>2</sup> 61"
      },
      {
        "id": 4,
        "part": 1,
        "shortTag": "P1.4",
        "label": "Phần 1 - Câu 4",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, góc giữa hai mặt phẳng (P):x + y−z−11 = 0 và (P):2x + 2y−2z + 7 = 0 bằng",
        "options": {
          "A": "0°.",
          "B": "45°.",
          "C": "180°.",
          "D": "90°"
        },
        "answer": "A",
        "explanation": "Ta có n = (1;1;−1), n = (2;2;−2) ⇒ n = 2n.<br>P Q Q P<br>Do đó góc giữa hai mặt phẳng (P) và (Q) là 0°."
      },
      {
        "id": 5,
        "part": 1,
        "shortTag": "P1.5",
        "label": "Phần 1 - Câu 5",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, góc giữa hai mặt phẳng (Oxy) và (Oyz) bằng",
        "options": {
          "A": "30°.",
          "B": "45°.",
          "C": "60°.",
          "D": "90°."
        },
        "answer": "D",
        "explanation": "Do mặt phẳng (Oxy) vuông góc với mặt phẳng (Oyz) nên góc giữa hai mặt phẳng (Oxy) và<br>(Oyz) bằng 90°."
      },
      {
        "id": 6,
        "part": 1,
        "shortTag": "P1.6",
        "label": "Phần 1 - Câu 6",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt phẳng (P):2x− y + 2z + 1 = 0 và mặt phẳng (Q):2x− y + 2z + 4 = 0. Khoảng cách giữa hai mặt phẳng đã cho bằng 1 1",
        "options": {
          "A": "1.",
          "B": ".",
          "C": "3.",
          "D": ". 3 5"
        },
        "answer": "A",
        "explanation": "Dễ thấy (P)//(Q) ⇒ d((P),(Q)) = d(M,(Q)) với M(0;1;0) ∈ (P)<br>2.0−1 + 2.0 + 4<br>Vậy d((P),(Q)) = = 1.<br>22 + (−1)<sup>2</sup> + 22"
      },
      {
        "id": 7,
        "part": 1,
        "shortTag": "P1.7",
        "label": "Phần 1 - Câu 7",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt phẳng (α) cắt các trục Ox, Oy, Oz lần lượt tại 3 điểm A(2;0;0), B(0;3;0), C(0;0;−4). Khoảng cách từ O đến (α) bằng 61 12 61",
        "options": {
          "A": ".",
          "B": "4.",
          "C": ".",
          "D": "3. 12 61"
        },
        "answer": "C",
        "explanation": "x y z<br>Phương trình mặt phẳng (ABC) có dạng: + + = 1 ⇔ 6x + 4y−3z−12 = 0<br>2 3 −4"
      },
      {
        "id": 8,
        "part": 1,
        "shortTag": "P1.8",
        "label": "Phần 1 - Câu 8",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz,cho hai mặt phẳng (P) và (Q) lần lượt có hai vectơ pháp tuyến là n P và n. Biết góc giữa hai vectơ n và n bằng 120°. Góc giữa hai mặt phẳng (P) và (Q) bằng Q P Q",
        "options": {
          "A": "60°.",
          "B": "120°.",
          "C": "90°.",
          "D": "45°."
        },
        "answer": "A",
        "explanation": "()<br>Gọi φ là góc giữa hai mặt phẳng (P) và (Q). Do n,n = 120° > 90° ⇒ φ = 180°−120° = 60°<br>P Q<br>Vậy góc giữa hai mặt phẳng (P) và (Q) bằng 60°."
      },
      {
        "id": 9,
        "part": 1,
        "shortTag": "P1.9",
        "label": "Phần 1 - Câu 9",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai mặt phẳng (P) và (Q) lần lượt có hai vectơ pháp tuyến là n P và n. Biết góc giữa hai vectơ n và n bằng 120°. Góc giữa hai mặt phẳng (P) và (Q) bằng Q P Q",
        "options": {
          "A": "45°.",
          "B": "120°.",
          "C": "30°.",
          "D": "60°."
        },
        "answer": "D",
        "explanation": "Ta có (n •,n) = 120° ⇒ ((• P),(Q)) = 60°.<br>P Q"
      },
      {
        "id": 10,
        "part": 1,
        "shortTag": "P1.10",
        "label": "Phần 1 - Câu 10",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, góc giữa hai mặt phẳng (Oxy) và (Oyz) bằng",
        "options": {
          "A": "30°",
          "B": "45°",
          "C": "60°",
          "D": "90°"
        },
        "answer": "D",
        "explanation": "Ta có vectơ pháp tuyến của (Oxy) và (Oyz)lần lượt là k và i.<br>Vì k ⊥ i nên ((• Oxy);(Oyz)) = 90°."
      },
      {
        "id": 11,
        "part": 1,
        "shortTag": "P1.11",
        "label": "Phần 1 - Câu 11",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai mặt phẳng song song (P):x + y + z−2 = 0;. (Q):x + y + z + 4 = 0. Khoảng cách giữa hai mặt phẳng (P) và (Q) bằng 2 3",
        "options": {
          "A": ".",
          "B": "3.",
          "C": "6.",
          "D": "2 3. 3"
        },
        "answer": "D",
        "explanation": "4 + 2 6<br>Ta có: d<br>((P),(Q))<br>= = = 2 3<br>12 + 12 + 12 3"
      },
      {
        "id": 12,
        "part": 1,
        "shortTag": "P1.12",
        "label": "Phần 1 - Câu 12",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, khoảng cách từ gốc tọa độ O đến mặt phẳng (P):2x− y + 2z + 12 = 0 bằng 4",
        "options": {
          "A": "12.",
          "B": "1.",
          "C": ".",
          "D": "4. 3"
        },
        "answer": "D",
        "explanation": "2.0−0 + 2.0 + 12<br>Ta có d(O,(P)) = = 4.<br>22 + (−1)<sup>2</sup> + 22"
      },
      {
        "id": 13,
        "part": 1,
        "shortTag": "P1.13",
        "label": "Phần 1 - Câu 13",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai mặt phẳng song song (P):2x + y−2z−1 = 0, (Q):6x + 3y−6z + 15 = 0. Khoảng cách giữa hai mặt phẳng (P),(Q) bằng 4 16 16",
        "options": {
          "A": "2.",
          "B": ".",
          "C": ".",
          "D": ". 3 9 3"
        },
        "answer": "A",
        "explanation": "Ta có: (Q):6x + 3y−6z + 15 = 0 ⇔ 2x + y−2z + 5 = 0. Lấy M(0;1;0) ∈ (P).<br>1 + 5<br>Vậy d((P),(Q)) = d(M,(Q)) = = 2.<br>1 + 4 + 4"
      },
      {
        "id": 14,
        "part": 1,
        "shortTag": "P1.14",
        "label": "Phần 1 - Câu 14",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai mặt phẳng (P):x−2y + 2z−1 = 0 và (Q):2x + 2y−z−3 = 0. Gọi α là góc giữa hai mặt phẳng (P) và (Q). Tính cosα. 4 4 2 2",
        "options": {
          "A": "−.",
          "B": ".",
          "C": ".",
          "D": "−. 9 9 3 3"
        },
        "answer": "B",
        "explanation": "Ta có: n = (1;−2;2) và vectơ pháp tuyến n = (2;2;−1).<br>P Q<br>n.n 1.2 + (−2).2 + 2.(−1)<br>P Q<br>Suy ra cosα = = =.<br>n.n 12 + (−2)<sup>2</sup> + 22. 22 + 22 + (−1)<sup>2</sup> 9<br>P Q"
      },
      {
        "id": 15,
        "part": 1,
        "shortTag": "P1.15",
        "label": "Phần 1 - Câu 15",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz,cho đường thẳng d là giao tuyến của hai mặt phẳng (P):2x + y−2z−4 = 0 và (Q):x−2y + 2z + 6 = 0.Tính khoảng cách htừ điểm M(1;0;1)đến đường thẳng d.",
        "options": {
          "A": "h = 3.",
          "B": "h = 6.",
          "C": "h = 9.",
          "D": "h = 1."
        },
        "answer": "A",
        "explanation": "Hai mặt phẳng (P):2x + y−2z−4 = 0 và (Q):x−2y + 2z−6 = 0 có vectơ pháp tuyến lần lượt<br>là: n = (2;1;−2);n = (1;−2;2).<br>P Q<br>Giao tuyến d của hai mặt phẳng (P) và (Q) có vectơ chỉ phương:<br>u = [n;n] = (−2;−6;−5) = −1(2;6;5)<br>P Q<br>Đường thẳng d đi qua N(0;2;−1), có vectơ chỉ phương u = (2;6;5)<br>MN = (−1;2;−2); [MN,u] = (22;1;−10).<br>MN,u]<br>222 + 12 + (−10)<sup>2</sup><br>Khi đó d(M,d) = = = 3.<br>u 22 + 62 + 52"
      },
      {
        "id": 16,
        "part": 1,
        "shortTag": "P1.16",
        "label": "Phần 1 - Câu 16",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục Oxyz, gọi α là góc giữa hai mặt phẳng (P):x + 2y−z + 2 = 0 và (Q):2x− y−z + 4 = 0. Tính cosα. 2 3 1 1",
        "options": {
          "A": "cosα =.",
          "B": "cosα =.",
          "C": "cosα =.",
          "D": "cosα =. 3 4 6 3"
        },
        "answer": "C",
        "explanation": "Mặt phẳng (P) có vectơ pháp tuyến n = (1;2;−1).<br>Mặt phẳng (Q) có vectơ pháp tuyến n = (2;−1;−1).<br>n.n 2−2 + 1 1<br>1 2<br>Vậy cosα = = =.<br>n.n 6. 6 6<br>1 2"
      },
      {
        "id": 17,
        "part": 1,
        "shortTag": "P1.17",
        "label": "Phần 1 - Câu 17",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz góc giữa hai mặt phẳng (Oxz) và (P):x− y + 1 = 0 bằng,",
        "options": {
          "A": "60°",
          "B": "135°",
          "C": "45°",
          "D": "90°...."
        },
        "answer": "C",
        "explanation": "Ta có véc tơ pháp tuyến của mặt phẳng (Oxz) là j = (0;1;0)<br>Véc tơ pháp tuyến của mặt phẳng (P):x− y + 1 = 0 là n = (1;−1;0).<br>Gọi α là góc giữa hai mặt phẳng (Oxz) và (P), ta có:<br>n.j 1.0 + 1.(−1) + 0.0 1<br>cosα = = =.<br>n. j 12 + (−1)<sup>2</sup> + 02. 02 + 12 + 02 2<br>Vậy α = 45°."
      },
      {
        "id": 18,
        "part": 1,
        "shortTag": "P1.18",
        "label": "Phần 1 - Câu 18",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(1;2;3). Khoảng cách từ điểm A đến trục Ox bằng",
        "options": {
          "A": "4.",
          "B": "13.",
          "C": "10.",
          "D": "5."
        },
        "answer": "B",
        "explanation": "Trục Ox có vectơ chỉ phương i = (1;0;0)<br>OA,i]<br>32 + (−2)<sup>2</sup><br>Khi đó [OA,i] = (0;3;−2) nên d[A,Ox] = = = 13<br>i 1"
      },
      {
        "id": 19,
        "part": 1,
        "shortTag": "P1.19",
        "label": "Phần 1 - Câu 19",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, góc giữa hai mặt phẳng (Oxz) và (Oyz)bằng:",
        "options": {
          "A": "900.",
          "B": "600.",
          "C": "300.",
          "D": "450."
        },
        "answer": "A",
        "explanation": "Dễ thấy, do Ox;Oy;Oz đôi một vuông góc nên (Oxz) ⊥ (Oyz).<br>Vậy góc giữa hai mặt phẳng (Oxz)và (Oyz)bằng 900.<br>{ x = −2t"
      },
      {
        "id": 20,
        "part": 1,
        "shortTag": "P1.20",
        "label": "Phần 1 - Câu 20",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ toạ độ Oxyz, cho đường thẳng d có phương trình tham số; y = 6 + t } z = 1−3t và mặt phẳng (P):2x− y + 3z + 12 = 0. Tìm sin của góc giữa d và (P)?",
        "options": {
          "A": "0o.",
          "B": "1.",
          "C": "0.",
          "D": "90o."
        },
        "answer": "B",
        "explanation": "{ x = −2t<br>Đường thẳng d có phương trình tham số; y = 6 + t ⇒ d có vectơ chỉ phương u = (−2;1;−3)<br>z = 1−3t<br>Mặt phẳng (P):2x− y + 3z + 12 = 0 ⇒ (P) có vectơ pháp tuyến n = (2;−1;3)<br>(•) (•)<br>Ta có u = −n nên d ⊥ (P) ⇒ d,(P) = 90o ⇒ sin d,(P) = 1.<br>x−2 y + 2 z"
      },
      {
        "id": 21,
        "part": 1,
        "shortTag": "P1.21",
        "label": "Phần 1 - Câu 21",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho đường thẳng Δ: = = và mặt phẳng 1 2 −2 (P):2x− y + 2z−2022 = 0. Gọi α là góc giữa đường thẳng Δ và mặt phẳng (P). Khẳng định nào sau đây đúng? 4 4 4 4",
        "options": {
          "A": "sinα = −.",
          "B": "sinα =.",
          "C": "cosα = −.",
          "D": "cosα =. 9 9 9 9"
        },
        "answer": "B",
        "explanation": "Đường thẳng Δ có vectơ chỉ phương u = (1;2;−2); mặt phẳng (P) có vectơ pháp tuyến<br>n = (2;−1;2).<br>n.u 4<br>Ta có sinα = cos(n,u) = =.<br>n.u 9"
      },
      {
        "id": 22,
        "part": 1,
        "shortTag": "P1.22",
        "label": "Phần 1 - Câu 22",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho A(0;1;0), góc giữa đường thẳng OA và mặt phẳng (Oxz) bằng",
        "options": {
          "A": "600.",
          "B": "450.",
          "C": "900.",
          "D": "00."
        },
        "answer": "C",
        "explanation": "Ta có OA ⊥ (Oxz) nên góc giữa đường thẳng OA và mặt phẳng (Oxz) bằng 900.<br>x y + 2 z x−1 y−2 z−1"
      },
      {
        "id": 23,
        "part": 1,
        "shortTag": "P1.23",
        "label": "Phần 1 - Câu 23",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng Δ: = =, d: = =. Gọi 2 3 4 2 1 2 (P) là mặt phẳng chứa đường thẳng Δ và song song với đường thẳng d. Tính khoảng cách từ điểm M(3;0;−1) đến mặt phẳng (P). 2 5",
        "options": {
          "A": "3.",
          "B": ".",
          "C": ".",
          "D": "1. 3 3"
        },
        "answer": "A",
        "explanation": "Đường thẳng Δ đi qua điểm M(0;−2;0) và có vectơ chỉ phương u = (2;3;4).<br>Đường thẳng d đi qua điểm N(1;2;1) và có vectơ chỉ phương u = (2;1;2).<br>Khi đó: n = [u;u] = (1;2;−2).<br>P Δ d<br>Mặt phẳng (P):1(x−0) + 2(y + 2)−2(z−0) = 0 ⇔ x + 2y−2z + 4 = 0.<br>Thử lại N ∉ (P) nên thỏa mãn.<br>3 + 2.0−2(−1) + 4<br>Vậy d<br>(M;(P))<br>= = 3.<br>12 + 22 + (−2)<sup>2</sup><br>{ x = 2−t"
      },
      {
        "id": 24,
        "part": 1,
        "shortTag": "P1.24",
        "label": "Phần 1 - Câu 24",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian có hệ trục Oxyz, đường thẳng (d) có phương trình:; y = 3 + t và mặt phẳng z = 1 + t } (Δ):x + 2y−2z + 3 = 0. Góc giữa (d) và (Δ) bằng α. Khẳng định nào sau đây đúng? 3 3 3 3",
        "options": {
          "A": "cotα =.",
          "B": "tanα =.",
          "C": "sinα =.",
          "D": "cosα =. 9 9 9 9"
        },
        "answer": "C",
        "explanation": "Đường thẳng (d) có véctơ chỉ phương u = (−1;1;1), mặt phẳng (Δ) có véctơ pháp tuyến<br>n = (1;2;−2), khi đó:<br>u.n (−1).1 + 1.2 + 1.(−2)<br>sin((d),(Δ)) = sinα = = |cos(u,n)| = =.<br>u.n (−1)<sup>2</sup> + 12 + 12. 12 + 22 + (−2)<sup>2</sup> 9<br>x + 1 y−2 z"
      },
      {
        "id": 25,
        "part": 1,
        "shortTag": "P1.25",
        "label": "Phần 1 - Câu 25",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian tọa độ Oxyz, cho điểm A(−3;1;−3) và đường thẳng d: = =. 2 −3 1 Gọi (α)là mặt phẳng chứa đường thẳng d và vuông góc với mặt phẳng tọa độ (Oyz). Khoảng cách từ A đến mặt phẳng (α) bằng 8 10 4 10",
        "options": {
          "A": "2 10.",
          "B": "10.",
          "C": ".",
          "D": ". 5 5"
        },
        "answer": "B",
        "explanation": "Đường thẳng d đi qua điểm M(−1;2;0), có một vectơ chỉ phương u = (2;−3;1) và mặt<br>phẳng (Oyz)có một vecto pháp tuyến i = (1;0;0).<br>Do d ⊂ (α), (α) ⊥ (Oyz) nên suy ra vectơ n = [u,i] = (0;−1;−3)là một vectơ pháp tuyến của<br>mặt phẳng (α) và M ∈ (α).<br>Mặt phẳng (α) đi qua điểmM(−1;2;0) và nhận vectơ n = (0;−1;−3) là vectơ pháp tuyến có<br>phương trình là: y + 3z−2 = 0.<br>1 + 3(−3)−2<br>Khi đó khoảng cách từ A đến mặt phẳng (α)bằng: = 10.<br>12 + 32"
      },
      {
        "id": 26,
        "part": 1,
        "shortTag": "P1.26",
        "label": "Phần 1 - Câu 26",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục toạ độ Oxyz, cho mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 8 và điểm (1 3) M;;0. Đường thẳng d thay đổi, đi qua điểm M và cắt mặt cầu(S) tại hai điểm A,B 2 2 phân biệt. Tính diện tích lớn nhất của tam giác OAB.",
        "options": {
          "A": "2 2.",
          "B": "2 7.",
          "C": "4.",
          "D": "7."
        },
        "answer": "D",
        "explanation": "Ta có: mặt cầu (S) có tâmO(0;0;0) và R = 2 2.<br>OM = 1 < R ⇒ điểm M nằm trong mặt cầu(S).<br>1 1<br>Gọi h = d(O,d) ≤ OM = 1, khi đó ta có:S = h.AB = h.2 OA<sup>2</sup> −h<sup>2</sup> = 8h−h<sup>3</sup>.<br>ΔOAB 2 2<br>Xét hàm f (x) = 8x−x<sup>3</sup> ∀x ∈ [0;1].<br>S đạt giá trị lớn nhất là Max f (x) = 7 ⇔ x = 1 ⇔ OM ⊥ d.<br>ΔOAB [0;1]"
      },
      {
        "id": 27,
        "part": 1,
        "shortTag": "P1.27",
        "label": "Phần 1 - Câu 27",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (α) vuông góc với mặt phẳng (P):x + 3y−2z + 2 = 0 x−1 y + 1 z−4 và chứa đường thẳng d: = =. Khoảng cách từ điểm A(1;−2;−1) đến mặt phẳng 2 −1 1 (α) bằng 8 3 4 3 24 3",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": "8 3. 3 3 3"
        },
        "answer": "A",
        "explanation": "n (1;3;−2),u (2;−1;1) ⇒ n = [n;u] = (1;−5;−7).<br>P d (α) (P) d<br>Điểm M(1;−1;4) ∈ d ⇒ M ∈ (α).<br>Phương trình mặt phẳng (α) là 1(x−1)−5(y + 1)−7(z−4) = 0 ⇔ x−5y−7z + 22 = 0.<br>8 3<br>(A;(α))<br>=.<br>x−2 y−1 z−4"
      },
      {
        "id": 28,
        "part": 1,
        "shortTag": "P1.28",
        "label": "Phần 1 - Câu 28",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai mặt phẳng (P): + + = 1 và 3 2 −6 (Q):x + 2y + 3z + 7 = 0. Tính tang góc tạo bởi hai mặt phẳng đã cho. 3 3 5 3 19",
        "options": {
          "A": "",
          "B": ".",
          "C": ".",
          "D": ". 19 5 19 3 19 5"
        },
        "answer": "D",
        "explanation": "x−2 y−1 z−4<br>Mặt phẳng (P): + + = 1 ⇔ (P):2x + 3y−z−9 = 0<br>3 2 −6<br>Mặt phẳng (P) có một vectơ pháp tuyến là: n = (2;3;−1)<br>(P)<br>(Q):x + 2y + 3z + 7 = 0 ⇒ n = (1;2;3)<br>(Q)<br>Gọi α là góc giữa hai mặt phẳng (P) và (Q) ⇒ 00 ≤ α ≤ 900<br>(P)<br>.n<br>(Q)<br>2.1 + 3.2 + (−1).3<br>Ta có: cosα = = =<br>n.n 22 + 32 + (−1)<sup>2</sup>. 12 + 22 + 32 14<br>(P) (Q)<br>1 171 3 19<br>tan2α = −1 = ⇒ tanα =.<br>cos2α 25 5"
      },
      {
        "id": 29,
        "part": 1,
        "shortTag": "P1.29",
        "label": "Phần 1 - Câu 29",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(1;2;−3), mặt phẳng (P):3x + y−z−1 = 0 và mặt phẳng (Q):x + 3y + z−3 = 0. Gọi (Δ) là đường thẳng đi qua A, cắt và vuông góc với giao tuyến của (P) và (Q). Sin của góc tạo bởi đường thẳng (Δ) và mặt phẳng (P) bằng 55 −3 55 7 55",
        "options": {
          "A": ".",
          "B": "0.",
          "C": ".",
          "D": ". 55 11 55"
        },
        "answer": "D",
        "explanation": "Ta có mặt phẳng (P):3x + y−z−1 = 0 có vectơ pháp tuyến n = (3;1;−1) và mặt phẳng<br>(Q):x + 3y + z−3 = 0 có vectơ pháp tuyến n = (1;3;1).<br>Gọi d = (P) ∩ (Q) thì d nên có một vectơ chỉ phương là [n,n] = (4;−4;8)=4(1;−1;2).<br>1 2<br>Suy ra d cũng nhận vectơ u = (1;−1;2) là một vectơ chỉ phương.<br>{ 3x + y−z−1 = 0<br>Lấy điểm M ∈ d = (P) ∩ (Q) ⇒ toạ độ điểm M thoả mãn hệ;.<br>}x + 3y + z−3 = 0<br>Chọn y = 1 ⇒ x = z = 0 ⇒ M(0;1;0).<br>{ x = t<br>Phương trình tham số đường thẳng d là; y = 1−t(t ∈ ℝ).<br>z = 2t<br>Giả sử Δ ∩ d = B ⇒ B(t;1−t;2t) ⇒ AB = (t−1;−t−1;2t + 3).<br>Vì AB ⊥ d ⇒ AB.u = 0 ⇔ t = −1 ⇒ AB = (−2;0;1) là một vectơ chỉ phương của đường thẳng<br>Gọi φ là góc giữa đường thẳng Δ và mặt phẳng (P), ta có<br>AB.n<br>() 1 7 7 55<br>sinφ = cos AB,n = = =.<br>1 AB.n 55 55<br>x−1 y + 1 z x−3 y−1 z−5"
      },
      {
        "id": 30,
        "part": 1,
        "shortTag": "P1.30",
        "label": "Phần 1 - Câu 30",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Cho hai đường thẳng d: = =; d: = =. Số đo góc giữa hai đường 1 2 −2 1 2 1 3 4 thẳng d; d bằng 1 2",
        "options": {
          "A": "90°.",
          "B": "60°",
          "C": "30°",
          "D": "45°"
        },
        "answer": "A",
        "explanation": "Đường thẳng d có véc tơ chỉ phương u (2;−2;1); d có véc tơ chỉ phương u (1;3;4)<br>1 1 2 2<br>cos(d;d) = cos (u;u) = u 1.u 2 = 0 = 0<br>1 2 1 2 u.u 3 26<br>Vậy góc giữa hai đường thẳng là 90°.<br>x−1 y z + 1 x−2 y z−1"
      },
      {
        "id": 31,
        "part": 1,
        "shortTag": "P1.31",
        "label": "Phần 1 - Câu 31",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng d: = =, d′: = =. Tính 2 1 −2 2 −1 1 cosin của góc giữa hai đường thẳng d;d′. 1 1",
        "options": {
          "A": "cos(d;d′) =.",
          "B": "cos(d;d′) = 3 6 3 + 6 −1 1",
          "C": "cos(d;d′) =.",
          "D": "cos(d;d′) =. 3 6 54"
        },
        "answer": "A",
        "explanation": "Đường thẳng d, d′có véc tơ chỉ phương lần lượt là: u = (2;1;−2);u′ = (2;−1;1).<br>u.u′ 2.2 + 1.(−1) + (−2).1<br>Ta có cos(d;d′) = = =.<br>u.u′ 3 6 3 6<br>x y + 1 z−9 x + 1 y−1 z + 5"
      },
      {
        "id": 32,
        "part": 1,
        "shortTag": "P1.32",
        "label": "Phần 1 - Câu 32",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng d: = =, d: = =. 1 −1 1 −2 2 −1 1 1 Góc giữa hai đường thẳng đó bằng",
        "options": {
          "A": "90°.",
          "B": "60°.",
          "C": "45°.",
          "D": "30°."
        },
        "answer": "A",
        "explanation": "Đường thẳng d, d có véc tơ chỉ phương lần lượt là: u = (−1;1;−2);u = (−1;1;1).<br>1 2 1 2<br>Ta có cos(d;d) =<br>.u<br>2 =<br>(−1).(−1) + 1.1 + (−2).1<br>= 0.<br>1 2<br>u.u 3 6<br>1 2<br>Do đó góc giữa hai đường thẳng đã cho là 90°."
      },
      {
        "id": 33,
        "part": 1,
        "shortTag": "P1.33",
        "label": "Phần 1 - Câu 33",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hình lăng trụ đứng ABC.A′B′C′ có A(0;0;0), B(2;0;0), C(0;2;0)và A′(0;0;2). Góc giữa BC′ và A′C là:",
        "options": {
          "A": "45o.",
          "B": "60o.",
          "C": "30o.",
          "D": "90o."
        },
        "answer": "D",
        "explanation": "Ta có: B(2;0;0), C′(0;2;2) nên BC′ = (−2;2;2).<br>Mặt khác: A′(0;0;2), C(0;2;0) nên A′C = (0;2;−2).<br>Suy ra: cos(• BC′,A′C) = cos<br>(•<br>′,<br>) =<br>0 + 4−4<br>= 0, ⇒ (• BC′,A′C) = 90o.<br>12. 8"
      },
      {
        "id": 34,
        "part": 1,
        "shortTag": "P1.34",
        "label": "Phần 1 - Câu 34",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục toạ độ Oxyz, cho mặt phẳng (P):x + y−z + 2 = 0 và hai đường { x = 1 + t { x = 3−t′ thẳng d:; y = t; d':; y = 1 + t′. Biết rằng có 2 đường thẳng có các đặc điểm: song song với } z = 2 + 2t } z = 1−2t′ (P); cắt d, d′ và tạo với d góc 30O. Tính cosin góc tạo bởi hai đường thẳng đó. 2 1 1 1",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": ". 3 2 5 2"
        },
        "answer": "B",
        "explanation": "Gọi Δ là đường thẳng cần tìm, n là VTPT của mặt phẳng (P).<br>Gọi M(1 + t;t;2 + 2t) là giao điểm của Δ và d; M(3−t′;1 + t′;1−2t′) là giao điểm của Δ và<br>d′<br>Ta có: MM′ = (2−t′−t;1 + t′−t;−1−2t′−2t)<br>{ M ∉ (P)<br>MM′//(P) ⇔; ⇔ t′ = −2 ⇒ MM′ = (4−t;−1−t;3−2t)<br>}MM′ ⊥ n<br>() 3 −6t + 9 [t = 4<br>Ta có cos30° = cos MM′,u ⇔ = ⇔<br>d 2 36t<sup>2</sup> −108t + 156 t = −1<br>{ x = 5 { x = t′<br>Vậy, có 2 đường thẳng thoả mãn là Δ:; y = 4 + t; Δ:; y = −1<br>1 2<br>}z = 10 + t }z = t′<br>Khi đó cos(Δ,Δ) =.<br>1 2 2<br>x + 1 y−3 z−1"
      },
      {
        "id": 35,
        "part": 1,
        "shortTag": "P1.35",
        "label": "Phần 1 - Câu 35",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Với giá trị nào của m thì đường thẳng (D): = = vuông góc với mặt phẳng 2 m m−2 (P):x + 3y + 2z = 2.",
        "options": {
          "A": "5.",
          "B": "−7.",
          "C": "1.",
          "D": "6."
        },
        "answer": "D",
        "explanation": "Vectơ chỉ phương của (D): a = (2;m;m−2).<br>Vectơ pháp tuyến của (P): n = (1;3;2).<br>m m−2<br>(D) ⊥ (P) ⇔ a và n cùng phương: 2 = = ⇔ m = 6.<br>3 2"
      },
      {
        "id": 36,
        "part": 1,
        "shortTag": "P1.36",
        "label": "Phần 1 - Câu 36",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không giam Oxyz, cho mặt phẳng (P) có phương trình 2x− y + 2z + 1 = 0, đường thẳng x−1 y z + 2 d có phương trình = =. Gọi φ là góc giữa đường thẳng d và mặt phẳng (P). Tính −1 −2 2 giá trị cosφ 6 65 9 65 4",
        "options": {
          "A": "cosφ =",
          "B": "cosφ =",
          "C": "cosφ =",
          "D": "cosφ = 9 9 65 9"
        },
        "answer": "B",
        "explanation": "Ta có n = (2;1−1;2), u = (−1;−2;2)<br>(P) d<br>2.(−1)−1.(−2) + 2.2<br>sinφ = cos n;u = =<br>(P) d 22 + (−1)<sup>2</sup> + 22. (−1)<sup>2</sup> + (−2)<sup>2</sup> + 22 9<br>(4) 65<br>⇒ cosφ = 1−sin2φ = 1− =.<br>9 9<br>x y z−1"
      },
      {
        "id": 37,
        "part": 1,
        "shortTag": "P1.37",
        "label": "Phần 1 - Câu 37",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, hãy tính số đo góc α giữa đường thẳng Δ: = = và mặt phẳng 1 2 −1 (P):x− y + 2z + 1 = 0.",
        "options": {
          "A": "α = 30°.",
          "B": "α = 60°.",
          "C": "α = 150°.",
          "D": "α = 120°."
        },
        "answer": "A",
        "explanation": "Ta có: đường thẳng Δ có vectơ chỉ phương u = (1;2; −1); mặt phẳng (P) có vectơ pháp<br>tuyến là n = (1;−1;2).<br>(P)<br>u.n<br>Áp dụng công thức sinα = sin(u,n) = Δ P<br>Δ P u.n<br>Δ P<br>1.1 + 2.(−1) + (−1).2 1<br>⇔ sinα = = ⇔ α = 30°<br>12 + 22 + (−1)<sup>2</sup>. 12 + (−1)<sup>2</sup> + 22 2<br>x y z"
      },
      {
        "id": 38,
        "part": 1,
        "shortTag": "P1.38",
        "label": "Phần 1 - Câu 38",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, hãy tính số đo góc α giữa đường thẳng Δ: = = và mặt phẳng 1 −2 1 (P):5x + 11y + 2z−4 = 0.",
        "options": {
          "A": "α = −30°.",
          "B": "α = 30°.",
          "C": "α = 60°.",
          "D": "α = 45°."
        },
        "answer": "B",
        "explanation": "Ta có đường thẳng Δ có vectơ chỉ phương u = (1;−2; 1); mặt phẳng (P) có vectơ pháp tuyến<br>là n = (5;11;2).<br>(P)<br>u.n<br>Áp dụng công thức sinα = sin(u,n) = Δ P<br>Δ P u.n<br>Δ P<br>1.5−2.11 + 1.2 1<br>⇔ sinα = = ⇔ α = 30°<br>12 + (−2)<sup>2</sup> + 12. 52 + 112 + 22 2<br>{ x = 1 + t"
      },
      {
        "id": 39,
        "part": 1,
        "shortTag": "P1.39",
        "label": "Phần 1 - Câu 39",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho đường thẳng d:; y = −1 + 2t và mặt phẳng } z = −2t (Q):x + my + (m−1)z + 2021 = 0. Khi mặt phẳng (Q) tạo với đường thẳng d một góc lớn nhất thì điểm H nào dưới đây nằm trong mặt phẳng (Q)?",
        "options": {
          "A": "H(−2021;1;1).",
          "B": "H(2021;−1;1).",
          "C": "H(−2021;0;0).",
          "D": "H(0;2021;1)."
        },
        "answer": "A",
        "explanation": "Vectơ pháp tuyến của(Q) là n = (1;m;m−1), vectơ chỉ phương của đường thẳng d là<br>(Q)<br>u = (1;2;−2).<br>Gọi φ là góc tạo bởi mặt phẳng (Q) và đường thẳng d thì 0° ≤ φ ≤ 90°, đồng thời<br>Ta có: u.n = 3; u = 3; n = 2m<sup>2</sup> −2m + 2 suy ra sinφ =.<br>(Q) (Q)<br>2m<sup>2</sup> −2m + 2<br>Để φ lớn nhất thì sinφ lớn nhất ⇔ 2m<sup>2</sup> −2m + 2 nhỏ nhất.<br>(1) 3 3 2 1<br>Mà 2m<sup>2</sup> −2m + 2 = 2 m− + ≥ nên giá trị lớn nhất của sinφ = khi m =<br>2 2 2 3 2<br>1 1<br>Khi đó (Q):x + y− z + 2021 = 0. Vậy H(−2021;1;1) ∈ (Q).<br>2 2"
      },
      {
        "id": 40,
        "part": 1,
        "shortTag": "P1.40",
        "label": "Phần 1 - Câu 40",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian cho hai điểm E(3;0;0), F(0;0;1). Cặp mặt phẳng nào dưới đây đi qua hai điểm E,F đồng thời tạo với trục Oz một góc 30°.",
        "options": {
          "A": "(Q):x− 26y + 3z−3 = 0 và (Q):x + 26y + 3z−3 = 0. 1 2",
          "B": "(Q):x−2 6y + 3z−3 = 0 và (Q):x + 26y + 3z−3 = 0. 1 2",
          "C": "(Q):x− 26y + 3z−3 = 0 và (Q):x + 2 6y + 3z−3 = 0. 1 2",
          "D": "(Q):x−4 3y + 3z−3 = 0 và (Q):x + 3 7y + 3z−3 = 0. 1 2"
        },
        "answer": "A",
        "explanation": "Mặt phẳng (Q) đi qua E,F và tạo với trục Oz một góc 30° nên sẽ tạo với (Oxy) một góc<br>60°nên mặt phẳng(Q) cắt Oy tại điểm H(0;b;0) khác gốc O do vậy b ≠ 0.<br>Khi đó phương trình của mặt phẳng (Q) là có dạng:<br>x y z<br>+ + = 1 ⇔ bx + 3y + 3bz−3b = 0 nên pháp tuyến của (Q) là n = (b;3;3b).<br>3 b 1 (Q)<br>Mặt phẳng (Oxy) có vectơ pháp tuyến là k(0;0;1). Theo giả thiết bài toán ta có<br>() 3b 3b 3b 1<br>cos n,k = ⇔ cos60° = ⇔ =<br>(Q) b<sup>2</sup> + 9 + 9b<sup>2</sup>. 1 b<sup>2</sup> + 9 + 9b<sup>2</sup>. 1 b<sup>2</sup> + 9 + 9b<sup>2</sup>. 1 2<br>9 3<br>⇔ 23b = 9 + 10b<sup>2</sup> ⇔ b<sup>2</sup> = ⇔ b = ±.<br>26 26<br>Vậy có hai mặt phẳng cần tìm là (Q):x− 26y + 3z−3 = 0 và (Q):x + 26y + 3z−3 = 0.<br>1 2<br>(8 4 8)"
      },
      {
        "id": 41,
        "part": 1,
        "shortTag": "P1.41",
        "label": "Phần 1 - Câu 41",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho tam giác nhọn ABC có E(2;2;1), F −;;, O(0;0;0) lần 3 3 3 lượt là chân đường cao hạ từ các đỉnh A,B,C xuống các cạnh BC,CA,AB. Viết phương trình x−1 y z đường thẳng Δ đi qua Acắt trục Oxtại điểm có hoành độ nguyên và tạo với d: = = 2 2 −1 51 một góc α,cosα =. 9 x + 3 y z x + 4 y−1 z−1",
        "options": {
          "A": "= =",
          "B": "= = 7 1 −1 7 1 −1 x−3 y −z x−3 y z",
          "C": "= =",
          "D": "= = 7 1 1 7 1 1"
        },
        "answer": "C",
        "explanation": "{ O • EH = O • BH = 90o −B • AC<br>• •<br>Ta có; ⇒ OEH = FEH.<br>}F • EH = F • CH = 90o −B • AC<br>{ F • OH = F • AH = 90o − • ACB<br>• •<br>Tương tự, ta có; ⇒ FOH = EOH.<br>}E • OH = E • BH = 90o − • ACB<br>Suy ra, trực tâm H của tam giác ABC cũng chính là tâm đường tròn nội tiếp tam giác ABC.<br>Do đó, EF.HO + OE.HF + OF.HE = 0 ⇔ 5HO + 3HF + 4HE = 0 ⇒ H(0;1;1).<br>{ x = 2k<br>Do A,H,E thẳng hàng nên HA = kHE ⇔; y = k + 1 ⇒ A(2k;k + 1;1).<br>z = 1<br>Do OH ⊥ OA nên OA.OH = 0 ⇔ 1.(k + 1) + 1 = 0 ⇔ k = −2 ⇒ A(−4;−1;1).<br>Gọi M = Ox ∩ Δ,M(m;0;0)<br>AM = (m + 4;1;−1);u = (2;2;−1).<br>AM.u 2m + 11 51 2m + 11<br>cos(Δ;d) = d = ⇔ =<br>AM.u m<sup>2</sup> + 8m + 18.3 9 3 m<sup>2</sup> + 8m + 18<br>[m = 3<br>⇔ 51 (m<sup>2</sup> + 8m + 18) = 9 (4m<sup>2</sup> + 44m + 121) ⇔ 15m<sup>2</sup> + 12m−171 = 0 ⇔ | 19<br>| m = −<br>⇒ M(3;0;0),AM = (7;1;−1).<br>x−3 y −z<br>Vậy phương trình Δ: = =<br>7 1 1"
      },
      {
        "id": 42,
        "part": 1,
        "shortTag": "P1.42",
        "label": "Phần 1 - Câu 42",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Đường thẳng Δ đi qua điểm M(3;1;1), nằm trong mặt phẳng (α):x + y−z−3 = 0, cắt { x = 3 { x = 1 d:; y = 1 + 3t và tạo với đường thẳng d:; y = 4 + 3t một góc nhỏ nhất, thì phương trình của 1 } z = 1−2t } z = −3−2t Δ là: { x = 1 { x = 8 + 5t′ { x = 1 + 2t′ { x = 1 + 5t′",
        "options": {
          "A": "; y = −t′.",
          "B": "; y = −3−4t′.",
          "C": "; y = 1−t′.",
          "D": "; y = 1−4t′. } z = 2t′ } z = 2 + t′ } z = 3−2t′ } z = 3 + 2t′"
        },
        "answer": "B",
        "explanation": "Ta thấy: M ∈ (α). Đường thẳng d có vectơ chỉ phương là u = (0;3;−2).<br>Mặt phẳng (α) có vectơ pháp tuyến là n = (1;1;−1).<br>Vì u.n = 0.1 + 3.1 + (−2).(−1) = 5 ≠ 0 nên d cắt (α).<br>Dễ thấy M ∈ d,d //d.<br>1 1<br>Lấy N(3;4;−1) ∈ d. Gọi K, H lần lượt là hình chiếu vuông góc của N trên mặt phẳng (α)<br>và đường thẳng Δ.<br>Ta có: (• d,Δ) = (• d,Δ) = • NMH và sin • NMH = NH ≥ NK.<br>1 MN MN<br>Do vậy (d,Δ) nhỏ nhất khi K ≡ H hay Δ là đường thẳng MK.<br>{ x = 3 + t<br>Đường thẳng NK có phương trình:; y = 4 + t.<br>z = −1−t<br>Tọa độ K ứng với t là nghiệm của phương trình: (3 + t) + (4 + t)−(−1−t)−3 = 0 ⇔ t = −.<br>(4 7 2)<br>Suy ra K;;.<br>3 3 3<br>(5 4 1) 1<br>Đường thẳng Δ có vectơ chỉ phương là MK = −;;− = − (5;−4;1)<br>3 3 3 3<br>{ x = 3 + 5t′ { x = 8 + 5t′<br>Đường thẳng Δ có phương trình:; y = 1−4t′ hay Δ; y = −3−4t′.<br>z = 1 + t′<br>z = 2 + t′"
      },
      {
        "id": 43,
        "part": 1,
        "shortTag": "P1.43",
        "label": "Phần 1 - Câu 43",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ là giao tuyến của hai mặt phẳng (P):z−1 = 0 và (Q):x + y + z−3 = 0. Gọi d là đường thẳng nằm trong mặt phẳng (P), cắt đường thẳng x−1 y−2 z−3 = = và vuông góc với đường thẳng Δ. Phương trình của đường thẳng d là 1 −1 −1 { x = 3 + t { x = 3−t { x = 3 + t { x = 3 + t",
        "options": {
          "A": "; y = t.",
          "B": "; y = t.",
          "C": "; y = t.",
          "D": "; y = −t. z = 1 + t z = 1 z = 1 z = 1 + t } } } }"
        },
        "answer": "C",
        "explanation": "d'<br>I d<br>Đặt n = (0;0;1) và n = (1;1;1) lần lượt là véctơ pháp tuyến của (P) và (Q).<br>P Q<br>Do Δ = (P) ∩ (Q) nên Δ có một véctơ chỉ phương u = [n,n] = (−1;1;0).<br>Δ P Q<br>Đường thẳng d nằm trong (P) và d ⊥ Δ nên d có một véctơ chỉ phương là u = [n,u′]<br>d P Δ<br>= (−1;−1;0).<br>x−1 y−2 z−3<br>Gọi d′: = = và A = d′ ∩ d ⇒ A = d′ ∩ (P)<br>1 −1 −1<br>{ z−1 = 0 { z = 1<br>Xét hệ phương trình; x−1 y−2 z−3 ⇔; y = 0 ⇒ A(3;0;1).<br>= =<br>} 1 −1 −1 } x = 3<br>{ x = 3 + t<br>Do đó phương trình đường thẳng d:; y = t.<br>z = 1<br>x−2 y−1 z + 1"
      },
      {
        "id": 44,
        "part": 1,
        "shortTag": "P1.44",
        "label": "Phần 1 - Câu 44",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai đường thẳng d: = = và 1 6 −1 2 x−1 y + 1 z + 1 d: = =. Gọi (P) là mặt phẳng chứa đường thẳng d và song song với đường 2 3 1 4 2 thẳng d. Khoảng cách giữa đường thẳng d và mặt phẳng (P) là 1 1 1 12",
        "options": {
          "A": ".",
          "B": "2.",
          "C": ".",
          "D": "1. 7 7"
        },
        "answer": "B",
        "explanation": "Ta có u = (6;−1;2),u = (3;1;4) là vectơ chỉ phương của d và d<br>1 2 1 2<br>Vectơ pháp tuyến của mặt phẳng (P) là n = [u;u] = (−2;−6;3).<br>1 2<br>Vì d ⊂ (P) ⇒ A(1;−1;−1) ∈ d ⇒ A ∈ (P).<br>2 2<br>Phương trình mặt phẳng (P) là −2(x−1)−6(y + 1) + 3(z + 1) = 0 ⇔ −2x−6y + 3z−1 = 0.<br>d(d;(P)) = d(B;(P)) = 2 với B(2;1;−1) ∈ d.<br>1 1<br>x−2 y−1 z−1"
      },
      {
        "id": 45,
        "part": 1,
        "shortTag": "P1.45",
        "label": "Phần 1 - Câu 45",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm A(0;1;2) và đường thẳng d: = =. Gọi (P) 2 2 −3 là mặt phẳng đi qua A và chứa d. Khoảng cách từ điểm M(5;−1;3) đến (P) bằng 1 11",
        "options": {
          "A": "5.",
          "B": ".",
          "C": "1.",
          "D": ". 3 3"
        },
        "answer": "C",
        "explanation": "Lấy B(2;1;1) ∈ d ta có AB = (2;0;−1).<br>Ta có [AB,u] = (2;4;4) = 2(1;2;2)<br>Mặt phẳng (P) đi qua A và chứa d suy ra n = (1;2;2).<br>Phương trình mặt phẳng (P):x + 2y + 2z−6 = 0<br>x + 2y + 2z −6<br>Vậy d(M,(P)) = M M M = 1.<br>12 + 22 + 22"
      },
      {
        "id": 46,
        "part": 2,
        "shortTag": "P2.1",
        "label": "Phần 2 - Câu 1",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng d:; y = 3−2t và d′:; y = 3 + 2t′. Xét tính đúng z = 1−3t z = 7 + 9t′ } } sai của các khẳng định sau:",
        "statements": {
          "a": "Đường thẳng d đi qua điểm A(2;3;1).",
          "b": "Đường thẳng d′ đi qua điểm B(6;3;7).",
          "c": "Hai đường thẳng d và d′ cắt nhau. 35",
          "d": "Cosin góc giữa hai đường thẳng d và d′ bằng. 1513"
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "{ x = 2<br>a) Đúng: Khi t = 0 thì; y = 3 nên đường thẳng d đi qua điểm A(2;3;1).<br>z = 1<br>{ x = 6<br>b) Đúng: Khi t′ = 0 thì; y = 3 nên đường thẳng d′ đi qua điểm B(6;3;7).<br>z = 7<br>c) Sai: d đi qua điểm A(2;3;1) có vectơ chỉ phương a = (−2;−2;−3).<br>Đường thẳng d′ đi qua điểm B(6;3;7) có vectơ chỉ phương b = (2;2;9).<br>Ta có: [a,b] = (−12;12;0);AB = (4;0;6) ⇒ [a,b].AB = −48 ≠ 0 nên d và d′ chéo nhau.<br>a·b<br>35<br>d) Đúng: cos(d;d′) = =.<br>a·b 1513<br>{ x = t<br>x−1 y z−2"
      },
      {
        "id": 47,
        "part": 2,
        "shortTag": "P2.2",
        "label": "Phần 2 - Câu 2",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng Δ:; y = 2−3t và d: = =. Xét tính −3 2 2 z = 1 + 2t } đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Điểm A(0;2;1) không thuộc đường thẳng Δ.",
          "b": "Đường thẳng d có vtcp u = (3;2;2). d",
          "c": "Hai đường thẳng Δ và d chéo nhau. 5",
          "d": "Gọi α là góc giữa hai đường thẳng Δ và d. Khi đó cosα =. 38"
        },
        "answers": {
          "a": false,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "{ x = 0<br>a) Sai: Khi t = 0 thì; y = 2 nên điểm A(0;2;1) thuộc đường thẳng Δ<br>z = 1<br>b) Sai: Đường thẳng d có vectơ chỉ phương u = (−3;2;2).<br>c) Đúng: Δ đi qua điểm A(0;2;1) có vectơ chỉ phương u = (1;−3;2).<br>Đường thẳng d đi qua điểm B(1;0;2) có vectơ chỉ phương u = (−3;2;2).<br>Ta có: [u,u] = (−10;−8;−7);AB = (1;−2;1) ⇒ [u,u]·AB = −1 ≠ 0 nên Δ và d chéo nhau.<br>Δ d Δ d<br>d) Sai: Ta có các vecto chỉ phương của hai đường thẳng là u = (1;−3;2),u = (−3;2;2).<br>Δ d<br>u ·u 1·(−3) + (−3)·2 + 2·2 5<br>Khi đó: cosα = cos(u,u) = Δ d = =.<br>Δ d u · u 12 + (−3)<sup>2</sup> + 22 · (−3)<sup>2</sup> + 22 + 22 238<br>Δ d"
      },
      {
        "id": 48,
        "part": 2,
        "shortTag": "P2.3",
        "label": "Phần 2 - Câu 3",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai đường thẳng d và d′ có phương trình chính x−3 y−7 z−15 x−1 y−2 z−3 tắc lần lượt là: d: = = và d′: = =. Xét tính đúng sai của các 2 5 6 1 1 1 khẳng định sau: { x = 3 + 2t",
        "statements": {
          "a": "Phương trình tham số của d là:; y = 7 + 5t,t ∈ ℝ. z = 15 + 6t } { x = 1 + t′",
          "b": "Phương trình tham số của d′ là:; y = 2 + t′,t′ ∈ ℝ. z = 3 + t′ }",
          "c": "Hai đường thẳng d và d′ cắt nhau.",
          "d": "Góc giữa đường thẳng d và d′ là 35°."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "{ x = 3 + 2t<br>a) Đúng: Phương trình tham số của d là:; y = 7 + 5t,t ∈ ℝ.<br>z = 15 + 6t<br>{ x = 1 + t′<br>b) Đúng: Phương trình tham số của d′ là:; y = 2 + t′,t′ ∈ ℝ.<br>z = 3 + t′<br>c) Sai: Đường thẳng d có một véc tơ chỉ phương là u = (2;5;6).<br>Đường thẳng d′ có một véc tơ chỉ phương là u′ = (1;1;1). Suy ra d và d′ cắt nhau hoặc chéo<br>nhau.<br>{ 3 + 2t = 1 + t′ { 2t−t′ = −2 { t = −1<br>Xét; 7 + 5t = 2 + t′;t,t′ ∈ ℝ ⇔; 5t−t′ = −5;t,t′ ∈ ℝ ⇔; t = −7;t,t′ ∈ ℝ.<br>15 + 6t = 3 + t′ 6t−t′ = −12 6t−t′ = −12<br>} } }<br>Hệ phương trình trên vô nghiệm. Do đó hai đường thẳng d và d′ chéo nhau.<br>d) Sai: Góc giữa đường thẳng d và d′ là:<br>2·1 + 5·1 + 6·1 13<br>cos(d,d′) = cos (u,u') = =.<br>22 + 52 + 62 · 12 + 12 + 12 195<br>Suy ra (d,d′) ≈ 21°.<br>{ x = 3 + t"
      },
      {
        "id": 49,
        "part": 2,
        "shortTag": "P2.4",
        "label": "Phần 2 - Câu 4",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ:; y = 4 + 2t,t ∈ ℝ và mặt phẳng (P) có phương z = −3−t } trình 2x + y + z−1 = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Một vectơ chỉ phương của Δ là u = (3;4;−3). 3",
          "b": "sin (Δ,(P)) =. 2",
          "c": "Góc giữa Δ và (P) là: 30°.",
          "d": "Giao điểm của Δ và (P) là: M(3;4;−3)"
        },
        "answers": {
          "a": false,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "a) Sai: Một vectơ chỉ phương của Δ là u = (1;2;−1)<br>b) Sai: Một vectơ chỉ phương của Δ là u = (1;2;−1), một vectơ pháp tuyến của (P) là n = (2;1;1)<br>1.2 + 2.1 + (−1).1<br>Khi đó sin (Δ,(P)) = cos(u,n) = =.<br>12 + 22 + (−1)<sup>2</sup>. 22 + 12 + 12 2<br>c) Đúng: Một vectơ chỉ phương của Δ là u = (1;2;−1), một vectơ pháp tuyến của (P) là<br>1·2 + 2·1 + (−1)·1<br>n = (2;1;1). Khi đó sin (Δ,(P)) = cos(u,n) = =.<br>12 + 22 + (−1)<sup>2</sup> · 22 + 12 + 12 2<br>Khi đó<br>(Δ,(P))<br>= 30°.<br>d) Sai: Ta có 2.3 + (−4) + (−3)−1 = −2 ≠ 0 nên M(3;4;−3) ∉ (P).<br>x−2 y−1 z + 3"
      },
      {
        "id": 50,
        "part": 2,
        "shortTag": "P2.5",
        "label": "Phần 2 - Câu 5",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ: = = và mặt phẳng (P) có phương −1 −2 1 trình 3x + 6y−3z + 2024 = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Một vectơ chỉ phương của Δ là u = (−1;−2;1).",
          "b": "Một vectơ pháp tuyến của (P) là n = (1;2;−1).",
          "c": "Góc giữa Δ và (P) là: 90°.",
          "d": "Lấy tuỳ ý hai điểm phân biệt A,B ∈ Δ. Gọi A′,B′ lần lượt là hình chiếu của A,B lên (P). Khi đó A′B′ = 2024."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "a) Đúng: Một vectơ chỉ phương của Δ là u = (−1;−2;1).<br>b) Đúng: Một vectơ chỉ phương của (P) là n = (1;2;−1).<br>c) Đúng: Một vectơ chỉ phương của Δ là u = (−1;−2;1), một vectơ pháp tuyến của (P) là<br>(−1)·1 + (−2)·2 + 1·(−1)<br>n = (1;2;−1). Khi đó sin (Δ,(P)) = = 1.<br>(−1)<sup>2</sup> + (−2)<sup>2</sup> + 12 · 12 + 22 + (−1)<sup>2</sup><br>Vậy<br>(Δ,(P))<br>= 90°.<br>d) Sai: Vì Δ ⊥ (P) nên A′ trùng B′. Do đó A′B′ = 0.<br>{ x = 1 + 2t"
      },
      {
        "id": 51,
        "part": 2,
        "shortTag": "P2.6",
        "label": "Phần 2 - Câu 6",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ:; y = 2 + t, t ∈ ℝ và mặt phẳng (P) có phương z = −1−3t } trình 2x + y−3z−1 = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Một véc tơ chỉ phương của Δ là u = (2;0;−3).",
          "b": "Góc giữa Δ và (P) là: 150°.",
          "c": "Không có điểm chung nào giữa Δ và (P).",
          "d": "Hình chiếu của M(1;2;−1) lên (P) là: N(1;2;1)."
        },
        "answers": {
          "a": false,
          "b": false,
          "c": false,
          "d": false
        },
        "explanation": "a) Sai: Một vectơ chỉ phương của Δ là u = (2;1;−3).<br>b) Sai: Góc giữa đường thẳng và mặt phẳng không thể lớn hơn 90°.<br>c) Sai: Một vectơ chỉ phương của Δ là u = (2;1;−3), một vectơ pháp tuyến của (P) là<br>2·2 + (−1)·(−1) + 3·3<br>n = (2;1;−3). Khi đó sin (Δ,(P)) = = 1.<br>22 + (−1)<sup>2</sup> + 32 · 22 + (−1)<sup>2</sup> + 32<br>Do đó (Δ,(P)) = 90°. Vậy có điểm chung giữa Δ và (P).<br>d) Sai: Ta có Δ ⊥ (P),M(1;2;−1) ∈ Δ và MN = (0;0;2) không cùng phương với n = (2;1;−3)<br>nên đáp án sai.<br>{ x = 1 + t"
      },
      {
        "id": 52,
        "part": 2,
        "shortTag": "P2.7",
        "label": "Phần 2 - Câu 7",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho đường thẳng Δ:; y = 2 + 3t và đường thẳng 1 z = 3−t } x−2 y + 2 z−1 Δ: = =. Xét tính đúng sai của các khẳng định sau: 2 −2 1 3",
        "statements": {
          "a": "Điểm M(1;2;3) thuộc Δ và điểm N(2;−2;1) thuộc Δ. 1 2 2 154",
          "b": "cos(Δ,Δ) =. 1 2 77",
          "c": "Hai đường thẳng Δ và Δ chéo nhau. 1 2",
          "d": "Đường thẳng d đi qua điểm N(2;3;−1) đồng thời cắt và vuông góc với Δ có phương trình 2 x−2 y−3 z + 1 là = =. 2 −71 25"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Từ phương trình của Δ;Δ ta có M(1;2;3) ∈ Δ và N(2;−2;1) ∈ Δ.<br>1 2 1 2<br>1·(−2) + 3·1 + (−1)·3<br>154<br>b) Sai: Ta có cos(Δ,Δ) = =.<br>1 2 12 + 32 + (−1)<sup>2</sup> · (−2)<sup>2</sup> + 12 + 32 77<br>c) Sai: Ta có u = (1;3;−1) là vectơ chỉ phương của Δ;u = (−2;1;3) là vectơ chỉ phương của Δ<br>1 1 2 2<br>M(1;2;3) ∈ Δ và N(2;−2;1) ∈ Δ ⇒ MN = (1;−4;−2).<br>1 2<br>Do đó [u,u] = (10;−1;7) ≠ 0;[u,u]·MN = 10·1 + (−1)·(−4) + 7·(−2) = 0. Suy ra Δ và Δ<br>1 2 1 2 1 2<br>cắt nhau.<br>d) Đúng: Gọi P = d ∩ Δ và P ∈ Δ ⇒ P(−2t + 2;t−2;3t + 1) (với t ∈ ℝ)<br>2 2<br>⇒ NP = (−2t;t−5;3t + 2) mà N ∈ d,P ∈ d và d ⊥ Δ nên NP ⊥ u<br>2 2<br>⇒ NP·u = 0 ⇒ (−2t)·(−2) + (t−5)·1 + (3t + 2)·3 = 0 ⇒ t = −.<br>2 14<br>(1 71 25)<br>Do đó NP =;−; ⇒ u = (2;−71;25) là vectơ chỉ phương của d.<br>7 14 14 3<br>x−2 y−3 z + 1<br>Vậy d có phương trình là = =.<br>2 −71 25<br>x−2024 y z + 2025"
      },
      {
        "id": 53,
        "part": 2,
        "shortTag": "P2.8",
        "label": "Phần 2 - Câu 8",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ: = = và mặt phẳng 2 1 −2 (P):2x + 2y−z + 1 = 0. Xét các vectơ u = (2;1;−2),n = (2;2;−1). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "u là một vectơ chỉ phương của đường thẳng Δ.",
          "b": "n là một vectơ pháp tuyến của mặt phẳng (P). 8",
          "c": "cos (Δ,(P)) =. 9",
          "d": "Góc giữa đường thẳng Δ và mặt phẳng (P) bằng khoảng 63° (làm tròn đến hàng đơn vị của độ)."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "x−2024 y z + 2025<br>a) Đúng: Do Δ: = = nên u = (2;1;−2) là một vectơ chỉ phương của đường<br>2 1 −2<br>thẳng Δ.<br>b) Đúng: Do (P):2x + 2y−z + 1 = 0 nên n = (2;2;−1) là một vectơ pháp tuyến của đường thẳng<br>(P).<br>u·n 2.2 + 1.2−2(−1) 8<br>c) Sai: Ta có sin<br>(Δ,(P))<br>= = =<br>u ·n 22 + 12 + (−2)<sup>2</sup> 22 + 22 + (−1)<sup>2</sup> 9<br>64 17 17<br>cos<sup>2</sup>(Δ,(P)) = 1−sin<sup>2</sup>(Δ,(P))<br>= 1− = ⇒ cos<br>(Δ,(P))<br>=.<br>81 81 9<br>d) Đúng: Từ ý c) suy ra (Δ,(P)) ≈ 630.<br>{ x = 1 + t"
      },
      {
        "id": 54,
        "part": 2,
        "shortTag": "P2.9",
        "label": "Phần 2 - Câu 9",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ:; y = 2 + t,t ∈ ℝ và mặt phẳng (P) có phương z = 3 + 3t } trình x + 2y−z−2 = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Một véc tơ pháp tuyến của (P) là n = (1;2;−1).",
          "b": "Góc giữa Δ và (P) là: 60°.",
          "c": "Chỉ có một điểm chung duy nhất giữa Δ và (P).",
          "d": "Mọi điểm thuộc Δ có hình chiếu lên (P) là chính nó."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Một vectơ pháp tuyến của (P) là n = (1;2;−1).<br>b) Sai: Một vectơ chỉ phương của Δ là u = (1;1;3),<br>Một véc tơ pháp tuyến của (P) là n = (1;2;−1).<br>1·1 + 2·1 + (−1)·3<br>Khi đó sin (Δ,(P)) = = 0. Do đó (Δ,(P)) = 0°.<br>12 + 22 + (−1)<sup>2</sup> · 12 + 12 + 32<br>{ M ∈ Δ<br>M ∈ (P)<br>c) Sai:Xét M(1;2;3) và N(0;1;0), dễ thấy; do đó giữa Δ và (P) có nhiều hơn hai<br>N ∈ Δ<br>N ∈ (P)<br>điểm chung.<br>d) đúng:<br>Vì mọi điểm thuộc Δ đều thuộc (P) nên mọi điểm thuộc Δ có hình chiếu lên (P) là chính nó.<br>{ x = 3−2t"
      },
      {
        "id": 55,
        "part": 2,
        "shortTag": "P2.10",
        "label": "Phần 2 - Câu 10",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ:; y = 1 + 2t và mặt phẳng (P):x + y−5 = 0. Xét z = −5 + t } tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Vectơ u = (−2;2;1) là một vectơ chỉ phương của Δ.",
          "b": "Góc giữa hai mặt phẳng (P) và (Oyz) bằng 45°. x−2 y−3 z + 4",
          "c": "Đường thẳng đi qua N(2;3;−4) và song song với Δ có phương trình là = = −2 2 1",
          "d": "Đường thẳng d vuông góc Δ và tạo với (P) một góc 45° có một vectơ chỉ phương là u = (1;−2;4). 1"
        },
        "answers": {
          "a": true,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "{ x = 3−2t<br>a) Đúng: Từ phương trình của Δ:; y = 1 + 2t ta có u = (−2;2;1) là một vectơ chỉ phương của<br>z = −5 + t<br>Δ.<br>b) Đúng: (P):x + y−5 = 0;(Oyz):x = 0 nên ta có cos ((P),(Oyz)) =.<br>Suy ra<br>((P),(Oyz))<br>= 45°.<br>c) Đúng: Đường thẳng Δ ∥Δ nên Δ nhận u = (−2;2;1) làm vectơ chỉ phương.<br>1 1<br>x−2 y−3 z + 4<br>Hơn nữa Δ đi qua N(2;3;−4) nên có phương trình là = =.<br>1 −2 2 1<br>d) Sai: Gọi u = (a;b;c) (với a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> > 0) là một vectơ chỉ phương của d.<br>Do d ⊥ Δ nên u ⊥ u ⇒ u ·u = 0 ⇒ −2a + 2b + c = 0 ⇒ c = 2a−2b(*).<br>1 1<br>1 a + b 1<br>Hơn nữa (d,(P)) = 45° nên sin (d,(P)) = ⇔ =<br>2 2· a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> 2<br>⇔ a + b = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> ⇔ (a + b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> ⇔ c<sup>2</sup> = 2ab.<br>Thay (*) vào ta được (2a−2b)<sup>2</sup> = 2ab ⇔ 2a<sup>2</sup> −5ab + 2b<sup>2</sup> = 0(**).<br>Nếu b = 0 ⇒ a = 0;c = 0 (không thỏa mãn).<br>[a<br>= 2<br>(a) 2 (a) | b<br>Nếu b ≠ 0, ta có (**) ⇔ 2 −5 + 2 = 0 ⇔ |.<br>b b<br>a 1<br>| b 2<br>Với = 2 ⇒ a = 2b, thay vào (*) ta được c = 2b. Do đó u = (2b;b;2b) (với b ≠ 0).<br>b 1<br>a 1<br>Với = ⇒ b = 2a, thay vào (*) ta được c = −2a. Do đó u = (a;2a;−2a) (với a ≠ 0).<br>b 2 1<br>Vậy u = (1;−2;4) không là một vectơ chỉ phương. của d."
      },
      {
        "id": 56,
        "part": 3,
        "shortTag": "P3.1",
        "label": "Phần 3 - Câu 1",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ truvcj tọa độ Oxyz, cho đường thẳng d: = = và mặt phẳng 2 −1 1 (α):x−2y−2z + 5 = 0. Điểm A(a;b;c) có hoành độ dương thuộc đường thẳng d sao cho khoảng cách từ A đến (α) bằng 3. Tính tổng a + b−c?",
        "answer": "1",
        "acceptedAnswers": [
          "1"
        ],
        "kqCells": [
          "1",
          "",
          "",
          ""
        ],
        "explanation": "Điểm A có hoành độ dương thuộc đường thẳng d, tọa độ A là (2t;−t;−1 + t) với t > 0.<br>2t−2(−t)−2(−1 + t) + 5<br>Khoảng cách từ A đến (α) bằng 3 nên ta có: = 3<br>12 + (−2)<sup>2</sup> + (−2)<sup>2</sup><br>2t + 7 [t = −8(L)<br>⇔ = 3 ⇔ 2t + 7 = ±9 ⇔ |.<br>3 t = 1(TM)<br>Vậy tọa độ A là (2;−1;0) ⇒ a + b−c = 2−1−0 = 1.<br>{ x = 2t<br>x y + 1 z"
      },
      {
        "id": 57,
        "part": 3,
        "shortTag": "P3.2",
        "label": "Phần 3 - Câu 2",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz cho hai đường thẳng d: = =, d:; y = 1. Gọi φ là góc 1 −1 2 2 2 } z = 1−t a c giữa hai đường thẳng d,d. Giá trị cosφ có dạng. Tính giá trị biểu thức P = b−3a + c? 1 2 b",
        "answer": "8",
        "acceptedAnswers": [
          "8"
        ],
        "kqCells": [
          "8",
          "",
          "",
          ""
        ],
        "explanation": "Ta có u = (−1;2;2),u = (2;0;−1)<br>d d<br>1 2<br>.u<br>−1.2 + 2.0 + 2.(−1)<br>4 4 5<br>Khi đó cosφ = 1 2 = = =.<br>(−1)<sup>2</sup> + 22 + 22. 22 + 02 + (−1)<sup>2</sup> 3 5 15<br>1 2<br>Vậy a = 4,b = 15,c = 5 ⇒ b−3a + c = 15−3.4 + 5 = 8"
      },
      {
        "id": 58,
        "part": 3,
        "shortTag": "P3.3",
        "label": "Phần 3 - Câu 3",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz cho tam giác ABC có A(1;2;−1), B(2;−1;3), C(−4;7;5). Tọa độ chân đường phân giác góc • ABC của tam giác ABC là I(a;b;c). Tính tổng a + b + c?",
        "answer": "4",
        "acceptedAnswers": [
          "4"
        ],
        "kqCells": [
          "4",
          "",
          "",
          ""
        ],
        "explanation": "{ x = 1−5t<br>Ta có: Ta có phương trình đường thẳng AC là; y = 2 + 5t,(t ∈ ℝ).<br>z = −1 + 6t<br>Gọi I là chân đường phân giác góc • ABC của tam giác ABC ⇒ I(1−5t;2 + 5t;−1 + 6t).<br>Lại có BA = (−1;3;−4), BC = (−6;8;2), BI = (−5t−1;5t + 3;6t−4).<br>Vì I là chân đường phân giác góc ABC của tam giác nên ABC:<br>() () BA.BI BC.BI<br>cos BA,BI = cos BC,BI ⇔ =<br>BA. BI BC. BI<br>5t + 1 + 15t + 9 + 16−24t 30t + 6 + 40t + 24 + 12t−8 −4t + 26 82t + 22<br>⇔ = ⇔ =<br>(−1)<sup>2</sup> + 32 + (−4)<sup>2</sup> (−6)<sup>2</sup> + 82 + 22 26 104<br>1 (2 11)<br>⇔ −8t + 52 = 82t + 22 ⇔ t = ⇒ I −;;1.<br>3 3 3<br>2 11 2 11<br>Vậy a = −,b =,c = 1 ⇒ a + b + c = − + + 1 = 4<br>3 3 3 3<br>{ x = 1 + 2t"
      },
      {
        "id": 59,
        "part": 3,
        "shortTag": "P3.4",
        "label": "Phần 3 - Câu 4",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ:; y = 2 + t và (P):−x + 2y + 2z + 5 = 0. Gọi d là } z = −2−t đường thẳng đi qua điểm A(−1;0;−1) cắt đường thẳng Δ và tạo với đường thẳng Δ một góc 1 2 nhỏ nhất. Vectơ chỉ phương u = (a;b;c). Tính tổng a + 2b−3c? d",
        "answer": "9",
        "acceptedAnswers": [
          "9"
        ],
        "kqCells": [
          "9",
          "",
          "",
          ""
        ],
        "explanation": "Giả sử đường thẳng dcắt đường thẳng Δ tại B, ta có: B(1 + 2t;2 + t;−2−t) ∈ Δ.<br>1 1<br>Đường thẳng d có VTCP là: AB = (2t + 2;t + 2;−t−1), mặt phẳng (P) có VTPT n = (−1;2;2).<br>−2t−2 + 2t + 4−2t−2 2t<br>Gọi φlà góc giữa dvà Δ, ta có: sinφ = = ≥ 0, ⇒ d<br>3 6t<sup>2</sup> + 14t + 9 3 6t<sup>2</sup> + 14t + 9<br>tạo với đường thẳng Δ một góc φ nhỏ nhất khi φ = 0°hay sinφ = 0 ⇒ t = 0.<br>Khi đó đường thẳng d đi qua điểm A(−1;0;−1)và có VTCP AB = (2;2;−1).<br>Vậy a = 2,b = 2,c = −1 ⇒ a + 2b−3c = 2 + 2.2−3.(−1) = 9"
      },
      {
        "id": 60,
        "part": 3,
        "shortTag": "P3.5",
        "label": "Phần 3 - Câu 5",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (P):ax + by + cz−1 = 0với c < 0 đi qua 2 điểm A(0;1;0);B(1;0;0) và tạo với (Oyz) một góc 60°. Tính tổng a + b + c? (Làm tròn đến hàng phần trăm)",
        "answer": "0,59",
        "acceptedAnswers": [
          "0,59",
          "0.59"
        ],
        "kqCells": [
          "0",
          ",",
          "5",
          "9"
        ],
        "explanation": "{ b−1 = 0<br>Mặt phẳng (P) đi qua 2 điểm A, B nên ta có:; ⇒ a = b = 1<br>}a−1 = 0<br>a 1<br>Và (P)tạo với (Oyz) một góc 60° nên cos ((P);(Oyz)) = = (*)<br>a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>. 1 2<br>Thay a = b = 1vào phương trình (*) được: 2 + c<sup>2</sup> = 2 ⇒ c = − 2<br>Khi đó: a + b + c = 2− 2 ≈ 0,59<br>{ x = 4 + t<br>x−5 y−11 z−5"
      },
      {
        "id": 61,
        "part": 3,
        "shortTag": "P3.6",
        "label": "Phần 3 - Câu 6",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz cho hai đường thẳng d:; y = −4−t;d: = =. Đường 1 2 2 4 2 z = 6 + 2t } AB thẳng d đi quaA(5;−3;5) cắt d,d lần lượt ởB,C. Tính tỉ số 1 2 AC",
        "answer": "0,5",
        "acceptedAnswers": [
          "0,5",
          "0.5"
        ],
        "kqCells": [
          "0",
          ",",
          "5",
          ""
        ],
        "explanation": "{ x = 5 + 2s<br>B ∈ d ⇒ B(4 + t;−4−t;6 + 2t). Phương trình tham số d:; y = 11 + 4s<br>1 2<br>z = 5 + 2s<br>C ∈ d ⇒ C(5 + 2s;11 + 4s;5 + 2s). Khi đó: AB = (−1 + t;−1−t;2t + 1);AC = (2s;4s + 14;2s)<br>Do A,B,Cthẳng hàng ⇔ AB,ACcùng phương ⇔ ∃k ∈ ℝ:AB = k.AC<br>{ t−1 = 2ks t = −2<br>1 AB 1<br>⇔; −t−1 = 4ks + 14k ⇔; s = −3. Do đó ⇔ AB = AC ⇒ = = 0,5<br>2 AC 2<br>2t + 1 = 2ks 1<br>k =<br>} 2<br>x−1 y−2 z + 1"
      },
      {
        "id": 62,
        "part": 3,
        "shortTag": "P3.7",
        "label": "Phần 3 - Câu 7",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai đường thẳng d: = =, 1 2 −2 −1 { x = t d:; y = 0. Mặt phẳng (P) qua d tạo với d một góc 450 và nhận vectơ n = (1;b;c) làm một 2 1 2 z = −t } vectơ pháp tuyến. Xác định tích bc.",
        "answer": "-4",
        "acceptedAnswers": [
          "-4"
        ],
        "kqCells": [
          "-",
          "4",
          "",
          ""
        ],
        "explanation": "Ta có vectơ chỉ phương của d, d lần lượt là u = (2;−2;−1) và u = (1;0;−1).<br>1 2 1 2<br>Mặt phẳng (P) qua d ⇒ n.u = 0 ⇔ 2−2b−c = 0. (1)<br>1 1<br>u.n 1−c 2<br>sin (d,(P)) = 2 = sin45° ⇔ = ⇔ 1−c = b<sup>2</sup> + c<sup>2</sup> + 1 ⇔ b<sup>2</sup> + 2c = 0.(2)<br>2 u.n b<sup>2</sup> + c<sup>2</sup> + 1. 2 2<br>{ b = 2<br>Từ (1) và (2) ⇒; ⇒ b.c = −4.<br>}c = −2"
      },
      {
        "id": 63,
        "part": 3,
        "shortTag": "P3.8",
        "label": "Phần 3 - Câu 8",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho điểm A(3;−1;0) và đường thẳng x−2 y + 1 z−1 d: = =. Lập phương trình mặt phẳng (α) chứa d sao cho khoảng cách từ A −1 2 1 đến (α) lớn nhất. (Biết phương trình mặt phẳng (α) có dạng x + by + cz + d = 0, tính tổng b + c + d).",
        "answer": "0",
        "acceptedAnswers": [
          "0"
        ],
        "kqCells": [
          "0",
          "",
          "",
          ""
        ],
        "explanation": "Gọi H là hình chiếu của A đến d. Khi đó H(2−t;−1 + 2t;1 + t) ⇒ AH = (−1−t;2t;1 + t).<br>1 (2 2 2)<br>Do AH ⊥ d ⇒ −(−1−t) + 2.2t + 1 + t = 0 ⇔ t = −. Khi đó AH = −;−;.<br>3 3 3 3<br>Mặt phẳng (α) chứa d sao cho khoảng cách từ A đến (α) lớn nhất khi AH ⊥ (α).<br>Do đó (α) có vectơ pháp tuyến là n = (1;1;−1).<br>Vậy (α): 1(x−2) + 1(y + 1)−1(z−1) = 0 ⇔ x + y−z = 0.<br>Suy ra mặt phẳng <i>(α): x + y − z = 0</i> có <i>b = 1, c = −1, d = 0 ⇒ b + c + d = <b>0</b></i>."
      },
      {
        "id": 64,
        "part": 3,
        "shortTag": "P3.9",
        "label": "Phần 3 - Câu 9",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": null,
        "question": "Cho hai điểm A(1;−1;1); B(2;− 2;4). Có bao nhiêu mặt phẳng chứa A, B và tạo với mặt phẳng (α):x − 2y + z − 7 = 0 một góc 60°.",
        "answer": "2",
        "acceptedAnswers": [
          "2"
        ],
        "kqCells": [
          "2",
          "",
          "",
          ""
        ],
        "explanation": "Ta có: AB = (1;−1;3), n = (1;− 2;1)<br>Gọi n = (a;b;c) là vectơ pháp tuyến của mặt phẳng (β) cần lập.<br>cos((α),(β)) = cos (n, n) = n α.n β = 1.a−2.b + 1.c = 1.<br>α β n.n 12 + (−2)<sup>2</sup> + 12. a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> 2<br>α β<br>⇒ 2(a − 2b + c)<sup>2</sup> = 3 (a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>) (1)<br>Mặt khác vì mặt phẳng (β) chứa A, B nên: n.AB = 0 ⇔ a −b + 3c = 0 ⇔ a = b −3c<br>Thế vào (1) ta được: 2b<sup>2</sup> −13bc + 11c<sup>2</sup> = 0 (2)<br>Phương trình (2) có 2 nghiệm phân biệt.<br>Suy ra có 2 vectơ n = (a;b;c) thỏa mãn và có 2 mặt phẳng."
      },
      {
        "id": 65,
        "part": 3,
        "shortTag": "P3.10",
        "label": "Phần 3 - Câu 10",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, biết mặt phẳng (P):ax + by + cz + d = 0 với c < 0 đi qua hai điểm A(0;1;0), B(1;0;0) và tạo với mặt phẳng (yOz) một góc 60°. Tính giá trị a + b + c.",
        "answer": "0,59",
        "acceptedAnswers": [
          "0,59",
          "0.59"
        ],
        "kqCells": [
          "0",
          ",",
          "5",
          "9"
        ],
        "explanation": "{ b + d = 0<br>Ta có: A,B ∈ (P) nên;. Suy ra (P) có dạng ax + ay + cz−a = 0 có vectơ pháp tuyến<br>}a + d = 0<br>là n = (a;a;c).<br>Măt phẳng (yOz) có vectơ pháp tuyến là i = (1;0;0).<br>n.i 1 a<br>Ta có: cos60° = ⇔ = ⇔ 2a<sup>2</sup> + c<sup>2</sup> = 4a<sup>2</sup> ⇔ 2a<sup>2</sup> −c<sup>2</sup> = 0.<br>n.i 2 2a<sup>2</sup> + c<sup>2</sup>.1<br>Chọn a = 1, ta có: c<sup>2</sup> = 2 ⇒ c = − 2 do c < 0.<br>Ta có: a + b + c = a + a + c = 1 + 1− 2 = 2− 2.<br>Vậy <i>a + b + c = 2 − √2 ≈ <b>0,59</b></i>."
      },
      {
        "id": 66,
        "part": 3,
        "shortTag": "P3.11",
        "label": "Phần 3 - Câu 11",
        "topic": "B2.D3: Góc & Khoảng cách Oxyz",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d3_p3_q11_p70_1.png",
        "question": "Tại một nút giao thông có 2 con đường khác mức. Trên thiết kế, trong không gian Oxyz hai con x−2 y−2 z x−2 y + 1 z đường đó thuộc hai đường thẳng d: = =; d: = =. 1 1 1 −1 2 1 2 −3 Người ta muốn tạo một con đường Δ cắt d,d lần lượt tại A và B sao cho AB nhỏ nhất. Tính 1 2 độ dài AB, kết quả làm tròn đến hàng phần trăm.",
        "answer": "2,45",
        "acceptedAnswers": [
          "2,45",
          "2.45"
        ],
        "kqCells": [
          "2",
          ",",
          "4",
          "5"
        ],
        "explanation": "Ta có AB ngắn nhất khi AB là đoạn vuông góc chung của d và d.<br>1 2<br>Gọi A(2 + a;2 + a;−a) ∈ d; B(2 + b;−1 + 2b;−3b) ∈ d ⇒ AB(b−a;2b−a−3;−3b + a).<br>1 2<br>d,d lần lượt có các véc tơ chỉ phương là u = (1;1;−1) và u = (1;2;−3)<br>1 2 d d<br>1 2<br>{ AB.u d = 0 { 1(b−a) + 1(2b−a−3)−1(−3b + a) = 0 { 6b−3a−3 = 0<br>Ta có:; 1 ⇔; ⇔;<br>} AB.u<br>= 0 } 1(b−a) + 2(2b−a−3)−3(−3b + a) = 0 }14b−6a−6 = 0<br>{ a = −1 { A(1;1;1)<br>⇔; ⇒; ⇒ AB = (1;−2;−1)<br>}b = 0<br>B(2;−1;0)<br>Do đó AB = 6 ≈ 2,45."
      }
    ]
  },
  "oxyz_b2_d4": {
    "id": "oxyz_b2_d4",
    "category": "oxyz",
    "badge": "BÀI 2 • DẠNG 4",
    "title": "Bài 2 - Dạng 4: Tọa độ hóa hình học không gian & Bài toán thực tế",
    "shortTitle": "B2.D4: Tọa độ hóa & Thực tế",
    "baiTitle": "Bài 2. Phương trình đường thẳng trong không gian",
    "dangTitle": "Dạng 4: Ứng dụng phương pháp tọa độ hóa để giải bài toán HHKG và thực tế",
    "subtitle": "Bài 2. Phương trình đường thẳng trong không gian • Gồm Lý thuyết, Phương pháp, 15 Ví dụ tự luận & 38 câu Trắc nghiệm (P1: 25 • P2: 5 • P3: 8)",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">BÀI 2 • DẠNG 4</span>\n    <h4>Bài 2. Phương trình đường thẳng trong không gian — Dạng 4: Ứng dụng phương pháp tọa độ hóa để giải bài toán HHKG và thực tế</h4>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-subhead\">Dạng 4: Tọa độ hóa một số HHKG và ứng dụng thực tế</div>\n    <div class=\"oxyz-theory-subhead\">Phương pháp: Để tọa độ hóa một số hình học không gian thì ta thực hiện như sau:</div>\n    <div class=\"oxyz-theory-bullet\">• Bước 1: Chọn hệ trục tọa độ. Trong bước này ta sẽ xác định 3 đường vuông góc có trong bài</div>\n    <div class=\"oxyz-theory-line\">toán và gọi đó là 3 đường cơ sở. Thông thường thì ta sẽ quy ước trục Ox hướng vào mình, trục</div>\n    <div class=\"oxyz-theory-line\">Oy nằm ngang, còn lại là trục Oz.</div>\n    <div class=\"oxyz-theory-bullet\">• Bước 2: Xác định tọa độ các điểm liên trên hình liên quan tới bài toán. Với những bạn chưa</div>\n    <div class=\"oxyz-theory-line\">quen thì chúng ta xác định tọa độ hình chiếu của điểm cần tìm lên các trục, từ đó sẽ suy ra được</div>\n    <div class=\"oxyz-theory-line\">tọa độ điểm cần tính.</div>\n    <div class=\"oxyz-theory-bullet\">• Bước 3: Áp dụng công thức. Sau đây chúng ta sẽ nhắc lại một số công thức cần nhớ trong phần</div>\n    <div class=\"oxyz-theory-line\">này:</div>\n    <div class=\"oxyz-theory-line\">Diện tích và thể tích: Diện tích tam giác, thể tích tứ diện, thể tích hình hộp, thể tích hình lăng</div>\n    <div class=\"oxyz-theory-line\">trụ.</div>\n    <div class=\"oxyz-theory-line\">Góc: Góc giữa 2 mặt phẳng, góc giữa 2 đường thẳng, góc giữa đường thẳng và mặt phẳng.</div>\n    <div class=\"oxyz-theory-line\">Khoảng cách: Khoảng cách từ điểm đến mặt phẳng, Khoảng cách từ một điểm đến 1 đường</div>\n    <div class=\"oxyz-theory-line\">thẳng, Khoảng cách giữa hai đường thẳng chéo nhau.</div>\n    <div class=\"oxyz-theory-subhead\">Chú ý: Thông thường các bài mà không có 3 đường vuông góc thì ta sẽ phải tự dựng thêm để gắn tọa độ</div>\n    <div class=\"oxyz-theory-line\">và những bài liên quan tới hình lập phương, hình hộp chữ nhật, chối chóp có 3 đường vuông góc, lăng</div>\n    <div class=\"oxyz-theory-line\">trụ đứng thì khi áp dụng phương pháp này sẽ giải rất nhanh.</div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Bài tập tự luận 1",
        "question": "Cho hình chóp S.ABCD có đáy là hình thang vuông tại A và B biết AB = BC = a,AD = 2a. Biết rằng SA = a và vuông góc với mặt đáy (ABCD). Gọi M,N lần lượt là trung điểm của SB,CD. Tính cosin của góc giữa MN và (SAC).",
        "figure": null,
        "explanation": "Chọn hệ trục như hình vẽ, chọn đơn vị là a.<br>(1 1) (1 3)<br>Có A(0;0;0),B(1;0;0),C(1;1;0),D(0;2;0),S(0;0;1);M;0;;N;;0.<br>2 2 2 2<br>(3 1)<br>Vectơ chỉ phương của MN là 2MN = 2 0;;− = (0;3;−1).<br>2 2<br>Vectơ pháp tuyến của (SAC) là n = [AC;AS] = (1;−1;0).<br>3 3 5 (3 5) 55<br>Vậy sin<br>(MN;(SAC))<br>= = nên cos<br>(MN;(SAC))<br>= 1− =.<br>9 + 1 2 10 10 10"
      },
      {
        "id": 2,
        "label": "Bài tập tự luận 2",
        "question": "Cho hình chóp S.ABCD có đáy ABCD là hình thang cân, AD = 2AB = 2BC = 2CD = 2a. Hai mặt phẳng (SAB) và (SAD) cùng vuông góc với mặt phẳng (ABCD). Gọi M,N lần lượt là trung điểm của SB và CD. Tính cosin góc giữa MN và (SAC), biết thể tích khối chóp S.ABCD bằng bao nhiêu?",
        "figure": null,
        "explanation": "Vì ABCD là hình thang cân có AD = 2AB = 2BC = 2CD = 2a<br>a 3 a + 2a a 3 3 3a<sup>2</sup><br>Suy ra AD = 2a;AB = BC = CD = a ⇒ CH =;S = · =.<br>2 ABCD 2 2 4<br>1 3 3a<sup>2</sup> a<sup>3</sup> 3<br>Nên V = ·. SA = ⇒ SA = a<br>ABCD 3 4 4<br>Gắn hình chóp vào hệ trục tọa độ như hình vẽ dưới đây:<br>(a) (a 3) (a 3)<br>Та со́ K(0;0;0),B;0;0,C0;;0,A0;−;0,<br>2 2 2<br>(−a a 3) (a 3) (a a 3 a)<br>N;;0,S0;−;a,M;−;<br>2 2 2 4 4 2<br>(−3a 3a 3 −a) ()<br>Vectơ MN =;;. Chọn u = −3;3 3;−2 cùng phương với MN<br>4 4 2 1<br>{ BK ⊥ SA<br>Nhận xét; ⇒ BK ⊥ (SAC)<br>}BK ⊥ AC<br>(a)<br>Vectơ BK =;0;0 là VTPT của (SAC) nên ta chọn n = (1;0;0) cùng phương với BK<br>2 1<br>u ·n<br>3 10 310<br>Gọi α là góc góc giữa MN và (SAC) khi đó sinα = 1 1 = ⇒ cosα =.<br>u ||u ∣ 20 20<br>1 2"
      },
      {
        "id": 3,
        "label": "Bài tập tự luận 3",
        "question": "Cho hình lăng trụ đứng ABC.A′B′C′ có AB = AC = a,BAC = 120°,AA′ = a. Gọi M,N lần lượt là trung điểm của B′C′ và CC′. Số đo góc giữa mặt phẳng (AMN) và mặt phẳng (ABC) bằng",
        "figure": null,
        "explanation": "Thiết lập hệ toạ độ Oxyz trong không gian như hình vẽ, gốc toạ độ O trùng M.<br>a 3 a (a 3 a)<br>Dễ dàng tính được MB′ = MC′ =;MA′ = và M(0;0;0),N ∈ (Oyz) ⇒ N0;−;<br>2 2 2 2<br>(a)<br>Ta có: A ∈ (Oxz) ⇒ A;0;a và (ABC)∥(A′B′C′);(A′B′C′) ≡ (Oxy)<br>Suy ra mặt phẳng (ABC) có một vectơ pháp tuyến là k = (0;0;1)<br>(a) (a 3 a) ()<br>Ta có MA;0;0 cùng phương u = (1;0;2);MN0;−; cùng phương u = 0;− 3;1<br>2 1 2 2 2<br>()<br>Mặt phẳng (AMN) có một vecto pháp tuyến n = [u,u] = 2 3;−1;− 3<br>1 2<br>Khi đó: cos<br>((AMN),(ABC))<br>= cos<br>,n"
      },
      {
        "id": 4,
        "label": "Bài tập tự luận 4",
        "question": "Cho hình chóp S.ABC có đáy ABC là tam giác vuông cân tại B,BC = a. Cạnh bên SA vuông góc với đáy và SA = a 3. Gọi M là trung điểm AC. Tính cot góc của hai mặt phẳng (SBM) và (SAB)",
        "figure": null,
        "explanation": "Chọn hệ trục tọa độ như hình vẽ<br>Khi đó ta có tọa độ các điểm như sau: B(0;0;0);A(a;0;0);C(0;a;0);S (a;0,a 3);M (a; a;0)<br>2 2<br>(()) (a) a<sup>2</sup> ()<br>Ta có: n (SAB) = (0;1;0);n (SBM) = [SB,MB] = a 1;0, 3 ∧ 2 (1;1;0) = 2 − 3; 3;1<br>n.n<br>Đặt góc (SBM) và (SAB) là α, khi đó ta có: cosα =<br>(SAB)<br>(SMB) = 21<br>n.n 7<br>(SAB) (SMB)<br>(21) 2 7 cosα 3<br>Khi đó sinα = 1− = ⇒ cotα = =.<br>7 7 sinα 2"
      },
      {
        "id": 5,
        "label": "Bài tập tự luận 5",
        "question": "Cho hình tứ diện EFGH có EF vuông góc với EG, EG vuông góc với EH, EH vuông góc với EF. Biết EF = 6a, EG = 8a, EH = 12a (với a > 0,a ∈ ℝ). Gọi I,J tương ứng là trung điểm của hai cạnh FG,FH. Tính khoảng cách d từ điểm F đến mặt phẳng (EIJ) theo a.",
        "figure": null,
        "explanation": "Vì EF vuông góc với EG, EG vuông góc với EH nên EG ⊥ (EFH). Gọi K là trung điểm<br>của EF suy ra IK ⊥ (EFH). Chọn hệ trục tọa độ Oxyz như hình vẽ<br>Khi đó ta có: K(0;0;0),I(0;0;4a),E(3a;0;0),J(0;6a;0).<br>x y z<br>Phương trình mặt phẳng (EIJ): + + = 1 ⇔ 4x + 2y + 3z−12a = 0.<br>3a 6a 4a<br>12a 24a 24 29a<br>Vậy d =<br>(F,(EIJ))<br>= 2d<br>(K,(EIJ))<br>= 2 = =.<br>4 + 9 + 16 29 29"
      },
      {
        "id": 6,
        "label": "Bài tập tự luận 6",
        "question": "Cho lăng trụ đứng ABC.A′B′C′ có đáy là tam giác ABC vuông cân tại A, cạnh BC = a 6. Góc giữa mặt phẳng (AB′C) và mặt phẳng (BCC′B′) bằng 60°. Tính thể tích V của khối lăng trụ ABC.A′B′C′.",
        "figure": null,
        "explanation": "Gọi chiều cao của hình lăng trụ là h.<br>() () ()<br>Đặt hệ trục tọa độ Axyz như hình vẽ. Khi đó A(0;0;0),B a 3;0;0,C 0;a 3;0,B′ a 3;0;h<br>(a 3 a 3)<br>Suy ra M;;0 là trung điểm của BC.<br>2 2<br>(a 3 a 3)<br>Vì AM ⊥ (BCC′B′) và AM =;;0 nên n = (1;1;0) là vectơ pháp tuyến của mặt<br>2 2<br>phẳng (BCC′B′).<br>() ()<br>Ta có: [AC,AB′] = ah 3;0;−3a<sup>2</sup> ⇒ n = h;0;− 3a là vectơ pháp tuyến của (AB′C).<br>Theo giả thiết góc giữa (AB′C) và mặt phẳng (BCC′B′) bằng 60°<br>() 1 h<br>Tức là: cos60° = cos n,n ⇒ = ⇒ h = 3a<br>1 2 2. h<sup>2</sup> + 3a<sup>2</sup><br>3a<sup>3</sup> 3<br>Vậy thể tích của khối lăng trụ ABC.A′B′C′ là V =."
      },
      {
        "id": 7,
        "label": "Bài tập tự luận 7",
        "question": "Cho hình chóp tứ giác đều S.ABCD có tất cả các cạnh bẳng nhau. Gọi E,M lần lượt là trung điểm các cạnh BC, SA và α là góc tạo bởi đường thẳng EM và mặt phẳng (SBD). Tính tanα",
        "figure": null,
        "explanation": "Chọn hệ trục tọa độ Oxyz sao cho Ox ≡ OC,Oy ≡ OB,Oz ≡ OS. Chọn OA = 1<br>Ta có C(1;0;0),A(−1;0;0) ⇒ (SBD) nhận AC = (2;0;0) là một vectơ pháp tuyến.<br>{ S(0;0;1)<br>(1 1)<br>Từ SA = AB = OA 2 = 2 ⇒ SO = SA<sup>2</sup> −OA<sup>2</sup> = 1 ⇒; ⇒ M−;0;<br>} A(−1;0;0) 2 2<br>{ C(1;0;0)<br>(1 1)<br>(1 1)<br>Ta có; ⇒ E;;0 ⇒ EM nhận ME = 1;;− là một vectơ chỉ phương.<br>} B(0;1;0) 2 2 2 2<br>ME.AC<br>2 6<br>Suy ra:sin<br>(EM;(SBD))<br>= sinα = = =<br>ME.AC 2 2 3<br>(1) (1)<br>12 + + −.2<br>2 2<br>⇒ cosα = ⇒ tanα = 2."
      },
      {
        "id": 8,
        "label": "Bài tập tự luận 8",
        "question": "Cho hình lập phương ABCD·A′B′C′D′ có cạnh bằng a. Gọi K là trung điểm của DD′. Khoảng cách giữa hai đường thẳng CK và A′D bằng bao nhiêu?",
        "figure": null,
        "explanation": "(1)<br>Chọn a = 1 ta có hệ trục tọa độ Oxyz sao cho D(0;0;0),A′(1;0;1),K0;0; và C(0;1;0)<br>(1) (1)<br>Ta có DA′ = (1;0;1);CK 0;−1; và DK 0;0;<br>2 2<br>(1) 1<br>Khi đó [DA′;CK] = 1;−;−1,[DA′;CK].DK = −<br>2 2<br>1 1<br>− −<br>2 2 1<br>Do đó: d(A′D;CK) = = =.<br>2 1 3<br>1 + (− 1) + (−1)<sup>2</sup> 1 + + 1"
      },
      {
        "id": 9,
        "label": "Bài tập tự luận 9",
        "question": "Cho hình chóp S.ABCD có đáy ABCD là hình chữ nhật, biết rằng AB = a,BC = a 3, SA = a và SA vuông góc với đáy ABCD. Hãy tính sin α, với α là góc tạo bởi giữa đường thẳng BD và mặt phẳng (SBC).",
        "figure": null,
        "explanation": "()<br>Đặt hệ trục tọa độ Oxyz như hình vẽ. Khi đó, ta có: A(0;0;0),B(a;0;0),D 0;a 3;0,S(0;0;a)<br>() () ()<br>BD = −a;a 3;0 = a −1; 3;0 nên đường thẳng BD có vectơ chỉ phương là u = −1; 3;0.<br>() ()<br>Ta có: SB = (a;0;−a),BC = 0;a 3;0 ⇒ [SB,BC] = a<sup>2</sup> 3;0;a<sup>2</sup> 3 = a<sup>2</sup> 3(1;0;1).<br>Như vậy, mặt phẳng (SBC) có vectơ pháp tuyến là n = (1;0;1).<br>Do đó, α là góc tạo bởi giữa đường thẳng BD và mặt phẳng (SBC) thì<br>u.n (−1).1 + 3.0 + 0.1 2<br>sinα = = =<br>u.n (−1)<sup>2</sup> + 3 2 + 02. 12 + 02 + 12 4"
      },
      {
        "id": 10,
        "label": "Bài tập tự luận 10",
        "question": "Cho hình chóp S.ABCD có đáy ABCD là hình vuông cạnh a. Cạnh bên SA vuông góc với đáy. Góc giữa SC và mặt đáy bằng 45°. Gọi E là trung điểm BC. Tính khoảng cách giữa hai đường thẳng DE và SC.",
        "figure": null,
        "explanation": "Ta có thể đưa ra các cách giải như sau:<br>Do SAC là tam giác vuông có góc SCA = 45° nên SA = AC = a 2,SC = 2a,SB = SD = a 3.<br>Chọn hệ trục tọa độ Oxyz sao cho tia Ox,Oy,Oz lần lượt trùng với các tia AB,AD,AS.<br>(a) ()<br>Khi đó tọạ độ điểm các điểm là D(0;a;0),E a;;0,C(a;a;0),S 0;0;a 2<br>(a) ()<br>Do đó: DE = a;−;0,SC = −a;−a;a 2,DC = (a;0;0)<br>(a<sup>2</sup> 2 3a<sup>2</sup>) [DE;SC]·DC a 38<br>Suy ra [DE;SC] = −;−a<sup>2</sup> 2;− ⇒ d(DE;SC) = =<br>2 2 [DE;SC] 19"
      },
      {
        "id": 11,
        "label": "Bài tập tự luận 11",
        "question": "Cho hình chóp S.ABCD có đáy ABCD là hình vuông cạnh bằng 10. Cạnh bên SA vuông góc với mặt phẳng (ABCD) và SC = 10 5. Gọi M,N lần lượt là trung điểm của SA và CD. Tính khoảng cách d giữa BD và MN.",
        "figure": null,
        "explanation": "Xét tam giác vuông SAC có: SA = SC<sup>2</sup> − AC<sup>2</sup> = 500−200 = 10 3.<br>Chọn hệ trục tọa độ như hình vẽ<br>()<br>Ta có A(0;0;0),M 0;0;5 3,B(10;0;0),D(0;10;0),C(10;0;0),N(5;10;0)<br>{ MN = (5;10;−5 3) ⇒ u = (1;2;− 3)<br>∣u,u]ND∣<br>; BD = (−10;10;0) ⇒ u = (−1;1;0) ⇒ d(MN,BD) = 1 2 = 5.<br>2 ∣u 1,u 2]<br>()<br>[u;u] = 3; 3;3,ND = (−5;0;0)<br>} 1 2"
      },
      {
        "id": 12,
        "label": "Bài tập tự luận 12",
        "question": "Cho lăng trụ tứ giác đều ABCD.ABCD cạnh đáy bằng 1 và chiều cao bằng x. Tìm x để góc 1 1 1 1 tạo bởi đường thẳng BD và (BDC) đạt giá trị lớn nhất. 1 1 1",
        "figure": null,
        "explanation": "Chọn hệ trục tọa độ Oxyz sao cho O ≡ D,C thuộc tia Ox,A thuộc tia Oy,D thuộc tia Oz (như<br>1 1 1<br>hình vẽ).<br>Khi đó D (0;0;0),B (1;1;0),D(0;0;x),C(1;0;x).<br>1 1<br>Mặt phẳng (BDC) nhận véctơ n = [DB,DC] = (x;−x;−1) là véctơ pháp tuyến<br>1 1 1 1 1<br>Đường thẳng BD nhận véctơ u = (1;1;−x) là véctơ chỉ phương.<br>Gọi φ là góc giữa BD và (BDC), suy ra:<br>1 1 1<br>x−x + x x<br>sinφ = = (x > 0)<br>x<sup>2</sup> + (−x)<sup>2</sup> + 1. 12 + 12 + x<sup>2</sup> (2x<sup>2</sup> + 1)(x<sup>2</sup> + 2)<br>1 1 1 1<br>= = ≤ =.<br>(1)(2) (1) 1 3<br>2x + x + 2x<sup>2</sup> + + 5 2·2 x<sup>2</sup>· + 5<br>x x x<sup>2</sup> x<sup>2</sup><br>Dấu đẳng thức xảy ra khi x = 1 và góc φ lớn nhất ⇔ sinφ lớn nhất ⇔ x = 1.<br>Vậy góc tạo bởi đường thẳng BD và (BDC) đạt giá trị lớn nhất khi x = 1.<br>1 1 1"
      },
      {
        "id": 13,
        "label": "Bài tập tự luận 13",
        "question": "Một kĩ sư xây dựng thiết kế khung một ngôi nhà trong không gian Oxyz như hình dưới đây nhờ một phần mềm đồ họa máy tính. a) Viết phương trình mặt phẳng mái nhà (DEMN). b) Tính khoảng cách từ điểm B đến mái nhà (DEMN).",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_tuluan_q13_p72_1.png",
        "explanation": "a) Mặt phẳng (DEMN) có cặp vectơ chỉ phương là DE = (6;0;0),DN = (0;2;2).<br>Ta có [DE,DN] = (0;−12;12) nên suy ra (DEMN) có vectơ pháp tuyến là:<br>n = − [DE,DN] = (0;1;−1)<br>12<br>Phương trình của mặt phẳng (DEMN) là: y−z + 4 = 0.<br>4 + 4 8<br>b) Điểm B(6;4;0) nên suy ra d (B,(DEMN)) = = = 4 2.<br>02 + 12 + (−1)<sup>2</sup> 2"
      },
      {
        "id": 14,
        "label": "Bài tập tự luận 14",
        "question": "Người ta muốn dựng một cột ăngten trên một sườn đồi. Ăngten được dựng thẳng đứng trong không gian Oxyz với độ dài đơn vị trên mỗi trục bằng 1m. Gọi O là gốc cột, A là điểm buộc dây cáp vào cột ăngten và M,N là hai điểm neo dây cáp xuống mặt sườn đồi (hình vẽ). Cho biết tọa độ các điểm nói trên lần lượt là O(0;0;0),A(0;0;6),M(3;−4;3), N(−5;−2;2). a) Tính độ dài các đoạn dây cáp MA và NA. b) Tính góc tạo bởi các sợi dây cáp MA,NA với mặt phẳng sườn đồi.",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_tuluan_q14_p73_1.png",
        "explanation": "a) Ta có MA = (−3;4;3),NA = (5;2;4) suy ra MA = (−3)<sup>2</sup> + 42 + 32 = 34 ≈ 5,8 m<br>Khi đóNA = 52 + 22 + 42 = 45 ≈ 6,7 m.<br>b) Mặt phẳng (OMN) có cặp vectơ chỉ phương là OM = (3;−4;3),ON = (−5;−2;2) nên có vectơ<br>pháp tuyến n = [OM,ON] = (−2;−21;−26).<br>Gọi α,β lần lượt là góc tạo bởi MA,NA với mặt phẳng (AMN).<br>MA.n −3.(−2) + 4.(−21) + 3.(−26)<br>156<br>Ta có: sinα = = = ⇒ α ≈ 53°<br>MA.n (−3)<sup>2</sup> + 42 + 32. (−2)<sup>2</sup> + (−21)<sup>2</sup> + (−26)<sup>2</sup> 38114<br>NA.n 5.(−2) + 2.(−21) + 4.(−26)<br>156<br>Khi đó: sinβ = = = = ⇒ β ≈ 44°<br>NA.n 52 + 22 + 42. (−2)<sup>2</sup> + (−21)<sup>2</sup> + (−26)<sup>2</sup> 50445"
      },
      {
        "id": 15,
        "label": "Bài tập tự luận 15",
        "question": "Một khuôn nướng bánh mì được mô phỏng trong không gian Oxyz như hình minh họa dưới đây với S(0;0;0),P(8;0;0),Q(8;18;0),T(−1;−1;7),R(9;19;7). Tính góc giữa hai cạnh kề nhau, giữa cạnh bên và mặt đáy, giữa mặt bên và mặt đáy của khuôn.",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_tuluan_q15_p73_2.png",
        "explanation": "a) Tính góc giữa hai cannh kề nhau: SP = (8;0;0); SH = (0;18;0);ST = (−1;−1;7)<br>()<br>Ta có: SP.SH = 0 ⇒ SP;SH = 90°<br>SP.ST<br>cos(SP,ST) = = ⇒ (SP,ST) ≈ 82°<br>SP.ST 51<br>SH.ST<br>cos(SH,ST) = = ⇒ (SH,ST) ≈ 82°<br>SH.ST 51<br>b) Tính góc giữa cạnh bên và mặt đáy. Gọi α là góc giữa cạnh bên ST và mặt phẳng đáy.<br>ST.k<br>Khi đó: sinα = = ⇒ α ≈ 78°<br>ST.k 51<br>c) Tính góc giữa mặt bên và mặt đáy. Gọi β là góc giữa mặt bên và mặt phẳng đáy.<br>n.k 2<br>Khi đó: n = [ST,SP] = (0;56;8) ⇒ cosβ = = ⇒ β ≈ 82°.<br>n.k 10"
      }
    ],
    "questions": [
      {
        "id": 1,
        "part": 1,
        "shortTag": "P1.1",
        "label": "Phần 1 - Câu 1",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho tứ diện OABC có OA, OB, OC đôi một vuông góc và OA = OB = 2a, OC = a 2. Khoảng cách từ điểm O đến mặt phẳng (ABC) bằng a 3a",
        "options": {
          "A": "a 2",
          "B": "a",
          "C": "",
          "D": ".... 2 4"
        },
        "answer": "B",
        "explanation": "Xét hệ trục tọa độ Oxyz như sau điểm O là gốc tọa độ OA ≡ Oz; OB ≡ Ox và OC ≡ Oy.<br>()<br>Khi đó ta có O(0;0;0); A(0;0;2a); B(2a;0;0) và C 0;a 2;0.<br>x y z<br>Phương trình mặt phẳng (ABC) là + + = 1 ⇔ x + 2y + z−2a = 0.<br>2a a 2 2a<br>0 + 2.0 + 0−2a<br>Khoảng cách từ điểm O đến mặt phẳng (ABC) là d(O,(ABC)) = = a.<br>1 + 2 + 1"
      },
      {
        "id": 2,
        "part": 1,
        "shortTag": "P1.2",
        "label": "Phần 1 - Câu 2",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình lập phương ABCDABCD cạnh bằng a. Khoảng cách giữa AB và BC bằng 1 1 1 1 1 1 a a",
        "options": {
          "A": ".",
          "B": ".",
          "C": "a 3.",
          "D": "a 6. 3 6"
        },
        "answer": "A",
        "explanation": "Đặt a = 1. Chọn B A là trục Ox, BC là trục Oy, BB là trục Oz<br>1 1 1 1 1<br>Suy ra B (0;0;0),A (1;0;0),C (0;1;0),B(0;0;1),C(0;1;1)<br>1 1 1<br>Ta có AB = (−1;0;1),BB = (0;0;1),BC = (0;1;1)<br>1 1 1<br>[AB,BC].BB<br>Vậy d(AB,BC) = 1 1 1 = 1<br>1 1<br>[AB,BC] 3<br>1 1"
      },
      {
        "id": 3,
        "part": 1,
        "shortTag": "P1.3",
        "label": "Phần 1 - Câu 3",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai mặt phẳng 4x−4y + 2z−1 = 0 và 2x−2y + z + 1 = 0chứa hai mặt của hình lập phương. Thể tích khối lập phương đó bằng 1 1 1 1",
        "options": {
          "A": "V =.",
          "B": "V =.",
          "C": "V =.",
          "D": "V =. 27 8 3 3 2 2"
        },
        "answer": "B",
        "explanation": "Giả sử (P):4x−4y + 2z−1 = 0, (Q):2x−2y + z + 1 = 0. Ta thấy (P)∥(Q). Mặt khác lấy điểm<br>M(0;0;−1) ∈ (Q). Gọi a là độ dài cạnh hình lập phương<br>−3 1 (1) 3 1<br>Khi đó ta có: a = d((P),(Q)) = d(M;(P)) = = nên V = a<sup>3</sup> = =.<br>42 + 42 + 22 2 2 8"
      },
      {
        "id": 4,
        "part": 1,
        "shortTag": "P1.4",
        "label": "Phần 1 - Câu 4",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình chóp S.ABCDcó đáy ABCD là tam giác vuông với AB = AC = 2. Cạnh bên SA vuông góc với đáy và SA = 3. Gọi M là trung điểm của SC. Tính khoảng cách giữa AM và BC. 3 2 3 3 22 22",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": ". 2 3 11 6"
        },
        "answer": "C",
        "explanation": "Gắn hệ trụ tọa độ ta có A(0;0;0) là gốc tọa độ, S(0;0;3),B(2;0;0),C(0;2;0).<br>(3) (3)<br>Điểm M 0;1;. Ta có AM = 0;1;,BC = (−2;2;0). Gọi n = [AM,BC] = (−3;−3;2)<br>2 2<br>Gọi (P) là mặt phẳng qua B(2;0;0) nhận n = (−3;−3;2) làm vectơ pháp tuyến.<br>−3.0−3.0 + 2.0 + 6 3 22<br>(P):−3x−3y + 2z + 6 = 0. Ta có d(AM,BC) = d(A,(P)) = =.<br>(−3)<sup>2</sup> + (−3)<sup>2</sup> + 22 11"
      },
      {
        "id": 5,
        "part": 1,
        "shortTag": "P1.5",
        "label": "Phần 1 - Câu 5",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình chóp S.ABC có AB = a, AC = a 3, SB > 2a và • ABC = B • AS = B • CS = 900. Biết sin 11 của góc giữa đường thẳng SB và mặt phẳng (SAC) bằng. Tính thể tích khối chóp S.ABC 11 a<sup>3</sup> 6 a<sup>3</sup> 3 2a<sup>3</sup> 3 a<sup>3</sup> 6",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": ". 6 9 9 3"
        },
        "answer": "A",
        "explanation": "Gọi H là hình chiếu vuông góc của S trên mặt phẳng (ABC).<br>{ AB ⊥ BC<br>Ta có SH ⊥ (ABC) ⇒ SH ⊥ AB và SH ⊥ BC mà • ABC = B • AS = B • CS = 90° ⇒; AB ⊥ SA.<br>BC ⊥ SC<br>Suy ra AB ⊥ (SHA) ⇒ AB ⊥ AH và BC ⊥ (SHC) ⇒ BC ⊥ HC nên tứ giác ABCH là hình chữ<br>nhật. Suy ra BC = AC<sup>2</sup> − AB<sup>2</sup> = a 2.<br>Gắn hệ trục toạ độ như hình vẽ ta có H(0;0;0),A (a 2;0;0),B (a 2;a;0),C(0;a;0).<br>() ()<br>Giả sử SH = x(x > 0) ⇒ S(0;0;x). Ta có AC = −a 2;a;0,SA = a 2;0;−x<br>() () ()<br>⇒ [AC,SA] = −ax;−ax 2;−a<sup>2</sup> 2 //n = x;x 2;a 2 mà SB = a 2;a;−x.<br>Suy ra sin (SB,(SAC)) = cos (S B,n) = S B.n ⇔ 11 = xa 2 + xa 2−xa 2<br>SB.n 11 3x<sup>2</sup> + 2a<sup>2</sup>. 3a<sup>2</sup> + x<sup>2</sup><br>⇔ 3x<sup>2</sup> + 2a<sup>2</sup>. 3a<sup>2</sup> + x<sup>2</sup> = 11 xa 2 ⇔ (3x<sup>2</sup> + 2a<sup>2</sup>)(3a<sup>2</sup> + x<sup>2</sup>) = 11 (2a2x<sup>2</sup>)<br>⇔ 9a2x<sup>2</sup> + 3x4 + 6a4 + 2a2x<sup>2</sup> = 22x2a<sup>2</sup> ⇔ 3x4 −11x2a<sup>2</sup> + 6a4 = 0 ⇔ (3x<sup>2</sup> −2a<sup>2</sup>)(x<sup>2</sup> −3a<sup>2</sup>) = 0<br>[2<br>x<sup>2</sup> = a<sup>2</sup><br>⇔ 3. HB = AC = a 3 nên với SH = x<sup>2</sup> = 3a<sup>2</sup> ⇒ SB = SH<sup>2</sup> + HB<sup>2</sup> = a 6 > 2a<br>| x<sup>2</sup> = 3a<sup>2</sup><br>1 a<sup>2</sup> 2<br>(thoả mãn). Do đó SH = a 3. Diện tích của tam giác ABC là S = AB.BC =.<br>ΔABC 2 2<br>1 1 a<sup>2</sup> 2 a<sup>3</sup> 6<br>Vậy V =.SH.S =.a 3. =.<br>S.ABC 3 ΔABC 3 2 6"
      },
      {
        "id": 6,
        "part": 1,
        "shortTag": "P1.6",
        "label": "Phần 1 - Câu 6",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình lập phương ABCD.A′B′C′D′ có cạnh bằng 2a. Tính góc giữa CC′ và mặt phẳng (AB′C′)",
        "options": {
          "A": "60°.",
          "B": "30°.",
          "C": "45°.",
          "D": "90°. Chọn hệ trục Oxyznhư hình vẽ Gắn tọa độ A(0;0;0), C(2;2;0), B'(2;0;2), C'(2;2;2). Ta có AB′ = (2;0;2), AC′ = (2;2;2) suy ra n = [AB′;AC′] = (−4;0;4), CC′ = (0;0;2). (AB′C′) sin(CC';(AB'C')) = cos (C C ';n) = C C '.n (A B 'C ') = −4.0 + 0.0 + 4.2 = 2 (AB'C') CC'.n 02 + 02 + 22. (−4)<sup>2</sup> + 02 + 42 2 (AB'C') Vậy (CC′;(AB′C′)) = 45°"
        },
        "answer": "C",
        "explanation": ""
      },
      {
        "id": 7,
        "part": 1,
        "shortTag": "P1.7",
        "label": "Phần 1 - Câu 7",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình lăng trụ tam giác đều ABC.A′B′C′ có tất cả các cạnh bẳng nhau. Gọi α là góc tạo bởi hai mặt phẳng (C′AB) và (BCC′B′). Giá trị tanα bằng 6 2 3",
        "options": {
          "A": "6.",
          "B": "2.",
          "C": ".",
          "D": ". 2 3"
        },
        "answer": "A",
        "explanation": "Giả sử lăng trụ tam giác đều ABC.A′B′C′ có tất cả các cạnh bằng 1.<br>Chọn hệ trục Oxyz, với O là trung điểm AC, B ∈ Ox, C ∈ Oy.<br>(1) (3) (1) (3) (1)<br>Ta có A<br>0;−;0<br>, B<br>;0;0<br>, C<br>0;;0<br>, B<br>;0;1<br>, C'<br>0;;1<br>2 2 2 2 2<br>(3 1) (3 1)<br>AB =;;0, BC′ = −;;1, CC′ = (0;0;1)<br>2 2 2 2<br>(1 3 3)<br>Mặt phẳng (C′B) có vectơ pháp tuyến n = [AB,BC′] =;−;.<br>1 2 2 2<br>(1 3)<br>Mặt phẳng (BCC′B′) có vectơ pháp tuyến n = [BC′,CC′] =;;0.<br>2 2 2<br>1 1 (3) 3 3<br>. + −. +.0<br>n 1.n 2 2 2 2 2 2 7<br>Ta có cosα = = =.<br>n.n 1 3 3 1 3 7<br>1 2 + +. + + 0<br>4 4 4 4 4<br>1 1 1<br>Ta lại có 1 + tan2α = ⇒ tanα = −1 = −1 = 6.<br>cos2α cos2α<br>(7)"
      },
      {
        "id": 8,
        "part": 1,
        "shortTag": "P1.8",
        "label": "Phần 1 - Câu 8",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình lập phương ABCD.A′B′C′D′ cạnh bằng a. Gọi K là trung điểm DD′. Tính khoảng cách giữa hai đường thẳng CK và A′D. 2a 4a 3a a",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": ". 3 3 4 3"
        },
        "answer": "D",
        "explanation": "Gọi M là trung điểm BB′ thì ta có CK∥A′M ⇒ CK∥(A′MD)<br>Suy ra d(CK,A′D) = d(CK,(A′MD)) = d(C,(A′MD))<br>Chọn trục toạ độ như hình vẽ:<br>(a)<br>Ta có A(0;0;0),B(a;0;0),D(0;a;0),A′(0;0;a),C(a;a;0),B′(a;0;a),M a;0;<br>(a) (a<sup>2</sup>)<br>Khi đó A′M =<br>a;0;−<br>,A′D = (0;a;−a) ⇒<br>[A′M,A′D<br>] =;a<sup>2</sup>;a<sup>2</sup>.<br>2 2<br>Suy ra mặt phẳng (A′MD) có một vectơ pháp tuyến là (1;2;2)<br>Phương trình mặt phẳng (A′MD) có dạng: x + 2y + 2z−2a = 0.<br>a + 2a−2a a<br>Vậy d<br>(C,(A′MD))<br>= =.<br>3 3"
      },
      {
        "id": 9,
        "part": 1,
        "shortTag": "P1.9",
        "label": "Phần 1 - Câu 9",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho lăng trụ đứng ABCD.A′B′C′D′ có đáy ABCD là hình thoi tâm O cạnh a, AA′ = a và góc • ABC = 60°. Gọi M là trung điểm của cạnh AA′. Khoảng cách giữa hai đường thẳng MO và C′D bằng 3 5 3 5 2 5 2 5",
        "options": {
          "A": "a.",
          "B": "a.",
          "C": "a.",
          "D": "a. 10 5 12 5"
        },
        "answer": "A",
        "explanation": "Dựng hệ trục tọa độ như hình vẽ.<br>Gọi O là giao điểm của AC và BD. Chọn a = 1.<br>(1 1) (3) (1)<br>Dễ dàng tính được O(0;0;0), M<br>−;0;<br>, D<br>0;;0<br>và C′<br>;0;1<br>2 2 2 2<br>(1 1) (1 3) (1)<br>Suy ra OM =<br>−;0;<br>, C′D =<br>−;;−1<br>và OC′ =<br>;0;1<br>2 2 2 2 2<br>(3 −3 − 3)<br>Khi đó [OM,C′D] = −;;.<br>4 4 4<br>− 3 − 3<br>OM,C′D]<br>.OC′<br>8 4 3 5 3a 5<br>Khi đó khoảng cách: d(OM;C′D) = = = =.<br>[OM,C′D] 3 9 3 10 10<br>+ +<br>16 16 16"
      },
      {
        "id": 10,
        "part": 1,
        "shortTag": "P1.10",
        "label": "Phần 1 - Câu 10",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình lập phương ABCD.A′B′C′D′ có độ dài cạnh bằng 1. Gọi M, N,P,Q, lần lượt là trung điểm của các cạnh AB,BC,C′D′ và DD′. Thể tích khối tứ diện MNPQ là 1 1 3 1",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": ". 12 8 8 24"
        },
        "answer": "A",
        "explanation": "Chọn hệ trục tọa độ Oxyz sao cho: D′ ≡ O;Ox ≡ D′A′;Oy ≡ D′C′;Oz ≡ D′D.<br>Khi đó: A(1;0;1), B(1;1;1), C(0;1;1), D(0;0;1), A′(1;0;0), B′(1;1;0), C′(0;1;0)<br>(1) (1) (1) (1)<br>Ta có: M 1;;1, N;1;1, P 0;;0, Q 0;0;.<br>2 2 2 2<br>(−1 1) (−1 −1)<br>Ta có: MN;;0, MP(−1;0;−1), MQ −1;;<br>2 2 2 2<br>1 1 1 1 1 1<br>[MN,MP].MQ = + − = ⇒ V =.[MN,MP].MQ =.<br>2 4 4 2 MNPQ 6 12"
      },
      {
        "id": 11,
        "part": 1,
        "shortTag": "P1.11",
        "label": "Phần 1 - Câu 11",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình chóp S.ABC có đáy ABC là tam giác vuông cân tại A và AB = a, cạnh bên SA vuông góc với mặt phẳng đáy và SA = a. Gọi D, E, F lần lượt là điểm đối xứng của A qua C, của S qua B và của A qua mặt phẳng (SBC). Thể tích của khối tứ diện ADEF bằng 2a<sup>3</sup> 2 3a<sup>3</sup> a<sup>3</sup> 3a<sup>3</sup>",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": ". 3 3 3 3"
        },
        "answer": "A",
        "explanation": "Chọn hệ trục tọa độ Axyz như hình vẽ với độ dài vectơ đơn vị bằng a, ta được tọa độ các điểm<br>như sau:<br>A(0;0;0), B(1;0;0), C(0;1;0), S(0;0;1) ⇒ D(0;2;0), E(2;0;−1).<br>(1 1 1)<br>Gọi H là trọng tâm tam giác SBC ⇒ H;;. Vì tam giác SBC là tam giác đều nên H<br>3 3 3<br>cũng là trực tâm của tam giác SBC ⇒ AH ⊥ (SBC) ⇒ F là điểm đối xứng với A qua H<br>(2 2 2)<br>⇒ F;;.<br>3 3 3<br>(2 2 2)<br>Ta tính được: AD = (0;2;0), AE = (2;0;−1), AF =;; ⇒ [AD,AE] = (−2;0;−4)<br>3 3 3<br>1 1 2 2 2 2<br>Khi đó: V = [AD,AE].AF =.−2. + 0. −4. =.<br>A.DEF 6 6 3 3 3 3<br>2a<sup>3</sup><br>Vì độ dài vectơ đơn vị trên trục bằng a nên ta được thể tích cần tính là."
      },
      {
        "id": 12,
        "part": 1,
        "shortTag": "P1.12",
        "label": "Phần 1 - Câu 12",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình chóp S.ABCD có đáy ABCD là hình vuông cạnh bằng a. Cạnh bên SA = a vuông góc với đáy (ABCD). Gọi M là điểm nằm trên cạnh SD sao cho SM = 2MD. Hãy tính cosin của góc tạo bởi hai mặt phẳng (AMC) và (SBC)? 1 3 2",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": "1. 2 2 5"
        },
        "answer": "B",
        "explanation": "Chọn hệ trục tọa độ Oxyz sao cho điểm A ≡ O, các điểm B,D,S lần lượt thuộc chiều dương<br>các trục tọa độ Ox,Oy,Oz. Suy ra tọa độ các điểm như trên hình vẽ.<br>Do M là điểm nằm trên cạnh SD sao cho SM = 2MD suy ra<br>(2a a)<br>2 (2a a) AM = 0;; (a<sup>2</sup> a<sup>2</sup> 2a<sup>2</sup>)<br>SM = 3 SD ⇒ M 0; 3; 3 ⇒; A C = (a;a; 3 0) 3 ⇒ [AM,AC] = − 3; 3;− 3<br>= − a<sup>2</sup> (1;−1;2). Ta có {; S B = (a;0;−a) ⇒ [S B, S C] = (a<sup>2</sup>;0;a<sup>2</sup>) = a<sup>2</sup>(1;0;1).<br>3 } SC = (a;a;−a)<br>Chọn vectơ pháp tuyến của mặt phẳng (AMC) là n = (1;−1;2).<br>Chọn vec tơ pháp tuyến của mặt phẳng (SBC) là n = (1;0;1).<br>n.n<br>3 3<br>Khi đó: cos<br>((AMC),(SBC))<br>= =.<br>n.n 6 2 2<br>1 2"
      },
      {
        "id": 13,
        "part": 1,
        "shortTag": "P1.13",
        "label": "Phần 1 - Câu 13",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình chóp S.ABC có đáy ABC là tam giác đều cạnh a và độ dài cạnh SA = a và vuông góc với (ABC). Góc giữa mặt phẳng (SAB)và mặt phẳng (SBC) là α. Khi đó tanαbằng: 1",
        "options": {
          "A": "1.",
          "B": "3.",
          "C": "6.",
          "D": ". 2 2"
        },
        "answer": "C",
        "explanation": "Gắn hệ tọa độ Oxyz như hình vẽ:<br>(a) (a) (a 3) (a 3)<br>Ta có: H(0;0;0), C<br>;0;0<br>, B<br>−;0;0<br>, A<br>0;;0<br>, S<br>0;;a<br>2 2 2 2<br>(a<sup>2</sup> 3 a<sup>2</sup>) (a<sup>2</sup> 3)<br>Suy ra n = [AB,AS] = −;;0, n = [BS,BC] = 0;a<sup>2</sup>;−<br>(SAB) 2 2 (SBC) 2<br>a4<br>cosα =<br>n (SAB).n (SBC)<br>. Vậy tanα =<br>−1 = 6<br>n.n 3a4 a4 3a4 7 cos2α<br>(SAB) (SBC) +. a4 +<br>4 4 4"
      },
      {
        "id": 14,
        "part": 1,
        "shortTag": "P1.14",
        "label": "Phần 1 - Câu 14",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho lăng trụ đứng ABC.A′B′C′ có đáy ABC là tam giác vuông tại B, AB = a, BC = a 2, a AA′ = a 3. Trên BB′ lấy điểm N sao cho BN =. Khoảng cách từ B′ đến mặt phẳng 3 (AC′N) bằng a 6 a 6 a 6",
        "options": {
          "A": ".",
          "B": "a 6.",
          "C": ".",
          "D": ". 2 6 3"
        },
        "answer": "D",
        "explanation": "(a) ()<br>Chọn hệ trục tọa độ như hình vẽ, khi đó ta có: A(a;0;0), N 0;0;, C′ 0;a 2;a 3,<br>() (a) ()<br>B′ 0;0;a 3. AN = −a;0;, AC′ = −a;a 2;a 3.<br>(6 4a)<br>Mặt phẳng (AC′N)đi qua A(a;0;0) có vtpt n = [AN,AC′] = − a;;−a 2có phương<br>3 3<br>− 6 4<br>trình là: (AC′N): (x−a) + y− 2z = 0.<br>3 3<br>6a<br>− 6a<br>3 a 6<br>Khoảng cách: d(B′,(AC′N)) = =.<br>6 16 3<br>+ + 2<br>9 3"
      },
      {
        "id": 15,
        "part": 1,
        "shortTag": "P1.15",
        "label": "Phần 1 - Câu 15",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho lăng trụ ABCD.A′B′C′D′ có đáy ABCD là hình chữ nhật và AB = a,AD = a 3. Hình chiếu vuông góc của điểm A lên mặt phẳng (A′B′C′D′) trùng với giao điểm của A′C′ và B′D′. Khoảng cách từ điểm B đến (AB′D′) bằng a 3 a 3 a 3 a 3",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": ". 2 4 3 6"
        },
        "answer": "A",
        "explanation": "Gọi H = A′C′ ∩ B′D′ và K = AC ∩ BD.<br>Chọn hệ toạ độ Oxyz như hình vẽ với C′ ≡ O,B′ ∈ Ox,D′ ∈ Oy,K ∈ Oz.<br>Đặt AH = m > 0.<br>Khi đó B′ (a 3;0;0),D′(0;a;0),A′ (a 3;a;0), H (a 3; a;0),A (a 3; a;m).<br>2 2 2 2<br>(a 3 a)<br>Ta có B′B = A′A ⇒ B;−;m.<br>2 2<br>() (a 3 a)<br>Mặt khác B′D′ = −a 3;a;0,B′A = −;;m nên (AB′D′) có véctơ pháp tuyến là<br>2 2<br>()<br>[B′D′,B′A] = am; 3am;0 nên (AB′D′) có phương trình x + 3y−a 3 = 0.<br>a 3<br>Vậy d<br>(B;(AB′D′))<br>=."
      },
      {
        "id": 16,
        "part": 1,
        "shortTag": "P1.16",
        "label": "Phần 1 - Câu 16",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hình chóp S.ABCD có đáy ABCD là hình thoi, AC cắt BD tại () gốc tọa độ O. Biết A(2;0;0), B(0;1;0), S 0;0;2 2. Gọi M là trung điểm của cạnh SC. Mặt phẳng (ABM) cắt đường thẳng SD tại điểm N. Tính thể tích khối chóp S.ABMN. 3",
        "options": {
          "A": "V = 2.",
          "B": "V = 2 3.",
          "C": "V = 3 2.",
          "D": "V =. 4"
        },
        "answer": "A",
        "explanation": "Điểm O là trung điểm của AC,BD ⇒ C(−2;0;0),D(0;−1;0).<br>()<br>Điểm M là trung điểm của SC ⇒ M −1;0; 2.<br>Phương trình mặt phẳng (ABM) là 2x + 2 2y + 3z−2 2 = 0.<br>{ x = 0<br>Phương trình đường thẳng SD là; y = −1 + t (t ∈ ℝ).<br>}z = 2 2t<br>(1)<br>Điểm N là giao điểm của (ABM) và SD ⇒ N 0;−; 2.<br>Vậy thể tích khối chóp S.ABMN là:<br>1 1 4 2 2 2<br>V = V + V = [SA,SB].SM + [SA,SM].SN = + = 2.<br>S.ABM S.AMN 6 6 6 6"
      },
      {
        "id": 17,
        "part": 1,
        "shortTag": "P1.17",
        "label": "Phần 1 - Câu 17",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình lập phương ABCD.A′B′C′D′ có độ dài cạnh bằng 1. Gọi M, N, P, Q lần lượt là trung điểm của các cạnh AB, BC, C′D′ và DD′. Tính thể tích khối tứ diện MNPQ. 1 1 3 1",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": ". 12 8 8 24"
        },
        "answer": "A",
        "explanation": "Gắn hệ trục toạ độ như hình vẽ ta có D(0;0;0),A(1;0;0), B(1;1;0),C(0;1;0), A′(1;0;1),<br>B′(1;1;1), C′(0;1;1),D′(0;0;1).<br>Vì M, N, P, Q lần lượt là trung điểm của các cạnh AB, BC, C′D′ và DD′ nên:<br>(1) (1) (1) (1)<br>M 1;;0,N;1;0,P 0;;1,Q 0;0;.<br>2 2 2 2<br>(1 1) (1 1)<br>Suy ra MN = −;;0,MP = (−1;0;1),MQ = −1;−;<br>2 2 2 2<br>(1 1 1) 1<br>Suy ra [MN;MP] =;;, ⇒ [MN;MP].MQ = −.<br>2 2 2 2<br>1 1 1 1<br>Vậy V = [MN;MP].MQ = − =.<br>MNPQ 6 6 2 12"
      },
      {
        "id": 18,
        "part": 1,
        "shortTag": "P1.18",
        "label": "Phần 1 - Câu 18",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho tứ diện O.ABC có OA, OB, OC đôi một vuông góc với nhau OA = a và OB = OC = 2a. Gọi P là trung điểm của BC (minh họa như hình vẽ). Khoảng cách giữa hai đường thẳng OP và ABbằng: 2a 6a 2 5a",
        "options": {
          "A": ".",
          "B": ".",
          "C": "a.",
          "D": ". 2 3 5"
        },
        "answer": "B",
        "explanation": "Đặt khối tứ diện O.ABC vào hệ trục tọa độ gốc Oxyz: các điểm A,B,C lần lượt thuộc các trục<br>tọa độ Oz,Oy,Ox.<br>Ta có: O(0;0;0), A(0;0;1), B(0;2;0), C(2;0;0), P(1;1;0), AB = (0;2;−1).<br>[OP; AB] · OB<br>Khi đó:d(OP;AB) = = (a).<br>[OP; AB] 3"
      },
      {
        "id": 19,
        "part": 1,
        "shortTag": "P1.19",
        "label": "Phần 1 - Câu 19",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho lăng trụ ABC.A′B′C′ có tam giác ABC đều cạnh bằng 2a. Hình chiếu vuông góc của A′ lên mặt phẳng (ABC) trùng với trung điểm M của BC. Biết góc tạo bởi A′B và mặt đáy bằng 60°. Khoảng cách từ B đến mặt phẳng (AB′C) là a 7 2a 7 2a 39 a 39",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": ". 7 7 13 13"
        },
        "answer": "C",
        "explanation": "Góc giữa A′B và mặt phẳng (ABC) là góc • A′BM = 60°.<br>Ta có A′M = BM.tan60° = a 3; AM = AB.sin60° = 2a. = a 3.<br>()<br>Đặt hệ trục toạ Oxyz như hình vẽ. Coi a = 1 khi đó A 3;0;0, B(0;1;0), C(0;−1;0),<br>() () ()<br>A′ 0;0; 3. GọiB′(x;y;z), A′B′ = x;y;z − 3, AB = − 3;1;0.<br>0 0 0 0 0 0<br>{ x = − 3<br>()<br>Vì A′B′ = AB nên; y = 1 ⇒ B′ − 3;1; 3.<br>} z = 3<br>AC = (− 3;−1;0)<br>() ()<br>Ta có ⇒ ⇒ [AC,AB′] = − 3;3;−3 3 ⇒ n = 1;− 3;3 là vectơ pháp tuyến<br>()<br>AB′ = −2 3;1; 3<br>của mp(ACB′). Phương trình mặt phẳng (ACB′) là: x− 3y + 3z− 3 = 0.<br>− 3− 3<br>2 39 2a 39<br>⇒ d(B,(ACB′)) = =. Vậy khoảng cách từ B đến (AB′C) là.<br>1 + 3 + 9 13 13<br>{ x = 0 { x = 2"
      },
      {
        "id": 20,
        "part": 1,
        "shortTag": "P1.20",
        "label": "Phần 1 - Câu 20",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng Δ:; y = 2 + t và d:; y = 1 + t′. Biết rằng có một } z = −t } z = −1 + t′ hình hộp ABCD.A′B′C′D′ thỏa mãn A, C cùng thuộc Ox, B, C′ cùng thuộc Δ và D, B′ cùng thuộc d. Thể tích của khối hộp ABCD.A′B′C′D′ là",
        "options": {
          "A": "9 2.",
          "B": "18 2.",
          "C": "9.",
          "D": "18."
        },
        "answer": "B",
        "explanation": "{ AC ⊥ BC′<br>Nhận xét rằng các đường thẳng Δ, d, Ox đôi một vuông góc với nhau nên; BC′ ⊥ B′D.<br>}B′D ⊥ AC<br>Gọi I là tâm của hình bình hành ABCD và M là giao của D′I và B′D.<br>IM ID 1 1 { B′D ⊥ AC<br>Ta có = = ⇒ IM = ID′. Mặt khác; ⇒ B′D ⊥ (AD′C).<br>MD′ B′D′ 2 3 }B′D ⊥ BC′ ⇒ B′D ⊥ AD′<br>Kẻ MH //AD′ (H ∈ AC) ⇒ MH ⊥ AC suy ra MH là đoạn vuông góc chung của<br>AC,B′D ⇒ MH = d(AC,B′D) = d(Ox;d) = 2.<br>MH IM 1<br>Vì = = ⇒ AD′ = 3 2.<br>AD′ ID′ 3<br>Kẻ MK//AC (K ∈ AD′) ⇒ MK ⊥ AD′ suy ra MK là đoạn vuông góc chung của AD′,B′D.<br>⇒ MK = d(AD′,B′D) = d(Δ;d) = 2<br>MK D′M 2 3 2<br>Vì = = ⇒ AI = ⇒ AC = 3 2.<br>AI ID′ 3 2<br>Ta lại có BC′//(AD′C) ⇒ d(BC′;AC) = d(BC′;(AD′C)) = d(B;(AD′C)) = d(D;(AD′C))<br>⇒ d(D;(AD′C)) = d(Ox;Δ) = 2<br>1 1 1<br>⇒ V =.d (D;(AD′C)).S =.d (D;(AD′C)). AD′AC = 3 2<br>DAD′C 3 AD′C 3 2<br>⇒ V = 6V = 18 2.<br>ABCD.A′B′C′D′ DAD'C"
      },
      {
        "id": 21,
        "part": 1,
        "shortTag": "P1.21",
        "label": "Phần 1 - Câu 21",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho lăng trụ tam giác đều ABC.A′B′C′ có cạnh bên bằng cạnh đáy. Đường thẳng MN NB (M ∈ A′C; N ∈ BC′) là đường vuông góc chung của A′C và BC′. Tỷ số bằng NC′ 5 3 2",
        "options": {
          "A": ".",
          "B": ".",
          "C": ".",
          "D": "1. 2 2 3"
        },
        "answer": "B",
        "explanation": "Kết quả bài toán sẽ không thay đổi nếu ta xét lăng trụ đều ABC.A′B′C′ có cạnh bên bằng cạnh<br>đáy bằng 2.<br>()<br>Chọn hệ trục tọa độ Oxyz như hình vẽ (O là trung điểm của BC) thì ta có: A′ 0;− 3;2,<br>B(1;0;0), C(−1;0;0), C′(−1;0;2), CA′ = (1;− 3;2), BC′ = (−2;0;2).<br>{ CM = mCA′<br>Do; nên ta có M (−1 + m;− 3m;2m), N(1−2n;0;2n)<br>}BN = nBC′<br>()<br>⇒ MN = −m−2n + 2; 3m;2n−2m.<br>Đường thẳng MN là đường vuông góc chung của A′C và BC′nên:<br>{ 2<br>m =<br>{ MN.CA′ = 0 { −4m + 2n = −1 5 BN 3 NB 3<br>; ⇔; ⇔; ⇒ = n = ⇒ =.<br>}MN.BC′ = 0 }−m + 4n = 2<br>n =<br>3 BC′ 5 NC′ 2<br>} 5"
      },
      {
        "id": 22,
        "part": 1,
        "shortTag": "P1.22",
        "label": "Phần 1 - Câu 22",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hình hộp chữ nhật ABCD.A′B′C′D′ có A trùng với gốc tọa độ O. Biết rằng B(m;0;0), D(0;m;0), A′(0;0;n) với m, n là các số dương và m + n = 4. Gọi M là trung điểm của cạnh CC′. Thể tích lớn nhất của khối tứ diện BDA′M bằng 64 11 2 9 75",
        "options": {
          "A": ".",
          "B": "d(M;(P)) =.",
          "C": ".",
          "D": ". 27 6 4 32"
        },
        "answer": "A",
        "explanation": "Ta có A(0;0;0), B(m;0;0), D(0;m;0), A′(0;0;n).<br>(n)<br>Suy ra C(m;m;0), B′(m;0;n), C′(m;m;n), D′(0;m;n), M m;m;.<br>(n)<br>Và BD = (−m;m;0), BA′ = (−m;0;n), BM = 0;m;.<br>[BD,BA′] = (mn;mn;m<sup>2</sup>); [BD,BA′].BM = m2n.<br>1 1 1 1<br>Ta được V = [BD,BA′].BM = m<sup>2</sup>.n = m<sup>2</sup>.(4−m) = m.m.(8−2m).<br>BDA′M 6 4 4 8<br>1(m + m + 8−2m) 3 64<br>⇒ V ≤ =.<br>BDA′M 8 3 27"
      },
      {
        "id": 23,
        "part": 1,
        "shortTag": "P1.23",
        "label": "Phần 1 - Câu 23",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz cho hình chóp tứ giác đều S.ABCD có các điểm A(1;2;0) B(4;6;0), D(−3;5;0). Gọi I là tâm hình vuông ABCD. Tính khoảng cách từ đường vuông góc chung của đường thẳng SI và BCđến đường thẳngAB. 15 3 5",
        "options": {
          "A": ".",
          "B": ".",
          "C": "5.",
          "D": ". 2 2 2"
        },
        "answer": "D",
        "explanation": "Vì I là tâm hình vuông ABCD nên I là trung điểm của BD.<br>(1 11)<br>Tọa độ I;;0. Suy ra tọa độ điểm C(0;9;0).<br>2 2<br>(15)<br>Gọi H là trung điểm BC khi đó tọa độ H 2;;0 và IH ⊥ BC (1).<br>Vì hình chóp S.ABCD là hình chóp đều nên SI ⊥ (ABCD) ⇒ SI ⊥ IH (2).<br>Từ (1) và (2) suy ra đường vuông góc chung của SI và BC là đường thẳng IH.<br>AB 5<br>Vì IH∥AB nên khoảng cách từ IH đến AB bằng =.<br>2 2"
      },
      {
        "id": 24,
        "part": 1,
        "shortTag": "P1.24",
        "label": "Phần 1 - Câu 24",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình lăng trụ tam giác đềuABC.A′B′C′ có cạnh đáy bằng 1, cạnh bên bằng 3. Gọi I là 1 điểm trên cạnh BB′ sao cho BI = BB′, điểm M di động trên cạnh AA′. Biết diện tích của 3 AM a tam giác MIC′ nhỏ nhất khi tỷ số = (a ∈ ℕ;b ∈ ℕ*,(a,b) = 1). P = a + blà AA′ b",
        "options": {
          "A": "4.",
          "B": "3.",
          "C": "7.",
          "D": "5."
        },
        "answer": "D",
        "explanation": "(3 1)<br>Chọn hệ toạ độAxyz sao cho: A(0;0;0), B(0;1;0),C;;0, A′(0;0;3).<br>2 2<br>(3 1)<br>Khi đó B′(0;1;3);C′;;3;I(0;1;1).<br>2 2<br>(3 1)<br>Gọi toạ độ điểm M(0;0;x) ∈ AA′(0 ≤ x ≤ 3); IC′ =;−;2;IM = (0;−1;x−1)<br>2 2<br>1 1 1<br>Diện tích của tam giác MIC′ là: S = [IC',IM] = 4x<sup>2</sup> −16x + 31 = 4(x−2)<sup>2</sup> + 15<br>2 4 4<br>AM a 2<br>Do đó S nhỏ nhất khi x = 2. Khi đó tỉ số = = ⇒ a + b = 5.<br>AA′ b 3"
      },
      {
        "id": 25,
        "part": 1,
        "shortTag": "P1.25",
        "label": "Phần 1 - Câu 25",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Cho hình lập phương ABCD.EFGH có cạnh bằng 4. Gọi d là đường thẳng đi qua trọng tâm của tứ diện EABD, cắt đường thẳng AE tại M và song song với mặt phẳng (EBD). Tính AM.",
        "options": {
          "A": "AM = 1.",
          "B": "AM = 2.",
          "C": "AM = 3.",
          "D": "AM = 4."
        },
        "answer": "C",
        "explanation": "Chọn hệ trục tọa độ như hình vẽ.<br>Ta có: A(0;0;0);B(4;0;0);D(0;4;0);E(0;0;4).<br>Gọi T là trọng tâm của tứ diện EABD suy ra T(1;1;1).<br>x y z<br>Phương trình mặt phẳng (EBD): + + = 1 ⇔ x + y + z−4 = 0.<br>4 4 4<br>Đường thẳng d cắt đường thẳng AE tại M suy ra M (0;0;m).<br>Khi đó, MT = (1;1;1−m) và vectơ pháp tuyến của mặt phẳng (EBD) là n = (1;1;1).<br>Do d∥(EBD) nên MT.n = 0 ⇔ 1 + 1 + 1−m = 0 ⇔ m = 3.<br>Suy ra M (0;0;3) nên AM = 3."
      },
      {
        "id": 26,
        "part": 2,
        "shortTag": "P2.1",
        "label": "Phần 2 - Câu 1",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "tf",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_p2_q1_p77_1.png",
        "question": "Cho hình chóp S.ABC có đường cao SA = h và có đáy là tam giác ABC vuông tại C. Biết rằng AC = b, BC = a. Gọi M là trung điểm của AC và N là điểm sao cho SN = (1/3)SB và được gắn vào hệ trục tọa độ Oxyz (với A ≡ O) như hình vẽ dưới đây. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "A(0;0;0), C(b;0;0), B(b;a;0), S(0;0;h), M(b/2; 0; 0).",
          "b": "SB = (b; a; −h).",
          "c": "MN = (1/2)√(b² + 4a² + 16h²).",
          "d": "Khi 4h² = 2a² − b² thì hai đường thẳng MN và SB vuông góc với nhau."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "Ta chọn hệ trục tọa độ Oxyz có gốc O trùng với A, tia Ox trùng với tia AC, tia Oz trùng<br>với tia AS sao cho điểm B nằm trong góc xOy.<br>(b)<br>a) Đúng: Khi đó A(0;0;0),C(b;0;0),B(b;a;0),S(0;0;h),M;0;0<br>b) Đúng: SB = (b;a;−h)<br>c) Sai: Gọi N(x;y;z) thì SN = (x;y;z−h)<br>1 b a −h 2h (b a 2h)<br>Từ điều kiện SN = SB nên x =;y =,z−h = ⇒ z = ⇒ N;;<br>3 3 3 3 3 3 3 3<br>(b b a 2h) (b a 2h) b<sup>2</sup> a<sup>2</sup> 4h<sup>2</sup> 1<br>Ta có MN = −;; = −;; nên MN = + + = b<sup>2</sup> + 4a<sup>2</sup> + 16h<sup>2</sup><br>3 2 3 3 6 3 3 36 9 9 6<br>d) Sai: Hai đường thẳng MN và SB vuông góc với nhau khi và chỉ khi:<br>−b<sup>2</sup> a<sup>2</sup> −2h<sup>2</sup><br>MN.SB = 0 ⇔ + + = 0 ⇔ 4h<sup>2</sup> = 2a<sup>2</sup> −b<sup>2</sup><br>6 3 3"
      },
      {
        "id": 27,
        "part": 2,
        "shortTag": "P2.2",
        "label": "Phần 2 - Câu 2",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "tf",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_p2_q2_p77_2.png",
        "question": "Cho tứ diện S.ABC có SC = CA = AB = a 2 và SC ⊥ (ABC). Biết rằng tam giác ABC là tam giác vuông tại A. Các điểm M ∈ SA,N ∈ BC sao cho AM = CN = t (0 < t < 2a). Gắn tứ diện vào hệ trục tọa độ Oxyz với A ≡ O. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "A(0;0;0),B (0;a 2;0),C (a 2;0;0),S (a 2;0;a 2) (t 2 t 2)",
          "b": "Tọa độ điểm M;0; 2 2 a 6",
          "c": "Đoạn thẳng MN ngắn nhất bằng 2",
          "d": "Khi MN ngắn nhất thì MN là đường vuông góc chung của BC và SA"
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Ta chọn hê trục Oxyz sao cho gốc tọa độ O ≡ A. Trục Ox chứa AC, trục Oy chứa<br>AB và trục Oz ⊥ (ABC). Khi đó cạnh SC song song với trục Oz và ta có:<br>A(0;0;0),B (0;a 2;0),C (a 2;0;0),S (a 2;0;a 2)<br>(t 2 t 2) (t 2 t 2)<br>b) Đúng: Ta có M;0;;Na 2 −;;0<br>2 2 2 2<br>c) Sai: MN = 2 (a<sup>2</sup> −2at + t<sup>2</sup>) + t<sup>2</sup> + t<sup>2</sup> = 3t<sup>2</sup> −4at + 2a<sup>2</sup> = 3 (t− 2a) 2 + 2a<sup>2</sup> ≥ a 6<br>2 2 3 3 3<br>a 6 2a<br>Vậy MN ngắn nhất bằng khi t =<br>3 3<br>d) Đúng: Khi MN ngắn nhất thì:<br>(a 2 a 2) (2a 2 a 2) (a 2 a 2 a 2)<br>M;0;,N;;0 ⇒ MN =;;−<br>3 3 3 3 3 3 3<br>{ MN.SA = 0<br>Ta có; nên MN là đường vuông góc chung.<br>}MN.BC = 0"
      },
      {
        "id": 28,
        "part": 2,
        "shortTag": "P2.3",
        "label": "Phần 2 - Câu 3",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "tf",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_p2_q3_p78_1.png",
        "question": "Cho hình chóp tứ giác đều S.ABCD cạnh đáy a và mặt bên tạo với đáy góc α. Chọn hệ trục Oxyz có O là tâm đáy ABCD, tia Ox chứa A, tia Oy chứa B, tia Oz chứa S. Xét tính đúng sai của các khẳng định sau: (a 2) (a 2) (a 2) (a 2) (a)",
        "statements": {
          "a": "A;0;0,B0;;0,C−;0;0,D0;−;0,S0;0; tanα 2 2 2 2 2 (a 2 a) (a 2 a)",
          "b": "SA =;0;− tanα,SB = 0;;− tanα 2 2 2 2 (a 2 a) (a 2 a)",
          "c": "SC = −;0;− tanα,SD = 0;−;− tanα 2 2 2 2",
          "d": "Để hai đường thẳng SA ⊥ SC vuông góc với nhau thì tanα = 3"
        },
        "answers": {
          "a": true,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "(a 2) (a 2) (a 2) (a 2) (a)<br>a) Đúng: Ta có: A;0;0,B0;;0,C−;0;0,D0;−;0,S0;0; tanα<br>2 2 2 2 2<br>(a 2 a) (a 2 a)<br>b) Đúng: SA =;0;− tanα,SB = 0;;− tanα<br>2 2 2 2<br>(a 2 a) (a 2 a)<br>c) Đúng: SC = −;0;− tanα,SD = 0;−;− tanα<br>2 2 2 2<br>d) Sai: Ta có SA ⊥ SC<br>a<sup>2</sup> a<sup>2</sup> a<sup>2</sup>(1)<br>⇔ SA.SC = 0 ⇔ − + tan2α = 0 ⇔<br>tan2α−1<br>= 0 ⇔ tan2α = 2 ⇒ tanα = 2<br>2 4 2 2"
      },
      {
        "id": 29,
        "part": 2,
        "shortTag": "P2.4",
        "label": "Phần 2 - Câu 4",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "tf",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_p2_q4_p78_2.png",
        "question": "Cho hình chóp S.ABCD có đáy là hình chữ nhật AB = a,AD = a 2,SA = a và SA vuông góc (ABCD). Gọi M, N lần lượt là trung điểm của AD,SC. Gọi I là giao điểm BM và AC. Chọn hệ trục tọa độ Oxyz như hình vẽ dưới đây. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "S(0;0;a),A(0;0;0),B(a;0;0),C (a;a 2;0) (a a 2) (a 2)",
          "b": "I;;0,BM−a;;0,BS(−a;0;a) 3 3 2",
          "c": "Một vectơ pháp tuyến của mặt phẳng (SAC) là (−a<sup>2</sup> 2;a;0) a<sup>3</sup> 2",
          "d": "Thể tích tứ diện ANIB bằng (đvtt) 18"
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "a) Đúng: Chọn hệ trục tọa độ như hình vẽ: S(0;0;a),A(0;0;0),B(a;0;0),C (a;a 2;0)<br>() (a 2) (a a 2 a)<br>Khi đó: D 0;a 2;0,M 0;;0,N;;<br>2 2 2 2<br>IA IM AM 1 1 (a a 2) (a 2)<br>b) Đúng: = = = ⇒ IA = AC ⇒ I;;0,BM−a;;0,BS(−a;0;a)<br>IC IB BC 2 3 3 3 2<br>(a<sup>2</sup> 2 a<sup>2</sup> 2)<br>c) Sai: Mặt phẳng (SMB) có vecto pháp tuyến n = [BM,BA] =;a<sup>2</sup>;<br>1 2 2<br>Mặt phẳng (SCA) có vecto pháp tuyến n = [AS,AC] = (−a<sup>2</sup> 2;a<sup>2</sup>;0)<br>d) Sai: Vì n.n = 0 nên 2 mặt phẳng (SAC),(SMB) vuông góc<br>1 2<br>(a<sup>2</sup> a<sup>2</sup>) 1 a<sup>3</sup> 2<br>Ta có [<br>AI,AN]<br>3 2<br>;0<br>,AB = (a;0;0),V<br>ANIB<br>∣AI,AN]<br>.AB =<br>36<br>(dvtt)"
      },
      {
        "id": 30,
        "part": 2,
        "shortTag": "P2.5",
        "label": "Phần 2 - Câu 5",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "tf",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_p2_q5_p79_1.png",
        "question": "Trong không gian với hệ tọa độ Oxyz, một cabin cáp treo xuất phát từ điểm A(10;3;0) và chuyển động đều theo đường cáp có vectơ chỉ phương là u = (2;−2;1) với tốc độ 4,5m/s (đơn vị trên mỗi trục tọa độ là mét). { x = 10 + 2t",
        "statements": {
          "a": "Phương trình tham số của đường cáp là:; y = 3−2t (t ∈ ℝ) z = t }",
          "b": "Giả sử sau thời gian t(s) kể từ lúc xuất phát (t ≥ 0) thì cabin đến điểm M. Khi đó tọa độ điểm (3t) M là M 3t + 10;−3t + 3;. 2",
          "c": "Cabin dừng ở điểm B có hoành độ x = 550, khi đó quãng đường AB dài 800 m. B",
          "d": "Đường cáp AB tạo với mặt phẳng (Oxy) một góc 30°."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "{ x = 10 + 2t<br>a) Đúng: Phương trình tham số của đường cáp là:; y = 3−2t (t ∈ ℝ)<br>}z = t<br>b) Đúng: Ta có AM = v.t = 4,5t và ta gọi M(10 + 2m;3−2m;m) thuộc đường thẳng d<br>Khi đó: AM = (2m;−2m;m) và AM cùng hướng với vectơ u nên m dương<br>(3t)<br>Suy ra AM = 4m<sup>2</sup> + 4m<sup>2</sup> + m<sup>2</sup> = 3m m > 0 → m = 1,5t nên M3t + 10;−3t + 3;<br>c) Sai: Từ câu trên suy ra M ≡ B ⇔ 10 + 3t = 550 ⇔ t = 180<br>Khi đó: AB = vt = 4,5.t = 4,5.180 = 810mét<br>d) Sai: Ta có u = (2;−2;1) và mặt phẳng (Oxy) là z = 0 nên ta có n = (0;0;1)<br>AB<br>u.n 1<br>Từ đó: sinα = = nên α ≠ 30°<br>u.n 3"
      },
      {
        "id": 31,
        "part": 3,
        "shortTag": "P3.1",
        "label": "Phần 3 - Câu 1",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "short",
        "figure": null,
        "question": "Cho hình chóp S.ABCD có đáy ABCD là hình vuông cạnh có cạnh bằng a và SA vuông góc với đáy. Khi a = 2, hãy tính độ dài cạnh SA để góc tạo bởi (SBC) và (SCD) bằng 60°.",
        "answer": "1,41",
        "acceptedAnswers": [
          "1,41",
          "1.41",
          "1,4",
          "1.4",
          "2"
        ],
        "kqCells": [
          "1",
          ",",
          "4",
          "1"
        ],
        "explanation": "Chọn hệ tọa độ như hình vẽ, M là trung điểm của SC và đặt SA = 2m(m > 0)<br>(a) (a) (a)<br>Khi đó B;0;0,D −;0;0,C 0;;0,M(0;0;m)<br>2 2 2<br>x y z (a)<br>Ta có (SBC): + + = 1 ⇒ n = 1;1;<br>a a m SBC m 2<br>2 2<br>x y z (a)<br>Phương trình mặt phẳng (SDC): + + = 1 ⇒ n = −1;1;<br>a a m SDC m 2<br>2 2<br>Yêu cầu bài toán tương đương với ((SBC),(SDC)) = 60° ⇔ cos(n,n) =<br>SBC SDC 2<br>(a)<br>m 2 1 (a) 2<br>⇔ = ⇔ = 2 ⇔ 2m = 2.<br>(a) 2 2 m 2<br>1 + 1 +<br>m 2<br>Suy ra <i>SA = 2m = √2 ≈ <b>1,41</b></i>."
      },
      {
        "id": 32,
        "part": 3,
        "shortTag": "P3.2",
        "label": "Phần 3 - Câu 2",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "short",
        "figure": null,
        "question": "Cho hình vuông ABCD cạnh a. Trên hai tia Bx, Dy vuông góc với mặt phẳng (ABCD) và a cùng chiều lần lượt lấy hai điểm M,N sao cho BM =;DN = 2a. Tính góc φ giữa hai mặt 4 phẳng (AMN) và (CMN).",
        "answer": "90",
        "acceptedAnswers": [
          "90"
        ],
        "kqCells": [
          "9",
          "0",
          "",
          ""
        ],
        "explanation": "Gắn hệ trục tọa độ như hình vẽ:<br>(a)<br>Ta có: B(0;0;0),A(0;a;0),C(a;0;0),M 0;0;,N(a;a;2a).<br>(a) (a<sup>2</sup>)<br>Ta có AM = 0;−a;,AN = (0;0;2a) ⇒ [AM,AN] = −2a<sup>2</sup>;;a<sup>2</sup> là một vectơ pháp tuyến<br>4 4<br>(a)<br>của mặt phẳng (AMN) nên CM = −a;0;,CN = (0;a;2a).<br>(−a<sup>2</sup>)<br>Khi đó [CM,CN] =;2a<sup>2</sup>;−a<sup>2</sup> là một vectơ pháp tuyến của mặt phẳng (CMN)<br>a4 a4<br>+ −a4<br>2 2<br>Do đó: cosφ = = 0 ⇒ φ = 90°.<br>a4 a4<br>4a4 + + a4 · 4a4 + + a4<br>16 16"
      },
      {
        "id": 33,
        "part": 3,
        "shortTag": "P3.3",
        "label": "Phần 3 - Câu 3",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "short",
        "figure": null,
        "question": "Cho hình chóp S.ABCD có đáy ABCD là hình vuông có độ dài đường chéo bằng a 2 và SA vuông góc với mặt phẳng (ABCD). Gọi α là góc giữa hai mặt phẳng (SBD) và (ABCD). Nếu tanα = 2 thì góc giữa hai mặt phẳng (SAC) và (SBC) bằng bao nhiêu?",
        "answer": "60",
        "acceptedAnswers": [
          "60"
        ],
        "kqCells": [
          "6",
          "0",
          "",
          ""
        ],
        "explanation": "Gọi I = AC ∩ BD.<br>Hình vuông ABCD có độ dài đường chéo bằng a 2 suy ra hình vuông đó có cạnh bằng a.<br>{ (SBD) ∩ (ABCD) = BD<br>Ta có; SI ⊥ BD ⇒ ((SBD);(ABCD)) = (SI;AI) = SIA.<br>AI ⊥ BD<br>SA<br>Ta có tanα = tanSIA = ⇔ SA = a.<br>AI<br>Chọn hệ trục tọa độ Oxyz như hình vẽ. Ta có A(0;0;0),B(a;0;0),C(a;a;0),S(0;0;a).<br>Khi đó SA = (0;0;−a);SC = (a;a;−a);SB = (a;0;−a).<br>Mặt phẳng (SAC) có vectơ pháp tuyến n = (−1;1;0).<br>Mặt phẳng (SBC) có vectơ pháp tuyến n = (1;0;1).<br>n ·n 1 1<br>Suy ra cos((SAC);(SBC)) = 1 2 = = ⇒ ((SAC);(SBC)) = 60°.<br>n · n 2· 2 2<br>1 2"
      },
      {
        "id": 34,
        "part": 3,
        "shortTag": "P3.4",
        "label": "Phần 3 - Câu 4",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "short",
        "figure": null,
        "question": "Cho hình chóp S.ABCDcó đáy là hình thang vuông tạiAvàB, thỏa mãn điều kiện, AB = BC = a,AD = 2a, SAvuông góc với mặt đáy(ABCD), SA = a. Gọi M,Nlần lượt là trung điểm của SB,CD.Tính cosin của góc giữa MN và (SAC). (Làm tròn kết quả đến hàng phần trăm)",
        "answer": "0,74",
        "acceptedAnswers": [
          "0,74",
          "0.74"
        ],
        "kqCells": [
          "0",
          ",",
          "7",
          "4"
        ],
        "explanation": "Chọn hệ trục tọa độ như hình vẽ<br>Chọn đơn vị là a<br>(1 1) (1 3)<br>Có A(0;0;0),B(1;0;0),C(1;1;0),D(0;2;0),S(0;0;1),M;0;,N;;0.<br>2 2 2 2<br>(3 −1)<br>Vecto chỉ phương của MN là MN = 0;; ⇒ 2MN = (0;3;−1)<br>2 2<br>Vecto pháp tuyến của (SAC)là n = [AC,AS] = (1;−1;0)<br>3 3 5 (3 5) 55<br>Vậy sin(MN,(SAC)) = = nên cos (MN,(SAC)) = 1− = ≈ 0,74<br>9 + 1. 2 10 10 10"
      },
      {
        "id": 35,
        "part": 3,
        "shortTag": "P3.5",
        "label": "Phần 3 - Câu 5",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_p3_q5_p80_1.png",
        "question": "Một phần mềm mô phỏng vận động viên đang tập bắn súng trong không gian Oxyz. Cho biết x−1 y−2 z−3 trục d của nòng súng có phương trình: = = và hồng tâm A(8;−19;6m + 4). Hỏi 1 −3 −5 m bằng bao nhiêu vận động viên có bắn trúng hồng tâm.",
        "answer": "-6",
        "acceptedAnswers": [
          "-6"
        ],
        "kqCells": [
          "-",
          "6",
          "",
          ""
        ],
        "explanation": "Để vận động viên có bắn trúng hồng tâm thì trục d phải đi qua hồng tâm.<br>Ta thay điểm A(8;−19;6m + 4) vào phương trình trục d:<br>x−1 y−2 z−3 8−1 −19−2 6m + 4−3<br>= = ⇔ = = = 7 ⇔ 6m = −36 ⇔ m = −6.<br>1 −3 −5 1 −3 −5<br>Vậy m = −6 thì vận động viên bắn trúng hồng tâm."
      },
      {
        "id": 36,
        "part": 3,
        "shortTag": "P3.6",
        "label": "Phần 3 - Câu 6",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_p3_q7_p80_2.png",
        "question": "Trong không gian Oxyz, một cabin cáp treo ở Bà Nà Hill xuất phát từ điểm A(−2;1;5) và chuyển động đều theo đường cáp có vectơ chỉ phương là u = (0;−2;6) với tốc độ là 4 m/s (đơn vị trên mỗi trục toạ độ là mét). Giả sử sau 5 (s) kể từ lúc xuất phát, cabin đến điểm M. Gọi tọa độ M (a;b;c). Tính a + 3b + c.",
        "answer": "6",
        "acceptedAnswers": [
          "6"
        ],
        "kqCells": [
          "6",
          "",
          "",
          ""
        ],
        "explanation": "{ x = −2<br>Phương trình tham số của đường cáp là: d:; y = 1−2k (k ∈ ℝ)<br>}z = 5 + 6k<br>Do tốc độ chuyển động của cabin là 4 m/s nên độ dài AM = 4t (m).<br>Vì vậy sau 5 (s) kể từ lúc xuất phát, cabin đến điểm M thì AM = 4.5 = 20 (m).<br>Vì M ∈ d ⇒ M(−2;1−2k;5 + 6k) nên suy ra AM (0;−2k;6k).<br>Do 2 vec tơ AM;u cùng hướng k > 0<br>AM = 20 ⇔ 02 + 4k<sup>2</sup> + 36k<sup>2</sup> = 20 ⇔ 40k<sup>2</sup> = 400 ⇔ k = ± 10<br>Vì k > 0 ⇒ k = 10.<br>() ()<br>Vậy tọa độ M −2;1−2 10;5 + 6 10. Khi đó a + 3b + c = −2 + 3 1−2 10 + 5 + 6 10 = 6."
      },
      {
        "id": 37,
        "part": 3,
        "shortTag": "P3.7",
        "label": "Phần 3 - Câu 7",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_p3_q7_p80_3.png",
        "question": "Trong một khu du lịch, người ta cho du khách trải nghiệm thiên nhiên bằng cách đu theo đường trượt zipline từ vị trí A cao 15 m của tháp 1 này sang vị trí B cao 10 m của tháp 2 trong khung cảnh tuyệt đẹp xung quanh. Với hệ trục toạ độ Oxyz cho trước (đơn vị: mét), toạ độ của A và B lần lượt là (3;2,5;15) và (21;27,5;10). Khi du khách khi ở độ cao 12 mét thì tọa độ của du khách lúc đó là M (a;b;c). Tính giá trị biểu thức T = a + b + c",
        "answer": "37,3",
        "acceptedAnswers": [
          "37,3",
          "37.3"
        ],
        "kqCells": [
          "3",
          "7",
          ",",
          "3"
        ],
        "explanation": "Ta có: A(3;2,5;15), B(21;27,5;10) ⇒ AB = (18;15;−5)<br>{ x = 3 + 18t<br>Phương trình tham số đường thẳng AB là:; y = 2,5 + 15t (t ∈ ℝ).<br>}z = 15−5t<br>{ x = 3 + 18t<br>Vậy phương trình đường thẳng chứa đường trượt zipline là; y = 2,5 + 15t (t ∈ ℝ).<br>}z = 15−5t<br>Xác định toạ độ của du khách khi ở độ cao 12 mét.<br>Khi du khách khi ở độ cao 12 mét ⇒ z = 12 ⇒ 15−5t = 12 ⇒ t =<br>{ x = 13,8<br>Thay t = vào phương trình đường thằng AB ta được; y = 11,5 ⇒ C(13,8;11,5;12)<br>z = 12<br>Vậy T = a + b + c = 13,8 + 11.5 + 12 = 37,3"
      },
      {
        "id": 38,
        "part": 3,
        "shortTag": "P3.8",
        "label": "Phần 3 - Câu 8",
        "topic": "B2.D4: Tọa độ hóa & Thực tế",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b2_d4_p3_q8_p81_1.png",
        "question": "Cầu Cổng Vàng (The Golden Gate Bridge) ở Mỹ. Xét hệ trục toạ độ Oxyz với O là bệ của chân cột trụ tại mặt nước, trục Oz trùng với cột trụ, mặt phẳng (Oxy) là mặt nước và xem như trục Oy cùng phương với cầu như hình vẽ. Dây cáp AD (xem như là một đoạn thẳng) đi qua đỉnh D thuộc trục Oz và điểm A thuộc mặt phẳng Oyz, trong đó điểm D là đỉnh cột trụ cách mặt nước 227m, điểm A cách mặt nước 75m và cách trục Oz 343m. Giả sử ta dùng một đoạn dây nối điểm N trên dây cáp AD và điểm M trên thành cầu, biết M cách mặt nước 75 m và MN song song với cột trụ. (Nguồn ảnh: https://www.goldengate.org/assets/1/6/ggb-exhibit-chapter-statistics.pdf). Tính độ dài MN, biết điểm M cách trục Oz một khoảng bằng 230 m (Kết quả làm tròn đến chữ số thập phân thứ hai sau dấu phẩy)",
        "answer": "50,1",
        "acceptedAnswers": [
          "50,1",
          "50,08",
          "50.1",
          "50.08"
        ],
        "kqCells": [
          "5",
          "0",
          ",",
          "1"
        ],
        "explanation": "Ta có A ∈ Oyz và A cách mặt nước 75m và cách trục Oz 343m ⇒ A(0;343;75)<br>Điểm D là đỉnh cột trụ cách mặt nước 227m ⇒ D(0;0;227) ⇒ AD = (0;−343;152)<br>{ x = 0<br>Phương trình đường thẳng AD là; y = −343t (t ∈ ℝ)<br>z = 227 + 152t<br>Vì N ∈ AD ⇒ N(0;−343t;227 + 152t)<br>Điểm M trên thành cầu, M cách mặt nước 75 m và cách trục Oz một khoảng bằng 230m<br>nên tọa độ điểm M là M(0;230;75)<br>⇒ MN = (0;−343t −230;152 + 152t)<br>230<br>MN song song với cột trụ ⇒ MN ⊥ Oy ⇒ MN.j = 0 ⇒ −343t−230 = 0 ⇔ t = −.<br>343<br>(17176) 17176<br>⇒ MN = 0;0; ⇒ MN = ≈ 50,08m.<br>343 343"
      }
    ]
  },
  "oxyz_b3_d1": {
    "id": "oxyz_b3_d1",
    "category": "oxyz",
    "badge": "BÀI 3 • DẠNG 1",
    "title": "Bài 3 - Dạng 1: Xác định tâm và bán kính mặt cầu trong không gian",
    "shortTitle": "B3.D1: Tâm & Bán kính Mặt cầu",
    "baiTitle": "Bài 3. Phương trình mặt cầu",
    "dangTitle": "Dạng 1: Xác định các yếu tố cơ bản của mặt cầu trong không gian",
    "subtitle": "Bài 3. Phương trình mặt cầu • Gồm Lý thuyết, Phương pháp, 6 Ví dụ tự luận & 31 câu Trắc nghiệm (P1: 18 • P2: 4 • P3: 9)",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">BÀI 3 • DẠNG 1</span>\n    <h4>Bài 3. Phương trình mặt cầu — Dạng 1: Xác định các yếu tố cơ bản của mặt cầu trong không gian</h4>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-line\">Trong không gian, tập hợp tất cả các điểm M cách điểm I cố định một khoảng không đổi là R (R > 0)</div>\n    <div class=\"oxyz-theory-line\">cho trước được gọi là mặt cầu tâm I bán kính R. Kí hiệu là S(I;R) hay viết tắt là (S).</div>\n    <div class=\"oxyz-theory-line\">Vậy S(I;R) = {M |IM = R}</div>\n    <div class=\"oxyz-theory-subhead\">Chú ý:</div>\n    <div class=\"oxyz-theory-bullet\">• Điểm M(x;y;z) nằm trong mặt cầu (S) nếu (x−a)<sup>2</sup> + (x−b)<sup>2</sup> + (x−c)<sup>2</sup> < R<sup>2</sup>.</div>\n    <div class=\"oxyz-theory-bullet\">• Điểm M(x;y;z) nằm trên mặt cầu (S) nếu (x−a)<sup>2</sup> + (x−b)<sup>2</sup> + (x−c)<sup>2</sup> = R<sup>2</sup>.</div>\n    <div class=\"oxyz-theory-bullet\">• Điểm M(x;y;z) nằm ngoài mặt cầu (S) nếu (x−a)<sup>2</sup> + (x−b)<sup>2</sup> + (x−c)<sup>2</sup> > R<sup>2</sup>.</div>\n    <div class=\"oxyz-theory-line\">Trong không gian Oxyz,cho mặt cầu (S) tâm I(a;b;c) bán kính R.</div>\n    <div class=\"oxyz-theory-line\">Phương trình mặt cầu (S) là: (x−a)<sup>2</sup> + (x−b)<sup>2</sup> + (x−c)<sup>2</sup> = R<sup>2</sup>.</div>\n    <div class=\"oxyz-theory-line\">Phương trình mặt cầu dạng khai triển là x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>−2ax−2by−2cz + d = 0 với a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>−d > 0 là</div>\n    <div class=\"oxyz-theory-line\">phương trình của mặt cầu tâm I(a;b;c) và bán kính R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>−d.</div>\n    <div class=\"oxyz-theory-line\">1 Định nghĩa</div>\n    <div class=\"oxyz-theory-line\">2 Phương trình mặt cầu</div>\n    <div class=\"oxyz-theory-subhead\">Dạng 1: Xác định các yếu tố cơ bản của mặt cầu trong không gian</div>\n    <div class=\"oxyz-theory-subhead\">Loại 1: Cho (S) là: (x−a)<sup>2</sup> + (x−b)<sup>2</sup> + (x−c)<sup>2</sup> = R<sup>2</sup>.Khi đó:</div>\n    <div class=\"oxyz-theory-bullet\">• Tâm I(a;b;c) (đổi dấu số trong dấu ngoặc)</div>\n    <div class=\"oxyz-theory-bullet\">• Bán kính R (rút căn vế phải)</div>\n    <div class=\"oxyz-theory-subhead\">Loại 2: Cho (S) là: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>−2ax−2by−2cz + d = 0. Khi đó:</div>\n    <div class=\"oxyz-theory-bullet\">• Điều kiện để phương trình trên là mặt cầu là a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>−d > 0</div>\n    <div class=\"oxyz-theory-bullet\">• Tâm I(a;b;c) (đổi dấu hệ số của x,y,z và chia đôi)</div>\n    <div class=\"oxyz-theory-bullet\">• Bán kính R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d.</div>\n  </div>\n  <div class=\"oxyz-theory-figures-grid\">\n    <div class=\"oxyz-theory-fig-card\" onclick=\"window.MathQuizApp.zoomImage('assets/images/quiz/math_oxyz/oxyz_b3_d4_theory_q0_p82_1.png', 'Mặt cầu tâm I(a; b; c) bán kính R trong không gian Oxyz')\">\n      <img src=\"assets/images/quiz/math_oxyz/oxyz_b3_d4_theory_q0_p82_1.png\" alt=\"Mặt cầu tâm I(a; b; c) bán kính R trong không gian Oxyz\" loading=\"lazy\" />\n      <div class=\"oxyz-theory-fig-cap\">🔍 Mặt cầu tâm I(a; b; c) bán kính R trong không gian Oxyz</div>\n    </div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Bài tập tự luận 1",
        "question": "Trong không gian Oxyz, cho mặt cầu (S) có phương trình x− + (y + 1)<sup>2</sup> + z<sup>2</sup> = 9. Xác 2 định tâm và bán kính của (S).",
        "figure": null,
        "explanation": "(1)<br>Mặt cầu (S) có tâm I;−1;0, bán kính R = 3."
      },
      {
        "id": 2,
        "label": "Bài tập tự luận 2",
        "question": "Trong không gian Oxyz, cho mặt cầu (S): x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2x−2y + 8z−18 = 0. Xác định tâm, bán kính của (S).",
        "figure": null,
        "explanation": "2 −2 8<br>Mặt cầu (S) có tâm I(x;y;z) với x = = −1, y = = 1, z = = −4 nên I(−1;1;−4).<br>I I I I −2 I −2 I −2<br>Mặt cầu (S) có bán kính là R = (−1)<sup>2</sup> + 12 + (−4)<sup>2</sup> −(−18) = 6."
      },
      {
        "id": 3,
        "label": "Bài tập tự luận 3",
        "question": "Trong không gian Oxyz, phương trình nào trong các phương trình sau là phương trình mặt cầu? Xác định tâm và bán kính của mặt cầu đó. a) x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−5z + 30 = 0. b) x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −4x + 2y−2z = 0. c) x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup>−2x + 6y−9z−10 = 0. d) x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 5 = 0. e) 3x<sup>2</sup> + 2y<sup>2</sup> + z<sup>2</sup> −2x−2y + 2z + 1 = 0 f) x<sup>2</sup> + y<sup>2</sup> −2x + 6y−8z−3 = 0 g) x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −6x + 8y−2z + 10 = 0 h) 2x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> + 12x + 4y−8z + 20 = 0",
        "figure": null,
        "explanation": "5 25<br>a) Ta có a = 1, b = 0, c =, d = 30. Do a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>−d = 1 + 0 + −30 < 0 nên phương trình<br>2 4<br>đã cho không phải là phương trình mặt cầu.<br>b) Ta có a = 2,b = −1, c = 1, d = 0. Do a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>−d = 4 + 1 + 1−0 = 6 > 0 nên phương trình<br>đã cho là phương trình mặt cầu. Khi đó mặt cầu có tâm I(2;−1;1) và bán kính R = 6.<br>c) Do phương trình x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup>−2x + 6y−9z−10 = 0 có chứa x<sup>3</sup> nên phương trình đã cho<br>không phải là phương trình mặt cầu.<br>d) Ta có a = 0,b = 0, c = 0, d = 5. Do a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>−d = 0 + 0 + 0−5 < 0 nên phương trình đã cho<br>không phải là phương trình mặt cầu.<br>e) Phương trình 3x<sup>2</sup> + 2y<sup>2</sup> + z<sup>2</sup> −2x−2y + 2z + 1 = 0 không phải là phương trình của một mặt cầu<br>vì các hệ số của x<sup>2</sup> và y<sup>2</sup> khác nhau.<br>f) Phương trình x<sup>2</sup> + y<sup>2</sup> −2x + 6y−8z−3 = 0 không phải là phương trình của một mặt cầu vì<br>không có biểu thức y<sup>2</sup>.<br>g) Ta có: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −6x + 8y−2z + 10 = 0<br>⇔ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2.3.x + 2.4.y−2.1.z + 10 = 0 ⇔ (x−3)<sup>2</sup> + (y + 4)<sup>2</sup> + (z−1)<sup>2</sup> = 16<br>Vậy phương trình đã cho là phương trình mặt cầu tâm I(3;−4;1) bán kính R = 16 = 4.<br>h) Ta có: 2x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> + 12x + 4y−8z + 20 = 0<br>⇔ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 6x + 2y−4z + 10 = 0 ⇔ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2.3.x + 2.1.y−2.2.z + 10 = 0<br>⇔ (x + 3)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−2)<sup>2</sup><br>= 4.<br>Vậy phương trình đã cho là phương trình mặt cầu tâm I(−3;−1;2) bán kính R = 4 = 2."
      },
      {
        "id": 4,
        "label": "Bài tập tự luận 4",
        "question": "Trong không gian Oxyz, một thiết bị phát sóng đặt tại vị trí A(2;0;0). Vùng phủ sóng của thiết bị có bán kính bằng 1. Hỏi vị trí M(2;1;1) có thuộc vùng phủ sóng của thiết bị nói trên hay không?",
        "figure": null,
        "explanation": "Vùng phủ sóng của thiết bị là khối cầu (S) có tâm A(2;0;0) và bán kính R = 1.<br>Do AM = (2−2)<sup>2</sup> + (1−0)<sup>2</sup> + (1−0)<sup>2</sup> = 2 > 1 nên vị trí M(2;1;1) không thuộc vùng phủ sóng<br>của thiết bị nói trên."
      },
      {
        "id": 5,
        "label": "Bài tập tự luận 5",
        "question": "Trong không gian với hệ tọa độ Oxyz(đơn vị trên mỗi trục là kilomet), một trạm phát sóng điện thoại của nhà mạng Vinaphone được đặt ở vị tríI(1;2;1)và được thiết kế bán kinh phủ sóng5000 mét. a) Sử dụng phương trình mặt cầu để mô tả ranh giới bên ngoài vùng phủ sóng trong không gian? b) Nhà bạn Diệp Chi, và Tuệ Nhi có vị trí tọa độ lần lượt là A(3;2;−1)và B(4;−3;5). Hỏi Diệp Chi và Tuệ Nhi dùng điện thoại tại nhà thì có thể sử dụng dịch vụ của trạm này hay không?",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d1_tuluan_q5_p84_1.png",
        "explanation": "a) Phương trình mặt cầu để mô tả ranh giới bên ngoài vùng phủ sóng trong không gian là:<br>(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−1)<sup>2</sup><br>= 25<br>b) Do IA = (3−1)<sup>2</sup> + (2−2)<sup>2</sup> + ((−1)−1)<sup>2</sup> = 8 < 5 nên điểm A(2;3;−1) nằm trong mặt cầu đó.<br>Vậy bạn Diệp Chi có thể sử dụng dịch vụ của trạm này.<br>Mặt khác IB = (4−1)<sup>2</sup> + ((−3)−2)<sup>2</sup> + (5−1)<sup>2</sup> = 50 > 5 nên điểm B(4;−3;5) nằm ngoài mặt cầu<br>đó.<br>Vậy bạn Tuệ Nhi không thể sử dụng dịch vụ của trạm này."
      },
      {
        "id": 6,
        "label": "Bài tập tự luận 6",
        "question": "Trong không gian với hệ tọa độ Oxyz(đơn vị trên mỗi trục là kilomet), một trạm phát sóng rađa của Nga được đặt trên bán đảo Crimea ở vị trí I(−2;1;−1)và được thiết kế phát hiện máy bay của địch ở khoảng cách tối đa 500 kilomet. a) Sử dụng phương trình mặt cầu để mô tả ranh giới bên ngoài vùng phát sóng của rađa trong không gian? b) Hai chiếc máy bay do thám của Mỹ và Anh đang bay ở vị trí có tọa độ M(−200;100;−250) và N(350;−100;300). Hỏi hai chiếc máy bay đó có bị rađa phát hiện hay không?",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d1_tuluan_q6_p84_2.png",
        "explanation": "a) Phương trình mặt cầu để mô tả ranh giới bên ngoài vùng phát sóng của rađa trong không gian là:<br>(x + 2)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 1)<sup>2</sup><br>= 250000<br>b) IM = (−200 + 2)<sup>2</sup> + (100−1)<sup>2</sup> + (−250 + 1)<sup>2</sup> ≈ 333,2 < 500 nên điểm M(−200;100;−250) nằm<br>trong mặt cầu đó.<br>Vậy chiếc máy bay do thám của Mỹ có thể bị phát hiện bởi trạm rađa này.<br>Do IN = (350 + 2)<sup>2</sup> + ((−100)−1)<sup>2</sup> + (300 + 1)<sup>2</sup> ≈ 474 < 500 nên điểm N(350;−100;300) nằm<br>trong mặt cầu đó.<br>Vậy chiếc máy bay do thám của Anh có thể bị phát hiện bởi trạm rađa này."
      }
    ],
    "questions": [
      {
        "id": 1,
        "part": 1,
        "shortTag": "P1.1",
        "label": "Phần 1 - Câu 1",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Cho phương trình mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 16, bán kính R của mặt cầu là",
        "options": {
          "A": "R = 4.",
          "B": "R = 16.",
          "C": "R = 0.",
          "D": "R = 2."
        },
        "answer": "A",
        "explanation": "Phương trình tổng quát của mặt cầu trong không gian Oxyz là: (x−a)<sup>2</sup> + (y−b)<sup>2</sup> + (z−c)<sup>2</sup> = R<sup>2</sup><br>Khi đó: R<sup>2</sup> = 16 ⇒ R = 4."
      },
      {
        "id": 2,
        "part": 1,
        "shortTag": "P1.2",
        "label": "Phần 1 - Câu 2",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S):(x−3)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−2)<sup>2</sup> = 4. Xác định toạ độ tâm I và bán kính R của mặt cầu (S).",
        "options": {
          "A": "I(3;−1;2),R = 2.",
          "B": "I(−3;1;−2),R = 2.",
          "C": "I(−3;1;−2),R = 4.",
          "D": "I(3;−1;2),R = 4."
        },
        "answer": "A",
        "explanation": "Mặt cầu (S) có tâm I(3;−1;2) và bán kính R = 2."
      },
      {
        "id": 3,
        "part": 1,
        "shortTag": "P1.3",
        "label": "Phần 1 - Câu 3",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−4y + 2z−2 = 0. Xác định toạ độ tâm I và bán kính R của mặt cầu (S).",
        "options": {
          "A": "I(1;2;−1),R = 2 2.",
          "B": "I(−1;−2;1),R = 2 2.",
          "C": "I(2;4;−2),R = 2.",
          "D": "I(2;4;2),R = 8."
        },
        "answer": "A",
        "explanation": "Mặt cầu (S) có tâm I(1;2;−1) và bán kính R = 12 + 22 + (−1)<sup>2</sup> −(−2) = 2 2."
      },
      {
        "id": 4,
        "part": 1,
        "shortTag": "P1.4",
        "label": "Phần 1 - Câu 4",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S): (x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> = 9. Tọa độ tâm I và bán kính R của (S) lần lượt là",
        "options": {
          "A": "I(−1;2;−3); R = 3.",
          "B": "I(1;2;−3); R = 9.",
          "C": "I(1;−2;3); R = 9.",
          "D": "I(1;2;−3); R = 3."
        },
        "answer": "D",
        "explanation": "Mặt cầu đã cho có tâm I(1;2;−3) và bán kính R = 3."
      },
      {
        "id": 5,
        "part": 1,
        "shortTag": "P1.5",
        "label": "Phần 1 - Câu 5",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình nào trong các phương trình sau là phương trình của một mặt cầu?",
        "options": {
          "A": "(S):x<sup>2</sup> + y<sup>2</sup> −z<sup>2</sup> −4x + 2y + 2z−3 = 0.",
          "B": "(S):x<sup>2</sup> + 2y<sup>2</sup> + z<sup>2</sup> −4x + 2y + 2z−10 = 0.",
          "C": "(S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −4x + 2y + 2z + 2 = 0.",
          "D": "(S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −4x + 2y + 2z + 8 = 0."
        },
        "answer": "C",
        "explanation": "Phương trình: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0 (a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d > 0) là phương trình mặt<br>cầu có tâm I(a;b;c), bán kính R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d.<br>Ở đáp án A và B không đúng dạng phương trình mặt cầu vì hệ số của x<sup>2</sup>,y<sup>2</sup>,z<sup>2</sup> không bằng nhau<br>nên phương trình ở đáp án A, B không là phương trình mặt cầu.<br>{ a = 2<br>b = −1<br>Trong đáp án D ta có:; ⇒ a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d = −2 < 0 nên phương trình ở đáp án D không<br>c = −1<br>}d = 8<br>là phương trình mặt cầu.<br>{ a = 2<br>b = −1<br>Trong đáp án C ta có:; ⇒ a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d = 4 > 0 nên phương trình ở đáp án C là phương<br>c = −1<br>}d = 2<br>trình mặt cầu."
      },
      {
        "id": 6,
        "part": 1,
        "shortTag": "P1.6",
        "label": "Phần 1 - Câu 6",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −4x + 2z−6y−2 = 0 là phương trình của mặt cầu có tâm I. Xác định tọa độ tâm I",
        "options": {
          "A": "I(2;−1;3).",
          "B": "I(2;3;−1).",
          "C": "I(2;−3;1).",
          "D": "I(2;1;−3)."
        },
        "answer": "B",
        "explanation": "Mặt cầu tâm I(a;b;c), bán kính R có phương trình: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0.<br>{ −2a = −4 { a = 2<br>⇒; −2b = −6 ⇔; b = 3.<br>}−2c = 2<br>c = −1<br>Vậy tâm của mặt cầu là I(2;3;−1)"
      },
      {
        "id": 7,
        "part": 1,
        "shortTag": "P1.7",
        "label": "Phần 1 - Câu 7",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho phương trình mặt cầu (S):(x−2)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 1. Tọa độ tâm I của mặt cầu (S) là",
        "options": {
          "A": "I(2;2;−1).",
          "B": "I(−2;−2;1).",
          "C": "I(−2;2;−1).",
          "D": "I(4;4;−2)."
        },
        "answer": "A",
        "explanation": "Mặt cầu tâm I(a;b;c), bán kính R có phương trình: (x−a)<sup>2</sup> + (y−b)<sup>2</sup> + (z−c)<sup>2</sup> = R<sup>2</sup><br>{ a = 2<br>Từ phương trình mặt cầu đề bài cho ⇒; b = 2. Vậy tâm mặt cầu là I(2;2;−1).<br>c = −1"
      },
      {
        "id": 8,
        "part": 1,
        "shortTag": "P1.8",
        "label": "Phần 1 - Câu 8",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt cầu (S) có phương trình x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> − 2x + y−z−1 = 0. Tính bán kính R của mặt cầu (S).",
        "options": {
          "A": "3.",
          "B": "2.",
          "C": "R = 2.",
          "D": "R = 3."
        },
        "answer": "C",
        "explanation": "(2 1 1)<br>Tạo độ tâm của mặt cầu (S) là: I;−; và hệ số d = −1.<br>2 2 2<br>(2) 2 (1) 2 (1) 2<br>Bán kính R = + − + −(−1) = 2 > 0. Vậy bán kính mặt cầu (S) là: R = 2<br>2 2 2"
      },
      {
        "id": 9,
        "part": 1,
        "shortTag": "P1.9",
        "label": "Phần 1 - Câu 9",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt cầu (S) có phương trình: (x−a)<sup>2</sup> + y<sup>2</sup> + (z−c)<sup>2</sup> = 16 đi qua hai điểm O và M(1;0;1). Tính a + c",
        "options": {
          "A": "a + c = 4.",
          "B": "a + c = 16.",
          "C": "a + c = 1.",
          "D": "a + c = 0."
        },
        "answer": "C",
        "explanation": "Vì mặt cầu (S) đi qua O(0;0;0) nên: a<sup>2</sup> + c<sup>2</sup> = 16. (1)<br>Vì mặt cầu (S) đi qua M(1;0;1) nên: (1−a)<sup>2</sup> + (1−c)<sup>2</sup> = 16. (2)<br>(2) ⇔ a<sup>2</sup> + c<sup>2</sup> −2(a + c) + 2 = 16 (3).<br>Thay (1) vào (3) ⇒ 16−2(a + c) + 2 = 16 ⇔ a + c = 1 ⇒ a = 1−c.<br>1± 31<br>Thay a = 1−c vào (1) ⇒ (1−c)<sup>2</sup> + c<sup>2</sup> = 16 ⇒ c = ⇒ Có tồn tại mặt cầu (S) thỏa mãn<br>đề bài. Vậy a + c = 1."
      },
      {
        "id": 10,
        "part": 1,
        "shortTag": "P1.10",
        "label": "Phần 1 - Câu 10",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, trong các phương trình sau phương trình nào là phương trình của mặt cầu?",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 4z−1 = 0",
          "B": "x<sup>2</sup> + z<sup>2</sup> + 3x−2y + 4z−1 = 0",
          "C": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2xy−4y + 4z−1 = 0.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 2y−4z + 8 = 0"
        },
        "answer": "A",
        "explanation": "Đáp án A thỏa mãn vì a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d = 1 + 0 + 4 + 1 = 6 > 0.<br>Đáp án B vì không có số hạng y<sup>2</sup>.<br>Đáp án C loại vì có số hạng 2xy.<br>Đáp án D loại vì a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d = 1 + 1 + 4−8 = −2 < 0."
      },
      {
        "id": 11,
        "part": 1,
        "shortTag": "P1.11",
        "label": "Phần 1 - Câu 11",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz phương trình nào sau đây không phải là phương trình của một mặt cầu?",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + x−2y + 4z−3 = 0.",
          "B": "2x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> −x− y−z = 0.",
          "C": "2x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> + 4x + 8y + 6z + 3 = 0.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 4y−4z + 10 = 0."
        },
        "answer": "D",
        "explanation": "Phương trình x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0 là phương trình của một mặt cầu nếu<br>a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d > 0.<br>Đáp án D không phải là phương trình mặt cầu vì 12 + 22 + (−2)<sup>2</sup> −10 < 0"
      },
      {
        "id": 12,
        "part": 1,
        "shortTag": "P1.12",
        "label": "Phần 1 - Câu 12",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, trong các phương trình sau phương trình nào không phải là phương trình của mặt cầu?",
        "options": {
          "A": "x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> −2x + 4z−1 = 0",
          "B": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 3x−2y + 4z−1 = 0",
          "C": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2x−4y + 4z−1 = 0.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 2y−4z−8 = 0"
        },
        "answer": "A",
        "explanation": "Phương trình x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> −2x + 4z−1 = 0 có hệ số trước x<sup>2</sup>,y<sup>2</sup>,z<sup>2</sup> không bằng nhau nên<br>không phải là phương trình mặt cầu"
      },
      {
        "id": 13,
        "part": 1,
        "shortTag": "P1.13",
        "label": "Phần 1 - Câu 13",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, trong các mặt cầu dưới đây, mặt cầu nào có bán kính R = 2?",
        "options": {
          "A": "(S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −4x + 2y + 2z−3 = 0",
          "B": "(S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −4x + 2y + 2z−10 = 0",
          "C": "(S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −4x + 2y + 2z + 2 = 0",
          "D": "(S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −4x + 2y + 2z + 5 = 0"
        },
        "answer": "C",
        "explanation": "Ta có mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0 có bán kính là R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d<br>{ a = 2<br>b = −1<br>Trong đáp án C ta có:; ⇒ R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d = 4 = 2.<br>c = −1<br>}d = 2"
      },
      {
        "id": 14,
        "part": 1,
        "shortTag": "P1.14",
        "label": "Phần 1 - Câu 14",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, trong các phương trình sau phương trình nào là phương trình của mặt cầu?",
        "options": {
          "A": "2x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> + 4x + 8y = 0",
          "B": "x<sup>2</sup> + 2y<sup>2</sup> + z<sup>2</sup> −2x + 4y−2z−1 = 0",
          "C": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 2y + 3 = 0.",
          "D": "x<sup>2</sup> + y<sup>2</sup> −z<sup>2</sup> −2x + 2y−4z + 8 = 0"
        },
        "answer": "A",
        "explanation": "Phương trình 2x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> + 4x + 8y = 0 ⇔ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2x + 4y = 0<br>Có a = −1,b = −4,c = 0,d = 0 ⇒ a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d > 0 nên đó là phương trình mặt cầu."
      },
      {
        "id": 15,
        "part": 1,
        "shortTag": "P1.15",
        "label": "Phần 1 - Câu 15",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, hỏi trong các phương trình sau phương trình nào là phương trình của mặt cầu?",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −x + 6z + 16 = 0",
          "B": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 4x−6y + 8z−1 = 0",
          "C": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2x−4y + 4z + 13 = 0.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 2y−4z + 9 = 0"
        },
        "answer": "B",
        "explanation": "Phương trình x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0 là phương trình của một mặt cầu nếu<br>a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d > 0.<br>Đáp án B là phương trình mặt cầu vì 22 + (−3)<sup>2</sup> + (4)<sup>2</sup> −(−1) > 0"
      },
      {
        "id": 16,
        "part": 1,
        "shortTag": "P1.16",
        "label": "Phần 1 - Câu 16",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, hỏi trong các phương trình sau phương trình nào là phương trình của mặt cầu?",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> −z<sup>2</sup> −2x + 4y + 4z + 5 = 0",
          "B": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 2y−4z−2 = 0",
          "C": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + x−2y + 3 = 0.",
          "D": "x<sup>2</sup> − y<sup>2</sup> + z<sup>2</sup> −2x + 6y−8z + 1 = 0"
        },
        "answer": "B",
        "explanation": "Đáp án A không phải là phương trình mặt cầu vì hệ số trước z<sup>2</sup> bằng −1<br>Đáp án B là phương trình mặt cầu vì 12 + 12 + 22 + 2 > 0.<br>(1)<br>Đáp án C không phải là phương trình mặt cầu vì + 12 −3 < 0.<br>Đáp án D không phải là phương trình mặt cầu vì hệ số trước y<sup>2</sup> bằng −1"
      },
      {
        "id": 17,
        "part": 1,
        "shortTag": "P1.17",
        "label": "Phần 1 - Câu 17",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, hỏi trong các phương trình sau phương trình nào không phải là phương trình của mặt cầu?",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 4y + 6z−2 = 0",
          "B": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 2y−2z = 6",
          "C": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2x–4y–6z + 5 = 0.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2y + 4xz + 2 = 0"
        },
        "answer": "D",
        "explanation": "Đáp án D không phải là phương trình mặt cầu vì có số hạng 4xz"
      },
      {
        "id": 18,
        "part": 1,
        "shortTag": "P1.18",
        "label": "Phần 1 - Câu 18",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm M(6;5;4) và mặt cầu (S) đi qua M, tiếp xúc với mặt phẳng (Oxy). Gọi R là bán kính của mặt cầu (S), giá trị nhỏ nhất của R là",
        "options": {
          "A": "3.",
          "B": "61.",
          "C": "4.",
          "D": "2."
        },
        "answer": "D",
        "explanation": "Gọi d là khoảng cách từ M đến mặt phẳng (Oxy) ⇒ d = 4.<br>Vì mặt cầu (S) tiếp xúc (Oxy) và luôn đi qua M nên ta có đánh giá: 2R ≥ d ⇔ 2R ≥ 4 ⇔ R ≥ 2<br>Vậy giá trị nhỏ nhất của R là: 2."
      },
      {
        "id": 19,
        "part": 2,
        "shortTag": "P2.1",
        "label": "Phần 2 - Câu 1",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz cho mặt cầu (S) có phương trình (x + 2)<sup>2</sup> + (y−1)<sup>2</sup> + z<sup>2</sup> = 4. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Đường kính mặt cầu bằng 8.",
          "b": "Mặt cầu (S) đi qua điểm A(−1;3;0).",
          "c": "Khoảng cách từ tâm mặt cầu đến mặt phẳng (Oyz) bằng 2.",
          "d": "Mặt phẳng (P) có phương trình x + 2y−2z−2 = 0 tiếp xúc với mặt cầu (S)."
        },
        "answers": {
          "a": false,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "a) Sai: Mặt cầu (S) có tâm I(−2;1;0) và bán kính R = 2.<br>Đường kính mặt cầu bằng 2R = 4.<br>b) Sai: Ta có: IA = (−1 + 2)<sup>2</sup> + (3−1)<sup>2</sup> + 02 = 5 > R nên mặt cầu (S) không đi qua điểm A.<br>c) Đúng: Mặt phẳng (Oyz) có phương trình: x = 0. Khi đó d(I;(Oyz)) = −2 = 2<br>−2 + 2.1−2.0−2 2<br>d) Sai: Ta có: d(I;(P)) = = < R nên mặt phẳng (P) không tiếp xúc với mặt<br>12 + 22 + (−2)<sup>2</sup> 3<br>cầu (S)."
      },
      {
        "id": 20,
        "part": 2,
        "shortTag": "P2.2",
        "label": "Phần 2 - Câu 2",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ tọa độOxyz, cho hai điểm A(3;1;2),B(1;0;3). Mặt cầu (S)có tâm I thuộc trục Oxvà đi qua hai điểm A,B. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Tọa độ tâm I của mặt cầu (S) có dạng I(a;0;0).",
          "b": "Bán kính của mặt cầu (S)là R = 9.",
          "c": "Mặt cầu (S) có phương trình là:(x−1)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 9.",
          "d": "Điểm M(x;y;z)thuộc mặt phẳng (Oyz) sao cho P = MA<sup>2</sup> + MB<sup>2</sup> + MI2đạt giá trị nhỏ nhất. Khi đó giá trị biểu thứcT = x + y + z = 2."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "a) Đúng: Vì tâm I ∈ Ox nên toạ độ điểm I(a;0;0)).<br>b) Sai: Vì A ∈ (S),B ∈ (S)nên ta có:<br>IA = IB ⇔ (3−a)<sup>2</sup> + 1 + 4 = (1−a)<sup>2</sup> + 0 + 9 ⇔ 9−6a + a<sup>2</sup> + 5 = 1−2a + a<sup>2</sup> + 9 ⇔ a = 1.<br>Ta có bán kính R = IB = 9 = 3.<br>c) Đúng: Vì A ∈ (S),B ∈ (S)nên ta có: IA = IB ⇔ (3−a)<sup>2</sup> + 1 + 4 = (1−a)<sup>2</sup> + 0 + 9 ⇔ a = 1.<br>⇒ R = IA = IB = 3,tâm I(1;0;0)),<br>Ta có mặt cầu (S) có phương trình là:(x−1)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 9<br>(5 1 5)<br>d) Đúng: Gọi Klà điểm thõa mãn KA + KB + KI = 0 ⇔ K;;<br>3 3 3<br>2 2 2 ()<sup>2</sup> ()<sup>2</sup> ()<sup>2</sup><br>P = MA<sup>2</sup> + MB<sup>2</sup> + MI<sup>2</sup> = MA + MB + MI = MK + KA + MK + KB + MK + KI<br>()<br>= 3.MK<sup>2</sup> + KA<sup>2</sup> + KB<sup>2</sup> + KI<sup>2</sup> + 2MK KA + KB + KI = 3MK<sup>2</sup> + KA<sup>2</sup> + KB<sup>2</sup> + KI<sup>2</sup><br>Mà M ∈ (Oyz) ⇒ MA<sup>2</sup> + MB<sup>2</sup> + MI2đạt giá trị nhỏ nhất ⇔ M là hình chiếu của K lên mặt<br>(1 5) 1 5<br>phẳng (Oyz) ⇒ M 0;;. Vậy T = 0 + + = 2.<br>3 3 3 3"
      },
      {
        "id": 21,
        "part": 2,
        "shortTag": "P2.3",
        "label": "Phần 2 - Câu 3",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz (đơn vị trên mỗi trục là mét), một ngọn hải đăng được đặt ở vị trí I(10;20;30) với bán kính phủ sáng là 3km. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Phương trình mặt cầu mô tả ranh giới bên ngoài của vùng phủ sáng trên biển của hải đăng là (x−10)<sup>2</sup> + (y−20)<sup>2</sup> + (z−30)<sup>2</sup> = 30002.",
          "b": "Người đi biển ở vị trí A(50;20;0) nhìn thấy được ánh sáng của ngọn hải đăng.",
          "c": "Người đi biển ở vị trí B(4030;50;40) nhìn thấy được ánh sáng của ngọn hải đăng.",
          "d": "Nếu hai người đi biển có thể nhìn thấy ánh sáng của ngọn hải đăng thì khoảng cách giữa hai người đó không quá 6km."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Mặt cầu (S) tâm I(10;20;30), bán kính R = 3km = 3000m có phương trình<br>(x−10)<sup>2</sup> + (y−20)<sup>2</sup> + (z−30)<sup>2</sup> = 30002<br>b) Đúng: Ta có IA = (40;0;−30) ⇒ IA = 402 + 02 + 302 = 50m < R = 3000m nên điểm A nằm<br>trong mặt cầu (S) nên người đi biển ở vị trí A(50;20;0) nhìn thấy được ánh sáng của ngọn hải<br>đăng.<br>c) Sai: Ta có IB = (4020;30;10) ⇒ IB = 40202 + 302 + 102 ≈ 4020,12m > R = 3000m nên điểm<br>B nằm ngoài mặt cầu (S) nên người đi biển ở vị trí B(4030;50;40) không nhìn thấy được ánh<br>sáng của ngọn hải đăng.<br>d) Đúng: Vì bán kính phủ sáng là 3km nên đường kính phủ sáng là 6km nên nếu hai người đi<br>biển có thể nhìn thấy ánh sáng của ngọn hải đăng thì hai người đó nằm trong mặt cầu, do đó<br>khoảng cách giữa hai người đó không quá 6km."
      },
      {
        "id": 22,
        "part": 2,
        "shortTag": "P2.4",
        "label": "Phần 2 - Câu 4",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "tf",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d1_p2_q4_p88_1.png",
        "question": "Trong không gian hệ trục tọa độ Oxyz (đơn vị trên mỗi trục là kilômét), đài kiểm soát không lưu của một sân bay ở vị trí O(0;0;0) và được thiết kế phát hiện máy bay ở khoảng cách tối đa 600km. Một máy bay đang chuyển động với vận tốc 900 km/h theo đường thẳng d có phương { x = −1000 + 100t trình; y = −300 + 80t (t ∈ ℝ) và hướng về đài kiểm soát không lưu (như hình vẽ). Xét tính }z = 100 11 đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Ranh giới vùng phát sóng bên ngoài của đài kiểm soát không lưu trong không gian là mặt cầu có bán kính bằng 300km.",
          "b": "Phương trình mặt cầu để mô tả ranh giới bên ngoài vùng phát sóng của đài kiểm soát không lưu trong không gian là x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 360000. ()",
          "c": "Máy bay đang chuyển động theo đường thẳng d đến vị trí điểm M −500;100;100 11. Vị trí này nằm ngoài vùng kiểm soát không lưu của đài kiểm soát không lưu sân bay.",
          "d": "Thời gian kể từ khi đài kiểm soát không lưu phát hiện may bay đến khi máy ra khỏi vùng kiểm 4 soát không lưu là giờ. 3"
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "a) Sai: Vì đài kiểm soát không lưu của một sân bay ở vị trí O(0;0;0) và được thiết kế phát hiện<br>máy bay ở khoảng cách tối đa 600km nên ranh giới vùng phát sóng của đài kiểm soát không lưu<br>trong không gian là mặt cầu có bán kính bằng 600km.<br>b) Đúng: Ranh giới vùng phát sóng của đài kiểm soát không lưu trong không gian là mặt cầu tâm<br>O(0;0;0) có bán kính bằng R = 600 có phương trình là: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 360000<br>c) Đúng: Ta có OM = (−500)<sup>2</sup> + (100)<sup>2</sup> + (100 11)<sup>2</sup> ≈ 608 > 600 = R.<br>()<br>Vậy, tại vị trí điểm M −500;100;100 11 máy bay nằm ngoài vùng kiểm soát không không lưu<br>của đài kiểm soát không lưu sân bay.<br>{ x = −1000 + 100t<br>d) Sai: Thay d:; y = −300 + 80t (t ∈ ℝ) vào phương trình mặt cầux<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 360000<br>}z = 100 11<br>(100t−1000)<sup>2</sup> + (80t−300)<sup>2</sup> + (100 11)<sup>2</sup> = 360000<br>[t = 10 ⇒ B (0;500;100 11)<br>⇔ 164t<sup>2</sup> −2480t + 8400 = 0 ⇔ | 210 (20000 4500)<br>| t = ⇒ C<br>−;;100 11<br>41 41 41<br>Quãng đường máy bay di chuyển trong vùng kiểm soát không lưu là:<br>2 2<br>(20000) (4500) ()<sup>2</sup><br>BC = − + −500 + 100 11−100 11 ≈ 625 km.<br>41 41<br>Vậy thời gian máy bay di chuyển theo đường thẳng d và trong phạm vi kiểm soát không lưu của<br>625 25<br>sân bay là: = giờ.<br>900 36"
      },
      {
        "id": 23,
        "part": 3,
        "shortTag": "P3.1",
        "label": "Phần 3 - Câu 1",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ toạ độ Oxyz, cho I(0;2;3). Tính bán kính mặt cầu tâm I tiếp xúc với trục Oy.",
        "answer": "3",
        "acceptedAnswers": [
          "3"
        ],
        "kqCells": [
          "3",
          "",
          "",
          ""
        ],
        "explanation": "Gọi H hình chiếu vuông góc của I lên trục Oy ⇒ H(0;2;0).<br>Mặt cầu tâm I tiếp xúc với trục Oy nên mặt cầu có bán kính R = IH = 3."
      },
      {
        "id": 24,
        "part": 3,
        "shortTag": "P3.2",
        "label": "Phần 3 - Câu 2",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, gọi (S) là mặt cầu đi qua hai điểm A(3;−1;2),B(1;1;−2) và có tâm thuộc trục Oz. Bán kính của mặt cầu (S) là R. Giá trị R<sup>2</sup> bằng?",
        "answer": "11",
        "acceptedAnswers": [
          "11"
        ],
        "kqCells": [
          "1",
          "1",
          "",
          ""
        ],
        "explanation": "Gọi tâm của mặt cầu là I(a;b;c). Vì I ∈ Oz nên I(0;0;c).<br>Mặt cầu đi qua A,B nên có IA = IB ⇔ IA<sup>2</sup> = IB<sup>2</sup> ⇔ 9 + 1 + (c−2)<sup>2</sup> = 1 + 1 + (c + 2)<sup>2</sup> ⇔ c = 1.<br>Bán kính mặt cầu R = IA = 11.<br>Vậy <i>R = √11 ⇒ R² = <b>11</b></i>."
      },
      {
        "id": 25,
        "part": 3,
        "shortTag": "P3.3",
        "label": "Phần 3 - Câu 3",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai điểm A(1;0;−3), B(−3;−2;−5). Biết rằng tập hợp các điểm M trong không gian thỏa mãn đẳng thức AM<sup>2</sup> + BM<sup>2</sup> = 30 là một mặt cầu (S). Tìm bán kính R của mặt cầu (S).",
        "answer": "3",
        "acceptedAnswers": [
          "3"
        ],
        "kqCells": [
          "3",
          "",
          "",
          ""
        ],
        "explanation": "Gọi tọa độ điểm M(x;y;z). Khi đó AM<sup>2</sup> + BM<sup>2</sup> = 30<br>⇔ (x−1)<sup>2</sup> + y<sup>2</sup> + (z + 3)<sup>2</sup> + (x + 3)<sup>2</sup> + (y + 2)<sup>2</sup> + (z + 5)<sup>2</sup> = 30<br>⇔ 2x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> + 4x + 4y + 16z + 18 = 0 ⇔ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2x + 2y + 8z + 9 = 0<br>⇔ (x + 1)<sup>2</sup> + (y + 1)<sup>2</sup> + (z + 4)<sup>2</sup> = 9 là phương trình của mặt cầu (S), có tâm I(−1;−1;−4) và<br>bán kính R = 3."
      },
      {
        "id": 26,
        "part": 3,
        "shortTag": "P3.4",
        "label": "Phần 3 - Câu 4",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Cho hai điểm A,B cố định trong không gian có độ dài AB là 4. Biết rằng tập hợp các điểm M trong không gian sao cho MA = 3MB là một mặt cầu. Bán kính mặt cầu đó bằng",
        "answer": "1,5",
        "acceptedAnswers": [
          "1,5",
          "1.5"
        ],
        "kqCells": [
          "1",
          ",",
          "5",
          ""
        ],
        "explanation": "2 2 ()<sup>2</sup> ()<sup>2</sup><br>Ta có: MA = 3MB ⇔ MA = 9MB ⇔ MI + IA = 9 MI + IB<br>⇔ IA<sup>2</sup> −9IB<sup>2</sup> + 2MI (IA−9IB) = 8MI<sup>2</sup> (1)<br>1 1 9<br>Gọi I thỏa mãn IA−9IB = 0 ⇔ BI = AB nên IB =;IA =.<br>8 2 2<br>Từ (1) suy ra ⇔ 8MI<sup>2</sup> = 18 ⇔ MI = suy ra M thuộc mặt cầu (S) có tâm là I và bán kính<br>R = = 1,5."
      },
      {
        "id": 27,
        "part": 3,
        "shortTag": "P3.5",
        "label": "Phần 3 - Câu 5",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho điểm M(1;−2;3) và I là hình chiếu vuông góc của M(3;1;2) trên trục Ox. Gọi (S) là mặt cầu có tâm I và đi qua điểm M. Độ dài bán kính mặt cầu bằng bao nhiêu?",
        "answer": "3",
        "acceptedAnswers": [
          "3"
        ],
        "kqCells": [
          "3",
          "",
          "",
          ""
        ],
        "explanation": "Hình chiếu vuông góc của M trên trục Ox là I(1;0;0) ⇒ IM = 22 + 12 + 22 = 3"
      },
      {
        "id": 28,
        "part": 3,
        "shortTag": "P3.6",
        "label": "Phần 3 - Câu 6",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt cầu (S)có tâm là điểm A(1;2;−3)và đi qua điểm B(3;−2;1). Gọi M(1;b;−3) là điểm thuộc mặt cầu biết b ∈ ℕ*. Tung độ điểm M có giá trị bằng bao nhiêu?",
        "answer": "8",
        "acceptedAnswers": [
          "8"
        ],
        "kqCells": [
          "8",
          "",
          "",
          ""
        ],
        "explanation": "Mặt cầu (S)đi qua B(3;−2;1)nên bán kính R = AB<br>⇔ R =<br>(3−1)<sup>2</sup> + (−2−2)<sup>2</sup> + (1 + 3)<sup>2</sup><br>⇔ R = 6<br>Vậy phương trình của mặt cầu (S)là: (x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> = 36.<br>Thay tọa độ điểm M(1;b;−3) vào phương trình mặt cầu (S), ta có:<br>[b−2 = 6 [b = 8<br>(1−1)<sup>2</sup> + (b−2)<sup>2</sup> + (−3 + 3)<sup>2</sup> = 36 ⇔ (b−2)<sup>2</sup><br>= 36 ⇔ ⇔<br>| |<br>b−2 = −6 b = −4<br>Vì b > 0 nên nhận b = 8."
      },
      {
        "id": 29,
        "part": 3,
        "shortTag": "P3.7",
        "label": "Phần 3 - Câu 7",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho mặt cầu (S) có tâm I(2;−4;3) và tiếp xúc với trục Ox. Bán kính của mặt cầu trên bằng bao nhiêu?",
        "answer": "5",
        "acceptedAnswers": [
          "5"
        ],
        "kqCells": [
          "5",
          "",
          "",
          ""
        ],
        "explanation": "Gọi R là bán kính của mặt cầu (S) và H là hình chiếu của I trên trục Ox suy ra H(2;0;0)<br>và R = IH =<br>(2−2)<sup>2</sup> + (0 + 4)<sup>2</sup> + (0−3)<sup>2</sup><br>= 5.<br>Mặt cầu (S) có tâm I(2;−4;3) và bán kính là R = 5."
      },
      {
        "id": 30,
        "part": 3,
        "shortTag": "P3.8",
        "label": "Phần 3 - Câu 8",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, mặt cầu (S) có bán kính bằng 2,tiếp xúc với mặt phẳng (Oyz) và có tâm nằm trên tia Ox. Hoành độ của tâm mặt cầu (S) bằng bao nhiêu?",
        "answer": "2",
        "acceptedAnswers": [
          "2"
        ],
        "kqCells": [
          "2",
          "",
          "",
          ""
        ],
        "explanation": "Gọi I là tâm mặt cầu (S). Vì tâm I nằm trên tia Ox nên I(a;0;0), (a > 0).<br>Vì mặt cầu (S) có bán kính bằng 2,tiếp xúc với mặt phẳng (Oyz) nên ta có:<br>a [a = 2<br>d(I,(Oyz)) = 2 ⇔ = 2 ⇔ a = 2 ⇔.<br>1 a = −2<br>Do a > 0 nên ta nhận a = 2, loại a = −2 suy ra mặt cầu (S) có tâm I(2,0,0)."
      },
      {
        "id": 31,
        "part": 3,
        "shortTag": "P3.9",
        "label": "Phần 3 - Câu 9",
        "topic": "B3.D1: Tâm & Bán kính Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Mặt cầu (S) có tâm I(−1;2;3) và có đúng một điểm chung với mặt phẳng (Oxy). Gọi một giao điểm của mặt cầu (S) với trục Oz là A(a;b;c) (c > 1). Tổng a + b + c bằng bao nhiêu?",
        "answer": "5",
        "acceptedAnswers": [
          "5"
        ],
        "kqCells": [
          "5",
          "",
          "",
          ""
        ],
        "explanation": "Ta có (Oxy):z = 0.<br>Mặt cầu (S) có đúng một điểm chung với mặt phẳng (Oxy) ⇔ R = d (I,(Oxy)) = 3.<br>[z = 5<br>Suy ra (S):(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 9. Cho x = y = 0 ⇒ 12 + 22 + (z−3)<sup>2</sup> = 9 ⇔.<br>z = 1<br>Vì c > 1 nên A(0;0;5) ⇒ a + b + c = 5."
      }
    ]
  },
  "oxyz_b3_d2": {
    "id": "oxyz_b3_d2",
    "category": "oxyz",
    "badge": "BÀI 3 • DẠNG 2",
    "title": "Bài 3 - Dạng 2: Viết phương trình mặt cầu trong không gian",
    "shortTitle": "B3.D2: Viết PT Mặt cầu",
    "baiTitle": "Bài 3. Phương trình mặt cầu",
    "dangTitle": "Dạng 2: Viết phương trình mặt cầu",
    "subtitle": "Bài 3. Phương trình mặt cầu • Gồm Lý thuyết, Phương pháp, 10 Ví dụ tự luận & 76 câu Trắc nghiệm (P1: 50 • P2: 14 • P3: 12)",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">BÀI 3 • DẠNG 2</span>\n    <h4>Bài 3. Phương trình mặt cầu — Dạng 2: Viết phương trình mặt cầu</h4>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-subhead\">Dạng 2: Viết phương trình mặt cầu</div>\n    <div class=\"oxyz-theory-subhead\">Phương pháp: Cần xác định được tọa độ tâm I(a;b;c) và độ dài bán kính r.</div>\n    <div class=\"oxyz-theory-line\">Các bài toán cơ bản:</div>\n    <div class=\"oxyz-theory-line\">Bài toán 1: Mặt cầu có tâm I(a;b;c) và đi qua điểm A(x;y;z) thì bán kính</div>\n    <div class=\"oxyz-theory-line\">A A A</div>\n    <div class=\"oxyz-theory-line\">r = IA = (x −x)<sup>2</sup> + (y − y)<sup>2</sup> + (z −z)<sup>2</sup></div>\n    <div class=\"oxyz-theory-line\">A I A I A I</div>\n    <div class=\"oxyz-theory-line\">Bài toán 2: Mặt cầu (S) có đường kính AB thì</div>\n    <div class=\"oxyz-theory-line\">(x + x y + y z + z)</div>\n    <div class=\"oxyz-theory-bullet\">• Tâm I(a;b;c) là trung điểm của AB hay I A B; A B; A B</div>\n    <div class=\"oxyz-theory-line\">2 2 2</div>\n    <div class=\"oxyz-theory-line\">AB (x −x)<sup>2</sup> + (y − y)<sup>2</sup> + (z −z)<sup>2</sup></div>\n    <div class=\"oxyz-theory-bullet\">• Bán kính r = = B A B A B A</div>\n    <div class=\"oxyz-theory-line\">2 2</div>\n    <div class=\"oxyz-theory-line\">Bài toán 3: Mặt cầu có tâm I(a;b;c) và tiếp xúc với (α):Ax + By + Cz + D = 0 thì bán kính</div>\n    <div class=\"oxyz-theory-line\">Aa + Bb + Cc + D</div>\n    <div class=\"oxyz-theory-line\">r = d</div>\n    <div class=\"oxyz-theory-line\">(I,(α))</div>\n    <div class=\"oxyz-theory-line\">=.</div>\n    <div class=\"oxyz-theory-line\">A<sup>2</sup> + B<sup>2</sup> + C<sup>2</sup></div>\n    <div class=\"oxyz-theory-line\">Bài toán 4: Mặt cầu qua bốn điểm A,B,C,D không đồng phẳng (hay gọi là ngoại tiếp tứ diện ABCD).</div>\n    <div class=\"oxyz-theory-line\">Gọi (S) có dạng x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0 (*)</div>\n    <div class=\"oxyz-theory-bullet\">• Thay tọa độ 4 điểm A,B,C,D vào (*) thì ta được hệ phương trình với 4 ẩn số a,b,c,d</div>\n    <div class=\"oxyz-theory-bullet\">• Giải tìm a,b,c,d.</div>\n    <div class=\"oxyz-theory-bullet\">• Suy ra tâm I(a,b,c), bán kính R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d.</div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Bài tập tự luận 1",
        "question": "Viết phương trình mặt cầu (S): a) có tâm I(7;−3;0), bán kính R = 8 b) có tâm M(3;1;−4) và đi qua điểm N(1;0;1) c) có đường kính AB với A(4;6;8) và B(2;4;4)",
        "figure": null,
        "explanation": "a) Phương trình mặt cầu (S)có tâm I(7;−3;0), bán kính R = 8 là:<br>(x−7)<sup>2</sup> + (y + 3)<sup>2</sup> + z<sup>2</sup> = 82 hay (x−7)<sup>2</sup> + (y + 3)<sup>2</sup> + z<sup>2</sup> = 64.<br>b) Mặt cầu (S) có tâm M(3;1;−4) và đi qua điểm N(1;0;1) nên có bán kính R = MN = 30.<br>Vậy mặt cầu (S) có phương trình là: (x−3)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 4)<sup>2</sup> = (30)<sup>2</sup><br>Hay<br>(x−3)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 4)<sup>2</sup><br>= 30.<br>c) Mặt cầu (S)có đường kính AB với A(4;6;8) và B(2;4;4)nên có tâm J(3;5;6)là trung điểm<br>của ABvà bán kính R = AJ = 6.<br>Vậy mặt cầu (S) có phương trình là: (x−3)<sup>2</sup> + (y−5)<sup>2</sup> + (z−6)<sup>2</sup> = 6."
      },
      {
        "id": 2,
        "label": "Bài tập tự luận 2",
        "question": "Trong không gian Oxyz, cho điểm I(1;−2;3). Viết phương trình mặt cầu tâm I, cắt trục Ox tại hai điểm A và B sao cho AB = 2 3.",
        "figure": null,
        "explanation": "Gọi H là trung điểm của AB thì IH vuông góc với AB và IH = (−2)<sup>2</sup> + 32 = 13.<br>Suy ra bán kính mặt cầu là: R = IA = 3 + 13 = 4.<br>Vậy phương trình mặt cầu là<br>(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup><br>= 16."
      },
      {
        "id": 3,
        "label": "Bài tập tự luận 3",
        "question": "Trong không gian Oxyz, viết phương trình mặt cầu (S) có tâm A(1;2;−3) và tiếp xúc với trục Ox.",
        "figure": null,
        "explanation": "Ta có:R = d(A,Ox) = 22 + (−3)<sup>2</sup> = 13.<br>Phương trình mặt cầu (S) có tâm A(1;2;−3), bán kính R = 13 có phương trình là:<br>(S):(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup><br>= 13."
      },
      {
        "id": 4,
        "label": "Bài tập tự luận 4",
        "question": "Trong không gian với hệ tọa độ Oxyz, cho các điểm A(6;0;0),B(0;4;0) và C(0;0;2). Viết phương trình mặt cầu ngoại tiếp tứ diện OABC.",
        "figure": null,
        "explanation": "Phương trình mặt cầu ngoại tiếp tứ diện OABC có dạng:<br>x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0 (a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d > 0)<br>{ d = 0 { d = 0<br>36−12a + d = 0 a = 3<br>Do O,A,B,C ∈ (S) ⇒; ⇔; ⇒ R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d = 14<br>16−8b + d = 0 b = 2<br>}4−4c + d = 0 }c = 1<br>Mặt cầu tâm I(3;2;1),R = 14 có phương trình (x−3)<sup>2</sup> + (y−2)<sup>2</sup> + (z−1)<sup>2</sup> = 14."
      },
      {
        "id": 5,
        "label": "Bài tập tự luận 5",
        "question": "Trong không gian Oxyz, viết phương trình mặt cầu có tâm nằm trên mặt phẳng (Oyz) và đi qua các điểm A(0;8;0),B(4;6;2),C(0;12;4).",
        "figure": null,
        "explanation": "Gọi tâm mặt cầu là I(0;b;c) ∈ (Oyz). Do A(0;8;0),B(4;6;2),C(0;12;4) thuộc mặt cầu nên<br>Khi đó IA = IB = IC ⇔ (b−8)<sup>2</sup> + c<sup>2</sup> = 16 + (b−6)<sup>2</sup> + (c−2)<sup>2</sup> = (b−12)<sup>2</sup> + (c−4)<sup>2</sup>.<br>{ b−c = 2 { b = 7<br>⇔; ⇔;. Vậy I(0;7;5);R = IA = 26<br>}b + c = 12 }c = 5<br>Phương trình mặt cầu là x<sup>2</sup> + (y−7)<sup>2</sup> + (z−5)<sup>2</sup> = 26."
      },
      {
        "id": 6,
        "label": "Bài tập tự luận 6",
        "question": "Trong không gian Oxyz, gọi (P) là mặt phẳng đi qua điểm A(1;4;−3)và chứa trục Ox. Viết phương trình mặt cầu (S) có tâm I(1;2;1) và tiếp xúc với mặt phẳng (P).",
        "figure": null,
        "explanation": "Ta có OA = (1;4;−3) nên [OA,i] = (0;−3;−4) khi đó mặt phẳng (P) đi qua điểm A(1;4;−3) và<br>có véctơ pháp tuyến n = (0;3;4) nên phương trình mặt phẳng (P) là: 3y + 4z = 0.<br>3.2 + 4.1<br>Lại có: d<br>(I,(P))<br>= = 2.<br>32 + 42<br>Mặt cầu tâm I(1;2;1) bán kính R = d (I,(P)) = 2 có phương trình là<br>(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−1)<sup>2</sup><br>= 4."
      },
      {
        "id": 7,
        "label": "Bài tập tự luận 7",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, hãy viết phương trình mặt cầu đi qua 3 điểm A(−2;3;3),B(−1;1;2),C(4;2;2) và có tâm nằm thuộc mặt phẳng (Oyz).",
        "figure": null,
        "explanation": "Vì mặt cầu có tâm I thuộc mặt phẳng (Oyz) nên tâm có dạng I(0;b;c).<br>Vì mặt cầu đi qua ba điểm A(−2;3;3),B(−1;1;2),C(4;2;2) nên ta có:<br>IA = IB = IC = R ⇔ IA<sup>2</sup> = IB<sup>2</sup> = IC<sup>2</sup> = R<sup>2</sup><br>{ 4 + (3−b)<sup>2</sup> + (3−c)<sup>2</sup> = 1 + (1−b)<sup>2</sup> + (2−c)<sup>2</sup><br>⇔;<br>1 + (1−b)<sup>2</sup> + (2−c)<sup>2</sup> = 16 + (2−b)<sup>2</sup> + (2−c)<sup>2</sup><br>{ 40 + 9−6c + c<sup>2</sup> = 65 + 4−4c + c<sup>2</sup><br>⇔;<br>}b = 9<br>{ −2c = 20 { c = −10<br>⇔; ⇔; ⇒ I(0;9;−10),R = IA = 4 + 36 + 169 = 209.<br>}b = 9 }b = 9<br>Phương trình mặt cầu là x<sup>2</sup> + (y−9)<sup>2</sup> + (z + 10)<sup>2</sup> = 209."
      },
      {
        "id": 8,
        "label": "Bài tập tự luận 8",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho điểm A(−2;−4;5). Viết phương trình của mặt cầu tâm là A và cắt trục Oz tại hai điểm B, C sao cho ΔABC vuông.",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d2_tuluan_q8_p91_1.png",
        "explanation": "Do AB = AC nên ΔABC vuông tại A. Gọi H trung điểm BC suy ra AH = BH = HC.<br>Do đó H là hình chiếu của điểm A lên trục Oz.<br>Ta có: AB<sup>2</sup> = AH<sup>2</sup> + BH<sup>2</sup> = 2AH<sup>2</sup><br>⇒ R = AH 2 = d(A,Oz). 2 = x 2 + y 2. 2 = 2 10<br>A A<br>Vậy mặt cầu có phương trình:<br>(x + 2)<sup>2</sup> + (y + 4)<sup>2</sup> + (z−5)<sup>2</sup><br>= 40<br>{ x = t"
      },
      {
        "id": 9,
        "label": "Bài tập tự luận 9",
        "question": "Trong không gian Oxyz, cho điểm A(1;−1;1) và đường thẳng d:; y = −1−2t,(t ∈ ℝ). Gọi }z = 2−2t (P) là mặt phẳng đi qua A và chứa d. Lập phương trình mặt cầu (S) có tâm I(2;3;−1) sao cho tiếp xúc với (P).",
        "figure": null,
        "explanation": "Đường thẳng d đi qua M(0;−1;2) và có vectơ chỉ phương u = (1;−2;−2).<br>Mặt phẳng (P) có vectơ pháp tuyến n = [AM;u] = (2;−1;2) ⇒ (P):2x− y + 2z−5 = 0.<br>Bán kính mặt cầu R = d = 2 nên phương trình mặt cầu là:(x−2)<sup>2</sup> + (y−3)<sup>2</sup> + (z + 1)<sup>2</sup> = 4.<br>(I;(P))"
      },
      {
        "id": 10,
        "label": "Bài tập tự luận 10",
        "question": "Phần mềm mô phỏng thiết bị thám hiểm đại dương có dạng hình cầu trong không gian Oxyz. Cho biết tọa độ tâm mặt cầu là I(360;200;400) và bán kính r = 2m. Viết phương trình mặt cầu.",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d2_tuluan_q10_p91_2.png",
        "explanation": "Phương trình mặt cầu tâm I(360;200;400) và bán kính r = 2m là:<br>(x−360)<sup>2</sup> + (y−200)<sup>2</sup> + (z−400)<sup>2</sup> = 4."
      }
    ],
    "questions": [
      {
        "id": 1,
        "part": 1,
        "shortTag": "P1.1",
        "label": "Phần 1 - Câu 1",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai điểm A(1;1;2) và B(3;1;0). Mặt cầu đường kính AB có phương trình là",
        "options": {
          "A": "(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 8.",
          "B": "(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 2.",
          "C": "(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z−2)<sup>2</sup> = 8.",
          "D": "(x−3)<sup>2</sup> + (y−1)<sup>2</sup> + z<sup>2</sup> = 2."
        },
        "answer": "B",
        "explanation": "Mặt cầu có tâm I(2;1;1). Mặt cầu có bán kính R = AI = 2<br>Vậy mặt cầu có phương trình:<br>(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup><br>= 2."
      },
      {
        "id": 2,
        "part": 1,
        "shortTag": "P1.2",
        "label": "Phần 1 - Câu 2",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai điểm I(1;0;−1) và A(2;2;−3). Mặt cầu (S) tâm I và đi qua điểm A có phương trình là",
        "options": {
          "A": "(x−1)<sup>2</sup> + y<sup>2</sup> + (z + 1)<sup>2</sup> = 9.",
          "B": "(x−1)<sup>2</sup> + y<sup>2</sup> + (z + 1)<sup>2</sup> = 3.",
          "C": "(x + 1)<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> = 9.",
          "D": "(x + 1)<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> = 3."
        },
        "answer": "A",
        "explanation": "Bán kính mặt cầu R = IA = (2−1)<sup>2</sup> + 22 + (−3 + 1)<sup>2</sup> = 3.<br>Vậy mặt cầu (S) tâm I và đi qua điểm A có phương trình là (x−1)<sup>2</sup> + y<sup>2</sup> + (z + 1)<sup>2</sup> = 9."
      },
      {
        "id": 3,
        "part": 1,
        "shortTag": "P1.3",
        "label": "Phần 1 - Câu 3",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai điểm I(1;0;−1) và A(2;2;−3). Mặt cầu (S) tâm I và đi qua điểm A có phương trình là",
        "options": {
          "A": "(x−1)<sup>2</sup> + y<sup>2</sup> + (z + 1)<sup>2</sup> = 9.",
          "B": "(x−1)<sup>2</sup> + y<sup>2</sup> + (z + 1)<sup>2</sup> = 3.",
          "C": "(x + 1)<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> = 9.",
          "D": "(x + 1)<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> = 3."
        },
        "answer": "A",
        "explanation": "Bán kính mặt cầu R = IA = (2−1)<sup>2</sup> + 22 + (−3 + 1)<sup>2</sup> = 3.<br>Vậy mặt cầu (S) tâm I và đi qua điểm A có phương trình là (x−1)<sup>2</sup> + y<sup>2</sup> + (z + 1)<sup>2</sup> = 9."
      },
      {
        "id": 4,
        "part": 1,
        "shortTag": "P1.4",
        "label": "Phần 1 - Câu 4",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Phương trình mặt cầu tâm I(1;2;3) và bán kính R = 3 là",
        "options": {
          "A": "(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 9.",
          "B": "(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 3",
          "C": "(x + 1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z + 3)<sup>2</sup> = 9.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2x + 4y + 6z + 5 = 0."
        },
        "answer": "A",
        "explanation": "Phương trình mặt cầu tâm I(1;2;3) và bán kính R = 3 là: (x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 9."
      },
      {
        "id": 5,
        "part": 1,
        "shortTag": "P1.5",
        "label": "Phần 1 - Câu 5",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt cầu đường kính AB với A(0;−3;2),B(2;1;−2) có phương trình là",
        "options": {
          "A": "(x + 1)<sup>2</sup> + (y−1)<sup>2</sup> + z<sup>2</sup> = 3.",
          "B": "(x−1)<sup>2</sup> + (y + 1)<sup>2</sup> + z<sup>2</sup> = 3.",
          "C": "(x + 1)<sup>2</sup> + (y−1)<sup>2</sup> + z<sup>2</sup> = 9.",
          "D": "(x−1)<sup>2</sup> + (y + 1)<sup>2</sup> + z<sup>2</sup> = 9."
        },
        "answer": "D",
        "explanation": "Ta có AB = 4 + 16 + 16 = 6.<br>AB<br>Mặt cầu đường kính AB có tâm I(1;−1;0), bán kính R = = 3.<br>Khi đó phương trình mặt cầu cần tìm là (x−1)<sup>2</sup> + (y + 1)<sup>2</sup> + z<sup>2</sup> = 9."
      },
      {
        "id": 6,
        "part": 1,
        "shortTag": "P1.6",
        "label": "Phần 1 - Câu 6",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz viết phương trình mặt cầu (S) có tâm I(2;1;2) và, bán kính R = 3.",
        "options": {
          "A": "(S):(x + 2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z + 2)<sup>2</sup> = 9",
          "B": "(S):(x + 2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z + 2)<sup>2</sup> = 3..",
          "C": "(S):(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−2)<sup>2</sup> = 3",
          "D": "(S):(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−2)<sup>2</sup> = 9.."
        },
        "answer": "D",
        "explanation": "Mặt cầu (S) có tâm I(2;1;2) và bán kính R = 3 thì phương trình chính tắc của (S) là<br>(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−2)<sup>2</sup><br>= 9."
      },
      {
        "id": 7,
        "part": 1,
        "shortTag": "P1.7",
        "label": "Phần 1 - Câu 7",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt cầu có tâm I(4;−4;2) và đi qua gốc tọa độ có phương trình là",
        "options": {
          "A": "(x + 4)<sup>2</sup> + (y−4)<sup>2</sup> + (z + 2)<sup>2</sup> = 6.",
          "B": "(x + 4)<sup>2</sup> + (y−4)<sup>2</sup> + (z + 2)<sup>2</sup> = 36.",
          "C": "(x−4)<sup>2</sup> + (y + 4)<sup>2</sup> + (z−2)<sup>2</sup> = 36.",
          "D": "(x−4)<sup>2</sup> + (y + 4)<sup>2</sup> + (z−2)<sup>2</sup> = 6."
        },
        "answer": "C",
        "explanation": "Mặt cầu tâm I(4;−4;2) có bán kính bằng R = OI = (4−0)<sup>2</sup> + (−4−0)<sup>2</sup> + (2−0)<sup>2</sup> = 6.<br>Vậy<br>(S):(x−4)<sup>2</sup> + (y + 4)<sup>2</sup> + (z−2)<sup>2</sup><br>= 36."
      },
      {
        "id": 8,
        "part": 1,
        "shortTag": "P1.8",
        "label": "Phần 1 - Câu 8",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình mặt cầu có tâm I(2;−1;3) và đi qua điểm A(1;2;−1) là",
        "options": {
          "A": "(x−2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−3)<sup>2</sup> = 26.",
          "B": "(x + 2)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 3)<sup>2</sup> = 26.",
          "C": "(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 26.",
          "D": "(x−2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−3)<sup>2</sup> = 26."
        },
        "answer": "A",
        "explanation": "Ta có R = IA = (1−2)<sup>2</sup> + (2 + 1)<sup>2</sup> + (−1−3)<sup>2</sup> = 26. Vậy phương trình mặt cầu tâm I và đi<br>qua điểm A có phương trình là (x−2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−3)<sup>2</sup> = 26."
      },
      {
        "id": 9,
        "part": 1,
        "shortTag": "P1.9",
        "label": "Phần 1 - Câu 9",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S) có tâm I(0;0;−3)và tiếp xúc với mặt phẳng (P):2x−2y−z + 12 = 0. Phương trình của (S) là",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> + (z + 3)<sup>2</sup> = 25.",
          "B": "x<sup>2</sup> + y<sup>2</sup> + (z + 3)<sup>2</sup> = 5.",
          "C": "x<sup>2</sup> + y<sup>2</sup> + (z−3)<sup>2</sup> = 25.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + (z−3)<sup>2</sup> = 5."
        },
        "answer": "A",
        "explanation": "2.0−2.0 + 3 + 12<br>Do mặt cầu tiếp xúc với mặt phẳng (P) ⇒ R = d(I,(P)) = = 5.<br>22 + (−2)<sup>2</sup> + (−1)<sup>2</sup><br>Vậy phương trình cầu (S) có tâm I(0;0;−3) và bán kính R = 5 là: x<sup>2</sup> + y<sup>2</sup> + (z + 3)<sup>2</sup> = 25."
      },
      {
        "id": 10,
        "part": 1,
        "shortTag": "P1.10",
        "label": "Phần 1 - Câu 10",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Phương trình mặt cầu tâm I(1;2;3) và bán kính R = 3 là:",
        "options": {
          "A": "(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 9.",
          "B": "(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 3.",
          "C": "(x + 1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z + 3)<sup>2</sup> = 9.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2x + 4y + 6z + 5 = 0."
        },
        "answer": "A",
        "explanation": "Phương trình mặt cầu tâm I(1;2;3) và bán kính R = 3 là: (x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 9<br>Phương trình dạng khai triển: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−4y−6z + 5 = 0"
      },
      {
        "id": 11,
        "part": 1,
        "shortTag": "P1.11",
        "label": "Phần 1 - Câu 11",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian tọa độ Oxyz, mặt cầu (S) có tâm I(−1;0;2) và bán kính R = 4 có phương trình là",
        "options": {
          "A": "(x−1)<sup>2</sup> + y<sup>2</sup> + (z + 2)<sup>2</sup> = 4.",
          "B": "(x + 1)<sup>2</sup> + y<sup>2</sup> + (z + 2)<sup>2</sup> = 16.",
          "C": "(x + 1)<sup>2</sup> + y<sup>2</sup> + (z−2)<sup>2</sup> = 4.",
          "D": "(x + 1)<sup>2</sup> + y<sup>2</sup> + (z−2)<sup>2</sup> = 16."
        },
        "answer": "D",
        "explanation": "Phương trình mặt cầu (S) có tâm I(−1;0;2) và bán kính R = 4 là<br>(x + 1)<sup>2</sup> + y<sup>2</sup> + (z−2)<sup>2</sup> = 16."
      },
      {
        "id": 12,
        "part": 1,
        "shortTag": "P1.12",
        "label": "Phần 1 - Câu 12",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình của mặt cầu có đường kính AB với A(2;1;0) và B(0;1;2) là",
        "options": {
          "A": "(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 4.",
          "B": "(x + 1)<sup>2</sup> + (y + 1)<sup>2</sup> + (z + 1)<sup>2</sup> = 2.",
          "C": "(x + 1)<sup>2</sup> + (y + 1)<sup>2</sup> + (z + 1)<sup>2</sup> = 4.",
          "D": "(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 2."
        },
        "answer": "D",
        "explanation": "AB<br>Ta có tọa độ tâm mặt cầu là (1;1;1), bán kính bằng = (−2)<sup>2</sup> + 22 = 2.<br>2 2<br>Phương trình mặt cầu cần tìm là<br>(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup><br>= 2."
      },
      {
        "id": 13,
        "part": 1,
        "shortTag": "P1.13",
        "label": "Phần 1 - Câu 13",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, phương trình mặt cầu tâm I(1;−2;3), bán kính R = 2 là",
        "options": {
          "A": "x<sup>2</sup> + 2y<sup>2</sup> + 3z<sup>2</sup> = 4.",
          "B": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> = 4.",
          "C": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 4.",
          "D": "(x−1)<sup>2</sup> −(y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 4."
        },
        "answer": "C",
        "explanation": "Phương trình mặt cầu tâm I(1;−2;3) bán kính R = 2 là (x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 4."
      },
      {
        "id": 14,
        "part": 1,
        "shortTag": "P1.14",
        "label": "Phần 1 - Câu 14",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt cầu tâm I(0;1;−2) và đi qua điểm M(1;0;−1) có phương trình là:",
        "options": {
          "A": "x<sup>2</sup> + (y + 1)<sup>2</sup> + (z−2)<sup>2</sup> = 9.",
          "B": "(x−1)<sup>2</sup> + y<sup>2</sup> + (z + 1)<sup>2</sup> = 9.",
          "C": "x<sup>2</sup> + (y−1)<sup>2</sup> + (z + 2)<sup>2</sup> = 3.",
          "D": "x<sup>2</sup> + (y + 1)<sup>2</sup> + (z−2)<sup>2</sup> = 3."
        },
        "answer": "C",
        "explanation": "Ta có phương trình mặt cầu tâm I(0;1;−2) và bán kính R có dạng:<br>x<sup>2</sup> + (y−1)<sup>2</sup> + (z + 2)<sup>2</sup> = R<sup>2</sup>.<br>Mặt khác mặt cầu đó đi qua điểm M(1;0;−1) nên: 12 + (0−1)<sup>2</sup> + (−1 + 2)<sup>2</sup> = R<sup>2</sup> ⇔ R<sup>2</sup> = 3.<br>Vậy phương trình mặt cầu tâm I(0;1;−2) và đi qua điểm M(1;0;−1) là:<br>x<sup>2</sup> + (y−1)<sup>2</sup> + (z + 2)<sup>2</sup> = 3."
      },
      {
        "id": 15,
        "part": 1,
        "shortTag": "P1.15",
        "label": "Phần 1 - Câu 15",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm M(1;−2;3). Gọi I là hình chiếu vuông góc của M trên trục Ox. Phương trình nào dưới đây là phương trình mặt cầu tâm I bán kính IM?",
        "options": {
          "A": "(x + 1)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 13.",
          "B": "(x−1)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 13.",
          "C": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 13.",
          "D": "(x−1)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 13."
        },
        "answer": "D",
        "explanation": "Vì I là hình chiếu vuông góc của M(1;−2;3) trên trục Ox nên I(1;0;0).<br>Bán kính: R = IM = (1−1)<sup>2</sup> + (−2−0)<sup>2</sup> + (3−0)<sup>2</sup> = 13.<br>Vậy phương trình mặt cầu cần tìm là (x−1)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 13."
      },
      {
        "id": 16,
        "part": 1,
        "shortTag": "P1.16",
        "label": "Phần 1 - Câu 16",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, phương trình mặt cầu (S) có tâm I(−1;2;1) và đi qua điểm A(0;4;−1) là",
        "options": {
          "A": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−1)<sup>2</sup> = 3.",
          "B": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 9.",
          "C": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 3.",
          "D": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−1)<sup>2</sup> = 9."
        },
        "answer": "D",
        "explanation": "Ta có bán kính R =<br>IA = 3 ⇒ (S):(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−1)<sup>2</sup><br>= 9."
      },
      {
        "id": 17,
        "part": 1,
        "shortTag": "P1.17",
        "label": "Phần 1 - Câu 17",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S) có tâm I(0;0;−3) và đi qua điểm M(4;0;0). Phương trình của (S) là",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> + (z + 3)<sup>2</sup> = 5.",
          "B": "x<sup>2</sup> + y<sup>2</sup> + (z−3)<sup>2</sup> = 5.",
          "C": "x<sup>2</sup> + y<sup>2</sup> + (z + 3)<sup>2</sup> = 25.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + (z−3)<sup>2</sup> = 25."
        },
        "answer": "C",
        "explanation": "Mặt cầu (S) có tâm I(0;0;−3) và R = IM = 42 + 0 + 32 = 5 nên (S) có phương trình:<br>x<sup>2</sup> + y<sup>2</sup> + (z + 3)<sup>2</sup> = 25."
      },
      {
        "id": 18,
        "part": 1,
        "shortTag": "P1.18",
        "label": "Phần 1 - Câu 18",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho tứ diện ABCD với A(3;4;0), B(2;5;4), C(−1;1;1), D(3;5;3). Viết phương trình mặt cầu ngoại tiếp tứ diện đó",
        "options": {
          "A": "(x + 1)<sup>2</sup> + (y + 3)<sup>2</sup> + (z + 2)<sup>2</sup> = 9.",
          "B": "(x−1)<sup>2</sup> + (y−3)<sup>2</sup> + (z−2)<sup>2</sup> = 9.",
          "C": "(x + 1)<sup>2</sup> + (y−3)<sup>2</sup> + (z−2)<sup>2</sup> = 9.",
          "D": "(x−1)<sup>2</sup> + (y + 3)<sup>2</sup> + (z−2)<sup>2</sup> = 9."
        },
        "answer": "B",
        "explanation": "Gọi mặt cầu ngoại tiếp tứ diện ABCD có dạng (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0<br>{ 9 + 16−6a−8b + d = 0 { a = 1<br>4 + 25 + 16−4a−10b−8c + d = 0 b = 3<br>Ta có A, B, C, D ∈ (S) ⇔; ⇔;.<br>1 + 1 + 1 + 2a−2b−2c + d = 0 c = 2<br>} 9 + 25 + 9−6a−10b−6c + d = 0 }d = 5<br>Suy ra R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d = 1 + 32 + 22 −5 = 3<br>Vậy phương trình mặt cầu là<br>(S):(x−1)<sup>2</sup> + (y−3)<sup>2</sup> + (z−2)<sup>2</sup><br>= 9"
      },
      {
        "id": 19,
        "part": 1,
        "shortTag": "P1.19",
        "label": "Phần 1 - Câu 19",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho bốn điểm A(2;0;0), B(0;2;0), C(0;0;2), D(2;2;2). Mặt cầu ngoại tiếp tứ diện ABCD có bán kính bằng 2 3",
        "options": {
          "A": "3.",
          "B": "3.",
          "C": ".",
          "D": ". 3 2"
        },
        "answer": "B",
        "explanation": "Gọi (S) là mặt cầu ngoại tiếp tứ diện ABCD.<br>Phương trình (S) có dạng: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0.<br>Vì (S) đi qua bốn điểm A, B, C, D nên ta có hệ phương trình<br>{ −4a + d = −4 { a = 1<br>−4b + d = −4 b = 1<br>; ⇔;.<br>−4c + d = −4 c = 1<br>}−4a−4b−4c + d = −12 }d = 0<br>Vậy bán kính mặt cầu (S) là: R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d = 3."
      },
      {
        "id": 20,
        "part": 1,
        "shortTag": "P1.20",
        "label": "Phần 1 - Câu 20",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Mặt cầu tâm I(5;3;−2) và đi qua điểm A(3;−1;2) có phương trình",
        "options": {
          "A": "(x−5)<sup>2</sup> + (y−3)<sup>2</sup> + (z + 2)<sup>2</sup> = 36.",
          "B": "(x−5)<sup>2</sup> + (y−3)<sup>2</sup> + (z + 2)<sup>2</sup> = 6.",
          "C": "(x + 5)<sup>2</sup> + (y + 3)<sup>2</sup> + (z−2)<sup>2</sup> = 36.",
          "D": "(x + 5)<sup>2</sup> + (y + 3)<sup>2</sup> + (z−2)<sup>2</sup> = 6.."
        },
        "answer": "A",
        "explanation": "Bán kính R = IA = (3−5)<sup>2</sup> + (−1−3)<sup>2</sup> + (2 + 2)<sup>2</sup> = 6<br>Mặt cầu tâm I(5;3;−2) và đi qua điểm A(3;−1;2) có phương trình là<br>(x−5)<sup>2</sup> + (y−3)<sup>2</sup> + (z + 2)<sup>2</sup><br>= 36."
      },
      {
        "id": 21,
        "part": 1,
        "shortTag": "P1.21",
        "label": "Phần 1 - Câu 21",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S)có tâm I(2;2;−1) và tiếp xúc với mặt phẳng (α):x− y−z + 2 = 0. Phương trình mặt cầu (S)là",
        "options": {
          "A": "(x−2)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 9.",
          "B": "(x−2)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 3.",
          "C": "(x + 2)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−1)<sup>2</sup> = 3.",
          "D": "(x + 2)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−1)<sup>2</sup> = 9."
        },
        "answer": "B",
        "explanation": "2−2 + 1 + 2<br>Bán kính mặt cầu (S) là R = d (I;(α)) = = 3.<br>12 + (−1)<sup>2</sup> + (−1)<sup>2</sup><br>Mặt cầu (S) có tâm I(2;2;−1), bán kính R = 3 có phương trình là:<br>(x−2)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup><br>= 3."
      },
      {
        "id": 22,
        "part": 1,
        "shortTag": "P1.22",
        "label": "Phần 1 - Câu 22",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai điểm A(1;3;−2), B(3;−1;4). Mặt cầu đường kính AB có phương trình",
        "options": {
          "A": "(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 14.",
          "B": "(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 14.",
          "C": "(x + 2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z + 1)<sup>2</sup> = 14.",
          "D": "(x + 2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z + 1)<sup>2</sup> = 14."
        },
        "answer": "B",
        "explanation": "Tọa độ trung điểm I của đoạn thẳng AB là I(2;1;1). Độ dài đoạn thẳng AB là AB = 2 14.<br>AB<br>Mặt cầu đường kính AB có tâm I và bán kính R = = 14 có phương trình là<br>(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup><br>= 14."
      },
      {
        "id": 23,
        "part": 1,
        "shortTag": "P1.23",
        "label": "Phần 1 - Câu 23",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai điểm A(−1;−3;4) và B(3;−1;2). Phương trình mặt cầu đường kính AB là",
        "options": {
          "A": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> = 6.",
          "B": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 24.",
          "C": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> = 24.",
          "D": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 6."
        },
        "answer": "D",
        "explanation": "Gọi I là trung điểm của AB, ta có:I(1;−2;3).<br>Mặt cầu đường kính AB có tâm là trung điểm I(1;−2;3) của AB và bán kính<br>1 1<br>R = AB =<br>(3 + 1)<sup>2</sup> + (−1 + 3)<sup>2</sup> + (2−4)<sup>2</sup><br>= 6.<br>2 2<br>Vậy phương trình mặt cầu đường kính ABlà: (x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 6."
      },
      {
        "id": 24,
        "part": 1,
        "shortTag": "P1.24",
        "label": "Phần 1 - Câu 24",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian hệ trục tọa độ Oxyz, cho điểm A(2;0;1). Phương trình mặt cầu tâm A tiếp xúc với mặt phẳng (Oxy) là",
        "options": {
          "A": "(S):(x + 2)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 1.",
          "B": "(S):(x−2)<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> = 5.",
          "C": "(S):(x−2)<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> = 4.",
          "D": "(S):(x + 2)<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> = 1."
        },
        "answer": "D",
        "explanation": "Ta có phương trình mặt phẳng(Oxy): z = 0 nên khoảng cách từ điểm A đến mặt phẳng (Oxy)<br>bằng 1 ⇒ bán kính mặt cầu là R = 1.<br>Mặt cầu (S) tâm A(2;0;1), bán kính R = 1 có phương trình: (S):(x−2)<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> = 1."
      },
      {
        "id": 25,
        "part": 1,
        "shortTag": "P1.25",
        "label": "Phần 1 - Câu 25",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian hệ trục tọa độ Oxyz, cho điểm A(−1;2;3). Phương trình mặt cầu tâm A và tiếp xúc với trục Oz là",
        "options": {
          "A": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z + 3)<sup>2</sup> = 5.",
          "B": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 4.",
          "C": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 5.",
          "D": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 25."
        },
        "answer": "C",
        "explanation": "Gọi H là hình chiếu vuông góc của A trên trục Oz, suy ra H(0;0;3).<br>Mặt cầu tâm A và tiếp xúc với trục Oz có bán kính R = d(A,(Oz)) = AH = 5.<br>Vậy mặt cầu tâm A và tiếp xúc với trục Oz có phương trình: (x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 5."
      },
      {
        "id": 26,
        "part": 1,
        "shortTag": "P1.26",
        "label": "Phần 1 - Câu 26",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt cầu (S) có đường kính AB với tọa độ các điểm A(2;0;−1), B(0;−2;3). Phương trình mặt cầu (S) là",
        "options": {
          "A": "(x−1)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−1)<sup>2</sup> = 24.",
          "B": "(x + 1)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−1)<sup>2</sup> = 24.",
          "C": "(x−1)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−1)<sup>2</sup> = 6.",
          "D": "(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 25."
        },
        "answer": "C",
        "explanation": "Gọi I là trung điểm của AB. Suy ra mặt cầu (S) có tâm là I(1;−1;1) và bán kính<br>R = IA = 12 + 12 + (−2)<sup>2</sup> = 6.<br>Phương trình mặt cầu đường kính AB là:<br>(x−1)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−1)<sup>2</sup><br>= 6."
      },
      {
        "id": 27,
        "part": 1,
        "shortTag": "P1.27",
        "label": "Phần 1 - Câu 27",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, A(−3; 4; 2), B(−5; 6; 2), C(−10; 17;−7). Viết phương trình mặt cầu tâm C, bán kính AB.",
        "options": {
          "A": "(x + 10)<sup>2</sup> + (y−17)<sup>2</sup> + (z−7)<sup>2</sup> = 8.",
          "B": "(x + 10)<sup>2</sup> + (y−17)<sup>2</sup> + (z + 7)<sup>2</sup> = 8.",
          "C": "(x−10)<sup>2</sup> + (y−17)<sup>2</sup> + (z + 7)<sup>2</sup> = 8.",
          "D": "(x + 10)<sup>2</sup> + (y + 17)<sup>2</sup> + (z + 7)<sup>2</sup> = 8."
        },
        "answer": "B",
        "explanation": "Ta có AB = (−2;2;0) ⇒ AB = 22 + 22 = 2 2.<br>Phương trình mặt cầu tâm C bán kính AB: (x + 10)<sup>2</sup> + (y−17)<sup>2</sup> + (z + 7)<sup>2</sup> = 8."
      },
      {
        "id": 28,
        "part": 1,
        "shortTag": "P1.28",
        "label": "Phần 1 - Câu 28",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục toạ độ Oxyz, cho hai điểm A(−1;2;1), B(0;2;3). Viết phương trình mặt cầu đường kính AB. 2 2 (1) 5 (1) 5",
        "options": {
          "A": "x + + (y−2)<sup>2</sup> + (z−2)<sup>2</sup> =.",
          "B": "x− + (y−2)<sup>2</sup> + (z−2)<sup>2</sup> =. 2 4 2 4 2 2 (1) 5 (1) 5",
          "C": "x + + (y + 2)<sup>2</sup> + (z−2)<sup>2</sup> =.",
          "D": "x + + (y−2)<sup>2</sup> + (z + 2)<sup>2</sup> =. 2 4 2 4"
        },
        "answer": "A",
        "explanation": "(1)<br>Gọi I là tâm mặt cầu đường kính AB, suy ra I là trung điểm của đoạn AB ⇒ I −;2;2<br>AB 5<br>Bán kính mặt cầu là R = =.<br>2 2<br>(1) 5<br>Phương trình mặt cầu đường kính AB là x + + (y−2)<sup>2</sup> + (z−2)<sup>2</sup> =.<br>2 4"
      },
      {
        "id": 29,
        "part": 1,
        "shortTag": "P1.29",
        "label": "Phần 1 - Câu 29",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai điểm A(2;−1;0),B(0;3;−4). Phương trình nào sau đây là phương trình mặt cầu đường kính AB",
        "options": {
          "A": "(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z−2)<sup>2</sup> = 3.",
          "B": "(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z−2)<sup>2</sup> = 9.",
          "C": "(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 2)<sup>2</sup> = 3.",
          "D": "(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 2)<sup>2</sup> = 9."
        },
        "answer": "D",
        "explanation": "Gọi I trung điểm AB suy ra I là tâm mặt cầu đường kính AB<br>Tọa độ điểm I là I(1;1;−2) và R = IA = 3.<br>Phương trình mặt cầu đường kính AB là<br>(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 2)<sup>2</sup><br>= 9."
      },
      {
        "id": 30,
        "part": 1,
        "shortTag": "P1.30",
        "label": "Phần 1 - Câu 30",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt cầu đường kính ABvới A(0;1;2) và B(4;5;−4) có phương trình là",
        "options": {
          "A": "(x + 2)<sup>2</sup> + (y + 3)<sup>2</sup> + (z−1)<sup>2</sup> = 68.",
          "B": "(x + 2)<sup>2</sup> + (y + 3)<sup>2</sup> + (z−1)<sup>2</sup> = 68.",
          "C": "(x−2)<sup>2</sup> + (y−3)<sup>2</sup> + (z + 1)<sup>2</sup> = 17.",
          "D": "(x−2)<sup>2</sup> + (y−3)<sup>2</sup> + (z + 1)<sup>2</sup> = 17."
        },
        "answer": "C",
        "explanation": "Gọi I là tâm mặt cầu suy ra I là trung điểm của AB ⇒ I(2;3;−1).<br>Bán kính mặt cầu r = IA = 17.<br>Phương trình mặt cầu là:<br>(x−2)<sup>2</sup> + (y−3)<sup>2</sup> + (z + 1)<sup>2</sup><br>= 17."
      },
      {
        "id": 31,
        "part": 1,
        "shortTag": "P1.31",
        "label": "Phần 1 - Câu 31",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian tọa độ Oxyz, cho mặt cầu (S) có tâm A(2;1;1) và tiếp xúc với mặt phẳng (P):2x− y + 2z + 1 = 0. Phương trình mặt cầu (S) là",
        "options": {
          "A": "(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 3.",
          "B": "(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 9.",
          "C": "(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 4.",
          "D": "(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 16."
        },
        "answer": "C",
        "explanation": "Bán kính mặt cầu (S) có tâm A(2;1;1) và tiếp xúc với mặt phẳng (P):2x− y + 2z + 1 = 0 là:<br>2.2−1 + 2 + 1<br>R = d(A,(P)) = = 2.<br>Vậy phương trình mặt cầu (S) là (x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 4"
      },
      {
        "id": 32,
        "part": 1,
        "shortTag": "P1.32",
        "label": "Phần 1 - Câu 32",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Cho mặt cầu (S) đi qua A(3;1;0), B(5;5;0) và có tâm I thuộc trục Ox. Mặt cầu (S) có phương trình là",
        "options": {
          "A": "(x + 10)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 5 2.",
          "B": "(x−10)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 5 2.",
          "C": "(x−10)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 50.",
          "D": "(x + 10)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 50."
        },
        "answer": "C",
        "explanation": "Ta có tâm I thuộc trục Ox nên I(x;0;0).<br>Ta có (S) đi qua A, B nên IA = IB ⇔ IA<sup>2</sup> = IB<sup>2</sup> ⇔ (3−x)<sup>2</sup> + 12 = (5−x)<sup>2</sup> + 52<br>⇔ 10−6x + x<sup>2</sup> = 50−10x + x<sup>2</sup> ⇔ 4x = 40 ⇔ x = 10.<br>Suy ra I(10;0;0) do đó R = IA = 5 2. Vậy (S):(x−10)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 50."
      },
      {
        "id": 33,
        "part": 1,
        "shortTag": "P1.33",
        "label": "Phần 1 - Câu 33",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục toạ độ Oxyz, cho hai điểm A(1;−2;3) và B(5;4;7). Phương trình mặt cầu nhận AB làm đường kính là",
        "options": {
          "A": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 17.",
          "B": "(x−3)<sup>2</sup> + (y−1)<sup>2</sup> + (z−5)<sup>2</sup> = 17.",
          "C": "(x−5)<sup>2</sup> + (y−4)<sup>2</sup> + (z−7)<sup>2</sup> = 17.",
          "D": "(x−6)<sup>2</sup> + (y−2)<sup>2</sup> + (z−10)<sup>2</sup> = 17."
        },
        "answer": "B",
        "explanation": "Gọi I là tâm của mặt cầu suy ra I là trung điểm của AB suy ra I(3;1;5)<br>AB<br>(5−1)<sup>2</sup> + (4 + 2)<sup>2</sup> + (7−3)<sup>2</sup><br>Ta có bán kính của mặt cầu R = = = 17<br>2 2<br>Vậy phương trình mặt cầu nhận AB làm đường kính là<br>(x−3)<sup>2</sup> + (y−1)<sup>2</sup> + (z−5)<sup>2</sup><br>= 17."
      },
      {
        "id": 34,
        "part": 1,
        "shortTag": "P1.34",
        "label": "Phần 1 - Câu 34",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm I(1;−2;3) và mặt phẳng (P):2x− y + 2z−1 = 0. Mặt cầu (S) có tâm I và tiếp xúc với mặt phẳng (P) có phương trình",
        "options": {
          "A": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 9.",
          "B": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 3.",
          "C": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> = 9.",
          "D": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> = 3."
        },
        "answer": "A",
        "explanation": "Mặt cầu (S) có tâm I(1;−2;3) và tiếp xúc với mặt phẳng (P):2x− y + 2z−1 = 0 có bán kính<br>2.1−1.(−2 + 2.3−1)<br>là R = d(I,(P)) = = 3.<br>22 + (−1)<sup>2</sup> + 22<br>Phương trình mặt cầu (S) là: (x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 9."
      },
      {
        "id": 35,
        "part": 1,
        "shortTag": "P1.35",
        "label": "Phần 1 - Câu 35",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho ba điểm A(−3;4;2), B(−5;6;2) và C(−10;17;−7). Phương trình mặt cầu tâm C bán kính AB là",
        "options": {
          "A": "(x + 10)<sup>2</sup> + (y−17)<sup>2</sup> + (z−7)<sup>2</sup> = 8.",
          "B": "(x + 10)<sup>2</sup> + (y−17)<sup>2</sup> + (z + 7)<sup>2</sup> = 8.",
          "C": "(x−10)<sup>2</sup> + (y−17)<sup>2</sup> + (z + 7)<sup>2</sup> = 8.",
          "D": "(x + 10)<sup>2</sup> + (y + 17)<sup>2</sup> + (z + 7)<sup>2</sup> = 8."
        },
        "answer": "B",
        "explanation": "Ta có R = AB =<br>(−5 + 3)<sup>2</sup> + (6−4)<sup>2</sup> + (2−2)<sup>2</sup><br>= 2 2. Phương trình mặt cầu tâm C bán kính<br>AB là (x + 10)<sup>2</sup> + (y−17)<sup>2</sup> + (z + 7)<sup>2</sup> = 8."
      },
      {
        "id": 36,
        "part": 1,
        "shortTag": "P1.36",
        "label": "Phần 1 - Câu 36",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz. Hãy viết phương trình mặt cầu có tâm I(2;2;3) và tiếp xúc với mặt phẳng (Oxz).",
        "options": {
          "A": "(x + 2)<sup>2</sup> + (y + 2)<sup>2</sup> + (z + 3)<sup>2</sup> = 4.",
          "B": "(x−2)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 13.",
          "C": "(x−2)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 4.",
          "D": "(x−2)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 2."
        },
        "answer": "C",
        "explanation": "Mặt cầu có tâm I(2;2;3) và tiếp xúc với mặt phẳng (Oxz) nên có bán kính<br>R = d(I,(Oxz)) = 2.<br>Suy ra phương trình mặt cầu:<br>(x−2)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup><br>= 4."
      },
      {
        "id": 37,
        "part": 1,
        "shortTag": "P1.37",
        "label": "Phần 1 - Câu 37",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm I(3;1;−2). Phương trình mặt cầu tâm I tiếp xúc với trục Ox là",
        "options": {
          "A": "(x−3)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 2)<sup>2</sup> = 5.",
          "B": "(x−3)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 2)<sup>2</sup> = 25.",
          "C": "(x + 3)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−2)<sup>2</sup> = 5.",
          "D": "(x + 3)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−2)<sup>2</sup> = 25."
        },
        "answer": "A",
        "explanation": "Gọi H là hình chiếu của I lên trục Ox ta được H(3;0;0).<br>Do mặt cầu tiếp xúc với trục Ox nên R = IH = 5.<br>Vậy phương trình mặt cầu là<br>(x−3)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 2)<sup>2</sup><br>= 5."
      },
      {
        "id": 38,
        "part": 1,
        "shortTag": "P1.38",
        "label": "Phần 1 - Câu 38",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai điểm M(6;2;−5),N(−4;0;7). Viết phương trình mặt cầu đường kính MN?",
        "options": {
          "A": "(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup> = 62.",
          "B": "(x−5)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 6)<sup>2</sup> = 62.",
          "C": "(x + 1)<sup>2</sup> + (y + 1)<sup>2</sup> + (z + 1)<sup>2</sup> = 62.",
          "D": "(x + 5)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−6)<sup>2</sup> = 62."
        },
        "answer": "A",
        "explanation": "Mặt cầu đường kính MN nhận trung điểm I(1;1;1) của đoạn thẳng MN là tâm và có bán kính<br>R = IM = (6−1)<sup>2</sup> + (2−1)<sup>2</sup> + (−5−1)<sup>2</sup> = 62.<br>Vậy phương trình mặt cầu cần tìm là<br>(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z−1)<sup>2</sup><br>= 62."
      },
      {
        "id": 39,
        "part": 1,
        "shortTag": "P1.39",
        "label": "Phần 1 - Câu 39",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt cầu có tâm I(2;1;−3) và tiếp xúc với mặt phẳng (P):4x− y + 2z−5 = 0 có phương trình là 16 16",
        "options": {
          "A": "(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 3)<sup>2</sup> =.",
          "B": "(x + 2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−3)<sup>2</sup> =. 21 21 16 16",
          "C": "(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> =.",
          "D": "(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z−3)<sup>2</sup> =. 441 441"
        },
        "answer": "A",
        "explanation": "Do mặt cầu tiếp xúc với mặt phẳng (P) nên bán kính mặt cầu là<br>4.2−1 + 2.(−3)−5<br>4 21<br>R = d(I,(P)) = =.<br>42 + (−1)<sup>2</sup> + 22 21<br>4 21<br>Phương trình mặt cầu cần tìm có tâm I(2;1;−3), bán kính R = là<br>21<br>(4 21) 16<br>(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 3)<sup>2</sup><br>⇔ (x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 3)<sup>2</sup><br>21 21"
      },
      {
        "id": 40,
        "part": 1,
        "shortTag": "P1.40",
        "label": "Phần 1 - Câu 40",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt phẳng (P):x−2y + 2z−2 = 0 và điểm I(−1;2;−1). Xét (S) là mặt cầu tâm I và cắt (P) theo giao tuyến là đường tròn có bán kính bằng 5. Phương trình của (S) là",
        "options": {
          "A": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 34.",
          "B": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−1)<sup>2</sup> = 34.",
          "C": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 25.",
          "D": "(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 16."
        },
        "answer": "A",
        "explanation": "Gọi (S) có tâm I(−1;2;−1) và bán kính là R.<br>Ta có d(I,(P)) = 3.<br>Vì (P) cắt (S) theo giao tuyến là đường tròn có bán kính bằng r = 5 nên:<br>R<sup>2</sup> = d<sup>2</sup>(I,(P)) + r<sup>2</sup> ⇒ R<sup>2</sup> = 34.<br>Vậy phương trình (S) là (x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 34."
      },
      {
        "id": 41,
        "part": 1,
        "shortTag": "P1.41",
        "label": "Phần 1 - Câu 41",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường tròn (C) tâm O có bán kính bằng 2 và nằm trong mặt phẳng (xOy). Tìm phương trình mặt cầu chứa đường tròn (C) và đi qua điểm A(0;0;−4). 2 25 (3) 25",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> =.",
          "B": "x<sup>2</sup> + y<sup>2</sup> + z− =. 4 2 4 2 (3) 25",
          "C": "x<sup>2</sup> + y<sup>2</sup> + z + =.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + (z + 4)<sup>2</sup> = 1. 2 4"
        },
        "answer": "C",
        "explanation": "Gọi I,R lần lượt là tâm và bán kính của mặt cầu cần tìm. Do IO ⊥ (xOy) nênI ∈ Oz ⇒ I(0;0;c)<br>Ta có R<sup>2</sup> = IA<sup>2</sup> = IO<sup>2</sup> + 22 ⇔ (c + 4)<sup>2</sup> = c<sup>2</sup> + 4 ⇔ 8c = −12 ⇔ c = −.<br>(3) 5 (3) 25<br>Vậy I 0;0;− và R =. Phương trình mặt cầu cần tìm là x<sup>2</sup> + y<sup>2</sup> + z + =.<br>2 2 2 4"
      },
      {
        "id": 42,
        "part": 1,
        "shortTag": "P1.42",
        "label": "Phần 1 - Câu 42",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gianOxyz, cho đường tròn (C) có bán kính bằng 4 nằm trong mặt phẳng (Oxy) có tâm là gốc tọa độ O. Hãy viết phương trình mặt cầu chứa đường tròn (C) đồng thời cắt trục Oz tại điểm A(0;0;8).",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> + (z−4)<sup>2</sup> = 16",
          "B": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 64.",
          "C": "(x−4)<sup>2</sup> + (y−4)<sup>2</sup> + (z−8)<sup>2</sup> = 32.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + (z−3)<sup>2</sup> = 25"
        },
        "answer": "D",
        "explanation": "Đường tròn (C) nằm trong mặt phẳng (Oxy) có tâm là gốc tọa độ Onên có trục là trục Oz.<br>Gọi I,R theo thứ tự là tâm và bán kính của mặt cầu (S) thỏa đề bài thì ta có<br>Mặt cầu (S) chứa đường tròn (C) ⇒ I ∈ Oz ⇒ I(0;0;c) ⇒ d(I,(Oxy)) = IO.<br>Đường tròn (C) nằm trên mặt phẳng (Oxy)và (C) có bán kính<br>r = 4 ⇒ R = IO<sup>2</sup> + r<sup>2</sup> = c<sup>2</sup> + 16 (1)<br>Mặt cầu (S) cắt trục Oz tại điểmA(0;0;8) ⇒ R = IA = (8−c)<sup>2</sup> (2)<br>Từ (1)và (2) ta có c<sup>2</sup> + 16 = (8−c)<sup>2</sup> ⇔ c = 3.<br>Như vậy mặt cầu (S) tâm I(0;0;3), bán kính R = 5 thỏa yêu cầu đề bài.<br>Phương trình của (S)là x<sup>2</sup> + y<sup>2</sup> + (z−3)<sup>2</sup> = 25.<br>x y−2 z + 4 x + 8 y−6 z−10"
      },
      {
        "id": 43,
        "part": 1,
        "shortTag": "P1.43",
        "label": "Phần 1 - Câu 43",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng d: = =; d: = = 1 1 −1 2 2 2 1 −1. Gọi (S) là mặt cầu tiếp xúc với d;d và có bán kính nhỏ nhất. Phương trình của mặt cầu (S) 1 2 là",
        "options": {
          "A": "x<sup>2</sup> + (y−10)<sup>2</sup> + (z−6)<sup>2</sup> = 35.",
          "B": "(x−2)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 35.",
          "C": "(x−2)<sup>2</sup> + (y−10)<sup>2</sup> + (z−6)<sup>2</sup> = 35.",
          "D": "(x−1)<sup>2</sup> + (y−5)<sup>2</sup> + (z−3)<sup>2</sup> = 35."
        },
        "answer": "D",
        "explanation": "Giả sử mặt cầu (S)có tâm là I và bán kính là R tiếp xúc với hai đường thẳng d;d lần lượt tại<br>1 2<br>M;N.<br>Ta có 2R ≥ MN ≥ d(d;d).<br>1 2<br>Vậy MinR = d(d;d)khi MNlà đoạn vuông góc chung của d;d<br>2 1 2 1 2<br>Giải sử M(m;2−m;−4 + 2m);N(−8 + 2n;6 + n;10−n)<br>Lại có u (1;−1;2);u (2;1;−1)lần lượt là véc tơ chỉ phương của d;d.<br>1 2 1 2<br>{ MN ⊥ u { MN.u = 0 { 2n−m−8−n−m−4−2n−4m + 28 = 0<br>Khi đó:; 1 ⇔; 1 ⇔;<br>}MN ⊥ u }MN.u = 0 }4n−2m−16 + n + m + 4 + n + 2m−14 = 0<br>2 2<br>{ n + 6m = 16 { m = 2<br>⇔; ⇔; ⇒ M(2;0;0);N(0;10;6)<br>}6n + m = 26 }n = 4<br>Lúc này (S) có tâm là I(1;5;3)và bán kính là R = IM = 35 nên (S) có phương trình dạng<br>(x−1)<sup>2</sup> + (y−5)<sup>2</sup> + (z−3)<sup>2</sup><br>= 35."
      },
      {
        "id": 44,
        "part": 1,
        "shortTag": "P1.44",
        "label": "Phần 1 - Câu 44",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz cho điểm A(1;−1;2). Gọi M,N,K là hình chiếu vuông góc của A lên ba trục tọa độ. Mặt cầu tâm O tiếp xúc với mặt phẳng (MNK) có phương trình là: 4 1 4",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 6.",
          "B": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> =.",
          "C": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> =.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> =. 3 9 9"
        },
        "answer": "D",
        "explanation": "Ta có: M(1;0;0),N(0;−1;0),K(0;0;2) nên phương tình mặt phẳng (MNK) là:<br>z 2<br>x− y + = 1 ⇔ 2x−2y + z−2 = 0. Mặt cầu cần tìm có bán kính R = d<br>(O;(MNK))<br>2 3<br>Phương trình mặt cầu là: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> ="
      },
      {
        "id": 45,
        "part": 1,
        "shortTag": "P1.45",
        "label": "Phần 1 - Câu 45",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hình chóp S.ABC có các đỉnh S(1;2;−2),A(−1;0;−2), C(3;−4;0). Tam giác ABC vuông tại B có độ dài cạnh BC = 3 3 đồng thời mặt đáy (ABC) vuông góc với mặt bên (SAC). Gọi I là trung điểm của AC. Mặt cầu tâm I và tiếp xúc với mặt phẳng (SBC) có phương trình là: 18 72",
        "options": {
          "A": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z + 1)<sup>2</sup> =.",
          "B": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z + 1)<sup>2</sup> =. 17 17 18 72",
          "C": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z + 1)<sup>2</sup> =.",
          "D": "(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z + 1)<sup>2</sup> =. 11 11"
        },
        "answer": "A",
        "explanation": "Ta có: SA = (−2;−2;0) ⇒ SA = 2 2; SC = (2;−6;2) ⇒ SC = 2 11<br>Khi đó: AC = (4;−4;2) ⇒ AC = 6 ⇒ ΔSAC vuông tại A<br>{ (ABC) ⊥ (SAC)<br>Ta có:; (ABC) ∩ (SAC) = AC ⇒ SA ⊥ (ABC)<br>SA ⊥ AC,SA ⊂ (SAC)<br>Gọi (S) là mặt cầu tâm I(1;−2;−1) và tiếp xúc với mặt phẳng (SBC) ⇒ R = d(I,(SBC))<br>d(I,(SBC))<br>IC 1 1<br>Ta có: IA ∩ (SBC) = C ⇒ = = ⇒ d (I,(SBC)) = d (A,(SBC))<br>d(A,(SBC)) AC 2 2<br>Ta chứng minh được BC ⊥ (SAB)<br>Gọi H là hình chiếu của A trên SB ⇒ AH ⊥ (SBC) ⇒ d(A,(SBC)) = AH<br>AS.AB 6 34 3 34<br>Ta có:AB = AC<sup>2</sup> −BC<sup>2</sup> = 3 ⇒ AH = = ⇒ R =<br>AS<sup>2</sup> + AB<sup>2</sup> 17 17<br>18<br>Phương trình mặt cầu<br>(S):(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z + 1)<sup>2</sup><br>=.<br>17"
      },
      {
        "id": 46,
        "part": 1,
        "shortTag": "P1.46",
        "label": "Phần 1 - Câu 46",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Một vệ tinh quay quanh Trái Đất với độ cao so với mặt đất là 18900 km. Ta xét trong không gian Oxyz với tâm O là tâm Trái Đất, 1 đơn vị dài trong không gian Oxyztương ứng với 6300 km trên thực tế. Biết bán kính Trái Đất khoảng 6300km. Phương trình biểu diễn quỹ đạo chuyển động của vệ tinh đó là",
        "options": {
          "A": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 4.",
          "B": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 16.",
          "C": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 2.",
          "D": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 5."
        },
        "answer": "B",
        "explanation": "Khoảng cách từ tâm Trái Đất đến vệ tinh là 18900 + 6300 = 25200 tương ứng bằng 4 đơn vị.<br>Ta thấy quỹ đạo chuyển động của vệ tinh quanh Trái Đất là một mặt cầu có tâm là tâm Trái Đất<br>có tọa độ là O(0;0;0)và bán kính R = 4. Do đó phương trình mặt cầu là: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 16."
      },
      {
        "id": 47,
        "part": 1,
        "shortTag": "P1.47",
        "label": "Phần 1 - Câu 47",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz (đơn vị đo là cm), mặt sàn nhà đa năng thuộc mặt phẳng Oxy. Một quả cầu bằng nhựa nằm trên mặt sàn nhà đa năng và có tâm I(12;20;50). Khi đó, mặt ngoài của quả cầu nhựa (S) có phương trình là:",
        "options": {
          "A": "(x−12)<sup>2</sup> + (y−20)<sup>2</sup> + (z−50)<sup>2</sup> = 122.",
          "B": "(x + 12)<sup>2</sup> + (y + 20)<sup>2</sup> + (z + 50)<sup>2</sup> = 122.",
          "C": "(x−12)<sup>2</sup> + (y−20)<sup>2</sup> + (z−50)<sup>2</sup> = 202.",
          "D": "(x−12)<sup>2</sup> + (y−20)<sup>2</sup> + (z−50)<sup>2</sup> = 502."
        },
        "answer": "D",
        "explanation": "Do quả cầu nằm trên mặt sàn nhà đa năng nên mặt ngoài của quả cầu tiếp xúc với mặt phẳng Oxy<br>Ta có: d (I,(Oxy)) = R = 50<br>Vậy mặt ngoài của quả cầu (S) có phương trình là(x−12)<sup>2</sup> + (y−20)<sup>2</sup> + (z−50)<sup>2</sup> = 502."
      },
      {
        "id": 48,
        "part": 1,
        "shortTag": "P1.48",
        "label": "Phần 1 - Câu 48",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d2_tuluan_q48_p98_1.png",
        "question": "Trong không gian với hệ tọa độ Oxyz (đơn vị trên mỗi trục là km), một ngọn hải đăng được đặt ở vị trí I(1;5;5)như hình vẽ. Ngọn hải đăng được thiết kế với bán kính phủ sáng là5km. Một người đi biển di chuyển theo đường thẳng từ vị trí I(1;5;5)đến vị trí A(7;14;11).Điểm nào sau đây mà người đi biển đi qua và vẫn thuộc vùng phủ sáng của ngọn hải đăng?",
        "options": {
          "A": "M(3;8;7).",
          "B": "N(0;4;8).",
          "C": "P(7;3;0).",
          "D": "Q(7;11;3)."
        },
        "answer": "A",
        "explanation": "Phương trình mặt cầu để mô tả ranh giới bên ngoài của vùng phủ sáng trong không gian là:<br>(x−1)<sup>2</sup> + (y−5)<sup>2</sup> + (z−5)<sup>2</sup><br>= 25<br>Ta có IM = (2;3;2); IA = (6;9;6) = 3IM và IM = (3−1)<sup>2</sup> + (8−5)<sup>2</sup> + (7−5)<sup>2</sup> = 17 < 5 nên<br>điểm M nằm trong mặt cầu. Vậy người đi biển đi qua điểm M mà vẫn thuộc vùng phủ sáng."
      },
      {
        "id": 49,
        "part": 1,
        "shortTag": "P1.49",
        "label": "Phần 1 - Câu 49",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Một máy Rađa có tầm hoạt động với bán kính tối đa là20 km. Ta xét trong không gian Oxyzvới tâm O là vị trí máy Rađa, 1 đơn vị dài trong không gian Oxyz tương ứng với 10 km trên thực tế. Hỏi trong không gian Oxyz trên, vật thể có tọa độ tương ứng với đáp án nào dưới đây sẽ bị Rađa phát hiện?",
        "options": {
          "A": "M(1;0;2).",
          "B": "N(2;−1;1).",
          "C": "P (1;1; 2).",
          "D": "Q(3;0;0)."
        },
        "answer": "A",
        "explanation": "Ta thấy quỹ đạo của Rađa là một khối cầu giới hạn bởi mặt cầu (S) có tâm là vị trí máy Rađa<br>có tọa độ là O(0;0;0)và bán kính R = 2.<br>Do đó ta có phương trình mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 4.<br>Vật thể bắt đầu bị phát hiện khi nó nằm trong hoặc trên mặt cầu (S).<br>Trong 4 đáp án trên ta thấy có đáp án C thỏa mãn phương trình mặt cầu (S) các đáp án còn lại<br>đều nằm ngoài (S)."
      },
      {
        "id": 50,
        "part": 1,
        "shortTag": "P1.50",
        "label": "Phần 1 - Câu 50",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz (đơn vị trên mỗi trục tọa độ là km), một máy bay đang ở vị trí A(3;−2;1) và sẽ hạ cánh ở vị trí B(2;−5;0) trên đường băng. Có một đám mây được mô phỏng bởi mặt phẳng (P) tiếp xúc với mặt cầu (S):(x−2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z + 1)<sup>2</sup> = 16 tại (10 25 7) M;−;. Tính độ cao của máy bay khi đi xuyên qua đám mây để hạ cánh (Giả sử mặt 9 9 9 đất ở vị trí máy bay đang bay được coi là mặt phẳng mặt phẳng (Oxy)) 3 4 1 2",
        "options": {
          "A": "km.",
          "B": "km.",
          "C": "km.",
          "D": "km. 5 5 5 5"
        },
        "answer": "D",
        "explanation": "(8 16 16) 8<br>Mặt cầu (S) có tâm I(2;−1;−1); IM = −;−; = − (1;2;−2).<br>9 9 9 9<br>Vì (P) tiếp xúc với (S) tại M nên có vectơ pháp tuyến là n = (1;2;−2).<br>10 (25) (7)<br>Phương trình mặt phẳng (P) là x− + 2y + −2z− = 0 hay (P):x + 2y−2z + 6 = 0<br>9 9 9<br>Giả sử điểm C(a;b;c) là vị trí mà máy bay xuyên qua đám mây để hạ cánh, suy ra C ∈ (P) và<br>ba điểm A,B,C thẳng hàng, C nằm giữa A và B.<br>Do đó AC = kAB với k > 0. Ta có:<br>AC = (a−3;b + 2;c−1),AB = (−1;−3;−1)<br>{ a−3 = −k { a = 3−k<br>AC = kAB ⇔; b + 2 = −3k ⇔; b = −2−3k ⇒ C(3−k;−2−3k;1−k).<br>c−1 = −k<br>c = 1−k<br>C ∈ (P) ⇒ 3−k + 2(−2−3k)−2(1−k) + 6 = 0 ⇒ k = 3 suy ra C (12;− 19; 2).<br>5 5 5 5<br>Vậy tại vị trí C độ cao của máy bay là km."
      },
      {
        "id": 51,
        "part": 2,
        "shortTag": "P2.1",
        "label": "Phần 2 - Câu 1",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng d: = = và mặt cầu (S) có tâm 1 2 2 I(3;2;0). Đường thẳng d cắt mặt cầu (S) tại hai điểm A, B sao cho AB = 8. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Phương trình mặt phẳng (P) đi qua điểm I(3;2;0) và vuông góc với đường thẳng d có phương trình là x + 2y + 2z−7 = 0.",
          "b": "Gọi Hlà hình chiếu vuông của I lên d. Khi đó H(1;−1;2).",
          "c": "Mặt cầu (S)có bán kính R = 5.",
          "d": "Phương trình mặt cầu (S): (x−3)<sup>2</sup> + (y−2)<sup>2</sup> + z<sup>2</sup> = 25."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "a) Đúng: Phương trình mặt phẳng (P) đi qua I(3;2;0)và vuông góc với đường thẳng d nhận<br>u = (1;2;2) là vectơ pháp tuyến có phương trình:<br>1(x−3) + 2(y−2) + 2(z−0) = 0 ⇔ x + 2y + 2z−7 = 0<br>b) Sai: Gọi H = d ∩ (P) khi đó H ∈ d ⇒ H(−1 + t;−3 + 2t;−2 + 2t)<br>Mặt khác H ∈ (P) ⇒ −1 + t + 2(−3 + 2t) + 2(−2 + 2t)−7 = 0 ⇒ t = 2 nên H(1;1;2)<br>c) Đúng: Khi đó IH = (3−1)<sup>2</sup> + (2−1)<sup>2</sup> + (0−2)<sup>2</sup> = 3 ⇒ R = IH<sup>2</sup> + (AB) 2 = 32 + 42 = 5<br>d) Đúng: Vậy (S): (x−3)<sup>2</sup> + (y−2)<sup>2</sup> + z<sup>2</sup> = 25."
      },
      {
        "id": 52,
        "part": 2,
        "shortTag": "P2.2",
        "label": "Phần 2 - Câu 2",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho A(0; 0; 2), B(1; 1; 0) và mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> =. 4 Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt cầu (S) có tâm I(0; 0; 1).",
          "b": "Điểm A nằm trong mặt cầu (S).",
          "c": "Mặt cầu tâm A và đi qua B có bán kính bằng 6.",
          "d": "Điểm M thay đổi thuộc (S), giá trị nhỏ nhất của biểu thức MA<sup>2</sup> + 2MB<sup>2</sup> bằng 5."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "a) Đúng: Mặt cầu (S) có tâm I(0; 0; 1), bán kính R =.<br>b) Sai: IA = 1, R =, IA > R nên A nằm ngoài mặt cầu (S).<br>c) Đúng: Mặt cầu tâm A và đi qua B có bán kính AB = 12 + 12 + (−2)<sup>2</sup> = 6.<br>(2 2 2)<br>d) Sai: Gọi Klà điểm thỏa mãn KA + 2KB = 0 ⇒ K;;.<br>3 3 3<br>()<sup>2</sup> ()<sup>2</sup><br>Ta có: MA<sup>2</sup> + 2MB<sup>2</sup> = MK + KA + 2 MK + KB<br>()<br>= 3MK<sup>2</sup> + KA<sup>2</sup> + 2KB<sup>2</sup> + 2MK KA + 2KB = 3MK<sup>2</sup> + KA<sup>2</sup> + 2KB<sup>2</sup>.<br>Biểu thức MA<sup>2</sup> + 2MB<sup>2</sup> đạt giá trị nhỏ nhất khi và chỉ khi MK đạt giá trị nhỏ nhất.<br>1 1<br>Với M thay đổi thuộc (S)ta có MK = KI −R = 1− =.<br>min 2 2<br>3 8 4 19<br>Vậy (MA<sup>2</sup> + 2MB<sup>2</sup>) = 3MK<sup>2</sup> + KA<sup>2</sup> + 2KB<sup>2</sup> = + + =.<br>min min 4 3 3 4"
      },
      {
        "id": 53,
        "part": 2,
        "shortTag": "P2.3",
        "label": "Phần 2 - Câu 3",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho A(0;1;1),B(1;0;−3),C(−1;−2;−3) và mặt cầu (S) có phương trình x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 2z−2 = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt cầu (S) có bán kính R = 2.",
          "b": "Mặt phẳng (ABC) có phương trình 2x−2y + z−1 = 0. 4 2",
          "c": "Mặt phẳng (ABC) cắt mặt cầu (S) theo một đường tròn có bán kính bằng. 3",
          "d": "Điểm D(a;b;c) thuộc mặt cầu (S) sao cho thể tích tứ diện ABCD lớn nhất. Khi đó, 2 a + b + c =. 3"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "a) Đúng: Mặt cầu (S) có tâmI(1;0;–1), bán kính R = 2.<br>b) Sai: AB = (1;−1;−4),AC = (−1;−3;−4) nên mặt phẳng (ABC) có một vectơ pháp tuyến là<br>n = [AB,AC] = (−8;8;−4). Suy ra mặt phẳng (ABC) có phương trình 2x−2y + z + 1 = 0.<br>2.1−2.0−1 + 1 2<br>c) Đúng: Ta có d<br>(I,(ABC))<br>= =. Vậy bán kính đường tròn giao tuyến của<br>22 + (−2)<sup>2</sup> + 1 3<br>mặt phẳng (ABC) và mặt cầu (S) là r = R<sup>2</sup> −[d(I,(ABC))] 2 = 22 − (2) 2 = 4 2.<br>3 3<br>d) Đúng: Ta có V = d(D,(ABC)).S nên V lớn nhất khi và chỉ khi d(D,(ABC)) lớn<br>ABCD 3 ABC ABCD<br>nhất.<br>{ x = 1 + 2t<br>Gọi Δ là đường thẳng qua điểm I và vuông góc với mặt phẳng (ABC). Suy ra Δ:; y = −2t.<br>z = −1 + t<br>Gọi D;D là các giao điểm của Δ và mặt cầu (S). Tọa độ điểm D;D thỏa mãn hệ phương<br>1 2 1 2<br>{ x = 1 + 2t [2<br>t =<br>y = −2t | 3 (7 −4 −1) (−1 4 −5)<br>trình:; ⇒ | ⇒ D;;;D;;<br>z = −1 + t | −2 1 3 3 3 2 3 3 3<br>t =<br>}x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 2z−2 = 0 | 3<br>Ta thấy: d(D 1,(ABC)) > d(D 2,(ABC)). Vậy điểm D (7 3;− 3 4;− 1 3) ⇒ a + b + c = 2 3."
      },
      {
        "id": 54,
        "part": 2,
        "shortTag": "P2.4",
        "label": "Phần 2 - Câu 4",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho mặt phẳng (P):x−2y + 2z−2 = 0 và điểm I(−1; 2; −1). Biết mặt cầu (S) có tâm I và cắt mặt phẳng (P) theo giao tuyến là đường tròn (C) có diện tích là 25π. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Bán kính đường tròn (C) là r = 5.",
          "b": "Khoảng cách từ I đến mặt phẳng (P)là 3.",
          "c": ". Tâm đường tròn (C) có tọa độ là H(1;3;1).",
          "d": "Phương trình mặt cầu (S)là (x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 16."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "Gọi M là điểm nằm trên đường tròn giao tuyến của (S) và (P). Ta có IM = R. Áp dụng công<br>thức tính bán kính mặt cầu trong trường hợp mặt cầu (S) giao với mặt phẳng (P) theo giao<br>tuyến là đường tròn có bán kính r là<br>a) Đúng: Ta có đường tròn (C)có diện tích là 25π. Suy ra r = 5 = MH.<br>−1−2.2 + 2.(−1)−2<br>b) Đúng: Ta có d(I;(P)) = = 3 = IH<br>1 + (−2)<sup>2</sup> + 22<br>{ x = −1 + t<br>c) Sai: Phương trình IH:; y = 2−2t<br>}z = −1 + 2t<br>{ x = −1 + t { x = 0<br>y = 2−2t y = 0<br>Vậy tọa độ là Hlà nghiệm của hệ; ⇔; ⇒ H(0;0;1).<br>z = −1 + 2t z = 1<br>}x−2y + 2z−2 = 0 }t = 1<br>d) Sai: Suy ra R<sup>2</sup> = MI<sup>2</sup> = IH<sup>2</sup> + MH<sup>2</sup> = 32 + 52 = 34.<br>Vậy phương trình mặt cầu (S) là (x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 34."
      },
      {
        "id": 55,
        "part": 2,
        "shortTag": "P2.5",
        "label": "Phần 2 - Câu 5",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S):(x−2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−1)<sup>2</sup> = 9. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt cầu (S) có tâm I(2;−1;1), bán kính R = 3.",
          "b": "Điểm M(1;3;5) nằm trong mặt cầu.",
          "c": "Mặt phẳng (P):x + 2y−2z + 8 = 0 cắt mặt cầu (S) theo giao tuyến là đường tròn có bán kính r = 2. { x = 1 + t",
          "d": "Đường thẳng d:; y = t cắt mặt cầu (S) tại hai điểm A,B. Khi đó, diện tích tam giác IAB } z = 3−t 182 là: 3"
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Mặt cầu (S) có tâm I(2;−1;1), bán kính R = 3.<br>b) Sai: Ta có IM =<br>(1−2)<sup>2</sup> + (3 + 1)<sup>2</sup> + (5−1)<sup>2</sup><br>= 33 > R = 3 nên điểm M nằm ngoài mặt cầu.<br>2−2−2 + 8<br>c) Sai: Ta có h = d<br>(I,(P))<br>= = 2 < 3.<br>12 + 22 + (−2)<sup>2</sup><br>Suy ra mặt phẳng (P):x + 2y−2z + 8 = 0 cắt mặt cầu (S) theo giao tuyến là đường tròn.<br>Bán kính đường tròn giao tuyến là r = R<sup>2</sup> −h<sup>2</sup> = 32 −22 = 5<br>d) Đúng: Đường thẳng d có vecto chỉ phương u = (1;1;−1), đi quan điểm N(1;0;3).<br>IN = (−1;1;2), [u,IN] = (3;−1;2). Gọi H là trung điểm của AB<br>[u,IN]<br>14 39 2 39<br>IH = d(I,d) = =; AH = IA<sup>2</sup> −IH<sup>2</sup> = ⇒ AB = 2AH =<br>u 3 3 3<br>1 1 14 2 39 182<br>Diện tích tam giác IAB là: S = IH.AB =.. =.<br>ΔIAB 2 2 3 3 3"
      },
      {
        "id": 56,
        "part": 2,
        "shortTag": "P2.6",
        "label": "Phần 2 - Câu 6",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz,cho mặt cầu (S) có tâm I(2;3;−1) cắt đường thẳng x−11 y z + 25 (d): = = tại hai điểm A,B sao cho AB = 16. Xét tính đúng sai của các khẳng 2 1 −2 định sau:",
        "statements": {
          "a": "Đường thẳng (d) có vectơ chỉ phương là u = (2;1;−2).",
          "b": "Đường thẳng (d) đi qua điểm A(5;−3;−31).",
          "c": "Mặt phẳng (P) chứa I(2;3;−1) và vuông góc với đường thẳng (",
          "d": "có phương trình là 2x + y−2z−9 = 0. d) Mặt cầu (S) có phương trình là (x−2)<sup>2</sup> + (y−3)<sup>2</sup> + (z + 1)<sup>2</sup> = 225."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "a) Đúng: Đường thẳng (d) có vectơ chỉ phương là u = (2;1;−2).<br>5−11 −3 −31 + 25<br>b) Sai: Thay A(5;−3;−31) vào phương trình đường thẳng (d) ta có = ≠ nên<br>2 1 −2<br>điểm A không thuộc đường thẳng (d).<br>c) Đúng: Vì mặt phẳng (P) chứa I(2;3;−1) và vuông góc với đường thẳng (d) nên (P) nhận<br>vectơ chỉ phương của (d) là u = (2;1;−2) làm vectơ pháp tuyến. Khi đó, phương trình mặt phẳng<br>(P) là 2(x−2) + 1(y−3)−2(z + 1) = 0 hay 2x + y−2z−9 = 0.<br>d) Sai: Gọi H là hình chiếu của I lên đường thẳng (d) nên IH và (d) vuông góc với nhau.<br>Gọi mặt phẳng (P) chứa I(2;3;−1) và vuông góc với đường thẳng (d) có phương trình là<br>2x + y−2z−9 = 0.<br>Suy ra, H là giao điểm của đường thẳng (d) và mặt phẳng (P)<br>Vì H thuộc đường thẳng (d) nên H(2t + 11,t,−2t−25)<br>Mặt khác, H thuộc mặt phẳng (P) nên tọa độ H(2t + 11,t,−2t−25) thỏa mãn<br>2(2t + 11) + t−2(−2t−25)−9 = 0 hay t = −7<br>Khi đó, điểm H(−3,−7,−11) và IH = (−3−2)<sup>2</sup> + (−7−3)<sup>2</sup> + (−11 + 1)<sup>2</sup> = 15<br>2 2<br>(AB) (16)<br>Ta được R = IH<sup>2</sup> + = 152 + = 17.<br>2 2<br>Vậy phương trình mặt cầu (S) có tâm I(2;3;−1) và bán kính R = 17 là<br>(x−2)<sup>2</sup> + (y−3)<sup>2</sup> + (z + 1)<sup>2</sup> = 172 = 289."
      },
      {
        "id": 57,
        "part": 2,
        "shortTag": "P2.7",
        "label": "Phần 2 - Câu 7",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm I(1;−2;3) và điểm M(−1;0;2). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt cầu tâm I và đi qua điểm M có bán kính là R = IM = 3.",
          "b": "Phương trình mặt cầu tâm I và đi qua điểm M có phương trình là (x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 9.",
          "c": "Phương trình mặt phẳng tiếp xúc với mặt cầu tại điểm M là −2x + 2y−z = 0.",
          "d": "Phương trình mặt cầu tâm I, cắt trục Ox tại hai điểm A và B sao cho độ dài đoạn AB = 2 3 là (x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> = 16."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": false
        },
        "explanation": "a) Sai: R = IM = 9 = 3<br>b) Đúng: Phương trình mặt cầu tâm I(a;b;c), bán kính R có dạng<br>(x−a)<sup>2</sup> + (y−b)<sup>2</sup> + (z−c)<sup>2</sup> = R<sup>2</sup><br>Suy ra<br>(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup><br>= 9.<br>c) Đúng: Phương trình mặt phẳng tiếp xúc với mặt cầu tại điểm M đi qua M(−1;0;2) và nhận<br>IM(−2;2;−1) làm vecto pháp tuyến là −2x + 2y−z = 0.<br>d) Sai: Gọi H là trung điểm AB suy ra H là hình chiếu vuông góc của I lên Ox nên H(1;0;0)<br>Khi đó IH = 13 ⇒ R = IA = IH<sup>2</sup> + AH<sup>2</sup> = 4.<br>Phương trình mặt cầu là:<br>(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup><br>= 16."
      },
      {
        "id": 58,
        "part": 2,
        "shortTag": "P2.8",
        "label": "Phần 2 - Câu 8",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho ba điểm A(1;2;−4), B(1;−3;1), C(2;2;3). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt cầu (S)tâm A, bán kính R = 1 có phương trình là(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−4)<sup>2</sup> = 1. 1",
          "b": "Bán kính của mặt cầu (S) có tâm là A và đi qua điểm C là 50. 2",
          "c": "Mặt cầu (S) nhận AB làm đường kính có phương trình là 3 2 2 (1) (3) 25 (x−1)<sup>2</sup> + y + + z + = 2 2 2",
          "d": "Bán kính R của mặt cầu (S) đi qua ba điểm A,B,C và có tâm nằm trên mặt phẳng (Oxy) 4 là R = 26."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": true
        },
        "explanation": "a) Sai: Mặt cầu (S)tâm A, bán kính R = 1 có phương trình là: (x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 4)<sup>2</sup> = 1<br>b) Đúng: AC = (1;0;7) ⇒ AC = 50. Bán kính của mặt cầu (S) có tâm là A và đi qua điểm<br>C là AC = 50<br>c) Đúng:AB = (0;−5;5) ⇒ AB = 5 2. Mặt cầu (S) nhận AB làm đường kính nên có tâm<br>2 2<br>(1 3) AB 5 2 (1) (3) 25<br>I 1;−;−, R = = có phương trình là: (x−1)<sup>2</sup> + y + + z + =.<br>2 2 2 2 2 2 2<br>d) Đúng: Gọi phương trình mặt cầu (S) có dạng x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0, với tọa<br>độ tâm I(a;b;c).<br>{ A ∈ (S)<br>{ −2a−4b + d = −21 { a = −2<br>Ta có: I(a;b;c) ∈ (Oxy) ⇒ c = 0; B ∈ (S) ⇒; −2a + 6b + d = −11 ⇔; b = 1<br>} C ∈ (S) }−4a−4b + d = −17 } d = −21<br>Bán kính R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d = 4 + 1 + 0 + 21 = 26."
      },
      {
        "id": 59,
        "part": 2,
        "shortTag": "P2.9",
        "label": "Phần 2 - Câu 9",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho A(2;0;0),B(1;3;0),C(−1;0;3),D(1;2;3). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt cầu (S):(x−2)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 25 có tâm là điểm A.",
          "b": "Mặt cầu (S) tâm O bán kính OA có phương trình (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 4. 2 2 (1) (3) 9",
          "c": "Mặt cầu (S) đường kính AC có phương trình (S): x− + y− + z<sup>2</sup> =. 2 2 2",
          "d": "Mặt cầu (S) ngoại tiếp tứ diện ABCD có bánh kính R = 6."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "a) Đúng: Mặt cầu (S):(x−2)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 25 có tâm là điểm A(2;0;0).<br>b) Đúng: Ta có R = OA = 2 ⇒ Mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 4.<br>2 2<br>(1 3) AC 3 2 (1) (3) 9<br>c) Sai: Tâm I;0;, bán kính R = = ⇒ (S): x− + y<sup>2</sup> + z− =.<br>2 2 2 2 2 2 2<br>d) Sai: Gọi I(a;b;c) là tâm mặt cầu đi qua bốn điểm A,B,C,D. Khi đó:<br>{ AI<sup>2</sup> = BI<sup>2</sup> { (a−2)<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = (a−1)<sup>2</sup> + (b−3)<sup>2</sup> + c<sup>2</sup><br>; AI<sup>2</sup> = CI<sup>2</sup> ⇔; (a−2)<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = (a + 1)<sup>2</sup> + b<sup>2</sup> + (c−3)<sup>2</sup><br>} AI<sup>2</sup> = DI<sup>2</sup> (a−2)<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = (a−1)<sup>2</sup> + (b−2)<sup>2</sup> + (c−3)<sup>2</sup><br>{ a−3b = −3 { a = 0<br>⇔; a−c = −1 ⇔; b = 1 ⇒ I(0;1;1). Bán kính: R = IA = 22 + 12 + 12 = 6.<br>a−2b−3c = −5 c = 1<br>} }"
      },
      {
        "id": 60,
        "part": 2,
        "shortTag": "P2.10",
        "label": "Phần 2 - Câu 10",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 4z + 1 = 0. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Tọa độ tâm I của mặt cầu là (1;0;−2).",
          "b": "Diện tích mặt cầu bằng 16π(dvdt).",
          "c": "Điểm A(1;2;3) nằm trong mặt cầu. x y−1 z−2",
          "d": "Số điểm chung của đường thẳng Δ: = = và mặt cầu (S) bằng 0. 2 1 −1"
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "{ x = −2:−2 = 1<br>a) Đúng: Tọa độ tâm I của mặt cầu là; y = 0:−2 = 0 ⇒ I(1;0;−2).<br>z = 4:−2 = −2<br>b) Đúng: R = 12 + 02 + (−2)<sup>2</sup> −1 = 2 ⇒ S = 4πR<sup>2</sup> = 4π.22 = 16π(dvdt).<br>mc<br>c) Sai: IA = (0;2;5) ⇒ IA = 02 + 22 + 52 = 29 > 2 ⇒ điểm A nằm ngoài mặt cầu.<br>d) Đúng: Đường thẳng Δ đi qua M(0;1;2) và nhận u = (2;1;−2) làm một vectơ chỉ phương.<br>[u,MI]<br>498<br>d(I,Δ) = = > R ⇒ Δ không cắt (S) ⇒ số điểm chung của đường thẳng Δ và<br>u 6<br>mặt cầu (S) bằng 0."
      },
      {
        "id": 61,
        "part": 2,
        "shortTag": "P2.11",
        "label": "Phần 2 - Câu 11",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> = 5 và hai điểm A(2;−2;4), B(−3;3;−1). Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt cầu (S) có tâm I(0;1;−1).",
          "b": "R−d < 2 với d là khoảng cách từ tâm I mặt cầu (S) đến mặt phẳng (P):x + y + 1 = 0.",
          "c": "Đường thẳng AB không cắt mặt cầu (S).",
          "d": "Điểm M thay đổi thuộc (S), biểu thức 2MA<sup>2</sup> + 3MB<sup>2</sup> đạt giá trị nhỏ nhất bằng 105 (Làm tròn kết quả đến hàng đơn vị)."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": false
        },
        "explanation": "a) Sai: Mặt cầu (S) có tâm I(0;0;1) và bán kính R = 5.<br>b) Đúng: Ta có khoảng cách từ tâm I(0;0;1) đến mặt phẳng (P) là<br>1.0 + 1.0 + 0.1 + 1 2 2<br>d = = và R−d = 5− ≈ 1,53 < 2<br>(I,(P)) 12 + 12 + 02 2 (I,(P)) 2<br>c) Sai: Ta có: AB = (−5;5;−5),AI = (−2;2;−3) ⇒ [AB,AI] = (−5;−5;0)<br>AB,AI]<br>(−5)<sup>2</sup> + (−5)<sup>2</sup> + 02<br>Vậy d = = = ≈ 0,82 < R nên đường thẳng AB cắt (S)<br>(I,AB) AB (−5)<sup>2</sup> + 52 + (−5)<sup>2</sup> 3<br>tại hai điểm phân biệt.<br>d) Sai: Mặt cầu có tâm I(0;0;1), bán kính R = 5.<br>Gọi E là điểm thỏa mãn: 2EA + 3EB = 0 ⇒ E(−1;1;1),EB = (−2;2;−2),EA = (3;−3;3)<br>()<sup>2</sup> ()<sup>2</sup><br>Xét P = 2MA<sup>2</sup> + 3MB<sup>2</sup> = 2 ME + EA + 3 ME + EB<br>= 2ME<sup>2</sup> + 4ME.EA + 2EA<sup>2</sup> + 3ME<sup>2</sup> + 6ME.EB + 3EB<sup>2</sup><br>()<br>= 5ME<sup>2</sup> + 2EA<sup>2</sup> + 3EB<sup>2</sup> + 2ME.<br>3E<br>= 5ME<sup>2</sup> + 2EA<sup>2</sup> + 3EB<sup>2</sup><br>Biểu thức P đạt giá trị nhỏ nhất khi và chỉ khi ME đạt giá trị nhỏ nhất.<br>Ta có IE = (−1;1;0) ⇒ IE = 2 < R suy ra E nằm trong mặt cầu nên<br>ME = R−IE = 5− 2 với EB = 2 3,EA = 3 3<br>min<br>()<sup>2</sup> ()<sup>2</sup> ()<sup>2</sup><br>Vậy P = 5ME 2 + 2EA<sup>2</sup> + 3EB<sup>2</sup> = 5. 5− 2 + 2. 2 3 + 3. 3 3 ≈ 108<br>min min"
      },
      {
        "id": 62,
        "part": 2,
        "shortTag": "P2.12",
        "label": "Phần 2 - Câu 12",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt cầu (S) có phương trình (x−4)<sup>2</sup> + (y−3)<sup>2</sup> + (z + 1)<sup>2</sup> = 169. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt cầu (S) có đường kính bằng 13.",
          "b": "Diện tích mặt cầu S = 338π. mc",
          "c": "Mặt cầu (S) tiếp xúc với mặt phẳng (P):x−2y−2z−39 = 0.",
          "d": "Mặt cầu (S) cắt trục Oz tại hai điểm phân biệt A,B sao cho AB = 24."
        },
        "answers": {
          "a": false,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "Mặt cầu (S) có tâm I(4;3;−1) và bán kính R = 13.<br>a) Sai: Đường kính của mặt cầu (S) là d = 2R = 2.13 = 26.<br>b) Sai: Diện tích mặt cầu bằng S = 4.π.R<sup>2</sup> = 4.π.132 = 676π.<br>mc<br>1.4−2.3−2.(−1)−39<br>c) Đúng: Ta có d(I,(P)) = = 13 = R nên mặt cầu (S) tiếp xúc với mặt<br>12 + (−2)<sup>2</sup> + (−2)<sup>2</sup><br>phẳng.<br>d) Đúng: Gọi H là hình chiếu của I lên trục Oz nên H(0; 0; −1) và H là trung điểm của AB<br>IH = (−4;−3;0) ⇒ IH = (−4)<sup>2</sup> + (−3)<sup>2</sup> + 02 = 5.<br>Ta có AH = R<sup>2</sup> −IH<sup>2</sup> = 132 −52 = 12.<br>Do H là trung điểm của AB nên AB = 2IH = 2.12 = 24."
      },
      {
        "id": 63,
        "part": 2,
        "shortTag": "P2.13",
        "label": "Phần 2 - Câu 13",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz (đơn vị trên mỗi trục tính theo kilômét), một trạm thu phát sóng điện thoại di động được đặt ở vị trí I(1;3;7). Trạm thu phát sóng đó được thiết kế với bán kính phủ sóng là 3 km. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Phương trình mặt cầu (S) để mô tả ranh giới bên ngoài của vùng phù sóng trong không gian là (x + 1)<sup>2</sup> + (y + 3)<sup>2</sup> + (z + 7)<sup>2</sup> = 9.",
          "b": "Nếu người dùng điện thoại ở vị trí điểm A(2;2;7) thì có thể sử dụng dịch vụ của trạm thu phát sóng đó.",
          "c": "Nếu người dùng điện thoại ở vị trí có toạ độ B(5;6;7) thì không thể sử dụng dịch vụ của trạm thu phát sóng đó.",
          "d": "Tính theo đường chim bay, khoảng cách lớn nhất để một người ở vị trí có toạ độ B(5;6;7) di chuyển được tới vùng phủ sóng theo đơn vị ki-lô-mét là 8 km."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": true,
          "d": true
        },
        "explanation": "a) Sai: Phương trình mặt cầu (S) tâm I(1;3;7) bán kính 3 km mô tả ranh giới bên ngoài của<br>vùng phủ sóng trong không gian là (x−1)<sup>2</sup> + (y−3)<sup>2</sup> + (z−7)<sup>2</sup> = 9.<br>b) Đúng: Ta có: IA = (2−1)<sup>2</sup> + (2−3)<sup>2</sup> + (7−7)<sup>2</sup> = 2 < 3 nên điểm A nằm trong mặt cầu. Vì<br>điểm A nằm trong mặt cầu nên người dùng điện thoại ở vị trí có toạ độ A(2;2;7) có thể sử dụng<br>dịch vụ của trạm thu phát sóng đó.<br>c) Đúng: Ta có: IB = (5−1)<sup>2</sup> + (6−3)<sup>2</sup> + (7−7)<sup>2</sup> = 5 > 3 nên điểm B nằm ngoài mặt cầu. Vậy<br>người dùng điện thoại ở vị trí có toạ độ B(5;6;7) không thể sử dụng dịch vụ của trạm thu phát<br>sóng đó.<br>d) Đúng: Ta có: IB(4;3;0); IB = (5−1)<sup>2</sup> + (6−3)<sup>2</sup> + (7−7)<sup>2</sup> = 5 > 3 nên điểm B nằm ngoài<br>{ x = 1 + 4t<br>mặt cầu. Phương trình đường thẳng BI dạng:; y = 3 + 3t.<br>z = 7<br>Gọi mặt cầu (S) ∩ BI ≡ E suy ra tọa độ E là nghiệm của hệ<br>[{ 3<br>t =<br>| 17<br>x = (17 24)<br>|; 5 ⇒ E;;7 ⇒ EB ≈ 1,7<br>| 24 5 5<br>y =<br>{ x = 1 + 4t | 5<br>y = 3 + 3t | } z = 7<br>; ⇔<br>z = 7 | { 3<br>| t = −<br>} (x−1)<sup>2</sup> + (y−3)<sup>2</sup> + (z−7)<sup>2</sup> = 9 | 5<br>| 7<br>| x = − (7 6)<br>| |; 6 5 ⇒ E − 5; 5;7 ⇒ EB = 8<br>y =<br>| } z = 7<br>Vậy khoảng cách lớn nhất để một người ở vị trí có toạ độ B(5;6;7) di chuyển được tới vùng phủ<br>sóng theo đơn vị kilômét là 8 km."
      },
      {
        "id": 64,
        "part": 2,
        "shortTag": "P2.14",
        "label": "Phần 2 - Câu 14",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "tf",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d2_p2_q14_p102_1.png",
        "question": "Các thiên thạch có đường kính lớn hơn 140 m và có thể lại gần Trái Đất ở khoảng cách nhỏ hơn 7 500 000 km được coi là những vật thể có khả năng va chạm gây nguy hiểm cho Trái Đất. Để theo dõi những thiên thạch này, người ta đã thiết lập các trạm quan sát các vật thể bay gần Trái Đất. Giả sử có một hệ thống quan sát có khả năng theo dõi các vật thể ở độ cao không vượt quá 6 600 km so với mực nước biển. Coi Trái Đất là khối cầu có bán kính 6 400 km. Chọn hệ trục tọa độ Oxyz trong không gian có gốc O tại tâm Trái Đất và đơn vị độ dài trên mỗi trục tọa độ là 1000 km. Một thiên thạch (coi như một hạt) chuyển động với tốc độ không đổi theo một đường thẳng từ điểm M(6;20;0) đến điểm N(−6;−12;16). { x = 6 + 3t",
        "statements": {
          "a": "Đường thẳng MN có phương trình tham số là; y = 20 + 8t (t ∈ ℝ). } z = −4t",
          "b": "Vị trí đầu tiên thiên thạch di chuyển vào phạm vi theo dõi của hệ thống quan sát là điểm A(−3;−4;12).",
          "c": "Khoảng cách giữa vị trí đầu tiên và vị trí cuối cùng mà thiên thạch di chuyển trong phạm vi theo dõi của hệ thống quan sát là 18 900 km (kết quả làm tròn đến hàng trăm theo đơn vị km).",
          "d": "Nếu thời gian di chuyển của thiên thạch trong phạm vi theo dõi của hệ thống quan sát là 3 phút thì thời gian nó di chuyển từ M đến N là 6 phút."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "a) Đúng: Vectơ chỉ phương của đường thẳng MN là MN = (−12;−32;16) = −4(3;8;−4).<br>{ x = 6 + 3t<br>Phương trình tham số của đường thẳng MN là:; y = 20 + 8t, t ∈ R.<br>z = −4t<br>b) Sai: Để tìm vị trí đầu tiên thiên thạch di chuyển vào phạm vi theo dõi, ta cần tìm điểm giao<br>của đường thẳng MN với mặt cầu có tâm O(0;0;0) và bán kính R = 6,4 + 6,6 = 13<br>Phương trình mặt cầu là: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 132.<br>Thay x = 6 + 3t; y = 20 + 8t và z = −4t vào phương trình mặt cầu ta được:<br>(6 + 3t)<sup>2</sup> + (20 + 8t)<sup>2</sup> + (−4t)<sup>2</sup> = 132 ⇔ 89t<sup>2</sup> + 356t + 267 = 0<br>Giải phương trình ta tìm được t = −3 hoặc t = −1.<br>Thay t = −3 và t = −1 vào phương trình tham số của đường thẳng MN ta được hai giao điểm<br>của MN và mặt cầu là (−3;−4;12) và (3;12;4). Nhận thấy từ M đến N thì hoành độ có xu<br>hương giảm dần nên điểm A(3;12;4).<br>c) Đúng: Ta có B(−3;−4;12)<br>Khoảng cách giữa vị trí đầu tiên và vị trí cuối cùng là AB:<br>AB =<br>(−3−3)<sup>2</sup> + (−4−12)<sup>2</sup> + (12−4)<sup>2</sup><br>= 2 89 tương đương với ≈ 18900km.<br>d) Đúng: Thời gian thiên thạch di chuyển từ M đến N là:<br>MN<br>MN = (6 + 6)<sup>2</sup> + (−12−20)<sup>2</sup> + (16−0)<sup>2</sup> = 4 89 = 2AB nên do đó t =.3 ≈ 6 (phút).<br>AB"
      },
      {
        "id": 65,
        "part": 3,
        "shortTag": "P3.1",
        "label": "Phần 3 - Câu 1",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Bán kính mặt cầu đi qua bốn điểm M(1;0;1), N(1;0;0), P(2;1;0) và Q(1;1;1) có dạng a;a,b ∈ ℕ và nguyên tố cùng nhau. Khi đó giá trị của biểu thức S = ab bao nhiêu? b",
        "answer": "9",
        "acceptedAnswers": [
          "9"
        ],
        "kqCells": [
          "9",
          "",
          "",
          ""
        ],
        "explanation": "Gọi phương trình mặt cầu (S): x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0, (a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d > 0).<br>Do (S) đi qua bốn điểm M, N, P, Q nên ta có hệ phương trình:<br>{ 3<br>a =<br>{ −2a−2c + d = −2<br>−2a + d = −1 b = 1 (3) 2 (1) 2 (1) 2 3<br>; ⇔; 2. Vậy R = + + −2 =.<br>−4a−2b + d = −5<br>2 2 2 2<br>}−2a−2b−2c + d = −3 c =<br>}d = 2<br>Khi đó giá trị của biểu thức S = ab = 32 = 9."
      },
      {
        "id": 66,
        "part": 3,
        "shortTag": "P3.2",
        "label": "Phần 3 - Câu 2",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt cầu (S) có tâm I(a;b;c) nằm trên đường x y−1 z−2 thảng (d): = = và tiếp xúc với hai mặt phẳng (P):2x−z−4 = 0, 1 1 1 (Q):x−2y−2 = 0. Tổng P = a + b + c bằng bao nhiêu?",
        "answer": "6",
        "acceptedAnswers": [
          "6"
        ],
        "kqCells": [
          "6",
          "",
          "",
          ""
        ],
        "explanation": "Gọi tâm mặt cầu là I(a;a + 1;a + 2) ∈ (d). Do mặt cầu tiếp xúc với (P) và (Q) nên<br>d(I;(P)) = d(I;(Q)).<br>2a−a−2−4 a−2(a + 1)−2<br>Suy ra = ⇔ a−6 = −a−4 ⇔ a = 1.<br>5 5<br>Tâm mặt cầu là I(1;2;3) ⇒ P = 6<br>x−4 y−1 z + 5"
      },
      {
        "id": 67,
        "part": 3,
        "shortTag": "P3.3",
        "label": "Phần 3 - Câu 3",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai đường thẳng Δ: = = và 1 3 −1 −2 x−2 y + 3 z Δ: = =. Trong tất cả mặt cầu tiếp xúc với cả hai đường thẳng Δ và Δ. Gọi (S) 2 1 3 1 1 2 là mặt cầu có bán kính nhỏ nhất. Diện tích của mặt cầu đó có kết quả bằng bao nhiêu? (làm tròn đến hàng phần trục)",
        "answer": "18,8",
        "acceptedAnswers": [
          "18,8",
          "18.8"
        ],
        "kqCells": [
          "1",
          "8",
          ",",
          "8"
        ],
        "explanation": "Ta dễ dàng kiểm chứng được Δ và Δ chéo nhau<br>1 2<br>Vì mặt cầu (S)tiếp xúc với hai đường thẳng Δ,Δ và có bán kính nhỏ nhất. Suy ra mặt cầu (S)<br>1 2<br>là mặt cầu đường kính AB (với AB là đoạn vuông góc chung của Δ,Δ)<br>1 2<br>Ta có: Δ đi qua M(4;1;−5) và có VTCP u = (3;−1;−2)<br>1 Δ<br>[u,u].MN<br>Δ đi qua N(2;−3;0) và có VTCP u = (1;3;1) suy ra d(Δ,Δ) = Δ 1 Δ2 = 2 6<br>2 Δ 1 2<br>2 [u,u]<br>Δ Δ2<br>AB d(Δ,Δ)<br>Vậy bán kính R = = 1 2 = 6. Diện tích mặt cầu (S)là S = πR<sup>2</sup> = 6π ≈ 18.8<br>2 2<br>x−2 y + 4 z−3"
      },
      {
        "id": 68,
        "part": 3,
        "shortTag": "P3.4",
        "label": "Phần 3 - Câu 4",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Cho mặt cầu (S):(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−3)<sup>2</sup> = 25 và đường thẳng d: = =. 2 1 3 Đường thẳng d cắt mặt cầu (S) tại hai điểm phân biệt trong đó M(x;y;z) với x > 0 M M M M Giá trị biểu thức T = x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> bằng bao nhiêu? (Làm tròn kết quả đến hàng phần trăm) M M M",
        "answer": "70,5",
        "acceptedAnswers": [
          "70,5",
          "70,51",
          "70.5",
          "70.51"
        ],
        "kqCells": [
          "7",
          "0",
          ",",
          "5"
        ],
        "explanation": "1 2<br>Thay tọa độ tâm I(1;−2;3) vào phương trình đường thẳng d, ta được: − ≠ ≠ 0.<br>2 1<br>Nên đường thẳng d không đi qua tâm I(1;−2;3).<br>{ x = 2 + 2t<br>Ta có đường thẳng d:; y = −4 + t,(t ∈ R) với M ∈ d ⇔ M(2 + 2t;−4 + t;3 + 3t)<br>z = 3 + 3t<br>Thay điểm M(2 + 2t;−4 + t;3 + 3t) vào phương trình mặt cầu (S), ta được:<br>⇔ (2 + 2t−1)<sup>2</sup> + (−4 + t + 2)<sup>2</sup> + (3 + 3t−3)<sup>2</sup> = 25 ⇔ (2t + 1)<sup>2</sup> + (t−2)<sup>2</sup> + (3t)<sup>2</sup> = 25<br>⇔ 14t<sup>2</sup> + 5 = 25<br>[70 (2 70 70 3 70)<br>| t = ⇒ M<sup>2</sup> +;−4 +;3 +<br>7 7 7 7<br>10 |<br>⇔ t<sup>2</sup> = ⇔<br>7 | 70 (2 70 70 3 70)<br>t = − ⇒ N<sup>2</sup>−;−4−;3−<br>| 7 7 7 7<br>2 2 2<br>(2 70) (70) (3 70)<br>Vậy x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 2 + + −4 + + 3 + ≈ 70,51<br>M M M 7 7 7"
      },
      {
        "id": 69,
        "part": 3,
        "shortTag": "P3.5",
        "label": "Phần 3 - Câu 5",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Cho 3 điểm M(2;3;3),N(2;−1;−1),P(−2;−1;3) và mặt phẳng (α):2x + 3y−z + 2 = 0. Phương trình mặt cầu đi qua 3 điểm M,N,P và có tâm thuộc mặt phẳng (α)có bán kính bằng bao nhiêu?",
        "answer": "4",
        "acceptedAnswers": [
          "4"
        ],
        "kqCells": [
          "4",
          "",
          "",
          ""
        ],
        "explanation": "Phương trình mặt cầu (S) có dạng: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0 với<br>a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d > 0.<br>{ 4a + 6b + 6c−d = 22<br>Mặt cầu qua M,N,P ⇒; 4a−2b−2c−d = 6<br>4a + 2b−6c + d = −14<br>Mặt cầu có tâm I(a;b;c) thuộc mặt phẳng (α) ⇒ 2a + 3b−c + 2 = 0.<br>{ a = 2<br>Giải hệ ta được:; b = −1 ⇒ I(2;−1;3).<br>c = 3<br>Bán kính của mặt cầu là: R = IM = 4."
      },
      {
        "id": 70,
        "part": 3,
        "shortTag": "P3.6",
        "label": "Phần 3 - Câu 6",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, mặt cầu có tâm I(1;2;−1) và tiếp xúc với mặt phẳng (P):2x−2y−z−8 = 0 có phương trình (C):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0. Tính giá trị của biểu thức a + b + c + 2d.",
        "answer": "-4",
        "acceptedAnswers": [
          "-4"
        ],
        "kqCells": [
          "-",
          "4",
          "",
          ""
        ],
        "explanation": "2−4 + 1−8<br>Bán kính mặt cầu là: r = d (I;(P)) = = 3.<br>4 + 4 + 1<br>Phương trình mặt cầu (C):(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 1)<sup>2</sup> = 9<br>⇔ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−4y + 2z−3 = 0 suy ra a = 1;b = 2;c = −1;d = −3.<br>Hay a + b + c + 2d = 1 + 2 + (−1) + 2.(−3) = −4."
      },
      {
        "id": 71,
        "part": 3,
        "shortTag": "P3.7",
        "label": "Phần 3 - Câu 7",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, phương trình mặt cầu (S)có tâm I(1;3;2) và có một tiếp x−1 y−1 z tuyến là đường thẳng Δ: = = có dạng x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2ax−2by−2cz + d = 0. Tính 1 1 −1 T = a + b + c−d.",
        "answer": "0",
        "acceptedAnswers": [
          "0"
        ],
        "kqCells": [
          "0",
          "",
          "",
          ""
        ],
        "explanation": "{ M (1;1;0) ∈ Δ<br>Ta có đường thẳng Δ:; 0. Suy ra MM = (0;−2;−2).<br>} u = (1;1;−1) 0<br>[u,MM]<br>Vì Δ là một tiếp tuyến của mặt cầu (S)nên R = d(M,Δ) =<br>24<br>= 2 2.<br>u 3<br>Khi đó phương trình mặt cầu (S) có dạng: (x−1)<sup>2</sup> + (y−3)<sup>2</sup> + (z−2)<sup>2</sup> = 8<br>{ a = 1<br>b = 3<br>⇔ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−6y−4z + 6 = 0 ⇒; ⇒ T = a + b + c−d = 0.<br>c = 2<br>}d = 6"
      },
      {
        "id": 72,
        "part": 3,
        "shortTag": "P3.8",
        "label": "Phần 3 - Câu 8",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với tọa độ Oxyz, cho mặt cầu (C):(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> = 11. Đường thẳng d là tiếp tuyến của mặt cầu (C) tại điểm A(2;1;0) có vectơ chỉ phương là u = (−1;b;c) d x + 1 y z−2 và vuông góc với đường thẳng Δ: = =. Tính giá trị b + c(kết quả làm tròn đến 1 2 1 hang phần trăm).",
        "answer": "0,71",
        "acceptedAnswers": [
          "0,71",
          "0.71"
        ],
        "kqCells": [
          "0",
          ",",
          "7",
          "1"
        ],
        "explanation": "Mặt cầu (C) có tâm I = (1;2;−3), khi đó IA = (1;−1;3)<br>Đường thẳng Δ có vectơ chỉ phương u = (1;2;1)<br>Do d là tiếp tuyến của mặt cầu tại điểm A(2;1;0) nên IA.u = 0 ⇔ −b + 3c−1 = 0<br>Lại có d vuông góc với đường thẳng Δ nên u.u = 0 ⇔ 2b + c−1 = 0<br>Δ d<br>{ 2<br>b =<br>{ −b + 3c−1 = 0 7 5<br>Ta có hệ phương trình; ⇔;. Vậy b + c = ≈ 0,71.<br>}2b + c−1 = 0<br>3 7<br>c =<br>} 7"
      },
      {
        "id": 73,
        "part": 3,
        "shortTag": "P3.9",
        "label": "Phần 3 - Câu 9",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz cho A(−2;0;0); B(0;−2;0); C(0;0;−2). D là điểm khác O sao cho DA, DB, DC đôi một vuông góc. I(a;b;c) là tâm mặt cầu ngoại tứ diện ABCD. Tính S = a + b + c.",
        "answer": "-1",
        "acceptedAnswers": [
          "-1"
        ],
        "kqCells": [
          "-",
          "1",
          "",
          ""
        ],
        "explanation": "Gọi D(x;y;z) ⇒ AD = (x + 2;y;z); BD = (x;y + 2;z);CD = (x;y;z + 2).<br>Vì DA,DB,DC đôi một vuông góc nên:<br>{ AD.BD = 0 { x(x + 2) + y(y + 2) + z<sup>2</sup> = 0<br>; AD.CD = 0 ⇔; x(x + 2) + y<sup>2</sup> + z(z + 2) = 0 ⇔ x = y = z = −.<br>} BD.CD = 0 } x<sup>2</sup> + y(y + 2) + z(z + 2) = 0<br>I(a;b;c) là tâm mặt cầu ngoại tiếp tứ diện ABCD nên:<br>(a + 2)<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = a<sup>2</sup> + (b + 2)<sup>2</sup> + c<sup>2</sup><br>{ IA = IB<br>; IA = IC ⇔; (a + 2)<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + (c + 2)<sup>2</sup>.<br>} IA = ID (a + 2)<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = (a + 4) 2 + (b + 4) 2 + (c + 4) 2<br>} 3 3 3<br>a = b<br>−1<br>⇔; a = c ⇔ a = b = c =. Vậy a + b + c = −1.<br>16<br>4a + 4 = 8a +<br>} 3"
      },
      {
        "id": 74,
        "part": 3,
        "shortTag": "P3.10",
        "label": "Phần 3 - Câu 10",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt cầu (S) tâm I(−2;3;0) và đường thẳng x−4 y−3 z−3 Δ: = =. Biết đường thẳng Δ cắt mặt cầu (S) tại hai điểm phân biệt A,B sao 2 1 2 cho AB = 8. Tính bán kính của mặt cầu (S).",
        "answer": "5",
        "acceptedAnswers": [
          "5"
        ],
        "kqCells": [
          "5",
          "",
          "",
          ""
        ],
        "explanation": "Giả sử mặt cầu (S) có phương trình (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 4x−6y + 2m = 0.<br>13<br>Mặt cầu (S) có tâm I(−2;3;0) và bán kính R = 13−2m với m <.<br>Đường thẳng Δ đi qua điểm M (4;3;3) và có một vtcp là u = (2;1;2).<br>[IM,u]<br>Khoảng cách từ tâm I đến đường thẳng Δ bằng: d = d(I;Δ) = = 3.<br>Vì đường thẳng Δ cắt mặt cầu (S) tại hai điểm phân biệt A,B sao cho AB = 8 nên ta có<br>AB<sup>2</sup><br>d<sup>2</sup> + = R<sup>2</sup> ⇔ 32 + 16 = 13−2m ⇔ m = −6. (thỏa điều kiện).<br>Suy ra bán kính mặt cầu là R = 13−2.(−6) = 5."
      },
      {
        "id": 75,
        "part": 3,
        "shortTag": "P3.11",
        "label": "Phần 3 - Câu 11",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d2_p3_q12_p103_1.png",
        "question": "Trong không gian Oxyz, một vòm được thiết kế có bề mặt là mặt cầu tâm I(1;2;20), bán kính bằng 50m và có đáy nằm trên mặt phẳng (Oxy). Chiều cao của vòm là bao nhiêu? (biết đơn vị của hệ trục tọa độ là mét)",
        "answer": "70",
        "acceptedAnswers": [
          "70"
        ],
        "kqCells": [
          "7",
          "0",
          "",
          ""
        ],
        "explanation": "Khoảng cách từ tâm I đến mặt phẳng (Oxy) là 20 m.<br>Vậy chiều cao của vòm là 20 + 50 = 70 m."
      },
      {
        "id": 76,
        "part": 3,
        "shortTag": "P3.12",
        "label": "Phần 3 - Câu 12",
        "topic": "B3.D2: Viết PT Mặt cầu",
        "type": "short",
        "figure": null,
        "question": "Hệ thống định vị toàn cầu GPS là một hệ thống cho phép xác định chính xác vị trí của một vật trong không gian. Cách thức hoạt động của GPS như sau: Trong cùng một thời điểm, vị trí M của một vật sẽ được xác định bằng 4 vệ tinh cho trước, các vệ tinh này có gắn máy thu tín hiệu, bằng cách so sánh thời gian từ lúc tín hiệu được phát đi với thời gian nhận tín hiệu phản hồi thì sẽ xác định được khoảng cách từ các vệ tinh đến vị trí M. Như vậy, vị trí M là giao điểm của 4 mặt cầu có tâm là 4 vệ tinh đã cho. Giả sử trong không gian Oxyz, 4 vệ tinh có tọa độ là A(−1;6;3), B(4;8;1), C(9;6;7), D(−15;18;7). Biết khoảng cách từ M đến các vệ tinh lần lượt là MA = 6, MB = 7, MC = 12, MD = 24. Khi đó tọa độ điểm M (x;y;z). Tính giá trị biểu M M M thức T = x + y + z. M M M",
        "answer": "2",
        "acceptedAnswers": [
          "2"
        ],
        "kqCells": [
          "2",
          "",
          "",
          ""
        ],
        "explanation": "Gọi M(a;b;c). Khi đó ta có:<br>(a + 1)<sup>2</sup> + (b−6)<sup>2</sup> + (c−3)<sup>2</sup> = 36 ⇔ a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 2a−12b−6c + 10 = 0 (1)<br>(a−4)<sup>2</sup> + (b−8)<sup>2</sup> + (c−1)<sup>2</sup> = 49 ⇔ a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −8a−16b−2c + 32 = 0 (2)<br>(a−9)<sup>2</sup> + (b−6)<sup>2</sup> + (c−7)<sup>2</sup> = 144 ⇔ a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −18a−12b−14c + 22 = 0 (3)<br>(a + 15)<sup>2</sup> + (b−18)<sup>2</sup> + (c−7)<sup>2</sup> = 576 ⇔ a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 30a−36b−14c + 22 = 0 (4)<br>Giải hệ gồm 4 phương trình trên ta được a = 1;b = 2;c = −1 nên M(1;2;−1).<br>Vậy T = 1 + 2 + (−1) = 2."
      }
    ]
  },
  "oxyz_b3_d3": {
    "id": "oxyz_b3_d3",
    "category": "oxyz",
    "badge": "BÀI 3 • DẠNG 3",
    "title": "Bài 3 - Dạng 3: Vị trí tương đối liên quan mặt cầu & Bài toán thực tế",
    "shortTitle": "B3.D3: VTTĐ Mặt cầu & Thực tế",
    "baiTitle": "Bài 3. Phương trình mặt cầu",
    "dangTitle": "Dạng 3: Một số bài toán liên quan vị trí tương đối với mặt cầu và thực tế",
    "subtitle": "Bài 3. Phương trình mặt cầu • Gồm Lý thuyết, Phương pháp, 10 Ví dụ tự luận & 26 câu Trắc nghiệm (P1: 15 • P2: 4 • P3: 7)",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">BÀI 3 • DẠNG 3</span>\n    <h4>Bài 3. Phương trình mặt cầu — Dạng 3: Một số bài toán liên quan vị trí tương đối với mặt cầu và thực tế</h4>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-subhead\">Dạng 3: Vị trí tương đối liên quan đến mặt cầu và ứng dụng thực tếMN</div>\n    <div class=\"oxyz-theory-subhead\">Phương pháp: Có ba trường hợp như sau:</div>\n    <div class=\"oxyz-theory-line\">Mặt cầu</div>\n    <div class=\"oxyz-theory-line\">ax + by + cz + d</div>\n    <div class=\"oxyz-theory-line\">Tính d (I;(P)) = I I I và so sánh với bán kính R</div>\n    <div class=\"oxyz-theory-line\">(P)</div>\n    <div class=\"oxyz-theory-line\">Mặt phẳng d(I;(P)) > R Mặt phẳng không cắt mặt cầu</div>\n    <div class=\"oxyz-theory-line\">d(I;(P)) = R Mặt phẳng tiếp xúc mặt cầu tại M</div>\n    <div class=\"oxyz-theory-line\">(I;(P))</div>\n    <div class=\"oxyz-theory-line\">< R Mặt phẳng cắt mặt cầu</div>\n    <div class=\"oxyz-theory-line\">[u;MI]</div>\n    <div class=\"oxyz-theory-line\">Tính d(I;d) = và so sánhd (I;(P)) > R với bán kính R</div>\n    <div class=\"oxyz-theory-line\">Đường thẳng d(I;d) > R Đường thẳng không cắt mặt cầu</div>\n    <div class=\"oxyz-theory-line\">d(I;d) = R Đường thẳng tiếp xúc mặt cầu</div>\n    <div class=\"oxyz-theory-line\">d(I;d) < R Đường thẳng cắt mặt cầu</div>\n    <div class=\"oxyz-theory-line\">Tính IM và so sánh với bán kính R</div>\n    <div class=\"oxyz-theory-line\">IM > R Điểm M nằm ngoài mặt cầu</div>\n    <div class=\"oxyz-theory-line\">Điểm</div>\n    <div class=\"oxyz-theory-line\">IM = R Điểm M nằm trên mặt cầu</div>\n    <div class=\"oxyz-theory-line\">IM < R Điểm M nằm trong mặt cầu</div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Bài tập tự luận 1",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt phẳng (P):2x + 3y + z + 17 = 0 và mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 4y−2z−8 = 0. Xét vị trí tương đối của mặt phẳng (P)và mặt cầu(S).",
        "figure": null,
        "explanation": "2−6 + 1 + 17<br>Mặt cầu (S) có tâm I(1;−2;1), bán kính R = 14 và d (I,(P)) = = 14.<br>22 + 32 + 12<br>Vậy mặt phẳng (P)tiếp xúc với mặt cầu(S)."
      },
      {
        "id": 2,
        "label": "Bài tập tự luận 2",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt cầu (S):(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z + 3)<sup>2</sup> = 4 và mặt phẳng (P):x + y−z + 4 = 0. Xét vị trí tương đối của mặt phẳng (P) và mặt cầu (S).",
        "figure": null,
        "explanation": "1 + 2 + 3 + 4 10<br>Mặt cầu (S) có tâm I(1;2;−3), bán kính R = 4 = 2 và d(I,(P)) = = > R<br>12 + 12 + (−1)<sup>2</sup> 3<br>Vậy mặt phẳng (P)và mặt cầu(S) không có điểm chung."
      },
      {
        "id": 3,
        "label": "Bài tập tự luận 3",
        "question": "Trong không gian Oxyz, cho mặt cầu (S):(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + z<sup>2</sup> = 9 và đường thẳng có x−1 y−2 z−3 phương trình Δ: = =. Tìm vị trí tương đối của đường thẳng Δ và mặt cầu (S) 2 −2 1",
        "figure": null,
        "explanation": "Mặt cầu (S):(x + 1)<sup>2</sup> + (y−2)<sup>2</sup> + z<sup>2</sup> = 9có tâm I(−1;2;0) bán kính R = 3<br>Gọi H là hình chiếu vuông góc của I trên Δ thì ta có H(1 + 2t;2−2t;3 + t), t ∈ ℝ.<br>Khi đó: IH = (2 + 2t;−2t;3 + t). Một vectơ chỉ phương của Δ là u = (2;−2;1).<br>Ta có: IH.u = 0 ⇔ 4 + 4t + 4t + 3 + t = 0 ⇔ t = −.<br>(4 14 20) 16 196 400 2 17 2 17<br>IH =;; ⇒ IH = + + = ⇒ d(I;Δ) = < R<br>9 9 9 81 81 81 3 3<br>Vậy đường thẳng Δcắt mặt cầu (S) tại hai điểm phân biệt.<br>{ x = 4 + 2t"
      },
      {
        "id": 4,
        "label": "Bài tập tự luận 4",
        "question": "Trong không gian Oxyz, đường thẳng d:; y = 3 + t,t ∈ ℝ. Viết phương trình mặt cầu (S) có } z = 3 + 2t tâm I(−2;3;0) và đường thẳng d cắt mặt cầu (S) tại hai điểm phân biệt A, B sao cho độ dài đoạn thẳng AB = 8.",
        "figure": null,
        "explanation": "Gọi H là trung điểm của AB ⇒ IH ⊥ AB, AH = 4.<br>Đường thẳng d đi qua điểm M(4;3;3) và có 1 vectơ chỉ phương u = (2;1;2).<br>Ta có:IM = (6;0;3) ⇒ [IM,u] = (−3;−6;6)<br>IM,u]<br>(−3)<sup>2</sup> + (−6)<sup>2</sup> + 62<br>⇒ IH = d(I;d) = = = 3.<br>u 22 + 12 + 22<br>Khi đó: R<sup>2</sup> = IA<sup>2</sup> = IH<sup>2</sup> + AH<sup>2</sup> = 25 ⇒ R = 5.<br>Mặt cầu (S) có tâm I(−2;3;0) và bán kính R = 5 nên có phương trình là:<br>(x + 2)<sup>2</sup> + (y−3)<sup>2</sup> + z<sup>2</sup> = 25.<br>x−2 y−3 z + 4"
      },
      {
        "id": 5,
        "label": "Bài tập tự luận 5",
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai đường thẳng chéo nhau d: = = 2 3 −5 x + 1 y−4 z−4 và d′: = =. Viết phương trình mặt cầu có bán kính nhỏ nhất tiếp xúc với cả hai đường 3 −2 −1 thẳng (d),(d′).",
        "figure": null,
        "explanation": "Đường thẳng d có một vectơ chỉ phương là u = (2;3;−5).<br>Đường thẳng d′ có một vectơ chỉ phương là u = (3;−2;−1).<br>d′<br>Gọi M ∈ d ⇒ M(2 + 2m;3 + 3m;−4−5m) và N ∈ d′ ⇒ N(−1 + 3n;4−2n;4−n).<br>Khi đó ta có MN = (−3 + 3n−2m;1−2n−3m;8−n + 5m).<br>{ MN ⊥ d { MN.u = 0<br>MN là đường vuông góc chung của dvà d′ khi và chỉ khi; ⇔; d<br>}MN ⊥ d′ } MN.u = 0<br>d′<br>{ 2(−3 + 3n−2m) + 3.(1−2n−3m)−5(8−n + 5m) = 0<br>{ −38m + 5n = 43 { m = −1<br>⇔; ⇔; ⇔;.<br>3(−3 + 3n−2m)−2.(1−2n−3m)−1(8−n + 5m) = 0 }−5m + 14n = 19 }n = 1<br>Suy ra M(0;0;1), N(2;2;3).<br>Gọi I là trung điểm của suy ra I(1;1;2) và IM = IN = 12 + 12 + 12 = 3.<br>Khi đó mặt cầu tâm I, bán kính R = 3 tiếp xúc với hai đường thẳng d, d′lần lượt tại M và<br>Do MN là khoảng cách giữa hai đường thẳng d, d′ nên mặt cầu đường kính MN là mặt cầu có<br>bán kính nhỏ nhất tiếp xúc với hai đường thẳng d, d′.<br>Vậy phương trình mặt cầu cần tìm là<br>(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + (z−2)<sup>2</sup><br>= 3."
      },
      {
        "id": 6,
        "label": "Bài tập tự luận 6",
        "question": "Trong không gian với hệ tọa độ Oxyz cho mặt cầu (S): x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −4x + 2y−2z−3 = 0 và điểm A(5;3;−2). Một đường thẳng d thay đổi luôn đi qua A và luôn cắt mặt cầu tại hai điểm phân biệt M,N. Tính giá trị nhỏ nhất của biểu thức S = AM + 4AN.",
        "figure": null,
        "explanation": "Mặt cầu (S) có tâm I(2;−1;1), bán kính R = 3.<br>AI = 34 > R ⇒ A nằm ngoài mặt cầu (S).<br>Do hai điểm M,N nằm ở vị trí hai đầu một dây cung nên để S thì N nằm giữa A và M.<br>min<br>Gọi H là trung điểm MN ⇒ IH ⊥ MN,NH = MN.<br>S = 4(AH −NH) + AH + NH = 5AH −3NH<br>S = 5 AI<sup>2</sup> −IH<sup>2</sup> −3 R<sup>2</sup> −IH<sup>2</sup> = 5 34−x<sup>2</sup> −3 9−x<sup>2</sup>,x = IH.<br>Xét hàm số f (x) = 5 34−x<sup>2</sup> −3 9−x<sup>2</sup>,(0 ≤ x < 3).<br>−5x 3x (−5 3)<br>Đạo hàm: f′(x) = + = x +.<br>34−x<sup>2</sup> 32 −x<sup>2</sup> 34−x<sup>2</sup> 32 −x<sup>2</sup><br>(−5 3)<br>Xét + > 0 ⇔ 5 9−x<sup>2</sup> < 3 34−x<sup>2</sup><br>34−x<sup>2</sup> 9−x<sup>2</sup><br>⇔ 225−25x<sup>2</sup> < 9.34−9x<sup>2</sup> ⇔ 16x<sup>2</sup> + 81 > 0(luôn đúng).<br>Suy ra f′(x) ≥ 0,∀x ∈ [0;3), f′(x) = 0 ⇔ x = 0 ⇒ f (x) đồng biến trên [0;3).<br>Suy ra min f (x) = f (0) = 5 34 −9.<br>[0;3)"
      },
      {
        "id": 7,
        "label": "Bài tập tự luận 7",
        "question": "Trong không gian với hệ trục tọa độ Oxyz, đài kiểm soát không lưu sân bay có tọa độ O(0;0;0), mỗi đơn vị trên trục ứng với 1km. Máy bay bay trong phạm vi cách đài kiểm soát 417 km sẽ hiển thị trên màn hình ra đa. Một máy bay đang ở vị trí A(−688;−185;8), chuyển động theo theo đường thẳng d có véctơ chỉ phương là u = (91;75;0) và hướng về đài kiểm soát không lưu. Hãy xác định tọa độ vị trí sớm nhất mà máy bay xuất hiện trên màn hình ra đa.",
        "figure": null,
        "explanation": "Phương trình tham số của đường thẳng d đi qua A(−688;−185;8) và nhận u = (91;75;0) làm<br>{ x = −688 + 91t<br>véctơ chỉ phương là; y = −185 + 75t.<br>z = 8<br>Gọi B là vị trí sớm nhất mà máy bay xuất hiện trên màn hình ra đa.<br>Vì B ∈ d ⇒ B(−688 + 91t;−185 + 75t;8).<br>Vì B là vị trí sớm nhất mà máy bay xuất hiện trên màn hình ra đa nên<br>OB = 417 ⇔ (−688 + 91t)<sup>2</sup> + (−185 + 75t)<sup>2</sup> + 82 = 417<br>[t = 3<br>⇔ 13906t<sup>2</sup> −152966t + 333744 = 0 ⇔<br>t = 8<br>Với t = 3 ⇒ B(−415;40;8) ⇒ AB ≈ 353,77 km<br>Với t = 8 ⇒ B(−88;415;8) ⇒ AB ≈ 848,53 km<br>Do 353,77 < 848,53 vị trí máy bay xuất hiện sớm nhất là B(−415;40;8)."
      },
      {
        "id": 8,
        "label": "Bài tập tự luận 8",
        "question": "Trong không gian với hệ trục tọa độ Oxyz(đơn vị trên mỗi trục là mét), một ngọn hải đăng được đặt ở vị trí I(21;35;50) và ngọn hải đăng đó được thiết kế với bán kính phủ sáng là 4 km. Nếu người đi biển di chuyển theo đường thẳng từ vị trí I(21;35;50) đến vị trí D(5121;658;0). Hãy tìm vị trí cuối cùng trên đoạn ID sao cho người đi biển có thể nhìn thấy được ánh sáng từ ngọn hải đăng (kết quả làm tròn tới chữ số thập phân thứ hai).",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d3_tuluan_q8_p106_1.png",
        "explanation": "Phương trình mặt cầu để mô tả ranh giới bên ngoài của vùng phủ sáng trên biển của ngọn hải<br>đăng là: (x−21)<sup>2</sup> + (y−35)<sup>2</sup> + (z−50)<sup>2</sup> = 40002.<br>Ta có ID = 26400629 > 4000 nên điểm D nằm ngoài mặt cầu.<br>Đường thẳng IDđi qua điểm I(21;35;50)và nhận ID = (5100;623;−50) làm véctơ chỉ phương<br>{ x = 21 + 5100t<br>nên phương trình tham số của ID là; y = 35 + 623t<br>z = 50−50t<br>Giả sử H là điểm cuối cùng trên ID sao cho người đi đường có thể nhìn thấy ánh sáng từ ngọn<br>hải đăng. Khi đó IH = R.<br>Do H ∈ ID ⇒ H(21 + 5100t;35 + 623t;50−50t) ⇒ IH = (5100t;623t;−50t).<br>[t ≈ 0,78<br>Do IH = R ⇒ (5100t)<sup>2</sup> + (623t)<sup>2</sup> + (−50t)<sup>2</sup> = 4000 ⇔ 26400629t<sup>2</sup> = 4000 ⇔<br>t ≈ −0,78<br>Với t ≈ 0,78 ⇒ H(3999;520,94;11). Nhận thấy IH cùng huướng với ID nên H thuộc đoạn<br>thẳng ID.<br>Với t ≈ −0,78 ⇒ H(−3957;−450,94;89). Nhận thấy IH không cùng hướng với ID nên H<br>không thuộc đoạn thẳng ID.<br>Vậy vị trí cần tìm là H(3999;520,94;11)"
      },
      {
        "id": 9,
        "label": "Bài tập tự luận 9",
        "question": "Ericsson Globe (Thuỵ Điển) là toà nhà bán cầu lớn nhất trên thế giới (năm 2020),với hình dạng một quả cầu màu trắng có đường kính 110 m và chiều cao bên trong 85 m, nó có đủ chỗ ngồi cho 16 000 khán giả của các buổi biểu diễn hoà nhạc hoặc 13 850 khán giả của các trận đấu khúc côn cầu trên băng. Giả sử ta biểu diễn mô phỏng của toà nhà Ericsson Globe trong hệ trục toạ độ Oxyz bởi một mặt cầu có tâm I, đường kính 110 m và OA = 85 m như hình vẽ (đơn vị trên trục là mét). Hãy viết phương trình của mặt cầu này.",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d3_tuluan_q9_combined.png",
        "explanation": "Theo giả thiết đường kính 110 m nên bán kính R = 55m.<br>Ta có OI = OA−IA = 85−55 = 30 suy ra I(0;0;30)<br>Vậy phương trình mặt cầu cần tìm là x<sup>2</sup> + y<sup>2</sup> + (z−30)<sup>2</sup> = 552"
      },
      {
        "id": 10,
        "label": "Bài tập tự luận 10",
        "question": "Giả sử Trái Đất có dạng hình cầu bán kính bằng 6,4.106m. Bạn An đang đứng trên mặt đất. Có 3 vệ tinh báo về máy chủ tiếp nhận thông tin rằng vệ tinh thứ nhất đang cách An 3.106m, vệ tinh thứ hai đang cách An 4.106m và vệ tinh thứ ba đang cách An 5.106m. Biết rằng trong hệ trục toạ độ Oxyz cho trước với O là tâm Trái Đất (1 đơn vị =106m), tại thời điểm vệ tinh thông báo về máy chủ thì toạ độ của các vệ tinh lần lượt là I (4;4;6), I (8;4;3) và I (4;9;3). Hãy tìm tọa độ vị trí của bạn An (làm tròn đến 1 2 3 hàng đơn vị).",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d3_tuluan_q10_p107_1.png",
        "explanation": "Gọi vị trí bạn An là A (x; y; z) thì An chính là giao điểm của bốn mặt cầu: Trái Đất và ba mặt cầu<br>tâm lần lượt I, I, I có bán kính lần lượt là khoảng cách từ các vệ tinh đến An<br>1 2 3<br>Ta có phương trình mặt cầu của trái đất là x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 6,42 ≈ 41.<br>Ta có phương trình mặt cầu của vệ tinh thứ nhất là (x−4)<sup>2</sup> + (y−4)<sup>2</sup> + (z−6)<sup>2</sup> = 32 = 9.<br>Ta có phương trình mặt cầu của vệ tinh thứ hai là (x−8)<sup>2</sup> + (y−4)<sup>2</sup> + (z−3)<sup>2</sup> = 42 = 16.<br>Ta có phương trình mặt cầu của vệ tinh thứ ba là (x−4)<sup>2</sup> + (y−9)<sup>2</sup> + (z−3)<sup>2</sup> = 52 = 25.<br>{ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 6,42 ≈ 41<br>{ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 6,42 ≈ 41<br>(x−4)<sup>2</sup> + (y−4)<sup>2</sup> + (z−6)<sup>2</sup><br>= 9<br>8x + 8y + 12z = 100<br>{ x = 4<br>Ta có hệ; ⇒; ⇔; y = 4<br>(x−8)<sup>2</sup> + (y−4)<sup>2</sup> + (z−3)<sup>2</sup> = 16 16x + 8y + 6z = 114<br>z = 3<br>} (x−4)<sup>2</sup> + (y−9)<sup>2</sup> + (z−3)<sup>2</sup> = 25 }8x + 18y + 6z = 122<br>Vậy toạ độ bạn An là A(4;4;3) với (1 đơn vị =106m)."
      }
    ],
    "questions": [
      {
        "id": 1,
        "part": 1,
        "shortTag": "P1.1",
        "label": "Phần 1 - Câu 1",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S) có phương trình x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−4y−6z = 0. Trong ba điểm có tọa độ lần lượt là (0;0;0),(1;2;3),(2;0;6) thì có bao nhiêu điểm nằm trên mặt cầu (S)?",
        "options": {
          "A": "0.",
          "B": "3.",
          "C": "1.",
          "D": "2."
        },
        "answer": "D",
        "explanation": "Thay tọa độ ba điểm vào phương trình mặt cầu, ta có:<br>02 + 02 + 02 −2.0−4.0−6.0 = 0 (Đúng) ⇒ O(0;0;0) ∈ (S).<br>12 + 22 + 32 −2.1−4.2−6.3 = 0 (Sai) ⇒ A(1;2;3) ∉ (S).<br>22 + 02 + 62 −2.2−4.0−6.6 = 0 (đúng) ⇒ B(2;0;6) ∈ (S).<br>Vậy trong ba điểm đề cho, có hai điểm nằm trên mặt cầu (S)."
      },
      {
        "id": 2,
        "part": 1,
        "shortTag": "P1.2",
        "label": "Phần 1 - Câu 2",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho mặt cầu (S)có phương trình x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−4y−6z = 0. Trong ba điểm có tọa độ lần lượt là (0;0;0), (1;2;3) và (2;0;6) thì có bao nhiêu điểm nằm trên mặt cầu.",
        "options": {
          "A": "0.",
          "B": "3.",
          "C": "2.",
          "D": "1."
        },
        "answer": "C",
        "explanation": "Điểm nằm trên mặt cầu thỏa mãn phương trình x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−4y−6z = 0.<br>Xét hai điểm (0;0;0) và (2;0;6) thỏa mãn.<br>Xét điểm (1;2;3)ta có 12 + 22 + 32 −2.1−4.2−6.3 = −14 ≠ 0 (không thỏa mãn)."
      },
      {
        "id": 3,
        "part": 1,
        "shortTag": "P1.3",
        "label": "Phần 1 - Câu 3",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gianOxyz cho mặt cầu (S) có phương trình x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−4y−6z = 0 trong các điểm có tọa độ lần lượt là (0;0;0), (1;2;3), (2;0;6) thì có bao nhiêu điểm trên mặt cầu.",
        "options": {
          "A": "0.",
          "B": "3.",
          "C": "2.",
          "D": "1."
        },
        "answer": "C",
        "explanation": "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−4y−6z = 0 (1)<br>Xét điểm (0;0;0) ta có 02 + 02 + 02 −2.0−4.0−6.0 = 0 suy ra điểm (0;0;0) nằm trên mặt cầu<br>(S).<br>Xét điểm (1;2;3) ta có 12 + 22 + 32 −2.1−4.2−6.3 = −14 ≠ 0 suy ra điểm (1;2;3) không nằm<br>trên mặt cầu (S).<br>Xét điểm (2;0;6) ta có 22 + 02 + 62 −2.2−4.0−6.6 = 0 suy ra điểm (2;0;6) nằm trên mặt cầu<br>(S).<br>Vậy có 2 điểm nằm trên mặt cầu."
      },
      {
        "id": 4,
        "part": 1,
        "shortTag": "P1.4",
        "label": "Phần 1 - Câu 4",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho hai mặt cầu (S):(x−3)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 9 và (S'):(x + 2)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 4. Khẳng định nào sau đây là đúng?",
        "options": {
          "A": "Hai mặt cầu tiếp xúc ngoài.",
          "B": "Hai mặt cầu tiếp xúc trong.",
          "C": "Hai mặt cầu không có điểm chung.",
          "D": "Hai mặt cầu có nhiều hơn một điểm chung."
        },
        "answer": "A",
        "explanation": "Mặt cầu (S) có tâm I(3;0;0),R = 3 còn mặt cầu (S′) có tâm I′(−2;0;0),R′ = 2<br>Do II′ = 5 = R + R′ nên hai mặt cầu tiếp xúc ngoài."
      },
      {
        "id": 5,
        "part": 1,
        "shortTag": "P1.5",
        "label": "Phần 1 - Câu 5",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho điểm M thuộc mặt cầu (S):(x−3)<sup>2</sup> + (y−3)<sup>2</sup> + (z−2)<sup>2</sup> = 9 và ba điểm A(1;0;0),B(2;1;3),C(0;2;−3). Biết rằng tập hợp các điểm M thỏa mãn biểu thức MA<sup>2</sup> + 2.MB.MC = 8 là đường tròn cố định, bán kính r của đường tròn này là.",
        "options": {
          "A": "r = 6.",
          "B": "r = 3.",
          "C": "r = 6.",
          "D": "r = 3."
        },
        "answer": "A",
        "explanation": "Gọi M(x;y;z) khi đó MA<sup>2</sup> + 2.MB.MC = 8<br>⇔ (x−1)<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2.[(2−x).(−x) + (1− y).(2− y) + (3−z).(−3−z)] = 8<br>⇔ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x−2y−7 = 0 ⇔ (x−1)<sup>2</sup> + (y−1)<sup>2</sup> + z<sup>2</sup> = 9 ⇒ M ∈ (S).<br>Mặt cầu (S):I(3;3;2),R = 3. Mặt cầu (S):I (1;1;0),R = 3.<br>1 1 1<br>Ta có II = 2 3 < R + R ⇒ (S)cắt cầu (S) theo giao tuyến là một đường tròn.<br>1 1 1<br>Đường tròn này nằm trên mặt phẳng<br>(P):(x−3)<sup>2</sup> + (y−3)<sup>2</sup> + (z−2)<sup>2</sup> −[(x−1)<sup>2</sup> + (y−1)<sup>2</sup> + z<sup>2</sup>] = 0 ⇔ x + y + z−5 = 0.<br>d(I;(P)) = 3 ⇒ r = R<sup>2</sup> −d<sup>2</sup>(I;(P)) = 6."
      },
      {
        "id": 6,
        "part": 1,
        "shortTag": "P1.6",
        "label": "Phần 1 - Câu 6",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, mặt cầu (S):(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 3)<sup>2</sup> = 16 đi qua điểm nào dưới đây?",
        "options": {
          "A": "Điểm Q(−2;−1;−1).",
          "B": "Điểm N(−2;−1;3).",
          "C": "Điểm M(2;1;−3).",
          "D": "Điểm P(2;1;1)."
        },
        "answer": "D",
        "explanation": "Thay tọa độ điểm P(2;1;1) vào phương trình mặt cầu (S):(x−2)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 3)<sup>2</sup> = 16<br>(thỏa mãn). Ta có mặt cầu (S) đi qua điểm P."
      },
      {
        "id": 7,
        "part": 1,
        "shortTag": "P1.7",
        "label": "Phần 1 - Câu 7",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S):(x−2)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−1)<sup>2</sup> = 6. Điểm nào dưới đây thuộc mặt cầu (S)?",
        "options": {
          "A": "B(3;1;1).",
          "B": "A(3;−2;2).",
          "C": "C(3;−2;3).",
          "D": "D(1;0;4)."
        },
        "answer": "C",
        "explanation": "Ta thấy (3−2)<sup>2</sup> + (−2 + 1)<sup>2</sup> + (3−1)<sup>2</sup> = 6 ⇒ C(3;−2;3) ∈ (S)."
      },
      {
        "id": 8,
        "part": 1,
        "shortTag": "P1.8",
        "label": "Phần 1 - Câu 8",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S): (x−2)<sup>2</sup> + (y + 3)<sup>2</sup> + (z−1)<sup>2</sup> = 9. Điểm nào trong các điểm bên dưới thuộc mặt cầu (S)?",
        "options": {
          "A": "K(5;−3;1).",
          "B": "J(−2;3;−1).",
          "C": "H(−7;−3;1).",
          "D": "I(2;−3;1)."
        },
        "answer": "A",
        "explanation": "Thay tọa độ các điểm vào phương trình mặt cầu (S) ta có:<br>Điểm K(5;−3;1) ∈ (S) vì (5−2)<sup>2</sup> + (−3 + 3)<sup>2</sup> + (1−1)<sup>2</sup> = 9 ⇔ 9 = 9 (luôn đúng).<br>Điểm J(−2;3;−1) ∉ (S) vì (−2−2)<sup>2</sup> + (3 + 3)<sup>2</sup> + (−1−1)<sup>2</sup> = 9 ⇔ 56 = 9 (vô lý).<br>Điểm H(−7;−3;1) ∉ (S) vì (−7−1)<sup>2</sup> + (−3−2)<sup>2</sup> + (1−3)<sup>2</sup> = 9 ⇔ 93 = 9 (vô lý).<br>Điểm I(2;−3;1) ∉ (S) vì (2−1)<sup>2</sup> + (−3−2)<sup>2</sup> + (1−3)<sup>2</sup> = 9 ⇔ 30 = 9 (vô lý)."
      },
      {
        "id": 9,
        "part": 1,
        "shortTag": "P1.9",
        "label": "Phần 1 - Câu 9",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, gọi I là tâm của mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2x−4z−1 = 0. Độ dài đoạn OI (với O là gốc tọa độ) bằng",
        "options": {
          "A": "5.",
          "B": "5.",
          "C": "6.",
          "D": "6."
        },
        "answer": "B",
        "explanation": "Ta có I(−1;0;2). Suy ra OI = (−1)<sup>2</sup> + 02 + 22 = 5."
      },
      {
        "id": 10,
        "part": 1,
        "shortTag": "P1.10",
        "label": "Phần 1 - Câu 10",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S):(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + (z−4)<sup>2</sup> = 4. Có bao nhiêu điểm P thuộc (S) mà tiếp diện của (S) tại P cắt các trục Ox,Oz tương ứng tại các điểm E(a;0;0),F(0;0;b) sao cho a,b là các số nguyên dương và E • PF = 90o?",
        "options": {
          "A": "1.",
          "B": "2.",
          "C": "4.",
          "D": "3."
        },
        "answer": "C",
        "explanation": "Mặt cầu (S) có tâm I(1;−2;4) và bán kính R = 2.<br>−2<br>Ta có d(I,(Oxz)) = = 2 = R nên (S) tiếp xúc với (Oxz) tại H(1;0;4).<br>Dễ thấy EH = EP,FH = FP (do tính chất các tiếp tuyến kẻ từ 1 điểm đến mặt cầu).<br>Suy ra ΔEPF = ΔEHF (c – c – c) nên E • HF = E • PF = 90o (2 góc tương ứng) hay HE.HF = 0.<br>Khi đó (a−1;0;−4).(−1;0;b−4) = 0 ⇔ −a + 1−4b + 16 = 0 ⇔ a + 4b−17 = 0.<br>17<br>Vì a nguyên dương nên a = 17−4b ≥ 0 ⇒ b ≤ ⇒ b ∈ {1;2;3;4}.<br>Các cặp (a;b) thỏa mãn là (13;1),(9;2),(5;3),(1;4).<br>(21)"
      },
      {
        "id": 11,
        "part": 1,
        "shortTag": "P1.11",
        "label": "Phần 1 - Câu 11",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho hai mặt cầu (S),(S): (S) có tâm I 0,0,, bán 1 2 1 2 9 kính r = 6 và (S) có tâm J(0,0,1), bán kính r =. Hỏi có bao nhiêu điểm M(x,y,z) với 1 2 2 2 x,y,z nguyên thuộc phần giao của hai khối cầu?",
        "options": {
          "A": "11.",
          "B": "13.",
          "C": "9.",
          "D": "7."
        },
        "answer": "B",
        "explanation": "(21)<br>Ta có phương trình mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z− = 36.<br>1 2<br>81<br>Và phương trình mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> =.<br>2 4<br>Điểm M(x,y,z) thuộc giao của hai khối cầu (S),(S) nên toạ độ điểm M(x,y,z) là nghiệm<br>1 2<br>của hệ bất phương trình<br>{ (21) 2<br>x<sup>2</sup> + y<sup>2</sup> + z− 2 ≤ 36 { x<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> ≤ 81<br>; ⇔; 4.<br>x<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> ≤ 81 }z = 5<br>} 4<br>81 17<br>Từ đó suy ra x<sup>2</sup> + y<sup>2</sup> + (5−1)<sup>2</sup> ≤ ⇔ x<sup>2</sup> + y<sup>2</sup> ≤.<br>4 4<br>17 { x = 0 { x = ±1 { x = ±1 { x = 0 { x = ±2 { x = 0<br>Do x,y ∈ ′ và x<sup>2</sup> + y<sup>2</sup> ≤ suy ra;;;;;;;;;;;.<br>4 }y = ±1 }y = 0 }y = ±1 }y = ±2 }y = 0 }y = 0<br>Vậy có 13 điểm M(x,y,z) với x,y,z nguyên thuộc phần giao của hai khối cầu."
      },
      {
        "id": 12,
        "part": 1,
        "shortTag": "P1.12",
        "label": "Phần 1 - Câu 12",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz, cho hai điểm A(1;5;2) và B(5;13;10). Có bao nhiêu điểm I(a;b;c) với a,b,c là các số nguyên sao cho có mặt cầu tâm I đi qua A,B và tiếp xúc với mặt phẳng (Oxy)?",
        "options": {
          "A": "10.",
          "B": "6.",
          "C": "8.",
          "D": "4."
        },
        "answer": "D",
        "explanation": "{ x = 1 + t<br>Ta có: AB = (4;8;8) ⇒ AB:; y = 5 + 2t.<br>z = 2 + 2t<br>Gọi M là trung điểm của AB ⇒ M(3;9;6) ⇒ Mặt phẳng trung trực của AB là<br>(α):x−3 + 2(y−9) + 2(z−6) = 0 ⇔ x + 2y + 2z−33 = 0.<br>I ∈ (α) ⇒ a + 2b + 2c−33 = 0 ⇔ a = 33−2b−2c ⇒ a là số nguyên lẻ.<br>Gọi J = AB ∩ (Oxy) ⇒ J(0;3;0) ⇒ JA = 3,JB = 15.<br>Gọi C là tiếp điểm của mặt cầu và (Oxy) ⇒ C(a;b;0).<br>()<br>Ta có: JA.JB = JC<sup>2</sup> ⇒ JC<sup>2</sup> = 45 ⇒ C thuộc đường tròn tâm J,3 5.<br>Xét trong mặt phẳng (Oxy), phương trình của (J,3 5): a<sup>2</sup> + (b−3)<sup>2</sup> = 45 ⇒ a<sup>2</sup> ≤ 45.<br>Do a,b,c ∈ ′ và a lẻ nên ta có: a<sup>2</sup> = 1 ⇒ (b−3)<sup>2</sup> = 44 (loại);<br>a<sup>2</sup> = 9 ⇒ (b−3)<sup>2</sup> = 36 (thỏa mãn); a<sup>2</sup> = 25 ⇒ (b−3)<sup>2</sup> = 20 (loại).<br>Vậy có 4 bộ (a;b;c) thỏa mãn."
      },
      {
        "id": 13,
        "part": 1,
        "shortTag": "P1.13",
        "label": "Phần 1 - Câu 13",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d3_p1_q13_p109_1.png",
        "question": "Trong không gian hệ trục tọa độ Oxyz, bề mặt của một quả bóng thám không dạng hình cầu có phương trình x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −200x−600y−4000z + 4099900 = 0. Tìm tâm và bán kính mặt cầu.",
        "options": {
          "A": "Tâm I(100;300;2000), bán kính r = 100.",
          "B": "Tâm I(−100;−300;−2000), bán kính r = 10.",
          "C": "Tâm I(100;300;2000), bán kính r = 10.",
          "D": "Tâm I(−100;−300;−2000), bán kính r = 100."
        },
        "answer": "C",
        "explanation": "Tâm của mặt cầu là I(100;300;2000) và bán kính r = 1002 + 3002 + 20002 −4099900 = 10 m."
      },
      {
        "id": 14,
        "part": 1,
        "shortTag": "P1.14",
        "label": "Phần 1 - Câu 14",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz (đơn vị của các trục tọa độ là kilomet), một trạm thu phát sóng điện thoại di động có đầu thu phát được đặt tại điểm I(−6;−1;4). Cho biết bán kính phủ sóng của trạm là 2km. Người sử dụng điện thoại đứng ở điểm nào sau đây thì sử dụng được dịch vụ của trạm nói trên?",
        "options": {
          "A": "A(−4;0;2)",
          "B": "B(−5;−2;5).",
          "C": "C(−6;2;2)",
          "D": "D(0;−1;4)"
        },
        "answer": "B",
        "explanation": "Ta có IA = 3 > 2;IB = 3 < 2,IC = 13 > 2,ID = 6 > 2.<br>Vậy người đứng tại điểm B nằm trong mặt cầu nên sẽ sử dụng được dịch vụ của trạm thu phát<br>sóng điện thoại di động."
      },
      {
        "id": 15,
        "part": 1,
        "shortTag": "P1.15",
        "label": "Phần 1 - Câu 15",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "mcq",
        "figure": null,
        "question": "Trong không gian Oxyz (đơn vị của các trục tọa độ là kilomet), một trạm thu phát sóng điện thoại di động có đầu thu phát được đặt tại điểm I(−6;−1;4). Cho biết bán kính phủ sóng của trạm là 2km. Người sử dụng điện thoại đứng ở điểm nào sau đây thì không sử dụng được dịch vụ của trạm nói trên?",
        "options": {
          "A": "A(−5;0;3)",
          "B": "B(−5;−2;5).",
          "C": "C(−6;2;2)",
          "D": "D(−7;−2;3)"
        },
        "answer": "C",
        "explanation": "Ta có IA = 3 < 2;IB = 3 < 2,IC = 13 > 2,ID = 3 < 2.<br>Vậy người đứng tại điểm C nằm ngoài mặt cầu nên sẽ không sử dụng được dịch vụ của trạm thu<br>phát sóng điện thoại di động."
      },
      {
        "id": 16,
        "part": 2,
        "shortTag": "P2.1",
        "label": "Phần 2 - Câu 1",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (C):(x−1)<sup>2</sup> + (y + 2)<sup>2</sup> + z<sup>2</sup> = 16. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Điểm A(1;2;−1) nằm bên ngoài mặt cầu (C).",
          "b": "Điểm B(0;0;1) nằm bên trong mặt cầu (C).",
          "c": "Điểm C(0;2;1) nằm trên mặt cầu (C).",
          "d": "Với điểm D(2;1;−1), ta có ID < 4."
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: Tâm I(1;−2;0).<br>Ta có (1−1)<sup>2</sup> + (2 + 2)<sup>2</sup> + (−1)<sup>2</sup> = 17 > 16 ⇒ điểm A(1;2;−1) nằm bên ngoài mặt cầu (C).<br>b) Đúng: Ta có (0−1)<sup>2</sup> + (0 + 2)<sup>2</sup> + 12 = 6 < 16 ⇒ điểm B(0;0;1) nằm bên trong mặt cầu (C).<br>c) Sai: Ta có (0−1)<sup>2</sup> + (2 + 2)<sup>2</sup> + 12 = 18 > 16 ⇒ điểm C(0;2;1) nằm bên ngoài mặt cầu (C).<br>d) Đúng: Ta có ID = (2−1)<sup>2</sup> + (1 + 2)<sup>2</sup> + (−1)<sup>2</sup> = 11 < 4."
      },
      {
        "id": 17,
        "part": 2,
        "shortTag": "P2.2",
        "label": "Phần 2 - Câu 2",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S):(x + 1)<sup>2</sup> + (y−1)<sup>2</sup> + (z + 2)<sup>2</sup> = 9 có tâm I và bán kính R. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Phương trình mặt cầu (S) có tâm I(1;−1;2), bán kính R = 3.",
          "b": "Điểm A(0;2;−3) nằm trong mặt cầu.",
          "c": "Điểm J(1;2;3) nằm ngoài mặt cầu và khoảng cách từ tâm I đến điểm J bằng 10.",
          "d": "Khoảng cách từ tâm I đến tâm mặt cầu (S′):x<sup>2</sup> + y<sup>2</sup> + (z−1)<sup>2</sup> = 3 bằng 2."
        },
        "answers": {
          "a": false,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "a) Sai: Phương trình mặt cầu tâm I(1;−1;2), bán kính R = 3 là (x−1)<sup>2</sup> + (y + 1)<sup>2</sup> + (z−2)<sup>2</sup> = 9.<br>b) Sai: Ta có:<br>(0 + 1)<sup>2</sup> + (2−1)<sup>2</sup> + (−3 + 2)<sup>2</sup><br>= 3 = R = 3, do đó điểm A nằm trên mặt cầu.<br>c) Đúng: Ta có: (1 + 1)<sup>2</sup> + (2−1)<sup>2</sup> + (3 + 2)<sup>2</sup> = 30 > R = 3, do đó điểm J nằm ngoài mặt cầu.<br>Và IJ = (0;3;1) ⇒ IJ = 02 + 32 + 12 = 10<br>d) Sai: Mặt cầu (S) có tâm I(1;−1;2),<br>Mặt cầu (S′) có tâm K(0;0;1),<br>Khi đó IK = (−1;1;−1) ⇒ IK = (−1)<sup>2</sup> + 12 + (−1)<sup>2</sup> = 3 ≠ 2"
      },
      {
        "id": 18,
        "part": 2,
        "shortTag": "P2.3",
        "label": "Phần 2 - Câu 3",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 4y + 1 = 0 có tâm I và bán kính R. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt cầu (S) có tâm I(1;−2;0) và bán kính R = 2.",
          "b": "Bán kính của mặt cầu (S) là đoạn IM với điểm M(1;1;2).",
          "c": "Mặt cầu (S) có đường kính AB với A(0;1;−2) và B(2;−1;−4).",
          "d": "Mặt cầu (S) tiếp xúc với mặt phẳng (P):x + y−z−2 = 0."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": false
        },
        "explanation": "a) Đúng: Mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 4y + 1 = 0 có a = 1, b = −2, c = 0, d = 1<br>⇒ tâm I(1;−2;0) và bán kính R = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> −d = 2.<br>b) Sai: Xét M(1;1;2): 12 + 12 + 22 −2.1 + 4.1 + 1 = 9 do đó M không nằm trên (S)<br>Vậy bán kính mặt cầu (S) không là đoạn IM.<br>AB<br>c) Sai: Mặt cầu (S) nhận AB làm đường kính thì = R và tâm I là trung điểm của AB.<br>AB<br>Ta có AB = (2;−2;−2) ⇒ AB = 22 + (−2)<sup>2</sup> + (−2)<sup>2</sup> = 2 3 ⇒ = 3 ≠ R = 2<br>d) Sai: Mặt cầu (S) tiếp xúc với mặt phẳng (P):x + y−z−2 = 0 ⇔ R = d(I,(P)).<br>1 + (−2)−0−2<br>Ta có d(I,(P)) = = 3 ≠ R = 2.<br>12 + 12 + (−1)<sup>2</sup><br>y−1 z−2"
      },
      {
        "id": 19,
        "part": 2,
        "shortTag": "P2.4",
        "label": "Phần 2 - Câu 4",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "tf",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho đường thẳng d:x = = và mặt phẳng 2 −1 (P):3x + y−z−5 = 0. Mặt cầu (S) có tâm I thuộc đường thẳng d và cắt mặt phẳng (P) theo giao tuyến là đường tròn lớn nhất có bán kính r = 5. Xét tính đúng sai của các khẳng định sau:",
        "statements": {
          "a": "Mặt phẳng (P):3x + y−z−5 = 0 có vectơ pháp tuyến n = (3;1;−1).",
          "b": "Tọa độ tổng quát của tâm I là (t;−1 + 2t;−2−t).",
          "c": "d(I,(P)) = 3.",
          "d": "Mặt cầu (S) có phương trình là (x−1)<sup>2</sup> + (y−3)<sup>2</sup> + (z−1)<sup>2</sup> = 25."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "a) Đúng: (P):3x + y−z−5 = 0 có vectơ pháp tuyến là n = (3;1;−1).<br>{ x = t<br>y−1 z−2<br>b) Sai: Ta có: d:x = = ⇒ d:; y = 1 + 2t,t ∈ ℝI ∈ d ⇒ I(t;1 + 2t;2−t)<br>2 −1<br>z = 2−t<br>c) Sai: Do giao tuyến của (S) và (P) là đường tròn lớn nên I ∈ (P) ⇒ d(I,(P)) = 0.<br>d) Đúng: Ta có I ∈ d ⇒ I(t;1 + 2t;2−t)<br>Theo giả thiết I = d ∩ (P) nên tọa độ điểm I thỏa mãn phương trình mặt phẳng (P)<br>Thay tọa độ điểm I vào (P) ta có:<br>3t + (1 + 2t)−(2−t)−5 = 0 ⇔ 6t−6 = 0 ⇔ t = 1 ⇒ I(1;3;1)<br>Vì (S) ∩ (P) theo giao tuyến là đường tròn lớn có bán kính r = 5 nên ta có bán kính mặt cầu<br>(S)là R = r = 5.<br>Vậy mặt cầu có phương trình là:<br>(x−1)<sup>2</sup> + (y−3)<sup>2</sup> + (z−1)<sup>2</sup><br>= 25."
      },
      {
        "id": 20,
        "part": 3,
        "shortTag": "P3.1",
        "label": "Phần 3 - Câu 1",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ trục tọa độ Oxyz, cho mặt phẳng (P): 2x− y + 2z−14 = 0 và mặt cầu (S):x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 4y + 2z−3 = 0. Lấy M(a;b;c) thuộc mặt cầu (S) sao cho khoảng cách từ M đến mặt phẳng (P) là lớn nhất. Giá trị của biểu thức K = a + b + c là",
        "answer": "-5",
        "acceptedAnswers": [
          "-5"
        ],
        "kqCells": [
          "-",
          "5",
          "",
          ""
        ],
        "explanation": "Mặt cầu (S) có tâm I(1;−2;−1), bán kính R = 3.<br>2.1−(−2) + 2.(−1)−14<br>Ta có: d (I,(P)) = = 4 > R. Suy ra mặt phẳng (P) và mặt cầu (S)<br>22 + (−1)<sup>2</sup> + 22<br>không có điểm chung. Từ đó, điểm thuộc mặt cầu có khoảng cách nhỏ nhất hoặc lớn nhất tới mặt<br>phẳng (P) là giao điểm của mặt cầu với đường thẳng qua I và vuông góc với (P).<br>Trước hết ta lập phương trình đường thẳng d đi qua I và vuông góc với (P).<br>Mặt phẳng (P) có véctơ pháp tuyến là n = (2;−1;2).<br>Vì d ⊥ (P) nên nhận n = (2;−1;2) làm véctơ chỉ phương.<br>{ x = 1 + 2t<br>Từ đó d có phương trình; y = −2−t với (t ∈ ℝ).<br>z = −1 + 2t<br>{ x = 1 + 2t<br>y = −2−t<br>Ta tìm giao điểm của d và (S). Xét hệ:;<br>z = −1 + 2t<br>}x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> −2x + 4y + 2z−3 = 0<br>{ x = 1 + 2t<br>y = −2−t<br>⇔;<br>z = −1 + 2t<br>(1 + 2t)<sup>2</sup> + (−2−t)<sup>2</sup> + (−1 + 2t)<sup>2</sup> −2(1 + 2t) + 4(−2−t) + 2(−1 + 2t)−3 = 0<br>[{ t = 1<br>| x = 3<br>{ x = 1 + 2t |<br>y = −3<br>y = −2−t<br>}z = 1<br>⇔; ⇔ |. Suy ra có hai giao điểm là A(3;−3;1) và B(−1;−1;−3).<br>z = −1 + 2t<br>{ t = −1<br>}9t<sup>2</sup> −9 = 0 | x = −1<br>|;<br>y = −1<br>}z = −3<br>2.3−(−3) + 2.1−14 2.(−1)−(−1) + 2(−3)−14<br>Ta có: d (A,(P)) = = 1; d (B,(P)) = = 7.<br>22 + (−1)<sup>2</sup> + 22 22 + (−1)<sup>2</sup> + 22<br>Suy ra M ≡ B(−1;−1;−3). Từ đó a = −1; b = −1; c = −3.<br>Vậy K = −5."
      },
      {
        "id": 21,
        "part": 3,
        "shortTag": "P3.2",
        "label": "Phần 3 - Câu 2",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz (đơn vị của các trục tọa độ là kilômét), một trạm thu phát sóng điện thoại di động có đầu thu phát được đặt tại điểm I(−2;1;−4). Biết bán kính phủ sóng của trạm là 3km. Có 5 người sử dụng điện thoại tại các điểm A(2;−1;3),B(0;1;−4),C(−2;1;−3), D(0;1;−3), E(−4;−2;1). Hỏi trong số 5 người đó, có bao nhiêu người có thể sử dụng được dịch vụ của trạm nói trên?",
        "answer": "3",
        "acceptedAnswers": [
          "3"
        ],
        "kqCells": [
          "3",
          "",
          "",
          ""
        ],
        "explanation": "Ta tính: IA = 42 + (−2)<sup>2</sup> + 72 = 69 > 3; IB = 22 + 02 + 02 = 2 < 3.<br>IC = 02 + 02 + 11 = 1 < 3; ID = 22 + 02 + 12 = 5 < 3; IE = (−2)<sup>2</sup> + (−3)<sup>2</sup> + 52 = 38 > 3.<br>Vậy có 3 người có thể sử dụng dịch vụ của trạm nói trên."
      },
      {
        "id": 22,
        "part": 3,
        "shortTag": "P3.3",
        "label": "Phần 3 - Câu 3",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho mặt cầu (S):(x−1)<sup>2</sup> + (y−2)<sup>2</sup> + (z−3)<sup>2</sup> = 25 và hai điểm A(3;−2;6),B(0;1;0). Mặt phẳng (P):ax + by + cz−2 = 0 chứa đường thẳng AB và cắt (S) theo giao tuyến là đường tròn có bán kính nhỏ nhất. Giá trị của biểu thức M = 2a + b−cbằng bao nhiêu?",
        "answer": "1",
        "acceptedAnswers": [
          "1"
        ],
        "kqCells": [
          "1",
          "",
          "",
          ""
        ],
        "explanation": "Ta có: (P) ⊥ n = (a;b;c) trong đó a;b;c không đồng thời bằng 0. Mặt cầu (S) có tâm I(1;2;3)<br>và bán kính R = 5.<br>{ 3a−2b + 6c−2 = 0 { b = 2<br>Do mặt phẳng (P) chứa đường thẳng ABnên ta có:; ⇒; (1)<br>}b−2 = 0 }a = 2−2c<br>Bán kính đường tròn giao tuyến là: r = R<sup>2</sup> −d<sup>2</sup> trong đó<br>c + 4 c<sup>2</sup> + 8c + 16<br>d = d<br>(I;(P))<br>= =.<br>a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> 5c<sup>2</sup> −8c + 8<br>c<sup>2</sup> + 8c + 16 1 24 2c + 3<br>Để bán kính đường tròn nhỏ nhất điều kiện là d lớn nhất ⇔ = +.<br>5c<sup>2</sup> −8c + 8 5 5 5c<sup>2</sup> −8c + 8<br>2c + 3 2c + 3<br>lớn nhất ⇔ m = lớn nhất. Coi hàm số m = là một phương trình ẩn c ta<br>5c<sup>2</sup> −8c + 8 5c<sup>2</sup> −8c + 8<br>được: 5mc<sup>2</sup> −2(4m + 1)c + (8m−3) = 0, phương trình có nghiệm<br>⇔ Δ′ = −24m<sup>2</sup> + 23m + 1 ≥ 0 ⇔ − ≤ m ≤ 1 ⇒ m lớn nhất ⇔ c = 1<br>24<br>⇒ a = 0 ⇒ M = 2a + b−c = 1."
      },
      {
        "id": 23,
        "part": 3,
        "shortTag": "P3.4",
        "label": "Phần 3 - Câu 4",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "short",
        "figure": null,
        "question": "Trong không gian với hệ tọa độ Oxyz, cho mặt phẳng (P):x + y−z−3 = 0 và hai điểm M(1;1;1),N(−3;−3;−3). Mặt cầu (S) đi qua M, N và tiếp xúc với mặt phẳng (P) tại điểm Q. Biết rằng Q luôn thuộc một đường tròn cố định. Tìm bán kính của đường tròn đó.",
        "answer": "6",
        "acceptedAnswers": [
          "6"
        ],
        "kqCells": [
          "6",
          "",
          "",
          ""
        ],
        "explanation": "Đường thẳng MN đi qua điểm M(1;1;1) và nhận MN = (−4;−4;−4) là véctơ chỉ phương.<br>Chọn u = (1;1;1) là véctơ chỉ phương của đường thẳng MN, suy ra phương trình đường thẳng<br>{ x = 1 + t<br>MN là:; y = 1 + t.<br>z = 1 + t<br>{ x = 1 + t { t = 2<br>y = 1 + t x = 3<br>Gọi A = MN ∩ (P), suy ra tọa độ A là nghiệm hệ phương trình; ⇔;.<br>z = 1 + t y = 3<br>}x + y−z−3 = 0 }z = 3<br>Suy ra A(3;3;3).<br>Các điểm M, N,Q cùng thuộc một đường tròn và AQ là tiếp tuyến đường tròn đó nên ta có<br>AQ<sup>2</sup> = AM.AN.<br>Thay tọa độ các điểm vào ta được AM = 2 3, AN = 6 3, suy ra AQ<sup>2</sup> = 36 ⇔ AQ = 6.<br>Vậy điểm Q luôn thuộc một đường tròn cố định có tâmA(3;3;3) và bán kính R = 6."
      },
      {
        "id": 24,
        "part": 3,
        "shortTag": "P3.5",
        "label": "Phần 3 - Câu 5",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "short",
        "figure": null,
        "question": "Trong hệ trục Oxyz cho trước (đơn vị trên trục là mét), cho một trạm thu phát sóng 5G có bán kính vùng phủ sóng của trạm ở ngưỡng 600m được đặt ở vị trí I(200;450;60). Tìm giá trị lớn nhất của m (làm tròn đến hàng đơn vị) để một người dùng điện thoại ở vị trí A(m + 100;m + 370;0) có thể sử dụng dịch vụ của trạm nói trên.",
        "answer": "512",
        "acceptedAnswers": [
          "512"
        ],
        "kqCells": [
          "5",
          "1",
          "2",
          ""
        ],
        "explanation": "Để một người dùng điện thoại ở vị trí A(m + 100;m + 370;0) có thể sử dụng dịch vụ của trạm<br>thu phát sóng 5G có bán kính vùng phủ sóng của trạm ở ngưỡng 600m được đặt ở vị trí<br>I(200;450;60) thì IA ≤ 600 ⇔ (m−100)<sup>2</sup> + (m−80)<sup>2</sup> + (−60)<sup>2</sup> ≤ 6002<br>180− 712400 180 + 712400<br>⇔ 2m<sup>2</sup> −360m−340000 ≤ 0 ⇔ ≤ m ≤.<br>2 2<br>180 + 712400<br>Vậy giá trị lớn nhất của m là ≈ 512.<br>x−2 y−1 z−1"
      },
      {
        "id": 25,
        "part": 3,
        "shortTag": "P3.6",
        "label": "Phần 3 - Câu 6",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "short",
        "figure": null,
        "question": "Trong không gian Oxyz, cho đường thẳng Δ: = =, (P):x + 2y−2z−2 = 0, −3 2 2 (Q):x + 2y−2z + 4 = 0. Gọi mặt cầu S(I,R) có tâm I thuộc Δ và tiếp xúc với (P),(Q). Khi đó đường kính của mặt cầu có giá trị bằng bao nhiêu?",
        "answer": "2",
        "acceptedAnswers": [
          "2"
        ],
        "kqCells": [
          "2",
          "",
          "",
          ""
        ],
        "explanation": "{ x = 2−3t<br>Ta có: phương trình tham số của Δ là; y = 1 + 2t. Vì I ∈ Δ ⇒ I(2−3t;1 + 2t;1 + 2t).<br>z = 1 + 2t<br>Mặt cầu (S) có tâm I(2−3t;1 + 2t;1 + 2t) thuộc Δ và tiếp xúc với (P),(Q) nên ta có:<br>d(I,(P)) = d(I,(Q))<br>(2−3t) + 2(1 + 2t)−2(1 + 2t)−2 (2−3t) + 2(1 + 2t)−2(1 + 2t) + 4<br>⇔ =<br>12 + 22 + (−2)<sup>2</sup> 12 + 22 + (−2)<sup>2</sup><br>⇔ −3t = −3t + 6 ⇒ t = 1.<br>Suy ra mặt cầu (S) có tâm I(−1;3;3) và bán kính R = 1.<br>Vậy đường kính của mặt cầu (S) bằng 2."
      },
      {
        "id": 26,
        "part": 3,
        "shortTag": "P3.7",
        "label": "Phần 3 - Câu 7",
        "topic": "B3.D3: VTTĐ Mặt cầu & Thực tế",
        "type": "short",
        "figure": "assets/images/quiz/math_oxyz/oxyz_b3_d3_p3_q7_p111_1.png",
        "question": "Một quả bóng rổ được đặt ở một góc của căn phòng hình hộp chữ nhật, sao cho quả bóng chạm và tiếp xúc với hai bức tường và nền nhà của căn phòng đó thì có một điểm trên quả bóng có khoảng cách lần lượt đến hai bức tường và nền nhà là 17 cm, 18 cm, 21 cm (tham khảo hình minh họa). Hỏi độ dài đương kính của quả bóng bằng bao nhiêu cm biết rằng quả bóng rổ tiêu chuẩn có đường kính từ 23 cm đến 24,5 cm? Kết quả là tròn đến một chữ số thập phân.",
        "answer": "23,9",
        "acceptedAnswers": [
          "23,9",
          "23.9"
        ],
        "kqCells": [
          "2",
          "3",
          ",",
          "9"
        ],
        "explanation": "Ta đặt hệ trục vào căn phòng sao cho có hai bức tường là mặt (Oxz),(Oyz), và nền là (Oxy).<br>Vậy bài toán dẫn đến việc tìm đường kính của mặt cầu tiếp xúc với 3 mặt phẳng toạ độ và chứa<br>điểm M(17;18;21).<br>Ta có thể gọi phương trình mặt cầu là (S):(x−a)<sup>2</sup> + (y−a)<sup>2</sup> + (z−a)<sup>2</sup> = a<sup>2</sup>, với a > 0 (do mặt<br>cầu tiếp xúc với các mặt phẳng toạ độ nên a = b = c = R).<br>Do M(17;18;21) ∈ (S) nên (17−a)<sup>2</sup> + (18−a)<sup>2</sup> + (21−a)<sup>2</sup> = a<sup>2</sup><br>[a = 28− 257<br>⇒ 2a<sup>2</sup> −112a + 1054 = 0 ⇔ |.<br>| a = 28 + 257<br>Vì quả bóng rổ tiêu chuẩn có đường kính từ 23 cm đến 24,5 cm nên a = 28− 257 thỏa.<br>Vậy đường kính quả bóng bằng 2a = 56−2 257 ≈ 23,9(cm)."
      }
    ]
  }
};

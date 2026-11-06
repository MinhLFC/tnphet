/**
 * DỮ LIỆU HÓA HỌC 12 - CHƯƠNG 5: PIN ĐIỆN & ĐIỆN PHÂN
 * Chủ đề 1: Thế điện cực & Nguồn điện hóa học (84 Ví dụ mẫu & 112 câu trắc nghiệm)
 * Chủ đề 2: Quá trình điện phân & Ứng dụng (47 Ví dụ mẫu & 101 câu trắc nghiệm)
 * Hoàn toàn sạch đẹp, phân tách rõ ràng từng ví dụ, không dính lý thuyết, công thức chuẩn HTML.
 */

window.CHEM_CH5_EXAMS_DATA = {
  "chem_ch5_cd1": {
    "code": "chem_ch5_cd1",
    "title": "Chủ đề 1: Thế điện cực & Nguồn điện hóa học",
    "shortTitle": "CĐ1: Thế điện cực & Pin",
    "badge": "CHỦ ĐỀ 1",
    "category": "ch5",
    "group": "ch5",
    "subtitle": "Chủ đề 1 • Gồm Lý thuyết & 84 Ví dụ mẫu, 112 câu Trắc nghiệm",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">⚡ CHỦ ĐỀ 1 • HÓA HỌC 12</span>\n    <h4>Chủ đề 1: Thế điện cực & Nguồn điện hóa học</h4>\n    <p style=\"margin: 0.35rem 0 0; font-size: 0.92rem; color: var(--text-muted);\">\n      Cặp oxi hoá – khử của kim loại • Thế điện cực chuẩn <i>E</i>° • Dãy điện hóa kim loại & Quy tắc Alpha &bull; Pin Galvani (Zn - Cu) &bull; Pin thực tế (Pin chanh, Acquy chì, Pin nhiên liệu, Pin mặt trời, Pin Lithium-ion)\n    </p>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-sec-header\">I. CẶP OXI HÓA – KHỬ CỦA KIM LOẠI</div>\n    <div class=\"oxyz-theory-line\">\n      Dạng oxi hoá (M<sup>n+</sup>) và dạng khử (M) của cùng một nguyên tố kim loại tạo nên <b>cặp oxi hoá – khử</b> của kim loại, kí hiệu là: <b>M<sup>n+</sup>/M</b>.\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • Quá trình oxi hoá: M &rarr; M<sup>n+</sup> + ne (chất khử nhường electron).\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • Quá trình khử: M<sup>n+</sup> + ne &rarr; M (dạng oxi hoá nhận electron).\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_lop_dien_kep.png', 'Mô hình lớp điện kép giữa kim loại và dung dịch')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_lop_dien_kep.png\" alt=\"Lớp điện kép\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Minh họa: Sự hình thành lớp điện tích kép tại bề mặt kim loại nhúng trong dung dịch muối</div>\n    </div>\n\n    <div class=\"oxyz-theory-sec-header\">II. THẾ ĐIỆN CỰC CHUẨN VÀ DÃY ĐIỆN HÓA</div>\n    <div class=\"oxyz-theory-line\">\n      <b>Thế điện cực chuẩn</b> (kí hiệu <i>E</i>°) của cặp oxi hoá – khử M<sup>n+</sup>/M là sức điện động của pin điện hoá tạo bởi điện cực hiđro chuẩn (SHE: <i>E</i>°<sub>2H<sup>+</sup>/H<sub>2</sub></sub> = 0,00 V) và điện cực kim loại M nhúng trong dung dịch ion M<sup>n+</sup> nồng độ 1 M ở điều kiện chuẩn (25 °C, 1 bar).\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_dien_cuc_she.png', 'Điện cực hiđro chuẩn (SHE)')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_dien_cuc_she.png\" alt=\"Điện cực SHE\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Minh họa: Cấu tạo điện cực hiđro chuẩn (SHE) với Pt phủ muội platin, khí H₂ (1 bar) và dung dịch H⁺ (1 M)</div>\n    </div>\n    <div class=\"oxyz-theory-line\">\n      <b>Ý nghĩa của thế điện cực chuẩn:</b>\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • Thế điện cực chuẩn <i>E</i>° càng <b>lớn</b> thì dạng oxi hoá có tính oxi hoá càng <b>mạnh</b>, dạng khử có tính khử càng <b>yếu</b>.\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • Thế điện cực chuẩn <i>E</i>° càng <b>nhỏ</b> (âm hơn) thì dạng khử có tính khử càng <b>mạnh</b>, dạng oxi hoá có tính oxi hoá càng <b>yếu</b>.\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • Kim loại có <i>E</i>°<sub>M<sup>n+</sup>/M</sub> &lt; 0 sẽ khử được ion H<sup>+</sup> trong dung dịch acid thành khí H<sub>2</sub>.\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_cd1_bang_the_dien_cuc.png', 'Bảng thế điện cực chuẩn một số cặp oxi hóa khử')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_cd1_bang_the_dien_cuc.png\" alt=\"Bảng thế điện cực chuẩn\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Bảng thế điện cực chuẩn (ở 25 °C) của các cặp oxi hoá – khử thông dụng</div>\n    </div>\n\n    <div class=\"oxyz-theory-sec-header\">III. QUY TẮC ALPHA VÀ DỰ ĐOÁN CHIỀU PHẢN ỨNG</div>\n    <div class=\"oxyz-theory-line\">\n      Phản ứng giữa 2 cặp oxi hoá – khử sẽ xảy ra theo chiều: <b>Chất oxi hoá mạnh hơn + Chất khử mạnh hơn &rarr; Chất oxi hoá yếu hơn + Chất khử yếu hơn</b>.\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_quy_tac_alpha.png', 'Quy tắc Alpha dự đoán chiều phản ứng')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_quy_tac_alpha.png\" alt=\"Quy tắc Alpha\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Quy tắc Alpha (&alpha;): Chất oxh mạnh (Cu²⁺) phản ứng với chất khử mạnh (Zn) tạo Cu và Zn²⁺</div>\n    </div>\n\n    <div class=\"oxyz-theory-sec-header\">IV. PIN ĐIỆN HÓA GALVANI VÀ CÁC NGUỒN ĐIỆN THỰC TẾ</div>\n    <div class=\"oxyz-theory-line\">\n      <b>Pin Galvani (Zn - Cu):</b>\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • <b>Anode (Cực âm -):</b> Xảy ra quá trình <b>oxi hoá</b> kẽm: Zn &rarr; Zn<sup>2+</sup> + 2e (thanh Zn bị mòn dần).\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • <b>Cathode (Cực dương +):</b> Xảy ra quá trình <b>khử</b> ion đồng: Cu<sup>2+</sup> + 2e &rarr; Cu (đồng bám vào thanh Cu).\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • <b>Cầu muối (Salt bridge):</b> Cho phép các ion di chuyển để trung hòa điện tích (anion SO<sub>4</sub><sup>2−</sup> hoặc NO<sub>3</sub><sup>−</sup> di chuyển về phía anode, cation K<sup>+</sup> hoặc Na<sup>+</sup> di chuyển về phía cathode).\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • <b>Sức điện động chuẩn của pin:</b> <i>E</i>°<sub>pin</sub> = <i>E</i>°<sub>cathode(+)</sub> − <i>E</i>°<sub>anode(−)</sub> = <i>E</i>°<sub>Cu<sup>2+</sup>/Cu</sub> − <i>E</i>°<sub>Zn<sup>2+</sup>/Zn</sub> = (+0,34 V) − (−0,76 V) = <b>1,10 V</b>.\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_pin_galvani_zn_cu.png', 'Mô hình Pin Galvani Zn - Cu')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_pin_galvani_zn_cu.png\" alt=\"Pin Galvani Zn - Cu\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Mô hình hoạt động của Pin Galvani Kẽm - Đồng và chiều di chuyển của electron qua vôn kế</div>\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_cac_loai_pin_thuc_te.png', 'Các loại pin và acquy trong đời sống')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_cac_loai_pin_thuc_te.png\" alt=\"Pin thực tế\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Các nguồn điện hoá học thực tế: Acquy chì (Lead-acid), Pin nhiên liệu H₂-O₂, Pin mặt trời và Pin Lithium-ion</div>\n    </div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Ví dụ 1",
        "question": "Kí hiệu cặp oxi hoá − khử ứng với quá trình khử: Fe<sup>3+</sup> + 1e &rarr; Fe<sup>2+</sup> là",
        "options": {
          "A": "Fe3+/Fe2+.",
          "B": "Fe<sup>2+</sup>/Fe.",
          "C": "Fe<sup>3+</sup>/Fe.",
          "D": "Fe<sup>2+</sup>/Fe<sup>3+</sup>."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 2,
        "label": "Ví dụ 2",
        "question": "Mối liên hệ giữa dạng oxi hóa và dạng khử của kim loại M được biểu diễn\nở dạng quá trình khử là",
        "options": {
          "A": "M\nM<sup>n+</sup> + ne.",
          "B": "M<sup>n+</sup> + ne &rarr; M.",
          "C": "M<sup>n−</sup> M + ne.",
          "D": "M + ne M<sup>n−</sup>"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 3,
        "label": "Ví dụ 3",
        "question": "Kí hiệu cặp oxi hoá – khử tương ứng với quá trình khử: Fe(OH)<sub>3</sub> + 1e &rarr; Fe(OH)<sub>2</sub> + OH<sup>−</sup>\nlà",
        "options": {
          "A": "Fe3+/Fe2+.",
          "B": "Fe<sup>2+</sup>/Fe.",
          "C": "Fe<sup>3+</sup>/Fe.",
          "D": "Fe(OH)<sub>3</sub>/Fe(OH)<sub>2</sub>"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 4,
        "label": "Ví dụ 4",
        "question": "Những phát biểu nào sau đây về phản ứng Ce<sup>4+</sup> + 2I<sup>−</sup> &rarr; I<sub>2</sub> + Ce<sup>3+</sup> là đúng? a. Phương trình trên đã cân bằng.\nb. Chất oxi hoá là Ce<sup>4+</sup>, chất khử là I<sup>−</sup>.\nc. Cặp oxi hoá – khử của kim loại cerium là Ce<sup>4+</sup>/Ce , của iodine là I<sub>2</sub>/2I<sup>−</sup> .\nd. Phương trình hoá học của phản ứng là: 2Ce<sup>4+</sup> + 2I<sup>−</sup> &rarr; I<sub>2</sub> + 2Ce<sup>3+</sup>.",
        "options": null,
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 5,
        "label": "Ví dụ 1",
        "question": "Thế điện cực chuẩn của một kim loại là gì?",
        "options": {
          "A": "Thế điện cực của kim loại trong dung dịch điện ly 0.1 M.",
          "B": "Thế điện cực của kim loại trong dung dịch điện ly 1 M ở nhiệt độ 25°",
          "C": "",
          "D": "Thế điện cực của kim loại trong dung dịch điện ly 2 M ở nhiệt độ 25°C."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 6,
        "label": "Ví dụ 2",
        "question": "Đối với điện cực hydrogen chuẩn, áp suất khí hydrogen được hấp phụ trên\nlá Pt và nồng độ ion H+ trong dung dịch chất điện li lần lượt là",
        "options": {
          "A": "1 atm và 1 M.",
          "B": "1 mmHg và 0,1 M.",
          "C": "1 N/m2 và 0,1 M.",
          "D": "1 bar và 1 M."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 7,
        "label": "Ví dụ 3",
        "question": "Phát biểu nào sau đây là đúng khi so sánh thế điện cực chuẩn của các kim loại?",
        "options": {
          "A": "Kim loại có thế điện cực chuẩn lớn hơn có tính khử mạnh hơn.",
          "B": "Kim loại có thế điện cực chuẩn nhỏ hơn có tính khử mạnh hơn.",
          "C": "Kim loại có thế điện cực chuẩn nhỏ hơn có tính oxi hóa mạnh hơn.",
          "D": "Kim loại có thế điện cực chuẩn lớn hơn có tính oxi hóa yếu hơn."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 8,
        "label": "Ví dụ 4",
        "question": "Giá trị thế điện cực chuẩn càng lớn thì dạng khử có tính khử như thế nào?",
        "options": {
          "A": "Càng mạnh.",
          "B": "Càng yếu.",
          "C": "Không thay đổi.",
          "D": "Càng biến động."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 9,
        "label": "Ví dụ 5",
        "question": "Giá trị thế điện cực chuẩn càng nhỏ thì dạng oxi hóa có tính oxi hóa như thế nào?",
        "options": {
          "A": "Càng mạnh.",
          "B": "Càng yếu.",
          "C": "Không thay đổi.",
          "D": "Càng biến động."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 10,
        "label": "Ví dụ 6",
        "question": "Đối với một điện cực kim loại, tại ranh giới giữa kim loại với dung dịch\nchất điện li",
        "options": {
          "A": "tồn tại cân bằng giữa dạng oxi hoá và dạng khử.",
          "B": "xảy ra quá trình khử ion kim loại.",
          "C": "xảy ra quá trình oxi hoá nguyên tử kim loại.",
          "D": "xảy ra phản ứng oxi hoá – khử."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 11,
        "label": "Ví dụ 7",
        "question": "Giá trị thế điện cực chuẩn của cặp oxi hoá − khử nào được quy ước bằng 0\nV?",
        "options": {
          "A": "Na+/Na.",
          "B": "2H+/H .",
          "C": "Al<sup>3+</sup>/Al.",
          "D": "Cl /2Cl−.\n2 2"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 12,
        "label": "Ví dụ 8",
        "question": "Đối với điện cực hydrogen chuẩn, tại ranh giới giữa bề mặt Pt với dung\ndịch chất điện li tồn tại cân bằng",
        "options": {
          "A": "2H O+ 2e H + 2OH−.",
          "B": "H++ 1e H.\n2 2",
          "C": "2H++ 2e H .",
          "D": "H H+ + 1e. Eo =−0,762 V"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 13,
        "label": "Ví dụ 9",
        "question": "Thế điện cực chuẩn của điện cực kẽm là , điều này nghĩa\nZn<sup>2+</sup>/Zn\nlà khi so sánh với điện cực hydrogen chuẩn, điện cực kẽm có thế điện cực",
        "options": {
          "A": "cao hơn.",
          "B": "thấp hơn.",
          "C": "bằng.",
          "D": "gấp đôi.\n3\nHOÁ 12 – HK I"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 14,
        "label": "Ví dụ 1",
        "question": "Trong dãy điện hoá của kim loại, khi đi từ trái sang phải, tính oxi hoá của\ncác ion kim loại biến đổi như thế nào?",
        "options": {
          "A": "Không đổi.",
          "B": "Tuần hoàn.",
          "C": "Giảm dần.",
          "D": "Tăng dần."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 15,
        "label": "Ví dụ 2",
        "question": "Kim loại nào sau đây có tính khử yếu hơn kim loại Cu?",
        "options": {
          "A": "Zn.",
          "B": "Ag.",
          "C": "Mg.",
          "D": "Fe.\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 16,
        "label": "Ví dụ 3",
        "question": "Kim loại nào sau đây có tính khử mạnh hơn kim loại Al?",
        "options": {
          "A": "Fe.",
          "B": "Cu.",
          "C": "Mg.",
          "D": "Ag."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 17,
        "label": "Ví dụ 4",
        "question": "Ion kim loại nào sau đây có tính oxi hóa mạnh nhất",
        "options": {
          "A": "Mg2+.",
          "B": "Zn2+.",
          "C": "Al3+.",
          "D": "Cu2+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 18,
        "label": "Ví dụ 5",
        "question": "Ion kim loại nào sau đây có tính oxi hóa yếu nhất?",
        "options": {
          "A": "Cu2+.",
          "B": "Na+.",
          "C": "Mg2+.",
          "D": "Ag+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 19,
        "label": "Ví dụ 6",
        "question": "Dãy cation kim loại được sắp xếp theo chiều tăng dần tính oxi hoá từ trái sang phải là",
        "options": {
          "A": "Cu2+, Fe2+, Mg2+.",
          "B": "Mg2+, Fe2+, Cu2+.",
          "C": "Mg2+, Cu2+, Fe2+.",
          "D": "Cu2+, Mg2+, Fe2+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 20,
        "label": "Ví dụ 7",
        "question": "Cho dãy sắp xếp các kim loại theo chiều giảm dần tính khử: Na, Mg, Al, Fe.\nTrong số các cặp oxi hoá − khử sau, cặp nào có giá trị thế điện cực chuẩn nhỏ nhất?",
        "options": {
          "A": "Mg<sup>2+</sup>/Mg.",
          "B": "Fe<sup>2+</sup>/Fe.",
          "C": "Na+/Na.",
          "D": "Al<sup>3+</sup>/Al."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 21,
        "label": "Ví dụ 8",
        "question": "Cho thứ tự sắp xếp các cặp oxi hoá − khử trong dãy điện hoá: Mg<sup>2+</sup>/Mg;\nH O/H , OH−; 2H+/H ; Ag<sup>+</sup>/Ag. Cặp oxi hoá − khử có giá trị thế điện cực chuẩn lớn nhất trong dãy là\n2 2 2",
        "options": {
          "A": "2H+/H .",
          "B": "Ag<sup>+</sup>/Ag.",
          "C": "H O/H , OH−.",
          "D": "Mg<sup>2+</sup>/Mg.\n2 2 2"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 22,
        "label": "Ví dụ 9",
        "question": "Trong số các ion: Ag+, Al3+, Fe2+, Cu2+, ion nào có tính oxi hoá mạnh nhất ở điều kiện chuẩn?",
        "options": {
          "A": "Cu2+.",
          "B": "Fe2+.",
          "C": "Ag+.",
          "D": "Al3+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 23,
        "label": "Ví dụ 10",
        "question": "Dãy kim loại sắp xếp theo chiều tăng dần tính khử từ trái sang phải là",
        "options": {
          "A": "Pb, Ni, Sn, Zn.",
          "B": "Pb, Sn, Ni, Zn.",
          "C": "Ni, Sn, Zn. Pb.",
          "D": "Ni, Zn, Pb, Sn."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 24,
        "label": "Ví dụ 11",
        "question": "Cho các ion kim loại: Zn2+, Sn2+, Ni2+, Fe2+, Pb2+. Thứ tự tính oxi hoá giảm dần là",
        "options": {
          "A": "Pb2+ > Sn2+ > Fe2+ > Ni2+ > Zn2+.",
          "B": "Sn2+ > Ni2+ > Zn2+ > Pb2+ > Fe2+.",
          "C": "Zn2+ > Sn2+ > Ni2+ > Fe2+ > Pb2+.",
          "D": "Pb2+ > Sn2+ > Ni2+ > Fe2+ > Zn2+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 25,
        "label": "Ví dụ 12",
        "question": "Dãy các kim loại được sắp xếp theo chiều tính khử giảm dần là",
        "options": {
          "A": "K > Ca > Mg > Cu > Fe > Al.",
          "B": "Ca > K > Mg > Cu > Fe > Al.",
          "C": "K > Ca > Mg > Al > Fe > Cu.",
          "D": "Ca > K > Cu > Mg > Fe > Al."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 26,
        "label": "Ví dụ 13",
        "question": "Dãy các ion được sắp xếp theo chiều tính oxi hoá giảm dần là",
        "options": {
          "A": "K+ > Mg2+ > Al3+ > Fe2+ > Cu2+.",
          "B": "Fe2+ > Cu2+ > K+ > Mg2+ > Al3+.",
          "C": "Cu2+ > Fe2+ > K+ > Mg2+ > Al3+.",
          "D": "Cu2+ > Fe2+ > Al3+ > Mg2+ > K+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 27,
        "label": "Ví dụ 14",
        "question": "Dung dịch chất nào sau đây có thể hoà tan được Fe?",
        "options": {
          "A": "AlCl .",
          "B": "Fe (SO )",
          "C": "FeCl .",
          "D": "MgCl .\n3 2 4 3 2 2"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 28,
        "label": "Ví dụ 15",
        "question": "Ở điều kiện chuẩn, Fe khử được ion kim loại nào sau đây trong dung dịch?",
        "options": {
          "A": "Mg2+.",
          "B": "Al3+.",
          "C": "Na+.",
          "D": "Ag+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 29,
        "label": "Ví dụ 16",
        "question": "Ở điều kiện chuẩn, kim loại nào sau đây khử được ion H+ thành H ?",
        "options": {
          "A": "Mg.",
          "B": "Cu.",
          "C": "Hg.",
          "D": "Au."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 30,
        "label": "Ví dụ 17",
        "question": "Kim loại Fe không phản ứng với chất nào sau đây trong dung dịch?",
        "options": {
          "A": "CuSO .",
          "B": "MgCl .",
          "C": "FeCl .",
          "D": "AgNO .\n4 2 3 3"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 31,
        "label": "Ví dụ 18",
        "question": "Để khử ion Fe3+ trong dung dịch thành ion Fe2+ có thể dùng một lượng\ndư",
        "options": {
          "A": "kim loại Mg.",
          "B": "kim loại Cu.",
          "C": "kim loại Ba.",
          "D": "kim loại Ag."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 32,
        "label": "Ví dụ 19",
        "question": "Để khử ion Cu2+ trong dung dịch CuSO có thể dùng kim loại\n4",
        "options": {
          "A": "Fe.",
          "B": "Na.",
          "C": "K.",
          "D": "Ba."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 33,
        "label": "Ví dụ 20",
        "question": "Cho phản ứng hoá học: Cu + 2Ag+\n5\nHOÁ 12 – HK I\n &rarr; Cu2+ + 2Ag.\nPhát biểu nào sau đây về phản ứng trên là đúng?",
        "options": {
          "A": "Ag+ khử Cu thành Cu2+.",
          "B": "Cu2+ có tính oxi hoá mạnh hơn Ag+.",
          "C": "Cu có tính khử yếu hơn Ag.",
          "D": "Cu là chất khử, Ag+ là chất oxi hoá."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 34,
        "label": "Ví dụ 21",
        "question": "Cho phản ứng hoá học: Cu + 2Fe3+ &rarr; Cu2+ + 2Fe2+. Phát biểu nào sau đây về phản ứng\ntrên không đúng?",
        "options": {
          "A": "Cu bị Fe3+ oxi hoá thành Cu2+.",
          "B": "Cu2+ có tính oxi hoá mạnh hơn Fe3+.\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978",
          "C": "Fe3+ bị Cu khử thành Fe2+.",
          "D": "Cu là chất khử, Fe3+ là chất oxi hoá."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 35,
        "label": "Ví dụ 22",
        "question": "Dung dịch chất nào sau đây có thể hoà tan được Fe?",
        "options": {
          "A": "AlCl .",
          "B": "Fe (SO )",
          "C": "FeCl .",
          "D": "MgCl .\n3 2 4 3 2 2"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 36,
        "label": "Ví dụ 23",
        "question": "Dãy gồm các ion đều oxi hóa được kim loại Fe là",
        "options": {
          "A": "Fe3+, Cu2+, Ag+.",
          "B": "Zn2+, Cu2+, Ag+.",
          "C": "Cr2+, Au3+, Fe3+.",
          "D": "Cr2+, Cu2+, Ag+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 37,
        "label": "Ví dụ 24",
        "question": "Cho các cặp oxi hoá – khử của các halogen và thế điện cực chuẩn tương ứng:\nCặp oxi hoá − khử F /2F− Cl /2Cl− Br /2Br− I /2I−\n2 2 2 2\nThế điện cực chuẩn (V) +2,87 +1,358 +1,087 +0,621\nDãy sắp xếp các ion halide theo thứ tự giảm dần tính khử là",
        "options": {
          "A": "F−, Cl−, Br−, I−.",
          "B": "Cl−, F−, Br−, I−.",
          "C": "I−, Br−, Cl−, F−.",
          "D": "Br−, I−, F−, Cl−."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 38,
        "label": "Ví dụ 25",
        "question": "Cho các cặp oxi hoá − khử của các kim loại và thế điện cực chuẩn tương ứng:\nCặp oxi hoá − khử Li+/Li Mg<sup>2+</sup>/Mg Zn<sup>2+</sup>/Zn Ag<sup>+</sup>/Ag\nThế điện cực chuẩn, V –3,040 –2,356 –0,762 +0,799\nTrong số các kim loại trên, kim loại có tính khử mạnh nhất là",
        "options": {
          "A": "Mg.",
          "B": "Zn.",
          "C": "Ag.",
          "D": "Li."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 39,
        "label": "Ví dụ 26",
        "question": "Cho biết:\nCặp oxi hoá – khử Cu<sup>2+</sup>/Cu Ag<sup>+</sup>/Ag Fe<sup>2+</sup>/Fe Ni2+/Ni\nThế điện cực chuẩn, V +0,340 +0,799 –0,44 –0,257\nDãy sắp xếp các ion kim loại theo chiều tăng dần tính oxi hoá là",
        "options": {
          "A": "Fe2+; Ni2+; Cu2+; Ag+.",
          "B": "Cu2+; Ag+; Ni2+; Fe2+.",
          "C": "Ag+; Fe2+; Cu2+; Ni2+.",
          "D": "Ag+; Cu2+; Ni2+; Fe2+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 40,
        "label": "Ví dụ 27",
        "question": "Xét các cặp oxi hoá - khử sau:\nCặp oxi hoá - khử\n6\nHOÁ 12 – HK I\nA g + / A g\nThế điện cực chuẩn\na) Kim loại có tính khử mạnh nhất, yếu nhất lần lượt là",
        "options": {
          "A": "4.",
          "B": "1.",
          "C": "3.",
          "D": "2."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 41,
        "label": "Ví dụ 28",
        "question": "Hai kim loại X, Y và các dung dịch muối chloride của chúng có các phản ứng hóa học sau:\nX + 2YCl\n3\n &rarr;\nAl3+ /Al\nXCl + 2YCl ;\n2 2\nY + XCl &rarr; YCl + X.\n2 2\nPhát biểu nào sau đây là đúng?",
        "options": {
          "A": "Kim loại X khử được ion Y2+.",
          "B": "Kim loại X có tính khử mạnh hơn kim loại Y.",
          "C": "Ion Y3+ có tính oxi hóa mạnh hơn ion X2+.",
          "D": "Ion Y2+ có tính oxi hóa mạnh hơn ion X2+.\nEo =+0,80 V; Eo =+0,85 V"
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 42,
        "label": "Ví dụ 29",
        "question": "Cho biết: Ag<sup>+</sup>/Ag Hg2+/Hg . Phản ứng hoá học nào sau đây xảy ra được?",
        "options": {
          "A": "Hg + Ag &rarr; Hg2+ + Ag.",
          "B": "Hg2+ + Ag &rarr; Hg + Ag+.",
          "C": "Hg2+ + Ag+ &rarr; Hg + Ag.",
          "D": "Hg + Ag &rarr; Hg2+ + Ag+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 43,
        "label": "Ví dụ 30",
        "question": "Cho các thông tin sau:\nX(s) + YSO (aq) &rarr; không có phản ứng Z(s) + YSO (aq) &rarr; Y(s) + ZSO (aq)\n4 4 4\n V  − 1 , 6 7 6 + 0 , 7 9 9\nM g 2 + / M g F e 2 + / F e\n−2,356\nM g , A g A l , F e M g , F\n−\ne\n0 , 4 4\nH+ H Ag+ A g\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\nTrong đó, X, Y, Z là các kim loại. Dãy nào sau đây sắp xếp đúng các kim loại theo mức độ hoạt động\ncủa chúng?",
        "options": {
          "A": "Z > Y > X.",
          "B": "X > Y > Z.",
          "C": "Y > X > Z.",
          "D": "Y > Z > X."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 44,
        "label": "Ví dụ 31",
        "question": "Giữa hai cặp oxi hoá – khử ở điều kiện chuẩn:\na. Cặp có thế điện cực chuẩn nhỏ hơn thì dạng khử có tính khử mạnh hơn.\nb. Cặp có thế điện cực chuẩn nhỏ hơn thì dạng oxi hoá có tính oxi hoá mạnh hơn.\nc. Cặp có thế điện cực chuẩn lớn hơn thì dạng khử có tính khử yếu hơn.\nd. Cặp có thế điện cực chuẩn lớn hơn thì dạng oxi hoá có tính oxi hoá yếu hơn.",
        "options": null,
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 45,
        "label": "Ví dụ 32",
        "question": "Dựa vào giá trị thế điện cực chuẩn của hai cặp oxi hoá – khử có thể dự\nđoán được vai trò của mỗi chất và chiều phản ứng xảy ra giữa chúng.\na. Dạng khử của cặp có giá trị thế điện cực chuẩn nhỏ hơn là chất khử.\nb. Dạng oxi hoá của cặp có giá trị thế điện cực chuẩn lớn hơn là chất oxi hoá.\nc. Dạng khử của cặp có giá trị thế điện cực chuẩn nhỏ hơn khử dạng oxi hoá của cặp có giá trị thế\nđiện cực chuẩn lớn hơn.\nd. Dạng khử của cặp có giá trị thế điện cực chuẩn lớn hơn khử dạng oxi hoá của cặp có giá trị thế\nđiện cực chuẩn nhỏ hơn.",
        "options": null,
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 46,
        "label": "Ví dụ 33",
        "question": "Ở điều kiện chuẩn, cho bột Cu dư vào dung dịch Fe (SO ) tới khi phản\n2 4 3\nứng hoàn toàn, thu được chất rắn X và dung dịch Y.\na. X gồm hai kim loại.\nb. Cu có tính khử mạnh hơn Fe2+ ở điều kiện chuẩn.\nc. Y gồm hai chất tan là CuSO và FeSO .\n4 4\nd. Trong điều kiện Fe (SO ) dư thì Y gồm ba muối.\n2 4 3",
        "options": null,
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 47,
        "label": "Ví dụ 34",
        "question": "Cho phản ứng oxi hoá – khử sau: X(s) + Y2+(aq)\n7\nHOÁ 12 – HK I\n &rarr; X2+(aq) + Y(s).\na. Chất X có tính khử mạnh hơn chất Y.\nb. Ion Y2+ có tính khử mạnh hơn ion X2+.\nc. Chất X có tính oxi hoá mạnh hơn chất Y.\nd. Ion X2+ có tính oxi hoá mạnh hơn ion Y2+.",
        "options": null,
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 48,
        "label": "Ví dụ 1",
        "question": "Trong pin Galvani, thành phần nào dưới đây không phải là một phần cấu tạo nhất định phải\ncó trong pin?",
        "options": {
          "A": "Điện cực dương.",
          "B": "Điện cực âm.",
          "C": "Cầu muối.",
          "D": "Dây dẫn điện."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 49,
        "label": "Ví dụ 2",
        "question": "Trong cầu muối của pin điện hoá khi hoạt động, xảy ra sự di chuyển của các",
        "options": {
          "A": "ion.",
          "B": "electron.",
          "C": "nguyên tử kim loại.",
          "D": "phân tử nước."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 50,
        "label": "Ví dụ 3",
        "question": "Trong quá trình hoạt động của pin điện hoá Zn − Cu, nhận định nào sau đây\nkhông đúng về vai trò của cầu muối?",
        "options": {
          "A": "Ngăn cách hai dung dịch chất điện li.",
          "B": "Cho dòng electron chạy qua.",
          "C": "Trung hoà điện ở mỗi dung dịch điện li.",
          "D": "Đóng kín mạch điện."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 51,
        "label": "Ví dụ 4",
        "question": "Trong pin điện hoá, quá trình khử",
        "options": {
          "A": "xảy ra ở cực âm.",
          "B": "xảy ra ở cực dương.",
          "C": "xảy ra ở cực âm và cực dương.",
          "D": "không xảy ra ở cả cực âm và cực dương."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 52,
        "label": "Ví dụ 5",
        "question": "Trong pin điện hóa, sự oxi hóa",
        "options": {
          "A": "xảy ra ở cực âm.",
          "B": "xảy ra ở cực dương.",
          "C": "xảy ra ở cực âm và cực dương.",
          "D": "không xảy ra ở cực âm và cực dương."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 53,
        "label": "Ví dụ 6",
        "question": "Phát biểu nào sau đây là đúng khi nói về pin Galvani ?",
        "options": {
          "A": "Anode là điện cực dương.",
          "B": "Cathode là điện cực âm.\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978",
          "C": "Ở điện cực âm xảy ra quá trình oxi hóa.",
          "D": "Dòng electron di chuyển từ cathode sang anode."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 54,
        "label": "Ví dụ 7",
        "question": "Khi pin Galvani Zn–Cu hoạt động thì",
        "options": {
          "A": "Zn đóng vai trò cực âm, Cu đóng vai trò cực dương.",
          "B": "ở điện cực âm, anode xảy ra quá trình khử Zn.",
          "C": "ở điện cực dương, cathode xảy ra quá trình oxi hóa Cu.",
          "D": "Dòng điện chạy từ Zn sang Cu."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 55,
        "label": "Ví dụ 8",
        "question": "Phát biểu nào sau đây không đúng về pin Galvani?",
        "options": {
          "A": "Ở điện cực dương xảy ra quá trình oxi hoá.",
          "B": "Cathode là kim loại yếu hơn, đóng vai trò điện cực dương của pin.",
          "C": "Anode là kim loại mạnh hơn, đóng vai trò điện cực âm của pin.",
          "D": "Phản ứng hoá học diễn ra trong pin kèm theo sự giải phóng điện năng."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 56,
        "label": "Ví dụ 9",
        "question": "Trong pin điện hoá Zn − Cu, phản ứng hoá học xảy ra giữa hai dạng nào của\ncác cặp oxi hoá − khử tương ứng?",
        "options": {
          "A": "Zn và Cu2+.",
          "B": "Zn và Cu.",
          "C": "Zn2+ và Cu2+.",
          "D": "Zn và Cu2+."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 57,
        "label": "Ví dụ 10",
        "question": "Trong quá trình hoạt động của pin điện Zn − Cu, dòng electron di chuyển\ntừ",
        "options": {
          "A": "cực zinc (Zn) sang cực copper (Cu).",
          "B": "cực bên phải sang cực bên trái.",
          "C": "cathode sang anode.",
          "D": "cực dương sang cực âm."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 58,
        "label": "Ví dụ 11",
        "question": "Cho pin điện hoá Zn – Fe. Xác định các chất, ion đóng vai trò là chất khử, chất oxi hoá\ntrong pin?",
        "options": {
          "A": "Zn là chất khử, Fe2+ là chất oxi hoá.",
          "B": "Zn là chất oxi hoá, Fe2+ là chất khử.",
          "C": "Zn2+ là chất khử, Fe là chất oxi hoá.",
          "D": "Zn2+ là chất oxi hoá, Fe là chất khử."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 59,
        "label": "Ví dụ 12",
        "question": "Cho một pin điện hóa được tạo bởi các cặp oxi hoá khử Fe<sup>2+</sup>/Fe, Ag<sup>+</sup>/Ag ở điều kiện\nchuẩn. Quá trình xảy ra ở cực âm khi pin hoạt động là",
        "options": {
          "A": "Fe\n10\nHOÁ 12 – HK I\n &rarr;\nFe2+ + 2e",
          "B": "Fe2 + 2e\n &rarr;\nFe",
          "C": "Ag+ + le Ag",
          "D": "Ag Ag+ + le\n&rarr; &rarr;"
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 60,
        "label": "Ví dụ 13",
        "question": "Trong pin nhiên liệu hydrogen, H có vai trò tương tự như kim loại mạnh hơn trong pin Galvani. Phản ứng nào sau đây diễn ra ở điện cực dương khi pin nhiên liệu hydrogen hoạt động?",
        "options": {
          "A": "2H + O\n2 2\n &rarr; 2H O.",
          "B": "H\n2 2\n &rarr; 2H+ + 2e.",
          "C": "O + 4H+ + 4e &rarr; 2H O.",
          "D": "2H+ + 2e &rarr; H ."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 61,
        "label": "Ví dụ 14",
        "question": "Phản ứng hoá học xảy ra trong pin điện hoá Sn − Cu: Sn + Cu2+ &rarr; Sn2+ + Cu\nTrong quá trình hoạt động của pin điện hoá, nhận định nào sau đây là đúng?",
        "options": {
          "A": "Khối lượng của điện cực Sn tăng.",
          "B": "Nồng độ Sn2+ trong dung dịch tăng.",
          "C": "Khối lượng của điện cực Cu giảm.",
          "D": "Nồng độ Cu2+ trong dung dịch tăng."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 62,
        "label": "Ví dụ 15",
        "question": "Khi pin Galvani Zn-Cu hoạt động thì nồng độ",
        "options": {
          "A": "Cu2+ giảm, Zn2+ tăng.",
          "B": "Cu2+ giảm, Zn2+ giảm.",
          "C": "Cu2+ tăng, Zn2+ tăng.",
          "D": "Cu2+ tăng, Zn2+ giảm."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 63,
        "label": "Ví dụ 16",
        "question": "Một pin Galvani được cấu tạo bởi hai cặp oxi hoá – khử sau:\n(1) Ag+ + e &rarr; Ag; Eo Ag<sup>+</sup>/Ag =0,799 V (2) Ni2+ + 2e &rarr; Ni; Eo Ni2+/Ni =−0,257 V\nKhi pin làm việc ở điều kiện chuẩn, nhận định nào sau đây là đúng?",
        "options": {
          "A": "Ag được tạo ra ở cực dương, Ni được tạo ra ở cực âm.",
          "B": "Ag được tạo ra ở cực dương, Ni2+ được tạo ra ở cực âm.",
          "C": "Ag+ được tạo ra ở cực âm và Ni được tạo ra ở cực dương.",
          "D": "Ag+ được tạo ra ở cực âm và Ni2+ được tạo ra ở cực dương."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 64,
        "label": "Ví dụ 17",
        "question": "Giá trị hiệu điện thế giữa hai điện cực được xác định:\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978",
        "options": {
          "A": "E = E – E .\npin (+) (–)",
          "B": "E = E – E .\npin (–) (+)",
          "C": "Epin = E + E .\n(+) (–)",
          "D": "Epin = điện cực có giá trị thế điện cực chuẩn nhỏ hơn – điện cực có giá trị thế điện cực chuẩn lớn\nhơn."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 65,
        "label": "Ví dụ 18",
        "question": "Nếu thế khử chuẩn của điện cực dương là 0,80 V và thế khử chuẩn của điện cực âm là\n11\nHOÁ 12 – HK I\n− 0 , 7 6 V thì sức điện động chuẩn của pin Galvani tạo từ hai điện cực trên là bao nhiêu?\nA. 1,56V B. – 1,56V. C.0,04V. D. – 0,04V .",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 66,
        "label": "Ví dụ 19",
        "question": "Cho pin điện hoá Fe-Cu. Biết E o\nF e 2+ /F e\n= - 0,44 V và E o\nC u 2+ / C u\n= 0,34 V.\nSức điện động chuẩn của pin điện hoá Fe-Cu là",
        "options": {
          "A": "1,66 V.",
          "B": "0,1 V.",
          "C": "0,78 V.",
          "D": "0,92 V."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 67,
        "label": "Ví dụ 20",
        "question": "Cho pin điện hoá Al-Pb. Biết E o\nA 3+ l /A l\n= -1,66 V và E o\nP b 2+ /P b\n= - 0,13 V.\nSức điện động chuẩn của pin điện hoá Al - Pb là\nA.1,79 V. B. -1,79V. C.-1,53V. D. 1,53 V.",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 68,
        "label": "Ví dụ 21",
        "question": "Cho các cặp oxi hóa - khử và thế điện cực chuẩn tương ứng:\nCặp oxi hóa – khử Cu<sup>2+</sup>/Cu Zn<sup>2+</sup>/Zn Fe<sup>2+</sup>/Fe Ag<sup>+</sup>/Ag\nThế điện cực chuẩn (V)\n+0,34 -0,762 -0,44 +0,799\nPin có sức điện động lớn nhất là",
        "options": {
          "A": "Pin Zn – Cu .",
          "B": "Pin Fe – Cu .",
          "C": "Pin Cu – Ag .",
          "D": "Pin Fe – Ag .\n[Đề tham khảo 2024] Sử dụng thông tin ở bảng dưới đây để trả lời các câu 22 – 23:\nCho bảng giá trị thế điện cực chuẩn của các cặp oxi hóa – khử như sau:\nCặp oxi hóa – khử Fe<sup>2+</sup>/Fe Cu<sup>2+</sup>/Cu Zn<sup>2+</sup>/Zn Ag/Ag Pb2+/Pb\nThế điện cực chuẩn -0,44 +0,34 -0,76 +0,80 -0,13\n(V)"
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 69,
        "label": "Ví dụ 22",
        "question": "Trong số các ion kim loại gồm Fe2+, Cu2+ và Zn2+, ở điều kiện chuẩn ion nào có tính oxi hóa\nyếu hơn Ag+, nhưng mạnh hơn Pb2+?",
        "options": {
          "A": "Fe2+, Cu2+, Zn2+.",
          "B": "Fe2+, Cu2+.",
          "C": "Zn2+.",
          "D": "Cu2+."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 70,
        "label": "Ví dụ 23",
        "question": "Sức điện động chuẩn lớn nhất của pin Galvani thiết lập từ hai cặp oxi hóa – khử trong số\ncác cặp trên là",
        "options": {
          "A": "1,24 V.",
          "B": "1,56 V.",
          "C": "1,60 V.",
          "D": "0,93 V."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 71,
        "label": "Ví dụ 24",
        "question": "Cho\nE oP\nin (M g − A g )\n= 3 , 1 7 V\nvà\nE o\nM g 2+ /M g\n= − 2 , 3 7 V\n. Tính thế điện cực chuẩn của cặp oxi hoá – khử\nEo\nAg<sup>+</sup>/Ag ( Ag<sup>+</sup>/Ag). (0,8)",
        "options": null,
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 72,
        "label": "Ví dụ 25",
        "question": "Pin X-Y có sức điện động chuẩn là 1,10 V với hai cặp oxi hoá - khử là X2+/X và Y2+/Y. Pin\nY-Z có sức điện động chuẩn là 0,82 V với hai cặp oxi hoá - khử là Y2+/Y và Z2+/Z. Pin X-Z (với hai\ncặp oxi hoá - khử là X2+/X và Z2+/Z) có sức điện động chuẩn là bao nhiêu volt (V)? (1,92)",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 73,
        "label": "Ví dụ 26",
        "question": "Cho pin điện hoá Pb – Cu có sức điện động chuẩn E op\nin (P b - C u )\n= 0,47 V, pin Zn-Cu có sức\nđiện động chuẩn Eo = 1,10 V. Tính sức điện động chuẩn của pin Zn – Pb . (0,63)\npin(Zn - Cu)\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 74,
        "label": "Ví dụ 27",
        "question": "Cho các pin điện hoá và sức điện động chuẩn tương ứng:\nPin điện hóa\nNi – Sn Zn – Cu Sn – Cu\nSức điện động chuẩn (V)\n0,12 1,102 0,477\nSức điện động chuẩn của pin Ni - Zn bằng bao nhiêu? (Lấm tròn kết quả đến phần trăm.) (0,51)",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 75,
        "label": "Ví dụ 28",
        "question": "Khi nói về pin Galvani, mỗi phát biểu sau đây là đúng hay sai?\na. Phản ứng hoá học xảy ra trong pin Galvani là phản ứng tự diễn biến.\nb. Trong pin Galvani, điện cực âm là nơi xảy ra quá trình khử.\nc. Sức điện động chuẩn của pin Galvani là hiệu điện thế giữa hai điện cực.\nd. Pin Galvani tạo ra dòng điện từ quá trình vật lí.",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 76,
        "label": "Ví dụ 29",
        "question": "Em hãy cho biết những thí nghiệm sau đây có thể tạo thành một pin điện hoá là đúng hay\nsai.\na. Một điện cực Al và một điện cực Cu cùng nhúng vào dung dịch nước muối.\nb. Một điện cực Al và một điện cực Cu cùng nhúng vào nước cất.\nc. Hai điện cực làm bằng Cu cùng nhúng vào dung dịch nước vôi trong.\nd. Hai điện cực làm bằng nhựa nhúng vào dầu hoả.",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 77,
        "label": "Ví dụ 30",
        "question": "Xét pin Galvani tạo bởi hai điện cực kim loại:\na. A là anode, E là cathode, C là cầu muối.\nb. Nếu A là Zn thì B phải là ZnSO .\n4\nc. Nếu C chứa KNO thì ion K+ được chuyển từ C vào D.\n3\nd. Chiều dòng điện ở mạch ngoài từ A sang E.",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 78,
        "label": "Ví dụ 31",
        "question": "Một pin điện hoá Zn − H được thiết lập ở các điều kiện như hình vẽ sau (vôn kế có điện trở rất lớn).\na. Giá trị thế điện cực chuẩn của cặp oxi hoá − khử Zn<sup>2+</sup>/Zn là 0,762 V.\nb. Quá trình khử xảy ra ở cathode là: 2H+ + 2e\n12\nHOÁ 12 – HK I\n &rarr; H . c. Chất điện li trong cầu muối là KCl.\nd. Phản ứng hoá học xảy ra trong pin là: Zn + 2H+ &rarr; Zn2+ + H .",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 79,
        "label": "Ví dụ 32",
        "question": "Cho pin điện hoá có cấu tạo như sau:\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\na. Sức điện động chuẩn của pin là 0,76 V.\nb. Tại điện cực âm xảy ra quá trình oxi hoá Zn(s) thành ion Zn2+(aq).\nc. Tại điện cực dương xảy ra quá trình khử ion H+(aq) thành khí H (g). d. Phản ứng xảy ra trong pin là: H (g) + Zn2+(aq) 13\nHOÁ 12 – HK I\n &rarr; Zn(s) + 2H+(aq).",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 80,
        "label": "Ví dụ 33",
        "question": "Acquy chì có cấu tạo như hình vẽ dưới đây:\nCực dương là thanh than chì (C) được phủ PbO và cực âm là tấm chì (Pb), cùng nhúng vào dung dịch H SO nồng độ 28%. Phản ứng xảy ra khi acquy xả điện là:\n2 4\nPb(s) + PbO (s) + 2H SO (aq)\n2 2 4\n &rarr; 2PbSO (s) + 2H O(l)\n4 2\nBiết rằng PbSO sinh ra từ điện cực nào đều bám hết vào điện cực đó.\n4\na. Tại anode, Pb bị khử và tạo thành PbSO .\n4\nb. Tại cathode, PbO bị oxi hoá và tạo thành PbSO .\n2 4\nc. Khi acquy xả điện, khối lượng các điện cực tăng lên.\nd. Nồng độ H SO trong acquy quy chì giảm xuống khi acquy xả điện.\n2 4\nIV. MỘT SỐ LOẠI PIN KHÁC\nHiện nay, có nhiều loại pin đang được sử dụng phổ biến như acquy, pin nhiên liệu, pin Mặt Trời,...\n Acquy là nguồn điện được sử dụng phổ biến trong các phương tiện giao thông, thiết bị lưu điện,\nphát điện. Acquy thuộc loại pin thứ cấp (pin sạc), các chất phản ứng được tái tạo trong quá trình\nsạc bằng dòng điện một chiều.\n Pin nhiên liệu là loại pin điện hoá chuyển đổi hoá năng thành điện năng thông qua phản ứng oxi\nhoá - khử giữa nhiên liệu và chất oxi hoá. Trong đó, các nhiên liệu thường là methane, methanol,\nethanol, hydrogen,... còn chất oxi hoá thường là oxygen. Pin nhiên liệu hydrogen - oxygen có\nnhiều ứng dụng và triển vọng trong tương lai.\n Pin Mặt Trời (solar cell) gồm nhiều tấm vật liệu bán dẫn được ghép nối với nhau, có khả năng\nchuyển đổi quang năng thành điện năng.\n Ưu, nhược điểm các loại pin trên được trình bày ở Bảng 15.2.\nBảng 15.2. Ưu, nhược điểm của acquy, pin nhiên liệu và pin Mặt Trời\nPin Ưu điểm Nhược điểm\n– Nặng, tuổi thọ thấp (trung bình\n– Dễ sản xuất, giá thành thấp.\nkhoảng 1 năm).\n– Hoạt động ổn định.\nAcquy chì – Gây ô nhiễm môi trường và ngộ\n– Dễ thu hồi sulfuric acid và chì để\nđộc chì ở các làng nghề tái chế\ntái chế.\nacquy cũ.",
        "options": null,
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 81,
        "label": "Ví dụ 1",
        "question": "Acquy chì là một loại acquy đơn giản, gồm bản cực dương bằng PbO , bản cực âm bằng Pb, cả hai điện cực được đặt vào dung dịch H SO loãng. Loại acquy này có thể sạc lại nhiều lần. Đây\n2 4\ncũng là loại acquy được sử dụng phổ biến trên các dòng xe máy hiện nay với nhiều ưu điểm vượt trội.\nNhược điểm của acquy chì là",
        "options": {
          "A": "dễ sản xuất, giá thành thấp.",
          "B": "gây ô nhiễm môi trường.",
          "C": "có khả năng trữ một lượng điện lớn trong bình ắc quy.",
          "D": "hoạt động ổn định."
        },
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 82,
        "label": "Ví dụ 2",
        "question": "Pin nhiên liệu được nghiên cứu rộng rãi nhằm thay thế nguồn nhiên liệu hóa thạch ngày càng\ncạn kiệt. Trong pin nhiên liệu, dòng điện được tạo ra do phản ứng oxi hóa nhiên liệu (hydrogen, carbon\nmonooxide, methanol, ethanol, propane,…) bằng oxygen không khí. Pin nhiên liệu phổ biến hiện nay\nlà pin hydrogen. Nhược điểm của pin nhiên liệu là\n14\nHOÁ 12 – HK I\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978",
        "options": {
          "A": "nhiên liệu được bổ sung liên tục.",
          "B": "thời gian hoạt động của pin không bị hạn chế.",
          "C": "không tạo ra các sản phẩm gây ô nhiễm môi trường.",
          "D": "giá thành cao."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 83,
        "label": "Ví dụ 3",
        "question": "Pin mặt trời (pin quang điện) bao gồm nhiều tế bào quang điện làm biến đổi năng lượng ánh\nsáng thành năng lượng điện. Pin mặt trời mang đến rất nhiều lợi ích, nó được ứng dụng khá rộng rãi\ntrong đời sống hiện nay.\nPhát biểu nào sau đây không phù hợp với pin mặt trời?",
        "options": {
          "A": "Tạo ra được nguồn năng lượng xanh.",
          "B": "Thân thiện với môi trường.",
          "C": "Giá thành trang bị cao.",
          "D": "Sản xuất đơn giản."
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      },
      {
        "id": 84,
        "label": "Ví dụ 4",
        "question": "Nhận định nào sau đây về pin nhiên liệu là không đúng?",
        "options": {
          "A": "Na+/Na.",
          "B": "2H+/H .",
          "C": "Al<sup>3+</sup>/Al.",
          "D": "Cl /2Cl−.\n2 2\nCâu 10. (SBT – KNTT) Cặp oxi hoá − khử nào sau đây có giá trị thế điện cực chuẩn lớn hơn 0?\n15\nHOÁ 12 – HK I"
        },
        "explanation": "Ở anode (cực âm) xảy ra quá trình oxi hoá kim loại mạnh hơn; ở cathode (cực dương) xảy ra quá trình khử ion kim loại yếu hơn. E°pin = E°(cathode) − E°(anode)."
      }
    ],
    "questions": [
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 1,
        "prompt": "Mối liên hệ giữa dạng oxi hoá và dạng khử của kim loại M được biểu diễn ở dạng quá trình khử\nlà",
        "options": {
          "A": "M Mn+ + ne.",
          "B": "Mn+ + ne M.",
          "C": "Mn− M + ne.",
          "D": "M + ne Mn−."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 1,
        "qnum": 1
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 2,
        "prompt": "Ở điều kiện chuẩn, thiết lập được điện cực zinc (Zn) bằng cách nhúng thanh Zn vào dung dịch",
        "options": {
          "A": "HCl 1 M.",
          "B": "ZnSO 1 M.",
          "C": "H SO 1 M.",
          "D": "NaCl 1 M.\n4 2 4"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 2,
        "qnum": 2
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 3,
        "prompt": "(KNTT) Ở điều kiện chuẩn, thiết lập được điện cực silver (Ag) bằng cách nhúng thanh Ag vào\ndung dịch",
        "options": {
          "A": "NaNO 1 M.",
          "B": "AgNO 0,1 M.",
          "C": "AgNO 1 M.",
          "D": "HNO 1 M.\n3 3 3 3"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 3,
        "qnum": 3
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 4,
        "prompt": "(KHBD – KNTT) Điều kiện chuẩn của một điện cực kim loại là điều kiện ứng với nồng độ ion\nkim loại là 1 M và nhiệt độ thường được chọn là.",
        "options": {
          "A": "298 K (25 oC).",
          "B": "273 K (0 oC).",
          "C": "0 K (−273 oC).",
          "D": "373 K (100 oC)."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 4,
        "qnum": 4
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 5,
        "prompt": "(KHBD – KNTT) Đối với một điện cực kim loại, tại ranh giới giữa kim loại với dung dịch chất\nđiện li",
        "options": {
          "A": "tồn tại cân bằng giữa dạng oxi hoá và dạng khử.",
          "B": "xảy ra quá trình khử ion kim\nloại.",
          "C": "xảy ra quá trình oxi hoá nguyên tử kim loại.",
          "D": "xảy ra phản ứng oxi hoá –\nkhử."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 5,
        "qnum": 5
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 6,
        "prompt": "(KHBD – KNTT) Đối với điện cực hydrogen chuẩn, áp suất khí hydrogen được hấp phụ trên lá\nPt và nồng độ ion H+ trong dung dịch chất điện li lần lượt là",
        "options": {
          "A": "1 atm và 1 M.",
          "B": "1 mmHg và 0,1 M.",
          "C": "1 N/m2 và 0,1 M.",
          "D": "1 bar và 1 M."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 6,
        "qnum": 6
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 7,
        "prompt": "(KHBD – KNTT) Thế điện cực chuẩn là đại lượng đặc trưng cho điện thế của điện cực ở điều\nkiện chuẩn và thường được kí hiệu là",
        "options": {
          "A": "V.",
          "B": "<i>E</i>°.",
          "C": "∆Ho.",
          "D": "T."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 7,
        "qnum": 7
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 8,
        "prompt": "(KHBD – KNTT) Thế điện cực chuẩn của điện cực nào sau đây được quy ước bằng 0 và được\ngọi là điện cực so sánh?",
        "options": {
          "A": "Hydrogen.",
          "B": "Zinc.",
          "C": "Copper.",
          "D": "Silver."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 8,
        "qnum": 8
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 9,
        "prompt": "(SBT – KNTT) Giá trị thế điện cực chuẩn của cặp oxi hoá − khử nào được quy ước bằng 0 V?",
        "options": {
          "A": "Na+/Na.",
          "B": "2H+/H .",
          "C": "Al3+/Al.",
          "D": "Cl /2Cl−.\n2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 9,
        "qnum": 9
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 10,
        "prompt": "(SBT – KNTT) Cặp oxi hoá − khử nào sau đây có giá trị thế điện cực chuẩn lớn hơn 0?",
        "options": {
          "A": "K+/K.",
          "B": "Li+/Li.",
          "C": "Ba2+/Ba.",
          "D": "Cu2+/Cu."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 10,
        "qnum": 10
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 11,
        "prompt": "Trong pin điện hoá, quá trình oxi hoá",
        "options": {
          "A": "chỉ xảy ra ở cực dương.",
          "B": "chỉ xảy ra ở cực âm.",
          "C": "xảy ra ở cả hai cực.",
          "D": "không xảy ra ở cả hai cực."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 11,
        "qnum": 11
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 12,
        "prompt": "Phát biểu nào sau đây là đúng khi nói về pin Galvani?",
        "options": {
          "A": "Anode là điện cực dương.",
          "B": "Cathode là điện cực âm.",
          "C": "Ở điện cực âm xảy ra quá trình oxi hoá.",
          "D": "Dòng electron di chuyển từ cathode sang anode."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 12,
        "qnum": 12
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 13,
        "prompt": "Sức điện động chuẩn của pin Galvani được tính như thế nào?",
        "options": {
          "A": "Bằng hiệu của thế điện cực chuẩn tương ứng của điện cực dương và điện cực âm.",
          "B": "Bằng tổng của thế điện cực chuẩn tương ứng của điện cực dương và điện cực âm.",
          "C": "Bằng tích của thế điện cực chuẩn tương ứng của điện cực dương và điện cực âm.",
          "D": "Bằng thương của thế điện cực chuẩn tương ứng của điện cực dương và điện cực âm."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 13,
        "qnum": 13
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 14,
        "prompt": "(SBT – KNTT) Trong quá trình hoạt động của pin điện Ni − Cu, quá trình xảy ra ở anode là",
        "options": {
          "A": "Ni\n\n &rarr; Ni2+ + 2e.",
          "B": "Cu  &rarr; Cu2+ + 2e.",
          "C": "Cu2+ + 2e &rarr; Cu.",
          "D": "Ni2+ + 2e  &rarr; Ni."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 14,
        "qnum": 14
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 15,
        "prompt": "(SBT – KNTT) Trong quá trình hoạt động của pin điện Cu − Ag, điện cực Cu là",
        "options": {
          "A": "điện cực dương.",
          "B": "cathode.",
          "C": "điện cực bị giảm dần khối lượng.",
          "D": "nơi xảy ra quá trình khử."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 15,
        "qnum": 15
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 16,
        "prompt": "Khi pin Galvani Zn – Cu hoạt động thì nồng độ",
        "options": {
          "A": "Cu2+ giảm, Zn2+ tăng.",
          "B": "Cu2+ giảm, Zn2+ giảm.",
          "C": "Cu2+ tăng, Zn2+ tăng.",
          "D": "Cu2+ tăng, Zn2+ giảm."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 16,
        "qnum": 16
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 17,
        "prompt": "Cho một pin điện hoá được tạo bởi các cặp oxi hoá khử Fe2+/Fe, Ag+/Ag ở điều kiện chuẩn.\nQuá trình xảy ra ở cực âm khi pin hoạt động là",
        "options": {
          "A": "Fe  &rarr; Fe2+ + 2e.",
          "B": "Fe2+ + 2e  &rarr; Fe.",
          "C": "Ag + le  &rarr; Ag.",
          "D": "Ag  &rarr; Ag + le."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 17,
        "qnum": 17
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 18,
        "prompt": "(KHBD – KNTT) Thế điện cực chuẩn của điện cực copper (Cu) là\n<i>E</i>°\nC u 2+ /C u\n + 0 , 3 4 V\n, điều này\nnghĩa là khi so sánh với điện cực hydrogen chuẩn, điện cực Cu có thế điện cực",
        "options": {
          "A": "gấp đôi.",
          "B": "thấp hơn 0,340 V.",
          "C": "cao hơn 0,340 V.",
          "D": "bằng."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 18,
        "qnum": 18
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 19,
        "prompt": "(KHBD – KNTT) Thế điện cực chuẩn của điện cực kẽm là\n<i>E</i>°\nZ n 2+ /Z n\n − 0 , 7 6 2 V\n, điều này nghĩa\nlà khi so sánh với điện cực hydrogen chuẩn, điện cực kẽm có thế điện cực",
        "options": {
          "A": "cao hơn.",
          "B": "thấp hơn.",
          "C": "bằng.",
          "D": "gấp đôi."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 19,
        "qnum": 19
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 20,
        "prompt": "(SBT – KNTT) Cặp oxi hoá – khử nào sau đây có giá trị thế điện cực chuẩn nhỏ hơn 0?",
        "options": {
          "A": "Ag+/Ag.",
          "B": "Na+/Na.",
          "C": "Hg2+/Hg.",
          "D": "Cu2+/Cu."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 20,
        "qnum": 20
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 21,
        "prompt": "(SBT – KNTT) Cho dãy sắp xếp các kim loại theo chiều giảm dần tính khử: Na, Mg, Al, Fe.\nTrong số các cặp oxi hoá − khử sau, cặp nào có giá trị thế điện cực chuẩn nhỏ nhất?",
        "options": {
          "A": "Mg2+/Mg.",
          "B": "Fe2+/Fe.",
          "C": "Na+/Na.",
          "D": "Al3+/Al."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 21,
        "qnum": 21
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 22,
        "prompt": "(SBT – KNTT) Cho thứ tự sắp xếp các cặp oxi hoá − khử trong dãy điện hoá: Mg2+/Mg;\nH O/H , OH−; 2H+/H ; Ag+/Ag. Cặp oxi hoá − khử có giá trị thế điện cực chuẩn lớn nhất trong dãy là\n2 2 2",
        "options": {
          "A": "2H+/H .",
          "B": "Ag+/Ag.",
          "C": "H O/H , OH−.",
          "D": "Mg2+/Mg.\n2 2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 22,
        "qnum": 22
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 23,
        "prompt": "Trong quá trình pin điện hoá Zn – Ag hoạt động, ta nhận thấy",
        "options": {
          "A": "khối lượng của điện cực Zn tăng.",
          "B": "khối lượng của điện cực Ag giảm.",
          "C": "nồng độ của ion Zn2+ trong dung dịch tăng.",
          "D": "nồng độ của ion Ag+ trong\ndung dịch tăng."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q37_pin_nong_do.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 23,
        "qnum": 23
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 24,
        "prompt": "Trong pin điện hoá Zn – Cu, phản ứng hoá học nào xảy ra ở điện cực âm?",
        "options": {
          "A": "Cu &rarr; Cu2+ + 2e.",
          "B": "Cu2+ + 2e &rarr; Cu.",
          "C": "Zn2+ + 2e &rarr; Zn.",
          "D": "Zn &rarr; Zn2+ + 2e."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 24,
        "qnum": 24
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 25,
        "prompt": "Cho pin điện hoá Zn – Cu. Quá trình xảy ra ở cực dương của pin là",
        "options": {
          "A": "Zn2+ + 2e &rarr; Zn.",
          "B": "Cu2+ + 2e &rarr; Cu.",
          "C": "Zn &rarr; Zn2+ + 2e.",
          "D": "Cu\n\n &rarr; Cu2+ + 2e."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 25,
        "qnum": 25
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 26,
        "prompt": "Cho pin điện hoá Al – Pb. Quá trình xảy ra ở cực âm của pin là",
        "options": {
          "A": "Al3+ + 3e  &rarr; Al.",
          "B": "Pb2+ + 2e  &rarr; Pb",
          "C": "Al  &rarr; Al3+ + 3e.",
          "D": "Pb  &rarr; Pb2+ + 2e."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 26,
        "qnum": 26
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 27,
        "prompt": "Pin quả chanh được thiếp lập gồm một dây Cu và dây Zn ghim vào một\nquả chanh và nối với bóng điện như hình bên. Bóng điện sáng đồng nghĩa với sự\nxuất hiện dòng điện. Bán phản ứng nào sau đây xảy ra ở cực dương?",
        "options": {
          "A": "Cu2+(aq) + 2e &rarr; Cu(s).",
          "C": "2H+(aq) + 2e &rarr; H (g).",
          "B": "Zn(s) &rarr; Zn2+(aq) + 2e.",
          "D": "Cu(s) &rarr; Cu²+(aq) + 2e."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p1_q27_pin_chanh.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 27,
        "qnum": 27
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 28,
        "prompt": "Trong quá trình hoạt động của pin điện hoá Cu – Ag, nồng độ của các ion trong dung dịch biến\nđổi như thế nào?",
        "options": {
          "A": "Nồng độ của ion Ag+ tăng dần và nồng độ của ion Cu2+ tăng dần.",
          "B": "Nồng độ của ion Ag+ giảm dần và nồng độ của ion Cu2+ giảm dần.",
          "C": "Nồng độ của ion Ag+ giảm dần và nồng độ của ion Cu2+ tăng dần.",
          "D": "Nồng độ của ion Ag+ tăng dần và nồng độ của ion Cu2+ giảm dần.\n<i>E</i>° 2,46 V <i>E</i>° 2,00 V"
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q37_pin_nong_do.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 28,
        "qnum": 28
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 29,
        "prompt": "Cho sức điện động chuẩn của các pin điện hoá: Pin(T−X) ; Pin(T−Y) ;\nE oP\nin (Z − Y )\n 0 , 9 0 V\n(với X, Y, Z, T là 4 kim loại). Dãy sắp xếp các kim loại theo chiều tăng dần tính khử\nlà",
        "options": {
          "A": "X < Y < Z < T.",
          "B": "Y < T < Z < X.",
          "C": "T < Z < Y < X.",
          "D": "Z < X < Y < Y.\n<i>E</i>° 0,46 V"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 29,
        "qnum": 29
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 30,
        "prompt": "Cho sức điện động chuẩn của các pin điện hoá sau: Pin(Cu−X) ;\nE oP\nin (Y − C u )\n 2 , 7 1 V\n;\nE oP\nin (Z − C u )\n 0 , 7 8 V\n(với X, Y, Z là ba kim loại). Dãy sắp xếp các kim loại theo chiều tăng dần tính khử\nlà",
        "options": {
          "A": "X < Y < Z.",
          "B": "X < Z < Y.",
          "C": "Y < Z < X.",
          "D": "Z < X < Y."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 30,
        "qnum": 30
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 31,
        "prompt": "Cho các phát biểu sau:\n(a) Một ưu điểm của acquy là tái sử dụng được nhiều lần.\n(b) Phản ứng xảy ra trong acquy cũng giống như phản ứng xảy ra trong pin Galvani nhưng có thể\nđảo ngược.\n(c) Acquy không gây ô nhiễm môi trường.\n(d) Acquy là nguồn điện hoá học có thể hoạt động liên tục.\nSố phát biểu không đúng là",
        "options": {
          "A": "2.",
          "B": "3.",
          "C": "4.",
          "D": "1."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q33_acquy_chi.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 31,
        "qnum": 31
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 32,
        "prompt": "Cho các phát biểu sau:\n(a) Khác với acquy, chất phản ứng của pin nhiên liệu phải được cung cấp liên tục từ nguồn bên\nngoài.\n(b) Pin nhiên liệu tạo ra điện năng nhờ năng lượng mặt trời.\n(c) Pin nhiên liệu biến đổi trực tiếp năng lượng hoá học thành điện năng.\n(d) Một trong những hạn chế của pin nhiên liệu là sự lưu trữ nhiên liệu.\n(e) Khi sử dụng, pin nhiên liệu không gây ô nhiễm môi trường.\nSố phát biểu đúng là",
        "options": {
          "A": "2.",
          "B": "3.",
          "C": "4.",
          "D": "5."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q33_acquy_chi.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 32,
        "qnum": 32
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 1,
        "prompt": "(SBT – KNTT) Trong nước, thế điện cực chuẩn của kim loại M2+/M càng lớn thì dạng khử có\ntính khử..(1).. và dạng oxi hoá có tính oxi hoá..(2).. Cụm từ cần điền vào (1) và (2) lần lượt là",
        "options": {
          "A": "càng mạnh và càng yếu.",
          "C": "càng yếu và càng yếu.",
          "B": "càng mạnh và càng mạnh.",
          "D": "càng yếu và càng mạnh."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 33,
        "qnum": 33
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 2,
        "prompt": "(SBT – KNTT) Xét phản ứng hoá học giữa hai cặp oxi hoá – khử của kim loại:\nR + 2M+\n\n &rarr; R2+ + 2M\nBiết giá trị thế điện cực chuẩn các cặp oxi hoá – khử M⁺/M và R2+/R lần lượt là x (V) và y (V). Nhận\nxét nào sau đây đúng?",
        "options": {
          "A": "x < y.",
          "B": "x > y.",
          "C": "x = y.",
          "D": "2x = y."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 34,
        "qnum": 34
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 3,
        "prompt": "(Đề THPT QG - 2017) Kim loại nào sau đây có tính khử mạnh nhất?",
        "options": {
          "A": "Fe.",
          "B": "K.",
          "C": "Mg.",
          "D": "Al."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 35,
        "qnum": 35
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 4,
        "prompt": "(Đề MH - 2018) Kim loại nào sau đây có tính khử yếu nhất?",
        "options": {
          "A": "Ag.",
          "B": "Al.",
          "C": "Fe.",
          "D": "Cu."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 36,
        "qnum": 36
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 5,
        "prompt": "(Đề TNTHPT QG – 2021) Ion kim loại nào sau đây có tính oxi hóa yếu nhất?",
        "options": {
          "A": "Cu2+.",
          "B": "Na+.",
          "C": "Mg2+.",
          "D": "Ag+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 37,
        "qnum": 37
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 6,
        "prompt": "(Đề TSCĐ - 2012) Cho dãy các ion: Fe2+, Ni2+, Cu2+, Sn2+. Trong cùng điều kiện, ion có tính\noxi hóa mạnh nhất trong dãy là",
        "options": {
          "A": "Sn2+.",
          "B": "Cu2+.",
          "C": "Fe2+.",
          "D": "Ni2+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 38,
        "qnum": 38
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 7,
        "prompt": "(Đề THPT QG - 2018) Ở nhiệt độ thường, kim loại Fe phản ứng được với dung dịch",
        "options": {
          "A": "FeCl .",
          "B": "NaCl.",
          "C": "MgCl .",
          "D": "CuCl .\n2 2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 39,
        "qnum": 39
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 8,
        "prompt": "(Đề TSCĐ - 2011) Dãy gồm các ion đều oxi hóa được kim loại Fe là",
        "options": {
          "A": "Fe3+, Cu2+, Ag+.",
          "B": "Zn2+, Cu2+, Ag+.",
          "C": "Cr2+, Au3+, Fe3+.",
          "D": "Cr2+, Cu2+, Ag+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 40,
        "qnum": 40
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 9,
        "prompt": "Xét pin Galvani hoạt động với phương trình tương ứng như sau: Zn + HgO  &rarr; ZnO + Hg\nQuá trình nào sau đây xuất hiện ở anode?",
        "options": {
          "A": "HgO + 2e  &rarr; Hg + O<sub>2</sub>–.",
          "B": "Zn2+ + 2e  &rarr; Zn",
          "C": "Zn &rarr; Zn2+ + 2e",
          "D": "Hg + O<sub>2</sub>– &rarr; HgO + 2e"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 41,
        "qnum": 41
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 10,
        "prompt": "Pin điện hóa có kí hiệu đơn giản: kim loại (anode) – kim loại (cathode). Phản ứng chung của\nmột pin điện hóa là: X(s) + Y2+(aq)  &rarr; Y(s) + X2+(aq). Kí hiệu của pin điện hóa đó là",
        "options": {
          "A": "Y – X2+.",
          "B": "X – Y.",
          "C": "X – Y2+.",
          "D": "Y – X."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 42,
        "qnum": 42
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 11,
        "prompt": "Các chất phản ứng trong pin điện hoá Al – Cu là",
        "options": {
          "A": "Al3+.",
          "B": "Al3+ và Cu.",
          "C": "Cu2+ và Al.",
          "D": "Al và Cu."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 43,
        "qnum": 43
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 12,
        "prompt": "(Đề TSCĐ - 2009) Thứ tự một số cặp oxi hoá – khử trong dãy điện hoá như sau: Mg2+/Mg;\nFe2+/Fe; Cu2+/Cu; Fe3+/Fe2+; Ag+/Ag. Dãy chỉ gồm các chất, ion tác dụng được với ion Fe3+ trong dung\ndịch là:",
        "options": {
          "A": "Mg, Fe2+, Ag.",
          "B": "Mg, Cu, Cu2+.",
          "C": "Mg, Fe, Cu.",
          "D": "Fe, Cu, Ag+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 44,
        "qnum": 44
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 13,
        "prompt": "(Đề TSCĐ - 2010) Cho biết thứ tự từ trái sang phải của các cặp oxi hoá - khử trong dãy điện\nhoá (dãy thế điện cực chuẩn) như sau: Zn2+/Zn; Fe2+/Fe; Cu2+/Cu; Fe3+/Fe2+; Ag+/Ag. Các kim loại và\nion đều phản ứng được với ion Fe2+ trong dung dịch là",
        "options": {
          "A": "Zn, Ag+.",
          "B": "Ag, Cu2+.",
          "C": "Ag, Fe3+.",
          "D": "Zn, Cu2+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 45,
        "qnum": 45
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 14,
        "prompt": "(Đề MH – 2021) Cho từ từ đến dư kim loại X vào dung dịch FeCl 3 , sau khi phản ứng xảy ra\nhoàn toàn thu được dung dịch Y chứa hai muối. X là kim loại nào sau đây?",
        "options": {
          "A": "Mg.",
          "B": "Zn.",
          "C": "Cu.",
          "D": "Na."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 46,
        "qnum": 46
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 15,
        "prompt": "(SBT – KNTT) Cho thứ tự sắp xếp một số cặp oxi hoá – khử trong dãy điện hoá: Al3+/Al,\nFe2+/Fe, Sn2+/Sn, Cu2+/Cu. Kim loại nào sau đây có phản ứng với dung dịch muối tương ứng?",
        "options": {
          "A": "Fe và CuSO .",
          "B": "Fe và Al (SO ) .",
          "C": "Sn và FeSO .",
          "D": "Cu và SnSO .\n4 2 4 3 4 4"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 47,
        "qnum": 47
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 16,
        "prompt": "Cho biết:\nCặp oxi hoá – khử 2H+/H Cu2+/Cu Fe2+/Fe Ag+/Ag\n\nThế điện cực chuẩn, V 0,0 +0,340 –0,44 +0,799\nDãy sắp xếp các cation theo chiều tăng dần tính oxi hoá là",
        "options": {
          "A": "Fe2+; H+; Cu2+; Ag+.",
          "B": "Ag+; Cu2+; H+; Fe2+.",
          "C": "H+; Fe2+; Ag+; Cu2+.",
          "D": "H+; Cu2+; Fe2+; Ag+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 48,
        "qnum": 48
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 17,
        "prompt": "Cho biết:\nCặp oxi hoá – khử Zn2+/Zn K+/K Hg2+/Hg Mg2+/Mg\nThế điện cực chuẩn, V –0,762 –2,924 +0,853 –2,356\nDãy sắp xếp các kim loại theo chiều tăng dần tính khử là",
        "options": {
          "A": "K < Mg < Zn < Hg.",
          "B": "Mg < K < Hg < Zn",
          "C": "Hg < Zn < Mg < K.",
          "D": "Hg < Mg < Zn < K."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 49,
        "qnum": 49
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 18,
        "prompt": "(SBT – KNTT) Cho thế điện cực chuẩn của các cặp oxi hoá − khử: Fe2+/Fe, Na+/Na, Ag+/Ag,\nMg2+/Mg, Cu2+/Cu lần lượt là –0,44 V, –2,713 V, +0,799 V, –2,353 V, +0,340 V. Ở điều kiện chuẩn,\nkim loại Cu khử được ion kim loại nào sau đây?",
        "options": {
          "A": "Na+.",
          "B": "Mg2+.",
          "C": "Ag+.",
          "D": "Fe2+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 50,
        "qnum": 50
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 19,
        "prompt": "Dự đoán hiện tượng nào sau đây sẽ xảy ra khi dùng một chiếc thìa bằng copper (Cu) khuấy vào\ncốc chứa dung dịch aluminium nitrate?",
        "options": {
          "A": "Chiếc thìa bị phủ một lớp Al.",
          "B": "Một hỗn hợp Cu và Al được tạo thành.",
          "C": "Dung dịch trở nên xanh.",
          "D": "Không biến đổi hoá học nào xảy ra."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 51,
        "qnum": 51
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 20,
        "prompt": "(Đề TSĐH A - 2011) Cho các phản ứng sau:\nFe + 2Fe(NO )\n3 3\n\n &rarr; 3Fe(NO ) ; AgNO + Fe(NO )\n3 2 3 3 2\n &rarr; Fe(NO ) + Ag.\n3 3\nDãy sắp xếp theo thứ tự tăng dần tính oxi hoá của các ion kim loại là",
        "options": {
          "A": "Ag+, Fe2+, Fe3+.",
          "B": "Ag+, Fe3+, Fe2+.",
          "C": "Fe2+, Ag+, Fe3+.",
          "D": "Fe2+, Fe3+, Ag+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 52,
        "qnum": 52
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 21,
        "prompt": "Cho các thông tin sau:\nX(s) + YSO (aq)\n\n &rarr; không có phản ứng Z(s) + YSO (aq)\n\n &rarr; Y(s) + ZSO (aq)\n\nTrong đó, X, Y, Z là các kim loại. Dãy nào sau đây sắp xếp đúng các kim loại theo mức độ hoạt động\ncủa chúng?",
        "options": {
          "A": "Z > Y > X.",
          "B": "X > Y > Z.",
          "C": "Y > X > Z.",
          "D": "Y > Z > X."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 53,
        "qnum": 53
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 22,
        "prompt": "Một học sinh thực hiện ba thí nghiệm ở điều kiện chuẩn và quan sát được các hiện tượng sau:\n(1) Copper (Cu) kim loại không phản ứng với dung dịch Pb(NO ) 1 M.\n3 2\n(2) Lead (Pb) kim loại tan trong dung dịch AgNO 1 M và xuất hiện tinh thể Ag.\n\n(3) Silver (Ag) kim loại không phản ứng với dung dịch Cu(NO ) 1 M.\n3 2\nTrật tự nào sau đây thể hiện đúng mức độ khử của ba kim loại?",
        "options": {
          "A": "Cu > Pb > Ag.",
          "B": "Pb > Cu > Ag.",
          "C": "Cu > Ap > Pb.",
          "D": "Pb > Ag > Cu."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 54,
        "qnum": 54
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 21,
        "prompt": "Một pin điện hóa tạo bởi hai cặp oxi hóa – khử ở điều kiện chuẩn: Fe2+/Fe và Sn2+/Sn với thế\nđiện cực chuẩn tương ứng là -0,44 V và -0,137 V. Cho các phát biểu về pin điện hóa trên như sau:\n(a) Anode của pin là Fe.\n(b) Cathode của pin là Fe2+.\n(c) Quá trình xảy ra ở anode khi pin hoạt động là: Fe2+ + 2e &rarr; Fe.\n(d) Quá trình xảy ra ở cathode khi pin hoạt động là: Sn2+ + 2e &rarr; Sn.\n(đ) Sức điện động chuẩn của pin là 0,303 V.\nSố phát biểu đúng là",
        "options": {
          "A": "3.",
          "B": "2.",
          "C": "1.",
          "D": "4."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 55,
        "qnum": 55
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 22,
        "prompt": "Pin Galvani được thiết lập như hình vẽ. Biết rằng thể tích của các dung dịch đều là 0,50 L,\nnồng độ chất tan trong dung dịch là 1,00M và <i>E</i>°Cu2+/Cu = +0,34V. Có các phát biểu sau:\n(a) Khối lượng điện cực zinc (Zn) giảm đúng bằng khối lượng điện cực copper (Cu) tăng.\n(b) Nồng độ ion SO 2-(aq) trong dung dịch ZnSO tăng và trong dung dịch CuSO giảm dần.\n4 4 4\n(c) Thế điện cực chuẩn <i>E</i>°Zn2+/Zn = –0,762V.\n(d) Phản ứng chung xảy ra trong pin điện là:\nZn(s) + Cu2+(aq) &rarr; Zn2+(aq) + Cu(s).\nSố phát biểu đúng là :",
        "options": {
          "A": "1.",
          "B": "2.",
          "C": "4.",
          "D": "3.\n<i>E</i>° −0,257 V <i>E</i>° +0,340 V"
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 56,
        "qnum": 56
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 33,
        "prompt": "Khi nói về cầu muối trong pin Galvani, mỗi phát biểu sau đây là đúng hay sai?",
        "items": {
          "a": "Cầu muối có tác dụng trung hoà điện tích của dung dịch trong pin.",
          "b": "Cầu muối cho phép dòng điện chạy qua.",
          "c": "Dòng điện chạy qua cầu muối là dòng electron.",
          "d": "Muối trong cầu muối luôn cố định là KCl."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q30_pin_tong_quat.png",
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 57,
        "qnum": 1
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 34,
        "prompt": "Khi nói về pin Galvani, mỗi phát biểu sau đây là đúng hay sai?",
        "items": {
          "a": "Sức điện động chuẩn của pin Galvani có thể mang giá trị âm.",
          "b": "Khi pin Galvani hoạt động, không có phản ứng hoá học diễn ra.",
          "c": "Pin Galvani cung cấp nguồn điện hoá học.",
          "d": "Sức điện động chuẩn của pin Galvani chỉ có thể mang giá trị dương."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 58,
        "qnum": 2
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 35,
        "prompt": "(SBT – KNTT) Trong quá trình một pin Galvani đang hoạt động.",
        "items": {
          "a": "Năng lượng được chuyển đổi từ hoá năng thành điện năng.",
          "b": "Xảy ra phản ứng oxi hoá − khử tự diễn biến.",
          "c": "Quá trình oxi hoá và quá trình khử xảy ra riêng biệt ở hai điện cực.",
          "d": "Sức điện động của pin không thay đổi theo thời gian."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 59,
        "qnum": 3
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 36,
        "prompt": "Mỗi phát biểu sau đây là đúng hay sai khi nói về pin mặt trời?",
        "items": {
          "a": "Pin mặt trời biến đổi trực tiếp quang năng thành điện năng.",
          "b": "Pin mặt trời là nguồn năng lượng xanh.",
          "c": "Khi hoạt động, pin mặt trời không gây hiệu ứng nhà kính.",
          "d": "Khi hoạt động, pin mặt trời gây mưa acid và làm Trái Đất nóng lên."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 60,
        "qnum": 4
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 37,
        "prompt": "Những phát biểu nào sau đây về pin nhiên liệu là đúng?",
        "items": {
          "a": "Cho hiệu suất chuyển hoá điện năng cao.",
          "b": "Biến đổi trực tiếp hoá năng thành điện năng nhờ quá trình oxi hoá nhiên liệu.",
          "c": "Gây ô nhiễm môi trường khi hoạt động và giá thành cao.",
          "d": "Hoạt động liên tục không nghỉ nếu nhiên liệu được cung cấp liên tục."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 61,
        "qnum": 5
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 38,
        "prompt": "(SBT – KNTT) Trong một pin điện hóa xảy ra phản ứng sau: Cu + 2Fe3+\n\n &rarr; Cu2+ + 2Fe2+",
        "items": {
          "a": "Kim loại Cu bị oxi hoá bởi Fe3+.",
          "b": "Tính khử của Cu lớn hơn tính khử của Fe2+.",
          "c": "Catode của pin là điện cực Fe/Fe3+.",
          "d": "Cặp oxi hoá – khử Cu2+/Cu có thế điện cực chuẩn lớn hơn Fe3+/Fe2+."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 62,
        "qnum": 6
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 39,
        "prompt": "(SBT – KNTT) Xét quá trình hoạt động của một pin điện hoá Cu – Ag. Cho thế điện cực chuẩn\ncủa các cặp Cu2+/Cu và Ag+/Ag lần lượt là +0,340 V và +0,799 V.",
        "items": {
          "a": "Giá trị sức điện động chuẩn của pin điện hoá trên là 0,459 V.",
          "b": "Ở anode xảy ra quá trình oxi hoá Cu, ở cathode xảy ra quá trình khử Ag+.",
          "c": "Điện cực Cu tăng khối lượng, điện cực Ag giảm khối lượng.",
          "d": "Phản ứng hoá học xảy ra trong pin: Cu + 2Ag+ &rarr; Cu2+ + 2Ag."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 63,
        "qnum": 7
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 40,
        "prompt": "Một pin điện hoá có điện cực zinc (Zn) nhúng trong dung dịch ZnSO 4 và điện cực copper (Cu)\nnhúng trong dung dịch CuSO .",
        "items": {
          "a": "Cả hai điện cực Zn và Cu đều giảm.",
          "b": "Điện cực Zn tăng còn khối lượng điện cực Cu giảm.",
          "c": "Điện cực Zn giảm còn khối lượng điện cực Cu tăng.",
          "d": "Cả hai điện cực Zn và Cu đều tăng."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 64,
        "qnum": 8
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 41,
        "prompt": "(HTHH 12 – KNTT) Trong quá trình hoạt động pin Galvani Cu – Ag gồm hai điện cực kim\nloại những trong hai dung dịch muối của kim loại tương ứng.",
        "items": {
          "a": "Điện cực silver (Ag) là cathode.",
          "b": "Điện cực copper (Cu) giảm dần khối lượng.",
          "c": "Dòng electron ở mạch ngoài di chuyển từ anode sang cathode.",
          "d": "Điện cực Ag là nơi xảy ra quá trình oxi hoá."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 65,
        "qnum": 9
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 42,
        "prompt": "(HTHH 12 – KNTT) Xét quá trình hoạt động của pin điện hóa thiết lập từ hai điện cực tạo\nbởi các cặp oxi hoá – khử Pb2+/Pb và Zn2+/Zn. Cho biết:\n\n<i>E</i>°\nP b 2+ /P b\n − 0 , 1 2 6 V , <i>E</i>°\nZ n 2+ /Z n\n − 0 , 7 6 2 V",
        "items": {
          "a": "Cực âm là thanh Pb, cực dương là thanh Zn.",
          "b": "Quá trình oxi hoá xảy ra ở anode là: Zn  &rarr; Zn2+ + 2e.",
          "c": "Sức điện động chuẩn của pin là 0,636 V.",
          "d": "Phản ứng hoá học xảy ra trong pin: Zn + Pb2+  &rarr; Zn2+ + Pb."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 66,
        "qnum": 10
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 43,
        "prompt": "Pin Galvani được tạo nên từ hai cặp oxi hoá – khử Fe2+/Fe và Ag+/Ag Biết <i>E</i>° F e 2+ /F e  − 0 , 4 4 0 V và\n<i>E</i>° +0,799 V\nAg+/Ag .",
        "items": {
          "a": "Kim loại iron (Fe) đóng vai trò là cực dương (cathode) của pin vì Fe là kim loại mạnh hơn. Silver\n(Ag) đóng vai trò là cực âm (anode) của pin vì Ag là kim loại yếu hơn.",
          "b": "Kim loại Fe đóng vai trò là cực âm (anode) vì Fe là kim loại mạnh hơn. Ag đóng vai trò là cực\ndương (cathode) vì Ag là kim loại yếu hơn.",
          "c": "Sức điện động chuẩn của pin bằng 1,239 V.",
          "d": "Khi pin hoạt động, ở cực âm, Fe là chất khử mạnh hơn Ag nên sẽ nhường electron, chuyển thành\nFe tan vào trong dung dịch. Ở cực dương, ion Fe2+ là chất oxi hoá mạnh hơn Ag+ nên Fe2+ sẽ nhận\nelectron, chuyển thành Fe."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 67,
        "qnum": 11
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 44,
        "prompt": "Cho một pin Galvani Zn – Cu với cầu muối là NH 4 Cl.",
        "items": {
          "a": "Thanh Zn là cực âm (anode) và thanh Cu là cực dương (cathode).",
          "b": "Phản ứng xảy ra trong pin là: Zn(s) + Cu2+(aq)  &rarr; Zn2+(aq) + Cu(s).",
          "c": "Khi Zn(s) hoặc Cu2+(aq) hết thì phản ứng trong pin sẽ ngừng lại.",
          "d": "Sức điện động của pin không thay đổi cho đến khi phản ứng trong pin xảy ra hoàn toàn."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 68,
        "qnum": 12
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 23,
        "prompt": "Cho ba thanh kim loại X, Y và Z.\n(1) Nhúng X vào dung dịch muối của Y thấy bề mặt X đổi màu.\n(2) Nhúng Y vào dung dịch HCl thấy có bọt khí tạo thành trên bề mặt Y.\n(3) Nhúng X vào dung dịch muối của Z không thấy hiện tượng xảy ra.\n(4) Nhúng Z vào nước thu được sản phẩm gồm chất khí và dung dịch chứa chất tan.",
        "items": {
          "a": "X, Y, Z đều đứng trước hydrogen trong dãy điện hoá.",
          "b": "Z khử được ion của kim loại Y.",
          "c": "Dãy sắp xếp theo chiều giảm dần tính khử: Z > Y > X.",
          "d": "Z khử được ion H+ tạo thành H ."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 69,
        "qnum": 13
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 24,
        "prompt": "(KHBD – KNTT) Giữa hai cặp oxi hoá – khử ở điều kiện chuẩn:",
        "items": {
          "a": "Cặp có thế điện cực chuẩn nhỏ hơn thì dạng khử có tính khử mạnh hơn.",
          "b": "Cặp có thế điện cực chuẩn nhỏ hơn thì dạng oxi hoá có tính oxi hoá mạnh hơn.",
          "c": "Cặp có thế điện cực chuẩn lớn hơn thì dạng khử có tính khử yếu hơn.",
          "d": "Cặp có thế điện cực chuẩn lớn hơn thì dạng oxi hoá có tính oxi hoá yếu hơn."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 70,
        "qnum": 14
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 25,
        "prompt": "(KHBD – KNTT) Dựa vào giá trị thế điện cực chuẩn của hai cặp oxi hoá – khử có thể dự đoán\nđược vai trò của mỗi chất và chiều phản ứng xảy ra giữa chúng.",
        "items": {
          "a": "Dạng khử của cặp có giá trị thế điện cực chuẩn nhỏ hơn là chất khử.",
          "b": "Dạng oxi hoá của cặp có giá trị thế điện cực chuẩn lớn hơn là chất oxi hoá.",
          "c": "Dạng khử của cặp có giá trị thế điện cực chuẩn nhỏ hơn khử dạng oxi hoá của cặp có giá trị thế\nđiện cực chuẩn lớn hơn.",
          "d": "Dạng khử của cặp có giá trị thế điện cực chuẩn lớn hơn khử dạng oxi hoá của cặp có giá trị thế\nđiện cực chuẩn nhỏ hơn."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 71,
        "qnum": 15
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 26,
        "prompt": "(SBT – KNTT) Thế điện cực chuẩn của các cặp oxi hoá – khử của kim loại M+/M và R2+/R\nlần lượt là +0,799 V và +0,34 V.",
        "items": {
          "a": "M có tính khử mạnh hơn R.",
          "b": "M+ có tính oxi hoá yếu hơn R2+.",
          "c": "M khử được ion H+ thành H .",
          "d": "R khử được ion M+ thành M."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 72,
        "qnum": 16
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 27,
        "prompt": "(HTHH 12 – KNTT) Trong công nghiệp, copper(II) sulfate được sản xuất bằng cách ngâm\nđồng thô trong dung dịch H SO loãng và sục oxygen không khí ở nhiệt độ thường.\n2 4\nXét phản ứng xảy ra trong phương pháp sản xuất trên ở điều kiện chuẩn:\n2Cu + O + 2H SO\n2 2 4\n\n &rarr; 2CuSO + 2H O\n4 2\nCho các giá trị thế điện cực chuẩn của các cặp oxi hoá – khử: 2H+/H ; Cu2+/Cu và O , H+/H O lần lượt\n2 2 2\nlà 0 V; +0,340 V và +1,229 V.",
        "items": {
          "a": "Cu là chất khử, O là chất oxi hoá.",
          "b": "H SO là môi trường.\n2 4",
          "c": "O có tính oxi hoá mạnh hơn ion H+.",
          "d": "H SO là chất oxi hoá.\n2 4"
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 73,
        "qnum": 17
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 28,
        "prompt": "Cho biết:\n<i>E</i>°\nN a + /N a\n − 2 , 7 1 3 V\n;\n<i>E</i>°\nC u 2+ /C u\n + 0 , 3 4 0 V",
        "items": {
          "a": "Tính khử của kim loại Na mạnh hơn tính khử của kim loại Cu.",
          "b": "Tính oxi hoá của ion Cu2+ mạnh hơn tính oxi hoá của ion Na+.",
          "c": "Trong dung dịch, kim loại Na khử được ion Cu2+ thành kim loại Cu.",
          "d": "Trong dung dịch, kim loại Cu khử được ion Na+ thành kim loại Na.\n<i>E</i>° −2,925 V"
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 74,
        "qnum": 18
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 29,
        "prompt": "Cho biết: X+/X ;\n<i>E</i>°\nY + /Y\n + 1 , 6 3 0 V",
        "items": {
          "a": "X có tính khử mạnh; Y có tính khử yếu.",
          "b": "X và Y đều có tính khử mạnh.",
          "c": "X và Y đều có tính khử yếu.",
          "d": "X có tính khử yếu; Y có tính khử mạnh."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 75,
        "qnum": 19
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 30,
        "prompt": "Cho biết:\n<i>E</i>°\nA 3+ l /A l\n − 1 , 6 7 6 V\n;\n<i>E</i>°\nC u 2+ /C u\n + 0 , 3 4 0 V",
        "items": {
          "a": "Tính khử của aluminium (Al) lớn hơn tính khử của copper (Cu).",
          "b": "Tính oxi hoá của aluminium (Al) lớn hơn tính oxi hoá của copper (Cu).",
          "c": "Tính oxi hoá của cation Al3+ lớn hơn tính oxi hoá của cation Cu2+.",
          "d": "Tính khử của cation Al3+ lớn hơn tính khử của cation Cu2+."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 76,
        "qnum": 20
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 2,
        "prompt": "Cho các phản ứng sau:",
        "items": {},
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 77,
        "qnum": 21
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 6,
        "prompt": "Cho thứ tự sắp xếp các cặp oxi hoá – khử trong dãy điện hoá: Mg2+/Mg; H O/H , OH–; 2H+/H ;\n2 2 2\nAg+/Ag.\nCho các phản ứng sau:",
        "items": {},
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 78,
        "qnum": 22
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 9,
        "prompt": "(Đề TSĐH A - 2013) Cho các cặp oxi hóa – khử được sắp xếp theo thứ tự tăng dần tính oxi\nhóa của các ion kim loại: Al3+/Al; Fe2+/Fe; Sn2+/Sn; Cu2+/Cu. Tiến hành các thí nghiệm sau:",
        "items": {},
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 79,
        "qnum": 23
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 23,
        "prompt": "Cho biết: ; . Cho pin Galvani Ni – Cu với cầu muối chứa\nNi2+/Ni Cu2+/Cu\nKCl.",
        "items": {
          "a": "Thanh Cu là cực dương và thanh Ni là cực âm của pin điện.",
          "b": "Sức điện động của pin ở 298 K là 0,597 V và không đổi cho đến khi pin ngừng hoạt động.",
          "c": "Cầu muối KCl có tác dụng trung hoà điện tích của hai dung dịch muối.",
          "d": "Khối lượng điện cực Ni và Cu không thay đổi trong quá trình pin hoạt động."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 80,
        "qnum": 24
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 24,
        "prompt": "Cho pin điện hoá có cấu tạo như sau:",
        "items": {
          "a": "Sức điện động chuẩn của pin là 0,76 V.",
          "b": "Tại điện cực âm xảy ra quá trình oxi hoá Zn(s) thành ion Zn2+(aq).",
          "c": "Tại điện cực dương xảy ra quá trình khử ion H+(aq) thành khí H (g).",
          "d": "Phản ứng xảy ra trong pin là: H (g) + Zn2+(aq)\n\n\n &rarr; Zn(s) + 2H+(aq)."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 81,
        "qnum": 25
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 25,
        "prompt": "Một pin Galvani có cấu tạo như sau:\nTrong đó, màng bán thấm chỉ cho nước và các anion đi qua. Biết rằng thể tích của các dung dịch đều\nlà 0,50 L và nồng độ chất tan trong dung dịch là 1,00 M. Cho biết:\n<i>E</i>°\nZ n 2+ /Z n\n − 0 , 7 6 3 V\n,\n<i>E</i>°\nC u 2+ /C u\n + 0 , 3 4 0 V\n.",
        "items": {
          "a": "Khối lượng điện cực zinc (Zn) giảm đúng bằng khối lượng điện cực copper (Cu) tăng.",
          "b": "Nồng độ ion SO 2–(aq) trong dung dịch ZnSO tăng và trong dung dịch CuSO giảm dần.\n4 4 4",
          "c": "Sức điện động chuẩn của pin là 1,103 V.",
          "d": "Phản ứng chung xảy ra trong pin điện là: Zn(s) + Cu2+(aq)  &rarr; Zn2+(aq) + Cu(s)."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 82,
        "qnum": 26
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 26,
        "prompt": "Tiến hành thí nghiệm như hình vẽ dưới đây:\nMỗi phát biểu sau là đúng hay sai?",
        "items": {
          "a": "Tại thanh aluminium (Al) xảy ra quá trình oxi hoá Al thành cation Al3+ và tan vào nước.",
          "b": "Các electron chuyển từ thanh Al sang thanh copper (Cu) qua dây dẫn.",
          "c": "Tại thanh Al và thanh Cu đều có quá trình khử ion H+ thành khí H .",
          "d": "Nồng độ H SO trong dung dịch không thay đổi trong quá trình thí nghiệm.\n2 4"
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 83,
        "qnum": 27
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 27,
        "prompt": "Nhúng thanh aluminium (Al) và thanh copper (Cu) vào dung dịch H SO 1 M. Nối hai thanh\n2 4\nvới nhau bằng dây dẫn.",
        "items": {
          "a": "Tại thanh Al xảy ra quá trình oxi hoá Al thành Al3+.",
          "b": "Tại thanh Cu xảy ra quá trình khử ion Cu2+ thành Cu.",
          "c": "Tại thanh Cu và thanh Al đều sinh ra khí hydrogen.",
          "d": "Trên dây dẫn xuất hiện dòng electron chuyển từ thanh Al sang thanh Cu."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 84,
        "qnum": 28
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 31,
        "prompt": "Pin Galvani được coi là nguồn điện hoá học đầu tiên mà con người phát minh ra) Pin Galvani\nZn<sup>−</sup>Cu được biểu diễn ở hình bên.\na) Cực âm (anode) là kim loại Cu đươc nhúng vào dung dịch muối CuSO .\n\nb) Cực dương (cathode) là kim loại Zn được nhúng vào dung dịch muối ZnSO .\n\nc) Hai cực Zn và Cu phải được nối với nhau bằng một dây dẫn.\nd) Hai dung dịch muối được nối với nhau bằng một cầu muối.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 85,
        "qnum": 1
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 32,
        "prompt": "Khi nói về cầu muối trong pin Galvani, mỗi phát biểu sau đây là đúng hay sai?\na) Cầu muối có tác dụng trung hoà điện tích của dung dịch trong pin.\nb) Cầu muối cho phép dòng điện chạy qua.\nc) Dòng điện chạy qua cầu muối là dòng electron.\nd) Muối trong cầu muối luôn cố định là KCl.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q30_pin_tong_quat.png",
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 86,
        "qnum": 2
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 33,
        "prompt": "Cho biết:\n\n<i>E</i>°\nN a + /N a\n= -2,713 V; <i>E</i>° = +0,340 V. Xét tính đúng sai của các phát biểu sau.\nCu2+/Cu\na) Tính khử của kim loại Na mạnh hơn tính khử của kim loại Cu.\nb) Tính oxi hoá của ion Cu²+ mạnh hơn tính oxi hoá của ion Na+.\nc) Trong dung dịch, kim loại Na khử được ion Cu²+ thành kim loại Cu.\nd) Trong dung dịch, kim loại Cu khử được ion Na+ thành kim loại Na.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 87,
        "qnum": 3
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 34,
        "prompt": "Cho biết: <i>E</i>°\nN 2+ i /N i\n − 0 , 2 5 7 V ; <i>E</i>°\nC u 2+ /C u\n + 0 , 3 4 0 V . Một pin điện có cấu tạo như hình sau.\nBiết rằng cầu muối chứa KCl. Các dung dịch muối là CuSO và NiSO .\n4 4\na) Thanh Cu là cực dương và thanh Ni là cực âm của pin điện.\nb) Sức điện động của pin ở 298 K là 0,597 V và không đổi cho đến khi pin ngừng hoạt động.\nc) Cầu muối KCl có tác dụng trung hoà điện tích của hai dung dịch muối.\nd) Khối lượng điện cực Ni và Cu không thay đổi trong quá trình pin hoạt động.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 88,
        "qnum": 4
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 35,
        "prompt": "Dựa vào bảng sau, xét tính đúng sai của các phát biểu dưới đây.\na) Cu2+ có tính oxi hóa mạnh hơn Fe3+ và Cu có tính khử mạnh hơn Fe2+.\nb) Theo lí thuyết những kim loại có thế điện cực chuẩn âm đều khử được H+ thành H và phản ứng\n\nđược trong dung dịch HCl.\nc) Trong dãy hoạt động hóa học, những kim loại đứng trước có thế điện cực chuẩn lớn hơn thế điện\ncực chuẩn của những kim loại đứng sau.\nd) Kẽm có thể khử các ion Fe2+ và Ni2+ về kim loại Fe và Ni nhưng không thể khử ion Al3+ về kim\nloại Al.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 89,
        "qnum": 5
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 36,
        "prompt": "Một pin Galvani có cấu tạo như sau:\nTrong đó, màng bán thấm chỉ cho nước và các anion đi qua. Biết rằng thể tích của các dung dịch đều\nlà\n\n0 , 5 0 L và nồng độ chất tan trong dung dịch là 1 , 0 0 M . Cho biết:\n<i>E</i>°\nZ n 2+ /Z n\n − 0 , 7 6 3 V ; <i>E</i>°\nC u 2+ /C u\n + 0 , 3 4 0 V\na) Phản ứng xảy ra khi pin hoạt động là: Z n ( s ) + C u 2 + ( a q ) &rarr; Z n 2 + ( a q ) + C u ( s ) .\nb) Sức điện động chuẩn của pin là 1 , 1 0 3 V .\nc) Nồng độ ion S O 24 − ( a q ) trong dung dịch Z n S O\n\ntăng và trong dung dịch C u S O\n\ngiảm dần.\nd) Khối lượng điện cực Zinc giảm bằng khối lượng điện cực copper tăng.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q36_pin_mang_ban_tham.png",
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 90,
        "qnum": 6
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 37,
        "prompt": "Một nhóm học sinh làm thí nghiệm để nghiên cứu sự phụ thuộc của sức điện động vào nồng\nđộ của ion kim loại. Giả thuyết mà nhóm học sinh này đặt ra là: \"khi giảm nồng độ ion kim loại trong\ndung dịch thì sức điện động của pin cũng giảm\". Để kiểm chứng giả thuyết trên, nhóm học sinh tiến\nhành thí nghiệm như sau:\n• Bước 1: chuẩn bị 5 cốc chứa dung dịch CuSO 1M; 5 cốc chứa\n\ndung dịch ZnSO có nồng độ lần lượt là 1M; 0,5M; 0,1M; 0,05M;\n\n0,01M; Các thanh điện cực Zn và Cu có kích thước như nhau; cầu\nmuối; điện kế để đo sức điện động.\n• Bước 2: Tiến hành lắp các dụng cụ theo sơ đồ như hình vẽ bên.\n• Bước 3: Lần lượt thay các cốc chứa ZnSO có nồng độ khác nhau, tiến\n\nhành đo sức điện động của pin. Kết quả thí nghiệm được học sinh thu thập được theo bảng sau:\nNồng độ ZnSO (mol/L) 1 0,5 0,1 0,05 0,01\n\nSức điện động của pin (V) 1,102 1,109 1,130 1,138 1,159\na) Khi nồng độ ZnSO là 0,05M thì sức điện động chuẩn của pin là 1,138V.\n\nb) Trong thí nghiệm trên, Cu là anode và Zn là cathode.\nc) Từ kết quả thí nghiệm, tính được thế điện cực của Zn2+/Zn khi nồng độ Zn2+ bằng 0,1 M là -0,79V\nbiết <i>E</i>°Cu2+/Cu = +0,34V.\nd) Dựa vào kết quả thí nghiệm, giả thiết của học sinh đưa ra là không hợp lý.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q37_pin_nong_do.png",
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 91,
        "qnum": 7
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 1,
        "prompt": "(KHBD – KNTT) Cho biết:\nCặp oxi hoá – khử Cu2+/Cu Ag+/Ag Fe2+/Fe Ni2+/Ni\nThế điện cực chuẩn, V +0,340 +0,799 –0,44 –0,257\nTrong các kim loại Cu, Ag, Fe và Ni. Số kim loại khử được ion H+ trong dung dịch ở điều kiện chuẩn\nlà bao nhiêu?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 92,
        "qnum": 8
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 3,
        "prompt": "Có bốn dung dịch muối không màu (AgNO , Pb(NO ) , Zn(NO ) và Ni(NO ) ) được đựng\n3 3 2 3 2 3 2\ntrong bốn ống nghiệm riêng biệt. Cho thêm vào 4 ống nghiệm này một sợi dây đồng. Sau một thời\ngian, số dung dịch chuyển màu xanh là bao nhiêu? (Các phản ứng đều được thực hiện ở điều kiện\nchuẩn).",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 93,
        "qnum": 9
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 4,
        "prompt": "Cho giá trị thế điện cực chuẩn của một số cặp oxi hoá – khử:\n<i>E</i>°\nF e 2+ /F e\n − 0 , 4 4 V\n;\n<i>E</i>°\nZ n 2+ /Z n\n − 0 , 7 6 V\n; <i>E</i>° C u 2+ /C u  + 0 , 3 4 V ; <i>E</i>° A g + /A g  + 0 , 8 0 V . Cho các ion sau: Fe2+, Zn2+, Cu2+ và Ag+. Số ion có thể oxi hoá\nđược kim loại Fe là bao nhiêu?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 94,
        "qnum": 10
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 5,
        "prompt": "(SBT – KNTT) Cho các cặp oxi hoá – khử của kim loại và thế điện cực chuẩn tương ứng:\nCặp oxi hoá − khử Na+/Na Ca2+/Ca Ni2+/Ni Au3+/Au\nThế điện cực chuẩn (V) –2,713 –2,84 –0,257 +1,52\nTrong các kim loại trên, số kim loại tác dụng được với dung dịch HCl ở điều kiện chuẩn, giải phóng\nkhí H là bao nhiêu?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 95,
        "qnum": 11
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 7,
        "prompt": "(Đề TSCĐ - 2012) Cho dãy các kim loại: Cu, Ni, Zn, Mg, Fe, Ag. Số kim loại trong dãy phản\nứng được với dung dịch FeCl là bao nhiêu?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 96,
        "qnum": 12
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 8,
        "prompt": "(Đề THPT QG - 2017) Cho kim loại Fe lần lượt phản ứng với các dung dịch: FeCl , Cu(NO ) ,\n3 3 2\nAgNO , MgCl . Số trường hợp xảy ra phản ứng hóa học là bao nhiêu?\n3 2",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 97,
        "qnum": 13
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 10,
        "prompt": "Cho các kim loại sau: Na, Mg, Al, Fe, Cu và Ag. Ở điều kiện chuẩn, có bao nhiêu kim loại\ntrong dãy khử được ion H+ thành khí H ?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 98,
        "qnum": 14
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 11,
        "prompt": "Cho biết các giá trị thế điện cực chuẩn của các cặp oxi hóa – khử sau:\nCặp oxi hóa – Ba2+/B Na+/N Mg2+/ Zn2+/Z Fe2+/F Ni2+/\nLi+/Li\nkhử a a Mg n e Ni\n\n<i>E</i>°\nM n+ /M\n( V )\n– –\n–3,04 –2,906 –2,356 –0,763 –0,44\n2,713 0,257\nTrong các kim loại: Li, Ba, Na, Mg, Fe và Ni. Có bao nhiêu kim loại có tính khử mạnh hơn Zn?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 99,
        "qnum": 15
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 12,
        "prompt": "Cho biết giá trị thể điện cực chuẩn của các cặp oxi hoá - khử sau:\nCặp oxi hoá – khử Zn2+/Zn Fe2+/Fe Ni2+/Ni 2 H + / H\n\nCu2+/Cu\nE 0o\nx h /k h\n(V) − 0 , 7 6 3 − 0 , 4 4 0 − 0 , 2 5 7 0 0 , 3 4 0\nSố kim loại trong dãy ở điều kiện chuẩn là các kim loại Zn, Ni, Fe, Cu phản ứng được với dung dịch\nHCl ở điều kiện chuẩn là bao nhiêu?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 100,
        "qnum": 16
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 13,
        "prompt": "Cho biết thế điện cực chuẩn của cặp E\nZ n 2+ /Z n\n= -0,763V, E\nC u 2+ /C u\n= 0,340 V. Giá trị sức điện động\nchuẩn của pin Zn<sup>−</sup>Cu là bao nhiêu? (Làm tròn kết quả thu được đến chữ số phần trăm).\nĐáp án 1,10",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 101,
        "qnum": 17
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 14,
        "prompt": "Cho pin điện hóa Pb–Cu có sức điện động chuẩn <i>E</i>° = 0,47 V, pin Zn–Cu có sức điện\npin (Pb – Cu)\nđộng chuẩn <i>E</i>° = 1,10 V. Tính sức điện động chuẩn của pin Zn–Pb.\npin (Zn – Cu)\nĐáp án 0,63",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 102,
        "qnum": 18
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 15,
        "prompt": "Một pin điện hoá được thiết lập từ hai điện cực tạo bởi hai cặp oxi hoá/khử là M2+/M và\nAg+/Ag. Cho biết:\nCặp oxi hoá-khử Fe2+/Fe Ni2+/Ni Sn2+/Sn Cu2+/Cu Ag+/Ag\nThế điện cực chuẩn\n-0,44 -0,257 -0,137 +0,340 +0,799\n(V)\nNếu M là một trong số các kim loại:Fe, Ni, Sn, Cu thì sức điện động chuẩn lớn nhất của pin bằng bao\nnhiêu vôn? (Làm tròn kết quả đến hàng phần trăm).\nĐáp án 1,24",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 103,
        "qnum": 19
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 16,
        "prompt": "Pin X-Y có sức điện động chuẩn là 1,10 V với hai cặp oxi hoá - khử là X2+/X và Y2+/Y. Pin Y-\nZ có sức điện động chuẩn là 0,82 V với hai cặp oxi hoá - khử là Y2+/Y và Z2+/Z. Pin X-Z (với hai cặp\noxi hoá - khử là X2+/X và Z2+/Z) có sức điện động chuẩn là bao nhiêu volt (V)?\nĐáp án 1,92",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 104,
        "qnum": 20
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 17,
        "prompt": "Cho các pin điện hoá và sức điện động chuẩn tương ứng:\nPin điện hóa Ni- Sn Zn<sup>−</sup>Cu Sn -Cu\nSức điện động chuẩn (V) 0,12 1,101 0,597\nSức điện động chuẩn của pin Ni<sup>−</sup>Zn bằng bao nhiêu? (Làm tròn kết quả đến hàng phần trăm.)\nĐáp án 0,38",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 105,
        "qnum": 21
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 18,
        "prompt": "(SBT – CTST) Cho pin điện hoá Mn – Cd có\n\nE oP\nin (M n − C d )\n 0 , 7 9 V\nvà\n<i>E</i>°\nC d 2+ /C d\n − 0 , 4 V\n. Thế điện\ncực chuẩn của cặp oxi hoá khử Mn2+/ Mn có giá trị là (-1,19)",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 106,
        "qnum": 22
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 19,
        "prompt": "(SBT – CTST) Cho\nE oP\nin (M g − A g )\n 3 , 1 7 V\nvà\n<i>E</i>°\nM g 2+ /M g\n − 2 , 3 7 V\n. Tính thế điện cực chuẩn của cặp\noxi hoá – khử Ag+/Ag (\n<i>E</i>°\nA g + /A g ).\nE oP\nin (M g − A g )\n <i>E</i>°\nA g + /A g\n− <i>E</i>°\nM g 2+ /M g\n &rarr; <i>E</i>°\nA g + /A g\n <i>E</i>°\nM g 2+ /M g\n+ E oP\nin (M g − A g )\n + 0 , 8 V",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 107,
        "qnum": 23
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 20,
        "prompt": "Cho suất điện động chuẩn của các pin điện hoá: Zn – Cu là 1,1 V; Cu – Ag là 0,46 V. Biết thế\nđiện cực chuẩn\n<i>E</i>°\nA g + /A g\n + 0 , 8 V\n. Thế điện cực chuẩn\n<i>E</i>°\nZ n 2+ /Z n và\n<i>E</i>°\nC u 2+ /C u có giá trị lần lượt là\nE oP\nin (C u − A g )\n <i>E</i>°\nA g + /A g\n− <i>E</i>°\nC u 2+ /C u\n &rarr; <i>E</i>°\nC u 2+ /C u\n <i>E</i>°\nA g + /A g\n− E oP\nin (C u − A g )\n + 0 , 3 4 V\nE oP\nin (Z n − C u )\n <i>E</i>°\nC u 2+ /C u\n− <i>E</i>°\nZ n 2+ /Z n\n &rarr; <i>E</i>°\nZ n 2+ /Z n\n <i>E</i>°\nC u 2+ /C u\n− E oP\nin (Z n − C u )\n − 0 , 7 6 V",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 108,
        "qnum": 24
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 28,
        "prompt": "Bộ phận quan trọng nhất của máy tạo nhịp tim là một hệ pin điện hóa lithium – iodine (gồm\nhai cặp oxi hóa khử Li+/Li và I /2I-). Hai điện cực được đặt vào tim, phát sinh dòng điện nhỏ kích\n\nthích tim đập ổn định. Cho biết: <i>E</i>°Li+/Li = -3,04V; <i>E</i>°I /2I- = +0,54V; Nguyên tử khối của Li = 6,9;\n\nđiện tích của 1 mol electron là 96500 C/mol; q = I.t, trong đó q là điện tích (C), I là cường độ dòng\nđiện (A), t là thời gian (s), 1 năm = 365 ngày.\na) Máy tạo nhịp tim có thể được đặt tạm thời hay vĩnh viễn trong cơ thể tùy theo tình trạng sức khỏe\nvà các bệnh lý kèm theo của bệnh nhân.\nb) Khi pin hoạt động Lithium đóng vai trò là anode, tại anode xảy ra quá trình khử.\nc) Sức điện động chuẩn của pin <i>E</i>°pin = 3,58V.\nd) Nếu pin tạo ra một dòng điện ổn định bằng 2,5.10-5 (A) thì một pin được chế tạo bởi 0,5 gam lithium\ncó thể hoạt động tối đa trong thời gian 8 năm.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 109,
        "qnum": 25
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 29,
        "prompt": "Pin kẽm-mangan (Zn<sup>−</sup>MnO ) là loại pin phổ biến trong các thiết bị điện tử do giá thành thấp\n\nvà an toàn. Tuy nhiên, loại pin này thường có tuổi thọ ngắn do phản ứng phụ làm giảm hiệu suất hoạt\nđộng. Một nhóm học sinh nghiên cứu ảnh hưởng của nồng độ KOH đến hiệu suất và tuổi thọ của pin\nZn<sup>−</sup>MnO . Thí nghiệm được tiến hành như sau:\n\n• Bước 1: Pha các dung dịch KOH với nồng độ 2M, 6M, 10M.\n• Bước 2: Lắp ráp pin Zn<sup>−</sup>MnO\n\n- Điện cực cực âm (anode): Dùng tấm kẽm (Zn).\n- Điện cực cực dương (cathode): Dùng MnO trộn với than hoạt tính và chất kết dính để tạo thành điện\n\ncực.\n- Nhúng điện cực vào dung dịch KOH tương ứng.\n• Bước 3:\n- Đo hiệu suất ban đầu, ghi nhận các giá trị vào bảng số liệu.\n-Sử dụng máy đo dung lượng pin để tiến hành sạc-xả 50 chu kỳ.Ghi lại dung lượng sau mỗi 10 chu\nkỳ.\n- So sánh dung lượng ban đầu và dung lượng sau 50 chu kỳ.\n- Xác định hiệu suất Coulombic (%) của từng mẫu.\n- Kiểm tra sự suy giảm hiệu suất do ăn mòn kẽm hoặc hòa tan MnO .\n\nNồng độ Dung lượng ban đầu Dung lượng sau 50 chu kỳ Hiệu suất Coulombic\nKOH (M) (mAh/g) (mAh/g) (%)\n2M 180 120 85%\n6M 210 170 92%\n10M 190 100 80%\na) Giả thuyết phù hợp với mục đích và quá trình tiến hành thí nghiệm trên là “Nếu sử dụng chất điện\nly kiềm (KOH) có nồng độ tối ưu, thì hiệu suất và tuổi thọ của pin Zn<sup>−</sup>MnO sẽ được cải thiện”.\n\nb) Pin với KOH 6M có hiệu suất cao nhất, dung lượng duy trì tốt sau 50 chu kỳ.\n\nc) Cực âm xảy ra quá trình khử kẽm và cực dương xảy ra quá trình oxi hóa MnO .\n₂\nd) Phản ứng phụ (ăn mòn kẽm khi nồng độ KOH quá cao):\nZn + 2H O + 2OH− &rarr; [Zn(OH) ]2− + H\n2 4 2",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q37_pin_nong_do.png",
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 110,
        "qnum": 26
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 30,
        "prompt": "Cho các cặp oxi hoá – khử và giá trị thế điện cực chuẩn tương ứng:\nCặp oxi hóa - khử Cu2+/Cu Fe3+/Fe2+ Ag+/Ag\nThế điện cực chuẩn (V) +0,34 +0,771 +0,799\nCho các phát biểu sau: Ở điều kiện chuẩn:\n Ion Cu2+ có tính oxi hoá mạnh hơn ion Fe3+.\n Dãy sắp xếp theo chiều tăng dần tính khử: Ag, Cu, Fe2+.\n lon Fe2+ khử được ion Ag+ thành Ag kim loại.\n lon Fe3+ và ion Ag+ đều oxi hoá được Cu thành ion Cu2+.\nViết số thứ tự của các phát biểu đúng theo thứ tự tăng dần từ trái sang phải (ví dụ: 12 hoặc 123 hoặc\n23.).",
        "answer": "1",
        "acceptedAnswers": [
          "1",
          "1"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>1</b>.",
        "id": 111,
        "qnum": 27
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 31,
        "prompt": "Cho một pin Galvani với điện cực Zn và Cu có sức điện động chuẩn là 1,34 V. Sử dụng pin\nnày để thắp sáng một bóng đèn nhỏ với cường độ dòng điện chạy qua là I = 0,02 A. Nếu điện cực kẽm\nhao mòn 0,1 mol do pin phóng điện thì thời gian tối đa mà pin thắp sáng được bóng đèn là bao nhiêu\ngiờ? Cho biết các công thức:\nQ = n.F = I.t, trong đó: Q là điện lượng (C), n là số mol electron đi qua dây dẫn, I là cường độ dòng\nđiện (A), t là thời gian (giây), F là hằng số Faraday (96 500 C mol-1).",
        "answer": "1.10",
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q34_pin_cu_ni.png",
        "explanation": "Tính toán dựa trên định luật Faraday: m = (A*I*t)/(n*F) hoặc E°pin = E°c - E°a.",
        "id": 112,
        "qnum": 28
      }
    ]
  },
  "chem_ch5_cd2": {
    "code": "chem_ch5_cd2",
    "title": "Chủ đề 2: Quá trình điện phân & Ứng dụng",
    "shortTitle": "CĐ2: Điện phân & Ứng dụng",
    "badge": "CHỦ ĐỀ 2",
    "category": "ch5",
    "group": "ch5",
    "subtitle": "Chủ đề 2 • Gồm Lý thuyết & 47 Ví dụ mẫu, 101 câu Trắc nghiệm",
    "theoryHtml": "<div class=\"oxyz-theory-container\">\n  <div class=\"oxyz-theory-banner\">\n    <span class=\"oxyz-theory-badge\">⚡ CHỦ ĐỀ 2 • HÓA HỌC 12</span>\n    <h4>Chủ đề 2: Quá trình điện phân & Ứng dụng</h4>\n    <p style=\"margin: 0.35rem 0 0; font-size: 0.92rem; color: var(--text-muted);\">\n      Khái niệm điện phân • Thứ tự khử và oxi hoá tại điện cực &bull; Điện phân nóng chảy (Downs, Hall-Héroult) &bull; Điện phân dung dịch (NaCl màng ngăn, CuSO₄) &bull; Ứng dụng: Tinh chế đồng, Mạ điện (Ag, Cu, Ni, Au) & Luyện nhôm Al\n    </p>\n  </div>\n  <div class=\"oxyz-theory-body\">\n    <div class=\"oxyz-theory-sec-header\">I. KHÁI NIỆM ĐIỆN PHÂN VÀ NGUYÊN TẮC CÁC ĐIỆN CỰC</div>\n    <div class=\"oxyz-theory-line\">\n      <b>Điện phân</b> là quá trình oxi hoá – khử xảy ra trên bề mặt các điện cực khi cho dòng điện một chiều đi qua chất điện li nóng chảy hoặc dung dịch chất điện li. Trong quá trình điện phân, <b>điện năng chuyển thành hoá năng</b>.\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • <b>Anode (nối với cực dương + của nguồn):</b> Thu hút anion; xảy ra quá trình <b>oxi hoá</b>.\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • <b>Cathode (nối với cực âm − của nguồn):</b> Thu hút cation; xảy ra quá trình <b>khử</b>.\n    </div>\n\n    <div class=\"oxyz-theory-sec-header\">II. THỨ TỰ PHÓNG ĐIỆN TẠI CÁC ĐIỆN CỰC TRONG DUNG DỊCH</div>\n    <div class=\"oxyz-theory-line\">\n      <b>1. Tại Cathode (−):</b>\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • Cation có tính oxi hoá mạnh hơn bị khử trước: Ag<sup>+</sup> &gt; Fe<sup>3+</sup> &gt; Cu<sup>2+</sup> &gt; H<sup>+</sup>(axit) &gt; Fe<sup>2+</sup> &gt; Zn<sup>2+</sup>.\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • Các cation kim loại mạnh từ Al<sup>3+</sup> trở về trước (Al<sup>3+</sup>, Mg<sup>2+</sup>, Ca<sup>2+</sup>, Na<sup>+</sup>, K<sup>+</sup>) <b>không bị khử</b> trong dung dịch; thay vào đó là H<sub>2</sub>O bị khử: <b>2H<sub>2</sub>O + 2e &rarr; H<sub>2</sub> &uarr; + 2OH<sup>−</sup></b>.\n    </div>\n    <div class=\"oxyz-theory-line\">\n      <b>2. Tại Anode (+) trơ (Graphite/Pt):</b>\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • Anion có tính khử mạnh hơn bị oxi hoá trước: S<sup>2−</sup> &gt; I<sup>−</sup> &gt; Br<sup>−</sup> &gt; Cl<sup>−</sup>.\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • Các anion gốc axit chứa oxi (SO<sub>4</sub><sup>2−</sup>, NO<sub>3</sub><sup>−</sup>, CO<sub>3</sub><sup>2−</sup>, PO<sub>4</sub><sup>3−</sup>) và F<sup>−</sup> <b>không bị oxi hoá</b>; thay vào đó là H<sub>2</sub>O bị oxi hoá: <b>2H<sub>2</sub>O &rarr; O<sub>2</sub> &uarr; + 4H<sup>+</sup> + 4e</b>.\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_dien_phan_cuso4_u_tube.png', 'Thí nghiệm điện phân dung dịch CuSO4 trong ống chữ U')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_dien_phan_cuso4_u_tube.png\" alt=\"Điện phân CuSO4\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Minh họa: Điện phân dung dịch CuSO₄ với điện cực than chì (Catot bám Cu đỏ, Anot thoát khí O₂)</div>\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png', 'Điện phân dung dịch NaCl có màng ngăn xốp')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png\" alt=\"Điện phân NaCl màng ngăn\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Sơ đồ bình điện phân dung dịch NaCl có màng ngăn xốp sản xuất Cl₂, H₂ và dung dịch NaOH</div>\n    </div>\n\n    <div class=\"oxyz-theory-sec-header\">III. ĐIỆN PHÂN NÓNG CHẢY VÀ CÁC QUY TRÌNH CÔNG NGHIỆP</div>\n    <div class=\"oxyz-theory-line\">\n      <b>1. Điều chế kim loại hoạt động mạnh (Na, K, Ca, Mg):</b> Điện phân muối chloride nóng chảy (như bình Downs điều chế Na từ hỗn hợp nóng chảy NaCl và CaCl<sub>2</sub>).\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_binh_downs_na.png', 'Cấu tạo bình Downs điện phân NaCl nóng chảy')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_binh_downs_na.png\" alt=\"Bình Downs\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Cấu tạo bình Downs điều chế kim loại Na và khí Cl₂ từ muối ăn nóng chảy</div>\n    </div>\n    <div class=\"oxyz-theory-line\">\n      <b>2. Sản xuất nhôm (Al) theo quy trình Hall – Héroult:</b> Điện phân Al<sub>2</sub>O<sub>3</sub> nóng chảy trong hỗn hợp với criolit (Na<sub>3</sub>AlF<sub>6</sub>) ở khoảng 950 °C với điện cực than chì (anode than chì bị ăn mòn dần bởi oxi tạo CO và CO<sub>2</sub>).\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_thung_dien_phan_al2o3.png', 'Bình điện phân công nghiệp Al2O3 - Criolit')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_thung_dien_phan_al2o3.png\" alt=\"Thùng điện phân Al2O3\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Thùng điện phân công nghiệp sản xuất nhôm từ bauxite hòa tan trong criolit nóng chảy</div>\n    </div>\n\n    <div class=\"oxyz-theory-sec-header\">IV. ĐIỆN PHÂN ANODE TAN VÀ KỸ THUẬT MẠ ĐIỆN</div>\n    <div class=\"oxyz-theory-bullet\">\n      • <b>Tinh chế đồng (Cu) thô:</b> Anode là thanh Cu thô (chứa tạp chất), Cathode là lá Cu tinh khiết, dung dịch điện li là CuSO<sub>4</sub>. Anode tan dần và Cu tinh khiết bám hoàn toàn vào cathode.\n    </div>\n    <div class=\"oxyz-theory-bullet\">\n      • <b>Mạ điện (Electroplating):</b> Vật cần mạ (chìa khóa, đồ trang sức) được nối vào <b>Cathode (−)</b>; kim loại dùng để mạ (Ag, Ni, Au, Cu) được gắn vào <b>Anode (+)</b>; dung dịch điện li chứa ion của kim loại mạ.\n    </div>\n    <div class=\"oxyz-inline-figure\" onclick=\"window.ChemQuizApp.zoomImage('assets/images/quiz/chem_ch5/chem_ma_dong_chia_khoa.png', 'Mạ đồng lên chìa khóa kim loại')\">\n      <img src=\"assets/images/quiz/chem_ch5/chem_ma_dong_chia_khoa.png\" alt=\"Mạ đồng\" loading=\"lazy\" />\n      <div class=\"oxyz-inline-fig-cap\">🔍 Kỹ thuật mạ đồng (Cu): Chìa khóa nối cực âm (Catot), thanh đồng nối cực dương (Anot)</div>\n    </div>\n  </div>\n</div>",
    "essayQuestions": [
      {
        "id": 1,
        "label": "Ví dụ 1",
        "question": "Điện phân sodium chloride (NaCl) nóng chảy điều chế Na.\n- Sự điện li: NaCl noùngchaûy&rarr;Na++Cl−\n Ở cực dương (anode): sự oxi hóa ion Cl- thành Cl : 31\nHOÁ 12 – HK I\nC l − &rarr;\n1 C l + e\n Ở cực âm (cathode): sự khử ion Na+ thành Na: Na++1e&rarr;Na\n Phương trình điện phân: N a C l ñ p n c&rarr; N a +\n1 C l ",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 2,
        "label": "Ví dụ 2",
        "question": "Viết phương trình hóa học của quá trình điện phân nóng chảy các chất: MgCl , Al O .\n2 2 3\nb) Điện phân dung dịch:\nCathode (-) chứa ion dương (cation) Anode (+) chứa ion âm (anion)\n- Chất có tính oxi hoá mạnh hơn (dễ nhận\nelectron hơn) được ưu tiên điện phân trước.\nThứ tự khử ở cathode (Chỉ có ion kim loại\nsau Al3+ mới bị khử): Au3+ > Ag+ > Cu2+ >\nH+ > H O. - Tổng quát: M<sup>n+</sup> + ne &rarr; M\n- Các ion Al3+ và trước nó không bị điện\nphân mà nước bị điện phân\n2H O + 2e &rarr;\nChất có tính khử mạnh hơn được ưutiên\nđiện phân trước. Thứ tự oxi hóa ở anode:\nH + 2OH− S 2 − > I − > B r − > C l − > O H − > H O - Các anion không bị điện phân: N O −3 , SO2−\n4\n,PO3−,CO2−,\n4 3\nF − , C l O −4 mà nước bị điện phân\n2H O &rarr; O + 4H+ + 4e\n2 2",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 3,
        "label": "Ví dụ 1",
        "question": "Điện phân dung dịch CuCl với điện cực trơ (graphite)",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 4,
        "label": "Ví dụ 2",
        "question": "Điện phân dung dịch CuSO với điện cực trơ (graphite)\n4\nChuẩn bị:\nHoá chất: dung dịch CuSO 0,5 M.\n4\nDụng cụ: nguồn điện một chiều (3 - 6 vôn), ống thuỷ tinh hình chữ U, hai điện cực than chì, dây dẫn,\nkẹp kim loại.\nTiến hành:\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\n- Lắp thiết bị thí nghiệm điện phân dung dịch CuSO như Hình 16.2.\n4\n- Rót dung dịch CuSO 0,5 M vào ống thuỷ tinh hình chữ U rồi nhúng hai điện cực than chì vào dung\n4\ndịch.\n- Nối hai điện cực than chì với hai cực của nguồn điện và tiến hành điện phân trong khoảng 5 phút.\nHình 16.2. Sơ đồ thí nghiệm điện phân dung dịch CuSO với điện cực trơ\n4\nQuan sát hiện tượng xảy ra ở mỗi điện cực và giải thích.Viết phương trình xảy ra tại các cực và phương\nđiện phân dung dịch.\nHướng dẫn giải\nHiện tượng: điện cực than chì ở cathode có kim loại đồng(màu đỏ) sinh ra bám vào.\nCuSO ñieänli&rarr;Cu2+ + SO2−\n\n4 4\n Ở cực dương (anode) sự oxi hóa H O thành O : H O\n2 2 2\n32\nHOÁ 12 – HK I\n &rarr;\n1\nO + 2H+ + 2e 2\n Ở cực âm (cathode) sự khử ion Cu2+ thành Cu: C u 2 + + 2 e &rarr; C u\nPhương trình điện phân: C u S O\n4\n+ H O ñ p d d&rarr; C u +\n1 O + H S O\n4",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 5,
        "label": "Ví dụ 3",
        "question": "Viết quá trình xảy ra ở mỗi điện cực và phương trình hóa học của phản ứng điện phân khi\nđiện phân dung dịch: AgNO với điện cực graphite.\n3",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 6,
        "label": "Ví dụ 4",
        "question": "[KNTT - SGK] Điện phân dung dịch NaCl bão hòa có màng ngăn với điện cực trơ\n(graphite)\na) Viết quá trình oxi hóa, quá trình khử xảy ra ở mỗi điện cực, biết sản phẩm của quá trình điện\nphân có khí Cl và H .\n2 2\nb) Viết phương trình hóa học của phản ứng điện phân.\nc) Trong quá trình điện phân, nếu không có màng ngăn, sản phẩm tạo thành ở hai điện cực khuếch\ntán vào nhau sẽ xảy ra phản ứng hóa học nào?\nd) Tìm hiểu ứng dụng của nước Javel. Đề xuất thí nghiệm đơn giản để chứng minh rằng dung dịch\nnước Javel có tính tẩy màu.\nLời giải:\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\na) Quá trình oxi hóa khử xảy ra ở mỗi điện cực:\nCathode (-) Anode (+)\n2H O + 2e → 2OH- + H 2Cl- → Cl + 2e\n2 2 2\nb) Phương trình hóa học của phản ứng điện phân 2NaCl + 2H O ñpdd&rarr; H + Cl + 2NaOH\n2 2 2\nc) Trong quá trình điện phân, sản phẩm tạo thành ở hai điện cực khuếch tán vào nhau sẽ xảy ra phản\nứng hóa học tạo thành nước Javel: Cl + 2NaOH → NaCl + NaClO + H O\n2 2\nd) Thí nghiệm chứng minh tính tẩy màu của nước Javel: Nhúng mẩu giấy màu vào nước Javel thấy\nmẩu giấy màu bị mất màu => Nước Javel có tính tẩy màu.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 7,
        "label": "Ví dụ 5",
        "question": "Trong quá trình điện phân, những ion âm (anion) di chuyển về",
        "options": {
          "A": "anode, ở đây chúng bị khử.",
          "B": "anode, ở đây chúng bị oxi hoá.",
          "C": "cathode, ở đây chúng bị khử.",
          "D": "cathode, ở đây chúng bị oxi hoá."
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 8,
        "label": "Ví dụ 6",
        "question": "Phát biểu nào sau đây về thứ tự điện phân trong dung dịch của các ion kim loại ở điện cực\nlà đúng?",
        "options": {
          "A": "Ion kim loại ứng với thế điện cực chuẩn dương hơn sẽ được điện phân trước ở cực âm.",
          "B": "Ion kim loại ứng với thế điện cực chuẩn âm hơn sẽ được điện phân trước ở cực âm.",
          "C": "Ion kim loại ứng với thế điện cực chuẩn dương hơn sẽ được điện phân trước ở cực dương.",
          "D": "Ion kim loại ứng với thế điện cực chuẩn âm hơn sẽ được điện phân trước ở cực dương."
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 9,
        "label": "Ví dụ 7",
        "question": "Khi điện phân dung dịch nào sau đây, tại anode xảy ra quá trình oxi hoá nước?",
        "options": {
          "A": "Dung dịch ZnCl .",
          "B": "Dung dịch CuCl .",
          "C": "Dung dịch AgNO .",
          "D": "Dung dịch MgCl .\n2 2 3 2"
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 10,
        "label": "Ví dụ 8",
        "question": "Điện phân CaCl nóng chảy, ở cathode xảy ra quá trình nào?",
        "options": {
          "A": "Oxi hoá ion Ca2+.",
          "B": "Khử ion Ca2+.",
          "C": "Oxi hoá ion Cl–.",
          "D": "Khử ion Cl–."
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 11,
        "label": "Ví dụ 9",
        "question": "Trong quá trình điện phân dung dịch NaCl (điện cực trơ), ở cathode xảy ra",
        "options": {
          "A": "sự oxi hoá cation Na+.",
          "C": "sự khử phân tử H O.",
          "B": "sự oxi hoá phân tử H O.",
          "D": "sự khử cation Na+."
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 12,
        "label": "Ví dụ 10",
        "question": "Điện phân dung dịch CuSO với hai điện cực trơ. Sau một thời gian, màu xanh của dung\n4\ndịch nhạt dần do",
        "options": {
          "A": "khí H sinh ra đã khử màu của dung dịch.",
          "B": "dung dịch bị pha loãng dần nên màu xanh nhạt dần.",
          "C": "ion Cu2+ bị khử dần thành Cu kim loại.",
          "D": "ion Cu2+ được tạo thêm."
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 13,
        "label": "Ví dụ 11",
        "question": "{ SBT – KNTT } Ion halide hầu như không bị điện phân trong dung dịch là",
        "options": {
          "A": "Br–.",
          "B": "I–.",
          "C": "F–.",
          "D": "Cl–."
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 14,
        "label": "Ví dụ 12",
        "question": "Khi điện phân dung dịch CuSO , ion nào sẽ điện phân đầu tiên ở cathode?\n4",
        "options": {
          "A": "Cu2+.",
          "B": "H+ (của nước).",
          "C": "SO 2-.",
          "D": "OH- (của\n4\nnước)."
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 15,
        "label": "Ví dụ 13",
        "question": "[KNTT - SBT]. Khi điện phân dung dịch gồm Cu(NO ) 1 M và AgNO 1 M, thứ tự điện\n3 2 3\nphân ở cathode là",
        "options": {
          "A": "Cu2+, Ag+, H O.",
          "B": "Ag+, Cu2+, H O.\n2 2",
          "C": "H O, Cu2+, Ag+.",
          "D": "Cu2+, H O, Ag+.\n2 2"
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 16,
        "label": "Ví dụ 14",
        "question": "[KNTT - SBT]. Khi điện phân dung dịch gồm CuSO và HCl (sử dụng điện cực trơ, có\n4\nmàng ngăn xốp), chất khí đầu tiên thoát ra ở anode là",
        "options": {
          "A": "O .",
          "B": "Cl .",
          "C": "H .",
          "D": "SO .\n2 2 2 2"
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 17,
        "label": "Ví dụ 15",
        "question": "Điện phân dung dịch hỗn hợp gồm HCl và CuSO có cùng nồng độ. Các chất được tạo ra\n4\nđầu tiên ở anode (cực dương) và ở cathode (cực âm) lần lượt là",
        "options": {
          "A": "Cl và H .",
          "B": "Cl và Cu.",
          "C": "O và Cu.",
          "D": "O và H .\n2 2 2 2 2 2"
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 18,
        "label": "Ví dụ 16",
        "question": "Cho 4 dung dịch chứa các ion sau:\nDung dịch Ion\n33\nHOÁ 12 – HK I\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\n(1) Cu2+, Ag+, NO –\n3\n(2) Na+, K+, Cl–, Br–\n(3) Na+, K+, Cl–, OH–\n(4) Cu2+, Zn2+, SO 2–\n4\nLần lượt điện phân các dung dịch trên với điện cực trơ. Dung dịch nào sau khi điện phân có môi trường\nacid?",
        "options": {
          "A": "(1), (2).",
          "B": "(1), (4).",
          "C": "(1), (3).",
          "D": "(2), (3)."
        },
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 19,
        "label": "Ví dụ 17",
        "question": "Xét quá trình điện phân nóng chảy hợp chất ion MX của kim loại kiềm.\na. Cực dương là anode, cực âm là cathode.\nb. Kim loại M được tạo thành ở cực âm.\nc. Anode xảy ra quá trình khử X– thành X . d. Cực dương và cực âm nối với các cực tương ứng của nguồn điện.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 20,
        "label": "Ví dụ 18",
        "question": "Điện phân dung dịch CuSO 0,5 M với điện cực trơ đến khi đến khi\n4\nnồng độ CuSO giảm một nửa thì dừng điện phân.\n4\na. Dung dịch sau điện phân có pH nhỏ hơn 7.\nb. Ở cathode chỉ xảy ra quá trình khử ion Cu2+.\nc. Số mol khí O thoát ra ở anode bằng số mol Cu tạo thành ở cathode. d. Thứ tự điện phân ở anode là SO 2–, H O.\n4 2",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 21,
        "label": "Ví dụ 19",
        "question": "Điện phân một dung dịch hỗn hợp gồm: HCl, CuCl , NaCl với điện cực trơ, có màng ngăn. a. Sau khi kết thúc quá trình điện phân, pH của dung dịch tăng so với dung dịch ban đầu.\nb. Các chất bị điện phân lần lượt theo thứ tự: CuCl , HCl, NaCl và H O.\n2 2\nc. Quá trình điện phân NaCl làm tăng pH của dung dịch.\nd. Quá trình điện phân HCl làm giảm pH của dung dịch.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 22,
        "label": "Ví dụ 20",
        "question": "[KNTT - SBT]. Điện phân dung dịch M(NO )n (điện cực trơ, cường độ dòng điện không\n3\nđổi), ở cathode chỉ thu được 5,4 g kim loại M và ở anode thu được 0,31 lít khí (đkc).Nguyên tử khối\ncủa kim loại là bao nhiêu?\nĐáp án 108.\n5,4 0,31\nBTe&rarr;n.n =4n &hArr; .n=4. M =108nn=1&rarr;M =108(Ag)\nKL O 2 M 24,79",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 23,
        "label": "Ví dụ 21",
        "question": "Điện phân (với điện cực trơ) dung dịch copper(II) sulfate, nhóm học sinh đã tiến hành như\nsau: Nhúng hai điện cực vào cốc đựng khoảng 60 mL dung dịch CuSO 0,5M rồi nối hai điện cực với\n4\nnguồn điện để tiến hành điện phân (Chú ý không để hai điện cực đã nối nguồn điện chạm vào nhau).\nThời gian điện phân là 5 phút với cường độ dòng điện 10A. Quan sát hiện tượng thí nghiệm xảy ra,\nmột học sinh phát biểu như sau:\na) Có khí không màu (O ) thoát ra ở anode. b) Màu xanh lam của dung dịch CuSO nhạt dần.\n4\nc) Khi quá trình điện phân bắt đầu xảy ra, có khí thoát ra ở cả hai điện cực.\nd) Kim loại màu đỏ được sinh ra bám vào cathode.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 24,
        "label": "Ví dụ 22",
        "question": "Điện phân 2 lít dung dịch NaCl 0,5 M với điện cực trơ, màng ngăn xốp\nbằng dòng điện có cường độ không đổi 0,2 A. Sau 1 930 giây thì dừng điện phân, thu được dung dịch\nX (giả thiết thể tích dung dịch không đổi). Dung dịch X có pH bằng bao nhiêu?\npH = 14 – 2,7 = 11,3\n34\nHOÁ 12 – HK I\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 25,
        "label": "Ví dụ 23",
        "question": "Trong công nghiệp, sodium được điều chế bằng cách điện phân nóng chảy sodium chloride\ntrong bình điện phân Downs với điện áp khoảng 7V, cường độ dòng điện từ 25000A đến 40000A với\ncác điện cực là than chì và sắt theo sơ đồ như hình dưới đây:\na. Ở anode xảy ra quá trình Na+ + 1e → Na.\nb. Điện cực anode được làm bằng sắt, điện cực cathode được làm bằng than chì.\nc. Lưới thép giúp ngăn cho Na (ở trạng thái nóng chảy) không phản ứng lại với Cl . d. Khi sử dụng cường độ dòng điện là 30000 A thì sau 24 giờ sản xuất được 618 kg sodium (hiệu suất\ncủa cả quá trình đạt 80%). Cho Na = 23; F = 96500 C/mol.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 26,
        "label": "Ví dụ 24",
        "question": "Điện phân dung dịch NaCl có màng bán thấm ngăn giữa anode với cathode (các điện cực\nđều trơ). Sơ đồ bình điện phân như hình bên:\nDung dịch thu được sau quá trình điện phân có thành phần chính là\nNaOH nhưng còn lẫn NaCl. Biết ở 20°C, độ tan trong 100 gam nước\ncủa NaCl là 35,9 gam, của NaOH là 109,0 gam, độ tan của NaOH,\nNaCl tăng khi nhiệt độ tăng.\na) Hạ nhiệt độ 300 gam dung dịch hỗn hợp gồm NaCl 10 % và\nNaOH 56,667 % ở 60°C xuống 20°C se ̃ thu được kết tinh NaOH\nkhông lẫn rắn NaCl.\nb) Tại cực âm xảy ra quá trình khử hoá H O thành khí H và OH–\n2 2\nc) Dựa vào sự chênh lệch độ tan, có thể tách NaOH và NaCl bằng phương pháp chiết.\nd) Màng ngăn có vai trò ngăn không cho Cl tác dụng với dung dịch NaOH.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 27,
        "label": "Ví dụ 25",
        "question": "Trong công nghiệp, quá trình điện phân dung dịch NaCl thường được tiến hành trong thùng\nđiện phân có anode bằng than chì và cathode bằng sắt (giữa hai điện cực có màng ngăn xốp) dùng để\nsản xuất NaOH, khí Cl . Sơ đồ quá trình điện phân dung dịch NaCl trong công nghiệp như hình vẽ sau:\n35\nHOÁ 12 – HK I\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\nDung dịch NaCl bão hòa có nồng độ 300 g L-1 bơm vào chỉ được điện phân một phần thành dung dịch\nNaCl có nồng độ 200 g L-1, dung dịch này sau đó được dẫn ra khỏi thùng điện phân, trong khi nước\nmuối mới được bơm vào. Việc làm này giúp hạn chế sự tạo thành sản phẩm không mong muốn. Dung\ndịch NaOH thu được ở cathode có nồng độ 32% được chuyển sang thiết bị cô đặc để sản xuất dung\ndịch NaOH có nồng độ theo ý muốn.\na) Khí Cl thoát ra ở anode, khí H thoát ra ở cathode.\n2 2\nb) Giả sử NaOH không bị thất thoát trong quá trình cô đặc, thể tích dung dịch NaCl không thay đổi\ntrong quá trình điện phân. Để sản xuất được một thùng 20 lít dung dịch NaOH 45% thương phẩm có\nkhối lượng riêng 1,48 g mL-1, cần ít nhất 194,8 lít ( làm tròn đến hàng phần mười) dung dịch NaCl\nbão hòa nồng độ 300 g L-1 bơm vào thùng điện phân.c) Màng ngăn xốp có tác dụng ngăn không cho\nkhí Cl chuyển sang cathode phản ứng với OH-. d) Tại cathode xảy ra sự oxi hóa H O thành khí H và OH-, tại anode xảy ra sự khử ion Cl- thành khí\n2 2\nCl . II. ỨNG DỤNG CỦA PHƯƠNG PHÁP ĐIỆN PHÂN\n1. Sản xuất kim loại\n Điện phân dung dịch (đpdd) => sản xuất kim loại trung bình và yếu.\nVí dụ: hơn 50% sản lượng kẽm trên thế giới được sản xuất bằng phương pháp điện phân:\nZnSO + H O\n4 2\n36\nHOÁ 12 – HK I\n ñ p d d&rarr;\n1\nZn + O + H SO\n2 2 4  Điện phân nóng chảy (đpnc) => sản xuất kim loại mạnh từ Al trở về trước: Na, K, Mg, Ca, Al.\nVí dụ: Trong công nghiệp, nhôm được sản xuất từ quặng bauxite theo hai giai đoạn chính:\nGiai đoạn 1: Tinh chế quặng bauxite\nQuặng bauxite (thành phần chính Al O .2H O) thường lẫn tạp chất. Sau khi loại bỏ tạp chất bằng\n2 3 2\nphương pháp hóa học thu được Al O .\n2 3\nGiai đoạn 2: Điện phân Al O nóng chảy\n2 3\nDo Al O có nhiệt độ nóng chảy rất cao (2050°C) nên Al O được trộn cùng với cryolite (Na AlF ) để\n2 3 2 3 3 6\n Tạo thành hỗn hợp nóng chảy ở gần 1000°C. Giải pháp này giúp tiết kiệm nhiều năng lượng.\n Tạo chất lỏng vừa có tính dẫn điện tốt vừa nổi lên trên Al lỏng để ngăn cách Al lỏng không bị\noxi hóa bởi không khí.\nA l O\n3\n n o ùn g c h a ûy &rarr; 2 A l 3 + + 3 O 2 -\n Ở cực dương (anode) sự oxi hóa ion O<sub>2</sub>- thành O : 2 O 2 − &rarr; O + 4 e\n Ở cực âm (cathode) sự khử ion Al3+ thành Al: : Al3++ 3e&rarr;Al\n Phương trình điện phân: 2Al O ñpnc&rarr;Al + 3O \n2 3 2\nKhí O tạo thành ở nhiệt độ cao, đốt cháy dần điện cực anode than chì thành CO và CO . Do vậy, trong\n2 2\nquá trình điện phân phải hạ thấp dần các điện cực anode vào thùng điện phân.\nSơ đồ thùng điện phân Al O nóng chảy\n2 3",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 28,
        "label": "Ví dụ 1",
        "question": "Trong công nghiệp, nhôm được sản xuất từ quặng bauxite theo hai giai đoạn chính:\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\nGiai đoạn 1: Tinh chế quặng bauxite.\nGiai đoạn 2: Điện phân Al O nóng chảy.\n2 3\na) Tại cathode xảy ra quá trình khử Al3+, tại anode xảy ra quá trình oxi hóa ion\n37\nHOÁ 12 – HK I\nO 2 - .\nb) Thành phần chính của quặng bauxite là Al O .2H O.\n2 3 2\nc) Có thể thay điện cực than chì bằng điện cực Ag hoặc Cu để dẫn điện tốt hơn.\nd) Cryolite có công thức 3NaF.AlF .\n3\nLời giải:\nQuặng bauxite (Al O . 2H O) được trộn cùng với cryolite (Na AlF ) để tạo thành hỗn hợp nóng chảy.\n2 3 2 3 6\nỞ anode xảy ra quá trình oxi hóa O<sub>2</sub>- thành O . Ở cathode xảy ra quá trình khử Al3+ thành Al. a) Đúng.\nb) Đúng.\nc) Sai vì Ag và Cu tham gia phản ứng trong quá trình điện phân nóng chảy Al O , tạo ra sản phẩm\n2 3\nphụ.\nd) Đúng.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 29,
        "label": "Ví dụ 2",
        "question": "Trong công nghiệp, nhôm được điều chế bằng cách điện phân nóng chảy hỗn hợp alumina\n(Al O ) và cryolite (Na AlF ) còn gọi là quy trình Hall-Héroul: 2Al O (l) → 4Al(l) + 3O (g) như hình\n2 3 3 6 2 3 2\ndưới đây:\na) Nhôm kim loại được tách ra tại cathode.\nb) Cryolite được thêm vào bể điện phân giúp tiết kiệm được năng lượng, giảm chi phí sản xuất.\nc) Quy trình Hall-Héroult thu được nhôm tinh khiết và oxygen tinh khiết.\nd) Trong quá trình điện phân, nếu đổi chiều dòng điện (anode trở thành cathode và ngược lại) thì quá\ntrình điện phân vẫn xảy ra như trước khi đổi chiều dòng điện.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 30,
        "label": "Ví dụ 3",
        "question": "Trong công nghiệp, nhôm được điều chế bằng cách điện phân nóng chảy hỗn hợp alumina\n(Al O ) và cryolite (Na AlF ) còn gọi là quy trình Hall-Héroul như hình dưới đây:\n2 3 3 6\nNhiệt độ nóng chảy của hỗn hợp alumina và cryolite khoảng 950°C, thấp hơn nhiều so với nhiệt độ\nnóng chảy của alumina (> 2000°C); ngoài ra cryolite còn làm tăng độ dẫn điện của hỗn hợp nóng chảy.\nTrong quá trình điện phân, cực dương làm bằng graphite bị ăn mòn và liên tục bị nhúng xuống bể điện\nphân. Sau một thời gian, các thanh graphite này sẽ được thay mới.\na) Nhôm kim loại được tách ra tại cathode.\nb) Vì anode và cathode đều làm bằng graphite, nên nếu đổi chiều dòng điện (anode trở thành cathode\nvà ngược lại) thì quy trình điện phân vẫn xảy ra bình thường.\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\n0\nc) Cho biết phương trình nhiệt hóa học: 2Al O (s) → 4Al(s) + 3O (g), Δ H = 1676,00 kJ. Để thu\n2 3 2 r 298\nđược 1 tấn Al với hiệu suất sử dụng năng lượng đạt 75% thì cần tiêu tốn 5747,6 kWh (1 kWh = 3,6.106\nJ).\nd) Cryolite được thêm vào bể điện phân giúp tiết kiệm được năng lượng, giảm chi phí sản xuất.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 31,
        "label": "Ví dụ 4",
        "question": "[Đề tham khảo 2024] Trong công nghiệp, kim loại nhôm (aluminium, Al) được sản xuất\nbằng phương pháp điện phân nóng chảy aluminium oxide. Biết hiệu suất của quá trình chuyển hóa\nAl O thành Al là 95,4%. Để sản xuất 5,4 tấn Al cần sử dụng bao nhiêu tấn nguyên liệu Al O (làm\n2 3 2 3\ntròn đến hàng phần mười)?\nĐáp án: 10,7",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 32,
        "label": "Ví dụ 5",
        "question": "Trong công nghiệp kim loại nhôm (aluminium, Al) được sản xuất bằng phương pháp điện\nphân nóng chảy Al O . Biết hiệu suất quá trình chuyển hoá Al O thành Al là 95,4%. Để sản xuất 2,7\n2 3 2 3\ntấn Al cần sử dụng bao nhiêu tấn nguyên liệu Al O (làm tròn đến hàng phần trăm)\n2 3\nHướng dẫn giải\n5,35 tấn.",
        "options": null,
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 33,
        "label": "Ví dụ 6",
        "question": "Tại một nhà máy, quặng bauxite được đun nóng với dung dịch NaOH 32% ở nhiệt độ 170°C\n– 180°C để chuyển hóa Al O thành muối dễ tan theo phương trình hóa học:\n2 3\nAl O + 2NaOH → 2NaAlO + H O\n2 3 2 2\nĐể hòa tan hết Al O có trong 1,5 tấn quặng bauxite (chứa 60% Al O theo khối lượng) cần dùng bao\n2 3 2 3\nnhiều tấn dung dịch NaOH 32%? (làm tròn kết quả đến hàng phần mười).\nĐáp án: 2,2 tấn",
        "options": null,
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 34,
        "label": "Ví dụ 7",
        "question": "Một loại quặng nhôm có chứa 40% khối lượng Al.\na) Nhôm trong loại quặng trên ở dạng Al O , hỏi quặng trên chứa bao nhiêu phần trăm tạp chất.\n2 3\nb) Để điện phân toàn bộ lượng Al O nóng chảy thu được từ 1 000 kg loại quặng trên bởi dòng điện\n2 3\nmột chiều có cường độ 10 000 A thì về lí thuyết cần bao nhiêu giờ điện phân liên tục?\nGiải:\na) Trong 1 000 kg quặng chứa 400 kg Al\n38\nHOÁ 12 – HK I\n n\nA l\n=\n4 0\n7\n0\nk m o l &rarr; n\nA l O<sub>2</sub> 3\n= 4\n7\n0\n\n0 k m o l\n400 1 000−755,56\n m = 102 = 755,56 kg %m = 100 = 24,4%\nAl 2 O 3 272 TC 1 000\n400 It\nn = 3n =3 103 mol = &rarr; t =119,14 h\nb) e Al 27 F",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 35,
        "label": "Ví dụ 8",
        "question": "Xét quá trình sản xuất nhôm được thực hiện theo phương pháp điện phân Al O nóng chảy\n2 3\nvới điện cực than chì.\na. Giải thích vì sao thực tế thành phần thể tích khí bay ra ở cực dương gồm CO (30% - 50%) và\nCO (70% - 50%) mà không phải là O .\n2 2\nb. Trung bình để sản xuất được 1 tấn Al thì lượng điện cực than chì bị tiêu hao do phản ứng oxi\nhoá là bao nhiêu? Giả thiết thành phần khí bay ra ở cực dương gồm 50% CO và 50% CO về thể tích. Giải:\n1 000 1 000\nn = kmol &rarr; n =3n = kmol\nAl 27 e Al 9\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\nCathode (–) Anode (+)\nAl3+ + 3e &rarr; Al 2O2–\n39\nHOÁ 12 – HK I\n &rarr; O + 4e C +O 2&rarr; [CO (a kmol) + CO (a kmol)] 250 250 500\nne&rarr; n = kmol BT.O&rarr; 2 = a2 + a &rarr; a = kmol\nO 2 9 9 27\nBT.C&rarr; n =2a &rarr; m = 444,44 kg = 0,44 T\nC C",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 36,
        "label": "Ví dụ 9",
        "question": "Điện phân nóng chảy hỗn hợp gồm Al O (10%) và criolite (90%) với anode là than cốc và\n2 3\ncathode là than chì. Sau thời gian điện phân thu được 5,4 tấn Al tại cathode và hỗn hợp khí tại anode\ngồm CO (80% theo thể tích) và CO (20% theo thể tích). Giả thiết không có thêm sản phẩm nào được sinh ra trong quá trình điện phân. Tính khối lượng carbon (theo tấn) đã bị oxi hóa tại anode? (Làm\ntròn kết quả đến hàng đơn vị).\nGiải:\nn\nA l\n= 2 0 0 k m o l &rarr; n\ne\n= 3  n\nA l\n= 6 0 0 k m o l\nCathode (–) Anode (+)\nAl3+ + 3e &rarr; Al 2O2– &rarr; O + 4e C +O 2&rarr; [CO (0,8a kmol) + CO (0,2a kmol)]\nne&rarr; n = 150 kmol BT.O&rarr; 1502 = 0,8a2 + 0,2a &rarr; a = 166,67 kmol\nO BT.C&rarr; n =a &rarr; m = 2 000 kg = 2 T\nC C",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 37,
        "label": "Ví dụ 10",
        "question": "Trong quá trình sản xuất nhôm bằng phương pháp điện phân nóng chảy aluminium oxide,\nđiện cực dương bằng than chì bị ăn mòn liên tục do phản ứng giữa carbon và oxygen tạo thành hỗn\nhợp khí O , CO và CO . Giả sử các khí trong hỗn hợp trên có tỉ lệ mol bằng nhau, các phản ứng xảy\n2 2\nra hoàn toàn, mỗi kg nhôm sinh ra tương ứng với bao nhiêu kg than chì bị đốt cháy ở cực dương? (Kết\nquả được làm tròn đến hàng phần trăm).\nGiải:\n1 000 1 000\nn = mol &rarr; n =3n = mol\nAl 27 e Al 9\nCathode (–) Anode (+)\nAl3+ + 3e &rarr; Al 2O2– &rarr; O + 4e C + O &rarr; 2 [CO (a mol) + CO (a mol) + O (a mol)]\n2 2\n250 250 100\nne&rarr; n = mol BT.O&rarr; 2 = a2 + a + a2 &rarr; a = mol\nO 2 9 9 9\nBT.C&rarr; n =2a &rarr; m = 266,67 g = 0,27 kg\nC C",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 38,
        "label": "Ví dụ 11",
        "question": "Trong công nghiệp, kim loại nhôm được sản xuất từ quặng bauxite Al O .2H O bằng phương\n2 3 2\npháp điện phân nóng chảy với điện cực than chì và có mặt cryolite. Giả sử ở cathode thu được kim\nloại nhôm, ở anode chỉ thu được hỗn hợp khí CO và CO theo tỉ lệ thể tích 1: 1. Nếu thu được 99,16 m³ (ở đkc) hỗn hợp khí ở anode thì khối lượng (kg) quặng bauxite đã sử dụng là bao nhiêu? biết hiệu\nsuất cả quá trình điện phân là 80%?\nHướng dẫn giải\nn khí = 4 kmol → nCO = nCO = 2 kmol Bảo toàn electron: 3nAl = 2nCO + 4nCO → nAl = 4\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\nH = 80% → mAl O .2H O = 138.4/(2.80%) = 345 kg.\n2 3 2\n2. Tinh chế kim loại\n- Từ nguồn kim loại thô (kim loại phế liệu hoặc sau quá trình nhiệt luyện, thuỷ luyện), các kim loại\nnhư Zn, Ni, Co, Cu, Ag, Au, ... được tinh chế bằng phương pháp điện phân.\n- Quá trình tinh chế được thực hiện bằng cách điện phân dung dịch chất tan (muối hoặc phức chất) của\nkim loại đó với anode làm bằng kim loại thô tương ứng.\nVí dụ: Trong công nghiệp, đồng phế liệu hoặc đồng thô được tinh chế bằng phương pháp điện\nphân.\nBình điện phân tinh chế đồng chứa dung dịch muối CuSO trong dung dịch H SO , anode bằng\n4 2 4\nđồng thô và cathode là đồng tinh khiết.\n Tại anode: Cu bị oxi hoá thành ion Cu2+ đi vào dung dịch: Cu → Cu2+ + 2e =>Do vậy, anode\ndần bị hoà tan.\n Tại cathode: Cu2+ bị khử thành Cu bám trên cathode: Cu2+ + 2e → Cu\n Quá trình điện phân này được coi như là sự chuyển dời kim loại Cu từ anode (ở dạng đồng thô)\nvề cathode (ở dạng đồng tinh khiết).\n Kết thúc quá trình điện phân thu được đồng tinh khiết ở cathode.\n3. Mạ điện\n- Phương pháp điện phân được sử dụng trong mạ điện, trong đó ion kim loại bị khử, tạo thành lớp kim\nloại rắn bao phủ trên bề mặt kim loại cần mạ nhằm trang trí bề mặt hoặc chống sự ăn mòn.\n- Trong kĩ thuật mạ điện, các kim loại mạ thường là chromium, nickel, đồng, vàng, bạc, platinum, ...\n- Bình mạ điện chứa dung dịch muối của kim loại mạ, vật cần mạ và thanh kim loại mạ.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 39,
        "label": "Ví dụ 1",
        "question": "Quá trình điện phân để mạ đồng lên một\nchiếc chìa khoá được mô tả ở hình bên. Trong quá\ntrình điện phân, thanh kim loại đóng vai trò là\nanode, chiếc chìa khoá đóng vai trò là cathode và\ndung dịch điện phân là dung dịch CuSO . Các quá\n4\ntrình xảy ra ở các điện cực tương tự như quá trình\nđiện phân tinh chế đồng với anode tan.\nĐộ dày của lớp mạ tỉ lệ thuận với cường độ dòng\nđiện chạy qua dung dịch điện phân và thời gian\nSơ đồ điện phân mạ đồng lên chìa\nmạ.\nkhoá",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 40,
        "label": "Ví dụ 2",
        "question": "Có hai thanh kim loại Fe, Ag và các dung dịch chứa ion Fe2+ và Ag+. Thiết lập một bình điện\nphân để mạ bạc lên sắt.\na. Fe gắn với cực dương của bình điện phân còn Ag gắn với cực âm của bình điện phân.\nb. Ag gắn với cực dương của bình điện phân, Fe gắn với cực âm của bình điện phân. Cả hai điện\ncực cùng được nhúng vào dung dịch chứa ion Ag+.\nc. Khi có dòng điện chạy qua, ở cực âm của bình điện phân, thanh Fe bị mòn dần do Fe thực hiện\nquá trình oxi hoá, chuyển thành ion Fe2+ đi vào trong dung dịch.\nd. Khi có dòng điện chạy qua, ở cực dương của bình điện phân, Ag bị oxi hoá chuyển thành ion\nAg+ đi vào trong dung dịch và di chuyển về cực âm của bình điện phân.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 41,
        "label": "Ví dụ 3",
        "question": "Tinh luyện đồng (Cu) bằng phương pháp điện phân được tiến hành như sau:\n- Các khối đồng có độ tinh khiết thấp được gắn với cực dương của nguồn điện;\n- Các tấm đồng mỏng có độ tinh khiết cao được gắn với cực âm của nguồn điện.\nDung dịch điện phân là dung dịch CuSO .\n4\n40\nHOÁ 12 – HK I\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\na. Tại anode chủ yếu xảy ra quá trình oxi hoá H O thành khí O và H+.\n2 2\nb. Các tạp chất không bị điện phân sẽ được giữ lại và bám vào anode.\nc. Nồng độ ion Cu2+ trong dung dịch không đổi trong quá trình điện phân.\nd. Khối lượng Cu tan ra từ anode bằng khối lượng Cu bám vào cathode.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 42,
        "label": "Ví dụ 4",
        "question": "Mạ điện là một trong những ứng dụng quan trọng\ncủa điện phân, hình dưới đây mô tả quá trình mạ silver lên một\nchiếc bình bằng thép.\na) Bình thép đóng vai trò là cathode, sliver đóng vai trò là\nanode.\nb) Ở cực dương xảy ra quá trình: Ag+(aq) + 1e → Ag(s).\nc) Trong quá trình điện phân, anode tan dần.\nd) Khi có dòng điện chạy qua, các ion kim loại sẽ di chuyển\nvề anode, bị oxi hóa thành kim loại và phủ lên bề mặt vật cần\nmạ.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 43,
        "label": "Ví dụ 5",
        "question": "Một nhóm học sinh tiến hành mạ đồng (copper) cho một chiếc chìa khóa bằng hợp kim Fe-\nZn, quá trình tiến hành được thực hiện như sau:\n- Cho vào cốc thủy tinh 200 mL dung dịch CuSO 1 M.\n4\n- Nhúng 1 lá đồng vào dung dịch và nối với cực dương của nguồn điện 1 chiều.\n- Nhúng chìa khóa chìm trong dung dịch và nối với cực âm của nguồn điện.\na. Khối lượng dung dịch trong cốc không đổi trong quá trình phản ứng (coi nước bay hơi không đáng\nkể).\nb. Nếu không nối chìa khóa với nguồn điện thì trên bề mặt chìa khóa vẫn có lớp kim loại màu đỏ bám\nvào.\nc. Chiếc chìa khóa đóng vai trò là anode.\nd. Màu xanh của dung dịch trong cốc nhạt dần.",
        "options": null,
        "explanation": "Áp dụng định nghĩa cặp oxi hoá – khử, bảng thế điện cực chuẩn và quy tắc alpha để dự đoán chiều phản ứng hoặc tính sức điện động."
      },
      {
        "id": 44,
        "label": "Ví dụ 6",
        "question": "[Đề tham khảo 2024] Một nhóm học sinh tìm hiểu quá trình thu hồi kim loại đồng (copper)\nbằng phương pháp điện phân từ một đồng xu làm bằng hợp kim Cu – Zn chứa khoảng 95% đồng về\nkhối lượng. Giả thuyết của nhóm học sinh là “khi điện phân, chỉ có tạp chất trong đồng xu tan hết vào\ntrong dung dịch, còn lại sẽ là đồng tinh khiết”. Để kiểm tra giả thuyết này, nhóm học sinh đã thực hiện\nthí nghiệm như sau:\nCân để xác định khối lượng ban đầu của đồng xu (2,23 gam) và thanh đồng tinh khiết (2,55 gam). Nối\nđồng xu với một điện cực và thanh đồng tinh khiết với điện cực còn lại của nguồn điện một chiều, rồi\nnhúng vào bình điện phân chứa dung dịch copper(II) sulfate. Điện phân ở hiệu điện thế phù hợp.\nSau một thời gian điện phân, làm khô, rồi cân để xác định lại khối lượng của đồng xu và thanh đồng\ntinh khiết, thấy khối lượng đồng xu là 1,94 gam và khối lượng thanh đồng là m₁ gam.\na) Trong thí nghiệm trên, đồng xu được nối với cực dương, thanh đồng tinh khiết được nối với cực âm\ncủa nguồn điện.\nb) Giá trị của m lớn hơn 2,55.\n1\nc) Ở cực dương xảy ra quá trình khử.\nd) Do khối lượng của đồng xu giảm, nên giả thuyết ban đầu của nhóm học sinh là đúng.",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 45,
        "label": "Ví dụ 7",
        "question": "Để mạ 5,0 gam bạc lên một đĩa sắt khi điện phân dung dịch chứa ion\n[Ag(NH ) ]+ với dòng điện có cường độ 1,5 A không đổi cần thời gian t phút. Cho biết quá trình khử\n3 2\ntại cathode:\n[Ag(NH ) ]+ + le &rarr; Ag + 2NH .\n3 2 3\nGiá trị của t là bao nhiêu? (Làm tròn kết quả đến phần mười).\n41\nHOÁ 12 – HK I\nHỌC HÓA CÙNG THẦY MINH 2026 Zalo 094.354.7978\nĐáp án: 49,6",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 46,
        "label": "Ví dụ 8",
        "question": "Người ta mạ nickel lên mặt vật kim loại bằng phương pháp mạ điện, dung dịch điện phân\nchứa NiSO , cực dương là Ni kim loại, cực âm là vật kim loại cần mạ. Nếu dòng điện có cường độ 1,5\n4\nA chạy qua dung dịch trong 2 giờ thì khối lượng nickel được mạ lên vật là bao nhiêu? (Cho biết khối\nlượng mol của Ni = 58,7 g/mol, hằng số Faraday F = 96500 C/mol, hiệu suất quá trình điện phân là\n100%). (Kết quả làm tròn đến hàng phần mười)\nHướng dẫn giải\nmNi = AIt/nF = 58,7.1,5.2.3600/(2.96500) = 3,3 gam",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      },
      {
        "id": 47,
        "label": "Ví dụ 9",
        "question": "Muốn mạ đồng một tấm sắt có tổng diện tích bề mặt là x cm² với bề dày lớp mạ là 0,18 mm,\nngười ta dùng tấm sắt đó làm cathode của một bình điện phân chứa dung dịch CuSO và anode là một\n4\nthanh đồng nguyên chất, rồi cho dòng điện có cường độ I = 10 A chạy qua trong thời gian 2 giờ 40\nphút 50 giây. Cho biết đồng có khối lượng riêng D = 8,9 g/cm³; Điện lượng Q (coulomb) được xác\nđịnh theo công thức: Q = n.F = I.t. Trong đó: n là số mol electron đi qua dây dẫn, I là cường độ dòng\nđiện (ampe), t là thời gian (giây), hằng số Faraday F = 96500 C/mol. Giả thiết Cu được sinh ra bám\nđồng đều trên bề mặt tấm sắt với bề dày lớp Cu như nhau ở mọi vị trí. Tính giá trị của x (kết quả cuối\ncùng làm tròn đến hàng đơn vị).\nHướng dẫn giải\nne = It/F = 1 → nCu = 0,5\nV Cu = 8,9.0,018.x = 0,5.64 → x = 200 cm².\n42\nHOÁ 12 – HK I",
        "options": null,
        "explanation": "Áp dụng thứ tự điện phân tại cathode (ion có tính oxi hoá mạnh hơn bị khử trước) và anode (ion có tính khử mạnh hơn bị oxi hoá trước)."
      }
    ],
    "questions": [
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 1,
        "prompt": "(SBT – CTST) Nhận xét nào sau đây đúng về quá trình điện phân ở hai điện cực?",
        "options": {
          "A": "Cation nhường electron ở cathode.",
          "B": "Anion nhận electron ở anode.",
          "C": "Sự oxi hoá xảy ra ở anode.",
          "D": "Sự oxi hoá xảy ra ở cathode."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 1,
        "qnum": 1
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 2,
        "prompt": "(SBT – KNTT) Ion kim loại nào sau đây bị điện phân trong dung dịch (với điện cực graphite)?",
        "options": {
          "A": "Na+.",
          "B": "Cu2+.",
          "C": "Ca2+.",
          "D": "K+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 2,
        "qnum": 2
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 3,
        "prompt": "(SBT – KNTT) Ion halide hầu như không bị điện phân trong dung dịch là",
        "options": {
          "A": "Br–.",
          "B": "F–.",
          "C": "Cl–.",
          "D": "Ι–."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 3,
        "qnum": 3
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 4,
        "prompt": "Điện phân dung dịch nào sau đây sẽ có khí thoát ra ở cả 2 điện cực (ngay lúc mới đầu bắt đầu\nđiện phân)?",
        "options": {
          "A": "Cu(NO )",
          "B": "FeCl .",
          "C": "K SO .",
          "D": "FeSO .\n3 2 2 2 4 4"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 4,
        "qnum": 4
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 5,
        "prompt": "Trong quá trình điện phân KBr nóng chảy, phản ứng nào xảy ra ở điện cực dương (anode)?",
        "options": {
          "A": "Ion Br– bị khử.",
          "B": "Ion Br– bị oxi hoá.",
          "C": "Ion K+ bị oxi hoá.",
          "D": "lon K+ bị khử."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 5,
        "qnum": 5
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 6,
        "prompt": "Khi điện phân NaCl nóng chảy (điện cực trơ), ở cathode xảy ra",
        "options": {
          "A": "sự khử ion Cl–.",
          "B": "sự oxi hoá ion Cl–.",
          "C": "sự oxi hoá ion Na+.",
          "D": "sự khử ion Na+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 6,
        "qnum": 6
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 7,
        "prompt": "Điện phân nóng chảy NaCl (điện cực trơ), ở cathode thu được chất nào sau đây?",
        "options": {
          "A": "HCl.",
          "B": "Cl .",
          "C": "Na.",
          "D": "NaOH."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 7,
        "qnum": 7
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 8,
        "prompt": "(SBT – KNTT) Phương trình hoá học nào sau đây biểu diễn quá trình điều chế kim loại bằng\nphương pháp điện phân nóng chảy?",
        "options": {
          "A": "CaCl\n\n\n &rarr; Ca + Cl .",
          "B": "Fe O + 3CO &rarr; Fe + 3CO .\n2 2 3 2 2",
          "C": "Mg + CuSO\n\n &rarr; MgSO + Cu.",
          "D": "2NaCl + 2H O\n4 2\n &rarr; 2NaOH + H + Cl .\n2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 8,
        "qnum": 8
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 9,
        "prompt": "(SBT – KNTT) Trong quá trình điện phân KCl nóng chảy với các điện cực trơ, ở cathode xảy\nra quá trình",
        "options": {
          "A": "oxi hoá ion K+.",
          "B": "khử ion K+.",
          "C": "oxi hoá ion Cl–.",
          "D": "khử ion Cl–."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 9,
        "qnum": 9
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 10,
        "prompt": "(SBT – KNTT) Việc duy trì điện áp thấp (~ 5 V) trong quá trình điện phân nóng chảy Al O\n2 3\ntrong 3NaF.AlF nhằm ngăn cản quá trình nào sau đây xảy ra ở cathode?",
        "options": {
          "A": "Al3+ + 3e  &rarr; Al.",
          "B": "Na+ + le  &rarr; Na.",
          "C": "F + 2e\n\n &rarr; 2F–.",
          "D": "O + 4e &rarr; 2O<sub>2</sub>–."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 10,
        "qnum": 10
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 11,
        "prompt": "Trong quá trình điện phân dung dịch AgNO (các điện cực trơ), ở cực âm xảy ra phản ứng nào\n\nsau đây?",
        "options": {
          "A": "Ag &rarr; Ag + le.",
          "B": "Ag+ + le &rarr; Ag.",
          "C": "2H O &rarr; 4H+ + O + 4e.",
          "D": "2H O + 2e &rarr; H + 2OH–.\n2 2 2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 11,
        "qnum": 11
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 12,
        "prompt": "Khi điện phân dung dịch CuSO , ion nào sẽ điện phân đầu tiên ở cathode?",
        "options": {
          "A": "Cu2+.",
          "B": "H+ (của nước).",
          "C": "SO 2–.",
          "D": "OH– (của nước)."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 12,
        "qnum": 12
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 13,
        "prompt": "(SBT – Hóa học 12 NC) Trong quá trình điện phân dung dịch CuSO (các điện cực trơ), ở\n\nanode xảy ra phản ứng",
        "options": {
          "A": "oxi hoá ion SO 2–.",
          "B": "khử ion SO 2–.",
          "C": "khử phân tử H O.",
          "D": "oxi hoá phân tử H O.\n4 4 2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 13,
        "qnum": 13
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 14,
        "prompt": "(SBT – CTST) Điện phân dung dịch CuCl với điện cực trơ. Nồng độ của CuCl trong dung\n2 2\ndịch",
        "options": {
          "A": "giảm dần.",
          "B": "tăng dần.",
          "C": "không thay đổi.",
          "D": "tăng dần rồi giảm dần."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 14,
        "qnum": 14
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 15,
        "prompt": "(SBT – KNTT) Khi điện phân dung dịch CuSO bằng dòng điện một chiều (với điện cực anode\n\nbằng Cu) thì ở anode xảy ra quá trình",
        "options": {
          "A": "oxi hoá H O thành H⁺ và O .",
          "B": "khử Cu2+ thành Cu.\n2 2",
          "C": "oxi hoá Cu thành Cu2+.",
          "D": "khử H O thành H và OH–.\n2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 15,
        "qnum": 15
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 16,
        "prompt": "Điện phân dung dịch CuSO với anode bằng đồng (anode tan) và điện phân dung dịch CuSO\n4 4\nvới anode bằng graphite (điện cực trơ) đều có đặc điểm chung là",
        "options": {
          "A": "ở cathode xảy ra sự oxi hoá: 2H O + 2e &rarr; 2OH– + H .\n2 2",
          "B": "ở anode xảy ra sự khử: 2H O &rarr; O + 4H+ + 4e\n2 2",
          "C": "ở anode xảy ra sự oxi hoá: Cu &rarr; Cu2+ + 2e.",
          "D": "ở cathode xảy ra sự khử: Cu2+ + 2e\n\n &rarr; Cu"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 16,
        "qnum": 16
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 17,
        "prompt": "Khi điện phân dung địch NaCl có màng ngăn, các chất được tạo ra ở anode (cực dương) và\ncathode (cực âm) lần lượt là",
        "options": {
          "A": "Cl và NaOH, H .",
          "B": "Na và Cl .",
          "C": "Cl và Na.",
          "D": "NaOH và H .\n2 2 2 2 2"
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 17,
        "qnum": 17
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 18,
        "prompt": "Sản phẩm thu được khi điện phân dung dịch KCl (điện cực trơ, có màng ngăn) gồm",
        "options": {
          "A": "K và Cl .",
          "C": "KOH, H và Cl .",
          "B": "K, H và Cl .",
          "D": "KOH, O và HCl.\n2 2 2 2 2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 18,
        "qnum": 18
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 19,
        "prompt": "(SBT – KNTT) Trong công nghiệp, quá trình điện phân dung dịch NaCl bão hoà (điện cực\ntrơ, có màng ngăn xốp) tạo ra khí nào sau đây ở cathode?",
        "options": {
          "A": "Hydrogen.",
          "B": "Chlorine.",
          "C": "Oxygen.",
          "D": "Hydrogen chloride."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 19,
        "qnum": 19
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 20,
        "prompt": "Tiến hành điện phân dung dịch NaCl bằng điện cực trơ, thu được một khí Y duy nhất. Điều\nkhẳng định nào sau đây là đúng?",
        "options": {
          "A": "Y là khí oxygen.",
          "B": "Y là khí chlorine.",
          "C": "Y là khí hydrogen.",
          "D": "Có dùng màng ngăn."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 20,
        "qnum": 20
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 21,
        "prompt": "Quá trình điện phân dung dịch NaCl (điện cực trơ, có màng ngăn) và điện phân NaCl nóng\nchảy (điện cực trơ) có điểm giống nhau là",
        "options": {
          "A": "tại cathode xảy ra sự khử ion Na+.",
          "B": "tại cathode xảy ra sự khử phân tử H O",
          "C": "tại anode xảy ra sự oxi hoá ion Cl–.",
          "D": "tại anode xảy ra sự oxi hoá phân tử H O."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 21,
        "qnum": 21
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 22,
        "prompt": "(SBT – KNTT) Xét quá trình điện phân dung dịch NaCl 20% bằng dòng điện một chiều (với\nđiện cực trơ, có màng ngăn xốp). Quá trình khử xảy ra ở cathode là",
        "options": {
          "A": "2H O + 2e &rarr; H + 2OH–.",
          "B": "Cl + 2e\n2 2 2\n &rarr; 2Сl–.",
          "C": "2Cl– &rarr; Cl + 2e.",
          "D": "H O\n2 2\n &rarr; 2H+ + ½O + 2e."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 22,
        "qnum": 22
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 23,
        "prompt": "(SBT – KNTT) Phương trình hoá học nào sau đây biểu diễn quá trình điều chế kim loại bằng\nphương pháp điện phân dung dịch?",
        "options": {
          "A": "2Al O\n2 3\n &rarr; 4Al + 3O .",
          "B": "2Al + Cr O\n2 2 3\n &rarr; Al O + 2Cr.\n2 3",
          "C": "Zn + CuSO\n\n &rarr; ZnSO + Cu.",
          "D": "CuCl\n4 2\n &rarr; Cu + Cl ."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 23,
        "qnum": 23
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 24,
        "prompt": "(SBT – KNTT) Trong công nghiệp, phương pháp điện phân dung dịch được sử dụng để sản\nxuất một lượng đáng kể kim loại nào sau đây?",
        "options": {
          "A": "Zn.",
          "B": "Al.",
          "C": "Na.",
          "D": "Mg."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 24,
        "qnum": 24
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 25,
        "prompt": "(SBT – KNTT) Trong công nghiệp, việc tinh chế đồng từ đồng thô được thực hiện bằng\nphương pháp điện phân dung dịch với anode làm bằng",
        "options": {
          "A": "graphite.",
          "B": "platinum.",
          "C": "thép.",
          "D": "đồng thô."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 25,
        "qnum": 25
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 26,
        "prompt": "(SBT – KNTT) Điện phân dung dịch chất nào sau đây (dùng điện cực trơ), thu được dung dịch\ncó khả năng làm quỳ tím chuyển sang màu đỏ?",
        "options": {
          "A": "NaBr.",
          "B": "NaCl.",
          "C": "CuSO .",
          "D": "CuCl .\n4 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 26,
        "qnum": 26
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 27,
        "prompt": "(SBT – KNTT) Điện phân dung dịch chất nào sau đây (với điện cực trơ, không có màng ngăn\nđiện cực), thu được dung dịch có khả năng tẩy màu?",
        "options": {
          "A": "CuSO .",
          "B": "NaCl.",
          "C": "K SO .",
          "D": "AgNO .\n4 2 4 3"
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 27,
        "qnum": 27
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 28,
        "prompt": "(SBT – KNTT) Trong quá trình mạ bạc cho một chiếc vòng bằng thép thì ở anode xảy ra quá\ntrình",
        "options": {
          "A": "Ag &rarr; Ag+ + le.",
          "B": "Fe &rarr; Fe2+ + 2e.",
          "C": "2H O &rarr; 4H+ + O + 4e.",
          "D": "C &rarr; C4+ + 4e.\n2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 28,
        "qnum": 28
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 29,
        "prompt": "(SBT – KNTT) Cho các cặp oxi hoá – khử và thế điện cực chuẩn tương ứng:\nCặp oxi hóa – khử F /2F– Cl /2Cl– Br /2Br– I /2I–\n2 2 2 2\nThế điện cực chuẩn (V) +2,87 +1,358 +1,087 +0,621\nKhi điện phân dung dịch chứa đồng thời bốn loại ion halide ở trên với nồng độ mol bằng nhau, ion\nhalide bị điện phân đầu tiên ở anode là",
        "options": {
          "A": "Cl–.",
          "B": "Br–.",
          "C": "F–.",
          "D": "I–."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 29,
        "qnum": 29
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 30,
        "prompt": "(SBT – KNTT) Cho các cặp oxi hoá – khử và thế điện cực chuẩn tương ứng:\nCặp oxi hóa – khử 2H+/H Cu2+/Cu Fe2+/Fe Ag+/Ag\n\nThế điện cực chuẩn (V) 0,00 +0,34 –0,44 +0,799\nKhi điện phân dung dịch chứa đồng thời bốn loại cation trên với nồng độ mol bằng nhau, cation bị\nđiện phân đầu tiên ở cathode là",
        "options": {
          "A": "Cu2+.",
          "B": "Ag+.",
          "C": "H+.",
          "D": "Fe2+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 30,
        "qnum": 30
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 31,
        "prompt": "(SBT – KNTT) Cho các cặp oxi hoá – khử và thế điện cực chuẩn tương ứng:\nCặp oxi hóa – khử Na+/Na Mg2+/Mg Al3+/Al Cu2+/Cu\nThế điện cực chuẩn (V) –2,713 –2,356 –1,676 +0,34\nIon kim loại nào sau đây bị khử tại cathode khi điện phân (với điện graphite) dung dịch muối sulfate\ntương ứng?",
        "options": {
          "A": "Mg2+.",
          "B": "Na+.",
          "C": "Cu2+.",
          "D": "Al3+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 31,
        "qnum": 31
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 32,
        "prompt": "Khi điện phân dung dịch (có màng ngăn) gồm NaCl, HCl, CuCl và phenolphthalein. Màu\n\ncủa dung dịch biến đổi như thế nào khi điện phân đến hết NaCl?",
        "options": {
          "A": "Đỏ - không màu\n\n &rarr; xanh.",
          "B": "Xanh - không màu  &rarr; đỏ.",
          "C": "Xanh - không màu  &rarr; hồng.",
          "D": "Hồng - không màu  &rarr; xanh."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 32,
        "qnum": 32
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 33,
        "prompt": "Dung dịch X chứa hỗn hợp các muối: NaCl, CuCl , FeCl và ZnCl . Kim loại tách ra đầu tiên\n2 3 2\nở cathode khi điện phân dung dịch là",
        "options": {
          "A": "Fe.",
          "B": "Cu.",
          "C": "Zn.",
          "D": "Na."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 33,
        "qnum": 33
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 34,
        "prompt": "Khi điện phân hỗn hợp gồm các dung dịch: FeCl , CuCl , HCl. Quá trình nào xảy ra ở cathode\n3 2\nvà theo đúng thứ tự điện phân?\n(1) Cu2+ + 2e  &rarr; Cu; (2) Fe3+ + 3e  &rarr; Fe; (3) Fe3+ + 1e &rarr; Fe2+;\n(4) Fe2+ + 2e &rarr; Fe; (5) 2H+ + 2e &rarr; H .",
        "options": {
          "A": "(4)  &rarr; (5)  &rarr; (1)  &rarr; (3).",
          "C": "(3)  &rarr; (1)  &rarr; (5)  &rarr; (4).",
          "B": "(2)  &rarr; (1)  &rarr; (5) &rarr; (3).",
          "D": "(1)  &rarr; (3)  &rarr; (5)  &rarr; (4)."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 34,
        "qnum": 34
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 35,
        "prompt": "(SBT – KNTT) Khi điện phân dung dịch gồm NaCl 1 M và NaBr 1 M, quá trình oxi hoá đầu\ntiên xảy ra ở anode là",
        "options": {
          "A": "2H O &rarr; 4H+ + O + 4e.",
          "B": "2Cl– &rarr; Cl + 2e.\n2 2 2",
          "C": "2Br–  &rarr; Br + 2e.",
          "D": "Na\n\n &rarr; Na+ + le."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 35,
        "qnum": 35
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 36,
        "prompt": "(SBT – KNTT) Khi điện phân dung dịch gồm Cu(NO ) 0,1 M và AgNO 0,1 M, quá trình\n3 2 3\nkhử đầu tiên xảy ra ở cathode là",
        "options": {
          "A": "Ag+ + 1e &rarr; Ag.",
          "B": "Cu2+ + 2e &rarr; Cu.",
          "C": "2H O + 2e &rarr; H + 2OH–.",
          "D": "2H+ + 2e &rarr; H .\n2 2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 36,
        "qnum": 36
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 37,
        "prompt": "(SBT – KNTT) Khi điện phân dung dịch gồm CuCl 1,0 M và H SO 0,5 M, thứ tự bị điện\n2 2 4\nphân ở anode là",
        "options": {
          "A": "H O, Cl–.",
          "B": "Cl–, H O.",
          "C": "SO 2–, Cl–, H O.",
          "D": "Cl–, SO 2–, H O.\n2 2 4 2 4 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 37,
        "qnum": 37
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 38,
        "prompt": "(SBT – KNTT) Khi điện phân dung dịch gồm CuSO và HCl (sử dụng điện cực trơ, có màng\n\nngăn xốp), chất khí đầu tiên thoát ra ở anode là",
        "options": {
          "A": "O .",
          "B": "Cl .",
          "C": "H .",
          "D": "SO .\n2 2 2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 38,
        "qnum": 38
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 39,
        "prompt": "(Đề TSĐH A - 2010) Điện phân (với điện cực trơ) một dung dịch gồm NaCl và CuSO có\n\ncùng số mol, đến khi ở cathode xuất hiện bọt khí thì dừng điện phân. Trong cả quá trình điện phân\ntrên, sản phẩm thu được ở anode là",
        "options": {
          "A": "khí Cl và H .",
          "B": "khí Cl và O .",
          "C": "chỉ có khí Cl .",
          "D": "khí H và O .\n2 2 2 2 2 2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 39,
        "qnum": 39
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 40,
        "prompt": "Điều khẳng định nào sau đây là đúng khi điện phân hỗn hợp dung dịch Cu(NO ) , AgNO ?\n3 2 3",
        "options": {
          "A": "Tại cathode xảy ra quá trình khử Cu2+ trước.",
          "B": "Khối lượng dung dịch giảm là khối lượng của kim loại thoát ra bám vào cathode.",
          "C": "Ngay từ đầu đã có khí thoát ra tại cathode.",
          "D": "Tại anode xảy ra quá trình oxi hoá H O."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 40,
        "qnum": 40
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 41,
        "prompt": "Điện phân dung dịch gồm NaCl và HCl (điện cực trơ, có màng ngăn). Trong quá trình điện\nphân, giá trị pH của dung dịch thu được so với dung dịch ban đầu là",
        "options": {
          "A": "không thay đổi.",
          "B": "giảm xuống.",
          "C": "tăng lên sau đó giảm xuống.",
          "D": "tăng lên."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 41,
        "qnum": 41
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 1,
        "prompt": "Phát biểu nào sau đây về thứ tự điện phân trong dung dịch của các ion kim loại ở điện cực là\nđúng?",
        "options": {
          "A": "Ion kim loại ứng với thế điện cực chuẩn dương hơn sẽ được điện phân trước ở cực âm.",
          "B": "Ion kim loại ứng với thế điện cực chuẩn âm hơn sẽ được điện phân trước ở cực âm.",
          "C": "Ion kim loại ứng với thế điện cực chuẩn dương hơn sẽ được điện phân trước ở cực dương.",
          "D": "Ion kim loại ứng với thế điện cực chuẩn âm hơn sẽ được điện phân trước ở cực dương."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 42,
        "qnum": 42
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 2,
        "prompt": "Nhận xét nào sau đây đúng về quá trình điện phân ở hai điện cực?",
        "options": {
          "A": "Cation nhường electron ở cathode",
          "B": "Anion nhận electron ở anode",
          "C": "Sự oxi hóa xảy ra ở anion",
          "D": "Sự oxi hóa xảy ra ở cathode."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 43,
        "qnum": 43
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 3,
        "prompt": "Khi điện phân dung dịch NaCl (điện cực trơ) thì",
        "options": {
          "A": "Ở cực âm xảy ra quá trình oxi hóa H O à ở cực dương xảy ra quá trình khử ion Cl-",
          "B": "Ở cực dương xảy ra quá trình oxi hóa ion Na+ à ở cực âm xảy ra quá trình khử ion Cl-.",
          "C": "Ở cực âm xảy ra quá trình khử H O à ở cực dương xảy ra quá trình oxi hóa ion Cl-.",
          "D": "Ở cực âm xảy ra quá trình khử ion Na+ à ở cực dương xảy ra quá trình oxi hóa ion Cl-."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 44,
        "qnum": 44
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 4,
        "prompt": "{ SGK – CTST } Điện phân dung dịch Cu(NO ) với điện cực trơ, ở anode xảy ra quá trình\n3 2\nnào ?",
        "options": {
          "A": "H O ⟶ ½ O + 2H+ + 2e.",
          "B": "2H O + 2e ⟶ H + 2OH<sup>−</sup>.\n2 2 2 2",
          "C": "Cu ⟶ Cu2+ + 2e.",
          "D": "Cu2+ + 2e ⟶ Cu."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 45,
        "qnum": 45
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 5,
        "prompt": "{ SBT – CTST } Tiến hành điện phân dung dịch NaCl bằng điện cực trơ, thu được một khí Y\nduy nhất. Điều khẳng định nào sau đây là đúng?",
        "options": {
          "A": "Y là khí oxygen.",
          "B": "Y là khí chlorine.",
          "C": "Y là khí hydrogen.",
          "D": "Có dùng màng ngăn"
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 46,
        "qnum": 46
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 6,
        "prompt": "{ SBT – KNTT } Trong công nghiệp, quá trình điện phân dung dịch NaCl bão hòa (điện cực\ntrơ, có màng ngăn xốp) tạo ra khí nào sau đây ở cathode?",
        "options": {
          "A": "Hydrogen.",
          "B": "Chlorine.",
          "C": "Oxygen.",
          "D": "Hydrogen chloride."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 47,
        "qnum": 47
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 7,
        "prompt": "{ SBT – KNTT } Điện phân dung dịch chất nào sau đây (với điện cực trơ, không có màng\nngăn điện cực), thu được dung dịch có khả năng tẩy màu?",
        "options": {
          "A": "CuSO .",
          "B": "NaCl.",
          "C": "K SO .",
          "D": "AgNO .\n4 2 4 3"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 48,
        "qnum": 48
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 8,
        "prompt": "{ SBT – KNTT } Ion kim loại nào sau đây bị điện phân trong dung dịch (với điện cực graphite)?",
        "options": {
          "A": "Na+.",
          "B": "Cu2+.",
          "C": "Ca2+.",
          "D": "K+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 49,
        "qnum": 49
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 9,
        "prompt": "{ SBT – KNTT } Ion halide hầu như không bị điện phân trong dung dịch là",
        "options": {
          "A": "Br–.",
          "B": "I–.",
          "C": "F–.",
          "D": "Cl–."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 50,
        "qnum": 50
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 10,
        "prompt": "{ SBT – KNTT } Trong quá trình điện phân dung dịch CuSO với anode bằng graphite, ở\n\nanode xảy ra quá trình",
        "options": {
          "A": "2H O ⟶ 4H+ + O + 4e.",
          "B": "2H O + 2e ⟶ 2H + OH– .\n2 2 2 2",
          "C": "Cu2+ + 2e ⟶ Cu.",
          "D": "Cu ⟶ Cu2++ 2e."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 51,
        "qnum": 51
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 11,
        "prompt": "{ SBT – KNTT } Xét quá trình điện phân dung dịch NaCl 20% bằng dòng điện một chiều\n(với điện cực trơ, có màng ngăn xốp). Quá trình khử xảy ra ở cathode là",
        "options": {
          "A": "2H O + 2e ⟶ H + 2OH–.",
          "B": "Cl + 2e ⟶ 2Cl–.\n2 2 2",
          "C": "2Cl–⟶ Cl + 2e.",
          "D": "H O ⟶ 2H+ + ½O + 2e\n2 2 2"
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 52,
        "qnum": 52
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 12,
        "prompt": "Khi điện phân dung dịch NaCl có màng ngăn, các chất được tạo ra ở anode (cực dương) và\ncathode (cực âm) lần lượt là",
        "options": {
          "A": "Cl và NaOH, H .",
          "B": "Na và Cl .",
          "C": "Cl và Na.",
          "D": "NaOH và H .\n2 2 2 2 2"
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 53,
        "qnum": 53
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 13,
        "prompt": "Khi điện phân dung dịch CuSO , ion nào sẽ điện phân đầu tiên ở cathode?",
        "options": {
          "A": "Cu2+.",
          "B": "H+ (của nước).",
          "C": "SO 2-.",
          "D": "OH<sup>−</sup> (của\n\nnước)."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 54,
        "qnum": 54
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 14,
        "prompt": "Trong quá trình điện phân dung dịch NaCl (điện cực trơ), ở cathode xảy ra",
        "options": {
          "A": "Sự oxi hóa cation Na+.",
          "B": "Sự oxi hóa phân tử H O.",
          "C": "Sự khử phân tử H O.",
          "D": "Sự khử cation Na+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 55,
        "qnum": 55
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 15,
        "prompt": "Sản phẩm thu được khi điện phân dung dịch KCl (điện cực trơ, có màng ngăn) gồm",
        "options": {
          "A": "K và Cl .",
          "B": "K, H và Cl .",
          "C": "KOH, H và Cl .\n2 2 2 2 2",
          "D": "KOH, O và HCl."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 56,
        "qnum": 56
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 16,
        "prompt": "Khi điện phân dung dịch NaCl với điện cực trơ, không có màng ngăn xốp, dung dịch thu\nđược chứa chất nào sau đây?",
        "options": {
          "A": "Chỉ chứa NaOH.",
          "B": "Nước Javel.",
          "C": "Chỉ chứa NaCl.",
          "D": "Chỉ chứa NaClO."
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 57,
        "qnum": 57
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 17,
        "prompt": "Điện phân dung dịch nào sau đây sẽ có khí thoát ra ở 2 điện cực (ngay lúc bắt đầu điện phân)?",
        "options": {
          "A": "Cu(NO ) .",
          "B": "FeCl .",
          "C": "K SO .",
          "D": "FeSO\n3 2 2 2 4 4"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 58,
        "qnum": 58
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 18,
        "prompt": "Khi điện phân dung dịch nào sau đây, tại anode xảy ra quá trình oxi hóa nước?",
        "options": {
          "A": "ZnCl<sub>2</sub>.",
          "B": "CuCl .",
          "C": "AgNO .",
          "D": "MgCl .\n2 3 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 59,
        "qnum": 59
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 19,
        "prompt": "Điện phân dung dịch CuCl với điện cực trơ. Nồng độ của CuCl trong dung dịch\n2 2",
        "options": {
          "A": "Giảm dần.",
          "B": "Tăng dần",
          "C": "Không thay đổi.",
          "D": "Tăng lên rồi giảm xuống"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 60,
        "qnum": 60
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 20,
        "prompt": "{ SBT – KNTT } Phương trình hóa học nào sau đây biểu diễn quá trình điều chế kim loại\nbằng phương pháp điện phân nóng chảy?",
        "options": {
          "A": "CaCl ⟶ Ca + Cl",
          "B": "Fe O + 3CO ⟶ 2Fe + 3CO\n2 2. 2 3 2",
          "C": "Mg + CuSO ⟶ MgSO + Cu.",
          "D": "2NaCl + 2H O ⟶ 2NaOH + H + Cl .\n4 4 2 2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 61,
        "qnum": 61
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 21,
        "prompt": "Khi điện phân nóng chảy CaCl nóng chảy (điện cực trơ), ở anode xảy ra",
        "options": {
          "A": "Sự khử ion Cl-.",
          "B": "Sự khử ion Ca2+.",
          "C": "Sự oxi hóa ion Ca2+.",
          "D": "Sự oxi hóa ion Cl-."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 62,
        "qnum": 62
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 22,
        "prompt": "Khi điện phân NaCl nóng chảy (điện cực trơ), ở cathode thu được chất nào sau đây?",
        "options": {
          "A": "HCl.",
          "B": "Cl .",
          "C": "Na.",
          "D": "NaOH"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 63,
        "qnum": 63
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 23,
        "prompt": "Điện phân với điện cực trơ, có màng ngăn giữa 2 điện cực các dung dịch sau: NaCl, AgNO ,\n\nKNO ,CuCl , CuSO ZnCl . Số dung dịch sau điện phân hoàn toàn có khả năng hòa tan Al O là\n3 2 4, 2 2 3",
        "options": {
          "A": "Cu(NO ) .",
          "B": "FeCl .",
          "C": "K SO .",
          "D": "FeSO .\n3 2 2 2 4 4"
        },
        "answer": "A",
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 64,
        "qnum": 64
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 27,
        "prompt": "Khi điện phân dung dịch nào sau đây, tại anode xảy ra quá trình oxi hóa nước?",
        "options": {
          "A": "ZnCl .",
          "B": "CuCl .",
          "C": "AgNO .",
          "D": "MgCl\n2 2 3 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 65,
        "qnum": 65
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 28,
        "prompt": "Điều khẳng định nào sau đây là đúng khi điện phân hỗn hợp dung dịch Cu(NO ) , AgNO\n3 2 3",
        "options": {
          "A": "Tại cathode xảy ra quá trình khử Cu2+ trước .",
          "B": "Khối lượng dung dịch giảm là khối lượng của kim loại thoát ra bám vào cathode",
          "C": "Ngay từ đầu đã có khí thoát ra ở cathode",
          "D": "Tại anode xảy ra quá trình oxi hóa H O"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 66,
        "qnum": 66
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 29,
        "prompt": "Điện phân điện cực trơ, có màng ngăn một dung dịch chứa các ion: Fe2+, Fe3+, Cu2+, Cl- .\nThứ tự điện phân xảy ra ở cathode là",
        "options": {
          "A": "Fe2+, Fe3+, Cu2+.",
          "B": "Fe2+, Cu2+, Fe3+.",
          "C": "Fe3+, Cu2+, Fe2+.",
          "D": "Fe3+, Fe2+,\nCu2+."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 67,
        "qnum": 67
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 30,
        "prompt": "Dung dịch X chứa hỗn hợp các muối: NaCl, CuCl , FeCl và ZnCl . Kim loại tách ra đầu\n2 3 2\ntiên ở cathode khi điện phân dung dịch là",
        "options": {
          "A": "Fe.",
          "B": "Cu.",
          "C": "Zn.",
          "D": "Na"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 68,
        "qnum": 68
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 31,
        "prompt": "Điện phân với điện cực trơ, có màng ngăn các dung dịch sau: KCl, CuSO , AgNO , CuCl ,\n4 3 2\nMgCl , NiSO , ZnCl . Số dung dịch sau điện phân có pH < 7 là\n2 4 2",
        "options": {
          "A": "",
          "B": "3.",
          "C": "4.",
          "D": "5."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 69,
        "qnum": 69
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 32,
        "prompt": "{ SBT – KNTT } Trong công nghiệp, phương pháp điện phân dung dịch được sử dụng để\nsản xuất một lượng đáng kể kim loại nào sau đây?",
        "options": {
          "A": "Zn.",
          "B": "Al.",
          "C": "Fe.",
          "D": "Mg."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 70,
        "qnum": 70
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 33,
        "prompt": "{ SBT – KNTT } Trong quá trình mạ bạc cho một chiếc vòng bằng thép thì ở anode xảy ra\nquá trình",
        "options": {
          "A": "Ag ⟶ Ag+ + 1e.",
          "B": "Fe ⟶ Fe2+ + 2e.",
          "C": "2H O ⟶ 4H+ + O + 4e.",
          "D": "C ⟶ C4+ + 4e.\n2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 71,
        "qnum": 71
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 34,
        "prompt": "{ SBT – KNTT } Trong công nghiệp, việc tinh chế đồng từ đồng thô được thực hiện bằng\nphương pháp điện phân dung dịch với anode làm bằng",
        "options": {
          "A": "graphite.",
          "B": "platinum.",
          "C": "thép.",
          "D": "đồng thô."
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 72,
        "qnum": 72
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 35,
        "prompt": "{ SBT – KNTT } Khi điện phân dung dịch CuSO bằng dòng điện một chiều (với điện cực\n\nanode bằng Cu) thì ở anode xảy ra quá trình",
        "options": {
          "A": "oxi hoá H O thành H+ và O .",
          "B": "khử Cu2+ thành Cu.\n2 2",
          "C": "oxi hoá Cu thành Cu2+.",
          "D": "khử H O thành H và OH–.\n2 2"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 73,
        "qnum": 73
      },
      {
        "type": "mcq",
        "part": 1,
        "orig_qnum": 36,
        "prompt": "{ SBT – CTST } Điện phân dung dịch CuSO với anode bằng đồng (anode tan) và điện phân\n\ndung dịch CuSO với anode bằng graphite (điện cực trơ) đều có đặc điểm chung là",
        "options": {
          "A": "Ở cathode xảy ra sự oxi hóa: 2H O + 2e ⟶ 2OH– +H .\n2 2",
          "B": "Ở anode xảy ra sự khử: 2H O ⟶ O + 4H+ + 4e.\n2 2",
          "C": "Ở anode xảy ra sự oxi hóa: Cu ⟶ Cu2+ + 2e",
          "D": "Ở cathode xảy ra sự khử: Cu2+ ⟶ Cu + 2e"
        },
        "answer": "A",
        "figure": null,
        "explanation": "Áp dụng quy tắc điện cực và dãy điện hóa. Chọn đáp án <b>A</b>.",
        "id": 74,
        "qnum": 74
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 42,
        "prompt": "Mỗi phát biểu sau là đúng hay sai?",
        "items": {
          "a": "Trong bình điện phân, anode là điện cực dương, cathode là điện cực âm. Ngược lại, trong pin\nGalvani, anode là điện cực âm và cathode là điện cực dương.",
          "b": "Trong cả bình điện phân và pin Galvani, phản ứng oxi hoá – khử được sử dụng để chuyển đổi\nhoá năng thành điện năng.",
          "c": "Trong bình điện phân, ion được trao đổi electron tại cả hai điện cực. Còn trong pin Galvani, ion\nchỉ trao đổi electron ở cathode.",
          "d": "Pin Galvani sinh ra dòng điện còn bình điện phân cần dẫn dòng điện từ bên ngoài vào để quá\ntrình điện phân xảy ra."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 75,
        "qnum": 1
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 43,
        "prompt": "Tiến hành điện phân NaCl nóng chảy với anode bằng than chì và cathode bằng Fe.",
        "items": {
          "a": "Tại anode xảy ra quá trình oxi hóa ion Cl– thành khí Cl .",
          "b": "Tại cathode xảy ra quá trình khử ion Na+ thành kim loại Na.",
          "c": "Sodium có khối lượng riêng nhỏ hơn khối hượng riêng của sodium chloride.",
          "d": "Phản ứng điện phân sodium chloride để điều chế kim loại Na xảy ra ở nhiệt độ thường."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 76,
        "qnum": 2
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 44,
        "prompt": "(SBT – KNTT) Trong quá trình điện phân dung dịch CuSO với anode bằng copper (Cu).",
        "items": {
          "a": "Ở anode xảy ra quá trình oxi hoá nước.",
          "b": "Khối lượng anode không thay đổi.",
          "c": "Nồng độ CuSO trong dung dịch giảm dần.",
          "d": "Khối lượng cathode tăng."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 77,
        "qnum": 3
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 45,
        "prompt": "Điện phân dung dịch CuSO với hai cực đều làm bằng than chì.",
        "items": {
          "a": "Tại anode xảy ra phản ứng oxi hoá ion SO 2–(aq) và tạo thành khí O .\n4 2",
          "b": "Tại cathode xảy ra bán phản ứng khử ion Cu2+(aq) thành Cu.",
          "c": "Phản ứng chung trong bình điện phân: 2Cu2+(aq) + 2H O(l) &rarr; 2Cu(s) + O (g) + 4H+(aq).\n2 2",
          "d": "Màu xanh của dung dịch nhạt dần trong quá trình điện phân."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 78,
        "qnum": 4
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 46,
        "prompt": "Dung dịch NaOH được điều chế bằng cách điện phân dung dịch NaCl bão hòa, với điện cực\ntrơ, có màng ngăn xốp.",
        "items": {
          "a": "Ở cathode, ion Na+ bị khử thành kim loại Na, sau đó tác dụng với nước tạo thành NaOH.",
          "b": "Anode là cực âm và ở anode xảy ra quá trình oxi hóa Cl– thành Cl .",
          "c": "Màng ngăn có tác dụng không cho khí Cl mới sinh ra tiếp xúc và phản ứng với NaOH.",
          "d": "Nếu không có màng ngăn thì trong quá trình điện phân sẽ không có khí thoát ra."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 79,
        "qnum": 5
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 47,
        "prompt": "Điện phân dung dịch NaCl có màng bán thấm ngăn giữa anode với cathode (các điện cực đều\nlà các điện cực trơ). Màng bán thấm chỉ cho ion Na+ đi qua.",
        "items": {
          "a": "Tại cực dương xảy ra bán phản ứng khử ion Cl–(aq) thành khí Cl .",
          "b": "Tại cực âm xảy ra bán phản ứng oxi hóa H O thành khí H và OH–.\n2 2",
          "c": "Phản ứng chung trong bình điện phân là 2NaCl + 2H O &rarr; 2NaOH + H + Cl .\n2 2 2",
          "d": "Lượng (số mol) Na+ trong dung dịch không đổi trong quá trình điện phân."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": "assets/images/quiz/chem_ch5/chem_cd1_p2_q36_pin_mang_ban_tham.png",
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 80,
        "qnum": 6
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 48,
        "prompt": "(SBT – KNTT) Điện phân dung dịch NaCl bão hoà (với điện cực trơ, màng ngăn xốp) đến\nkhi nồng độ NaCl giảm đi một nửa thì dừng điện phân.",
        "items": {
          "a": "Dung dịch sau điện phân làm phenolphthalein chuyển màu hồng.",
          "b": "Ở cathode chỉ xảy ra quá trình khử ion Na+.",
          "c": "Số mol khí Cl thoát ra ở anode bằng số mol H thoát ra ở cathode.\n2 2",
          "d": "Thứ tự điện phân ở anode là H O, Cl–."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 81,
        "qnum": 7
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 49,
        "prompt": "(HTHH 12 – KNTT) Xét quá trình điện phân nóng chảy hỗn hợp aluminium oxide và cryolite\nvới các điện cực than chì để sản xuất aluminium (Al) trong công nghiệp.",
        "items": {
          "a": "Tại anode xảy ra quá trình oxi hoá: 2O<sub>2</sub>–\n\n &rarr; O + 4e.",
          "b": "Cryolite làm tăng độ dẫn điện của chất điện li nóng chảy.",
          "c": "Điện cực anode bị tiêu hao trong quá trình điện phân.",
          "d": "Al lỏng tạo thành nổi lên trên chất điện li nóng chảy."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 82,
        "qnum": 8
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 44,
        "prompt": "Điện phân các dung dịch chất điện li trong nước với các điện cực trơ. Cho các phát biểu sau:",
        "items": {},
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 83,
        "qnum": 9
      },
      {
        "type": "tf",
        "part": 2,
        "orig_qnum": 48,
        "prompt": "Điện phân dung dịch CuSO với hai cực đều làm bằng than chì (hình bên).",
        "items": {
          "a": "Tại anode xảy ra phản ứng oxi hoá ion\n\nS O 24 − (aq) và tạo thành khí O",
          "b": "Tại cathode xảy ra bán phản ứng khử ion Cu2+(aq) thành Cu.",
          "c": "Phản ứng chung trong bình điện phân là: 2Cu2+(aq) + 2H O(l) &rarr; 2Cu(s) + O (g) + 4H+(aq).\n2 2",
          "d": "Màu xanh của dung dịch nhạt dần trong quá trình điện phân."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "figure": null,
        "explanation": "Kiểm tra từng phát biểu dựa theo tính chất hóa học và quy tắc điện phân/thế điện cực.",
        "id": 84,
        "qnum": 10
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 37,
        "prompt": "Điện phân với điện cực trơ, có màng ngăn các dung dịch sau: KCl, CuSO , AgNO , CuCl ,\n4 3 2\nMgCl , NiSO , ZnCl . Số dung dịch sau điện phân có pH < 7 là bao nhiêu?\n2 4 2",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 85,
        "qnum": 1
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 38,
        "prompt": "Điện phân với điện cực trơ, có màng ngăn giữa 2 điện cực các dung dịch sau: NaCl, AgNO ,\n\nKNO , CuCl , CuSO , ZnCl . Số dung dịch sau khi điện phân hoàn toàn có khả năng hoà tan Al O là\n3 2 4 2 2 3\nbao nhiêu?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 86,
        "qnum": 2
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 39,
        "prompt": "(SBT – CTST) Điện phân với điện cực trơ, có màng ngăn những dung dịch sau: NaCl, CuSO ,\n\nK SO , AgNO , CuCl . Số dung dịch sau điện phân có pH < 7 là bao nhiêu?\n2 4 3 2",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 87,
        "qnum": 3
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 40,
        "prompt": "(Đề THPT QG - 2017) Cho các kim loại sau: K, Ba, Cu và Ag. Số kim loại điều chế được\nbằng phương pháp điện phân dung dịch (điện cực trơ) là bao nhiêu?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 88,
        "qnum": 4
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 41,
        "prompt": "Cho dãy các cation: Na+, Mg2+, Ag+ và Cu2+. Số cation bị điện phân trong dung dịch khi sử\ndụng điện cực graphite là bao nhiêu?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 89,
        "qnum": 5
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 42,
        "prompt": "Điện phân dung dịch nước của hỗn hợp các chất Cu(NO ) , AgNO , Hg (NO ) và Mg(NO )\n3 2 3 2 3 2 3 2\nvới điện cực trơ. Các chất đều có nồng độ 1 M. Sau khi quá trình điện phân kết thúc, số kim loại được\ngiải phóng ở cathode là bao nhiêu?",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 90,
        "qnum": 6
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 43,
        "prompt": "Cho các phản ứng sau:\n CuCl (aq) &rarr; Cu(s) + Cl (g);\n2 2\n 2NaCl(aq) + 2H O(l) &rarr; 2NaOH(aq) + H (g) + Cl (g);\n2 2 2\n H (g) + Cl (g) &rarr; 2HCl(g);\n2 2\n 2CuSO (aq) + 2H O(l) &rarr; 2Cu(s) + 2H SO (aq) + O (g);\n4 2 2 4 2\n\n4Al(s) + 3O (g) &rarr; 2Al O (s).\n2 2 3\nSố phản ứng xảy ra trong bình điện phân là bao nhiêu?",
        "answer": "1",
        "acceptedAnswers": [
          "1",
          "1"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>1</b>.",
        "id": 91,
        "qnum": 7
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 45,
        "prompt": "Cho các quá trình sau:\n Cu2+(aq) + 2e\n\n &rarr; Cu(s); 2Al(s) + 3H O(l)\n\n &rarr; Al O (s) + 6H+(aq) + 6e;\n2 3\n 2H O(l) + 2e\n\n &rarr; H (g) + 2OH–(aq); 2H O(l)\n2 2\n &rarr; O (g) + 4H+(aq) + 4e;\n\n 2Cl–(aq)  &rarr; Cl (g) + 2e; 2H+(aq) + 2e\n\n &rarr; H (g).\n\nSố quá trình xảy ra tại cathode trong quá trình điện phân là bao nhiêu?",
        "answer": "1",
        "acceptedAnswers": [
          "1",
          "1"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>1</b>.",
        "id": 92,
        "qnum": 8
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 46,
        "prompt": "Quá trình điện phân NaCl nóng chảy được tiến hành\ntheo hai bước như sau:\nBước 1: Nung NaCl trong bình đến nóng chảy, thu được chất\nlỏng có khả năng dẫn điện.\nBước 2: Nhúng hai điện cực than chì vào bình đựng NaCl\nnóng chảy rồi nối chúng với hai cực của nguồn điện một\nchiều (khoảng 7 V).\nCho các phát biểu sau liên quan đến quá trình trên:\na) Ở anode xảy ra quá trình khử, tại cathode xảy ra quá\ntrình oxi hóa) Cathode là điện cực âm, anode là cực dương.\nb) Ở anode xảy ra quá trình oxi hóa, tại cathode xảy ra\nquá trình khử. Cathode là điện cực dương, anode là cực âm.\nc) Phản ứng oxi hóa – khử xảy ra trong quá trình điện phân NaCl nóng chảy là phản ứng xảy ra\nnhờ tác động của điện năng.\nd) Trong quá trình điện phân, các ion âm sẽ di chuyển về cathode.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 93,
        "qnum": 9
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 47,
        "prompt": "Điện phân dung dịch NaCl có màng bán thẩm ngăn giữa anode với cathode (các điện cực đều\nlà các điện cực trơ). Màng bán thẩm chỉ cho ion Na+ đi qua. Sơ đồ bình điện phân như hình sau:\na) Tại cực dương xảy ra bán phản ứng khử ion Cl-(aq) thành khí Cl .\n\nb) Tại cực âm xảy ra bán phản ứng oxi hoá H O thành khí H và OH−.\n2 2\nc) Phản ứng chung trong bình điện phân là 2NaCl + 2H O &rarr; 2NaOH + H + Cl .\n2 2 2\nd) Lượng (số mol) Na+ trong dung dịch không đổi trong quá trình điện phân.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 94,
        "qnum": 10
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 49,
        "prompt": "Trong công nghiệp, nhôm được sản xuất từ quặng bauxite theo hai giai đoạn chính:\nGiai đoạn 1: Tinh chế quặng bauxite.\nGiai đoạn 2: Điện phân Al O nóng chảy.\n2 3\na) Tại cathode xảy ra quá trình khử Al3+, tại anode xảy ra quá trình oxi hóa ion O 2 - .\nb) Thành phần chính của quặng bauxite là Al O .2H O.\n2 3 2\nc) Có thể thay điện cực than chì bằng điện cực Ag hoặc Cu để dẫn điện tốt hơn.\nd) Cryolite có công thức 3NaF.AlF .",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 95,
        "qnum": 11
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 50,
        "prompt": "Trong công nghiệp, sản xuất aluminium từ quặng bauxite theo sơ đồ sau:\na) Thu được aluminium tại điện cực dương.\nb) Sau quá trình điện phân, cực dương bằng than chì bị ăn mòn.\nc) Cryolite có vai trò chính là hạ nhiệt độ nóng chảy của aluminium oxide.\nd) Để thu được 2 tấn Al tinh khiết thì cần 5,95 tấn quặng bauxite chứa 40% Al O về khối lượng.\n2 3\nVới hiệu suất cả quá trình là 80% .",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 96,
        "qnum": 12
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 51,
        "prompt": "(SBT – CD). Điện phân dung dịch NaCl có màng ngăn với cường độ dòng điện 10A trong 2\ngiờ. Tính khối lượng dung dịch giảm sau khi điện phân, giả thiết chỉ có phản ứng điện phân dung dịch\nNaCl, bỏ qua lượng nước bay hơi. Cho biết các công thức:\nQn.FI.t, trong đó: Q là điện lượng (C),n là số mol electron đi qua dây dẫn,\n\nI là cường độ dòng\nđiện A ) , t là thời gian (giây), F là hằng số Faraday\n\n96500C\nmol−1\n.",
        "answer": "26.856",
        "acceptedAnswers": [
          "26.856",
          "26,856"
        ],
        "figure": "assets/images/quiz/chem_ch5/chem_dien_phan_nacl_mang_ngan.png",
        "explanation": "Giá trị tính toán được: <b>26.856</b>.",
        "id": 97,
        "qnum": 13
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 52,
        "prompt": "(SBT – KNTT). Để mạ 5,0 g bạc lên một đĩa sắt khi điện phân dung dịch chứa ion\n[Ag(NH ) ]+ với dòng điện có cường độ 1,5 A không đổi cần thời gian t phút.\n3 2\nCho biết:\n- Quá trình khử tại cathode: [Ag(NH ) ]+ + le &rarr; Ag + 2NH .\n3 2 3\n- Điện lượng q = It = n .F, F = 96 500 C/mol.\ne\nGiá trị của t là bao nhiêu? (Làm tròn kết quả đến phần mười).",
        "answer": "49.6",
        "acceptedAnswers": [
          "49.6",
          "49,6"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>49.6</b>.",
        "id": 98,
        "qnum": 14
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 53,
        "prompt": "(SBT – KNTT). Tiến hành điện phân dung dịch CuSO với anode bằng đồng. Để hoà tan 100\n\ng đồng ở anode trong 8 giờ thì cần cường độ dòng điện bằng bao nhiêu ampe? (Làm tròn kết quả đến\nphần mười).",
        "answer": "10.5",
        "acceptedAnswers": [
          "10.5",
          "10,5"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>10.5</b>.",
        "id": 99,
        "qnum": 15
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 54,
        "prompt": "Điện phân dung dịch AuCl₃ để mạ vàng lên một vật kim loại. Nếu dòng điện có cường độ 0.5\nA chạy qua dung dịch trong 3 giờ, khối lượng vàng được mạ lên vật là bao nhiêu? (Cho biết khối lượng\nmol của Au = 197 g/mol, Faraday F = 96500 C/mol) (kết quả làm tròn đến hàng phần trăm)\no Đáp án: 3.67 g",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 100,
        "qnum": 16
      },
      {
        "type": "sa",
        "part": 3,
        "orig_qnum": 55,
        "prompt": "Nghiên cứu ảnh hưởng của hiệu điện thế đến phản ứng điện phân, một nhóm học sinh cho\nrằng, dòng điện có hiệu điện thế càng lớn thì tổng khối lượng chất rắn và chất khí sau điện phân càng\nlớn. Để thực hiện điểu đó, nhóm học sinh tiển hành như sau:\nBước 1: Lấy cốc thể tích 100 mL, thêm vào đó 2,5 gam và thêm nước vào cho đến khi\nthể tích dung dịch là 25 mL.\nBược 2: Thêm tiếp dung dịch vào dung dịch cho đến khi thể tích dung dịch đạt 40 mL. Đem\ncân toàn bộ cốc thì thấy khối lượng là gam.\nBước 3: Lấy hai điện cực than chì, nhúng vào dung dịch trong cốc (hai điện cực không tiếp xúc với\nnhau) và nối một điện cực với cực dương và nối một điện cực với cực âm của pin điện 2 V.\nBước 4: Thực hiện điện phân trong khoảng thời gian 10 phút, sau đó lấy hai điện cực ra và đem cân\nlại cốc đựng dung dịch sau điện phân thì khối lượng cốc là gam.\nLặp lại thí nghiệm khi thay dò̀ng điện 2 V bằng các dòng điện . Kết quả thí nghiệm:\nHiệu điện thế 2 4 6 8\n(V)\n1,5 1,2 1,0 0,8\na) Các quá trình khử ion Cu2+ thành Cu và khử ion H+ thành H xảy ra tại điện cực than chì nối với\n\ncực âm.\nb) Quá trình oxi hóa tạo thành khí và ion xảy ra tại điện cực than chì nối với cực dương.\nc) Sự chênh lệch khối lượng trước và sau điện phân đúng bằng khối lượng chất trong dung dịch đã\nđiện phân.\nd) Kết quả thí nghiệm chứng tỏ nhận định ban đầu của nhóm học sinh là sai.",
        "answer": "0",
        "acceptedAnswers": [
          "0",
          "0"
        ],
        "figure": null,
        "explanation": "Giá trị tính toán được: <b>0</b>.",
        "id": 101,
        "qnum": 17
      }
    ]
  }
};

if (typeof window.CHEM_ALL_EXAMS_DATA !== 'undefined') {
  Object.assign(window.CHEM_ALL_EXAMS_DATA, window.CHEM_CH5_EXAMS_DATA);
}

/**
 * CHUYÊN ĐỀ 2: KHÍ LÍ TƯỞNG (CHỦ ĐỀ 1: MÔ HÌNH ĐỘNG HỌC PHÂN TỬ CHẤT KHÍ)
 * VẬT LÍ 12 — CHƯƠNG TRÌNH MỚI
 * Gồm 3 bộ đề con (Tổng cộng 101 câu hỏi):
 *   1. ly_cd2_luyentap (Đề 5): Bài tập luyện tập (28 câu: 18 ABCD + 4 Đ/S + 6 TLN)
 *   2. ly_cd2_tuluyen  (Đề 6): Bài tập tự luyện  (28 câu: 18 ABCD + 4 Đ/S + 6 TLN)
 *   3. ly_cd2_mucdo    (Đề 7): Bài tập theo mức độ (45 câu: 30 ABCD + 7 Đ/S + 8 TLN)
 * Kèm lời giải chi tiết KaTeX chuẩn đẹp, hình vẽ minh họa sắc nét và đáp án chính xác 100%.
 */

(function() {
  if (!window.PHYS_EXAMS_DATA) {
    window.PHYS_EXAMS_DATA = {};
  }

  const CD2_EXAMS = {
  "ly_cd2_luyentap": {
    "code": "ly_cd2_luyentap",
    "num": 5,
    "group": "khilituong",
    "title": "CHUYÊN ĐỀ 2: BÀI TẬP LUYỆN TẬP — MÔ HÌNH ĐỘNG HỌC PHÂN TỬ CHẤT KHÍ",
    "shortTitle": "CĐ2: Luyện tập (28 câu)",
    "subtitle": "Vật lí 12 • 18 câu ABCD • 4 câu Đúng/Sai • 6 câu Trả lời ngắn",
    "questions": [
      {
        "id": 1,
        "part": 1,
        "qnum": 1,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 1",
        "topic": "Khí lí tưởng",
        "figure": "assets/images/quiz/phys/phys_cd2_box_gas.png",
        "question": "Câu nào sau đây nói về các phân tử khí lí tưởng là <b>không đúng</b>?",
        "options": {
          "A": "Có lực tương tác không đáng kể khi chưa va chạm.",
          "B": "Có thể tích riêng không đáng kể so với thể tích bình chứa.",
          "C": "Có khối lượng xác định.",
          "D": "Có khối lượng không đáng kể (có thể bỏ qua)."
        },
        "answer": "D",
        "explanation": "Theo mô hình khí lí tưởng:<br>• Các phân tử khí được coi là các <b>chất điểm</b> (thể tích riêng của các phân tử có thể bỏ qua so với thể tích bình chứa).<br>• Khi chưa va chạm, lực tương tác giữa các phân tử rất yếu nên có thể bỏ qua.<br>• Tuy nhiên, <b>mỗi phân tử khí luôn có khối lượng xác định</b>, không thể bỏ qua khối lượng của chúng (vì khi va chạm với thành bình, các phân tử truyền động lượng p = mv gây ra áp suất lên thành bình). Do đó, phát biểu 'khối lượng không đáng kể' là <b>không đúng</b>.<br>⟶ Chọn <b>D</b>.",
        "prompt": "Câu nào sau đây nói về các phân tử khí lí tưởng là <b>không đúng</b>?"
      },
      {
        "id": 2,
        "part": 1,
        "qnum": 2,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 2",
        "topic": "Cấu tạo chất khí",
        "figure": "assets/images/quiz/phys/phys_cd2_balloons.png",
        "question": "Tại sao những quả bóng bay khi để lâu ngày vẫn bị xẹp mặc dù đã được buộc thật chặt?",
        "options": {
          "A": "Vì khi mới thổi, không khí từ miệng vào bóng còn nóng, sau đó lạnh dần nên co lại.",
          "B": "Vì giữa các phân tử của chất làm vỏ bóng có khoảng cách nên các phân tử không khí có thể khuếch tán qua đó thoát ra ngoài.",
          "C": "Vì cao su là chất đàn hồi nên sau khi bị thổi căng nó tự động co lại.",
          "D": "Vì không khí nhẹ nên có thể thẩm thấu qua chỗ nút buộc ra ngoài."
        },
        "answer": "B",
        "explanation": "Chất làm vỏ bóng (cao su, màng polyme) được cấu tạo từ các phân tử và giữa các phân tử này có <b>khoảng cách</b>. Các phân tử khí trong bóng chuyển động nhiệt hỗn loạn không ngừng nên có thể chui lọt qua các khoảng cách đó để khuếch tán ra ngoài môi trường, làm bóng xẹp dần theo thời gian.<br>⟶ Chọn <b>B</b>.",
        "prompt": "Tại sao những quả bóng bay khi để lâu ngày vẫn bị xẹp mặc dù đã được buộc thật chặt?"
      },
      {
        "id": 3,
        "part": 1,
        "qnum": 3,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 3",
        "topic": "Tính chất khí lí tưởng",
        "figure": null,
        "question": "Các phân tử khí lí tưởng có các tính chất nào sau đây?",
        "options": {
          "A": "Được coi như chất điểm, chuyển động không ngừng, tương tác hút hoặc đẩy liên tục với nhau.",
          "B": "Được coi như chất điểm, chuyển động hỗn loạn không ngừng và chỉ tương tác khi va chạm.",
          "C": "Được coi như chất điểm, đứng yên tại các vị trí cân bằng cố định.",
          "D": "Có kích thước lớn, chuyển động không ngừng, tương tác hút hoặc đẩy với nhau."
        },
        "answer": "B",
        "explanation": "Trong mô hình khí lí tưởng, các phân tử khí được coi là các <b>chất điểm</b>, chuyển động hỗn loạn không ngừng; khi chưa va chạm lực tương tác giữa chúng rất yếu (coi như không tương tác), chúng chỉ tương tác với nhau và với thành bình khi xảy ra va chạm.<br>⟶ Chọn <b>B</b>.",
        "prompt": "Các phân tử khí lí tưởng có các tính chất nào sau đây?"
      },
      {
        "id": 4,
        "part": 1,
        "qnum": 4,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 4",
        "topic": "Mô hình động học phân tử",
        "figure": null,
        "question": "Khi đun nóng khối khí trong một bình kín thì các phân tử khí sẽ",
        "options": {
          "A": "xích lại gần nhau hơn.",
          "B": "nở to ra hơn.",
          "C": "có tốc độ chuyển động trung bình lớn hơn.",
          "D": "liên kết lại chặt chẽ với nhau."
        },
        "answer": "C",
        "explanation": "Theo thuyết động học phân tử, nhiệt độ của chất khí tỉ lệ thuận với động năng tịnh tiến trung bình của các phân tử: E<sub>d</sub> = 1/2mv<sup>2</sup>&#773; = 3/2kT. Khi nhiệt độ tăng, động năng trung bình tăng nên <b>tốc độ chuyển động trung bình của các phân tử khí tăng lên</b>.<br>⟶ Chọn <b>C</b>.",
        "prompt": "Khi đun nóng khối khí trong một bình kín thì các phân tử khí sẽ"
      },
      {
        "id": 5,
        "part": 1,
        "qnum": 5,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 5",
        "topic": "Khí lí tưởng",
        "figure": null,
        "question": "Câu nào sau đây nói về khí lí tưởng là <b>không đúng</b>?",
        "options": {
          "A": "Khí lí tưởng là khí mà khối lượng của các phân tử khí có thể bỏ qua.",
          "B": "Khí lí tưởng là khí mà thể tích của các phân tử có thể bỏ qua so với thể tích bình chứa.",
          "C": "Khí lí tưởng là khí mà các phân tử chỉ tương tác với nhau khi va chạm.",
          "D": "Khí lí tưởng là khí có thể gây áp suất lên thành bình chứa."
        },
        "answer": "A",
        "explanation": "Trong mô hình khí lí tưởng, chỉ có <b>thể tích riêng</b> của phân tử được bỏ qua (coi phân tử là chất điểm), còn <b>khối lượng</b> của phân tử khí thì <b>không thể bỏ qua</b>.<br>⟶ Chọn <b>A</b>.",
        "prompt": "Câu nào sau đây nói về khí lí tưởng là <b>không đúng</b>?"
      },
      {
        "id": 6,
        "part": 1,
        "qnum": 6,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 6",
        "topic": "Khí lí tưởng",
        "figure": null,
        "question": "Khí lí tưởng là môi trường vật chất, trong đó các phân tử khí được xem như:",
        "options": {
          "A": "Những đối tượng không tương tác nhau và có thể tích bằng không.",
          "B": "Chất điểm không có khối lượng.",
          "C": "Chất điểm có khối lượng hút lẫn nhau ở khoảng cách xa.",
          "D": "Chất điểm và chỉ tương tác với nhau khi va chạm."
        },
        "answer": "D",
        "explanation": "Khí lí tưởng là chất khí mà các phân tử được coi là các <b>chất điểm</b> (có khối lượng nhưng thể tích không đáng kể) và <b>chỉ tương tác với nhau khi va chạm</b>.<br>⟶ Chọn <b>D</b>.",
        "prompt": "Khí lí tưởng là môi trường vật chất, trong đó các phân tử khí được xem như:"
      },
      {
        "id": 7,
        "part": 1,
        "qnum": 7,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 7",
        "topic": "Lượng chất và khối lượng mol",
        "figure": null,
        "question": "Một lượng khí có khối lượng là 30 kg và chứa 11,28 · 10<sup>26</sup> phân tử. Phân tử khí này chỉ gồm các nguyên tử hydrogen và carbon. Biết số Avogadro N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>. Khí này là",
        "options": {
          "A": "CH<sub>3</sub>.",
          "B": "CH<sub>4</sub>.",
          "C": "C<sub>2</sub>H<sub>4</sub>.",
          "D": "C<sub>2</sub>H<sub>2</sub>."
        },
        "answer": "B",
        "explanation": "Số mol của lượng khí là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (11,28 · 10<sup>26</sup>) / (6,02 · 10<sup>23</sup>) ≈ 1873,75 mol</div><br>Khối lượng mol của chất khí là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">M = m/n = (30 · 10<sup>3</sup> g) / (1873,75 mol) ≈ 16 g/mol</div><br>Vì phân tử gồm C và H nên với M = 16 g/mol, công thức phân tử là CH<sub>4</sub> (Methane: 12 + 4 × 1 = 16).<br>⟶ Chọn <b>B</b>.",
        "prompt": "Một lượng khí có khối lượng là 30 kg và chứa 11,28 · 10<sup>26</sup> phân tử. Phân tử khí này chỉ gồm các nguyên tử hydrogen và carbon. Biết số Avogadro N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>. Khí này là"
      },
      {
        "id": 8,
        "part": 1,
        "qnum": 8,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 8",
        "topic": "Áp suất chất khí",
        "figure": null,
        "question": "Khi nhiệt độ trong một bình kín giảm thì áp suất của khối khí trong bình đó cũng giảm là vì",
        "options": {
          "A": "số lượng phân tử khí giảm.",
          "B": "phân tử va chạm với nhau nhiều hơn.",
          "C": "khoảng cách giữa các phân tử tăng lên.",
          "D": "phân tử khí chuyển động chậm hơn, va chạm vào thành bình ít hơn và yếu hơn."
        },
        "answer": "D",
        "explanation": "Khi nhiệt độ trong bình giảm, tốc độ chuyển động nhiệt trung bình của các phân tử giảm đi. Do đó, các phân tử va đập vào thành bình với tần số ít hơn và truyền độ biến thiên động lượng nhỏ hơn, làm cho lực tác dụng lên thành bình giảm ⟹ áp suất khí giảm.<br>⟶ Chọn <b>D</b>.",
        "prompt": "Khi nhiệt độ trong một bình kín giảm thì áp suất của khối khí trong bình đó cũng giảm là vì"
      },
      {
        "id": 9,
        "part": 1,
        "qnum": 9,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 9",
        "topic": "Hiện tượng nén khí",
        "figure": "assets/images/quiz/phys/phys_cd2_piston_pump.png",
        "question": "Khi ấn pit-tông bơm xe đạp (bịt kín đầu vòi), hiện tượng xảy ra với lượng khí bên trong bơm là",
        "options": {
          "A": "Thể tích bình chứa khí giảm và áp suất khí trong bình tăng.",
          "B": "Thể tích bình chứa khí giảm và áp suất khí trong bình giảm.",
          "C": "Thể tích bình chứa khí tăng và áp suất khí trong bình giảm.",
          "D": "Thể tích bình chứa khí tăng và áp suất khí trong bình tăng."
        },
        "answer": "A",
        "explanation": "Khi ấn pit-tông xuống, không gian chứa khí bị thu hẹp lại nên <b>thể tích khí giảm</b>. Mật độ phân tử khí tăng lên làm số va chạm vào thành bình tăng ⟹ <b>áp suất khí trong bình tăng lên</b> (theo định luật Boyle: p ~ 1/V).<br>⟶ Chọn <b>A</b>.",
        "prompt": "Khi ấn pit-tông bơm xe đạp (bịt kín đầu vòi), hiện tượng xảy ra với lượng khí bên trong bơm là"
      },
      {
        "id": 10,
        "part": 1,
        "qnum": 10,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 10",
        "topic": "Khái niệm áp suất khí",
        "figure": null,
        "question": "Áp suất của chất khí tác dụng lên thành bình là do lực tác dụng",
        "options": {
          "A": "tiếp tuyến với mặt phẳng thành bình.",
          "B": "của trọng lực các phân tử đè lên đáy bình.",
          "C": "vuông góc lên toàn bộ diện tích thành bình.",
          "D": "vuông góc lên một đơn vị diện tích thành bình."
        },
        "answer": "D",
        "explanation": "Theo định nghĩa vật lí: Áp suất p = F/S là độ lớn của áp lực (lực tác dụng vuông góc) tính trên <b>một đơn vị diện tích</b> của bề mặt bị ép.<br>⟶ Chọn <b>D</b>.",
        "prompt": "Áp suất của chất khí tác dụng lên thành bình là do lực tác dụng"
      },
      {
        "id": 11,
        "part": 1,
        "qnum": 11,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 11",
        "topic": "Tính chất khí ở áp suất thấp",
        "figure": null,
        "question": "Tính chất của các phân tử khí thực ở áp suất thấp và nhiệt độ không quá thấp là",
        "options": {
          "A": "coi như chất điểm và tương tác hút đẩy liên tục với nhau.",
          "B": "chuyển động hỗn loạn không ngừng và có thể coi như chất điểm.",
          "C": "đứng yên và tương tác hút hoặc đẩy với nhau.",
          "D": "chuyển động có hướng xác định và coi như chất điểm."
        },
        "answer": "B",
        "explanation": "Ở áp suất thấp và nhiệt độ thông thường, mật độ phân tử khí rất nhỏ, khoảng cách giữa các phân tử rất lớn so với kích thước của chúng. Vì vậy, các phân tử khí thực chuyển động hỗn loạn không ngừng và có thể xem gần đúng là các <b>chất điểm</b> không tương tác từ xa (tương đương mô hình khí lí tưởng).<br>⟶ Chọn <b>B</b>.",
        "prompt": "Tính chất của các phân tử khí thực ở áp suất thấp và nhiệt độ không quá thấp là"
      },
      {
        "id": 12,
        "part": 1,
        "qnum": 12,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 12",
        "topic": "Đặc điểm của thể khí",
        "figure": null,
        "question": "Trong các tính chất sau, tính chất nào <b>không phải</b> là tính chất của chất khí?",
        "options": {
          "A": "Có hình dạng cố định xác định.",
          "B": "Chiếm toàn bộ thể tích của bình chứa.",
          "C": "Tác dụng áp lực lên mọi phần diện tích thành bình chứa.",
          "D": "Thể tích giảm đáng kể khi tăng áp suất (tính dễ nén)."
        },
        "answer": "A",
        "explanation": "Chất khí <b>không có hình dạng và thể tích riêng</b> cố định; nó luôn bành trướng để chiếm toàn bộ thể tích của bình chứa và có hình dạng của bình chứa. Do đó phát biểu 'Có hình dạng cố định' là không đúng.<br>⟶ Chọn <b>A</b>.",
        "prompt": "Trong các tính chất sau, tính chất nào <b>không phải</b> là tính chất của chất khí?"
      },
      {
        "id": 13,
        "part": 1,
        "qnum": 13,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 13",
        "topic": "Hằng số Avogadro",
        "figure": null,
        "question": "Số Avogadro N<sub>A</sub> có giá trị bằng",
        "options": {
          "A": "số phân tử chứa trong 20,4 lít khí H<sub>2</sub> ở đktc.",
          "B": "số phân tử chứa trong 16 gam oxygen O<sub>2</sub>.",
          "C": "số phân tử chứa trong 18 gam nước lỏng H<sub>2</sub>O.",
          "D": "số phân tử chứa trong 40 gam CO<sub>2</sub>."
        },
        "answer": "C",
        "explanation": "Số Avogadro N<sub>A</sub> là số hạt vi mô (phân tử hoặc nguyên tử) chứa trong <b>1 mol chất</b>.<br>• Trong 18 g nước: n = 18/18 = 1 mol ⟹ N = 1 · N<sub>A</sub> = N<sub>A</sub> phân tử.<br>• Trong 16 g O<sub>2</sub>: n = 16/32 = 0,5 mol ⟹ N = 0,5N<sub>A</sub>.<br>⟶ Chọn <b>C</b>.",
        "prompt": "Số Avogadro N<sub>A</sub> có giá trị bằng"
      },
      {
        "id": 14,
        "part": 1,
        "qnum": 14,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 14",
        "topic": "Định luật Avogadro",
        "figure": null,
        "question": "Trong cùng điều kiện tiêu chuẩn về nhiệt độ và áp suất thì",
        "options": {
          "A": "các phân tử của các chất khí khác nhau chuyển động với vận tốc như nhau.",
          "B": "khoảng cách giữa các phân tử rất nhỏ so với kích thước của các phân tử.",
          "C": "số phân tử trong một đơn vị thể tích của các chất khí khác nhau là như nhau.",
          "D": "các phân tử khí khác nhau va chạm vào thành bình tác dụng vào thành bình những xung lượng bằng nhau."
        },
        "answer": "C",
        "explanation": "Theo định luật Avogadro: Các thể tích bằng nhau của các chất khí khác nhau ở cùng điều kiện nhiệt độ và áp suất đều chứa số phân tử như nhau (V<sub>1</sub> = V<sub>2</sub> ⟹ N<sub>1</sub> = N<sub>2</sub>). Do đó, mật độ phân tử n<sub>0</sub> = N/V trong một đơn vị thể tích của mọi chất khí ở cùng đktc là hoàn toàn <b>như nhau</b>.<br>⟶ Chọn <b>C</b>.",
        "prompt": "Trong cùng điều kiện tiêu chuẩn về nhiệt độ và áp suất thì"
      },
      {
        "id": 15,
        "part": 1,
        "qnum": 15,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 15",
        "topic": "Tính chất chất khí",
        "figure": null,
        "question": "Khi nói về các tính chất của chất khí, phát biểu nào sau đây là <b>đúng</b>?",
        "options": {
          "A": "Tính bành trướng là chỉ chiếm một phần thể tích của bình chứa.",
          "B": "Khi áp suất tác dụng lên một lượng khí tăng thì thể tích của khí tăng đáng kể.",
          "C": "Chất khí có khối lượng riêng lớn hơn nhiều so với chất rắn và chất lỏng.",
          "D": "Chất khí có tính dễ nén (thể tích giảm mạnh khi tăng áp suất)."
        },
        "answer": "D",
        "explanation": "Vì khoảng cách giữa các phân tử khí rất lớn so với kích thước phân tử nên chất khí <b>rất dễ nén</b> so với chất rắn và chất lỏng. Khi tăng áp suất, các phân tử bị dồn lại gần nhau hơn, thể tích giảm đáng kể.<br>⟶ Chọn <b>D</b>.",
        "prompt": "Khi nói về các tính chất của chất khí, phát biểu nào sau đây là <b>đúng</b>?"
      },
      {
        "id": 16,
        "part": 1,
        "qnum": 16,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 16",
        "topic": "Phân bố mật độ phân tử khí",
        "figure": "assets/images/quiz/phys/phys_cd2_density_boxes.png",
        "question": "Hình nào dưới đây biểu diễn đúng sự phân bố mật độ của các phân tử khí trong một bình kín ở trạng thái cân bằng?",
        "options": {
          "A": "Hình 2.",
          "B": "Hình 3.",
          "C": "Hình 1.",
          "D": "Hình 4."
        },
        "answer": "C",
        "explanation": "Các phân tử khí chuyển động hỗn loạn không ngừng theo mọi phương và có tính bành trướng. Vì vậy trong trạng thái cân bằng nhiệt, các phân tử khí <b>phân bố đồng đều khắp toàn bộ không gian bình chứa</b> (Hình 1).<br>• Hình 2: tụ tập ở đáy và lệch.<br>• Hình 3: co cụm ở giữa.<br>• Hình 4: chỉ lắng ở đáy (thể lỏng).<br>⟶ Chọn <b>C</b> (Hình 1).",
        "prompt": "Hình nào dưới đây biểu diễn đúng sự phân bố mật độ của các phân tử khí trong một bình kín ở trạng thái cân bằng?"
      },
      {
        "id": 17,
        "part": 1,
        "qnum": 17,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 17",
        "topic": "Cơ chế áp suất chất khí",
        "figure": null,
        "question": "Khi nhiệt độ trong một bình kín tăng cao thì áp suất của khối khí trong bình cũng tăng lên vì",
        "options": {
          "A": "số lượng phân tử khí trong bình tăng lên.",
          "B": "các phân tử khí nở to ra hơn.",
          "C": "khoảng cách giữa các phân tử khí tăng lên.",
          "D": "các phân tử khí chuyển động nhanh hơn, va chạm với thành bình mạnh hơn và thường xuyên hơn."
        },
        "answer": "D",
        "explanation": "Trong bình kín, thể tích và số lượng phân tử là không đổi. Khi nhiệt độ tăng, động năng trung bình của phân tử tăng ⟹ <b>phân tử khí chuyển động nhanh hơn</b>. Sự va đập vào thành bình trở nên dồn dập hơn và xung lực truyền vào thành bình lớn hơn ⟹ áp suất chất khí tăng lên.<br>⟶ Chọn <b>D</b>.",
        "prompt": "Khi nhiệt độ trong một bình kín tăng cao thì áp suất của khối khí trong bình cũng tăng lên vì"
      },
      {
        "id": 18,
        "part": 1,
        "qnum": 18,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 18",
        "topic": "Hỗn hợp khí",
        "figure": null,
        "question": "Một hỗn hợp khí đồng đều có thể được tạo thành bởi hai chất khí trộn lẫn vào nhau một cách tự phát, bởi vì:<br>(1) Các chất khí đã cho không phản ứng hoá học với nhau.<br>(2) Giữa các phân tử khí có khoảng trống rất lớn.<br>(3) Các phân tử khí luôn chuyển động nhiệt hỗn loạn không ngừng.",
        "options": {
          "A": "(1) và (2).",
          "B": "(2) và (3).",
          "C": "(3) và (1).",
          "D": "Cả (1), (2) và (3)."
        },
        "answer": "D",
        "explanation": "Hiện tượng khuếch tán tự phát của hai chất khí để tạo hỗn hợp đồng đều xảy ra do: giữa các phân tử khí có khoảng trống lớn (2) và các phân tử chuyển động nhiệt hỗn loạn không ngừng (3), đồng thời chúng giữ nguyên bản chất khi không phản ứng hoá học với nhau (1).<br>⟶ Chọn <b>D</b>.",
        "prompt": "Một hỗn hợp khí đồng đều có thể được tạo thành bởi hai chất khí trộn lẫn vào nhau một cách tự phát, bởi vì:<br>(1) Các chất khí đã cho không phản ứng hoá học với nhau.<br>(2) Giữa các phân tử khí có khoảng trống rất lớn.<br>(3) Các phân tử khí luôn chuyển động nhiệt hỗn loạn không ngừng."
      },
      {
        "id": 19,
        "part": 2,
        "qnum": 1,
        "type": "tf",
        "level": "nb_th",
        "label": "Phần 2 - Câu 1",
        "topic": "Mô hình khí lí tưởng",
        "figure": null,
        "question": "Khi nói về mô hình khí lí tưởng, các nhận định sau đây đúng hay sai?",
        "statements": {
          "a": "Khí lí tưởng là khí mà thể tích của các phân tử có thể bỏ qua so với thể tích bình chứa.",
          "b": "Khí lí tưởng là khí mà khối lượng của các phân tử khí có thể bỏ qua.",
          "c": "Khí lí tưởng là khí mà các phân tử chỉ tương tác với nhau khi va chạm.",
          "d": "Khí lí tưởng gây ra áp suất lên thành bình do các phân tử khí va chạm vào thành bình và truyền động lượng."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "<b>a) Đúng.</b> Các phân tử khí lí tưởng được coi là chất điểm nên thể tích riêng của chúng được bỏ qua.<br><b>b) Sai.</b> Mỗi phân tử khí lí tưởng luôn có khối lượng xác định, không thể bỏ qua.<br><b>c) Đúng.</b> Khi chưa va chạm lực tương tác coi như bằng 0, chỉ tương tác khi va chạm.<br><b>d) Đúng.</b> Áp suất khí lên thành bình sinh ra do va chạm đàn hồi của vô số phân tử khí lên thành bình.",
        "prompt": "Khi nói về mô hình khí lí tưởng, các nhận định sau đây đúng hay sai?",
        "items": {
          "a": "Khí lí tưởng là khí mà thể tích của các phân tử có thể bỏ qua so với thể tích bình chứa.",
          "b": "Khí lí tưởng là khí mà khối lượng của các phân tử khí có thể bỏ qua.",
          "c": "Khí lí tưởng là khí mà các phân tử chỉ tương tác với nhau khi va chạm.",
          "d": "Khí lí tưởng gây ra áp suất lên thành bình do các phân tử khí va chạm vào thành bình và truyền động lượng."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        }
      },
      {
        "id": 20,
        "part": 2,
        "qnum": 2,
        "type": "tf",
        "level": "nb_th",
        "label": "Phần 2 - Câu 2",
        "topic": "Chuyển động Brown của hạt khói",
        "figure": null,
        "question": "Khói bay lơ lửng trong không khí và các hạt khói chuyển động hỗn loạn không ngừng. Xét các giải thích sau:",
        "statements": {
          "a": "Các hạt khói bị các phân tử khí đẩy lên cao do không khí có xu hướng bay ra xa mặt đất.",
          "b": "Hạt khói chuyển động hỗn loạn vì hạt khói nhẹ hơn các phân tử khí.",
          "c": "Dù nặng hơn không khí nhưng do thể tích lớn nên hạt khói bị lực đẩy Ác-si-mét nâng lên cao.",
          "d": "Hạt khói chuyển động hỗn loạn ziczac là do bị các phân tử không khí va chạm không đồng đều từ mọi hướng."
        },
        "answers": {
          "a": false,
          "b": false,
          "c": false,
          "d": true
        },
        "explanation": "<b>a) Sai.</b> Trọng lực của Trái Đất luôn hút không khí về phía tâm Trái Đất.<br><b>b) Sai.</b> Hạt khói chứa hàng tỉ nguyên tử carbon nên nặng hơn phân tử khí hàng triệu lần.<br><b>c) Sai.</b> Chuyển động ziczac hỗn loạn của hạt khói là chuyển động Brown, không bắt nguồn từ lực đẩy Ác-si-mét.<br><b>d) Đúng.</b> Chuyển động Brown của hạt khói là kết quả của sự va chạm không cân bằng từ vô số phân tử không khí chuyển động nhiệt hỗn loạn đập vào các phía của hạt khói.",
        "prompt": "Khói bay lơ lửng trong không khí và các hạt khói chuyển động hỗn loạn không ngừng. Xét các giải thích sau:",
        "items": {
          "a": "Các hạt khói bị các phân tử khí đẩy lên cao do không khí có xu hướng bay ra xa mặt đất.",
          "b": "Hạt khói chuyển động hỗn loạn vì hạt khói nhẹ hơn các phân tử khí.",
          "c": "Dù nặng hơn không khí nhưng do thể tích lớn nên hạt khói bị lực đẩy Ác-si-mét nâng lên cao.",
          "d": "Hạt khói chuyển động hỗn loạn ziczac là do bị các phân tử không khí va chạm không đồng đều từ mọi hướng."
        },
        "answer": {
          "a": false,
          "b": false,
          "c": false,
          "d": true
        }
      },
      {
        "id": 21,
        "part": 2,
        "qnum": 3,
        "type": "tf",
        "level": "vd",
        "label": "Phần 2 - Câu 3",
        "topic": "Ước lượng phân tử khí",
        "figure": null,
        "question": "Biết bán kính Trái Đất R = 6400 km, phân tử oxygen là quả cầu bán kính r = 10<sup>-10</sup> m, số Avogadro N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>. Xét các nhận định sau:",
        "statements": {
          "a": "Số phân tử oxygen cần thiết để xếp liền kề nhau thành một vòng quanh xích đạo Trái Đất là 10,2 · 10<sup>17</sup> phân tử.",
          "b": "Trong 16 gam khí oxygen có chứa 3,01 · 10<sup>23</sup> phân tử O<sub>2</sub>.",
          "c": "4 gam khí oxygen tương ứng với 0,3 mol khí oxygen.",
          "d": "Nếu xếp liền kề các phân tử trong 16 gam oxygen dọc theo đường xích đạo Trái Đất thì số vòng bao quanh xích đạo là khoảng 1.497.512 vòng."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "<b>a) Sai.</b> Chu vi xích đạo: C = 2π R = 2π × 6400 · 10<sup>3</sup> m ≈ 4,021 · 10<sup>7</sup> m. Đường kính phân tử: d = 2r = 2 · 10<sup>-10</sup> m.<br>Số phân tử trên một vòng là: n = C/d = (4,021 · 10<sup>7</sup>) / (2 · 10<sup>-10</sup>) ≈ 2,01 · 10<sup>17</sup> phân tử (khác 10,2 · 10<sup>17</sup>).<br><b>b) Đúng.</b> Số mol oxygen: n = m/M = 16/32 = 0,5 mol ⟹ N = 0,5 × 6,02 · 10<sup>23</sup> = 3,01 · 10<sup>23</sup> phân tử.<br><b>c) Sai.</b> Số mol của 4 gam O<sub>2</sub>: n = 4/32 = 0,125 mol (không phải 0,3 mol).<br><b>d) Đúng.</b> Số vòng xếp được là: n<sub>v</sub> = N/n = (3,01 · 10<sup>23</sup>) / (2,01 · 10<sup>17</sup>) ≈ 1.497.512 vòng.",
        "prompt": "Biết bán kính Trái Đất R = 6400 km, phân tử oxygen là quả cầu bán kính r = 10<sup>-10</sup> m, số Avogadro N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>. Xét các nhận định sau:",
        "items": {
          "a": "Số phân tử oxygen cần thiết để xếp liền kề nhau thành một vòng quanh xích đạo Trái Đất là 10,2 · 10<sup>17</sup> phân tử.",
          "b": "Trong 16 gam khí oxygen có chứa 3,01 · 10<sup>23</sup> phân tử O<sub>2</sub>.",
          "c": "4 gam khí oxygen tương ứng với 0,3 mol khí oxygen.",
          "d": "Nếu xếp liền kề các phân tử trong 16 gam oxygen dọc theo đường xích đạo Trái Đất thì số vòng bao quanh xích đạo là khoảng 1.497.512 vòng."
        },
        "answer": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        }
      },
      {
        "id": 22,
        "part": 2,
        "qnum": 4,
        "type": "tf",
        "level": "vd",
        "label": "Phần 2 - Câu 4",
        "topic": "Số mol và áp suất các khí trong bình",
        "figure": null,
        "question": "Cho 3 bình có cùng dung tích ở cùng một nhiệt độ chứa các lượng khí như sau:<br>• Bình (1) chứa 4 gam khí hydrogen (H<sub>2</sub>).<br>• Bình (2) chứa 22 gam khí carbon dioxide (CO<sub>2</sub>).<br>• Bình (3) chứa 7 gam khí nitrogen (N<sub>2</sub>).",
        "statements": {
          "a": "Số mol khí chứa trong bình (1) là 2 mol.",
          "b": "Số mol khí chứa trong bình (2) là 0,8 mol.",
          "c": "Số mol khí chứa trong bình (3) là 0,25 mol.",
          "d": "Áp suất khí trong bình (1) là nhỏ nhất và trong bình (3) là lớn nhất."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "<b>a) Đúng.</b> n<sub>H<sub>2</sub></sub> = 4/2 = 2 mol.<br><b>b) Sai.</b> n<sub>CO<sub>2</sub></sub> = 22/44 = 0,5 mol (không phải 0,8 mol).<br><b>c) Đúng.</b> n<sub>N<sub>2</sub></sub> = 7/28 = 0,25 mol.<br><b>d) Sai.</b> Vì ba bình có cùng thể tích V và nhiệt độ T, áp suất khí tuân theo phương trình trạng thái Clapeyron-Mendeleev: p = nRT/V ⟹ p ~ n.<br>Do n<sub>1</sub> (2) > n<sub>2</sub> (0,5) > n<sub>3</sub> (0,25) nên áp suất bình (1) là <b>lớn nhất</b> và bình (3) là <b>nhỏ nhất</b>.",
        "prompt": "Cho 3 bình có cùng dung tích ở cùng một nhiệt độ chứa các lượng khí như sau:<br>• Bình (1) chứa 4 gam khí hydrogen (H<sub>2</sub>).<br>• Bình (2) chứa 22 gam khí carbon dioxide (CO<sub>2</sub>).<br>• Bình (3) chứa 7 gam khí nitrogen (N<sub>2</sub>).",
        "items": {
          "a": "Số mol khí chứa trong bình (1) là 2 mol.",
          "b": "Số mol khí chứa trong bình (2) là 0,8 mol.",
          "c": "Số mol khí chứa trong bình (3) là 0,25 mol.",
          "d": "Áp suất khí trong bình (1) là nhỏ nhất và trong bình (3) là lớn nhất."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        }
      },
      {
        "id": 23,
        "part": 3,
        "qnum": 1,
        "type": "sa",
        "level": "nb_th",
        "label": "Phần 3 - Câu 1",
        "topic": "Thể tích chất khí",
        "figure": null,
        "question": "Một bình thuỷ tinh có dung tích 10 lít chứa đầy khí oxygen. Nếu ta bơm thêm vào bình 1 lít khí oxygen nữa ở cùng điều kiện thì thể tích của khí oxygen trong bình lúc này là bao nhiêu lít?",
        "answer": "10",
        "explanation": "Chất khí có tính bành trướng và chiếm toàn bộ không gian của bình chứa. Do bình thuỷ tinh có thể tích cố định là 10 lít và không bị biến dạng, nên khi nạp thêm khí oxygen vào thì toàn bộ lượng khí vẫn chiếm trọn thể tích bình chứa là <b>10 lít</b> (chỉ có mật độ và áp suất khí trong bình tăng lên).",
        "prompt": "Một bình thuỷ tinh có dung tích 10 lít chứa đầy khí oxygen. Nếu ta bơm thêm vào bình 1 lít khí oxygen nữa ở cùng điều kiện thì thể tích của khí oxygen trong bình lúc này là bao nhiêu lít?"
      },
      {
        "id": 24,
        "part": 3,
        "qnum": 2,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 2",
        "topic": "Khối lượng khí từ số hạt",
        "figure": null,
        "question": "Một bình kín chứa 3,01 · 10<sup>23</sup> phân tử khí Hydrogen (H<sub>2</sub>). Khối lượng của khí Hydrogen trong bình là bao nhiêu gam? (Lấy số Avogadro N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>)",
        "answer": "1",
        "explanation": "Số mol khí Hydrogen là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (3,01 · 10<sup>23</sup>) / (6,02 · 10<sup>23</sup>) = 0,5 mol</div><br>Khối lượng khí Hydrogen trong bình là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">m = n · M = 0,5 × 2 = 1 gam</div>",
        "prompt": "Một bình kín chứa 3,01 · 10<sup>23</sup> phân tử khí Hydrogen (H<sub>2</sub>). Khối lượng của khí Hydrogen trong bình là bao nhiêu gam? (Lấy số Avogadro N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>)"
      },
      {
        "id": 25,
        "part": 3,
        "qnum": 3,
        "type": "sa",
        "level": "nb_th",
        "label": "Phần 3 - Câu 3",
        "topic": "Số mol từ số hạt",
        "figure": null,
        "question": "Một bình kín chứa 3,01 · 10<sup>23</sup> nguyên tử khí Helium ở nhiệt độ 0°C và áp suất 1 atm. Số mol khí Helium trong bình là bao nhiêu mol? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>)",
        "answer": "0.5",
        "explanation": "Khí hiếm Helium là đơn nguyên tử nên số phân tử bằng số nguyên tử.<br>Số mol khí Helium là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (3,01 · 10<sup>23</sup>) / (6,02 · 10<sup>23</sup>) = 0,5 mol</div>",
        "prompt": "Một bình kín chứa 3,01 · 10<sup>23</sup> nguyên tử khí Helium ở nhiệt độ 0°C và áp suất 1 atm. Số mol khí Helium trong bình là bao nhiêu mol? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>)"
      },
      {
        "id": 26,
        "part": 3,
        "qnum": 4,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 4",
        "topic": "Thể tích mol chất khí",
        "figure": null,
        "question": "Bình kín đựng khí Nitrogen chứa 1,505 · 10<sup>23</sup> phân tử N<sub>2</sub> ở điều kiện tiêu chuẩn 0°C và áp suất 1 atm. Thể tích của bình đựng khí trên là bao nhiêu lít? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, thể tích 1 mol khí ở đktc là 22,4 lít)",
        "answer": "5.6",
        "explanation": "Số mol khí Nitrogen là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (1,505 · 10<sup>23</sup>) / (6,02 · 10<sup>23</sup>) = 0,25 mol</div><br>Thể tích bình chứa khí ở điều kiện tiêu chuẩn (0°C, 1 atm) là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">V = n · V<sub>0</sub> = 0,25 × 22,4 = 5,6 lít</div><br><i>(Lưu ý: Tài liệu PDF gốc ghi nhầm phép tính 22,4 / 4 = 5,5, giá trị chuẩn xác của phép chia là 5,6 lít).</i>",
        "prompt": "Bình kín đựng khí Nitrogen chứa 1,505 · 10<sup>23</sup> phân tử N<sub>2</sub> ở điều kiện tiêu chuẩn 0°C và áp suất 1 atm. Thể tích của bình đựng khí trên là bao nhiêu lít? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, thể tích 1 mol khí ở đktc là 22,4 lít)"
      },
      {
        "id": 27,
        "part": 3,
        "qnum": 5,
        "type": "sa",
        "level": "nb_th",
        "label": "Phần 3 - Câu 5",
        "topic": "Khối lượng mol",
        "figure": null,
        "question": "1 mol khí Helium ở điều kiện tiêu chuẩn (0°C, 1 atm) có thể tích là 22,4 lít thì có khối lượng là bao nhiêu gam?",
        "answer": "4",
        "explanation": "Khối lượng mol của nguyên tử khí Helium là M = 4 g/mol.<br>Khối lượng của 1 mol khí Helium là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">m = n · M = 1 × 4 = 4 gam</div>",
        "prompt": "1 mol khí Helium ở điều kiện tiêu chuẩn (0°C, 1 atm) có thể tích là 22,4 lít thì có khối lượng là bao nhiêu gam?"
      },
      {
        "id": 28,
        "part": 3,
        "qnum": 6,
        "type": "sa",
        "level": "nb_th",
        "label": "Phần 3 - Câu 6",
        "topic": "Tính số mol từ khối lượng",
        "figure": null,
        "question": "Biết khối lượng của 1 mol phân tử khí Oxygen (O<sub>2</sub>) là 32 g. Một khối lượng 4,8 g khí Oxygen là khối lượng của bao nhiêu mol khí này?",
        "answer": "0.15",
        "explanation": "Số mol khí Oxygen là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = m/M = 4,8/32 = 0,15 mol</div>",
        "prompt": "Biết khối lượng của 1 mol phân tử khí Oxygen (O<sub>2</sub>) là 32 g. Một khối lượng 4,8 g khí Oxygen là khối lượng của bao nhiêu mol khí này?"
      }
    ]
  },
  "ly_cd2_tuluyen": {
    "code": "ly_cd2_tuluyen",
    "num": 6,
    "group": "khilituong",
    "title": "CHUYÊN ĐỀ 2: BÀI TẬP TỰ LUYỆN — MÔ HÌNH ĐỘNG HỌC PHÂN TỬ CHẤT KHÍ",
    "shortTitle": "CĐ2: Tự luyện (28 câu)",
    "subtitle": "Vật lí 12 • 18 câu ABCD • 4 câu Đúng/Sai • 6 câu Trả lời ngắn",
    "questions": [
      {
        "id": 1,
        "part": 1,
        "qnum": 1,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 1",
        "topic": "Hiện tượng dãn khí",
        "figure": "assets/images/quiz/phys/phys_cd2_spray_bottle.png",
        "question": "Với bình xịt khử trùng, khi ta ấn nút, van mở ra thì hiện tượng nào sau đây sẽ xảy ra với lượng khí đang bị nén trong bình?",
        "options": {
          "A": "Thể tích khí giảm, áp suất khí giảm.",
          "B": "Thể tích khí tăng, áp suất khí giảm.",
          "C": "Thể tích khí giảm, áp suất khí tăng.",
          "D": "Thể tích khí tăng, áp suất khí tăng."
        },
        "answer": "B",
        "explanation": "Khi mở van, khí nén bên trong bình thoát ra ngoài không gian rộng lớn của khí quyển. Lượng khí này bành trướng làm <b>thể tích tăng lên</b>, đồng thời áp suất từ mức rất cao trong bình giảm xuống bằng áp suất khí quyển, tức là <b>áp suất khí giảm</b>.<br>⟶ Chọn <b>B</b>.",
        "prompt": "Với bình xịt khử trùng, khi ta ấn nút, van mở ra thì hiện tượng nào sau đây sẽ xảy ra với lượng khí đang bị nén trong bình?"
      },
      {
        "id": 2,
        "part": 1,
        "qnum": 2,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 2",
        "topic": "Khí lí tưởng",
        "figure": null,
        "question": "Khi nói về khí lí tưởng, phát biểu nào sau đây là <b>không đúng</b>?",
        "options": {
          "A": "Là khí mà các phân tử chỉ tương tác với nhau khi va chạm.",
          "B": "Là khí mà thể tích của các phân tử khí có thể bỏ qua so với thể tích bình chứa.",
          "C": "Khi va chạm với thành bình, các phân tử khí truyền động lượng tạo nên áp suất.",
          "D": "Là khí mà khối lượng của các phân tử khí có thể bỏ qua."
        },
        "answer": "D",
        "explanation": "Trong mô hình khí lí tưởng, các phân tử khí được coi là chất điểm (thể tích riêng bỏ qua) và chỉ tương tác khi va chạm. Tuy nhiên, <b>khối lượng của mỗi phân tử khí không thể bỏ qua</b>.<br>⟶ Chọn <b>D</b>.",
        "prompt": "Khi nói về khí lí tưởng, phát biểu nào sau đây là <b>không đúng</b>?"
      },
      {
        "id": 3,
        "part": 1,
        "qnum": 3,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 3",
        "topic": "Hiện tượng khuếch tán",
        "figure": "assets/images/quiz/phys/phys_cd2_flat_tire.png",
        "question": "Bơm căng săm xe đạp và vặn van thật chặt nhưng để lâu ngày lốp xe vẫn bị xẹp dần vì",
        "options": {
          "A": "giữa các phân tử cao su dùng làm săm có khoảng cách nên các phân tử không khí có thể khuếch tán qua đó thoát ra ngoài.",
          "B": "lúc bơm, không khí vào săm còn nóng, sau đó không khí nguội dần, co lại, làm săm xe bị xẹp.",
          "C": "cao su dùng làm săm đẩy các phân tử không khí lại gần nhau hơn nên săm bị xẹp.",
          "D": "săm xe làm bằng cao su đàn hồi tự động co lại sau thời gian dài."
        },
        "answer": "A",
        "explanation": "Chất rắn làm săm lốp (cao su) có cấu trúc phân tử và giữa các phân tử có khoảng cách. Dưới áp suất cao bên trong săm, các phân tử khí luôn chuyển động nhiệt nên có thể len lỏi qua các khoảng cách giữa phân tử cao su để thoát ra ngoài (khuếch tán).<br>⟶ Chọn <b>A</b>.",
        "prompt": "Bơm căng săm xe đạp và vặn van thật chặt nhưng để lâu ngày lốp xe vẫn bị xẹp dần vì"
      },
      {
        "id": 4,
        "part": 1,
        "qnum": 4,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 4",
        "topic": "Đặc điểm của thể khí",
        "figure": null,
        "question": "Tính chất nào sau đây <b>không phải</b> là tính chất của chất ở thể khí?",
        "options": {
          "A": "Các phân tử chuyển động hỗn loạn không ngừng theo mọi hướng.",
          "B": "Có thể nén lại một cách dễ dàng.",
          "C": "Có hình dạng và thể tích riêng xác định.",
          "D": "Lực tương tác giữa các phân tử rất nhỏ so với ở thể rắn và thể lỏng."
        },
        "answer": "C",
        "explanation": "Chất khí không có hình dạng riêng và không có thể tích riêng xác định mà luôn chiếm toàn bộ thể tích của bình chứa.<br>⟶ Chọn <b>C</b>.",
        "prompt": "Tính chất nào sau đây <b>không phải</b> là tính chất của chất ở thể khí?"
      },
      {
        "id": 5,
        "part": 1,
        "qnum": 5,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 5",
        "topic": "Mô hình phân tử thể khí",
        "figure": null,
        "question": "Tính chất nào sau đây <b>không phải</b> là tính chất của các phân tử chất khí?",
        "options": {
          "A": "Các phân tử chuyển động hỗn loạn và không ngừng.",
          "B": "Các phân tử dao động hỗn loạn xung quanh các vị trí cân bằng cố định.",
          "C": "Chất khí dễ nén hơn chất lỏng và chất rắn rất nhiều.",
          "D": "Chất khí có tính bành trướng, luôn chiếm toàn bộ thể tích bình chứa."
        },
        "answer": "B",
        "explanation": "Dao động xung quanh vị trí cân bằng cố định là đặc trưng của <b>chất rắn</b>. Phân tử chất khí chuyển động tịnh tiến tự do hỗn loạn theo mọi hướng và không có vị trí cân bằng cố định.<br>⟶ Chọn <b>B</b>.",
        "prompt": "Tính chất nào sau đây <b>không phải</b> là tính chất của các phân tử chất khí?"
      },
      {
        "id": 6,
        "part": 1,
        "qnum": 6,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 6",
        "topic": "Số phân tử trong lượng chất",
        "figure": "assets/images/quiz/phys/phys_cd2_oxygen_hand.png",
        "question": "Số phân tử Oxygen (O<sub>2</sub>) có trong 1 gam khí Oxygen là bao nhiêu? (Lấy N<sub>A</sub> = 6,022 · 10<sup>23</sup> mol<sup>-1</sup>)",
        "options": {
          "A": "2,082 · 10<sup>23</sup>.",
          "B": "6,22 · 10<sup>23</sup>.",
          "C": "2,02 · 10<sup>22</sup>.",
          "D": "1,882 · 10<sup>22</sup>."
        },
        "answer": "D",
        "explanation": "Khối lượng mol của O<sub>2</sub> là M = 32 g/mol.<br>Số phân tử Oxygen trong 1 gam là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">N = m/M · N<sub>A</sub> = 1/32 × 6,022 · 10<sup>23</sup> ≈ 1,882 · 10<sup>22</sup> phân tử</div><br>⟶ Chọn <b>D</b>.",
        "prompt": "Số phân tử Oxygen (O<sub>2</sub>) có trong 1 gam khí Oxygen là bao nhiêu? (Lấy N<sub>A</sub> = 6,022 · 10<sup>23</sup> mol<sup>-1</sup>)"
      },
      {
        "id": 7,
        "part": 1,
        "qnum": 7,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 7",
        "topic": "Tính chất chất khí",
        "figure": null,
        "question": "Khi nói về các tính chất của chất khí, phát biểu nào sau đây là <b>đúng</b>?",
        "options": {
          "A": "Chất khí có khối lượng riêng lớn so với chất rắn và chất lỏng.",
          "B": "Bành trướng là chỉ chiếm một phần thể tích của bình chứa.",
          "C": "Chất khí có tính dễ nén (khoảng cách phân tử lớn nên dễ thu hẹp lại).",
          "D": "Khi áp suất tác dụng lên một lượng khí tăng thì thể tích của khí tăng đáng kể."
        },
        "answer": "C",
        "explanation": "Do khoảng cách giữa các phân tử khí rất lớn nên chất khí <b>rất dễ nén</b>.<br>• A sai vì khối lượng riêng chất khí nhỏ hơn chất rắn/lỏng hàng nghìn lần.<br>• B sai vì bành trướng là chiếm toàn bộ bình chứa.<br>• D sai vì khi áp suất tăng thì thể tích giảm (V ~ 1/p).<br>⟶ Chọn <b>C</b>.",
        "prompt": "Khi nói về các tính chất của chất khí, phát biểu nào sau đây là <b>đúng</b>?"
      },
      {
        "id": 8,
        "part": 1,
        "qnum": 8,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 8",
        "topic": "Quan hệ áp suất và thể tích",
        "figure": null,
        "question": "Với một lượng khí không đổi ở nhiệt độ không đổi, áp suất của khí càng lớn thì thể tích của khối khí sẽ có xu hướng",
        "options": {
          "A": "giảm đi.",
          "B": "tăng lên.",
          "C": "không thay đổi.",
          "D": "biến thiên tuần hoàn."
        },
        "answer": "A",
        "explanation": "Theo định luật Boyle: Ở nhiệt độ không đổi, áp suất tỉ lệ nghịch với thể tích (p ~ 1/V). Do đó, khi áp suất của khí càng lớn thì thể tích khối khí có xu hướng <b>giảm đi</b>.<br>⟶ Chọn <b>A</b>.",
        "prompt": "Với một lượng khí không đổi ở nhiệt độ không đổi, áp suất của khí càng lớn thì thể tích của khối khí sẽ có xu hướng"
      },
      {
        "id": 9,
        "part": 1,
        "qnum": 9,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 9",
        "topic": "Thể tích mol chất khí",
        "figure": null,
        "question": "Thông tin nào sau đây là <b>không đúng</b> khi nói về khối lượng mol và thể tích mol của một chất?",
        "options": {
          "A": "Khối lượng mol của một chất được đo bằng khối lượng của một mol chất ấy.",
          "B": "Ở điều kiện tiêu chuẩn (0°C và 1 atm) thể tích mol của các chất khí khác nhau thì khác nhau.",
          "C": "Thể tích mol của một chất được đo bằng thể tích của một mol chất ấy.",
          "D": "Ở điều kiện tiêu chuẩn cũ (0°C và 1 atm) thể tích mol của mọi chất khí đều bằng 22,4 lít."
        },
        "answer": "B",
        "explanation": "Theo định luật Avogadro, ở cùng điều kiện nhiệt độ và áp suất tiêu chuẩn (0°C, 1 atm), một mol của bất kì chất khí nào cũng đều chiếm một thể tích bằng nhau và xấp xỉ <b>22,4 lít</b>. Do đó phát biểu 'thể tích mol của các chất khí khác nhau thì khác nhau' là <b>không đúng</b>.<br>⟶ Chọn <b>B</b>.",
        "prompt": "Thông tin nào sau đây là <b>không đúng</b> khi nói về khối lượng mol và thể tích mol của một chất?"
      },
      {
        "id": 10,
        "part": 1,
        "qnum": 10,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 10",
        "topic": "Thí nghiệm nhiệt khí",
        "figure": "assets/images/quiz/phys/phys_cd2_oil_drop_tube.png",
        "question": "Hình bên vẽ một bình cầu chứa không khí bị giữ lại bởi một giọt dầu trong ống thuỷ tinh hẹp. Khi dùng tay áp vào bình làm không khí nóng lên, giọt dầu trong ống dâng lên cao. Phát biểu nào dưới đây là <b>không chính xác</b>?",
        "options": {
          "A": "Các phân tử khí chuyển động nhanh hơn.",
          "B": "Các phân tử khí va chạm vào thành bình với xung lực lớn hơn.",
          "C": "Các phân tử khí nở to ra và trở nên lớn hơn.",
          "D": "Khoảng cách trung bình giữa các phân tử khí tăng lên."
        },
        "answer": "C",
        "explanation": "Khi nhiệt độ tăng, các phân tử khí chuyển động nhanh hơn, khoảng cách giữa chúng tăng lên làm khối khí dãn nở đẩy giọt dầu dâng lên. Bản thân <b>kích thước của từng phân tử không hề thay đổi hay nở to ra</b>. Do đó phát biểu 'phân tử khí trở nên lớn hơn' là <b>sai</b>.<br>⟶ Chọn <b>C</b>.",
        "prompt": "Hình bên vẽ một bình cầu chứa không khí bị giữ lại bởi một giọt dầu trong ống thuỷ tinh hẹp. Khi dùng tay áp vào bình làm không khí nóng lên, giọt dầu trong ống dâng lên cao. Phát biểu nào dưới đây là <b>không chính xác</b>?"
      },
      {
        "id": 11,
        "part": 1,
        "qnum": 11,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 11",
        "topic": "Khí lí tưởng",
        "figure": null,
        "question": "Trong các phát biểu sau đây về mô hình khí lí tưởng, phát biểu <b>không đúng</b> là:",
        "options": {
          "A": "Khí lí tưởng là khí mà khối lượng của các phân tử có thể bỏ qua.",
          "B": "Khí lí tưởng là khí mà các phân tử chỉ tương tác với nhau khi va chạm.",
          "C": "Khí lí tưởng là khí mà thể tích riêng của các phân tử có thể bỏ qua.",
          "D": "Khí lí tưởng gây ra áp suất lên thành bình khi các phân tử va chạm với thành bình."
        },
        "answer": "A",
        "explanation": "Phân tử khí lí tưởng luôn có khối lượng xác định. Khối lượng của phân tử không thể bỏ qua.<br>⟶ Chọn <b>A</b>.",
        "prompt": "Trong các phát biểu sau đây về mô hình khí lí tưởng, phát biểu <b>không đúng</b> là:"
      },
      {
        "id": 12,
        "part": 1,
        "qnum": 12,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 12",
        "topic": "Số Avogadro",
        "figure": null,
        "question": "Số Avogadro N<sub>A</sub> có giá trị <b>khác</b> với số hạt có trong trường hợp nào sau đây?",
        "options": {
          "A": "Số nguyên tử chứa trong 4 gam khí Helium (M=4).",
          "B": "Số phân tử chứa trong 18 gam nước lỏng H<sub>2</sub>O (M=18).",
          "C": "Số nguyên tử chứa trong 22,4 lít khí trơ Helium ở 0°C và 1 atm.",
          "D": "Số phân tử chứa trong 16 gam khí Oxygen O<sub>2</sub> (M=32)."
        },
        "answer": "D",
        "explanation": "Số Avogadro là số hạt trong 1 mol chất (N<sub>A</sub> ≈ 6,02 · 10<sup>23</sup> hạt):<br>• 4 g He = 1 mol He ⟹ N<sub>A</sub> nguyên tử.<br>• 18 g H<sub>2</sub>O = 1 mol H<sub>2</sub>O ⟹ N<sub>A</sub> phân tử.<br>• 22,4 lít khí trơ ở đktc = 1 mol ⟹ N<sub>A</sub> nguyên tử.<br>• 16 g O<sub>2</sub>: n = 16/32 = 0,5 mol ⟹ 0,5N<sub>A</sub> phân tử (khác N<sub>A</sub>).<br>⟶ Chọn <b>D</b>.",
        "prompt": "Số Avogadro N<sub>A</sub> có giá trị <b>khác</b> với số hạt có trong trường hợp nào sau đây?"
      },
      {
        "id": 13,
        "part": 1,
        "qnum": 13,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 13",
        "topic": "Khối lượng phân tử",
        "figure": null,
        "question": "Cho các khí: H<sub>2</sub>, He, O<sub>2</sub> và N<sub>2</sub>. Phát biểu nào sau đây là <b>đúng</b>?",
        "options": {
          "A": "Khối lượng phân tử của các khí H<sub>2</sub>, He, O<sub>2</sub> và N<sub>2</sub> đều bằng nhau.",
          "B": "Khối lượng phân tử của N<sub>2</sub> nặng nhất trong 4 loại khí trên.",
          "C": "Khối lượng phân tử của He nhẹ nhất trong 4 loại khí trên.",
          "D": "Khối lượng phân tử của O<sub>2</sub> nặng nhất trong 4 loại khí trên."
        },
        "answer": "D",
        "explanation": "Khối lượng phân tử/nguyên tử của các chất khí:<br>• M<sub>H<sub>2</sub></sub> = 2 g/mol (nhẹ nhất).<br>• M<sub>He</sub> = 4 g/mol.<br>• M<sub>N<sub>2</sub></sub> = 28 g/mol.<br>• M<sub>O<sub>2</sub></sub> = 32 g/mol (nặng nhất).<br>⟶ Chọn <b>D</b>.",
        "prompt": "Cho các khí: H<sub>2</sub>, He, O<sub>2</sub> và N<sub>2</sub>. Phát biểu nào sau đây là <b>đúng</b>?"
      },
      {
        "id": 14,
        "part": 1,
        "qnum": 14,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 14",
        "topic": "Khí lí tưởng",
        "figure": null,
        "question": "Câu nào sau đây nói về các phân tử khí lí tưởng là <b>không đúng</b>?",
        "options": {
          "A": "Có lực tương tác giữa các phân tử không đáng kể khi chưa va chạm.",
          "B": "Có khối lượng không đáng kể (coi như bằng 0).",
          "C": "Có thể tích riêng không đáng kể so với thể tích bình chứa.",
          "D": "Có khối lượng xác định khác không."
        },
        "answer": "B",
        "explanation": "Khối lượng của phân tử khí lí tưởng luôn xác định và không thể coi bằng không hay không đáng kể.<br>⟶ Chọn <b>B</b>.",
        "prompt": "Câu nào sau đây nói về các phân tử khí lí tưởng là <b>không đúng</b>?"
      },
      {
        "id": 15,
        "part": 1,
        "qnum": 15,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 15",
        "topic": "Khoảng cách phân tử khí",
        "figure": null,
        "question": "Phát biểu nào sau đây là <b>sai</b> khi nói về chất khí?",
        "options": {
          "A": "Các phân tử khí ở rất gần nhau.",
          "B": "Chất khí không có hình dạng và thể tích riêng xác định.",
          "C": "Lực tương tác giữa các phân tử khí khi ở xa nhau là rất yếu.",
          "D": "Chất khí luôn chiếm toàn bộ thể tích bình chứa và có thể nén được dễ dàng."
        },
        "answer": "A",
        "explanation": "Ở thể khí, khoảng cách giữa các phân tử rất lớn (gấp hàng chục đến hàng trăm lần kích thước phân tử), nên phát biểu 'ở rất gần nhau' là <b>hoàn toàn sai</b> (đây là đặc điểm của thể rắn và thể lỏng).<br>⟶ Chọn <b>A</b>.",
        "prompt": "Phát biểu nào sau đây là <b>sai</b> khi nói về chất khí?"
      },
      {
        "id": 16,
        "part": 1,
        "qnum": 16,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 16",
        "topic": "Tính dễ nén",
        "figure": null,
        "question": "Chất khí có tính dễ nén là do nguyên nhân chính nào sau đây?",
        "options": {
          "A": "Khoảng cách giữa các phân tử khí rất lớn so với kích thước của chúng.",
          "B": "Các phân tử khí chuyển động hỗn loạn không ngừng.",
          "C": "Các phân tử bay tự do về mọi phía.",
          "D": "Khối lượng của các phân tử khí rất nhỏ."
        },
        "answer": "A",
        "explanation": "Khoảng trống giữa các phân tử khí rất lớn, do đó khi có ngoại lực nén ép, các khoảng trống này dễ dàng bị thu hẹp lại, làm thể tích khí giảm đáng kể.<br>⟶ Chọn <b>A</b>.",
        "prompt": "Chất khí có tính dễ nén là do nguyên nhân chính nào sau đây?"
      },
      {
        "id": 17,
        "part": 1,
        "qnum": 17,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 17",
        "topic": "Tính số mol chất khí",
        "figure": null,
        "question": "Một khối lượng 4 gam khí Oxygen (O<sub>2</sub>) tương ứng với bao nhiêu mol khí?",
        "options": {
          "A": "0,15 mol.",
          "B": "0,5 mol.",
          "C": "0,125 mol.",
          "D": "0,2 mol."
        },
        "answer": "C",
        "explanation": "Số mol khí Oxygen là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = m/M = 4/32 = 0,125 mol</div><br>⟶ Chọn <b>C</b>.",
        "prompt": "Một khối lượng 4 gam khí Oxygen (O<sub>2</sub>) tương ứng với bao nhiêu mol khí?"
      },
      {
        "id": 18,
        "part": 1,
        "qnum": 18,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 18",
        "topic": "Số nguyên tử trong phân tử nước",
        "figure": null,
        "question": "Trong 1 mol nước (H<sub>2</sub>O) có chứa bao nhiêu nguyên tử cấu thành? (Lấy số Avogadro N<sub>A</sub> = 6,022 · 10<sup>23</sup> mol<sup>-1</sup>)",
        "options": {
          "A": "18,066 · 10<sup>23</sup> nguyên tử.",
          "B": "6,022 · 10<sup>23</sup> nguyên tử.",
          "C": "12,044 · 10<sup>23</sup> nguyên tử.",
          "D": "8,000 · 10<sup>23</sup> nguyên tử."
        },
        "answer": "A",
        "explanation": "Mỗi phân tử nước H<sub>2</sub>O gồm 2 nguyên tử H và 1 nguyên tử O, tức là có 3 nguyên tử.<br>Trong 1 mol H<sub>2</sub>O có 6,022 · 10<sup>23</sup> phân tử H<sub>2</sub>O, do đó tổng số nguyên tử là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">N = 3 × 6,022 · 10<sup>23</sup> = 18,066 · 10<sup>23</sup> nguyên tử</div><br>⟶ Chọn <b>A</b>.",
        "prompt": "Trong 1 mol nước (H<sub>2</sub>O) có chứa bao nhiêu nguyên tử cấu thành? (Lấy số Avogadro N<sub>A</sub> = 6,022 · 10<sup>23</sup> mol<sup>-1</sup>)"
      },
      {
        "id": 19,
        "part": 2,
        "qnum": 1,
        "type": "tf",
        "level": "vd",
        "label": "Phần 2 - Câu 1",
        "topic": "Số phân tử và tỉ số khối lượng",
        "figure": null,
        "question": "Cho khối lượng phân tử của nước H<sub>2</sub>O và carbon <sup>12</sup>C lần lượt là 18 g/mol và 12 g/mol. Xét tính đúng/sai của các mệnh đề sau:",
        "statements": {
          "a": "Số phân tử H<sub>2</sub>O có trong 2 gam nước là 69,9 · 10<sup>22</sup> phân tử.",
          "b": "Tỉ số khối lượng của một phân tử nước và một nguyên tử carbon <sup>12</sup>C bằng 1,5.",
          "c": "Một lượng 9 g nước tương ứng với 5 mol nước.",
          "d": "Số nguyên tử carbon chứa trong 1 mol <sup>12</sup>C là 6,02 · 10<sup>23</sup> nguyên tử."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "<b>a) Sai.</b> Số phân tử nước trong 2 gam là: N = m/M · N<sub>A</sub> = 2/18 × 6,02 · 10<sup>23</sup> ≈ 6,69 · 10<sup>22</sup> phân tử.<br><b>b) Đúng.</b> Tỉ số khối lượng: (m<sub>H<sub>2</sub>O</sub>) / (m<sub><sup>12</sup>C</sub>) = (M<sub>H<sub>2</sub>O</sub>) / (M<sub><sup>12</sup>C</sub>) = 18/12 = 1,5.<br><b>c) Sai.</b> Số mol của 9 g nước là: n = 9/18 = 0,5 mol (không phải 5 mol).<br><b>d) Đúng.</b> 1 mol chất bất kì luôn chứa đúng số Avogadro N<sub>A</sub> ≈ 6,02 · 10<sup>23</sup> hạt vi mô.",
        "prompt": "Cho khối lượng phân tử của nước H<sub>2</sub>O và carbon <sup>12</sup>C lần lượt là 18 g/mol và 12 g/mol. Xét tính đúng/sai của các mệnh đề sau:",
        "items": {
          "a": "Số phân tử H<sub>2</sub>O có trong 2 gam nước là 69,9 · 10<sup>22</sup> phân tử.",
          "b": "Tỉ số khối lượng của một phân tử nước và một nguyên tử carbon <sup>12</sup>C bằng 1,5.",
          "c": "Một lượng 9 g nước tương ứng với 5 mol nước.",
          "d": "Số nguyên tử carbon chứa trong 1 mol <sup>12</sup>C là 6,02 · 10<sup>23</sup> nguyên tử."
        },
        "answer": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        }
      },
      {
        "id": 20,
        "part": 2,
        "qnum": 2,
        "type": "tf",
        "level": "nb_th",
        "label": "Phần 2 - Câu 2",
        "topic": "Đun nóng chất khí",
        "figure": null,
        "question": "Khi đun nóng một khối lượng khí xác định trong một bình kín có thể tích không đổi, xét các hiện tượng xảy ra với các phân tử khí:",
        "statements": {
          "a": "Các phân tử khí có tốc độ chuyển động nhiệt trung bình lớn hơn.",
          "b": "Các phân tử khí xích lại gần nhau hơn.",
          "c": "Bản thân mỗi phân tử khí nở to ra hơn.",
          "d": "Các phân tử khí liên kết chặt chẽ lại với nhau thành cụm."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": false,
          "d": false
        },
        "explanation": "<b>a) Đúng.</b> Nhiệt độ tăng làm tăng động năng tịnh tiến trung bình E<sub>d</sub> = 3/2kT ⟹ tốc độ trung bình phân tử tăng.<br><b>b) Sai.</b> Thể tích bình không đổi và số lượng phân tử không đổi nên khoảng cách trung bình giữa các phân tử không đổi.<br><b>c) Sai.</b> Kích thước phân tử là thuộc tính cấu tạo nguyên tử, không nở to ra khi đun nóng.<br><b>d) Sai.</b> Khi nhiệt độ tăng, chuyển động nhiệt càng mạnh phá vỡ liên kết, các phân tử bay hỗn loạn độc lập chứ không liên kết lại.",
        "prompt": "Khi đun nóng một khối lượng khí xác định trong một bình kín có thể tích không đổi, xét các hiện tượng xảy ra với các phân tử khí:",
        "items": {
          "a": "Các phân tử khí có tốc độ chuyển động nhiệt trung bình lớn hơn.",
          "b": "Các phân tử khí xích lại gần nhau hơn.",
          "c": "Bản thân mỗi phân tử khí nở to ra hơn.",
          "d": "Các phân tử khí liên kết chặt chẽ lại với nhau thành cụm."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": false,
          "d": false
        }
      },
      {
        "id": 21,
        "part": 2,
        "qnum": 3,
        "type": "tf",
        "level": "nb_th",
        "label": "Phần 2 - Câu 3",
        "topic": "Thí nghiệm chuyển động Brown",
        "figure": "assets/images/quiz/phys/phys_cd2_brown_exp.png",
        "question": "Quan sát hình ảnh mô tả thí nghiệm chuyển động Brown của các hạt khói trong không khí dưới kính hiển vi. Xét tính đúng/sai của các nhận định sau:",
        "statements": {
          "a": "Quỹ đạo chuyển động của mỗi hạt khói là đường gãy khúc ziczac ngẫu nhiên, không có quy luật.",
          "b": "Chùm ánh sáng chiếu vào cung cấp năng lượng đẩy các hạt khói di chuyển theo đường ziczac.",
          "c": "Chùm ánh sáng trong thí nghiệm có tác dụng chiếu sáng để nhìn rõ các hạt khói phản xạ ánh sáng dưới kính hiển vi.",
          "d": "Kính hiển vi quang học trong thí nghiệm được dùng để quan sát trực tiếp chuyển động của từng phân tử không khí."
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "<b>a) Đúng.</b> Quỹ đạo của hạt khói là đường gấp khúc ziczac hỗn loạn do chịu va chạm ngẫu nhiên từ mọi phía.<br><b>b) Sai.</b> Nguồn gốc chuyển động ziczac là do va chạm của các phân tử không khí, không phải do áp suất ánh sáng.<br><b>c) Đúng.</b> Ánh sáng chiếu từ bên cạnh làm các hạt khói sáng lấp lánh (hiệu ứng Tyndall) giúp dễ quan sát qua kính hiển vi.<br><b>d) Sai.</b> Phân tử không khí có kích thước khoảng 10<sup>-10</sup> m, kính hiển vi quang học không thể quan sát được phân tử khí mà chỉ quan sát được hạt khói (kích thước khoảng 10<sup>-6</sup> m).",
        "prompt": "Quan sát hình ảnh mô tả thí nghiệm chuyển động Brown của các hạt khói trong không khí dưới kính hiển vi. Xét tính đúng/sai của các nhận định sau:",
        "items": {
          "a": "Quỹ đạo chuyển động của mỗi hạt khói là đường gãy khúc ziczac ngẫu nhiên, không có quy luật.",
          "b": "Chùm ánh sáng chiếu vào cung cấp năng lượng đẩy các hạt khói di chuyển theo đường ziczac.",
          "c": "Chùm ánh sáng trong thí nghiệm có tác dụng chiếu sáng để nhìn rõ các hạt khói phản xạ ánh sáng dưới kính hiển vi.",
          "d": "Kính hiển vi quang học trong thí nghiệm được dùng để quan sát trực tiếp chuyển động của từng phân tử không khí."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        }
      },
      {
        "id": 22,
        "part": 2,
        "qnum": 4,
        "type": "tf",
        "level": "vd",
        "label": "Phần 2 - Câu 4",
        "topic": "Thông số trạng thái khí Helium",
        "figure": null,
        "question": "Một bình kín chứa 3,01 · 10<sup>23</sup> nguyên tử khí Helium (He) ở nhiệt độ 0°C và áp suất 1 atm. Xét các mệnh đề sau:",
        "statements": {
          "a": "Khối lượng khí Helium chứa trong bình là 2,5 gam.",
          "b": "Số mol khí Helium chứa trong bình là 0,5 mol.",
          "c": "Thể tích của lượng khí Helium trong bình ở điều kiện trên là 2,11 m<sup>3</sup>.",
          "d": "1 mol khí Helium ở điều kiện tiêu chuẩn (0°C, 1 atm) chứa 6,02 · 10<sup>23</sup> nguyên tử."
        },
        "answers": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "<b>a) Sai.</b> n = (3,01 · 10<sup>23</sup>) / (6,02 · 10<sup>23</sup>) = 0,5 mol ⟹ m = 0,5 × 4 = 2 g (không phải 2,5 g).<br><b>b) Đúng.</b> n = 0,5 mol.<br><b>c) Sai.</b> Thể tích khí ở đktc: V = n · 22,4 = 0,5 × 22,4 = 11,2 lít = 0,0112 m<sup>3</sup> (không phải 2,11 m<sup>3</sup>).<br><b>d) Đúng.</b> 1 mol chất luôn chứa đúng số Avogadro N<sub>A</sub> ≈ 6,02 · 10<sup>23</sup> nguyên tử.",
        "prompt": "Một bình kín chứa 3,01 · 10<sup>23</sup> nguyên tử khí Helium (He) ở nhiệt độ 0°C và áp suất 1 atm. Xét các mệnh đề sau:",
        "items": {
          "a": "Khối lượng khí Helium chứa trong bình là 2,5 gam.",
          "b": "Số mol khí Helium chứa trong bình là 0,5 mol.",
          "c": "Thể tích của lượng khí Helium trong bình ở điều kiện trên là 2,11 m<sup>3</sup>.",
          "d": "1 mol khí Helium ở điều kiện tiêu chuẩn (0°C, 1 atm) chứa 6,02 · 10<sup>23</sup> nguyên tử."
        },
        "answer": {
          "a": false,
          "b": true,
          "c": false,
          "d": true
        }
      },
      {
        "id": 23,
        "part": 3,
        "qnum": 1,
        "type": "sa",
        "level": "nb_th",
        "label": "Phần 3 - Câu 1",
        "topic": "Số mol khí Chlorine",
        "figure": null,
        "question": "Biết khối lượng của 1 mol khí Chlorine (Cl<sub>2</sub>) là 70 g. Một khối lượng 168 g khí Chlorine là khối lượng của bao nhiêu mol khí này?",
        "answer": "2.4",
        "explanation": "Số mol khí Chlorine là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = m/M = 168/70 = 2,4 mol</div>",
        "prompt": "Biết khối lượng của 1 mol khí Chlorine (Cl<sub>2</sub>) là 70 g. Một khối lượng 168 g khí Chlorine là khối lượng của bao nhiêu mol khí này?"
      },
      {
        "id": 24,
        "part": 3,
        "qnum": 2,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 2",
        "topic": "Thể tích khí Helium đktc",
        "figure": null,
        "question": "Bình kín đựng khí Helium chứa 3,01 · 10<sup>23</sup> nguyên tử Helium ở điều kiện 0°C và áp suất trong bình là 1 atm. Thể tích của bình đựng khí trên là bao nhiêu lít? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, thể tích mol đktc là 22,4 lít)",
        "answer": "11.2",
        "explanation": "Số mol khí Helium là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (3,01 · 10<sup>23</sup>) / (6,02 · 10<sup>23</sup>) = 0,5 mol</div><br>Thể tích bình chứa khí ở đktc là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">V = n · V<sub>0</sub> = 0,5 × 22,4 = 11,2 lít</div>",
        "prompt": "Bình kín đựng khí Helium chứa 3,01 · 10<sup>23</sup> nguyên tử Helium ở điều kiện 0°C và áp suất trong bình là 1 atm. Thể tích của bình đựng khí trên là bao nhiêu lít? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, thể tích mol đktc là 22,4 lít)"
      },
      {
        "id": 25,
        "part": 3,
        "qnum": 3,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 3",
        "topic": "Thể tích Helium theo dm3",
        "figure": null,
        "question": "Ở điều kiện tiêu chuẩn (0°C, 1 atm), một khối lượng 16 g Helium có thể tích là bao nhiêu dm<sup>3</sup>?",
        "answer": "89.6",
        "explanation": "Số mol khí Helium (M = 4 g/mol) là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = m/M = 16/4 = 4 mol</div><br>Thể tích khí ở đktc là (1 lít = 1 dm<sup>3</sup>):<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">V = n · 22,4 = 4 × 22,4 = 89,6 dm<sup>3</sup></div>",
        "prompt": "Ở điều kiện tiêu chuẩn (0°C, 1 atm), một khối lượng 16 g Helium có thể tích là bao nhiêu dm<sup>3</sup>?"
      },
      {
        "id": 26,
        "part": 3,
        "qnum": 4,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 4",
        "topic": "Khối lượng Nitrogen từ số hạt",
        "figure": null,
        "question": "Một bình kín chứa 11,61 · 10<sup>23</sup> phân tử khí Nitrogen (N<sub>2</sub>). Khối lượng khí Nitrogen trong bình là bao nhiêu gam? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, M<sub>N<sub>2</sub></sub> = 28 g/mol)",
        "answer": "54",
        "explanation": "Số mol khí Nitrogen là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (11,61 · 10<sup>23</sup>) / (6,02 · 10<sup>23</sup>) ≈ 1,9286 mol</div><br>Khối lượng khí Nitrogen trong bình là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">m = n · M = 1,9286 × 28 ≈ 54 gam</div>",
        "prompt": "Một bình kín chứa 11,61 · 10<sup>23</sup> phân tử khí Nitrogen (N<sub>2</sub>). Khối lượng khí Nitrogen trong bình là bao nhiêu gam? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, M<sub>N<sub>2</sub></sub> = 28 g/mol)"
      },
      {
        "id": 27,
        "part": 3,
        "qnum": 5,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 5",
        "topic": "Khối lượng Helium",
        "figure": null,
        "question": "Bình kín đựng khí Helium chứa 1,505 · 10<sup>23</sup> nguyên tử Helium ở điều kiện 0°C và áp suất trong bình là 1 atm. Khối lượng Helium có trong bình là bao nhiêu gam? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, M<sub>He</sub> = 4 g/mol)",
        "answer": "1",
        "explanation": "Số mol khí Helium là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (1,505 · 10<sup>23</sup>) / (6,02 · 10<sup>23</sup>) = 0,25 mol</div><br>Khối lượng Helium trong bình là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">m = n · M = 0,25 × 4 = 1 gam</div>",
        "prompt": "Bình kín đựng khí Helium chứa 1,505 · 10<sup>23</sup> nguyên tử Helium ở điều kiện 0°C và áp suất trong bình là 1 atm. Khối lượng Helium có trong bình là bao nhiêu gam? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, M<sub>He</sub> = 4 g/mol)"
      },
      {
        "id": 28,
        "part": 3,
        "qnum": 6,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 6",
        "topic": "Khối lượng nước từ số hạt",
        "figure": null,
        "question": "Một mẫu nước chứa 10,03 · 10<sup>23</sup> phân tử H<sub>2</sub>O tương ứng với khối lượng bao nhiêu gam nước? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, M<sub>H<sub>2</sub>O</sub> = 18 g/mol)",
        "answer": "30",
        "explanation": "Số mol nước là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (10,03 · 10<sup>23</sup>) / (6,02 · 10<sup>23</sup>) ≈ 1,666 mol</div><br>Khối lượng nước là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">m = n · M = 1,666 × 18 ≈ 30 gam</div>",
        "prompt": "Một mẫu nước chứa 10,03 · 10<sup>23</sup> phân tử H<sub>2</sub>O tương ứng với khối lượng bao nhiêu gam nước? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, M<sub>H<sub>2</sub>O</sub> = 18 g/mol)"
      }
    ]
  },
  "ly_cd2_mucdo": {
    "code": "ly_cd2_mucdo",
    "num": 7,
    "group": "khilituong",
    "title": "CHUYÊN ĐỀ 2: BÀI TẬP PHÂN HÓA THEO MỨC ĐỘ — KHÍ LÍ TƯỞNG",
    "shortTitle": "CĐ2: Phân mức độ (45 câu)",
    "subtitle": "Vật lí 12 • 30 câu ABCD • 7 câu Đúng/Sai • 8 câu Trả lời ngắn",
    "questions": [
      {
        "id": 1,
        "part": 1,
        "qnum": 1,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 1",
        "topic": "Chuyển động Brown",
        "figure": null,
        "prompt": "Chuyển động Brown xảy ra trong môi trường nào?",
        "question": "Chuyển động Brown xảy ra trong môi trường nào?",
        "options": {
          "A": "Chỉ trong chất lỏng.",
          "B": "Chỉ trong chất khí.",
          "C": "Cả chất lỏng và chất khí.",
          "D": "Chỉ trong chất rắn."
        },
        "answer": "C",
        "explanation": "Chuyển động Brown là chuyển động hỗn loạn không ngừng của các hạt rất nhỏ (như hạt phấn hoa, hạt khói, bụi...) lơ lửng trong <b>cả chất lỏng và chất khí</b>, do sự va chạm không cân bằng của các phân tử môi trường vào hạt.<br>⟶ Chọn <b>C</b>."
      },
      {
        "id": 2,
        "part": 1,
        "qnum": 2,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 2",
        "topic": "Cấu tạo chất khí",
        "figure": null,
        "prompt": "Chất khí được cấu tạo từ các phân tử có đặc điểm gì?",
        "question": "Chất khí được cấu tạo từ các phân tử có đặc điểm gì?",
        "options": {
          "A": "Kích thước lớn so với khoảng cách giữa chúng.",
          "B": "Kích thước rất nhỏ so với khoảng cách giữa chúng.",
          "C": "Không chuyển động.",
          "D": "Không có tương tác với nhau trong mọi trường hợp."
        },
        "answer": "B",
        "explanation": "Các phân tử khí có kích thước <b>rất nhỏ so với khoảng cách giữa chúng</b> (khoảng cách trung bình giữa các phân tử khí lớn gấp cỡ hàng chục lần kích thước phân tử), nhờ đó chúng chuyển động hỗn loạn tự do.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 3,
        "part": 1,
        "qnum": 3,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 3",
        "topic": "Nhiệt độ và chuyển động nhiệt",
        "figure": null,
        "prompt": "Nhiệt độ của khí càng cao thì tốc độ chuyển động hỗn loạn của các phân tử khí sẽ:",
        "question": "Nhiệt độ của khí càng cao thì tốc độ chuyển động hỗn loạn của các phân tử khí sẽ:",
        "options": {
          "A": "Giảm.",
          "B": "Tăng.",
          "C": "Không đổi.",
          "D": "Giảm rồi tăng."
        },
        "answer": "B",
        "explanation": "Nhiệt độ là số đo động năng chuyển động nhiệt trung bình của các phân tử. Do đó, nhiệt độ càng cao thì các phân tử khí chuyển động hỗn loạn <b>càng nhanh (tốc độ tăng)</b>.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 4,
        "part": 1,
        "qnum": 4,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 4",
        "topic": "Tốc độ trung bình phân tử khí",
        "figure": null,
        "prompt": "Ở điều kiện tiêu chuẩn (0°C, 1 atm), tốc độ trung bình của các phân tử khí trong không khí vào khoảng bao nhiêu?",
        "question": "Ở điều kiện tiêu chuẩn (0°C, 1 atm), tốc độ trung bình của các phân tử khí trong không khí vào khoảng bao nhiêu?",
        "options": {
          "A": "100 m/s.",
          "B": "200 m/s.",
          "C": "300 m/s.",
          "D": "400 m/s."
        },
        "answer": "D",
        "explanation": "Ở điều kiện tiêu chuẩn (T = 273 K, p = 1 atm), các phân tử khí chuyển động với tốc độ trung bình rất lớn, vào khoảng <b>400 m/s</b> (cỡ vài trăm mét trên giây).<br>⟶ Chọn <b>D</b>."
      },
      {
        "id": 5,
        "part": 1,
        "qnum": 5,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 5",
        "topic": "Lực liên kết phân tử",
        "figure": null,
        "prompt": "Lực liên kết giữa các phân tử khí so với lực liên kết trong thể lỏng và thể rắn như thế nào?",
        "question": "Lực liên kết giữa các phân tử khí so với lực liên kết trong thể lỏng và thể rắn như thế nào?",
        "options": {
          "A": "Mạnh hơn.",
          "B": "Yếu hơn rất nhiều.",
          "C": "Bằng nhau.",
          "D": "Không có lực liên kết ở bất kì khoảng cách nào."
        },
        "answer": "B",
        "explanation": "Do khoảng cách giữa các phân tử ở thể khí rất lớn so với kích thước phân tử, nên lực liên kết phân tử ở thể khí <b>yếu hơn rất nhiều</b> so với ở thể lỏng và thể rắn.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 6,
        "part": 1,
        "qnum": 6,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 6",
        "topic": "Áp suất chất khí",
        "figure": null,
        "prompt": "Khi các phân tử khí va chạm vào thành bình, chúng gây ra hiện tượng gì?",
        "question": "Khi các phân tử khí va chạm vào thành bình, chúng gây ra hiện tượng gì?",
        "options": {
          "A": "Nhiệt độ thành bình giảm.",
          "B": "Áp suất lên thành bình.",
          "C": "Khối lượng thành bình giảm.",
          "D": "Tăng kích thước của phân tử."
        },
        "answer": "B",
        "explanation": "Khi va chạm vào thành bình, các phân tử khí truyền động lượng cho thành bình, tác dụng lực vuông góc lên diện tích thành bình và gây ra <b>áp suất chất khí</b>.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 7,
        "part": 1,
        "qnum": 7,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 7",
        "topic": "Mô hình khí lí tưởng",
        "figure": null,
        "prompt": "Mô hình động học phân tử chất khí lí tưởng giả định rằng các phân tử khí:",
        "question": "Mô hình động học phân tử chất khí lí tưởng giả định rằng các phân tử khí:",
        "options": {
          "A": "Luôn hút nhau ở mọi khoảng cách.",
          "B": "Luôn đẩy nhau ở mọi khoảng cách.",
          "C": "Không tương tác với nhau khi không va chạm.",
          "D": "Có kích thước lớn so với khoảng cách giữa chúng."
        },
        "answer": "C",
        "explanation": "Theo mô hình khí lí tưởng, khi chưa va chạm, lực tương tác giữa các phân tử khí rất yếu nên <b>coi như không tương tác</b>; chúng chỉ tương tác với nhau khi va chạm.<br>⟶ Chọn <b>C</b>."
      },
      {
        "id": 8,
        "part": 1,
        "qnum": 8,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 8",
        "topic": "Va chạm khí lí tưởng",
        "figure": null,
        "prompt": "Khi các phân tử khí lí tưởng va chạm vào thành bình chứa, chúng:",
        "question": "Khi các phân tử khí lí tưởng va chạm vào thành bình chứa, chúng:",
        "options": {
          "A": "Bị mất hoàn toàn động lượng.",
          "B": "Truyền động lượng cho thành bình và bật ngược trở lại.",
          "C": "Tăng kích thước phân tử.",
          "D": "Làm giảm nhiệt độ của thành bình."
        },
        "answer": "B",
        "explanation": "Va chạm giữa phân tử khí lí tưởng và thành bình là va chạm hoàn toàn đàn hồi. Khi va chạm, phân tử khí <b>truyền động lượng cho thành bình</b> và bật ngược trở lại.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 9,
        "part": 1,
        "qnum": 9,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 9",
        "topic": "Thể tích mol đktc",
        "figure": null,
        "prompt": "Thể tích mol của mọi chất khí ở điều kiện tiêu chuẩn cũ (0°C, 1 atm) là:",
        "question": "Thể tích mol của mọi chất khí ở điều kiện tiêu chuẩn cũ (0°C, 1 atm) là:",
        "options": {
          "A": "22,4 lít.",
          "B": "20 lít.",
          "C": "24,79 lít.",
          "D": "30 lít."
        },
        "answer": "A",
        "explanation": "Ở điều kiện tiêu chuẩn (0°C, 1 atm), 1 mol của mọi chất khí đều chiếm thể tích bằng nhau và xấp xỉ <b>22,4 lít</b>.<br>⟶ Chọn <b>A</b>."
      },
      {
        "id": 10,
        "part": 1,
        "qnum": 10,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 10",
        "topic": "Bản chất nhiệt độ",
        "figure": null,
        "prompt": "Tại sao nhiệt độ cao làm tăng tốc độ chuyển động của các phân tử khí?",
        "question": "Tại sao nhiệt độ cao làm tăng tốc độ chuyển động của các phân tử khí?",
        "options": {
          "A": "Vì phân tử khí nở to hơn.",
          "B": "Vì động năng chuyển động nhiệt trung bình của các phân tử tăng.",
          "C": "Vì lực hút giữa các phân tử khí tăng lên.",
          "D": "Vì áp suất chất khí giảm đi."
        },
        "answer": "B",
        "explanation": "Nhiệt độ tuyệt đối của khối khí tỉ lệ thuận với động năng tịnh tiến trung bình của các phân tử khí: E<sub>d</sub> = 1/2m{v<sup>2</sup>} = 3/2kT. Do đó khi nhiệt độ tăng, động năng tăng kéo theo <b>tốc độ chuyển động nhiệt tăng</b>.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 11,
        "part": 1,
        "qnum": 11,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 11",
        "topic": "Lực tương tác phân tử",
        "figure": null,
        "prompt": "Lực tương tác giữa các phân tử khí bao gồm:",
        "question": "Lực tương tác giữa các phân tử khí bao gồm:",
        "options": {
          "A": "Chỉ có lực hút phân tử.",
          "B": "Chỉ có lực đẩy phân tử.",
          "C": "Cả lực hút và lực đẩy phân tử (lực liên kết phân tử).",
          "D": "Chỉ thuần túy là lực hấp dẫn giữa các khối lượng."
        },
        "answer": "C",
        "explanation": "Giữa các phân tử đồng thời tồn tại <b>cả lực hút và lực đẩy</b>, gọi chung là lực tương tác phân tử (lực liên kết phân tử). Tùy thuộc vào khoảng cách giữa chúng mà lực hút hay lực đẩy chiếm ưu thế.<br>⟶ Chọn <b>C</b>."
      },
      {
        "id": 12,
        "part": 1,
        "qnum": 12,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 12",
        "topic": "Điều kiện tiêu chuẩn",
        "figure": null,
        "prompt": "Điều kiện tiêu chuẩn (đktc truyền thống trong Vật lí) tương ứng với thông số nào?",
        "question": "Điều kiện tiêu chuẩn (đktc truyền thống trong Vật lí) tương ứng với thông số nào?",
        "options": {
          "A": "T = 0°C và p = 2 atm.",
          "B": "T = 100°C và p = 1 atm.",
          "C": "T = 273 K (0°C) và p = 1 atm.",
          "D": "T = 0 K và p = 1 atm."
        },
        "answer": "C",
        "explanation": "Điều kiện tiêu chuẩn (đktc) trong chương trình truyền thống được định nghĩa ở nhiệt độ 0°C (273 K) và áp suất 1 atm (1,013 · 10<sup>5</sup> Pa).<br>⟶ Chọn <b>C</b>."
      },
      {
        "id": 13,
        "part": 1,
        "qnum": 13,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 13",
        "topic": "Chuyển động phân tử khí lí tưởng",
        "figure": null,
        "prompt": "Trong mô hình khí lí tưởng, giữa hai va chạm liên tiếp, các phân tử khí chuyển động như thế nào?",
        "question": "Trong mô hình khí lí tưởng, giữa hai va chạm liên tiếp, các phân tử khí chuyển động như thế nào?",
        "options": {
          "A": "Chuyển động tròn đều quanh tâm bình.",
          "B": "Dao động điều hòa quanh vị trí cân bằng.",
          "C": "Chuyển động thẳng đều.",
          "D": "Chuyển động theo đường xoắn ốc."
        },
        "answer": "C",
        "explanation": "Vì khi chưa va chạm lực tương tác giữa các phân tử khí lí tưởng không đáng kể (hợp lực bằng 0), theo định luật Quán tính (I Newton), giữa hai va chạm liên tiếp các phân tử khí <b>chuyển động thẳng đều</b>.<br>⟶ Chọn <b>C</b>."
      },
      {
        "id": 14,
        "part": 1,
        "qnum": 14,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 14",
        "topic": "Va chạm thành bình",
        "figure": null,
        "prompt": "Khi va chạm vào thành bình chứa, các phân tử khí lí tưởng sẽ:",
        "question": "Khi va chạm vào thành bình chứa, các phân tử khí lí tưởng sẽ:",
        "options": {
          "A": "Tăng kích thước lên.",
          "B": "Mất hoàn toàn cơ năng chuyển hóa thành nhiệt.",
          "C": "Truyền động lượng cho thành bình.",
          "D": "Dính chặt vào thành bình."
        },
        "answer": "C",
        "explanation": "Khi va chạm đàn hồi với thành bình, vận tốc của phân tử đổi hướng làm biến thiên động lượng Δ p&#8407;, phân tử <b>truyền động lượng cho thành bình</b> tạo nên áp lực.<br>⟶ Chọn <b>C</b>."
      },
      {
        "id": 15,
        "part": 1,
        "qnum": 15,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 15",
        "topic": "Hằng số Avogadro",
        "figure": null,
        "prompt": "Số Avogadro (N<sub>A</sub>) là:",
        "question": "Số Avogadro (N<sub>A</sub>) là:",
        "options": {
          "A": "Số phân tử có trong 1 lít chất khí ở điều kiện chuẩn.",
          "B": "Số phân tử hoặc nguyên tử có trong 1 mol chất.",
          "C": "Số nguyên tử có trong 1 gam chất bất kì.",
          "D": "Số electron có trong một nguyên tử."
        },
        "answer": "B",
        "explanation": "Hằng số Avogadro (N<sub>A</sub> ≈ 6,02 · 10<sup>23</sup> mol<sup>-1</sup>) là số hạt (phân tử hoặc nguyên tử) có trong <b>1 mol chất</b>.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 16,
        "part": 1,
        "qnum": 16,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 16",
        "topic": "Đơn vị khối lượng mol",
        "figure": null,
        "prompt": "Đơn vị thông dụng của khối lượng mol trong hóa học và vật lí là gì?",
        "question": "Đơn vị thông dụng của khối lượng mol trong hóa học và vật lí là gì?",
        "options": {
          "A": "kg.",
          "B": "mol.",
          "C": "g/mol.",
          "D": "kg/m³."
        },
        "answer": "C",
        "explanation": "Khối lượng mol (M) là khối lượng của một lượng chất tính theo gam trên mỗi mol chất, đơn vị thông dụng là <b>g/mol</b>.<br>⟶ Chọn <b>C</b>."
      },
      {
        "id": 17,
        "part": 1,
        "qnum": 17,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 17",
        "topic": "Công thức số mol",
        "figure": null,
        "prompt": "Số mol n của một mẫu vật chất có khối lượng m và khối lượng mol M được xác định bằng công thức nào?",
        "question": "Số mol n của một mẫu vật chất có khối lượng m và khối lượng mol M được xác định bằng công thức nào?",
        "options": {
          "A": "n = M/m.",
          "B": "n = m/M.",
          "C": "n = m · M.",
          "D": "n = M/N<sub>A</sub>."
        },
        "answer": "B",
        "explanation": "Số mol n của mẫu chất được tính bằng thương số giữa khối lượng m và khối lượng mol M:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = m/M</div><br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 18,
        "part": 1,
        "qnum": 18,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 18",
        "topic": "Yếu tố ảnh hưởng tốc độ phân tử",
        "figure": null,
        "prompt": "Tốc độ chuyển động nhiệt trung bình của các phân tử của một chất khí xác định phụ thuộc chủ yếu vào yếu tố nào?",
        "question": "Tốc độ chuyển động nhiệt trung bình của các phân tử của một chất khí xác định phụ thuộc chủ yếu vào yếu tố nào?",
        "options": {
          "A": "Áp suất khí quyển bên ngoài.",
          "B": "Nhiệt độ của khối khí.",
          "C": "Vị trí đặt bình chứa khí.",
          "D": "Hình dạng của bình chứa khí."
        },
        "answer": "B",
        "explanation": "Tốc độ chuyển động nhiệt trung bình của các phân tử khí phụ thuộc trực tiếp vào <b>nhiệt độ của khối khí</b>: nhiệt độ càng cao thì các phân tử chuyển động càng nhanh.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 19,
        "part": 1,
        "qnum": 19,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 19",
        "topic": "Quan hệ áp suất và nhiệt độ",
        "figure": null,
        "prompt": "Khi nhiệt độ của một lượng khí trong bình kín có thể tích không đổi tăng lên, áp suất của chất khí sẽ:",
        "question": "Khi nhiệt độ của một lượng khí trong bình kín có thể tích không đổi tăng lên, áp suất của chất khí sẽ:",
        "options": {
          "A": "Giảm xuống.",
          "B": "Tăng lên.",
          "C": "Không đổi.",
          "D": "Tăng rồi giảm."
        },
        "answer": "B",
        "explanation": "Khi nhiệt độ tăng, các phân tử khí chuyển động nhanh hơn, va chạm vào thành bình thường xuyên hơn và mạnh hơn, làm cho <b>áp suất tác dụng lên thành bình tăng lên</b>.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 20,
        "part": 1,
        "qnum": 20,
        "type": "mcq",
        "level": "nb_th",
        "label": "Phần 1 - Câu 20",
        "topic": "Khí lí tưởng",
        "figure": null,
        "prompt": "Tại sao trong mô hình khí lí tưởng, lực tương tác giữa các phân tử khí khi chưa va chạm lại được bỏ qua?",
        "question": "Tại sao trong mô hình khí lí tưởng, lực tương tác giữa các phân tử khí khi chưa va chạm lại được bỏ qua?",
        "options": {
          "A": "Vì kích thước các phân tử khí rất lớn.",
          "B": "Vì khoảng cách trung bình giữa các phân tử khí rất lớn so với kích thước của chúng.",
          "C": "Vì các phân tử khí không có khối lượng.",
          "D": "Vì các phân tử khí đứng yên không chuyển động."
        },
        "answer": "B",
        "explanation": "Trong chất khí ở áp suất thông thường, <b>khoảng cách giữa các phân tử rất lớn</b> so với kích thước của chúng, nên lực tương tác giữa các phân tử rất yếu và có thể bỏ qua khi chúng chưa va chạm.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 21,
        "part": 1,
        "qnum": 21,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 21",
        "topic": "Vận tốc phân tử và nhiệt độ",
        "figure": null,
        "prompt": "Khi nhiệt độ của một chất khí lí tưởng tăng lên, điều gì xảy ra với vận tốc (tốc độ) trung bình của các phân tử khí?",
        "question": "Khi nhiệt độ của một chất khí lí tưởng tăng lên, điều gì xảy ra với vận tốc (tốc độ) trung bình của các phân tử khí?",
        "options": {
          "A": "Tốc độ trung bình của các phân tử khí giảm đi.",
          "B": "Tốc độ trung bình của các phân tử khí không thay đổi.",
          "C": "Tốc độ trung bình của các phân tử khí tăng lên.",
          "D": "Tốc độ trung bình giảm về 0."
        },
        "answer": "C",
        "explanation": "Động năng trung bình của phân tử E<sub>d</sub> = 1/2m{v<sup>2</sup>} = 3/2kT. Khi nhiệt độ T tăng thì động năng trung bình tăng, dẫn đến <b>tốc độ trung bình của các phân tử khí tăng lên</b>.<br>⟶ Chọn <b>C</b>."
      },
      {
        "id": 22,
        "part": 1,
        "qnum": 22,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 22",
        "topic": "Thể tích mol khí",
        "figure": null,
        "prompt": "Ở điều kiện tiêu chuẩn (0°C, 1 atm), thể tích của 2 mol khí lí tưởng bất kì là bao nhiêu?",
        "question": "Ở điều kiện tiêu chuẩn (0°C, 1 atm), thể tích của 2 mol khí lí tưởng bất kì là bao nhiêu?",
        "options": {
          "A": "11,2 lít.",
          "B": "22,4 lít.",
          "C": "44,8 lít.",
          "D": "33,6 lít."
        },
        "answer": "C",
        "explanation": "Ở điều kiện tiêu chuẩn, 1 mol khí chiếm thể tích 22,4 lít. Do đó thể tích của 2 mol khí là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">V = n · V<sub>0</sub> = 2 × 22,4 = 44,8 lít</div><br>⟶ Chọn <b>C</b>."
      },
      {
        "id": 23,
        "part": 1,
        "qnum": 23,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 23",
        "topic": "Nhiệt độ giảm",
        "figure": null,
        "prompt": "Khi nhiệt độ của khối khí giảm, điều gì sẽ xảy ra với tốc độ chuyển động nhiệt trung bình của các phân tử khí?",
        "question": "Khi nhiệt độ của khối khí giảm, điều gì sẽ xảy ra với tốc độ chuyển động nhiệt trung bình của các phân tử khí?",
        "options": {
          "A": "Tăng lên.",
          "B": "Giảm xuống.",
          "C": "Không đổi.",
          "D": "Tăng gấp đôi."
        },
        "answer": "B",
        "explanation": "Nhiệt độ giảm làm giảm động năng chuyển động nhiệt trung bình của các phân tử khí, khiến tốc độ trung bình của chúng <b>giảm xuống</b>.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 24,
        "part": 1,
        "qnum": 24,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 24",
        "topic": "Động lượng va chạm",
        "figure": null,
        "prompt": "Khi một phân tử khí va chạm đàn hồi với thành bình chứa, nó sẽ:",
        "question": "Khi một phân tử khí va chạm đàn hồi với thành bình chứa, nó sẽ:",
        "options": {
          "A": "Bị thành bình hấp thụ hoàn toàn năng lượng.",
          "B": "Truyền động lượng cho thành bình và bị phản xạ ngược lại.",
          "C": "Dính vào thành bình làm tăng khối lượng thành bình.",
          "D": "Phát ra bức xạ ánh sáng nhìn thấy."
        },
        "answer": "B",
        "explanation": "Khi va chạm đàn hồi với thành bình, phân tử khí bị bật ngược trở lại, làm biến thiên động lượng của chính nó và <b>truyền động lượng cho thành bình</b>, tạo nên áp lực.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 25,
        "part": 1,
        "qnum": 25,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 25",
        "topic": "Quỹ đạo chuyển động khí lí tưởng",
        "figure": null,
        "prompt": "Trong mô hình khí lí tưởng, giữa hai va chạm liên tiếp, các phân tử khí chuyển động như thế nào?",
        "question": "Trong mô hình khí lí tưởng, giữa hai va chạm liên tiếp, các phân tử khí chuyển động như thế nào?",
        "options": {
          "A": "Chuyển động thẳng đều.",
          "B": "Chuyển động dao động tuần hoàn.",
          "C": "Chuyển động tròn đều quanh khối tâm bình.",
          "D": "Chuyển động biến đổi đều với gia tốc lớn."
        },
        "answer": "A",
        "explanation": "Trong khoảng thời gian giữa hai va chạm liên tiếp, lực tương tác giữa các phân tử khí lí tưởng triệt tiêu (coi như không có tương tác), nên theo định luật Quán tính, phân tử <b>chuyển động thẳng đều</b>.<br>⟶ Chọn <b>A</b>."
      },
      {
        "id": 26,
        "part": 1,
        "qnum": 26,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 26",
        "topic": "Tính số mol",
        "figure": null,
        "prompt": "Nếu khối lượng mol của một chất khí là 44 g/mol (khí CO<sub>2</sub>), số mol của 88 g khí đó là bao nhiêu?",
        "question": "Nếu khối lượng mol của một chất khí là 44 g/mol (khí CO<sub>2</sub>), số mol của 88 g khí đó là bao nhiêu?",
        "options": {
          "A": "1 mol.",
          "B": "2 mol.",
          "C": "3 mol.",
          "D": "4 mol."
        },
        "answer": "B",
        "explanation": "Số mol của 88 g khí là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = m/M = 88/44 = 2 mol</div><br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 27,
        "part": 1,
        "qnum": 27,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 27",
        "topic": "Khối lượng mol khí Oxi",
        "figure": null,
        "prompt": "Khối lượng của 1 mol phân tử khí Oxygen (O<sub>2</sub>) là bao nhiêu?",
        "question": "Khối lượng của 1 mol phân tử khí Oxygen (O<sub>2</sub>) là bao nhiêu?",
        "options": {
          "A": "16 g.",
          "B": "32 g.",
          "C": "48 g.",
          "D": "64 g."
        },
        "answer": "B",
        "explanation": "Mỗi nguyên tử Oxygen có khối lượng mol xấp xỉ 16 g/mol. Phân tử khí Oxygen gồm 2 nguyên tử O (O<sub>2</sub>) nên khối lượng mol phân tử là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">M = 2 × 16 = 32 g/mol</div><br>⟶ 1 mol khí O<sub>2</sub> có khối lượng là <b>32 g</b>.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 28,
        "part": 1,
        "qnum": 28,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 28",
        "topic": "Đặc điểm mô hình động học",
        "figure": null,
        "prompt": "Theo thuyết động học phân tử chất khí, các phân tử khí:",
        "question": "Theo thuyết động học phân tử chất khí, các phân tử khí:",
        "options": {
          "A": "Chuyển động thẳng đều giữa hai va chạm và va chạm hoàn toàn đàn hồi với nhau và với thành bình.",
          "B": "Chuyển động theo đường cong tròn và va chạm mềm với nhau.",
          "C": "Chuyển động ngẫu nhiên và va chạm mất năng lượng hoàn toàn.",
          "D": "Đứng yên quanh các vị trí nút mạng không gian cố định."
        },
        "answer": "A",
        "explanation": "Theo mô hình động học phân tử chất khí lí tưởng, các phân tử khí chuyển động hỗn loạn không ngừng; giữa hai va chạm chúng chuyển động thẳng đều; các va chạm giữa các phân tử với nhau và với thành bình là <b>va chạm hoàn toàn đàn hồi</b>.<br>⟶ Chọn <b>A</b>."
      },
      {
        "id": 29,
        "part": 1,
        "qnum": 29,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 29",
        "topic": "Mô hình khí lí tưởng",
        "figure": null,
        "prompt": "Mô hình khí lí tưởng được dùng để mô tả chất khí như thế nào?",
        "question": "Mô hình khí lí tưởng được dùng để mô tả chất khí như thế nào?",
        "options": {
          "A": "Các phân tử khí có kích thước lớn so với khoảng cách giữa chúng.",
          "B": "Các phân tử khí có kích thước rất nhỏ so với khoảng cách giữa chúng, chỉ tương tác khi va chạm.",
          "C": "Các phân tử khí có tính chất lưỡng tính và liên kết chặt chẽ.",
          "D": "Các phân tử khí có khối lượng vô cùng lớn so với thể tích bình chứa."
        },
        "answer": "B",
        "explanation": "Mô hình khí lí tưởng giả định các phân tử khí được coi là <b>chất điểm có kích thước rất nhỏ so với khoảng cách giữa chúng</b>, và chỉ tương tác với nhau khi va chạm đàn hồi.<br>⟶ Chọn <b>B</b>."
      },
      {
        "id": 30,
        "part": 1,
        "qnum": 30,
        "type": "mcq",
        "level": "vd",
        "label": "Phần 1 - Câu 30",
        "topic": "Đặc điểm khí lí tưởng",
        "figure": null,
        "prompt": "Điều nào sau đây <b>không phải</b> là đặc điểm của mô hình khí lí tưởng?",
        "question": "Điều nào sau đây <b>không phải</b> là đặc điểm của mô hình khí lí tưởng?",
        "options": {
          "A": "Các phân tử khí chỉ tương tác với nhau khi va chạm.",
          "B": "Các phân tử khí có kích thước rất nhỏ so với khoảng cách giữa chúng.",
          "C": "Các phân tử khí chuyển động thẳng đều giữa hai va chạm liên tiếp.",
          "D": "Các phân tử khí có kích thước lớn đáng kể so với khoảng cách giữa chúng."
        },
        "answer": "D",
        "explanation": "Trong mô hình khí lí tưởng, kích thước của phân tử khí <b>vô cùng nhỏ so với khoảng cách giữa chúng</b> (được coi là chất điểm). Do đó phát biểu 'kích thước lớn đáng kể' là <b>sai</b>.<br>⟶ Chọn <b>D</b>."
      },
      {
        "id": 31,
        "part": 2,
        "qnum": 1,
        "type": "tf",
        "level": "nb_th",
        "label": "Phần 2 - Câu 1",
        "topic": "Tính chất của khí lí tưởng",
        "figure": null,
        "prompt": "Khi nói về các tính chất của khí lí tưởng, các nhận định sau đây đúng hay sai?",
        "question": "Khi nói về các tính chất của khí lí tưởng, các nhận định sau đây đúng hay sai?",
        "items": {
          "a": "Các phân tử khí lí tưởng không tương tác với nhau khi chưa va chạm.",
          "b": "Khi nhiệt độ tăng, tốc độ chuyển động nhiệt trung bình của các phân tử khí giảm.",
          "c": "Trong khí lí tưởng, va chạm giữa các phân tử khí và với thành bình là va chạm hoàn toàn đàn hồi.",
          "d": "Các phân tử khí lí tưởng luôn ở trạng thái nghỉ (đứng yên) khi nhiệt độ bằng 0°C."
        },
        "statements": {
          "a": "Các phân tử khí lí tưởng không tương tác với nhau khi chưa va chạm.",
          "b": "Khi nhiệt độ tăng, tốc độ chuyển động nhiệt trung bình của các phân tử khí giảm.",
          "c": "Trong khí lí tưởng, va chạm giữa các phân tử khí và với thành bình là va chạm hoàn toàn đàn hồi.",
          "d": "Các phân tử khí lí tưởng luôn ở trạng thái nghỉ (đứng yên) khi nhiệt độ bằng 0°C."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "<b>Chi tiết từng nhận định:</b><br>• <b>a) Đúng:</b> Trong mô hình khí lí tưởng, khi chưa va chạm lực tương tác giữa các phân tử rất yếu nên được coi bằng 0.<br>• <b>b) Sai:</b> Nhiệt độ là số đo động năng phân tử; nhiệt độ tăng thì tốc độ trung bình của các phân tử phải <b>tăng lên</b>.<br>• <b>c) Đúng:</b> Va chạm giữa các phân tử khí và thành bình là va chạm đàn hồi hoàn toàn.<br>• <b>d) Sai:</b> Ở 0°C (273 K), các phân tử khí vẫn chuyển động hỗn loạn rất nhanh. Chúng chỉ ngừng chuyển động nhiệt tại độ không tuyệt đối (0 K = -273,15°C)."
      },
      {
        "id": 32,
        "part": 2,
        "qnum": 2,
        "type": "tf",
        "level": "nb_th",
        "label": "Phần 2 - Câu 2",
        "topic": "Mô hình khí lí tưởng",
        "figure": null,
        "prompt": "Khi nói về các đặc điểm của khí lí tưởng, các nhận định sau đây đúng hay sai?",
        "question": "Khi nói về các đặc điểm của khí lí tưởng, các nhận định sau đây đúng hay sai?",
        "items": {
          "a": "Khí lí tưởng có thể bị ngưng tụ thành chất lỏng khi hạ nhiệt độ xuống rất thấp.",
          "b": "Áp suất của một lượng khí lí tưởng xác định luôn tỉ lệ thuận với nhiệt độ Celcius (°C).",
          "c": "Các loại khí lí tưởng khác nhau thì có khối lượng mol phân tử khác nhau.",
          "d": "Trong mô hình khí lí tưởng, thể tích riêng của các phân tử khí được coi là không đáng kể so với thể tích bình chứa."
        },
        "statements": {
          "a": "Khí lí tưởng có thể bị ngưng tụ thành chất lỏng khi hạ nhiệt độ xuống rất thấp.",
          "b": "Áp suất của một lượng khí lí tưởng xác định luôn tỉ lệ thuận với nhiệt độ Celcius (°C).",
          "c": "Các loại khí lí tưởng khác nhau thì có khối lượng mol phân tử khác nhau.",
          "d": "Trong mô hình khí lí tưởng, thể tích riêng của các phân tử khí được coi là không đáng kể so với thể tích bình chứa."
        },
        "answer": {
          "a": false,
          "b": false,
          "c": true,
          "d": true
        },
        "answers": {
          "a": false,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "<b>Chi tiết từng nhận định:</b><br>• <b>a) Sai:</b> Khí lí tưởng hoàn toàn không có lực hút phân tử nên không thể ngưng tụ hóa lỏng.<br>• <b>b) Sai:</b> Áp suất khí chỉ tỉ lệ thuận với <b>nhiệt độ tuyệt đối T (Kelvin)</b>, không tỉ lệ thuận với nhiệt độ t (°C).<br>• <b>c) Đúng:</b> Mỗi chất khí có khối lượng phân tử riêng (ví dụ H<sub>2</sub>: 2 g/mol, He: 4 g/mol, O<sub>2</sub>: 32 g/mol...).<br>• <b>d) Đúng:</b> Các phân tử khí được coi là chất điểm, thể tích riêng bỏ qua so với thể tích bình."
      },
      {
        "id": 33,
        "part": 2,
        "qnum": 3,
        "type": "tf",
        "level": "nb_th",
        "label": "Phần 2 - Câu 3",
        "topic": "Tính chất của chất khí",
        "figure": null,
        "prompt": "Khi nói về tính chất chung của chất khí, các nhận định sau đây đúng hay sai?",
        "question": "Khi nói về tính chất chung của chất khí, các nhận định sau đây đúng hay sai?",
        "items": {
          "a": "Chất khí có xu hướng bành trướng chiếm toàn bộ thể tích không gian cho phép.",
          "b": "Chất khí luôn có hình dạng và thể tích cố định xác định như chất rắn.",
          "c": "Chất khí dẫn nhiệt và dẫn điện kém hơn rất nhiều so với chất rắn.",
          "d": "Khi tăng nhiệt độ của một lượng khí xác định trong bình kín có thể tích không đổi, áp suất của khí tăng lên."
        },
        "statements": {
          "a": "Chất khí có xu hướng bành trướng chiếm toàn bộ thể tích không gian cho phép.",
          "b": "Chất khí luôn có hình dạng và thể tích cố định xác định như chất rắn.",
          "c": "Chất khí dẫn nhiệt và dẫn điện kém hơn rất nhiều so với chất rắn.",
          "d": "Khi tăng nhiệt độ của một lượng khí xác định trong bình kín có thể tích không đổi, áp suất của khí tăng lên."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "<b>Chi tiết từng nhận định:</b><br>• <b>a) Đúng:</b> Lực liên kết rất yếu, các phân tử khí chuyển động hỗn loạn bành trướng chiếm toàn bộ thể tích bình chứa.<br>• <b>b) Sai:</b> Chất khí không có hình dạng và thể tích riêng xác định.<br>• <b>c) Đúng:</b> Mật độ phân tử thấp làm cho sự truyền nhiệt và điện rất kém.<br>• <b>d) Đúng:</b> Theo định luật Charles cho quá trình đẳng tích (V = const), nhiệt độ T tăng làm áp suất p tăng."
      },
      {
        "id": 34,
        "part": 2,
        "qnum": 4,
        "type": "tf",
        "level": "nb_th",
        "label": "Phần 2 - Câu 4",
        "topic": "Tính nén và khuếch tán của chất khí",
        "figure": null,
        "prompt": "Khi nói về các đặc điểm vật lí của chất khí, các nhận định sau đây đúng hay sai?",
        "question": "Khi nói về các đặc điểm vật lí của chất khí, các nhận định sau đây đúng hay sai?",
        "items": {
          "a": "Chất khí có thể nén lại rất dễ dàng so với chất rắn và chất lỏng.",
          "b": "Chất khí luôn có mật độ phân tử và khối lượng riêng cao hơn chất rắn và chất lỏng.",
          "c": "Hai chất khí khác nhau trong cùng một không gian kín có thể tự trộn lẫn hoàn toàn vào nhau.",
          "d": "Khi thể tích của một lượng khí cố định giảm, áp suất của nó sẽ tăng nếu nhiệt độ được giữ không đổi."
        },
        "statements": {
          "a": "Chất khí có thể nén lại rất dễ dàng so với chất rắn và chất lỏng.",
          "b": "Chất khí luôn có mật độ phân tử và khối lượng riêng cao hơn chất rắn và chất lỏng.",
          "c": "Hai chất khí khác nhau trong cùng một không gian kín có thể tự trộn lẫn hoàn toàn vào nhau.",
          "d": "Khi thể tích của một lượng khí cố định giảm, áp suất của nó sẽ tăng nếu nhiệt độ được giữ không đổi."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": true
        },
        "explanation": "<b>Chi tiết từng nhận định:</b><br>• <b>a) Đúng:</b> Khoảng cách phân tử lớn nên dễ dàng nén ép thể tích khí.<br>• <b>b) Sai:</b> Mật độ phân tử của chất khí nhỏ hơn hàng nghìn lần so với chất lỏng và rắn.<br>• <b>c) Đúng:</b> Hiện tượng khuếch tán cho phép các chất khí tự hòa trộn hoàn toàn vào nhau.<br>• <b>d) Đúng:</b> Theo định luật Boyle (T = const), p · V = const, thể tích giảm thì áp suất tăng."
      },
      {
        "id": 35,
        "part": 2,
        "qnum": 5,
        "type": "tf",
        "level": "nb_th",
        "label": "Phần 2 - Câu 5",
        "topic": "Tính chất cơ bản của chất khí",
        "figure": null,
        "prompt": "Xét các tính chất cơ bản của chất khí, các phát biểu sau đây đúng hay sai?",
        "question": "Xét các tính chất cơ bản của chất khí, các phát biểu sau đây đúng hay sai?",
        "items": {
          "a": "Khối lượng riêng của chất khí thay đổi phụ thuộc vào áp suất và nhiệt độ.",
          "b": "Chất khí luôn tự phát chuyển động từ nơi có áp suất cao về nơi có áp suất thấp hơn.",
          "c": "Các phân tử khí không có khả năng tự khuếch tán trong không gian.",
          "d": "Chất khí gây ra áp suất lên mọi phần diện tích của bình chứa theo mọi phương như nhau."
        },
        "statements": {
          "a": "Khối lượng riêng của chất khí thay đổi phụ thuộc vào áp suất và nhiệt độ.",
          "b": "Chất khí luôn tự phát chuyển động từ nơi có áp suất cao về nơi có áp suất thấp hơn.",
          "c": "Các phân tử khí không có khả năng tự khuếch tán trong không gian.",
          "d": "Chất khí gây ra áp suất lên mọi phần diện tích của bình chứa theo mọi phương như nhau."
        },
        "answer": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "answers": {
          "a": true,
          "b": true,
          "c": false,
          "d": true
        },
        "explanation": "<b>Chi tiết từng nhận định:</b><br>• <b>a) Đúng:</b> Khối lượng riêng ρ = m/V = pM/RT, biến thiên theo p và T.<br>• <b>b) Đúng:</b> Chênh lệch áp suất tạo lực đẩy dòng khí từ nơi áp suất cao về nơi áp suất thấp.<br>• <b>c) Sai:</b> Các phân tử chuyển động nhiệt hỗn loạn nên có khả năng khuếch tán rất mạnh.<br>• <b>d) Đúng:</b> Do chuyển động hỗn loạn đẳng hướng, áp suất khí nén lên thành bình là như nhau theo mọi hướng."
      },
      {
        "id": 36,
        "part": 2,
        "qnum": 6,
        "type": "tf",
        "level": "vd",
        "label": "Phần 2 - Câu 6",
        "topic": "Bài toán khí Oxygen trong khí cầu",
        "figure": null,
        "prompt": "Một khí cầu chứa khí Oxygen có thể tích là 22,4 lít ở điều kiện tiêu chuẩn (0°C và 1 atm). Giả sử các phân tử Oxygen có bán kính xấp xỉ r = 10<sup>-10</sup> m, bán kính Trái Đất là R = 6400 km, và lấy số Avogadro N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>. Các nhận định sau đây đúng hay sai?",
        "question": "Một khí cầu chứa khí Oxygen có thể tích là 22,4 lít ở điều kiện tiêu chuẩn (0°C và 1 atm). Giả sử các phân tử Oxygen có bán kính xấp xỉ r = 10<sup>-10</sup> m, bán kính Trái Đất là R = 6400 km, và lấy số Avogadro N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>. Các nhận định sau đây đúng hay sai?",
        "items": {
          "a": "Số phân tử Oxygen chứa trong khí cầu trên là 6,02 · 10<sup>23</sup> phân tử.",
          "b": "Một khối lượng 16 g khí Oxygen tương ứng với 1 mol khí Oxygen.",
          "c": "Nếu xếp các phân tử Oxygen này nối tiếp nhau thành một hàng thẳng thì chiều dài chuỗi là L = 1,204 · 10<sup>14</sup> m.",
          "d": "Nếu xếp tất cả các phân tử Oxygen trong khí cầu thành một chuỗi dọc theo xích đạo Trái Đất thì chuỗi đó chỉ bao quanh Trái Đất được khoảng 1,5 lần."
        },
        "statements": {
          "a": "Số phân tử Oxygen chứa trong khí cầu trên là 6,02 · 10<sup>23</sup> phân tử.",
          "b": "Một khối lượng 16 g khí Oxygen tương ứng với 1 mol khí Oxygen.",
          "c": "Nếu xếp các phân tử Oxygen này nối tiếp nhau thành một hàng thẳng thì chiều dài chuỗi là L = 1,204 · 10<sup>14</sup> m.",
          "d": "Nếu xếp tất cả các phân tử Oxygen trong khí cầu thành một chuỗi dọc theo xích đạo Trái Đất thì chuỗi đó chỉ bao quanh Trái Đất được khoảng 1,5 lần."
        },
        "answer": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "answers": {
          "a": true,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "<b>Chi tiết từng nhận định:</b><br>• <b>a) Đúng:</b> Ở đktc, V = 22,4 lít ⟹ n = 1 mol ⟹ N = 6,02 · 10<sup>23</sup> phân tử.<br>• <b>b) Sai:</b> Khí Oxygen là phân tử O<sub>2</sub> (M = 32 g/mol). Khối lượng 16 g chỉ tương ứng với n = 16/32 = 0,5 mol.<br>• <b>c) Đúng:</b> Đường kính phân tử d = 2r = 2 · 10<sup>-10</sup> m. Chiều dài chuỗi:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">L = N · d = 6,02 · 10<sup>23</sup> × 2 · 10<sup>-10</sup> = 1,204 · 10<sup>14</sup> m</div><br>• <b>d) Sai:</b> Chu vi Trái Đất C = 2π R ≈ 4,02 · 10<sup>7</sup> m. Số vòng chuỗi bao quanh:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">L/C = (1,204 · 10<sup>14</sup>) / (4,02 · 10<sup>7</sup>) ≈ 3 · 10<sup>6</sup> lần (khoảng 3 triệu lần, không phải 1,5 lần).</div>"
      },
      {
        "id": 37,
        "part": 2,
        "qnum": 7,
        "type": "tf",
        "level": "vd",
        "label": "Phần 2 - Câu 7",
        "topic": "Bài toán mẫu khí Nitrogen 14g",
        "figure": null,
        "prompt": "Xét một mẫu khí Nitrogen (N<sub>2</sub>) có khối lượng m = 14 g. Biết bán kính phân tử Nitrogen là r = 10<sup>-10</sup> m, lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, khối lượng mol của N<sub>2</sub> là 28 g/mol và của O<sub>2</sub> là 32 g/mol. Các mệnh đề sau đây đúng hay sai?",
        "question": "Xét một mẫu khí Nitrogen (N<sub>2</sub>) có khối lượng m = 14 g. Biết bán kính phân tử Nitrogen là r = 10<sup>-10</sup> m, lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, khối lượng mol của N<sub>2</sub> là 28 g/mol và của O<sub>2</sub> là 32 g/mol. Các mệnh đề sau đây đúng hay sai?",
        "items": {
          "a": "Số phân tử Nitrogen có trong mẫu khí này là 2,01 · 10<sup>23</sup> phân tử.",
          "b": "Nếu xếp các phân tử Nitrogen trong mẫu trên liền kề nhau thành một chuỗi thì chuỗi này dài 3,01 · 10<sup>13</sup> m.",
          "c": "Nếu thay mẫu trên bằng 14 g khí Oxygen (O<sub>2</sub>) có cùng bán kính phân tử thì chiều dài chuỗi là L ≈ 5,2675 · 10<sup>13</sup> m.",
          "d": "Trong cùng một khối lượng 14 g, tỉ số chiều dài giữa chuỗi phân tử N<sub>2</sub> và chuỗi phân tử O<sub>2</sub> là 1,4."
        },
        "statements": {
          "a": "Số phân tử Nitrogen có trong mẫu khí này là 2,01 · 10<sup>23</sup> phân tử.",
          "b": "Nếu xếp các phân tử Nitrogen trong mẫu trên liền kề nhau thành một chuỗi thì chuỗi này dài 3,01 · 10<sup>13</sup> m.",
          "c": "Nếu thay mẫu trên bằng 14 g khí Oxygen (O<sub>2</sub>) có cùng bán kính phân tử thì chiều dài chuỗi là L ≈ 5,2675 · 10<sup>13</sup> m.",
          "d": "Trong cùng một khối lượng 14 g, tỉ số chiều dài giữa chuỗi phân tử N<sub>2</sub> và chuỗi phân tử O<sub>2</sub> là 1,4."
        },
        "answer": {
          "a": false,
          "b": false,
          "c": true,
          "d": false
        },
        "answers": {
          "a": false,
          "b": false,
          "c": true,
          "d": false
        },
        "explanation": "<b>Chi tiết từng nhận định:</b><br>• <b>a) Sai:</b> Số mol n = 14/28 = 0,5 mol ⟹ N = 0,5 × 6,02 · 10<sup>23</sup> = 3,01 · 10<sup>23</sup> phân tử.<br>• <b>b) Sai:</b> Chiều dài chuỗi là L = N · (2r) = 3,01 · 10<sup>23</sup> × (2 · 10<sup>-10</sup>) = 6,02 · 10<sup>13</sup> m ≠ q 3,01 · 10<sup>13</sup> m.<br><i>(Lưu ý: Mệnh đề khẳng định 3,01 · 10<sup>13</sup> m là sai do chưa nhân 2 cho đường kính d = 2r; tài liệu PDF gốc in nhầm ký hiệu thành Đ).</i><br>• <b>c) Đúng:</b> Số mol O<sub>2</sub> là n = 14/32 = 0,4375 mol ⟹ N<sub>O<sub>2</sub></sub> = 2,63375 · 10<sup>23</sup>. Chiều dài chuỗi là L = N<sub>O<sub>2</sub></sub> · 2r = 5,2675 · 10<sup>13</sup> m.<br>• <b>d) Sai:</b> Tỉ số chiều dài là (L<sub>N<sub>2</sub></sub>) / (L<sub>O<sub>2</sub></sub>) = (M<sub>O<sub>2</sub></sub>) / (M<sub>N<sub>2</sub></sub>) = 32/28 ≈ 1,14 ≠ q 1,4."
      },
      {
        "id": 38,
        "part": 3,
        "qnum": 1,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 1",
        "topic": "Thể tích khí CO2 ở đktc",
        "figure": null,
        "prompt": "Ở điều kiện tiêu chuẩn (0°C, 1 atm), 44 gam Carbon Dioxide (CO<sub>2</sub>, có M = 44 g/mol) có thể tích là bao nhiêu dm<sup>3</sup> (lít)?",
        "question": "Ở điều kiện tiêu chuẩn (0°C, 1 atm), 44 gam Carbon Dioxide (CO<sub>2</sub>, có M = 44 g/mol) có thể tích là bao nhiêu dm<sup>3</sup> (lít)?",
        "answer": "22.4",
        "explanation": "Số mol khí CO<sub>2</sub> là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = m/M = 44/44 = 1 mol</div><br>Ở điều kiện tiêu chuẩn (0°C, 1 atm), 1 mol khí có thể tích là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">V = 1 × 22,4 = 22,4 lít = 22,4 dm<sup>3</sup></div>"
      },
      {
        "id": 39,
        "part": 3,
        "qnum": 2,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 2",
        "topic": "Khối lượng khí Oxygen",
        "figure": null,
        "prompt": "1,204 · 10<sup>24</sup> phân tử Oxygen (O<sub>2</sub>) tương ứng với bao nhiêu gam khí Oxygen? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, M<sub>O<sub>2</sub></sub> = 32 g/mol)",
        "question": "1,204 · 10<sup>24</sup> phân tử Oxygen (O<sub>2</sub>) tương ứng với bao nhiêu gam khí Oxygen? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>, M<sub>O<sub>2</sub></sub> = 32 g/mol)",
        "answer": "64",
        "explanation": "Số mol khí O<sub>2</sub> là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (1,204 · 10<sup>24</sup>) / (6,02 · 10<sup>23</sup>) = 2 mol</div><br>Khối lượng khí Oxygen tương ứng là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">m = n · M = 2 × 32 = 64 gam</div>"
      },
      {
        "id": 40,
        "part": 3,
        "qnum": 3,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 3",
        "topic": "Khối lượng khí Argon",
        "figure": null,
        "prompt": "Bình kín đựng khí Argon chứa 3,01 · 10<sup>23</sup> nguyên tử Argon ở điều kiện 0°C và áp suất trong bình là 1 atm. Khối lượng Argon có trong bình là bao nhiêu gam? (Biết khối lượng mol của Argon là M = 40 g/mol, lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>)",
        "question": "Bình kín đựng khí Argon chứa 3,01 · 10<sup>23</sup> nguyên tử Argon ở điều kiện 0°C và áp suất trong bình là 1 atm. Khối lượng Argon có trong bình là bao nhiêu gam? (Biết khối lượng mol của Argon là M = 40 g/mol, lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>)",
        "answer": "20",
        "explanation": "Số mol khí Argon trong bình là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (3,01 · 10<sup>23</sup>) / (6,02 · 10<sup>23</sup>) = 0,5 mol</div><br>Khối lượng khí Argon có trong bình là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">m = n · M = 0,5 × 40 = 20 gam</div>"
      },
      {
        "id": 41,
        "part": 3,
        "qnum": 4,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 4",
        "topic": "Thể tích khí Nitrogen",
        "figure": null,
        "prompt": "Bình kín đựng khí Nitrogen chứa 3,01 · 10<sup>23</sup> phân tử Nitrogen (N<sub>2</sub>) ở điều kiện 0°C và áp suất 1 atm. Thể tích của bình đựng khí trên là bao nhiêu lít? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>)",
        "question": "Bình kín đựng khí Nitrogen chứa 3,01 · 10<sup>23</sup> phân tử Nitrogen (N<sub>2</sub>) ở điều kiện 0°C và áp suất 1 atm. Thể tích của bình đựng khí trên là bao nhiêu lít? (Lấy N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>)",
        "answer": "11.2",
        "explanation": "Số mol khí N<sub>2</sub> trong bình là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (3,01 · 10<sup>23</sup>) / (6,02 · 10<sup>23</sup>) = 0,5 mol</div><br>Ở điều kiện 0°C và 1 atm (đktc), thể tích của bình đựng khí là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">V = n · V<sub>0</sub> = 0,5 × 22,4 = 11,2 lít</div>"
      },
      {
        "id": 42,
        "part": 3,
        "qnum": 5,
        "type": "sa",
        "level": "nb_th",
        "label": "Phần 3 - Câu 5",
        "topic": "Số mol khí Methane",
        "figure": null,
        "prompt": "Biết khối lượng của 1 mol khí Methane (CH<sub>4</sub>) là 16 g. 48 g khí Methane là khối lượng của bao nhiêu mol khí này?",
        "question": "Biết khối lượng của 1 mol khí Methane (CH<sub>4</sub>) là 16 g. 48 g khí Methane là khối lượng của bao nhiêu mol khí này?",
        "answer": "3",
        "explanation": "Số mol của 48 g khí Methane là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = m/M = 48/16 = 3 mol</div>"
      },
      {
        "id": 43,
        "part": 3,
        "qnum": 6,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 6",
        "topic": "Số mol mẫu khí nguyên tử đơn",
        "figure": null,
        "prompt": "Một mẫu khí có khối lượng là 8 kg và chứa 4,8 · 10<sup>25</sup> nguyên tử. Phân tử khí này là đơn nguyên tử. Biết 1 mol khí có N<sub>A</sub> = 60,2 · 10<sup>22</sup> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>. Số mol của khí này là bao nhiêu mol? (Làm tròn kết quả đến một chữ số thập phân)",
        "question": "Một mẫu khí có khối lượng là 8 kg và chứa 4,8 · 10<sup>25</sup> nguyên tử. Phân tử khí này là đơn nguyên tử. Biết 1 mol khí có N<sub>A</sub> = 60,2 · 10<sup>22</sup> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>. Số mol của khí này là bao nhiêu mol? (Làm tròn kết quả đến một chữ số thập phân)",
        "answer": "79.7",
        "explanation": "Số mol của mẫu khí là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n = N/N<sub>A</sub> = (4,8 · 10<sup>25</sup>) / (6,02 · 10<sup>23</sup>) = 480/6,02 ≈ 79,734 mol</div><br>Làm tròn đến 1 chữ số thập phân theo quy chuẩn:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">n ≈ 79,7 mol</div><br><i>(Lưu ý: Dòng giải trong tài liệu PDF gốc in nhầm số 19,73 nhưng ô đáp án đã ghi đúng giá trị 79,7).</i>"
      },
      {
        "id": 44,
        "part": 3,
        "qnum": 7,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 7",
        "topic": "Chuỗi phân tử Nitrogen",
        "figure": null,
        "prompt": "Xét một mẫu khí Nitrogen (N<sub>2</sub>, có M = 28 g/mol) có khối lượng 14 g. Biết bán kính của phân tử Nitrogen là r = 10<sup>-10</sup> m, và N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>. Nếu xếp các phân tử Nitrogen này nối tiếp nhau thành một chuỗi thẳng thì chuỗi này dài bao nhiêu lần 10<sup>13</sup> m?",
        "question": "Xét một mẫu khí Nitrogen (N<sub>2</sub>, có M = 28 g/mol) có khối lượng 14 g. Biết bán kính của phân tử Nitrogen là r = 10<sup>-10</sup> m, và N<sub>A</sub> = 6,02 · 10<sup>23</sup> mol<sup>-1</sup>. Nếu xếp các phân tử Nitrogen này nối tiếp nhau thành một chuỗi thẳng thì chuỗi này dài bao nhiêu lần 10<sup>13</sup> m?",
        "answer": "6.02",
        "explanation": "Số mol khí Nitrogen là n = 14/28 = 0,5 mol.<br>Số phân tử Nitrogen là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">N = n · N<sub>A</sub> = 0,5 × 6,02 · 10<sup>23</sup> = 3,01 · 10<sup>23</sup></div><br>Đường kính của mỗi phân tử là d = 2r = 2 · 10<sup>-10</sup> m.<br>Chiều dài chuỗi phân tử là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">L = N · d = 3,01 · 10<sup>23</sup> × 2 · 10<sup>-10</sup> = 6,02 · 10<sup>13</sup> m</div><br>Vậy chuỗi dài <b>6,02</b> lần 10<sup>13</sup> m."
      },
      {
        "id": 45,
        "part": 3,
        "qnum": 8,
        "type": "sa",
        "level": "vd",
        "label": "Phần 3 - Câu 8",
        "topic": "Tỉ số chiều dài chuỗi khí H2 và N2",
        "figure": null,
        "prompt": "Xét một mẫu khí Nitrogen (N<sub>2</sub>, M<sub>N<sub>2</sub></sub> = 28 g/mol) có khối lượng 14 g xếp thành chuỗi dài L<sub>N<sub>2</sub></sub>. Nếu thay bằng 14 g khí Hydrogen (H<sub>2</sub>, M<sub>H<sub>2</sub></sub> = 2 g/mol) với giả thiết coi kích thước phân tử xấp xỉ nhau thì tỉ số chiều dài giữa chuỗi khí Hydrogen và chuỗi khí Nitrogen ≤ ft( (L<sub>H<sub>2</sub></sub>) / (L<sub>N<sub>2</sub></sub>) ) là bao nhiêu?",
        "question": "Xét một mẫu khí Nitrogen (N<sub>2</sub>, M<sub>N<sub>2</sub></sub> = 28 g/mol) có khối lượng 14 g xếp thành chuỗi dài L<sub>N<sub>2</sub></sub>. Nếu thay bằng 14 g khí Hydrogen (H<sub>2</sub>, M<sub>H<sub>2</sub></sub> = 2 g/mol) với giả thiết coi kích thước phân tử xấp xỉ nhau thì tỉ số chiều dài giữa chuỗi khí Hydrogen và chuỗi khí Nitrogen ≤ ft( (L<sub>H<sub>2</sub></sub>) / (L<sub>N<sub>2</sub></sub>) ) là bao nhiêu?",
        "answer": "14",
        "explanation": "Với cùng một khối lượng m = 14 g, số phân tử tỉ lệ nghịch với khối lượng mol:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">N = m/M · N<sub>A</sub> ⟹ N ∝ 1/M</div><br>Chiều dài chuỗi tỉ lệ thuận với số phân tử (L = N · d), nên tỉ số chiều dài là:<br><div style=\"margin: 0.35rem 0; font-style: italic; font-weight: 500;\">(L<sub>H<sub>2</sub></sub>) / (L<sub>N<sub>2</sub></sub>) = (N<sub>H<sub>2</sub></sub>) / (N<sub>N<sub>2</sub></sub>) = (M<sub>N<sub>2</sub></sub>) / (M<sub>H<sub>2</sub></sub>) = 28/2 = 14</div>"
      }
    ]
  }
};

  Object.assign(window.PHYS_EXAMS_DATA, CD2_EXAMS);
})();

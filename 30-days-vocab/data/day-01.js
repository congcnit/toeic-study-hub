// Day 1 – TOURISM (Du lịch)
const DAY_VOCAB = [
  {
    word: "arrival",
    phonetic: "/əˈraɪvl/",
    pos: "n",
    meaning: "đến, sự đến nơi",
    related: [{ word: "arrive", pos: "v", meaning: "đến, tới nơi" }],
    example:
      "Upon your arrival in Honolulu, your rental car will be waiting for you.",
    exampleVi: "Khi bạn đến Honolulu, xe thuê sẽ đợi bạn (ở đó).",
    phrases: [
      { en: "on [upon] arrival", vi: "khi đến nơi" },
      { en: "cash on arrival", vi: "trả tiền mặt khi giao hàng" },
    ],
    note: '"arrival" thường bị nhầm lần là tính từ nhưng thật ra đây là danh từ. Để dễ nhớ ta nên biết quy tắc "v-al → n" (động từ ghép thêm -al sẽ tạo thành danh từ). Ví dụ: arrive + al → arrival; propose + al → proposal... Ngược lại, "n-al → adj" (danh từ ghép thêm -al sẽ tạo thành tính từ). Ví dụ: nation + al → national; intention + al → intentional...',
  },
  {
    word: "attraction",
    phonetic: "/əˈtrækʃn/",
    pos: "n",
    meaning: "điểm tham quan",
    related: [],
    example:
      "The Belnito waterfall is one of the most popular tourist attractions on the island.",
    exampleVi:
      "Thác nước Belnito là một trong những điểm tham quan du lịch nổi tiếng nhất trên đảo.",
    phrases: [
      {
        en: "see some of the city's attractions",
        vi: "xem một số điểm tham quan của thành phố",
      },
    ],
    note: '"attraction" mặc dù nhìn như một danh từ không đếm được nhưng đây lại là danh từ đếm được. Ta thường dùng cụm danh từ ghép "tourist attractions" để nói về các "điểm tham quan".',
  },
  {
    word: "canceled",
    phonetic: "/ˈkænsəld/",
    pos: "adj",
    meaning: "bị hủy",
    related: [],
    example:
      "Each passenger on the canceled flight will receive a coupon for fifty dollars off a future flight.",
    exampleVi:
      "Mỗi hành khách trên chuyến bay bị hủy sẽ nhận được một phiếu giảm giá 50 đô la cho một chuyến bay trong tương lai.",
    phrases: [],
    note: "",
  },
  {
    word: "depart",
    phonetic: "/dɪˈpɑːt/",
    pos: "v",
    meaning: "khởi hành, rời đi",
    related: [{ word: "departure", pos: "n", meaning: "sự khởi hành, sự rời đi" }],
    example:
      "The airport shuttle departs every hour from the hotel's front entrance.",
    exampleVi:
      "Xe đưa đón sân bay khởi hành mỗi giờ từ lối vào cửa trước của khách sạn.",
    phrases: [
      { en: "depart from", vi: "khởi hành từ" },
      { en: "depart for", vi: "khởi hành đến" },
      {
        en: "the airport shuttle departs every hour",
        vi: "xe đưa đón sân bay khởi hành mỗi giờ",
      },
    ],
    note: "",
  },
  {
    word: "expanded",
    phonetic: "/ɪkˈspændɪd/",
    pos: "adj",
    meaning: "(được) mở rộng",
    related: [{ word: "expand", pos: "v", meaning: "mở rộng" }, { word: "expansion", pos: "n", meaning: "sự mở rộng" }],
    example:
      "Misami Airlines will soon offer expanded service from Nagoya to 12 additional cities.",
    exampleVi:
      "Hãng hàng không Misami sẽ sớm cung cấp dịch vụ mở rộng từ Nagoya đến thêm 12 thành phố.",
    phrases: [
      {
        en: "expanded facilities at the conference center",
        vi: "cơ sở vật chất được mở rộng tại trung tâm hội nghị",
      },
    ],
    note: "",
  },
  {
    word: "flight",
    phonetic: "/flaɪt/",
    pos: "n",
    meaning: "chuyến bay",
    related: [],
    example: "Thank you for booking the flights for me on such short notice.",
    exampleVi:
      "Cảm ơn bạn đã đặt chuyến bay cho tôi trong thời gian ngắn như vậy.",
    phrases: [
      {
        en: "an overnight flight from Paris",
        vi: "chuyến bay qua đêm từ Paris",
      },
      {
        en: "the eight o'clock flight from Denver",
        vi: "chuyến bay 8 giờ từ Denver",
      },
      { en: "It was a short flight", vi: "Đó là một chuyến bay ngắn" },
      {
        en: "Flight schedules may change after a ticket is issued",
        vi: "Lịch trình chuyến bay có thể thay đổi sau khi vé được phát hành",
      },
    ],
    note: "",
  },
  {
    word: "historic",
    phonetic: "/hɪˈstɒrɪk/",
    pos: "adj",
    meaning: "(mang tính) lịch sử",
    related: [{ word: "history", pos: "n", meaning: "lịch sử" }, { word: "historian", pos: "n", meaning: "nhà sử học" }],
    example:
      "We're very happy to welcome you to the historic city of Brantford.",
    exampleVi:
      "Chúng tôi rất vui mừng chào đón bạn đến với thành phố lịch sử của Brantford.",
    phrases: [
      {
        en: "walking tour of historic homes",
        vi: "chuyến tham quan dạo quanh các ngôi nhà lịch sử",
      },
      {
        en: "restoration of a historic school building",
        vi: "phục hồi một trường học lịch sử",
      },
    ],
    note: '"historic" thường dùng miêu tả vật/kiến trúc/địa điểm quan trọng với lịch sử.',
  },
  {
    word: "hopefully",
    phonetic: "/ˈhoʊpfəli/",
    pos: "adv",
    meaning: "hy vọng",
    related: [],
    example:
      "Hopefully I'll be able to give you a call with the information on your new flight.",
    exampleVi:
      "Hy vọng rằng tôi sẽ có thể gọi cho bạn để cung cấp các thông tin về chuyến bay mới của bạn.",
    phrases: [],
    note: "",
  },
  {
    word: "landmark",
    phonetic: "/ˈlændmɑːk/",
    pos: "n/adj",
    meaning: "địa điểm biểu tượng; cột mốc",
    related: [],
    example:
      "We'll start with a fairly short tour of the city center area, driving by the main landmarks.",
    exampleVi:
      "Chúng ta sẽ bắt đầu với một chuyến tham quan khu vực trung tâm thành phố khá ngắn, lái xe qua các địa điểm biểu tượng (của thành phố).",
    phrases: [],
    note: '"landmark" được dùng với nghĩa là nếu bạn thấy một vật/điểm biểu tượng nào đó, bạn sẽ biết đó là nơi nào. Ví dụ, khi thấy tháp Eiffel bạn sẽ biết khung cảnh đó là ở Paris.',
  },
  {
    word: "mechanical",
    phonetic: "/mɪˈkænɪkl/",
    pos: "adj",
    meaning: "(thuộc về) máy móc",
    related: [{ word: "mechanic", pos: "n", meaning: "thợ cơ khí, kỹ thuật viên" }, { word: "mechanically", pos: "adv", meaning: "theo cách cơ học" }, { word: "mechanize", pos: "v", meaning: "cơ giới hóa" }],
    example:
      "The afternoon flight from Tokyo has been canceled due to a mechanical problem.",
    exampleVi: "Chuyến bay chiều từ Tokyo đã bị hủy do vấn đề máy móc.",
    phrases: [
      {
        en: "a mechanical problem [defect/failure]",
        vi: "một vấn đề về máy móc [khiếm khuyết/trục trặc]",
      },
    ],
    note: '"mechanic" thường bị nhầm là tính từ nhưng đây là danh từ mang nghĩa người thợ sửa máy/ô tô.',
  },
  {
    word: "regret",
    phonetic: "/rɪˈgret/",
    pos: "n/v",
    meaning: "hối tiếc",
    related: [],
    example:
      "We regret to inform you that the 10 A.M. flight to Seattle has been canceled.",
    exampleVi:
      "Chúng tôi rất tiếc phải thông báo cho bạn rằng chuyến bay 10 giờ sáng đến Seattle đã bị hủy.",
    phrases: [
      { en: "regret doing something", vi: "ước muốn đã làm gì" },
      {
        en: "regret to say that / regret to inform you that",
        vi: "lấy làm tiếc thông báo rằng",
      },
    ],
    note: '"regret" thường dùng trong khi đưa ra các thông báo tin không tốt như chuyến bay bị hoãn: "We regret to announce that the flight ABC has been delayed due to..."',
  },
  {
    word: "responsible",
    phonetic: "/rɪˈspɒnsəbl/",
    pos: "adj",
    meaning: "có trách nhiệm",
    related: [{ word: "responsibility", pos: "n", meaning: "trách nhiệm" }],
    example:
      "Passengers should be aware that the airline is not responsible for lost items.",
    exampleVi:
      "Hành khách nên biết rằng hãng hàng không không chịu trách nhiệm về các vật phẩm bị thất lạc.",
    phrases: [],
    note: 'Đặc biệt chú ý đến giới từ thường đi kèm: "responsible for something" (chịu trách nhiệm về chuyện gì).',
  },
  {
    word: "separate",
    phonetic: "/ˈseprət/",
    pos: "adj/v",
    meaning: "rời ra, riêng ra (adj); ngăn cách (v)",
    related: [{ word: "separately", pos: "adv", meaning: "riêng; tách rời" }, { word: "separation", pos: "n", meaning: "sự tách biệt, sự phân ly" }],
    example:
      "If you get separated from the tour, just meet us at the cafeteria at noon.",
    exampleVi:
      "Nếu bạn bị tách ra khỏi đoàn du lịch, chỉ cần gặp chúng tôi tại quán ăn tự phục vụ vào buổi trưa.",
    phrases: [
      {
        en: "a separate training session for each department",
        vi: "buổi tập huấn riêng cho từng bộ phận",
      },
      {
        en: "Trees separate the lake from some buildings",
        vi: "Những cái cây ngăn cách cái hồ khỏi một số tòa nhà",
      },
    ],
    note: 'Về cách phát âm: khi dùng như tính từ đọc là /ˈseprət/; khi dùng như động từ đọc là /ˈsepəreɪt/. Mẹo nhớ: đề thi thường có câu "You must mark your answers on a separate answer sheet" (Bạn phải đánh dấu câu trả lời trên một phiếu trả lời riêng).',
  },
  {
    word: "status",
    phonetic: "/ˈsteɪtəs/",
    pos: "n",
    meaning: "trạng thái; tình hình",
    related: [],
    example: "Please check the status of your train on the arrivals board.",
    exampleVi:
      "Vui lòng kiểm tra tình hình xe lửa của bạn trên bảng thông báo nơi đến.",
    phrases: [
      {
        en: "give someone a status update",
        vi: "cập nhật tình hình cho ai đó",
      },
      { en: "membership status", vi: "trạng thái của thẻ thành viên" },
    ],
    note: '"status" thường dùng trong ngữ cảnh đơn hàng (đã đến, đang vận chuyển...) hoặc trạng thái thẻ thành viên (vừa gia hạn, sắp hết hạn...).',
  },
  {
    word: "stay",
    phonetic: "/steɪ/",
    pos: "v/n",
    meaning: "ở lại; vẫn còn (v) / sự lưu trú (n)",
    related: [],
    example:
      "We enjoyed the stay so much that we are already trying to plan a return trip to Carlton city.",
    exampleVi:
      "Chúng tôi thích chuyến đi đến nỗi chúng tôi đã nỗ lực lên kế hoạch một chuyến đi trở lại thành phố Carlton.",
    phrases: [
      { en: "stay up", vi: "thức khuya" },
      { en: "stay at a hotel", vi: "ở khách sạn" },
      { en: "stay tuned for", vi: "hãy theo dõi (kênh TV, radio)" },
    ],
    note: '"stay" thường dùng mô tả việc lưu trú khi đi du lịch/công tác. "stay" còn là danh từ, ví dụ: "during your stay" (trong lúc bạn ở đây).',
  },
  {
    word: "verify",
    phonetic: "/ˈverɪfaɪ/",
    pos: "v",
    meaning: "xác nhận",
    related: [{ word: "verification", pos: "n", meaning: "sự xác minh" }, { word: "verifiable", pos: "adj", meaning: "có thể kiểm chứng" }],
    example: "It is always advisable to verify departure times.",
    exampleVi: "Bạn nên xác nhận thời gian khởi hành.",
    phrases: [],
    note: "",
  },
  {
    word: "conductor",
    phonetic: "/kənˈdʌktər/",
    pos: "n",
    meaning: "người soát vé",
    related: [],
    example:
      "The conductor will be coming through in just a few minutes to inspect the tickets.",
    exampleVi: "Người soát vé sẽ đến để kiểm tra vé chỉ trong vài phút nữa.",
    phrases: [{ en: "train conductor", vi: "người soát vé xe lửa" }],
    note: "",
  },
  {
    word: "contents",
    phonetic: "/ˈkɒntents/",
    pos: "n",
    meaning: "thứ được đựng bên trong; nội dung",
    related: [],
    example:
      "The contents of your overhead baggage may have shifted during the flight.",
    exampleVi:
      "Những thứ được đựng trong hành lý bên trên có thể đã dịch chuyển trong chuyến bay.",
    phrases: [
      {
        en: "stir the contents of a container",
        vi: "làm xáo trộn đồ đạc bên trong bao bì",
      },
      {
        en: "the content of a job advertisement",
        vi: "nội dung của một quảng cáo việc làm",
      },
      {
        en: "food with a high fat content",
        vi: "thực phẩm có hàm lượng chất béo cao",
      },
    ],
    note: '"content" hàm nghĩa những thứ chứa bên trong một thứ khác.',
  },
  {
    word: "delay",
    phonetic: "/dɪˈleɪ/",
    pos: "v/n",
    meaning: "trì hoãn (v) / sự trì hoãn (n)",
    related: [],
    example:
      "All arriving trains are experiencing delays of approximately 45 minutes.",
    exampleVi: "Tất cả các chuyến tàu đến đều bị trì hoãn khoảng 45 phút.",
    phrases: [
      {
        en: "We apologize for this delay",
        vi: "Chúng tôi xin lỗi vì sự trì hoãn này",
      },
    ],
    note: '"delay" vừa là động từ vừa là danh từ.',
  },
  {
    word: "destination",
    phonetic: "/ˌdestɪˈneɪʃn/",
    pos: "n",
    meaning: "điểm đến",
    related: [],
    example:
      "The flights to East Europe have all been delayed due to bad weather in the destination cities.",
    exampleVi:
      "Tất cả các chuyến bay đến Đông Âu đều bị hoãn do thời tiết xấu ở các thành phố tại nơi đến.",
    phrases: [
      { en: "reach the destination", vi: "đến đích" },
      { en: "a holiday destination", vi: "một điểm đến cho kỳ nghỉ" },
      {
        en: "the shortest route to your destination",
        vi: "tuyến đường ngắn nhất tới điểm đến của bạn",
      },
    ],
    note: "",
  },
  {
    word: "distinctive",
    phonetic: "/dɪˈstɪŋktɪv/",
    pos: "adj",
    meaning: "tiêu biểu; nổi bật",
    related: [{ word: "distinctively", pos: "adv", meaning: "một cách đặc biệt" }, { word: "distinction", pos: "n", meaning: "sự phân biệt, điểm khác biệt" }, { word: "distinctiveness", pos: "n", meaning: "tính đặc trưng" }],
    example:
      "You'll see the city's distinctive architecture, dating back to the late 18th century.",
    exampleVi:
      "Bạn sẽ thấy kiến trúc đặc biệt của thành phố, bắt nguồn từ cuối thế kỷ 18.",
    phrases: [
      {
        en: "one of its distinctive features",
        vi: "một trong những đặc điểm nổi bật của nó",
      },
    ],
    note: "",
  },
  {
    word: "entire",
    phonetic: "/ɪnˈtaɪər/",
    pos: "adj",
    meaning: "toàn thể; toàn bộ",
    related: [{ word: "entirety", pos: "n", meaning: "toàn bộ" }],
    example: "The entire trip will take most of the afternoon.",
    exampleVi: "Toàn bộ chuyến đi sẽ mất (thời gian) hầu hết buổi chiều.",
    phrases: [
      {
        en: "offer breathtaking views of the entire city",
        vi: "đem đến cảnh quan tuyệt đẹp của toàn bộ thành phố",
      },
      {
        en: "call a meeting for the entire engineering team",
        vi: "tổ chức họp cho toàn bộ nhóm kỹ thuật",
      },
    ],
    note: "",
  },
  {
    word: "frequent",
    phonetic: "/ˈfriːkwənt/",
    pos: "adj",
    meaning: "thường xuyên",
    related: [{ word: "frequency", pos: "n", meaning: "tần số, tần suất" }, { word: "frequently", pos: "adv", meaning: "thường xuyên" }, { word: "frequenter", pos: "n", meaning: "người thường xuyên lui tới" }],
    example:
      "We'll soon be adding more frequent service to five popular destinations.",
    exampleVi:
      "Chúng tôi sẽ sớm bổ sung thêm dịch vụ thường xuyên hơn cho năm điểm đến được ưa chuộng.",
    phrases: [
      { en: "a frequent customer", vi: "một khách hàng thường xuyên" },
      { en: "a frequent flyer", vi: "một người đi máy bay thường xuyên" },
      { en: "frequent the store", vi: "thường xuyên ghé qua cửa hàng" },
      {
        en: "require frequent maintenance",
        vi: "đòi hỏi phải bảo trì thường xuyên",
      },
    ],
    note: "",
  },
  {
    word: "incur",
    phonetic: "/ɪnˈkɜːr/",
    pos: "v",
    meaning: "chịu (phí); gặp phải",
    related: [],
    example:
      "I am writing with regard to damage to my suitcase incurred during a recent trip to Italy.",
    exampleVi:
      "Tôi viết thư này để nói về hư hỏng đối với vali tôi gặp phải trong chuyến đi gần đây đến Ý.",
    phrases: [
      { en: "No charge will be incurred", vi: "Bạn sẽ không phải chịu phí" },
    ],
    note: "",
  },
  {
    word: "itinerary",
    phonetic: "/aɪˈtɪnəreri/",
    pos: "n",
    meaning: "lịch trình (du lịch)",
    related: [],
    example: "Your complete itinerary will be mailed to you in August.",
    exampleVi: "Lịch trình đầy đủ của bạn sẽ được gửi cho bạn vào tháng Tám.",
    phrases: [],
    note: '"itinerary" có nghĩa tương tự như "schedule" (lịch) nhưng "itinerary" là từ đặc trưng cho lĩnh vực du lịch.',
  },
  {
    word: "last-minute",
    phonetic: "/ˌlɑːst ˈmɪnjuːt/",
    pos: "adj",
    meaning: "vào phút chót",
    related: [],
    example: "Ms. Choi left for a last-minute business trip this morning.",
    exampleVi:
      "Bà Choi đã rời đi vì có chuyến công tác vào phút chót sáng nay.",
    phrases: [
      { en: "a last-minute change", vi: "thay đổi vào phút chót" },
      { en: "a last-minute cancellation", vi: "một sự hủy bỏ vào phút chót" },
    ],
    note: '"last-minute" dùng mô tả sự việc/hành động xảy ra đột ngột, bất ngờ.',
  },
  {
    word: "markedly",
    phonetic: "/ˈmɑːrkɪdli/",
    pos: "adv",
    meaning: "(khác biệt; tăng) rõ rệt",
    related: [],
    example:
      "While offering similar vacation packages, travel agencies may charge markedly different prices.",
    exampleVi:
      "Mặc dù cung cấp các gói kỳ nghỉ tương tự nhưng các công ty du lịch có thể tính giá khác nhau rõ rệt.",
    phrases: [],
    note: "",
  },
  {
    word: "picturesque",
    phonetic: "/ˌpɪktʃəˈresk/",
    pos: "adj",
    meaning: "đẹp (cổ kính / như tranh)",
    related: [],
    example:
      "MNS Railroad's most picturesque passenger route runs through the White Mountain region.",
    exampleVi:
      "Tuyến đường bộ đẹp nhất của hãng đường sắt MNS chạy qua khu vực White Mountain.",
    phrases: [],
    note: '"picturesque" xuất phát từ chữ "picture" (tranh ảnh), dùng để mô tả nơi có vẻ đẹp cổ kính như tranh. Ví dụ: "a picturesque village" (một ngôi làng cổ kính).',
  },
  {
    word: "proceed",
    phonetic: "/prəˈsiːd/",
    pos: "v",
    meaning: "tiến hành; tiếp tục",
    related: [{ word: "proceeding", pos: "n", meaning: "diễn biến; thủ tục pháp lý" }, { word: "procedure", pos: "n", meaning: "thủ tục" }, { word: "process", pos: "n/v", meaning: "(n) quy trình; (v) xử lý" }, { word: "procession", pos: "n", meaning: "đám rước, đoàn diễu hành" }],
    example:
      "Wait for the boarding announcement before proceeding to the track.",
    exampleVi: "Hãy chờ thông báo lên tàu trước khi đi đến đường ray tàu hỏa.",
    phrases: [
      { en: "proceed to", vi: "tiếp tục đến" },
      {
        en: "Would you like to proceed with this reservation?",
        vi: "Bạn có muốn tiếp tục với việc đặt chỗ này không?",
      },
    ],
    note: '"proceed" là động từ nhưng "proceeds" lại là danh từ để mô tả các khoản tiền nhận được từ việc tổ chức sự kiện. Ví dụ: "The proceeds of the concert will go to charity."',
  },
  {
    word: "registration",
    phonetic: "/ˌredʒɪˈstreɪʃn/",
    pos: "n",
    meaning: "sự đăng ký",
    related: [{ word: "register", pos: "v", meaning: "đăng ký" }, { word: "registry", pos: "n", meaning: "sổ đăng ký, văn phòng đăng ký" }, { word: "registered", pos: "adj", meaning: "đã đăng ký" }],
    example:
      "For advance registration, please visit our website at www.silvercruises.com.",
    exampleVi:
      "Để đăng ký trước, vui lòng truy cập trang web của chúng tôi tại www.silvercruises.com.",
    phrases: [
      {
        en: "fill out and submit the online registration form",
        vi: "điền vào và nộp mẫu đăng ký trực tuyến",
      },
      { en: "Registration is 25 dollars", vi: "Phí đăng ký là 25 đô la" },
    ],
    note: "",
  },
  {
    word: "round-trip",
    phonetic: "/ˌraʊnd ˈtrɪp/",
    pos: "adj",
    meaning: "(vé) khứ hồi",
    related: [],
    example:
      "The cost of round-trip air transportation is included in the nine-day cruise package.",
    exampleVi:
      "Chi phí đi lại bằng máy bay khứ hồi bao gồm trong gói du lịch 9 ngày bằng du thuyền.",
    phrases: [
      { en: "round-trip ticket = return ticket", vi: "vé khứ hồi" },
      { en: "one-way ticket = single ticket", vi: "vé một chiều" },
    ],
    note: "",
  },
  {
    word: "significantly",
    phonetic: "/sɪɡˈnɪfɪkəntli/",
    pos: "adv",
    meaning: "đáng kể",
    related: [],
    example:
      "The number of tourists who travel in recreational vehicles has increased significantly nationwide.",
    exampleVi:
      "Số lượng du khách đi du lịch bằng các phương tiện giải trí đã tăng đáng kể trên toàn quốc.",
    phrases: [],
    note: '"significantly" chủ yếu dùng để mô tả tăng/giảm/ảnh hưởng. Ví dụ: "significantly increase/decrease/affect". Cũng hay gặp cụm "a significant share" (phần đáng kể).',
  },
  {
    word: "typical",
    phonetic: "/ˈtɪpɪkl/",
    pos: "adj",
    meaning: "tiêu biểu",
    related: [{ word: "type", pos: "n/v", meaning: "loại, kiểu; đánh máy" }, { word: "typically", pos: "adv", meaning: "thông thường" }, { word: "typicality", pos: "n", meaning: "tính điển hình" }],
    example:
      "Medication packages are far too expensive for our typical customers.",
    exampleVi:
      "Các gói dịch vụ thuốc quá đắt đối với khách hàng tiêu biểu của chúng tôi.",
    phrases: [{ en: "It is typical of", vi: "Chuyện đó là tiêu biểu cho" }],
    note: "",
  },
  {
    word: "via",
    phonetic: "/ˈvaɪə/",
    pos: "prep",
    meaning: "thông qua, qua ngả",
    related: [],
    example:
      "The flight from Philadelphia to Seattle via Chicago will leave at 1 P.M.",
    exampleVi:
      "Chuyến bay từ Philadelphia tới Seattle qua Chicago sẽ khởi hành lúc 1 giờ chiều.",
    phrases: [
      { en: "via air mail", vi: "thông qua chuyến hàng đường hàng không" },
      { en: "submit it via e-mail", vi: "gửi nó qua e-mail" },
    ],
    note: "",
  },
  {
    word: "waive",
    phonetic: "/weɪv/",
    pos: "v",
    meaning: "từ bỏ (quyền; học phí)",
    related: [],
    example:
      "Wyncote Airlines will waive the fifteen-pound baggage fee for members of its Sky Flyer club.",
    exampleVi:
      "Wyncote Airlines sẽ bỏ khoản phí hành lý 15 bảng cho các thành viên của câu lạc bộ Sky Flyer.",
    phrases: [],
    note: "",
  },
  {
    word: "equip",
    phonetic: "/ɪˈkwɪp/",
    pos: "v",
    meaning: "trang bị",
    related: [],
    example:
      "All our trains are equipped with comfortable seating and full-service dining cars.",
    exampleVi:
      "Tất cả các xe lửa của chúng tôi đều được trang bị chỗ ngồi thoải mái và các khoang ăn uống đầy đủ tiện nghi.",
    phrases: [
      { en: "equip A with B", vi: "trang bị B cho A" },
      { en: "A is equipped with B", vi: "B được trang bị cho A" },
      {
        en: "A comes [is equipped] with B",
        vi: "A đi kèm theo [được trang bị với] B",
      },
    ],
    note: "",
  },
  {
    word: "fatigue",
    phonetic: "/fəˈtiːɡ/",
    pos: "n",
    meaning:
      "tình trạng mệt mỏi (do làm việc gắng sức / tập thể dục / đi tàu xe)",
    related: [{ word: "fatigued", pos: "adj", meaning: "mệt mỏi" }, { word: "fatiguing", pos: "adj", meaning: "gây mệt mỏi" }],
    example:
      "Fatigue that lasts for days is one of the effects of jet lag well-known to airline passengers.",
    exampleVi:
      "Mệt mỏi kéo dài vài ngày là một trong những ảnh hưởng của tình trạng say máy bay phổ biến với hành khách của hãng hàng không.",
    phrases: [
      { en: "help overcome fatigue", vi: "giúp vượt qua mệt mỏi" },
      { en: "recover from fatigue", vi: "phục hồi khỏi sự mệt mỏi" },
    ],
    note: "",
  },
  {
    word: "hospitality",
    phonetic: "/ˌhɒspɪˈtælɪti/",
    pos: "n",
    meaning: "lòng hiếu khách",
    related: [],
    example:
      "Mayor Williams described the city as a place where the citizens are known for their hospitality.",
    exampleVi:
      "Thị trưởng Williams mô tả thành phố như một nơi mà công dân được biết đến với sự hiếu khách.",
    phrases: [
      { en: "hospitality industry", vi: "ngành du lịch khách sạn" },
      { en: "give [extend] hospitality to", vi: "thể hiện lòng mến khách với" },
    ],
    note: '"hospitality" thường bị nhầm với "hospital" (bệnh viện). "hospitality" là lòng mến khách, do đó có cụm "Hospitality Industry" (ngành du lịch – khách sạn).',
  },
  {
    word: "passenger",
    phonetic: "/ˈpæsɪndʒər/",
    pos: "n",
    meaning: "hành khách",
    related: [],
    example:
      "All passengers should present their boarding documents at the check-in counter.",
    exampleVi:
      "Tất cả hành khách phải xuất trình các giấy tờ lên máy bay tại quầy đăng ký.",
    phrases: [
      {
        en: "sleeping car passengers",
        vi: "các hành khách trên toa xe lửa có chỗ ngủ",
      },
      {
        en: "Attention passengers at Gate 12",
        vi: "Xin chú ý, các hành khách ở cổng 12",
      },
      {
        en: "Passengers should be aware that",
        vi: "Các hành khách nên chú ý rằng",
      },
    ],
    note: '"passenger" là từ đặc trưng của du lịch, chỉ người đi trên các phương tiện vận tải. Khác với "customer" (khách hàng mua hàng hóa/dịch vụ).',
  },
  {
    word: "vessel",
    phonetic: "/ˈvesəl/",
    pos: "n",
    meaning: "tàu",
    related: [],
    example:
      "We are looking for food servers and maintenance staff to work aboard our many vessels.",
    exampleVi:
      "Chúng tôi đang tìm kiếm các nhân viên phục vụ thức ăn và nhân viên bảo trì để làm việc trên những con tàu của chúng tôi.",
    phrases: [
      { en: "all vessels leaving the port", vi: "tất cả các tàu sắp rời cảng" },
    ],
    note: "",
  },
];

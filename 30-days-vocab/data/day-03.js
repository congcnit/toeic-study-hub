// Day 3 – TRANSPORTATION (Giao thông vận tải)
const DAY_VOCAB = [
  {
    word: "carefully",
    phonetic: "/ˈkeəfəli/",
    pos: "adv",
    meaning: "một cách cẩn thận",
    related: ["careful"],
    example: "It snowed a little last night so please drive carefully.",
    exampleVi: "Tối qua tuyết đã rơi một ít vì vậy hãy lái xe cẩn thận.",
    phrases: [],
    note: "",
  },
  {
    word: "cautious",
    phonetic: "/ˈkɔːʃəs/",
    pos: "adj",
    meaning: "dè dặt, thận trọng",
    related: ["cautiously", "caution"],
    example:
      "National Roadway Service advises drivers to be cautious during wet road conditions.",
    exampleVi:
      "Sở Giao thông Quốc Gia khuyên người lái xe nên cẩn thận trong tình trạng đường ướt.",
    phrases: [
      {
        en: "a cautious approach to investing",
        vi: "cách tiếp cận thận trọng đối với đầu tư",
      },
      {
        en: "handle the laboratory equipment cautiously",
        vi: "xử lý thiết bị phòng thí nghiệm một cách thận trọng",
      },
    ],
    note: '"caution" là danh từ nhưng có thể dùng như động từ (cảnh báo), thường trong cấu trúc bị động "be cautioned against" (được cảnh báo không làm gì). Ví dụ: "He was cautioned against making hasty decisions."',
  },
  {
    word: "maintain",
    phonetic: "/meɪnˈteɪn/",
    pos: "v",
    meaning: "duy trì; bảo trì",
    related: ["maintenance"],
    example:
      "We have trained personnel available to help you maintain your car.",
    exampleVi:
      "Chúng tôi đã đào tạo nhân viên luôn sẵn có để giúp bạn bảo dưỡng xe của bạn.",
    phrases: [
      {
        en: "maintain accurate records",
        vi: "duy trì hồ sơ (kế toán) chính xác",
      },
      {
        en: "maintain the popularity with customers",
        vi: "duy trì sự ưa thích đối với khách hàng",
      },
    ],
    note: '"maintain" dùng để duy trì standard, relationship hoặc bảo trì vehicles, machine. "maintenance" (danh từ) đọc là /ˈmeɪntənəns/ – có sự thay đổi trọng âm và nguyên âm.',
  },
  {
    word: "perfectly",
    phonetic: "/ˈpɜːfɪktli/",
    pos: "adv",
    meaning: "hoàn toàn; hoàn hảo",
    related: ["perfect", "perfection"],
    example:
      "Our new midsized van is perfectly suited for families with two or three children.",
    exampleVi:
      "Xe tải cỡ trung mới của chúng tôi hoàn toàn phù hợp với các gia đình có hai hoặc ba con.",
    phrases: [
      {
        en: "in perfect condition",
        vi: "trong tình trạng hoàn hảo (máy móc không bị hư hại)",
      },
    ],
    note: "",
  },
  {
    word: "public transportation",
    phonetic: "/ˈpʌblɪk ˌtrænspɔːˈteɪʃn/",
    pos: "n",
    meaning: "phương tiện công cộng",
    related: [],
    example:
      "I was unable to travel from the airport by public transportation as planned and had to take a taxi.",
    exampleVi:
      "Tôi đã không thể đi từ sân bay bằng phương tiện giao thông công cộng như kế hoạch và phải đi taxi.",
    phrases: [],
    note: "",
  },
  {
    word: "rate",
    phonetic: "/reɪt/",
    pos: "n",
    meaning: "giá (phòng; dịch vụ;...)",
    related: [],
    example:
      "Carro Rentals offers flexible rate plans that make renting a car easy.",
    exampleVi:
      "Carro Rentals đưa ra các gói mức giá linh hoạt giúp việc thuê xe hơi dễ dàng.",
    phrases: [
      { en: "at an affordable rate", vi: "ở một mức giá phải chăng" },
      { en: "shipping rate", vi: "phí vận chuyển" },
      { en: "reduced admission rates", vi: "phí vào cửa được giảm" },
    ],
    note: '"rate" và "price" đều chỉ giá nhưng "price" là giá khi mua sản phẩm, còn "rate" thường mô tả giá ở dạng "bao nhiêu tiền/đơn vị tính...", ví dụ "shipping rate" (bao nhiêu tiền/kg).',
  },
  {
    word: "ticket",
    phonetic: "/ˈtɪkɪt/",
    pos: "n/v",
    meaning: "vé (n); gửi vé phạt (v)",
    related: [],
    example: "Any vehicle not properly parked will be ticketed.",
    exampleVi: "Bất kỳ xe nào không đỗ đúng cách sẽ bị gửi giấy phạt.",
    phrases: [
      { en: "parking ticket", vi: "vé phạt do đỗ xe sai chỗ" },
      { en: "speeding ticket", vi: "vé phạt do chạy quá tốc độ" },
      { en: "valid ticket", vi: "vé (vào cửa) hợp lệ" },
    ],
    note: '"ticket" ngoài nghĩa vé vào cửa, vé tàu xe còn có nghĩa vé phạt trong giao thông (đỗ xe sai chỗ, chạy quá tốc độ...).',
  },
  {
    word: "transit",
    phonetic: "/ˈtrænzɪt/",
    pos: "n",
    meaning: "sự vận chuyển (hàng hóa)",
    related: [],
    example: "The damage occurred while the product was in transit.",
    exampleVi: "Hư hỏng đã xảy ra trong khi sản phẩm được vận chuyển.",
    phrases: [
      { en: "a transit map", vi: "một bản đồ chuyển tuyến" },
      {
        en: "contact the transit authority",
        vi: "liên hệ với cơ quan chuyển tuyến",
      },
    ],
    note: "",
  },
  {
    word: "widening",
    phonetic: "/ˈwaɪdnɪŋ/",
    pos: "n",
    meaning: "việc mở rộng (đường)",
    related: ["widen"],
    example:
      "Many buildings have been torn down to make room for the widening of the highway.",
    exampleVi:
      "Nhiều tòa nhà đã bị phá hủy để có chỗ cho việc mở rộng đường cao tốc.",
    phrases: [],
    note: "",
  },
  {
    word: "acceleration",
    phonetic: "/əkˌseləˈreɪʃn/",
    pos: "n",
    meaning: "sự tăng tốc",
    related: ["accelerate"],
    example:
      "This magazine published a list of the world's fastest cars based on acceleration.",
    exampleVi:
      "Tạp chí này công bố danh sách những chiếc xe nhanh nhất thế giới dựa trên khả năng tăng tốc.",
    phrases: [
      {
        en: "a rapid acceleration in output",
        vi: "một sự gia tăng nhanh chóng về sản lượng",
      },
    ],
    note: "",
  },
  {
    word: "accessible",
    phonetic: "/əkˈsesəbl/",
    pos: "adj",
    meaning: "có thể tiếp cận (sử dụng; tới được,...)",
    related: ["access"],
    example:
      "Highway 140 is not accessible by Exit 2A due to road construction.",
    exampleVi:
      "Đường cao tốc 140 không thể đi đến bằng đường 2A do xây dựng đường.",
    phrases: [
      { en: "accessible to", vi: "dễ tiếp cận với" },
      {
        en: "make local history accessible to everyone",
        vi: "làm cho lịch sử địa phương dễ tiếp cận (dễ hiểu) với mọi người",
      },
    ],
    note: '"accessible" thường dùng để diễn đạt việc có thể đi đến bằng phương tiện gì đó. Ví dụ: "The island is only accessible by boats."',
  },
  {
    word: "alternate",
    phonetic: "/ɔːlˈtɜːnət/",
    pos: "adj",
    meaning: "thay thế",
    related: ["alternation", "alternative", "alternately"],
    example:
      "Commuters who usually travel that way must take alternate routes to work.",
    exampleVi:
      "Những người đi làm xa thường đi đường đó phải đi những tuyến đường khác để đến chỗ làm.",
    phrases: [
      { en: "under this alternate plan", vi: "theo kế hoạch thay thế này" },
      { en: "schedule alternate dates", vi: "lên lịch các ngày thay thế" },
    ],
    note: "",
  },
  {
    word: "block",
    phonetic: "/blɒk/",
    pos: "n/v",
    meaning: "(n) dãy (phố; nhà); (v) ngăn cản (lối vào; tầm nhìn)",
    related: [],
    example: "The car is blocking access to the kitchen entrance.",
    exampleVi: "Chiếc xe đang cản lối vào nhà bếp.",
    phrases: [
      { en: "block the view of", vi: "cản tầm nhìn của ai" },
      { en: "four blocks from my house", vi: "cách 4 dãy từ nhà tôi" },
    ],
    note: "",
  },
  {
    word: "commuter",
    phonetic: "/kəˈmjuːtər/",
    pos: "n",
    meaning: "người đi làm xa",
    related: ["commute", "commutable"],
    example:
      "Commuters can help reduce pollution by occasionally leaving their cars at home.",
    exampleVi:
      "Người đi làm xa có thể giúp làm giảm ô nhiễm bằng cách thỉnh thoảng để xe của họ ở nhà.",
    phrases: [
      { en: "commuter train", vi: "tàu hỏa cho người đi làm xa" },
      { en: "local commuters", vi: "người đi làm xa ở địa phương" },
      { en: "folding commuter bicycles", vi: "xe đạp đi làm có thể gấp gọn" },
    ],
    note: "",
  },
  {
    word: "defensive",
    phonetic: "/dɪˈfensɪv/",
    pos: "adj",
    meaning: "có tính cẩn trọng, đề phòng",
    related: ["defend", "defense", "defensively"],
    example:
      "All drivers must complete an eight-hour defensive driving course.",
    exampleVi:
      "Tất cả tài xế phải hoàn thành khóa học tám giờ về lái xe cẩn trọng.",
    phrases: [{ en: "a defensive measure", vi: "một biện pháp phòng thủ" }],
    note: "",
  },
  {
    word: "distraction",
    phonetic: "/dɪˈstrækʃn/",
    pos: "n",
    meaning: "sự phân tâm",
    related: ["distract", "distracted", "distracting"],
    example:
      "Don't count on distractions such as the radio to keep you awake while driving.",
    exampleVi:
      "Đừng phụ thuộc vào những thứ gây phân tâm như radio để giúp bạn tỉnh táo khi lái xe.",
    phrases: [{ en: "cause distractions to", vi: "gây phân tâm cho" }],
    note: "",
  },
  {
    word: "emission",
    phonetic: "/ɪˈmɪʃn/",
    pos: "n",
    meaning: "sự thải ra (khí)",
    related: ["emit", "emissive"],
    example: "Your vehicle has been inspected for exhausting emissions.",
    exampleVi: "Xe của bạn đã được kiểm tra về xả thải.",
    phrases: [
      { en: "CO2 emissions", vi: "lượng khí thải CO2" },
      { en: "emissions of greenhouse gases", vi: "phát ra khí nhà kính" },
    ],
    note: "",
  },
  {
    word: "fuel-efficiency",
    phonetic: "/ˈfjuːəl ɪˈfɪʃnsi/",
    pos: "n",
    meaning: "khả năng tiết kiệm nhiên liệu",
    related: [],
    example:
      "Customers prefer fuel-efficiency over size or price when purchasing a new automobile.",
    exampleVi:
      "Khách hàng quan tâm tiết kiệm nhiên liệu hơn kích cỡ hay giá cả khi mua một chiếc ô tô mới.",
    phrases: [
      { en: "a fuel-efficient car", vi: "một chiếc xe tiết kiệm nhiên liệu" },
    ],
    note: "",
  },
  {
    word: "immediately",
    phonetic: "/ɪˈmiːdiətli/",
    pos: "adv",
    meaning: "ngay",
    related: ["immediate", "immediacy"],
    example:
      "If you are unable to move the car yourself, please notify a member of the hospital staff immediately.",
    exampleVi:
      "Nếu bạn không thể tự di chuyển xe, hãy thông báo ngay lập tức cho một nhân viên bệnh viện.",
    phrases: [
      { en: "effective immediately", vi: "có hiệu lực ngay lập tức" },
      {
        en: "the room immediately to the left of the elevator",
        vi: "căn phòng ngay phía bên trái của thang máy",
      },
      { en: "immediately before/after", vi: "ngay trước khi/sau khi" },
    ],
    note: '"immediately" dùng một mình (ngay lập tức) hoặc kết hợp "immediately after/before". Cũng gặp "immediate supervisor" (sếp trực tiếp).',
  },
  {
    word: "impose",
    phonetic: "/ɪmˈpəʊz/",
    pos: "v",
    meaning: "áp đặt (thuế, phí phạt,...)",
    related: [],
    example:
      "A fine of 200$ will be imposed upon any drivers who park illegally downtown.",
    exampleVi:
      "Tiền phạt 200 đô la sẽ được áp dụng cho bất kỳ tài xế nào đỗ xe không hợp lệ ở trung tâm thành phố.",
    phrases: [
      { en: "impose heavy fines", vi: "áp đặt các khoản phạt nặng" },
      { en: "impose sanctions on", vi: "áp đặt các biện pháp chế tài đối với" },
      {
        en: "impose one's view on others",
        vi: "áp đặt quan điểm của ai đối với những người khác",
      },
    ],
    note: "",
  },
  {
    word: "incline",
    phonetic: "/ɪnˈklaɪn/",
    pos: "v/n",
    meaning: "cúi xuống (v); dốc (n)",
    related: ["inclination"],
    example: "The underpowered scooter struggled up the steep incline.",
    exampleVi: "Chiếc xe tay ga không đủ lực đã gặp khó khăn leo lên dốc đứng.",
    phrases: [],
    note: "",
  },
  {
    word: "manually",
    phonetic: "/ˈmænjuəli/",
    pos: "adv",
    meaning: "thủ công",
    related: ["manual"],
    example:
      "This gear shifter lets drivers manually change gears without pressing a clutch pedal.",
    exampleVi:
      "Bộ sang số này cho phép các tay lái sang số thủ công mà không cần đạp chân côn.",
    phrases: [
      {
        en: "record business transactions manually",
        vi: "ghi lại các giao dịch kinh doanh một cách thủ công",
      },
    ],
    note: '"manually" là trái nghĩa của "automatically". "manual" thường gặp như danh từ = sách hướng dẫn (cho máy móc), ví dụ "user manual".',
  },
  {
    word: "official",
    phonetic: "/əˈfɪʃl/",
    pos: "adj/n",
    meaning: "chính thức (adj); quan chức (n)",
    related: ["officiate", "officially"],
    example: "The official speed limit on this highway is 100km/h.",
    exampleVi: "Giới hạn tốc độ chính thức trên quốc lộ này là 100km/h.",
    phrases: [
      { en: "official staff evaluations", vi: "đánh giá nhân viên chính thức" },
      { en: "the official sponsor of", vi: "nhà tài trợ chính thức của" },
      {
        en: "the first official day of work",
        vi: "ngày đầu tiên làm việc chính thức",
      },
    ],
    note: '"official" đa phần dùng như tính từ (chính thức). Có thể là danh từ chỉ người: "a government official" (một quan chức chính phủ).',
  },
  {
    word: "precisely",
    phonetic: "/prɪˈsaɪsli/",
    pos: "adv",
    meaning: "đúng, chính xác",
    related: ["precise"],
    example:
      "Fuel efficiency was precisely the reason she bought a hybrid vehicle.",
    exampleVi:
      "Sự tiết kiệm nhiên liệu chính xác là lý do cô ấy mua một chiếc xe hybrid.",
    phrases: [
      {
        en: "precisely regulate the temperature of",
        vi: "điều chỉnh nhiệt độ một cách chính xác",
      },
      {
        en: "play the violin precisely",
        vi: "chơi đàn vi-ô-lông một cách chính xác",
      },
    ],
    note: "",
  },
  {
    word: "provided that",
    phonetic: "/prəˈvaɪdɪd ðæt/",
    pos: "conj",
    meaning: "miễn là",
    related: [],
    example:
      "He agreed to purchase the second-hand car provided that it passed a mechanical inspection.",
    exampleVi:
      "Anh ấy đã đồng ý mua xe cũ miễn là xe vượt qua được đợt kiểm tra máy móc.",
    phrases: [
      {
        en: "provided that this quarter's sales are as high as projected",
        vi: "miễn là doanh thu của quý này cao như dự kiến",
      },
    ],
    note: '"provided that" = "as long as" (miễn là), theo sau là mệnh đề. Có thể bỏ "that": "He can come with us, provided he pays for his own meals."',
  },
  {
    word: "rebate",
    phonetic: "/ˈriːbeɪt/",
    pos: "n/v",
    meaning: "giảm giá",
    related: [],
    example:
      "The Public Transit commission offers tax rebates for people who frequently use city buses.",
    exampleVi:
      "Ủy ban Public Transit đưa ra mức giảm thuế cho những người thường xuyên sử dụng xe buýt thành phố.",
    phrases: [],
    note: "",
  },
  {
    word: "regardless of",
    phonetic: "/rɪˈɡɑːdləs əv/",
    pos: "prep",
    meaning: "bất kể",
    related: [],
    example:
      "David continued to drive aggressively regardless of the slippery conditions.",
    exampleVi:
      "David tiếp tục lái xe hung hăng bất kể tình trạng (đường sá) trơn trượt.",
    phrases: [
      {
        en: "regardless of whether you travel on business or for pleasure",
        vi: "bất kể bạn đi công tác hay du lịch",
      },
    ],
    note: "",
  },
  {
    word: "repair",
    phonetic: "/rɪˈpeər/",
    pos: "v/n",
    meaning: "sửa chữa",
    related: [],
    example:
      "The Watertown South bus station is closed for repairs until May 16.",
    exampleVi:
      "Trạm xe buýt Watertown South đóng cửa để sửa chữa cho đến ngày 16 tháng 5.",
    phrases: [{ en: "under repair", vi: "đang được sửa chữa" }],
    note: '"repair" đa phần dùng như động từ; cũng có thể là danh từ và thường xuất hiện sau giới từ (for repairs, under repair).',
  },
  {
    word: "reputation",
    phonetic: "/ˌrepjuˈteɪʃn/",
    pos: "n",
    meaning: "danh tiếng",
    related: ["reputational"],
    example: "Cars made in Germany have a great reputation for safety.",
    exampleVi: "Ô tô sản xuất tại Đức nổi tiếng về sự an toàn.",
    phrases: [
      {
        en: "gain reputation for excellence",
        vi: "đạt được danh tiếng về sự xuất sắc",
      },
      { en: "earn a reputation", vi: "tạo được danh tiếng" },
    ],
    note: '"reputation" chỉ sự nổi tiếng, uy tín của công ty. Dùng "reputation for" (nổi tiếng vì điều gì) tương tự "famous for", "be known for".',
  },
  {
    word: "revert",
    phonetic: "/rɪˈvɜːt/",
    pos: "v",
    meaning: "trở về (nguyên trạng)",
    related: [],
    example:
      "In an effort to save money, the woman reverted to using public transport.",
    exampleVi:
      "Trong một nỗ lực tiết kiệm tiền, người phụ nữ quay trở lại sử dụng phương tiện giao thông công cộng.",
    phrases: [
      {
        en: "The ownership of the property will revert to township",
        vi: "Quyền sở hữu tài sản sẽ trở về thị trấn",
      },
    ],
    note: "",
  },
  {
    word: "route",
    phonetic: "/ruːt/",
    pos: "n",
    meaning: "tuyến đường",
    related: [],
    example:
      "The Pontilet 5000 quickly calculates the shortest route to your destination.",
    exampleVi:
      "Pontilet 5000 nhanh chóng tính toán tuyến đường ngắn nhất đến điểm đến của bạn.",
    phrases: [],
    note: '"route" có chữ "ou" đọc là /uː/ [ruːt] (chữ o câm trong cách đọc).',
  },
  {
    word: "safety",
    phonetic: "/ˈseɪfti/",
    pos: "n",
    meaning: "sự an toàn",
    related: ["safe", "safely"],
    example:
      "Jack's old car failed the inspection because of a safety defect in the brakes.",
    exampleVi:
      "Xe cũ của Jack không vượt qua được đợt kiểm tra vì có khuyết điểm về an toàn trong thắng xe.",
    phrases: [
      { en: "safety glasses", vi: "kính bảo vệ" },
      { en: "safety procedures", vi: "thủ tục an toàn" },
      { en: "safety regulations", vi: "những quy định an toàn" },
      { en: "a safety measure", vi: "một biện pháp an toàn" },
    ],
    note: "",
  },
  {
    word: "securely",
    phonetic: "/sɪˈkjʊəli/",
    pos: "adv",
    meaning: "chặt, chắc chắn; an toàn",
    related: ["secure", "security"],
    example:
      "Before beginning our journey, I asked if everyone's seat belts were securely fastened.",
    exampleVi:
      "Trước khi bắt đầu hành trình, tôi đã hỏi liệu tất cả mọi người đã thắt dây an toàn chắc chắn chưa.",
    phrases: [
      {
        en: "securely store one's belongings in a safe",
        vi: "cất giữ an toàn đồ đạc của ai trong két (sắt)",
      },
      { en: "securely locked", vi: "được khóa chặt" },
    ],
    note: '"secure" đa số dùng như tính từ (an toàn). Cũng có thể là động từ: "secure a contract" (đạt được hợp đồng); "secure a place" (đạt được một chỗ).',
  },
  {
    word: "specifically",
    phonetic: "/spəˈsɪfɪkli/",
    pos: "adv",
    meaning: "đặc biệt",
    related: ["specific"],
    example:
      "Jurassite Series bicycles are designed specifically for long-distance travel.",
    exampleVi:
      "Xe đạp kiểu Jurassite được thiết kế đặc biệt cho những chuyến đi đường dài.",
    phrases: [
      {
        en: "start a new program specifically for children",
        vi: "bắt đầu một chương trình mới đặc biệt dành cho trẻ em",
      },
      { en: "be specifically aimed at", vi: "được nhắm đặc biệt đến" },
    ],
    note: "",
  },
  {
    word: "compile",
    phonetic: "/kəmˈpaɪl/",
    pos: "v",
    meaning: "biên soạn",
    related: ["compilation"],
    example:
      "This street guide to Tompkinsville has been compiled from detailed local maps.",
    exampleVi:
      "Hướng dẫn chỉ đường đến Tompkinsville đã được biên soạn từ các bản đồ địa phương chi tiết.",
    phrases: [
      { en: "compile the data", vi: "soạn dữ liệu" },
      { en: "compile a list of", vi: "soạn một danh sách" },
    ],
    note: "",
  },
  {
    word: "compliance",
    phonetic: "/kəmˈplaɪəns/",
    pos: "n",
    meaning: "sự tuân thủ",
    related: ["comply"],
    example:
      "All drivers must be in compliance with all current motor vehicle laws.",
    exampleVi:
      "Tất cả tài xế phải tuân thủ tất cả các luật về xe cơ giới hiện hành.",
    phrases: [
      { en: "in compliance with", vi: "phù hợp với" },
      { en: "dress code compliance", vi: "sự tuân thủ quy tắc ăn mặc" },
      { en: "comply with", vi: "tuân theo" },
    ],
    note: "",
  },
  {
    word: "considerably",
    phonetic: "/kənˈsɪdərəbli/",
    pos: "adv",
    meaning: "đáng kể (tăng/giảm)",
    related: ["considerable"],
    example:
      "The subway is considerably faster than taking a private vehicle during rush hour.",
    exampleVi:
      "Tàu điện ngầm nhanh hơn đáng kể so với việc đi xe riêng trong giờ cao điểm.",
    phrases: [
      {
        en: "considerably reduce the electricity usage",
        vi: "giảm đáng kể sử dụng điện",
      },
      { en: "have increased considerably", vi: "đã tăng đáng kể" },
    ],
    note: '"considerably" là trạng từ chỉ mức độ, thường miêu tả tăng/giảm. Tương tự: "significantly", "substantially" increase/decrease.',
  },
  {
    word: "drowsiness",
    phonetic: "/ˈdraʊzinəs/",
    pos: "n",
    meaning: "sự buồn ngủ",
    related: ["drowsy"],
    example:
      "You might find that you experience some drowsiness, so take care of your driving.",
    exampleVi:
      "Bạn có thể thấy rằng bạn bị buồn ngủ, vì vậy hãy cẩn thận khi lái xe.",
    phrases: [
      { en: "induce drowsiness", vi: "gây buồn ngủ" },
      { en: "fight off drowsiness", vi: "chống lại sự buồn ngủ" },
    ],
    note: "",
  },
  {
    word: "fleet",
    phonetic: "/fliːt/",
    pos: "n",
    meaning: "đội (xe, máy bay...)",
    related: [],
    example:
      "Star Airways is planning to replace its entire aircraft fleet with sky stream jets.",
    exampleVi:
      "Star Airways đang có kế hoạch thay thế toàn bộ đội máy bay bằng các máy bay phản lực.",
    phrases: [
      { en: "a fleet of company cars", vi: "một đội xe công ty" },
      {
        en: "our entire fleet of trucks",
        vi: "toàn bộ đội xe tải của chúng tôi",
      },
    ],
    note: "",
  },
  {
    word: "suspend",
    phonetic: "/səˈspend/",
    pos: "v",
    meaning: "đình chỉ",
    related: ["suspension"],
    example:
      "In the event of severe weather, affected bus routes may be temporarily suspended.",
    exampleVi:
      "Trong trường hợp thời tiết khắc nghiệt, các tuyến xe buýt bị ảnh hưởng có thể tạm thời bị đình chỉ.",
    phrases: [
      { en: "suspend one's decision", vi: "đình chỉ quyết định của ai" },
      { en: "The services are suspended", vi: "Các dịch vụ bị đình chỉ" },
    ],
    note: "",
  },
];

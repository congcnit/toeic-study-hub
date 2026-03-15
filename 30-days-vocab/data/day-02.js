// Day 2 – ACCOMMODATIONS & FOOD (Lưu trú & Ẩm thực)
const DAY_VOCAB = [
  {
    word: "accommodations",
    phonetic: "/əˌkɒməˈdeɪʃnz/",
    pos: "n",
    meaning: "chỗ ở",
    related: [],
    example:
      "I am usually satisfied with the accommodations and services at your hotel.",
    exampleVi: "Tôi thường hài lòng với chỗ ở và dịch vụ khách sạn của bạn.",
    phrases: [
      {
        en: "fine accommodations at an affordable rate",
        vi: "chỗ ở tốt ở một mức giá phải chăng",
      },
    ],
    note: "",
  },
  {
    word: "allergic",
    phonetic: "/əˈlɜːdʒɪk/",
    pos: "adj",
    meaning: "gây dị ứng",
    related: ["allergy"],
    example: "Some foods cause allergic reactions in certain people.",
    exampleVi: "Một số thực phẩm gây phản ứng dị ứng ở một số người.",
    phrases: [],
    note: "",
  },
  {
    word: "close",
    phonetic: "/kləʊz/",
    pos: "adj/v",
    meaning: "gần; thân thiết (adj) / đóng cửa, ngăn cách (v)",
    related: ["closely"],
    example:
      "Hotel Bella is close to public transportation, the theaters and the museums.",
    exampleVi:
      "Khách sạn Bella gần các phương tiện giao thông công cộng, nhà hát và các viện bảo tàng.",
    phrases: [
      {
        en: "The bus station is closed for repairs",
        vi: "Trạm xe buýt đóng cửa để sửa chữa",
      },
    ],
    note: '"close" vừa là động từ (đóng cửa) vừa là tính từ (gần; thân thiết; cẩn thận). "closely" (sát sao) cũng rất hay gặp, ví dụ: "closely connected" (có mối quan hệ sát sao); "closely examine" (kiểm tra sát sao).',
  },
  {
    word: "comfortably",
    phonetic: "/ˈkʌmftəbli/",
    pos: "adv",
    meaning: "thoải mái",
    related: ["comfortable", "comfort"],
    example:
      "The Captain's Seafood Restaurant can comfortably seat up to 20 guests in its Starboard Lounge.",
    exampleVi:
      "Nhà hàng hải sản Captain thoải mái cung cấp chỗ ngồi lên đến 20 khách trong Starboard Lounge.",
    phrases: [
      {
        en: "can seat comfortably four people",
        vi: "có thể ngồi thoải mái bốn người",
      },
      {
        en: "can sleep comfortably four people",
        vi: "có thể ngủ thoải mái bốn người",
      },
    ],
    note: "",
  },
  {
    word: "consist",
    phonetic: "/kənˈsɪst/",
    pos: "v",
    meaning: "gồm có",
    related: [],
    example:
      "The Davis Suite consists of a private bedroom, separate living room and balcony.",
    exampleVi:
      "Dãy phòng Davis bao gồm một phòng ngủ riêng, phòng khách riêng và ban công.",
    phrases: [
      {
        en: "The ensemble consists of four members",
        vi: "Nhóm nhạc bao gồm bốn thành viên",
      },
    ],
    note: 'Nên học cố định "consist of".',
  },
  {
    word: "directions",
    phonetic: "/dɪˈrekʃnz/",
    pos: "n",
    meaning: "hướng dẫn (đường đi)",
    related: ["direct", "directly"],
    example:
      "Directions to the hotel will be available at the car rental desk.",
    exampleVi:
      "Hướng dẫn chỉ đường đến khách sạn sẽ có tại bàn cho thuê xe hơi.",
    phrases: [
      { en: "directions to the store", vi: "chỉ đường đến cửa hàng" },
      {
        en: "directions for installing the device",
        vi: "hướng dẫn lắp đặt thiết bị",
      },
    ],
    note: '"direction" có đến 3 cách phát âm. Ngoài ra, "direct" có thể dùng như động từ: "direct a request/complaint/question to someone" (chuyển yêu cầu/phàn nàn/câu hỏi cho ai) hoặc dạng bị động "questions should be directed to" (các câu hỏi nên được chuyển cho).',
  },
  {
    word: "dish",
    phonetic: "/dɪʃ/",
    pos: "n",
    meaning: "món ăn; bát đĩa",
    related: [],
    example:
      "The restaurant's new executive chef has added some of her signature dishes to the menu.",
    exampleVi:
      "Bếp trưởng mới của nhà hàng này đã bổ sung thêm một số món ăn đặc trưng của mình vào thực đơn.",
    phrases: [],
    note: "",
  },
  {
    word: "freshness",
    phonetic: "/ˈfreʃnəs/",
    pos: "n",
    meaning: "độ tươi (thực phẩm; không khí;...)",
    related: ["fresh", "freshen", "freshly"],
    example:
      "The freshness of the local seafood varies depending upon the supplier.",
    exampleVi: "Độ tươi của hải sản địa phương thay đổi tùy theo nhà cung cấp.",
    phrases: [
      { en: "freshly baked bread", vi: "bánh mì mới nướng" },
      { en: "freshly cut sandwiches", vi: "bánh sandwich mới cắt" },
    ],
    note: "",
  },
  {
    word: "frozen",
    phonetic: "/ˈfrəʊzən/",
    pos: "adj",
    meaning: "(thực phẩm) đông lạnh",
    related: ["freeze"],
    example: "The company is known for its frozen dinners and pastries.",
    exampleVi: "Công ty nổi tiếng với các bữa ăn tối và bánh ngọt đông lạnh.",
    phrases: [],
    note: 'Bạn còn có thể gặp cụm mô tả thời tiết "freezing cold" (lạnh cóng).',
  },
  {
    word: "generate",
    phonetic: "/ˈdʒenəreɪt/",
    pos: "v",
    meaning: "tạo ra (điện; thu nhập; lợi nhuận;...)",
    related: ["generation", "generator"],
    example:
      "The restaurant has generated excitement because of the international reputation of its chef.",
    exampleVi:
      "Nhà hàng đã tạo ra sự phấn khích vì danh tiếng thế giới của người đầu bếp.",
    phrases: [],
    note: 'Bạn còn có thể gặp từ phái sinh "generator" (máy phát điện).',
  },
  {
    word: "in accordance with",
    phonetic: "/ɪn əˈkɔːdəns wɪð/",
    pos: "phr",
    meaning: "phù hợp với",
    related: [],
    example:
      "Cancellations must be made in accordance with the policy that is outlined on the website.",
    exampleVi:
      "Việc hủy bỏ phải được thực hiện phù hợp với chính sách được liệt kê trên trang web.",
    phrases: [],
    note: "",
  },
  {
    word: "laundry",
    phonetic: "/ˈlɔːndri/",
    pos: "n",
    meaning: "giặt ủi",
    related: [],
    example:
      "To ensure prompt return of your laundry, write your room number on the tag provided.",
    exampleVi:
      "Để đảm bảo giặt ủi của bạn được giữ trả nhanh chóng, xin hãy viết số phòng của bạn trên thẻ được cung cấp.",
    phrases: [],
    note: "",
  },
  {
    word: "leading",
    phonetic: "/ˈliːdɪŋ/",
    pos: "adj",
    meaning: "(công ty) hàng đầu",
    related: ["lead"],
    example: "Ms Morin has become one of Montreal's leading business people.",
    exampleVi:
      "Bà Morin đã trở thành một trong những doanh nhân hàng đầu của Montreal.",
    phrases: [],
    note: "",
  },
  {
    word: "otherwise",
    phonetic: "/ˈʌðəwaɪz/",
    pos: "adv",
    meaning: "nếu không thì; trừ khi có quy định khác",
    related: [],
    example:
      "All of the ingredients in these recipes are organic unless otherwise specified.",
    exampleVi:
      "Tất cả các thành phần trong các công thức nấu ăn này đều là hữu cơ trừ khi được chỉ định khác.",
    phrases: [
      {
        en: "Classes run for two hours, unless otherwise noted",
        vi: "Các lớp học kéo dài hai giờ, trừ khi có thông báo khác",
      },
      {
        en: "It will continue without interruption unless you state otherwise",
        vi: "Chương trình sẽ tiếp tục mà không bị gián đoạn trừ khi bạn có thông báo khác",
      },
    ],
    note: "",
  },
  {
    word: "prior to",
    phonetic: "/ˈpraɪər tuː/",
    pos: "prep",
    meaning: "trước",
    related: ["prior", "priority"],
    example:
      "Any changes to your reservation should be made at least three days prior to your arrival.",
    exampleVi:
      "Bất kỳ thay đổi đối với việc đặt phòng của bạn phải được thực hiện ít nhất ba ngày trước khi bạn đến.",
    phrases: [
      { en: "prior to coming to Los Angeles", vi: "trước khi đến Los Angeles" },
      { en: "prior to travel", vi: "trước khi đi du lịch/công tác" },
    ],
    note: '"prior to" là giới từ, do đó phía sau cần có danh từ hoặc v-ing. "prior" còn dùng như tính từ, ví dụ: "prior knowledge/experience/engagement" (kiến thức/kinh nghiệm/cuộc hẹn đã có từ trước).',
  },
  {
    word: "recipe",
    phonetic: "/ˈresəpi/",
    pos: "n",
    meaning: "công thức nấu ăn",
    related: [],
    example: "The cookbook contains simple, nutritious recipes.",
    exampleVi: "Cuốn sách nấu ăn chứa các công thức đơn giản, bổ dưỡng.",
    phrases: [
      { en: "recipe for", vi: "công thức (nấu ăn) cho" },
      { en: "a recipe book", vi: "một cuốn sách công thức nấu ăn" },
    ],
    note: '"recipe" có cách phát âm và dấu nhấn đặc biệt. Cần tránh nhầm "receipt" (hóa đơn, chủ đề đơn hàng) với "recipe" (công thức nấu ăn, chủ đề thực phẩm).',
  },
  {
    word: "reservation",
    phonetic: "/ˌrezəˈveɪʃn/",
    pos: "n",
    meaning: "sự đặt phòng",
    related: ["reserve", "reserved"],
    example:
      "As we discussed, room reservations have been made at the Mahalo hotel.",
    exampleVi:
      "Như chúng ta đã thảo luận, việc đặt phòng đã được thực hiện tại khách sạn Mahalo.",
    phrases: [
      { en: "make a reservation", vi: "đặt chỗ/đặt phòng" },
      { en: "confirm the reservation", vi: "xác nhận đặt phòng" },
      { en: "cancel the reservation", vi: "hủy đặt phòng" },
    ],
    note: '"reservation" [,rezəˈveɪʃn] có sự thay đổi về nguyên âm so với động từ gốc "reserve" [rɪˈzɜːv]. Cẩn thận nhầm với "preservation" (sự bảo tồn).',
  },
  {
    word: "specify",
    phonetic: "/ˈspesɪfaɪ/",
    pos: "v",
    meaning: "chỉ rõ",
    related: ["specific", "specification"],
    example:
      "Customers of Millor Catering should specify any special dietary needs they may have.",
    exampleVi:
      "Khách hàng của Millor Catering nên chỉ rõ bất kỳ nhu cầu ăn kiêng đặc biệt nào mà họ có thể có.",
    phrases: [
      {
        en: "specify a color on the order form",
        vi: "chỉ định một màu sắc trên mẫu đơn đặt hàng",
      },
    ],
    note: "",
  },
  {
    word: "taste",
    phonetic: "/teɪst/",
    pos: "n/v",
    meaning: "mùi vị; thị hiếu (n) / nếm (v)",
    related: ["tasty"],
    example:
      "The Aquapedra A5 water filter improves the taste and quality of drinking water.",
    exampleVi:
      "Bộ lọc nước Aquapedra A5 cải thiện mùi vị và chất lượng nước uống.",
    phrases: [
      { en: "to taste", vi: "nếm thử" },
      { en: "It tastes good", vi: "Có vị ngon" },
    ],
    note: '"taste" vừa là động từ vừa là danh từ. Khi dùng như danh từ, "taste" còn có thể mang nghĩa "thị hiếu", ví dụ "consumer taste" (thị hiếu người tiêu dùng).',
  },
  {
    word: "tray",
    phonetic: "/treɪ/",
    pos: "n",
    meaning: "cái mâm; cái khay",
    related: [],
    example: "Put your tray on a rack when you are finished eating.",
    exampleVi: "Hãy đặt khay của bạn lên giá đỡ khi bạn ăn xong.",
    phrases: [],
    note: "",
  },
  {
    word: "adjacent",
    phonetic: "/əˈdʒeɪsnt/",
    pos: "adj",
    meaning: "lân cận, kề nhau",
    related: ["adjacency", "adjacently"],
    example:
      "Some suites on the upper floors have connecting doors to adjacent rooms.",
    exampleVi:
      "Một số dãy phòng ở tầng trên có cửa nối liền các phòng sang các phòng lân cận.",
    phrases: [
      {
        en: "The conference center is adjacent to the hotel",
        vi: "Trung tâm hội nghị nằm ngay cạnh khách sạn",
      },
    ],
    note: "",
  },
  {
    word: "atmosphere",
    phonetic: "/ˈætməsfɪər/",
    pos: "n",
    meaning: "bầu không khí",
    related: [],
    example:
      "The Marina restaurant reopened recently with a new look and atmosphere.",
    exampleVi:
      "Nhà hàng Marina mở cửa lại gần đây với một diện mạo và không gian mới.",
    phrases: [
      {
        en: "a cozy/intimate atmosphere",
        vi: "bầu không khí ấm cúng/thân mật",
      },
      { en: "a celebratory atmosphere", vi: "bầu không khí hân hoan" },
      { en: "a pleasant atmosphere", vi: "bầu không khí dễ chịu" },
    ],
    note: '"atmosphere" thường dùng trong quảng cáo cho quán ăn, quán cà phê... để mô tả không khí thân mật, ấm cúng.',
  },
  {
    word: "bedding",
    phonetic: "/ˈbedɪŋ/",
    pos: "n",
    meaning: "bộ đồ giường (chăn, gối, nệm, khăn trải giường)",
    related: [],
    example:
      "Sleeping car passengers will be provided with the bedding they need for the journey.",
    exampleVi:
      "Hành khách ở khoang có chỗ ngủ sẽ được cung cấp bộ đồ giường mà họ cần cho hành trình.",
    phrases: [],
    note: "",
  },
  {
    word: "broad",
    phonetic: "/brɔːd/",
    pos: "adj",
    meaning: "rộng",
    related: [],
    example: "Franklin Catering company offers a broad range of menu choices.",
    exampleVi:
      "Công ty Dịch vụ ăn uống Franklin cung cấp một loạt rộng rãi các lựa chọn thực đơn.",
    phrases: [
      { en: "a broad selection of", vi: "sự lựa chọn rộng về" },
      { en: "broad appeal", vi: "thu hút nhiều người (quy mô rộng)" },
      {
        en: "general advertising to a broad audience",
        vi: "quảng cáo chung cho đối tượng khán giả rộng",
      },
    ],
    note: "",
  },
  {
    word: "concentration",
    phonetic: "/ˌkɒnsənˈtreɪʃn/",
    pos: "n",
    meaning: "sự tập trung (tinh thần; dưỡng chất;...)",
    related: ["concentrate"],
    example:
      "This pamphlet lists fruits and vegetables with the highest concentrations of vitamins.",
    exampleVi:
      "Tập sách nhỏ này liệt kê các loại rau quả tập trung lượng vitamin cao nhất.",
    phrases: [
      {
        en: "adversely affects workers' concentration and productivity",
        vi: "ảnh hưởng xấu đến sự tập trung và năng suất lao động của nhân viên",
      },
    ],
    note: "",
  },
  {
    word: "courteous",
    phonetic: "/ˈkɜːtiəs/",
    pos: "adj",
    meaning: "lịch sự",
    related: ["courtesy", "courteously"],
    example: "The service was excellent and the staff was courteous and warm.",
    exampleVi: "Dịch vụ xuất sắc và nhân viên thì lịch sự và thân thiện.",
    phrases: [
      {
        en: "earn a reputation for reliable and courteous service",
        vi: "tạo được tiếng vang vì dịch vụ đáng tin cậy và lịch sự",
      },
    ],
    note: "",
  },
  {
    word: "cuisine",
    phonetic: "/kwɪˈziːn/",
    pos: "n",
    meaning: "ẩm thực",
    related: [],
    example:
      "The restaurant's traditional quality remains with chef Pak Theo's menu of innovative Italian cuisine.",
    exampleVi:
      "Hương vị truyền thống của nhà hàng được giữ gìn bằng thực đơn ẩm thực Ý sáng tạo của đầu bếp Pak Theo.",
    phrases: [
      {
        en: "a new restaurant serving French cuisine",
        vi: "một nhà hàng mới phục vụ các món ăn Pháp",
      },
    ],
    note: "Chú ý cách phát âm vì đây là từ gốc tiếng Pháp.",
  },
  {
    word: "dine",
    phonetic: "/daɪn/",
    pos: "v",
    meaning: "dùng bữa (ăn)",
    related: ["dinner", "diner", "dining"],
    example:
      "Dining at the sophisticated Jade restaurant, one gets a sense of experiencing something special.",
    exampleVi:
      "Dùng bữa tại nhà hàng tinh tế Jade, người ta có cảm giác trải nghiệm điều gì đó đặc biệt.",
    phrases: [],
    note: 'Tránh nhầm "dinner" (bữa ăn tối) và "diner" (thực khách, người đi ăn tại quán). Các cụm hay gặp: "dining area" (khu vực ăn uống), "dining room" (phòng ăn).',
  },
  {
    word: "flavor",
    phonetic: "/ˈfleɪvər/",
    pos: "n",
    meaning: "hương vị",
    related: ["flavored"],
    example:
      "They were given a sample of each flavor and asked to rate each one.",
    exampleVi:
      "Họ được đưa một mẫu thử của từng hương vị và yêu cầu đánh giá mỗi loại.",
    phrases: [
      { en: "give flavor to", vi: "tạo hương vị cho" },
      { en: "What flavor would you like?", vi: "Bạn thích vị gì?" },
    ],
    note: "",
  },
  {
    word: "ingredient",
    phonetic: "/ɪnˈɡriːdiənt/",
    pos: "n",
    meaning: "thành phần (món ăn)",
    related: [],
    example: "The company had to change an ingredient in its apple tart.",
    exampleVi: "Công ty phải thay đổi một thành phần trong món bánh táo.",
    phrases: [],
    note: "",
  },
  {
    word: "linen",
    phonetic: "/ˈlɪnɪn/",
    pos: "n",
    meaning: "tấm vải lanh (dùng lau bàn; trải giường...)",
    related: [],
    example: "We need to clear the dirty dishes and linens from the tables.",
    exampleVi: "Chúng ta cần phải dọn dẹp các đĩa và khăn trải bẩn khỏi bàn.",
    phrases: [],
    note: "",
  },
  {
    word: "occupancy",
    phonetic: "/ˈɒkjʊpənsi/",
    pos: "n",
    meaning: "sự cư ngụ; sự chiếm chỗ",
    related: [],
    example:
      "The actual price per person for this package is 529$ and is based on double occupancy.",
    exampleVi:
      "Giá thực tế mỗi người cho gói này là 529 $ và dựa trên mức thuê phòng đôi.",
    phrases: [],
    note: '"occupancy rate" (tỉ lệ phòng đầy) dùng mô tả tỉ lệ phòng đã có người thuê của khách sạn.',
  },
  {
    word: "refreshing",
    phonetic: "/rɪˈfreʃɪŋ/",
    pos: "adj",
    meaning: "tươi mới",
    related: ["refresh", "refreshment", "refreshingly"],
    example:
      "The hotel's quiet mountain setting provides a refreshing change for visitors who live in a city.",
    exampleVi:
      "Cảnh quan núi non yên tĩnh của khách sạn cung cấp một sự thay đổi đó tươi mới cho du khách sống trong thành phố.",
    phrases: [{ en: "light refreshments", vi: "đồ ăn nhẹ" }],
    note: "",
  },
  {
    word: "whoever",
    phonetic: "/huːˈevər/",
    pos: "pr.n",
    meaning: "bất cứ ai",
    related: [],
    example:
      "Whoever responds to the survey will receive a 10$ gift certificate to the Rangeley cafe.",
    exampleVi:
      "Bất kỳ ai trả lời khảo sát sẽ nhận được phiếu quà tặng 10 $ cho quán cà phê Rangeley.",
    phrases: [],
    note: '"whoever" và "anyone" đều nghĩa là "bất cứ ai" nhưng "whoever" luôn nằm trong mệnh đề danh từ làm chủ ngữ hoặc tân từ, còn "anyone" đứng một mình.',
  },
  {
    word: "assorted",
    phonetic: "/əˈsɔːtɪd/",
    pos: "adj",
    meaning: "khác nhau (nhiều loại)",
    related: ["assort", "assortment"],
    example: "I ordered assorted sandwiches for a luncheon here next Monday.",
    exampleVi:
      "Tôi đã đặt các bánh sandwich nhiều loại cho bữa ăn trưa ở đây vào thứ Hai tới.",
    phrases: [],
    note: "",
  },
  {
    word: "commemorate",
    phonetic: "/kəˈmeməreɪt/",
    pos: "v",
    meaning: "kỷ niệm",
    related: ["commemoration", "commemorative", "commemoratively"],
    example:
      "To commemorate the twentieth anniversary of our restaurant chain, we have published a cookbook.",
    exampleVi:
      "Để kỷ niệm 20 năm thành lập nhà hàng chuỗi của chúng tôi, chúng tôi đã xuất bản một cuốn sách nấu ăn.",
    phrases: [
      {
        en: "to commemorate our opening 30 years ago",
        vi: "để kỷ niệm sự khai trương của chúng tôi cách đây 30 năm",
      },
    ],
    note: "",
  },
  {
    word: "concierge",
    phonetic: "/ˌkɒnsiˈeəʒ/",
    pos: "n",
    meaning: "nhân viên hướng dẫn (tại khách sạn)",
    related: [],
    example:
      "If you would like to explore Bangkok, our concierge service can recommend tourist activities.",
    exampleVi:
      "Nếu bạn muốn khám phá Bangkok, dịch vụ hỗ trợ của chúng tôi có thể đề xuất các hoạt động cho du khách.",
    phrases: [],
    note: '"concierge service" giúp khách du lịch nắm thêm thông tin về bus routes (tuyến xe buýt), tourist attractions (điểm tham quan)... Chú ý cách phát âm vì đây là từ gốc tiếng Pháp.',
  },
  {
    word: "culinary",
    phonetic: "/ˈkʌlɪnəri/",
    pos: "adj",
    meaning: "ẩm thực (thuộc về nấu ăn)",
    related: [],
    example:
      "Elan Restaurant features the culinary talents of chef Niwat Parnpradub.",
    exampleVi:
      "Nhà hàng Elan có điểm nhấn là tài năng ẩm thực của đầu bếp Niwat Parnpradub.",
    phrases: [],
    note: "",
  },
  {
    word: "perishable",
    phonetic: "/ˈperɪʃəbl/",
    pos: "adj",
    meaning: "dễ hỏng (thức ăn)",
    related: [],
    example:
      "Hearst Trucking company will no longer transport perishable goods.",
    exampleVi:
      "Công ty Vận tải Hearst sẽ không còn vận chuyển hàng hoá dễ hỏng.",
    phrases: [],
    note: "",
  },
  {
    word: "premises",
    phonetic: "/ˈpremɪsɪz/",
    pos: "n",
    meaning: "cơ sở",
    related: [],
    example:
      "Some services available on the premises are charged separately from the room fee.",
    exampleVi: "Một số dịch vụ có sẵn tại chỗ được tính riêng với phí phòng.",
    phrases: [{ en: "on the premises", vi: "tại chỗ (này)" }],
    note: "",
  },
];

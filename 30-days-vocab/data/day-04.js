// Day 4 – STORES (Cửa hàng)
const DAY_VOCAB = [
  {
    word: "bargain",
    phonetic: "/ˈbɑːɡən/",
    pos: "n/v",
    meaning: "món hời (n); trả giá (v)",
    related: [],
    example:
      "We occasionally mail out printed catalogs featuring new items or special bargains.",
    exampleVi:
      "Thỉnh thoảng chúng tôi gửi các catalogue bản in có các mặt hàng mới hoặc những món hời đặc biệt.",
    phrases: [
      { en: "buy at a bargain", vi: "mua được món hời" },
      { en: "It's a bargain!", vi: "Đó là một món hời!" },
    ],
    note: '"bargain" chỉ hàng mua với giá thấp hơn bình thường. Danh từ dùng nhiều hơn động từ, đặc biệt trong ngữ cảnh "special offers".',
  },
  {
    word: "besides",
    phonetic: "/bɪˈsaɪdz/",
    pos: "prep",
    meaning: "bên cạnh (đó); ngoài ra",
    related: [],
    example:
      "Besides offering lightweight clothing, Hurvitz Travel Wear also sells stylish luggage.",
    exampleVi:
      "Bên cạnh việc cung cấp quần áo trọng lượng nhẹ, Hurvitz Travel Wear cũng bán hành lý thời trang.",
    phrases: [],
    note: "",
  },
  {
    word: "comparison",
    phonetic: "/kəmˈpærɪsn/",
    pos: "n",
    meaning: "sự so sánh",
    related: ["compare"],
    example:
      "Evelyn Chu's website provides consumers with price comparisons of electronic devices.",
    exampleVi:
      "Website của công ty Evelyn Chu cung cấp cho người tiêu dùng so sánh giá cả các thiết bị điện tử.",
    phrases: [],
    note: "",
  },
  {
    word: "delighted",
    phonetic: "/dɪˈlaɪtɪd/",
    pos: "adj",
    meaning: "vui mừng; hài lòng",
    related: ["delight", "delightful", "delightedly"],
    example:
      "You can always send the product back for a full refund if you're not delighted with them.",
    exampleVi:
      "Bạn luôn có thể gửi lại sản phẩm để được hoàn tiền đủ nếu bạn không hài lòng với chúng.",
    phrases: [
      { en: "(much) to one's delight", vi: "làm cho ai vui mừng (nhiều)" },
    ],
    note: 'Mẹo nhớ: liên tưởng "delighted" với "light" (ánh sáng) – ánh sáng rạng rỡ khiến ta vui như nụ cười hài lòng.',
  },
  {
    word: "outlet",
    phonetic: "/ˈaʊtlet/",
    pos: "n",
    meaning: "lối ra; chi nhánh (cửa hàng bán lẻ)",
    related: [],
    example:
      "Visit one of our retail outlets for a demonstration of the newest models available.",
    exampleVi:
      "Hãy ghé qua một trong những cửa hàng bán lẻ của chúng tôi để xem thuyết trình các mẫu sản phẩm mới nhất hiện có.",
    phrases: [],
    note: '"outlet" = "out" (ra ngoài) + "let" – liên tưởng dây dẫn tỏa ra như chi nhánh.',
  },
  {
    word: "overcharge",
    phonetic: "/ˌəʊvəˈtʃɑːdʒ/",
    pos: "v",
    meaning: "tính phí quá cao",
    related: [],
    example: "Many customers felt they were being overcharged.",
    exampleVi: "Nhiều khách hàng cảm thấy họ đang bị tính phí quá cao.",
    phrases: [],
    note: '"overcharge" = "over" (quá mức) + "charge" (tính phí) → tính phí quá mức.',
  },
  {
    word: "packaging",
    phonetic: "/ˈpækɪdʒɪŋ/",
    pos: "n",
    meaning: "bao bì",
    related: ["package"],
    example:
      "For a full refund, please return the product in its original packaging.",
    exampleVi:
      "Để được hoàn đủ số tiền, vui lòng trả lại sản phẩm trong bao bì gốc.",
    phrases: [],
    note: '"packaging" (không đếm được) và "package" (đếm được) đều chỉ bao bì. "Package" còn nghĩa "gói = tập hợp": "benefits package" (gói phúc lợi), "vacation package" (gói du lịch).',
  },
  {
    word: "receipt",
    phonetic: "/rɪˈsiːt/",
    pos: "n",
    meaning: "hóa đơn; việc nhận",
    related: ["receive"],
    example:
      "In addition, please note that our return policy requires a receipt for a refund.",
    exampleVi:
      "Bên cạnh đó, xin lưu ý rằng chính sách hoàn trả của chúng tôi yêu cầu phải có hóa đơn để được hoàn tiền.",
    phrases: [
      { en: "upon receipt", vi: "khi nhận được" },
      {
        en: "confirm receipt of an application",
        vi: "xác nhận việc nhận một đơn xin việc",
      },
      {
        en: "Please provide us with the original receipt",
        vi: "Xin vui lòng cung cấp cho chúng tôi hóa đơn gốc",
      },
    ],
    note: 'Lưu ý cách phát âm có "p" câm.',
  },
  {
    word: "saving",
    phonetic: "/ˈseɪvɪŋ/",
    pos: "n",
    meaning: "khoản tiết kiệm",
    related: ["save", "savable"],
    example:
      "We want to tell you about the substantial savings we are offering during our summer sale.",
    exampleVi:
      "Chúng tôi muốn cho bạn biết về những khoản tiết kiệm đáng kể mà chúng tôi đang cung cấp trong đợt giảm giá mùa hè.",
    phrases: [],
    note: '"saving" là danh từ đếm được: "a saving", "savings". Cụm cố định: "a savings account" (tài khoản tiết kiệm), "a savings bank" (ngân hàng tiết kiệm) – không viết "a-saving-account".',
  },
  {
    word: "selection",
    phonetic: "/sɪˈlekʃn/",
    pos: "n",
    meaning: "sự lựa chọn",
    related: ["select", "selected", "selective"],
    example:
      "At the Walton Harvest Market, we carry the biggest selection of organic foods in the area.",
    exampleVi:
      "Tại chợ nông sản Walton, chúng tôi có bán nhiều chủng loại nhất về thực phẩm hữu cơ trong khu vực.",
    phrases: [
      {
        en: "a wide [huge/big] selection of",
        vi: "một lựa chọn rộng [khổng lồ/lớn] về",
      },
    ],
    note: '"selection" nhấn mạnh sự đa dạng hàng hóa. Cách diễn đạt tương tự: "a wide variety/range/array of".',
  },
  {
    word: "specialize",
    phonetic: "/ˈspeʃəlaɪz/",
    pos: "v",
    meaning: "chuyên môn về",
    related: ["special", "specialized", "specialization"],
    example:
      "The gift shop in the hotel lobby specializes in hand-crafted gift items.",
    exampleVi:
      "Cửa hàng quà lưu niệm tại sảnh khách sạn chuyên về các món quà thủ công.",
    phrases: [{ en: "specialize in", vi: "chuyên về" }],
    note: '"special" (đặc biệt) thường là tính từ; khi nói món đặc biệt trong cửa hàng có thể dùng như danh từ: "daily specials" (món đặc biệt hàng ngày).',
  },
  {
    word: "acceptable",
    phonetic: "/əkˈseptəbl/",
    pos: "adj",
    meaning: "chấp nhận được",
    related: ["accept", "acceptance", "acceptably"],
    example:
      "If this special rate is acceptable, please call me at 699-555-1857.",
    exampleVi:
      "Nếu mức giá đặc biệt này là chấp nhận được, vui lòng gọi cho tôi theo số 699-555-1857.",
    phrases: [],
    note: "",
  },
  {
    word: "affordable",
    phonetic: "/əˈfɔːdəbl/",
    pos: "adj",
    meaning: "giá cả phải chăng",
    related: ["afford"],
    example:
      "This item is very affordable and available in a wide variety of colors.",
    exampleVi: "Sản phẩm này thì giá rất phải chăng và có sẵn nhiều màu sắc.",
    phrases: [
      {
        en: "I cannot afford to buy a car. (= I cannot afford a car.)",
        vi: "Tôi không đủ khả năng mua một chiếc xe",
      },
    ],
    note: "",
  },
  {
    word: "be accounted for",
    phonetic: "/bi əˈkaʊntɪd fɔː/",
    pos: "v",
    meaning: "được kiểm đếm (hàng tồn kho)",
    related: ["account"],
    example:
      "Almost all the store's inventory has been accounted for but a few items appear to be still missing.",
    exampleVi:
      "Gần như tất cả hàng tồn kho của cửa hàng đã được kiểm đếm nhưng một vài mặt hàng có vẻ vẫn còn thiếu.",
    phrases: [],
    note: "",
  },
  {
    word: "bulk",
    phonetic: "/bʌlk/",
    pos: "n",
    meaning: "số lượng lớn",
    related: [],
    example:
      "In order to keep prices reasonable, Kim's Bakery will begin making its bread in bulk.",
    exampleVi:
      "Để giữ giá cả hợp lý, tiệm bánh Kim's Bakery sẽ bắt đầu làm bánh mì với số lượng lớn.",
    phrases: [{ en: "in bulk", vi: "với số lượng lớn" }],
    note: "",
  },
  {
    word: "competitive",
    phonetic: "/kəmˈpetɪtɪv/",
    pos: "adj",
    meaning: "cạnh tranh (giá cả, mức lương, thị trường)",
    related: ["competitively", "compete", "competition"],
    example: "Our store offers competitive prices on all electronics.",
    exampleVi:
      "Cửa hàng chúng tôi cung cấp giá cả cạnh tranh cho mọi thiết bị điện tử.",
    phrases: [],
    note: '"competitive" thường đi với "prices" (giá cả), "salary" (mức lương), "market" (thị trường).',
  },
  {
    word: "convenience",
    phonetic: "/kənˈviːniəns/",
    pos: "n",
    meaning: "sự tiện lợi",
    related: ["convenient", "inconvenience"],
    example: "The convenience of online shopping has made it very popular.",
    exampleVi: "Sự tiện lợi của mua sắm trực tuyến đã khiến nó rất phổ biến.",
    phrases: [],
    note: '"inconvenience" thường là danh từ nhưng đôi khi dùng như động từ trong TOEIC: "I don\'t want to inconvenience you any further."',
  },
  {
    word: "exchange",
    phonetic: "/ɪksˈtʃeɪndʒ/",
    pos: "n/v",
    meaning: "(n) sự đổi hàng; (v) trao đổi, đổi",
    related: [],
    example: "Items can be exchanged within 30 days with a valid receipt.",
    exampleVi: "Hàng có thể được đổi trong vòng 30 ngày khi có hóa đơn hợp lệ.",
    phrases: [
      { en: "in exchange for", vi: "để đổi lấy" },
      { en: "exchange policy", vi: "chính sách đổi trả" },
    ],
    note: "",
  },
  {
    word: "convenient",
    phonetic: "/kənˈviːniənt/",
    pos: "adj",
    meaning: "tiện lợi",
    related: ["conveniently"],
    example:
      "Sharma invites you to visit any of their convenience store locations for all your athletic clothing needs.",
    exampleVi:
      "Sharma mời bạn đến bất kỳ cửa hàng tiện lợi của họ nếu có nhu cầu quần áo thể thao.",
    phrases: [
      { en: "conveniently located", vi: "(cửa hàng) nằm ở vị trí thuận tiện" },
    ],
    note: "",
  },
  {
    word: "credit",
    phonetic: "/ˈkredɪt/",
    pos: "n/v",
    meaning: "tín dụng; sự ghi nhận công sức; phiếu tích điểm",
    related: [],
    example:
      "We can only offer a store credit in exchange for an item returned without a receipt.",
    exampleVi:
      "Chúng tôi chỉ có thể tặng bạn phiếu tích điểm để đổi lấy một món hàng trả lại mà không có hóa đơn.",
    phrases: [
      { en: "credit card", vi: "thẻ tín dụng" },
      { en: "give someone credit for", vi: "công nhận công sức của ai vì" },
    ],
    note: '"store credit" = phiếu tích điểm cửa hàng (đổi quà hoặc ưu đãi). "Credit card" = phương thức thanh toán.',
  },
  {
    word: "description",
    phonetic: "/dɪˈskrɪpʃn/",
    pos: "n",
    meaning: "sự miêu tả",
    related: ["describe", "descriptive"],
    example: "The product did not fit the advertised description.",
    exampleVi: "Sản phẩm không đúng với mô tả được quảng cáo.",
    phrases: [{ en: "job description", vi: "bản mô tả công việc" }],
    note: "",
  },
  {
    word: "in conjunction with",
    phonetic: "/ɪn kənˈdʒʌŋkʃn wɪð/",
    pos: "phr",
    meaning: "kết hợp với",
    related: [],
    example:
      "Omega Clothes' discount coupons cannot be used in conjunction with any other offer.",
    exampleVi:
      "Phiếu giảm giá của cửa hàng quần áo Omega không thể được sử dụng cùng với bất kỳ ưu đãi nào khác.",
    phrases: [],
    note: "",
  },
  {
    word: "inventory",
    phonetic: "/ˈɪnvəntri/",
    pos: "n",
    meaning: "hàng tồn kho",
    related: [],
    example:
      "Almost all the store's inventory has been accounted for but a few items appear to be still missing.",
    exampleVi:
      "Gần như tất cả hàng tồn kho của cửa hàng đã được kiểm đếm nhưng một vài mặt hàng có vẻ vẫn còn thiếu.",
    phrases: [],
    note: 'Chú ý cách phát âm và dấu nhấn của "inventory".',
  },
  {
    word: "merchandise",
    phonetic: "/ˈmɜːtʃəndaɪs/",
    pos: "n",
    meaning: "hàng hóa (không đếm được)",
    related: [],
    example: "Some merchandise is on display in the store window.",
    exampleVi: "Một số hàng hóa được trưng bày tại cửa sổ cửa hàng.",
    phrases: [],
    note: 'Nghĩa gần "item", "goods" nhưng "merchandise" là danh từ không đếm được. Hay gặp trong TOEIC Part 1: "Some merchandise is on display/being displayed."',
  },
  {
    word: "obtain",
    phonetic: "/əbˈteɪn/",
    pos: "v",
    meaning: "lấy được, đạt được",
    related: [],
    example: "You can obtain a copy of the catalog at any of our stores.",
    exampleVi:
      "Bạn có thể lấy bản catalog tại bất kỳ cửa hàng nào của chúng tôi.",
    phrases: [],
    note: "",
  },
  {
    word: "portable",
    phonetic: "/ˈpɔːtəbl/",
    pos: "adj",
    meaning: "di động; dễ mang theo",
    related: [],
    example:
      "We carry portable speakers and other durable packaging materials.",
    exampleVi:
      "Chúng tôi có bán loa di động và các vật liệu đóng gói bền khác.",
    phrases: [],
    note: "",
  },
  {
    word: "qualify",
    phonetic: "/ˈkwɒlɪfaɪ/",
    pos: "v",
    meaning: "đủ điều kiện",
    related: ["qualification", "qualified"],
    example:
      "To qualify for the local shopper discount, customers must show proof of residency.",
    exampleVi:
      "Để đủ điều kiện giảm giá cho khách địa phương, khách hàng phải xuất trình chứng minh cư trú.",
    phrases: [
      { en: "qualify for the position", vi: "đủ điều kiện cho vị trí" },
      {
        en: "All items on your order list qualify for return",
        vi: "Tất cả các mặt hàng trong danh sách đặt hàng của bạn đủ điều kiện để trả lại",
      },
    ],
    note: '"qualify for" tương tự "be eligible for". "Qualification" (n) = bằng cấp/chứng chỉ. "Qualified" (adj) = đủ tiêu chuẩn (ứng viên).',
  },
  {
    word: "range",
    phonetic: "/reɪndʒ/",
    pos: "v/n",
    meaning: "có quy mô, khác nhau (v); quy mô, phạm vi (n)",
    related: [],
    example:
      "Products on display will range from high-fashion dresses to jewelry and accessories.",
    exampleVi:
      "Sản phẩm trưng bày sẽ có nhiều loại từ váy thời trang cao cấp đến trang sức và phụ kiện.",
    phrases: [
      { en: "within the range of", vi: "trong phạm vi của" },
      { en: "a wide range of", vi: "nhiều chủng loại" },
    ],
    note: '"range" mô tả sự đa dạng, cấu trúc "range from A to B". Tương tự "selection" trong "a wide range/selection of".',
  },
  {
    word: "reasonable",
    phonetic: "/ˈriːznəbl/",
    pos: "adj",
    meaning: "hợp lý (giá cả)",
    related: ["reason", "reasonably"],
    example:
      "In order to keep prices reasonable, Kim's Bakery will begin making its bread in bulk.",
    exampleVi:
      "Để giữ giá cả hợp lý, tiệm bánh Kim's Bakery sẽ bắt đầu làm bánh mì với số lượng lớn.",
    phrases: [
      { en: "a reasonable request", vi: "một yêu cầu hợp lý" },
      { en: "The price is reasonable", vi: "Giá cả hợp lý" },
      { en: "The room rates are reasonable", vi: "Giá phòng là hợp lý" },
    ],
    note: '"reasonable" chủ yếu dùng cho giá/giá phòng trong quảng cáo. Tương tự: "affordable", "competitive". Cụm "be reasonably priced".',
  },
  {
    word: "reduced",
    phonetic: "/rɪˈdjuːst/",
    pos: "adj",
    meaning: "(giá) được giảm",
    related: ["reduce", "reduction"],
    example:
      "All products on display in the store window are available at reduced prices.",
    exampleVi:
      "Tất cả sản phẩm trưng bày tại cửa sổ cửa hàng đều được bán với giá đã giảm.",
    phrases: [],
    note: "",
  },
  {
    word: "responsive",
    phonetic: "/rɪˈspɒnsɪv/",
    pos: "adj",
    meaning: "phản hồi nhanh",
    related: ["response", "respond", "responsively"],
    example:
      "The Jeness Department Store is seeking ways to be more responsive to its customers.",
    exampleVi:
      "Cửa hàng bách hóa Jeness đang tìm cách phản hồi khách hàng nhanh hơn.",
    phrases: [],
    note: '"responsive" đi với "to". Cụm "in response to something" (để phản hồi điều gì).',
  },
  {
    word: "voucher",
    phonetic: "/ˈvaʊtʃər/",
    pos: "n",
    meaning: "phiếu ưu đãi",
    related: [],
    example:
      "As for my voucher, I would like to ask if the coupon will be valid at your future location.",
    exampleVi:
      "Về phiếu ưu đãi của tôi, tôi muốn hỏi liệu phiếu giảm giá có còn hiệu lực tại địa điểm mới của bạn không.",
    phrases: [{ en: "a gift voucher", vi: "phiếu quà tặng" }],
    note: "Chú ý cách phát âm để tránh đọc nhầm.",
  },
  {
    word: "disposable",
    phonetic: "/dɪˈspəʊzəbl/",
    pos: "adj",
    meaning: "dùng một lần (bát, đũa,...)",
    related: ["dispose"],
    example:
      "We carry disposable food containers and other durable packaging materials.",
    exampleVi:
      "Chúng tôi có bán hộp đựng thức ăn dùng một lần và các vật liệu đóng gói bền khác.",
    phrases: [
      { en: "disposable plates", vi: "đĩa dùng một lần" },
      { en: "disposable assets", vi: "tài sản có thể thanh lý" },
    ],
    note: '"disposable" (dùng một lần) khác với "dispose of" (vứt bỏ, thanh lý).',
  },
  {
    word: "emporium",
    phonetic: "/emˈpɔːriəm/",
    pos: "n",
    meaning: "trung tâm thương mại",
    related: [],
    example:
      "Creative Arts and Crafts Emporium is the number one store for arts and crafts supplies in the area.",
    exampleVi:
      "Creative Arts and Crafts Emporium là cửa hàng số một về hàng thủ công mỹ nghệ trong khu vực.",
    phrases: [],
    note: "",
  },
  {
    word: "entitle",
    phonetic: "/ɪnˈtaɪtl/",
    pos: "v",
    meaning: "cho phép (được quyền nhận/làm gì)",
    related: ["entitlement"],
    example:
      "You can expect a Gardner Friends Card, which entitles you to many benefits.",
    exampleVi:
      "Bạn có thể chờ thẻ Gardner Friends Card, thẻ mang đến cho bạn nhiều lợi ích.",
    phrases: [
      { en: "entitle somebody to something", vi: "cho phép ai làm gì/nhận gì" },
      { en: "be entitled to", vi: "được quyền nhận/làm điều gì" },
    ],
    note: '"be entitled to" theo sau có thể là danh từ: "be entitled to your pension" (được quyền hưởng lương hưu). "A book entitled \'A history of banking\'" = một quyển sách có tựa đề "Lịch sử ngân hàng" (entitle từ "title" = tựa đề).',
  },
  {
    word: "exquisite",
    phonetic: "/ɪkˈskwɪzɪt/",
    pos: "adj",
    meaning: "tinh tế",
    related: [],
    example:
      "Baker Gifts is proud of our exquisite products and exceptional customer service.",
    exampleVi:
      "Baker Gifts tự hào về sản phẩm tinh tế của chúng tôi và dịch vụ chăm sóc khách hàng xuất sắc.",
    phrases: [],
    note: "",
  },
  {
    word: "linger",
    phonetic: "/ˈlɪŋɡər/",
    pos: "v",
    meaning: "nấn ná, nán lại (vì không muốn rời đi)",
    related: ["lingering", "lingerer", "lingeringly"],
    example:
      "Now people linger at our stores and buy more housewares and furniture.",
    exampleVi:
      "Bây giờ mọi người hay nán lại tại các cửa hàng của chúng tôi và mua thêm đồ gia dụng và nội thất.",
    phrases: [],
    note: 'Mẹo nhớ: "linger" gợi "long" (lâu) – ai đó nán lại lâu (longer) ở hiệu sách vì chưa muốn mua gì.',
  },
  {
    word: "lure",
    phonetic: "/lʊər/",
    pos: "v",
    meaning: "thu hút (khách hàng)",
    related: ["luring"],
    example:
      "We decided to try giving out some beverages to lure people into the store.",
    exampleVi:
      "Chúng tôi quyết định thử tặng một số đồ uống để thu hút mọi người vào cửa hàng.",
    phrases: [],
    note: 'Phát âm gần "lùa" (lùa đàn gà vào chuồng) – thu hút khách vào cửa hàng.',
  },
  {
    word: "preferential",
    phonetic: "/ˌprefəˈrenʃl/",
    pos: "adj",
    meaning: "ưu tiên; ưu đãi",
    related: ["preferred", "preference"],
    example:
      "Bylar Furnishings is the preferential office-furniture vendor for the area's largest corporations.",
    exampleVi:
      "Công ty nội thất Bylar là nhà cung cấp nội thất văn phòng ưu tiên cho các tập đoàn lớn nhất trong khu vực.",
    phrases: [],
    note: '"preferred" (được ưu tiên) hay gặp trong tuyển dụng: "Candidates with 3 years of experience are preferred." Cụm: "preferred means of transportation", "preferred method of payment", "preferred supplier".',
  },
  {
    word: "produce",
    phonetic: "/prəˈdjuːs/",
    pos: "v/n",
    meaning: "sản xuất (v); nông sản (n)",
    related: [],
    example:
      "Be sure to stop by our produce section for the freshest fruits and vegetables.",
    exampleVi:
      "Hãy chắc chắn là ghé qua khu bán nông sản của chúng tôi với rau quả tươi nhất.",
    phrases: [{ en: "farm produce / agricultural produce", vi: "nông sản" }],
    note: 'Động từ "produce" đọc [prəˈdjuːs]; danh từ "produce" (nông sản) đọc [ˈprɒdjuːs]. "Produce" (n) = nông sản, không đếm được; "product" = sản phẩm nói chung, đếm được.',
  },
];

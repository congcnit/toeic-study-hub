// Day 5 – PURCHASE & WARRANTY (Mua sắm & Bảo hành)
const DAY_VOCAB = [
  {
    word: "confidence",
    phonetic: "/ˈkɒnfɪdəns/",
    pos: "n",
    meaning: "lòng tin, sự tự tin",
    related: ["confident"],
    example:
      "Consumers have a lot of confidence in our stoves and refrigerators.",
    exampleVi:
      "Người tiêu dùng rất tin tưởng vào bếp lò và tủ lạnh của chúng tôi.",
    phrases: [
      { en: "consumer confidence", vi: "sự tin tưởng của người tiêu dùng" },
      {
        en: "give one's confidence to / have confidence in",
        vi: "trao niềm tin / có niềm tin vào",
      },
      { en: "lose confidence", vi: "mất tự tin" },
      { en: "with confidence", vi: "với sự tự tin" },
      { en: "have absolute confidence in", vi: "có lòng tin tuyệt đối về" },
    ],
    note: '"confidence" chỉ sự tự tin hoặc tin tưởng vào người/vật khác. Giới từ thường dùng "in": "confidence in" / "confident in" (giống "believe/belief in").',
  },
  {
    word: "expectation",
    phonetic: "/ˌekspekˈteɪʃn/",
    pos: "n",
    meaning: "sự mong đợi",
    related: ["expect", "expectations"],
    example: "We hope this refrigerator will exceed your expectations.",
    exampleVi: "Chúng tôi hy vọng tủ lạnh này sẽ vượt mong đợi của bạn.",
    phrases: [
      { en: "meet one's expectations", vi: "đáp ứng mong đợi của ai" },
      { en: "exceed one's expectations", vi: "vượt mong đợi của ai" },
    ],
    note: "",
  },
  {
    word: "guarantee",
    phonetic: "/ˌɡærənˈtiː/",
    pos: "v/n",
    meaning: "bảo hành; đảm bảo (v); sự đảm bảo (n)",
    related: [],
    example:
      "This monitor is guaranteed to be free from defects for five years from the date of the original purchase.",
    exampleVi:
      "Màn hình này được đảm bảo không bị lỗi trong năm năm kể từ ngày mua ban đầu.",
    phrases: [
      {
        en: "We guarantee to refund your money in full if you are not satisfied with your purchase",
        vi: "Chúng tôi đảm bảo hoàn lại tiền đầy đủ nếu bạn không hài lòng với món hàng mua",
      },
    ],
    note: '"guarantee" vừa là động từ vừa là danh từ (đồng nghĩa "warranty" – phiếu bảo hành). Chú ý cách phát âm.',
  },
  {
    word: "manual",
    phonetic: "/ˈmænjuəl/",
    pos: "n",
    meaning: "sách hướng dẫn",
    related: [],
    example:
      "Our contact information is printed on the back cover of the manual.",
    exampleVi:
      "Thông tin liên lạc của chúng tôi được in trên bìa sau của sách hướng dẫn sử dụng.",
    phrases: [],
    note: '"manual" có thể là tính từ (thủ công) nhưng trong TOEIC thường gặp như danh từ = sách hướng dẫn (máy móc). Cụm: "user manual".',
  },
  {
    word: "modification",
    phonetic: "/ˌmɒdɪfɪˈkeɪʃn/",
    pos: "n",
    meaning: "sửa đổi",
    related: ["modify"],
    example:
      "Many car enthusiasts like to make unique modifications to their vehicles.",
    exampleVi:
      "Nhiều người đam mê xe hơi muốn có những sửa đổi độc đáo với chiếc xe của họ.",
    phrases: [
      {
        en: "make a necessary modification",
        vi: "thực hiện một sửa đổi cần thiết",
      },
      {
        en: "the plans for the building modification",
        vi: "kế hoạch cho việc sửa đổi tòa nhà",
      },
    ],
    note: "",
  },
  {
    word: "negligence",
    phonetic: "/ˈneɡlɪdʒəns/",
    pos: "n",
    meaning: "sự sơ suất",
    related: ["negligent"],
    example:
      "The company is liable for negligence, so the customer will be compensated for the damage.",
    exampleVi:
      "Công ty chịu trách nhiệm về sự sơ suất, do đó khách hàng sẽ được bồi thường thiệt hại.",
    phrases: [],
    note: "Từ thường dùng trong văn bản bảo hành, khi nói về điều kiện được bảo hành sản phẩm.",
  },
  {
    word: "original",
    phonetic: "/əˈrɪdʒənl/",
    pos: "adj",
    meaning: "nguyên gốc; ban đầu",
    related: ["origin"],
    example: "This mobile phone is an updated version of the original model.",
    exampleVi:
      "Điện thoại di động này là một phiên bản cập nhật của mẫu ban đầu.",
    phrases: [
      { en: "the original itinerary", vi: "lịch trình ban đầu" },
      {
        en: "Please provide us with the original receipt",
        vi: "Vui lòng cung cấp cho chúng tôi hóa đơn gốc",
      },
      {
        en: "bring the towers back to their original 17th century splendor",
        vi: "mang những ngọn tháp trở về vẻ huy hoàng ban đầu của thế kỷ 17",
      },
    ],
    note: 'Trong hình học kí hiệu gốc "O" = "origin" (gốc, nguồn). Từ gốc đó xuất phát mọi thứ – mẹo nhớ "original".',
  },
  {
    word: "oversight",
    phonetic: "/ˈəʊvəsaɪt/",
    pos: "n",
    meaning: "sai sót",
    related: [],
    example:
      "The product warranty will be invalid if the item is damaged as a result of user oversight.",
    exampleVi:
      "Bảo hành sản phẩm sẽ không hợp lệ nếu mặt hàng bị hư hỏng do thiếu sót của người sử dụng.",
    phrases: [
      { en: "rectify an oversight", vi: "sửa lại một sự thiếu sót" },
      {
        en: "We apologize for the oversight in this case",
        vi: "Chúng tôi xin lỗi vì sự thiếu sót trong trường hợp này",
      },
    ],
    note: '"sight" = sự nhìn, "over" = phía trên → "oversight" = nhìn qua loa → dẫn đến sai sót.',
  },
  {
    word: "perform",
    phonetic: "/pəˈfɔːm/",
    pos: "v",
    meaning: "thực hiện; biểu diễn; hoạt động (tốt)",
    related: ["performance"],
    example:
      "The battery in our newest mobile phone performs better than those in similar products.",
    exampleVi:
      "Pin trong điện thoại di động mới nhất của chúng tôi hoạt động tốt hơn so với pin của các sản phẩm tương tự.",
    phrases: [],
    note: '"perform" đa nghĩa: (1) biểu diễn (perform a play), (2) thực hiện (perform a task), (3) có thành tích (employee performs well), (4) hoạt động (machine/company performs well). Dịch linh hoạt theo chủ ngữ và ngữ cảnh.',
  },
  {
    word: "return",
    phonetic: "/rɪˈtɜːn/",
    pos: "n/v",
    meaning: "(n) lợi nhuận; (v) trả lại; trở lại",
    related: [],
    example:
      "Any equipment that does not arrive in perfect condition may be returned to QMZ Electronics.",
    exampleVi:
      "Bất kỳ thiết bị nào không đến nơi nguyên vẹn đều có thể được trả lại cho công ty điện tử QMZ.",
    phrases: [{ en: "return policy", vi: "chính sách trả hàng" }],
    note: "",
  },
  {
    word: "solve",
    phonetic: "/sɒlv/",
    pos: "v",
    meaning: "giải quyết",
    related: ["solution"],
    example:
      "You will find the manual very helpful in solving any problems you encounter.",
    exampleVi:
      "Bạn sẽ thấy là sách hướng dẫn rất hữu ích trong việc giải quyết bất kỳ vấn đề bạn gặp phải.",
    phrases: [],
    note: "",
  },
  {
    word: "alteration",
    phonetic: "/ˌɔːltəˈreɪʃn/",
    pos: "n",
    meaning: "sự thay đổi",
    related: ["alter"],
    example:
      "This warranty does not cover any damage resulting from alterations made by the user.",
    exampleVi:
      "Bảo hành này không bao gồm bất kỳ thiệt hại nào phát sinh từ thay đổi do người sử dụng gây ra.",
    phrases: [{ en: "make alterations on/to", vi: "thực hiện thay đổi về" }],
    note: '"alteration" = thay đổi nhỏ (kế hoạch, chính sách, nhà). Gần nghĩa "modification". Trong cửa hàng quần áo = "sửa quần áo": "The dress will not need much alteration."',
  },
  {
    word: "appliance",
    phonetic: "/əˈplaɪəns/",
    pos: "n",
    meaning: "thiết bị gia dụng",
    related: [],
    example:
      "Please speak with our customer service representatives if you have any difficulties using this appliance.",
    exampleVi:
      "Vui lòng nói chuyện với người đại diện dịch vụ chăm sóc khách hàng của chúng tôi nếu bạn gặp khó khăn khi sử dụng thiết bị này.",
    phrases: [
      {
        en: "energy-efficient household appliances",
        vi: "các thiết bị gia dụng tiết kiệm năng lượng",
      },
      {
        en: "an appliance repair service",
        vi: "một dịch vụ sửa chữa thiết bị",
      },
    ],
    note: '"appliance" = thiết bị gia dụng nói chung (tủ lạnh, máy giặt, lò vi sóng...). Hay gặp trong cho thuê bất động sản, cửa hàng điện tử. Tránh nhầm với "application" (đơn xin việc).',
  },
  {
    word: "aware",
    phonetic: "/əˈweər/",
    pos: "adj",
    meaning: "biết; lưu ý",
    related: ["awareness"],
    example: "We are aware that our warranty expired a year ago.",
    exampleVi:
      "Chúng tôi biết rằng bảo hành của chúng tôi đã hết hạn một năm trước.",
    phrases: [
      { en: "be aware of", vi: "hãy lưu ý về" },
      { en: "be aware that", vi: "hãy lưu ý rằng; biết rằng" },
    ],
    note: "",
  },
  {
    word: "bear in mind",
    phonetic: "/beər ɪn maɪnd/",
    pos: "phr",
    meaning: "ghi nhớ (điều quan trọng)",
    related: [],
    example:
      "When using your new refrigerator, please bear in mind the following points.",
    exampleVi: "Khi sử dụng tủ lạnh mới, xin ghi nhớ những điểm sau.",
    phrases: [],
    note: "",
  },
  {
    word: "combination",
    phonetic: "/ˌkɒmbɪˈneɪʃn/",
    pos: "n",
    meaning: "sự kết hợp",
    related: ["combine", "combined"],
    example:
      "Everclear headphones offer the best combination of comfort and high-quality audio.",
    exampleVi:
      "Tai nghe Everclear đưa ra sự kết hợp tốt nhất của sự thoải mái và âm thanh chất lượng cao.",
    phrases: [
      { en: "in combination with", vi: "kết hợp với" },
      { en: "make a strong combination", vi: "tạo ra một sự kết hợp mạnh mẽ" },
    ],
    note: '"combined" (adj) = chung sức: "a combined effort" (nỗ lực chung).',
  },
  {
    word: "complication",
    phonetic: "/ˌkɒmplɪˈkeɪʃn/",
    pos: "n",
    meaning: "sự phức tạp; biến chứng",
    related: ["complicated"],
    example:
      "I have begun to have some complications with a few features on the camera.",
    exampleVi:
      "Tôi đã bắt đầu thấy sự phức tạp trong một vài tính năng trên máy ảnh.",
    phrases: [],
    note: "",
  },
  {
    word: "component",
    phonetic: "/kəmˈpəʊnənt/",
    pos: "n",
    meaning: "thành phần; linh kiện (điện tử)",
    related: [],
    example:
      "Placing the digital scale near a source of heat may damage electronic components.",
    exampleVi:
      "Đặt cân điện tử gần nguồn nhiệt có thể làm hỏng các linh kiện điện tử.",
    phrases: [
      {
        en: "replace worn-out components",
        vi: "thay thế các linh kiện bị mòn",
      },
      {
        en: "a central component of the town's economy",
        vi: "thành phần cốt yếu của kinh tế thị trấn",
      },
      { en: "key component", vi: "thành phần chính" },
    ],
    note: '"component" = thành phần của kế hoạch/hệ thống; hoặc "linh kiện" (car components, electronic components). Đồng nghĩa "parts": replacement parts, spare parts.',
  },
  {
    word: "coverage",
    phonetic: "/ˈkʌvərɪdʒ/",
    pos: "n",
    meaning: "sự bảo hiểm; sự tường thuật; phủ sóng",
    related: ["cover", "covered"],
    example:
      "It is with great pride that I announce that our mobile telephone coverage area has grown.",
    exampleVi:
      "Tôi tự hào thông báo là diện tích phủ sóng điện thoại di động của chúng tôi đã tăng.",
    phrases: [
      { en: "comprehensive coverage", vi: "bảo hiểm toàn diện" },
      { en: "live coverage", vi: "tường thuật trực tiếp" },
    ],
    note: 'Trong bảo hành = "bảo hành/bảo hiểm". Trong sự kiện/truyền thông = "sự tường thuật". "Cover" (n) = bìa sách (chủ đề xuất bản, thiết kế).',
  },
  {
    word: "defect",
    phonetic: "/ˈdiːfekt/",
    pos: "n",
    meaning: "(hàng hóa) lỗi",
    related: [],
    example:
      "To report a defect, call our national 24-hour service hotline at 555-9807.",
    exampleVi:
      "Để báo cáo lỗi, hãy gọi đường dây nóng của trung tâm dịch vụ 24 giờ trên toàn quốc ở số 555-9807.",
    phrases: [
      { en: "be free of defects", vi: "không bị lỗi (sản phẩm)" },
      {
        en: "find defects in the materials of this product",
        vi: "tìm ra khiếm khuyết trong chất liệu của sản phẩm này",
      },
    ],
    note: "",
  },
  {
    word: "defective",
    phonetic: "/dɪˈfektɪv/",
    pos: "adj",
    meaning: "có khuyết điểm",
    related: ["defectively"],
    example:
      "The store will repair or replace defective products within the warranty period.",
    exampleVi:
      "Cửa hàng sẽ sửa chữa hoặc thay thế sản phẩm có khuyết điểm trong thời hạn bảo hành.",
    phrases: [
      {
        en: "repair of a defective product",
        vi: "sửa chữa sản phẩm có khuyết điểm",
      },
      { en: "return defective products", vi: "trả lại sản phẩm có lỗi" },
    ],
    note: "",
  },
  {
    word: "expiration",
    phonetic: "/ˌekspɪˈreɪʃn/",
    pos: "n",
    meaning: "sự hết hạn",
    related: ["expire", "expired"],
    example: "Please check the expiration date on the package before use.",
    exampleVi: "Vui lòng kiểm tra ngày hết hạn trên bao bì trước khi sử dụng.",
    phrases: [{ en: "expiration date", vi: "ngày hết hạn" }],
    note: 'Dùng cho sản phẩm hoặc thẻ thành viên. Động từ "expire" và danh từ "expiration" có sự khác biệt về trọng âm và nguyên âm.',
  },
  {
    word: "feature",
    phonetic: "/ˈfiːtʃər/",
    pos: "n/v",
    meaning: "(n) tính năng; (v) có đặc điểm, bao gồm (người/vật nổi bật)",
    related: [],
    example: "The new model features a larger screen and longer battery life.",
    exampleVi: "Mẫu mới có tính năng màn hình lớn hơn và pin dùng lâu hơn.",
    phrases: [
      { en: "preserve original features", vi: "giữ nguyên các tính năng gốc" },
      {
        en: "the summary of the main features",
        vi: "tóm tắt các tính năng chính",
      },
    ],
    note: '(n) Trong quảng cáo sản phẩm = tính năng. (v) = có đặc điểm nổi bật: "iPhone X features Face ID"; "Time magazine\'s latest cover features Trump."',
  },
  {
    word: "function",
    phonetic: "/ˈfʌŋkʃn/",
    pos: "v/n",
    meaning: "(v) hoạt động, vận hành; (n) chức năng",
    related: [],
    example: "The main function of the new electronic notepad is Internet use.",
    exampleVi: "Chức năng chính của sổ tay điện tử mới là sử dụng Internet.",
    phrases: [
      { en: "function properly", vi: "hoạt động ổn định" },
      { en: "be fully functional", vi: "hoạt động hoàn toàn" },
    ],
    note: '(n) Chức năng của sản phẩm hoặc nhiệm vụ của nhân viên/phòng ban. (v) = vận hành/hoạt động (máy móc, hệ thống, công ty): "Despite the power cuts, the hospital continued to function normally."',
  },
  {
    word: "lapse",
    phonetic: "/læps/",
    pos: "v/n",
    meaning: "(v) hết hiệu lực; (n) khoảng thời gian; lỗi nhỏ",
    related: [],
    example: "Most warranties on electronic products lapse after 90 days.",
    exampleVi:
      "Hầu hết các bảo hành về sản phẩm điện tử đều hết hiệu lực sau 90 ngày.",
    phrases: [
      {
        en: "a serious lapse in judgment",
        vi: "một sai sót nghiêm trọng trong đánh giá",
      },
      { en: "security lapses", vi: "sai sót an ninh" },
      {
        en: "renew your membership before it lapses",
        vi: "gia hạn thẻ thành viên trước khi nó hết hiệu lực",
      },
    ],
    note: "",
  },
  {
    word: "pledge",
    phonetic: "/pledʒ/",
    pos: "v",
    meaning: "cam kết",
    related: [],
    example:
      "Rebuilt Ltd. pledges that all appliances will be properly repaired the first time.",
    exampleVi:
      "Công ty Rebuilt cam kết rằng tất cả các thiết bị sẽ được sửa chữa đúng cách ngay từ lần đầu tiên.",
    phrases: [],
    note: "",
  },
  {
    word: "prevalent",
    phonetic: "/ˈprevələnt/",
    pos: "adj",
    meaning: "phổ biến",
    related: [],
    example: "Mobile phones have become prevalent in all advanced countries.",
    exampleVi:
      "Điện thoại di động đã trở nên phổ biến ở tất cả các nước tiên tiến.",
    phrases: [
      { en: "be prevalent in", vi: "phổ biến trong" },
      { en: "be prevalent among", vi: "phổ biến giữa" },
    ],
    note: '"prevalent" là từ cao cấp hơn "common" (thông dụng).',
  },
  {
    word: "refund",
    phonetic: "/ˈriːfʌnd/",
    pos: "n/v",
    meaning: "hoàn tiền",
    related: [],
    example:
      "We will gladly offer a refund for any purchase a customer is dissatisfied with.",
    exampleVi:
      "Chúng tôi sẽ vui lòng hoàn lại tiền cho bất kỳ món hàng mua nào mà khách hàng không hài lòng.",
    phrases: [
      { en: "give a refund", vi: "hoàn tiền" },
      { en: "claim (ask for) a refund", vi: "yêu cầu hoàn tiền" },
      {
        en: "if you want to get a refund on your purchase",
        vi: "nếu bạn muốn được hoàn tiền cho món hàng đã mua",
      },
    ],
    note: '"refund" (n/v) dùng khi khách không hài lòng/sản phẩm lỗi/giao hàng trễ. Khác "reimbursement" (hoàn lại chi phí công tác, đi lại).',
  },
  {
    word: "reveal",
    phonetic: "/rɪˈviːl/",
    pos: "v",
    meaning: "tiết lộ",
    related: [],
    example:
      "Babel Electronics has just revealed their new line of digital cameras.",
    exampleVi:
      "Công ty điện tử Babel vừa mới tiết lộ dòng máy ảnh kỹ thuật số mới.",
    phrases: [{ en: "reveal a secret", vi: "tiết lộ bí mật" }],
    note: "",
  },
  {
    word: "rigorous",
    phonetic: "/ˈrɪɡərəs/",
    pos: "adj",
    meaning: "nghiêm ngặt (quy định, quy trình)",
    related: ["rigorously", "rigor"],
    example:
      "Siesna Electronics products meet rigorous technical specifications.",
    exampleVi:
      "Sản phẩm của công ty điện tử Siesna đáp ứng các tiêu chuẩn kỹ thuật khắt khe.",
    phrases: [],
    note: '"rigorous" cao cấp hơn "strict", dùng trong quảng cáo để khen chất lượng sản phẩm (tiêu chuẩn, quy trình sản xuất).',
  },
  {
    word: "safely",
    phonetic: "/ˈseɪfli/",
    pos: "adv",
    meaning: "một cách an toàn",
    related: ["safe"],
    example:
      "Your digital files will remain stored safely on our online server.",
    exampleVi:
      "Các tập tin kỹ thuật số của bạn sẽ vẫn được lưu trữ an toàn trên máy chủ trực tuyến của chúng tôi.",
    phrases: [],
    note: '"safe" vừa là tính từ vừa là danh từ đếm được = két sắt (strongbox). Khác với danh từ không đếm được "safety" (sự an toàn).',
  },
  {
    word: "shrink",
    phonetic: "/ʃrɪŋk/",
    pos: "v",
    meaning: "co lại (quần áo); thu hẹp, suy yếu (thị trường, nền kinh tế)",
    related: ["shrinkage", "shrinkable", "shrinking"],
    example:
      "The manufacturer guarantees to replace any item of clothing which shrinks after being washed.",
    exampleVi:
      "Nhà sản xuất đảm bảo thay thế bất kỳ món quần áo nào bị co lại sau khi giặt.",
    phrases: [],
    note: '"The market is shrinking" = thị trường đang thu hẹp (xấu đi).',
  },
  {
    word: "succession",
    phonetic: "/səkˈseʃn/",
    pos: "n",
    meaning: "sự kế tiếp; chuỗi (theo thứ tự)",
    related: ["succeed", "successive", "successful"],
    example:
      "Attach the pieces in quick succession, before the glue has time to dry.",
    exampleVi: "Gắn các mảnh nối tiếp nhau nhanh, trước khi keo kịp khô.",
    phrases: [
      { en: "for the third year in succession", vi: "năm thứ ba liên tiếp" },
      { en: "3 successive years", vi: "3 năm liên tiếp" },
    ],
    note: 'Tránh nhầm "succession" với "success". "Succeed" (v) có 2 nghĩa: (1) thành công → "success", "successful"; (2) kế tiếp (chức vụ) → "succession", "successive".',
  },
  {
    word: "supplement",
    phonetic: "/ˈsʌplɪment/",
    pos: "v/n",
    meaning: "(v) bổ sung; (n) phần bổ sung",
    related: ["supplementary"],
    example:
      "Many people supplement their diet with multi-vitamins in order to stay as healthy as possible.",
    exampleVi:
      "Nhiều người bổ sung chế độ ăn bằng vitamin tổng hợp để giữ sức khỏe tốt nhất có thể.",
    phrases: [],
    note: 'Cả (n) và (v) đều chỉ việc thêm vào: "vitamin supplements", "dietary supplements", "supplementary illustrations", "supplementary information".',
  },
  {
    word: "take into account",
    phonetic: "/teɪk ˈɪntə əˈkaʊnt/",
    pos: "phr",
    meaning: "tính đến, xét đến",
    related: [],
    example:
      "The challenges of maintaining quality control must be taken into account.",
    exampleVi:
      "Những thách thức trong việc duy trì kiểm soát chất lượng phải được tính đến.",
    phrases: [],
    note: '"take into account something" hoặc "take something into account" = cân nhắc các yếu tố trước khi quyết định.',
  },
  {
    word: "tend",
    phonetic: "/tend/",
    pos: "v",
    meaning: "có xu hướng",
    related: ["tendency"],
    example:
      "When comparing similarly priced products, consumers tend to favor the less expensive item.",
    exampleVi:
      "Khi so sánh các sản phẩm có giá tương tự, người tiêu dùng có khuynh hướng ưa thích mặt hàng rẻ hơn.",
    phrases: [
      {
        en: "tend to use a lot of disposable products",
        vi: "có xu hướng sử dụng nhiều sản phẩm dùng một lần",
      },
      {
        en: "Profit predictions tend to change from month to month",
        vi: "Dự báo lợi nhuận có xu hướng thay đổi từ tháng này sang tháng khác",
      },
    ],
    note: 'Học cố định "tend to" – "tend" luôn đi với "to". Nghĩa gần "often" nhưng ở dạng động từ: có thể thử thay "tend to" bằng "often" thì nghĩa câu gần như không đổi.',
  },
  {
    word: "trial",
    phonetic: "/ˈtraɪəl/",
    pos: "n",
    meaning: "dùng thử",
    related: ["try", "tried", "trying"],
    example:
      "The license for the trial version of Exi 2.0 software is valid for the 30-day period.",
    exampleVi:
      "Giấy phép sử dụng phiên bản dùng thử của phần mềm Exi 2.0 có hiệu lực trong khoảng thời gian 30 ngày.",
    phrases: [
      {
        en: "offer a free trial membership",
        vi: "cung cấp thẻ thành viên dùng thử miễn phí",
      },
    ],
    note: '"try" (v) có 2 nghĩa: (1) cố gắng (try to do), (2) thử (try something). "Trial" xuất phát từ nghĩa (2) = dùng thử. "Trial" là danh từ, không phải tính từ (xem bài 1 – arrival).',
  },
  {
    word: "warranty",
    phonetic: "/ˈwɒrənti/",
    pos: "n",
    meaning: "giấy bảo hành",
    related: [],
    example: "This warranty does not cover damages affecting the appearance.",
    exampleVi:
      "Bảo hành này không bảo hiểm các thiệt hại ảnh hưởng đến bề ngoài (sản phẩm).",
    phrases: [
      { en: "The warranty lasts for", vi: "Bảo hành kéo dài trong" },
      {
        en: "Warranty of the product expires on",
        vi: "Bảo hành của sản phẩm hết hạn vào",
      },
    ],
    note: "",
  },
  {
    word: "contingency",
    phonetic: "/kənˈtɪndʒənsi/",
    pos: "n",
    meaning: "tình huống bất ngờ",
    related: ["contingent"],
    example:
      "The company has several contingency plans if the launch of the new product is not successful.",
    exampleVi:
      "Công ty có một số kế hoạch cho các tình huống bất ngờ nếu việc ra mắt sản phẩm mới không thành công.",
    phrases: [
      {
        en: "contingency plans",
        vi: "những kế hoạch cho những tình huống bất ngờ",
      },
      {
        en: "in the supposed contingency",
        vi: "trong trường hợp được cho là bất ngờ",
      },
    ],
    note: "",
  },
  {
    word: "insufficient",
    phonetic: "/ˌɪnsəˈfɪʃnt/",
    pos: "adj",
    meaning: "không đủ",
    related: ["insufficiency", "insufficiently"],
    example:
      "The number of technicians available to assist customers is now insufficient.",
    exampleVi: "Số kỹ thuật viên có sẵn để hỗ trợ khách hàng hiện không đủ.",
    phrases: [],
    note: 'Đồng nghĩa "inadequate".',
  },
];

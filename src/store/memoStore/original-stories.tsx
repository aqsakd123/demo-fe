import { chapters } from './data-mock'

const originalStories = [
  {
    title: 'Sherpading Humanity',
    arcs: [
      {
        name: 'Arc 1: Khởi Nguyên Sa Bàn',
        summaryDetail:
          "Arc 1: Khởi Nguyên Sa Bàn xoay quanh hành trình của Hứa Chỉ, một người mắc ung thư dạ dày giai đoạn giữa, từ bỏ việc điều trị để trở về quê nhà tại thôn Đồng Thành sau khi hóa trị khiến anh suy kiệt. Tại đây, anh phát hiện một con côn trùng kỳ lạ dẫn anh tiếp quản Trùng Sào – một di sản của Trùng tộc, chủng tộc cổ xưa với khả năng tiến hóa vượt bậc nhờ 'Phân liệt tế bào siêu tốc'. Với khu vườn trái cây hoang phế rộng hơn trăm mét vuông, Hứa Chỉ quyết định xây dựng một sa bàn tiến hóa, nơi anh thả bào tử Trùng tộc để tái hiện quá trình tiến hóa sinh vật. Anh hy vọng tìm ra cách chữa trị ung thư từ thế giới thu nhỏ này. Từ việc tạo địa hình, hồ nước nhân tạo mô phỏng đại dương, đến việc tăng tốc phân liệt tế bào gấp vạn lần, Hứa Chỉ chứng kiến sự xuất hiện của các giống loài đầu tiên như sinh vật phù du, đặt nền móng cho hệ sinh thái trong sa bàn. Arc này thể hiện sự chuyển biến tâm lý của Hứa Chỉ từ tuyệt vọng sang hy vọng, đồng thời giới thiệu khái niệm về sức mạnh của Trùng tộc và tham vọng sáng tạo một thế giới mới. Các sự kiện quan trọng bao gồm việc anh từ chối điều trị, khám phá Trùng Sào, và bắt đầu thí nghiệm tiến hóa, mở ra một hành trình đầy kỳ vọng nhưng cũng tiềm ẩn thách thức.",
        miniArc: [
          {
            name: 'Mini-Arc: Khám Phá Trùng Sào',
            description:
              "Mini-Arc: Khám Phá Trùng Sào tập trung vào giai đoạn đầu tiên khi Hứa Chỉ từ bỏ cuộc sống thành thị để trở về quê nhà sau khi mắc ung thư dạ dày giai đoạn giữa. Trong bối cảnh tài chính cạn kiệt và gia đình suy sụp, anh tình cờ phát hiện một con côn trùng màu đen kỳ lạ trong khu vườn hoang phế. Khi chạm vào, ý thức của anh bị hút vào lịch sử Trùng tộc – một chủng tộc viễn cổ từng phát triển rực rỡ nhưng thất bại khi tấn công Trường Sinh Giới. Anh tiếp quản Trùng Sào và khám phá năng lực 'Phân liệt tế bào siêu tốc', cho phép tăng tốc tiến hóa sinh vật. Với mong muốn tìm cách chữa ung thư và vượt qua nỗi tuyệt vọng, Hứa Chỉ bắt tay vào xây dựng sa bàn trong vườn trái cây, biến nó thành một thế giới thu nhỏ để thí nghiệm. Mini-arc này khắc họa sự thay đổi trong tâm lý của Hứa Chỉ, từ một người chấp nhận cái chết sang một người khao khát sáng tạo và hy vọng. Quá trình anh chuẩn bị sa bàn – từ dọn dẹp cỏ dại, tạo địa hình, đến nung đất – thể hiện sự quyết tâm và tầm nhìn lớn lao, đặt nền móng cho các sự kiện tiếp theo.",
            chapter: {
              chapterIndex: 1,
              summaryDetail:
                "Chương 1: Tư Tưởng Về Sa Bàn kể về Hứa Chỉ, một người mắc ung thư dạ dày giai đoạn giữa, quyết định từ bỏ hóa trị và rời bệnh viện để trở về quê nhà ở thôn Đồng Thành. Sau nhiều năm làm việc ở công ty nước ngoài, anh kiệt sức cả về thể chất lẫn tài chính. Tại khu vườn trái cây hoang phế của gia đình, anh phát hiện một con côn trùng màu đen kỳ lạ, dẫn anh tiếp quản Trùng Sào và khám phá lịch sử Trùng tộc – một chủng tộc cổ xưa với khả năng tiến hóa mạnh mẽ. Nhận ra tiềm năng của 'Phân liệt tế bào siêu tốc', Hứa Chỉ quyết định xây dựng một sa bàn tiến hóa trong vườn, hy vọng tìm cách chữa ung thư. Anh bắt đầu dọn dẹp, mua công cụ và tạo địa hình như núi, hồ để thả bào tử Trùng tộc, khởi động quá trình tiến hóa với tốc độ gấp vạn lần.",
              importantChanges: [
                'Hứa Chỉ: Từ nhân viên công ty nước ngoài -> Người mắc ung thư trở về quê xây dựng sa bàn.',
                'Trùng Sào: Từ di sản không chủ -> Được Hứa Chỉ tiếp quản.',
              ],
            },
          },
          {
            name: 'Mini-Arc: Đại Tuyệt Chủng Đầu Tiên',
            description:
              "Mini-Arc: Đại Tuyệt Chủng Đầu Tiên diễn ra khi Hứa Chỉ bắt đầu thí nghiệm tiến hóa trong sa bàn. Sau khi thả bào tử Trùng tộc vào hồ nước nhân tạo mô phỏng đại dương, anh tăng tốc phân liệt tế bào gấp vạn lần, khiến một ngày tương đương vạn năm. Ban đầu, sinh vật phù du xuất hiện, đánh dấu sự bùng nổ giống kỷ Cambri. Tuy nhiên, khi đêm tối kéo dài (tương đương 5000 năm trong sa bàn), ánh sáng mặt trời biến mất, dẫn đến lần đại tuyệt chủng đầu tiên. Hầu hết thực vật phù du chết khô, chỉ còn Lam Nguyệt Thảo thích nghi với ánh trăng sống sót, phân hóa thành loài ăn thịt và loài quang hợp. Hứa Chỉ ghi chép kỷ nguyên này là 'Kỷ Ám Vũ', thể hiện sự kiên cường của sinh mệnh trước nghịch cảnh. Mini-arc này nhấn mạnh sự khắc nghiệt của tự nhiên trong sa bàn và khả năng thích nghi của bào tử Trùng tộc, đồng thời cho thấy Hứa Chỉ dần say mê quá trình sáng tạo, tìm kiếm ý nghĩa cuộc sống qua thí nghiệm này dù bản thân đang đối mặt với bệnh tật.",
            chapter: {
              chapterIndex: 2,
              summaryDetail:
                "Chương 2: Hai Lần Sinh Vật Đại Tuyệt Chủng mô tả quá trình tiến hóa ban đầu trong sa bàn của Hứa Chỉ. Sau 5 ngày (tương đương 5 vạn năm), sinh vật phù du xuất hiện trong hồ nước. Anh giới hạn kích thước giống loài để phù hợp với sa bàn nhỏ. Đến ngày thứ 6, hệ sinh thái biển phát triển mạnh mẽ, nhưng khi đêm tối kéo dài (5000 năm trong sa bàn), ánh sáng biến mất, gây ra lần đại tuyệt chủng đầu tiên. Hầu hết thực vật chết, chỉ Lam Nguyệt Thảo thích nghi ánh trăng sống sót, phân hóa đa dạng. Ngày thứ 7, mặt trời mọc gây đại tuyệt chủng lần hai, Lam Nguyệt Thảo chết hàng loạt, nhưng một nhánh tiến hóa thành Tử Chiếu Thảo, thích nghi cả ngày và đêm. Hứa Chỉ đặt tên kỷ nguyên thứ hai là 'Kỷ Quang Vũ'.",
              importantChanges: [
                'Hứa Chỉ: Từ người tuyệt vọng -> Nhà sáng tạo say mê tiến hóa.',
                'Sa bàn: Từ trống rỗng -> Hệ sinh thái với Lam Nguyệt Thảo và Tử Chiếu Thảo.',
              ],
            },
          },
        ],
      },
      {
        name: 'Arc 2: Sự Hình Thành Văn Minh',
        summaryDetail:
          'Arc 2: Sự Hình Thành Văn Minh đánh dấu bước ngoặt khi sa bàn của Hứa Chỉ chuyển từ giai đoạn tiến hóa sinh học sang sự xuất hiện của trí tuệ và văn minh. Từ hệ sinh thái sơ khai với Tử Chiếu Thảo và động vật hải dương, các giống loài tiến hóa thành động vật lưỡng cư, lên lục địa, và cuối cùng xuất hiện trùng vượn – loài có tiềm năng trí tuệ sau khi Hứa Chỉ đưa gen tinh tinh vào. Anh chọn một giống loài giáp xác trùng, đặt nền móng cho trùng vượn, dù thất bại trong việc kết hợp gen con mối. Với tốc độ phân liệt giảm xuống 100 lần, trùng vượn phát triển tư duy và hành động nhanh chóng, dẫn đến sự ra đời của Gilgamesh – nhân vật anh hùng đầu tiên. Hứa Chỉ trao cho Gilgamesh ba bảo vật văn minh (kiếm Damocles, bó đuốc, máu sức mạnh), mở ra thời kỳ phát triển bộ lạc và sau đó là Vương triều Sumer. Arc này khám phá sự tương tác giữa Hứa Chỉ với sa bàn, từ vai trò người quan sát đến tạo vật chủ, đồng thời phản ánh khát vọng sống và sáng tạo của anh qua cuộc đời Gilgamesh – người lãnh đạo trùng vượn từ hoang dã đến văn minh, dù phải đối mặt với đại tuyệt chủng và nội chiến.',
        miniArc: [
          {
            name: 'Mini-Arc: Sự Ra Đời Trùng Vượn',
            description:
              "Mini-Arc: Sự Ra Đời Trùng Vượn tập trung vào giai đoạn Hứa Chỉ chuyển từ quan sát tiến hóa tự nhiên sang can thiệp trực tiếp vào sa bàn. Sau khi động vật lưỡng cư xuất hiện trên lục địa, anh lấy máu tinh tinh từ vườn bách thú để đưa gen trí tuệ vào một giống loài giáp xác trùng, tạo ra trùng vượn – loài có tiềm năng phát triển văn minh. Thí nghiệm ban đầu thất bại với gen con mối, nhưng trùng vượn vẫn sinh sôi mạnh mẽ. Hứa Chỉ giảm tốc độ phân liệt từ vạn lần xuống 100 lần, cho phép trùng vượn có tư duy và hành động nhanh hơn, mở ra khả năng phát triển trí tuệ. Tuy nhiên, chúng liên tục trêu chọc anh là 'Hói', khiến anh tức giận nhưng vẫn tiếp tục thí nghiệm. Mini-arc này thể hiện sự tò mò và sáng tạo của Hứa Chỉ, đồng thời giới thiệu xung đột giữa anh và tạo vật của mình. Cuộc sống cá nhân của anh cũng được điểm xuyết qua sự xuất hiện của Trần Hi – người bạn thời thơ ấu mang thức ăn và đồng cảm với bệnh tật của anh, làm nổi bật sự tương phản giữa cuộc sống thực và thế giới sa bàn.",
            chapter: [
              {
                chapterIndex: 3,
                summaryDetail:
                  'Chương 3: Sự Bùng Nổ Sinh Vật kể về giai đoạn sa bàn phát triển vượt bậc. Tử Chiếu Thảo tạo điều kiện oxy cho động vật hải dương như giáp xác trùng xuất hiện. Đến ngày thứ 8, động vật lưỡng cư lên lục địa, hình thành hệ sinh thái đa dạng. Hứa Chỉ lấy máu tinh tinh từ vườn bách thú, định đưa gen trí tuệ vào sa bàn, nhưng chưa thực hiện. Anh vui vẻ với sự tiến hóa nhanh chóng, dù lo lắng về thời gian phát triển trí tuệ tự nhiên quá lâu.',
                importantChanges: [
                  'Sa bàn: Từ hệ sinh thái biển -> Có động vật lưỡng cư trên lục địa.',
                ],
              },
              {
                chapterIndex: 4,
                summaryDetail:
                  "Chương 4: Xây Dựng Một Bộ Tộc Có Trí Tuệ mô tả Hứa Chỉ chọn giáp xác trùng để đưa gen tinh tinh, tạo ra trùng vượn. Sau nhiều thí nghiệm, ống nghiệm 2041 thành công với loài trùng vượn lông rậm, nhưng chúng trêu anh là 'Hói', khiến anh tức giận. Anh giảm tốc độ phân liệt xuống 100 lần, giúp trùng vượn tư duy nhanh hơn, mở ra tiềm năng văn minh. Thử nghiệm gen con mối thất bại, anh để trùng vượn sinh sôi tự nhiên.",
                importantChanges: [
                  'Hứa Chỉ: Từ quan sát viên -> Người can thiệp trực tiếp vào sa bàn.',
                  'Trùng Vượn: Từ không tồn tại -> Loài có tiềm năng trí tuệ.',
                ],
              },
            ],
          },
          {
            name: 'Mini-Arc: Thời Đại Gilgamesh',
            description:
              'Mini-Arc: Thời Đại Gilgamesh kể về sự ra đời và phát triển của Gilgamesh – anh hùng đầu tiên trong sa bàn. Khi trùng vượn đối mặt với đại tuyệt chủng do cự thú, Hứa Chỉ chọn một con trùng vượn dũng cảm tên Gilgamesh, trao ba bảo vật văn minh: kiếm Damocles, bó đuốc, và máu sức mạnh (gen con mối). Gilgamesh vượt qua thử thách trèo thần thụ, dẫn dắt trùng vượn từ bộ lạc nguyên thủy sang thời kỳ đồ đá, lập Vương triều Sumer và thành Uruk sau khi đánh bại cự thú Finba. Anh hùng này sống hai đời nhờ máu sức mạnh, nhưng dần trở nên bạo ngược, giết con trai Kish để giữ quyền lực. Mini-arc này thể hiện sự tương tác giữa Hứa Chỉ và Gilgamesh, từ vai trò thần linh ban phước đến người quan sát xa cách, đồng thời phản ánh khát vọng quyền lực và bất tử của Gilgamesh – song song với hy vọng sống sót của Hứa Chỉ qua sa bàn.',
            chapter: [
              {
                chapterIndex: 5,
                summaryDetail:
                  'Chương 5: Đại Mimeir Thôn Phệ Sinh Vật mô tả sa bàn tiến vào thời đại cự thú giống kỷ Jura. Trùng vượn bị cự thú như Allah đe dọa, phải chạy trốn. Hứa Chỉ vô tình giẫm chết nhiều giống loài, xem đó là chọn lọc tự nhiên.',
                importantChanges: ['Sa bàn: Từ kỷ Tân Sinh -> Thời đại cự thú.'],
              },
              {
                chapterIndex: 6,
                summaryDetail:
                  'Chương 6: Trùng Vượn Lên Ngôi kể về trùng vượn đối mặt với cự thú Finba. Hứa Chỉ xuất hiện như thần linh, cứu một trùng vượn dũng cảm, đặt tên Gilgamesh, và trao ba bảo vật văn minh.',
                importantChanges: ['Gilgamesh: Từ trùng vượn vô danh -> Anh hùng được chọn.'],
              },
              {
                chapterIndex: 7,
                summaryDetail:
                  'Chương 7: Thí Luyện Trí Tuệ, Ba Loại Bảo Vật Văn Minh mô tả Gilgamesh vượt qua thử thách trèo thần thụ, lấy ba bảo vật. Anh dẫn dắt trùng vượn phát triển, mơ ước đạt sức mạnh như Hứa Chỉ.',
                importantChanges: [
                  'Gilgamesh: Từ trùng vượn bình thường -> Lãnh đạo có bảo vật văn minh.',
                ],
              },
              {
                chapterIndex: 8,
                summaryDetail:
                  'Chương 8: Anh Hùng Tuổi Xế Chiều kể về Gilgamesh dẫn trùng vượn vào thời kỳ đồ đá, lập bộ lạc, dùng máu sức mạnh để trẻ lại, giết con trai Kish để giữ quyền lực. Hứa Chỉ hài lòng với tiến trình văn minh.',
                importantChanges: [
                  'Gilgamesh: Từ anh hùng trẻ -> Thủ lĩnh bạo ngược sống đời thứ hai.',
                  'Kish: Từ người thừa kế -> Bị cha giết chết.',
                ],
              },
              {
                chapterIndex: 9,
                summaryDetail:
                  'Chương 9: Thanh Kiếm Treo Lơ Lửng Trên Đỉnh Đầu mô tả Gilgamesh đánh bại Finba, lập Vương triều Sumer và thành Uruk. Anh phát triển văn minh, nhưng bạo ngược, tìm kiếm tận cùng thế giới, nhận ra giới hạn của sa bàn.',
                importantChanges: [
                  'Gilgamesh: Từ thủ lĩnh bộ lạc -> Quốc vương Sumer.',
                  'Vương triều Sumer: Từ không tồn tại -> Thành bang hùng mạnh.',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Arc 3: Thời Đại Thành Bang Sumer',
        summaryDetail:
          'Arc 3: Thời Đại Thành Bang Sumer tập trung vào sự phát triển đỉnh cao và suy tàn của Vương triều Sumer dưới sự lãnh đạo của Gilgamesh. Sau hơn một thế kỷ, Gilgamesh biến Sumer thành một đế chế hùng mạnh với ba thành bang Uruk, Enkidu, và Ishtar, do chính anh và hai vương kế vị quản lý. Anh phát động chiến dịch tìm kiếm cự thú trí tuệ (Hứa Chỉ), sử dụng hắc vu thuật và dược tề để kéo dài tuổi thọ, nhưng cuối cùng vẫn phải đối mặt với cái chết. Trước khi qua đời, Gilgamesh xây thần miếu thờ Hứa Chỉ, khẩn cầu gặp lại thần linh đã ban văn minh. Trong khi đó, Hứa Chỉ sống cuộc đời điền viên bên ngoài sa bàn, thờ ơ với lời cầu khẩn của Gilgamesh, tập trung vào việc cải thiện cuộc sống cá nhân với sự hỗ trợ của Trần Hi. Arc này làm nổi bật sự tương phản giữa tham vọng bất tử của Gilgamesh và sự chấp nhận số phận của Hứa Chỉ, đồng thời cho thấy giới hạn của sa bàn – một thế giới không có kim loại hay tài nguyên để tiến xa hơn thời kỳ đồ đá.',
        miniArc: [
          {
            name: 'Mini-Arc: Sự Suy Tàn Của Gilgamesh',
            description:
              'Mini-Arc: Sự Suy Tàn Của Gilgamesh khắc họa giai đoạn cuối đời của vị anh hùng vương vĩ đại. Sau khi lập Vương triều Sumer và chinh phục cự thú Finba, Gilgamesh sống qua hơn 140 năm, trải qua ba đời nhờ máu sức mạnh và dược tề vu thuật. Tuy nhiên, khi tuổi thọ cạn kiệt, anh trở nên ám ảnh với việc tìm kiếm cự thú trí tuệ (Hứa Chỉ) để sống thêm lần nữa. Anh ra lệnh tàn sát cự thú, phát triển hắc ma pháp, nhưng mọi nỗ lực đều vô ích. Cuối cùng, Gilgamesh chọn hai vương kế vị – Enkidu và Ishtar – chia sẻ quyền lực, xây dựng ba thành bang. Trước khi chết, anh dựng thần miếu cầu khẩn Hứa Chỉ, nhưng không được đáp lại. Trong khi đó, Hứa Chỉ sống bình dị bên ngoài, hài lòng với cuộc đời Gilgamesh nhưng không can thiệp. Mini-arc này thể hiện sự đối lập giữa khát vọng bất tử của Gilgamesh và sự buông bỏ của Hứa Chỉ, đồng thời đánh dấu sự chuyển giao văn minh Sumer sang thế hệ mới.',
            chapter: [
              {
                chapterIndex: 10,
                summaryDetail:
                  'Chương 10: Thời Đại Tìm Kiếm Cự Thú kể về Gilgamesh, giờ đã 175 tuổi, ám ảnh với việc kéo dài tuổi thọ. Anh ra lệnh tìm cự thú trí tuệ, dùng hắc vu thuật, nhưng thất bại. Gilgamesh chọn Enkidu và Ishtar làm vương kế vị, xây ba thành bang. Trước khi chết, anh dựng thần miếu cầu khẩn Hứa Chỉ, trong khi Hứa Chỉ sống điền viên, không quan tâm đến lời cầu xin.',
                importantChanges: [
                  'Gilgamesh: Từ quốc vương bất tử -> Lão nhân chấp nhận cái chết.',
                  'Vương triều Sumer: Từ một thành Uruk -> Ba thành bang hùng mạnh.',
                  'Enkidu & Ishtar: Từ dân thường -> Vương kế vị Sumer.',
                ],
              },
            ],
          },
        ],
      },
    ]
      .concat([
        {
          name: 'Arc 3: Sự Sụp Đổ và Tái Sinh của Văn Minh',
          summaryDetail:
            "Arc 3 khám phá đỉnh cao kịch tính và hậu quả của nền văn minh Sumer trong sa bàn của Hứa Chỉ, cũng như sự tiến hóa cá nhân của anh giữa lằn ranh cái chết cận kề. Câu chuyện bắt đầu với Hứa Chỉ, vẫn đang chiến đấu với ung thư dạ dày giai đoạn giữa, đến thăm Gilgamesh, vị vua Sumer già nua đã từng thách thức tử thần bằng cách sử dụng gen con mối. Đối mặt với cái chết lần nữa, Gilgamesh nổi loạn chống lại Hứa Chỉ – 'Cự Thú Trí Tuệ' – tìm kiếm sự sống vĩnh cửu thông qua chinh phục, khơi mào một cuộc chiến kết thúc bằng thất bại của anh ta và sự sụp đổ của nền văn minh dưới trận đại hồng thủy do Hứa Chỉ gây ra bằng súng phun nước áp lực cao. Sự tuyệt chủng hàng loạt lần thứ ba này xóa sổ 99% sự sống, để lại những người sống sót do Utanapizm dẫn dắt, tái xây dựng trên Noah’s Ark với một triết lý cân bằng hơn. Đồng thời, sức khỏe của Hứa Chỉ bất ngờ cải thiện nhờ phản hồi tiến hóa, nhưng rồi nhanh chóng xấu đi thành ung thư giai đoạn cuối khi cơ thể được cường hóa của anh đẩy nhanh bệnh tật. Tuyệt vọng, anh tích hợp tế bào Trùng Tộc, giành quyền kiểm soát gen, nhưng không thể chữa ung thư. Để tìm giải pháp nhanh chóng, anh tạo ra sa bàn thứ hai, 'Nơi Khởi Nguyên Sinh Mệnh Vạn Giới,' dưới dạng trò chơi VR, mời người chơi tiến hóa các loài, nhằm nhập khẩu những loài tiềm năng vào sa bàn chính. Arc này đan xen vai trò tạo vật chủ giống thần của Hứa Chỉ với sự mong manh con người của anh, đối lập giữa sự sụp đổ do kiêu ngạo của Sumer với chiến lược tái sinh sáng tạo của anh, tất cả trong cuộc chạy đua với cái chết.",
          miniArc: [
            {
              name: 'Mini-Arc 5: Cuộc Nổi Loạn và Sự Sụp Đổ của Sumer',
              description:
                'Mini-Arc 5 đi sâu vào sự sụp đổ kịch tính của nền văn minh Sumer khi Gilgamesh, bị thúc đẩy bởi khát vọng bất tử mãnh liệt, thách thức Hứa Chỉ, người tạo ra anh ta. Câu chuyện bắt đầu với Hứa Chỉ, được thúc đẩy bởi cái chết sắp đến của Gilgamesh, bước vào sa bàn để từ biệt và kiềm chế sự tàn phá môi trường của người Sumer. Gilgamesh, 175 tuổi và cai trị hơn một thế kỷ, từ chối lời kêu gọi kiềm chế của Hứa Chỉ, thay vào đó tập hợp quốc gia để giết anh ta nhằm giành sự sống vĩnh cửu. Sự táo bạo của anh ta đoàn kết hai trong ba vị vua của Sumer – chính anh ta và Ishtar – trong khi Enkidu phản kháng, hy sinh bản thân để chứng minh giá trị đạo đức của Sumer. Trận chiến sau đó chứng kiến Gilgamesh và Ishtar, được cường hóa bởi gen con mối, gây thương tích nhẹ cho Hứa Chỉ, nhưng hình thể nhỏ như kiến của họ không thể sánh với quy mô con người của anh, dẫn đến thất bại thảm hại. Đối mặt với sự hủy diệt, những câu hỏi cuối cùng của Gilgamesh tiết lộ Hứa Chỉ là người tạo ra thế giới, làm tan vỡ niềm kiêu hãnh của anh ta. Hứa Chỉ tung ra một trận hồng thủy để tái lập sa bàn, chỉ tha cho tàn dư đức hạnh của Utanapizm. Mini-arc này thể hiện sự bất khuất bi thảm của Gilgamesh, cái giá của tham vọng không kiểm soát, và sự phán xét miễn cưỡng của Hứa Chỉ, làm nổi bật căng thẳng giữa sáng tạo và hủy diệt khi anh vật lộn với vai trò kép vừa là thần vừa là người sắp chết.',
              chapter: [
                {
                  chapterIndex: 11,
                  summaryDetail:
                    "Chương 11 cho thấy Hứa Chỉ đi mua sắm với Trần Hi để mua các thiết bị hiện đại và dụng cụ làm nông, hiện đại hóa cuộc sống nông thôn của anh trong khi suy ngẫm về sự chênh lệch thời gian của sa bàn – hai ngày với anh tương đương 200 năm ở đó. Biết được cái chết sắp đến của Gilgamesh, anh bước vào sa bàn để từ biệt và kiềm chế sự tàn phá môi trường của Sumer. Sự xuất hiện của anh làm rung chuyển Uruk, nơi Gilgamesh, giờ đã già nua, nghẹn ngào chào đón 'Cự Thú Trí Tuệ' mà anh từng gặp khi còn trẻ, kinh ngạc trước sự tráng lệ nhỏ bé như kiến của thành phố dù nó mong manh do xây dựng bằng đá thô sơ.",
                  importantChanges: [
                    'Hứa Chỉ: Từ người ẩn cư nông thôn -> Người can thiệp tích cực vào sa bàn.',
                    'Gilgamesh: Từ vị vua xa xôi -> Vua già đối mặt Hứa Chỉ sau 200 năm.',
                  ],
                },
                {
                  chapterIndex: 12,
                  summaryDetail:
                    "Chương 12 ghi lại cuộc đối thoại giữa Hứa Chỉ và Gilgamesh, người đòi hỏi sự sống vĩnh cửu, từ chối định mệnh hữu hạn của mình dù đã có một triều đại huy hoàng. Hứa Chỉ, đồng cảm với tư cách một bệnh nhân ung thư, từ chối, kêu gọi Sumer ngừng tàn bạo. Giận dữ, Gilgamesh tuyên chiến, thề giết Hứa Chỉ bằng kiếm Damocles để chiếm lấy sự bất tử, ra lệnh cho sử gia Akkad ghi lại sự bất khuất này trong 'Kỷ Sáng Thế.' Chương này nhấn mạnh nỗi sợ hãi chung về cái chết của họ và sự chuyển biến của Gilgamesh từ tôn kính sang nổi loạn.",
                  importantChanges: [
                    'Gilgamesh: Từ người cầu xin -> Kẻ nổi loạn bất khuất chống Hứa Chỉ.',
                    'Sumer: Từ kẻ tàn phá môi trường -> Quốc gia chuẩn bị chiến tranh.',
                  ],
                },
                {
                  chapterIndex: 13,
                  summaryDetail:
                    'Chương 13 mô tả việc Gilgamesh chuẩn bị chiến tranh, tiết lộ kế hoạch kéo dài một thập kỷ để dụ và giết Hứa Chỉ. Dẫn đầu quân đội Uruk, anh ta tấn công với sự hỗ trợ của Ishtar, trong khi Enkidu phản kháng, tự chặt đầu mình để cầu xin khoan dung. Sự hung dữ của Gilgamesh được thể hiện khi anh ta leo lên chân Hứa Chỉ, nhưng cuộc tấn công của họ thất bại trước quy mô của anh. Chương này làm nổi bật sự táo bạo chiến lược của Gilgamesh, tham vọng của Ishtar cho sự sống còn của dòng tộc, và sự hy sinh đạo đức của Enkidu giữa sự rạn nứt lãnh đạo của Sumer.',
                  importantChanges: [
                    'Gilgamesh: Từ người lập kế hoạch -> Chiến binh trực tiếp chống Hứa Chỉ.',
                    'Enkidu: Từ vua -> Người tử đạo tự hy sinh.',
                    'Ishtar: Từ người đứng ngoài -> Đồng chiến binh với Gilgamesh.',
                  ],
                },
                {
                  chapterIndex: 14,
                  summaryDetail:
                    'Chương 14 cho thấy đỉnh điểm của trận chiến, với Gilgamesh và Ishtar leo lên người Hứa Chỉ, gây thương tích nhẹ trước khi bị đánh rơi, sống sót nhờ khả năng phục hồi tăng cường. Hứa Chỉ, từ chối tiêu diệt hàng loạt, đánh giá tiềm năng siêu phàm của họ – giống như các anh hùng Marvel thu nhỏ – bắt nguồn từ gen con mối, dù không đủ chống lại anh. Sự bất khuất của Gilgamesh vẫn tiếp diễn dù thất bại, phản ánh tinh thần không khuất phục của anh khi Sumer tan rã.',
                  importantChanges: [
                    'Gilgamesh: Từ chiến binh -> Bị thương nặng nhưng vẫn bất khuất.',
                    'Ishtar: Từ chiến binh -> Người sống sót bị thương nặng.',
                    'Quân đội Sumer: Từ lực lượng có tổ chức -> Lui binh hỗn loạn.',
                  ],
                },
                {
                  chapterIndex: 15,
                  summaryDetail:
                    'Chương 15 kết thúc cuộc chiến với Gilgamesh, bị thương nhưng không sợ hãi, đặt ra ba câu hỏi cuối cùng. Hứa Chỉ tiết lộ sẽ dùng hồng thủy để rửa sạch tội lỗi của Sumer, thừa nhận mình tạo ra thế giới của họ, và xác nhận sự sáng tạo trong bảy ngày. Gilgamesh cười điên cuồng, niềm kiêu hãnh tan vỡ, chết đi khi Sumer than khóc. Utanapizm dâng đầu của Enkidu, giành được sự khoan dung, và Hứa Chỉ tha cho những người sống sót trên Noah’s Ark, khởi động hồng thủy để tái lập sa bàn.',
                  importantChanges: [
                    'Gilgamesh: Từ vua sống -> Huyền thoại chết, niềm kiêu hãnh tan vỡ.',
                    'Sumer: Từ nền văn minh thống trị -> Tàn dư bị hồng thủy tàn phá.',
                    'Utanapizm: Từ đệ tử -> Lãnh đạo của những người sống sót Sumer.',
                  ],
                },
                {
                  chapterIndex: 16,
                  summaryDetail:
                    "Chương 16 miêu tả việc thực thi hồng thủy, Hứa Chỉ dùng súng phun nước để xóa sổ Sumer, chỉ để lại con tàu của Utanapizm nổi trên mặt nước. Cái chết của Gilgamesh vang vọng khi người Sumer than khóc, trong khi Akkad ghi lại điều này như cơn thịnh nộ thần thánh trong 'Kỷ Sáng Thế,' thần thoại hóa việc sáng tạo bảy ngày của Hứa Chỉ. Hồng thủy tái lập sa bàn, kiểm soát tình trạng quá tải dân số, với những người sống sót áp dụng một triết lý kiềm chế, đánh dấu một sự tái sinh u buồn nhưng đầy hy vọng.",
                  importantChanges: [
                    'Nền văn minh Sumer: Từ thịnh vượng -> Gần tuyệt chủng, được cứu bởi tàu.',
                    'Hứa Chỉ: Từ kẻ hủy diệt miễn cưỡng -> Kiến trúc sư của sự tái sinh.',
                    'Akkad: Từ sử gia -> Người tạo thần thoại về sự kết thúc của Sumer.',
                  ],
                },
              ],
            },
            {
              name: 'Mini-Arc 6: Sự Tiến Hóa Cá Nhân và Những Khởi Đầu Mới',
              description:
                "Mini-Arc 6 chuyển trọng tâm sang sự biến đổi của Hứa Chỉ và phản ứng sáng tạo của anh trước căn bệnh ung thư giai đoạn cuối, song song với sự phục hồi chậm rãi của sa bàn. Sau hồng thủy, hệ sinh thái sa bàn ổn định dưới sự dẫn dắt của hậu duệ Utanapizm, tiến hóa thành bộ lạc Babylon qua nhiều thế kỷ. Hứa Chỉ, được tăng cường bởi phản hồi tuyệt chủng, đạt được thể chất siêu phàm, nhưng việc tích hợp tế bào Trùng Tộc tiết lộ ung thư của anh đã tiến triển đến giai đoạn cuối, bị cơ thể tăng cường đẩy nhanh. Không thể loại bỏ gen ung thư, anh chuyển hướng để thúc đẩy tiến hóa loài nhằm tìm cách chữa trị, tạo ra sa bàn thứ hai – 'Nơi Khởi Nguyên Sinh Mệnh Vạn Giới' – dưới dạng trò chơi VR. Người chơi tiến hóa bào tử với tốc độ gấp 10.000 lần, các sáng tạo của họ có thể làm phong phú thêm sa bàn chính. Người chơi đầu tiên Trần Văn Sơn gặp khó khăn nhưng tạo ra một sinh vật kỳ lạ 'Evil Eye,' khiến Hứa Chỉ thích thú, người tiếp tục cuộc sống nông thôn với sự hỗ trợ của Trần Hi. Mini-arc này kết hợp khủng hoảng thể chất và hiện sinh của Hứa Chỉ với tham vọng tìm kiếm giải pháp tiến hóa từ đám đông, đối lập giữa sự tái sinh dần dần của sa bàn với cuộc chiến khẩn cấp của anh để sống sót, và giới thiệu một tầng meta của sự sáng tạo do người chơi dẫn dắt.",
              chapter: [
                {
                  chapterIndex: 17,
                  summaryDetail:
                    "Chương 17 chi tiết hậu quả của hồng thủy, với con tàu của Utanapizm bảo vệ sự sống khi tàn tích Sumer tan biến. 'Kỷ Sáng Thế' của Akkad lãng mạn hóa việc sáng tạo bảy ngày của Hứa Chỉ, sinh ra truyền thống 'ngày thánh.' Hứa Chỉ, suy ngẫm về sự thái quá của Sumer, coi việc tái lập là cần thiết, nhận thấy sự tái định cư thận trọng của những người sống sót. Cơ thể anh tràn đầy sức mạnh từ phản hồi tuyệt chủng, gần đạt đỉnh thể thao, gợi ý về tác động của phản hồi tiến hóa.",
                  importantChanges: [
                    'Tàn dư Sumer: Từ những người sống sót sau hồng thủy -> Những người tái xây dựng thận trọng.',
                    'Hứa Chỉ: Từ con người bình thường -> Được tăng cường thể chất bởi phản hồi tuyệt chủng.',
                  ],
                },
                {
                  chapterIndex: 18,
                  summaryDetail:
                    'Chương 18 tiết lộ sự biến đổi của Hứa Chỉ thành một hình dáng tượng tạc, nhưng việc tích hợp tế bào Trùng Tộc – mang lại quyền kiểm soát gen – cho thấy ung thư của anh đã leo thang đến giai đoạn cuối, tệ hơn bởi sức mạnh của anh. Không thể cắt bỏ gen ung thư, anh chọn không tăng cường thêm, sợ chết, và lập kế hoạch cho sa bàn thứ hai để tiến hóa nhanh các loài mang khả năng chữa trị, cân bằng giữa cái chết của mình và tham vọng sáng tạo.',
                  importantChanges: [
                    'Hứa Chỉ: Từ con người tăng cường -> Lai Trùng Tộc với ung thư giai đoạn cuối.',
                    'Tình trạng sức khỏe: Từ giai đoạn giữa -> Ung thư giai đoạn cuối do tăng cường tế bào.',
                  ],
                },
                {
                  chapterIndex: 19,
                  summaryDetail:
                    "Chương 19 giới thiệu sa bàn trò chơi VR của Hứa Chỉ, 'Nơi Khởi Nguyên Sinh Mệnh Vạn Giới,' được xây dựng trong ba ngày bằng công nghệ Trùng Tộc. Người chơi tiến hóa bào tử với tốc độ gấp 10.000 lần, các loài nổi bật sẽ gia nhập sa bàn chính. Người chơi Trần Văn Sơn tham gia, kinh ngạc trước sự chân thực, vật lộn để tiến hóa mắt. Hứa Chỉ chuẩn bị một mảnh đất 30 mét vuông, tinh chỉnh chiến lược hai sa bàn giữa các công việc nông thôn.",
                  importantChanges: [
                    'Hứa Chỉ: Từ người sáng tạo đơn độc -> Tìm kiếm sự tiến hóa từ đám đông qua trò chơi VR.',
                    'Hệ sinh thái sa bàn: Từ đơn lẻ -> Khung hai sa bàn.',
                  ],
                },
                {
                  chapterIndex: 20,
                  summaryDetail:
                    "Chương 20 đối lập cuộc sống nông thôn yên bình của Hứa Chỉ – được hiện đại hóa với thiết bị và bữa ăn của Trần Hi – với các phát triển trong sa bàn. Sa bàn chính chứng kiến Babylon trỗi dậy dưới sự lãnh đạo của Ishbiela, trong khi Trần Văn Sơn tiến hóa một 'Evil Eye' trong sa bàn VR, chỉ để Hứa Chỉ vô tình nghiền nát nó. Chương này kết hợp sự giám sát thoải mái của Hứa Chỉ với sự sáng tạo hỗn loạn của người chơi và lời hứa non trẻ của Babylon.",
                  importantChanges: [
                    'Tàn dư Sumer: Từ người sống sót -> Bộ lạc Babylon dưới Ishbiela.',
                    "Trần Văn Sơn: Từ người chơi mới -> Người tạo ra 'Evil Eye' ngắn ngủi.",
                  ],
                },
              ],
            },
          ],
        },
      ])
      .concat(
        [
          {
            name: 'Arc 4: Bình Minh của Văn Minh Siêu Nhiên',
            summaryDetail:
              "Arc 4 đánh dấu một giai đoạn chuyển đổi trong thí nghiệm sa bàn của Hứa Chỉ, kết hợp những cuộc đấu tranh cá nhân của anh với sự trỗi dậy của một nền văn minh siêu nhiên trong bộ tộc Babylon. Đối mặt với ung thư dạ dày giai đoạn cuối, Hứa Chỉ có được một người bạn gái danh nghĩa, Trần Hi, người mang đến sự đồng hành trong khi anh theo đuổi cách chữa trị thông qua những đột phá tiến hóa. Sa bàn phụ của anh, 'Nơi Khởi Nguyên Sinh Mệnh Vạn Giới,' bùng nổ về độ phổ biến như một trò chơi VR, tạo ra loài 'Evil Eye', mà anh cấy vào một đầm lầy trong sa bàn chính. Điều này kích hoạt sự suy tàn và tái sinh của người Babylon: sau khi mất đi vinh quang Sumer, họ đối mặt với sức mạnh thôi miên của Evil Eye, dẫn đến việc Medea hy sinh đàn ông của bộ tộc để khai thác máu của nó, sinh ra ba nữ vu—Medea, Circe và Cassandra. Những vu này sở hữu khả năng tinh thần, chuyển giao quyền lực cho phụ nữ và khơi mào một kỷ nguyên mẫu hệ, mặc dù sự đồi trụy của Circe gieo rắc bất hòa. Trong khi đó, những người chơi trong trò chơi, bị ám ảnh với việc tiến hóa các loài để thách thức Hứa Chỉ, truyền cảm hứng cho anh bước vào sa bàn dưới hình dạng một con quạ ba mắt, Hermes, truyền đạt kiến thức về thiền định, luyện kim và nghệ thuật vu cho các vu. Arc này đan xen sự đổi mới tuyệt vọng của Hứa Chỉ—sử dụng người chơi và tiến hóa siêu nhiên—với sự chuyển đổi của Babylon từ sinh tồn nguyên thủy sang một nền văn minh huyền bí non trẻ, tất cả dưới cái bóng của cái chết cận kề của anh.",
            miniArc: [
              {
                name: 'Mini-Arc 7: Hạt Giống của Quyền Năng Siêu Nhiên',
                description:
                  'Mini-Arc 7 khám phá sự tích hợp ban đầu của các yếu tố siêu nhiên vào sa bàn và xã hội đang lung lay của Babylon, được xúc tác bởi các thí nghiệm và cuộc sống cá nhân của Hứa Chỉ. Nó bắt đầu với việc Trần Hi trở thành bạn gái danh nghĩa của anh, làm dịu sự cô lập nông thôn của anh khi anh chiến đấu với ung thư, trong khi trò chơi sa bàn VR thu hút sự chú ý, tạo ra loài Evil Eye kỳ quặc. Hứa Chỉ đưa loài này vào một đầm lầy mà anh tạo ra bằng phân bón, thúc đẩy sự phát triển của nó giữa những cuộc đấu tranh sau hồng thủy của Babylon. Trong hơn 200 năm, bộ tộc, do Medea dẫn dắt, đã thoái hóa từ đỉnh cao của Sumer, thiếu công cụ để khôi phục vinh quang quá khứ. Đối mặt với sức hấp dẫn chết người của Evil Eye, Medea hy sinh đội săn của mình để bảo vệ xác của nó, nhằm hồi sinh bộ tộc. Mưu đồ của cô thành công khi cô, Circe và Cassandra hợp nhất với máu của nó, trở thành vu với sức mạnh tinh thần—khả năng chiến đấu, nguyền rủa và chữa lành—mở ra một kỷ nguyên do phụ nữ thống trị. Sự đồi trụy không kiểm soát của Circe tương phản với sự kiềm chế của Medea và Cassandra, làm rạn nứt sự đoàn kết của họ. Đồng thời, sự lan truyền của trò chơi giữa những người chơi như Tốc Độ Xe Akina, những người mơ ước lật đổ Hứa Chỉ, nhấn mạnh sự phụ thuộc của anh vào tiến hóa từ đám đông. Mini-arc này đặt nền móng cho một nền văn minh siêu nhiên, đan xen sự tuyệt vọng sáng tạo của Hứa Chỉ với sự thích nghi triệt để của Babylon.',
                chapter: [
                  {
                    chapterIndex: 21,
                    summaryDetail:
                      'Chương 21 giới thiệu Trần Hi là bạn gái danh nghĩa của Hứa Chỉ, mang đến sự đồng hành giữa cuộc chiến ung thư của anh. Cô trêu chọc sự nhiệt tình làm nông của anh, nhận thấy một hào quang siêu phàm từ những trải nghiệm tuyệt chủng của anh, mặc dù anh che giấu nó. Đề xuất một mối tình giả để thực hiện sự ngưỡng mộ thời thơ ấu của mình, cô dự định làm sáng sủa những ngày cuối cùng của anh, kéo anh đi mua sắm cho buổi họp mặt trung học. Trong khi đó, anh đánh giá tiềm năng của Evil Eye trong sa bàn VR, suy ngẫm về việc cấy nó vào đầm lầy mới của sa bàn chính, cân bằng những thay đổi cá nhân với tham vọng tiến hóa.',
                    importantChanges: [
                      'Hứa Chỉ: Từ bệnh nhân ung thư đơn độc -> Có bạn gái danh nghĩa, Trần Hi.',
                      'Trần Hi: Từ hàng xóm -> Đối tác hỗ trợ của Hứa Chỉ trên bề mặt.',
                    ],
                  },
                  {
                    chapterIndex: 22,
                    summaryDetail:
                      'Chương 22 chứng kiến Hứa Chỉ tạo ra một đầm lầy trong sa bàn chính bằng phân bón, cấy Evil Eye, loài này phát triển mạnh mà không có cạnh tranh. Babylon, suy giảm sau hồng thủy, hưởng lợi từ sự điều chỉnh sinh thái này. Trong khi đó, sa bàn VR đạt 100 người chơi, sự chân thực của nó khơi mào một cơn sốt lan truyền trên mạng, dẫn đầu bởi bài đánh giá của Tốc Độ Xe Akina ca ngợi thử thách nhập vai của nó. Hứa Chỉ, thích thú nhưng tập trung, nhắm đến một nền văn minh vu trong sa bàn chính, hình dung sức mạnh siêu nhiên lấy cảm hứng từ Evil Eye như một cách chữa ung thư.',
                    importantChanges: [
                      'Hệ sinh thái sa bàn: Từ địa hình đồng nhất -> Bao gồm đầm lầy với Evil Eye.',
                      'Sa bàn VR: Từ ít người biết -> Lan truyền, giới hạn ở 100 người chơi.',
                    ],
                  },
                  {
                    chapterIndex: 23,
                    summaryDetail:
                      'Chương 23 làm nổi bật cộng đồng người hâm mộ của trò chơi VR, với những người chơi như Tốc Độ Xe Akina nghiên cứu tiến hóa để đánh bại Hứa Chỉ, người không quan tâm đến trò hề của họ. Trong sa bàn chính, Evil Eye tiến hóa một biến thể thôi miên, thống trị đồng loại trong đầm lầy. Hứa Chỉ nhắm đến một hệ thống vu lấy cảm hứng từ các nghi lễ đen tối của Gilgamesh, tìm kiếm cách chữa trị. Sự suy tàn của Babylon khiến anh thờ ơ với lời cầu xin của người chơi về nhiều slot hơn, thay vào đó tập trung vào việc thúc đẩy một nền văn minh huyền bí.',
                    importantChanges: [
                      'Evil Eye: Từ loài cơ bản -> Siêu kẻ săn mồi thôi miên trong đầm lầy.',
                      'Cộng đồng người chơi: Từ người chơi casual -> Người đam mê tiến hóa ám ảnh.',
                    ],
                  },
                  {
                    chapterIndex: 24,
                    summaryDetail:
                      'Chương 24 miêu tả sự suy tàn của Babylon sau hồng thủy trong 200 năm, di sản Sumer phai nhạt mà không có sức mạnh của Gilgamesh. Medea, con gái của thủ lĩnh, than thở về sự yếu đuối của họ khi đội của cô khám phá đầm lầy, mất đàn ông vì sức hấp dẫn của Evil Eye. Nhận ra sức mạnh của nó dù nó mỏng manh, cô quyết tâm khai thác nó, giết một con và chạy trốn với xác của nó để hồi sinh bộ tộc, báo hiệu một sự chuyển đổi tuyệt vọng hướng tới sự cứu rỗi siêu nhiên.',
                    importantChanges: [
                      'Medea: Từ chiến lược gia -> Người tìm kiếm quyết tâm sức mạnh Evil Eye.',
                      'Babylon: Từ bộ tộc nguyên thủy -> Đối mặt với mối đe dọa siêu nhiên.',
                    ],
                  },
                  {
                    chapterIndex: 25,
                    summaryDetail:
                      'Chương 25 theo sau chiến thắng tàn bạo của Medea trước một Evil Eye, trả giá bằng hầu hết đội của cô. Trở về với cơ thể của nó, cô thuyết phục cha mình miễn cưỡng cho phép phụ nữ thử máu của nó, hy sinh nhiều người để sinh ra ba vu—Medea (chiến tranh), Circe (nguyền rủa), và Cassandra (chữa lành). Sức mạnh của họ ổn định Babylon, nhưng việc giết người vì ham muốn của Circe khơi mào căng thẳng, nâng cao địa vị của phụ nữ khi vu gia tăng, đánh dấu bình minh của chế độ mẫu hệ.',
                    importantChanges: [
                      'Medea, Circe, Cassandra: Từ phụ nữ bộ tộc -> Vu với sức mạnh siêu nhiên.',
                      'Babylon: Từ suy tàn do nam giới lãnh đạo -> Sự thống trị của nữ vu.',
                    ],
                  },
                ],
              },
              {
                name: 'Mini-Arc 8: Sự Thăng Hoa của Vu và Sự Can Thiệp của Hứa Chỉ',
                description:
                  "Mini-Arc 8 ghi chép sự thăng hoa của Babylon thành một nền văn minh do vu lãnh đạo và sự can thiệp trực tiếp của Hứa Chỉ để đẩy nhanh sự tiến hóa siêu nhiên của nó, được thúc đẩy bởi sự cấp bách của ung thư của anh. Qua nhiều thập kỷ, ba vu—Medea, Circe, Cassandra—neo giữ sự sống còn của Babylon, sức mạnh tinh thần bắt nguồn từ Evil Eye của họ đẩy lùi thú dữ trong khi kéo dài tuổi thọ của họ. Sự đồi trụy không kiểm soát của Circe, giết đàn ông vì khoái cảm, làm rạn nứt sự đoàn kết của họ, khiến Medea và Cassandra thực thi luật vu nghiêm ngặt, mặc dù sức mạnh của cô vượt qua họ, đe dọa sự hỗn loạn. Đàn ông nổi loạn, bị giảm xuống thành công cụ, khi nữ vu nhân lên. Đồng thời, Hứa Chỉ, lấy cảm hứng từ những người chơi âm mưu chống lại anh trong sa bàn VR, bước vào đó dưới hình dạng một con quạ ba mắt thông qua một đường hầm ẩn kết nối cả hai sa bàn. Với tư cách 'Hermes,' anh đối mặt với các vu trong cuộc xung đột của họ, mang đến thiền định, luyện kim và nghệ thuật vu để tinh chỉnh sức mạnh của họ và ngăn chặn sự hủy diệt, nhằm tìm cách chữa trị. Trong khi đó, người chơi vật lộn với việc bảo trì máy chủ đột ngột của anh, không biết về vai trò kép của anh. Mini-arc này kết hợp sự biến động xã hội của Babylon với sự can thiệp giống thần của Hứa Chỉ, hợp nhất sự khéo léo của người chơi với cuộc tìm kiếm sinh tồn tuyệt vọng của anh.",
                chapter: [
                  {
                    chapterIndex: 26,
                    summaryDetail:
                      'Chương 26 tiết lộ sự hồi sinh của Babylon do vu thúc đẩy sau 300 năm, với Medea, Circe và Cassandra sử dụng sức mạnh tinh thần. Xu hướng tàn bạo của Circe tương phản với sự kiềm chế của những người khác, gieo rắc bất hòa. Hứa Chỉ, hài lòng với tác động của Evil Eye, nghiên cứu thiền định trực tuyến để tăng cường khả năng của họ, dự định bước vào sa bàn dưới hình dạng một sinh vật nhỏ. Người chơi trong sa bàn VR phát hiện anh, tranh luận về vai trò của anh, vô tình truyền cảm hứng cho bước đi tiếp theo của anh.',
                    importantChanges: [
                      'Babylon: Từ bộ tộc đấu tranh -> Xã hội được vu bảo vệ.',
                      'Hứa Chỉ: Từ người quan sát -> Lập kế hoạch bước vào sa bàn dưới hình dạng sinh vật.',
                    ],
                  },
                  {
                    chapterIndex: 27,
                    summaryDetail:
                      'Chương 27 cho thấy Hứa Chỉ buộc người chơi offline để bước vào sa bàn VR dưới hình dạng một con quạ, kết nối nó với sa bàn chính qua một đường hầm. Người chơi giận dữ trên mạng, âm mưu đầu độc anh, trong khi anh tiến hóa một con quạ ba mắt có khuyết điểm. Thành công bước vào sa bàn chính, anh hướng đến Babylon, thích thú với mưu đồ của người chơi, quyết tâm hướng dẫn các vu hướng tới cách chữa trị.',
                    importantChanges: [
                      'Hứa Chỉ: Từ người quan sát con người -> Hóa thân quạ trong sa bàn.',
                      'Cộng đồng người chơi: Từ hoạt động -> Bị buộc đăng xuất, âm mưu trả thù.',
                    ],
                  },
                  {
                    chapterIndex: 28,
                    summaryDetail:
                      'Chương 28 miêu tả sự phát triển của Babylon trong một thập kỷ, với vu bảo vệ nó giữa những cánh đồng trù phú. Bộ ba vu trẻ trung tắm rửa, suy ngẫm về tuổi thọ và sự tha hóa của Circe, bị ràng buộc bởi luật lệ nghiêm ngặt. Đàn ông tuyệt vọng như công cụ, một vu nam duy nhất chết dưới sự thái quá của Circe, củng cố sự thống trị của phụ nữ khi bốn vu mới xuất hiện, báo hiệu một sự ổn định căng thẳng.',
                    importantChanges: [
                      'Circe: Từ vu -> Bạo chúa đáng sợ đối với đàn ông.',
                      'Đàn ông Babylon: Từ chiến binh -> Bị khuất phục dưới sự cai trị của vu.',
                    ],
                  },
                  {
                    chapterIndex: 29,
                    summaryDetail:
                      'Chương 29 leo thang căng thẳng khi đàn ông chạy trốn khỏi triều đại của Circe sau 16 năm. Medea và Cassandra, bị áp đảo bởi sức mạnh ngày càng tăng của cô, tập hợp bốn vu mới để chế ngự cô trong một cuộc đụng độ ở nhà tắm. Con đường hưởng lạc của Circe tăng cường sức mạnh của cô, xung đột với tầm nhìn của Medea về nghệ thuật vu văn minh. Con quạ của Hứa Chỉ can thiệp, không bị tổn thương bởi cuộc tấn công của họ, gợi ý về sức mạnh của thiền định.',
                    importantChanges: [
                      'Circe: Từ đồng lãnh đạo -> Đối thủ vu áp đảo.',
                      'Medea, Cassandra: Từ lãnh đạo -> Liên minh chống Circe với vu mới.',
                    ],
                  },
                  {
                    chapterIndex: 30,
                    summaryDetail:
                      'Chương 30 lên đến đỉnh điểm với Hứa Chỉ, dưới hình dạng Hermes, tiết lộ bản thân với các vu kinh ngạc. Tự xưng là thần trí tuệ, anh mang đến thiền định, luyện kim và nghệ thuật vu—công cụ để trở thành thần và sinh tồn—phản ánh những món quà của Gilgamesh. Các vu, choáng váng trước sự miễn nhiễm và lời dạy bí ẩn của anh, nhìn thấy con đường đến bất tử, sẵn sàng định hình lại Babylon dưới sự hướng dẫn của anh, thực hiện agenda tìm kiếm cách chữa trị của Hứa Chỉ.',
                    importantChanges: [
                      'Hứa Chỉ: Từ quạ -> Tự xưng là thần Hermes.',
                      'Vu Babylon: Từ bộ ba rạn nứt -> Người nhận kiến thức thần thánh.',
                    ],
                  },
                ],
              },
            ],
          },
        ].concat([
          {
            name: 'Arc 5: Sự Phồn Vinh và Hoàng Hôn của Kỷ Nguyên Vu',
            summaryDetail:
              "Arc 5 ghi chép sự trỗi dậy và cuối cùng là suy tàn của nền văn minh vu trong sa bàn của Hứa Chỉ, đan xen với cuộc đấu tranh cá nhân của anh chống lại ung thư giai đoạn cuối và việc anh điều khiển trò chơi VR 'Bào Tử Tiến Hóa.' Nó bắt đầu với Hứa Chỉ, giả dạng Hermes, khơi dậy sự theo đuổi thiền định, luyện kim và nghệ thuật vu của các vu, kích hoạt sự chuyển đổi của Babylon thành một siêu cường mẫu hệ qua nhiều thế kỷ. Medea, Circe và Cassandra tiên phong trong một hệ thống vu có cấu trúc, sức mạnh của họ đạt đỉnh cao khi đẩy lùi thú dữ và thiết lập một vương quốc, mặc dù chủ nghĩa hưởng lạc của Circe dẫn đến việc cô bị lưu đày và thành lập phe 'Gai Tường Vi' đen tối. Đồng thời, Hứa Chỉ tận dụng Closed Beta 2.0 của trò chơi, thúc đẩy những người chơi như Tốc Độ Xe Akina tiến hóa các siêu loài, chẳng hạn như một con gà độc, để làm phong phú hệ sinh thái sa bàn và hỗ trợ cuộc tìm kiếm cách chữa trị của anh. Khi kỷ nguyên vu suy tàn với cái chết của bộ ba—Medea và Cassandra được tôn vinh bằng các dấu hiệu thần thánh, Circe bất khuất trong cô lập—Hứa Chỉ áp dụng kỹ thuật vu của họ, tăng cường cơ thể của chính mình. Arc kết thúc với một khoảng trống quyền lực, người chơi âm mưu tiêu diệt anh, và Hứa Chỉ hình dung một tương lai sa bàn hỗn loạn, huyền bí, cân bằng giữa thần tính và sự hữu hạn.",
            miniArc: [
              {
                name: 'Mini-Arc 9: Sự Trỗi Dậy của Văn Minh Vu',
                description:
                  "Mini-Arc 9 theo dõi sự thăng hoa của nền văn minh vu Babylon, được xúc tác bởi sự can thiệp của Hứa Chỉ, cùng với cuộc sống cá nhân và động lực trò chơi đang tiến hóa của anh. Giả dạng Hermes, anh truyền đạt thiền định, luyện kim và nghệ thuật vu, truyền cảm hứng cho Medea, Circe và Cassandra rèn luyện một con đường vu có cấu trúc, làm dịu căng thẳng của họ. Trong 139 năm, họ mã hóa kỹ thuật, đánh bại những con thú mạnh mẽ như Baboko, và mở rộng Babylon thành một vương quốc, mặc dù tham vọng đen tối của Circe làm rạn nứt sự đoàn kết của họ, dẫn đến việc cô bị lưu đày và sự trỗi dậy của giáo phái 'Gai Tường Vi.' Hứa Chỉ, tham dự buổi họp mặt của Trần Hi, duy trì vẻ ngoài nông thôn trong khi tinh chỉnh trò chơi VR, giới thiệu Closed Beta 2.0 với 50 slot mới và yêu cầu luận văn để tham gia, thúc đẩy người chơi tiến hóa các loài như Evil Eye. Hệ thống vu của Babylon phồn thịnh, nhưng luyện kim vẫn khó nắm bắt, làm thất vọng hy vọng chữa trị của Hứa Chỉ. Áp dụng thiền định của họ, anh hợp nhất gen Evil Eye, tăng cường cơ thể yếu ớt của mình. Mini-arc này kết hợp sự phát triển siêu nhiên của Babylon với sự leo thang chiến lược của Hứa Chỉ, đặt nền móng cho một kỷ nguyên vu sôi động nhưng không ổn định.",
                chapter: [
                  {
                    chapterIndex: 31,
                    summaryDetail:
                      'Chương 31 chứng kiến Hứa Chỉ, dưới hình dạng Hermes, truyền đạt thiền định, luyện kim và nghệ thuật vu cho các vu, tự hào về tiềm năng của họ để vượt qua Gilgamesh. Anh đăng xuất, để lại một con quạ chết, mà các vu kinh ngạc nghiên cứu, suy đoán về nguồn gốc siêu phàm của nó. Hứa Chỉ suy ngẫm về mưu đồ do ung thư của mình, hy vọng tiến bộ của họ mang lại cách chữa trị. Các vu bắt đầu thiền định, trong khi người chơi tiếp tục trò chơi VR, cằn nhằn về việc quản lý máy chủ thất thường của anh nhưng lao vào tiến hóa loài.',
                    importantChanges: [
                      'Hứa Chỉ: Từ người quan sát -> Hermes truyền cảm hứng cho vu với kiến thức.',
                      'Medea, Circe, Cassandra: Từ vu rạn nứt -> Người học thống nhất các lời dạy của Hermes.',
                    ],
                  },
                  {
                    chapterIndex: 32,
                    summaryDetail:
                      "Chương 32 theo sau Hứa Chỉ tại buổi họp mặt trung học sôi động của Trần Hi, nơi hào quang được tăng cường của anh thu hút sự ngưỡng mộ, che giấu bệnh tật của anh. Cô phô trương mối tình giả của họ, trong khi anh uống rượu với những kẻ thách thức, sau đó phát hiện sinh viên thảo luận về sự chân thực của 'Bào Tử Tiến Hóa,' truyền cảm hứng cho một cú hích người chơi chuyên nghiệp. Trong sa bàn, Babylon phồn thịnh dưới sự bảo vệ của vu, gợi ý về một xã hội siêu nhiên có cấu trúc.",
                    importantChanges: [
                      'Hứa Chỉ: Từ người ẩn dật -> Xã hội khéo léo, truyền cảm hứng cho các điều chỉnh trò chơi.',
                      'Trần Hi: Từ hàng xóm -> Tự hào khoe Hứa Chỉ là bạn trai.',
                    ],
                  },
                  {
                    chapterIndex: 33,
                    summaryDetail:
                      "Chương 33 miêu tả Hứa Chỉ hộ tống Trần Hi say rượu về nhà sau buổi họp mặt, tình cảm thẳng thắn của cô xung đột với sự tập trung vào ung thư của anh. Anh ra mắt Closed Beta 2.0, thêm 50 slot với yêu cầu luận văn, khơi mào một cơn sốt. Trong sa bàn, qua 100 năm, các vu mã hóa thiền định và nghệ thuật vu, đánh bại Baboko, nhưng việc lưu đày Circe sau một cuộc đảo chính đánh dấu sự rạn nứt, hình thành 'Gai Tường Vi.'",
                    importantChanges: [
                      'Trò chơi VR: Từ 100 -> 150 người chơi với yêu cầu luận văn.',
                      "Circe: Từ lãnh đạo vu -> Người sáng lập bị lưu đày của 'Gai Tường Vi.'",
                    ],
                  },
                  {
                    chapterIndex: 34,
                    summaryDetail:
                      "Chương 34 cho thấy 'Bào Tử Tiến Hóa' lan truyền mạnh mẽ, với các nhà phân tích kinh ngạc trước công nghệ của nó, cho rằng chi phí tính toán khổng lồ. Quy tắc luận văn của Hứa Chỉ khiến người chơi đến thư viện, làm bối rối các chuyên gia. Gần 1.000 bài nộp tràn ngập hộp thư của anh, chi tiết các kế hoạch loài, khi anh thích thú với nhiệt huyết của họ, dự định khai thác trí tuệ của họ cho sự tiến hóa của sa bàn.",
                    importantChanges: [
                      'Cộng đồng người chơi: Từ casual -> Người đam mê viết luận văn.',
                      'Hứa Chỉ: Từ người giám sát thụ động -> Người điều phối sự bùng nổ trí tuệ.',
                    ],
                  },
                  {
                    chapterIndex: 35,
                    summaryDetail:
                      'Chương 35 tiết lộ Hứa Chỉ sàng lọc các luận văn của người chơi, kinh ngạc trước độ sâu của chúng—như một con chim lấy cảm hứng từ J-20 và lươn giống Zapdos—giao nhiệm vụ cho AI của mình chọn 50. Trong sa bàn, 139 năm trôi qua: các vu hoàn thiện nghệ thuật vu, chia rẽ sau sự phản bội của Circe, và Hứa Chỉ hợp nhất gen Evil Eye, bắt đầu luyện tập vu để chống lại ung thư của mình.',
                    importantChanges: [
                      'Hứa Chỉ: Từ con người -> Người thực hành vu với gen Evil Eye.',
                      'Babylon: Từ vương quốc thống nhất -> Chia rẽ với phe của Circe.',
                    ],
                  },
                ],
              },
              {
                name: 'Mini-Arc 10: Hoàng Hôn của Vu và Bình Minh Mới',
                description:
                  "Mini-Arc 10 ghi lại cái kết cảm động của kỷ nguyên vu Babylon và sự chuyển hướng của Hứa Chỉ sang một tương lai sa bàn hỗn loạn. Sau 198 năm, Medea và Cassandra qua đời, được tưởng nhớ bằng các dấu hiệu thần thánh—mưa máu, một tượng đài hoa, giao hưởng của Beethoven—do Hứa Chỉ tạo ra, người tôn vinh di sản của họ mặc dù thất bại trong việc chữa trị bằng luyện kim. Circe, bị cô lập, chết một cách bất khuất, âm mưu tái sinh qua giáo phái đen tối của mình. Hứa Chỉ, giờ là một vu tập sự, xem cái chết của họ là cơ hội để đa dạng hóa loài, thoát khỏi sự thống trị của vu. Closed Beta 2.0 ra mắt, với những người chơi như Tốc Độ Xe Akina tiến hóa một con gà độc để giết anh, khiến Hứa Chỉ thử nghiệm độc tính của nó trong khi lập kế hoạch cho một hệ sinh thái huyền bí. Trò hề của họ—âm mưu tiêu diệt anh, khám phá ghi chú của anh—làm anh thích thú nhưng thách thức khi anh hình dung một 'Kỷ Thịnh Vu' đa dạng siêu nhiên, được thúc đẩy bởi sự cấp bách để chữa ung thư thông qua lời hứa khó nắm bắt của luyện kim.",
                chapter: [
                  {
                    chapterIndex: 36,
                    summaryDetail:
                      'Chương 36 theo sau Hứa Chỉ tích hợp gen Evil Eye, đón nhận sức mạnh vu vì sự linh hoạt của chúng so với sức mạnh thô bạo của Gilgamesh. Khi Medea và Cassandra gần kề cái chết sau 198 năm, vương quốc của họ than khóc, trong khi Circe, trong lưu đày, gửi một lá thư hối hận. Hứa Chỉ làm chậm thời gian trong sa bàn, cảm động trước lời cầu xin của họ để gặp lại Hermes, chuẩn bị một lời từ biệt.',
                    importantChanges: [
                      'Hứa Chỉ: Từ được tăng cường gen -> Vu tập sự.',
                      'Medea, Cassandra: Từ vu cai trị -> Gần kề cái chết.',
                    ],
                  },
                  {
                    chapterIndex: 37,
                    summaryDetail:
                      'Chương 37 miêu tả cái chết của Medea và Cassandra giữa các dấu hiệu thần thánh—mưa máu, một bông hoa khổng lồ, giao hưởng của Beethoven—do Hứa Chỉ dàn dựng để tôn vinh họ. Babylon đau buồn, trong khi Circe chết một mình, giao nhiệm vụ cho giáo phái của mình hồi sinh cô. Hứa Chỉ, cảm động nhưng thực dụng, nhìn thấy cơ hội để đa dạng hóa loài sau triều đại vu, nhắm đến đầu ra của Closed Beta 2.0.',
                    importantChanges: [
                      'Medea, Cassandra: Từ sống -> Chết, được tôn vinh bằng dấu hiệu thần.',
                      'Circe: Từ sống trong lưu đày -> Chết, lập kế hoạch tái sinh.',
                    ],
                  },
                  {
                    chapterIndex: 38,
                    summaryDetail:
                      'Chương 38 miêu tả công dân Babylon tôn vinh di sản của các vu qua bài hát và nước mắt, cái chết của họ đánh dấu sự kết thúc của một kỷ nguyên. Giáo phái của Circe thề sẽ đưa cô trở lại, trong khi Hứa Chỉ, đang ăn trưa, ghi nhận con đường vu của họ cho hy vọng sống còn của mình, lập kế hoạch cho một hệ sinh thái sa bàn phong phú hơn mà không có người cai trị thống trị.',
                    importantChanges: [
                      'Babylon: Từ do vu cai trị -> Khoảng trống quyền lực.',
                      'Hứa Chỉ: Từ người than khóc -> Chiến lược gia cho kỷ nguyên mới.',
                    ],
                  },
                  {
                    chapterIndex: 39,
                    summaryDetail:
                      'Chương 39 cho thấy sự ra mắt của Closed Beta 2.0, với người chơi kinh ngạc trước phần giới thiệu của Beethoven và tiến hóa loài. Tốc Độ Xe Akina tạo ra một con gà độc, livestream âm mưu đầu độc Hứa Chỉ, tập hợp người chơi hỗ trợ cuộc phục kích của mình. Hứa Chỉ, thích thú nhưng cảnh giác, theo dõi nhiệt huyết của họ, dự đoán các siêu loài mới.',
                    importantChanges: [
                      'Tốc Độ Xe Akina: Từ người chơi -> Lãnh đạo âm mưu tiêu diệt Hứa Chỉ.',
                      'Trò chơi VR: Từ Beta 1 -> 2.0 với tham vọng người chơi tăng cao.',
                    ],
                  },
                  {
                    chapterIndex: 40,
                    summaryDetail:
                      "Chương 40 thấy Hứa Chỉ bực tức với mưu đồ của người chơi, thử nghiệm độc tố chết người của con gà—mạnh nhưng an toàn cho anh—thông qua AI của mình. Khi họ âm mưu qua ghế của anh, anh ghi chép kỷ 'Kỷ Thịnh Vu,' bị gián đoạn bởi việc Trần Hi giao bữa ăn. Người chơi leo lên ghế của anh, thoáng thấy ghi chú của anh, hồi hộp với lore ẩn giấu.",
                    importantChanges: [
                      'Hứa Chỉ: Từ thụ động -> Thử nghiệm mối đe dọa của loài người chơi.',
                      "Người chơi: Từ người tiến hóa -> Người tìm kiếm lore khám phá 'Kỷ Sáng Thế.'",
                    ],
                  },
                ],
              },
            ],
          },
        ]),
      )
      .concat([
        {
          name: 'Arc 6: Bóng Ma Quyền Lực và Sự Trỗi Dậy của Các Thế Lực Mới',
          summaryDetail:
            "Arc 6 mở ra khi Hứa Chỉ đối mặt với những thách thức cá nhân và dàn dựng một sự chuyển đổi then chốt trong các thí nghiệm sa bàn của mình, đan xen cuộc sống nông thôn của anh với động lực leo thang của cả trò chơi VR 'Bào Tử Tiến Hóa' và nền văn minh vu Babylon. Giữa cuộc tìm kiếm cách chữa trị do ung thư thúc đẩy, Hứa Chỉ đối mặt với sự ra đi của Trần Hi để đến trường, thúc đẩy một giải pháp gặp gỡ ảo thông qua trò chơi, trong khi những người chơi như Tốc Độ Xe Akina và Hỗn Nguyên Phích Lịch Thủ tiến hóa các loài độc đáo—gà độc và sinh vật cơ khí—khơi dậy những đột phá bất ngờ như Phượng Hoàng Lửa. Trong sa bàn, Babylon rơi vào một kỷ nguyên đen tối khi Medusa, đệ tử của Circe, cướp quyền, khuất phục vương quốc của Lilith bằng vũ lực tàn bạo và thiết lập một chế độ mẫu hệ chuyên chế. Qua nhiều thập kỷ, triều đại của Medusa với tư cách là một vu sư cấp 6 bạo chúa phát triển không bị cản trở, đè bẹp sự kháng cự và biến đàn ông thành công cụ sinh sản, trong khi hy vọng của Lilith phai nhạt. Hứa Chỉ, tận dụng sự khéo léo của người chơi, giới thiệu Phượng Hoàng và dự định triển khai một thiên tài khoa học từ trò chơi vào sa bàn để chống lại Medusa, nhằm hồi sinh luyện kim cho cách chữa trị của mình. Arc này kết hợp các yếu tố cá nhân, sự tiến hóa do người chơi thúc đẩy và cuộc đấu tranh quyền lực vu dystopian, đặt nền móng cho một cuộc đụng độ chuyển đổi.",
          miniArc: [
            {
              name: 'Mini-Arc 11: Tình Yêu, Mất Mát và Tham Vọng Tiến Hóa',
              description:
                'Mini-Arc 11 ghi lại sự cân bằng tinh tế của Hứa Chỉ giữa cuộc sống cá nhân và tham vọng thí nghiệm khi sự ra đi của Trần Hi đến gần và người chơi đẩy ranh giới của sa bàn. Đối mặt với việc cô trở lại trường học, Hứa Chỉ đề xuất gặp nhau trong trò chơi VR, đảm bảo một slot cho cô mặc dù cô là người mới, trong khi người chơi khám phá các ghi chú kỷ nguyên của anh, khơi dậy nhiệt huyết của họ. Âm mưu gà độc của Tốc Độ Xe Akina thất bại thảm hại, tiến hóa thành Phượng Hoàng Lửa dưới thử nghiệm lò nướng vô tình của Hứa Chỉ, tạo ra một loài pseudo-heroic với khả năng làm chủ lửa và tái sinh. Hứa Chỉ thưởng thức món Gà Đưa Ma ẩm thực, tích hợp Phượng Hoàng vào sa bàn, nơi nó biến đổi một khu rừng thành sa mạc. Trong khi đó, những người chơi như Hỗn Nguyên Phích Lịch Thủ khám phá sự tiến hóa cơ khí, gợi ý về tiềm năng luyện kim. Mini-arc này đan xen sợi dây tình cảm của Hứa Chỉ với Trần Hi với việc anh sử dụng sáng tạo của người chơi một cách chiến lược, sinh ra một thực thể siêu nhiên hứa hẹn cả sự hỗn loạn và hy vọng cho agenda tìm kiếm cách chữa trị của anh, tất cả trong khi Babylon đứng bên bờ vực bóng tối.',
              chapter: [
                {
                  chapterIndex: 41,
                  summaryDetail:
                    "Chương 41 thể hiện sự trao đổi vui tươi nhưng cảm động giữa Hứa Chỉ và Trần Hi khi mùa hè của cô kết thúc. Cô trêu chọc sự ám ảnh làm nông của anh, khao khát thêm thời gian, trong khi anh đề nghị gặp nhau trong 'Bào Tử Tiến Hóa,' hứa hẹn một slot thông qua một luận văn giả mạo và một PC mới. Trong khi đó, người chơi rình mò qua các ghi chú của anh, hồi hộp với các kỷ nguyên như 'Kỷ Sáng Thế,' khơi dậy các lý thuyết về lore ẩn giấu và thúc đẩy quyết tâm lật đổ anh.",
                  importantChanges: [
                    'Hứa Chỉ: Từ người ẩn dật -> Lập kế hoạch hẹn hò ảo với Trần Hi.',
                    'Trần Hi: Từ người bạn đồng hành địa phương -> Đối mặt với mối quan hệ xa cách với Hứa Chỉ.',
                  ],
                },
                {
                  chapterIndex: 42,
                  summaryDetail:
                    'Chương 42 chứng kiến Hứa Chỉ phá vỡ cuộc phục kích của người chơi khi họ đánh lạc hướng anh bằng côn trùng, chỉ để nấu gà độc của Tốc Độ Xe Akina trong lò nướng của mình. Tiếng kêu đau đớn của họ làm anh thích thú, nhưng sự sống sót của con gà và tiếng kêu Phượng Hoàng làm anh choáng váng, gợi ý về một đột phá. Người chơi đánh giá sai nỗi đau của họ là diễn xuất, tập hợp cho việc giết, không biết về sự thống trị thoải mái của anh.',
                  importantChanges: [
                    'Tốc Độ Xe Akina: Từ người lập mưu -> Người tiến hóa Phượng Hoàng tiềm năng.',
                    'Người chơi: Từ kẻ tấn công -> Con tốt vô tình trong thử nghiệm của Hứa Chỉ.',
                  ],
                },
                {
                  chapterIndex: 43,
                  summaryDetail:
                    'Chương 43 tiết lộ nỗi đau của người chơi là một cơ chế trò chơi—đau đớn bị ép tăng lên 50%—làm sốc diễn đàn với sự chân thực của nó. Hứa Chỉ, không nao núng, ăn khi Tốc Độ Xe Akina xâm nhập vào bữa ăn của mình, chỉ để dừng lại và nấu nó, thưởng thức sự mỉa mai. Cộng đồng quay cuồng, kinh ngạc trước độ sâu và sự trừng phạt của trò chơi.',
                  importantChanges: [
                    'VR Game: Từ đau đớn có thể điều chỉnh -> Áp đặt hình phạt 50%.',
                    'Hứa Chỉ: Từ mục tiêu -> Người điều phối thích thú sự tra tấn của người chơi.',
                  ],
                },
                {
                  chapterIndex: 44,
                  summaryDetail:
                    'Chương 44 tiết lộ sự sống sót của Tốc Độ Xe Akina dưới hình dạng Phượng Hoàng Lửa, một loài pseudo-heroic với khả năng điều khiển lửa và tái sinh, sinh ra từ nhiệt của lò nướng. Hứa Chỉ, phấn khích, thả nó vào sa bàn, nơi nó đốt cháy một khu rừng thành sa mạc, và ăn Gà Đưa Ma ban đầu, xác nhận độc tố chết người của nó—hoàn hảo cho kế hoạch của anh.',
                  importantChanges: [
                    'Tốc Độ Xe Akina: Từ Gà Đưa Ma -> Người tạo ra Phượng Hoàng Lửa.',
                    'Sa bàn: Từ rừng -> Hệ sinh thái sa mạc do Phượng Hoàng thay đổi.',
                  ],
                },
                {
                  chapterIndex: 45,
                  summaryDetail:
                    'Chương 45 trao giải thưởng cho Tốc Độ Xe Akina vì Phượng Hoàng, mang đến sự duy trì chủng tộc, slot vĩnh viễn, hoặc một trải nghiệm cuộc sống thứ hai bí ẩn; anh ta chọn cái đầu tiên, tùy chỉnh Gà Đưa Ma. Đăng nhập, Hứa Chỉ giật lấy đàn của anh ta làm món ăn, để lại anh ta choáng váng khi người xem cười vào số phận ăn được của anh ta.',
                  importantChanges: [
                    'Tốc Độ Xe Akina: Từ người chơi -> Người giữ chủng tộc Gà Đưa Ma, giờ là con mồi của Hứa Chỉ.',
                    'Hứa Chỉ: Từ người quan sát -> Kẻ săn mồi của các sáng tạo của người chơi.',
                  ],
                },
              ],
            },
            {
              name: 'Mini-Arc 12: Triều Đại Đen Tối và Hạt Giống của Sự Nổi Loạn',
              description:
                'Mini-Arc 12 đi sâu vào sự rơi vào chuyên chế của Babylon dưới sự cai trị của Medusa và các biện pháp đối phó chiến lược của Hứa Chỉ thông qua sự đổi mới của người chơi. Medusa, người thừa kế của Circe, đè bẹp Babylon, nô lệ hóa vương quốc của Lilith với sức mạnh vu sư cấp 5, sau đó thăng lên cấp 6, áp đặt một dystopia mẫu hệ nơi đàn ông là công cụ sinh sản. Sự kháng cự của Lilith tan rã trong 60 năm, tình yêu Garfield của cô mất vào hậu cung của Medusa, khi hy vọng phai nhạt. Hứa Chỉ, thất vọng, thúc đẩy người chơi hướng tới sự tiến hóa thực vật để có gợi ý luyện kim, trong khi Hỗn Nguyên Phích Lịch Thủ tạo ra một loài cơ khí kỳ lạ, gợi ý về công nghệ luyện kim nguyên thủy. Phượng Hoàng, giờ có tri giác, làm Medusa bị thương, tiết lộ tiềm năng cấp 7 của nó, nhưng nó quá non trẻ để lật đổ cô ta. Hứa Chỉ, tuyệt vọng tìm cách chữa trị, nhắm vào thiên tài của Hỗn Nguyên Phích Lịch Thủ để sinh ra một vị cứu tinh vu, dự định cấy ghép trí tuệ của anh ta vào sa bàn để thách thức triều đại của Medusa và mở khóa bí mật của luyện kim, kết hợp sự khéo léo của người chơi với số phận đen tối của Babylon.',
              chapter: [
                {
                  chapterIndex: 46,
                  summaryDetail:
                    'Chương 46 chứng kiến Tốc Độ Xe Akina than thở về số phận của Gà Đưa Ma là món ăn của Hứa Chỉ, khơi dậy sự hài hước trên diễn đàn. Hứa Chỉ, lấy cảm hứng, đăng ẩn danh để thúc đẩy sự tiến hóa thực vật, khuấy động người chơi khám phá con đường chưa khai thác này, nhằm vào thực vật ngon để bổ sung cho chế độ ăn và cuộc tìm kiếm cách chữa trị của anh.',
                  importantChanges: [
                    'Tốc Độ Xe Akina: Từ người tạo tự hào -> Hối hận về chủng tộc ăn được.',
                    'Người chơi: Từ tập trung vào động vật -> Xem xét sự tiến hóa thực vật.',
                  ],
                },
                {
                  chapterIndex: 47,
                  summaryDetail:
                    'Chương 47 làm nổi bật Hỗn Nguyên Phích Lịch Thủ, một người chơi chế tạo một loài cơ khí nhiều tay để chế tạo, không phải chiến đấu. Trang trại sa bàn bình dị của anh ta tự hào có một chiếc xe đạp gỗ, thu hút sự kinh ngạc và phê bình vì né tránh sự tiến hóa loài, gợi ý về một tương lai công nghệ mà Hứa Chỉ khao khát.',
                  importantChanges: [
                    'Hỗn Nguyên Phích Lịch Thủ: Từ chiến binh -> Thợ chế tạo cơ khí.',
                    'Hứa Chỉ: Từ người ăn -> Bị cuốn hút bởi tiềm năng công nghệ của người chơi.',
                  ],
                },
                {
                  chapterIndex: 48,
                  summaryDetail:
                    'Chương 48 tiết lộ kế hoạch của Hỗn Nguyên Phích Lịch Thủ cho một chiếc xe sinh học—khung gỗ, động cơ sống—làm choáng váng người chơi với sự khéo léo của nó. Một ông trùm công nghệ trong thực tế, anh ta từ chối giúp đỡ, nhắm đến thành tựu cá nhân, trong khi Hứa Chỉ nhìn thấy lời hứa luyện kim trong sự kết hợp của sinh học và cơ khí này.',
                  importantChanges: [
                    'Hỗn Nguyên Phích Lịch Thủ: Từ nông dân -> Nhà đổi mới công nghệ sinh học.',
                    'Hứa Chỉ: Từ người quan sát -> Nhắm đến luyện kim qua công nghệ người chơi.',
                  ],
                },
                {
                  chapterIndex: 49,
                  summaryDetail:
                    'Chương 49 miêu tả sự sụp đổ của Babylon khi Medusa, giờ là vu sư cấp 5, chinh phục nó sau tám năm, buộc Lilith đầu hàng trong một cuộc tắm máu. Cô áp đặt một quốc gia chư hầu, lấy đàn ông làm phi tần, đẩy Babylon vào tuyệt vọng khi triều đại cấp 6 của cô bắt đầu, không bị kiểm soát bởi sự trì trệ của Lilith.',
                  importantChanges: [
                    'Medusa: Từ vu sư cấp 5 -> Bạo chúa cấp 6.',
                    'Babylon: Từ chủ quyền -> Chư hầu của Tường Vi dưới Lilith.',
                  ],
                },
                {
                  chapterIndex: 50,
                  summaryDetail:
                    'Chương 50 ghi chép kỷ nguyên đen tối của Babylon 50 năm sau, với sự cai trị cấp 6 của Medusa tuyệt đối, đàn ông bị nô lệ hóa, và Lilith bất lực ở cấp 4. Phượng Hoàng làm Medusa bị thương, gợi ý về hy vọng, nhưng Hứa Chỉ, thất vọng, nhắm vào thiên tài của Hỗn Nguyên Phích Lịch Thủ để sinh ra một vị cứu tinh vu, nhằm thách thức Medusa và mở khóa luyện kim.',
                  importantChanges: [
                    'Lilith: Từ vương -> Bị tan vỡ, trì trệ ở cấp 4.',
                    'Hứa Chỉ: Từ người đứng ngoài -> Lập mưu cấy ghép thiên tài.',
                  ],
                },
              ],
            },
          ],
        },
      ])
      .concat([
        {
          name: 'Arc 7: Luyện Kim của Sự Nổi Loạn và Thăng Hoa',
          summaryDetail:
            'Arc 7 đánh dấu một kỷ nguyên chuyển đổi trong sa bàn của Hứa Chỉ khi anh dàn dựng sự trỗi dậy của Lý Sinh Khương, một người chơi trở thành vị cứu tinh vu sư, để chống lại triều đại chuyên chế của Medusa và khơi dậy một sự phục hưng luyện kim. Thất vọng bởi sự rơi vào kỷ nguyên đen tối của Babylon dưới sự thống trị vu sư cấp 6 của Medusa, Hứa Chỉ cấy ghép Lý Sinh Khương—biệt danh Hỗn Nguyên Phích Lịch Thủ—vào thế giới lớn hơn của sa bàn thông qua một cổng thông tin, tận dụng thiên tài khoa học của anh ta. Ban đầu là một Slime, Lý Sinh Khương chịu đựng sự sỉ nhục khi chủng tộc của mình trở thành công cụ cho vu nữ tà ác của Tường Vi, nhưng liên minh với Hội Cộng Tế Nữ Vu Elizabeth, thành thạo vu thuật và luyện kim qua nhiều thập kỷ. Sự thăng hoa của anh ta đạt đỉnh điểm với một trận chiến kịch tính chống lại Medusa, sử dụng một khinh khí cầu luyện kim được cung cấp bởi Slime để đánh bại sự đột phá cấp 7 của cô ta, thiết lập anh ta là Quân chủ đại đế Grantham. Anh ta thống nhất các vương quốc, bãi bỏ chế độ nô lệ, và truyền bá luyện kim, khôi phục vinh quang của Babylon trong khi giam cầm Medusa. Khi triều đại của anh ta gần kết thúc, anh ta tìm kiếm sự hỗ trợ của người chơi để kéo dài tuổi thọ của mình và các đồng minh, kết hợp chiến thắng cá nhân với tham vọng chữa trị của Hứa Chỉ, định hình lại sa bàn thành một nền văn minh thịnh vượng, được truyền tải công nghệ.',
          miniArc: [
            {
              name: 'Mini-Arc 13: Hành Trình của Slime và Hạt Giống của Luyện Kim',
              description:
                'Mini-Arc 13 theo dõi hành trình của Lý Sinh Khương từ một người chơi trong sa bàn nhỏ đến một anh hùng miễn cưỡng trong sa bàn lớn, khơi dậy tia lửa luyện kim mà Hứa Chỉ khao khát. Được chọn vì khả năng khoa học của mình, Lý Sinh Khương tiến hóa một động cơ Slime, kiếm được cơ hội bước vào một thế giới mới thông qua cổng của Hứa Chỉ. Đến nơi dưới hình dạng một Slime, anh ta bị đẩy vào một vương quốc do Tường Vi của Medusa cai trị, nơi đồng loại của anh ta bị vu nữ tà ác nô lệ hóa để tu luyện, khơi dậy sự thù hận của anh ta. Được Hội Cộng Tế nuôi dưỡng, anh ta học ngôn ngữ địa phương và vu thuật, hợp nhất gen Evil Eye để trở thành một Slime vu sư cấp 4. Qua nhiều thập kỷ, anh ta bí mật tích lũy sức mạnh, chế tạo máy móc luyện kim trong khi Hứa Chỉ quan sát, thích thú nhưng đầy hy vọng. Chế độ của Medusa đen tối hơn, sinh ra Bán Thú Nhân và siết chặt xiềng xích của Babylon, nhưng quyết tâm của Lý Sinh Khương cứng rắn hơn, đặt nền móng cho sự nổi loạn. Mini-arc này kết hợp sự khởi đầu nhục nhã của anh ta với sự thành thạo đang nảy nở về khoa học và ma thuật, phù hợp với cuộc tìm kiếm cách chữa trị của Hứa Chỉ thông qua tiềm năng chưa được khai thác của luyện kim.',
              chapter: [
                {
                  chapterIndex: 51,
                  summaryDetail:
                    "Chương 51 giới thiệu kế hoạch của Hứa Chỉ để gửi Lý Sinh Khương, một người chơi am hiểu công nghệ, vào sa bàn lớn để chống lại sự chuyên chế của Medusa và khơi dậy luyện kim. Lý Sinh Khương, không hề hay biết, tiến hóa một động cơ Slime với sự hỗ trợ của chuyên gia, lái một chiếc xe gỗ kiếm được phần thưởng. Chọn 'cuộc sống thứ hai,' anh ta được hướng dẫn đến một cổng, làm phấn khích người chơi khi Hứa Chỉ cười nhếch mép với con tốt vô tình của mình.",
                  importantChanges: [
                    'Lý Sinh Khương: Từ người chơi -> Người tạo động cơ Slime, sẵn sàng cho một thế giới mới.',
                    'Hứa Chỉ: Từ người quan sát -> Người điều khiển mở cổng thế giới.',
                  ],
                },
                {
                  chapterIndex: 52,
                  summaryDetail:
                    'Chương 52 chứng kiến Lý Sinh Khương bước vào sa bàn lớn qua một cổng, kinh ngạc trước hệ sinh thái tươi tốt và sự giãn nở thời gian—một ngày bên ngoài bằng 100 năm bên trong. Tộc Slime của anh ta nhảy qua một khu rừng, chỉ để bị vu nữ Tường Vi phục kích, những người khai thác chúng để tu luyện. Hứa Chỉ suy ngẫm về tuổi thọ ngắn của chúng như một lợi thế chiến lược.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ người chơi sa bàn nhỏ -> Lãnh đạo Slime sa bàn lớn.',
                    'Tộc Slime: Từ loài tự do -> Công cụ tu luyện của Tường Vi.',
                  ],
                },
                {
                  chapterIndex: 53,
                  summaryDetail:
                    'Chương 53 miêu tả tộc của Lý Sinh Khương bị vu nữ Tường Vi tàn phá, những người sử dụng chúng như vật dụng tu luyện dùng một lần. Anh ta giả chết để sống sót, sau đó được Hội Cộng Tế cứu, những người nhận nuôi anh ta như một thú cưng. Trong ba năm, anh ta thành thạo ngôn ngữ của họ, thề trả thù khi Slime bị hàng hóa hóa, làm dịu gánh nặng của Babylon.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ kẻ chạy trốn -> Thú cưng của Hội Cộng Tế, học ngôn ngữ vu.',
                    'Tộc Slime: Từ hoang dã -> Tài nguyên tu luyện được sản xuất hàng loạt của Tường Vi.',
                  ],
                },
                {
                  chapterIndex: 54,
                  summaryDetail:
                    "Chương 54 tiết lộ sự sốc của Lý Sinh Khương khi tình trạng 'thú cưng' Slime của anh ta cho phép anh ta nói, đề xuất liên minh với Hội Cộng Tế chống lại Tường Vi. Hoài nghi, họ tài trợ cho việc hợp nhất của anh ta với máu Evil Eye, nâng anh ta lên vu sư cấp 4 sau một thử thách gian khổ, củng cố quyết tâm dẫn đầu một cuộc nổi dậy.",
                  importantChanges: [
                    'Lý Sinh Khương: Từ thú cưng Slime -> Đồng minh vu sư cấp 4.',
                    'Hội Cộng Tế: Từ người chăm sóc -> Người ủng hộ cuộc nổi loạn của Slime.',
                  ],
                },
                {
                  chapterIndex: 55,
                  summaryDetail:
                    'Chương 55 trải qua nhiều thập kỷ khi Lý Sinh Khương, giờ là Grantham, bí mật phát triển thành vu sư cấp 5, chế tạo thú luyện kim trong khi các thí nghiệm của Tường Vi của Medusa sinh ra nô lệ Bán Thú Nhân. Tình cảnh của Babylon tồi tệ hơn dưới sự cai trị của Adeline, nhưng các máy móc của Grantham gợi ý về một cuộc nổi dậy đang ủ, làm Hứa Chỉ thích thú.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ cấp 4 -> Vu sư cấp 5 Grantham.',
                    'Tường Vi: Từ người cai trị -> Người tạo ra nô lệ Bán Thú Nhân.',
                  ],
                },
              ],
            },
            {
              name: 'Mini-Arc 14: Quân Chủ Luyện Kim và Bình Minh Mới',
              description:
                'Mini-Arc 14 ghi chép sự thăng hoa như sao băng của Lý Sinh Khương với tư cách Grantham, lật đổ Medusa để rèn luyện một kỷ nguyên thống nhất, được thúc đẩy bởi luyện kim, thực hiện tầm nhìn của Hứa Chỉ. Khi Babylon tan rã dưới Adeline, Grantham, giờ là cấp 6, xông vào Vương điện với khinh khí cầu luyện kim, đè bẹp cô ta. Anh ta đối đầu với Medusa, người mà sự thăng tiến lên cấp 7 thất bại trước công nghệ được cung cấp bởi Slime của anh ta, đảm bảo chiến thắng. Được phong là Quân chủ đại đế, anh ta bãi bỏ chế độ nô lệ, thống nhất các vương quốc, và truyền bá luyện kim, trao quyền cho vu nữ truyền thống trong khi giam cầm Medusa. Triều đại của anh ta mở ra một thời đại vàng của máy móc và ma thuật, mặc dù cuộc tìm kiếm trường thọ của anh ta hiện lên khi đồng minh già đi. Hứa Chỉ thích thú với chiến thắng luyện kim này, nhắm đến tiềm năng chữa trị của nó, trong khi Grantham tìm kiếm sự hỗ trợ của người chơi trực tuyến, kết hợp sự thống trị sa bàn của mình với sự tuyệt vọng trong thế giới thực. Mini-arc này hợp nhất các trận chiến sử thi, cải cách xã hội và các yếu tố cá nhân, củng cố luyện kim như nền tảng mới của sa bàn.',
              chapter: [
                {
                  chapterIndex: 56,
                  summaryDetail:
                    'Chương 56 chứng kiến Babylon sụp đổ khi Adeline cướp ngai vàng của Lilith, biến nó thành một quốc gia chư hầu. Grantham, giờ là vu sư cấp 6, can thiệp với khinh khí cầu của mình, áp đảo Adeline với sức mạnh luyện kim, tập hợp Babylon cho cuộc chiến chống Tường Vi khi hy vọng tái sinh giữa người dân của nó.',
                  importantChanges: [
                    'Lilith: Từ vương -> Bị phế truất, nhường cho Adeline.',
                    'Lý Sinh Khương: Từ cấp 5 -> Vu sư cấp 6, cứu tinh của Babylon.',
                  ],
                },
                {
                  chapterIndex: 57,
                  summaryDetail:
                    'Chương 57 đối đầu Grantham với Medusa trong một cuộc đấu tay đôi làm rung chuyển bầu trời. Khinh khí cầu của anh ta va chạm với vu thuật của cô ta, san phẳng phòng thủ của Tường Vi. Medusa triệu hồi bóng ma của Gilgamesh, nhưng quyết tâm của Grantham gợi ý về một lợi thế, khi Babylon xem, bị cuốn hút bởi bài ca của số phận.',
                  importantChanges: [
                    'Medusa: Từ người cai trị không bị thách thức -> Triệu hồi bóng ma của Gilgamesh.',
                    'Lý Sinh Khương: Từ chỉ huy khinh khí cầu -> Đối mặt trực tiếp với Medusa.',
                  ],
                },
                {
                  chapterIndex: 58,
                  summaryDetail:
                    'Chương 58 leo thang khi cấm thuật của Medusa triệu hồi Gilgamesh, chỉ để Grantham xua tan nó với lời nguyền của Circe. Medusa đột phá lên cấp 7 trong tuyệt vọng, nhưng sức mạnh luyện kim của Grantham đè bẹp cô ta, đề nghị dạy cô ta khi Babylon ăn mừng người giải phóng của họ.',
                  importantChanges: [
                    'Medusa: Từ cấp 6 -> Vu sư cấp 7 bị đánh bại.',
                    'Lý Sinh Khương: Từ cấp 6 -> Chiến thắng trước Medusa cấp 7.',
                  ],
                },
                {
                  chapterIndex: 59,
                  summaryDetail:
                    'Chương 59 phong Grantham là Quân chủ đại đế, thống nhất các vương quốc và cấm chế độ nô lệ. Anh ta giam cầm Medusa bằng luyện kim, truyền bá nghề của mình, và thúc đẩy vu nữ truyền thống. Đối mặt với sự hữu hạn của đồng minh, anh ta đăng xuất sau hơn 90 năm sa bàn, tìm kiếm sự hỗ trợ của người chơi trực tuyến.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ kẻ nổi loạn -> Quân chủ đại đế Grantham.',
                    'Babylon: Từ chư hầu -> Vương quốc thống nhất, được trao quyền bởi luyện kim.',
                  ],
                },
                {
                  chapterIndex: 60,
                  summaryDetail:
                    'Chương 60 phản ánh triều đại của Grantham khi Hứa Chỉ suy ngẫm về âm mưu hồi sinh của Circe. Grantham, sau 120 năm sa bàn, cho Lilith về hưu và bế quan, để Babylon được bảo vệ bởi luyện kim. Đói khát trong thực tế, anh ta cầu xin người chơi giải pháp trường thọ, làm sốc nhân viên của mình.',
                  importantChanges: [
                    'Lilith: Từ người cai trị -> Về hưu với Garfield.',
                    'Lý Sinh Khương: Từ người cai trị tích cực -> Bế quan, tìm kiếm trường thọ.',
                  ],
                },
              ],
            },
          ],
        },
      ])
      .concat([
        {
          name: 'Arc 8: Sự Bùng Nổ của Kiến Thức và Khám Phá Vũ Trụ',
          summaryDetail:
            "Arc 8 chứng kiến sự giao thoa giữa hiện thực và sa bàn khi Lý Sinh Khương, sau hơn 100 năm làm Đại đế luyện kim Grantham, khuấy động cộng đồng người chơi bằng những tiết lộ về thế giới vu sư, thúc đẩy cơn sốt học tập toàn cầu. Hứa Chỉ, từ nông dân ung thư giai đoạn cuối, bất ngờ thấy kế hoạch chữa bệnh của mình tiến triển nhờ cư dân mạng phân tích y học từ sa bàn. Lý Sinh Khương kêu gọi giúp đỡ để kéo dài tuổi thọ cho bảy nữ vu, kích hoạt sinh viên y khoa nghiên cứu dược thảo dị giới, biến diễn đàn thành trung tâm tri thức. Trong sa bàn, Grantham đẩy mạnh luyện kim, xây dựng kỳ quan như Adolf và khám phá biên giới thế giới, nhắm đến Achilles trên trời, khiến Hứa Chỉ phải dùng quạt điện ngăn cản. Bản Closed Beta 3.0 ra mắt, mở rộng chỉ tiêu và khơi dậy trí tưởng tượng của người chơi về 'chư thiên vạn giới', với Tốc Độ Xe Akina tiên đoán Hứa Chỉ là Thần Sáng Thế. Arc này kết hợp sự cuồng nhiệt của người chơi, tham vọng của Grantham, và nỗ lực cá nhân của Hứa Chỉ, mở ra kỷ nguyên học thuật và khám phá vũ trụ trong trò chơi lẫn hiện thực.",
          miniArc: [
            {
              name: 'Mini-Arc 15: Cơn Sốt Học Tập và Bí Mật Diễn Đàn',
              description:
                "Mini-Arc 15 xoay quanh sự bùng nổ tri thức trong hiện thực khi Lý Sinh Khương tiết lộ 100 năm ở thế giới vu sư, gây sốc cộng đồng bằng ảnh chụp và kêu gọi nghiên cứu y học để cứu bảy nữ vu. Diễn đàn sôi sục với tranh luận, từ chế nhạo đến kinh ngạc, khi hắn chứng minh thời gian dị giới (một ngày ngoài đời bằng 100 năm trong game) qua hình ảnh chân thực. Sinh viên y khoa toàn cầu dồn sức phân tích dược thảo sa bàn, biến thư viện thành chiến trường học thuật, được truyền thông ca ngợi là hiện tượng yêu thích học tập do 'Bào Tử Tiến Hóa'. Hứa Chỉ, ngạc nhiên trước sự hỗ trợ này, thấy hy vọng chữa ung thư tăng cao, dù hackers tấn công diễn đàn bị Phó não Trùng Sào chặn lại. Trong sa bàn, Grantham củng cố đế chế luyện kim, thiết lập học viện và bảo vệ hệ sinh thái, song mầm mống khám phá bầu trời bắt đầu nhen nhóm. Mini-arc này đánh dấu sự hợp sức giữa người chơi và Hứa Chỉ, thúc đẩy khoa học dị giới và hé lộ tiềm năng rộng lớn của trò chơi.",
              chapter: [
                {
                  chapterIndex: 61,
                  summaryDetail:
                    'Chương 61 mở ra với Lý Sinh Khương đăng bài cầu cứu sau 100 năm trong sa bàn, khiến người chơi chế nhạo vì tưởng hắn điên. Hắn phản pháo bằng ảnh chụp từ rừng Slime đến trận chiến Medusa, chứng minh một ngày ngoài đời bằng 100 năm trong game, làm diễn đàn bùng nổ. Cộng đồng chuyển từ hoài nghi sang cuồng nhiệt, đặt câu hỏi về công nghệ thời gian, trong khi Lý Sinh Khương nhấn mạnh nhu cầu cứu bảy nữ vu bằng y học.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ Đại đế bí ẩn -> Người chơi cầu cứu công khai.',
                    'Diễn đàn: Từ chế nhạo -> Tin tưởng và hỗ trợ Lý Sinh Khương.',
                  ],
                },
                {
                  chapterIndex: 62,
                  summaryDetail:
                    "Chương 62 tiếp tục với Hứa Chỉ ngạc nhiên khi Lý Sinh Khương kể chi tiết 90 năm nghiên cứu luyện kim, đăng ảnh phi thuyền và Grantham. Sinh viên y khoa toàn cầu hưởng ứng, dùng dữ liệu dược thảo của hắn để nghiên cứu thuốc trường thọ, biến thư viện thành trung tâm sôi động. Truyền thông ca ngợi 'Bào Tử Tiến Hóa' khơi dậy đam mê học tập, dù giáo sư ban đầu phủ nhận, chỉ để bị sinh viên vả mặt bằng sự cuồng nhiệt.",
                  importantChanges: [
                    'Lý Sinh Khương: Từ cầu cứu -> Nhận hỗ trợ từ sinh viên y khoa.',
                    'Cộng đồng: Từ hỗn loạn -> Hợp sức nghiên cứu y học dị giới.',
                  ],
                },
                {
                  chapterIndex: 63,
                  summaryDetail:
                    'Chương 63 cho thấy phong ba lan rộng với top tìm kiếm về game và y học. Hứa Chỉ vui mừng khi cư dân mạng giúp phân tích dược thảo, đẩy nhanh hy vọng chữa ung thư. Hackers tấn công diễn đàn nhưng bị Phó não Trùng Sào chặn. Trần Hi đến thăm, lo lắng về chỉ tiêu Beta 3.0, được Hứa Chỉ trấn an bằng lời hứa nhờ bạn chuyên gia, mở đường cho cô vào game.',
                  importantChanges: [
                    'Hứa Chỉ: Từ nông dân ung thư -> Hy vọng chữa bệnh nhờ cư dân mạng.',
                    'Trần Hi: Từ bạn gái địa phương -> Chuẩn bị vào sa bàn.',
                  ],
                },
              ],
            },
            {
              name: 'Mini-Arc 16: Kỷ Nguyên Luyện Kim và Giấc Mơ Chư Thiên',
              description:
                "Mini-Arc 16 tập trung vào tham vọng của Grantham trong sa bàn và sự mơ mộng của người chơi về vũ trụ rộng lớn. Lý Sinh Khương, trở lại sa bàn, biến Babylon thành trung tâm luyện kim với học viện, kỳ quan Adolf, và sách 'Cánh cửa chân lý', thúc đẩy văn minh vượt Sumer. Hắn nhắm đến Achilles trên trời, buộc Hứa Chỉ dùng quạt điện ngăn cản. Trong hiện thực, Beta 3.0 ra mắt, tăng 30 chỉ tiêu, khơi dậy tranh luận về 'chư thiên vạn giới' khi Tốc Độ Xe Akina suy luận Hứa Chỉ là Thần Sáng Thế, liên kết sa bàn nhỏ với thế giới vu sư qua Evil Eye và Gà Đưa Ma. Người chơi cuồng nhiệt tiến hóa thực vật, hiến tế Gà Đưa Ma để lấy lòng Hứa Chỉ, khiến Tốc Độ Xe Akina bị săn lùng. Mini-arc này hòa quyện khát vọng khám phá của Grantham với trí tưởng tượng của cộng đồng, định hình sa bàn thành vũ trụ đa chiều trong mắt người chơi.",
              chapter: [
                {
                  chapterIndex: 64,
                  summaryDetail:
                    "Chương 64 thấy Lý Sinh Khương vào sa bàn, cai trị Babylon năm 415-423, thành lập học viện và sáng tạo Adolf—người luyện kim khổng lồ đào lòng đất. Hắn ra sách 'Cánh cửa chân lý', thúc đẩy luyện kim, rồi tuyên bố khám phá bầu trời tìm Achilles, khiến Hứa Chỉ tức giận lấy quạt điện ngăn cản. Văn minh Babylon đạt đỉnh cao, sánh ngang Sumer.",
                  importantChanges: [
                    'Lý Sinh Khương: Từ logout -> Đại đế Grantham khám phá bầu trời.',
                    'Babylon: Từ thống nhất -> Đỉnh cao luyện kim với Adolf.',
                  ],
                },
                {
                  chapterIndex: 65,
                  summaryDetail:
                    'Chương 65 mô tả Grantham dùng phi thuyền thăm dò Achilles, bị Hứa Chỉ dùng quạt điện đánh rơi. Trong hiện thực, Trần Hi báo bình an, Hứa Chỉ chuẩn bị Beta 3.0 cho cô. Sa bàn nhỏ xuất hiện cây chạy loạn khi Hứa Chỉ về, hé lộ sự sa điêu của người chơi. Hứa Chỉ cân nhắc mở rộng sa bàn và xây nơi ở của thần.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ tham vọng bầu trời -> Bị quạt điện đánh bại.',
                    'Hứa Chỉ: Từ nhàn rỗi -> Lên kế hoạch Beta 3.0 và nơi ở thần.',
                  ],
                },
                {
                  chapterIndex: 67,
                  summaryDetail:
                    'Chương 67 công bố Beta 3.0 với 30 chỉ tiêu mới, đào thải 20 người chơi yếu, làm diễn đàn bùng nổ. Hứa Chỉ yêu cầu luận văn sinh vật học, nhắm khai thác trí tuệ người chơi để tiến hóa giống loài. Hắn nhàn nhã đi mua thức ăn, cười thầm khi cây trong sa bàn chạy loạn, khẳng định vai trò Chu lột da của mình.',
                  importantChanges: [
                    'Hứa Chỉ: Từ chờ đợi -> Khởi động Beta 3.0, khai thác người chơi.',
                    'Diễn đàn: Từ thảo luận -> Sục sôi với Beta 3.0.',
                  ],
                },
                {
                  chapterIndex: 68,
                  summaryDetail:
                    "Chương 68 có Tốc Độ Xe Akina đăng bài suy luận Hứa Chỉ là Thần Sáng Thế, liên kết sa bàn nhỏ với thế giới vu sư qua Evil Eye và Gà Đưa Ma, gọi trò chơi là 'chư thiên vạn giới'. Hắn ca ngợi Lý Sinh Khương và từ điển ngôn ngữ vu sư, làm người chơi sôi sục với bối cảnh rộng lớn, dù Hứa Chỉ ngạc nhiên trước trí tưởng tượng này.",
                  importantChanges: [
                    'Tốc Độ Xe Akina: Từ người chơi -> Nhà suy luận bối cảnh game.',
                    "Cộng đồng: Từ chơi game -> Tin vào 'chư thiên vạn giới'.",
                  ],
                },
                {
                  chapterIndex: 69,
                  summaryDetail:
                    "Chương 69 tiếp nối khi Hứa Chỉ mộng với suy luận của Tốc Độ Xe Akina, xem sa bàn nhỏ là nơi thử nghiệm giống loài cho các thế giới. Hắn vui vẻ để người chơi tự ngược, tiến hóa giống loài, trong khi Tốc Độ Xe Akina hào hứng với ảnh hưởng của Gà Đưa Ma lên Vương quốc Bán Thú Nhân, củng cố lý thuyết 'chư thiên'.",
                  importantChanges: [
                    'Hứa Chỉ: Từ ngạc nhiên -> Hài lòng với người chơi tự ngược.',
                    'Tốc Độ Xe Akina: Từ suy luận -> Tự hào với Gà Đưa Ma.',
                  ],
                },
                {
                  chapterIndex: 70,
                  summaryDetail:
                    "Chương 70 bùng nổ khi người chơi cuồng nhiệt với bối cảnh 'chư thiên', tiến hóa thực vật ngon để lấy lòng Hứa Chỉ. Hứa Chỉ post ẩn danh về Gà Đưa Ma, khiến Tốc Độ Xe Akina bị săn lùng, trốn chạy trong tuyệt vọng. Cây hiến tế Gà Đưa Ma cho Hứa Chỉ, hắn nhàn nhã chiên gà, tận hưởng thành quả.",
                  importantChanges: [
                    'Tốc Độ Xe Akina: Từ kiêu ngạo -> Nạn nhân bị săn lùng.',
                    'Hứa Chỉ: Từ quan sát -> Thụ hưởng Gà Đưa Ma từ người chơi.',
                  ],
                },
              ],
            },
          ],
        },
      ])
      .concat([
        {
          name: 'Arc 9: Sự Hồi Sinh của Đại Đế và Tiềm Năng Siêu Phàm',
          summaryDetail:
            "Arc 9 đánh dấu bước ngoặt khi Lý Sinh Khương, alias Đại đế luyện kim Grantham, đối mặt với tuổi già và âm mưu ám sát từ các thế lực trong sa bàn, buộc anh ta cầu cứu cộng đồng mạng để phản công. Hứa Chỉ, từ người làm ruộng ung thư, chứng kiến trò chơi Bào Tử Tiến Hóa vượt ngoài tầm kiểm soát khi Beta 3.0 thu hút luận văn đột phá như Sinh vật Khối Rubik và Thần nhân tạo, hứa hẹn nâng cao tiềm năng siêu phàm. Trong sa bàn, Grantham suy yếu ở tuổi 221, bị Tường Vi Cứu Thế, Vương quốc Bán Thú Nhân, và giáo phái phản loạn ám sát bằng vu thuật cấm kỵ, dẫn đến hôn mê. Cư dân mạng, từ sinh viên y khoa đến chuyên gia tâm lý và lịch sử, hợp sức cứu anh ta bằng 'Thuốc mở rộng gen thứ ba', dùng máu Phượng Hoàng để phá giới hạn sinh học. Grantham tỉnh lại nhờ ám thị tâm lý, thuyết phục Elmin tin mình là vật nuôi của Đại đế, bắt đầu hành trình tới kho báu bí mật. Arc này kết hợp sự tuyệt vọng của Grantham, sáng tạo của người chơi, và tham vọng của Hứa Chỉ, mở ra kỷ nguyên sinh vật thần thoại và khám phá hệ thống sức mạnh Trùng tộc.",
          miniArc: [
            {
              name: 'Mini-Arc 17: Sự Đột Phá của Beta 3.0 và Cuộc Khủng Hoảng của Grantham',
              description:
                'Mini-Arc 17 mở đầu với Hứa Chỉ xem xét tiềm năng giống loài trong sa bàn nhỏ, kỳ vọng Beta 3.0 khơi dậy sáng tạo từ người chơi trẻ tuổi. Anh duyệt hơn mười nghìn luận văn, chọn Sinh vật Khối Rubik—xương thay kim loại—và Thần nhân tạo—tổ hợp trăm người chơi—như bước tiến vượt bậc, hỗ trợ ý tưởng Achilles trên trời. Trong sa bàn, Grantham, 221 tuổi vào năm 523 Babylon, suy yếu giữa cơn sóng ngầm từ Tường Vi Cứu Thế và Vương quốc Bán Thú Nhân, âm mưu giải phóng Medusa và ám sát anh. Charlotte, phản đồ học viện, dẫn nhóm Tường Vi tấn công, giết đạo sư Morse và cướp tài liệu phong ấn, buộc Elmin lập kế hoạch bảo vệ Grantham. Emery, vua Bán Thú Nhân, dù nhận ơn Grantham, vẫn quyết giết anh để nâng cao địa vị chủng tộc. Hứa Chỉ, dù thương Grantham lương thiện, chọn không can thiệp, để tự nhiên quyết định số phận anh. Mini-arc này hòa quyện sáng tạo ngoài đời với hỗn loạn trong sa bàn, đặt nền móng cho sự sụp đổ và hồi sinh của Grantham.',
              chapter: [
                {
                  chapterIndex: 71,
                  summaryDetail:
                    'Chương 71 cho thấy Hứa Chỉ ăn Gà Đưa Ma, theo dõi diễn đàn và duyệt luận văn Beta 3.0. Anh nhận ra giống loài sa bàn yếu, kỳ vọng người chơi trẻ tạo đột phá. Hai luận văn nổi bật: Sinh vật Khối Rubik của giáo sư sinh vật học—xương cứng như thép—và Thần nhân tạo của tác giả ẩn danh—tổ hợp trăm người chơi thành sinh vật khổng lồ cấp tám thần thoại. Phó não xác nhận tính khả thi, làm Hứa Chỉ phấn khích với tiềm năng siêu phàm.',
                  importantChanges: [
                    'Hứa Chỉ: Từ quan sát -> Chọn giống loài đột phá cho Beta 3.0.',
                    'Người chơi: Từ yếu kém -> Đề xuất Sinh vật Khối Rubik và Thần nhân tạo.',
                  ],
                },
                {
                  chapterIndex: 72,
                  summaryDetail:
                    'Chương 72 tiếp tục với Hứa Chỉ ủng hộ Thần nhân tạo, thấy cơ hội xây Achilles. Anh công bố 50 chỉ tiêu Beta 3.0, rồi quan sát Grantham ở tuổi 221, năm 523 Babylon. Grantham suy yếu, đối mặt âm mưu từ Tường Vi Cứu Thế muốn cứu Medusa và các phe phản loạn. Hứa Chỉ lo anh gây chuyện như Gilgamesh, nhưng thấy anh bị vây khốn, cả thế giới chĩa mũi dùi vào vị Đại đế lương thiện.',
                  importantChanges: [
                    'Hứa Chỉ: Từ duyệt luận văn -> Lo Grantham gây loạn khi già.',
                    'Lý Sinh Khương: Từ Đại đế hùng mạnh -> Grantham suy yếu, bị phản bội.',
                  ],
                },
                {
                  chapterIndex: 73,
                  summaryDetail:
                    'Chương 73 mô tả Tường Vi Cứu Thế tấn công học viện, Charlotte giết Morse, cướp tài liệu phong ấn Medusa. Elmin chứng kiến đạo sư chết, lập đội truy kích Charlotte thất bại. Emery, vua Bán Thú Nhân, dù nhận ơn Grantham, quyết ám sát anh vì danh dự chủng tộc bị khinh miệt. Hứa Chỉ bất đắc dĩ trước lòng người ác độc, nhận ra Grantham quá nhân từ, thiếu thủ đoạn Đế vương.',
                  importantChanges: [
                    'Charlotte: Từ thiên tài học viện -> Phản đồ giết Morse.',
                    'Emery: Từ trung thành -> Lãnh đạo Bán Thú Nhân phản Grantham.',
                  ],
                },
              ],
            },
            {
              name: 'Mini-Arc 18: Sự Phản Công của Grantham và Sức Mạnh Cộng Đồng',
              description:
                "Mini-Arc 18 xoay quanh sự sụp đổ và hồi sinh của Grantham, được cộng đồng mạng hỗ trợ. Năm 527 Babylon, anh bị bảy vu sư cấp sáu ám sát bằng 13 vu thuật cấm kỵ, hóa thành xương trắng trước mặt Elmin, rồi tỉnh lại trong hình dạng Slime nhờ ám thị tâm lý từ chuyên gia mạng. Anh cầu cứu diễn đàn, nhận ý kiến từ sinh viên y khoa đề xuất 'Thuốc mở rộng gen thứ ba' với máu Phượng Hoàng, phá giới hạn sinh học để đạt cấp tám thần thoại. Hứa Chỉ khám phá hệ thống Trùng tộc, cân nhắc công pháp siêu phàm thay thuốc. Grantham thuyết phục Elmin bằng vai vật nuôi, bắt đầu chạy trốn đến kho báu. Chuyên gia lịch sử cảnh báo cạm bẫy, sở nghiên cứu bí mật điều tra trò chơi, xác nhận tính chân thực vượt tưởng tượng. Mini-arc này kết hợp tuyệt vọng của Grantham, sáng tạo của cư dân mạng, và tham vọng của Hứa Chỉ, mở đường cho sinh vật thần thoại và phản công vĩ đại.",
              chapter: [
                {
                  chapterIndex: 74,
                  summaryDetail:
                    'Chương 74 thấy Grantham bị ám sát trong Vương điện năm 527 khi gặp Elmin, quán quân thi đấu vu sư. Hứa Chỉ buồn cho anh lương thiện bị phản bội bởi Tường Vi và Bán Thú Nhân, dù anh không tàn bạo như Gilgamesh. Elmin quyết bảo vệ anh từ Charlotte, nhưng anh tan rã trước mắt cô, gây hỗn loạn Vương điện.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ Đại đế -> Bị ám sát, hóa xương trắng.',
                    'Elmin: Từ quán quân -> Quyết bảo vệ Grantham.',
                  ],
                },
                {
                  chapterIndex: 75,
                  summaryDetail:
                    'Chương 75 tiếp diễn với ba vu sư cấp sáu Babylon truy lùng thích khách bằng Vườn treo, phát hiện bảy kẻ phản loạn triệu người khổng lồ Willie phá lưới điện. Elmin buồn bã, nhặt Slime Grantham hôn mê. Anh đăng bài cầu cứu, kể bị ám sát, chạy trốn thành Slime, làm diễn đàn sôi sục. Hứa Chỉ bất ngờ trước ý chí sống sót của anh.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ bị ám sát -> Slime hôn mê, cầu cứu mạng.',
                    'Ba vu sư Babylon: Từ trấn thủ -> Truy sát phản loạn.',
                  ],
                },
                {
                  chapterIndex: 76,
                  summaryDetail:
                    "Chương 76 cho thấy Hứa Chỉ thản nhiên trước cầu cứu của Grantham, cho rằng vô ích. Diễn đàn và Zhihu sôi trào, cư dân mạng từ trêu chọc đến nghiêm túc nghĩ cách. Sinh viên y khoa đề xuất 'Thuốc mở rộng gen thứ ba', Hứa Chỉ ngạc nhiên trước sự tàng long ngọa hổ của cộng đồng, dù không muốn can thiệp.",
                  importantChanges: [
                    'Cộng đồng mạng: Từ chế nhạo -> Hợp sức cứu Grantham.',
                    'Hứa Chỉ: Từ thản nhiên -> Ngạc nhiên với cư dân mạng.',
                  ],
                },
                {
                  chapterIndex: 77,
                  summaryDetail:
                    "Chương 77 có Hứa Chỉ hỏi Phó não về 'Thuốc mở rộng gen', hiểu hệ thống Trùng tộc chia sức mạnh theo số gen, cấp tám cần gen thứ ba. Anh cân nhắc công pháp siêu phàm thay thuốc. Grantham kích động khi sinh viên y khoa đề xuất máu Phượng Hoàng, đăng bài hứa livestream phản công, làm diễn đàn sôi sục.",
                  importantChanges: [
                    'Hứa Chỉ: Từ quan sát -> Lên kế hoạch sinh vật thần thoại.',
                    'Lý Sinh Khương: Từ tuyệt vọng -> Kích động với thuốc gen.',
                  ],
                },
                {
                  chapterIndex: 78,
                  summaryDetail:
                    'Chương 78 tiếp tục với sinh viên y khoa xác định máu Phượng Hoàng dọn gen rác, cần dược vật phụ trợ. Grantham tiết lộ kho báu chứa máu này. Chuyên gia tâm lý đề xuất ám thị tỉnh lại, anh thành công, thấy mình trong bình dưa muối của Elmin sau nửa tháng hôn mê, đăng ảnh xác nhận an toàn.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ hôn mê -> Tỉnh lại nhờ ám thị.',
                    'Elmin: Từ buồn bã -> Cứu Slime Grantham.',
                  ],
                },
                {
                  chapterIndex: 79,
                  summaryDetail:
                    "Chương 79 bùng nổ khi cộng đồng đề xuất Grantham tìm ba vu sư Babylon, nhưng chuyên gia lịch sử cảnh báo nội gián. Anh quyết trốn khỏi Babylon, nhờ Elmin bảo vệ đến kho báu. Ý kiến 'Ta, Đại đế, thu tiền' gây cười, Hứa Chỉ đề xuất giả vật nuôi, được tán thành. Chuyên gia các ngành tham gia, xác nhận trò chơi chân thực.",
                  importantChanges: [
                    'Lý Sinh Khương: Từ cầu cứu -> Quyết trốn với Elmin.',
                    'Cộng đồng: Từ hỗn loạn -> Đưa ý kiến chiến lược.',
                  ],
                },
                {
                  chapterIndex: 80,
                  summaryDetail:
                    'Chương 80 kết thúc với chuyên gia ngôn ngữ soạn lời thoại, Grantham thuyết phục Elmin tin anh là vật nuôi của Đại đế, được cô đồng ý bảo vệ. Anh đăng ảnh thành công, làm cư dân mạng phấn khích. Sở nghiên cứu xác nhận tính chân thực của sa bàn, Lý Sinh Khương từ chối hội nghị công ty, triệt để ỷ lại cộng đồng.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ Slime yếu -> Được Elmin bảo vệ.',
                    'Elmin: Từ nghi ngờ -> Tin Slime là vật nuôi Đại đế.',
                  ],
                },
              ],
            },
          ],
        },
      ])
      .concat([
        {
          name: 'Arc 10: Hành Trình Phản Công và Sự Ra Đời của Cự Thần',
          summaryDetail:
            "Arc 10 đánh dấu sự trở lại đầy ngoạn mục của Lý Sinh Khương, Đại đế luyện kim Grantham, sau khi bị ám sát và sống sót nhờ cộng đồng mạng. Với 'Thuốc mở rộng gen thứ hai' từ máu Phượng Hoàng, anh vượt qua giới hạn sinh học, dung nhập gen Gà Đưa Ma, hóa Slime thiên sứ, và trở về Babylon năm 539 ở tuổi thanh xuân, đòi kẻ phản loạn thỉnh tội. Hứa Chỉ, từ nông dân ung thư, đối mặt với sóng ngầm từ các quốc gia nghiên cứu sa bàn, coi nó là thế giới thực để thuộc địa hóa. Anh từ chối gián điệp quốc gia vào Beta 3.0, nhưng không thể ngăn người chơi tự tổ chức kế hoạch xuyên qua thế giới vu sư bằng tổ hợp sinh vật khổng lồ—cự thần cao sáu ngàn trượng. Dưới sự dẫn dắt của Học Cũng Uổng Công, 173 người chơi hợp sức xây thuyền sinh mệnh, tiến hóa thành Leviathan, dù nội bộ hỗn loạn khi xương cốt tự cử động. Arc này kết hợp phản công của Grantham, tham vọng toàn cầu, và sáng tạo điên rồ của người chơi, mở ra tiềm năng thần thoại và thách thức quyền kiểm soát của Hứa Chỉ.",
          miniArc: [
            {
              name: 'Mini-Arc 19: Sự Quật Khởi của Grantham và Sóng Ngầm Quốc Tế',
              description:
                "Mini-Arc 19 xoay quanh sự hồi sinh của Lý Sinh Khương sau ám sát, nhờ cộng đồng mạng và Elmin. Anh chế khôi giáp Grantham cho Elmin, nâng cô lên cấp sáu, trốn đến kho báu bí mật qua dãy núi Arthur, vượt qua mai phục nhờ tuyến đường cư dân mạng chọn. Năm 529 Babylon, anh thử nghiệm 'Thuốc mở rộng gen thứ hai', thành công sống lại đời thứ hai, trở về năm 539 với hình dạng thanh niên, buộc kẻ phản loạn quỳ xin. Hứa Chỉ bất ngờ khi các quốc gia coi sa bàn là thế giới thực, lập sở nghiên cứu để thuộc địa hóa, nhắm đào tạo Đại đế mới. Anh từ chối gián điệp vào Beta 3.0, nhưng tưởng tượng tương lai Chư Thiên Vạn Giới trong vườn trái cây, nơi các nước tranh giành. Grantham kết hôn với bảy nữ vu, hoàn mỹ khép lại hành trình. Mini-arc này hòa quyện nỗ lực cá nhân của Grantham, sự hỗ trợ tập thể, và căng thẳng địa chính, đặt nền móng cho những biến động lớn hơn.",
              chapter: [
                {
                  chapterIndex: 81,
                  summaryDetail:
                    'Chương 81 mở đầu với cư dân mạng khuyên Lý Sinh Khương chế khôi giáp Grantham cho Elmin, nâng cô từ cấp năm lên sáu để bảo vệ anh đến kho báu. Anh mất một tháng trong sa bàn (ba phút ngoài đời) làm khôi giáp, đăng ảnh người máy cao ba mét, rồi khoe kỳ quan Adolf và Vườn treo Babylon, gây sốt mạng. Sở nghiên cứu phân tích ảnh, muốn hợp tác nhưng bị anh từ chối. Hứa Chỉ ngạc nhiên khi họ tin sa bàn là thế giới thực với Thần Sáng Thế khủng bố.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ Slime yếu -> Chế khôi giáp cho Elmin.',
                    'Elmin: Từ cấp năm -> Chuẩn bị lên cấp sáu nhờ khôi giáp.',
                  ],
                },
                {
                  chapterIndex: 82,
                  summaryDetail:
                    'Chương 82 tiếp tục với Hứa Chỉ bất đắc dĩ khi quốc gia nhắm thuộc địa hóa sa bàn, coi anh là Thần yếu chỉ biết làm ruộng. Lý Sinh Khương đăng bài hỏi đường đến kho báu, chọn tuyến vòng qua dãy núi Arthur nhờ cư dân mạng, tránh mai phục. Anh chụp lén Elmin tắm, gây sốt fan. Hứa Chỉ từ chối gián điệp quốc gia vào Beta 3.0, tưởng tượng tương lai chiến tranh thế giới trong vườn trái cây.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ trốn chạy -> Tránh mai phục nhờ mạng.',
                    'Hứa Chỉ: Từ quan sát -> Quyết kiềm chế gián điệp quốc gia.',
                  ],
                },
                {
                  chapterIndex: 83,
                  summaryDetail:
                    "Chương 83 mô tả Lý Sinh Khương và Elmin đến kho báu năm 529 Babylon sau sáu năm trốn chạy. Anh thử nghiệm 'Thuốc mở rộng gen thứ hai', livestream quá trình, được cư dân mạng cổ vũ phá định luật vu sư. Hứa Chỉ tiếp tục kiềm chế gián điệp Beta 3.0, lo các quốc gia vượt công nghệ nhờ sa bàn. Elmin được fan yêu mến, đòi làm Đại đế kế tiếp.",
                  importantChanges: [
                    'Lý Sinh Khương: Từ trốn chạy -> Chuẩn bị dùng thuốc gen.',
                    'Elmin: Từ bảo vệ -> Trở thành nữ thần trong mắt fan.',
                  ],
                },
                {
                  chapterIndex: 84,
                  summaryDetail:
                    'Chương 84 chứng kiến Lý Sinh Khương thành công dùng thuốc, hóa Slime thiên sứ với gen Gà Đưa Ma sau cơn đau đớn, được Elmin xác nhận là Đại đế. Anh trở về Babylon năm 539, đòi kẻ phản loạn thỉnh tội. Elmin tiết lộ lòng ngưỡng mộ anh từ nhỏ. Cư dân mạng vui mừng trước bước ngoặt lịch sử này.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ Slime yếu -> Thanh niên Slime thiên sứ.',
                    'Elmin: Từ nghi ngờ -> Xác nhận Grantham là Đại đế.',
                  ],
                },
                {
                  chapterIndex: 85,
                  summaryDetail:
                    'Chương 85 kết thúc với Grantham thống trị Babylon, kết hôn bảy nữ vu trong Vườn treo năm 539, khép lại 12 năm hỗn loạn. Dân chúng tôn sùng anh sống đời thứ hai. Anh bỏ khôi giáp, làm Slime đáng yêu bên Elizabeth. Cư dân mạng xúc động trước kết cục mỹ mãn. Hứa Chỉ lo anh không đạt cấp bảy, chuẩn bị kế hoạch mới cho Beta 3.0.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ Đại đế -> Slime gia đình bên bảy nữ vu.',
                    'Babylon: Từ hỗn loạn -> Ổn định dưới Grantham trẻ.',
                  ],
                },
              ],
            },
            {
              name: 'Mini-Arc 20: Kế Hoạch Tạo Thần và Sự Hỗn Loạn của Người Chơi',
              description:
                'Mini-Arc 20 tập trung vào tham vọng của người chơi Beta 3.0, dẫn đầu bởi Học Cũng Uổng Công, tổ chức công hội bào tử để xuyên qua thế giới vu sư bằng cự thần tổ hợp. Hứa Chỉ dự đoán Grantham không đạt cấp bảy, chuyển sang theo dõi sa bàn nhỏ, nơi người chơi họp bí mật. 173 người xây thuyền sinh mệnh, tự sát thành bào tử, tiến hóa thành Leviathan cao sáu ngàn trượng, với 13 đại lão như Tốc Độ Xe Akina kiểm soát cơ bắp. Trần Hi tham gia làm tóc, nhưng Hứa Chỉ từ chối, âm mưu cài cô làm gián điệp. Cự thần hình thành, nhưng xương cốt tự cử động, gây hỗn loạn. Các quốc gia ép bảy gián điệp vào, bị Hứa Chỉ lợi dụng làm công. Mini-arc này kết hợp sáng tạo tập thể, dã tâm cá nhân, và mất kiểm soát, thách thức vai trò Thần Sáng Thế của Hứa Chỉ.',
              chapter: [
                {
                  chapterIndex: 87,
                  summaryDetail:
                    'Chương 87 bắt đầu ngày thứ hai Beta 3.0, Hứa Chỉ phát hiện bảy gián điệp quốc gia trong 50 chỉ tiêu, lo họ thành Đại đế mới. Người chơi mới vây quanh anh, Trần Hi vào sa bàn làm thằn lằn đỏ. Họ họp bí mật, âm mưu xuyên qua thế giới vu sư, khiến Hứa Chỉ bất ngờ trước dã tâm lớn dần qua các phiên bản.',
                  importantChanges: [
                    'Hứa Chỉ: Từ quan sát -> Lo gián điệp quốc gia.',
                    'Người chơi: Từ sa điêu -> Lên kế hoạch xuyên thế giới.',
                  ],
                },
                {
                  chapterIndex: 88,
                  summaryDetail:
                    'Chương 88 tiếp diễn với bài post của Học Cũng Uổng Công, kêu gọi tổ đội thành cự thần xuyên thế giới dựa trên luận văn cũ. Hứa Chỉ và Trần Hi tham gia họp, thấy 173 người đồng ý. Cư dân mạng phấn khích trước kế hoạch hợp thể. Hứa Chỉ từ chối tham gia, thúc Trần Hi du lịch dị giới, âm mưu cài cô làm gián điệp.',
                  importantChanges: [
                    'Học Cũng Uổng Công: Từ người chơi -> Lãnh đạo công hội.',
                    'Trần Hi: Từ thằn lằn -> Tham gia kế hoạch tạo Thần.',
                  ],
                },
                {
                  chapterIndex: 89,
                  summaryDetail:
                    'Chương 89 ghi lại hội nghị tạo Thần, Học Cũng Uổng Công và Tốc Độ Xe Akina nhắm cự thần vạn trượng. 173 người chơi chặt cây, xây thuyền trong 10 giờ livestream. Hứa Chỉ lo bảy gián điệp trong 13 đại lão cơ bắp, chọn Trần Hi làm tóc để kiềm chế. Thuyền hoàn thành, chuẩn bị tiến hóa.',
                  importantChanges: [
                    'Người chơi: Từ họp -> Xây thuyền sinh mệnh.',
                    'Hứa Chỉ: Từ quan sát -> Lên kế hoạch cài gián điệp.',
                  ],
                },
                {
                  chapterIndex: 90,
                  summaryDetail:
                    'Chương 90 chứng kiến thuyền tiến hóa thành Leviathan cao sáu ngàn trượng sau vài giờ, với xương cốt từ san hô, cơ bắp từ 13 đại lão. Hứa Chỉ gọi nó là Thần Hải Dương, nhưng nội bộ hỗn loạn khi xương tự cử động. Anh xác nhận Học Cũng Uổng Công không phải gián điệp, bình thản theo dõi kế hoạch vượt tầm kiểm soát.',
                  importantChanges: [
                    'Người chơi: Từ thuyền -> Leviathan hỗn loạn.',
                    'Cự thần: Từ ý tưởng -> Thực thể ngụy cấp tám.',
                  ],
                },
              ],
            },
          ],
        },
      ])
      .concat([
        {
          name: 'Arc 11: Sự Kết Thúc của Đại Đế và Sự Hỗn Loạn của Tà Thần',
          summaryDetail:
            "Arc 11 chứng kiến sự kết thúc huy hoàng của Lý Sinh Khương, tức Đại đế luyện kim Grantham, sau hơn 500 năm trị vì Babylon, và sự xuất hiện của Tà Thần Cthulhu do 173 người chơi Beta 3.0 tạo ra, gây hỗn loạn thế giới vu sư. Grantham, sống sót nhờ 'Thuốc mở rộng gen thứ hai', qua đời năm 804, để lại Elmin kế vị và Medusa trỗi dậy từ phong ấn. Hứa Chỉ lợi dụng cái chết của Grantham để hoàn thiện thế giới quan, dùng Tà Thần làm minh chứng cho sự khủng khiếp của thần linh. Trong khi đó, người chơi hợp sức diễn hóa Tà Thần cao sáu ngàn trượng, sở hữu bốn gen nghịch thiên, vượt xa anh hùng Trùng tộc, nhưng nội bộ tan rã vì xương cốt tự ý hành động. Họ tiến vào thế giới vu sư, truy sát Phượng Hoàng lấy máu, nhắm gặp Elmin xin chữ ký, gây kinh hoàng cho Medusa và Elmin. Phan Vũ Tiên, dưới tên Pandora, bí mật tạo sinh vật Rubik, âm mưu giúp Charlotte đánh bại Tà Thần và Elmin. Các quốc gia Trái Đất tranh giành quyền khống chế Tà Thần để thuộc địa hóa sa bàn, buộc Hứa Chỉ phải can thiệp, làm yếu Tà Thần để giữ cân bằng. Arc này kết hợp sự ra đi của một huyền thoại, tham vọng toàn cầu, và xung đột siêu phàm, mở ra thời đại mới đầy biến động.",
          miniArc: [
            {
              name: 'Mini-Arc 21: Sự Ra Đời và Hỗn Loạn của Tà Thần',
              description:
                "Mini-Arc 21 tập trung vào sự hình thành và mất kiểm soát của Tà Thần Cthulhu do 173 người chơi Beta 3.0 tạo ra. Ban đầu, Tà Thần tan rã khi xương cốt, da thịt tự ý chạy trốn, nhưng sau khi lắp ráp lại, họ hoàn thiện sinh vật lưỡng cư khổng lồ với bốn gen nghịch thiên: không thể nhìn thẳng, thay đổi hình thể, nhỏ máu sống lại, và trường tồn. Hứa Chỉ kinh ngạc trước tiềm lực vượt anh hùng Trùng tộc, nhưng lo lắng khi nó có thể hủy diệt sa bàn. Người chơi nhắm tiến vào thế giới vu sư, dung nhập gen thứ hai để tăng sức mạnh, dự định gặp Elmin. Trong khi đó, Grantham qua đời năm 804 sau 500 năm trị vì, giao phó Elmin đối phó Medusa, và được Thần trí tuệ Mercury tiễn biệt. Phan Vũ Tiên, với sinh vật Rubik, âm thầm vào sa bàn hỗ trợ Charlotte. Các quốc gia Trái Đất nhắm khống chế Tà Thần qua bảy gián điệp trong 'Hội nghị bàn tròn mười ba người'. Mini-arc này hòa quyện sáng tạo điên rồ của người chơi, sự kết thúc của Grantham, và sóng ngầm địa chính, đặt nền móng cho hỗn loạn sắp tới.",
              chapter: [
                {
                  chapterIndex: 91,
                  summaryDetail:
                    'Chương 91 mô tả Tà Thần tan rã khi xương cốt, da thịt tự chạy trốn, gây cười cho người xem livestream. Tốc Độ Xe Akina ra lệnh lắp ráp lại, hoàn thiện sinh vật lưỡng cư cao sáu ngàn trượng. Người chơi thảo luận dung nhập gen thứ hai như Evil Eye, Slime, Gà Đưa Ma để tăng sức mạnh. Hứa Chỉ phát hiện Tà Thần có bốn gen nghịch thiên, vượt xa Phượng Hoàng, lo nó hủy diệt sa bàn.',
                  importantChanges: [
                    'Tà Thần: Từ tan rã -> Lắp ráp hoàn thiện.',
                    'Hứa Chỉ: Từ quan sát -> Lo lắng Tà Thần mất kiểm soát.',
                  ],
                },
                {
                  chapterIndex: 92,
                  summaryDetail:
                    'Chương 92 phân tích bốn gen của Tà Thần: không thể nhìn thẳng gây điên loạn, thay đổi hình thể vô hạn, nhỏ máu sống lại bất tử, và trường tồn vĩnh cửu. Hứa Chỉ nhận ra nó mạnh hơn anh hùng Trùng tộc, nhưng không thể khuất phục do thiếu trí tuệ. Người chơi thất vọng vì chưa nhận thưởng, quyết tập di chuyển để hoàn thiện. Lý Sinh Khương qua đời năm 804, được Mercury tiễn biệt.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ sống 500 năm -> Qua đời năm 804.',
                    'Người chơi: Từ thất vọng -> Tập di chuyển Tà Thần.',
                  ],
                },
                {
                  chapterIndex: 93,
                  summaryDetail:
                    'Chương 93 diễn ra năm 700 Babylon, Grantham sống yên bình 400 năm với bảy nữ vu. Đến năm 704, bảy nữ vu qua đời, Grantham chôn Vườn treo Babylon cùng họ trong Tartarus. Năm 800, ông vẫn mạnh mẽ ở tuổi 500, nhưng Medusa lo ông hầm chết mình dù đã 650 tuổi nhờ nghiên cứu tử vong.',
                  importantChanges: [
                    'Bảy nữ vu: Từ sống -> Qua đời năm 704.',
                    'Grantham: Từ trị vì -> Chôn Vườn treo Babylon.',
                  ],
                },
                {
                  chapterIndex: 94,
                  summaryDetail:
                    'Chương 94 ghi lại năm 804, Grantham qua đời ở tuổi 500, giao Elmin đối phó Medusa và thả Tà Thần vào làm thiên tai thứ tư. Ông gặp Mercury trước khi chết, hài lòng với di sản. Elmin lên ngôi, được fan người chơi sùng bái. Medusa lo Grantham hầm chết mình, chuẩn bị phá phong ấn.',
                  importantChanges: [
                    'Grantham: Từ trị vì -> Qua đời, giao Elmin nhiệm vụ.',
                    'Elmin: Từ đệ tử -> Quân chủ Đại đế kế tiếp.',
                  ],
                },
                {
                  chapterIndex: 95,
                  summaryDetail:
                    'Chương 95 kể về phản ứng sau cái chết của Grantham: người khóc, kẻ mừng, nhưng đều kính trọng. Medusa vui vì thoát bóng ma, kính ông bằng nước, chờ 100 ngày để phá phong ấn. Lý Sinh Khương tỉnh lại sau 5 ngày thực, tinh thần mạnh mẽ phản hồi từ sa bàn. Hứa Chỉ chuẩn bị cho Elmin đối phó kẻ nổi loạn.',
                  importantChanges: [
                    'Lý Sinh Khương: Từ trong game -> Tỉnh lại ngoài đời.',
                    'Medusa: Từ phong ấn -> Chuẩn bị phá phong ấn.',
                  ],
                },
              ],
            },
            {
              name: 'Mini-Arc 22: Sự Xâm Lấn của Tà Thần và Tham Vọng Quốc Tế',
              description:
                'Mini-Arc 22 xoay quanh sự xâm nhập của Tà Thần vào thế giới vu sư và tham vọng thuộc địa hóa của các quốc gia Trái Đất. Năm 805 Babylon, Elmin trấn áp nổi loạn bằng cấp bảy sử thi, nhưng Medusa tái xuất, đánh bại cô và chiếm Vương quốc Tường Vi. Tà Thần tiến vào, khiến nữ vu nhìn thấy phát điên, nhắm Phượng Hoàng lấy máu gặp Elmin. Hứa Chỉ dự định làm yếu Tà Thần để giữ cân bằng, dùng máy bay giả Achilles. Phan Vũ Tiên, dưới tên Pandora, trà trộn cứu Charlotte, chống Tà Thần. Các sở nghiên cứu Trung Quốc, Nhật, Nga, Mỹ tranh quyền khống chế Tà Thần qua bảy gián điệp, nhắm phát triển khoa học nhờ dòng thời gian. Tà Thần đánh bại Phượng Hoàng Bán Thần, chuẩn bị gặp Elmin, nhưng bị Hứa Chỉ lên kế hoạch phân tán. Mini-arc này kết hợp xung đột siêu phàm, âm mưu cá nhân, và địa chính toàn cầu, đẩy thế giới vu sư vào hỗn loạn mới.',
              chapter: [
                {
                  chapterIndex: 96,
                  summaryDetail:
                    "Chương 96 cho thấy Tà Thần di chuyển thành thạo trong sa bàn nhỏ, nhận thưởng 'Vạn Vật Quy Nhất Giả', chọn vào thế giới vu sư gặp Elmin. Người chơi suýt gây loạn trên ghế Hứa Chỉ. Sở nghiên cứu Trung Quốc xác định Lý Sinh Khương là Grantham, bảo vệ ông và nhận thông tin thế giới vu sư, nhưng ông giữ bí mật Grantham.",
                  importantChanges: [
                    'Tà Thần: Từ tân thủ -> Nhận thưởng, vào thế giới vu sư.',
                    'Lý Sinh Khương: Từ ẩn danh -> Được sở xác nhận.',
                  ],
                },
                {
                  chapterIndex: 97,
                  summaryDetail:
                    "Chương 97 mô tả các quốc gia nhắm khống chế Tà Thần qua bảy gián điệp trong 'Hội nghị bàn tròn mười ba người'. Tà Thần quá lớn, không qua thông đạo, buộc tách nhỏ để vào rừng nguyên thủy vu sư. Người chơi lắp ráp lại, nhắm đánh Medusa, xin chữ ký Elmin. Bảy gián điệp thăm dò lẫn nhau, kiểm tra dòng thời gian.",
                  importantChanges: [
                    'Tà Thần: Từ sa bàn -> Vào thế giới vu sư.',
                    'Bảy gián điệp: Từ ẩn danh -> Thăm dò lẫn nhau.',
                  ],
                },
                {
                  chapterIndex: 98,
                  summaryDetail:
                    'Chương 98 giới thiệu Phan Vũ Tiên (Pandora), fan Charlotte, vào sa bàn với Rubik để cứu Charlotte, chống Tà Thần và Elmin. Tà Thần gây kinh hoàng, Hứa Chỉ dự định cài người thâm hiểm hơn bảy gián điệp. Pandora hóa rắn sắt, nhắm ngục Carlson, muốn cùng Charlotte chia sẻ sức mạnh từ Rubik.',
                  importantChanges: [
                    'Phan Vũ Tiên: Từ người chơi -> Pandora chống Tà Thần.',
                    'Charlotte: Từ bị giam -> Mục tiêu Pandora cứu.',
                  ],
                },
                {
                  chapterIndex: 99,
                  summaryDetail:
                    'Chương 99 diễn ra năm 805, Elmin lên ngôi nhưng bị Medusa đánh bại, chiếm Tường Vi. Medusa phát hiện Tà Thần qua nữ vu Mobel phát điên, đọc ký ức thấy sinh vật không thể nhìn thẳng. Tà Thần nhắm Phượng Hoàng, Medusa lo nó giết thần, cầu cứu Hermes ở Babylon cùng Elmin.',
                  importantChanges: [
                    'Elmin: Từ Đại đế -> Thua Medusa.',
                    'Medusa: Từ phong ấn -> Chiếm Tường Vi, gặp Tà Thần.',
                  ],
                },
                {
                  chapterIndex: 100,
                  summaryDetail:
                    'Chương 100 tiếp tục với Medusa nhận ra Tà Thần là thiên tai bị động, ra lệnh nữ vu bịt mắt tai tránh điên loạn. Tà Thần đánh bại Phượng Hoàng Bán Thần, lấy máu làm quà gặp Elmin. Medusa và Elmin cầu Hermes, Hứa Chỉ dùng máy bay giả Achilles, dự định làm yếu Tà Thần để cân bằng.',
                  importantChanges: [
                    'Tà Thần: Từ tiến hóa -> Đánh bại Phượng Hoàng.',
                    'Hứa Chỉ: Từ quan sát -> Lên kế hoạch làm yếu Tà Thần.',
                  ],
                },
              ],
            },
          ],
        },
      ]),
  },
  {
    title: 'Mỗi người một tinh cầu',
    chapter: [
      {
        name: 'Kỷ Nguyên Thức Tỉnh',
        summaryDetail:
          'Câu chuyện mở ra trong một thế giới kỳ ảo nơi con người, khi đủ 18 tuổi, có cơ hội thức tỉnh một tinh cầu cá nhân – một thiên thể mà họ có thể phát triển thành một nền văn minh bằng cách chuyển hóa năng lượng bản nguyên thành các dạng sức mạnh khác nhau. Arc này tập trung vào Giang Phàm, một người xuyên không đã thích nghi với thế giới này sau hơn nửa năm. Tại trường trung học Thất Trung Giang Thành, các học sinh háo hức tham gia nghi thức thức tỉnh tinh cầu, một sự kiện quyết định tương lai của họ: thành công sẽ trở thành Chủ Tinh Cầu với lãnh địa riêng, thất bại thì mãi là dân thường. Nghi thức cho thấy nhiều kết quả khác nhau – từ những tinh cầu vượt 30 km đường kính, đủ sức chuyển hóa năng lượng cao cấp như Linh Khí, đến những tinh cầu nhỏ bé, tiềm năng thấp. Giang Phàm, vốn không nổi bật, thức tỉnh một tinh cầu nhỏ chưa tới 1 km, khiến mọi người nghi ngờ khả năng của anh. Tuy nhiên, Hệ thống Thôi Diễn Thần Cấp bất ngờ kích hoạt, mang đến cho anh những con đường tiến hóa độc đáo. Thay vì chọn năng lượng siêu phàm truyền thống, anh chọn lộ tuyến khoa học kỹ thuật, biến tinh cầu cằn cỗi thành một hành tinh có sự sống, đặt tên là Lam Tinh. Sau khi vượt qua kỳ vọng với tinh cầu đạt 35.2 km, anh nhận được sự chú ý lớn từ trường học và các thế lực bên ngoài, mở ra con đường phát triển đầy triển vọng nhưng cũng đầy thách thức.',
        miniArc: [
          {
            name: 'Ngày Thức Tỉnh',
            description:
              'Mini-arc này xoay quanh ngày thức tỉnh tinh cầu tại Thất Trung Giang Thành, nơi các học sinh 18 tuổi đối mặt với cơ hội thay đổi số phận. Câu chuyện bắt đầu bằng tin tức về một nữ thần từ Nhất Trung thức tỉnh tinh cầu 33 km, lập kỷ lục mới, làm dấy lên sự ngưỡng mộ và kỳ vọng. Tại Thất Trung, không khí tràn ngập hồi hộp khi học sinh chờ đợi lượt mình trong phòng thức tỉnh. Giang Phàm, nhân vật chính, quan sát mọi thứ với vẻ điềm tĩnh của một người xuyên không đã quen với thế giới này. Anh bước vào nghi thức với hy vọng, nhưng tinh cầu ban đầu của anh chỉ nhỏ chưa tới 1 km, gây thất vọng lớn. Tuy nhiên, Hệ thống Thôi Diễn Thần Cấp xuất hiện, cung cấp ba lựa chọn phát triển: dùng năng lượng siêu phàm (0.01% thành công), năng lượng phổ thông (0.1%), hoặc tạo môi trường tự nhiên để sinh mệnh tự sinh ra (99%). Giang Phàm chọn con đường thứ ba, tận dụng quang năng để cải tạo tinh cầu, đặt nền móng cho một nền văn minh khoa học kỹ thuật. Quá trình diễn biến kéo dài hàng trăm triệu năm trong không gian thức tỉnh được gia tốc, dẫn đến sự ra đời của vi sinh vật đầu tiên – thị nhiệt khuẩn – đánh dấu thành công bước đầu. Mini-arc này nhấn mạnh sự khác biệt giữa con đường của Giang Phàm và những người khác, cũng như tiềm năng ẩn giấu trong lựa chọn độc đáo của anh.',
            chapter: [
              {
                chapterIndex: 1,
                summaryDetail:
                  'Chương 1 giới thiệu bối cảnh tại Thất Trung Giang Thành, nơi diễn ra nghi thức thức tỉnh tinh cầu – một sự kiện quan trọng quyết định số phận học sinh 18 tuổi. Tin tức về một nữ thần từ Nhất Trung thức tỉnh tinh cầu đường kính 33 km, lập kỷ lục mới, làm dấy lên sự ngưỡng mộ và bàn tán sôi nổi giữa các học sinh Thất Trung. Họ mơ ước về những tinh cầu mạnh mẽ có thể chuyển hóa năng lượng cao cấp như Linh Khí để xây dựng văn minh tu tiên, hoặc ít nhất là võ giả. Không khí bên ngoài phòng thức tỉnh tràn ngập cảm xúc: kích động, lo lắng, ước ao. Giang Phàm, nhân vật chính, là một người xuyên không đã sống ở đây hơn nửa năm, quan sát mọi thứ với vẻ bình tĩnh. Anh hiểu rõ quy tắc: thức tỉnh thành công mang lại quyền sở hữu tinh cầu và địa vị cao, thất bại thì mãi là dân thường làm việc cho các Chủ Tinh Cầu khác. Nhóm học sinh đầu tiên bước ra từ phòng thức tỉnh với kết quả trái ngược – người thành công thì vui mừng, kẻ thất bại thì khóc lóc. Giang Phàm thuộc nhóm thứ hai, bước vào phòng với sự tập trung cao độ. Trước mặt mỗi người là một Thủy Tinh Cầu chứa năng lượng bản nguyên, công cụ để thức tỉnh tinh cầu. Giáo viên hướng dẫn giải thích quy trình: đặt tay lên cầu, năng lượng bản nguyên sẽ chảy vào cơ thể, kích hoạt không gian thức tỉnh nơi tinh cầu hình thành. Nếu năng lượng cạn kiệt mà không sinh ra Sinh Mệnh Tinh Cầu, coi như thất bại. Giang Phàm bắt đầu nghi thức, cảm nhận không gian hỗn độn trong đầu, sẵn sàng cho bước ngoặt cuộc đời.',
                importantChanges: [
                  'Giang Phàm từ người quan sát bình thường -> bắt đầu tham gia nghi thức thức tỉnh tinh cầu.',
                ],
              },
              {
                chapterIndex: 2,
                summaryDetail:
                  'Chương 2 mô tả quá trình thức tỉnh tinh cầu của Giang Phàm trong phòng thức tỉnh tại Thất Trung. Quá trình này không phức tạp, chỉ kéo dài vài phút và phụ thuộc vào thiên phú mỗi người. Khi đặt tay lên Thủy Tinh Cầu, Giang Phàm cảm nhận năng lượng bản nguyên chảy vào, tạo ra một tinh cầu nhỏ màu vàng đất trong không gian thức tỉnh. Tuy nhiên, anh thất vọng khi thấy tinh cầu chỉ chưa tới 1 km đường kính – nhỏ hơn cả một quảng trường lớn, khó có khả năng chuyển hóa năng lượng cao cấp hay thậm chí thấp cấp. Trong thế giới này, thức tỉnh tinh cầu chỉ là bước đầu; để thành công hoàn toàn, tinh cầu phải trở thành Sinh Mệnh Tinh Cầu qua ba bước: thức tỉnh, chuyển hóa năng lượng, và sinh ra sinh mệnh. Với kích thước nhỏ bé, Giang Phàm gần như không có hy vọng. Trong khi đó, phòng giám sát ghi nhận kết quả của các học sinh khác: một số người đạt 8 km, 13.5 km, thậm chí 28.5 km, được xem là thiên tài đỉnh cấp. Kết quả ban đầu của Giang Phàm là 0.81 km khiến giáo viên thở dài, cho rằng anh không thể sinh ra sinh mệnh, đồng nghĩa với thất bại. Giang Phàm cũng không cam lòng, vì thất bại nghĩa là anh sẽ mãi làm việc cho người khác, không thể thay đổi số phận gia đình bình dân của mình. Đúng lúc tuyệt vọng, một âm thanh vang lên trong đầu: Hệ thống Thôi Diễn Thần Cấp kích hoạt. Đây là bước ngoặt lớn, mang lại hy vọng mới cho Giang Phàm khi anh nhận ra mình có thể vượt qua giới hạn thiên phú tự nhiên nhờ hệ thống này.',
                importantChanges: [
                  'Giang Phàm từ học sinh bình thường -> sở hữu Hệ thống Thôi Diễn Thần Cấp.',
                  'Tinh cầu của Giang Phàm hình thành với đường kính 0.81 km.',
                ],
              },
              {
                chapterIndex: 3,
                summaryDetail:
                  "Chương 3 tiếp tục hành trình thức tỉnh của Giang Phàm khi Hệ thống Thôi Diễn Thần Cấp hiển lộ sức mạnh. Một bảng thông tin hiện lên trong đầu anh: tinh cầu vô danh, cấp 0, đường kính 0.81 km, không sinh mệnh, với mục 'Thôi diễn lộ tuyến' đặc biệt – dấu hiệu của hệ thống. Giang Phàm yêu cầu hệ thống thôi diễn cách sinh ra sinh mệnh, và nhận được ba lựa chọn: (1) chuyển hóa năng lượng siêu phàm (0.01% thành công), (2) năng lượng phổ thông (0.1%), (3) dùng quang năng tạo môi trường tự nhiên để sinh mệnh tự sinh (99%). Hai lựa chọn đầu gần như vô vọng với tinh cầu nhỏ bé của anh, nhưng lựa chọn thứ ba – dù chỉ tạo ra sinh mệnh phổ thông – lại đầy hứa hẹn. Anh so sánh với Lam Tinh (Trái Đất) kiếp trước, nơi sinh mệnh hình thành tự nhiên qua hàng tỷ năm nhờ nước, ánh nắng, và khí quyển. Trong thế giới này, cách thông thường là dùng năng lượng siêu phàm để ép sinh mệnh ra đời nhanh chóng, nhưng phương pháp đó tạo hệ sinh thái nhân tạo dễ sụp đổ nếu không chăm sóc kỹ. Giang Phàm thấy tiềm năng lớn hơn ở hệ sinh thái tự nhiên: tuy chậm, nhưng bền vững và không cần can thiệp nhiều. Anh nhớ đến khoa học kỹ thuật từ kiếp trước – như Dual Vector Foil hay các nền văn minh thần cấp – tin rằng sinh mệnh phổ thông có thể phát triển vượt xa siêu phàm nếu đi theo con đường khoa học. Quyết định chọn lộ tuyến thứ ba, anh yêu cầu hệ thống thôi diễn điều kiện cần thiết (nước, ánh nắng, nhiệt độ, khí quyển), chuẩn bị biến tinh cầu nhỏ bé thành một Lam Tinh mới, mở ra con đường văn minh khoa học kỹ thuật độc đáo.",
                importantChanges: [
                  'Giang Phàm quyết định chọn lộ tuyến khoa học kỹ thuật, sử dụng quang năng thay vì năng lượng siêu phàm.',
                ],
              },
              {
                chapterIndex: 4,
                summaryDetail:
                  'Chương 4 tập trung vào quá trình cải tạo và diễn biến tinh cầu của Giang Phàm theo lộ tuyến khoa học kỹ thuật. Hệ thống cung cấp dữ liệu chi tiết: nước lỏng, ánh nắng, nhiệt độ, và khí quyển là điều kiện cần thiết. Tinh cầu ban đầu là một khối đất vàng lạnh giá, không nước, không thích hợp cho sự sống. Giang Phàm dùng năng lượng bản nguyên chuyển hóa thành quang năng, tạo một mặt trời nhân tạo, tiêu tốn nửa phần năng lượng. Nhiệt độ tinh cầu tăng dần dưới ánh sáng này. Anh tiếp tục thiết lập khí quyển đơn giản và tổng hợp nước từ hydro và oxy, biến tinh cầu thành một đại dương nhỏ với phần lục địa ít ỏi. Anh điều chỉnh trọng lực, từ trường, và vận động vỏ quả đất để hoàn thiện môi trường, tương tự Lam Tinh kiếp trước. Hệ thống ước tính cần 100 triệu năm để sinh mệnh tự sinh, quá dài so với đời người, nhưng năng lượng bản nguyên cho phép gia tốc thời gian. Giang Phàm đẩy tốc độ lên 1:10000 tỷ, khiến 100 triệu năm trôi qua trong chưa tới một giờ ngoài đời thực. Trong quá trình này, tinh cầu thay đổi lớn: nước ấm lên, khí quyển hình thành mây và mưa, khí thể như hydro và cacbon hợp thành phân tử hữu cơ, rồi albumin và DNA, cuối cùng tạo ra đơn bào nguyên thủy trong một suối nước nóng. Đây là kỳ tích tự nhiên hiếm có, khác hẳn cách ép sinh mệnh bằng năng lượng siêu phàm. Nếu không có hệ thống, việc cải tạo chính xác như vậy sẽ khiến tinh cầu tan vỡ. Thành công bước đầu này chứng minh tiềm năng của lộ tuyến Giang Phàm chọn, dù cần thời gian dài hơn so với cách truyền thống.',
                importantChanges: [
                  'Tinh cầu của Giang Phàm từ khối đất vàng cằn cỗi -> đại dương nhỏ với môi trường sống hoàn thiện.',
                  'Sinh mệnh đầu tiên (đơn bào) ra đời trên tinh cầu của Giang Phàm.',
                ],
              },
              {
                chapterIndex: 5,
                summaryDetail:
                  'Chương 5 đánh dấu bước ngoặt khi tinh cầu của Giang Phàm chính thức trở thành Sinh Mệnh Tinh Cầu. Trong một suối nước nóng, vi sinh vật thị nhiệt khuẩn ra đời – sinh mệnh đầu tiên trên tinh cầu nhỏ chưa tới 1 km này. Dù chỉ là vi khuẩn cấp thấp, sự kiện này xác nhận Giang Phàm thành công thức tỉnh, trở thành Chủ Tinh Cầu. Anh thở phào nhẹ nhõm khi bảng thông tin cập nhật: cấp 1, đường kính 0.9 km, một loài sinh vật. Đường kính tăng nhẹ nhờ sinh mệnh lực – yếu tố quyết định kích thước tinh cầu, dựa trên cấp độ sinh mệnh, số lượng, và sự phong phú loài. Thị nhiệt khuẩn cung cấp sinh mệnh lực ít ỏi, nhưng Giang Phàm không vội, xem đây chỉ là khởi đầu. Anh đặt tên tinh cầu là Lam Tinh, phản ánh vẻ xanh lam từ đại dương bao phủ. Với 1/4 năng lượng bản nguyên còn lại, anh tiếp tục gia tốc thời gian, thúc đẩy diễn biến. Thị nhiệt khuẩn tăng số lượng, rồi các vi sinh vật khác xuất hiện, tiến hóa từ nguyên hạch sang nguyên sinh như lam tảo, có khả năng quang hợp tạo oxy. Điều này mở đường cho động thực vật cấp cao hơn, như sinh vật xốp và thủy mẫu, nâng sinh mệnh lực đáng kể. Qua 300 triệu năm gia tốc, tinh cầu đạt đường kính 35.2 km với 215 loài (không tính vi sinh vật), vượt xa các tinh cầu siêu phàm mới thức tỉnh về số lượng loài, dù chỉ là sinh mệnh phổ thông. Năng lượng bản nguyên cạn kiệt, buộc Giang Phàm dừng gia tốc, nhưng anh hài lòng với chiến lược dùng số lượng bù chất lượng, đặt nền móng cho văn minh khoa học kỹ thuật đầy tiềm năng.',
                importantChanges: [
                  'Giang Phàm từ học sinh thức tỉnh -> chính thức trở thành Chủ Tinh Cầu.',
                  'Tinh cầu của Giang Phàm được đặt tên Lam Tinh, đường kính tăng từ 0.9 km -> 35.2 km, loài sinh vật từ 1 -> 215.',
                ],
              },
            ],
          },
          {
            name: 'Hậu Thức Tỉnh',
            description:
              'Mini-arc này diễn ra sau nghi thức thức tỉnh, khi kết quả được công bố và Giang Phàm đối mặt với sự chú ý từ trường học cùng thế giới bên ngoài. Khi năng lượng bản nguyên cạn kiệt, nghi thức kết thúc, các học sinh rời phòng thức tỉnh với cảm xúc lẫn lộn: vui mừng, thất vọng, hoặc phức tạp. Giang Phàm nổi bật với tinh cầu 35.2 km, vượt xa kỳ vọng, phá kỷ lục Giang Thành. Phòng giám sát xác nhận thành tích, xếp anh vào hàng yêu nghiệt – cấp độ hiếm có ngay cả ở Đông Dương tỉnh. Phó hiệu trưởng công bố kết quả, ca ngợi Đường Thanh Thanh (29.8 km) và Hướng Quân Hạo (28.5 km) là thiên tài đỉnh cấp, nhưng Giang Phàm mới là tâm điểm, khiến hai người khác mờ nhạt. Anh được hiệu trưởng Đồng Chấn Thanh triệu kiến, nhận thưởng 100 vạn đồng liên bang – đổi thành một phần năng lượng bản nguyên – vì thành tích xuất sắc. Tuy nhiên, khi tiết lộ chỉ chuyển hóa quang năng phổ thông thay vì năng lượng siêu phàm, hiệu trưởng sốc nặng, không tin một tinh cầu 35.2 km lại dùng năng lượng thấp như vậy. Giang Phàm rời đi điệu thấp, về nhà thấy nhiều thế lực (tư bản, gia tộc) gửi lời mời hợp tác, muốn sở hữu cổ phần Lam Tinh. Với hệ thống và năng lượng bản nguyên mới, anh sẵn sàng tiếp tục phát triển tinh cầu, khẳng định con đường khoa học kỹ thuật dù bị đánh giá thấp. Mini-arc này làm nổi bật sự tương phản giữa kỳ vọng xã hội và lựa chọn độc đáo của Giang Phàm, cũng như áp lực từ bên ngoài anh phải đối mặt.',
            chapter: [
              {
                chapterIndex: 6,
                summaryDetail:
                  'Chương 6 diễn ra khi nghi thức thức tỉnh kết thúc, năng lượng bản nguyên cạn kiệt, và học sinh rời phòng thức tỉnh. Cảm xúc đa dạng hiện rõ: người nhảy cẫng vui mừng, kẻ khóc lóc thất vọng, số khác bối rối. Tỷ lệ thành công không đạt 100%, và nhiều tinh cầu quá nhỏ, thiếu tiềm năng. Năng lượng siêu phàm chia thành bốn cấp: thấp (Chân Khí), trung (Nguyên Khí), cao (Ma Lực), và siêu (Linh Khí), với cấp thấp phổ biến nhất, siêu cấp hiếm nhất. Trong phòng giám sát, giáo viên thống kê kết quả: học sinh số 1 (11 km), số 2 (12.6 km), số 38 (23 km), nhưng nhiều người thất bại. Đường Thanh Thanh và Hướng Quân Hạo, với tinh cầu trên 25 km, được xem là thiên tài đỉnh cấp, giúp Thất Trung vượt trội so với năm trước, dù không sánh bằng Nhất Trung. Hiệu trưởng hài lòng, dự đoán danh tiếng trường tăng, thu hút học sinh mới. Tuy nhiên, kết quả của Giang Phàm – số 81, 35.2 km – khiến phòng giám sát sững sờ. Đây là cấp độ yêu nghiệt, vượt kỷ lục 33 km của Nhất Trung, điều không tưởng với một trường như Thất Trung. Giáo viên ban đầu nghi ngờ, nhưng màn hình xác nhận rõ ràng. Các lãnh đạo ngạc nhiên, không ngờ trường mình sản sinh thiên tài phá kỷ lục Giang Thành. Hiệu trưởng ra lệnh công bố ngay, muốn tận dụng thành tích này nâng cao uy tín. Chương này nhấn mạnh sự khác biệt giữa kỳ vọng ban đầu về Giang Phàm (thấp) và kết quả thực tế (phi thường), đặt anh vào vị trí trung tâm chú ý.',
                importantChanges: [
                  'Giang Phàm từ học sinh vô danh -> được công nhận là thiên tài yêu nghiệt với tinh cầu 35.2 km.',
                ],
              },
              {
                chapterIndex: 7,
                summaryDetail:
                  "Chương 7 mô tả cảnh học sinh rời phòng thức tỉnh sau khi nghi thức hoàn tất, và thành tích chính thức được công bố. Ngoài cửa, Hướng Quân Hạo (28.5 km) được đám đông vây quanh, ca ngợi là 'Hạo Thần', nhưng Đường Thanh Thanh (29.8 km) – hoa khôi Thất Trung – thu hút nhiều chú ý hơn với vẻ khiêm tốn pha chút kiêu ngạo. Phó hiệu trưởng bước ra, tuyên bố Thất Trung có hơn nửa học sinh thành công, với 210 tinh cầu trên 10 km, 23 trên 20 km, và 2 trên 25 km (Đường Thanh Thanh, Hướng Quân Hạo). Đám đông trầm trồ trước hai thiên tài đỉnh cấp này. Tuy nhiên, phó hiệu trưởng gây sốc khi công bố Giang Phàm đạt 35.2 km, vượt ngưỡng 30 km, phá kỷ lục Giang Thành do Nhất Trung lập trước đó. Mọi người không tin nổi, quay sang nhìn Giang Phàm với đủ cảm xúc: thán phục, ngưỡng mộ, khó hiểu. Thành tích này quá xa vời, khiến không ai ghen tị mà chỉ kinh ngạc. Đường Thanh Thanh và Hướng Quân Hạo, dù xuất sắc, trở nên lu mờ, ánh hào quang giờ thuộc về Giang Phàm. Đường Thanh Thanh thầm nghĩ kích thước tinh cầu chỉ là khởi đầu, văn minh sau này mới quan trọng, nhưng vẫn bất ngờ trước đối thủ ẩn mình này. Phó hiệu trưởng gọi Giang Phàm đi theo, dẫn anh đến phòng hiệu trưởng. Trước cửa phòng, anh nhận ra đây là nơi gặp lãnh đạo cao nhất trường – một dấu hiệu cho thấy tầm quan trọng của thành tích. Chương này làm nổi bật sự chuyển đổi vị thế của Giang Phàm từ vô danh thành ngôi sao, đồng thời gợi mở áp lực và kỳ vọng sắp tới.",
                importantChanges: [
                  'Giang Phàm từ người ít được chú ý -> trở thành tâm điểm toàn trường, phá kỷ lục Giang Thành.',
                  'Đường Thanh Thanh và Hướng Quân Hạo từ tiêu điểm -> bị lu mờ bởi Giang Phàm.',
                ],
              },
              {
                chapterIndex: 8,
                summaryDetail:
                  'Chương 8 diễn ra trong phòng hiệu trưởng, nơi Giang Phàm gặp Đồng Chấn Thanh – một Chủ Tinh Cầu cấp bốn uy nghiêm nhưng thân thiện. Hiệu trưởng chúc mừng anh đạt thành tích đứng đầu Thất Trung, phá kỷ lục Giang Thành với tinh cầu 35.2 km, và thông báo phần thưởng: 50 vạn đồng liên bang theo quy định, cộng thêm 50 vạn vì kỷ lục, tổng cộng 100 vạn. Với thân phận cô nhi sống nhờ cứu tế liên bang, đây là số tiền lớn đối với Giang Phàm. Anh biết tinh cầu tự nhiên của mình không cần nhiều tài nguyên như tinh cầu siêu phàm, mà cần năng lượng bản nguyên (giá 100 vạn/phần). Anh đề nghị đổi thưởng thành một phần năng lượng bản nguyên, khiến hiệu trưởng ngạc nhiên vì thông thường học sinh ưu tiên tài nguyên sinh mệnh. Đồng Chấn Thanh đồng ý, lấy một Thủy Tinh Cầu chứa năng lượng bản nguyên từ ngăn kéo trao cho anh, khen ngợi sự thực tế của anh – phẩm chất cần cho Chủ Tinh Cầu mạnh. Sau đó, hiệu trưởng hỏi về loại năng lượng anh chuyển hóa, kỳ vọng là siêu cấp (Linh Khí, khí, hư không năng) vì tinh cầu vượt 30 km thường đạt cấp cao. Giang Phàm úp mở rằng năng lượng của anh đặc thù, làm Đồng Chấn Thanh hào hứng đoán già đoán non. Chương này cho thấy sự công nhận chính thức từ trường học, đồng thời hé lộ sự khác biệt trong chiến lược của Giang Phàm: không phụ thuộc tài nguyên bên ngoài mà tập trung vào năng lượng bản nguyên để tự phát triển Lam Tinh. Phản ứng của hiệu trưởng cũng gợi ý kỳ vọng lớn lao đặt vào anh, chuẩn bị cho cú sốc ở chương sau.',
                importantChanges: [
                  'Giang Phàm nhận một phần năng lượng bản nguyên từ trường học.',
                  'Đồng Chấn Thanh từ không biết -> bắt đầu quan tâm và kỳ vọng vào năng lượng của Giang Phàm.',
                ],
              },
              {
                chapterIndex: 9,
                summaryDetail:
                  'Chương 9 tiếp nối cuộc trò chuyện trong phòng hiệu trưởng, nơi Đồng Chấn Thanh mong biết năng lượng sơ khai của Giang Phàm. Với tinh cầu 35.2 km, ông kỳ vọng siêu cấp hoặc ít nhất cao cấp, nhưng Giang Phàm phủ nhận cả hai, khiến nụ cười của hiệu trưởng đông cứng. Ông miễn cưỡng an ủi rằng trung cấp cũng tốt, rồi cấp thấp cũng có ưu thế, nhưng Giang Phàm tiết lộ anh dùng quang năng – năng lượng phổ thông, không phải siêu phàm. Đồng Chấn Thanh sốc nặng, suýt làm rơi ấm trà, vì điều này phá vỡ quy luật: năng lượng phổ thông thường chỉ xuất hiện ở tinh cầu dưới 15 km, không thể đạt 35.2 km. Ông khó tin một thiên tài yêu nghiệt lại chọn con đường dị thường như vậy, nhưng biết Giang Phàm không nói dối. Không còn gì để nói, ông để anh rời đi. Giang Phàm điệu thấp rời trường, tránh truyền thông và đám đông bên ngoài, về căn hộ cứu tế của mình. Anh kiểm tra Thủy Tinh Cầu chứa năng lượng bản nguyên, dự định gia tốc Lam Tinh tiếp tục diễn biến. Mở thiết bị liên lạc cũ, anh thấy hàng loạt tin nhắn từ các thế lực (tư bản, công ty, gia tộc) chúc mừng và mời hợp tác, muốn chiếm cổ phần tinh cầu. Nếu không có hệ thống, anh có thể phải chấp nhận, nhưng giờ anh tự tin từ chối. Chương này làm rõ sự khác biệt giữa kỳ vọng xã hội (năng lượng siêu phàm) và lựa chọn của Giang Phàm (khoa học kỹ thuật), đồng thời cho thấy áp lực từ bên ngoài và quyết tâm độc lập của anh trong việc phát triển Lam Tinh.',
                importantChanges: [
                  'Đồng Chấn Thanh từ kỳ vọng cao -> sốc và thất vọng khi biết Giang Phàm dùng quang năng.',
                  'Giang Phàm từ vô danh trong mắt thế lực bên ngoài -> trở thành mục tiêu hợp tác của tư bản và gia tộc.',
                ],
              },
            ],
          },
        ],
      },
    ]
      // TODO: Continue for part 2
      .concat([
        {
          name: 'Kỷ Nguyên Phát Triển',
          summaryDetail:
            'Arc này tiếp nối câu chuyện của Giang Phàm khi anh phát triển Lam Tinh, tinh cầu nhỏ bé của mình, từ một hành tinh sơ khai thành một nền văn minh khoa học kỹ thuật đầy tiềm năng. Sau khi thức tỉnh thành công, anh tận dụng Hệ thống Thôi Diễn Thần Cấp và năng lượng bản nguyên để thúc đẩy diễn biến sinh mệnh trên Lam Tinh, vượt qua những giới hạn mà các tinh cầu siêu phàm khác áp đặt. Từ Hàn Vũ Kỷ, khi sinh mệnh đại bạo phát với sự xuất hiện của các loài động thực vật nguyên thủy, đến Kỷ Jura với sự phong phú của giống loài gần hiện đại, và cuối cùng là Nhân Loại Kỷ khi nhân loại ra đời, Lam Tinh không ngừng mở rộng từ 35.2 km lên hơn 100 km đường kính nhờ sinh mệnh lực dồi dào. Giang Phàm nhúng tay vào sự phát triển của nhân loại, hỗ trợ thủ lĩnh Hoang thống nhất các bộ lạc thành quốc gia đầu tiên – Vũ quốc – và sau đó chọn Khải, một thiên tài khoa học, làm người thừa kế để đẩy nhanh tiến trình kỹ thuật. Dưới sự dẫn dắt của Khải, Vũ quốc chuyển từ thời đại bộ lạc sang phong kiến, phát minh ra giấy, in ấn, kim chỉ nam và dầu hỏa, vượt xa tốc độ phát triển của Trái Đất kiếp trước. Khi năng lượng bản nguyên cạn kiệt, Giang Phàm tìm đến Tinh Cầu Hiệp Hội để kiếm thêm, chuẩn bị mở rộng ảnh hưởng của Lam Tinh ra ngoài vũ trụ, mở ra một giai đoạn mới đầy thách thức và cơ hội.',
          miniArc: [
            {
              name: 'Diễn Biến Sinh Mệnh',
              description:
                'Mini-arc này tập trung vào giai đoạn phát triển sinh học của Lam Tinh, từ sự bùng nổ sinh mệnh trong Hàn Vũ Kỷ đến sự phong phú giống loài trong Kỷ Jura. Sau khi trở thành Chủ Tinh Cầu, Giang Phàm tận dụng năng lượng bản nguyên để gia tốc thời gian, thúc đẩy diễn biến tự nhiên mà không cần đội ngũ quản lý như các tinh cầu siêu phàm khác. Lam Tinh, với hệ sinh thái tự nhiên, không phụ thuộc vào tài nguyên đắt đỏ mà phát triển dựa trên số lượng và sự đa dạng loài. Trong Hàn Vũ Kỷ, lam tảo tạo oxy, mở đường cho động thực vật đa bào như sâu ba lá, làm tăng sinh mệnh lực và mở rộng tinh cầu lên 50.4 km với 312 loài. Sang Kỷ Jura, khí hậu ấm áp mang đến thực vật bị tử, chim, và động vật có vú nguyên thủy, dù không có khủng long do diện tích hạn chế. Tinh cầu đạt 83.6 km với 502 loài, vượt xa các tinh cầu mới thức tỉnh về sự đa dạng, dù chỉ là sinh mệnh phổ thông. Giang Phàm quan sát từ xa, đặt tên các kỷ nguyên theo Trái Đất kiếp trước, khẳng định chiến lược dùng số lượng bù chất lượng. Mini-arc này làm nổi bật sự khác biệt giữa con đường khoa học kỹ thuật của anh và các tinh cầu siêu phàm, cũng như khả năng của hệ thống trong việc biến một tinh cầu nhỏ bé thành kỳ tích sinh học.',
              chapter: [
                {
                  chapterIndex: 10,
                  summaryDetail:
                    'Chương 10 mở đầu với Giang Phàm trở về nhà sau khi phá kỷ lục Giang Thành, đối mặt với sự thờ ơ của các thế lực tư bản khi biết anh chỉ dùng quang năng phổ thông. Anh cảm thán sự thực dụng của họ, vì tinh cầu phổ thông thường tan vỡ hoặc bị siêu phàm nghiền nát, nhưng quyết tâm chứng minh Lam Tinh có thể phát triển mạnh mẽ. Không cần đội ngũ quản lý như các Chủ Tinh Cầu khác, anh dựa vào Hệ thống Thôi Diễn Thần Cấp và hệ sinh thái tự nhiên của Lam Tinh để tiếp tục diễn biến. Sau bữa ăn đơn giản, anh vào không gian thức tỉnh, dùng phần năng lượng bản nguyên mới để gia tốc thời gian, quan sát Lam Tinh chuyển từ Nguyên Cổ Trụ sang Hiển Sinh Trụ – cụ thể là Hàn Vũ Kỷ. Lam tảo đóng vai trò then chốt, tạo oxy và thay đổi môi trường thiếu dưỡng, mở đường cho sinh mệnh đa bào như chân, vòi, và sâu ba lá. Các loài cấp thấp không thích nghi được diệt vong, nhường chỗ cho giống loài cao cấp hơn, đánh dấu sinh mệnh đại bạo phát đầu tiên. Tinh cầu tăng trưởng rõ rệt về số lượng và đẳng cấp sinh mệnh, dù chưa đạt mức hiện đại. Ngoài đời thực, các công ty rút lời mời quảng cáo khi biết năng lượng của anh, nhưng Giang Phàm không bận tâm, tập trung vào tiềm năng khoa học kỹ thuật của Lam Tinh, tin rằng nó có thể vượt qua định kiến về tinh cầu phổ thông nhờ sự bền vững tự nhiên.',
                  importantChanges: [
                    'Lam Tinh từ Nguyên Cổ Trụ -> bước vào Hàn Vũ Kỷ, sinh mệnh đa bào xuất hiện.',
                    'Giang Phàm từ mục tiêu của tư bản -> bị họ bỏ qua do dùng năng lượng phổ thông.',
                  ],
                },
                {
                  chapterIndex: 11,
                  summaryDetail:
                    'Chương 11 tiếp tục quá trình diễn biến của Lam Tinh trong Hàn Vũ Kỷ, khi sinh mệnh lực tăng mạnh, đẩy đường kính tinh cầu từ 35.2 km lên 50.4 km với 312 loài. Giang Phàm nhận thấy nhiều loài cấp thấp diệt vong do không thích nghi, nhưng loài mới sinh ra nhiều hơn và cao cấp hơn, như cá, lưỡng thê, và bò sát cổ đại, cùng thực vật dương xỉ hình thành rừng rậm. Anh gia tốc thời gian, quan sát từ xa, phân chia kỷ nguyên giống Trái Đất: Minh Cổ Trụ (không sinh mệnh), Thái Cổ Trụ (đơn bào), Nguyên Cổ Trụ (đa bào), và Hiển Sinh Trụ (động thực vật cao cấp). Hàn Vũ Kỷ kết thúc, nhường chỗ cho Kỷ Jura, với sự xuất hiện của không ngạc ngư – động vật có xương sống đầu tiên – và địa hình đa dạng hơn nhờ vận động vỏ quả đất (núi, đồi, thảo nguyên). Không có đại diệt tuyệt như Trái Đất nhờ hệ thống thôi diễn và kích thước nhỏ của Lam Tinh, sinh mệnh tiếp tục sinh sôi. Tinh cầu không ngừng mở rộng nhờ số lượng loài, khẳng định chiến lược của Giang Phàm: dùng số lượng bù chất lượng. Anh đặt tên kỷ mới là Kỷ Jura theo kiếp trước, dù lười sáng tạo tên mới, xem đây là giai đoạn quan trọng nhất từ khi thức tỉnh. Chương này nhấn mạnh sự phát triển vượt bậc của Lam Tinh, vượt xa các tinh cầu siêu phàm mới thức tỉnh về đa dạng sinh học, dù chỉ dựa vào năng lượng phổ thông.',
                  importantChanges: [
                    'Lam Tinh từ 35.2 km, 215 loài -> 50.4 km, 312 loài.',
                    'Lam Tinh từ Hàn Vũ Kỷ -> bước vào Kỷ Jura.',
                  ],
                },
                {
                  chapterIndex: 12,
                  summaryDetail:
                    'Chương 12 khám phá Kỷ Jura trên Lam Tinh, khi sinh mệnh đạt đỉnh cao về số lượng và đẳng cấp, đẩy đường kính tinh cầu lên 83.6 km với 502 loài. Khí hậu ấm áp, khô hạn mang đến động vật có vú nguyên thủy, chim, và thực vật bị tử như mộc lan, liễu, phong, trải rộng mặt đất, hỗ trợ côn trùng và động vật ăn cỏ như mã, linh dương. Giang Phàm kỳ vọng khủng long xuất hiện như Trái Đất, nhưng diện tích nhỏ của Lam Tinh không đủ điều kiện, thay vào đó là các loài độc đáo không giống kiếp trước. Địa hình đa dạng hóa với thảo nguyên, rừng rậm, sa mạc, và vỏ quả đất ổn định, tạo môi trường lý tưởng cho sinh mệnh nổ lớn – vượt xa Hàn Vũ Kỷ về chất và lượng. Dù tiếc nuối vì thiếu khủng long, anh hài lòng với sự phong phú giống loài, ước tính trên 1000 chủng nếu tính cả loài đã diệt vong, vượt xa tinh cầu siêu phàm cấp bốn. Kỷ Jura ngắn nhưng rực rỡ, là bước đệm cho Nhân Loại Kỷ – thời đại của sinh mệnh có trí tuệ. Giang Phàm quan sát từ xa, không can thiệp, để hệ sinh thái tự nhiên phát triển, khẳng định tiềm năng của lộ tuyến khoa học kỹ thuật. Chương này làm nổi bật sự khác biệt giữa Lam Tinh và Trái Đất, cũng như khả năng của Giang Phàm trong việc tạo ra một tinh cầu đa dạng vượt mong đợi, dù chỉ dựa vào năng lượng phổ thông và hệ thống thôi diễn.',
                  importantChanges: [
                    'Lam Tinh từ 50.4 km, 312 loài -> 83.6 km, 502 loài.',
                    'Lam Tinh từ Hàn Vũ Kỷ kết thúc -> chuẩn bị bước vào Nhân Loại Kỷ.',
                  ],
                },
              ],
            },
            {
              name: 'Khởi Nguồn Văn Minh',
              description:
                'Mini-arc này tập trung vào sự ra đời và phát triển của văn minh nhân loại trên Lam Tinh, từ sự xuất hiện của nhân tộc đến sự hình thành quốc gia và tiến bộ khoa học kỹ thuật. Trong Nhân Loại Kỷ, cổ viên tiến hóa thành vượn người rồi nhân loại, mang lại sinh mệnh lực lớn, giúp tinh cầu vượt 100 km. Giang Phàm lần đầu can thiệp, hỗ trợ thủ lĩnh Hoang thống nhất bộ lạc thành Vũ quốc, rồi chọn Khải – một thiên tài khoa học – làm người thừa kế. Hoang dùng trí tuệ và nhẫn nhịn đánh bại Man bộ lạc, lập ra Đại Hoang thành, nhưng qua đời sau khi hoàn thành sứ mệnh. Khải, dưới sự dạy dỗ của Giang Phàm, đưa Vũ quốc từ thời đại bộ lạc sang phong kiến trong 10 năm, phát minh giấy, in ấn, kim chỉ nam, và dầu hỏa, dùng dầu mỏ đánh bại nội loạn từ Nhận và Từ, củng cố quyền lực. Khi năng lượng bản nguyên cạn, Giang Phàm đến Tinh Cầu Hiệp Hội để kiếm thêm, chọn cướp đoạt từ tinh cầu vô chủ, mở ra cơ hội cho Lam Tinh kết nối với thế giới bên ngoài. Mini-arc này làm nổi bật vai trò của Giang Phàm như một vị thần dẫn dắt, sự thông minh của nhân vật như Hoang và Khải, và tốc độ phát triển vượt bậc của văn minh khoa học kỹ thuật trên Lam Tinh.',
              chapter: [
                {
                  chapterIndex: 13,
                  summaryDetail:
                    'Chương 13 đánh dấu sự ra đời của nhân tộc trên Lam Tinh trong Nhân Loại Kỷ, khi tinh cầu đạt hơn 100 km nhờ khí hậu ấm áp và môi trường thuận lợi. Sinh mệnh có trí tuệ xuất hiện, bắt đầu từ thảo nguyên cổ viên, rồi rừng rậm và phía nam cổ viên, tiến hóa thành vượn người biết dùng công cụ, và cuối cùng là nhân loại hiện đại trong một khu rừng. Nhân loại hình thành đoàn thể nhỏ để chống dã thú, làm tinh cầu mở rộng nhờ sinh mệnh lực vượt trội. Giang Phàm nhận ra giá trị của sinh mệnh có trí tuệ so với các loài khác. Với vài trăm người, nhân loại chế tác thạch khí, săn thú lớn, rời rừng rậm chiếm bình nguyên, xây nhà, trồng trọt, thuần hóa động vật, và phát triển văn tự, ngôn ngữ nguyên thủy. Xung đột giữa các đoàn thể dẫn đến chiến tranh, hình thành hai bộ lạc lớn: Hoang và Man, mỗi bên hơn trăm người. Man bộ lạc, dưới thủ lĩnh Man (rất) mạnh mẽ, sùng bái vũ lực, thống nhất nội bộ và chinh chiến Hoang bộ lạc. Thủ lĩnh Hoang, yếu hơn về thể chất nhưng yêu thích văn tự và công cụ, khó chống lại Man. Giang Phàm lần đầu chú ý đến Hoang, thấy tiềm năng trí tuệ của anh ta. Chương này nhấn mạnh bước ngoặt từ sinh mệnh tự nhiên sang xã hội có tổ chức, đặt nền móng cho văn minh, và sự tương phản giữa hai thủ lĩnh – một bên là sức mạnh, bên kia là trí tuệ – dưới sự quan sát của Giang Phàm.',
                  importantChanges: [
                    'Lam Tinh từ Kỷ Jura -> bước vào Nhân Loại Kỷ, nhân loại xuất hiện.',
                    'Hoang và Man từ cá nhân -> trở thành thủ lĩnh của hai bộ lạc lớn.',
                  ],
                },
                {
                  chapterIndex: 14,
                  summaryDetail:
                    'Chương 14 tập trung vào sự can thiệp đầu tiên của Giang Phàm vào văn minh Lam Tinh, nhắm đến thủ lĩnh Hoang để phát triển khoa học kỹ thuật. Anh dùng hệ thống thôi diễn, chọn hỗ trợ âm thầm để tránh rối loạn sinh thái (1% nguy cơ) thay vì can thiệp trực tiếp (30%). Dưới gốc cây, anh viết phù hiệu hỏi Hoang về khác biệt giữa nhân loại và dã thú, trả lời là trí tuệ – khả năng dùng công cụ và hợp tác – giúp nhân loại thống trị. Hoang lĩnh ngộ, dùng trí tuệ kết minh với Man (rất) qua rượu và tình nghĩa, tránh chiến tranh bằng cách thần phục tạm thời, tiến cống lương thực và nữ nhân. Trong vài năm, Giang Phàm dạy Hoang thêm kiến thức, giúp anh chuẩn bị phản công. Hoang mời Man (rất) giao lưu, dùng mưu kế và sự khéo léo để tạm hóa giải uy hiếp, chứng minh trí tuệ vượt sức mạnh thô bạo của Man. Chương này làm nổi bật sự thông minh của Hoang dưới sự dẫn dắt của Giang Phàm, chuyển từ thế yếu sang chủ động, đặt nền móng cho sự thống nhất sau này. Sự tương phản giữa Hoang (trí tuệ) và Man (vũ lực) được nhấn mạnh, với Giang Phàm đóng vai trò ‘thiên thượng người’ khảo nghiệm và hỗ trợ, khẳng định tiềm năng của văn minh khoa học kỹ thuật dựa trên trí tuệ thay vì siêu phàm.',
                  importantChanges: [
                    'Giang Phàm từ quan sát -> bắt đầu âm thầm can thiệp vào Lam Tinh, hỗ trợ Hoang.',
                    'Hoang từ thủ lĩnh yếu thế -> dùng trí tuệ tạm thời hóa giải uy hiếp từ Man bộ lạc.',
                  ],
                },
                {
                  chapterIndex: 15,
                  summaryDetail:
                    'Chương 15 kể về sự phát triển của Hoang và sự ra đời của Vũ quốc dưới sự hướng dẫn của Giang Phàm trong 20 năm. Anh dạy Hoang nhẫn nhịn, mở rộng nhân khẩu, và huấn luyện quân đội – khái niệm Hoang dần hiểu qua ví dụ đoàn đội đánh bại thú lớn. Sau 20 năm thần phục Man bộ lạc, Hoang khuyến khích sinh sản, trồng cây nông nghiệp (lúa mì, khoai), thuần hóa động vật (lợn, ngựa), cải tiến công cụ và văn tự, âm thầm xây dựng quân đội. Từ thanh niên, Hoang trở thành người trung niên, tập hợp chiến sĩ báo thù, đánh bại Man bộ lạc dễ dàng nhờ quân đội vượt trội so với đội săn truyền thống của Man (rất) – nay suy yếu vì tửu sắc. Hoang xử tử Man (rất), thống nhất bộ lạc thành Vũ quốc, lên ngôi hoàng đế, xây Đại Hoang thành. Trước khi qua đời vì bệnh, Hoang gọi Giang Phàm là ‘Phụ thần’, cảm tạ sự dạy dỗ và xin ý kiến tâm nguyện. Anh xuất hiện qua không khí, khen ngợi Hoang, mở ra giai đoạn chuyển giao quyền lực. Chương này cho thấy sự chuyển đổi của Lam Tinh từ bộ lạc hỗn loạn sang quốc gia thống nhất nhờ trí tuệ và chiến lược của Hoang, với Giang Phàm là lực lượng dẫn dắt, cũng như sự kết thúc của một thời đại để nhường chỗ cho thế hệ mới.',
                  importantChanges: [
                    'Hoang từ thủ lĩnh bộ lạc -> trở thành hoàng đế đầu tiên của Vũ quốc, sau đó qua đời.',
                    'Man (rất) từ thủ lĩnh mạnh mẽ -> suy yếu và bị xử tử.',
                    'Lam Tinh từ hai bộ lạc -> thống nhất thành Vũ quốc, xây Đại Hoang thành.',
                  ],
                },
                {
                  chapterIndex: 16,
                  summaryDetail:
                    'Chương 16 xoay quanh việc Giang Phàm chọn người thừa kế cho Hoang trước khi anh qua đời. Hoang lo lắng cho Vũ quốc, với 43 con (25 trai, 20 đủ tuổi kế vị), đều ưu tú nhờ giáo dục, khiến anh khó chọn. Anh cầu ‘Phụ thần’ giúp đỡ, và Giang Phàm thôi diễn hai lần: lần đầu tìm người mạnh về nhân đạo (Từ) hoặc vũ lực (Nhận), lần hai tìm người vừa cai trị tốt vừa phát triển khoa học kỹ thuật, kết quả là Khải – con trai thứ 18, 8 tuổi, thông minh và tò mò. Hoang bất ngờ nhưng tin tưởng, công bố Khải làm người thừa kế trước đám đông, rồi dạy con bái Giang Phàm. Khải ngơ ngác nhưng quỳ theo, còn Hoang qua đời an nhiên, được đời sau gọi là ‘Hoang Thiên Đế’ nhờ công lao thống nhất. Giang Phàm hứa giáo dục Khải, mở ra thời đại mới. Chương này nhấn mạnh vai trò của Giang Phàm như một vị thần định hướng, sự chuyển giao quyền lực từ Hoang sang Khải – một lựa chọn bất ngờ nhưng phù hợp lộ tuyến khoa học kỹ thuật, và sự kết thúc vinh quang của Hoang, để lại di sản lớn cho Vũ quốc và Lam Tinh.',
                  importantChanges: [
                    'Hoang từ hoàng đế sống -> qua đời, được gọi là ‘Hoang Thiên Đế’.',
                    'Khải từ con trai thứ 18 vô danh -> trở thành người thừa kế Đế Vị của Vũ quốc.',
                  ],
                },
                {
                  chapterIndex: 17,
                  summaryDetail:
                    'Chương 17 kể về thời đại của Khải, bắt đầu khi anh lên ngôi lúc 8 tuổi sau cái chết của Hoang. Nhờ uy tín của cha, Khải được chấp nhận dù nhỏ, với các lão thần quản lý quốc sự. Giang Phàm dạy anh 10 năm, đến 18 tuổi Khải tự chấp chính. Khải thông minh vượt Hoang, học nhanh, thậm chí nhận ra Lam Tinh đang lớn dần, phù hợp làm nhà khoa học kiếp trước. Dưới sự dẫn dắt, Vũ quốc chuyển từ bộ lạc sang phong kiến: văn tự đơn giản hóa, chế độ như nội các và Lục Bộ hình thành, nhân khẩu vượt 10 vạn, nhiều thành trì mọc lên, Đại Hoang thành thành thủ đô. Tuy nhiên, quyền lực lâu năm khiến Nhận (em Hoang, dũng sĩ) và Từ (con trưởng, nhân hậu) không muốn nhường ngôi, âm mưu chống Khải dù ban đầu ủng hộ anh. Trước ngày chấp chính, Nhận bao vây cung điện, Từ mang quân đối đầu, tạo thế giằng co. Bất ngờ, hỏa tiễn từ Công Bộ của Khải bắn dầu mỏ trong rãnh, thiêu cháy quân địch. Nhận chết trận, Từ đầu hàng và bị Khải xử tử, củng cố quyền lực. Chương này làm nổi bật thiên tài của Khải, sự hỗ trợ của Giang Phàm, và bước ngoặt của Vũ quốc nhờ khoa học kỹ thuật, dù đối mặt nội loạn từ gia đình Hoang.',
                  importantChanges: [
                    'Khải từ hoàng đế nhỏ tuổi -> tự chấp chính lúc 18 tuổi, đánh bại nội loạn.',
                    'Nhận từ dũng sĩ uy tín -> chết trận trong cung điện.',
                    'Từ từ người thừa kế tiềm năng -> đầu hàng và bị xử tử.',
                  ],
                },
                {
                  chapterIndex: 18,
                  summaryDetail:
                    'Chương 18 tập trung vào chiến thắng của Khải và sự phát triển khoa học kỹ thuật của Vũ quốc sau 10 năm dưới sự dạy dỗ của Giang Phàm. Anh nắm Công Bộ và Thân Vệ Quân, dùng dầu mỏ – tài nguyên thay sắt trên Lam Tinh – làm vũ khí, đốt cháy quân Nhận và Từ trong cung điện hẹp. Nhận chết sau trận chiến anh dũng, Từ đầu hàng nhưng bị Khải xử tử vì lòng nhân từ không phù hợp hoàng đế, theo lời Giang Phàm dạy. Sau đó, Khải tự chấp chính, nâng tầm Công Bộ, biến công tượng thành nghề danh giá (‘Đại sư’), lập học viện đào tạo kỹ thuật. Anh phát minh ‘tứ đại phát minh’ mới: tạo giấy, in ấn, kim chỉ nam, dầu hỏa – nhờ Giang Phàm truyền kiến thức – đẩy Vũ quốc vượt xa Trái Đất về tốc độ kỹ thuật, từ bộ lạc sang phong kiến trong vài trăm năm. Các lĩnh vực như nghệ thuật, văn học chậm phát triển do ưu tiên khoa học. Khi năng lượng bản nguyên gần cạn, Giang Phàm ngừng gia tốc, ra ngoài tìm cách kiếm thêm ở Tinh Cầu Hiệp Hội. Chương này nhấn mạnh sức mạnh của khoa học kỹ thuật qua dầu mỏ và phát minh, tài năng của Khải, và vai trò của Giang Phàm trong việc đẩy nhanh văn minh, đồng thời cho thấy nhu cầu mở rộng tài nguyên để duy trì Lam Tinh.',
                  importantChanges: [
                    'Khải từ người thừa kế yếu thế -> củng cố Đế Vị, phát minh tứ đại phát minh mới.',
                    'Vũ quốc từ thời đại bộ lạc -> tiến vào thời đại phong kiến, Công Bộ lên tầm cao mới.',
                  ],
                },
                {
                  chapterIndex: 19,
                  summaryDetail:
                    'Chương 19 chuyển sang Giang Phàm tìm kiếm năng lượng bản nguyên tại Tinh Cầu Hiệp Hội ở Giang Thành – tòa nhà 99 tầng nhộn nhịp. Anh biết hai cách kiếm bổn nguyên: mua (đắt đỏ) hoặc cướp từ tinh cầu vô chủ – tinh cầu của Chủ Tinh Cầu đã chết, thường tan vỡ thành Tử Tinh, là nguồn bổn nguyên chính. Tại quầy, anh hỏi thủ tục, được báo 10.000 đồng liên bang cho tinh cầu cấp một, nhưng miễn phí lần đầu. Giang Phàm chọn một tinh cầu võ giả sắp hỏng, tiết kiệm 10.000 đồng tích cóp, chuẩn bị cẩn thận vì nguy cơ từ siêu phàm văn minh. Về nhà, anh gặp Khải trong không gian thức tỉnh, người vui mừng gặp lại ‘Phụ thần’ sau nhiều năm. Khải luôn tò mò về thế giới ngoài Lam Tinh, từng đoán có thế giới khác. Giang Phàm tiết lộ kế hoạch mở thông đạo đến tinh cầu khác, cho phép người Lam Tinh khám phá. Chương này mở ra hướng phát triển mới cho Lam Tinh, từ tự cung tự cấp sang kết nối vũ trụ, nhấn mạnh sự thông minh của Khải và nhu cầu cấp bách của Giang Phàm trong việc duy trì diễn biến khi bổn nguyên cạn kiệt, đánh dấu bước chuyển từ nội tại sang ngoại vi.',
                  importantChanges: [
                    'Giang Phàm từ phát triển nội tại -> chuẩn bị cướp bổn nguyên từ tinh cầu vô chủ.',
                    'Khải từ cai trị Vũ quốc -> biết về kế hoạch kết nối tinh cầu khác.',
                  ],
                },
              ],
            },
          ],
        },
      ])
      .concat([
        {
          name: 'Kỷ Nguyên Khoa Học và Chinh Chiến',
          summaryDetail:
            'Arc này đánh dấu bước ngoặt trong sự phát triển của Lam Tinh dưới sự dẫn dắt của Giang Phàm, khi anh kết hợp khoa học kỹ thuật với chiến lược chinh phục các tinh cầu bên ngoài để nâng cao sức mạnh của Vũ quốc. Từ việc phát hiện Vibranium – một kim loại đặc biệt với khả năng hấp âm và tăng động năng – đến việc chế tạo Hấp Âm Tiễn và nghiên cứu thuốc súng, Lam Tinh chuyển mình từ một hành tinh phổ thông thành một thế lực tiềm năng. Khải, hoàng đế Vũ quốc, cùng các học giả đẩy nhanh tiến trình khoa học, từ y học đến vũ khí, chuẩn bị cho Giang Thành đại bỉ – cuộc thi lớn mang lại cơ hội tài chính và danh tiếng. Đồng thời, Giang Phàm mở rộng tầm nhìn ra vũ trụ, đưa Đại Hoang quân và Siêu Phàm nghiên cứu tiểu tổ chinh chiến các tinh cầu vô chủ như Võ Giả, Slime, và Hung Thú Tinh Cầu, nhằm rèn luyện quân đội và nghiên cứu Siêu Phàm sinh vật. Các chiến dịch này không chỉ nâng cao kinh nghiệm chiến đấu mà còn giúp Vũ quốc hiểu rõ nhược điểm của kẻ thù, từ Slime sợ muối và lửa đến Xích Nghê hung dữ nhưng đơn độc. Arc này thể hiện sự cân bằng giữa phát triển nội tại (khoa học) và mở rộng bên ngoài (chinh phục), khẳng định con đường khoa học kỹ thuật của Giang Phàm vượt qua định kiến về tinh cầu phổ thông, đặt nền móng cho tương lai lớn hơn.',
          miniArc: [
            {
              name: 'Phát Triển Khoa Học Kỹ Thuật',
              description:
                'Mini-arc này tập trung vào những bước tiến vượt bậc về khoa học kỹ thuật trên Lam Tinh, từ khám phá tài nguyên mới đến phát minh vũ khí thay đổi cục diện. Bắt đầu với việc phát hiện Vibranium – kim loại hấp âm độc đáo – Giang Phàm hướng dẫn Khải nghiên cứu và ứng dụng nó, tạo ra Hấp Âm Tiễn với tốc độ vượt trội nhờ thanh âm và khí thế. Y học Vũ quốc cũng phát triển mạnh mẽ, nâng cao điều kiện sống, trong khi Giang Phàm giảm can thiệp trực tiếp, để Khải tự khám phá. Sự kiện Giang Thành đại bỉ trở thành động lực, khi Đồng Chấn Thanh kinh ngạc trước tinh cầu 351.4 km của Giang Phàm, thúc anh tham gia để giành 100 triệu đồng liên bang và tài nguyên. Tiếp đó, Siêu Phàm phòng nghiên cứu ra đời, phân tích Võ Giả và phát triển chiến lược chống Siêu Phàm giả, dẫn đến ý tưởng thuốc súng – vũ khí tiềm năng vượt xa tốc độ âm thanh. Khải lập đội nghiên cứu, tận dụng diêm tiêu, lưu huỳnh, và than để chế tạo, mở ra một lĩnh vực mới. Mini-arc này nhấn mạnh tài năng của Khải, vai trò dẫn dắt của Giang Phàm, và sự chuyển đổi của Lam Tinh từ nền văn minh sơ khai sang thời đại công nghệ, sẵn sàng đối đầu các thế lực siêu phàm bên ngoài.',
              chapter: [
                {
                  chapterIndex: 30,
                  summaryDetail:
                    'Chương 30 Ngoài đời thực, anh rời căn hộ nhỏ 40 m² ở Liên Bang phòng cứu tế, đến quán ăn thì nghe tin một học sinh thức tỉnh tinh cầu trung cấp, được cấp ba Tinh Cầu Chủ nhận làm đệ tử, khiến gia đình ăn mừng bằng pháo. Điều này nhắc Giang Phàm về thi đại học – bước quan trọng để vào học phủ cao cấp, mục tiêu của anh nhờ hệ thống thôi diễn. Vào không gian thức tỉnh, anh quan sát Đại Hoang quân (3 vạn người, 1 vạn kỵ binh) săn Hoang Xà – loài đặc hữu của Lam Tinh, kết hợp voi và cự xà. Loài này có 1 cái đầu voi, thay vì vòi thì là 3 cái đầu rắn dài 20m, mỗi cái đầu có thể nhìn nghe, ngửi độc lập, chặt đi mọc lại. Trong trận săn, anh phát hiện một mũi tên nhanh bất thường (150 m/s so với 100 m/s), do binh sĩ dùng kim loại lạ thay thế sắt khan hiếm. Giang Phàm nghi ngờ đây là sản vật độc đáo của Lam Tinh, giống Vibranium trong khoa huyễn kiếp trước, và yêu cầu Khải đào thêm để nghiên cứu. Chương này làm nổi bật sự khác biệt của Lam Tinh với Trái Đất, tiềm năng tài nguyên mới, và quyết tâm của Giang Phàm trong việc khai thác chúng để nâng cao sức mạnh tinh cầu.',
                  importantChanges: [
                    'Vũ quốc từ điều kiện y học kém -> cải thiện mạnh mẽ nhờ Hàn.',
                    'Giang Phàm từ không biết -> phát hiện kim loại lạ (nghi là Vibranium) trên Lam Tinh.',
                  ],
                },
                {
                  chapterIndex: 31,
                  summaryDetail:
                    'Chương 31 tiếp nối khi Giang Phàm trở lại Lam Tinh sau bữa ăn, thấy Khải đã già đi (dưới 40 tuổi, tóc bạc, gầy gò) do thời gian gia tốc. Khải hưng phấn gặp ‘Phụ thần’, báo cáo nghiên cứu kim loại lạ từ thảo nguyên – tổng cộng 50 kg, trông bình thường nhưng có đặc tính độc đáo. Trong phòng thí nghiệm hoàng cung, Khải thử nghiệm: kim loại không dẫn nhiệt, cực kỳ cứng (phải đập几十次 mới gãy), và bất ngờ hấp thụ âm thanh, chuyển thành động năng, làm mũi tên nhanh hơn khi bắn kèm tiếng hét (nhanh hơn công cụ phát âm). Dù không bền như Vibranium thật (Marvel), nó hấp thụ nhiệt, năng lượng, và động năng ở mức độ nào đó, khiến Giang Phàm kết luận đây là phiên bản suy yếu của Vibranium. Khải đề nghị đặt tên, và Giang Phàm giữ nguyên ‘Vibranium’, hài lòng với khám phá này dù Lam Tinh mới thức tỉnh. Khải phong tỏa thông tin, đào thêm và lên kế hoạch ứng dụng. Chương này nhấn mạnh sự thông minh của Khải trong nghiên cứu, vai trò quan sát của Giang Phàm, và tiềm năng của Vibranium suy yếu như một bước tiến khoa học, mở ra khả năng chế tạo vũ khí mạnh mẽ cho Vũ quốc đối phó Siêu Phàm giả.',
                  importantChanges: [
                    'Khải từ khỏe mạnh -> già đi rõ rệt do thời gian gia tốc.',
                    'Lam Tinh từ không biết -> xác nhận có Vibranium suy yếu (50 kg đào được).',
                  ],
                },
                {
                  chapterIndex: 32,
                  summaryDetail:
                    'Chương 32 tập trung vào ứng dụng Vibranium và tin tức từ Đồng Chấn Thanh về Giang Thành đại bỉ. Khải đào thêm Vibranium (tổng 300 kg), dùng làm mũi tên nhờ độ cứng và khả năng hấp âm, dù số lượng ít vì Lam Tinh nhỏ. Tinh cầu đạt 351.4 km, 1250 loài, nhờ nhân khẩu tăng, khiến Giang Phàm hài lòng. Ngoài đời, Đồng Chấn Thanh gọi điện, hỏi về tinh cầu để chọn 5 học viên cho đại bỉ – cuộc thi thường niên của Thành Chủ Phủ, thăm dò thiên tài trước thi đại học. Giang Phàm báo 351.4 km, khiến Đồng Chấn Thanh hiểu lầm thành 51.4 km (tăng ít từ 35.2 km), thất vọng vì tinh cầu phổ thông. Khi nhận ra là 351.4 km, ông kinh ngạc, vì chưa từng có học viên nào đạt trên 300 km trong nửa tháng. Ông xếp Giang Phàm đầu danh sách Thất Trung, dù tiếc anh không dùng năng lượng siêu phàm. Chương này làm nổi bật sự vượt trội của Lam Tinh nhờ Vibranium và diễn biến tự nhiên, sự đánh giá sai ban đầu của Đồng Chấn Thanh, và bước tiến của Giang Phàm trong việc khẳng định vị thế, chuẩn bị cho đại bỉ để kiếm tài nguyên tiếp tục phát triển Lam Tinh.',
                  importantChanges: [
                    'Lam Tinh từ 83.6 km, 502 loài -> 351.4 km, 1250 loài.',
                    'Giang Phàm từ vô danh trong mắt Đồng Chấn Thanh -> đứng đầu danh sách đại bỉ Thất Trung.',
                  ],
                },
                {
                  chapterIndex: 33,
                  summaryDetail:
                    'Chương 33 tiếp nối cuộc gọi với Đồng Chấn Thanh, khi ông sốc vì tinh cầu Giang Phàm đạt 351.4 km – vượt xa thiên tài khác (100-200 km). Ông xác nhận đây là thành tích đệ nhất Thất Trung, đảm bảo suất đại bỉ. Giang Phàm ban đầu từ chối vì bận phát triển Lam Tinh và kiếm bổn nguyên ở Tinh Cầu Hiệp Hội, nhưng đổi ý khi nghe giải thưởng: 100 triệu đồng liên bang, tài nguyên từ Bảo Khố Thành Chủ, và hướng dẫn từ Thành Chủ (cấp 5 Tinh Cầu Chủ). Anh cần tiền mua bổn nguyên khi nửa phần cướp được sắp hết, nên đồng ý tham gia. Đồng Chấn Thanh mừng rỡ, thêm tên anh vào danh sách, thay học viên yếu hơn. Trong văn phòng, ông kinh ngạc trước tốc độ tăng trưởng của tinh cầu phổ thông, tiếc nuối vì không phải siêu phàm, nhưng công nhận tiềm năng của Giang Phàm. Chương này nhấn mạnh sự bất ngờ của Đồng Chấn Thanh trước khả năng của Giang Phàm, quyết tâm của anh trong việc tận dụng đại bỉ để giải quyết nhu cầu tài chính, và bước chuyển từ phát triển nội tại sang cạnh tranh bên ngoài, khẳng định Lam Tinh không thua kém các tinh cầu siêu phàm về tiềm lực.',
                  importantChanges: [
                    'Đồng Chấn Thanh từ nghi ngờ -> kinh ngạc và công nhận Giang Phàm là đệ nhất Thất Trung.',
                    'Giang Phàm từ không muốn -> quyết định tham gia Giang Thành đại bỉ.',
                  ],
                },
                {
                  chapterIndex: 34,
                  summaryDetail:
                    'Chương 34 xoay quanh việc Giang Phàm chuẩn bị cho đại bỉ bằng cách phát triển vũ khí Vibranium trên Lam Tinh. Sau cuộc gọi, anh vào không gian thức tỉnh, thấy Khải và các chuyên gia nghiên cứu Hấp Âm Tiễn từ hợp kim Vibranium – không hao mòn khi rèn, mạnh hơn Vibranium nguyên chất. Với 300 cân dự trữ, Khải chế tạo đủ cho một quân đoàn, dù nhược điểm là mũi tên phế đi khi hấp thụ nhiệt (đen sau khi dập lửa). Trong thử nghiệm, binh sĩ hét lớn đẩy tốc độ tiễn từ 150 m/s lên cao hơn, nhờ hấp âm và khí thế (dù khí thế yếu hơn). Giang Phàm khen ngợi, thấy tiềm năng chống Siêu Phàm giả, dù không hoàn hảo. Khải tiếc số lượng ít, nhưng Giang Phàm lạc quan, xem đây là bước tiến hợp lý. Chương này nhấn mạnh sự sáng tạo của Khải trong ứng dụng Vibranium, sự hỗ trợ của Giang Phàm, và sự sẵn sàng của Vũ quốc cho đại bỉ qua vũ khí mới, làm nổi bật con đường khoa học kỹ thuật của Lam Tinh trong việc đối phó kẻ thù mạnh hơn, chuẩn bị cho các thử thách lớn hơn phía trước.',
                  importantChanges: [
                    'Vũ quốc từ mũi tên thường -> sở hữu Hấp Âm Tiễn từ Vibranium hợp kim.',
                    'Khải từ nghiên cứu cơ bản -> ứng dụng thành công Vibranium vào vũ khí.',
                  ],
                },
                {
                  chapterIndex: 36,
                  summaryDetail:
                    'Chương 36 chuyển sang nghiên cứu Siêu Phàm giả và kế hoạch chinh chiến ngoại tinh của Giang Phàm. Anh chọn 3 tinh cầu cấp thấp (Võ Giả, Slime, Hung Thú) tại Tinh Cầu Hiệp Hội để rèn quân, hỏi nhân viên về ‘Ultraman tinh cầu’ nhưng không có, chỉ cười trừ. Trong không gian thức tỉnh, anh thông báo Khải mở thông đạo định kỳ từ ngày 1 hàng tháng, cảnh báo về nguy hiểm của Siêu Phàm giả đa dạng. Khải giới thiệu Siêu Phàm phòng nghiên cứu – nơi phân tích thi thể Võ Giả từ lần trước, phát hiện họ là người thường sở hữu chân khí không tinh thuần, để lại tai họa ngầm khi tu luyện. Với kính hiển vi và các học viện, họ hiểu Siêu Phàm giả có nhược điểm, không đáng sợ nếu nắm quy luật. Khải tự tin, xin dẫn quân chinh chiến, nhưng Giang Phàm từ chối, giao nhiệm vụ quan trọng hơn liên quan đến vũ khí siêu âm từng nhắc trước đây. Chương này làm nổi bật sự tiến bộ khoa học của Vũ quốc trong nghiên cứu Siêu Phàm giả, sự phối hợp giữa Giang Phàm và Khải, và bước chuẩn bị kép: chinh chiến ngoại tinh để rèn quân và phát triển vũ khí mới, khẳng định tiềm năng khoa học kỹ thuật vượt xa hạn chế của tinh cầu phổ thông.',
                  importantChanges: [
                    'Vũ quốc từ không biết -> hiểu bản chất Siêu Phàm giả qua Siêu Phàm phòng nghiên cứu.',
                    'Giang Phàm từ quan sát -> lên kế hoạch chinh chiến 3 tinh cầu và giao nhiệm vụ mới cho Khải.',
                  ],
                },
                {
                  chapterIndex: 37,
                  summaryDetail:
                    'Chương 37 giới thiệu thuốc súng – bước ngoặt khoa học của Vũ quốc dưới sự dẫn dắt của Giang Phàm. Anh hỏi Khải về vũ khí siêu âm (340 m/s trong không khí), và Khải nghi ngờ khả năng chế tạo với kỹ thuật hiện tại, dù Vibranium chỉ đạt 200 m/s tối đa. Giang Phàm tiết lộ đây là nền tảng của siêu âm vũ khí, gọi là thuốc súng – hỗn hợp diêm tiêu, than, lưu huỳnh – có uy lực lớn hơn, từng kết thúc thời đại vũ khí lạnh kiếp trước. Anh không cho tỷ lệ tối ưu (75% diêm tiêu, 15% than, 10% lưu huỳnh), để Khải tự nghiên cứu, tin Vũ quốc đủ khả năng. Khải nhận ra nguyên liệu quen thuộc từ pháo hoa, đoán vấn đề nằm ở tỷ lệ, lập đội nghiên cứu trong hoàng cung, phong tỏa nghiêm ngặt. Anh chọn Hàn – học trò cũ của Giang Phàm – dẫn quân chinh chiến ngoại tinh, kèm 10 người từ Siêu Phàm nghiên cứu tiểu tổ để vừa đánh vừa học. Chương này nhấn mạnh tầm nhìn của Giang Phàm trong việc đưa thuốc súng vào Lam Tinh, tài năng suy luận của Khải, và sự chuẩn bị song song: phát triển vũ khí mới và chinh chiến ngoại tinh, đưa Vũ quốc vào thời đại công nghệ vượt bậc, sẵn sàng đối đầu thử thách lớn hơn.',
                  importantChanges: [
                    'Khải từ không biết -> bắt đầu nghiên cứu thuốc súng với đội riêng.',
                    'Vũ quốc từ chuẩn bị cơ bản -> giao Hàn dẫn quân chinh chiến ngoại tinh.',
                  ],
                },
              ],
            },
            {
              name: 'Chinh Chiến Ngoại Tinh',
              description:
                'Mini-arc này xoay quanh các chiến dịch của Đại Hoang quân và Siêu Phàm nghiên cứu tiểu tổ trên các tinh cầu vô chủ, nhằm rèn luyện quân sự và hiểu Siêu Phàm sinh vật để chuẩn bị cho đại bỉ và tương lai. Từ tinh cầu Võ Giả yếu, họ chuyển sang Slime tinh cầu với nhuyễn thể quái hung dữ nhưng sợ muối và lửa, rồi đối mặt Xích Nghê trên Hung Thú Tinh Cầu – loài mạnh nhất, đầy nguy hiểm. Đại Hoang quân (3-5 vạn, kèm hậu bị 10 vạn) học cách phòng thủ, thăm dò, và khai thác nhược điểm kẻ thù, từ nước muối diệt Slime đến chuẩn bị cẩn thận với Xích Nghê. Siêu Phàm nghiên cứu tiểu tổ (10-15 người) quan sát thực địa, ghi chép đặc tính (Slime phân liệt, Xích Nghê nhảy xa), giảm nỗi sợ Siêu Phàm giả qua phân tích khoa học. Khải muốn tham gia nhưng tập trung nghiên cứu thuốc súng, để Hàn dẫn quân. Mini-arc này làm nổi bật sự tiến bộ của Vũ quốc trong chiến đấu và nghiên cứu, sự phối hợp giữa quân sự-khoa học, và quyết tâm của Giang Phàm trong việc biến Lam Tinh thành thế lực mạnh mẽ, sẵn sàng cạnh tranh với các tinh cầu siêu phàm trong đại bỉ và xa hơn.',
              chapter: [
                {
                  chapterIndex: 35,
                  summaryDetail:
                    'Chương 35 tập trung vào việc Giang Phàm chuẩn bị Đại Hoang quân (5 vạn chính quy, 10 vạn hậu bị) cho chinh chiến ngoại tinh, dù áp lực kinh tế khiến triều thần phản đối, bị Khải phớt lờ. Anh nhớ lần trước quân sợ Võ Giả, quyết định tăng thực chiến. Trong không gian thức tỉnh, anh yêu cầu Khải mở thông đạo sau 10 ngày tại sơn mạch gần Đại Hoang thành, nơi được canh gác nghiêm ngặt. Khải đồng ý, tin Vibranium giúp chống Siêu Phàm giả. Ngoài đời, Giang Phàm đến Tinh Cầu Hiệp Hội, chọn tinh cầu yếu (Slime, SpongeBob, Miên Bảo Bảo) để huấn luyện. Nhân viên giải thích Slime sống dưới biển, Miên Bảo Bảo trên đất, đều là Siêu Phàm sinh vật yếu, phù hợp trận địa và thủy chiến, dù tên giống nhân vật hoạt hình nhưng hung dữ. Anh quyết định sau, chuẩn bị cho quân đối mặt thử thách đa dạng. Chương này nhấn mạnh nhu cầu rèn quân của Giang Phàm sau kinh nghiệm Võ Giả, sự mong đợi của Khải với Vibranium, và bước đầu mở rộng ra vũ trụ, khẳng định chiến lược khoa học-kỹ thuật của Lam Tinh để vượt qua định kiến phổ thông, sẵn sàng cho đại bỉ và các cuộc chiến lớn hơn.',
                  importantChanges: [
                    'Đại Hoang quân từ 3 vạn -> 5 vạn chính quy, 10 vạn hậu bị.',
                    'Giang Phàm từ phát triển nội tại -> lên kế hoạch huấn luyện quân trên tinh cầu yếu.',
                  ],
                },
                {
                  chapterIndex: 38,
                  summaryDetail:
                    'Chương 38 kể về chiến dịch trên Slime tinh cầu sau Võ Giả tinh cầu. Đại Hoang quân (3 vạn) và Siêu Phàm nghiên cứu tiểu tổ (10 người, mang kính hiển vi, ống nhòm) chuẩn bị kỹ qua huấn luyện mô phỏng và tư tưởng, bớt sợ Siêu Phàm giả. Trên Võ Giả tinh cầu yếu (50 Võ Giả), họ chia quân rèn luyện, giết và bắt sống kẻ thù dễ dàng. Sang Slime tinh cầu, họ gặp nhuyễn thể quái xấu xí, hung dữ, không tổn thương bởi cung tiễn hay thương, khiến quân hoảng loạn. Khiên lớn ngăn cản, họ dựng công sự thủ thế, thăm dò dần. Sau một tháng, tiểu tổ ghi nhận Slime trí tuệ trung bình, biến hình, phân liệt/dung hợp, ăn tạp, nhược điểm chưa rõ. Một Slime bị bắt sống trong lồng tre để nghiên cứu. Đại Hoang quân kiên nhẫn, phối hợp tiểu tổ quan sát thực địa, vượt qua nỗi sợ ban đầu. Chương này làm nổi bật sự khác biệt giữa Võ Giả (dễ đánh) và Slime (khó đối phó), sự tiến bộ của Đại Hoang quân trong chiến thuật, và vai trò của Siêu Phàm nghiên cứu tiểu tổ trong việc hiểu kẻ thù, chuẩn bị cho thử thách lớn hơn trên tinh cầu tiếp theo, khẳng định chiến lược khoa học-quân sự của Lam Tinh.',
                  importantChanges: [
                    'Đại Hoang quân từ sợ Võ Giả -> tự tin hơn, đánh bại Võ Giả tinh cầu, đối mặt Slime.',
                    'Siêu Phàm nghiên cứu tiểu tổ từ nghiên cứu thi thể -> quan sát thực địa Slime, bắt sống mẫu.',
                  ],
                },
                {
                  chapterIndex: 39,
                  summaryDetail:
                    'Chương 39 tiếp nối với chiến thắng Slime tinh cầu và mở đầu Hung Thú Tinh Cầu. Sau một tháng, Đại Hoang quân dùng nước muối đặc chế và lửa diệt 60+ Slime, bắt sống vài con, kết luận chúng là nhuyễn thể sợ muối/lửa, yếu đi nếu mất Siêu Phàm năng lượng. Kinh nghiệm này tăng tự tin, giảm sợ hãi Siêu Phàm giả, dù vài binh sĩ bị loại do tâm lý yếu. Sau tu chỉnh, 3 vạn quân và tiểu tổ (tăng lên 15 người) vào Hung Thú Tinh Cầu, đối mặt Xích Nghê – hậu duệ Toan Nghê, cao 3 m, nhảy 10 m, lông đỏ, răng nanh sắc. Họ dựng công sự ngay, cử trinh sát, cảm nhận nguy hiểm như rừng mưa phía nam. Một tiếng gầm vang xa, trinh sát chạy về hoảng loạn, báo cáo gặp Xích Nghê ngủ, tỉnh dậy gầm nhưng không đuổi. Tiểu tổ phán đoán đây là Siêu Phàm sinh vật chính, khác Võ Giả/Slime, yêu cầu cẩn thận tránh sai lầm kinh nghiệm. Chương này làm nổi bật chiến thắng Slime nhờ khoa học (muối/lửa), sự chuẩn bị kỹ lưỡng của Đại Hoang quân, và bước ngoặt nguy hiểm với Xích Nghê, nhấn mạnh sự phối hợp quân sự-nghiên cứu của Vũ quốc để đối phó kẻ thù mạnh hơn, chuẩn bị cho đại bỉ và tương lai.',
                  importantChanges: [
                    'Đại Hoang quân từ đấu Slime -> diệt toàn bộ, chuẩn bị đối mặt Xích Nghê.',
                    'Siêu Phàm nghiên cứu tiểu tổ từ 10 -> 15 người, xác định nhược điểm Slime (muối/lửa).',
                  ],
                },
              ],
            },
          ],
        },
      ])
      .concat([
        {
          name: 'Hành Trình Chinh Phục và Vinh Quang',
          summaryDetail:
            'Arc này đánh dấu giai đoạn quan trọng trong sự phát triển của Lam Tinh dưới sự dẫn dắt của Giang Phàm, khi anh vừa hoàn tất chinh phục các tinh cầu cấp thấp để rèn luyện Đại Hoang quân, vừa chuẩn bị cho Giang Thành đại bỉ – cuộc thi quyết định danh tiếng và tài nguyên. Bắt đầu với chiến dịch trên Hung Thú Tinh Cầu, Đại Hoang quân đối mặt Xích Nghê – loài mãnh thú hung dữ nhưng lười biếng, sở hữu máu độc kinh người có thể hòa tan cả Siêu Phàm sinh vật. Từ đây, Vũ quốc phát triển vũ khí sinh vật từ máu Xích Nghê và hoàn thiện thuốc súng – hai phát minh mang tính cách mạng, nâng cao sức mạnh chống Siêu Phàm giả. Sau hai năm huấn luyện qua 8 tinh cầu (3 cấp thấp, 3 trung cấp, 2 cao cấp), Đại Hoang quân từ 5 vạn tăng lên 10 vạn, trở nên thiện chiến, phối hợp cùng Siêu Phàm viện nghiên cứu (tăng từ 15 lên 50 người) để tìm nhược điểm kẻ thù. Khải, dù già đi, vẫn tận tụy nghiên cứu và dẫn quân, sẵn sàng cho đại bỉ – nơi Giang Phàm được xếp hạng nhất hào hạt giống nhờ tinh cầu 35.2 km ban đầu. Arc này đạt đỉnh với trận đầu đại bỉ, khi Đại Hoang quân (3 ngàn) áp đảo Võ Giả tinh cầu của Vương Đằng (108 Võ Giả), thể hiện sức mạnh vượt trội của Lam Tinh dù chỉ là tinh cầu phổ thông. Arc nhấn mạnh sự kết hợp giữa khoa học, quân sự và chiến lược của Giang Phàm, biến Lam Tinh thành thế lực đáng gờm, sẵn sàng cạnh tranh với các thiên tài siêu phàm tại đại bỉ.',
          miniArc: [
            {
              name: 'Chiến Thắng Xích Nghê và Vũ Khí Mới',
              description:
                'Mini-arc này tập trung vào chiến dịch cuối cùng trên Hung Thú Tinh Cầu và những bước tiến khoa học sau đó trên Lam Tinh. Đại Hoang quân (3 vạn) và Siêu Phàm nghiên cứu tiểu tổ (15 người) đối mặt Xích Nghê – mãnh thú cao 3 m, nhảy xa 10 m, nhưng thích ở yên trong hang, thiếu tính công kích trừ khi bị khiêu khích. Họ phát hiện máu Xích Nghê chứa độc siêu mạnh, hòa tan cả xương tay binh sĩ, dẫn đến nghiên cứu chuyên sâu. Sau 3 ngày, 75 Xích Nghê bị bắt sống hoặc tiêu diệt, máu chúng được dùng để chế tạo vũ khí sinh vật – loại vũ khí mới chống Siêu Phàm giả như Võ Giả, Slime. Đồng thời, Khải thăng cấp Siêu Phàm phòng nghiên cứu thành viện nghiên cứu, tăng nhân lực để đẩy nhanh tiến độ. Song song, thuốc súng đạt đột phá với vụ nổ đầu tiên, dù chưa tối ưu, mở ra kỷ nguyên vũ khí vượt âm thanh. Mini-arc này làm nổi bật tài lãnh đạo của Hàn (dẫn quân), sự sáng tạo của Khải, và tầm nhìn của Giang Phàm trong việc biến nhược điểm kẻ thù (máu Xích Nghê) cùng tài nguyên (thuốc súng) thành lợi thế, chuẩn bị cho đại bỉ bằng sức mạnh khoa học và quân sự vượt trội, khẳng định tiềm năng của Lam Tinh dù chỉ là tinh cầu phổ thông.',
              chapter: [
                {
                  chapterIndex: 40,
                  summaryDetail:
                    'Chương 40 mở đầu chiến dịch trên Hung Thú Tinh Cầu, khi Đại Hoang quân nhận ra nguy hiểm từ Xích Nghê – mãnh thú đỏ thẫm cao lớn, nhưng không chủ động tấn công, khác hẳn Võ Giả hay Slime. Họ họp bàn, lo ngại tấn công trực diện ở địa bàn đối phương sẽ gây thương vong lớn nếu ít người, hoặc để Xích Nghê trốn thoát nếu đông. Một học giả đề xuất Xích Nghê có ý thức lãnh địa mạnh, mỗi khu vực chỉ có một con, được Hàn (tướng lĩnh) chấp thuận. Tiểu đội tinh nhuệ 100 người, trang bị cung nỏ tốc độ 120 m/s từ Thiên Công học viện, được cử đi thăm dò. Sau 1 giờ, họ trở về an toàn, báo cáo Xích Nghê cách 1 km, sống trong hang, cảnh giác cao nhưng chỉ nhìn rồi quay lại hang, không tấn công. Qua nhiều ngày điều tra, 75 Xích Nghê được phát hiện, đều lười biếng, thà đói chứ không rời hang trừ khi bị khiêu khích. Đại Hoang quân đặt bẫy, dụ chúng vào hố, vây đánh. Một Xích Nghê bị đâm chết, máu bắn vào tay binh sĩ, gây kêu thảm vì hòa tan tay. Chương này nhấn mạnh sự thận trọng của Đại Hoang quân, trí tuệ của Hàn trong chiến lược, và phát hiện bất ngờ về máu Xích Nghê, mở đường cho nghiên cứu mới, khẳng định khả năng đối phó Siêu Phàm sinh vật của Lam Tinh.',
                  importantChanges: [
                    'Đại Hoang quân từ thăm dò -> phát hiện 75 Xích Nghê và tập tính lười biếng.',
                    'Một binh sĩ từ khỏe mạnh -> mất tay do máu Xích Nghê độc.',
                  ],
                },
                {
                  chapterIndex: 41,
                  summaryDetail:
                    'Chương 41 tiếp nối với sự kinh hoàng khi máu Xích Nghê hòa tan tay binh sĩ thành xương trắng rồi tan biến, buộc đội trưởng chém đứt tay cứu anh ta, dù binh sĩ hôn mê. Vụ việc khiến sĩ khí giảm, nhưng Siêu Phàm nghiên cứu tiểu tổ bắt tay giải phẫu Xích Nghê, xác định máu chứa độc siêu mạnh từ Siêu Phàm năng lượng, vượt xa độc tố thường. Hàn ra lệnh nghiên cứu sâu, dẫn quân săn bắt sống 75 Xích Nghê trong 3 ngày nhờ trí tuệ thấp và tính đơn độc của chúng. Sau chiến dịch 3 tinh cầu, Đại Hoang quân nghỉ 3 tháng, còn Siêu Phàm viện nghiên cứu (nâng cấp từ phòng nghiên cứu) phát hiện máu Xích Nghê ăn mòn cả Võ Giả và Slime. Khải đề xuất với Giang Phàm chế tạo vũ khí sinh vật từ máu này để chống Siêu Phàm giả, được Giang Phàm đồng ý. Khải hối tiếc không tự nghĩ ra, nhưng hào hứng với ý tưởng. Thuốc súng cũng có tiến triển song song. Chương này làm nổi bật sự phối hợp quân sự-nghiên cứu của Vũ quốc, tài năng của Hàn trong chiến đấu, sự sáng tạo của Khải, và tầm nhìn của Giang Phàm trong việc biến máu Xích Nghê thành vũ khí, nâng cao sức mạnh Lam Tinh cho đại bỉ và tương lai.',
                  importantChanges: [
                    'Siêu Phàm phòng nghiên cứu -> thăng cấp thành Siêu Phàm viện nghiên cứu.',
                    'Vũ quốc từ không có -> sở hữu vũ khí sinh vật từ máu Xích Nghê.',
                  ],
                },
                {
                  chapterIndex: 42,
                  summaryDetail:
                    'Chương 42 tập trung vào sự ra đời của thuốc súng trên Lam Tinh, song song với chuẩn bị đại bỉ. Khải thử nghiệm thuốc súng (diêm tiêu, than, lưu huỳnh) trong hoàng cung, gây vụ nổ rung trời, dù chưa đạt tỷ lệ tối ưu vẫn đủ sát thương. Giang Phàm hài lòng, nhưng Khải muốn cải tiến để đạt uy lực siêu âm (340 m/s), nhận ra tốc độ hạt thuốc nổ vượt âm thanh, cần thu nhỏ mà giữ sức mạnh. Anh mua 5 tinh cầu mạnh hơn (so với 3 tinh cầu trước) để huấn luyện. Qua 1 năm, Đại Hoang quân (10 vạn) và Siêu Phàm nghiên cứu tiểu tổ (50 người) chinh phục chúng, dù có thương vong nhưng khí thế tăng vọt, phối hợp kỵ binh-bộ binh hiệu quả. Sau 2 năm, họ hoàn tất 8 tinh cầu (3 thấp, 3 trung, 2 cao), sẵn sàng cho trung và cao cấp văn minh. Khải già đi, vừa nghiên cứu thuốc súng vừa lo chiến dịch, hỏi Giang Phàm lý do 2 năm bận rộn. Chương này nhấn mạnh bước ngoặt với thuốc súng, sự phát triển của Đại Hoang quân qua chinh chiến, tài năng khoa học của Khải, và chiến lược dài hạn của Giang Phàm, chuẩn bị Lam Tinh cho đại bỉ bằng sức mạnh quân sự và khoa học vượt trội.',
                  importantChanges: [
                    'Đại Hoang quân từ 5 vạn -> 10 vạn, thiện chiến hơn sau 8 tinh cầu.',
                    'Siêu Phàm nghiên cứu tiểu tổ từ 15 -> 50 người.',
                    'Vũ quốc từ không có -> sở hữu thuốc súng với vụ nổ đầu tiên.',
                  ],
                },
              ],
            },
            {
              name: 'Đại Bỉ Khai Màn và Đối Đầu Đầu Tiên',
              description:
                'Mini-arc này xoay quanh sự khởi đầu của Giang Thành đại bỉ – cuộc thi lớn nhất Giang Thành, nơi Giang Phàm đại diện Thất Trung với tư cách nhất hào hạt giống nhờ tinh cầu 35.2 km ban đầu. Sau 2 năm huấn luyện (ngoài đời nửa tháng), Khải dẫn 10 vạn Đại Hoang quân sẵn sàng chiến đấu vì vinh quang của Giang Phàm, dù già yếu vẫn xin dẫn quân. Đại bỉ quy tụ thiên tài như Bộ Kinh Nguyệt (siêu cấp Tu Tiên tinh cầu), Đường Thanh Thanh (hơn 100 km), Lục Đào, Phương Chấn Đình (hơn 30 km ban đầu), nhưng Giang Phàm bị xem thường vì tinh cầu phổ thông. Anh gặp đồng đội (Mã Tùng Đào, Hướng Quân Hạo, Đường Thanh Thanh), được Khâu Vân Phi dẫn dắt, và đối mặt áp lực từ các trường mạnh như Nhất Trung. Trận đầu, 3 ngàn Đại Hoang quân áp đảo 108 Võ Giả của Vương Đằng bằng chiến thuật Tam Vị Nhất Thể (khiên, thương, tiễn), khiến quan chiến sốc vì sức mạnh của Lam Tinh. Mini-arc này làm nổi bật sự chuẩn bị của Giang Phàm, tài lãnh đạo của Khải, và khả năng của Đại Hoang quân, khẳng định Lam Tinh vượt định kiến phổ thông, sẵn sàng cạnh tranh với thiên tài siêu phàm.',
              chapter: [
                {
                  chapterIndex: 43,
                  summaryDetail:
                    'Chương 43 mở đầu với Khải hỏi Giang Phàm về 2 năm bận rộn, được giải thích là chuẩn bị cho đại bỉ – cuộc đấu giữa các Tinh Cầu Chủ qua sinh mệnh trên tinh cầu, mang lại vinh quang và thưởng lớn. Khải, dù già, xin dẫn quân và được đồng ý vì thời gian không còn nhiều. Ngoài đời (nửa tháng), Giang Phàm đến Thất Trung tham gia đại bỉ, gặp Mã Tùng Đào (gia cảnh tốt), Hướng Quân Hạo (gần 100 km, kiêu ngạo), Đường Thanh Thanh (hơn 100 km, lạnh nhạt với anh vì tinh cầu phổ thông), và một nam sinh mặt chữ điền. Khâu Vân Phi (tứ cấp Tinh Cầu Chủ) dẫn đội, nhận định chỉ Đường Thanh Thanh có cơ hội ra biên, khiến các đồng đội bất mãn trừ Giang Phàm – chỉ muốn thắng nhanh để lấy thưởng, tiếp tục phát triển Lam Tinh. Chương này làm nổi bật sự tận tụy của Khải, sự thờ ơ của Giang Phàm với danh tiếng, và áp lực từ thiên tài khác, đặt nền cho đại bỉ nơi Lam Tinh phải chứng minh giá trị dù bị xem thường vì không siêu phàm.',
                  importantChanges: [
                    'Khải từ không biết -> hiểu mục tiêu đại bỉ, xin dẫn quân.',
                    'Giang Phàm từ chuẩn bị nội bộ -> tham gia đại bỉ với tư cách Thất Trung tuyển thủ.',
                  ],
                },
                {
                  chapterIndex: 44,
                  summaryDetail:
                    'Chương 44 miêu tả không khí sôi động khi đại bỉ bắt đầu tại Giang Thành trung tâm tràng quán. Khâu Vân Phi dẫn Giang Phàm và đồng đội đến bằng phù xe – phương tiện từ trung cấp văn minh, tiện lợi hơn ô tô kiếp trước. Tràng quán cấm truyền thông, tụ tập thiên tài từ các trường. Mã Tùng Đào chỉ Nhị Trung Lục Đào (31.2 km ban đầu), Tam Trung Phương Chấn Đình (31.3 km), Kim Diệu Vương Thiên Dật (hơn 30 km), nổi bật giữa đám đông. Trong phòng nghỉ, các lão sư tán dương Đường Thanh Thanh (top 10 tiềm năng), Phương Chấn Đình (top 4), nhưng cho rằng quán quân thuộc về Nhất Trung ‘vị kia’. Khâu Vân Phi gặp Đường Ngọc Thụ – lão sư Thiên Tinh đại học (tứ cấp Tinh Cầu Chủ), có thể là anh Đường Thanh Thanh, đến tuyển sinh. Chương này nhấn mạnh sự cạnh tranh gay gắt giữa thiên tài, vị thế thấp của Giang Phàm trong mắt đồng đội và lão sư vì tinh cầu phổ thông, và tầm quan trọng của đại bỉ với sự xuất hiện của nhân vật cấp cao, chuẩn bị cho màn ra mắt ấn tượng của Lam Tinh.',
                  importantChanges: [
                    'Giang Phàm từ vô danh trong mắt đồng đội -> được Đường Ngọc Thụ chú ý nhẹ.',
                    'Thất Trung từ không nổi bật -> có 2 thiên tài (Giang Phàm, Đường Thanh Thanh) tham gia.',
                  ],
                },
                {
                  chapterIndex: 45,
                  summaryDetail:
                    'Chương 45 làm nóng không khí đại bỉ với sự xuất hiện của nhiều yêu nghiệt. Lục Đào (Nhị Trung) và Phương Chấn Đình (Tam Trung) đối thoại căng thẳng, đều là thiên tài hơn 31 km ban đầu, cạnh tranh top 3. Vương Thiên Dật (Kim Diệu) thu hút chú ý bởi vẻ ngoài và实力 (hơn 30 km). Đám đông bàn tán đây là đại bỉ mạnh nhất lịch sử Giang Thành, với 5 thiên tài siêu cấp (hơn 30 km) và nhiều đỉnh cấp (hơn 25 km), được thành chủ coi trọng, tăng thưởng. Khâu Vân Phi dẫn đội gặp Đường Ngọc Thụ, xác nhận anh tuyển sinh cho Thiên Tinh đại học, khiến Mã Tùng Đào, Hướng Quân Hạo kinh ngạc. Nhất Trung Bộ Kinh Nguyệt – siêu cấp Tu Tiên tinh cầu – xuất hiện, được ca ngợi là mạnh nhất, quán quân không thể tranh cãi. Đường Thanh Thanh quyết tranh á quân, thừa nhận thua Bộ Kinh Nguyệt. Thành chủ (cấp 5 Tinh Cầu Chủ) đến, khai mạc ngắn gọn, bắt đầu rút thăm 32 tổ. Chương này làm nổi bật sự vượt trội của Bộ Kinh Nguyệt, áp lực lên Giang Phàm và Thất Trung, và tầm vóc đại bỉ, chuẩn bị cho màn thể hiện bất ngờ của Lam Tinh.',
                  importantChanges: [
                    'Bộ Kinh Nguyệt từ vô danh trong mắt Giang Phàm -> được công nhận là quán quân tiềm năng.',
                    'Đường Thanh Thanh từ tự tin -> quyết tâm tranh á quân, thừa nhận thua Bộ Kinh Nguyệt.',
                  ],
                },
                {
                  chapterIndex: 46,
                  summaryDetail:
                    'Chương 46 đánh dấu khai mạc đại bỉ với sự xuất hiện của Bộ Kinh Nguyệt – nữ sinh thanh lãnh từ Nhất Trung, sở hữu Tu Tiên tinh cầu, được xem là quán quân vô đối. Đường Ngọc Thụ khuyên Đường Thanh Thanh chỉ tranh á quân, công nhận chênh lệch với Bộ Kinh Nguyệt. Lục Đào và Phương Chấn Đình thừa nhận khó đoạt quán quân, nhắm trận chung kết. Thành chủ (cấp 5 Tinh Cầu Chủ) đến, khai mạc ngắn gọn, kêu gọi học sinh尽力. Rút thăm 32 tổ bắt đầu, Giang Phàm trở thành nhất hào hạt giống nhờ 35.2 km ban đầu, vượt Bộ Kinh Nguyệt (số 2), Đường Thanh Thanh (số 6), gây chú ý dù bị xem thường vì tinh cầu phổ thông. 320 học sinh từ hơn 100 trường, chia 32 tổ (mỗi tổ 10 người), đấu vòng tròn, chỉ 1 ra tuyến, cực kỳ khốc liệt. Thất Trung (top 10-15 trước đây) có 5 suất, Nhất Trung (5 lần quán quân) có 8. Chương này nhấn mạnh vị thế bất ngờ của Giang Phàm, sự vượt trội của Bộ Kinh Nguyệt, và tính cạnh tranh cao của đại bỉ, đặt nền cho trận đầu của Lam Tinh chứng minh sức mạnh.',
                  importantChanges: [
                    'Giang Phàm từ vô danh trong đại bỉ -> trở thành nhất hào hạt giống.',
                    'Thất Trung từ trung bình -> có 2 hạt giống top 10 (Giang Phàm số 1, Đường Thanh Thanh số 6).',
                  ],
                },
                {
                  chapterIndex: 47,
                  summaryDetail:
                    'Chương 47 khởi động đại bỉ với rút thăm 32 tổ, mỗi tổ 10 người đấu vòng tròn, chỉ 1 ra tuyến. Giang Phàm (nhất hào hạt giống) được Đồng Chấn Thanh đánh giá tổ yếu, dễ ra tuyến, dù bị Nhất Trung Lan Hạo chế nhạo vì tinh cầu phổ thông dễ thua Siêu Phàm giả. Trận đầu, anh đối Vương Đằng (trung võ tinh cầu), tự tin phá kỷ lục số 1 hạt giống không thua trận đầu. Trên Lam Tinh, Khải (già yếu) dẫn 10 vạn quân (5 vạn chính quy, 5 vạn dự bị), trục xuất đại thần phản đối để chuẩn bị, động viên hùng hồn trước thông đạo. Anh phái 3 ngàn Đại Hoang quân và 20 người Siêu Phàm nghiên cứu tiểu tổ vào sân đấu – tinh cầu hoang vu với tường năng lượng ngăn cách. Khi tường biến mất, họ đối mặt 108 Võ Giả của Vương Đằng, khiến quan chiến sốc vì số lượng vượt dự đoán (800-1000). Chương này làm nổi bật sự chuẩn bị kỹ lưỡng của Khải, quyết tâm của Giang Phàm thắng nhanh lấy thưởng, và bất ngờ từ Lam Tinh, sẵn sàng phá định kiến phổ thông trong trận đầu đại bỉ.',
                  importantChanges: [
                    'Khải từ quản lý nghiên cứu -> dẫn 10 vạn quân cho đại bỉ, trục xuất đại thần phản đối.',
                    'Giang Phàm từ chuẩn bị -> bắt đầu trận đầu đại bỉ với 3 ngàn quân.',
                  ],
                },
                {
                  chapterIndex: 48,
                  summaryDetail:
                    'Chương 48 kể trận đầu đại bỉ, khi 3 ngàn Đại Hoang quân của Giang Phàm đối 108 Võ Giả của Vương Đằng. Vương Đằng coi thường quân Lam Tinh là ‘cừu yếu’, ra lệnh Võ Giả (trung võ thế giới) xông lên như ‘108 mãnh hổ’. Nhưng Đại Hoang quân, dưới sự chỉ huy của Khải, bày trận Tam Vị Nhất Thể: khiên sắt dày ngăn xung phong, trường thương dài đâm, cung tiễn bắn liên tục. Khi năng lượng tường biến mất, họ bắn tên phủ đầu, nhắm Võ Giả nhảy giữa không trung bằng đội 3 người (thượng, trung, hạ), khiến đối thủ lộ sơ hở, ngã xuống và bị tiêu diệt dần. Quan chiến sốc vì số lượng và tổ chức của Lam Tinh, vượt xa dự đoán 800-1000 người. Vương Đằng hoảng hốt, các lão sư như Lan Hạo (Nhất Trung) im lặng trước sức mạnh bất ngờ. Chương này nhấn mạnh chiến thuật vượt trội của Đại Hoang quân, sự tự tin sai lầm của Vương Đằng, và khả năng của Giang Phàm biến Lam Tinh thành ‘Tu La tràng’, chứng minh tinh cầu phổ thông có thể áp đảo Siêu Phàm giả trong đại bỉ.',
                  importantChanges: [
                    'Đại Hoang quân từ chuẩn bị -> áp đảo 108 Võ Giả của Vương Đằng trong trận đầu.',
                    'Vương Đằng từ tự tin -> hoảng hốt trước sức mạnh Lam Tinh.',
                  ],
                },
                {
                  chapterIndex: 49,
                  summaryDetail:
                    'Chương 49 tiếp nối trận đầu với chiến thuật Tam Vị Nhất Thể của Đại Hoang quân: khiên sắt chặn, trường thương dài 2 m đâm, cung tiễn thủ bắn dày đặc, phối hợp 500 khinh kỵ binh sẵn sàng đánh bất ngờ. Khải chỉ huy giữa trận, tận dụng kinh nghiệm chống Võ Giả từ các chiến dịch trước. 108 Võ Giả của Vương Đằng (tự xưng tông chủ) xông lên, nhưng bị bắn hạ giữa không trung bởi đội 3 người nhắm 3 hướng, không thể né, liên tục ngã xuống dưới mưa tên. Cung tiễn thủ khác phủ kín không gian, khóa đường thoát. Quan chiến ngỡ ngàng vì 3 ngàn quân tổ chức chặt chẽ, vượt xa Siêu Phàm giả thông thường (thường ít hơn, khó nuôi). Vương Đằng từ tự tin thành tuyệt vọng trước quân Lam Tinh thiện chiến, khác hẳn người thường sợ hãi trong các trận trước. Chương này làm nổi bật sự phối hợp hoàn hảo của Đại Hoang quân, tài chỉ huy của Khải, và chiến lược của Giang Phàm, biến trận đấu thành màn tàn sát, khẳng định Lam Tinh dù phổ thông vẫn đủ sức tiêu diệt Siêu Phàm giả trong đại bỉ, gây sốc cho đối thủ và quan sát viên',
                },
              ],
            },
          ],
        },
      ]),
  },
]

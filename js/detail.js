// // TẠO API
// const express = require('express');
// const router = express.Router();

// const orders = [
//     {
//         id: 1,
//         name: "Annibale Colombo Bed",
//         rating: 4.5,
//         sold: 300,
//         price: 1899.99,
//         discountPercentage: 0.29,
//         discountPrice: 1894.48,
//         imgProduct: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
//         color: ["Black", "Red", "White"],
//         size: ["1m4 x 2m", "1m8 x 2m", "2m x 2m"],
//         distributor: [
//             {
//                 name: "VNBed Unit",
//                 reviewNumbers: "100k",
//                 productNumbers: "100",
//                 timeJoin: "2020-01-01",
//                 followers: "120.8k",
//                 positiveReviewRate: "98%",
//                 logoShop: "https://drive.google.com/file/d/1qRIbl-ee2lulvE4R0jiM-Bl_t85xUzYS/view?usp=sharing"
//             }
//         ],
//         brand: "Annibale Colombo",
//         delivery:[
//             {
//             customer: "Lionel Messi",
//             address: "02 Vo Oanh, Phuong 25, Quan Binh Thanh, TP. HCM",
//             phone: "0987654321",
//             shippingUnit: "BraveSaleEXPRESS.vn"
//             }
//         ],
//         voucherShopName:"Giảm 5% cho đơn hàng đầu tiên",
//         voucherShopCode:"BSFirstOrder",
//         SpecialInfo: ["Được làm từ chất liệu gỗ sồi cực kì chắc chắn", "Các góc cạnh được hoàn thiện mượt mà, tránh gây nguy hiểm cho người dùng.", "Giường được xử lý bằng các lớp phủ chống bám bẩn hoặc chống nước."],
//         DetailInfo: [
//             {
//                 name: "Chất liệu",
//                 value: "Gỗ"
//             },
//             {
//                 name: "Kích thước",
//                 value: "1m4 x 2m"
//             },
//             {
//                 name: "Màu sắc",
//                 value: "Black"
//             },
//             {
//                 name: "Thương hiệu",
//                 value: "Annibale Colombo"
//             },
//             {
//                 name: "Bảo hành",
//                 value: "12 tháng"
//             },
//             {
//                 name:"Xuất xứ",
//                 value:"USA"
//             },
//             {
//                 name: "Mã sản phẩm",
//                 value: "BS-123456"
//             },
//             {
//                 name: "Trọng lượng",
//                 value: "50kg"
//             }
//         ],
//         descriptionDetail: [
//             {
//                 introFeature: "Giường đa năng - Kết hợp sofa, tủ đồ và giường ngủ",
//                 description: ["Giường gỗ tự nhiên với thiết kế đơn giản nhưng tinh tế, mang đến không gian ngủ ấm cúng và sang trọng. Chất liệu gỗ bền bỉ, giúp giường duy trì độ bền lâu dài.", 
//                     "Giường tầng tiết kiệm không gian, phù hợp cho phòng ngủ của trẻ em. Thiết kế chắc chắn và an toàn, với các bậc thang dễ sử dụng.", 
//                     "Chiếc giường bọc nệm hiện đại này có khung giường được phủ lớp nệm dày, giúp tạo sự êm ái tuyệt đối cho giấc ngủ. Lớp vải hoặc da cao cấp không chỉ tạo nên vẻ ngoài sang trọng mà còn dễ dàng vệ sinh, bảo quản. Thiết kế đầu giường cao giúp người sử dụng có thể tựa lưng thoải mái khi đọc sách hoặc xem TV. Với màu sắc trung tính và chi tiết trang trí tinh tế, chiếc giường này phù hợp với nhiều phong cách nội thất từ hiện đại đến cổ điển, mang lại sự thanh thoát cho không gian phòng ngủ.", 
//                     "Giường thông minh với ngăn kéo dưới gầm giúp tận dụng tối đa diện tích phòng ngủ. Phần ngăn kéo rộng rãi có thể cất giữ chăn màn, quần áo hoặc đồ dùng cá nhân, giúp phòng ngủ luôn gọn gàng. Một số mẫu giường còn được thiết kế với cơ chế nâng giường, giúp việc lấy đồ dễ dàng hơn. Khung giường làm từ gỗ tự nhiên hoặc MDF chống ẩm, đảm bảo độ bền và tính thẩm mỹ lâu dài. Đây là lựa chọn lý tưởng cho những không gian nhỏ hoặc những gia đình cần tối ưu hóa không gian lưu trữ.", 
//                     "Lấy cảm hứng từ phong cách tối giản của người Nhật, giường này có thiết kế thấp, gần mặt đất, mang lại cảm giác thư thái và rộng rãi cho không gian. Được làm từ gỗ tự nhiên như gỗ thông hoặc gỗ sồi, chiếc giường có vẻ ngoài giản dị nhưng thanh lịch. Không có đầu giường cầu kỳ, giúp tăng không gian cho căn phòng và tạo cảm giác dễ chịu. Đây là một lựa chọn tuyệt vời cho những ai yêu thích sự nhẹ nhàng, tinh tế và không gian sống thoải mái."]
//             }
//         ],
//         review: [
//             {
//                 id: 1,
//                 name: "Nguyễn Văn A",
//                 rating: 4.9,
//                 ratingDescription: "Cực kì hài lòng",
//                 category: "1m4 x 2m",
//                 avatar: "https://drive.google.com/file/d/1oO0ZvAgytywiT0Hzma0PPbJUxfcZDVED/view?usp=sharing",
//                 time: "2024-12-08 19:30",
//                 likeNumber: 50,
//                 status: "Đã mua hàng",
//                 comment: "Sản phẩm tốt, chất lượng tốt, giá cả hợp lý",
//                 mediaReview: ["https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"] // Ảnh hoặc video review
//             },
//             {
//                 id: 2,
//                 name: "Trần Thị B",
//                 rating: 4.8,
//                 ratingDescription: "Hài lòng",
//                 category: "1m2 x 2m",
//                 avatar: "https://drive.google.com/file/d/1VPKxr8EWLsjqtvxxp9-eP9o9K6TCPqMP/view?usp=sharing",
//                 time: "2024-12-09 10:00",
//                 likeNumber: 42,
//                 status: "Đã mua hàng",
//                 comment: "Sản phẩm rất đẹp, chất lượng tốt, giao hàng nhanh chóng",
//                 mediaReview: ["https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", 
//                     "https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"]
//             },
//             {
//                 id: 3,
//                 name: "Lê Minh C",
//                 rating: 4.7,
//                 ratingDescription: "Hài lòng",
//                 category: "1m6 x 2m",
//                 avatar: "https://drive.google.com/file/d/1oO0ZvAgytywiT0Hzma0PPbJUxfcZDVED/view?usp=sharing",
//                 time: "2024-12-09 14:30",
//                 likeNumber: 63,
//                 status: "Đã mua hàng",
//                 comment: "Chất lượng tốt nhưng cần cải thiện dịch vụ giao hàng",
//                 mediaReview: ["https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"]
//             },
//             {
//                 id: 4,
//                 name: "Phan Hữu D",
//                 rating: 5.0,
//                 ratingDescription: "Cực kì hài lòng",
//                 category: "1m4 x 2m",
//                 avatar: "https://drive.google.com/file/d/1oO0ZvAgytywiT0Hzma0PPbJUxfcZDVED/view?usp=sharing",
//                 time: "2024-12-09 16:00",
//                 likeNumber: 78,
//                 status: "Đã mua hàng",
//                 comment: "Sản phẩm tuyệt vời, đúng như mô tả",
//                 mediaReview: ["https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"]
//             },
//             {
//                 id: 5,
//                 name: "Nguyễn Thị E",
//                 rating: 4.6,
//                 ratingDescription: "Hài lòng",
//                 category: "1m8 x 2m",
//                 avatar: "https://drive.google.com/file/d/1VPKxr8EWLsjqtvxxp9-eP9o9K6TCPqMP/view?usp=sharing",
//                 time: "2024-12-09 18:20",
//                 likeNumber: 54,
//                 status: "Đã mua hàng",
//                 comment: "Sản phẩm sử dụng rất tốt, nhưng chất liệu có thể cải thiện",
//                 mediaReview: ["https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"]
//             },
//             {
//                 id: 6,
//                 name: "Đỗ Văn F",
//                 rating: 4.9,
//                 ratingDescription: "Cực kì hài lòng",
//                 category: "1m2 x 2m",
//                 avatar: "https://drive.google.com/file/d/1oO0ZvAgytywiT0Hzma0PPbJUxfcZDVED/view?usp=sharing",
//                 time: "2024-12-10 09:00",
//                 likeNumber: 90,
//                 status: "Đã mua hàng",
//                 comment: "Mua lần thứ 2 rồi, rất ưng ý, sẽ tiếp tục ủng hộ",
//                 mediaReview: ["https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", "https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"]
//             }
//         ]
//     }
// ]

// const suggestProduct = [
//     {
//         id: 1,
//         name: "Bàn làm việc",
//         price: 1000000,
//         discountPrice: 970000,
//         image: "",
//         rating: 4.9,
//         sold: "1.2k"
//     },
//     {
//         id: 2,
//         name: "Ghế xoay văn phòng",
//         price: 750000,
//         discountPrice: 700000,
//         image: "",
//         rating: 4.8,
//         sold: "1.5k"
//     },
//     {
//         id: 3,
//         name: "Kệ sách gỗ",
//         price: 1200000,
//         discountPrice: 1100000,
//         image: "",
//         rating: 4.7,
//         sold: "800"
//     },
//     {
//         id: 4,
//         name: "Tủ tài liệu",
//         price: 1500000,
//         discountPrice: 1400000,
//         image: "",
//         rating: 4.6,
//         sold: "600"
//     },
//     {
//         id: 5,
//         name: "Bàn học sinh",
//         price: 600000,
//         discountPrice: 570000,
//         image: "",
//         rating: 4.5,
//         sold: "1.3k"
//     },
//     {
//         id: 6,
//         name: "Bàn cafe",
//         price: 800000,
//         discountPrice: 750000,
//         image: "",
//         rating: 4.9,
//         sold: "1k"
//     },
//     {
//         id: 7,
//         name: "Ghế bành",
//         price: 2000000,
//         discountPrice: 1800000,
//         image: "",
//         rating: 4.8,
//         sold: "900"
//     },
//     {
//         id: 8,
//         name: "Bàn giám đốc",
//         price: 3000000,
//         discountPrice: 2800000,
//         image: "",
//         rating: 4.7,
//         sold: "400"
//     },
//     {
//         id: 9,
//         name: "Kệ tivi",
//         price: 1500000,
//         discountPrice: 1400000,
//         image: "",
//         rating: 4.6,
//         sold: "500"
//     },
//     {
//         id: 10,
//         name: "Tủ quần áo",
//         price: 2500000,
//         discountPrice: 2400000,
//         image: "",
//         rating: 4.9,
//         sold: "650"
//     },
//     {
//         id: 11,
//         name: "Bàn ăn",
//         price: 2200000,
//         discountPrice: 2100000,
//         image: "",
//         rating: 4.7,
//         sold: "1k"
//     },
//     {
//         id: 12,
//         name: "Ghế ăn",
//         price: 500000,
//         discountPrice: 450000,
//         image: "",
//         rating: 4.8,
//         sold: "800"
//     }
// ]

// router.get('/orders', (req, res)=>{
//     res.json(orders)
// })

// router.get('/orders/:id', (req, res)=>{
//     const orderId = parseInt(req.params.id);
//     const order = orders.find(o => o.id === orderId);

//     if (order) {
//         res.json(order);
//     }
//     else {
//         res.status(404).json({ message: 'Order not found' });
//     }
// })

// router.get('/suggest-products', (req, res) => {
//     res.json(suggestProduct);
// })

// // Fetch product details by ID
// router.get('/suggest-products/:id', (req, res) => {
//     const productId = parseInt(req.params.id);
//     const product = orders.find(item => item.id === productId);

//     if (product) {
//         res.json(product);  // Send product details as JSON
//     } else {
//         res.status(404).json({ message: "Product not found" });  // If the product doesn't exist
//     }
// });


// const app = express();
// const port = 3000;

// app.use('/api', router);

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// })





document.addEventListener("DOMContentLoaded", function () {
    const description = document.querySelector(".main__detail-center-info-description-wrapper");
    const blurLayer = document.getElementById("blurLayer");
    const btnShowMore = document.getElementById("btn-show-more");
    const btnShowLess = document.getElementById("btn-show-less");

    btnShowMore.addEventListener("click", function () {
      description.classList.remove("hidden");
      blurLayer.classList.add("hidden");
      btnShowMore.style.display = "none";
      btnShowLess.style.display = "block";
    });
  
    btnShowLess.addEventListener("click", function () {
      description.classList.add("hidden");
      blurLayer.classList.remove("hidden");
      btnShowMore.style.display = "block";
      btnShowLess.style.display = "none";
    });
  });
  
  // HIỂN THỊ THANH ĐÁNH GIÁ
  const ratingBarElements = document.querySelectorAll('.main__detail-review-overview-detail-item-topBar');
const ratingCountElements = document.querySelectorAll('#reviewerCount'); // Dùng class thay vì id

document.addEventListener('DOMContentLoaded', () => {
  ratingBarElements.forEach((item, index) => {
    const randomNumberReview = Math.floor(Math.random() * 150) + 1;

    item.style.width = `${randomNumberReview}px`;

    // Kiểm tra nếu có phần tử ratingCount tương ứng thì gán giá trị
    if (ratingCountElements[index]) {
      ratingCountElements[index].innerText = randomNumberReview;
    }
  });
});

function changeImage(imageSrc) {
  // Thay đổi ảnh lớn
  document.querySelector("#mainImg img").src = imageSrc;

  // Xóa class "product-choosed" khỏi tất cả ảnh nhỏ
  document.querySelectorAll(".main__detail-left-img-preview-list-item").forEach(item => {
      item.classList.remove("product-choosed");
  });

  // Thêm class "product-choosed" cho ảnh nhỏ được chọn
  event.currentTarget.classList.add("product-choosed");
}

// ĐỔI ĐƠN VỊ TIỀN TỆ
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".currencyConverter").forEach((element) => {
    let amount = parseFloat(element.textContent.trim());
    if (!isNaN(amount)) {
      element.textContent = amount.toLocaleString("vi-VN").replace(/,/g, ".") + "đ";
    }
  });
});

// ...



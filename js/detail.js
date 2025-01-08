// Lệnh cơ bản detail.js
const express = require('express');
const router = express.Router();

const orders = [
    {
        id: 1,
        name: "Annibale Colombo Bed",
        rating: 4.5,
        sold: 300,
        price: 1899.99,
        discountPercentage: 0.29,
        discountPrice: 1894.48,
        imgProduct: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
        color: ["Black", "Red", "White"],
        size: ["1m4 x 2m", "1m8 x 2m", "2m x 2m"],
        distributor: [
            {
                name: "VNBed Unit",
                reviewNumbers: "100k",
                productNumbers: "100",
                timeJoin: "2020-01-01",
                followers: "120.8k",
                positiveReviewRate: "98%",
                logoShop: "https://drive.google.com/file/d/1qRIbl-ee2lulvE4R0jiM-Bl_t85xUzYS/view?usp=sharing"
            }
        ],
        brand: "Annibale Colombo",
        delivery:[
            {
            customer: "Lionel Messi",
            address: "02 Vo Oanh, Phuong 25, Quan Binh Thanh, TP. HCM",
            phone: "0987654321",
            shippingUnit: "BraveSaleEXPRESS.vn"
            }
        ],
        voucherShopName:"Giảm 5% cho đơn hàng đầu tiên",
        voucherShopCode:"BSFirstOrder",
        SpecialInfo: ["Được làm từ chất liệu gỗ sồi cực kì chắc chắn", "Các góc cạnh được hoàn thiện mượt mà, tránh gây nguy hiểm cho người dùng.", "Giường được xử lý bằng các lớp phủ chống bám bẩn hoặc chống nước."],
        DetailInfo: [
            {
                name: "Chất liệu",
                value: "Gỗ"
            },
            {
                name: "Kích thước",
                value: "1m4 x 2m"
            },
            {
                name: "Màu sắc",
                value: "Black"
            },
            {
                name: "Thương hiệu",
                value: "Annibale Colombo"
            },
            {
                name: "Bảo hành",
                value: "12 tháng"
            },
            {
                name:"Xuất xứ",
                value:"USA"
            },
            {
                name: "Mã sản phẩm",
                value: "BS-123456"
            },
            {
                name: "Trọng lượng",
                value: "50kg"
            }
        ],
        descriptionDetail: [
            {
                introFeature: "",
                description: ["", "", "", "", ""]
            }
        ],
        review: [
            {
                id: 1,
                name: "Nguyễn Văn A",
                rating: 4.9,
                ratingDescription: "Cực kì hài lòng",
                category: "1m4 x 2m",
                avatar: "https://drive.google.com/file/d/1oO0ZvAgytywiT0Hzma0PPbJUxfcZDVED/view?usp=sharing",
                time: "2024-12-08 19:30",
                likeNumber: 50,
                status: "Đã mua hàng",
                comment: "Sản phẩm tốt, chất lượng tốt, giá cả hợp lý",
                mediaReview: ["https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"] // Ảnh hoặc video review
            },
            {
                id: 2,
                name: "Trần Thị B",
                rating: 4.8,
                ratingDescription: "Hài lòng",
                category: "1m2 x 2m",
                avatar: "https://drive.google.com/file/d/1VPKxr8EWLsjqtvxxp9-eP9o9K6TCPqMP/view?usp=sharing",
                time: "2024-12-09 10:00",
                likeNumber: 42,
                status: "Đã mua hàng",
                comment: "Sản phẩm rất đẹp, chất lượng tốt, giao hàng nhanh chóng",
                mediaReview: ["https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", 
                    "https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"]
            },
            {
                id: 3,
                name: "Lê Minh C",
                rating: 4.7,
                ratingDescription: "Hài lòng",
                category: "1m6 x 2m",
                avatar: "https://drive.google.com/file/d/1oO0ZvAgytywiT0Hzma0PPbJUxfcZDVED/view?usp=sharing",
                time: "2024-12-09 14:30",
                likeNumber: 63,
                status: "Đã mua hàng",
                comment: "Chất lượng tốt nhưng cần cải thiện dịch vụ giao hàng",
                mediaReview: ["https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"]
            },
            {
                id: 4,
                name: "Phan Hữu D",
                rating: 5.0,
                ratingDescription: "Cực kì hài lòng",
                category: "1m4 x 2m",
                avatar: "https://drive.google.com/file/d/1oO0ZvAgytywiT0Hzma0PPbJUxfcZDVED/view?usp=sharing",
                time: "2024-12-09 16:00",
                likeNumber: 78,
                status: "Đã mua hàng",
                comment: "Sản phẩm tuyệt vời, đúng như mô tả",
                mediaReview: ["https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"]
            },
            {
                id: 5,
                name: "Nguyễn Thị E",
                rating: 4.6,
                ratingDescription: "Hài lòng",
                category: "1m8 x 2m",
                avatar: "https://drive.google.com/file/d/1VPKxr8EWLsjqtvxxp9-eP9o9K6TCPqMP/view?usp=sharing",
                time: "2024-12-09 18:20",
                likeNumber: 54,
                status: "Đã mua hàng",
                comment: "Sản phẩm sử dụng rất tốt, nhưng chất liệu có thể cải thiện",
                mediaReview: ["https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"]
            },
            {
                id: 6,
                name: "Đỗ Văn F",
                rating: 4.9,
                ratingDescription: "Cực kì hài lòng",
                category: "1m2 x 2m",
                avatar: "https://drive.google.com/file/d/1oO0ZvAgytywiT0Hzma0PPbJUxfcZDVED/view?usp=sharing",
                time: "2024-12-10 09:00",
                likeNumber: 90,
                status: "Đã mua hàng",
                comment: "Mua lần thứ 2 rồi, rất ưng ý, sẽ tiếp tục ủng hộ",
                mediaReview: ["https://drive.google.com/file/d/1zpJZ0VWRCPf2AJ5a7d0gDCp1sAHT-Uie/view?usp=sharing", "https://drive.google.com/file/d/1iufTJBXs7nHcxjXk_4S5NELrjxYRWHb6/view?usp=sharing", "https://drive.google.com/file/d/1H8f3dTviAO7qJDQnHOhpdlOE9va0OGGu/view?usp=sharing"]
            }
        ]
    }
]

const suggestProduct = [
    {
        id: 1,
        name: "Bàn làm việc",
        price: 1000000,
        discountPrice: 970000,
        image: "",
        rating: 4.9,
        sold: "1.2k"
    },
    {
        id: 2,
        name: "Ghế xoay văn phòng",
        price: 750000,
        discountPrice: 700000,
        image: "",
        rating: 4.8,
        sold: "1.5k"
    },
    {
        id: 3,
        name: "Kệ sách gỗ",
        price: 1200000,
        discountPrice: 1100000,
        image: "",
        rating: 4.7,
        sold: "800"
    },
    {
        id: 4,
        name: "Tủ tài liệu",
        price: 1500000,
        discountPrice: 1400000,
        image: "",
        rating: 4.6,
        sold: "600"
    },
    {
        id: 5,
        name: "Bàn học sinh",
        price: 600000,
        discountPrice: 570000,
        image: "",
        rating: 4.5,
        sold: "1.3k"
    },
    {
        id: 6,
        name: "Bàn cafe",
        price: 800000,
        discountPrice: 750000,
        image: "",
        rating: 4.9,
        sold: "1k"
    },
    {
        id: 7,
        name: "Ghế bành",
        price: 2000000,
        discountPrice: 1800000,
        image: "",
        rating: 4.8,
        sold: "900"
    },
    {
        id: 8,
        name: "Bàn giám đốc",
        price: 3000000,
        discountPrice: 2800000,
        image: "",
        rating: 4.7,
        sold: "400"
    },
    {
        id: 9,
        name: "Kệ tivi",
        price: 1500000,
        discountPrice: 1400000,
        image: "",
        rating: 4.6,
        sold: "500"
    },
    {
        id: 10,
        name: "Tủ quần áo",
        price: 2500000,
        discountPrice: 2400000,
        image: "",
        rating: 4.9,
        sold: "650"
    },
    {
        id: 11,
        name: "Bàn ăn",
        price: 2200000,
        discountPrice: 2100000,
        image: "",
        rating: 4.7,
        sold: "1k"
    },
    {
        id: 12,
        name: "Ghế ăn",
        price: 500000,
        discountPrice: 450000,
        image: "",
        rating: 4.8,
        sold: "800"
    }
]
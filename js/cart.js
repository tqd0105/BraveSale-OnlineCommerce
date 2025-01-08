// NGÀY HIỆN TẠI + 2
// Lấy ngày hiện tại
const currentDate = new Date();

// Thêm 2 ngày
currentDate.setDate(currentDate.getDate() + 2);
// Định dạng ngày theo kiểu dd/mm/yyyy
const options = { month: "2-digit", day: "2-digit" };
const deliveryDateFormatted = currentDate.toLocaleDateString("vi-VN", options);

// Cập nhật nội dung trong phần tử HTML
document.querySelectorAll("#delivery_date").forEach((element) => {
  element.textContent = `19h00 | ${deliveryDateFormatted}`;
});

// RÚT GỌN TÊN
document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector(
    ".main__cart-summary-info-name-name"
  );

  if (!nameElement) {
    console.error("Tên không tồn tại trong DOM");
    return;
  }

  const fullName = nameElement.textContent.trim();
  nameElement.title = fullName; // Hiển thị tên đầy đủ khi hover

  const shortenName = (name) => {
    const words = name.split(" ");
    if (words.length > 4) {
      return "..." + words.slice(-2).join(" ");
    }
    return name;
  };

  nameElement.textContent = shortenName(fullName);
});

// Lấy tất cả các phần tử có class là 'product-item'
const productItems = document.querySelectorAll(".main__cart-content");

// Đếm số lượng sản phẩm
const totalProducts = productItems.length;

// Hiển thị số lượng sản phẩm lên phần tử có id là 'product-count'
document.getElementById(
  "cart_quantity"
).innerText = `(${totalProducts} sản phẩm)`;

// TÍNH TỔNG TIỀN SẢN PHẨM
document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các phần tử sản phẩm trong giỏ hàng
  const productElements = document.querySelectorAll(
    ".main__cart-content-product"
  );

  productElements.forEach((productElement) => {
    const priceElement = productElement.querySelector(
      ".main__cart-content-product-price-old"
    );
    const quantityElement = productElement.querySelector(
      ".main__cart-content-product-quantity-input"
    );
    const totalPriceElement = productElement.querySelector(
      ".main__cart-content-product-total-price"
    );

    if (priceElement && quantityElement && totalPriceElement) {
      // Lấy giá sản phẩm và chuyển thành số
      const priceText = priceElement.textContent.trim();
      const numericPrice = parseInt(priceText.replace(/[^\d]/g, ""), 10);

      // Lấy số lượng và chuyển thành số
      const quantityText = parseInt(quantityElement.value, 10);

      // Tính tổng tiền
      const totalPrice = numericPrice * quantityText;

      // Cập nhật giá trị tổng tiền cho từng sản phẩm
      totalPriceElement.textContent = totalPrice.toLocaleString("en-EN", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    }
  });
});

// TĂNG GIẢM SỐ LƯỢNG

document.addEventListener("DOMContentLoaded", function () {
  const productElements = document.querySelectorAll(".main__cart-content-product");
  const temporaryTotalPriceElement = document.querySelector(
    ".main__cart-summary-total-price-temporary-price"
  );

  // Hàm cập nhật tổng tiền tạm tính
  function updateTemporaryTotalPrice() {
    let temporaryTotal = 0;
    let totalPrice = 0;

    const discountElement = document.querySelector(".main__cart-summary-total-price-discount-price");
    const discount = discountElement ? parseInt(discountElement.textContent.replace(/[^\d]/g, ""), 10) : 0;

    productElements.forEach((productElement) => {
      const checkboxElement = productElement.querySelector(".checkbox");
      if (checkboxElement && checkboxElement.checked) {
        const priceElement = productElement.querySelector(".main__cart-content-product-price-old");
        const quantityElement = productElement.querySelector(".main__cart-content-product-quantity-input");
        
        const numericPrice = parseInt(priceElement.textContent.replace(/[^\d]/g, ""), 10);
        const quantity = parseInt(quantityElement.value, 10);
        temporaryTotal += numericPrice * quantity;
      }
    });

    temporaryTotalPriceElement.textContent = temporaryTotal.toLocaleString("en-EN", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,  
    });

    totalPrice = temporaryTotal - discount;

    document.querySelector(".main__cart-summary-total-price-total-price").textContent = totalPrice.toLocaleString("en-EN", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,  
    });
  }

  // Hàm cập nhật tổng tiền cho từng sản phẩm
  function updateTotalPrice(productElement) {
    const priceElement = productElement.querySelector(".main__cart-content-product-price-old");
    const quantityElement = productElement.querySelector(".main__cart-content-product-quantity-input");
    const totalPriceElement = productElement.querySelector(".main__cart-content-product-total-price");

    const numericPrice = parseInt(priceElement.textContent.replace(/[^\d]/g, ""), 10);
    const quantity = parseInt(quantityElement.value, 10);
    const totalPrice = numericPrice * quantity;

    totalPriceElement.textContent = totalPrice.toLocaleString("en-EN", {
      style: "currency",
      currency: "USD",  
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,  
    });

    // Cập nhật tổng tiền tạm tính
    updateTemporaryTotalPrice();
  }

  // Lắng nghe sự kiện cho các nút tăng giảm số lượng
  productElements.forEach((productElement) => {
    const decreaseBtnElement = productElement.querySelector(".main__cart-content-product-quantity-btn-dec");
    const increaseBtnElement = productElement.querySelector(".main__cart-content-product-quantity-btn-inc");
    const quantityElement = productElement.querySelector(".main__cart-content-product-quantity-input");
    const checkboxElement = productElement.querySelector(".checkbox");

    // Hàm giảm số lượng
    function handleDecrease() {
      const quantity = parseInt(quantityElement.value, 10);
      if (quantity > 1) {
        quantityElement.value = quantity - 1;
        updateTotalPrice(productElement);
      }
    }

    // Hàm tăng số lượng
    function handleIncrease() {
      const quantity = parseInt(quantityElement.value, 10);
      console.log(quantity);
      
      quantityElement.value = quantity + 1;
      updateTotalPrice(productElement);
    }

    // Gắn sự kiện cho nút tăng, giảm và checkbox
    decreaseBtnElement.addEventListener("click", handleDecrease);
    increaseBtnElement.addEventListener("click", handleIncrease);
    checkboxElement.addEventListener("change", updateTemporaryTotalPrice);
  });

  // Hàm xử lý chọn tất cả
  window.toggleSelectAll = function() {
    const selectAllCheckbox = document.getElementById("selectAll");
    productElements.forEach((productElement) => {
      const checkboxElement = productElement.querySelector(".checkbox");
      checkboxElement.checked = selectAllCheckbox.checked;
    });

    // Cập nhật tổng tiền sau khi chọn tất cả
    updateTemporaryTotalPrice();
  };

  // Khởi tạo tổng tiền tạm tính ban đầu
  updateTemporaryTotalPrice();
});


// CHECKBOX ALL
function toggleSelectAll() {
  var selectAll = document.getElementById("selectAll");
  var checkboxes = document.querySelectorAll(".checkbox");

  // Nếu "Chọn tất cả" được chọn, tất cả checkbox sẽ được chọn
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = selectAll.checked;
  });
}

function checkAllStatus() {
  var selectAll = document.getElementById("selectAll");
  var checkboxes = document.querySelectorAll(".checkbox");

  // Kiểm tra xem có tất cả các checkbox khác đều được chọn hay không
  var allChecked = true;
  checkboxes.forEach(function (checkbox) {
    if (!checkbox.checked) {
      allChecked = false;
    }
  });

  // Cập nhật trạng thái checkbox "Chọn tất cả"
  selectAll.checked = allChecked;
}

// XOÁ SẢN PHẨM TRONG GIỎ HÀNG
// Lấy các phần tử cần thiết
const deleteButtons = document.querySelectorAll(".fa-regular.fa-trash-can");
const confirmDeleteElement = document.querySelector(".main__modal-confirm-delete");
const deleteConfirmButton = document.querySelector("#delete");
const returnConfirmButton = document.querySelector("#return");
const closeConfirmButton = document.querySelector("#close-confirm-success");
const overlayConfirmElement = document.querySelector(".overlay");

const emptyMessageElement = document.querySelector(".main__cart-content-warning");
const deleteAllCart = document.querySelector("#delete-all-cart");

let itemToRemove = null; // Biến lưu sản phẩm sẽ bị xóa

// Sự kiện click cho từng nút xoá
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    confirmDeleteElement.style.display = "flex"; // Hiển thị hộp thoại xác nhận
    overlayElement.style.display = "block"; // Hiển thị overlay nếu cần

    // Lưu phần tử sản phẩm sẽ bị xóa
    itemToRemove = this.closest(".main__cart-content-product");
  });
});

// Xác nhận xoá sản phẩm
deleteConfirmButton.addEventListener("click", () => {
  
  if (itemToRemove) {
    // Xóa sản phẩm được chọn
    itemToRemove.remove();

    // Kiểm tra nếu không còn sản phẩm nào trong giỏ hàng
    const parentCartContent = document.querySelectorAll(".main__cart-content");

    parentCartContent.forEach((cartContent) => {
      const remainingProducts = cartContent.querySelectorAll(".main__cart-content-product");

      if (remainingProducts.length === 0) {
        // Nếu không còn sản phẩm, xoá cả giỏ hàng
        cartContent.remove();
      }
    });

    // Kiểm tra nếu tất cả giỏ hàng đã trống
    const remainingCartContents = document.querySelectorAll(".main__cart-content");
    if (remainingCartContents.length === 0) {
      emptyMessageElement.style.display = "flex";
    }
  }

  // Đóng hộp thoại sau khi xoá
  confirmDeleteElement.style.display = "none";
  overlayElement.style.display = "none";
  itemToRemove = null; // Reset lại biến
});

// Huỷ thao tác xoá
returnConfirmButton.addEventListener("click", () => {
  confirmDeleteElement.style.display = "none"; // Đóng hộp thoại
  overlayElement.style.display = "none"; // Đóng overlay nếu cần
  itemToRemove = null; // Reset lại biến
});

// Đóng hộp thoại bằng nút đóng
closeConfirmButton.addEventListener("click", () => {
  confirmDeleteElement.style.display = "none";
  overlayElement.style.display = "none";
  itemToRemove = null; // Reset lại biến
});

// Xóa tất cả giỏ hàng
deleteAllCart.addEventListener("click", () => {
  const cartContents = document.querySelectorAll(".main__cart-content");
  cartContents.forEach((cartContent) => {
    cartContent.remove();
  });
  emptyMessageElement.style.display = "flex";
});

overlayConfirmElement.addEventListener("click", () => {
  confirmDeleteElement.style.display = "none";
  overlayElement.style.display = "none";
  itemToRemove = null; // Reset lại biến
})


// CHỌN TỈNH - HUYỆN - XÃ
const provinceSelect = document.getElementById("provinceSelect");
const districtSelect = document.getElementById("districtSelect");
const wardSelect = document.getElementById("wardSelect");

// Tải dữ liệu tỉnh/thành phố từ JSON
fetch(
  "https://raw.githubusercontent.com/PhilDevs94/Vietnam-location-json/master/cities.json"
)
  .then((response) => response.json())
  .then((provinces) => {
    // Tạo các option cho dropdown tỉnh/thành phố
    provinces.forEach((province) => {
      const option = document.createElement("option");
      option.value = province.code; // Lấy code của tỉnh/thành phố
      option.textContent = province.name_with_type;
      provinceSelect.appendChild(option);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

// Xử lý sự kiện khi chọn tỉnh/thành phố
provinceSelect.addEventListener("change", function () {
  const selectedProvinceCode = this.value;

  // Xóa các option cũ trong dropdown huyện
  districtSelect.innerHTML = '<option value="">Chọn huyện</option>';

  // Tải dữ liệu huyện từ JSON
  fetch(
    "https://raw.githubusercontent.com/PhilDevs94/Vietnam-location-json/master/districts.json"
  )
    .then((response) => response.json())
    .then((districts) => {
      // Lọc danh sách huyện theo tỉnh đã chọn
      const filteredDistricts = districts.filter(
        (district) => district.parent_code === selectedProvinceCode
      );

      // Thêm các option cho dropdown huyện
      filteredDistricts.forEach((district) => {
        const option = document.createElement("option");
        option.value = district.code; // Hoặc sử dụng code hoặc các trường khác từ JSON
        option.textContent = district.name_with_type;
        districtSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
});

districtSelect.addEventListener("change", function () {
  const selectedDistrictCode = this.value;

  // Xóa các option cũ trong dropdown xã
  wardSelect.innerHTML = '<option value="">Chọn xã</option>';

  // Tải dữ liệu xã từ JSON
  fetch(
    "https://raw.githubusercontent.com/PhilDevs94/Vietnam-location-json/master/wards.json"
  )
    .then((response) => response.json())
    .then((wards) => {
      // Lọc danh sách xã theo mã huyện đã chọn
      const filteredWards = wards.filter(
        (ward) => ward.parent_code === selectedDistrictCode
      );

      // Thêm các option cho dropdown xã
      filteredWards.forEach((ward) => {
        const option = document.createElement("option");
        option.value = ward.code;
        option.textContent = ward.name_with_type;
        wardSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
});

// CHỈNH SỬA THÔNG TIN
const editElement = document.querySelector(".main__cart-summary-heading-edit");
const closeElement = document.querySelector(
  ".main__cart-summary-edit-info-close"
);
const overlayElement = document.querySelector(".overlay");

editElement.addEventListener("click", function () {
  document.querySelector(".main__cart-summary-edit").style.display = "block";
  overlayElement.style.display = "block";
});

closeElement.addEventListener("click", function () {
  document.querySelector(".main__cart-summary-edit").style.display = "none";
  overlayElement.style.display = "none";
});

overlayElement.addEventListener("click", function () {
  document.querySelector(".main__cart-summary-edit").style.display = "none";
  overlayElement.style.display = "none";
});

// LƯU THÔNG TIN VÀ XUẤT RA SPAN
const nameElement = document.querySelector(
  ".main__cart-summary-edit-info-name-input"
);
const phoneElement = document.querySelector(
  ".main__cart-summary-edit-info-phone-input"
);
const addressElement = document.querySelector(
  ".main__cart-summary-edit-info-address"
);
const provinceElement = document.querySelector("#provinceSelect");
const districtElement = document.querySelector("#districtSelect");
const wardElement = document.querySelector("#wardSelect");
const addressDetailElement = document.querySelector("#address-details");
const saveElement = document.querySelector(".main__cart-summary-edit-info-btn");
console.log(provinceElement.value);


const nameSpanElement = document.querySelector(
  ".main__cart-summary-info-name-name"
);
const phoneSpanElement = document.querySelector(
  ".main__cart-summary-info-phone-phone"
);
const addressSpanElement = document.querySelector(
  ".main__cart-summary-address-name"
);

saveElement.addEventListener("click", function () {
  const newNameValue = nameElement.value.trim();
  const newPhoneValue = phoneElement.value.trim();
  const selectedProvince =
    provinceElement.options[provinceElement.selectedIndex].textContent;
  const selectedDistrict =
    districtElement.options[districtElement.selectedIndex].textContent;
  const selectedWard =
    wardElement.options[wardElement.selectedIndex].textContent;
  const addressDetailValue = addressDetailElement.value.trim();

  if (
    !newNameValue || 
    !newPhoneValue || 
    !addressDetailValue || 
    provinceElement.value === "" || 
    districtElement.value === "" || 
    wardElement.value === "" 
  ) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  // Cập nhật các phần tử span hiển thị thông tin đã nhập
  addressSpanElement.textContent = `${addressDetailValue}, ${selectedWard}, ${selectedDistrict}, ${selectedProvince}`;
  nameSpanElement.textContent = newNameValue;
  phoneSpanElement.textContent = newPhoneValue;

  // Lưu thông tin vào localStorage
  const userInfo = {
    name: newNameValue,
    phone: newPhoneValue,
    address: `${addressDetailValue}, ${selectedWard}, ${selectedDistrict}, Tỉnh ${selectedProvince}`,
  };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  // Ẩn phần tử chỉnh sửa và overlay
  document.querySelector(".main__cart-summary-edit").style.display = "none";
  overlayElement.style.display = "none";
});

window.addEventListener("load", function () {
  const savedUserInfo = localStorage.getItem("userInfo");

  if (savedUserInfo) {
    const userInfo = JSON.parse(savedUserInfo);

    // Hiển thị thông tin đã lưu lên các phần tử span
    nameSpanElement.textContent = userInfo.name;
    phoneSpanElement.textContent = userInfo.phone;
    addressSpanElement.textContent = userInfo.address;

    // Hiển thị thông tin đã lưu lên các ô input (nếu cần)
    nameElement.value = userInfo.name;
    phoneElement.value = userInfo.phone;
    const [detail, ward, district, province] = userInfo.address.split(", ");
    addressDetailElement.value = detail;
    // Nếu cần, bạn có thể thêm logic để chọn đúng ward, district, province
  }
});


// MODAL SUCCESS
const buttonElement = document.querySelectorAll("button");
const continueElement = document.querySelector("#continue");
const backHomeElement = document.querySelector("#back-home");
const closeModalElement = document.querySelector("#close-modal-success");
const modalSuccessElement = document.querySelector(".main__modal-success");
const overlayModalElement = document.querySelector(".overlay");

buttonElement.forEach((button) => {
  // Kiểm tra nếu button không có bất kỳ class nào cần loại trừ
  if (
    !button.classList.contains("main__cart-summary-heading-edit") &&
    !button.classList.contains("main__cart-content-product-quantity-btn-dec") &&
    !button.classList.contains("main__cart-content-product-quantity-btn-inc")
    && !button.id.includes("return")
  ) {
    button.addEventListener("click", () => {
      modalSuccessElement.style.display = "flex";
      overlayModalElement.style.display = "block";
    });
  }
});

closeModalElement.addEventListener("click", () => {
  modalSuccessElement.style.display = "none";
  overlayModalElement.style.display = "none";
});

continueElement.addEventListener("click", () => {
  modalSuccessElement.style.display = "none";
  overlayModalElement.style.display = "none";
});

backHomeElement.addEventListener("click", () => {
  modalSuccessElement.style.display = "none";
  overlayModalElement.style.display = "none";
  window.location.href = "../index.html";
});

overlayModalElement.addEventListener("click", () => {
  modalSuccessElement.style.display = "none";
  overlayModalElement.style.display = "none";
});


// Category Tablet 
const categoryIconTabletElement = document.querySelector(".header__top-categoryIcon-forTablet");
const categoryTabletElement = document.querySelector(".main__left");

// Toggle menu khi nhấn vào icon
categoryIconTabletElement.addEventListener("click", () => {
  categoryTabletElement.classList.toggle("showCategory-Tablet");
});

// Ẩn menu khi cuộn màn hình
document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    categoryTabletElement.classList.remove("showCategory-Tablet");
  }
});
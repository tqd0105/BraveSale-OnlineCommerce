// TẠO LOGIC NGÀY THÁNG NĂM
const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

// Hàm kiểm tra năm nhuận
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Hàm tính số ngày trong tháng
function getDaysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  // Các tháng có 30 ngày
  const monthsWith30Days = [4, 6, 9, 11];
  return monthsWith30Days.includes(month) ? 30 : 31;
}

// Tạo danh sách năm
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= currentYear - 100; i--) {
  yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

// Tạo danh sách tháng
for (let i = 1; i <= 12; i++) {
  monthSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

// Hàm cập nhật danh sách ngày
function updateDays() {
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  // Xóa các ngày cũ
  daySelect.innerHTML = "";
  for (let i = 1; i <= daysInMonth; i++) {
    daySelect.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

// Lắng nghe sự thay đổi của tháng và năm
monthSelect.addEventListener("change", updateDays);
yearSelect.addEventListener("change", updateDays);

// Gọi hàm cập nhật lần đầu tiên
monthSelect.value = new Date().getMonth() + 1; // Gán tháng hiện tại
yearSelect.value = currentYear; // Gán năm hiện tại
updateDays();

// TẠO DANH SÁCH CÁC QUỐC GIA
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((countries) => {
    const countrySelect = document.getElementById("country-select");
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.cca2;
      option.textContent = country.name.common;
      countrySelect.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching countries:", error));

//  LƯU THAY ĐỔI THÔNG TIN TÀI KHOẢN
const saveBtn = document.querySelector(".main__account-info-item-btn");
const nameInputElement = document.querySelector(
  ".main__account-info-item-content-name"
);
const emailInputElement = document.querySelector(
  ".main__account-info-item-content-email"
);
const phoneInputElement = document.querySelector(
  ".main__account-info-item-content-phone"
);
const sexInputElement = document.querySelectorAll('input[name="sex"]');
const sexMaleElement = document.getElementById("male");
const sexFemaleElement = document.getElementById("female");
const sexOtherElement = document.getElementById("other");
const dayInputElement = document.getElementById("day");
const monthInputElement = document.getElementById("month");
const yearInputElement = document.getElementById("year");
const countrySelectElement = document.getElementById("country-select");

saveBtn.addEventListener("click", function () {
  const name = nameInputElement.value.trim();
  const email = emailInputElement.value.trim();
  const phone = phoneInputElement.value.trim();
  let sex = "";

  // Duyệt qua các input radio để lấy giá trị của giới tính
  sexInputElement.forEach((radio) => {
    if (sexMaleElement.checked) {
      sex = sexMaleElement.value;
    } else if (sexFemaleElement.checked) {
      sex = sexFemaleElement.value;
    } else if (sexOtherElement.checked) {
      sex = sexOtherElement.value;
    }
  });

  const selectedDay =
    dayInputElement.options[dayInputElement.selectedIndex].textContent;
  const selectedMonth =
    monthInputElement.options[monthInputElement.selectedIndex].textContent;
  const selectedYear =
    yearInputElement.options[yearInputElement.selectedIndex].textContent;

  const selectedCountry =
    countrySelectElement.options[countrySelectElement.selectedIndex]
      .textContent;

  console.log("Thông tin cá nhân:");
  console.log("Họ và tên:", name);
  console.log("Email:", email);
  console.log("Số điện thoại:", phone);
  console.log("Giới tính:", sex);
  console.log("Ngày sinh:", selectedDay);
  console.log("Tháng sinh:", selectedMonth);
  console.log("Năm sinh:", selectedYear);
  console.log("Quốc gia:", selectedCountry);
  console.log("***************************");
});

// MODAL SUCCESS
const buttonElement = document.querySelectorAll("button");
const continueElement = document.querySelector("#continue");
const backHomeElement = document.querySelector("#back-home");
const closeModalElement = document.querySelector("#close-modal-success");
const modalElement = document.querySelector(".main__modal-success");
const overlayElement = document.querySelector(".overlay");

buttonElement.forEach((button) => {
  button.addEventListener("click", () => {
    modalElement.style.display = "flex";
    overlayElement.style.display = "block";
  });
});

closeModalElement.addEventListener("click", () => {
  modalElement.style.display = "none";
  overlayElement.style.display = "none";
});

continueElement.addEventListener("click", () => {
  modalElement.style.display = "none";
  overlayElement.style.display = "none";
});

backHomeElement.addEventListener("click", () => {
  modalElement.style.display = "none";
  overlayElement.style.display = "none";
  window.location.href = "index.html";
});

overlayElement.addEventListener("click", () => {
  modalElement.style.display = "none";
  overlayElement.style.display = "none";
});

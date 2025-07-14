function startCountdown(hours, minutes) {
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  let totalSeconds = hours * 3600 + minutes * 60;

  function updateTimer() {
    const currentHours = Math.floor(totalSeconds / 3600);
    const currentMinutes = Math.floor((totalSeconds % 3600) / 60);
    const currentSeconds = totalSeconds % 60;

    hoursElement.textContent = String(currentHours).padStart(2, "0");
    minutesElement.textContent = String(currentMinutes).padStart(2, "0");
    secondsElement.textContent = String(currentSeconds).padStart(2, "0");

    totalSeconds--;

    if (totalSeconds < 0) {
      totalSeconds = hours * 3600 + minutes * 60;
    }
  }

  setInterval(updateTimer, 1000);
}

startCountdown(1, 30);

// CHUYỂN ĐỔI SLIDE QUẢNG CÁO
let currentIndex = 0;
const sliderWrapper = document.querySelector(
  ".main__right-advertisement-wrapper"
);
const totalSlides = sliderWrapper.children.length;

const prevBtn = document.querySelector(
  ".main__right-advertisement-icon-control-before"
);
const nextBtn = document.querySelector(
  ".main__right-advertisement-icon-control-after"
);
const dots = document.querySelectorAll(".dot");

function updateSlider(index) {
  sliderWrapper.style.transform = `translateX(-${index * 102}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  prevBtn.style.visibility = index === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = index === totalSlides - 1 ? "hidden" : "visible";

  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % totalSlides;
  updateSlider(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider(prevIndex);
}

prevBtn.addEventListener("click", prevSlide());
nextBtn.addEventListener("click", nextSlide());

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => updateSlider(index));
});

setInterval(nextSlide, 5000);

updateSlider(currentIndex);

// ADVERTISEMENT SLIDE ON MOBILE

let currentIndexMobile = 0;
const advertisementMobileWrapper = document.querySelector('.main__right-advertisement-wrapper-forMobile');
const totalSlidesMobile = advertisementMobileWrapper.children.length;
const dotForMobile = document.querySelectorAll('.dot-forMobile');

function updateSliderMobile(index) {
  advertisementMobileWrapper.style.transform = `translateX(-${index * 100}%)`;

  dotForMobile.forEach((dot, i) => {
    dot.classList.toggle("active-forMobile", i === index);
  }) 

  currentIndexMobile = index;
}

function nextSlideMobile() {
  const nextIndexMobile = (currentIndexMobile + 1) % totalSlidesMobile;
  updateSliderMobile(nextIndexMobile);
}

setInterval(nextSlideMobile, 3000);

updateSliderMobile(currentIndexMobile);

// HIGHLIGHT GOODS SLIDE ON MOBILE

// CONTROL SCROLL TO TOP
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scrollToTopBtn = document.querySelector(".footer__scrollToTop");

    if (window.scrollY) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  document
    .querySelector(".footer__scrollToTop")
    .addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
});

// FETCH API PRODUCT
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    // Chọn 12 sản phẩm
    const selectFlashSale = data.products.slice(10, 22);

    // Lấy phần tử HTML để chứa flash sale
    const flashSaleElement = document.querySelector(
      ".main__right-forYou-product-list"
    );

    // Lặp qua các sản phẩm và thêm vào HTML
    selectFlashSale.forEach((product) => {
      const flashSaleItem = document.createElement("div");
      flashSaleItem.classList.add("main__right-product-item", "col", "l-2", "c-5", "m-5");

      const flashSaleInfo = `
      <div class="main__right-product-item-info" >
        <div class="main__right-product-item-info-container">
        <img src="${product.thumbnail}" alt="${
        product.title
      }" width="160px" height="160px" class="main__right-product-item-thumbnail">
        <div class="main__right-product-item-price-general">
          <div class="main__right-product-item-price-discount">
            <p class="main__right-product-item-discountPrice"> $${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}</p>
            <p class="main__right-product-item-price"> $${product.price}</p>
          </div>
          <p class="main__right-product-item-discountPercentage"> - ${
            product.discountPercentage
          }%</p>
        </div>
        <div class="main__right-product-item-title-container">
        <h4 class="main__right-product-item-title">${product.title}</h4>
        </div>
        <h5 class="main__right-product-item-description">${
          product.description
        }</h5>
        <div class="main__right-product-item-rating">
          <div class="main__right-product-item-rating-inner">
            <img src="assets/images/main/products/star.png" alt="rating" width="15px" height="15px">
            <span>${product.rating}</span>
          </div>
          <p class="main__right-product-item-sold">Sold ${product.stock}</p>
        </div>
        <p class="main__right-product-item-tags">#${product.tags}</p>
        </div>
        <div class="main__right-flashSale-product-time-delivery">
          <img src="../assets/images/main/products/delivery.png" alt="delivery" width="20px" height="20px"/>
          <span id="time_delivery"></span>
        </div>
         
        </div>
      `;

      const flashSaleBadgeInfo = `
      <div class="main__right-flashSale-product-label-right" style="position: absolute; top: 0; right: 0; z-index: 100; line-height: 0;">
                        <img src="./assets/images/main/products/baohanh18thang.svg" width="40px" height="40px" alt="">
                      </div>
        <div class="main__right-flashSale-product-label-right" style="position: absolute; top: 0; left: 0; z-index: 100; line-height: 0;">
                        <img src="./assets/images/main/products/docquyen.svg" width="40px" height="40px" alt="">
                      </div>
      `;

      // Gán HTML và thêm vào DOM

      const now = new Date();

      const dayOfWeek = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];
      const dayOfWeekLenth = dayOfWeek.length;

      const dayOfWeekIndex = (now.getDay() + 2) % dayOfWeekLenth;

      const dayOfWeekName = dayOfWeek[dayOfWeekIndex];
      const getDay = now.getDate() + 2;
      const getMonth = now.getMonth() + 1;

      flashSaleItem.innerHTML = flashSaleInfo + flashSaleBadgeInfo;
      flashSaleElement.appendChild(flashSaleItem);

      const timeDeliveryElement = flashSaleItem.querySelector("#time_delivery");
      timeDeliveryElement.textContent = `Giao vào ${dayOfWeekName}, ${getDay}/${getMonth}`;
    });

    const selectTopBrand = data.products.slice(0, 12);
    const topBrandElement = document.querySelector(
      ".main__right-topBrand-products"
    );

    selectTopBrand.forEach((product) => {
      const topBrandItem = document.createElement("div");
      topBrandItem.classList.add(
        "main__right-topBrand-product-item",
        "col",
        "l-2", "c-5", "m-5"
      );

      const topBrandInfo = `<div class="main__right-product-item-info" >
        <div class="main__right-product-item-info-container">
        <img src="${product.thumbnail}" alt="${
        product.title
      }" width="160px" height="160px" class="main__right-product-item-thumbnail">
        <div class="main__right-product-item-price-general">
          <div class="main__right-product-item-price-discount">
            <p class="main__right-product-item-discountPrice"> $${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}</p>
            <p class="main__right-product-item-price"> $${product.price}</p>
          </div>
          <p class="main__right-product-item-discountPercentage"> - ${
            product.discountPercentage
          }%</p>
        </div>
        <div class="main__right-product-item-title-container">
        <h4 class="main__right-product-item-title">${product.title}</h4>
        </div>
        <h5 class="main__right-product-item-description">${
          product.description
        }</h5>
        <div class="main__right-product-item-rating">
          <div class="main__right-product-item-rating-inner">
            <img src="../assets/images/main/products/star.png" alt="rating" width="15px" height="15px">
            <span>${product.rating}</span>
          </div>
          <p class="main__right-product-item-sold">Sold ${product.stock}</p>
        </div>
        <p class="main__right-product-item-tags">#${product.tags}</p>
        </div>
        <div class="main__right-flashSale-product-time-delivery">
          <img src="../assets/images/main/products/delivery.png" alt="delivery" width="20px" height="20px"/>
          <span id="time_delivery_forTopBrand"></span>
        </div>
         
        </div>`;

        const flashSaleBadgeInfo = `
        <div class="main__right-flashSale-product-label-right" style="position: absolute; top: 0; right: 0; z-index: 100; line-height: 0;">
                        <img src="./assets/images/main/products/docquyen.svg" width="40px" height="40px" alt="">
                      </div>
        <div class="main__right-flashSale-product-badge">
                    <div class="main__right-flashSale-product-badge-1">
                      <p class="main__right-flashSale-product-badge-1-first">
                        FREESHIP
                      </p>
                      <p class="main__right-flashSale-product-badge-1-second">
                        XTRA
                      </p>
                    </div>
                    <div class="main__right-flashSale-product-badge-2">
                      <img
                        src="../assets/images/main/products/verified.png"
                        width="15px"
                        height="15px"
                        alt="verified logo"
                        class="main__right-flashSale-product-badge-2-first"
                      />
                      <div class="main__right-flashSale-product-badge-2-second">
                        <p
                          class="main__right-flashSale-product-badge-2-second-text1"
                        >
                          CHÍNH
                        </p>
                        <p
                          class="main__right-flashSale-product-badge-2-second-text2"
                        >
                          HÃNG
                        </p>
                      </div>
                    </div>
                  </div>  
                  <div class="main__right-flashSale-prevIcon">

                  </div>
                  <div class="main__right-flashSale-nextIcon">

                  </div>
      `;
        const now = new Date();

      const dayOfWeek = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];
      const dayOfWeekLenth = dayOfWeek.length;

      const dayOfWeekIndex = (now.getDay() + 2) % dayOfWeekLenth;

      const dayOfWeekName = dayOfWeek[dayOfWeekIndex];
      const getDay = now.getDate() + 2;
      const getMonth = now.getMonth() + 1;

      topBrandItem.innerHTML = topBrandInfo + flashSaleBadgeInfo;
      topBrandElement.appendChild(topBrandItem);

      const timeDeliveryforTopBrandElement = topBrandItem.querySelector("#time_delivery_forTopBrand");
      timeDeliveryforTopBrandElement.textContent = `Giao vào ${dayOfWeekName}, ${getDay}/${getMonth}`;
    });

    const selectTopForeign = data.products.slice(1, 13);
    const topForeignElement = document.querySelector(".main__right-topForeignGoods-products");

    selectTopForeign.forEach((product) => {
      const topForeignItem = document.createElement("div");
      topForeignItem.classList.add("main__right-topForeignGoods-products-item", "col", "l-2", "c-5", "m-5");

      const topForeignInfo = `<div class="main__right-product-item-info" >
        <div class="main__right-product-item-info-container">
        <img src="${product.thumbnail}" alt="${
        product.title
      }" width="160px" height="160px" class="main__right-product-item-thumbnail">
        <div class="main__right-product-item-price-general">
          <div class="main__right-product-item-price-discount">
            <p class="main__right-product-item-discountPrice"> $${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}</p>
            <p class="main__right-product-item-price"> $${product.price}</p>
          </div>
          <p class="main__right-product-item-discountPercentage"> - ${
            product.discountPercentage
          }%</p>
        </div>
        <div class="main__right-product-item-title-container">
        <h4 class="main__right-product-item-title">${product.title}</h4>
        </div>
        <h5 class="main__right-product-item-description">${
          product.description
        }</h5>
        <div class="main__right-product-item-rating">
          <div class="main__right-product-item-rating-inner">
            <img src="../assets/images/main/products/star.png" alt="rating" width="15px" height="15px">
            <span>${product.rating}</span>
          </div>
          <p class="main__right-product-item-sold">Sold ${product.stock}</p>
        </div>
        <p class="main__right-product-item-tags">#${product.tags}</p>
        </div>
        <div class="main__right-flashSale-product-time-delivery">
          <img src="../assets/images/main/products/delivery.png" alt="delivery" width="20px" height="20px"/>
          <span id="time_delivery_forTopForeign"></span>
        </div>
         
        </div>`;
        
        const flashSaleBadgeInfo = `
        <div class="main__right-flashSale-product-label-right" style="position: absolute; top: 0; right: 0; z-index: 100; line-height: 0;">
                        <img src="./assets/images/main/products/docquyen.svg" width="40px" height="40px" alt="">
                      </div>
        <div class="main__right-flashSale-product-badge">
                    <div class="main__right-flashSale-product-badge-1">
                      <p class="main__right-flashSale-product-badge-1-first">
                        FREESHIP
                      </p>
                      <p class="main__right-flashSale-product-badge-1-second">
                        XTRA
                      </p>
                    </div>
                    <div class="main__right-flashSale-product-badge-2">
                      <img
                        src="../assets/images/main/products/verified.png"
                        width="15px"
                        height="15px"
                        alt="verified logo"
                        class="main__right-flashSale-product-badge-2-first"
                      />
                      <div class="main__right-flashSale-product-badge-2-second">
                        <p
                          class="main__right-flashSale-product-badge-2-second-text1"
                        >
                          CHÍNH
                        </p>
                        <p
                          class="main__right-flashSale-product-badge-2-second-text2"
                        >
                          HÃNG
                        </p>
                      </div>
                    </div>
                  </div>  
                  <div class="main__right-flashSale-prevIcon">

                  </div>
                  <div class="main__right-flashSale-nextIcon">

                  </div>
      `;

        const now = new Date();
        const dayOfWeek = [
          "Chủ Nhật",
          "Thứ Hai",
          "Thứ Ba",
          "Thứ Tư",
          "Thứ Năm",
          "Thứ Sáu",
          "Thứ Bảy",
        ];
        const dayOfWeekLenth = dayOfWeek.length;
  
        const dayOfWeekIndex = (now.getDay() + 2) % dayOfWeekLenth;
  
        const dayOfWeekName = dayOfWeek[dayOfWeekIndex];
        const getDay = now.getDate() + 2;
        const getMonth = now.getMonth() + 1;

        
      topForeignItem.innerHTML = topForeignInfo + flashSaleBadgeInfo;
      topForeignElement.appendChild(topForeignItem);
  
        const timeDeliveryforTopForeignElement = topForeignItem.querySelector("#time_delivery_forTopForeign");
        timeDeliveryforTopForeignElement.textContent = `Giao vào ${dayOfWeekName}, ${getDay}/${getMonth}`;

    });

    const selectSuggestions = data.products.slice(0, 27);
    const suggestionsElement = document.querySelector(".main__right-suggest-products");

    selectSuggestions.forEach((product) => {
      const productSuggestItem = document.createElement("div");
      productSuggestItem.classList.add("main__right-suggest-product-item", "col", "l-2", "c-5", "m-5");
      
      const productInfo = `
      <div class="main__right-product-item-info" >
        <div class="main__right-product-item-info-container">
        <img src="${product.thumbnail}" alt="${
        product.title
      }" width="160px" height="160px" class="main__right-product-item-thumbnail">
        <div class="main__right-product-item-price-general">
          <div class="main__right-product-item-price-discount">
            <p class="main__right-product-item-discountPrice"> $${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}</p>
            <p class="main__right-product-item-price"> $${product.price}</p>
          </div>
          <p class="main__right-product-item-discountPercentage"> - ${
            product.discountPercentage
          }%</p>
        </div>
        <div class="main__right-product-item-title-container">
        <h4 class="main__right-product-item-title">${product.title}</h4>
        </div>
        <h5 class="main__right-product-item-description">${
          product.description
        }</h5>
        <div class="main__right-product-item-rating">
          <div class="main__right-product-item-rating-inner">
            <img src="../assets/images/main/products/star.png" alt="rating" width="15px" height="15px">
            <span>${product.rating}</span>
          </div>
          <p class="main__right-product-item-sold">Sold ${product.stock}</p>
        </div>
        <p class="main__right-product-item-tags">#${product.tags}</p>
        </div>
        <div class="main__right-flashSale-product-time-delivery">
          <img src="../assets/images/main/products/delivery.png" alt="delivery" width="20px" height="20px"/>
          <span id="time_delivery_forSuggestProducts"></span>
        </div>
         
        </div>
      `;

      const flashSaleBadgeInfo = `
        <div class="main__right-flashSale-product-label-right" style="position: absolute; top: 6px; right: 6px; z-index: 100; line-height: 0;">
                        <img src="./assets/images/main/products/baohanh777ngay.svg" width="40px" height="40px" alt="">
                      </div>
                      <div class="main__right-flashSale-product-label-right" style="position: absolute; top: 6px; left: 6px; z-index: 100; line-height: 0;">
                        <img src="./assets/images/main/products/docquyen.svg" width="40px" height="40px" alt="">
                      </div>
      `;

      const now = new Date();
      const dayOfWeek = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];
      const dayOfWeekLenth = dayOfWeek.length;

      const dayOfWeekIndex = (now.getDay() + 2) % dayOfWeekLenth;

      const dayOfWeekName = dayOfWeek[dayOfWeekIndex];
      const getDay = now.getDate() + 2;
      const getMonth = now.getMonth() + 1;

      productSuggestItem.innerHTML = productInfo + flashSaleBadgeInfo;
      suggestionsElement.appendChild(productSuggestItem);

      const timeDeliveryforSuggestProductsElement = productSuggestItem.querySelector("#time_delivery_forSuggestProducts");
      timeDeliveryforSuggestProductsElement.textContent = `Giao vào ${dayOfWeekName}, ${getDay}/${getMonth}`;
      
    });

    const selecTopDeal = data.products.slice(2, 14).reverse();
    const topDealElement = document.querySelector(".main__right-topDeal-products");

    selecTopDeal.forEach((product) => {
      const topDealItem = document.createElement("div");
      topDealItem.classList.add("main__right-topDeal-products-item", "col", "l-2", "c-5", "m-5");

      const productInfo = `
        <div class="main__right-product-item-info" >
        <div class="main__right-product-item-info-container">
        <img src="${product.thumbnail}" alt="${
        product.title
      }" width="160px" height="160px" class="main__right-product-item-thumbnail">
        <div class="main__right-product-item-price-general">
          <div class="main__right-product-item-price-discount">
            <p class="main__right-product-item-discountPrice"> $${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}</p>
            <p class="main__right-product-item-price"> $${product.price}</p>
          </div>
          <p class="main__right-product-item-discountPercentage"> - ${
            product.discountPercentage
          }%</p>
        </div>
        <div class="main__right-product-item-title-container">
        <h4 class="main__right-product-item-title">${product.title}</h4>
        </div>
        <h5 class="main__right-product-item-description">${
          product.description
        }</h5>
        <div class="main__right-product-item-rating">
          <div class="main__right-product-item-rating-inner">
            <img src="../assets/images/main/products/star.png" alt="rating" width="15px" height="15px">
            <span>${product.rating}</span>
          </div>
          <p class="main__right-product-item-sold">Sold ${product.stock}</p>
        </div>
        <p class="main__right-product-item-tags">#${product.tags}</p>
        </div>
        <div class="main__right-flashSale-product-time-delivery">
          <img src="../assets/images/main/products/delivery.png" alt="delivery" width="20px" height="20px"/>
          <span id="time_delivery_forTopDealProducts"></span>
        </div>
         
        </div>
      `;

      const flashSaleBadgeInfo = `
        <div class="main__right-flashSale-product-label-right" style="position: absolute; top: 6px; right: 6px; z-index: 100; line-height: 0;">
                        <img src="./assets/images/main/products/baohanh18thang.svg" width="40px" height="40px" alt="">
                      </div>
                      <div class="main__right-flashSale-product-badge">
                    <div class="main__right-flashSale-product-badge-1">
                      <p class="main__right-flashSale-product-badge-1-first">
                        FREESHIP
                      </p>
                      <p class="main__right-flashSale-product-badge-1-second">
                        XTRA
                      </p>
                    </div>
                    <div class="main__right-flashSale-product-badge-2">
                      <img
                        src="../assets/images/main/products/verified.png"
                        width="15px"
                        height="15px"
                        alt="verified logo"
                        class="main__right-flashSale-product-badge-2-first"
                      />
                      <div class="main__right-flashSale-product-badge-2-second">
                        <p
                          class="main__right-flashSale-product-badge-2-second-text1"
                        >
                          CHÍNH
                        </p>
                        <p
                          class="main__right-flashSale-product-badge-2-second-text2"
                        >
                          HÃNG
                        </p>
                      </div>
                    </div>
                  </div>  
                  <div class="main__right-flashSale-prevIcon">

                  </div>
                  <div class="main__right-flashSale-nextIcon">

                  </div>
      `;

      const now = new Date();
      const dayOfWeek = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];
      const dayOfWeekLenth = dayOfWeek.length;
      const dayOfWeekIndex = (now.getDay() + 2) % dayOfWeekLenth;

      const dayOfWeekName = dayOfWeek[dayOfWeekIndex];
      const getDay = now.getDate() + 2;
      const getMonth = now.getMonth() + 1;

      topDealItem.innerHTML = productInfo + flashSaleBadgeInfo;
      topDealElement.appendChild(topDealItem);

      const timeDeliveryForTopDeal = topDealItem.querySelector("#time_delivery_forTopDealProducts");
      timeDeliveryForTopDeal.textContent = `Giao vào ${dayOfWeekName}, ${getDay}/${getMonth}`;
    });

  })
  .catch((error) => {
    console.log("Fetch error", error);
  });

// SLIDE TRANSITION - PRODUCTS
function createSlider(
  sliderSelector,
  prevButtonSelector,
  nextButtonSelector,
  itemsPerSlide,
  translateSize
) {
  const slider = document.querySelector(sliderSelector);
  const previousButton = document.querySelector(prevButtonSelector);
  const nextButton = document.querySelector(nextButtonSelector);

  // Lưu trữ vị trí slide hiện tại
  let currentSlideIndex = 0;

  function updateSlide(direction) {
    const slideCount = Math.ceil(slider.children.length / itemsPerSlide);

    // Kiểm tra điều kiện để không vượt quá slide đầu hoặc cuối
    if (direction === "next" && currentSlideIndex < slideCount - 1) {
      currentSlideIndex++;
    } else if (direction === "previous" && currentSlideIndex > 0) {
      currentSlideIndex--;
    } else {
      return; // Không thay đổi nếu đã ở đầu hoặc cuối
    }

    // Cập nhật transform dựa trên slide hiện tại
    const translateXPercentage = translateSize * currentSlideIndex;
    slider.style.transform = `translateX(${translateXPercentage}%)`;
    slider.style.transition = "transform 0.5s ease";

    // Cập nhật trạng thái hiển thị của các nút
    updateButtonVisibility(slideCount);
  }

  function updateButtonVisibility(slideCount) {
    if (currentSlideIndex === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "block";
    }

    if (currentSlideIndex === slideCount - 1) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }
  }

  // Gắn sự kiện cho các nút
  nextButton.addEventListener("click", () => updateSlide("next"));
  previousButton.addEventListener("click", () => updateSlide("previous"));

  // Khởi tạo trạng thái ban đầu của nút
  updateButtonVisibility(Math.ceil(slider.children.length / itemsPerSlide));
}

// Khởi tạo slider cho "forYou-products"
createSlider(
  ".main__right-forYou-product-list",
  "#previous-slide-products",
  "#next-slide-products",
  6,
  -100
);

// Khởi tạo slider cho "flashSale-products"
createSlider(
  ".main__right-flashSale-products",
  "#previous-slide-products-flashSale",
  "#next-slide-products-flashSale",
  6,
  -106
);

// Khởi tạo slider cho "topBrand-products"
createSlider(
  ".main__right-topBrand-products",
  "#previous-slide-products-topBrand",
  "#next-slide-products-topBrand",
  6,
  -100
);

// Khởi tạo slider cho "topForeignGoods-products"
createSlider(
  ".main__right-topForeignGoods-products",
  "#previous-slide-products-topForeignGoods",
  "#next-slide-products-topForeignGoods",6, -100)

// Khởi tạo slider cho "topDeal-products"
createSlider(
  ".main__right-topDeal-products",
  "#previous-slide-products-topDeal",
  "#next-slide-products-topDeal",
  6, -100
);

// WIDTH NGẪU NHIÊN
// Lấy tất cả các phần tử có class tương ứng
const quantityRemainBarTopElements = document.querySelectorAll(
  ".main__right-flashSale-product-item-quantityRemain-bar-top"
);

quantityRemainBarTopElements.forEach((element, index) => {
  // Tạo giá trị ngẫu nhiên từ 1 đến 14
  const randomWidthValue = Math.floor(Math.random() * 14) + 1; // Giá trị từ 1 đến 14
  const randomWidth = randomWidthValue + "%"; // Đổi randomWidthValue thành dạng string với dấu "%"

  // Cập nhật width cho thanh
  element.style.width = randomWidth;

  // Nếu randomWidthValue > 14, thêm border-radius
  if (randomWidthValue > 13) {
    element.style.borderRadius = "15px"; // Cập nhật border-radius nếu chiều rộng lớn hơn 14%
  }

  // Lấy phần tử number-width-display trong cùng một phần tử chứa thanh
  const numberDisplay = element
    .closest(".main__right-flashSale-product-item")
    .querySelector(".number-width-display");

  // Cập nhật giá trị hiển thị cho phần tử .number-width-display
  if (numberDisplay) {
    numberDisplay.textContent = randomWidthValue; // Gán số hiển thị bằng randomWidthValue
  }
});

// WIDTH NGẪU NHIÊN CHO TABLET
// Lấy tất cả các phần tử có class tương ứng
const quantityRemainBarTopElementsForTablet = document.querySelectorAll(
  ".main__right-flashSale-product-item-quantityRemain-bar-top-forTablet"
);

quantityRemainBarTopElementsForTablet.forEach((element, index) => {
  // Tạo giá trị ngẫu nhiên từ 1 đến 14
  const randomWidthValue = Math.floor(Math.random() * 100) + 1; // Giá trị từ 1 đến 14
  const randomWidth = randomWidthValue + "%"; // Đổi randomWidthValue thành dạng string với dấu "%"

  // Cập nhật width cho thanh
  element.style.width = randomWidth;

  // Nếu randomWidthValue > 14, thêm border-radius
  if (randomWidthValue > 13) {
    element.style.borderRadius = "15px"; // Cập nhật border-radius nếu chiều rộng lớn hơn 14%
  }

  // Lấy phần tử number-width-display trong cùng một phần tử chứa thanh
  const numberDisplay = element
    .closest(".main__right-flashSale-product-item")
    .querySelector(".number-width-display-forTablet");

  // Cập nhật giá trị hiển thị cho phần tử .number-width-display
  if (numberDisplay) {
    numberDisplay.textContent = randomWidthValue; // Gán số hiển thị bằng randomWidthValue
  }
});

const quantityRemainBarTopElementsForPhone = document.querySelectorAll(
  ".main__right-flashSale-product-item-quantityRemain-bar-top-forTablet"
);

quantityRemainBarTopElementsForTablet.forEach((element, index) => {
  // Tạo giá trị ngẫu nhiên từ 1 đến 14
  const randomWidthValue = Math.floor(Math.random() * 100) + 1; // Giá trị từ 1 đến 14
  const randomWidth = randomWidthValue + "%"; // Đổi randomWidthValue thành dạng string với dấu "%"

  // Cập nhật width cho thanh
  element.style.width = randomWidth;

  // Nếu randomWidthValue > 14, thêm border-radius
  if (randomWidthValue > 13) {
    element.style.borderRadius = "15px"; // Cập nhật border-radius nếu chiều rộng lớn hơn 14%
  }

  // Lấy phần tử number-width-display trong cùng một phần tử chứa thanh
  const numberDisplay = element
    .closest(".main__right-flashSale-product-item")
    .querySelector(".number-width-display-forTablet");

  // Cập nhật giá trị hiển thị cho phần tử .number-width-display
  if (numberDisplay) {
    numberDisplay.textContent = randomWidthValue; // Gán số hiển thị bằng randomWidthValue
  }
});

// EXPAND SUGGEST GOODS
const viewMoreButton = document.querySelector(".main__right-viewMore-product-link");
const suggestProductsElement = document.querySelector(".main__right-suggest-products");

viewMoreButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!suggestProductsElement.classList.contains("expand_suggest_products")) {
    // Thêm lớp để mở rộng
    suggestProductsElement.classList.add("expand_suggest_products");
    suggestProductsElement.classList.remove("collapse_suggest_products");
    viewMoreButton.textContent = "Thu gọn";
  } else {
    // Thêm lớp để thu gọn
    suggestProductsElement.classList.add("collapse_suggest_products");
    suggestProductsElement.classList.remove("expand_suggest_products");
    viewMoreButton.textContent = "Xem thêm";
  }
});

// CHỈ CHẤP NHẬN SỰ KIỆN CLICK 
// const aTagElements = document.querySelectorAll("a[href]"); // Chỉ chọn <a> có href

// aTagElements.forEach((aTag) => {
//   aTag.addEventListener("click", (e) => {
//     e.preventDefault();
//   });
// });

// CATEGORY HANDLECLICK 
const categoryControlBarElement = document.querySelector(".main__right-control-bar-forMobile-item.category-click");

const categoryElement = document.querySelector(".main__left");

categoryControlBarElement.addEventListener("click", () => {
  categoryElement.style.display = "block";
})

// Choosing control bar
const controlBarChooseElement = document.querySelectorAll(".main__right-control-bar-forMobile-item");

// Khi người dùng click vào item
controlBarChooseElement.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Lưu index của phần tử đã chọn vào localStorage
    localStorage.setItem("selectedControlBarIndex", index);

    // Xóa class từ tất cả các phần tử
    controlBarChooseElement.forEach((el) => el.classList.remove("control-bar-choosed"));

    // Thêm class vào phần tử được click
    item.classList.add("control-bar-choosed");
  });
});

// Khi trang được tải lại
window.addEventListener("DOMContentLoaded", () => {
  const savedIndex = localStorage.getItem("selectedControlBarIndex");

  // Nếu có index đã lưu, khôi phục trạng thái
  if (savedIndex !== null) {
    controlBarChooseElement[savedIndex].classList.add("control-bar-choosed");
  }
});

// Close category
const closeCategoryElement = document.querySelector("#close-category");
const categoryCloseElement = document.querySelector(".main__left");

closeCategoryElement.addEventListener("click", () => {
  categoryCloseElement.style.display = "none";
})

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

// DELETE NOTI
const deleteNotiElements = document.querySelectorAll(".delete-noti");
const notiElements = document.querySelectorAll(".header__top-notification-dropdown-item");

deleteNotiElements.forEach((deleteElement, index) => {
  deleteElement.addEventListener("click", () => {
    notiElements[index].style.display = "none";
  });
});

// LANGUAGE SWITCH
const languageEN = document.querySelector(".header__top-language-first");
const languageVN = document.querySelector(".header__top-language-second");

languageVN.addEventListener("click", () => {
  languageVN.style.display = "none";
  languageEN.style.display = "flex";
})

languageEN.addEventListener("click", () => {
  languageEN.style.display = "none";
  languageVN.style.display = "flex";
})

// ...
document.addEventListener("DOMContentLoaded", function () {
  const alertClickElement = document.querySelector(".main__right-alert");
  const closeAlertElements = document.querySelectorAll(".close-alert");

  closeAlertElements.forEach((close) => {
    close.addEventListener("click", () => {
      alertClickElement.classList.add("hidden");
    });
  });

  document.addEventListener("click", function (event) {
    const clickedProduct = event.target.closest(
      ".main__right-product-item, .main__right-topDeal-products-item, .main__right-flashSale-product-item, .main__right-topBrand-product-item, .main__right-topForeignGoods-products-item, .main__right-suggest-product-item"
    );

    if (!clickedProduct) return;

    const container = clickedProduct.closest(
      ".main__right-forYou-product-list, .main__right-topDeal-products, .main__right-flashSale-products, .main__right-topBrand-products, .main__right-topForeignGoods-products, .main__right-suggest-product"
    );

    if (!container) return;

    const products = container.querySelectorAll(
      ".main__right-product-item, .main__right-topDeal-item, .main__right-flashSale-item"
    );

    const firstProduct = products[0];

    if (clickedProduct === firstProduct) {
      location.href = "./pages/detail.html";
    } else {
      alertClickElement.classList.remove("hidden");
    }
  });
});






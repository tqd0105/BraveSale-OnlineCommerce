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
const sliderWrapper = document.querySelector(".main__right-advertisement-wrapper");
const totalSlides = sliderWrapper.children.length; 

const prevBtn = document.querySelector(".main__right-advertisement-icon-control-before");
const nextBtn = document.querySelector(".main__right-advertisement-icon-control-after");
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

// CONTROL SCROLL TO TOP
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
      var scrollToTopBtn = document.querySelector('.footer__scrollToTop');
      
      if (window.scrollY > 300) { 
          scrollToTopBtn.style.display = 'block'; 
      } else {
          scrollToTopBtn.style.display = 'none'; 
      }
  });

  document.querySelector('.footer__scrollToTop').addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});


// FETCH API PRODUCT
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    // Chọn 7 sản phẩm đầu tiên
    const selectFlashSale = data.products.slice(10, 22);

    // Lấy phần tử HTML để chứa flash sale
    const flashSaleElement = document.querySelector(".main__right-product");

    // Lặp qua các sản phẩm và thêm vào HTML
    selectFlashSale.forEach((product) => {
      const flashSaleItem = document.createElement("div");
      flashSaleItem.classList.add("main__right-product-item", "col", "l-2");

      const flashSaleInfo = `
      <div class="main__right-product-item-info">
        <div class="main__right-product-item-info-container">
        <img src="${product.thumbnail}" alt="${
        product.title
         }" width="100px" height="100px" class="main__right-product-item-thumbnail">
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
        <h4 class="main__right-product-item-title">${product.title}</h4>
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
          <span id="time_delivery"></span>
        </div>
        </div>
      `;

      const flashSaleBadgeInfo = `
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
      console.log(dayOfWeekIndex);
      
      const dayOfWeekName = dayOfWeek[dayOfWeekIndex];
      const getDay = now.getDate() + 2;
      const getMonth = now.getMonth() + 1;
      console.log(dayOfWeekName, getDay, getMonth);

      flashSaleItem.innerHTML = flashSaleInfo + flashSaleBadgeInfo;
      flashSaleElement.appendChild(flashSaleItem);

      const timeDeliveryElement = flashSaleItem.querySelector("#time_delivery");
      timeDeliveryElement.textContent = `Giao vào ${dayOfWeekName}, ${getDay}/${getMonth}`;
    });
  })
  .catch((error) => {
    console.log("Fetch error", error);
  });

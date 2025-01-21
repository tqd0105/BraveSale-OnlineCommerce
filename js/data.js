// URL API
const apiUrl = 'http://localhost:3000/api/orders';

// Sử dụng fetch để lấy dữ liệu từ API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Mã phản hồi không hợp lệ');
    }
    return response.json();  // Chuyển đổi dữ liệu trả về thành JSON
  })
  .then(data => {
    const ordersList = document.querySelector('#orders-list');
    data.orders.forEach(order => {
      const li = document.createElement('li');
      li.textContent = `Order ID: ${order.id}, Customer: ${order.customerName}, Total: ${order.totalAmount}`;
      ordersList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Có lỗi xảy ra:', error);  // Xử lý lỗi
  });

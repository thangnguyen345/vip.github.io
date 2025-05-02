let products = [];
let blacklist = [
    { "name": "Nguyễn Văn A", "phone": "0901234567", "address": "Hà Nội", "reason": "Lừa đảo" },
    { "name": "Trần Thị B", "phone": "0912345678", "address": "Hồ Chí Minh", "reason": "Vấn đề thanh toán" }
];

// Thêm sản phẩm vào danh sách
function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const quantity = parseInt(document.getElementById('productQuantity').value);

    if (name && price > 0 && quantity > 0) {
        products.push({ name, price, quantity });
        renderProductList();
        calculateTotal();
    }
}

// Render danh sách sản phẩm
function renderProductList() {
    const tableBody = document.querySelector('#productList tbody');
    tableBody.innerHTML = '';
    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td><button class="button-delete" onclick="deleteProduct(${index})">Xóa</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Xóa sản phẩm
function deleteProduct(index) {
    products.splice(index, 1);
    renderProductList();
    calculateTotal();
}

// Tính tổng tiền
function calculateTotal() {
    let total = 0;
    products.forEach(product => {
        total += product.price * product.quantity;
    });
    document.getElementById('totalPrice').innerText = total;
}

// Lưu vào Excel (chưa có mã JavaScript để lưu vào file Excel, cần thêm thư viện như SheetJS)
function saveToExcel() {
    alert("Tính năng này chưa được triển khai.");
}

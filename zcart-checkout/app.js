const elmEmpty = document.getElementById("empty");
const elmMenu = document.getElementById("list");
const CART_LIST = JSON.parse(localStorage.getItem("zendvn_cart_list")) || [
    { id: "1", name: "Bánh mì bò kho", desc: "Size L • Ít cay", price: 45000, quanlity: 1 },
    { id: "2", name: "Cafe đá (đường ăn kiêng)", desc: "Ly lớn", price: 25000, quanlity: 2 },
    { id: "3", name: "YM (yến mạch + whey)", desc: "Buổi trưa", price: 30000, quanlity: 1 },
];
let elmTotalFood = document.getElementById("totalFood");
let elmTotalQuanlity = document.getElementById("totalQuanlity");
let elmEstimatedTotal = document.getElementById("estimatedTotal");
let elmDiscountPrice = document.getElementById("discountPrice");
let elmTotalPrice = document.getElementById("totalPrice");
let inputCoupon = document.getElementById("coupon");
let btnApplyCoupon = document.getElementById("applyCoupon");
let elmMSG = document.getElementById("msg");
let elmValueDiscount = document.getElementById("valueDiscount");
elmMSG.style.display = "none";
elmValueDiscount.style.display = "none";
let voucherValue = null;
let elmShipPrice = document.getElementById("shipPrice");
let feeShip = 0;
let selectShippingType = document.getElementById("shipping");
let elmShippingNote = document.getElementById("shippingNote");
elmShipPrice.innerText = formatPrice(feeShip);
elmShippingNote.innerText = "Phí vận chuyển sẽ được tính theo hình thức giao hàng.";




const VOUCHER_LIST = [
    {
        code: "ZEND10",
        type: "percent",   // giảm theo %
        value: 10,         // 10%
        description: "Giảm 10% tổng đơn hàng"
    },
    {
        code: "SALE20",
        type: "percent",
        value: 20,         // 20%
        description: "Giảm 20% cho tất cả mặt hàng"
    },
    {
        code: "GIAM50K",
        type: "fixed",     // giảm số tiền
        value: 50000,      // giảm 50.000 đ
        description: "Giảm trực tiếp 50.000 đ"
    },
    {
        code: "FREESHIP",
        type: "fixed",
        value: 15000,      // giảm đúng tiền ship
        description: "Giảm 15.000 đ (miễn phí ship)"
    },
    {
        code: "VIP30",
        type: "percent",
        value: 30,
        description: "Giảm 30% cho khách hàng VIP"
    }
];

const SHIPPING_METHODS = [
    {
        id: "default",
        name: "Chọn hình thức vận chuyển",
        price: 0,
        description: "Phí vận chuyển sẽ được tính theo hình thức giao hàng."
    },
    {
        id: "normal",
        name: "Bình thường",
        price: 10000,
        description: "Giao hàng trong 2–3 ngày"
    },
    {
        id: "fast",
        name: "Nhanh",
        price: 20000,
        description: "Giao hàng trong 24 giờ"
    },
    {
        id: "express",
        name: "Siêu tốc",
        price: 30000,
        description: "Giao trong 1–2 giờ nội thành"
    }
];

renderShipCode(SHIPPING_METHODS);

function renderShipCode(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
        html += `<option value="${data[i].id}">${data[i].name}</option>`
    }
    selectShippingType.innerHTML = html;
}

renderHTML(CART_LIST);

function formatPrice(vnd) {
    return Number(vnd).toLocaleString("vi-VN") + " đ";
}

function renderHTML(data) {
    if (data.length == 0) {
        elmEmpty.innerText = "Chưa có món ăn nào. Thêm món ăn ở trên nhé!";
        elmMenu.innerHTML = "";
    } else {
        elmEmpty.innerText = "";
        let count = 0;
        let estimatedTotal = 0;
        let result = "";
        let discountPrice = 0;
        let totalPrice = 0;

        for (let i = 0; i < data.length; i++) { // A-1 B2 C-5
            let name = data[i].name;
            let desc = data[i].desc;
            let price = data[i].price;
            let quanlity = data[i].quanlity;
            let totalPriceItem = price * quanlity;
            let id = data[i].id;

            elmTotalFood.innerText = data.length;
            count += quanlity;
            estimatedTotal += parseInt(totalPriceItem);

            if (name == "") continue;

            result += `<tr>
              <td>
                <div class="item">
                  <div class="thumb"></div>
                  <div class="item-info">
                    <div class="name">${name}</div>
                    <div class="desc">${desc}</div>
                  </div>
                </div>
              </td>
              <td>
                <div class="price">${formatPrice(price)}</div>
              </td>
              <td>
                <div class="qty"><input onChange="changeQuanlity(this, '${id}')" type="number" value="${quanlity}" /><span class="unit">ly</span></div>
              </td>
              <td>
                <div class="total">${formatPrice(totalPriceItem)}</div>
              </td>
              <td><button onclick="funcDelete('${id}')" class="remove">Xóa</button></td>
            </tr>`
        }

        if (voucherValue != null) {
            if (voucherValue.type == "percent") {
                discountPrice = (estimatedTotal * voucherValue.value) / 100;

            } else if (voucherValue.type == "fixed") {
                discountPrice = voucherValue.value;
            }
        }

        totalPrice = estimatedTotal - discountPrice + feeShip;

        elmEstimatedTotal.innerHTML = formatPrice(estimatedTotal);
        elmDiscountPrice.innerHTML = formatPrice(discountPrice * (-1));
        elmTotalPrice.innerHTML = formatPrice(totalPrice);

        elmTotalQuanlity.innerHTML = count;
        elmMenu.innerHTML = result;
    }
}

function funcDelete(id) {
    if (confirm("Are you sure?") == true) {
        CART_LIST = CART_LIST.filter(item => item.id !== id);
        renderHTML(CART_LIST);
        localStorage.setItem("zendvn_cart_list", JSON.stringify(CART_LIST));
    }
}

function changeQuanlity(elm, id) {
    CART_LIST = CART_LIST.map(item => {
        if (item.id === id) {
            return {
                ...item,
                quanlity: parseInt(elm.value)
            };
        }
        return item;
    });
    renderHTML(CART_LIST);
    localStorage.setItem("zendvn_cart_list", JSON.stringify(CART_LIST));
}

btnApplyCoupon.addEventListener("click", function () {
    let coupon = inputCoupon.value.trim();
    let isExist = false;
    voucherValue = 0;

    for (let i = 0; i < VOUCHER_LIST.length; i++) {
        if (coupon == VOUCHER_LIST[i].code) {
            voucherValue = VOUCHER_LIST[i];
            isExist = true;
            break;
        }
    }

    if (isExist == true) {
        elmMSG.style.display = "none";
        elmValueDiscount.innerText = voucherValue.description;
        elmValueDiscount.style.display = "block";
    } else {
        elmMSG.style.display = "block";
        elmMSG.innerText = "Mã giảm giá không hợp lệ. Vui lòng kiểm tra lại.";
        elmValueDiscount.style.display = "none";
    }

    renderHTML(CART_LIST);
});

selectShippingType.addEventListener("change", function () {
    let typeOfShipping = selectShippingType.value.trim();
    let shipping_current = null;
    for (let i = 0; i < SHIPPING_METHODS.length; i++) {
        if (typeOfShipping == SHIPPING_METHODS[i].id) {
            shipping_current = SHIPPING_METHODS[i];
            break;
        }
    }
    elmShipPrice.innerText = formatPrice(shipping_current.price);
    elmShippingNote.innerText = shipping_current.description;
    feeShip = shipping_current.price

    renderHTML(CART_LIST);
});


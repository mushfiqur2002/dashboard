// --- box 1 icon START--- //
document.querySelectorAll('#icon_div').forEach(iconDiv => {
    const bgColor = iconDiv.getAttribute('bg-color');
    iconDiv.style.backgroundColor = bgColor;
});
// --> adding differnet color acording to div 
document.querySelectorAll('#icon_svg').forEach(iconSvg => {
    const svgFill = iconSvg.getAttribute('svg-fill');
    iconSvg.style.fill = svgFill;
})
// --> adding differnet color acording to div 
document.querySelectorAll('#mycircle').forEach(circle => {
    const strokeColor = circle.getAttribute('stroke-color');
    circle.style.stroke = strokeColor;
});
// --- box 1 icon END--- //


//-----------*********-------------//


// --- table START --- //
const tableBody = document.querySelector('.secondContainer table tbody');
const productListBody = document.querySelector('#product_list');
async function fetchData() {
    try {
        const res = await fetch('fakeData.json');
        const data = await res.json();
        showElement(data);
    } catch (err) {
        console.error(err);

    }
}
fetchData();
let showingData = 6;
const showElement = (dataBundle) => {

    let data = dataBundle.slice(0, showingData);
    let element = data.map(function (item) {
        let bgColor = '';
        if (item.status.toLowerCase() === 'approved') {
            bgColor = 'background-color: green; color: white;';
        } else if (item.status.toLowerCase() === 'rejected') {
            bgColor = 'background-color: red; color: white;';
        } else if (item.status.toLowerCase() === 'pending') {
            bgColor = 'background-color: yellow; color: black;';
        }
        return `<tr>
                    <td>${item.customer_id}</td>
                    <td>${item.name}</td>
                    <td>${item.product_name}</td>
                    <td>$${item.price}</td>
                    <td><p style="${bgColor}; width: fit-content; padding:2px 5px">${item.status}</p></td>
                </tr>`
    })

    let disEle = element.join("");
    tableBody.innerHTML = disEle;
}
// --- table END --- //


//-----------*********-------------//


// --- product list START--- //
async function fetchData2() {
    try {
        const res2 = await fetch('product.json');
        const data2 = await res2.json();
        showElement2(data2);
    } catch (err) {
        console.log(err);

    }
}
fetchData2();
const showElement2 = (dataBundle) => {
    let element = dataBundle.map(function (item) {
        return `<li>
                                <div class="poduct">
                                    <div class="product_img">
                                        <img src="${item.product.image_url}" alt="">
                                    </div>
                                    <div class="product_dtls">
                                        <p class="product_name" style="font-size: .8rem; font-weight: 600;">${item.product.name}</p>
                                        <p class="date" style="font-size: .6rem;">${item.payment.purchase_date}</p>
                                    </div>
                                </div>
                                <div class="paymnt">
                                    <div class="payment_img">
                                        <img src="${item.payment.method.image_url}" alt="">
                                    </div>
                                    <div class="payment_dtls">
                                        <p class="accountNum"style="font-size: .8rem; font-weight: 600;">${item.payment.card_number}</p>
                                        <p class="cardName" style="font-size: .6rem;">${item.payment.method.type}</p>
                                    </div>
                                </div>
                                <div class="price">
                                    <p style="font-size: 1rem; font-weight: 600;">$${item.product.price}</p>
                                </div>
                            </li>`
    })

    let disEle = element.join("");
    productListBody.innerHTML = disEle;
}
// --- product list END--- //


//-----------*********-------------//


// --- toggle button START --- //
document.getElementById('menuBar').addEventListener('click', function() {
    const main_container = document.querySelector('.main_container');
    main_container.classList.toggle('active');
});
document.getElementById('closeBar').addEventListener('click', function() {
    const main_container = document.querySelector('.main_container');
    main_container.classList.toggle('active');
});
// --- toggle button END --- //


//-----------*********-------------//


// --- scroll track START --- //
// window.addEventListener('scroll',()=>{
//     let ele = document.getElementById('linkUL');
//     let scrollPosition = window.scrollY;

//     const newPadding = 20 + scrollPosition * 1; // Adjust the factor as needed
//     ele.style.paddingTop = `${newPadding}px`;
// })
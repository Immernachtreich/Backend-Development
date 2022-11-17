const nav = document.getElementById('navCart'); // Navigation Bar

// Buttons
const topCartBtn = document.getElementById('top-cart-btn');
const bottomCartBtn = document.getElementById('bottom-cart-btn');
const xButton = document.getElementById('close-btn');

// Button Event Listeners
{
    topCartBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    })

    bottomCartBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    })

    xButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    })
}

// Shop Section Div for event listener
const shopSectionDiv = document.getElementById('shop-section');

// Cart Section Div for event listener
const cartList = document.getElementById('cart-items-ul');

/*
* Event Listeners
*/
shopSectionDiv.addEventListener('click', addToCart);

cartList.addEventListener('click', removeItemFromtCart);

window.addEventListener('DOMContentLoaded', getProducts);

function addToCart(e) {

    if(e.target.classList.contains('shop-btn')) {
        const albumDiv = e.target.parentElement.parentElement;

        const title = albumDiv.children[0].innerText;
        const price = albumDiv.children[2].children[0].innerText;
        const imgSrc = albumDiv.children[1].children[0].src;

        const li = 
            `
            <li id="${title}" class="cart-list-ul-li">
                <img src="${imgSrc}" alt="${title}">
                <div class="title-div-cart"> ${title} </div>
                <div class="price-div-cart"> ${price} </div>
                <input type="number" id="quantity-input" class="quantity-input">
                <button class="remove-button" id="remove-button"> Remove </button>
            </li>
            `

        cartList.innerHTML += li;

        const totalDiv = document.getElementById('total-div');

        const existingPriceString = totalDiv.innerText.split(':');
        const existingPrice = parseFloat(existingPriceString[1]);

        const justPrice = albumDiv.children[2].children[0].children[0].innerText;
        const floatPrice = parseFloat(justPrice);

        const totalPrice = existingPrice + floatPrice;

        totalDiv.innerText = `Total: ${totalPrice}`;

        popupNotification(title);
    }
}


function popupNotification(title) {
    const notifDiv = document.getElementById('notification');

    const notif = document.createElement('div');

    notif.classList.add('notification-add');

    notif.innerText = `Your Product: ${title} has been added to the cart`;

    notifDiv.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    },3000)
}

function removeItemFromtCart(e) {

    if(e.target.classList.contains('remove-button')) {
        
        const li = e.target.parentElement;

        const totalDiv = document.getElementById('total-div');

        const existingPriceString = totalDiv.innerText.split(':');
        const existingPrice = parseFloat(existingPriceString[1]);

        const currentItemPriceString = e.target.parentElement.children[2].innerText.split('$')[1];
        const currentItemPrice = parseFloat(currentItemPriceString);

        const totalPrice = existingPrice - currentItemPrice;

        totalDiv.innerText = `Total: ${totalPrice}`;

        cartList.removeChild(li);
    }
}

async function getProducts() {

    try {
        const musicDiv = document.getElementById('Album-container');
        const merchDiv = document.getElementById('product-container');

        const musics = await axios.get('http://localhost:5010/products/get-musics');

        musics.data.forEach((musics) => {

            const musicsLiDiv = 
                `
                <div class="Album-1">

                    <h3>${musics.title}</h3>

                    <div class="img-cont">
                        <img class="product-imgs" src="${musics.imageUrl}" alt="Album-1">
                    </div>

                    <div class="product-details">
                        <span>$<span>${musics.price}</span></span>
                        <button class="shop-btn" type='button'>ADD TO CART</button>
                    </div>

                </div>
                `
            
            musicDiv.innerHTML += musicsLiDiv;
        })

        const merches = await axios.get('http://localhost:5010/products/get-merches');

        merches.data.forEach((merches) => {
            const merchesLiDiv = 
            `
                <div>
                    <h3>${merches.title}</h3>

                    <div class="img-cont">
                        <img class="product-imgs" src="${merches.imageUrl}" alt="Mug">
                    </div>

                    <div class="product-details">
                        <span>$<span>${merches.price}</span></span>
                        <button class="shop-btn" type='button'>ADD TO CART</button>
                    </div>

                </div> 
            `

            merchDiv.innerHTML += merchesLiDiv;
        })

    } catch(err) {
        console.log(err);
    }
}
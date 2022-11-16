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

const shopSectionDiv = document.getElementById('shop-section');
const cartList = document.getElementById('cart-items-ul');

shopSectionDiv.addEventListener('click', addToCart);

cartList.addEventListener('click', removeItemFromtCart);

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
        cartList.removeChild(li);
    }
}
const ordersSection = document.getElementById('orders-section');

window.addEventListener('DOMContentLoaded', getOrders);

async function getOrders() {

    const orders = await axios.get('http://localhost:5010/orders/get-orders');

    // orders.data is a nested array 
}
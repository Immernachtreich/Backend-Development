const btn = document.getElementById('btn');
const div = document.getElementById('container');

btn.addEventListener('click', createNotification);

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerHTML = 'This is toast notification';

    div.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    },3000)
}
var num1 = document.getElementById('input-1');
var num2 = document.getElementById('input-2');
var button = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+num1.value, +num2.value));
});
function objTypes(result) {
    console.log(result.time);
}
objTypes({
    val: 'wow',
    time: new Date()
});

const num1 = document.getElementById('input-1') as HTMLInputElement;
const num2 = document.getElementById('input-2') as HTMLInputElement;
const button = document.querySelector('button')!;

function add(num1: number, num2: number) {
    return num1 + num2;
}

button.addEventListener('click', () => {
    console.log(add(+num1.value, +num2.value));
})

type resultType = {
    val: string,
    time: Date
}
function objTypes(result: resultType) {
    console.log(result.time);
}

objTypes({
    val: 'wow',
    time: new Date()
})
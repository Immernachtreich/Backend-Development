const product = (a, b) => a*b;

console.log(product(9, 8));

const Student = {
    name: 'Rey',
    age: '24',
    greet() {
        console.log('Hi I am ' + this.name);
    }
}

Student.greet();
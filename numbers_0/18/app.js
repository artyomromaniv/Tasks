let num = +prompt("Введите число");

let a = Math.floor(num / 100);
let b = Math.floor(num / 10 % 10);
let c = Math.floor(num % 10);

console.log("Сумма цифр = " + (a + b + c));
console.log("Произведение цифр = " + (a * b * c));

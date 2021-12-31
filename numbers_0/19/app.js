let num = +prompt("Введите число");

let a = Math.floor(num / 1000);
let b = Math.floor(num / 100 % 10);
let c = Math.floor(num / 10 % 10);
let d = Math.floor(num % 10);

console.log("Цифра в позиции тысяч равна " + a);
console.log("Цифра в позиции сотен равна " + b);
console.log("Цифра в позиции десятков равна " + c);
console.log("Цифра в позиции единиц равна " + d);
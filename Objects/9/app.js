let n = +prompt("Введите число элементов массива");
let obj = {};

while (isNaN(n) || n === 0) {
	n = +prompt("Еще раз введите число");
};

for (let i = 1; i <= n; i++) {
	obj[i] = Math.random().toFixed(1) * 10;
};

console.log(obj);
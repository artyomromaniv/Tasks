let obj = {};
let n = +prompt("Введите количество элементов массива");
let arr = [];
let summa = 0;

for (let i = 0; i < n; i++) {
	arr[i] = +prompt("Введите число");
	summa += arr[i];
};

obj.avg = summa / n;
console.log(obj.avg);
const n = +prompt("Введите количество чисел");
let summa = 0;

for (let i = 1; i <= n; i++) {
	let m = +prompt("Введите число");
	summa += m;
}
console.log(summa)
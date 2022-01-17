const n = +prompt("Введите натуральное число");
let summa = 0;

for (let i = 1; i <= n; i++) {
	if (((i ** 2) % 10 === 8) || ((i ** 2) % 10 === 2.5)) {
		summa += i;
	}
}
console.log(summa);
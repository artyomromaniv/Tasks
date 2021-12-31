const n = +prompt("Введите число");
let summa;

if (n >= 1 && n < 3) {
	summa = n * 10.5;
} else if (n >= 3) {
	summa = (10.5 * 2) + ((n - 2) * 4);
}

console.log(summa);

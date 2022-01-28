let num = +prompt("Введите число монет");
let summa = 0;

while (num > 0) {
	if (num >= 25) {
		num -= 25;
	} else if (num >= 10) {
		num -= 10;
	} else if (num >= 5) {
		num -= 5;
	} else if (num >= 1) {
		num -= 1;
	}
	summa += 1;
}
console.log(summa);
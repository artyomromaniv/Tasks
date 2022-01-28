let num = +prompt("Введите оценку");
let summa = 0;

while (num >= 1 && num <= 5) {
	if (num === 5) {
		summa += 1;
	}
	num = +prompt("Введите оценку");
}
console.log(summa);
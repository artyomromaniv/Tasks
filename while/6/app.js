let num = +prompt("Введите число");
let maxNum = 0;
let minNum = 9;

while (num > 0) {
	if (num % 10 > maxNum) {
		maxNum = num % 10;
	} else if (num % 10 < minNum) {
		minNum = num % 10;
	}
	num = (num - num % 10) / 10;
}
console.log("Максимальная цифра равна " + maxNum);
console.log("Минимальная цифра равна " + minNum);

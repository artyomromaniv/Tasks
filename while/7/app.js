let num = +prompt("Введите число");
let summa = 0;
let quantity = 0;
let proizvedenie = 1;
let averageNum = 0;
let firstNum = 0;
let lastNum = num % 10;

while (num > 0) {
	summa += num % 10;
	quantity += 1;
	proizvedenie *= num % 10;
	averageNum = (summa / quantity);
	if (num > 0) {
		firstNum = (num % 10);
	}
	num = (num - num % 10) / 10;
}

console.log(summa);
console.log(quantity);
console.log(proizvedenie);
console.log(averageNum);
console.log(firstNum);
console.log(firstNum + lastNum);
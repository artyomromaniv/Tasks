let num = +prompt("Введите число");
let lastNum = num % 10;
let result = "yes";

while (num > 0) {
	if (num % 10 < lastNum) {
		result = "no"
	}
	lastNum = num % 10;
	num = (num - num % 10) / 10;
}

console.log(result);


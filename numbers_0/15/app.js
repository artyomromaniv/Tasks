let num = +prompt("Введите численность населения");

if (num % 2 !== 0) {
	console.log((num + 1) / 2);
} else if (num % 2 === 0) {
	console.log(num / 2);
}
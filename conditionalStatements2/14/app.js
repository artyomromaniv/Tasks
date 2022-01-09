const num = +prompt("Введите число")

if (num > 999 && num < 10000) {
	if (num % 7 && num % 17) {
		console.log("yes")
	} else {
		console.log("no")
	}
}
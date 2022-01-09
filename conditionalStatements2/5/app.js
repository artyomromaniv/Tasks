let znach = prompt("Введите значение")

if (isFinite(znach)) {
	if (znach % 3 === 0) {
		console.log("Это число и остаток от деления на 3 равен 0")
	} else if (znach % 3 !== 0) {
		console.log("Это число, но остаток от деления на 3 не равен 0")
	}
} else {
	console.log("Это не число")
}
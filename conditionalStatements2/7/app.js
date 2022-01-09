const num = prompt("Введите число")

if (isFinite(num)) {
	if (num > 0) {
		console.log("Число больше 0")
	} else if (num < 0) {
		console.log("Число меньше 0")
	} else {
		console.log("Это 0")
	}
} else {
	console.log("Это не число")
}

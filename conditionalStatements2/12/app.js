const num = +prompt("Введите возраст")

if (num > 0 && num <= 13) {
	console.log("Детство")
} else if (num > 13 && num <= 24) {
	console.log("Молодость")
} else if (num > 24 && num <= 59) {
	console.log("Зрелость")
} else if (num > 59) {
	console.log("Старость")
} 
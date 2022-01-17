let arr = [];

for (let i = 1; i <= 5; i++) {

	let n = +prompt("Введите число")
	if (isFinite(n)) {
		arr.push(n ** 2);
	} else {
		n = +prompt("Снова введите число")
	}
}

for (let a = 0; a < arr.length; a++) {
	console.log(arr[a])
}
let arr = [];

for (let i = 1; i <= 5; i++) {
	let n = +prompt("Введите число")
	if (isFinite(n)) {
		arr.push(n);
	} else {
		n = +prompt("Снова введите число")
	}
}

for (let a = 0; a < arr.length; a++) {
	if ((arr[a].toString().startsWith("1"))
		|| (arr[a].toString().startsWith("2"))
		|| (arr[a].toString().startsWith("5"))) {
		console.log(arr[a])
	} else {
		console.log("В массиве нет элементов, которые начинаются на 1, 2, 5")
	}
}


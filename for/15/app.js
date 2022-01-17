let arr = [];

for (let i = 1; i <= 5; i++) {
	let n = +prompt("Введите число")
	arr.push(n ** 2);
}

for (let a = 0; a < arr.length; a++) {
	console.log(arr[a])
}
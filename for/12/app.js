let result = "Yes";

for (let i = 1; i <= 10; i++) {
	let a = +prompt("Введите число");
	if (a % 2 !== 0) {
		result = "No";
	}
}
console.log(result);
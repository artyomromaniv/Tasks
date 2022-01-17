const n = +prompt("Введите число");

for (let i = 0; i <= n; i++) {
	console.log("*".repeat(n - i));
}
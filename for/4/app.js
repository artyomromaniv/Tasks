const m = +prompt("Введите число m");
const n = +prompt("Введите число n");

if (m < n) {
	for (let i = m; i <= n; i++) {
		console.log(i);
	}
} else {
	for (let i = m; i >= n; i--) {
		console.log(i);
	}
}
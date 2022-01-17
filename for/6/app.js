const m = +prompt("Введите число m");
const n = +prompt("Введите число n");
// m <= n
for (let i = m; i <= n; i++) {
	if (i % 17 === 0
		|| (i % 3 === 0 && i % 5 === 0)
		|| Math.abs(i) % 10 === 9) {
		console.log(i)
	} else {
		null;
	}
}
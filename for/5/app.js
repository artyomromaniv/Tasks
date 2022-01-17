const m = +prompt('Введите число');
const n = +prompt('Введите число');
//m > n
for (let i = m; i >= n; i--) {
	if (i % 2 === 0) continue;
	console.log(i);
}
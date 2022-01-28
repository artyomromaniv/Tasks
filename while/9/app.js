let n = +prompt("Введите число");
let a = 1;

while (a < n) {
	a += 1;
	if (n % a === 0) {
		console.log(a)
		break;
	}
}
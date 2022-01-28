let n = +prompt("Введите число");
let a = 0;

while (a < n) {
	a += 1;
	if ((a >= 5 && a <= 9) || (a >= 17 && a <= 37) || (a >= 78 && a <= 87)) {
		continue;
	}
	console.log(a);
}

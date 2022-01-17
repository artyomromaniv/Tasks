const n = +prompt("Введите n");
let max1 = 0;
let max2 = 0;

for (i = 1; i <= n; i++) {
	let a = +prompt("Введите число");
	if (a > max1) {
		max2 = max1;
		max1 = a;
	} else if (a <= max1 && a > max2) {
		max2 = a;
	}
}

console.log(max1);
console.log(max2);
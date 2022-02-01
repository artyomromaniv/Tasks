let n = +prompt("Введите натуральное число n");

while (n >= 1000) {
	n = (n - n % 10) / 10;
}
n = n % 10;

console.log(n);


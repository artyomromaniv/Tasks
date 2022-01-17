let proizvedenie = 1;

for (let i = 1; i <= 10; i++) {
	let a = +prompt("Введите число");
	if (a !== 0) {
		proizvedenie *= a;
	}
}

console.log(proizvedenie);
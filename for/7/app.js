const a = +prompt("Введите a");
const b = +prompt("Введите b");
let summa = 0;

for (let i = a; i <= b; i++)
	if ((i ** 3) % 10 === 4 || (i ** 3) % 10 === 9) {
		summa += 1
	}

console.log(summa);
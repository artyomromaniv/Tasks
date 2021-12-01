const str = prompt("Введите строку");
let summa = 0;

for (let i = 0; i < str.length; i++) {
	if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
		summa += 1;
	}
}

console.log(summa);
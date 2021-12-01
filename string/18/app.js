let str = prompt("Введите строку");
let summa = 0;

str = str.split(" ");
for (let i = 0; i < str.length; i++) {
	summa += 1;
}

console.log(summa);
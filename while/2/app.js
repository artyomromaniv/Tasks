let word = prompt("Введите слово");
let summa = 0;

while (word !== "стоп" && word !== "хватит" && word !== "достаточно") {
	summa += 1;
	word = prompt("Введите слово");
}
console.log(summa);
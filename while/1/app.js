let word = prompt("Введите слово");

while (word != "КОНЕЦ") {
	if (word === "КОНЕЦ") break;
	console.log(word);
	word = prompt("Введите слово");
}
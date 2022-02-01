const x1 = +prompt("Введите х1");
const y1 = +prompt("Введите y1");
const x2 = +prompt("Введите х2");
const y2 = +prompt("Введите y2");

if (x1 - x2 === y1 - y2
	|| x1 - x2 === y2 - y1
	|| x1 === x2 || y1 === y2) {
	console.log("YES");
} else {
	console.log("NO");
}
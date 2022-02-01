const x1 = +prompt("введите х1");
const y1 = +prompt("введите y1");
const x2 = +prompt("введите х2");
const y2 = +prompt("введите y2");

if (x1 - x2 === y1 - y2 || x1 - x2 === y2 - y1) {
	console.log("YES");
} else {
	console.log("NO");
}
const x1 = +prompt("введите х1");
const y1 = +prompt("введите y1");
const x2 = +prompt("введите х2");
const y2 = +prompt("введите y2");

const x = Math.abs(x2 - x1);
const y = Math.abs(y2 - y1);

if (x === 2 && y === 1 || x === 1 && y === 2) {
	console.log("YES");
} else {
	console.log("NO");
}
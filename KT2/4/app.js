const x1 = +prompt("введите х1");
const y1 = +prompt("введите y1");
const x2 = +prompt("введите х2");
const y2 = +prompt("введите y2");

if (((x1 + y1) % 2 == 0) && ((x2 + y2) % 2 == 0)
	|| ((x1 + y1) % 2 != 0) && ((x2 + y2) % 2 != 0)) {
	console.log("YES");
} else {
	console.log("NO");
}
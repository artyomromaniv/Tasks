const n = +prompt("Введите n");
let str = "*" + " ".repeat(17) + "*";

for (let i = 1; i <= n; i++) {
	if (i === 1 || i === n) {
		console.log("*".repeat(19));
	} else {
		str += " ";
		console.log(str);
	}
}


const str = prompt("Введите строку");
let result = "No";

if (str.endsWith(".com") || str.endsWith(".ru")) {
	result = "Yes";
}

console.log(result);
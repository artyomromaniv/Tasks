let str = prompt("Введите строку");
let result = "NO";

s = str.toLowerCase();

if (s.includes("хорош")) {
	result = "YES";
}

console.log(result);
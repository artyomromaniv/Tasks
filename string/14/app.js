let str = prompt("Введите Имя и Фамилию");
let result = "YES";

s = str.split(" ");
for (let i = 0; i < s.length; i++) {
	if (s[i].substr(0, 1) != s[i].substr(0, 1).toUpperCase()) {
		result = "NO";
	}
}

console.log(result);

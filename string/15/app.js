let str = prompt("Введите строку");

s = str.split("");

for (i = 0; i < s.length; i++) {
	if (s[i] == s[i].toLowerCase()) {
		s[i] = s[i].toUpperCase();
	} else {
		s[i] = s[i].toLowerCase();
	}
}

console.log(s.join(""));


let str = prompt("Введите строку");

s = str.split(" ");

for (let i = 0; i < s.length; i++) {
	s[i] = s[i].substr(0, 1).toUpperCase() + s[i].slice(1);
}

console.log(s.join(" "));

/* for (начало; условие; шаг) {
	// ... тело цикла ...
 }  */

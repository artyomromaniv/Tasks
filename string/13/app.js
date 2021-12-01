let str = prompt("Введите строку");													//слово_слово_слово_

s = str.split("_");																	//слово_, слово_, cлово_

for (let i = 1; i < s.length; i++) {
	s[i] = (s[i].substr(0, 1).toUpperCase()) + s[i].slice(1);
}
console.log(s.join(""));



/* for (начало; условие; шаг) {
	// ... тело цикла ...
 }  */


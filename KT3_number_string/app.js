/*
let str = prompt("Введите слово");

while (str === "" || str === " " || str === ",") {
	console.log("Некорректный ввод");
	str = prompt("Введите слово еще раз");
}
if (str === str.split("").reverse().join("")) {
	console.log("Yes");
} else {
	console.log("No");
}
*/

/*
let num = +prompt("Введите число");

while (isNaN(num)) {
	console.log("Некорректный ввод");
	num = +prompt("Введите число еще раз");
}
if (num % 3 === 0 && num % 5 === 0) {
	console.log("fizzbuzz")
} else if (num % 5 === 0) {
	console.log("buzz")
} else if (num % 3 === 0) {
	console.log("fizz")
} else {
	console.log(num)
}
*/

/*
let str = prompt("Введите слово");
let summa = 0;

while (str === "" || str === " " || str === ",") {
	console.log("Некорректный ввод");
	str = prompt("Введите слово еще раз");
}
for (let i = 0; i < str.length; i++) {
	if (str[i] === "a" || str[i] === "e" || str[i] === "u" || str[i] === "i" || str[i] === "o") {
		summa += 1;
	}
}
console.log(summa);
*/


let str1 = prompt("Введите первую строку");
let str2 = prompt("Введите вторую строку");

for (let i = 0; i < str1.length; i++) {
	if (str1[i].includes(str2[i])) {
		console.log(true);
	} else {
		console.log(false);
	}
}


/*
let n = +prompt("Введите количество чисел");
let result = "";
let a = 0;
let b = 1;
summa = 0;

while (isNaN(n)) {
	console.log("Некорректный ввод");
	n = +prompt("Введите число еще раз");
}
for (let i = 1; i <= n; i++) {
	summa = a + b;
	b += a;
	a = b - a;
	result += summa;
}
console.log(result);
*/

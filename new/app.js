/*
let str = "hello, world!";

str = str.split("");
for (i = 0; i < str.length; i++) {

}
console.log(str);
*/
/*
let str = "Каждый охотник желает знать";

str = str.split(" ");
console.log(str);
*/
/*
let str = "Каждый охотник желает знать";

str = str.split(" ");
console.log(str.slice(0, 1)[0]);
*/

/*
let str = "HTML JavaScript PHP"

str = str.split(" ");
console.log(str.join("-"));
*/

/*
let str = "string not starting with capital"
str = str.split(" ")

for (let i = 0; i < str.length; i++) {
	str[i] = str[i].slice(0, 1).toUpperCase() + str[i].slice(1);
}
console.log(str.join(" "));
*/
/*
let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
str = str.split("");

for (let i = 0; i < str.length; i++) {
	if (str[i] === str[i].toUpperCase()) {
		str[i] = str[i].toLowerCase();
	} else {
		str[i] = str[i].toUpperCase();
	}
}
console.log(str.join(""));
*/
/*
let str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";
str = str.split("");
let str2 = "";

for (let i = 0; i < str.length; i++) {
	if ((str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122)
		|| (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90)
		|| (str[i] === " ")) {
		if (str2.endsWith(" ") && str[i] === " ") continue;
		else str2 += str[i];
	}
}
console.log(str2);
*/
/*
let str1 = "string";
let str2 = "StRiNg";

let str3 = "ABCDe";
let str4 = "AbcdW";

if (str1.toUpperCase() === str2.toUpperCase()) {
	console.log(true);
}
if (str3.toUpperCase() === str4.toUpperCase()) {
	console.log(true);
} else {
	console.log(false);
}
*/

/*
let str = "'Изучаю JavaScript";

if (str.includes("javascript")) {
	console.log(true);
} else {
	console.log(false);
}
*/

/*
let str = "Изучаю JavaScript";

console.log(str.repeat(5));
*/

/*
let str = "Изучаю JavaScript";

console.log(str.length);
*/
/*
let str = "HelloWorld"
str = str.split("");
let str2 = ""


for (i = 0; i <. str.length; i++) {

	if (str[i] === str[i].toUpperCase()) {
		str2 += "_" + str[i]
	} else {
		str2 += str[i]
	}
}
console.log(str2.slice(1));
*/
/*
let str = "/home/user/dir/file.txt";
const numString = str.lastIndexOf("/");

console.log(str.slice(numString + 1));
*/
/*
let str1 = "Каждый охотник желает знать";
let str2 = prompt("вторая строка");

if (str1.endsWith(str2)) {
	console.log(true);
} else {
	console.log(false);
}
*/
/*
let str = "Астрономия это наука о небесных объектах".toLowerCase();

let summaStr = 0;
for (i = 0; i < str.length; i++) {
	if (str[i] === "о") {
		summaStr += 1;
	}
}
console.log(summaStr);
*/
/*
let str = " Сила тяжести приложена к центру масс тела "

console.log(str.trim());
*/

/*
На вход подается строка с html 
'<h1>Здесь важная информация о тегах <strong>HTML</strong>.</h1>'.
 Необходимо вырезать html теги('Здесь важная информация о тегах HTML.') */




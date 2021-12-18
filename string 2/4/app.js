let str1 = prompt("Введите первую строку").toLowerCase();
let str2 = prompt("Введите вторую строку").toLowerCase();

let indexNumber;
let error;

if (str1.indexOf(str2) == -1) {
	error = "Повторений не было";
} else {
	indexNumber = str1.lastIndexOf(str2) + str2.length;
}

let resultString = str1.slice(indexNumber);

if (resultString.startsWith(" ") || resultString.endsWith(" ")) {
	console.log(resultString.trim());
} else if (str1.indexOf(str2) !== -1) {
	console.log(resultString);
} else {
	console.log(error);
}




//jSI js LEAJSjsRN Js rrrrrJs It’s good
//js

//MINSKDo u Live In minskyeah
//mInSk

//MINSKDo u Live In minskyeah
//tututu
let str = prompt("Введите номер");
let string = "некорректный номер";

let i = 0;
while ((str.charCodeAt(i) >= 48 || str.charCodeAt(i) <= 57)) {
	if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
		string = str.slice(0, 3) + "-" + str.slice(3, 5) + "-" + str.slice(5, 7);
	} else {
		string = "некорректный номер";
		break;
	}
	i++;
}
console.log(string);




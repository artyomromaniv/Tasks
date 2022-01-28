//На вход подается строка с html 
//<h1>Здесь важная информация о тегах <strong>HTML</strong>.</h1>.
//Необходимо вырезать html теги('Здесь важная информация о тегах HTML.')

let str = "<h1>Здесь важная информация о тегах <strong>HTML</strong>.</h1>.";
let str2 = ""

for (i = 0; i < str.length; i++) {
	if (str[i].includes("<") || str[i].includes(">")) {
		str = str.slice(str[i] == "<", str[i] == ">")
		if (str[i] != "<" || str[i] != ">") continue;
	}
}
console.log(str);



//когда i-тое значение = "<", то вырезать до i-того = ">"
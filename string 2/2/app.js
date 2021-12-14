const str = prompt("Введите строку");

if (str.startsWith("https")
	&& (str.endsWith(".com")
		|| str.endsWith(".ru")
		|| str.endsWith(".by")
		|| str.endsWith(".org"))) {
	console.log("«При маршрутизации используется либо протокол SSL, либо TLS");

} else if (str.startsWith("http")
	&& (str.endsWith(".com")
		|| str.endsWith(".ru")
		|| str.endsWith(".by")
		|| str.endsWith(".org"))) {
	console.log("«Шифрование не применяется");
	
} else if (str.startsWith("") || str.startsWith(" ")) {
	console.log("Ошибка GET запроса");
}
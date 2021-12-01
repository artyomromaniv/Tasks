const date = prompt("Введите дату в формате гггг-мм-дд");

if (+date.substr(0, 4) === 0 || +date.substr(5, 2) === 0 || +date.substr(8, 2) === 0) {
	console.log(0);
} else {
	console.log(+date.substr(8, 2) + "/" + date.substr(5, 2) + "/" + date.substr(0, 4));
}

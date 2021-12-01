const date = prompt("Введите дату в формате гггг-мм-дд");

console.log(+date.substr(8, 2) + "." + date.substr(5, 2) + "." + date.substr(0, 4));

let menu = {
	width: prompt("Введите значение ширины"),
	height: prompt("Введите значение высоты"),
	title: prompt("Введите название тайтла"),
};

let summa = 0;

for (let key in menu) {
	if (!isNaN(menu[key])) {
		summa += 1;
	};
};
console.log(summa);
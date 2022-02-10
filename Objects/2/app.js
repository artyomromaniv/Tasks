let menu = {
	width: prompt("Введите значение ширины"),
	height: prompt("Введите значение высоты"),
	title: prompt("Введите название тайтла")
};

for (let key in menu) {
	if (isNaN(menu[key])) {
		continue;
	};
	menu[key] *= 2;
};

console.log(menu.width);
console.log(menu.height);
console.log(menu.title);
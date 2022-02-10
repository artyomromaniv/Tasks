let obj = {
	color: prompt("Введите цвет"),
	size: prompt("Введите значение в метрах"),
};

let summa = 0;

for (let key in obj) {
	if (obj[key] !== "") {
		summa += 1;
	};
};

if (summa === 0) {
	console.log(false);
} else {
	console.log(true);
}

let n = +prompt("Введите число элементов массива");
let obj = {};
let result = false;

while (isNaN(n) || n === 0) {
	n = +prompt("Еще раз введите число");
};

for (let i = 1; i <= n; i++) {
	obj[i] = prompt("Введите название города");
	if (obj[i] === "Минск") {
		result = true;
	};
};

console.log(result);



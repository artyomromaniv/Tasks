let obj = {};
let n = +prompt("Введите количество ключей объекта");

for (let i = 1; i <= n; i++) {
	obj[i] = prompt("Введите название города");
};

let obj2 = obj;

for (let i = 1; i <= n; i++) {
	for (let j = 1; j <= n; j++) {
		if (obj[i] === obj2[j] && i !== j) {
			delete obj[i];
		};
	};
};

console.log(obj);
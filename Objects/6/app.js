let obj = {
	name: '',
	age: '',
	birthday: '',
	status: '',
};

obj.name = prompt("Введите имя");
obj.age = prompt("Введите возраст");
obj.birthday = prompt("Введите ДР");
obj.status = prompt("Введите статус");

for (let key in obj) {
	if (obj[key] === "" || obj[key] === " ") {
		obj[key] = prompt("Введите данные еще раз(ошибка)");
	};
};

console.log(obj);
let user = {
	name: "John",
	age: 30,
};

let summa = 0;

for (let key in user) {
	summa += 1;
};

console.log(summa);
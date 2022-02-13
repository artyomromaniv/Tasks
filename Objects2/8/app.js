let user = {
	name: "John",
	age: 324,
	age1: 323,
	age2: 30,

};

let summa = 0;

for (let key in user) {
	if (typeof (user[key]) === "number") {
		summa += 1;
	};
};

console.log(summa);
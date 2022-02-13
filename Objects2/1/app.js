let user = {
	name: "John",
	age: 30,
};

let result = "Объект пустой";

for (let key in user) {
	result = "Объект не пустой";
};

console.log(result);
console.log("age" in user);
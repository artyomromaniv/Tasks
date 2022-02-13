let user = [
	{
		name: "John",
		age: 30,
	},
	{
		name: "Bob",
		age: 21,
	},
	{
		name: "Anna",
		age: 19,
	}
]

let obj = "Объект не наден";

for (let i = 0; i < user.length; i++) {
	if (user[i].name === "Bob") {
		obj = user[i];
		break;
	};
};

console.log(obj);
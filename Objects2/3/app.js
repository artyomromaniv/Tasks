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
];

for (let i = 0; i < user.length; i++) {
	if (user[i].name === "Anna") {
		user.splice(i, 1)
	};
};

console.log(user);
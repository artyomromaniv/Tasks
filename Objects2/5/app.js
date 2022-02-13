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
	user[i].age *= 2;
};

console.log(user);
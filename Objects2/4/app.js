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

user.sort((a, b) => a.age - b.age);

console.log(user);
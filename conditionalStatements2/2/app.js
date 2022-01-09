const num = +prompt("Введите число");

if (num >= 0 && num < 16) {
	console.log("В первую четверть");
} else if (num >= 16 && num < 31) {
	console.log("Во вторую четверть");
} else if (num >= 31 && num < 46) {
	console.log("В третью четверть");
} else if (num >= 46 && num <= 60) {
	console.log("В четвертую четверть");
}
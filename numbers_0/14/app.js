const n = +prompt("Число школьников");
const k = +prompt("Число мандаринов");

if (k % n === 0) {
	console.log(k / n);
	console.log(0);
} else if (k % n !== 0) {
	console.log(0);
	console.log(k);
}
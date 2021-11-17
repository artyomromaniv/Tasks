const a = +(prompt('первое число'));
const b = +(prompt('второе число'));
const c = +(prompt('третье число'));
const d = +(prompt('четвертое число'));
let min;

if (a < b) {
	min = a;
} else {
	min = b;
}
if (min > c) {
	min = c;
}
if (min > d) {
	min = d;
}

console.log(min);
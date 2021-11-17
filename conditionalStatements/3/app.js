const a =+(prompt('первое число'));
const b =+(prompt('второе число'));
const c =+(prompt('третье число'));
let summa = 0;

if (a > 0) {
	summa += a;
}
if (b > 0) {
	summa += b;
}
if (c > 0) {
	summa += c;
}

console.log(summa);
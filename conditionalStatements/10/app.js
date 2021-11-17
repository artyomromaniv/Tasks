const a =+(prompt('Введите первое число'));
const b =+(prompt('Введите второе число'));
const c = prompt('Введите строку c операцией');

if (c == '+') {
	console.log (a + b);
}
if (c == '-' ){
	console.log (a - b);
}
if (c == '*') {
	console.log (a * b);
}
if (b == 0 && c == "/") {
	console.log('На ноль делить нельзя');
} else if (c == '/') {
	console.log (a / b);
}


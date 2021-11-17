const a =+(prompt('Введите число ячейки'));

if (((a >= 1 && a <= 10) || (a >= 19 && a <= 28)) && a % 2 == 0 ) {
	console.log('черный');
} else if (((a >= 29 && a <= 36) || (a >= 11 && a <= 18)) && a % 2 == 1) {
	console.log('черный');
} else if (a>=1 && a<=36) {
	console.log('красный');
} else if (a == 0) {
	console.log('зеленый');
} else {
	console.log('ошибка ввода');
}
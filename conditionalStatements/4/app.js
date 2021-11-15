let a = prompt('Введите число','');

if (a >= 1000 && a <= 9999 && ( a % 7 == 0 || a % 17 ==0 )) {
	console.log('YES');
}
else {
	console.log('NO');
};

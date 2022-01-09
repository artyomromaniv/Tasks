const num = +(prompt('Введите год'))

if ((num % 4 == 0 && num % 100 != 0) || num % 400 == 0) {
	console.log('YES')
} else {
	console.log('NO')
}
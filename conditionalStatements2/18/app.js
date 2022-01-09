const x1 = +prompt('Число для первой строки')
const y1 = +prompt('Число для первого столбца')
const x2 = +prompt('Число для второй строки')
const y2 = +prompt('Число для второго столбца')

if (x1 - x2 >= -1 && x1 - x2 <= 1 && y1 - y2 >= -1 && y1 - y2 <= 1) {
	console.log('yes')
} else {
	console.log('no')
}

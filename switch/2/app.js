let day = +prompt("Введите дату")
day = Math.ceil(day / 10)

switch (day) {
	case 1:
		console.log('Первая декада')
		break
	case 2:
		console.log('Вторая декада')
		break
	case 3:
		console.log('Третья декада')
		break
	default:
		console.log('Некорректный ввод')

}
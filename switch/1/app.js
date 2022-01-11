let num = +prompt("Введите занчение от 1 до 4")
let result

switch (num) {
	case 1:
		result = 'Весна'
		console.log(result)
		break
	case 2:
		result = 'Лето'
		console.log(result)
		break
	case 3:
		result = 'Осень'
		console.log(result)
		break
	case 4:
		result = 'Зима'
		console.log(result)
		break
	default:
		console.log('Некорректный ввод')
}
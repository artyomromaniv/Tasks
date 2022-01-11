/* У нас есть загадка: "Что это такое: синий, большой, с усами и полностью набит зайцами?" 
Ответ: троллейбус. Можно возражать, конечно, какого цвета сейчас троллейбусы - но мы не об этом. */

let attempt = prompt("Введите ответ");
let exit = false;

for (let i = 1; i <= 3; i++) {
	if (exit === true) break;
	switch (attempt) {
		case 'Троллейбус':
			console.log('Правильно');
			exit = true;
			break;
		case 'Сдаюсь':
			console.log('Правильный ответ: троллейбус');
			exit = true;
			break;
		default:
			attempt = prompt('Попробуй ещё раз');
	}

}




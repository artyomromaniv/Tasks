const a =+(prompt('Длина стороны a'));
const b =+(prompt('Длина стороны b'));
const c =+(prompt('Длина стороны c'));

if (a - b == 0  && b-c == 0) {
	console.log("Равносторонний");
} else if ( a-b == 0 || b - c == 0 || a - c == 0) {
	console.log('Равнобедренный');
} else{
	console.log("Разносторонний");
}
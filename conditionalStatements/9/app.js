let a = prompt('Длина стороны a','');
let b = prompt('Длина стороны b','');
let c = prompt('Длина стороны c','');

if (a - b == 0  && b-c == 0){
	console.log("Равносторонний");
}
else if ( a-b == 0 || b - c == 0 || a - c == 0){
	console.log('Равнобедренный');
}
else{
	console.log("Разносторонний");
}
let str = prompt("Введите строку");
let Adenin = 0;
let Guanin = 0;
let Citozin = 0;
let Timin = 0;

str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
	if (str.charAt(i) === "а") {
		Adenin += 1;
	} else if (str.charAt(i) === "г") {
		Guanin += 1;
	} else if (str.charAt(i) === "ц") {
		Citozin += 1;
	} else if (str.charAt(i) === "т") {
		Timin += 1;
	}
}

console.log(`Аденин:${Adenin} \nГуанин:${Guanin} \nЦитозин:${Guanin} \nТимин:${Timin}`);
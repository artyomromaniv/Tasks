const n = +prompt("Введите число n"); //количество чисел в ряду Фибоначчи
let result = "";
let a = 0;
let b = 1;
summa = 0;

for (let i = 1; i <= n; i++) {
	summa = a + b;
	b += a;
	a = b - a;
	result += summa;
}
console.log(result);

//0,1,1,2,3,5,8,13,21,34
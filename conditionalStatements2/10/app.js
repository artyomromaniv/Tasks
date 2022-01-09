let str = prompt("Введите трехзначное число")
let num = 0
let a = Math.floor(str / 100)
let b = Math.floor(str / 10 % 10)
let c = Math.floor(str % 10)

for (i = 0; i < str.length; i++) {
	num += Number(str[i])
}

console.log(num)


const vremya = +prompt("Введите минуты");

let oclock = Math.floor(vremya / 60);
let minutes = vremya % 60;

console.log(vremya + " минут " + "- это " + oclock + " час " + minutes + " минут");
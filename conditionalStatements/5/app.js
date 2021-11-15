let ab=+(prompt('первое число',''));
let bc=+(prompt('второе число',''));
let ac=+(prompt('третье число',''));

if (ab + bc >= ac && ab + ac >= bc && bc + ac >= ab) {
    alert('YES');
}
else {
    alert('NO');
};
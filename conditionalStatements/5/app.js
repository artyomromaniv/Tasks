const ab=+(prompt('первое число'));
const bc=+(prompt('второе число'));
const ac=+(prompt('третье число'));

if (ab + bc > ac && ab + ac > bc && bc + ac > ab) {
   console.log('YES');
} else {
   console.log('NO');
}
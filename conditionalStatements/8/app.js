let x1 = prompt('Число для первой строки','');    	
let y1 = prompt('Число для первого столбца','');    		
let x2 = prompt('Число для второй строки','');    	
let y2 = prompt('Число для второго столбца',''); 	

if ( x1 - x2 >= -1 && x1 -x2 <= 1 && y1 -y2 >= -1 && y1 -y2 <=1){
	console.log('YES');
}
else{
	console.log('NO');
}

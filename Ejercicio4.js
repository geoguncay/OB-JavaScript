// - Una variable que contenga tu altura en centímetros (entero)
let heigh_c = '150.2'

console.log(Number(parseInt(heigh_c)));

// - Una variable que contenga tu altura en metros (número de coma flotante)

let heigh_m = '1.52'

console.log(Number(parseFloat(heigh_m)));

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

let weight_k = 60.0256

console.log(Number(parseFloat(weight_k.toFixed(2))));

// - Una variable que contenga tu altura en metros redondeada hacia arriba

let heigh_r = '165.496111'

console.log(Number(parseFloat(Math.ceil(heigh_r)))); //Redondeo hacia arriba 

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

console.log(Number(parseFloat(Math.floor(heigh_r)))); //Redondeo hacia abajo 

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let a_max = Number.MAX_VALUE + 1;
let b_max = Number.MAX_VALUE;

let maxValue = a_max === b_max;

console.log(a_max);
console.log(b_max);
console.log(maxValue);


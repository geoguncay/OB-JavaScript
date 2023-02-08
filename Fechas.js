// - La fecha de hoy
const toDay = new Date();
console.log(toDay.toLocaleDateString());

// - La fecha de tu nacimiento
const dateBorn = new Date('1991,12,15 GMT-5');
console.log(dateBorn.toLocaleDateString())

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const dateCompare = toDay.getFullYear() > dateBorn.getFullYear();
console.log(dateCompare);

// - Una variable que contenga el día de tu nacimiento
let day = dateBorn.getDate();
console.log(day);
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let month = dateBorn.getMonth()+1;
console.log(month)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let year = dateBorn.getFullYear()
console.log(year)
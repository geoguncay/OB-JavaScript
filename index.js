console.log('Hola mundo');


//Variables 
var a = 'Variable var'; // Esta variable se sobre escribe si es que en la linea de codigo hay otra con el mismo nombre
console.log(a);

a = "segunda variable A"; //Se ha utilizado la varible anterior para asginar el otro valor 
console.log(a);

let  _dia, _mes, _anio; // Lad variables let no necesitan ser inicializada y de cerrarce con el punto y coma
const a = 5; //tiene que ncesesariamete ser inicializada 

let b = "Variable let"; //este se ejectuta a nivel de bloque de codigo 
console.log(b);

console.log(typeof b); //conocer el tipo de variable 


/////////////////////////////////
//Notacion
// . Se utiliza en los objetos para acceder en los atributos 

//[] listas arreglos arrays 

// () funciones 

//{} llaves para obejotos, funciones y estructuras de control 

//listas 

const lista = ['Juana', 'Jose', 'Pedro'];
const lista2 = new Array(lista);
console.log(lista2);
lista2[0] = 'Maria'
console.log(lista2);

//Objetos

const Auto ={
  velocidad: 20,
  color: 'Verde',
  marca : 'Mazda'
}

console.log(Auto.color);

Auto.color = 'Rojo'; //cambiando los atributos del objeto declarado 

console.log(Auto.color);


//Fechas

const ahora_ = new Date(); //Fecha en la que se crea la variable 
console.log(ahora_);

const fecha_cadena = new Date ( 'january 22 2023') // fecha cadena 
console.log(fecha_cadena);

const fecha_valores = new Date (2023, 0, 22) //fecha valores fecha empieza desde el cero 
console.log(fecha_valores);


const ahora = new Date();
let  dia_, mes_, anio_;
const dia = ahora.getDate();
const mes = ahora.getMonth()+1;
const anio = ahora.getFullYear();

dia_ = ahora.getDate(); 

console.log(dia, mes, anio, dia_);


let a = 5;
let b = 10;
if (a > b) {
  console.log("A es mayor que B");
} else {
  console.log("B es mayor a A");
}

let nota = 10;

switch (nota) {
  case nota >= 9 || nota <= 10:
    console.log("Sobresaliente");
    break;
  case nota < 9 || nota >= 7:
    console.log("Nota buena");
    break;
  case nota < 7 || nota > 5:
    console.log("Nota regular");
    break;
  case nota < 5:
    console.log("Pesima reprobado de Adios");
    break;
  default:
    console.log("Numero no valido");
    break;
}

//Bucles

//for
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < list.length; i++) {
  console.log(list[i] * 2);
}

//for... of
let list_a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let value of list_a) {
  console.log(value + "a");
}

//For each
let list_b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list_b.forEach((value) => {
  console.log(value);
});

//For in, aplicado para objetos

const Persona = {
  name: "Juan",
  las_name: "Perez",
  age: 22,
};

for (let value in Persona) {
  console.log(value); //Acceso a las propiedade de los objetos
  console.log(Persona[value]); //Acceso a los valores de las propiedades
}

//While
let list_w = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let items of list_w) {
  while (items < 10) {
    console.log(items);
    items++;
    break;
  }
}


//Strings 

let str = 'Our world throgh the development'

console.log(str.replace('development', 'English'));

//contatenation

let a = 'Hello';
let b = 'world'

console.log(a.concat(' ', b));
console.log(a +' '+b);
console.log(`${a} ${b}`);

//Eliminar espacios al final e inicio de las cadenas

let str_space = '   Our world throgh the development        ';

console.log(`Cadenas en Mayusculas ${str_space.toUpperCase()}`);

console.log(`Cadenas con espacios ${str_space.length}`);

console.log(`Cadena sin espacios al inicio y al final ${str_space.trim().length}`);

console.log(`Cadena sin espacios al inicio ${str_space.trimStart().length}`);


//character 
let ab = 'Hello';
console.log(ab.charAt(0));
console.log(ab[0]);


//Numbers 

let num_a = 9.0;

let num_b = 2.1;

console.log(num_a.toString()); //Covierte a un String 

let multip = num_a*num_b;

console.log(multip.toFixed(2)); //Numero de decimales

console.log(typeof multip.toFixed(2)); //Conocer el tipo de dato

console.log(multip.toPrecision(3)); //limitar el numero de cifras significativas 



//Obtener valores numericos 
let a_num = new Number(5);

console.log(a_num.valueOf());

let b_string = new String('Hello world');

console.log(b_string.valueOf());

//NaN Infinity 

let a_NaN = Number('Hello');

console.log(a_NaN);

console.log(isNaN(a_NaN) );

//Casting Number, Parseint, Parsefloat

let n_cast = '5.2'; //String 

console.log(Number(n_cast)); //Number 

console.log(parseInt(n_cast) ); // int number

// hexadecimal

let n_hex = '0x12x45g7'

console.log(parseInt(n_hex)); //



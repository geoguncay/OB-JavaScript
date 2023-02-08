console.log('Hola mundo');


//Variables 
var a = 'Variable var'; // Esta variable se sobre escribe si es que en la linea de codigo hay otra con el mismo nombre
console.log(a);

a = "segunda variable A"; //Se ha utilizado la varible anterior para asginar el otro valor 
console.log(a);

let  _dia, _mes, _anio; // Lad variables let no necesitan ser inicializada y de cerrarce con el punto y coma
const ax = 5; //tiene que ncesesariamete ser inicializada 

let b_ = "Variable let"; //este se ejectuta a nivel de bloque de codigo 
console.log(b_ );

console.log(typeof b_ ); //conocer el tipo de variable 


/////////////////////////////////
//Notacion
// . Se utiliza en los objetos para acceder en los atributos 

//[] listas arreglos arrays 

// () funciones 

//{} llaves para objetos, funciones y estructuras de control 

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


let ay = 5; 
let _b = 10;
if (ay > _b) {
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

let ah = 'Hello';
let b = 'world'

console.log(a.concat(' ', b));
console.log(ah +' '+b);
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



//Arrays 

let arr = ['a', 1, {2: 'A',}, 5, 'x'];

console.log(arr[1]); // acceder al arrglo con el indice 

arr.push('c', '2'); //agregar valores al final del arreglo 
console.log(arr); 

arr.unshift('2', 'c'); //agregar valores al final del arreglo
console.log(arr); 

arr.pop(); //remove the last element 

console.log(arr); 

arr.shift() //remove the first element 

console.log(arr); 

let arr_a = [1,2,3]
let arr_b = [4,5,6]

console.log(arr_a.concat(arr_b));

let arr_c = [...arr_a, ...arr_b] ; //Unir con factor de propagacion 

console.log(arr_c); 

let arr_d = [arr_a, arr_b] //No es un factor de propagacion 

console.log(arr_d); 

let arr_slice = arr_c.slice(2, -2) //Obter una porcion de la lista 

console.log(arr_slice); 


//Iterar listas 
let arr_it= [1,2,3,4,5,6,7,8,9]

for(let i = 0; i<=arr_it.length -1; i ++){
  console.log(arr_it[i]);
}

arr_it.forEach(value =>{
  console.log(`arreglo for forEach ${value}`);
})


//Metodo .find()
const listObj = [
  {name: 'Juan', edad: 20},
  {name: 'Pedro', edad: 25},
  {name: 'Maria', edad: 28},
  {name: 'Nancy', edad: 25}
]

// const x = listObj.find(item =>{
//   return item.edad ==25
// })

// console.log(x);

const x = listObj.find(item => item.edad == 25)

console.log(x.name);

//Metodo .map() 
const array = ["Bogota", "Quito", "Sao Pablo", "Buenos Aires", "Mexico DF"]


const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

//Metodo .filter() 

const listaObjetos = [
  { nombre: "Leire", edad: 35 },
  { nombre: "Gorka", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucía", edad: 3 },
  { nombre: "Amaia", edad: 29}
]

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre != "Miguel") 
console.log(nuevaLista)

//Metodo .reduce()

const valores = [10, 50, 12, 30, 60, 200]

const suma = valores.reduce((prev, cur, i, arrayOriginal) => {
    // console.log('Valor Previo: '+prev)
    // console.log('Valor actual: '+cur)
    // console.log('Indice:'+i)
    // console.log(arrayOriginal)
    return prev + cur
})
console.log('Suma: '+suma)

//Metodo .sort() ---Ordenar unicamente numeros 

const arrayNum = [4, 1, 7, 3, 1, 3, 56, 1, 546]
arrayNum.sort((a, b) => -1) //Invertir el arreglo

arrayNum.sort((a, b) => a-b) //Ordenar ascendente 
console.log(arrayNum)


arrayNum.sort((a, b) => b-a) //Ordenar descendente
console.log(arrayNum)


//Odenar objetos en bases a la edad
const objLisst = [
  { nombre: "Juan", edad: 10 },
  { nombre: "Pedro", edad: 5 },
  { nombre: "Jose", edad: 30 },
  { nombre: "Maria", edad: 60 },
  { nombre: "Ana", edad: 15}
]

objLisst.sort((a, b) => a.edad - b.edad) 

console.log(objLisst) 

//Comparar listas 
//.every()

const arrOne = [1,2,3,4,5,6,7,8,9]
const arrTwo = [1,2,3,4,5,6,7,8,9]

console.log(arrOne == arrTwo);

//Sets o conuntos --Permite no almacenar datos duplicados 

const arreglo = new Set([1,2,3,4,5,6,7,8,1,2,3])

console.log(arreglo);

//Conocer si el set contiene el dato 
console.log(arreglo.has(9));

//conocer el tamano del set, es una propiedad (valores unicos)
console.log(arreglo.size);

arreglo.forEach((valor)=>{
  console.log(valor)
});

//factor de propagacion 
console.log(...arreglo)


//Objetos 



//Fechas


const fecha = new Date();
console.log(fecha);

const fecha3 = new Date(2023, 1, 15);
console.log(fecha3);

const fecha2 = new Date();

console.log(fecha == fecha2); //No se puede comparar fechas de esta manera

console.log(fecha.getDate() == fecha2.getDate()) //Forma correcta de comparar fehcas

console.log(fecha.getDay(), fecha.getMonth(), fecha.getFullYear()) // Obtener el dia el mes y el anio

console.log(fecha.toLocaleTimeString()); // Hobtener la hora local

console.log(fecha.toLocaleDateString()) //Obtener la fecha actual el formato string local

console.log(fecha.toLocaleDateString('en-US')) //Obtener la fecha actual el formato string US


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


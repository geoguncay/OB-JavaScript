// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const obj = {
  name: 'Geovanny',
  lastName: 'Montiel',
  age: 30,
  heigth: 1.7,
  areDevelopment: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const personalInfo = obj;
console.log(personalInfo.age)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const obj2 = [{
  name: 'Juan',
  lastName: 'Toro',
  age: 32,
  heigth:  1.6,
  areDevelopment: false
},
{
  name: 'Andres',
  lastName: 'Barrera',
  age: 34,
  heigth:  1.6,
  areDevelopment: false
}]

const list = [obj, obj2 ]
console.log(list)
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const sortList = obj2.sort((a, b) => b.age - a.age )
console.log( sortList)

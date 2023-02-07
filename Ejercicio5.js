// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listB = ['manza', 'pera', 'tomate', 'lechuga', 'arroz']

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listB.push('Aceite de Girasol')


// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listB.pop(listB.length)


// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
//favorite movies list?
let favoriteMovies = [
  {  titulo: 'Toy Story', director: 'John Lasseter', fecha: '1995'},
  {  titulo: 'Joker', director: 'Todd Phillips', fecha: '2019'},
  {  titulo: 'Avengers: Endgame', director: 'Anthony Russo', fecha: '2019'}
  ]


// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const mayor = favoriteMovies.filter(val => val.fecha > 2010)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const director = favoriteMovies.map((value) => `${value.director}`)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = favoriteMovies.map((value) => `${value.titulo}`)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const lisTituloDi = favoriteMovies.map((value) => value.director.concat(value.titulo))

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const lisTituFacP = [...titulos, ...director]
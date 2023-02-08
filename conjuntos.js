
// - Un nuevo Set con los nombres de tu familia
let famyName = new Set(['Ana', 'Juan', 'Maria', 'Pedro', 'Lola', 'Geo']);
console.log(famyName);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
famyName.add('Geo')
console.log(famyName)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
famyName.add('Javascript')
console.log(famyName)
// - Una cadena de texto con tu Nombre
let name = 'Geovanny';
// - Otra cadena de texto con tu Apellido
let last_name = 'Guncay Tigre';
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let student = `${name} ${last_name}`;
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = student.toUpperCase();
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = student.toLowerCase();
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let estudiante_length = student.length;
// - Una variable que contenga la primera letra del Nombre
let first_char = name[0];
// - Otra variable que contenga la última letra del Apellido
let end_char = last_name[last_name.length-1];
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let noWhitespace  = student.replace(/\s/g, '')
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let seek_val = student.includes('Geovanny');


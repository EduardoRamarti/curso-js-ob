// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length)



// Obtener partes de cadenas de caracteres
// slice() -> para obtener una rebanada del string (index string, index string-1)
let slice_str = str.slice(5, 10)
console.log(slice_str)

// substring() -> funciona exactamente igual que el slice
let substring_str = str.substring(5, 10)
console.log(substring_str)

// substr() -> aqui nos devuelve iniciando desde index 5 y nos regresa un string de tamaño de 10 
// este metodo se esta quedando en desuso. 
let substr_str = str.substr(5, 10)
console.log(substr_str)




// REEMPLAZAR parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Gorka"
console.log(cadena)

//replace()
// Al utilizar strings sólo reemplaza la primera instancia
console.log(cadena.replace('Gorka', 'Miguel'))


let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

// Al utilizar strings sólo reemplaza la primera instancia, es decir, la primer coincidencia y deja las demas de la misma manera
console.log(texto_largo.replace('los', 'cinco'))

// Al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, 'cinco'))





// Métodos de cadenas de texto (parte 2)
let input = "ESCORpio"
let db = "escorpio"

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())



// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)





// Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length)
// trim() -> remueve los espacios en blanco tanto del inico como del final
console.log(str_3.trim())
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4" // ["H", "o", "l", "a", " ", "s"........]

//charAt() -> sirve para regresar el caracter en determinada posicion 
console.log(str_4.charAt(5))
console.log(str_4[5])

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar"
//indexOf() -> me devuelve el indice de la primera instancia que encuentre como coincidencia del string que estoy buscando 
console.log(str_5.indexOf("Gorka"))
console.log(str_5.charAt(9))
//lastIndexOf() -> me devuelve el indice de la ultima instancia que encuentre como coincidencia del string que estoy pasando
console.log(str_5.lastIndexOf("Gorka"))




// Métodos de cadenas de texto (parte 3)
// https://regexr.com
let texto_largo2 = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

//match() -> es mayormente usado para buscar coincidencias dentro del texto, pero debera de usarse principalmente con expresiones regulares
//en el siguiente caso se busca la silaba no, de manera global en el texto y el resultado es que se repiten 4 veces esa silaba.
console.log(texto_largo2.match(/no/g))

// includes() -> ¿Existe la palabra dentro del texto?
console.log(texto_largo2.includes("terremoto"))

// startsWith() -> Saber si un texto empieza con una palabra
console.log(texto_largo2.startsWith("Tito no es un mono"))

// endsWith() -> Saber si un texto termina con otra palabra
console.log(texto_largo2.endsWith("árboles."))
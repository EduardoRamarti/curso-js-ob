// Bucles For

// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++) {
    // Esto es el bucle
    console.log(i)
}


let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2)
}


// Si se fijan la sentencia for … in muestra el indice o la llave(propiedad en un  objeto) y la propiedad en sí,es decir se utiliza para recorrer objetos 
//La sentencia for … of muestra los valores de una colección. En este caso sólo los números.

// Estructura for...of
for (let valor of lista) {
    console.log(valor)
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor)
})

// Estructura for...in
let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
}
// console.log(persona.nombre)

// let prop = "edad";
// console.log(persona[prop])

for (let propiedad in persona) {
    console.log(propiedad);
    //console.log(persona[propiedad])
}
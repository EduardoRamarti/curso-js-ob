var variable; //especie de caja donde se almacena un valor 
let variableLet_;

// const constante;
const constante = "Hola soy una constante";
console.log(constante)
// constante = "Adiós" // Nos da un error



var a = 1;
console.log(a);

a = 4;
console.log(a);


let b = 3;
console.log(b);

b = 5;
console.log(b);


//DIFERENCIAS ENTRE VAR Y LET
//var afecta a todo el codigo 
//let solo afecta en el bloque donde esta siendo declarada 

var variable = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    //solo queria cambiar el valor en este bloque 
    var variable = "Soy la segunda variable"
}
//y como resultado me cambio la varaible que ya tena definida 
console.log(variable)


let variableLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
    //aqui vuevle a declara una variable con el mismo nombre que mi varaible glboal, pero en este caso he cambiado el valor
    let variableLet = "Soy la segunda variable LET";
}
//en la salida se manterndra el valor que estaba dentro de mi varaible fuera del bloque
console.log(variableLet); //"Hola soy una variable LET"

/////////////////////////

var num = 4;

console.log(typeof num); //typeof para saber de que tipo es

num = "Hola soy num"; //aqui cambio mi tipo de variable, antes era number y ahora es string 

console.log(typeof num);
// Declaración de variables numéricas (enteros y con decimales)
let a = 5;

console.log(a);

let b = 0.1;

console.log(b);

// Precisión
let c = 0.2;

console.log(b + c);
// Pequeño truco para obtener valores "reales"
console.log(Math.round((0.1 + 0.2) * 100)/100);




// Principales operaciones aritméticas
let x = 3.5;
let y = 4.8;

// Suma (+)
console.log(x + y);
// Resta (-)
console.log(x - y);
// Multiplicación (*)
console.log(x * y);
// División (/)
console.log(x / y);



// Representación de los números en cadenas de texto
console.log(typeof x);
let x_s = x.toString(); //se hace el casting

console.log(x_s);
console.log(typeof x_s);




// Redondeo de números decimales
let z = 3.3;
let d = z * 3;

console.log(d);
console.log(typeof d);

// .toFixed(x) - Limitar el número de decimales al valor x
console.log(d.toFixed(4));
// y te cambia el valor a string
console.log(typeof d.toFixed(4));

let e = 1839.1232456789;
let f = 2213556153215;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toPrecision(x) - Limita el número de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(3));





// Operador .valueOf() - Obtener valores numéricos a partir de literales
let q = 2;
let w = new Number(3);

console.log(q);
console.log(w);
console.log(q + w);
console.log(q.valueOf() + w.valueOf());

console.log(w.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());




// NaN (Not a Number) - Infinity
//aparece por que estas intentando hacer una operacion de numeros en un valor que no es un numero 
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);




// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero);

//aca va a concatenar ambos
console.log(numero + num2); // Error de concepto

//Number(x) -> aca hace el parceo
console.log(Number(numero) + num2);
//parseInt(x) -> aca nos hace el parceo pero quita los decimales por que estamos hablando de enteros
console.log(parseInt(numero))
//parseInt(x) -> aca nos hace el parceo pero mantiene los decimales por que estamos hablando de flotantes
console.log(parseFloat(numero))

let num3 = 4;
console.log(parseInt(num3))
console.log(parseFloat(num3))



// Números hexadecimales (base 16)
let numHex = '0x3a5b7';
//aca estamos haciendo el parceo de un numero hexadcimal a base 16
console.log(parseInt(numHex, 16));


// Obtener los valores máximo y mínimo en Javascript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);
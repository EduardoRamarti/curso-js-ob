//Listas, array o arreglo 
const lista = [1, "hola", true, undefined, null];
const list2 = new Array (2,"hola",true, undefined, null);
const list3 = new Array (3);
list3[0] = "soy el primer elemento, index 0 ";
const list4 = [lista,list2,list3];

console.log(lista);
console.log(list2);
console.log(list3);

//Objects 
const movil = {
    //Atributos
    altura: 10,
    anchura: 5,
    marca: 'Xiamoi',
    isWhite: false,
    contactos:['Goku','Vegeta','Picolo'],
    tarjeta:{
        marca:'SandDisk',
        almacenamiento:32
    },
    "DuracioAnyos":3 //tmabien se pueden definir las keys con "" 
}

console.log(movil.tarjeta);

//definir despues nuevas propiedades
movil.anyo = 2019;
movil.marca = 'Samsung';

console.log(movil)


//Fechas
//Libreria de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

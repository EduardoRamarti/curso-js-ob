const name = 'Eduardo';
const lastName = 'Ramirez';

const estudiante = `${name} ${lastName}`;

const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

let countStr = estudiante.length;

let firstLetter = estudiante.trim()[0];
let lastLetter = estudiante[countStr-1];

const spaceless = estudiante.replace(" ","");

let isIn = estudiante.includes(name);

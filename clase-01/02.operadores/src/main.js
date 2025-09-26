import './style.css'

console.warn('// ! Arrays (Arreglos o Vectores)');
// Estructura de datos indexada. Tienen un identificador único por el elementos. Empieza por 0. Tienen una dimensión (Cantidad de elementos dentro)

let arrayFrutas = ['Manzana', 'Pera', 'Kiwi', 'Banana', 'Naranja', 'Frutilla' , 'Melon', 'Cerezas', 'Frutas de Dragón', 'Uva', 'Zandía', 'Durazno', 'Mango']

let arrayFrutasFaltantes = ['Mora', 'Melocotón', 'Limón', 'Mandarina', 'Arandano', 'Kinoto', 'Anana']

console.log(arrayFrutas);
console.log(arrayFrutas[0]); // Accedo al primer elemento (Manzana)
console.log(arrayFrutas[arrayFrutas.length-1]) // Accedo al último elemento
console.log(arrayFrutas.at(-1)) // Accedo al último elemento
console.log(arrayFrutas.length);
console.log(arrayFrutasFaltantes)
console.log(arrayFrutasFaltantes[0]) // Accedo al primer elemento (Mora)
console.log(arrayFrutasFaltantes[arrayFrutas.length-1]) // Accedo al primer elemento (Mora)
console.log(arrayFrutasFaltantes.at(-1)) // Accedo al último elemento

console.log('// ! Métodos de los arrays');

console.log('// concat(): Une varios array')
let nuevoArrayFrutasTodas = arrayFrutas.concat(arrayFrutasFaltantes)
console.log(nuevoArrayFrutasTodas);

console.log('// join(): Combina los elementos de un array en una sola cadena')

let cadenaFrutas = nuevoArrayFrutasTodas.join()
console.log(cadenaFrutas);
cadenaFrutas = nuevoArrayFrutasTodas.join('%')
console.log(cadenaFrutas);

console.log('// pop(): Elimina el último elemento');

let ultimoElemento = nuevoArrayFrutasTodas.pop()
console.log(ultimoElemento);

console.log('// push(): Agrega al final un elemento');

let nuevaCantidadDeElementosDelArray = nuevoArrayFrutasTodas.push('Franbuesa', 'Granada', 'Ciruela', 'Guarana', 'Ñangapiri', 'Palta', 'Tomate')
console.log(nuevaCantidadDeElementosDelArray); // 26

// reverse(): Invierte el orden de los elementos
// shift(): Elimina el primer elemento
// unshift(): Agrega un el elemento al principio
// slice(): Extrae una copia de una parte de un array en nuevo array
// splice(): Agrega o elimina elementos en una posición especifica
// sort(). Orden alos elementos alfabeticamente
// forEach(): Itera sobre los elementos (recorre elementos)
// map(): El map recorre los elementos del array y modifica su valores creando resultado otro array de la misma dimensión
// filter(): Filtra los elementos de un array y crea como resultado otro array con los elementos filtrados.

const ArrayAnimales = ['Gatos', 'Perros', 'Cabras', 'Horneros', 'Ornitorrincos', 'Mapaches', 'Gallinas']

console.warn("// ! CONST (ES6)");
/* Me permite construir cajitas que NO PUEDO modificar más adelante */
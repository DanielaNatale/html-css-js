const frutas = ['bananas', 'manzanas', 'peras', 'duraznos'];

console.log(frutas)
//document.write(frutas)

document.write(frutas[2])

console.log(frutas.length)
console.log(frutas[frutas.length-1]) //durazno porque imprime el ultimo

let seleccionada = 2;
console.log(frutas[seleccionada]);

seleccionada = 1;
console.log(frutas[seleccionada]); //cambia fruta porque cambie la definicion de seleccionada

for(let i= 0; i < frutas.length; i++){
    console.log('Tenemos ' + frutas[i] )
}

let x = 1
const cuantos = 5
let suma = 0;

while(x <= cuantos){
    const valor = parseInt(prompt(`Ingrese el valor ${x} de ${cuantos}`,``));
    suma+= valor; //0+valor que ingresa el usuario, va acumulando los valores 
    x++
}

document.write(`La suma de los valores es ${suma}`)
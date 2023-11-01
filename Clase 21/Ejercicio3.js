const numeros = [0,12,24,36,50,200,100];
let mayor = 0

for(let n = 0; n < numeros.length; n++){
   if(numeros[n] > mayor){
    mayor = numeros[n]
   }
}

console.log(mayor)

/*Modo 2*/
const numero1 = parseInt(prompt("ingrese el primer numero: "))
const numero2 = parseInt(prompt("ingrese el segundo numero: "))
const numero3 = parseInt(prompt("ingrese el tercer numero: "))
const numero4 = parseInt(prompt("ingrese el cuarto numero: "))
const numero5 = parseInt(prompt("ingrese el quinto numero: "))

const arreglo = [numero1, numero2, numero3, numero4, numero5];

let mayor = 0

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
        mayor = arreglo[i]
    }
}
alert(`Los valores numericos son: [${arreglo}] y el mayor es: ${mayor}`);



/*modo 3 usando WHILE*/
let array = [];
const cuantos = 5;
let mayor = 0;

while (array.length < cuantos) {
    array[array.length] = parseInt(prompt(`Ingrese el valor ${array.length + 1}  de ${cuantos}:`, ''));
}

for (var i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
        mayor = array[i];
    }
}

document.write(mayor);
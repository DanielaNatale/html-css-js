const num1 = parseInt(prompt('Ingrese un numero',''));
const num2 = parseInt(prompt('Ingrese un numero',''));
const num3 = parseInt(prompt('Ingrese un numero',''));

if(num1 > num2 && num1 > num3){
    console.log(`el mayor es el ${num1}`)
} else if (num2 > num3){
    console.log(`el mayor es el ${num2}`)
}else{
    console.log(`el mayor es el ${num3}`)
}

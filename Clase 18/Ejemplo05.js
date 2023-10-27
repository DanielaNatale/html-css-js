const frutas = ['frutilla','banana','palta','manzana'];

const numbers = [10,22,34,46,58,61,79,8,19,103];

console.log(frutas);
console.log(frutas.sort())
console.log(frutas.sort().reverse)

numbers.sort(function (a, b){
    return a-b;
});

numbers.sort(function (a, b){
    return b-a;
});//de mayor a menor

console.log(numbers)





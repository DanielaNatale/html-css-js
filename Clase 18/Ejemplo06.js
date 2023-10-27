const nombre = 'frutilla'
const edad = 22;

console.log(`Hola ${nombre}. Vos tenes ${edad} anos`);



//operador ternario : version simplificada del if. condicion ? true:false

const edad1= 13
const edad2= 45

const mensaje1 = `La cuota para personas de ${edad1} anios es de ${edad1 >= 21 ? 1000:800}`
const mensaje2 = `La cuota para personas de ${edad2} anios es de ${edad2 >= 21 ? 1000:800}`

console.log(mensaje1)
console.log(mensaje2)
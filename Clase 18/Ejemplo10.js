const empleados = [
    {
        nombre: 'flavia',
        trabajo: 'desarrollador',
    },
    {
        nombre: 'sofia',
        trabajo: 'carpintera',
    },
    {
        nombre: 'florencia',
        trabajo: 'desarrollador',
    },
    {
        nombre: 'manuel',
        trabajo: 'maquinista',
    },
    {
        nombre: 'sebastian',
        trabajo: 'abogado',
    },
]

//Metodo array > que solo me muestre los desarrolladores
//

const desarrolladores = empleados.filter(empleados => empleados.trabajo=='desarrollador')

for(let i = 0; i < desarrolladores.length; i++){
    document.write(`<li> ${desarrolladores[i].nombre} es ${desarrolladores[i].trabajo}</li>`)
}

console.log(desarrolladores)

//-------------------------------------------------
const NoDesarrolladores = empleados.filter(empleados => empleados.trabajo !=='desarrollador')


for(let i = 0; i < NoDesarrolladores.length; i++){
    document.write(`<li> ${NoDesarrolladores[i].nombre} es ${NoDesarrolladores[i].trabajo}</li>`)
}
 
console.log(NoDesarrolladores)
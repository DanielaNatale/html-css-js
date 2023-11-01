const empleados =[
    {
        nombre: 'Mariano',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'laura',
        trabajo: 'abogada'
    },
    {
        nombre: 'Sol',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'Luis',
        trabajo: 'maestro'
    },
    {
        nombre: 'Adriana',
        trabajo: 'desarrollador'
    }  
]

const desarr = empleados.filter(empleado => empleado.trabajo == 'desarrollador')
    .sort((a,b)=>{
        if(a.nombre > b.nombre){
            return 1
        } 

        if (a.nombre < b.nombre) {
            return -1
        } 

        return 0
    });

console.log(desarr);
const nums = [15, 5, 98, 3]
console.log(nums)
console.log(nums.sort())



for (let i = 0; i < desarr.length; i++) {
    document.write(`<h4>Desarrollador</h4><li>${desarr[i].nombre}. </li>`)
}

const nodesarr = empleados.filter(empleado => empleado.trabajo !== 'desarrollador')

console.log(nodesarr)
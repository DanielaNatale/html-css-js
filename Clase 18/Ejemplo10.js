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

const edades = alumnos.filter(alumno => alumno.edad >= 5);

console.log(edades)

for( let i = 0; i < edades.length; i++){

    document.write(`<li> Alumno ${edades[i].nombre} tiene actualmente ${edades[i].edad} anios </li>`);
}


const alumnos = [
    {
        nombre: 'flavia',
        edad: 4,
    },
    {
        nombre: 'sofia',
        edad: 7,
    },
    {
        nombre: 'florencia',
        edad: 9,
    },
    {
        nombre: 'manuel',
        edad: 6,
    },
    {
        nombre: 'sebastian',
        edad: 2,
    },
]

//quiero saber que alumnos tienen edad igual o mayor a 5
// despues imprimirlo en pantalla puede ser una p o una li

const edades = alumnos.filter(alumno => alumno.edad >= 5);

console.log(edades)

for( let i = 0; i < edades.length; i++){

    document.write(`<li> Alumno ${edades[i].nombre} tiene actualmente ${edades[i].edad} anios </li>`);
}


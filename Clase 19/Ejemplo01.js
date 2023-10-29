function getDiasForMes(mes){

    if(Number.isNaN(mes)) return false;//si o si tiene que ser numero
    if(mes < 1 || mes > 12) return false;//numeros si o si entre 1 y 12
    
    mes -- //porque necesito tener un valor menos. ej: marzo que es mes 3 segun el array va a ser el 4, por eso le restamos un numero.


    const data = [
        {
            nombre: 'Enero',
            dias:31
        },
        {
            nombre: 'Febrero',
            dias: 28
        },
        {
            nombre: 'Marzo',
            dias: 31
        },
        {
            nombre: 'Abril',
            dias: 30
        },
        {
            nombre: 'Mayo',
            dias: 31
        },
        {
            nombre: 'Junio',
            dias: 30
        },
        {
            nombre: 'Julio',
            dias: 31
        },
        {
            nombre: 'Agosto',
            dias: 31
        },
        {
            nombre: 'Septiembre',
            dias: 30
        },
        {
            nombre: 'Octubre',
            dias: 31
        },
        {
            nombre: 'Noviembre',
            dias: 30
        },
        {
            nombre: 'Diciembre',
            dias: 31
        }
    ]

    return data[mes];

}

const numMes = parseInt(prompt('Ingrese el mes del anio en numero: ', ''));//ventana

const resultado = getDiasForMes(numMes);

if(resultado){
    alert(`El mes de ${resultado.nombre} tiene ${resultado.dias} dias`)
}else{
    alert(`Mes invalido`)
}


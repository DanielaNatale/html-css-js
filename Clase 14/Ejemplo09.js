function validarForm(){
    const nombreValido = true
    const passwordValido = validarLargo(document.form1.text1.value , 6)

    const resultado = nombreValido && passwordValido;

    if (resultado){
        alert (`Es valido`);
    } else {
        alert (`NO es valido`)
    }
}

function validarLargo(texto, largoRequerido){
    return texto.length >= largoRequerido       
}
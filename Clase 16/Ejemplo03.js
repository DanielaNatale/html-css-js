const formu = document.getElementById('formulario');

formu.addEventListener('submit', function(e){

    e.preventDefault();

    if(e.currentTarget.Nombre.value == '') {
        alert('El campo nombre esta vacio');
        return;
    }

    if(e.currentTarget.comentarios.value == '') {
        alert('El campo comentarios esta vacio');
        return;
    }

    alert(`Gracias ${e.currentTarget.Nombre.value} por enviarnos el siguiente comentario: ${e.currentTarget.comentarios.value} `);
})

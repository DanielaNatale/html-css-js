const alternar = document.getElementsByClassName('alternar')[0];

alternar.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('activo')
});

// classList > representa la lsita de clases asignadas a un elemento.
// toggle > cambio, ejemplo "prender" o "apagar".
// add o remove


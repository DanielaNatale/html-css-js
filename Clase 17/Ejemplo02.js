console.log('prueba')
const items = document.getElementsByClassName('item');


function cambiarVisibilidad(){
    const item = items[1];
    
    if(item.style.visibility == ''){
        item.style.visibility = 'hidden';

    } else{
        item.style.visibility = '';

    }
}

setInterval(cambiarVisibilidad, 500);
    //500 es medio segundo 
    //1000 es un segundo
    //setInterval: hace esto --> la funcion cambiarVisibilidad en este tiempo

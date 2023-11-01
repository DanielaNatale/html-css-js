 const metros = parseInt(prompt('Cuantos metros desea recorrer?',''))

if (Number.isNaN(metros)) {
    document.write('La distancia ingresada debe ser un numero')
}else if (metros <= 1000) {
    document.write('Podria recorrer esa distancia a pie')
}else if(metros > 1000 && metros<=10000){
    document.write('Podria recorrer esa distancia en bicicleta')
}else if(metros >10000 && metros<= 30000){
    document.write('Podria recorrer esa distancia en colectivo')
}else if(metros >30000 && metros<= 100000){
    document.write('Podria recorrer esa distancia en auto') 
}else{
    document.write('Podria recorrer esa distancia en avion')
}


//opcion 2 mediante una funcion//

function determinarMedioDeTransporte(distancia) {
    if (distancia >= 0 && distancia <= 1000) {
        return "A pie";
    } else if (distancia > 1000 && distancia <= 10000) {
        return "En bicicleta";
    } else if (distancia > 10000 && distancia <= 30000) {
        return "En colectivo";
    } else if (distancia > 30000 && distancia <= 100000) {
        return "En auto";
    } else {
        return "En avión";
    }
}

const distancia = prompt("Ingrese la distancia en metros: "); 

const medioDeTransporte = determinarMedioDeTransporte(parseFloat(distancia));

document.write(`Para ${distancia} metros, el medio de transporte apropiado es: ${medioDeTransporte}`);
const link = document.getElementById('link');

link.addEventListener('click',function(f){
    //evita el funcionamiento del boton//
    f.preventDefault();
    alert('Quisiste ir a: ' + f.currentTarget.href)
})
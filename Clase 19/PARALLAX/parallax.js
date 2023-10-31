$(document).ready(function (){
    $window = $(window);
    $('#intro').height($window.height());
    $window.scroll(function (){
        $('div.background').each(function (index, item){
            const $scroll = $(item);
            const yPos = -($window.scrollTop() / $scroll.data('speed'));
            const coords = '50% ' + yPos + 'px';
            $scroll.css({backgroundPosition: coords});

        });
    });
});

//$(document) > $() el modo que tiene el jquery para llamar a los elementos
//$('#intro') > llama al id 
// $(div.background) > llama a los elementos con la base background
// each > recorre cada uno de los elementos 
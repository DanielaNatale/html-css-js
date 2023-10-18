const item = document.getElementsByClassName('item');

for(let i = 0; i < item.length; i++){
    item[i].style = 'color:blue; padding-left:' + (10*i) + 'px';
}
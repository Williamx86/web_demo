let menu = document.getElementById('menu');
let boton = document.getElementById('boton');
let cuerpo = document.querySelector('.cuerpo_pagina');

boton.addEventListener("click",function(){
    menu.classList.toggle('ocultar');  
    cuerpo.classList.toggle('fijar');
})

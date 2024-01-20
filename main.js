let boton3 = document.querySelector(".boton3");
let btn_verde = document.querySelector(".boton1");
let btn_naranjado = document.querySelector(".boton2");

function cambiar_verde(){
    boton3.innerHTML = '<div class="verde"></div>';
}

function cambiar_naranjado(){
    boton3.innerHTML = '<div class="naranjado"></div>';
}

btn_verde.addEventListener('click', cambiar_verde);
btn_naranjado.addEventListener('click', cambiar_naranjado);
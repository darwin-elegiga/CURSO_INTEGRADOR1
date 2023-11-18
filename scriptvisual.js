
function execute(){
    var selector = document.querySelector(".funcionalidad_select");
    const opciones = document.querySelector(".opciones");

    if(selector.value!=null){
        opciones.classList.add("opciones-activa");
        selector.classList.add("funcionalidad_select-activa");

    }; 

     
}
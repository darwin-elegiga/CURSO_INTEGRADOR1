
function execute(){
    var selector = document.querySelector(".funcionalidad_select");
    const opciones = document.querySelector(".opciones");
    const buscarCI = document.querySelector(".buscarCI");

    console.log(selector.value)
    if(selector.value!=null){
        opciones.classList.add("opciones-activa");
        selector.classList.add("funcionalidad_select-activa");

    }; 

    if(selector.value=="pxci"){
        buscarCI.classList.toggle("buscarCI-active");
    }; 
    if(selector.value!="pxci"){
        buscarCI.classList.remove("buscarCI-active");
    }; 
}
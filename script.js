var Paciente = /** @class */ (function () {
    function Paciente(nombre, apellidos, ci, municipio, sexo, nc, sala, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.ci = ci;
        this.municipio = municipio;
        this.sexo = sexo;
        this.nc = nc;
        this.sala = sala;
        this.edad = edad;
    }
    Paciente.prototype.getnombre = function () {
        return (this.nombre);
    };
    Paciente.prototype.getsala = function () {
        return (this.sala);
    };
    Paciente.prototype.getpaciente = function () {
        return ("Nombre: " + this.nombre + " Apellido: " + this.apellidos + " CI: " + this.ci + " Municipio: " + this.municipio + " Numero de cama: " + this.nc + " Sala: " + this.sala + " Edad: " + this.edad);
    };
    Paciente.prototype.total = function (a) {
        var contmasc = 0;
        var contfem = 0;
        for (var i = 0; i < a.length; i++) {
            if (a[i].sexo) {
                contmasc++;
            }
            if (!a[i].sexo) {
                contfem++;
            }
        }
        var x = ['La cantidad de mujeres es: ' + contmasc, 'La cantidad de mujeres es: ' + contfem];
        return x;
    };
    Paciente.prototype.paciente_media = function (a) {
        var media = 0;
        var x = [];
        for (var i = 0; i < a.length; i++) {
            media += a[i].edad;
        }
        media = media / a.length;
        for (var i = 0; i < a.length; i++) {
            if (a[i].edad > media) {
                x.push(a[i].getpaciente());
            }
        }
        return x;
    };
    Paciente.prototype.revisar = function (x, a) {
        var y = false;
        y = a.some(function (valor) { return valor.ci == x; });
        if (y == true)
            return ("Si es un paciente de nuestro hospital");
        else
            return ("No esta en nuestras instalaciones");
    };
    Paciente.prototype.masmunicipios = function (a) {
        var c = 0;
        var cp = 0;
        var p = 0;
        var pp = 0;
        var m = 0;
        var mp = 0;
        var b = 0;
        var bp = 0;
        var s = 0;
        var sp = 0;
        var x = [];
        x = a.map(function (valor) { return valor.municipio; });
        for (var i = 0; i < x.length; i++) {
            if (x[i] === "Palma Soriano") {
                p++;
                pp = i;
            }
            if (x[i] === "Contramaestre") {
                c++;
                cp = i;
            }
            if (x[i] === "Moa") {
                m++;
                mp = i;
            }
            if (x[i] === "Santiago") {
                s++;
                sp = i;
            }
            if (x[i] === "Baracoa") {
                b++;
                bp = i;
            }
        }
        var max = Math.max(c, p, m, b, s);
        var y = [];
        if (c == max) {
            y.push(x[cp] + " con una cantidad de: " + max);
        }
        if (m == max) {
            y.push(x[mp] + " con una cantidad de: " + max);
        }
        if (b == max) {
            y.push(x[bp] + " con una cantidad de: " + max);
        }
        if (s == max) {
            y.push(x[sp] + " con una cantidad de: " + max);
        }
        if (p == max) {
            y.push(x[pp] + " con una cantidad de: " + max);
        }
        return y;
    };
    return Paciente;
}());
var pacientes = [];
var p1 = new Paciente("Darwin", "elegiga", "02100682665", "Palma Soriano", true, 1, 4, 22);
var p2 = new Paciente("Alejandro", "elegiga", "0210058265", "Contramaestre", true, 1, 4, 19);
var p4 = new Paciente("Ricardo", "elegiga", "00000000005", "Santiago", false, 2, 3, 60);
var p5 = new Paciente("Roberto", "elegiga", "0212068265", "Baracoa", false, 2, 3, 70);
var p7 = new Paciente("Fernando", "elegiga", "0214068265", "Palma Soriano", true, 3, 2, 19);
var p8 = new Paciente("Zambia", "elegiga", "0210568265", "Baracoa", false, 3, 2, 20);
var p10 = new Paciente("Luis", "elegiga", "0210968265", "Palma Soriano", true, 4, 1, 40);
var p11 = new Paciente("Andres", "elegiga", "0210868265", "Baracoa", true, 4, 1, 50);
pacientes.push(p1, p2, p4, p5, p7, p8, p10, p11);
var sala1 = [];
var sala2 = [];
var sala3 = [];
var sala4 = [];
for (var i = 0; i < pacientes.length; i++) {
    if (pacientes[i].getsala() == 1) {
        sala1.push(pacientes[i].getnombre());
    }
    if (pacientes[i].getsala() == 2) {
        sala2.push(pacientes[i].getnombre());
    }
    if (pacientes[i].getsala() == 3) {
        sala3.push(pacientes[i].getnombre());
    }
    if (pacientes[i].getsala() == 4) {
        sala4.push(pacientes[i].getnombre());
    }
}
//inciso a)
sala1.sort();
sala2.sort();
sala3.sort();
sala4.sort();
var sala_1 = sala1;
var sala_2 = sala2;
var sala_3 = sala3;
var sala_4 = sala4;
//hasta aqui
console.log("Sala #1: " + sala1);
console.log("-----");
console.log("Sala #2: " + sala2);
console.log("-----");
console.log("Sala #3: " + sala3);
console.log("-----");
console.log("Sala #4: " + sala4);
console.log("-----");
console.log("-----");
//inciso b)
var incisob = pacientes[0].total(pacientes);
//variables a mostrar
var incisobm = incisob[0];
var incisobf = incisob[1];
console.log(incisobm);
//
console.log("-----");
console.log("-----");
// inciso c)
var x = pacientes[0].paciente_media(pacientes);
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}
console.log("-----");
console.log("-----");
//no se como pasarlo, es un arreglo
// hasta aqui)
//inciso d)
// a ese le da valor en el html
var s = "0210068266";
var incisod = pacientes[0].revisar(s, pacientes);
console.log(incisod);
//hasta aqui
console.log("-----");
console.log("-----");
// inciso e)
var incisoe = pacientes[0].masmunicipios(pacientes);
console.log(incisoe);





function execute(){
    var selector = document.querySelector(".funcionalidad_select");

    const opciones = document.querySelector(".opciones");
    const buscarCI = document.querySelector(".buscarCI");

    const divtxs = document.querySelector(".txs");
    const divpxm = document.querySelector(".pxm");
    const divpxs = document.querySelector(".pxs");
    const divpxe = document.querySelector(".pxe");
    const divpxci = document.querySelector(".pxci");

    const ul1 = document.querySelector(".ul_s1");
    const ul2 = document.querySelector(".ul_s2");
    const ul3 = document.querySelector(".ul_s3");
    const ul4 = document.querySelector(".ul_s4");

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
        // alert("fuera de pxc")
    }; 



    let t_txsf=document.createElement("H3");
    let t_txsm=document.createElement("H3");
    if(selector.value=="txs"){
        
        t_txsf.textContent = incisobm;
        t_txsm.textContent = incisobf;

        
        divtxs.appendChild(t_txsf);
        divtxs.appendChild(t_txsm);

        divtxs.style.display= "flex";

    }; 
    if(selector.value!="txs"){
        while(divtxs.firstChild){
        divtxs.removeChild(divtxs.firstChild);}
        divtxs.style.display= "none";

    }; 


    let ul_pxm=document.createElement("ul");
    divpxm.appendChild(ul_pxm)

    if(selector.value=="pxm"){
        for(var i=0;i<incisoe.length; i++){
            let item = document.createElement("LI");
            item.textContent=incisoe[i];
            ul_pxm.appendChild(item);
        }
        divpxm.style.display="flex"
    }; 



    if(selector.value!="pxm"){
        while(divpxm.firstChild){
            divpxm.removeChild(divpxm.firstChild);
        }
        divpxm.style.display= "none";

    }


    if(selector.value=="pxs"){

        divpxs.style.display= "flex";


        let s1 = document.createElement("h4");
        s1.textContent= "SALA 1";
        ul1.appendChild(s1);

        let s2 = document.createElement("h4");
        s2.textContent= "SALA 2";
        ul2.appendChild(s2);

        let s3 = document.createElement("h4");
        s3.textContent= "SALA 3";
        ul3.appendChild(s3);

        let s4 = document.createElement("h4");
        s4.textContent= "SALA 4";
        ul4.appendChild(s4);

        for(let i=0;i<sala1.length;i++){
            let item = document.createElement("LI");
            item.textContent=sala1[i]
            ul1.append(item);
        }
        for(let i=0;i<sala2.length;i++){
            let item = document.createElement("LI");
            item.textContent=sala2[i]
            ul2.append(item);
        }
        for(let i=0;i<sala3.length;i++){
            let item = document.createElement("LI");
            item.textContent=sala3[i]
            ul3.append(item);
        }
        for(let i=0;i<sala4.length;i++){
            let item = document.createElement("LI");
            item.textContent=sala4[i]
            ul4.append(item);
        }
    }

    if(selector.value!="pxs"){
        divpxs.style.display= "none";

        while(ul1.firstChild){
            ul1.removeChild(ul1.firstChild);
        }
        while(ul2.firstChild){
            ul2.removeChild(ul2.firstChild);
        }
        while(ul3.firstChild){
            ul3.removeChild(ul3.firstChild);
        }
        while(ul4.firstChild){
            ul4.removeChild(ul4.firstChild);
        }
    }


    let ul_pxe=document.createElement("ul");
    divpxe.appendChild(ul_pxe);
    if(selector.value=="pxe"){
        divpxe.style.display = "block";
        for(let i=0;i<x.length;i++){
            let item=document.createElement("li");

            item.textContent= x[i];
            ul_pxe.appendChild(item)
        }
    }
    if(selector.value!="pxe"){
        while(divpxe.firstChild){
            divpxe.removeChild(divpxe.firstChild);
        }
        divpxe.style.display= "none";
    }
   
    if(selector.value!="pxci"){
        while(divpxci.firstChild){
            divpxci.removeChild(divpxci.firstChild)
        }
    }
}
function ci(){
    let ci = document.querySelector(".input_CI").value;
    var ok = pacientes[0].revisar(ci, pacientes);
    let comprobar = ci;
    const divpxci = document.querySelector(".pxci");
    let r=document.createElement("h3");
    r.textContent=ok;
    divpxci.appendChild(r);
    if(ok!=comprobar){
        divpxci.removeChild(divpxci.firstChild)
    }
}
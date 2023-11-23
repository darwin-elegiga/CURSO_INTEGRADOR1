class Paciente{
        private nombre: string;
        private apellidos: string;
        private ci: string;
        private municipio: string;
        private sexo: boolean;
        private nc: number;
        private sala: number;
        private edad: number;

    constructor(nombre: string, apellidos:string, ci:string,municipio:string, sexo:boolean,nc:number,sala:number, edad:number){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.ci=ci;
        this.municipio=municipio;
        this.sexo=sexo;
        this.nc=nc;
        this.sala=sala;
        this.edad=edad;
    }
    getnombre():string{
        return (this.nombre);
    }
    
    getsala():number{
        return (this.sala);
    }
    
    getpaciente():string{
        return ("Nombre: " + this.nombre +" Apellido: "+ this.apellidos +" CI: " +this.ci + " Municipio: " + this.municipio +" Numero de cama: " + this.nc + " Sala: " + this.sala + " Edad: " + this. edad);   
    }
    
    total(a:Paciente[]):string[]{
        let contmasc:number=0;
        let contfem:number=0;

        for(let i=0; i< a.length; i++){
            if(a[i].sexo){
                contmasc++;
            }
            if(!a[i].sexo){
                contfem++;
            }
        }
        let x:string[]= ['La cantidad de mujeres es: '+ contmasc, 'La cantidad de mujeres es: ' + contfem]
        return x;
    }

    paciente_media(a:Paciente[]):string[]{
        let media:number=0;
        let x:string[]=[];

        for(let i=0;i<a.length;i++){
           media+= a[i].edad;
        }
        media = media/a.length;
        for(let i=0;i<a.length; i++){
            if(a[i].edad>media){
                x.push(a[i].getpaciente());
            }
        }

     return x;
    }
    
    revisar(x:string, a:Paciente[]):string{
        let y:boolean=false;
       y = a.some(valor => valor.ci== x);

        if(y==true) return("Si es un paciente de nuestro hospital");
        else return("No esta en nuestras instalaciones")
    }

    masmunicipios(a:Paciente[]):string[]{
        let c:number=0;
        let cp:number=0;
        let p:number=0;
        let pp:number=0;
        let m:number=0;
        let mp:number=0;
        let b:number=0;
        let bp:number=0;
        let s:number=0;
        let sp:number=0;
  

        let x:string[]=[];
        x=a.map(valor => valor.municipio)
            for(let i=0; i<x.length; i++){
                if(x[i]==="Palma Soriano"){p++; pp=i; }
                if(x[i]==="Contramaestre"){c++; cp=i;}
                if(x[i]==="Moa"){m++; mp=i;}
                if(x[i]==="Santiago"){s++; sp=i;}
                if(x[i]==="Baracoa"){b++; bp=i;}
            }
        
        const max:number = Math.max(c,p,m,b,s);
        let y:string[]=[];
        if(c==max){
            y.push(x[cp]+ " con una cantidad de: " + max);
        }
        if(m==max){
            y.push(x[mp]+ " con una cantidad de: " +max);
        }
        if(b==max){
            y.push(x[bp]+ " con una cantidad de: " +max);
        }
        if(s==max){
            y.push(x[sp]+ " con una cantidad de: " +max);
        }
        if(p==max){
            y.push(x[pp]+ " con una cantidad de: " +max);
        }
        return y;
    }

    
}   


let pacientes:Paciente[]=[];
let p1: Paciente = new Paciente("Darwin","elegiga","02100682665","Palma Soriano",true,1,4,22);
let p2: Paciente = new Paciente("ALejandro","elegiga","0210058265","Contramaestre",true,1,4,19);

let p4: Paciente = new Paciente("Ricardo","elegiga","00000000005","Santiago",false,2,3,60);
let p5: Paciente = new Paciente("Roberto","elegiga","0212068265","Baracoa",false,2,3,70);


let p7: Paciente = new Paciente("Fernando","elegiga","0214068265","Palma Soriano",true,3,2,19);
let p8: Paciente = new Paciente("Zambia","elegiga","0210568265","Baracoa",false,3,2,20);


let p10: Paciente = new Paciente("Luis","elegiga","0210968265","Palma Soriano",true,4,1,40);
let p11: Paciente = new Paciente("Andres","elegiga","0210868265","Baracoa",true,4,1,50);

pacientes.push(p1,p2,p4,p5,p7,p8,p10,p11);


var sala1:string[]=[];    
var sala2:string[]=[];    
var sala3:string[]=[];    
var sala4:string[]=[];  

    for(let i = 0; i< pacientes.length;i++){
        if(pacientes[i].getsala()==1){
            sala1.push(pacientes[i].getnombre());
        }
        if(pacientes[i].getsala()==2){
            sala2.push(pacientes[i].getnombre());
        }
        if(pacientes[i].getsala()==3){
            sala3.push(pacientes[i].getnombre());
        }
        if(pacientes[i].getsala()==4){
            sala4.push(pacientes[i].getnombre());
        }
    }


    //inciso a)
sala1.sort();
sala2.sort();
sala3.sort();
sala4.sort();

let sala_1:string[]=sala1;
let sala_2:string[]=sala2;
let sala_3:string[]=sala3;
let sala_4:string[]=sala4;
//hasta aqui
console.log("Sala #1: " + sala1)
console.log("-----")


console.log("Sala #2: "+sala2)
console.log("-----")


console.log("Sala #3: "+sala3)
console.log("-----")


console.log("Sala #4: "+sala4)

console.log("-----")
console.log("-----")

//inciso b)
let incisob:string[]=pacientes[0].total(pacientes);

//variables a mostrar
let incisobm:string= incisob[0];
let incisobf:string= incisob[1];
console.log(incisobm);

//
console.log("-----")
console.log("-----")


// inciso c)
let x:string[]=pacientes[0].paciente_media(pacientes);
for(let i=0; i<x.length;i++){
console.log( x[i] );}
console.log("-----")
console.log("-----")

//no se como pasarlo, es un arreglo
// hasta aqui)

//inciso d)

// a ese le da valor en el html
let s:string="0210068266";

let incisod:string = pacientes[0].revisar(s,pacientes);
console.log(incisod)

//hasta aqui
console.log("-----")
console.log("-----")
// inciso e)
let incisoe:string[]=pacientes[0].masmunicipios(pacientes);
console.log(incisoe);

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
    
    total(a:Paciente[]):string{
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

        return "La cantidad de mujeres es: " + contfem + " La cantidad de hombres: " + contmasc;
    }

    paciente_media(a:Paciente[]):string[]{
        let media:number=0;
        let x:string[]=[];

        for(let i=0;i<a.length;i++){
           media+= a[i].edad;
        }
        media = media/a.length;
        console.log("La media es: " + Math.round(media));
        for(let i=0;i<a.length; i++){
            if(a[i].edad>media){
                x.push(a[i].getpaciente());
            }
        }

     return x;
    }
    
    revisar(x:string, a:Paciente[]):void{
        let y:boolean=false;
        for(let i=0; i<a.length;i++){
            if(x==a[i].ci){
                y= true;
                break;
            }
            else (y= false);
        }
        if(y==true) console.log("Si es un paciente de nuestro hospital");
        else console.log("No esta en nuestras instalaciones")
        
    }

}   


let pacientes:Paciente[]=[];
let p1: Paciente = new Paciente("darwin","elegiga","02100682665","Palma Soriano",true,1,4,22);
let p2: Paciente = new Paciente("ALejandro","elegiga","0210058265","Palma Soriano",true,1,4,19);
let p3: Paciente = new Paciente("Saiz","elegiga","0210064265","Palma Soriano",false,1,4,24);

let p4: Paciente = new Paciente("Ricardo","elegiga","00000000005","Palma Soriano",false,2,3,60);
let p5: Paciente = new Paciente("Roberto","elegiga","0212068265","Palma Soriano",false,2,3,70);
let p6: Paciente = new Paciente("Raul","elegiga","0211068265","Palma Soriano",false,2,3,14);

let p7: Paciente = new Paciente("Fernando","elegiga","0214068265","Palma Soriano",true,3,2,19);
let p8: Paciente = new Paciente("Zambia","elegiga","0210568265","Palma Soriano",false,3,2,20);
let p9: Paciente = new Paciente("Reinier","elegiga","0210668265","Palma Soriano",true,3,2,21);

let p10: Paciente = new Paciente("Luis","elegiga","0210968265","Palma Soriano",true,4,1,40);
let p11: Paciente = new Paciente("Andres","elegiga","0210868265","Palma Soriano",true,4,1,50);
let p12: Paciente = new Paciente("Salvador","elegiga","0217068265","Palma Soriano",true,4,1,33);

pacientes.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12);


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

sala1.sort();
sala2.sort();
sala3.sort();
sala4.sort();

console.log("Sala #1: " + sala1)
console.log("-----")

console.log("Sala #2: "+sala2)
console.log("-----")

console.log("Sala #3: "+sala3)
console.log("-----")

console.log("Sala #4: "+sala4)
console.log("-----")

console.log(pacientes[0].total(pacientes));


/*mostrando media*/
let x:string[]=pacientes[0].paciente_media(pacientes);
for(let i=0; i<x.length;i++){
console.log("La media es:" + x[i] );}

let s:string="021006826d65";
// s? = prompt("Digite la edad");
pacientes[0].revisar(s,pacientes)
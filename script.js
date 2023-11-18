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
        return "La cantidad de mujeres es: " + contfem + " La cantidad de hombres: " + contmasc;
    };
    Paciente.prototype.paciente_media = function (a) {
        var media = 0;
        var x = [];
        for (var i = 0; i < a.length; i++) {
            media += a[i].edad;
        }
        media = media / a.length;
        console.log("La media es: " + Math.round(media));
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
            console.log("Si es un paciente de nuestro hospital");
        else
            console.log("No esta en nuestras instalaciones");
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
var p1 = new Paciente("darwin", "elegiga", "02100682665", "Palma Soriano", true, 1, 4, 22);
var p2 = new Paciente("ALejandro", "elegiga", "0210058265", "Contramaestre", true, 1, 4, 19);
var p3 = new Paciente("Saiz", "elegiga", "0210064265", "Moa", false, 1, 4, 24);
var p4 = new Paciente("Ricardo", "elegiga", "00000000005", "Santiago", false, 2, 3, 60);
var p5 = new Paciente("Roberto", "elegiga", "0212068265", "Baracoa", false, 2, 3, 70);
var p6 = new Paciente("Raul", "elegiga", "0211068265", "Guantanamo", false, 2, 3, 14);
var p7 = new Paciente("Fernando", "elegiga", "0214068265", "Palma Soriano", true, 3, 2, 19);
var p8 = new Paciente("Zambia", "elegiga", "0210568265", "Santiago", false, 3, 2, 20);
var p9 = new Paciente("Reinier", "elegiga", "0210668265", "Baracoa", true, 3, 2, 21);
var p10 = new Paciente("Luis", "elegiga", "0210968265", "Palma Soriano", true, 4, 1, 40);
var p11 = new Paciente("Andres", "elegiga", "0210868265", "Contramaestre", true, 4, 1, 50);
var p12 = new Paciente("Salvador", "elegiga", "0217068265", "Baracoa", true, 4, 1, 33);
pacientes.push(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
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
sala1.sort();
sala2.sort();
sala3.sort();
sala4.sort();
console.log("Sala #1: " + sala1);
console.log("-----");
console.log("Sala #2: " + sala2);
console.log("-----");
console.log("Sala #3: " + sala3);
console.log("-----");
console.log("Sala #4: " + sala4);
console.log("-----");
console.log("-----");
console.log(pacientes[0].total(pacientes));
console.log("-----");
console.log("-----");
/*mostrando media*/
var x = pacientes[0].paciente_media(pacientes);
for (var i = 0; i < x.length; i++) {
    console.log("La media es:" + x[i]);
}
console.log("-----");
console.log("-----");
var s = "02100682665";
pacientes[0].revisar(s, pacientes);
console.log("-----");
console.log("-----");
console.log(pacientes[0].masmunicipios(pacientes));

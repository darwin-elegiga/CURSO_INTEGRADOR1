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
    Paciente.prototype.getpaciente = function () {
        return ("El nombre es: ${nombre}");
    };
    return Paciente;
}());
var p1 = new Paciente("darwin", "elegiga", "0210068265", "Palma Soriano", true, 2, 3, 22);
console.log(p1.getpaciente());

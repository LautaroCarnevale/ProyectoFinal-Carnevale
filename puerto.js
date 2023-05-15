class Camion {
    idunico;
    fecha;
    identificacion = { nombre: "", apellido: "", dni: "", nacionalidad: "", sexo: "" };
    modelo;
    patente;
    carga;
    peso;

    constructor (idunico,fecha,identificacion,modelo,patente,carga,peso) {
        this.idunico = idunico;
        this.fecha = fecha;
        this.identificacion = identificacion;
        this.marca  = modelo;
        this.patente = patente;
        this.carga = carga;
        this.peso = peso;
    }
}



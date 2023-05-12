class Camion {
    id;
    fecha;
    identificacion = { nombre: "", apellido: "", dni: "", nacionalidad: "", sexo: "" };
    modelo;
    patente;
    carga;
    peso;

    constructor (id,fecha,identificacion,modelo,patente,carga,peso) {
        this.id = id;
        this.fecha = fecha;
        this.identificacion = identificacion;
        this.marca  = modelo;
        this.patente = patente;
        this.carga = carga;
        this.peso = peso;
    }
}



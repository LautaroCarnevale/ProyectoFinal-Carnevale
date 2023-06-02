class Camion {
    idunico;
    fecha;
    identificacion = { nombre: "", apellido: "", dni: "", nacionalidad: "", sexo: "" };
    datoscarga = { humedad: "", bichos: "", insecticida: "", impurezas: ""};
    modelo;
    patente;
    carga;
    peso;

    constructor (idunico,fecha,identificacion,datoscarga,modelo,patente,carga,peso) {
        this.idunico = idunico;
        this.fecha = fecha;
        this.identificacion = identificacion;
        this.datoscarga = datoscarga;
        this.marca  = modelo;
        this.patente = patente;
        this.carga = carga;
        this.peso = peso;
    }
}



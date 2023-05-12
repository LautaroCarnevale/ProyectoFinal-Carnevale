// alert('Esto es una simulación de registro de camiones y sus conductores en un puerto de carga y descarga de granos, como maíz, soja, sorgo, etc.')
// alert('Bienvenidos al puerto. Primero, tienes que sacar un turno.')

// let nombreTurno;
// let turnoActual = 0;
// let entregaTurno = -1;
// let turnoNuevo = false;
// let preguntarDeNuevo = false;
// let nombreTurnoVerificacion;
// let entrada = false;
// let salida = false;
// let pesoNetoVerificacion = false;
// const puerto = [];

// //crear turno
// function crearTurno() {
//     turnoActual++;
//     return turnoActual;
// }

// //buscar y actualizar el dato ya ingresado anteriormente
// function buscarYActualizar() {
//     const inputNombre = prompt('Ingrese el nombre del campo que desea actualizar, ej:fecha, nombreCompleto, modelo, patente, carga, peso');
//     const inputValor = prompt(`Ingrese el nuevo valor de ${inputNombre}:`);

//     for (let i = 0; i < puerto.length; i++) {
//         const camion = puerto[i];

//         if (inputNombre in camion) {
//             camion[inputNombre] = inputValor;
//             alert(`✅ | El valor de ${inputNombre} para el camión registrado a nombre de ${camion.nombreCompleto} ha sido actualizado a ${inputValor} correctamente.`);
//             preguntarDeNuevo = true;
//             return;

//         }
//     }
//     alert(`❌ | No se encontró el campo ${inputNombre} en la base de datos.`);
//     preguntarDeNuevo = true;
// }

// // elimina el valor de un nombre , ejmplo; fecha,modelo, patente,etc.
// function eliminarValor() {
//     const inputNombre = prompt('Ingrese el nombre del campo que desea eliminar, ej:fecha, nombreCompleto, modelo, patente, carga, peso');
//     for (let i = 0; i < puerto.length; i++) {
//         const camion = puerto[i];

//         if (inputNombre in camion) {
//             camion[inputNombre] = '';
//             alert(`✅ | El valor de ${inputNombre} para el camión registrado a nombre de ${camion.nombreCompleto} ha sido borrado correctamente.`);
//             preguntarDeNuevo = true;
//             return;

//         }
//     }
//     alert(`❌ | No se encontró el campo ${inputNombre} en la base de datos.`);
//     preguntarDeNuevo = true;
// }

// // marca registro de entrada
// function marcarRegistroDeEntrada() {

//     if (entrada == false && salida == false) {

//         alert('✅ | La entrada se marco correctamente, recuerda marcar la salida');
//         alert('Le asignamos el horario de las 23:30 para su descarga en el hangar 3, Muchas gracias.👍');
//         entrada = true;
//         preguntarDeNuevo = true;
//     } else {
//         alert('❌ | No puedes marcar la entrada si ya esta dentro')
//         preguntarDeNuevo = true;
//     }
// }

// //marca registro de salida
// function marcarRegistroDeSalida() {
//     if (salida == false && entrada == true) {
//         salida = true;
//         alert('✅ | La salida se marco correctamente, recuerda marcar la salida')
//         alert('Muchas gracias por venir al puerto.')

//         preguntarDeNuevo = true;
//     } else {
//         alert('❌ | No puedes marcar la salida si no entraste')
//         preguntarDeNuevo = true;
//     }
// }



// do {
//     let nuevoTurno = crearTurno();
//     nombreTurnoVerificacion = false;
//     do {
//         nombreTurno = prompt('Ingrese un nombre al cual quiere registrar su turno...')
//         if (nombreTurno !== '') {
//             nombreTurnoVerificacion = false;
//         } else {
//             alert('❌ | Usted colocó un campo vacío, por favor inténtelo de nuevo.')
//             nombreTurnoVerificacion = true;
//         }
//     } while (nombreTurnoVerificacion);

//     alert(`Su número de turno ha sido registrado a nombre de ${nombreTurno}  y su número de turno es ${nuevoTurno}.`);

//     alert('Bienvenido a la Casilla de Control de Acceso. Por favor, ingrese su número de turno para ingresar. Si el número es correcto, se le permitirá el acceso. De lo contrario, deberá sacar otro turno.');
//     entregaTurno = parseInt(prompt('Ingrese su número de turno:'));

//     if (entregaTurno === nuevoTurno) {
//         alert('✅ | El ingreso al registro de camiones ha sido correcto. Por favor, registre su camión. 🚚');
//         turnoNuevo = false;

//         function validarEntrada(mensaje) {
//             let entrada;
//             do {
//                 entrada = prompt(mensaje);
//                 if (entrada !== '') {
//                     return entrada;
//                 } else {
//                     alert('❌ | No puedes dejar este campo vacío. Por favor, inténtalo de nuevo.');
//                 }
//             } while (true);
//         }

//         let fecha = validarEntrada('Ingrese la fecha de hoy:');
//         let nombreCompleto = validarEntrada('Ingrese su nombre completo:');
//         let modelo = validarEntrada('Ingrese el modelo de su camión:\n' +
//             'Ej: Scania, Mercedes-Benz, Iveco, Volvo.etc');
//         let patenteLogs = validarEntrada('Ingrese la patente de su camión:');
//         let cereal = validarEntrada('Ingrese el grano/cereal:\n' +
//             'Ej: Trigo, soja, maíz, sorgo, etc');
//         let pesoNeto;
//         do {
//             pesoNeto = Number(prompt('Ingrese el peso neto:'));
//             if (pesoNeto < 30000 && pesoNeto !== '') {
//                 pesoNetoVerificacion = false;
//             } else {
//                 alert('el peso tiene que ser menor a 30000kg')
//                 pesoNetoVerificacion = true;
//             }
//         } while (pesoNetoVerificacion);

//         //pushea los datos ingresados por el usario al array
//         puerto.push(new camion(nuevoTurno, fecha, nombreCompleto, modelo, patenteLogs, cereal, pesoNeto));

//         //Menu para ejecutar las funciones
//         do {
//             const eleccion = Number(prompt('Ingrese el número del apartado que desea elegir: \n' +
//                 '1 - Mostrar todos los datos cargados \n' +
//                 '2 - Modificar un dato ya ingresado \n' +
//                 '3 - Eliminar un dato ya ingresado \n' +
//                 '4 - Marcarcar registro de Entrada \n' +
//                 '5 - Marcarcar registro de Salida'));

//             switch (eleccion) {
//                 case 1:
//                     alert(`     Informe: 
//                 ================================           
//                 N° de turno: ${nuevoTurno}, resgitrado por ${nombreTurno}.
//                 Datos del chofer: 
//                 - Nombre completo:${nombreCompleto}
//                 Fecha: ${fecha}
//                 Modelo del camion: ${modelo}
//                 Patente del camion: ${patenteLogs}
//                 Grano/especie: ${cereal}
//                 Peso neto: ${pesoNeto}kg
//                 ================================`);
//                     preguntarDeNuevo = true;
//                     break;

//                 case 2: buscarYActualizar();

//                     break;

//                 case 3: eliminarValor();

//                     break;
//                 case 4: marcarRegistroDeEntrada();

//                     break;
//                 case 5: marcarRegistroDeSalida();

//                     break;
//                 default:
//                     alert('❌ | no ingreso ningun numero por favor intentalo de nuevo.');
//                     preguntarDeNuevo = true;
//             }
//         } while (preguntarDeNuevo)

//     } else {
//         alert('❌ | El número de turno ingresado NO coincide con el número ya registrado. Por favor, saque otro turno.');
//         turnoNuevo = true;
//     }

// } while (turnoNuevo);


/*

1- generar un listado ya cargado por el sisitema de unos aproximadamente 7 camiones de los cuales algunos cumpliran con los requisitos del puerto y otros no.
2- hacer que el listado de camiones este en un Dropdown y que al momento de tocar un camion se coloque automaticamente en la verficacion de camiion  

 */


let camiones = [];
const selectorCamiones = document.querySelector('#camionesEspera')


camiones.push(new Camion("1", "11/05/2023", { nombre: "Jhon", apellido: "Martinez", dni: "43.657.332", nacionalidad: "Argentina", sexo: "M" }, "scania", "DEF-7567", "soja", "27500"));
camiones.push(new Camion("2", "11/05/2023", { nombre: "Juan", apellido: "González", dni: "23.584.672", nacionalidad: "Peru", sexo: "M", }, "Mercedes-Benz", "HSA-8427", "maiz", "39300"));
camiones.push(new Camion("3", "11/05/2023", { nombre: "Miguel", apellido: "Torres", dni: "83.321.484", nacionalidad: "Argentina", sexo: "M" }, "Volvo", "ASD-3298", "sorgo", "28990"));
camiones.push(new Camion("4", "11/05/2023", { nombre: "Luis", apellido: "Hernandez", dni: "22.785.652", nacionalidad: "Argentina", sexo: "M" }, "Iveco", "DGA-1778", "soja", "25785"));
camiones.push(new Camion("5", "11/05/2023", { nombre: "Sofia", apellido: "Martinez", dni: "32.483.874", nacionalidad: "Argentina", sexo: "F" }, "scania", "KSF-9032", "soja", "30173"));
camiones.push(new Camion("6", "11/05/2023", { nombre: "Maria", apellido: "Rodriguez", dni: "39.634.332", nacionalidad: "Argentina", sexo: "F" }, "Iveco", "HJE-4890", "maiz", "27900"));
camiones.push(new Camion("7", "11/05/2023", { nombre: "Carlos", apellido: "Ramirez", dni: "13.237.234", nacionalidad: "Argentina", sexo: "M" }, "Mercedes-Benz", "JER-2783", "sorgo", "31360"));



localStorage.setItem('camiones', JSON.stringify(camiones));

document.addEventListener('DOMContentLoaded', () => {
    camiones = JSON.parse(localStorage.getItem('camiones'));
    popularDropDown();
});

function popularDropDown() {
    camiones.forEach((Camion) => {
        const option = document.createElement('option');
        option.textContent = `camion ${Camion.id}: Nombre Completo: ${Camion.identificacion.nombre} ${Camion.identificacion.apellido}, Carga: ${Camion.carga}...`
        option.value = camiones.indexOf(Camion);
        selectorCamiones.appendChild(option)
        mostrarDatosDeCamion();
    })
}


selectorCamiones.addEventListener('change', mostrarDatosDeCamion);

function mostrarDatosDeCamion() {
    const numerDeCamion = selectorCamiones.value;
    const datosCamion = camiones[numerDeCamion];
    datosDeRegistro.innerHTML = `<div class="datos-de-registro">
  <p><span class="datos-de-registro-nombre">Id único por camión:</span> <span class="datos-de-registro-valor">${datosCamion.id}</span></p>
  <p><span class="datos-de-registro-nombre">Fecha de ingreso:</span> <span class="datos-de-registro-valor">${datosCamion.fecha}</span></p>
  <p><span class="datos-de-registro-nombre">Datos del Chofer:</span></p>
  <hr>
  <p><span class="datos-de-registro-nombre">Nombre:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.nombre}</span></p>
  <p><span class="datos-de-registro-nombre">Apellido:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.apellido}</span></p>
  <p><span class="datos-de-registro-nombre">Dni:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.dni}</span></p>
  <p><span class="datos-de-registro-nombre">Nacionalidad:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.nacionalidad}</span></p>
  <p><span class="datos-de-registro-nombre">Sexo: </span><span class="datos-de-registro-valor">${datosCamion.identificacion.sexo}</span></p>
  <hr>
  <p><span class="datos-de-registro-nombre">Marca del camión:</span> <span class="datos-de-registro-valor">${datosCamion.marca}</span></p>
  <p><span class="datos-de-registro-nombre">Patente: </span><span class="datos-de-registro-valor">${datosCamion.patente}</span></p>
  <p><span class="datos-de-registro-nombre">Cereal: </span><span class="datos-de-registro-valor">${datosCamion.carga}</span></p>
  <p><span class="datos-de-registro-nombre">Peso: </span><span class="datos-de-registro-valor">${datosCamion.peso}</span></p>
</div>`;
}


const botonVerificar = document.getElementById('boton-verificar')

botonVerificar.addEventListener('click', () => {
    const numerDeCamion = selectorCamiones.value;
    const verficarDatosCamion = camiones[numerDeCamion];

    const consolaVerificar = document.getElementById('consola-verificar')
    let verificarDatosDeConsola = true;
    let mensajesDeError = [];

    function verificarNacionalidad() {
        if (verficarDatosCamion.identificacion.nacionalidad !== 'Argentina') {
            mensajesDeError.push(`❌ | Parece que hay un problema con la nacionalidad de la persona en cuestión. De acuerdo con los datos proporcionados, no es de Argentina, sino de ${verficarDatosCamion.identificacion.nacionalidad}. En este caso, lo más recomendable sería rechazarle la entrada.`);
            verificarDatosDeConsola = false;
        }
    }

    function verificarPeso() {
        if (verficarDatosCamion.peso > 30000) {
            mensajesDeError.push(`❌ | Parece que hay un problema con el peso del camión. Según los datos proporcionados, el vehículo ha superado el límite de 30000 kg y tiene un peso de ${verficarDatosCamion.peso} kg. En este caso, lo más recomendable sería rechazar la entrada del camión.`);
            verificarDatosDeConsola = false;
        }
    }

    verificarNacionalidad();
    verificarPeso();

    if (verificarDatosDeConsola) {
        consolaVerificar.innerHTML = `✅| Todo esta en orden`;
    } else {
        consolaVerificar.innerHTML = mensajesDeError.join(`<br>`);
    }
});




















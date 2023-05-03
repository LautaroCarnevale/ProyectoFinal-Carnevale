alert('Esto es una simulación de registro de camiones y sus conductores en un puerto de carga y descarga de granos, como maíz, soja, sorgo, etc.')
alert('Bienvenidos al puerto. Primero, tienes que sacar un turno.')

let nombreTurno;
let turnoActual = 0;
let entregaTurno = -1;
let turnoNuevo = false;
let preguntarDeNuevo = false;
let nombreTurnoVerificacion;
let entrada = false;
let salida = false;
let pesoNetoVerificacion = false;
const puerto = [];

//crear turno
function crearTurno() {
    turnoActual++;
    return turnoActual;
}

//buscar y actualizar el dato ya ingresado anteriormente
function buscarYActualizar() {
    const inputNombre = prompt('Ingrese el nombre del campo que desea actualizar, ej:fecha, nombreCompleto, modelo, patente, carga, peso');
    const inputValor = prompt(`Ingrese el nuevo valor de ${inputNombre}:`);

    for (let i = 0; i < puerto.length; i++) {
        const camion = puerto[i];

        if (inputNombre in camion) {
            camion[inputNombre] = inputValor;
            alert(`✅ | El valor de ${inputNombre} para el camión registrado a nombre de ${camion.nombreCompleto} ha sido actualizado a ${inputValor} correctamente.`);
            preguntarDeNuevo = true;
            return;
            
        }
    }
    alert(`❌ | No se encontró el campo ${inputNombre} en la base de datos.`);
    preguntarDeNuevo = true;
}

// elimina el valor de un nombre , ejmplo; fecha,modelo, patente,etc.
function eliminarValor() {
    const inputNombre = prompt('Ingrese el nombre del campo que desea eliminar, ej:fecha, nombreCompleto, modelo, patente, carga, peso');
    for (let i = 0; i < puerto.length; i++) {
        const camion = puerto[i];

        if (inputNombre in camion) {
            camion[inputNombre] = '';
            alert(`✅ | El valor de ${inputNombre} para el camión registrado a nombre de ${camion.nombreCompleto} ha sido borrado correctamente.`);
            preguntarDeNuevo = true;
            return;
            
        }
    }
    alert(`❌ | No se encontró el campo ${inputNombre} en la base de datos.`);
    preguntarDeNuevo = true;
}

// marca registro de entrada
function marcarRegistroDeEntrada() {

    if (entrada == false && salida == false) {

        alert('✅ | La entrada se marco correctamente, recuerda marcar la salida');
        alert('Le asignamos el horario de las 23:30 para su descarga en el hangar 3, Muchas gracias.👍');
        entrada = true;
        preguntarDeNuevo = true;
    } else {
        alert('❌ | No puedes marcar la entrada si ya esta dentro')
        preguntarDeNuevo = true;
    }
}

//marca registro de salida
function marcarRegistroDeSalida() {
    if (salida == false && entrada == true) {
        salida = true;
        alert('✅ | La salida se marco correctamente, recuerda marcar la salida')
        alert('Muchas gracias por venir al puerto.')

        preguntarDeNuevo = true;
    } else {
        alert('❌ | No puedes marcar la salida si no entraste')
        preguntarDeNuevo = true;
    }
}



do {
    let nuevoTurno = crearTurno();
    nombreTurnoVerificacion = false;
    do {
        nombreTurno = prompt('Ingrese un nombre al cual quiere registrar su turno...')
        if (nombreTurno !== '') {
            nombreTurnoVerificacion = false;
        } else {
            alert('❌ | Usted colocó un campo vacío, por favor inténtelo de nuevo.')
            nombreTurnoVerificacion = true;
        }
    } while (nombreTurnoVerificacion);

    alert(`Su número de turno ha sido registrado a nombre de ${nombreTurno}  y su número de turno es ${nuevoTurno}.`);

    alert('Bienvenido a la Casilla de Control de Acceso. Por favor, ingrese su número de turno para ingresar. Si el número es correcto, se le permitirá el acceso. De lo contrario, deberá sacar otro turno.');
    entregaTurno = parseInt(prompt('Ingrese su número de turno:'));

    if (entregaTurno === nuevoTurno) {
        alert('✅ | El ingreso al registro de camiones ha sido correcto. Por favor, registre su camión. 🚚');
        turnoNuevo = false;

        function validarEntrada(mensaje) {
            let entrada;
            do {
                entrada = prompt(mensaje);
                if (entrada !== '') {
                    return entrada;
                } else {
                    alert('❌ | No puedes dejar este campo vacío. Por favor, inténtalo de nuevo.');
                }
            } while (true);
        }

        let fecha = validarEntrada('Ingrese la fecha de hoy:');
        let nombreCompleto = validarEntrada('Ingrese su nombre completo:');
        let modelo = validarEntrada('Ingrese el modelo de su camión:\n' +
            'Ej: Scania, Mercedes-Benz, Iveco, Volvo.etc');
        let patenteLogs = validarEntrada('Ingrese la patente de su camión:');
        let cereal = validarEntrada('Ingrese el grano/cereal:\n' +
            'Ej: Trigo, soja, maíz, sorgo, etc');
        let pesoNeto;
        do {
            pesoNeto = Number(prompt('Ingrese el peso neto:'));
            if (pesoNeto < 30000 && pesoNeto !== '') {
                pesoNetoVerificacion = false;
            } else {
                alert('el peso tiene que ser menor a 30000kg')
                pesoNetoVerificacion = true;
            }
        } while (pesoNetoVerificacion);

        //pushea los datos ingresados por el usario al array
        puerto.push(new camion(nuevoTurno, fecha, nombreCompleto, modelo, patenteLogs, cereal, pesoNeto));

        //Menu para ejecutar las funciones
        do {
            const eleccion = Number(prompt('Ingrese el número del apartado que desea elegir: \n' +
                '1 - Mostrar todos los datos cargados \n' +
                '2 - Modificar un dato ya ingresado \n' +
                '3 - Eliminar un dato ya ingresado \n' +
                '4 - Marcarcar registro de Entrada \n' +
                '5 - Marcarcar registro de Salida'));

            switch (eleccion) {
                case 1:
                    alert(`     Informe: 
                ================================           
                N° de turno: ${nuevoTurno}, resgitrado por ${nombreTurno}.
                Datos del chofer: 
                - Nombre completo:${nombreCompleto}
                Fecha: ${fecha}
                Modelo del camion: ${modelo}
                Patente del camion: ${patenteLogs}
                Grano/especie: ${cereal}
                Peso neto: ${pesoNeto}kg
                ================================`);
                    preguntarDeNuevo = true;
                    break;

                case 2: buscarYActualizar();

                    break;

                case 3: eliminarValor();

                    break;
                case 4: marcarRegistroDeEntrada();

                    break;
                case 5: marcarRegistroDeSalida();

                    break;
                default:
                    alert('❌ | no ingreso ningun numero por favor intentalo de nuevo.');
                    preguntarDeNuevo = true;
            }
        } while (preguntarDeNuevo)

    } else {
        alert('❌ | El número de turno ingresado NO coincide con el número ya registrado. Por favor, saque otro turno.');
        turnoNuevo = true;
    }

} while (turnoNuevo);













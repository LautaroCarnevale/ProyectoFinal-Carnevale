
/* 
1-  llega el camion al puerto. ✅
2- saca un turno ✅
3- va al la casilla a registrar su camion(le piden el turno si no es correcto no entra) ✅
4- le piden todos los datos del camion y del conductor: 1. se agrega automaticamente su numero de turno. ✅
                            2. Datos de destinatario y destino. ✅
                            3. Datos del chofer(nombre completo, dni,  cuit, nacionalidad) . -------
                            4. Fecha de hoy.
                            5. modelo del camion.
                            6. patente del camion.
                            7. Grano/especie(si tiene humedad, vichos plagucida fumigante).
                            8. Peso neto del grano(kg).

5- poder agregar,sacar y modificar un dado ya ingresado. ✅ a medias
                    	


7- requisitos del camion(con su carga) y conductor: 1. que conincida el destinatario y destino con el registro ya enviado del puerto anteriormente
                            2. que los datos del chofer sean correctos(vrificar que sea de argentina, que ponga correctamente el cuit y dni).
                            3. Verificar al fecha de hoy 
                            4. Verificar modelo del camion.
                            5. verificar la patente del camion.
                            6. verificar que el grano/especie sean correctos en ese puesto(si tiene humedad, vichos plagucida fumigante).
                            7. El peso, si el peso neto es mayor a 30000(kg) no dejarlo descargar el cereal.

8- Si logro registrar su camion en la bases de datos del puerto dejarlo pasar y darle un horario de descarga mas un registro de todos los datos ingresados.
9- Agregar un registro de entrada al puerto y salida del puerto y un informe de su carga detallando humedad, peso, bichos y insectisidas
*/

alert('Esto es una simulación de registro de camiones y sus conductores en un puerto de carga y descarga de granos, como maíz, soja, sorgo, etc.')
alert('Bienvenidos al puerto. Primero, tienes que sacar un turno.')
// turno = prompt('Coloque su nombre y su turno se gurdara')

let turnoActual = 0;
let entregaTurno = -1;
let turnoNuevo = false;
let preguntarDeNuevo = false;
let entrada = false;
let salida = false;
const puerto = [];

//crear turno
function crearTurno() {
    turnoActual++;
    return turnoActual;
}


//Buscar por nombre entre camiones
// function buscarPorNombre() {
//     const inputUsuario = prompt('ingrese un nombre para buscar un camion registrado a ese nombre en la base de datos');
//     const camionEncontrado = puerto.find((cam) => cam.nombreCompleto === inputUsuario.toLocaleLowerCase());

//     if (camionEncontrado) {
//         alert(`✅ | Se encontro 1 camion al registro de ${camionEncontrado.nombreCompleto}`);
//         preguntarDeNuevo = true;
//     } else {
//         alert(`❌ | No se logro encontrar un camion registrado al nombre de ${inputUsuario}`);
//         preguntarDeNuevo = true;
//     }

// }

function buscarYActualizar() {
    const inputNombre = prompt('Ingrese el nombre del campo que desea actualizar:');
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

function eliminarValor() {
    const inputNombre = prompt('Ingrese el nombre del campo que desea eliminar:');
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


function marcarRegistroDeEntrada() {

    if (entrada == false && salida == false) {
        entrada = true;
        alert('La entrada se marco correctamente, recuerda marcar la salida')
        preguntarDeNuevo = true;
    } else {
        alert('No puedes marcar la entrada si ya esta dentro')
        preguntarDeNuevo = true;
    }
}

function marcarRegistroDeSalida() {
    if (salida == false && entrada == true) {
        salida = true;
        alert('La salida se marco correctamente, recuerda marcar la salida')
        preguntarDeNuevo = true;
    } else {
        alert('No puedes marcar la salida si no entraste o ya saliste')
        preguntarDeNuevo = true;
    }
}




do {
    let nuevoTurno = crearTurno();
    nombreTurno = prompt('Ingrese un nombre al cual quiere registrar su turno...')

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
                alert('No puedes dejar este campo vacío. Por favor, inténtalo de nuevo.');
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
          let pesoNeto = validarEntrada('Ingrese el peso neto:');

        puerto.push(new camion(nuevoTurno, fecha, nombreCompleto, modelo, patenteLogs, cereal, pesoNeto));

        do {
        const eleccion = Number(prompt('Ingrese el número del apartado que desea elegir: \n' +
            '1 - Mostrar todos los datos cargados \n' +
            '2 - Modificar un dato ya ingresado \n' +
            '3 - Eliminar un dato ya ingresado \n' +
            '4 - Marcarcar registro de Entrada \n' +
            '5 - Marcarcar registro de Salida'));


        
            switch (eleccion) {
                case 1:
                    alert(`Registro:           
                N° de turno: ${nuevoTurno}, resgitrado por ${nombreTurno}.
                Datos del chofer: 
                =============================
                - Nombre completo:${nombreCompleto}.
                - DNI:
                - CUIT:
                - Nacionalidad:
                =============================
                Fecha: ${fecha}.
                Modelo del camion: ${modelo}.
                Patente del camion: ${patenteLogs}.
                Grano/especie: ${cereal}.
                Peso neto (en kg): ${pesoNeto}.`);
                    break;
    
                case 2: buscarYActualizar();
    
                    break;
    
                case 3: eliminarValor();
    
                    break;
                case 4: marcarRegistroDeEntrada()
    
                    break;
                    case 5: marcarRegistroDeSalida()
    
                    break;
                default:
                    alert('no ingreso ningun numero por favor intentalo de nuevo.');
                    preguntarDeNuevo = true;
            }
        } while (preguntarDeNuevo)
        
    } else {
        alert('❌ | El número de turno ingresado NO coincide con el número ya registrado. Por favor, saque otro turno.');
        turnoNuevo = true;
    }

} while (turnoNuevo);















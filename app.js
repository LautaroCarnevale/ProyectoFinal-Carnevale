alert("Bienvenido al mercado, primero necesito que crees una cuenta.");

let usuario;
let contraseña;

usuario = prompt("ingrese un usuario");

contraseña = prompt("ingrese una contraseña");

if (usuario != "") {
    if (contraseña != "") {
        console.log("Ingresaste los datos de registro correctamente.");

        console.log("Gracias por ingresar su usuario y contraseña.");
        console.log("Ahora ingrese a su cuenta, iniciando sesión.");

        if (usuario == prompt("Ingrese su usuario")) {
            console.log("Tu usuario es correcto, ahora ingresa la contraseña.");

            if (contraseña == prompt("ingrese su contraseña")) {
                console.log("El usuario y contraseña son correctos, bienvenido al mercado!");

                alert('Elige 2 o mas productos que deseas comprar y te diremos cuanto es el total...' + '\n' +
                    'Manzana: $50' + '\n' +
                    'Pollo: $450' + '\n' +
                    'Pan: $100' + '\n' +
                    'Queso: $150' + '\n' +
                    'Arroz: $90' + '\n' +
                    'Atun: $100' + '\n' +
                    'Papel: $110');

                let manzana = 50;
                let pollo = 450;
                let pan = 100;
                let queso = 150;
                let arroz = 90;
                let atun = 100;
                let papel = 110;
                let total = 0;
                let resultado = 0;

                let totalProducto = Number(prompt("¿cuantos prductos deseas comprar?"));



                for (let i = 1; i <= totalProducto; i++) {
                    let producto = prompt('Ingrese su producto');
                    switch (producto) {
                        case 'manzana':
                            total = total + manzana;
                            break;
                        case 'pollo':
                            total = total + pollo;
                            break;
                        case 'pan':
                            total = total + pan;
                            break;
                        case 'queso':
                            total = total + queso;
                            break;
                        case 'arroz':
                            total = total + arroz;
                            break;
                        case 'atun':
                            total = total + atun;
                            break;
                        case 'papel':
                            total = total + papel;
                            break;
                        default:
                            console.log('Ingresó un producto que no está registrado en la lista');
                    }
                }

                resultado = total
                console.log('El total es de: ' + resultado);






            } else {
                console.log("La es contraseña es incorrecta.");
            }
        } else {
            console.log("El usuario es incorrecto.");
        }
    } else {
        console.log("No ingresaste una contraseña, lamentablemente no vamos a poder registrarte.");
    }
} else {
    console.log("No ingresaste un usuario, lamentablemente no vamos a poder registrarte.");
}



let nombre = prompt("Bienvenido a la web de nuestra gráfica, ingrese su nombre para empezar a seleccionar nuestros productos.");

alert("Hola" + " " + nombre + ", presione ok para continuar");

let impresion = prompt("Ingrese '1' para impresión simple, '2' para impresión troquelada");

switch (impresion) {
    case "1":
        alert("Ha seleccionado impresión simple");
        break;

    case "2":
        alert("Ha seleccionado impresión troquelada");
        break;

    // case "3":
    //     alert("Ha seleccionado impresión HD");
    //     break;

    default:
        alert("Producto no reconocido");
        break;
}


let cantidad = parseInt(prompt("Ingrese cantidad de impresiones. Compra mínima: 10 unidades"));

if (cantidad <10) {
    alert("Seleccione más de 10 unidades")
}

else if (cantidad >10) {
alert("Excelete! Seleccione ok para seguir comprando...")
}

function calcularMetros() {
    let cantidadProductos = parseInt(prompt("Si desea stickers ingrese la cantidad de diseños diferentes que desee:"));
  
   
    if (isNaN(cantidadProductos) || cantidadProductos <= 0) {
      alert("Por favor, ingrese una cantidad válida.");
      return;
    }
  
    let metrosTotales = 0;
  
    for (let i = 1; i <= cantidadProductos; i++) {
      let metrosProducto = parseFloat(prompt(`Ingrese los metros de stickers que desee para el diseño ${i} :`));
  
      if (isNaN(metrosProducto) || metrosProducto < 0) {
        alert (`Ingrese una cantidad válida para el producto ${i}`)
        return;
      }
  
      metrosTotales = metrosTotales + metrosProducto;
    }
  
    alert (`La cantidad total de metros de los ${cantidadProductos} productos seleccionados es de: ${metrosTotales}`);
  }
  
  calcularMetros();

let entrada = prompt("Ingrese SI para solictar envío o NO para retirar por nuestro local");

while (entrada != "ESC") {
    switch (entrada) {
        case "SI":
            alert("Ha seleccionado la opción envío");
            break;

        case "NO":
            alert("Ha seleccionado retirar por nuestro local");
            break;

        default:
            alert ("Seleccione una opción correta");
            break;
        }
        

    entrada = prompt("Gracias por su compra. Ingrese ESC para salir");
}





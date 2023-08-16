let nombre = prompt("¡Bienvenido a la sección de stickers!\nIngrese su nombre para empezar a seleccionar nuestros productos:");
alert(`Hola ${nombre}, presione OK para continuar`);

const productos = [
  { id: 1, nombre: 'Sticker Simple', precio: 100 },
  { id: 2, nombre: 'Sticker Especial', precio: 150 },
  { id: 3, nombre: 'Sticker Premium', precio: 200 },
  { id: 4, nombre: 'Sticker Especial Premium', precio: 250 }
];

let productosDisponibles = 'Productos disponibles:\n\n';
productos.forEach(producto => {
  productosDisponibles += `${producto.id}: ${producto.nombre} - $${producto.precio}\n`;
});
alert(productosDisponibles);

let seleccion;
let productoSeleccionado;

do {
  seleccion = parseInt(prompt('Seleccione el número del producto que desee comprar:'));
  productoSeleccionado = productos.find(producto => producto.id === seleccion);

  if (!productoSeleccionado) {
    alert('Producto no válido. Por favor, seleccione un producto válido.');
  }
} while (!productoSeleccionado);

let cantidad;
do {
  cantidad = parseInt(prompt(`Seleccione la cantidad de unidades (mínimo 10) para ${productoSeleccionado.nombre}:`));
} while (cantidad < 10);

const costoTotal = productoSeleccionado.precio * cantidad;
alert(`Resumen de la compra:\n\nProducto: ${productoSeleccionado.nombre}\nCantidad: ${cantidad} unidades\nCosto total: $${costoTotal}`);

let entrada;

do {
  entrada = prompt("Ingrese SI para solicitar envío o NO para retirar por nuestro local");

  switch (entrada) {
    case "SI":
      alert("Ha seleccionado la opción envío");
      break;

    case "NO":
      alert("Ha seleccionado retirar por nuestro local");
      break;

    default:
      alert("Seleccione una opción correcta");
      break;
  }
} while (entrada !== "SI" && entrada !== "NO");

alert("¡Gracias por su compra!");

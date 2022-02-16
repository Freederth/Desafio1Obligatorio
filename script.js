let cantidadComprada;
let precioTotalVenta = 0;

// sí, sí, sí, ya sé que no debería, pero no puedo evitar usar vectores, estructuras u objetos
function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
}

const producto1 = new Producto("perro cachorro", 12000, 10);
const producto2 = new Producto("perro adulto", 18000, 15);
const producto3 = new Producto("gato cachorro", 17000, 8);
const producto4 = new Producto("gato adulto", 20000, 12);

function listadoProductos() {
  alert(
    "Tenemos 4 tipos de alimentos: \n1. " +
      producto1.nombre +
      "\n2. " +
      producto2.nombre +
      "\n3. " +
      producto3.nombre +
      "\n4. " +
      producto4.nombre
  );
}
function stockInsuficiente(stock) {
  alert(
    "No tenemos stock suficiente de ese producto, puede comprar hasta " +
      stock +
      " unidades"
  );
}
function stockSuficiente(stock, nombre) {
  stock -= cantidadComprada;
  console.log("Quedan: " + stock + " sacos de alimento para " + nombre);
}

function calcularPrecio(precio) {
  precioTotalVenta += cantidadComprada * precio;
}

function compra(stock, nombre, precio) {
  cantidadComprada = parseInt(
    prompt("Ingrese la cantidad que quiere comprar:")
  );
  if (cantidadComprada <= stock) {
    stockSuficiente(stock, nombre);
    calcularPrecio(precio);
  } else {
    stockInsuficiente(stock);
  }
}
function comprarProductos() {
  let nombreCompra = prompt(
    "Ingrese el nombre del producto que quiere comprar:"
  );
  nombreCompra = nombreCompra.toLowerCase();

  if (nombreCompra == producto1.nombre) {
    compra(producto1.stock, producto1.nombre, producto1.precio);
  } else if (nombreCompra == producto2.nombre) {
    compra(producto2.stock, producto2.nombre, producto2.precio);
  } else if (nombreCompra == producto3.nombre) {
    compra(producto3.stock, producto3.nombre, producto3.precio);
  } else if (nombreCompra == producto4.nombre) {
    compra(producto4.stock, producto4.nombre, producto4.precio);
  } else {
    alert("No tenemos ese producto");
  }
  alert("El precio de su compra es de: $" + precioTotalVenta);
}

let cantidadProductosComprados = parseInt(
  prompt("Ingrese la cantidad de productos distintos que quiere comprar")
);
for (let i = 0; i < cantidadProductosComprados; i++) {
  listadoProductos();
  comprarProductos();
}

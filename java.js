//Agregar al carrito
function agregarCarrito() {
    let cantidadCarrito= prompt("Cuantos/as deseas agregar al carrito (escribe 0 para salir)");
let total=""
while(cantidadCarrito!="0"){
    total=total + cantidadCarrito + " ";
    cantidadCarrito=prompt("Cuantos/as deseas agregar al carrito (escribe 0 para salir)");
}
console.log ("Has agregado "+total+"al carrito");
alert("Has agregado "+total+"al carrito")
}
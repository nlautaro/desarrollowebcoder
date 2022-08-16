// DOM

let producto = document.getElementById("productosdiv");
productosdiv.innerHTML= "<h1> Productos</h1>";

let div = document.getElementById("fondopolitica");
console.log(div.innerHTML);
div.style.background="gray";




// ARRAYS PRODUCTOS

function buscarProductos() {

    const listaProductos=["buzo 1","buzo 2","buzo 3","buzo 4","pantalon 1", "pantalon 2"];
console.log(listaProductos[7]);
console.log(listaProductos);
console.log("Cantidad de productos: "+listaProductos.length);
for(let i=0;i<listaProductos.length;i++) {
    console.log("Posición de productos "+i+": " +listaProductos[i]);
}

//join string procutos
let pasadoStringproductos=listaProductos.join(" | ");
console.log(pasadoStringproductos);

// Indexof productos
let buscar=prompt("Ingresa el producto que estas buscando").toLowerCase();
let posicion=listaProductos.indexOf(buscar);
if(posicion != -1) {
    alert(buscar+" se encuentra en la posición numero "+posicion)
} else {
    alert("No se encuentra el producto que estás buscando")
}
}




// ARRAYS BUZOS

function buscarBuzo() {

    const listaBuzos=["buzo 1","buzo 2","buzo 3","buzo 4"];
console.log(listaBuzos[5]);
console.log(listaBuzos);

console.log("Cantidad de productos: "+listaBuzos.length);

for(let i=0;i<listaBuzos.length;i++){
    console.log("Posición de productos "+i+": " +listaBuzos[i]);
}

//push buzos

listaBuzos.push("buzo nuevo");
console.log(listaBuzos);

//join string buzos

let pasadoStringbuzos=listaBuzos.join(" | ");
console.log(pasadoStringbuzos);

// Indexof buzos
let buscar=prompt("Ingresa el producto que estas buscando").toLowerCase();
let posicion=listaBuzos.indexOf(buscar);
if(posicion != -1) {
    alert(buscar+" se encuentra en la posición numero "+posicion)
} else {
    alert("No se encuentra el producto que estás buscando")
}
}




// ARRAYS PANTALONES

function buscarPantalon() {

    const listaPantalones=["pantalon 1", "pantalon 2"];
console.log(listaPantalones[3]);
console.log(listaPantalones);
console.log("Cantidad de productos: "+listaPantalones.length);
for(let i=0;i<listaPantalones.length;i++) {
    console.log("Posición de productos "+i+": " +listaPantalones[i]);
}

//push pantalones
listaPantalones.push("pantalon nuevo");
console.log(listaPantalones);

//join string pantalones
let pasadoStringpantalones=listaPantalones.join(" | ");
console.log(pasadoStringpantalones);

// Indexof pantalones
let buscar=prompt("Ingresa el producto que estas buscando").toLowerCase();
let posicion=listaPantalones.indexOf(buscar);
if(posicion != -1) {
    alert(buscar+" se encuentra en la posición numero "+posicion)
} else {
    alert("No se encuentra el producto que estás buscando")
}
}




// AGREGAR AL CARRO

function agregarCarrito() {
    let cantidadCarrito= prompt("Cuantos/as deseas agregar al carrito (escribe 0 para salir)");
let total=""
while(cantidadCarrito!="0"){
    total=total + cantidadCarrito + " ";
    cantidadCarrito=prompt("Cuantos/as deseas agregar al carrito (escribe 0 para salir)");
}
console.log ("Has agregado "+total+"al carrito");
alert("Has agregado "+total+"al carrito")}
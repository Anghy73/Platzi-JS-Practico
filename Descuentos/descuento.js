// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function calcularDescuento() {
  const inputPrecio = document.getElementById("inputPrecio");
  const valorPrecio = inputPrecio.value;

  // const inputCupon = document.getElementById("inputCupon");
  // const valorCupon = inputCupon.value;
  // const cupon = 15;

  const inputDescuento = document.getElementById("inputDescuento");
  const valorDescuento = inputDescuento.value;

  const resultado = calcularPrecioConDescuento(valorPrecio, valorDescuento);
  // const resultadoC = calcularPrecioConDescuento(valorPrecio, cupon);

  const resultadoP = document.getElementById("resultadoPorcentaje");
  if (true) {
    resultadoP.innerHTML = resultado;
  }
  // alert(calcularPrecioConDescuento(valorPrecio, valorDescuento));
}





// document.getElementById("prueba").innerHTML = "<h1>hola como estas?</h1>";
// document.getElementById("pruebatwo").innerText = "<h1>hola que tal?</h1>";

// arrow function
// const precioDescuento = (precio, descuento) => (precio * (100 - descuento)) / 100;

// console.log("El precio original es: " + precioOriginal);
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });
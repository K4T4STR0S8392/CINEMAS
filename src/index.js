import { teatros } from "./teatros";
import { peliculas } from "./carteleras";
import { registrosdeVentas } from "./ventas";

var usuario = prompt(`Ingrese su usuario: `);
var contraseña = prompt(`Ingrese su Contraseña: `);

if (usuario === "admin" && contraseña === "1234") {
  alert("¡Credenciales correctas!");

  //Inicio Registro de Ventas

  const availableTeatros = Object.keys(teatros);
  const availablePeliculas = Object.keys(peliculas);
  const availableRegistrosdeVentas = Object.keys(registrosdeVentas);

  var targetTeatro = prompt(
    `¿En que teatro quiere comprar sus boletas? Elija entre: ${availableTeatros}`
  );

  if (availableTeatros.includes(targetTeatro)) {
    var targetPelicula = prompt(
      `¿Para que película quiere comprar sus boletas? Elija entre: ${availablePeliculas}`
    );
    var teatro = teatros[targetTeatro];
  }
  if (availablePeliculas.includes(targetPelicula)) {
    var quantityAsText = prompt(`¿Cuántas boletas quiere comprar?`);
    var quantity = parseInt(quantityAsText);
    var label =
      quantity > 1 ? teatro.ticketPluralLabel : teatro.ticketSingularLabel;
  }
  if (availablePeliculas.includes(targetPelicula) && quantity > 0) {
    var localidad = prompt(
      `¿En que localidad quiere comprar sus boletas? Elija entre: general o preferencial`
    );
  }
  if (quantity > 0 || localidad === "general" || localidad === "preferencial") {
    var promocion = prompt(
      `¿Elige una de nuestras promociones? Elige entre: promoCineco, promoMiercoles, promoHorario *Solo es válida una `
    );
    if (
      promocion !== "promoCineco" &&
      promocion !== "promoMiercoles" &&
      promocion !== "promoHorario"
    ) {
      alert(`Su selección de promoción no es válida, intente de nuevo.`);
    }
  } else {
    alert(`Su selección no es válida, intente de nuevo.`);
  }

  //Aquí empezarían las validaciones de las promos

  switch (localidad) {
    case "general":
      var precioLocalidad = teatro.unitPriceGeneral;
      var boletasDisponibles = teatro.availableBoletasGen;
      break;
    case "preferencial":
      var precioLocalidad =
        teatro.unitPriceGeneral * teatro.unitPricePreferencial;
      var boletasDisponibles = teatro.availableBoletasPref;
      break;
    default:
      console.log(`No se eligió una localidad`);
  }

  switch (promocion) {
    case "promoCineco":
      var promoAplicada = teatro.descPriceCineco;
      break;
    case "promoMiercoles":
      var promoAplicada = teatro.descPriceMiercoles;
      break;
    case "promoHorario":
      var promoAplicada = teatro.descPriceAm;
      break;
    default:
      console.log(`No se eligió una promoción`);
  }

  console.log(
    `Antes de la última venta en ${targetTeatro} habían ${boletasDisponibles} ${label} en ${localidad} disponibles para ${targetPelicula}.`
  );

  var total = quantity * precioLocalidad * promoAplicada;
  boletasDisponibles = boletasDisponibles - quantity;

  if (promocion !== null) {
    var venta = `Registro de la última venta realizada: Cantidad: ${quantity} ${label} - Película: ${targetPelicula} - Cinema: ${targetTeatro} - Localidad: ${localidad} - Promoción: ${promocion}`;
    alert(
      `El precio a pagar por ${quantity} ${label} para ${targetPelicula} en ${targetTeatro} es: $ ${total}`
    );
  } else {
    alert(`Transacción no válida`);
  }

  console.log(venta);
  console.log(`Estado de Ventas:`);
  console.log(registrosdeVentas);

  for (let i = boletasDisponibles; i >= 0; i--) {
    if (i !== 0) {
      console.log(
        `Después de la última venta en ${targetTeatro} quedaron ${boletasDisponibles} ${label} en ${localidad} disponibles para ${targetPelicula}.`
      );
      alert(`¡Gracias por su compra!`);
      break;
    }
    console.log(
      `Después de la última venta en ${targetTeatro} quedaron ${boletasDisponibles} ${label} en ${localidad} disponibles para ${targetPelicula}.`
    );
    alert(`¡Se agotaron las boletas!`);
  }

  //Final Registro de Ventas
} else {
  alert("Verifique sus credenciales.");
}

//NOTAS MIL:

/*
function regVenta(
  quantity,
  targetPelicula,
  localidad,
  targetTeatro,
  promocion
) {
  this.cantidadDeBoletas = quantity;
  this.targetPelicula = targetPelicula;
  this.localidad = localidad;
  this.targetTeatro = targetTeatro;
  this.promoAplicada = promocion;
}
regVenta();

var nuevaVenta = new regVenta(
  quantity,
  targetPelicula,
  localidad,
  targetTeatro,
  promocion
);
console.log("Última venta registrada: " + regVenta);

nuevaVenta();

var total = 

switch (promocion) {
  case "promoCineco":

  case "promoMiercoles":
    //Pus OK. Lel!!
  case "promoHorario":
    //Pus OK. Lel!!
    default:
    //Compre la Cineco mano!! XD
}


const quantityAsText =
  availableTeatros.includes(targetTeatro) ||
  availablePeliculas.includes(targetPelicula)
    ? prompt(`¿Cuántas boletas quiere comprar?`)
    : alert(`Su selección no es válida, intente de nuevo.`);

    
const quantityAsText = availableTeatros.includes(targetTeatro)
  ? prompt(`¿Cuántas boletas quiere comprar?`)
  : alert(`El teatro que ha elegido no es válido, intente de nuevo.`);

  if (quantityAsText > 0 || quantityAsText === undefined) {
  const quantity = parseInt(quantityAsText);
} else {
  alert(`Digite un número de boletas válido e intente de nuevo.`);
}


if (
  quantityAsText > 0 ||
  quantityAsText === undefined ||
  quantityAsText === null
) {
  const quantity = parseInt(quantityAsText);
} else {
  alert(`Digite un número de boletas válido e intente de nuevo.`);
}


if (availableTeatros.includes(targetTeatro)) {
  const teatro = teatros[targetTeatro]; //Reserva el valor capturado del teatro en que el usuario comprará.
  const quantityAsText = prompt("¿Cuántas boletas quiere comprar?"); //Se pide digitar el numero de boletas a comprar.
  const quantity = parseInt(quantityAsText); //Pasa el tipo de dato de tipo string a tipo number.
} else {
  alert(`El teatro que ha elegido no es válido, intente de nuevo.`);
}

//function validarTeatro(targetTeatro) {
//  return targetTeatro === 1 ? 1 : n * calculateFactorial(n - 1);
//}

function multiplicar(a, b) {
  var resultado = a * b;
  return resultado;
}

console.log("Esto es un resultado " + multiplicar(3, 5));

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar("Juan");

function solution(valor) {
  console.log(typeof valor);
}

solution(true);
*/

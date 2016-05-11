// --- constructor ---
function Vehiculo (nombre, ruedas) {
  this.nombre = nombre;
  this.ruedas = ruedas;
}
// --- metodo ---
Vehiculo.prototype.costoCambioRuedas = costoCambioRuedas;

// --- constructor con llamada al constructor padre ---
function Auto(nombre, ruedas, marca) {
  Vehiculo.call(this, nombre, ruedas);
  this.marca = marca;
 }
// --- herencia de prototipo ---
Auto.prototype = Object.create(Vehiculo.prototype);
// --- referencia a constructor propio ---
Auto.prototype.constructor = Auto;
// --- metodo propio ---
Auto.prototype.costoCambioAceite = costoCambioAceite;

function costoCambioAceite() {
  return 180;
}
function costoCambioRuedas() {
  return this.ruedas * 100;
}


var moto = new Vehiculo('Pistera', 2);
var auto = new Auto('Fitito', 4, 'Fiat');

var mensaje = 'El costo del cambio de ruedas ';

console.log(mensaje + 'de un ' + auto.nombre + ' es $' + auto.costoCambioRuedas());
console.log(mensaje + 'de una ' + moto.nombre + ' es $' + moto.costoCambioRuedas());

console.log('Marca ' + auto.marca + ', cambio de aceite: $' + auto.costoCambioAceite());

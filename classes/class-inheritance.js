// --- definicion de clase ---
class Vehiculo {
  constructor(nombre, ruedas){
    this.nombre = nombre;
    this.ruedas = ruedas;
  }
  // --- metodo ---
  costoCambioRuedas() {
    return this.ruedas * 100;
  }
}

// --- clase con herencia ---
class Auto extends Vehiculo {
  constructor(nombre, ruedas, marca){
    // --- llamada al constructor padre ---
    super(nombre, ruedas);
    this.marca = marca;
  }
  // --- metodo propio ---
  costoCambioAceite(){
    return 180;
  }
}


var moto = new Vehiculo('Pistera', 2);
var auto = new Auto('Fitito', 4, 'Fiat');

var mensaje = 'El costo del cambio de ruedas ';

console.log(mensaje + 'de un ' + auto.nombre + ' es $' + auto.costoCambioRuedas());
console.log(mensaje + 'de una ' + moto.nombre + ' es $' + moto.costoCambioRuedas());

console.log('Marca ' + auto.marca + ', cambio de aceite: $' + auto.costoCambioAceite());

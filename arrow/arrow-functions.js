var createGreeting = function(message, name){
  return message + name;
}

var arrowGreeting = (message, name) => message + name;

///////////////////////////////////////////////////////

var cuadrado = x => x * x;

var persona = (nombre, apellido) => (
  {
    nombre: nombre,
    apellido: apellido
  }
);

var foo;

var fooBar = () => {
  foo = 'bar';
};

///////////////////////////////////////////////////////
var messager = function (message, handler) {
  handler(message);
}

var dog = {
  name: 'Coraje',
  bark: function(){
    var that = this;
    messager('guau guau!', function(message) {
      console.log(message + ' ~ ' + that.name)
    });
  }
}

dog.bark();


var cat = {
  name: 'Tom',
  meow: function(){
    messager('meow meow!', (message) => console.log(message + ' ~ ' + this.name));
  }
}

cat.meow();

///////////////////////////////////////////////////////

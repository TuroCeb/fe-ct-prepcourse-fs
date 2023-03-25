/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método (dentro del constructor) llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.    // Tu código:
   class Usuario {
      constructor(usuario, nombre, email, password) {
         this.usuario = usuario;
         this.nombre = nombre;
         this.email = email;
         this.password = password;
         this.saludar = function() { //function se puede escribir con arrow function
            //Es decir: function() {} Es igual a () => {}
            return ('Hola, mi nombre es ' + this.nombre);
         }
      }
      
   }
   //var crearUsuario = new Usuario('k1', 'juan', 'juan@j.com', '123cae');
   //crearUsuario.saludar(); 
   return Usuario;  
}

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   //Usuario.prototype.saludar = function () {
   Usuario.prototype.saludar = function () {
       return "Hello World!";
   };
}

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   //ESTE EJERCICIO DEMANDA RECORDAR CONCEPTOS ANTERIORES
   String.prototype.reverse = function () {
      return this.split("").reverse().join("");
   //Esta líena anterior indica que con el this trabajo con la cadena de caracteres del
   //String. Luego al this le hago un split que convierte esa cadena en array.
   //con punto puedo hacer otra acción con el this. Así que siendo un array le hago 
   //un reverse que es un método que invierte el orden de los elementos del array.
   // Así, con los elementos invertidos convierto con join el array de nuevo en string.
   } 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};

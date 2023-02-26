/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:

   //Creo un objeto con dos propiedades. Estas propiedades contienen los valores que
   //la function recibe en sus parámetros.
   var nuevObjeto = {nombre: nombre , edad: edad};
   nuevObjeto.meow = function () {
      return('Meow!');
   }
   return nuevObjeto;
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   //HAY TRES MANERAS DE RESOLVER ESTE EJERCICIIO, ASÍ COMO EL PRIMERO. 
   //VER EL VIDEO DE RESOLUCIÓN DE HOMEWORK MOD 06

   var objetoNuevo = { //Los valores de las propiedades son los valores entregados por la function.
      nombre: nombre, 
      email: email, 
      password: password}
   
   return objetoNuevo;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:

objeto[propiedad] = null; //El valor no la propiedad no va entre corchetes por ser palabra 
//reservada.
return objeto;

}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   // LOS PARAMETROS DE LA FUNCTION, QUE PARA ESTE CASO SON VARIABLES, CONTIENEN, 
   // EL PRIMERO EL NOMBRE DEL OBJETO,Y EL SEGUNDO EL NOMBRE DE LA PROPIEDAD
   // PROPIEDAD QUE CONTIENE UNA FUNCTION
   objeto[metodo](); //AQUÍ SE INVOCA LA FUNCTION DENTRO DE LA PROPIEDAD DEL OBJETO RESPECTIVO
   // Recuerdese que objeto y metodo son parámetros del a function principal que contienen
   // el primero el nombre del objeto y el segundo el nombre de la propiedad que contiene
   // la function que se debe invocar.
};


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:

   //Opción 1. Se realiza la operación tilizando Dot.Notation
   /**
   var Resultado = objetoMisterioso.numeroMisterioso * 5;
   return Resultado;
   */

   // Opción 2 Se realiza la operación tilizando Bracket.Notation
  // var Resultado = objetoMisterioso['numeroMisterioso'] * 5;
   //return Resultado;

   // Opción  Se realiza la operación tilizando Bracket.Notation pero más optimo.
   return objetoMisterioso['numeroMisterioso'] * 5;
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar True. Caso contrario, False.
   // Tu código:
   if (objetoUsuario.email) { //Solo con esta consulta puedo saber si el valor dentro de
      //la propiedad 'email' es distinto de null y distinto de undefined (no tiene valor definido)
      //Se puede la siguiente línea de if aunque es más larga
      //if (objetoUsuario.email != null && objetoUsuario.email != undefined)
      return true;
   } else {
      return false;
   }
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar True. Caso contrario, False.
   // Tu código:

   //hasOwnProperty retorna una booleano (true or False)
   var valor = objeto.hasOwnProperty(propiedad);
   //Si el objeto tiene la propiedad que entrega el parámetro de la function, entonces true
   // si no, entonces false en la variable valor
   return valor; //Retorna el contenido de la variable valor
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar True. Caso contrario, False.
   // Tu código:
  if (objetoUsuario.password === password) { //Aquí se pregunta si la propiedad password del 
   //objetoUsuario es estrictamente igual (en su contenido) al contenido del parámetro 
   //password de la function.
   return true;
  } else {
   return false;
  }
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;

}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   //con push se anexa al final del array amigos del objetoUsuario el contenido del parámetro
   // nuevoamigo de la function. 
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como True.
   // Retornar el arreglo.
   // Tu código:
   for (var i=0; i<objetoMuchosUsuarios.length; i++ ) {
   objetoMuchosUsuarios[i].esPremium = true;
   }
   return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var sumarLikes = 0
  for (i=0; i<objetoUsuario.posts.length; i++) {
     sumarLikes = sumarLikes + objetoUsuario.posts[i].likes; 
  }
  return sumarLikes;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final. [precioFinal es una propiedad del "objetoProducto"]
   //RETORNAR objetoProducto.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // LA DESCRIPCIÓN DEL EJERCICIO ESTÁ CON ERRORES. 
   // Tu código:
   
   
   objetoProducto.calcularPrecioDescuento = function () {
      var descuentoProducto = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
      objetoProducto["Precio final"] = objetoProducto.precio - descuentoProducto;
       return objetoProducto["Precio final"];
   }
   return objetoProducto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};

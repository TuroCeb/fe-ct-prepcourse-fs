/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   return nombre[0].toUpperCase() + nombre.slice(1);
   //JS trata a los string como array, por ello se puede indicar una accíon sobre una letra particular en un string
   //a partir de su posición. Aquí se realiza la acción sobre la letra en la posición [0] del string nombre.
   //toUpperCase() convierte en mayuscula la letra de una posición o las letras de un string completo
   //slice(1) indica que se imprimirá el estring desde la posición (1), es decir, desde la segunda letra.
   // De tal manera que el return retorna la concatenación de dos acciones en el string
   // La primer es el cambio de la primera letra del string en mayuscula y la segunda es la impresión des string
   //a partir de la segunda letra.
   }

function invocarCallback(cb) { 
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotornar nada.
   // Tu código:
   cb(); //Aquí se invoca el callback. Los paréntesis son necesarios para la invocación.
   //Se trata aquí de una invocación de una definición, pues por ello no se necesita retornar nada.

   //En lo que sigue se deja ver que ocurre internamenta para poder invocar el Callback.
   //En la function invocarCallback(cb), esta cb es una variable que se llena con la definición que se le asigna.
   //Internamente el test haría algo así:
   
   //function saludar () {
   //console.log("Hola");
   //}
   //invocarCallback(saludar)
   //Con estás últimas cuatro líneas de código comentadas se puede ver que la última línea
   //le pasa a la function invocarCallback la definición (el nombre de la function que se va
   //a llamar). De esta manera en la function invocarCallback la variable cb se llena con la
   //definición de la function y, por tanto, cb() ejecuta la function saludar.
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2); //Es aquí donde el callback llama a la function correspondiente
   //Esto ocurriría detras en el test para evaluar este ejercicio
   //function suma(num1, num2){ // se crea una function suma
   //   return num1 + num1;
   //}
   //funcion resta(num1, num2) { // Se crea una function resta
      //retur num1 - num2;
   //}

   //let resultado = operacionMatematica(6, 3, suma) //se llama la function operacionMatemática y se le asigna al callback
                                                      // la function que llamará (suma o resta)
                                                      //Aquí no se llama a la function suma o resta sino que se le asigna
                                                      //la function al callback para que el la llame luego en la 
                                                      //function operaciónMatematica
                                       
   //console.log(resultado);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   // opción 1
   var resultado = arrayOfNumbers.reduce((numero, acumulador) => { //El reduce itera el array y regresa un valor final.
      // En esta iteración se utilizan dos parámetros (pero pueden ser más).
      //El parámetro numero contendrá el número del índice donde se ponga el array, iniciando en 0
      //EL parámetro acumulador inicia en cero y se le va sumando cada número del parámetro numero 
      // Un array [1, 2, 3, 4] retornará a la variable resultado en número 10
      return acumulador + numero; // Es aquí donde se realiza la operación de acumulación (sumatoria) de numeros
   }) 
   cb(resultado); 


   //Opción 2
   /*
   var suma = 0;
   for (var i = 0; i < arrayOfNumbers.length; i++) {
      suma = suma + arrayOfNumbers[i];
   }
   cb(suma); **/
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   //Opción1
  // array.forEach((elemen) => cb(elemen));

   //Opción2
   // For of devuelve el elemento
   // For in devuelve el índice
   for (var i in array) {
      cb(array[i]);
   }
}


function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

   //Opción 1 (Más optimo)
   
   var nuevoArray = []; //Se crea un nuevo arreglo vacío.
   nuevoArray = array.map((elemen) => cb(elemen)); //el map iterra el array y se le pasa el elemento de este en cada índice 
   //La acción en cada iteración es la ejecución del callback pasandole como parámetro el elemento del array.
   //en nuevoArray se llena con el resultado de la ejecución del callback. La ejecución de cb se pushea en el nuevo array.
   return nuevoArray;
   

   //Opción 2
   /*
   let nuevoArreglo = [];
   array.forEach ((element) => nuevoArreglo.push(cb(element)));
   return nuevoArreglo
   **/
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   //El filter filtra un arreglo a partir de una condición.
   //El filter retorna un nuevo arreglo con los elementos del arreglo inicial que cumplan la condición.
   let nuevoArreglo = arrayOfStrings.filter((elemento) => elemento.charAt(0) === "a");
   return nuevoArreglo;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};

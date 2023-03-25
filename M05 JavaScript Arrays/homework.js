/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) { // el array que me pasan por parámetro es el
   // que está entre () en la primera línea. Es decir: array.
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
return array[0]; //retorna el primer elemento (es decir, el elemento en posición 0)
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1]; //Pero esto más que entregar el último elemento 
   //entrega el número de la última posición
  // return array.pop(); // Esta código retorna el último elemento del array, pero
   //además lo elimina.
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar otro arreglo con los elementos incrementados en +1.
   // Tu código:
   //var masUno = array.map((num) => {return num+1}); //Aquí se crea otro arreglo llamado masUno
   //Al arreglo array se le hace un map para que recorra todos los números en él
   //y parado en cada número a este se le suma 1. El resultado de ese recorrido es el array
   //masUno
   // return masUno;

  /**  
   //OPCIÓN 2
   for (i = 0; i < array.length; i++) {
      array[i] += 1;
   }
   return array;
  */

  //OPCIÓN 3
for (let i in array) { // Este for se ejecuta y la variable i se incrementa tanta veces como  
   //posiciones tega en array.
   array[i] +=1; // cada vez que se ejecuta el for el numero de la posición en el array se 
   //incrementa en 1.
}
return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   //PRIMERA OPCIÓN
   //array.push(elemento); // añade uno o más elementos al final de un array 
                           //y devuelve la nueva longitud del array.
   //return array;

   //OTRA OPCION pero con dudas mías OJO OJO
   array[array.length] = elemento; //como los array no tienen (al parecer) límite de elementos
   //entonces se puede generar un push siempre en el array; es decir, se le puede agregar siempre
   //un nuevo elemento. En este ejercicio parece que no se le agrega un nuevo elemento, sino que
   //se sobreescribe un elemento sobre el último que ya está [Hay que probar].
   return array;

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento); //Aquí se debe agregar el elemento al ppio del array y luego retornar.
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' '); //Aquí se puede retornar de una vez el array con la
   //ejecución del join (que une todos los elementos en el array, pero con espacio entre ello).
   // Por eso hay un ensacio entre ' '
   // Tambien se podría enviar el resultado del join a una variable-array
   // y retornar la variable.

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:

   //Opcion 1 (más optima... Eficiente)
   //var valor = array.includes(elemento); //La variable valor se llena con el boolenao
   // que devuelve el includes
   //return valor;


   /*
   //opción 2
   if (array.includes(elemento)) { // Aquí se pregunta: Si el elemento está en el array
      return true; //Retorna true
   } else {
      return false;
   }
   */

   //Opción 3
   let ele1 = array.find((e)=> e === elemento) // Se crea la variable ele1. Se realiza un find
   // del array para que compare cada elemento (e) que contiene con el elemento presentado
   // por parámetro. Si en el recorrido encuentra un elemento que sea igual al pasado por 
   // parámetro, entonces se para el find y llena la variable con el elemento encontrado 
   if (ele1) { //Aquí se pregunta si la variable esta llena. Si sí, entonces true....
      return true;
   } else {
      return false;
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   
   /*
   //Opción 1
   var suma = 0;
   for (i=0; i < arrayOfNums.length; i++) {
         suma = suma + arrayOfNums[i];
         // Lo que se suma es el contenido de la posición de array, la posición dada por i
   }
   return suma;
   */

   //Opción 2
   let nuevo = arrayOfNums.reduce((A, B) => A + B, 0)
   // El método reduce permite la acumulación o sumatoria (como un ciclo) del contenido del array.
   //A es el acumulador y B es el contenido de cada posicion del array. = 0 es el valor inicial
   //del acumulador.
   //Así, si el array tiene los número [1, 2, 3] entonces B contendría primero 1, luego
   //2 y luego 3. Por su lado A acumularia la sumatoria de lo contenido por B. es decir 6
   return nuevo;
}


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Iterar: Repetir el ingreso al array tantas veces como elementos tenga.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;
   for (i=0; i < resultadosTest.length; i++) {
         suma = suma + resultadosTest[i];
   }
   var resultado =  (suma / resultadosTest.length);
   return resultado;

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   //Opción 1
   /*
   var numMayor = 0;
   for (i=0; i < arrayOfNums.length; i++) {
       if (numMayor < arrayOfNums[i]) {
            numMayor = arrayOfNums[i]
       } 
   }
   return numMayor;


         */
   //Opción 2
   // Este ejercicio es como el de arriba, pero mucho más resumido en código
   // Es como si el código del for se resumiera
   var numMayor = 0;
   for (var i of arrayOfNums) { // Aquí la variable i, cada ingreso al ciclo toma el valor
                              // del contenido de la posición en la cual está el array, el cual,
                              // a su vez, cambia su posición en cada ingreso al ciclo.
      if (i > numMayor) numMayor = i;
   }
   return numMayor;

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var mulTodArgu = 1;
   if (arguments.length === 0) { //Aunque no se crea el arreglo arguments, aquí en el código
      return 0; //se utiliza como ya creado
   } // Con punto length se pregunta si tiene 0 argumentos o si tiene 1.
   if (arguments.length === 1) {
      return arguments[0]
   } else {
      for (i=0; i < arguments.length; i++) { // con el for se recorre el array
      mulTodArgu = mulTodArgu * arguments[i]; // y se multiplican todos los argumentos  
      }
      return mulTodArgu;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   /* //Opción 1
   var cantElemen = 0
   for (i=0; i < array.length; i++) {
      if (array[i] > 18) {
         cantElemen = cantElemen + 1;
      } 
   }
   return cantElemen;
   */


      //Opción 2
      var cantElemen = 0; //Esta varible se inicia en cero
      for (var num of array) { //Este es un ciclo for resumido, el cual indica que se 
         //recorrerá el array de tal manera que la variable num tendrá el valor de la 
      // posición de array. Valor que ira cambiando tantas veces como elementos tenga el array
         if (num > 18) cantElemen = cantElemen + 1;
         //Si la variable num tiene en su momento un valor mayor a 18, entonces la variable
         //cantElemen aumentará su valor en 1.
      }
      return cantElemen; //Se retorna la variable con el número de elementos mayores a 18 del
      //array    


     /* //Opción 3 ...... Código muy eficiente.

   let nuevo = array.filter ((elemento) => elemento > 18);
   //la funcion filter permite hacer un recorrido por el array y filtrar su contenido de 
   //acuerdo con una condición. Aquí: que el elemento sea menor a 18. Aquello que cumple
   //con la condición llena el array nuevo.
   return nuevo.length; //Se retorna la cantidad de elementos del array nuevo.

  */
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   /*
   //Opción 1
   //Hay que tener presente que no se trata de un array, sino de una varible que cambia
   //su contenido
   if (numeroDeDia === 1 || numeroDeDia === 7) 
      return "Es fin de semana"
   else
      return "Es dia laboral"
   */

   //Opción 2
   //numeroDeDia es una variable, no un array
   switch (numeroDeDia){  //La declaración switch evalúa una expresión (variable), 
      //comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones
      // asociadas a ese case, así como las declaraciones en los case que siguen.
      case 1:
         return "Es fin de semana"
      case 7:
         return "Es fin de semana"
      default:
         return "Es dia laboral"
   }

   /* 
   // Opción 3
   //Este no funciona porque ese recorre numeroDeDia como si fuera un array
   // pero es una varible.
   for (i = 0; i < numeroDeDia.length; i++) {
      if (numeroDeDia[i] === 7 || numeroDeDia[i] === 1) {
         return "Es fin de semana"
      } 
      else {
          return "Es dia laboral"
      } 
      } */
   }


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   var aString = num.toString(); //Aquí el contenido numérico de la varible num se pasa a string
   var primerNum = aString.charAt(0); //Aquí se llena la variable primerNum con el 
   //número (caracter) que se encuentra en la primera posicion (posición 0) del string
   if (primerNum === '9') { //si el contenido de la variable primer número es 9....
      return true;
   } else {
      return false;
   }
}


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   
   var numComp = array[0];
   for (var num of array) { //Recorre el array por todas sus posiciones.
      // la variable num toma cada vez el valor que tiene el array en la posición donde está
      // parado el array
      if (numComp !== num) { // Si alguno de los numeros que contiene num es diferente
         // al contenido de de numComp que es el primer número del array, entonces false
         return  false;
      } 
   }
   return true; 

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:


  
   var nuevoArray = [];
   for (i=0; i < array.length; i++) {
      if (array[i] === "Enero") {
         nuevoArray.push("Enero");
      } else {
         if (array[i] === "Marzo") {
          nuevoArray.push("Marzo");
         } else {
            if (array[i] === "Noviembre") {
               nuevoArray.push("Noviembre");
            }
         }
      }
   }
   if (nuevoArray.length !== 3) {
      return "No se encontraron los meses pedidos"
   } 
   
   return nuevoArray;
   


   /** 
    //Yo encuentro bien la lógica de este ejercicio, pero no me pasó
   var nuevoArray = [];
   for (i=0; i < array.length; i++) {
      if (array[i] === "Enero") {
         nuevoArray.push("Enero");
      } else {
         if (array[i] === "Marzo") {
          nuevoArray.push("Marzo");
         } else {
            if (array[i] === "Noviembre") {
               nuevoArray.push("Noviembre");
            }
         }
      }
   }
   for (v=0; v < nuevoArray.length; v++) {
         if (nuevoArray[v] === "Marzo") {
            var primero = 1;
         } else {
            var primero = 0;
         }
         if (nuevoArray[v] === "Noviembre") {
            var segundo = 1;
         } else {
            var segundo = 0
         }
         if (nuevoArray[v] === "Enero") {
            var tercero = 1;
         } else {
            var tercero = 0;
         }
   if (primero === 1 && segundo === 1 && tercero === 1) {
      return nuevoArray;
   } 
      return "No se encontraron los meses pedidos";
   
}
**/

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaArray = [];
   for (v=0; v < 11; v++) {
      tablaArray.push(6 * v);
   }
   return tablaArray;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
  

   //Opción 2 [Más optimo]
 let arrayMayorcien = array.filter (dato => dato > 100);
   return arrayMayorcien;

   // Opción 1 
   /**  
   var arrayMayorcien = [];
   for (v=0; v < array.length; v++) {
      if (array[v] > 100) {
         arrayMayorcien.push(array[v]);
      }
   }
   return arrayMayorcien;
   */
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   var nuevoArreglo = []
   for (v = 0; v < 10; v++) {
      num = num + 2;
      nuevoArreglo.push(num);
      if (num === v) {
         break; // El break se debe ejecutar dentro del for ya que lo buscada en interrumpir
         //la ejecución
      } 
   }
      if (num === v) { // Al salir del for este if pregunta si se ejecuto el break o no
         // La pregunta por el break se realiza al buscar la igualdad entre las variables 
         //num y v
         return "Se interrumpió la ejecución";
      } else { // si esa igualdad no se dio, entonces el for se ejecuto completo y así se 
         //retorna el nuevo arreglo.
            return nuevoArreglo; // el return del array nuevo no se puede realizar en el if
            // del break, pues el return (al parecer) también para la ejecución, de tal modo que
            // sin cumplirse la condición para el brak, se cancelaría el for.
         }
  }

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.    // Tu código:
   var nuevoArreglo = []
   for (v = 0; v < 10; v++) {
      if (v === 5) {
         continue;
      } else {
        num = num + 2;
      nuevoArreglo.push(num); 
      }
}
return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

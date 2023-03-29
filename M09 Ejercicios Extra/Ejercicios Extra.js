/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // El Obejto tiene la clave D con valor 1, la clave B con valor 2, la clave C con valor 3
   // Tu código:

   let newArray = []; //Creo un arreglo vacío.
   for (var clave in objeto) { //Con un ciclo for in puedo pasar por cada clave del objeto 
      newArray.push([clave, objeto[clave]]) //cada vez que el for se para en una clave le hace un push al newArray
      // El push le crea un arreglo que contiene tanto la clave del objejto como su valor . 
   }
   return newArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arrayDeLetras = string.split("") //Se convierte el estring en array con el método split.
   let objeto = {} //Aquí se crea un objeto vacío.
   arrayDeLetras = arrayDeLetras.sort() //El método sort ordena en array e orden alfabético.
   arrayDeLetras.forEach(Letra => {//Aquí se recorre el arrayDeLetras.
      if (objeto.hasOwnProperty(Letra)) {//En cada letra del array se pregunta si el objeto tiene la propiedad 
         //con el nombre de esa letra
         objeto[Letra] = objeto[Letra] + 1 //Si tiene la propiedad entonces al valor le lleva lo que tiene + 1
      } else {
         objeto[Letra] = 1 //De lo contrario, si no tienen la propiedad, entonces se crea la propiedad y se le 
         //asigna un valor 1 para empezar a contar si encuentra más letras iguales a la que nombra la propiedad.
      }
   }); 
 return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
  var upper = ""; // Se crea la variable string upper(mayuscula)
  var lower = ""; // Se crea la variable string lower(minuscula)
  for (let i=0; i < string.length; i++) {//se hace un for par recorrer el string (como si fuera array)
      if (string[i] === string[i].toUpperCase()) { // Si el string en su posicion es igual a una mayuscula
         upper = upper + string[i]; // Entonces llevame a la variable upper lo que tiene mas esa letra del string
         } else {
         lower = lower + string[i]; //De lo contrario llevá la letra a la variable lower
         }
   }
   return upper + lower; //Retorna el string (En este caso la suma de los dos estring, el de mayusculas + minusculas)

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
let arr = frase.split(" "); //La frase se convierte en un array donde 
                           //cada palabra será un elemento del array. Esto usando el split con un
                           // espacio entre las comillas.
let mirror = ""; //Se crea una variable string vacía.
for (let i = 0; i < arr.length; i++) {// aquí se recorre el array. Es decir, cada palabra de la frase
   let palabra = arr[i]; //A una variable palabra se llena con la palabra de la posición del array
   let palabraEspejo = ""; //Se crea un string vacío
   for (let j = palabra.length-1; j >= 0; j--) { //Este ciclo for anidado recorre el array desde su 
   //última posición hasta la primera (la posición 0). Es decir, recorre todas las letras de la palabra
   palabraEspejo += palabra[j] //El estring vacío se incia a llenar con las letras de la palabra en espejo
   }
   mirror += palabraEspejo + " "; //El estring vacío mirror dentro del primer for se empieza a llenar 
   //con la palabra espejo con la cual se llenó el string palabraEspejo. Tendrá al final todas las pala
   //con las cuales se llena cada vez palabraEspejo.
}
return mirror.trim(); //El método trim elimina los espacios en varios extremos del string
}


function capicua(numero) {

   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let numeroInvertido = numero.toString().split('').reverse().join('');
   //En la línea anterior a la variable numeroInvertido se le pasa primero el numero como string, 
   //luego el string se convierte en array, luego el array se le aplica un reverse que invierte los elementos. 
   //Luego join que convierte el array de nuevo en string. (Hay que tener claro que en esa línea las acciones sobre 
   //la variable numero son cargadas a numeroInvertido, mientras que numero sigue siendo un número, 
   //por ello en la siguiente línea hay que pasar a la variable numero a string)
   if (numeroInvertido === numero.toString()) {//Ya que numeroInvertido es otra vez string gracias al join
      //Entonces numero debe ser también string al momento de hacer el if
      return "Es capicua";
   } else {
      return "No es capicua";
   }

}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   //Opción1
   //string.replace(searchValue, replaceValue). el replace (remplazar) tiene dos parámetros
   //el parámetro a buscar y el parámetro de remplazo. El replace regresa un nuevo string con los cambios.
   //return string.replace("abc", ""); //remplace las letras abc por espacio vacío, siempre y cuando estén las
                                    //letras juntas
    //return string.replace(/[abc]/g, ""); //Aquí se remplaza las letras abc de manera global. Es decir, sin importar
                                          //si en el string estan juntas o separadas, y si están repetidas 
                                          // en varios lugares 


   //Opción2
   let result = "";
   for (let i = 0; i < string.length; i++) {
      if (string[i] != 'a' && string[i] != 'b' && string[i] != 'c') {
         result += string[i];
      }
   }
   return result;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var string; //Se crea una variable para guardar temporalmente el contenido del índice que se va a cambiar
   for (i = 0; i < arrayOfStrings.length - 1; i++) { //Se hace un for para que recorra el array
       for (e= i+1; e < arrayOfStrings.length; e++) { //Parado en el un índice (se inicia el 0 con el primer for)
         // se hace otro for para que que recorra el array desde el índice 1 y así comparar el contenido del 
         //índice 0 con cada uno de los demás índices del array 
           if  (arrayOfStrings[i].length > arrayOfStrings[e].length) {//La comparación debe incluir el length, porque
            //lo que se compara es la lóngitud del string y no un número. Si el string tiene mayor longitud se ejecuta 
            //el cambio en el indice
            string = arrayOfStrings[i]; //Se guarda el contenido del índice donde está parado el for mayor
            arrayOfStrings[i] = arrayOfStrings[e]; // se cambia él índice con string menor al índice del for mayor
            arrayOfStrings[e] = string; //Se lleva el contenido del string (índice con string mayor) al otro índice 
           }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array3 = [];
   for (let e = 0; e < array1.length; e++) { //Recorro en array1 y por cada posición de este array, recorro
      //todo el array 2. 
           for (let i =0; i < array2.length; i++) {//Dentro del for que recorre el array2 pregunto:
            if (array1[e] === array2[i]) { // si los arrays tienen el mismo número en su posición, entonces
               array3.push(array2[i]); //Se llena el array3 con lo que tiene cualquiera de los dos arrays
               //en su posición
            } 
      
   }
}
   return array3;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

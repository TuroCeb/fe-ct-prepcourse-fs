/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if (x > y) {
      console.log(x);
      return x;
   } else if (y > x) {
      //console.log(y);
      return y;
   } else if (y === x) {
      //console.log ('son iguales');
      return y;
   }
}
obtenerMayor(7,7);

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if (edad > 17) {
      //console.log ('Allowed');
      return 'Allowed';
   } else {
     // console.log ('Not Allowed');
      return 'Not allowed';
   }
}

mayoriaDeEdad (18)

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   if (status === 1) {
      return 'Online';
   } else if (status === 2) {
      return 'Away';
   } else return 'Offline';
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   if (idioma == 'aleman') {
      return 'Guten Tag!';
   } else if (idioma == 'mandarin') {
      return 'Ni Hao!';
   } else if (idioma == 'ingles') {
      return 'Hello!'
   } else return 'Hola!';
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch (color) {
      case "blue":
         return 'This is blue';
         break;
      case "red":
      return 'This is red';
         break;
      case "green":
      return 'This is green';
         break;
      case "orange":
      return 'This is orange';
         break;
      default :
      return 'Color not found';
         break;
   }
}

function esDiezOCinco(num) {
   // Retornar "true" si "num" es 10 o 5.
   // De lo contrario, retornar "false".
   // Tu código:
   if (num === 10 || num === 5) {
      return true;
   } else {
      return false;
   }
}

function estaEnRango(num) {
   // Retornar "true" si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar "false".
   // Tu código:
   if (num < 50 && num > 20) {
      return true;
   } else {
      return false;
   }
}

function esEntero(num) {
   // Retornar "true" si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna "false".
   // Tu código:
    
   // opción 1 
  // if (num % 1 === 0) {
  //    return true;

  // } else {
  //    return false;
  // }

   //opción 2
   //Aquí se utiliza el Objeto Math con el método round. De este modo se pregunta si la 
   //num es igual a esa misma varia redondeada (Si num no es entero la respuesta tendrá
   // que ser false)
   //if (num === Math.round(num)) {
    //     return true;
   //} else {
   //   return false;
   //}


   //opción 3
   //Aquí se utiliza el objeto Number con el método isInteger para preguntar si el contenido
   //de la variable num es un entero. Se debe preguntar tambien si el número que contien la var
   //es mayor que cero, es menor que cero o es igual a cero.
   if (
      (num > 0 && Number.isInteger(num)) ||
      (num < 0 && Number.isInteger(num)) ||
      (num === 0 && Number.isInteger(num))) {
      return true;
   } else {
      return false;
   }
}




function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
if (num % 3 === 0 && num % 5 === 0) {
   return 'fizzbuzz';
} else if (num % 5 === 0) {
   return 'buzz';
} else if (num % 3 === 0) {
   return 'fizz';
} else {
   return false;
}
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if (num1 > num2 && num1 > num3 && num1 > 0) {
      return 'Numero 1 es mayor y positivo';
   }
   if (num1 < 0 || num2 < 0 || num3 < 0) {
      return 'Hay negativos';
   }
   if (num3 > num1 && num3 > num2) {
      num3++
      return num3;
   }
   if (num3 === 0 && num2 === 0 && num1 === 0) {
      return 'Error';
   } else {
      return false;
   }
}

function esPrimo(num) {
   // Retornar True si "num" es primo.
   // De lo contrario retorna False.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:


  if (num === 2) return true; 
   else if (num < 2) return false;
   for (let i = 2; i < num ; i++)
      if (num % i === 0) return false; // según lo que comprendo aquí debería ser true
   return true; // Y aquí false (si la división da cero es porque el num es primo)

/**
  if (num < 2) {
      return false;
   } else if (num === 2) {
      return true;
   }
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
     } else {
     return true;
     }
   }
   */
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
if (valor === true) {
   return 'Soy verdadero';
} else {
   return 'Soy falso';
}

}



function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar True.
   // Caso contrario, retornar False.
   // Tu código:
   let numString = num.toString(); //Aquí se crea una variable string para llevarle el
   //método tostring de la variable númerica num (toString retorna un string de una 
   //variable numérica)
   if (numString.length === 3) {
      return true;
   } else {
      return false;
   }
}


function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   
   let veces = 0;
   do {
   num += 5; //suma 5 al contenido de la variable.
   veces++; //suma 1 al contenido.
   } while (veces < 8);
   return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};

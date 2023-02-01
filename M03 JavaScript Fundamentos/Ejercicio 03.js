/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna True si "x" e "y" son iguales.
   // De lo contrario, retorna False.    // Tu código:
   if (x === y) {
      console.log (x === y);
      return true;
   }
   else {
      console.log (x === y);
      return false;
   }
}
sonIguales (32, 33);

function tienenMismaLongitud(str1, str2) {
   // Retorna True si los dos strings tienen la misma longitud.
   // De lo contrario, retorna False.    // Tu código:
   if (str1.length === str2.length) {
      console.log (str1.length === str2.length);
      return true;
   } else{
      console.log (str1.length === str2.length);
      return false;
   }
}
tienenMismaLongitud('juan', 'luis');


function menosQueNoventa(num) {
   // Retorna True si el argumento "num" es menor que noventa.
   // De lo contrario, retorna False.
   // Tu código:
   if (num < 90) {
      console.log(num < 90);
   return true;
   } else {
       console.log(num < 90);
   return false;
   }
  
}
menosQueNoventa(90);

function mayorQueCincuenta(num) {
   // Retorna True si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna False.
   // Tu código:
   if (num > 50) {
      console.log(num > 50);
      return true;
   } else {
      console.log(num > 50);
      return false;
   }
   
}
mayorQueCincuenta(51);

function esPar(num) {
   // Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:
   if (num % 2 === 0) {
      console.log ('Par '+ num % 2);
      return true;
   } else {
      console.log ('Impar ' + num % 2);
      return false;
   }
}
esPar(9);

function esImpar(num) {
   // Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:
   if (num % 2 !== 0) {
    console.log ('Impar con residuo: ' + num % 2);
      return true;  
   } else {
      console.log ('par con residuo: ' + num % 2);
      return false;  
   }
}
esImpar(4)


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};

/*-------------------Ej1------------------*/
let suma = 0;

for (let i = 1; i <= 10; i++) {
  suma = suma + i; 
}

console.log("Suma total: ", suma); 

/*-------------------Ej2------------------*/
let contador = 10;

while (contador >= 1) {
  console.log(contador);
  contador--; 
}

/*-------------------Ej3------------------*/
const numeros = [4, 17, 3, 25, 8, 11];
let mayor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log("El número mayor es: ", mayor); 

/*-------------------Ej4------------------*/
const palabras = ["sol", "montaña", "mar", "elefante", "río", "cascada"];
const palabrasLargas = [];

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > 5) {
    palabrasLargas.push(palabras[i]);
  }
}

console.log(palabrasLargas);

/*-------------------Ej5------------------*/
const numero = 7;
let multiplicador = 1;

while (multiplicador <= 10) {
  let resultado = numero * multiplicador;
  console.log(numero + " x " + multiplicador + " = " + resultado);
  multiplicador++;
}
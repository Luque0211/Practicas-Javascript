/*Ejercicios js*/

/*--------------- Ej1 -------------------------- */
let nombre = "Lautaro";

if (nombre !== "") {
  console.log("Hola, " + nombre);
} else {
  console.log("Hola desconocido");
}

/*--------------- Ej2 -------------------------- */
let numero = 7;

if (numero % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}
/*--------------- Ej3 -------------------------- */
let calificacion = 59;

if (calificacion >= 60) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

/*--------------- Ej4 -------------------------- */
let dia = 7;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día inválido");
}

/*--------------- Ej5 -------------------------- */

let edad = 21;

if (edad < 18) {
  console.log("Es menor de edad");
} else if (edad >=18 && edad < 100){
  console.log("Es Adulto");
} else {
    console.log("Extraterrestre")
}

/*--------------- Ej6 -------------------------- */
let temperatura = 56    ;

if (temperatura < 10) {
  console.log("Frío");
} else if (temperatura <= 25) {
  console.log("Templado");
} else {
  console.log("Caluroso");
}

/*--------------- Ej7 -------------------------- */
let num = -21;

if (num > 0) {
  console.log("Positivo");
} else if (num < 0) {
  console.log("Negativo");
} else {
  console.log("Es cero");
}

/*--------------- Ej8 -------------------------- */
let monto = 199;

if (monto >= 200) {
  console.log("Descuento del 20%");
} else if (monto >= 100) {
  console.log("Descuento del 10%");
} else {
  console.log("Sin descuento");
}

/*--------------- Ej9 -------------------------- */
let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

if (lado1 === lado2 && lado2 === lado3) {
  console.log("Equilatero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  console.log("Isosceles");
} else {
  console.log("Escaleno");
}

/*--------------- Ej10 -------------------------- */
let contraseña = "12345678";

if (contraseña.length >= 8) {
  console.log("Válida");
} else {
  console.log("Demasiado corta");
}

/*--------------- Ej11 -------------------------- */
let mes = 1;

switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Verano");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Otoño");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Invierno");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Primavera");
    break;

  default:
    console.log("No hay mes");
}

/*--------------- Ej12 -------------------------- */
let puntos = 80;

if (puntos <= 50) {
  console.log("Bronce");
} else if (puntos <= 100) {
  console.log("Platino");
} else {
  console.log("Challenger");
}

/*--------------- Ej13 -------------------------- */
let operacion = "+";
let num1 = 10;
let num2 = 5;

switch (operacion) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Operación inválida");
}

/*--------------- Ej14 -------------------------- */
let email = "hola@gmail.com";

if (email.includes("@") && email.includes(".")) {
  console.log("Válido");
} else {
  console.log("Inválido");
}

/*--------------- Ej15 -------------------------- */
let opcion = 2;

switch (opcion) {
  case 1:
    console.log("Iniciar");
    break;
  case 2:
    console.log("Configurar");
    break;
  case 3:
    console.log("Salir");
    break;
  default:
    console.log("Opción inválida");
}
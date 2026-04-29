// Definición de funciones acá
// Definición de funciones acá

/*--------------Ej1-----------------------------*/
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

/*--------------Ej2-----------------------------*/
function calculadora(num1, num2, operador) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    default:
      return "Operador no válido";
  }
}

/*--------------Ej3-----------------------------*/
function areaRectangulo(base, altura) {
  return base * altura;
}

/*--------------Ej4-----------------------------*/
const esPar = (numero) => {
  if (numero % 2 === 0) {
    return "es par";
  } else {
    return "es impar";
  }
};

/*--------------Ej5-----------------------------*/
function celsiusAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

/*--------------Ej6-----------------------------*/
function calificarNota(nota) {
  if (nota >= 90) {
    return "A";
  } else if (nota >= 80) {
    return "B";
  } else if (nota >= 70) {
    return "C";
  } else {
    return "F";
  }
}

/*--------------Ej7-----------------------------*/
function sumarArray(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}

/*--------------Ej8-----------------------------*/
function encontrarMaximoPar(numeros) {
  let maximoPar = null;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      if (maximoPar === null || numeros[i] > maximoPar) {
        maximoPar = numeros[i];
      }
    }
  }

  return maximoPar;
}

/*--------------Ej9-----------------------------*/
function contarVocales(texto) {
  let contador = 0;
  const vocales = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();

    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}

/*--------------Ej10-----------------------------*/
function dobleNumeros(numeros) {
  return numeros.map(numero => numero * 2);
}

/*---------------Pruebas consola-------------*/

console.log(saludar("Ana"));
console.log(calculadora(2, 2, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(50, 2, "/"));
console.log(calculadora(10, 5, "*"));
console.log(areaRectangulo(4, 5));
console.log(esPar(4));
console.log(esPar(5));
console.log(celsiusAFahrenheit(0));
console.log(calificarNota(85));
console.log(sumarArray([1, 2, 3, 4]));
console.log(encontrarMaximoPar([3, 9, 2, 5]));
console.log(contarVocales("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut lacus id orci pharetra euismod."));
console.log(dobleNumeros([1, 2, 3, 4]));
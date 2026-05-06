
/*----------------EJ1----------- */
const titulo = document.querySelector("#titulo");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  titulo.textContent = "Texto cambiado";
});

/*-------------EJ2---------------*/
const texto = document.querySelector("#texto");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  texto.classList.toggle("activo");
});

/*-------------EJ3y4---------------*/
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", function () {
  const li = document.createElement("li");

  li.textContent = input.value;

  li.addEventListener("click", function () {
    li.remove();
  });

  lista.appendChild(li);

  input.value = "";
});

/*--------------------eJ5---------*/
const contador = document.querySelector("#contador");
const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");

let numero = 0;

sumar.addEventListener("click", function () {
  numero++;
  contador.textContent = numero;
});

restar.addEventListener("click", function () {
  numero--;
  contador.textContent = numero;
});

/*--------------------eJ6---------*/
const input = document.querySelector("#input");
const preview = document.querySelector("#preview");

input.addEventListener("input", function () {
  preview.textContent = input.value;
});

/*--------------------eJ7---------*/
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", function () {
    li.classList.toggle("completada");
  });

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  botonEliminar.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(botonEliminar);
  lista.appendChild(li);

  input.value = "";
});

/*--------------------eJ8---------*/

lista.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completada");
  }

  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});
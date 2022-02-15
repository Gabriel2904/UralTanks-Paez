const items = [
  { nombre: "T-14", precio: "1100" },
  { nombre: "M1 Abras ", precio: 1000 },
  { nombre: "T-90", precio: 900 },
  { nombre: "Leopard 2", precio: 800 },
  { nombre: "Markava IV", precio: 700 },
  { nombre: "Challenger 2", precio: 600 },
  { nombre: "T-80", precio: 500 },
  { nombre: "T-72", precio: 400 },
];

const valores = items.map(
  (tank, indice) =>
    `[${indice + 1}] - Nombre: ${tank.nombre} - Precio: ${tank.precio}`
);

console.log(valores);

console.log(items);

let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => console.log("This is in the then " + message)).catch(
  (message) => console.log("This is in the catch " + message)
);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

/**
 * Punto de entrada de la aplicación
 * Archivo: src/index.js
 */

function saludar(nombre) {
  return `Hola, ${nombre}! Bienvenido al proyecto 🚀`;
}

function main() {
  const nombre = "Mundo";
  console.log(saludar(nombre));
  console.log("La aplicación se ejecutó correctamente.");
}

main();

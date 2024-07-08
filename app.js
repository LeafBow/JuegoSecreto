let intentos = 0;
let secretNumber = 0;
let SortedNumbers = [];
let maxNumbers = 10;

function randomNumberGenerator() {
  let secretNumber = Math.floor(Math.random() * maxNumbers) + 1;

  //salir de  recursividad
  if (SortedNumbers.length == maxNumbers) {
    assignTextElement("p", "Ya se sortearon todos los números posibles");
  } else {
    if (SortedNumbers.includes(secretNumber)) {
      //Recursividad
      return randomNumberGenerator();
    } else {
      SortedNumbers.push(secretNumber);
      return secretNumber;
    }
  }
}
function assignTextElement(element, text) {
  let elementHTML = document.querySelector(element);
  elementHTML.innerHTML = text;
}
function boxCleaner() {
  document.querySelector("#userValue").value = "";
}
function tryVerification() {
  let userNumber = parseInt(document.getElementById("userValue").value);

  if (userNumber === secretNumber) {
    assignTextElement(
      "p",
      `Acertaste el número secreto en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //No acerto
    boxCleaner();
    if (userNumber > secretNumber) {
      assignTextElement("p", "El numero secreto es menor");
    } else {
      assignTextElement("p", "El numero secreto es mayor");
    }
    intentos++;
  }
  return;
}
function defaulSettings() {
  boxCleaner();
  assignTextElement("h1", "Juego del numero secreto");
  assignTextElement("p", `Indica un número del 1 al ${maxNumbers}`);
  intentos = 1;
  secretNumber = randomNumberGenerator();
}
function resetGame() {
  //Limpiar caja
  //mensaje de intervalo de numeros
  //Generar numero aleatorio
  //Inicializar el numero de intentos
  defaulSettings();
  //Deshabilitar el boton de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
defaulSettings();

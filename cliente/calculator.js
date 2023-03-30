//se instancias las variables a utilizar
let operation = "";
let result = 0;
//En este caso utilizamos document.getElementById("result") que es una funcion que tiene javascript para
//obtener los valores de los id de las etiquetas html
// se crea la funcion ára agregarel valor cada vez q se escoge un numero, o una funcion matematica
function addNumber(number) {
  const currentResult = document.getElementById("result").value;
  document.getElementById("result").value = currentResult + number;
}
// se crea la funcion ára agregarel valor de una funcion matematica
function addOperation(operator) {
  operation = operator;
  result = document.getElementById("result").value;
  document.getElementById("result").value = "";
}

// dependiendo la funcion matematica, para en uno de los cass dando un break,
//y have el calculo con el valor traido del html
function calculate() {
  const currentResult = document.getElementById("result").value;
  switch (operation) {
    case "+":
      result = parseFloat(result) + parseFloat(currentResult);
      break;
    case "-":
      result = parseFloat(result) - parseFloat(currentResult);
      break;
    case "*":
      result = parseFloat(result) * parseFloat(currentResult);
      break;
    case "/":
      result = parseFloat(result) / parseFloat(currentResult);
      break;
    default:
      break;
  }
  document.getElementById("result").value = result;
}

//una funcion que nos ayuda a limpiar las variables de los calculos anteriors para continuar con otro
function clearResult() {
  document.getElementById("result").value = "";
  result = 0;
  operation = "";
}

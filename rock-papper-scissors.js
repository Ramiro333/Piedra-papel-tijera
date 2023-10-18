//randomizar eleccion de la maquina
function getComputerChoice() {
    const getRandom = Math.floor(Math.random() * 3);
    const valores = ["piedra", "papel", "tijera"];
    const valorSeleccionado = valores[getRandom];
    return valorSeleccionado
}

const ComputerChoice = getComputerChoice()
console.log(ComputerChoice)
//hacer que el usuario elija
let getChoise = prompt("que eljies?");

//establecer si gana o pierde
//print que gano
//hacer que sean 5 rounds
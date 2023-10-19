//crear funcion para randomizar la eleccion de la maquina
function getComputerChoice() {
    const getRandom = Math.floor(Math.random() * 3);
    const valores = ["piedra", "papel", "tijera"];
    const valorSeleccionado = valores[getRandom];
    return valorSeleccionado
}
//establecer si gana o pierde
//print que gano
let win = 0;
let lose = 0;
function game(userChoice, ComputerChoice) { 
    if (userChoice === ComputerChoice) {
        console.log("empate, vuelve a empezar")
        return;     
    }
    if (userChoice === "tijera" ) {
        if (ComputerChoice === "papel") {
            console.log("ganaste!");
            win = win + 1
        } else {
            console.log("perdiste, la piedra le gana al papel!")
            lose = lose + 1
        }   
    }
    if (userChoice === "piedra") {
        if (ComputerChoice === "tijera") {
            console.log("ganaste!");
            win = win + 1;
        }  else {
            console.log ("perdiste, el papel le gana a la piedra!")
            lose = lose + 1
        }
    }
    if (userChoice === "papel") {
        if (ComputerChoice == "piedra") {
            console.log("ganaste!");
            win = win + 1;
        } else {
            console.log("perdiste, la tijera le gana al papel!")
            lose = lose + 1
        }
    }

}
//randomizar eleccion de la maquina
//hacer que sean 5 rounds
//hacer que el usuario elija
let playRound = 0;
do {
    let ComputerChoice = getComputerChoice()
    let getChoise = prompt("que eljies?");
    let userChoice = getChoise.toLowerCase();
    game(userChoice, ComputerChoice);
    playRound = playRound + 1
} while (playRound < 5);
//decir quien gano
if (win > lose) {
    console.log("Ganaste la partida !");
}
if (win < lose) {
    console.log("perdiste la partida :(")
}
if (win == lose)
    console.log("empate :0")
console.log("you = " + win);
console.log("computer = " + lose)


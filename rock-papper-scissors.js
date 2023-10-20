//crear funcion para randomizar la eleccion de la maquina
function getComputerChoice() {
    const getRandom = Math.floor(Math.random() * 3);
    const valores = ["piedra", "papel", "tijera"];
    const valorSeleccionado = valores[getRandom];
    return valorSeleccionado
}
//establecer si gana o pierde y guardar valores
//print que gano la ronda
function game(userChoice, ComputerChoice) { 
    if (userChoice === ComputerChoice) {
        console.log("empate, vuelve a empezar")
        return;     
    }
    if (userChoice === "tijera" ) {
        if (ComputerChoice === "papel") {
            console.log("ganaste!");
            win = win + 1;
        } else {
            console.log("perdiste, la piedra le gana al papel!")
            lose = lose + 1;
        }   
    }
    if (userChoice === "piedra") {
        if (ComputerChoice === "tijera") {
            console.log("ganaste!");
            win = win + 1;
        }  else {
            console.log ("perdiste, el papel le gana a la piedra!")
            lose = lose + 1;
        }
    }
    if (userChoice === "papel") {
        if (ComputerChoice == "piedra") {
            console.log("ganaste!");
            win = win + 1;
        } else {
            console.log("perdiste, la tijera le gana al papel!")
            lose = lose + 1;
        }

    }
}
//usar eleccion de la maquina
//hacer que el usuario elija
//hacer que sean 5 rounds
//setear valores win/lose
let win = 0;
let lose = 0;
for (let playRound = 0; playRound < 5; playRound++) {
        let ComputerChoice = getComputerChoice()
        let getChoise = prompt("que eljies?");
        let userChoice = getChoise.toLowerCase();
        game(userChoice, ComputerChoice);
} 
//decir quien gano
if (win > lose) {
    console.log("Ganaste la partida !");
}
if (win < lose) {
    console.log("perdiste la partida :(")
}
if (win === lose)
    console.log("empate :0")
console.log("you = " + win);
console.log("computer = " + lose)


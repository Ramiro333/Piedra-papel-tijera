//crear funcion para randomizar la eleccion de la maquina
function getComputerChoice() {
    const getRandom = Math.floor(Math.random() * 3);
    const valores = ["piedra", "papel", "tijera"];
    const valorSeleccionado = valores[getRandom];
    return valorSeleccionado
}
//crear funcion de aprtida, guardar values
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
//setear valores win/lose/partida
let win = 0;
let lose = 0;
let partida = 0;
//game(userChoice, ComputerChoice);

//decir quien gano
if (win > lose) {
    console.log("Ganaste la partida !");
} else if (win < lose) {
    console.log("perdiste la partida :(")
}else (console.log("empate :0"))

//for (let playRound = 0; playRound < 5; playRound++) {
//asignar botones a las elecciones

const tijera = document.getElementById('tijera');
const papel = document.getElementById('papel');
const piedra = document.getElementById('piedra');

function elegir(choice) {
    let userChoice = choice
    let ComputerChoice = getComputerChoice()
    game(userChoice, ComputerChoice);
    console.log("you = " + win);
    console.log("computer = " + lose)
    partida++ 
}

tijera.onclick = function() {
    elegir("tijera")
}
papel.onclick = function() {
    elegir("papel")
}
piedra.onclick = function() {
    elegir("piedra")
}
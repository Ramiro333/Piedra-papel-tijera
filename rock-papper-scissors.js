//crear funcion para randomizar la eleccion de la maquina
function getComputerChoice() {
    const getRandom = Math.floor(Math.random() * 3);
    const valores = ["piedra", "papel", "tijera"];
    const valorSeleccionado = valores[getRandom];
    return valorSeleccionado
}
//crear funcion de partida, guardar values
//print que gano la ronda
//agregar p al html
const resultados = document.getElementById('results');
const par = document.createElement('p');
function game(userChoice, ComputerChoice) { 
    if (userChoice === ComputerChoice) {
        par.textContent = 'tie, start over';    
    }else if (userChoice === "tijera" ) {
        if (ComputerChoice === "papel") {
            par.textContent = 'you win!'
            win = win + 1;
        } else {
            par.textContent = 'you lose, rock beats scisors'
            lose = lose + 1;
        }   
    }else if (userChoice === "piedra") {
        if (ComputerChoice === "tijera") {
            par.textContent ="you win!"
            win = win + 1;
        }  else {
            par.textContent = "you lose, paper beats rock"
            lose = lose + 1;
        }
    }else if (userChoice === "papel") {
        if (ComputerChoice == "piedra") {
            par.textContent = "you win!"
            win = win + 1;
        } else {
            par.textContent ="you lose, scisors beats paper"
            lose = lose + 1;
        }

    }
    resultados.appendChild(par);
}
//setear valores win/lose/partida
let win = 0;
let lose = 0;
let partida = 0;
//decir quien gano la partida(en desuso)

//asignar botones a las elecciones
function clearGameOverMessage() {
    par3.textContent = '';
  }
  
const tablero = document.getElementById('counter');
const par2 = document.createElement('p');
const par3 = document.createElement('p');
function contador (){
    par2.textContent = `${win} - ${lose}`;
    tablero.appendChild(par2);
    if (partida === 5) {
        if (win === lose) {
            par3.textContent = "game tie :0"
        } else if (win < lose) {
            par3.textContent = "you lose the game :("
        } else  {
            par3.textContent = "you win the game!"
        }
        tablero.appendChild(par3)
        partida = 0
        win = 0
        lose = 0 
    } 
}

const tijera = document.getElementById('tijera');
const papel = document.getElementById('papel');
const piedra = document.getElementById('piedra');

function elegir(choice) {
    clearGameOverMessage()
    let userChoice = choice
    let ComputerChoice = getComputerChoice()
    game(userChoice, ComputerChoice);
    partida++;
    contador(); 
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

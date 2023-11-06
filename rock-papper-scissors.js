//eleccion de la maquina
function getComputerChoice() {
    const getRandom = Math.floor(Math.random() * 3);
    const valores = ["piedra", "papel", "tijera"];
    const valorSeleccionado = valores[getRandom];
    return valorSeleccionado;
}
//funcion de ronda + print ganador de ronda
const resultados = document.getElementById('results');
const par = document.createElement('p');
function game(userChoice, ComputerChoice) { 
    if (userChoice === ComputerChoice) {
        par.textContent = 'tie, start over';    
    }else if (userChoice === "tijera" ) {
        if (ComputerChoice === "papel") {
            par.textContent = 'you win!';
            win = win + 1;
        } else {
            par.textContent = 'you lose, rock beats scisors';
            lose = lose + 1;
        }   
    }else if (userChoice === "piedra") {
        if (ComputerChoice === "tijera") {
            par.textContent ="you win!";
            win = win + 1;
        }  else {
            par.textContent = "you lose, paper beats rock";
            lose = lose + 1;
        }
    }else if (userChoice === "papel") {
        if (ComputerChoice == "piedra") {
            par.textContent = "you win!";
            win = win + 1;
        } else {
            par.textContent ="you lose, scisors beats paper";
            lose = lose + 1;
        }

    }
    resultados.appendChild(par);
}
par.style.cssText = 'margin:0';
//set valores 
let win = 0;
let lose = 0;
let partida = 0;
//elimina el texto cuando empieza una nueva partida
function clearGameOverMessage() {
    ganador.style.cssText = 'border: none;';
    par3.textContent = '';
  }
//tableros
const tablero = document.getElementById('counter');
const ganador = document.getElementById('winner');
const par2 = document.createElement('p');
const par3 = document.createElement('p');
function contador (){
    par2.textContent = `${win} - ${lose}`;
    tablero.appendChild(par2);
    if (partida === 5) {
        ganador.setAttribute('style','margin: 0px 300px 0px 300px;border: solid 10px white;text-align: center;background-color: rgb(241, 53, 53); color: antiquewhite;');
        if (win === lose) {
            par3.textContent = "game tie :0";
        } else if (win < lose) {
            par3.textContent = "you lose the game :(";
        } else  {
            par3.textContent = "you won the game!";
        }
        par3.setAttribute('style', 'font-size: 45px;margin: 0px;');
        ganador.appendChild(par3);
        partida = 0;
        win = 0;
        lose = 0; 
    } 
}
par2.style.cssText = 'margin:0';
//eleecion del jugador
const tijera = document.getElementById('tijera');
const papel = document.getElementById('papel');
const piedra = document.getElementById('piedra');

function elegir(choice) {
    resultados.setAttribute('style','border-radius: 20px;margin: 0px 200px 0px 200px;border: solid 10px white;font-size: 45px;text-align: center;background-color: black;color: antiquewhite;')
    clearGameOverMessage();
    let userChoice = choice;
    let ComputerChoice = getComputerChoice()
    game(userChoice, ComputerChoice);
    partida++;
    contador(); 
}

tijera.onclick = function() {
    elegir("tijera");
}
papel.onclick = function() {
    elegir("papel");
}
piedra.onclick = function() {
    elegir("piedra");
}

//LÓGICA GENERAL:
//Se juega contra el ordenador
//Se crea la decisión del ordenador mediante
//la función "getComputerChoice"
//Se solicita la decisión del usuario por pantalla
//Se comprueban ambas decisiones y se decide el resultado
//de la partida según la lógica usual del juego



//VARIABLES PARA PUNTAJE
let humanScore = 0;
let computerScore = 0;


//DECISIÓN DEL ORDENADOR
//0 == PIEDRA
//1 == PAPEL
//2 == TIJERA
//SE PODRIA HACER UN PARSE UTILIZANDO ENUMERADOS
//AUN NO SE HAN VISTO EN EL CURRICULO DE The Odin Project


//Obtiene un numero entre 0 y max
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function getComputerChoice(){
    let computerChoice = "";
    switch(getRandomInt(3)){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

let x = getComputerChoice();

console.log(x);

//DECISIÓN HUMANO

const opcionesValidas = ["rock", "paper", "scissors"];

function getHumanChoice(){
    let humanChoice = prompt ("rock, paper or scissors?");
    humanChoice = humanChoice.trim().toLowerCase();

    if(opcionesValidas.includes(humanChoice)){
        return humanChoice
    }else{
        alert("UNVALID CHOICE");
        return getHumanChoice();
    }
}

let y = getHumanChoice();
console.log(y);

//LÓGICA PARA UNA RONDA

function playRound(humanChoiceParam, computerChoiceParam){

}


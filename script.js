//LÓGICA GENERAL:
//Se juega contra el ordenador
//Se crea la decisión del ordenador mediante
//la función "getComputerChoice"
//Se solicita la decisión del usuario por pantalla
//Se comprueban ambas decisiones y se decide el resultado
//de la partida según la lógica usual del juego



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



//LÓGICA PARA UNA RONDA

function gameFinish(victoryBoolean, human, computer,humanScore,computerScore){
    switch(victoryBoolean){
        case "tie":
            console.log("That's a tie, you both chose "+ human);
            break;
        case "win":
            console.log("You won, " + human + " beats " + computer);
            humanScore++;
            break;
        case "lose":
            console.log("You lost, " + computer + " beats " + human);
            computerScore++;
            break;
    }
}

function playRound(humanChoiceParam, computerChoiceParam, humanScoreParam, computerScoreParam){
    //CASO DE EMPATE
    if(humanChoiceParam == computerChoiceParam){
        gameFinish("tie",humanChoiceParam,computerChoiceParam, humanScoreParam, computerScoreParam);
    }


    if(humanChoiceParam == "rock"){
        if(computerChoiceParam == "paper"){
            gameFinish("lose",humanChoiceParam,computerChoiceParam, humanScoreParam, computerScoreParam);
        }else if(computerChoiceParam == "scissors"){
            gameFinish("win",humanChoiceParam,computerChoiceParam, humanScoreParam, computerScoreParam);
        }
    }else if(humanChoiceParam == "paper"){
        if(computerChoiceParam == "rock"){
            gameFinish("win",humanChoiceParam,computerChoiceParam, humanScoreParam, computerScoreParam);
        }else if(computerChoiceParam == "scissors"){
            gameFinish("lose",humanChoiceParam,computerChoiceParam, humanScoreParam, computerScoreParam);
        }
    }else if(humanChoiceParam == "scissors"){
        if(computerChoiceParam == "rock"){
            gameFinish("lose",humanChoiceParam,computerChoiceParam, humanScoreParam, computerScoreParam);
        }else if(computerChoiceParam == "paper"){
            gameFinish("win",humanChoiceParam,computerChoiceParam, humanScoreParam, computerScoreParam);
        }
    }
}



//LOGICA JUEGO DE 5 RONDAS
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    for(i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection,humanScore,computerScore);
    }
    if(humanScore > computerScore){
        console.log("You won");
    }else if(humanScore == computerScore){
        console.log("Tie!");
    }else{
        console.log("You lost");
    }
    
}

playGame();
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

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function getComputerChoice(){
    return getRandomInt();
}
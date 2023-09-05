const result = document.querySelector(".result")
const HumanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Human: ' + human + ' Maquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate &#x1F62C;"
    } else if (human === 'rock' && machine === 'scissors' || human === 'scissors' && machine === 'paper' || human === 'paper' && machine === 'rock') {
        result.innerHTML = "Você ganhou &#x1F60E;&#x1F3C6;"
        humanScoreNumber++
        HumanScore.innerHTML = (humanScoreNumber)
    } else {
        result.innerHTML = "Você perdeu &#x1F62D;"
        machineScoreNumber++
        machineScore.innerHTML = (machineScoreNumber)
    }
}
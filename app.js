const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let result
let computerChoice


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getreult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
    function getresult() {
        if (userChoice === computerChoice) {
            result = 'Its a Draw!'
        }
        if (userChoice === 'rock' && computerChoice === 'paper') {
            result = 'You Lose!'
        }
        if (userChoice === 'rock' && computerChoice === 'scissors') {
            result = 'You Win!'
        }
        if (userChoice === 'paper' && computerChoice === 'rock') {
            result = 'You Win!'
        }
        if (userChoice === 'paper' && computerChoice === 'scissors') {
            result = 'You Lose!'
        }
        if (userChoice === 'scissors' && computerChoice === 'paper') {
            result = 'You Win!'
        }
        if (userChoice === 'scissors' && computerChoice === 'rock') {
            result = 'You Lose!'
        }
        resultDisplay.innerHTML = result
    }
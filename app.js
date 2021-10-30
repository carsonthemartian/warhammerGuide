const p1ButtonPlus = document.querySelector('#p1ButtonPlus');
const p2ButtonPlus = document.querySelector('#p2ButtonPlus');
const p1ButtonMinus = document.querySelector('#p1ButtonMinus');
const p2ButtonMinus = document.querySelector('#p2ButtonMinus');
const gameOverButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const dieSelect = document.querySelector('#die');
const diceBtn = document.querySelector('#diceBtn');
const rollDisplay = document.querySelector('#rollDisplay');

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let die = 4;

p1ButtonPlus.addEventListener('click', function () {
    p1Score += 1;
    p1Display.textContent = p1Score;
});

p2ButtonPlus.addEventListener('click', function () {
    p2Score += 1;
    p2Display.textContent = p2Score;
});

p1ButtonMinus.addEventListener('click', function () {
    p1Score -= 1;
    p1Display.textContent = p1Score;
});

p2ButtonMinus.addEventListener('click', function () {
    p2Score -= 1;
    p2Display.textContent = p2Score;
});

gameOverButton.addEventListener('click', function () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
});

dieSelect.addEventListener('change', function () {
    die = parseInt(this.value);
})

diceBtn.addEventListener('click', function () {
    let roll = Math.floor(Math.random() * dieSelect.value) + 1;
    rollDisplay.textContent = roll;
})

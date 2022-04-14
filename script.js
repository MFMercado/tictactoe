let playerX = 'Player X';
let playerO = 'Player O';
const boardButtons = document.querySelectorAll('.box');

function enableBoardButtons() {
  for (const eachButton of boardButtons) {
    eachButton.removeAttribute('disabled');
  }
}

function disableBoardButtons() {
  for (const eachButton of boardButtons) {
    eachButton.setAttribute('disabled', '');
  }
}

function playerInput() {
  playerX = document.getElementById('playerXname').value;
  localStorage.setItem('playerXname', playerX);
  document.getElementById('scoreXname').innerHTML =
    localStorage.getItem('playerXname');

  playerO = document.getElementById('playerOname').value;
  localStorage.setItem('playerOname', playerO);
  document.getElementById('scoreOname').innerHTML =
    localStorage.getItem('playerOname');
  document.getElementById('playerXname').disabled = true;
  document.getElementById('playerOname').disabled = true;
  document.getElementById('submit').disabled = true;

  enableBoardButtons();
}

let turn = 0;
let gameOver = false;
let playerXscore = 0;
let playerOscore = 0;

function currentTurn(btnId) {
  if (gameOver) {
    return;
  }
  if (turn % 2 == 0) {
    document.getElementById(btnId).innerHTML = 'X';
    document.getElementById(btnId).disabled = true;
  } else {
    document.getElementById(btnId).innerHTML = 'O';
    document.getElementById(btnId).disabled = true;
  }

  checkWinner();



  if (turn === 9 && !gameOver) {
    document.getElementById('winner').innerHTML = 'DRAW!';
  }
}

//02-for checking winning pattern
function checkWinner() {
  let c0 = document.getElementById('btn0').textContent;
  let c1 = document.getElementById('btn1').textContent;
  let c2 = document.getElementById('btn2').textContent;
  let c3 = document.getElementById('btn3').textContent;
  let c4 = document.getElementById('btn4').textContent;
  let c5 = document.getElementById('btn5').textContent;
  let c6 = document.getElementById('btn6').textContent;
  let c7 = document.getElementById('btn7').textContent;
  let c8 = document.getElementById('btn8').textContent;

  let pattern1 = [c0, c1, c2];
  let pattern2 = [c3, c4, c5];
  let pattern3 = [c6, c7, c8];
  let pattern4 = [c0, c3, c6];
  let pattern5 = [c1, c4, c7];
  let pattern6 = [c2, c5, c8];
  let pattern7 = [c0, c4, c8];
  let pattern8 = [c2, c4, c6];

  let allPattern = [
    pattern1,
    pattern2,
    pattern3,
    pattern4,
    pattern5,
    pattern6,
    pattern7,
    pattern8,
  ];

  function allXPattern(arr) {
    return arr.every((element) => element === 'X');
  }

  function allOPattern(arr) {
    return arr.every((element) => element === 'O');
  }

  for (let i = 0; i < 8; i++) {
    if (allXPattern(allPattern[i]) === true) {
      playerX;
      document.getElementById('winner').innerHTML = playerX + ' wins!';
      gameOver = true;
      playerXscore++;
      document.getElementsByClassName('scoreNumber')[0].innerHTML =
        playerXscore;
    } else if (allOPattern(allPattern[i]) === true) {
      playerO;
      document.getElementById('winner').innerHTML = playerO + ' wins!';
      gameOver = true;
      playerOscore++;
      document.getElementsByClassName('scoreNumber')[1].innerHTML =
        playerOscore;
    }
  }

turn++;

return;

}

function nextRound() {
  gameOver = false;
  turn = 0;
  enableBoardButtons();
  for (const eachButton of boardButtons) {
    eachButton.innerHTML = ' ';
  }
}

function resetAll() {
  gameOver = false;
  turn = 0;
  enableBoardButtons();
  for (const eachButton of boardButtons) {
    eachButton.innerHTML = ' ';
  }
  playerXscore = 0;
  document.getElementsByClassName('scoreNumber')[0].innerHTML = playerXscore;
  playerOscore = 0;
  document.getElementsByClassName('scoreNumber')[1].innerHTML = playerOscore;
  document.getElementById('winner').innerHTML = 'GAME ON!';
}

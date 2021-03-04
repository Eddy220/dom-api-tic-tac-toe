document.addEventListener("DOMContentLoaded", (event) => {
  let currentPlayerSymbol = 'x';
  let squareValues = ['', '', '', '', '', '', '', '', '']
  // let xImage = document.createElement('img')
  // xImage.setAttribute('src', "player-x.svg")
  // let oImage = document.createElement('img')
  // oImage.setAttribute('src', 'player-o.svg')


  let board = document.getElementById('tic-tac-toe-board')
  board.addEventListener('click', event => {
    let clicked = event.target.id
    if (clicked.includes('square-')) {
      if (currentPlayerSymbol === 'x') {
        let xImage = document.createElement('img')
        xImage.setAttribute('src', "player-x.svg")
        event.target.appendChild(xImage);
        currentPlayerSymbol = 'o'
        checkGameStatus()
      } else if (currentPlayerSymbol === 'o') {
          let oImage = document.createElement('img')
          oImage.setAttribute('src', 'player-o.svg')
          event.target.appendChild(oImage);
          currentPlayerSymbol = 'x'
          checkGameStatus()
      }

    }
  })
let gameResult1 = document.getElementById('game-status')

  const checkGameStatus = () => {
    const square0 = document.getElementById('square-0')
    const square1 = document.getElementById('square-1')
    const square2 = document.getElementById('square-2')
    const square3 = document.getElementById('square-3')
    const square4 = document.getElementById('square-4')
    const square5 = document.getElementById('square-5')
    const square6 = document.getElementById('square-6')
    const square7 = document.getElementById('square-7')
    const square8 = document.getElementById('square-8')

    console.log(square0.firstElementChild)
    if (square0.firstElementChild === square1.firstElementChild && square0.firstElementChild === square2.firstElementChild) {
      gameResult1.innerText = 'Winner: X'
    }
  }
});

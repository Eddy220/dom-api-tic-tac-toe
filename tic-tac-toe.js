document.addEventListener("DOMContentLoaded", (event) => {
  let currentPlayerSymbol = 'x';
  let squareValues = ['', '', '', '', '', '', '', '', '']
  // let xImage = document.createElement('img')
  // xImage.setAttribute('src', "player-x.svg")
  // let oImage = document.createElement('img')
  // oImage.setAttribute('src', 'player-o.svg')


  let board = document.getElementById('tic-tac-toe-board')
  board.addEventListener('click', event => {
    console.log(event.target)
    let clicked = event.target.id
    if (clicked.includes('square-')) {
      if (currentPlayerSymbol === 'x') {
        let xImage = document.createElement('img')
        xImage.setAttribute('src', "player-x.svg")
        event.target.appendChild(xImage);
        currentPlayerSymbol = 'o'
        console.log(currentPlayerSymbol)
      } else if (currentPlayerSymbol === 'o') {
          let oImage = document.createElement('img')
          oImage.setAttribute('src', 'player-o.svg')
          event.target.appendChild(oImage);
          currentPlayerSymbol = 'x'
          console.log(currentPlayerSymbol);
      }
    }
  })
});

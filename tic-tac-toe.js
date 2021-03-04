document.addEventListener("DOMContentLoaded", (event) => {
  let squares = document.querySelectorAll(".square");
  squares.forEach(squareEle => {
    squareEle.addEventListener("click", (event) => {
      let xImage = document.createElement("img")
      xImage.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
      console.log(squareEle);
    })
  })
});

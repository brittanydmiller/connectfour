//////////////////////  Binder  /////////////////////////////////////
window.onload = function() {
  view = new Display()
  player1 = new Player("rex", "red")
  player2 = new Player("phil", "blue")
  model = new ConnectFour()
  model.addPlayer(player1)
  model.addPlayer(player2)
  controller = new GamePlay(model,view)
  new Binder(view,controller).bind()
}

function Binder(view,controller) {
  this.view = view
  this.controller = controller
}

Binder.prototype = {
  bind: function() {
    this.bindStartGameListener()
    this.placePieceListener()
  },
  bindStartGameListener: function() {
    var startButtonSelector = document.querySelector("#linkedin_login")
    startButtonSelector.addEventListener("click", controller.initializeBoard, false)

    // Let's talk about initialize board - not being passed row / column info
  },
  placePieceListener: function() {
    var cellSelector = document.querySelector(".container")
    cellSelector.addEventListener("click", controller.dropPiece.bind(this.controller), false)

  }

}
//////////////////////  Binder  /////////////////////////////////////
window.onload = function() {
  var view = new Display()
  var player1 = new Player("rex", "red")
  var player2 = new Player("phil", "blue")
  var game = new ConnectFour()
  game.addPlayer(player1)
  game.addPlayer(player2)
  var controller = new GamePlay(game,view)
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
    startButtonSelector.addEventListener("click", this.controller.initializeBoard, false)

    // Let's talk about initialize board - not being passed row / column info
  },
  placePieceListener: function() {
    var cellSelector = $('.container')
    cellSelector.on('click', '.square', this.controller.dropPiece)

  }

}


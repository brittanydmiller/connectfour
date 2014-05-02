//////////////////////  Binder  /////////////////////////////////////
window.onload = function() {
  view = new Display()
  model = new ConnectFour()
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
    this.summonActiveListener()
  },

  bindStartGameListener: function() {
    var startButtonSelector = document.querySelector("#linkedin_login")
    startButtonSelector.addEventListener("click", controller.initializeBoard, false)
    startButtonSelector.addEventListener("click", controller.initializePlayers, false)
  },

  placePieceListener: function() {
    var cellSelector = document.querySelector(".container")
    cellSelector.addEventListener("click", controller.dropPiece.bind(this.controller), false)
  },

  summonActiveListener: function() {
    var newPieceSelector = document.querySelector("body")
    newPieceSelector.addEventListener("click", controller.summonPiece, false)
  }
}
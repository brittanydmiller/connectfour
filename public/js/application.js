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
  },
  bindStartGameListener: function() {
    var startButtonSelector = document.querySelector("#start_game")
    startButtonSelector.addEventListener("click", controller.initializeBoard, false)

    // Let's talk about initialize board - not being passed row / column info
  },
  placePieceListener: function() {
    var cellSelector = document.querySelector(".container")
    cellSelector.addEventListener("click", controller.dropPiece, false)

  }

}
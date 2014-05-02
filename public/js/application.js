//////////////////////  Binder  /////////////////////////////////////
window.onload = function() {
  var view = new Display()
  var game = new ConnectFour()
  controller = new GamePlay(game,view)
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
    startButtonSelector.addEventListener("click", this.controller.initializeBoard, false)
    startButtonSelector.addEventListener("click", this.controller.initializePlayers, false)
  },
  placePieceListener: function() {
    var cellSelector = document.querySelector('.container')
    cellSelector.addEventListener("click", this.controller.dropPiece)
  },
  summonActiveListener: function() {
    var newPieceSelector = document.querySelector("body")
    newPieceSelector.addEventListener("click", this.controller.summonPiece, false)
  }
}
function dragStart(ev) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,36,36);
    return true;
  }

  function dragEnter(ev) {
    ev.preventDefault();
    return true;
  }

  function dragOver(ev) {
    ev.preventDefault();
  }

  function dragDrop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.stopPropagation();
    controller.dropPiece(ev.target.id)
    return false;
  }
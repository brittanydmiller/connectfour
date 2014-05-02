//////////////////////  Binder  /////////////////////////////////////
window.onload = function() {
  var view = new Display()
  // var player1 = new Player("rex", "red")
  // var player2 = new Player("phil", "blue")
  var game = new ConnectFour()
  // game.addPlayer(player1)
  // game.addPlayer(player2)
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
    this.summonActiveListener()
  },
  bindStartGameListener: function() {
    var startButtonSelector = document.querySelector("#linkedin_login")
    startButtonSelector.addEventListener("click", this.controller.initializeBoard, false)
    startButtonSelector.addEventListener("click", this.controller.initializePlayers, false)
  },
  placePieceListener: function() {
    // debugger
    // var cellSelector = $('.container')
    // console.log(this.controller)
    // cellSelector.on('click', '.square', this.controller.dropPiece)
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
    console.log("Im here")
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
    ev.target.appendChild(document.getElementById(data));
    ev.stopPropagation();
    return false;
  }
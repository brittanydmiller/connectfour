//////////////////////  View  /////////////////////////////////////

function Display() {
  this.targets = {},
  this.rowCount = 6,
  this.columnCount = 7,
  this.numCells = this.rowCount * this.columnCount
}

Display.prototype = {
  renderBoard: function(rowCount, columnCount) {
    document.querySelector(".container").style.display = "block"
  },
  renderPiece: function() {

    // document.querySelector(".container").style.color = "red"

    console.log(event.target)
    event.target.style.background = "red"
    // (targets.cell).className = "red filled"
  }
}

//////////////////////  Model  /////////////////////////////////////
function ConnectFour() {}

ConnectFour.prototype = {
  generateBoard: function(numCells,columnCount) {
    this.currentGame = new Board(),
    this.currentGame.generateCells(numCells,columnCount)
  }
}

function Board() {
  this.completed = false
  this.cells = []
}

Board.prototype = {
  generateCells: function(numCells,columnCount){
    for (var i = 0; i < numCells; i++) {
      this.cells.push(new Cell(i, i % columnCount ))
    }
    console.log(this.cells)
  }
}

function Cell(id, column) {
  this.status = null,
  this.id = id,
  this.column = column
}

//////////////////////  Controller  /////////////////////////////////////
window.onload = function() {
  view = new Display()
  model = new ConnectFour()
  controller = new GamePlay(model,view)
  new Binder(view,controller).bind()
}

function GamePlay(model,view) {
  this.model = model
  this.view = view
}

GamePlay.prototype = {
  initializeBoard: function() {
    model.generateBoard(view.numCells,view.columnCount)
    view.renderBoard()
  },
  dropPiece: function() {
    // console.log(this)
    view.renderPiece(this)
    // model.generatePiece()
  }
}


//////////////////////  Binder  /////////////////////////////////////

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

// var targets = {}
// controller.initializeBoard(numCells,columnCount)

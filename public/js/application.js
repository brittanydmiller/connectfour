//////////////////////  View  /////////////////////////////////////
rowCount = 6
columnCount = 7
numCells = rowCount * columnCount

Display = function() {
  this.targets = {}
}

Display.prototype = {
  renderBoard: function(rowCount, columnCount) {
    // $(targets.board).css("visibility","not invisible")
  },
  renderPiece: function(player, column) {
    // (targets.cell).className = "red filled"
  }
}

//////////////////////  Model  /////////////////////////////////////
ConnectFour = function() {}

ConnectFour.prototype = {
  generateBoard: function(numCells,columnCount) {
    this.currentGame = new board(),
    this.currentGame.generateCells(numCells,columnCount)
  }
}

function board() {
  this.completed = false
  this.cells = []
}

board.prototype = {
  generateCells: function(numCells,columnCount){
    for (var i = 0; i < numCells; i++) {
      this.cells.push(new cell(i, i % columnCount ))
    }
  }
}

function cell(id, column) {
  this.status = null,
  this.id = id,
  this.column = column
}

//////////////////////  Controller  /////////////////////////////////////

GamePlay = function(model,view) {
  this.model = model
  this.view = view
}

GamePlay.prototype = {
  initializeBoard: function(numCells,columnCount) {
    this.model.generateBoard(numCells,columnCount)
  },
}


//////////////////////  Binder  /////////////////////////////////////

Binder = function(view,controller) {
  this.view = view
  this.controller = controller
}

Binder.prototype = {
  bind: function() {
    this.bindListener()
  },
  bindListener: function() {
    return true
  }
}

// var targets = {}


view = new Display()
model = new ConnectFour()
controller = new GamePlay(model,view)
controller.initializeBoard(numCells,columnCount)

new Binder(view,controller).bind()

console.log(controller.model.currentGame.cells)
//////////////////////  View  /////////////////////////////////////

rowCount = 6
columnCount = 7
numCells = rowCount * columnCount

//////////////////////  Model  /////////////////////////////////////
ConnectFour = function() {}

ConnectFour.prototype = {
  generateBoard: function(numCells,columnCount) {
    this.currentGame = new board,
    this.currentGame.createCells(numCells,columnCount)
  }
}

function board() {
  this.completed = false
  this.cells = []
}

board.prototype = {
  createCells: function(numCells,columnCount){
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

GamePlay = function(target,listeners) {
  this.model = new ConnectFour
  // this.view = view
}

GamePlay.prototype = {
  initializeBoard: function(numCells,columnCount) {
    this.model.generateBoard(numCells,columnCount)
  }
}


// model = new ConnectFour
controller = new GamePlay({} , {})

controller.initializeBoard(numCells,columnCount)

console.log(controller.model.currentGame.cells)



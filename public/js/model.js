function ConnectFour() {}

ConnectFour.prototype = {
  generateBoard: function(numCells,columnCount) {
    this.currentGame = new Board(),
    this.currentGame.generateCells(numCells,columnCount)
  }
}

function Board() {
  this.cells = []
  this.turn = "Player1"
  this.completed = false
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
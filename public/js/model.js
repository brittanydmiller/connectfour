function ConnectFour() {
  this.players = []
}

ConnectFour.prototype = {
  generateBoard: function(numCells,columnCount) {
    this.currentGame = new Board(),
    this.currentGame.generateCells(numCells,columnCount)
  },
  addPlayer: function(player) {
    this.players.push(player)
  },
   currentlyUp: function(){
    return this.players[0];
  },
  changePlayer: function(){
    this.players.push(this.players.shift());
  }
}

function Board() {
  this.cells = []
  this.completed = false
}

Board.prototype = {
  generateCells: function(numCells,columnCount){
    for (var i = 0; i < numCells; i++) {
      this.cells.push(new Cell(i, i % columnCount ))
    }
    console.log(this.cells)
  },
  updateCellStatus: function(id, player) {
    for (var i = 0; i < this.cells.length; i++) {
      if(this.cells[i].id === id) {
        this.cells[i].updateStatus(player)
      }
    }
  },
  getCell: function(id) {
    for (var i = 0; i < this.cells.length; i++) {
      if(this.cells[i].id === id) {
        return this.cells[i]
      }
    }
  },
  checkCellStatus: function(id) {
    for( var i = 0; i < this.cells.length; i ++) {
      // debugger
      if (this.cells[i].id === id ) {
        return this.cells[i].status
      }
    }
  }
}

function Cell(id, column) {
  this.status = null
  this.id = id
  this.column = column
}

Cell.prototype = {
  updateStatus: function(player) {
    this.status = player
  },
  isEmpty: function() {
    return this.status === null
  }
}

function Player(name, color) {
  this.name = name
  this.color = color
}


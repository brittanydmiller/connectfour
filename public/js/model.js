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
      this.cells.push(new Cell(i, Math.floor(i % columnCount), Math.floor(i / columnCount )))
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
  },
  hasWinner: function(id, consecutiveCount) {
    console.log("This is the consecutive count" + consecutiveCount)
    coords = [this.getCell(id).row, this.getCell(id).column]
    directions = [[1,1],[-1,-1],[1,0],[0,1],[-1,0],[0,-1],[1,-1],[-1,1]]
    if (consecutiveCount > 3) {
      console.log(neighborCell.status)
      console.log(currentCell.status)
    }
    for ( i in directions ){
      neighborCoords = this.getNeighborCoords(coords, directions[i])
      if (neighborCoords && consecutiveCount < 4) {
        currentCell = this.getCellbyCoord(coords[0], coords[1])
        neighborCell = this.getCellbyCoord(neighborCoords[0], neighborCoords[1])
        if (neighborCell.status === currentCell.status) {
          this.hasWinner(neighborCell.id, consecutiveCount += 1, directions)
        }
      }
    }
    return false
  },
  getNeighborCoords: function(coors, directions) {
    // debugger
    neighborRow = coords[0] + directions[0]
    neighborColumn = coords[1] + directions[1]
    if (neighborRow < 0 || neighborColumn < 0 || neighborRow > 5 || neighborColumn > 6) {
      return false
    }
    else {
      return [neighborRow,neighborColumn]
    }
  },
  getCellbyCoord: function(row, column) {
    // debugger
    for( var i = 0; i < this.cells.length; i ++) {
      if (this.cells[i].row === row && this.cells[i].column === column) {
        return this.cells[i]
      }
    }
  }
}

function Cell(id, column, row) {
  this.status = null
  this.id = id
  this.column = column
  this.row = row
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


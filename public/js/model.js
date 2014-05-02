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
  },
  getCell: function(id) {
    for (var i = 0; i < this.cells.length; i++) {
      if(this.cells[i].id === id) {
        return this.cells[i]
      }
    }
  },
  hasWinner: function() {
    for( var i = 0; i < this.cells.length; i ++) {
      if ( this.cells[i].status !== null && this.checkIfWinner(this.cells[i].id) === true) {
        return true
      }
    }
  },
  checkIfWinner: function(id) {
    coords = [this.getCell(id).row, this.getCell(id).column]
    directions = [[1,1],[-1,-1],[1,0],[0,1],[-1,0],[0,-1],[1,-1],[-1,1]]
    for ( i in directions ){
      if (this.checkDirections(coords, directions[i], 0) === true) {
        return true
      }
    }
  },
  checkDirections: function(coords, direction, countAdder) {
    consecutiveCount = 0
    consecutiveCount += countAdder
    neighborCoords = this.getNeighborCoords(coords, direction)
      if (neighborCoords) {
        currentCell = this.getCellbyCoord(coords[0], coords[1])
        neighborCell = this.getCellbyCoord(neighborCoords[0], neighborCoords[1])
        if (neighborCell.status === currentCell.status && currentCell.status !== null ) {
          this.checkDirections(neighborCoords, direction, countAdder += 1)
          if (consecutiveCount > 2) {
            return true
          }
        }
      }
  },
  getNeighborCoords: function(coords, directions) {
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

function Player(email, color) {
  this.email = email
  this.color = color
  this.gravUrl = ""
}

Player.prototype = {
  addGrav: function(email) {
    this.gravUrl = $.gravatar(email)
  }
}


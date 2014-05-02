function GamePlay(game,view) {
  this.game = game
  this.view = view
  var self = this
  this.initializeBoard = function() {
    event.preventDefault()
    self.game.generateBoard(self.view.numCells,self.view.columnCount)
    self.view.renderBoard()
  }
 this.dropPiece =  function() {
    // debugger
    var cellId = parseInt(event.target.id)
    var board = self.game.board
    var lowestCellInColumn = board.getLowestEmptyCellinColumn(cellId)
    if (board.getCell(cellId).isEmpty()){
      var player = self.game.currentlyUp()
      console.log(board.getLowestEmptyCellinColumn(cellId).row)
      self.view.renderPiece(lowestCellInColumn.id,player.color)
      board.getCell(lowestCellInColumn.id).updateStatus(player);
      console.log(board.hasWinner())
      self.game.changePlayer();
    }
  }
}


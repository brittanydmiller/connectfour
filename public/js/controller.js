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
    var cellId = parseInt(event.target.id)
    var board = self.game.board
    var lowestCellInColumn = board.getLowestEmptyCellinColumn(cellId)
    var player = self.game.currentlyUp()
    if (board.getCell(cellId).isEmpty()){
      self.updateModelAndView(board, lowestCellInColumn, player)
    }
  }
  this.updateModelAndView = function(board, lowestCellInColumn, player) {
    self.view.renderPiece(lowestCellInColumn.id,player.color);
    board.getCell(lowestCellInColumn.id).updateStatus(player);
    console.log(board.hasWinner());
    console.log(board.isGameOver());
    self.game.changePlayer();
  }
}


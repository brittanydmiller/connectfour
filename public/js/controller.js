function GamePlay(model,view) {
  this.model = model
  this.view = view
}

GamePlay.prototype = {
  initializeBoard: function() {
    event.preventDefault()
    model.generateBoard(view.numCells,view.columnCount)
    view.renderBoard()
  },
  dropPiece: function() {
    cellId = parseInt(event.target.id)
    game = controller.model.currentGame
    if (event.target.classList.contains('square') && game.getCell(cellId).isEmpty()){
      player = controller.model.currentlyUp()
      console.log(game.getLowestEmptyCellinColumn(cellId).row)
      view.renderPiece(game.getLowestEmptyCellinColumn(cellId).id ,player.color)
      game.getCell(game.getLowestEmptyCellinColumn(cellId).id).updateStatus(player);
      console.log(game.hasWinner())
      controller.model.changePlayer();
    }
  }
}




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
    if (event.target.classList.contains('square')){
      cellId = parseInt(event.target.id)
      view.renderPiece()
      game = controller.model.currentGame
      game.updateCellStatus(cellId, controller.model.currentlyUp())
      game.checkCellStatus(cellId)
      controller.model.changePlayer();
      console.log(controller.model.currentGame.checkCellStatus(cellId))
    }
  }
}

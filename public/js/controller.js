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
    if (event.target.classList.contains('square') &&
        controller.model.currentGame.getCell(cellId).isEmpty()){
      player = controller.model.currentlyUp()
      view.renderPiece(player.color)
      game = controller.model.currentGame
      game.updateCellStatus(cellId, player)
      game.checkCellStatus(cellId)
      controller.model.changePlayer();
      console.log(controller.model.currentGame.checkCellStatus(cellId))
      winnerTest = game.hasWinner()
      console.log(winnerTest)
    }
  }
}




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
      view.renderPiece(player.color)
      game.getCell(cellId).updateStatus(player);
      console.log(game.hasWinner())
      controller.model.changePlayer();
    }
  }
}




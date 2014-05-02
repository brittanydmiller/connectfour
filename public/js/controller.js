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
    // model.updateStatus
    if (event.target.classList.contains('square')){
      console.log("I am clicking on a square")
      view.renderPiece()
    }
  }
}

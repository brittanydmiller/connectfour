function GamePlay(game,view) {
  this.game = game
  this.view = view
  var self = this
  this.initializeBoard = function() {
    event.preventDefault()
    self.game.generateBoard(self.view.numCells,self.view.columnCount)
    self.view.renderBoard()
  }
  this.initializePlayers =  function() {
    player1 = new Player("drewfwest@gmail.com", "red")
    player2 = new Player("brittanydmiller@gmail.com", "blue")
    player1.addGrav(player1.email)
    player2.addGrav(player2.email)
    self.game.addPlayer(player1)
    self.game.addPlayer(player2)
  }
 this.dropPiece =  function(id) {
  // debugger
    // var cellId = parseInt(event.target.id)
    var cellId = parseInt(id - 42)
    var board = self.game.board
    var lowestCellInColumn = board.getLowestEmptyCellinColumn(cellId)
    var player = self.game.currentlyUp()
    if (board.getCell(cellId).isEmpty()){
      self.updateModelAndView(board, lowestCellInColumn, player)
    }
  }
  this.summonPiece = function(){
    player = self.game.currentlyUp()
    $('#gravatar').empty().append(player.gravUrl);
    document.querySelector('#gravatar').setAttribute("draggable", "true");
  }
  this.updateModelAndView = function(board, lowestCellInColumn, player) {
    self.view.renderPiece(lowestCellInColumn.id,player.gravUrl[0].getAttribute('src'));
    board.getCell(lowestCellInColumn.id).updateStatus(player);
    console.log(board.hasWinner());
    console.log(board.isGameOver());
    self.game.changePlayer();
    this.summonPiece()
  }
}

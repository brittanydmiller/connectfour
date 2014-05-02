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

  initializePlayers: function() {
    player1 = new Player("drewfwest@gmail.com", "red")
    player2 = new Player("brittanydmiller@gmail.com", "blue")
    player1.addGrav(player1.email)
    player2.addGrav(player2.email)
    model.addPlayer(player1)
    model.addPlayer(player2)
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
      this.summonPiece()
    }
  },

  summonPiece: function(){
    player = controller.model.currentlyUp()
    $('#gravatar').empty().append(player.gravUrl);
    document.querySelector('#gravatar').setAttribute("draggable", "true");
  }

}

  function dragStart(ev) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,36,36);
    console.log("Im here")
    return true;
  }

  function dragEnter(ev) {
    ev.preventDefault();
    return true;
  }

  function dragOver(ev) {
    ev.preventDefault();
  }

  function dragDrop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.stopPropagation();
    return false;
  }

  // <section id="" ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)" ondragover="return dragOver(event)">

  // http://www.webdesignerdepot.com/2013/08/how-to-use-html5s-drag-and-drop/

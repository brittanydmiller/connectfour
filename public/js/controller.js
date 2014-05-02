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
  },


  summonPiece: function(){
  //   console.log(event);

  //   // if target = not a button
  //   // if board's class = .show

  //     var newPiece = document.createElement("img");
  //     newPiece.setAttribute("src", "css/images/4row_black.png");
  //     newPiece.setAttribute("draggable", "true");
  //     newPiece.setAttribute("position", "fixed");
  //     newPiece.setAttribute("left", event["x"]);
  //     newPiece.setAttribute("top", event["y"]);
  //     newPiece.id = "active-piece";
  //     document.body.appendChild(newPiece);

  }
}

  function dragStart(ev) {
    debugger
     ev.dataTransfer.effectAllowed='move';
     ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
     ev.dataTransfer.setDragImage(ev.target,36,36);
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

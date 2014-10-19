

function game(gameWidth, gameHeight, timeout) {
	this.gameWidth = gameWidth;
	this.gameHeight = gameHeight;
	this.timeout = timeout;
}

 function startButtonPressed() {

 	// disable start button
 	var startButton = document.getElementById("startButton");
 	startButton.disabled = true;

 	// read in paramters from Form
 	this.gameWidth = document.getElementById("numberColumns").value;
 	this.gameHeight = document.getElementById("numberRows").value;
 	this.timeout = document.getElementById("timeout").value;

 	var newGame = new game(gameWidth, gameHeight, timeout);
 	
 	// initialize game board
 	var gameBoard = new board(newGame.gameWidth, newGame.gameHeight);
 	gameBoard.fillRandomly();
	runEndlessGame(gameBoard);

 }

 function stopButtonPressed() {
 	location.reload();
 }

function runEndlessGame(gameBoard) {
	renderBoard(gameBoard);
	var gameBoard = createNextIteration(gameBoard);

	setTimeout(function() { runEndlessGame(gameBoard) }, timeout);
}

var createNextIteration = function(gameBoard) {
	
	var oldData = gameBoard.data;

	nextBoard = new board(gameBoard.width, gameBoard.height)

	
	nextBoard.data = new Array(gameBoard.width);
	// create random init data
	for (var x = 0; x < gameBoard.width; x++){
		nextBoard.data[x] = new Array(y);
		for (var y = 0; y < gameBoard.height; y++) {
			nextBoard.data[x][y] = new cell(x, y, oldData[x][y].aliveInNextIteration(), nextBoard);
		}
	}

	return nextBoard;
}

var renderBoard = function(board)  {
	var startDiv = document.getElementById("gameBoard");

	// remove privious gameboard
	while (startDiv.firstChild) {
	    startDiv.removeChild(startDiv.firstChild);
	}

	// render the start setup
	for (var x = 0; x < board.width; x++){
		
		var row = document.createElement('div');
		row.className = row.className + "row";
		for (var y = 0; y < board.height; y++) {
			// create cell
			var cell = document.createElement('div');
			cell.className = cell.className + "cell";
			// set cell dead / alive randomly
			if (board.data[x][y].isAlive) {
				cell.className = cell.className + " alive";
			} else {
				cell.className = cell.className + " dead";
			}

			row.appendChild(cell);
		};
		startDiv.appendChild(row);
	}
}


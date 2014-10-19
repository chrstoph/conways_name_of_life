
// constructor
function cell(x_pos, y_pos, isAlive, board) {
	this.x_pos = x_pos;
	this.y_pos = y_pos;
	this.isAlive = isAlive;
	this.board = board;
	
	this.countNeighbours = function() {
		var count = 0;

		if (x_pos > 0) {
			if (y_pos > 0 && board.data[x_pos - 1][y_pos - 1].isAlive) {
				count++;
			}
			if (board.data[x_pos - 1][y_pos].isAlive) {
				count++;
			}			
			if (y_pos < board.height-1 && board.data[x_pos - 1][y_pos + 1].isAlive) {
				count++;
			}						
		}

		if (y_pos > 0 && board.data[x_pos][y_pos - 1].isAlive) {
			count++;
		}
		
		if (y_pos < board.height-1 && board.data[x_pos][y_pos + 1].isAlive) {
			count++;
		}		

		if (x_pos < board.width-1) {
			if (y_pos > 0 && board.data[x_pos + 1][y_pos - 1].isAlive) {
				count++;
			}
			if (board.data[x_pos + 1][y_pos].isAlive) {
				count++;
			}			
			if (y_pos < board.height-1 && board.data[x_pos + 1][y_pos + 1].isAlive) {
				count++;
			}						
		}


		return count;
	};

	this.aliveInNextIteration = function() {
		var neighbours = this.countNeighbours();
		var result = false;
		
		switch (neighbours) {
			case 2:
				result = this.isAlive;
			break;
			case 3:
				result = true;
			break
		}

		return result;

	};
}
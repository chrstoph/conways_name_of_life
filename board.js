
// constructor
function board(width, height) {
	this.width = width;
	this.height = height;
	this.data;
	this.fillRandomly = function() {
		this.data = new Array(width);
		// create random init data
		for (var x = 0; x < width; x++){
			this.data[x] = new Array(y);
			for (var y = 0; y < height; y++) {
				this.data[x][y] =  new cell(x, y, Math.random() > 0.5, this);
			}
		}
	};
}



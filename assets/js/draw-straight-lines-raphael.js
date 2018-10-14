window.onload = function() {
   let canvas_container = document.getElementById('canvas_container'),
	paper = new Raphael(canvas_container, 500, 500),
	colour = '#EF1F1F',
	mousedown = false;

	let x_start, y_start, x_end, y_end;
	let startEnd = [];

	drawCircle(paper,50, 50, 10);
	drawCircle(paper,paper.width - 50,50, 10);
	drawCircle(paper, 50, paper.height - 50, 10);
	drawCircle(paper, paper.width - 50, paper.height - 50, 10);

	function Line(x_start, y_start, x_end, y_end, paper) {

    var getPath = function() {
        return "M" + x_start + " " + y_start + " L" + x_end + " " + y_end;
    };

    var redraw = function() {
        node.attr("path", getPath());
    }

    var node = paper.path(getPath());
};


canvas_container.onmousedown = (e) => {
	mousedown = true;
	let x = e.offsetX,
		y = e.offsetY;
	
	startEnd.push(x,y);

	console.log(startEnd);
	if(startEnd.length == 4) {
		let linePath = Line(...startEnd, paper);
		startEnd.length = 0; // empty array bad trick
	} else {
		alert('end point');
	}

};



function drawCircle(paper,x,y,r){
						   			// x,y,r	
var circleLeft = paper
		    	.circle(x,y,r)
		    	.attr({
		    		fill: 'green', 
		    		stroke: '#000', 
		    		"stroke-width": 3
		    	});

}

} // @end window.onload 


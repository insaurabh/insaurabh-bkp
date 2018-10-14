window.onload = function() {
let canvas_container = document.getElementById('canvas_container'),
	paper = new Raphael(canvas_container, 500, 500),
	colour = '#EF1F1F',
	mousedown = false,
	width = 1,
	lastX, lastY, path, pathString;

	let pathStringArray = [];

canvas_container.onmousedown = (e) => {
	mousedown = true;
	
	let x = e.offsetX,
		y = e.offsetY;

	pathString = 'M' + x + ' ' + y + 'l0 0';
	// pathStringArray.push(pathString);
	path = paper.path(pathString);
	path.attr({
		'stroke': colour,
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round',
		'stroke-width': width
	});
	
	lastX = x;
	lastY = y;

	console.log(e);
};

document.onmouseup= () => {
	mousedown = false;
	console.log(pathStringArray);
};

canvas_container.onmousemove = (e) => {
	if (!mousedown) {
		return;
	}
	let x = e.offsetX,
		y = e.offsetY;
	pathString += 'l' + (x - lastX) + ' ' + (y - lastY);
	console.log(pathString);
	path.attr('path', pathString);
	lastX = x;
	lastY = y;
};

document.onkeydown = (e) => {
	if (e.keyCode > 48 && e.keyCode < 58) {
		width = e.keyCode - 48;
	}
};
}

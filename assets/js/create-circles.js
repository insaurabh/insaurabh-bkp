window.onload = function() {
    let js_user_inputFrom = document.querySelector(".js-user-input");
    let canvasArea = document.getElementById('canvas_container');
	// let set = paper.set();
	let circles     	= 3;
	let smallest    	= 5; // smallest circle
	let gap         	= 5; // gap between circles
	let strokeWidth 	= 2; // stroke width
	let margin      	= 10; // margin
	let opacityValue 	= 1; // initial 
	
	// initRaphael(js_user_inputFrom);

	js_user_inputFrom.onsubmit = (e) => {
    e.preventDefault();

    let js_num_circle = Number(document.querySelector('#js-num_circle').value);
    let paper = new Raphael(canvasArea, 500, 501);
    for (let i=0; i < js_num_circle; i++)
    {
    	gap += smallest;
    	opacityValue -= 0.2;
	    paper.circle(230 + js_num_circle, 230 + js_num_circle, gap)
	        .attr({
	            'stroke-width':     strokeWidth,
	            stroke:             '#492f2c',
	            fill:               'none',
	            'fill-opacity':     0,
	            opacity:           opacityValue,
	        });
    }

    	alert(js_num_circle);
    };
}
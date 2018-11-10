window.onload = function() {

var img = new Image();
img.src = '../assets/img/inrsaurabh.jpeg';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvasPrintHere = document.getElementById('printHere');
var ctxPrintHere = canvasPrintHere.getContext('2d');



img.onload = function() {
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
};

var divrgba = document.getElementById("rgba");

function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1); // get pixel data
  
  // console.log(pixel.data);

  var data = pixel.data;
  
  divrgba.innerHTML = `
	  R : ${data[0]} 
	  G : ${data[1]} 
	  B : ${data[2]} 
	  A : ${data[3]} 
`;
	
  var rgba = 'rgba(' + data[0] + ', ' + data[1] +
             ', ' + data[2] + ', ' + (data[3] / 255) + ')';

  divrgba.style.background =  rgba;
  ctxPrintHere.putImageData(ctx.getImageData(x, y, 150, 100), 100, 50);
  
 
  // console.log(dataURI);

  

}

canvas.addEventListener('mousemove', pick);

canvas.addEventListener('click', clickPick);

function clickPick(event) {
	let x = event.layerX;
	let y = event.layerY;

	ctxPrintHere.width = 50;
	ctxPrintHere.height = 100;

	ctxPrintHere.putImageData(ctx.getImageData(x, y, 50, 100), 100, 50);

	let dataURI = canvasPrintHere.toDataURL('image/png');
	document.getElementById("newImg").src = dataURI;

	var link = document.createElement('a');
    
    link.innerHTML = 'Click To Download';
    link.href = dataURI;
    link.style = "display:block";
    link.download = "clickPick.png";

	document.getElementById("js-clickPickImages").appendChild(link);


}

}

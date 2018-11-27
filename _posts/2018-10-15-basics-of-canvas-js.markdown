---
layout: post
title: "Basics of canvas"
date: 2018-10-13 13:32:20 +0300
description: Draw on canvas ,use of getImageData and putImageData
---

- [X] Create an image object
- [X] Assign to #canvas
- [X] Get Image Data of 50 * 100
- [X] Put image data to #printHere canvas
- [X] Put image data to #newImg img
- [X] Download the choosed portion of canvas as png


		Move your mouse over canvas to create the downloadable png img

<div class="wrapper">
	<div class="main-canvas">
			<canvas id="canvas"  width="500" height="500" style="float:left;"></canvas>
			<span>Preview</span>
			<canvas id="printHere" style="float:left"></canvas>
	</div>
	<div class="canvas-output">
		<img src="" id="newImg">
		<div id="rgba"></div>
	</div>
</div>

<div id="js-clickPickImages"></div>
<div class="clearfix"></div>

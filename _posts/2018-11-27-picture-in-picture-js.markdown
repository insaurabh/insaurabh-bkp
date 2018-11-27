---
layout: post
title: "Picture in picture (pip)"
date: 2018-10-14 13:32:20 +0300
description: Draw on canvas ,use of getImageData and putImageData
sticky: true
---


<div>Simple Video player </div>
<video id="videopip" src="{{site.baseurl}}/assets/video/picture-in-picture-pip.mkv"  width="400" controls></video>
<button id="togglePipButton">Slide me Left</button>

<div>
	<ul>
		<li>Closing the tab the video is on will close the player</li>
		<li>You can’t have more than one PIP on screen at the same time</li>
		<li>If autoplay is enabled the next video will play in PIP automatica</li>
	</ul>
</div>

<script>
 let pipWindow;
  // Hide button if Picture-in-Picture is not supported or disabled.
  togglePipButton.hidden = !document.pictureInPictureEnabled || videopip.disablePictureInPicture;

  togglePipButton.addEventListener('click', function() {
    // If there is no element in Picture-in-Picture yet, let’s request
    // Picture-in-Picture for the video, otherwise leave it.
    if (!document.pictureInPictureElement) {
      videopip.requestPictureInPicture()
      .catch(error => {
       console.log(error);
      });
    } else {
      document.exitPictureInPicture()
      .catch(error => {
        // Video failed to leave Picture-in-Picture mode.
	       console.log(error);
      });
    }
  });

	videopip.addEventListener('enterpictureinpicture', function(event) {
	// Video entered Picture-in-Picture mode.
	const pipWindow = event.pictureInPictureWindow;
	console.log('Picture-in-Picture window width: ' + pipWindow.width);
	console.log('Picture-in-Picture window height: ' + pipWindow.height);
	// pipWindow.width + 100; // this way dont worked
	updateVideoSize(pipWindow.width, pipWindow.height);
	 pipWindow.addEventListener('resize', onPipWindowResize);
	});

	function onPipWindowResize(event) {
	console.log(event.target.width);
	// Picture-in-Picture window has been resized.
	updateVideoSize(event.target.width, event.target.height);
	}

	function updateVideoSize(width, height) {
    // TODO: Update video size based on pip window width and height.
     console.log(`> Window size changed to ${pipWindow.width}x${pipWindow.height}`);
  	}
	
	videopip.addEventListener('leavepictureinpicture', function() {
		console.log('we are in normal position');
	});

</script>
<div class="clearfix"></div>





Lets Draw some lines [an example](/draw-lines-raphael-js "Draw lines in Raphael")










Please share your question below.

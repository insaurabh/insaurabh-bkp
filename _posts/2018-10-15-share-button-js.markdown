---
layout: post
title: "Shre button using js"
date: 2018-10-14 13:32:20 +0300
description: Draw on canvas ,use of getImageData and putImageData
---

		
<button id="shareButton">Share</button>
<div class="clearfix"></div>

<script type="text/javascript">
    let shareButton =  document.getElementById('shareButton');

    shareButton.addEventListener("click", async () => {
  navigator.share({
    title: document.title,
    text: "Hello World",
    url: window.location.href
}).then(() => console.log('Successful share'))
.catch((error) => console.log('Error sharing:', error));

});
</script>
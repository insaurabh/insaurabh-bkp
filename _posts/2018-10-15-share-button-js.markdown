---
layout: post
title: "Shre button using js"
date: 2018-10-14 13:32:20 +0300
description: Draw on canvas ,use of getImageData and putImageData
---

<div>This is an experimental technology (Nov-19th-18 )</div>
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share#Browser_compatibility">Browser Compatibility </a>	
<br/>
<button id="shareButton">Share</button>
<br/>
<div id="message"></div>
<div class="clearfix"></div>

<script type="text/javascript">
    let shareButton =  document.getElementById('shareButton');
    let msgButton =  document.getElementById('message');

if (navigator.share) {
    shareButton.addEventListener("click", async () => {
  navigator.share({
    title: document.title,
    text: "Hello World",
    url: window.location.href
}).then(() => console.log('Successful share'))
.catch((error) => console.log('Error sharing:', error));

});
 } else {
 	msgButton.innerText = ("Web share API not supported yet in your browser, test in your mobile browser");
 }   
</script>

<style type="text/css">
	div#message {
    color: red;
    font-size: 19px;
}
</style>
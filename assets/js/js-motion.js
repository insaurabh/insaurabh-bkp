window.onload=function(){window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,e){window.setTimeout(t,1e3/60)}),navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,window.URL=window.URL||window.webkitURL;var t=document.getElementById("myCam");navigator.getUserMedia({video:!0},function(e){window.URL?t.src=window.URL.createObjectURL(e):t.src=e},function(t){});var e,a=document.getElementById("myCam"),n=document.getElementById("videoCanvas"),o=n.getContext("2d"),i=document.getElementById("blendCanvas").getContext("2d"),d=document.getElementById("messageArea");function r(t){console.log(t),"up"==t&&window.scrollBy(0,-50),"down"==t&&window.scrollBy(0,20)}o.translate(320,0),o.scale(-1,1),o.fillStyle="#000AFF",o.fillRect(0,0,n.width,n.height),function t(){requestAnimationFrame(t);a.readyState===a.HAVE_ENOUGH_DATA&&o.drawImage(a,0,0,n.width,n.height);!function(){var t=n.width,a=n.height,d=o.getImageData(0,0,t,a);e||(e=o.getImageData(0,0,t,a));var r=o.createImageData(t,a);(function(t,e,a){var n=0;for(;n<t.length/4;){var o=(t[4*n]+t[4*n+1]+t[4*n+2])/3,i=(e[4*n]+e[4*n+1]+e[4*n+2])/3,d=o-i>21?255:0;a[4*n]=d,a[4*n+1]=d,a[4*n+2]=d,a[4*n+3]=255,++n}})(d.data,e.data,r.data),i.putImageData(r,0,0),e=d}();!function(){n.width,n.height;var t=i.getImageData(250,0,50,50),e=i.getImageData(250,100,50,50);i.fillStyle="#EB2E2E",i.fillRect(250,0,50,50),i.fillStyle="#56E618",i.fillRect(250,100,50,50);var a=0,o=0,l=.25*t.data.length;for(;a<l;)o+=t.data[4*a]+t.data[4*a+1]+t.data[4*a+2],++a;Math.round(o/(3*l))>5?(d.innerHTML="<font color= red> Scroll Up </font>",r("up")):d.innerHTML="<font color=black> .....</font>";var w=.25*e.data.length,m=0,g=0;for(;m<w;)g+=e.data[4*m]+e.data[4*m+1]+e.data[4*m+2],++m;Math.round(g/(3*w))>10&&(r("down"),d.innerHTML="<font color= red> Scroll Down </font>")}()}()};
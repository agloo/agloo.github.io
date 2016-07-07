
setTimeout((function() {
	var color = 0,
	colors = ['#b32e7f', '#ffffff', '#4d9cde', '#f84747', '2ec331'];

	setInterval(function() {
		document.body.style.background = colors[color];
		color = Math.floor(Math.random() * colors.length)
	}, 500);
}), 6617);
/*The JPG option:
var imgnum = 0
setInterval(function() {
    var img = document.getElementById("plsmakeitagif");
    if (imgnum) {
        img.src = "drakle.png";
    }
    else {
        img.src = "theman2.png";
    }
    imgnum = 1-imgnum;
}, 500);
*/

<!-- for falling objects -->
<script type="text/javascript" SRC="confetti.js"></script>

<!-- for changing title text -->
<script>
(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
      }, 500);
}("DER$DER$DER$"));
</script>
</head>

<!-- HTML I WAS TOO LAZY TO OUTSOURCE -->
<style>
*{margin: 0; padding: 0;}
div.theman {
	position: absolute;
	top: 50%;
	left:50%;
	margin-left: -174px;
	margin-right: -208px
}
</style>

<body>
        <button onclick="song.init(); call.init(); style.display = 'none';">Get Drizzy</button>

<!-- canvas for confetti -->
<canvas id="canvas"></canvas>
<!-- Drake's original width is 87px and he is 104px tall. -->
<!-- We use the div tag to put our drake in the middle-->
<div class="theman">
<img src="thegif.gif" width ="348px" height="416px">
</div>
<!-- <audio src="theCall.wav"autoplay hidden="true"> -->
<!-- This javascript delays the main portion of the song which loops so it comes right after our intro. -->
<!--<audio loop="true" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 13235);">
	<source src="theSong.wav" type="audio/wav" />
</audio>-->


<!-- SCRIPTS -->
<!-- for color-changing background:-->
<script>
setTimeout((function() {
	var color = 0,
	colors = ['#b32e7f', '#ffffff', '#4d9cde', '#f84747', '2ec331'];

	setInterval(function() {
		document.body.style.background = colors[color];
		color = Math.floor(Math.random() * colors.length)
	}, 500);
}), 6617);
</script>

<!-- for falling objects -->
<script type="text/javascript" SRC="confetti.js"></script>

<!-- for changing title text -->
<script>
(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
      }, 500);
}("$DER$DER$DER"));
</script>
<!--<script SRC="draw.js"></script>-->
</body>
</html>

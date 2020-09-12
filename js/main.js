var i = 0;
var txt = 'Hello! This is our first project!'; /* The text */
var speed = 125; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
	if (i <= txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
	
}
window.onload = function(){
	window.setInterval(function(){
	var time = new Date();
	document.getElementById("clock").innerHTML = time.toLocaleTimeString();
	}, 1000);
}
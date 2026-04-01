
function mainLoop(fast) {
	
	var interval = fast ? 30000 : 50000;
	var randWait = fast ? 0 : 10000;
	
	//if (fast) {
		//setTimeout(() => {
			createImage();
			$("#imageContainer").fadeTo(5000, 0.75);
			setTimeout(() => {
				$("#imageContainer").fadeTo(5000, 0);
				setTimeout(() => {
					document.getElementById("imgElement").remove();
				}, 5000);
			}, 20000);
	
		//}, Math.floor(Math.random() * randWait));
	//}
	
	var nextTimeout = Math.floor(Math.random() * randWait);
	console.log("Next wait: " + ((interval+nextTimeout-20000)/60000).toFixed(2) + " minutes"); 
	
	setInterval(() => {
		setTimeout(() => {
			createImage();
			$("#imageContainer").fadeTo(5000, 0.75);
			setTimeout(() => {
				$("#imageContainer").fadeTo(5000, 0);
				setTimeout(() => {
					document.getElementById("imgElement").src = "";
					document.getElementById("imgElement").remove();
				}, 5000);
			}, 20000);
	
		}, nextTimeout);
		
		nextTimeout = Math.floor(Math.random() * randWait);
		console.log("Next wait: " + ((interval+nextTimeout-20000)/60000).toFixed(2) + " minutes"); 
		
	}, interval);
 
} 

function createImage() {
	
	var posX = Math.floor(Math.random() * 1771)-50;
	var posY = Math.floor(Math.random() * 931)-50;
	var rotAngle = Math.floor(Math.random() * 360)-180;
	
	var imgCont = document.getElementById("imageContainer");
	var imgElem = document.createElement("img");
	imgElem.id = "imgElement";
	imgElem.src = "images/" + pickRandomImage();
	imgElem.style.maxHeight = "300px";
	imgElem.style.maxWidth = "300px";
	imgElem.style.height = "auto";
	imgElem.style.width = "auto";
	imgCont.style.marginLeft = posX;
	imgCont.style.marginTop = posY;
	imgCont.style.marginTop = posY;
	imgCont.style.rotate = rotAngle + "deg";
	imgCont.style.opacity = 0;
	imgCont.appendChild(imgElem);
	
}

function pickRandomImage() {
	
	const imageList = [
		"kecleon_red.gif",
		"kecleon_brown.gif",
		"kecleon_yellow.gif",
		"kecleon_green.gif",
		"kecleon_cyan.gif",
		"kecleon_blue.gif",
		"kecleon_purple.gif",
		"kecleon_red_flip.gif",
		"kecleon_brown_flip.gif",
		"kecleon_yellow_flip.gif",
		"kecleon_green_flip.gif",
		"kecleon_cyan_flip.gif",
		"kecleon_blue_flip.gif",
		"kecleon_purple_flip.gif",
	];
	
	return imageList[Math.floor(Math.random() * imageList.length)];
	
}
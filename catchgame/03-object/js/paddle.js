var animationId,
	stageBottom,
	stageRight,
	ball,
	ballStart,
	ballSpeed = 5,
	fps = 40; 

function pageReady(){
	// Stage dimensions
	stageBottom = window.innerHeight;
	stageRight = window.innerWidth;

	// Setup ball
	ball = document.getElementById("ball");
	var ballWidth = ball.offsetWidth;
	ballStart = -ballWidth + "px";
	ball.style.top = ballStart;
	ball.style.left = randomRange(ballWidth/2, stageRight-ballWidth) + "px";
	
	// Animate the ball
	animationId = setInterval(animateBall, 1000/fps);	
}

function animateBall(){	
	if(ball.offsetTop > stageBottom){
		// Return to top
		ball.style.top = ballStart;	
	}
	else{
		// Move ball
		ball.style.top = ball.offsetTop + ballSpeed + "px";
	}
}

function randomRange(min, max){
	return(Math.random()*(max-min)+min);
}



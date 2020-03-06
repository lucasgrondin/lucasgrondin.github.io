
function bubblePopped(evt) { //define the (evt) in the function or it will not work! The title can be anything
	let hoverObject = evt.target; 
	if (evt. propertyName == 'opacity') { //checks within the function if the transition is 'opacity'
		hoverObject.style.top = `${Math.round(Math.random() * 100)}%`;// Math gives you a number between 0/1, .round eliminates decimals, * makes it whole number 
		// ^ reassigned the .top value in our css!
		hoverObject.style.left = `${Math.round(Math.random() * 95)}%`;
		
		hoverObject.classList.remove('pop'); //similar to display none 
		hoverObject.removeEventListener( 'transitionend', bubblePopped);
	}
}

function popBubble(event) {
	let hoverObject = event.target; 
	if (hoverObject.classList.contains('bubble')) {
		hoverObject.classList.add('pop');
		
		hoverObject.addEventListener('transitionend', bubblePopped)
	}
}

function popBubbles(event) {
	let bubbles = document.querySelectorAll('.bubble');
	bubbles.forEach(function (bubble) { //using anonymous function 
		bubble.classList.add('pop');
		bubble.addEventListener('transitionend', bubblePopped);
	});
	
}

let bubbleWrapper = document.querySelector('.bubble-wrapper');
let glass = document.querySelector('#glass');

glass.addEventListener('click', popBubbles);
// bubbleWrapper.addEventListener('mouseover', popBubble);


for (let i = 0; i < 75; i++) { 
	let bubble = document.createElement('div');
	bubble.className = 'bubble';
	bubble.style.top = `${Math.round(Math.random() * 100)}%`; //all we had to do was change the start element
	bubble.style.left = `${Math.round(Math.random() * 95)}%`; 
	bubbleWrapper.append(bubble); 
	
}



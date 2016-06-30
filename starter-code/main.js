console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
cardOne == cardTwo;

/*if (cardOne === cardTwo) {
	alert('You found a match!');
} else if (cardThree === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}*/

//getting element with id game-bpard and setting to a variable
var board = document.getElementById('game-board');


//declaring array
var cards = ["queen", "queen", "king", "king"];

//declaring empty array
var cardsInPlay = [];


// creating a 'for loop' to create div for each card
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		//adding attribute that equals card value; following example unit 11
		cardElement.setAttribute('data-card', cards[i]);
		//adding event listened to each card that runs a function, example unit 11
		cardElement.addEventListener('click', isTwoCards);
board.appendChild(cardElement);
	}
}

function isMatch() {
	if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	//show image of card
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src=/images/Hearts12>"; // king
	} else {
		this.innerHTML = "<img src=/images/Hearts13>"; //queen
	}
	//checking matches
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

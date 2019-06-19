// Array that holds the card objects.
cards = [       
                // Queen cards 
                {
                rank: "queen",
                suit: "hearts",
                cardImage: "images/queen-of-hearts.png"},

                {
                rank: "queen",
                suit: "diamonds",
                cardImage: "images/queen-of-diamonds.png"},

                // Kind cards
                {
                rank: "king",
                suit: "hearts",
                cardImage: "images/king-of-hearts.png"},

                {
                rank: "king",
                suit: "diamonds",
                cardImage: "images/king-of-diamonds.png"}
         ];

// Array that will hold the flipped cards.
cardsInPlay = [];


// Function to check whether the 2 cards are equal
function checkMatch() {
                if ( cardsInPlay[0].rank === cardsInPlay[1].rank ) {
                    //Inserts a message into an html element
                    document.getElementById('alert').innerHTML =  "Congratulations!! You Found A Match."; 
                    if ( score === '' ) {
                        score =+ 1;
                        console.log(score);
                    } else {
                        score =+ 1;
                    }
                    // if ( sessionStorage.getItem('score') === ''){
                    // sessionStorage.setItem('score', '0');
                    // userScore = sessionStorage.getItem('score')
                    // tempScore = Number(userScore);
                    // console.log(tempScore, typeof tempScore);
                    // tempScore += 1;
                    // tempScore1 = String(tempScore);
                    // sessionStorage.setItem('score', tempScore1);
                    // document.getElementById('score').innerHTML = localStorage.getItem('score'); 
                    // // console.log(score1);
                    // // console.log(score1, typeof score1);  
                    // } else { userScore = sessionStorage.getItem('score');
                              document.getElementById('score').innerHTML = score;  
                } else {
                    document.getElementById('alert').innerHTML = "Sorry, Try Again"
                    }   
                };
// Function for flipping the cards           
function flipCard(){
    cardId = this.getAttribute('data-id');
    console.log("data-Id: " + cardId);
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId]);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage); 
    if (cardsInPlay.length === 2){
    checkMatch();
    }
    if (cardsInPlay.length > 2) {
        alert("You must reset the cards, let me do that for you real quick...");
        location.reload(false);
    }
};

function randomizeCards(){
    cards.sort(function(a,b) {return 0.5-Math.random()});
}

function createBoard() {
    
    for (var i = 0; i < cards.length; i ++) {
       var cardElement = document.createElement('img');
       cardElement.setAttribute('src', 'images/back.png');
       cardElement.setAttribute('data-id', i);
       cardElement.addEventListener('click', flipCard);
       var element = document.getElementById('game-board');
       element.appendChild(cardElement);
    }

    var button = document.getElementById('resetButton');
    button.addEventListener('click', reloadPage);
    
};

function reloadPage() {
    location.reload(false);
}

randomizeCards();
createBoard();
flipCard();

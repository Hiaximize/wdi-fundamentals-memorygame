

cards = [
                {
                rank: "queen",
                suit: "hearts",
                cardImage: "images/queen-of-hearts.png"},

                {
                rank: "queen",
                suit: "diamonds",
                cardImage: "images/queen-of-diamonds.png"},

                {
                rank: "king",
                suit: "hearts",
                cardImage: "images/king-of-hearts.png"},

                {
                rank: "king",
                suit: "diamonds",
                cardImage: "images/king-of-diamonds.png"}
         ];

cardsInPlay = [];



function checkMatch() {
            if ( cardsInPlay[0].rank === cardsInPlay[1].rank ) {
                alert("You found a match!");
            } else {
                alert("Sorry, try again.");
                }   
            }; 
        



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
};


function createBoard() {
    for (var i = 0; i < cards.length; i ++) {
       var cardElement = document.createElement('img');
       cardElement.setAttribute('src', 'images/back.png');
       cardElement.setAttribute('data-id', i);
       cardElement.addEventListener('click', flipCard);
       var element = document.getElementById('game-board');
       element.appendChild(cardElement);
    }
};


createBoard();
flipCard();



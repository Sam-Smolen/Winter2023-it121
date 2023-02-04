//define a Card object with 'value' and 'suit' properties. 
 //define an array of 52 Card objects to represent all unique cards in a deck. To simplify things, you can assign numeric values to 'face' cards
//define a function that randomly selects 5 cards from your deck
//display information about the selected cards on the containing HTML page (you can use this template Download this templateas a start). You should display the 'name' for face cards rather than their numeric value.

var cardData = {
    "suit": ["CLUBS", "DIAMONDS", "HEARTS", "SPADES"],
    "value": ["ACE", 2, 3, 4, 5, 6, 7, 8, 9, 10, "JACK", "QUEEN", "KING"]
};
//console.log(card);
var cardSuit = cardData.suit;
var cardVal = cardData.value;

function buildDeck() {
    let deck = [];
    for (let i = 0; i < cardSuit.length; i++) {
        for (let j = 0; j < cardVal.length; j++) {
            let card = {"suit":cardSuit[i], "value":cardVal[j]};
            //console.log("card:" + card.suit + " " + card.value)
            deck.push(card);
        }
    }
    return deck;
}
function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i]; // store card in temp variable 
        deck[i] = deck[j]; // replace the value of the card, with random card 
        deck[j] = temp; 
    }
    return deck;
}

function dealHand() {
    let hand = [];
    for (let i = 0; i < 5; i++) {
        let card = deck.pop();
        hand.push(card);
        console.log(deck.length);
    }
    return hand;
}

let deck = buildDeck();
deck = shuffleDeck();
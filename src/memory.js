
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards=[];
    this.pairsClicked=0;
    this.pairsGuessed=0;
  }

  shuffleCards() {
    
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random());
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
   }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
 }

 checkIfFinished() {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;}
    else if(this.pairsGuessed !== this.cards.length / 2){
      return false;
    }
 
      // Game finished logic
    }
 

 getTotalPairs() {
    // Logic to get total pairs in the game
 }

}

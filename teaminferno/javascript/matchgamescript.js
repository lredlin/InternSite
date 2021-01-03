// Selects all cards 
const cards = document.querySelectorAll('.memory-card');

// Variables to track status
let hasFlippedCard = false;
let firstCard, secondCard;
let counter = 0;
let lockBoard = false;

// Flips card when user clicks 
function flipCard() {

  // Prevents flipping when board is locked
  if (lockBoard) return;

  // Prevents a card from being flipped twice consecutively
  if (this === firstCard) return;

  // Activates CSS style change for flip
  this.classList.add('flip');

  // Sets variables to prevent duplicate flips
  if (!hasFlippedCard) {

    hasFlippedCard = true;

    firstCard = this;

    return;

  }

  // If not first card, sets secondCard variable to maintain cards flipped
  secondCard = this;

  // Checks for match after flips are complete
  checkForMatch();

}

// replaceAt function to replace characters at index
String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

// Checks for match to determine if cards should be kept up
function checkForMatch() {

  // Checks for card equality
  if (firstCard.dataset.framework === secondCard.dataset.framework) {

    // Prevents flipping other cards during check
    disableCards();

    // Win counter incremented
    counter++;

    // If win occurs, checks url variables to return to home screen with appropriate level
    if (counter == 6) {

      // Checks URL variables to maintain status of completed games
      urlp = [];
      var s = location.toString().split('?');
      if (s != null) {
        s = s[1].split('&');
        for (var i = 0; i < s.length; i++) {
          var u = s[i].split('=');
          urlp[u[0]] = u[1];
        }
        var y = urlp['currstat'];
        var charSel = urlp['charSel'];
        y = y.replaceAt(0, "1");
        console.log(y);

        // Submits form to return to the home screen once the user has finished the game
        var x = document.createElement("FORM");
        x.action = 'index.html';
        x.innerHTML = "<input type = 'hidden' name='currstat'  value=" + y + "><input type = 'hidden' name='charSel'  value=" + charSel + ">";
      }
      document.getElementById("b").appendChild(x);
      x.submit();
    }
    return;
  }
    
  // Returns the cards to their original positions
  unflipCards();
}

// Removes even listeners so cards can't be flipped
function disableCards() {

  firstCard.removeEventListener('click', flipCard);

  secondCard.removeEventListener('click', flipCard);

  resetBoard();

}

// Returns cards to face up
function unflipCards() {

  lockBoard = true;

  setTimeout(() => {

    firstCard.classList.remove('flip');

    secondCard.classList.remove('flip');

    resetBoard();

  }, 1000);

}

// Resets variables to return cards to original values
function resetBoard() {

  [hasFlippedCard, lockBoard] = [false, false];

  [firstCard, secondCard] = [null, null];

}

// Moves cards to random positions 
(function shuffle() {
  cards.forEach(card => {

    let randomPos = Math.floor(Math.random() * 12);
      
    card.style.order = randomPos;

  });

})();

// Event listener to flip cards on click
cards.forEach(card => card.addEventListener('click', flipCard));

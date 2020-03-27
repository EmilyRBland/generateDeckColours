function generateDeckColours() {
 let randomNumber = Math.floor(Math.random() * 15);
  switch (randomNumber) {
    case 0:
      return 'Build a Black Deck';
    case 1:
      return 'Build a Red Deck';
    case 2:
      return 'Build a Green Deck';
    case 3:
      return 'Build a Blue Deck';
    case 4:
      return 'Build a Black & Red Deck';
    case 5:
      return 'Build a Black & Green Deck';
    case 6:
      return 'Build a Black & Blue Deck';
    case 7:
      return 'Build a Red & Green Deck';
    case 8:
      return 'Build a Red & Blue Deck';
    case 9:
      return 'Build a Green & Blue Deck';
    case 10:
      return 'Build a White Deck';
    case 11:
      return 'Build a White & Black Deck';
    case 12:
      return 'Build a White & Red Deck';
    case 13:
      return 'Build a White & Green Deck';
    case 14:
      return 'Build a White & Blue Deck';
    default:
      return 'Please try again.';
  }
}

function generate() {
  const chosenDeckColours = generateDeckColours();
  document.getElementById("deck").innerHTML = chosenDeckColours;
}
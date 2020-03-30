function generateDeckColours() {
 let randomNumber = Math.floor(Math.random() * 15);
  switch (randomNumber) {
    case 0:
      return 'Black';
    case 1:
      return 'Red';
    case 2:
      return 'Green';
    case 3:
      return 'Blue';
    case 4:
      return 'Black & Red';
    case 5:
      return 'Black & Green';
    case 6:
      return 'Black & Blue';
    case 7:
      return 'Red & Green';
    case 8:
      return 'Red & Blue';
    case 9:
      return 'Green & Blue';
    case 10:
      return 'White';
    case 11:
      return 'White & Black';
    case 12:
      return 'White & Red';
    case 13:
      return 'White & Green';
    case 14:
      return 'White & Blue';
    default:
      return 'Please try again.';
  }
}

function getManaLogos(deckColour) {
  switch (deckColour){
    case 'Black':
      return './img/black.png';
    case 'Red':
      return './img/red.png';
    case 'Green':
      return './img/green.png';
    case 'Blue':
      return './img/blue.png';
    case 'Black & Red':
      return './img/black.png';
    case 'Black & Green':
      return './img/black.png';
    case 'Black & Blue':
      return './img/black.png';
    case 'Red & Green':
      return './img/red.png';
    case 'Red & Blue':
      return './img/red.png';
    case 'Green & Blue':
      return './img/green.png';
    case 'White':
      return './img/white.png';
    case 'White & Black':
      return './img/white.png';
    case 'White & Red':
      return './img/white.png';
    case 'White & Green':
      return './img/white.png';
    case 'White & Blue':
      return './img/white.png';
    default:
      return 'No image available';
  }
}
  
  function getManaLogos2(deckColour) {
  switch (deckColour){
    case 'Black':
      return '';
    case 'Red':
      return '';
    case 'Green':
      return '';
    case 'Blue':
      return '';
    case 'Black & Red':
      return './img/red.png';
    case 'Black & Green':
      return './img/green.png';
    case 'Black & Blue':
      return './img/blue.png';
    case 'Red & Green':
      return './img/green.png';
    case 'Red & Blue':
      return './img/blue.png';
    case 'Green & Blue':
      return './img/blue.png';
    case 'White':
      return '';
    case 'White & Black':
      return './img/black.png';
    case 'White & Red':
      return './img/red.png';
    case 'White & Green':
      return './img/green.png';
    case 'White & Blue':
      return './img/blue.png';
    default:
      return 'No image available';
  }
}

function generate() {
  const chosenDeckColours = generateDeckColours();
  const manaLogos = getManaLogos(chosenDeckColours);
  const manaLogos2 = getManaLogos2(chosenDeckColours);
  document.getElementById("deck").innerHTML = `Build a ${chosenDeckColours} Deck`;
  document.getElementById("logo").src = manaLogos;
  document.getElementById("logo2").src = manaLogos2;
  const secondLogo = document.getElementById("logo2");
  if (manaLogos2 === '') {
    secondLogo.style.display = 'none';
  } else {
    secondLogo.style.display = 'inline';
  }
}
function generateDeckColours() {
 let randomNumber = Math.floor(Math.random() * 15);
  switch (randomNumber) {
    case 0:
      return 'Build a Black deck';
    case 1:
      return 'Build a Red deck';
    case 2:
      return 'Build a Green deck';
    case 3:
      return 'Build a Blue deck';
    case 4:
      return 'Build a Black & Red deck';
    case 5:
      return 'Build a Black & Green deck';
    case 6:
      return 'Build a Black & Blue deck';
    case 7:
      return 'Build a Red & Green deck';
    case 8:
      return 'Build a Red & Blue deck';
    case 9:
      return 'Build a Green & Blue deck';
    case 10:
      return 'Build a White deck';
    case 11:
      return 'Build a White & Black deck';
    case 12:
      return 'Build a White & Red deck';
    case 13:
      return 'Build a White & Green deck';
    case 14:
      return 'Build a White & Blue deck';
    default:
      return 'Please try again.';
  }
}

function generate() {
  const chosenDeckColours = generateDeckColours();
  document.getElementById("deck").innerHTML = chosenDeckColours;
}
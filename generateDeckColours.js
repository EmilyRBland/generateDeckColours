function generateDeckColours() {
 let randomNumber = Math.floor(Math.random() * 15);
  switch (randomNumber) {
    case 0:
      console.log('Build a Black deck');
      break;
    case 1:
      console.log('Build a Red deck');
      break;
    case 2:
      console.log('Build a Green deck');
      break;
    case 3:
      console.log('Build a Blue deck');
      break;
    case 4:
      console.log('Build a Black & Red deck');
      break;
    case 5:
      console.log('Build a Black & Green deck');
      break;
    case 6:
      console.log('Build a Black & Blue deck');
      break;
    case 7:
      console.log('Build a Red & Green deck');
      break;
    case 8:
      console.log('Build a Red & Blue deck');
      break;
    case 9:
      console.log('Build a Green & Blue deck');
      break;
    case 10:
      console.log('Build a White deck');
      break;
    case 11:
      console.log('Build a White & Black deck');
      break;
    case 12:
      console.log('Build a White & Red deck');
      break;
    case 13:
      console.log('Build a White & Green deck');
      break;
    case 14:
      console.log('Build a White & Blue deck');
      break;
    default:
      console.log('Please try again.');
  }
}

generateDeckColours();
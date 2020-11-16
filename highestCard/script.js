// JavaScript Document

let userCard = document.getElementById('userCard');
let cpuCard = document.getElementById('cpuCard');

//Card Deck Pics
//Hearts
const twoH = "images/deck/2H.jpg";
const threeH = "images/deck/3H.jpg";
const fourH = "images/deck/4H.jpg";
const fiveH = "images/deck/5H.jpg";
const sixH = "images/deck/6H.jpg";
const sevenH = "images/deck/7H.jpg";
const eightH = "images/deck/8H.jpg";
const nineH = "images/deck/9H.jpg";
const tenH = "images/deck/10H.jpg";
const jH = "images/deck/JH.jpg";
const qH = "images/deck/QH.jpg";
const kH = "images/deck/KH.jpg";
const aH = "images/deck/AH.jpg";

//Clubs
const twoC = "images/deck/2C.jpg";
const threeC = "images/deck/3C.jpg";
const fourC = "images/deck/4C.jpg";
const fiveC = "images/deck/5C.jpg";
const sixC = "images/deck/6C.jpg";
const sevenC = "images/deck/7C.jpg";
const eightC = "images/deck/8C.jpg";
const nineC = "images/deck/9C.jpg";
const tenC = "images/deck/10C.jpg";
const jC = "images/deck/JC.jpg";
const qC = "images/deck/QC.jpg";
const kC = "images/deck/KC.jpg";
const aC = "images/deck/AC.jpg";

//Diamonds
const twoD = "images/deck/2D.jpg";
const threeD = "images/deck/3D.jpg";
const fourD = "images/deck/4D.jpg";
const fiveD = "images/deck/5D.jpg";
const sixD = "images/deck/6D.jpg";
const sevenD = "images/deck/7D.jpg";
const eightD = "images/deck/8D.jpg";
const nineD = "images/deck/9D.jpg";
const tenD = "images/deck/10D.jpg";
const jD = "images/deck/JD.jpg";
const qD = "images/deck/QD.jpg";
const kD = "images/deck/KD.jpg";
const aD = "images/deck/AD.jpg";

//Spades
const twoS = "images/deck/2S.jpg";
const threeS = "images/deck/3S.jpg";
const fourS = "images/deck/4S.jpg";
const fiveS = "images/deck/5S.jpg";
const sixS = "images/deck/6S.jpg";
const sevenS = "images/deck/7S.jpg";
const eightS = "images/deck/8S.jpg";
const nineS = "images/deck/9S.jpg";
const tenS = "images/deck/10S.jpg";
const jS = "images/deck/JS.jpg";
const qS = "images/deck/QS.jpg";
const kS = "images/deck/KS.jpg";
const aS = "images/deck/AS.jpg";

const back = "images/deck/Red_back.jpg";

let afterCard = document.getElementById('afterCard');
let afterCard2 = document.getElementById('afterCard2')

let money = 100;

let deckList = new Array(twoH, threeH, fourH, fiveH, sixH, sevenH, eightH, nineH, tenH, jH, qH, kH, aH, twoC, threeC, fourC, fiveC, sixC, sevenC, eightC, nineC, tenC, jC, qC, kC, aC, twoD, threeD, fourD, fiveD, sixD, sevenD, eightD, nineD, tenD, jD, qD, kD, aD, twoS, threeS, fourS, fiveS, sixS, sevenS, eightS, nineS, tenS, jS, qS, kS, aS);

let userPoints;
let cpuPoints;
let currentPoints;

let buttonText = document.getElementById('buttonText');
let afterSelection = document.getElementById('afterSelection');

numA = Math.floor(Math.random() * 52);
num2 = Math.floor(Math.random() * 52);

const userCardClick = (num) => {
if (num === 0){
  userCard.src = deckList[0];
  afterCard.innerHTML = 'You chose the 2 of Hearts.';
  userPoints = 2;
} else if (num === 1){
  userCard.src = deckList[1];
  afterCard.innerHTML = 'You chose the 3 of Hearts.';
  userPoints = 3;
} else if (num === 2) {
  userCard.src = deckList[2];
  afterCard.innerHTML = 'You chose the 4 of Hearts.';
  userPoints = 4;
} else if (num === 3) {
  userCard.src = deckList[3];
  afterCard.innerHTML = 'You chose the 5 of Hearts.';
  userPoints = 5;
} else if (num === 4) {
  userCard.src = deckList[4];
  afterCard.innerHTML = 'You chose the 6 of Hearts.';
  userPoints = 6;
} else if (num === 5) {
  userCard.src = deckList[5];
  afterCard.innerHTML = 'You chose the 7 of Hearts.';
  userPoints = 7;
} else if (num === 6) {
  userCard.src = deckList[6];
  afterCard.innerHTML = 'You chose the 8 of Hearts.';
  userPoints = 8;
} else if (num === 7) {
  userCard.src = deckList[7];
  afterCard.innerHTML = 'You chose the 9 of Hearts.';
  userPoints = 9;
} else if (num === 8) {
  userCard.src = deckList[8];
  afterCard.innerHTML = 'You chose the 10 of Hearts.';
  userPoints = 10;
} else if (num === 9) {
  userCard.src = deckList[9];
  afterCard.innerHTML = 'You chose the Jack of Hearts.';
  userPoints = 10;
} else if (num === 10) {
  userCard.src = deckList[10];
  afterCard.innerHTML = 'You chose the Queen of Hearts.';
  userPoints = 10;
} else if (num === 11) {
  userCard.src = deckList[11];
  afterCard.innerHTML = 'You chose the King of Hearts.';
  userPoints = 10;
} else if (num === 12) {
  userCard.src = deckList[12];
  afterCard.innerHTML = 'You chose the Ace of Hearts.';
  userPoints = 20;
} else if (num === 13) {
  userCard.src = deckList[13];
  afterCard.innerHTML = 'You chose the 2 of Clubs.';
  userPoints = 2;
} else if (num === 14) {
  userCard.src = deckList[14];
  afterCard.innerHTML = 'You chose the 3 of Clubs.';
  userPoints = 3;
} else if (num === 15) {
  userCard.src = deckList[15];
  afterCard.innerHTML = 'You chose the 4 of Clubs.';
  userPoints = 4;
} else if (num === 16) {
  userCard.src = deckList[16];
  afterCard.innerHTML = 'You chose the 5 of Clubs.';
  userPoints = 5;
} else if (num === 17) {
  userCard.src = deckList[17];
  afterCard.innerHTML = 'You chose the 6 of Clubs.';
  userPoints = 6;
} else if (num === 18) {
  userCard.src = deckList[18];
  afterCard.innerHTML = 'You chose the 7 of Clubs.';
  userPoints = 7;
} else if (num === 19) {
  userCard.src = deckList[19];
  afterCard.innerHTML = 'You chose the 8 of Clubs.';
  userPoints = 8;
} else if (num === 20) {
  userCard.src = deckList[20];
  afterCard.innerHTML = 'You chose the 9 of Clubs.';
  userPoints = 9;
} else if (num === 21) {
  userCard.src = deckList[21];
  afterCard.innerHTML = 'You chose the 10 of Clubs.';
  userPoints = 10;
} else if (num === 22) {
  userCard.src = deckList[22];
  afterCard.innerHTML = 'You chose the Jack of Clubs.';
  userPoints = 10;
} else if (num === 23) {
  userCard.src = deckList[23];
  afterCard.innerHTML = 'You chose the Queen of Clubs.';
  userPoints = 10;
} else if (num === 24) {
  userCard.src = deckList[24];
  afterCard.innerHTML = 'You chose the King of Clubs.';
  userPoints = 10;
} else if (num === 25) {
  userCard.src = deckList[25];
  afterCard.innerHTML = 'You chose the Ace of Clubs.';
  userPoints = 20;
} else if (num === 26) {
  userCard.src = deckList[26];
  afterCard.innerHTML = 'You chose the 2 of Diamonds.'
  userPoints = 2;
} else if (num === 27) {
  userCard.src = deckList[27];
  afterCard.innerHTML = 'You chose the 3 of Diamonds.'
  userPoints = 3;
} else if (num === 28) {
  userCard.src = deckList[28];
  afterCard.innerHTML = 'You chose the 4 of Diamonds.'
  userPoints = 4;
} else if (num === 29) {
  userCard.src = deckList[29];
  afterCard.innerHTML = 'You chose the 5 of Diamonds.'
  userPoints = 5;
} else if (num === 30) {
  userCard.src = deckList[30];
  afterCard.innerHTML = 'You chose the 6 of Diamonds.'
  userPoints = 6;
} else if (num === 31) {
  userCard.src = deckList[31];
  afterCard.innerHTML = 'You chose the 7 of Diamonds.'
  userPoints = 7;
} else if (num === 32) {
  userCard.src = deckList[32];
  afterCard.innerHTML = 'You chose the 8 of Diamonds.'
  userPoints = 8;
} else if (num === 33) {
  userCard.src = deckList[33];
  afterCard.innerHTML = 'You chose the 9 of Diamonds.'
  userPoints = 9;
} else if (num === 34) {
  userCard.src = deckList[34];
  afterCard.innerHTML = 'You chose the 10 of Diamonds.'
  userPoints = 10;
} else if (num === 35) {
  userCard.src = deckList[35];
  afterCard.innerHTML = 'You chose the Jack of Diamonds.'
  userPoints = 10;
} else if (num === 36) {
  userCard.src = deckList[36];
  afterCard.innerHTML = 'You chose the Queen of Diamonds.'
  userPoints = 10;
} else if (num === 37) {
  userCard.src = deckList[37];
  afterCard.innerHTML = 'You chose the King of Diamonds.'
  userPoints = 10;
} else if (num === 38) {
  userCard.src = deckList[38];
  afterCard.innerHTML = 'You chose the Ace of Diamonds.'
  userPoints = 20;
} else if (num === 39) {
  userCard.src = deckList[39];
  afterCard.innerHTML = 'You chose the 2 of Spades.'
  userPoints = 2;
} else if (num === 40) {
  userCard.src = deckList[40];
  afterCard.innerHTML = 'You chose the 3 of Spades.'
  userPoints = 3;
} else if (num === 41) {
  userCard.src = deckList[41];
  afterCard.innerHTML = 'You chose the 4 of Spades.'
  userPoints = 4;
} else if (num === 42) {
  userCard.src = deckList[42];
  afterCard.innerHTML = 'You chose the 5 of Spades.'
  userPoints = 5;
} else if (num === 43) {
  userCard.src = deckList[43];
  afterCard.innerHTML = 'You chose the 6 of Spades.'
  userPoints = 6;
} else if (num === 44) {
  userCard.src = deckList[44];
  afterCard.innerHTML = 'You chose the 7 of Spades.'
  userPoints = 7;
} else if (num === 45) {
  userCard.src = deckList[45];
  afterCard.innerHTML = 'You chose the 8 of Spades.'
  userPoints = 8;
} else if (num === 46) {
  userCard.src = deckList[46];
  afterCard.innerHTML = 'You chose the 9 of Spades.'
  userPoints = 9;
} else if (num === 47) {
  userCard.src = deckList[47];
  afterCard.innerHTML = 'You chose the 10 of Spades.'
  userPoints = 10;
} else if (num === 48) {
  userCard.src = deckList[48];
  afterCard.innerHTML = 'You chose the Jack of Spades.'
  userPoints = 10;
} else if (num === 49) {
  userCard.src = deckList[49];
  afterCard.innerHTML = 'You chose the Queen of Spades.'
  userPoints = 10;
} else if (num === 50) {
  userCard.src = deckList[50];
  afterCard.innerHTML = 'You chose the King of Spades.'
  userPoints = 10;
} else if (num === 51) {
  userCard.src = deckList[51];
  afterCard.innerHTML = 'You chose the Ace of Spades.'
  userPoints = 20;
} return userPoints }
const cpuCardClick = (num) => {
  if (num === 0){
    cpuCard.src = deckList[0];
    afterCard2.innerHTML = 'Opponent chose the 2 of Hearts.';
    cpuPoints = 2;
  } else if (num === 1){
    cpuCard.src = deckList[1];
    afterCard2.innerHTML = 'Opponent chose the 3 of Hearts.';
    cpuPoints = 3;
  } else if (num === 2) {
    cpuCard.src = deckList[2];
    afterCard2.innerHTML = 'Opponent chose the 4 of Hearts.';
    cpuPoints = 4;
  } else if (num === 3) {
    cpuCard.src = deckList[3];
    afterCard2.innerHTML = 'Opponent chose the 5 of Hearts.';
    cpuPoints = 5;
  } else if (num === 4) {
    cpuCard.src = deckList[4];
    afterCard2.innerHTML = 'Opponent chose the 6 of Hearts.';
    cpuPoints = 6;
  } else if (num === 5) {
    cpuCard.src = deckList[5];
    afterCard2.innerHTML = 'Opponent chose the 7 of Hearts.';
    cpuPoints = 7;
  } else if (num === 6) {
      cpuCard.src = deckList[6];
      afterCard2.innerHTML = 'Opponent chose the 8 of Hearts.';
      cpuPoints = 8;
    } else if (num === 7) {
      cpuCard.src = deckList[7];
      afterCard2.innerHTML = 'Opponent chose the 9 of Hearts.';
      cpuPoints = 9;
    } else if (num === 8) {
      cpuCard.src = deckList[8];
      afterCard2.innerHTML = 'Opponent chose the 10 of Hearts.';
      cpuPoints = 10;
    } else if (num === 9)  {
      cpuCard.src = deckList[9];
      afterCard2.innerHTML = 'Opponent chose the Jack of Hearts.';
      cpuPoints = 10;
    } else if (num === 10) {
      cpuCard.src = deckList[10];
      afterCard2.innerHTML = 'Opponent chose the Queen of Hearts.';
      cpuPoints = 10;
    } else if (num === 11) {
      cpuCard.src = deckList[11];
      afterCard2.innerHTML = 'Opponent chose the King of Hearts.';
      cpuPoints = 10;
    } else if (num === 12) {
      cpuCard.src = deckList[12];
      afterCard2.innerHTML = 'Opponent chose the Ace of Hearts.';
      cpuPoints = 20;
    } else if (num === 13) {
      cpuCard.src = deckList[13];
      afterCard2.innerHTML = 'Opponent chose the 2 of Clubs.';
      cpuPoints = 2;
    } else if (num === 14) {
      cpuCard.src = deckList[14];
      afterCard2.innerHTML = 'Opponent chose the 3 of Clubs.';
      cpuPoints = 3;
    } else if (num === 15) {
      cpuCard.src = deckList[15];
      afterCard2.innerHTML = 'Opponent chose the 4 of Clubs.';
      cpuPoints = 4;
    } else if (num === 16) {
      cpuCard.src = deckList[16];
      afterCard2.innerHTML = 'Opponent chose the 5 of Clubs.';
      cpuPoints = 5;
    } else if (num === 17) {
      cpuCard.src = deckList[17];
      afterCard2.innerHTML = 'Opponent chose the 6 of Clubs.';
      cpuPoints = 6;
    } else if (num === 18) {
      cpuCard.src = deckList[18];
      afterCard2.innerHTML = 'Opponent chose the 7 of Clubs.';
      cpuPoints = 7;
    } else if (num === 19) {
      cpuCard.src = deckList[19];
      afterCard2.innerHTML = 'Opponent chose the 8 of Clubs.';
      cpuPoints = 8;
    } else if (num === 20) {
      cpuCard.src = deckList[20];
      afterCard2.innerHTML = 'Opponent chose the 9 of Clubs.';
      cpuPoints = 9;
    } else if (num === 21) {
      cpuCard.src = deckList[21];
      afterCard2.innerHTML = 'Opponent chose the 10 of Clubs.';
      cpuPoints = 10;
    } else if (num === 22) {
      cpuCard.src = deckList[22];
      afterCard2.innerHTML = 'Opponent chose the Jack of Clubs.';
      cpuPoints = 10;
    } else if (num === 23) {
      cpuCard.src = deckList[23];
      afterCard2.innerHTML = 'Opponent chose the Queen of Clubs.';
      cpuPoints = 10;
    } else if (num === 24) {
      cpuCard.src = deckList[24];
      afterCard2.innerHTML = 'Opponent chose the King of Clubs.';
      cpuPoints = 10;
    } else if (num === 25) {
      cpuCard.src = deckList[25];
      afterCard2.innerHTML = 'Opponent chose the Ace of Clubs.';
      cpuPoints = 20;
    }  else if (num === 26) {
        cpuCard.src = deckList[26];
        afterCard2.innerHTML = 'Opponent chose the 2 of Diamonds.'
        cpuPoints = 2;
      } else if (num === 27) {
        cpuCard.src = deckList[27];
        afterCard2.innerHTML = 'Opponent chose the 3 of Diamonds.'
        cpuPoints = 3;
      } else if (num === 28) {
        cpuCard.src = deckList[28];
        afterCard2.innerHTML = 'Opponent chose the 4 of Diamonds.'
        cpuPoints = 4;
      } else if (num === 29) {
        cpuCard.src = deckList[29];
        afterCard2.innerHTML = 'Opponent chose the 5 of Diamonds.'
        cpuPoints = 5;
      } else if (num === 30) {
        cpuCard.src = deckList[30];
        afterCard2.innerHTML = 'Opponent chose the 6 of Diamonds.'
        cpuPoints = 6;
      } else if (num === 31) {
        cpuCard.src = deckList[31];
        afterCard2.innerHTML = 'Opponent chose the 7 of Diamonds.'
        cpuPoints = 7;
      } else if (num === 32) {
        cpuCard.src = deckList[32];
        afterCard2.innerHTML = 'Opponent chose the 8 of Diamonds.'
        cpuPoints = 8;
      } else if (num === 33) {
        cpuCard.src = deckList[33];
        afterCard2.innerHTML = 'Opponent chose the 9 of Diamonds.'
        cpuPoints = 9;
      } else if (num === 34) {
        cpuCard.src = deckList[34];
        afterCard2.innerHTML = 'Opponent chose the 10 of Diamonds.'
        cpuPoints = 10;
      } else if (num === 35) {
        cpuCard.src = deckList[35];
        afterCard2.innerHTML = 'Opponent chose the Jack of Diamonds.'
        cpuPoints = 10;
      } else if (num === 36) {
        cpuCard.src = deckList[36];
        afterCard2.innerHTML = 'Opponent chose the Queen of Diamonds.'
        cpuPoints = 10;
      } else if (num === 37) {
        cpuCard.src = deckList[37];
        afterCard2.innerHTML = 'Opponent chose the King of Diamonds.'
        cpuPoints = 10;
      } else if (num === 38) {
        cpuCard.src = deckList[38];
        afterCard2.innerHTML = 'Opponent chose the Ace of Diamonds.'
        cpuPoints = 20;
      } else if (num === 39) {
        cpuCard.src = deckList[39];
        afterCard2.innerHTML = 'Opponent chose the 2 of Spades.'
        cpuPoints = 2;
      } else if (num === 40) {
        cpuCard.src = deckList[40];
        afterCard2.innerHTML = 'Opponent chose the 3 of Spades.'
        cpuPoints = 3;
      } else if (num === 41) {
        cpuCard.src = deckList[41];
        afterCard2.innerHTML = 'Opponent chose the 4 of Spades.'
        cpuPoints = 4;
      } else if (num === 42) {
        cpuCard.src = deckList[42];
        afterCard2.innerHTML = 'Opponent chose the 5 of Spades.'
        cpuPoints = 5;
      } else if (num === 43) {
        cpuCard.src = deckList[43];
        afterCard2.innerHTML = 'Opponent chose the 6 of Spades.'
        cpuPoints = 6;
      } else if (num === 44) {
        cpuCard.src = deckList[44];
        afterCard2.innerHTML = 'Opponent chose the 7 of Spades.'
        cpuPoints = 7;
      } else if (num === 45) {
        cpuCard.src = deckList[45];
        afterCard2.innerHTML = 'Opponent chose the 8 of Spades.'
        cpuPoints = 8;
      } else if (num === 46) {
        cpuCard.src = deckList[46];
        afterCard2.innerHTML = 'Opponent chose the 9 of Spades.'
        cpuPoints = 9;
      } else if (num === 47) {
        cpuCard.src = deckList[47];
        afterCard2.innerHTML = 'Opponent chose the 10 of Spades.'
        cpuPoints = 10;
      } else if (num === 48) {
        cpuCard.src = deckList[48];
        afterCard2.innerHTML = 'Opponent chose the Jack of Spades.'
        cpuPoints = 10;
      } else if (num === 49) {
        cpuCard.src = deckList[49];
        afterCard2.innerHTML = 'Opponent chose the Queen of Spades.'
        cpuPoints = 10;
      } else if (num === 50) {
        cpuCard.src = deckList[50];
        afterCard2.innerHTML = 'Opponent chose the King of Spades.'
        cpuPoints = 10;
      } else if (num === 51) {
        cpuCard.src = deckList[51];
        afterCard2.innerHTML = 'Opponent chose the Ace of Spades.'
        cpuPoints = 20;
      } return cpuPoints
}

const reset = () => {
	userCard.src = back;
	cpuCard.src = back;
}


const playGame = (bet, money) => {
num3 = Math.floor(Math.random() * 52)
num4 = Math.floor(Math.random() * 52)

if (bet <= 0) {
  alert("Must enter positive number");
} else if (bet > money) {
  alert("Not enough funds in Stash");
} else if (betAmt.value == "") {
  alert("Must enter a bet");
} else {
	if (userPoints > cpuPoints) {
		newMoney = parseInt(money) + parseInt(bet);
		buttonText.innerHTML = "Click to reset game.";
		buttonText2.innerHTML = "You won $" + bet + '.' + " Current Stash: $" + newMoney;
		buttonText.onclick = () => {
			reset();
			afterSelection.style.display = 'block';
		}; afterSelection.onclick = () => {
      if (betAmt.value <= 0) {
        alert("Must enter positive number");
      } else if (betAmt.value > money) {
        alert("Not enough funds in Stash");
      } else if (betAmt.value == "") {
        alert("Must enter a bet");
      } else {
        afterSelection.style.display = 'none';
			  userCardClick(num3);
			  cpuCardClick(num4);
			  playGame(betAmt.value, newMoney);
		}
	}
} else if (cpuPoints > userPoints) {
		newMoney = parseInt(money) - parseInt(bet);
		if (newMoney === 0) {
			buttonText.innerHTML = 'Click to reload'
			buttonText2.innerHTML = "You lost $" + bet + '.' + ' Current Stash: $' + newMoney + " You have no more money. Click to reload $100.";
			buttonText.onclick = () => {
        location.reload();
			}
		} else {
      buttonText.innerHTML = "Click to reset game."
		  buttonText2.innerHTML = "You lost $" + bet + '.' + ' Current Stash: $' + newMoney;
		  buttonText.onclick = () => {
			reset();
			afterSelection.style.display = 'block';
		}; afterSelection.onclick = () => {
      if (betAmt.value <= 0) {
        alert("Must enter positive number");
      } else if (betAmt.value > money) {
        alert("Not enough funds in Stash");
      } else if (betAmt.value == "") {
        alert("Must enter a bet");
      } else {
        afterSelection.style.display = 'none';
			  userCardClick(num3);
			  cpuCardClick(num4);
			  playGame(betAmt.value, newMoney);
      }
    }
  }
} else {
		buttonText.innerHTML = "Click to reset game.";
		buttonText2.innerHTML = "You tied with opponent. Current Stash: $" + money;
		buttonText.onclick = () => {
			reset();
			afterSelection.style.display = 'block';
		}; afterSelection.onclick = () => {
			afterSelection.style.display = 'none';
			userCardClick(num3);
			cpuCardClick(num4);
			playGame(betAmt.value, money);
   }
  }
 }
}

let betAmt = document.getElementById('betAmt');

buttonText.onclick = () => {
  if (betAmt.value > money) {
    alert("Not enough funds in stash");
  } else if (betAmt.value < 0) {
    alert("Must enter positive number");
  } else if (betAmt.value == "") {
    alert("Must enter a bet");
  } else {
  userCardClick(numA);
	cpuCardClick(num2);
	playGame(betAmt.value, money);
}
}

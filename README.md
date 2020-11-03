<p align="center"><img src="highestCard/images/logo.png"></p>

# Project
Game uses an HTML, CSS, and JavaScript file and gives user an imaginary amount of money ($100) and directs user to place Bet. Card is randomly selected from a range of 52, and there is a simple if, else if, else function that changes the .src of the UserCard div, as well as the CpuCard div, to match the appropriate card number. Face Cards count as 10, Aces count as 20, the rest of the cards count for themselves.

# Card Selection
The Cpu Card Selection works the exact same. One of the potential problems in the game is that the user and cpu could potentially draw the same card. I imagine that this could be changed using a temporary .pop function of some sort, but for now, the cpu and the user are drawing from two different decks. Also, the JavaScript file is 607 lines long, and perhaps there is a way to refractor it to be more concise. I'm not really sure.
<p align="left"><img src="screenshots/deckScreenshot.png"></p>

# playGame()
The actual function that makes the game work. First, it checks if the bet is less than or equal to 0. If it is, the innerHTML changes for the buttonText and buttonText2 areas to "Click to reset game", and "Must enter positive number. Current stash: $" + money, respectively. if the buttonText area is clicked, a reset() function is called. A similiar check is done if the bet is more than the money that the user currently has in the "Stash". Then, the function does a simple check to determine if the userPoints are higher than the cpuPoints. If so, newMoney = parseInt(money) + parseInt(bet). The amount of money the user won on the previous turn is posted, along with an option to bet again. If cpuPoints are higher than userPoints, newMoney = parseInt(money) - parseInt(bet). Afterwards, if newMoney === 0, buttonText2 changes to "You lost $" + bet + '.' + ' Current Stash: $' + newMoney + " You have no more money. Click to reload $100." Then if buttonText is click, location.reload() is called. Lastly, an else statement wraps up the functions and alerts the user that there has been a tie, posts the Current Stash, and gives an option to bet again.
<p align="left"><img src="screenshots/playGameScreenshot1.png"></p>
<p align="left"><img src="screenshots/playGameScreenshot2.png"></p>

# CSS

<p align="left"><img src="screenshots/cssScreenshot.png"></p>

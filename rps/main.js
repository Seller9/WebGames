function select(selector) {
	switch (selector) {
		case 'rock':
			playerChoice = 'Rock';
			break;
			
		case 'paper':
			playerChoice = 'Paper';
			break;
		
		case 'scissors':
			playerChoice = 'Scissors';
			break;
		
	}
	
	console.log(playerChoice);
	document.getElementById("rps-confirm-text").innerHTML = playerChoice;
	document.getElementById("rps-result-text").innerHTML = "Result:";
	document.getElementById("rps-bot-text").innerHTML = "";
	document.getElementById("hidden-break-1").style.display = "block";
}

function confirm() {
	console.log(playerChoice);
	
	randNum = Math.floor(Math.random() * 3)
	
	switch (randNum) {
		case 0:
			botChoice = 'Rock';
			break;
			
		case 1:
			botChoice = 'Paper';
			break;
		
		case 2:
			botChoice = 'Scissors';
			break;
	}
	
	console.log(botChoice + ", Number " + randNum)
	document.getElementById("rps-bot-text").innerHTML = botChoice;
		
	switch (playerChoice) {
		case 'Rock':
			switch (botChoice) {
				case 'Rock':
					result = 'tied';
					break;
					
				case 'Paper':
					result = 'lost';
					break;
					
				case 'Scissors':
					result = 'won';
					break;
			}
			break;
					
		case 'Paper':
			switch (botChoice) {
				case 'Rock':
					result = 'won';
					break;
					
				case 'Paper':
					result = 'tied';
					break;
					
				case 'Scissors':
					result = 'lost';
					break;
			}
			break;
					
		case 'Scissors':
			switch (botChoice) {
				case 'Rock':
					result = 'lost';
					break;
					
				case 'Paper':
					result = 'won';
					break;
					
				case 'Scissors':
					result = 'tied';
					break;
			}
			break;
		}
		
	document.getElementById("hidden-break-1").style.display = "none";
	console.log(playerChoice + " vs " + botChoice + ": Player " + result);
	document.getElementById("rps-result-text").innerHTML = "Result: You "+result;
}

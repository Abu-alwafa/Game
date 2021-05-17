const game = () => {
	let pScore = 0;
	let cScore = 0;
	const playerHand = document.querySelector('.player-hand');
	const computerHand = document.querySelector('.computer-hand');

	const startGame = () => {
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match-section');
		// const score = document.querySelector('.score');
		playBtn.addEventListener('click', () => {
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
			// score.classList.add('fadeIn');
		});
	};
	const playMatch = () => {
		const options = document.querySelectorAll('.match-section .options button');
		const hands = document.querySelectorAll('.hands img');
		hands.forEach((hand) => {
			hand.addEventListener('animationend', function () {
				this.style.animation = '';
			});
		});
		const computerOptions = ['rock-cpu', 'paper-cpu', 'scissors-cpu'];
		options.forEach((option) => {
			option.addEventListener('click', function () {
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];
				const playerChoice = this.textContent.toLowerCase();
				playerHand.style.animation = 'shakePlayer 2s ease';
				computerHand.style.animation = 'shakeComputer 2s ease';
				resetImg();
				setTimeout(() => {
					compareHands(playerChoice, computerChoice);
					playerHand.src = `imgs/${playerChoice}.png`;
					computerHand.src = `imgs/${computerChoice}.png`;
				}, 2000);
			});
		});
	};
	const resetImg = () => {
		playerHand.src = 'imgs/rock.png';
		computerHand.src = 'imgs/rock-cpu.png';
	};

	const updateScore = () => {
		const playerScore = document.querySelector('.player-score p');
		const computerScore = document.querySelector('.computer-score p');
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};

	const compareHands = (playerChoice, computerChoice) => {
		const winner = document.querySelector('.winner');

		if (playerChoice +"-cpu" == computerChoice) {
			winner.textContent = 'It is a tie';
			winner.style.color = 'black';
			return;
		}
		if (playerChoice == 'rock') {
			if (computerChoice == 'scissors-cpu') {
				winner.textContent = 'Player Wins';
				winner.style.color = '#22c22a';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer Wins';
				winner.style.color = '#5661fc';
				cScore++;
				updateScore();
				return;
			}
		}
		if (playerChoice == 'paper') {
			if (computerChoice == 'scissors-cpu') {
				winner.textContent = 'Computer Wins';
				winner.style.color = '#5661fc';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins';
				winner.style.color = '#22c22a';
				pScore++;
				updateScore();
				return;
			}
		}
		if (playerChoice == 'scissors') {
			if (computerChoice == 'rock-cpu') {
				winner.textContent = 'Computer Wins';
				winner.style.color = '#5661fc';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins';
				winner.style.color = '#22c22a';
				pScore++;
				updateScore();
				return;
			}
		}
	};

	startGame();
	playMatch();
};
game();

let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        

       updateScoreElement(); //update score element on page load
/*
        if(!score)  { //if score is null, initialize it
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        };
        */
          
        //localStorage.getItem('score'); //get value of message from localStorage
        //console.log(JSON.parse(localStorage.getItem('score'))); //convert JSON string back to object and log it

        function playGame(playerMove) {

            const computerMove = pickComputerMove();
            let result = '';

            if (playerMove === 'Rock') {
                if (computerMove === 'Rock') {
                    result = 'Tie';
                } else if (computerMove === 'Paper') {
                    result = 'You lose';
                } else if (computerMove === 'Scissors') {
                    result = 'You win';
                }

            } else if (playerMove === 'Paper') {
                if (computerMove === 'Rock') {
                    result = 'You win';
                } else if (computerMove === 'Paper') {
                    result = 'Tie';
                } else if (computerMove === 'Scissors') {
                    result = 'You lose';
                }

            } else if (playerMove === 'Scissors') {
                if (computerMove === 'Rock') {
                    result = 'You lose';
                } else if (computerMove === 'Paper') {
                    result = 'You win';
                } else if (computerMove === 'Scissors') {
                    result = 'Tie';
                }

            }



            if(result === 'You win' ) {
                score.wins += 1;
            } else if (result === 'You lose') {
                score.losses += 1;
            }else if(result === 'Tie') {
                score.ties += 1;
            }
            
            localStorage.setItem('score', JSON.stringify(score)); //store value of message in localStorage , convert object to JSON string before storing

            updateScoreElement(); //update score element after updating score

            document.querySelector('.js-result').innerHTML = `${result}`; //display result of the game
            document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon" >
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
            }
        
            function updateScoreElement() {
                document.querySelector('.js-score').
                innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
            }

        function pickComputerMove() {
            const randomNumber = Math.random();

            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 0.33) {
                computerMove = 'Rock';
            } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
                computerMove = 'Paper';
            } else if (randomNumber >= 0.66 && randomNumber < 1) {
                computerMove = 'Scissors';
            }

            return computerMove; //return the value of computerMove to the caller
            console.log('hiii'); //not run anything after return
        }
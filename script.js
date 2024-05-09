// script.js
document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        { question: "Is ice cream cold?", answer: true },
        { question: "Do cats fly?", answer: false },
        { question: "Is water wet?", answer: true },
        { question: "Can cars swim?", answer: false },
        { question: "Is fire hot?", answer: true },
        { question: "Do fish breathe air?", answer: false },
        { question: "Is the sky blue?", answer: true },
        { question: "Do birds walk?", answer: true },
        { question: "Can humans breathe underwater?", answer: false },
        { question: "Is snow hot?", answer: false }
    ];

    const tilesContainer = document.getElementById('tiles');
    questions.forEach((item, index) => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.textContent = 'Q' + (index + 1);
        tile.onclick = function() {
            const userAnswer = confirm(item.question + " (OK for Yes, Cancel for No)");
            if (userAnswer === item.answer) {
                tile.style.display = 'none';
                checkCompletion();
            } else {
                alert("Try again!");
            }
        };
        tilesContainer.appendChild(tile);
    });
    
    // script.js
function startCountdown() {
    let countdown = 10;
    const doubleBallonsContainer = document.getElementById('doubleBallonsAndCounter');
    doubleBallonsContainer.style.display = 'inline-flex';
    const balloons = document.querySelectorAll('.balloon');
    const countdownDisplay = document.getElementById('countdownDisplay');
 balloons.forEach(balloon => balloon.style.backgroundColor = 'gray');
 
    const timer = setInterval(() => {
        countdown--;
        countdownDisplay.textContent = countdown;
			console.log('countdown: ' + countdown);
        // Ensure there's a valid index for balloons
        if (countdown >= 0) {
            // Update the color of the current balloon
            if(countdown % 2 === 0)
            {
           	 balloons[0].style.backgroundColor = 'blue';
             balloons[1].style.backgroundColor = 'gray';
            }
            else{
             balloons[0].style.backgroundColor = 'gray';
             balloons[1].style.backgroundColor = 'pink';
            }
           
        }

        // Reveal message at the end
        if (countdown === 0) {
            clearInterval(timer);
             const balloonContainer = document.getElementById('balloonContainer');
               balloonContainer.style.display = "block";
        }
    }, 1000);
};

  const finalTile = document.getElementById('finalTile');
   finalTile.onclick = function() {
    startCountdown();
    finalTile.style.display = "none";
      // document.body.style.backgroundColor = "blue";
     
     const quizContainer = document.getElementById('quiz-container');
     quizContainer.style.display = 'none';
      
   };

    function checkCompletion() {
        const allHidden = Array.from(document.querySelectorAll('.tile')).every(t => t.style.display === 'none');
        if (allHidden) {
            finalTile.style.display = 'block';
        }
    }

    const bypassButton = document.getElementById('bypassButton');
    bypassButton.onclick = function() {
        Array.from(document.querySelectorAll('.tile')).forEach(tile => tile.style.display = 'none');
        checkCompletion();
    };
});


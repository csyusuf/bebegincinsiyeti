// script.js
document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        { question: "$1'in TL karsiligi 33 TL", answer: false },
        { question: "Yakup 4 yil sonra 3 sinifta olmus olacak", answer: true },
        { question: "Yarin hava yagisli olacak", answer: false },
        { question: "Tesla'nin tavsiye edilen gunluk sarj yuzdesi %90", answer: false },
        { question: "Garajin ustundeki kamera calisiyor", answer: false },
        { question: "Yakubun boyu 45 cm", answer: false },
        { question: "Evimizin ic buyuklugu 2600 sqft", answer: true },
        { question: "Usak iller siralamasinda 50. sirada yer alir", answer: false },
        { question: "Mardin nufus siralamasinda 26. sirada yer alir", answer: true },
        { question: "Bebegin cinsiyeti henuz belli degil", answer: false }
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


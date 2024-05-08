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

    const finalTile = document.getElementById('finalTile');
    finalTile.onclick = function() {
        for (let i = 0; i < 50; i++) {  // Create 50 balloons
       // document.body.style.backgroundColor = "blue";
        const balloonContainer = document.getElementById('balloonContainer');
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.style.display = 'none';
        balloonContainer.style.display = "block";
            //createBalloon();
        }
    };

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = (5 + Math.random() * 5) + 's'; // Randomize duration between 5-10 seconds
        document.body.appendChild(balloon);

        // Remove balloon after animation to clean up the DOM
        balloon.addEventListener('animationend', function() {
            balloon.remove();
        });
    }

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

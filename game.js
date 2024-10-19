//NEEDS RESTART BUTTON 
var questions = [
    ["What is the largest mammal in the world?", 0, "A. Blue Whale", "B. Moose", "C. Humpback Whale"], // Correct answer: 0
    ["Which player has the most NBA titles?", 2, "A. LeBron James", "B. Larry Bird", "C. Bill Russell"], // Correct answer: 2
    ["What is the video game where you play as a blue hedgehog that collects rings?", 2, "A. Mario", "B. Tails", "C. Sonic"] // Correct answer: 2
];
let currentQuestionIndex = 0;
let score = 0;
let questionCounter = 0; 
//counter
// game button + needs on click and promptdiv
function playGame() {
    const promptDiv = document.getElementById('prompt');
    promptDiv.innerHTML = '<button id="play-button">Play Game</button>';
    document.getElementById('play-button').onclick = startGame;
}

// start + score
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    questionCounter = 0; // counter
    document.getElementById('prompt').style.display = 'none';
    document.getElementById('question').innerText = "Have fun!";
    showQuestion();
}

// show questions
// clear ans + add ques count
function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question[0];
    const answersList = document.getElementById('answers');
    answersList.innerHTML = ''; 

    questionCounter++; 
    document.getElementById('question').innerText += ` (Question ${questionCounter})`; 

    for (let i = 2; i < question.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `<button onclick="submitAnswer(${i - 2})">${question[i]}</button>`;
        answersList.appendChild(li);
    }    
}

// sub ans console log gives me everything correct but alert is wrong 
// +2 is why the ans isnt showing in alert
function submitAnswer(answerIndex) {
    const question = questions[currentQuestionIndex];
    console.log("Selected Answer Index: ", answerIndex);
    console.log("Correct Answer Index: ", question[1]);

    if (answerIndex === question[1]) {
        score++;
        alert("Correct!");
    } else {
        // ans using index .. once this is done everything else should work now

        alert("Wrong... The right answer is: " + question[question[1] + 2]); 
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endGame();
    }
}

// end show score here instead needs to restart

function endGame() {
    document.getElementById('question').innerText = `Game Over. You scored: ${score}/${questions.length}`;
    document.getElementById('answers').innerHTML = '';
    const promptDiv = document.getElementById('prompt');
    // res doesnt work now after fixing question needs div?
    //button innerhtml + style prompt
    //block?
    promptDiv.innerHTML = '<button id="restart-button">Restart Game</button>';
    promptDiv.style.display = 'block'; 
    // res button still not workloaeiSHFGjuawebgrbg
    document.getElementById('restart-button').onclick = restartGame; 
}

playGame();

const questions = ["question 1",
    "question 2",
    "question 3",
    "question 4",
    "question 5",
    "question 6",
    "question 7",
    "question 8",
    "question 9",
    "question 10",
    "question 11",
    "question 12",
    "question 13",
    "question 14",
    "question 15",
    "question 16",
    "question 17",
    "question 18",
    "question 19",
    "question 20"];

const answers = ["answer 1",
    "answer 2",
    "answer 3",
    "answer 4",
    "answer 5",
    "answer 6",
    "answer 7",
    "answer 8",
    "answer 9",
    "answer 10",
    "answer 11",
    "answer 12",
    "answer 13",
    "answer 14",
    "answer 15",
    "answer 16",
    "answer 17",
    "answer 18",
    "answer 19",
    "answer 20"];

let currentIndex = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");

const prevBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

const leftArw = document.getElementById("left-arrow");
const rightArw = document.getElementById("right-arrow");

const progressPerc = document.getElementById("progress");

const percentPerc = document.getElementById("percent");

const showAns = document.getElementById("show-answer-btn");
const hideAns = document.getElementById("hide-answer-btn");


//Progress Function

function progressPercF() {
    progressPerc.style.width = ((currentIndex + 1) * 100) / 20 + "%";
    percentPerc.innerHTML = ((currentIndex + 1) * 100) / 20 + "%";
}

//Question Function

function showQuestion() {
    questionEl.textContent = questions[currentIndex];
}

//Answer Function

function showAnswer() {
    answerEl.textContent = answers[currentIndex];
}

//Previous Next Buttons Fuction

function updateButtons() {
    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === questions.length - 1);

    leftArw.style.opacity = prevBtn.disabled ? "0.5" : "1";
    rightArw.style.opacity = nextBtn.disabled ? "0.5" : "1";
}

//Update UI
function updateUI() {
    showQuestion();
    showAnswer();
    questionEl.style.display = "block";
    answerEl.style.display = "none";
    updateButtons();
    progressPercF();
    showAns.style.display = "block";
    hideAns.style.display = "none";
}

//Next Button Event Listener

nextBtn.addEventListener("click", () => {

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        updateUI();
    }
});

//Previous Button Event Listener

prevBtn.addEventListener("click", () => {

    if (currentIndex > 0) {
        currentIndex--;
        updateUI();
    }
});

//Show Answer Button Event Listener

showAns.addEventListener("click", () => {

    showAns.style.display = "none";
    hideAns.style.display = "block";
    questionEl.style.display = "none";
    answerEl.style.display = "block";
    showAnswer();
})

//Hide Answer Button Event Listener

hideAns.addEventListener("click", () => {

    showAns.style.display = "block";
    hideAns.style.display = "none";
    questionEl.style.display = "block";
    answerEl.style.display = "none";
    showAnswer();
})

updateUI();

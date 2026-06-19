const questions = [
{
    question: "What is JavaScript?",
    answers: [
        { text: "Programming Language", correct: true },
        { text: "Database", correct: false },
        { text: "Operating System", correct: false },
        { text: "Browser", correct: false }
    ]
},
{
    question: "Which company developed JavaScript?",
    answers: [
        { text: "Microsoft", correct: false },
        { text: "Google", correct: false },
        { text: "Netscape", correct: true },
        { text: "Oracle", correct: false }
    ]
},
{
    question: "Which keyword is used to declare a variable?",
    answers: [
        { text: "var", correct: true },
        { text: "print", correct: false },
        { text: "echo", correct: false },
        { text: "define", correct: false }
    ]
},
{
    question: "Which symbol is used for single-line comments?",
    answers: [
        { text: "//", correct: true },
        { text: "#", correct: false },
        { text: "<!-- -->", correct: false },
        { text: "**", correct: false }
    ]
},
{
    question: "Which method prints data in console?",
    answers: [
        { text: "console.log()", correct: true },
        { text: "print()", correct: false },
        { text: "echo()", correct: false },
        { text: "display()", correct: false }
    ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML =
        questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("btn");

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){

    const selectedBtn = e.target;

    const isCorrect =
        selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {

        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore(){

    resetState();

    questionElement.innerHTML =
        `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){

    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {

    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});

startQuiz();
const questions = [
{
question:"What is JavaScript?",
answers:[
{text:"Programming Language",correct:true},
{text:"Database",correct:false},
{text:"Browser",correct:false},
{text:"OS",correct:false}
]
}
];

const questionElement =
document.getElementById("question");

questionElement.innerHTML =
questions[0].question;
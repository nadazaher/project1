document.getElementById("start").addEventListener("click", both)
document.getElementById("buttonCA").addEventListener("click", checkAnswer) 
document.getElementById("buttonNQ").addEventListener("click", start) 

let score = 0;
let index;
// const messages = [
//     "Yes, good job!",
//     "No, you should know I'm actually from Alexandria",
//     "Correct! I've played tennis all my life.", 
//     "Nooo, I've played tennis all my life!"];
const array =[
    {
        question: 'What is Nada\'s hometown?',
        answer1: 'Cairo, Egypt', 
        answer2: 'New York City',
        answer3: 'Paris, France',
        correct1: 'Alexandria,Egypt',
        messageCorrect: 'Great job!',
        messageIncorrect: 'You should know that I\'m from Alexandria!'
    },
    {
        question: 'What sport did Nada play in college?',
        answer1: 'Soccer',
        answer2: 'Volleyball',
        answer3: 'Squash',
        correct1: 'Tennis',
        messageCorrect: 'Yes, I\'ve played tennis all my life.',
        messageIncorrect: 'No, I actually played tennis all my life.'
    },
    {
        question: 'What is Nada\'s favorite cuisine?',
        answer1: 'Japanese',
        answer2: 'Italian',
        answer3: 'Mexican',
        correct1: 'Lebanese',
        messageCorrect: 'Yes Lebanese is definitely my favorite, with Greek being a close second.',
        messageIncorrect: 'No, actually Lebanese is my favorite, with Greek being a close second.'
    },
    {
        question: 'What is Nada\'s favorite hobby?',
        answer1: 'Watching makeup tutorials',
        answer2: 'Reading comics',
        answer3: 'Attending concerts',
        correct1: 'Playing volleyball',
        messageCorrect: 'Yes Lebanese is definitely my favorite, with Greek being a close second.',
        messageIncorrect: 'No, actually Lebanese is my favorite, with Greek being a close second.'
    }
];

function askQuestion (index) {
    var quiz = document.querySelector('#quiz');
    var questions = document.querySelector('p.questions');
    questions.innerText = array[index].question;
    var answr1 = document.querySelector('#mcp1');
    answr1.innerText = array[index].answer1;
    var answr2 = document.querySelector('#mcp2');
    answr2.innerText = array[index].answer2;
    var answr3 = document.querySelector('#mcp3');
    answr3.innerText = array[index].answer3;
    var answr4 = document.querySelector('#mcp4');
    answr4.innerText = array[index].correct1;
// console.log(answer)
    
}

// askQuestion(0);

function checkAnswer () {
let x;
    for (x = 0; x < question.length; x+=1) {
        askQuestion(questions[i]);
    }
    var correctAnswer = prompt(question[0], '');
    if (correctAnswer === array[i].correct1) {
        alert(array[i].messageCorrect);
        score ++;
    } else {
        alert(array[i].messageIncorrect);
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("score_tracker").innerHTML = "You got " + score + " correct.";
}
    // document.getElementById("message").innerHTML = messages[index];  


function start(){ 
    // console.log("hey")
    document.getElementById("quiz").style.display = "block";
    // document.querySelector("#quiz2").style.display = "none";
    document.querySelector("#after_submit").style.display = "none";
}
function titleClear(){
    // console.log("how are you")
    document.querySelector(".title").style.display = "none";
    document.querySelector(".line").style.display = "none";
    document.querySelector(".intro").style.display = "none";
    document.querySelector(".start").style.display = "none";
    document.querySelector(".extra").style.display = "block";

}  

function both (){
    titleClear();
    start();
    askQuestion(0)
    getInput();
}

function runGame (){
    for (x = 0; x < question.length; x+=1) {
        askQuestion(x);
    }
}
    //show question & answers
    //get input
function getInput(){
    let userAnswer;
    const clicked = document.querySelectorAll('.answer');
    const input1 = clicked[0].checked;
    const input2 = clicked[1].checked;
    const input3 = clicked[2].checked;
    const input4 = clicked[3].checked;

    while(!userAnswer){
           if (input1 === true) {
            userAnswer = clicked[0].value
    } else if (input2 === true ) {
            userAnswer = clicked[1].value
    } else if (input3 === true) {
            userAnswer = clicked[2].value
    } else if (input4 === true) {
        userAnswer = clicked[3].value
    }
    break
    console.log(userAnswer)
    //might need to go back to FOR looop
}
}
    //check answer
    //give score and comment
    //move to next question until game ends

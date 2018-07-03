

// var questions = [
// {
//     promt: "What is Nada's hometown?"\n(a) Cairo-Egypt\n\ (b) Alexandria-Egypt\n(c)New York City\n(d) Paris", 
//     answer: "b"
// }

// var score = 0;

// for (var i=0; i < questions.length; i+=1) {
//     var response = window.promt(questions[i].prompt);
//     if(response === questions[i].answer){
//         score ++;
//         alert ("Correct!");
//     } else {
//         alert("Wrong!");
//     }
//     }
//     alert("you got " + score + "/" + questions.length);


function check(){

    var question1 = document.question1.Q1.value;
    var score = 0;

    if (question1 === "Alexandria") {
        score ++;
    }
    
    var messages = ["Great job", "Meh", "You suck"];
    var index;
    if (score <1) {
        index = 2;
    }
    if (score > 0 && score <2) {
        index = 1;
    }
    if (score > 2) {
        index = 0;
    }
    document.getElementById("message").innerHTML = messages[index];
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("score_tracker").innerHTML = "You got " + score + " correct.";
    }
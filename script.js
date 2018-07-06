var messages = [
    "Yes, good job!",
    "No, you should know I'm actually from Alexandria",
    "Correct! I've played tennis all my life.", 
    "Nooo, I've played tennis all my life!"];
    var index;
    var score = 0; 

function check1(){
    var question1 = document.question1.Q1.value;
    if (question1 === "Alexandria") {
      score ++;
        index = 0;
    }
    else if (question1 !== "Alexandria") {
        index = 1;
    }

    document.getElementById("message").innerHTML = messages[index];
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("score_tracker").innerHTML = "You got " + score + " correct.";
}

function check2(){
    var question2 = document.question2.Q2.value;
    
    if (question2 === "Tennis") {
     score ++;
        index = 2;
    }
    else if (question2 !== "Tennis") {
        index = 3; 
    }

    document.getElementById("message").innerHTML = messages[index];
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("score_tracker").innerHTML = "You got " + score + " correct.";
}

function check3(){
    var question3 = document.question3.Q3.value;

    if (question3 === "Lebanese") {
      score ++; 
        index = 0;
    }
    else if (question3 !== "Lebanese") {
        index = 1;
    }

    document.getElementById("message").innerHTML = messages[index];
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("score_tracker").innerHTML = "You got " + score + " correct.";
}

    function start(){ 
        document.getElementById("quiz1").style.display = "block";
        document.querySelector("#quiz2").style.display = "none";
        document.querySelector("#after_submit").style.display = "none";
    }
    function titleClear(){
        document.querySelector(".title").style.display = "none";
        document.querySelector(".line").style.display = "none";
        document.querySelector(".intro").style.display = "none";
        document.querySelector(".start").style.display = "none";
        document.querySelector(".extra").style.display = "block";

    }  

    function start2 (){
        document.querySelector("#quiz2").style.display = "block";
        document.querySelector("#quiz1").style.display = "none";
        document.querySelector("#after_submit").style.display = "none";

    }

    function start3 (){
        document.querySelector("#quiz3").style.display = "block";
        document.querySelector("#quiz2").style.display = "none";
        document.querySelector("#after_submit").style.display = "none";

    }

    function move() {
        var elem = document.getElementById("myBar"); 
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++; 
                elem.style.width = width + '%'; 
                elem.innerHTML = width * 1 + '%';
            }
        }
    }

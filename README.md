*** Nada Zaher / July 10, 2018 ***

# Do you know Nada or ¿sabes nada?

## What is this?

This is a trivia game that checks how well the player knows me. Every player will have to answer 8 questions and the game will keep track of the number they get right. There is no real winner or loser, but after every answer - you will get a response helping you learn more about Nada. 

## Motivation

I am choosing to make this because I think its fun and I can actually send it to my friends and family to see how they do! I can really test who knows me well and they can get to know me better after the quiz. Its a good about me for people I newly meet as well like my GA classmates. I can also eventually link this to my portfolio!

## Initial thoughts on game structure

This is a trivia game that checks how well the player knows me. Every player will have to answer 8 questions and the game will keep track of the number they get right. If they answer incorrectly, game will inform user of the right answer. Since the answers are multiple choice I will make a form with radio buttons. I made one form and then created an array of arrays to manipulate the form as needed. I will check if the correct answer matches with what button the player selected and based on that I will return a relevant response and score. 

## Phases of Completion/Features

As a user, I want to play a fun trivia game that will test how well I know Nada and help me get to know her better. 
1)	Player needs to see the game and its explanation (Create welcome page)
2)	Player needs to start the game (Activate start button)
3)	Player gets first question (Manipulate form with new question and answers)
4)	Player picks one multiple choice answer (Get input from user)
5)  User wants to be notified of his/her answer choice and his/her updated score (Check for correctness and alert result)
6)  Game proceeds until all 8 questions are answered (End game after all questions answered)
7)  User refreshes if he/she wants to play again 

## Code Example 

//this function inputs the respective questions and answers to the next form
    function askQuestion (index) {
        var quiz = document.querySelector('#quiz');
        var questions = document.querySelector('p.questions');
        questions.innerText = array[index].question; 
        document.getElementsByTagName('input').checked = false;
        global_index = index
        var shuffleAnswers = shuffle(array[index].answers);
//  this for loop goes through every question and shuffles the order that the answers are appearing in
        for(var i = 0; i < shuffleAnswers.length; i++) {
            var a = document.querySelector(`#mcp-p${i+1}`);
            var r = document.querySelector(`#mcp${i+1}`);
            var img = document.createElement("IMG"); 
            img.src = shuffleAnswers[i].image;
            a.innerText = shuffleAnswers[i].text;
            r.value = shuffleAnswers[i].text;
            a.style.backgroundImage = "url("+shuffleAnswers[i].image+")";
        }
    }

## How to Use?
Feel free to fork and clone my repo so you can access and play around with the code. If you just want to play the actual game you can play it here https://nadazaher.github.io/project1/

## Unsolved Problems
The main problem that I wanted to solve, but perhaps got pressed on time was actually "ending the game". For now, I just show a "GAME OVER" message, but in reality I would have liked for the "Next Question" button to change to "Game Ended" and then a new screen pops up without the actual form. I also wanted to add a timer, but couldn't figure out how to reset it correctly for every question. I would probably revisit this project and make these changes.

## Challenges
At first, I was going to manually have each question a separate form in HTML to make it easy to style and use, but then realized that I should challenge myself and create one form that would be manipulated in JavaScript. It took awhile for me to be able to figure out the best way to structure my data in arrays and arrays within arrays. Once I had the structure down, it was easier to call the elements I wanted to manipulate. I also realized that I should use DIV a lot more in HTML because the way I have it currently has the entire form in one DIV which made it very hard when it came to styling. Then I had the challenge of figuring out how to minimize the number of functions that I use and the best way to call functions within functions. The shuffle function always seems difficult for me so that was also a challenge. I definitely got the hang of it towards the end. 

## Success
It is very exciting to have a working trivia game. I'm a lot more confident now that I've worked through a lot of problems to get it to this stage!



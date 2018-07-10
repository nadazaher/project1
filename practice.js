// for each question, theres another array of answers (including images) as well as the correct answer and respective messages
var array = [
    {   "question": "What is Nada's hometown?",
        "answers":
        [
        {"text":"Cairo, Egypt",
        "image": "https://st3.depositphotos.com/2115371/18317/v/600/depositphotos_183170910-stock-video-cairo-egypt-december-2017-aerial.jpg" ,
        "correct": false
    },
    {"text": "New York City",
    "image": "https://www.housingwire.com/ext/resources/images/editorial/A-New-Big-Images/states/New-York-City.jpg?1453402066",
    "correct": false
    },
    {"text": "Paris, France",
    "image": "https://www.tabularaisa.com/wp-content/uploads/2015/12/eiffel.jpg",
    "correct": false
    },
    {"text": "Alexandria, Egypt",
    "image": "https://www.planetware.com/photos-large/EGY/egypt-alexandria-corniche.jpg",
    "correct": true
    }
    ],
    "messageCorrect": "Great - you're off to a good start.",
    "messageIncorrect": "Incorrect, I actually grew up in Alexandria!",
    },
    {
        "question": "What sport did Nada play in college?",
        "answers":[
        {"text":"Soccer",
        "image": "https://thenypost.files.wordpress.com/2017/09/170918-soccer-ball-stock-image-feature-image.jpg?quality=90&strip=all&w=664&h=441&crop=1",
        "correct": false
    },
    {"text": "Volleyball",
    "image": "https://image.mlive.com/home/mlive-media/width620/img/sports_impact/photo/grand-haven-volleyball-invitational048-9e2ef134bc63f80f.jpg",
    "correct": false
    },
    {"text": "Squash",
    "image": "https://www.pdhsports.com/files/uk/imagelibrary/subcategory/squash-rackets.jpg",
    "correct": false
    },
    {"text": "Tennis",
    "image": "https://i1.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2015/04/ThinkstockPhotos-513920615.jpg?fit=725%2C483",
    "correct": true
    }
    ],
    "messageCorrect": "Yes, I've played tennis competitively all my life.",
    "messageIncorrect": "Incorrect, I actually played tennis competitively all my life."
    },
    {
        "question": "What is Nada's favorite cuisine?",
        "answers":[
        {"text":"Japanese",
        "image": "http://cdn.lamag.com/wp-content/uploads/sites/6/2017/08/MAIN-2-1.jpg",
        "correct": false
    },
    {"text": "Italian",
    "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/8/7/1/FN_Italian-Favorites-Opener_s4x3.jpg.rend.hgtvcom.966.725.suffix/1438990067345.jpeg",
    "correct": false
    },
    {"text": "Mexican",
    "image": "https://img.grouponcdn.com/deal/2AJ4Cpguh6AJMyqim8tj/9c-2048x1229/v1/c700x420.jpg",
    "correct": false
    },
    {"text": "Lebanese",
    "image": "http://www.terracerestaurantandlounge.com/wp-content/uploads/2017/02/bigstock-Arabic-Dishes-And-Meze-167170001-e1488315821840.jpg",
    "correct": true
    }
    ],
    "messageCorrect": "Yes, Lebanese is definitely my favorite with Greek being a close second.",
    "messageIncorrect": "Incorrect, even though I love all cuisines, Lebanese is my favorite with Greek being a close second."
    },
    {
        "question": "What is Nada's favorite hobby?",
        "answers":[
        {"text":"Watching makeup tutorials",
        "image": "https://www.betrendsetter.com/wp-content/uploads/2015/08/Neutral-Eye-Makeup-Tutorial.jpg",
        "correct": false
    },
    {"text": "Reading comic books",
    "image": "https://img.grouponcdn.com/deal/2vpUNSiEmhZ731fbbVMhyN/new-700x420/v1/c700x420.jpg",
    "correct": false
    },
    {"text": "Attending concerts",
    "image": "https://buffaloriverworks.com/wp-content/uploads/2017/04/Concerts.jpg",
    "correct": false
    },
    {"text": "Playing volleyball at the beach",
    "image": "https://media.istockphoto.com/photos/friends-playing-volleybal-picture-id186010902?k=6&m=186010902&s=612x612&w=0&h=rncatukhZstzA8AGmPT-wafT0IyqbVmI1DYunNpBWVM=",
    "correct": true
    }
    ],
    "messageCorrect": "Yes, you know me pretty well. I can play volleyball for hours.",
    "messageIncorrect": "Incorrect, my favorite hobby is playing volleyball - preferably beach."
    },
    {
        "question": "What is Nada's favorite movie?",
        "answers":[
        {"text":"Lord of the Rings",
        "image": "https://vignette.wikia.nocookie.net/lotr/images/8/87/Ringstrilogyposter.jpg/revision/latest?cb=20070806215413",
        "correct": false
    },
    {"text": "The Proposal",
    "image": "https://static01.nyt.com/images/2009/06/19/movies/proposal_600.jpg",
    "correct": false
    },
    {"text": "Titanic",
    "image": "https://www.irishcentral.com/uploads/article/123121/cropped_titanic-rose-jack-anniversary.jpg?t=1513761089",
    },
    {"text": "Invictus",
    "image": "http://jaysonfeltner.com/wp-content/uploads/2012/04/Invictus.jpg",
    "correct": true
    }
    ],
    "messageCorrect": "Yes, sports movies are my favorite and if you haven't seen Invictus you should!",
    "messageIncorrect": "Incorrect, my favorite movies are sports movies so no wonder Invictus is the answer here."
    },
    {
        "question": "What does Nada bake most often?",
        "answers":[
        {"text":"Carrot Cake",
        "image": "https://images-gmi-pmc.edge-generalmills.com/59fe25ea-1f27-4ceb-adfb-66537f116d46.jpg",
        "correct": false
    },
    {"text": "Baklava",
    "image": "https://assets.marthastewart.com/styles/wmax-750/d43/baklava-mbak910-greece-1684-v2-d113210-0118/baklava-mbak910-greece-1684-v2-d113210-0118_horiz.jpg?itok=QkYIpltW",
    "correct": false
    },
    {"text": "Cupckaes",
    "image": "https://www.fifteenspatulas.com/wp-content/uploads/2011/10/Chocolate-Peanut-Butter-Cupcakes-Fifteen-Spatulas-12-640x427.jpg",
    "correct": false
    },
    {"text": "Chocolate Chip Cookies",
    "image": "https://belleofthekitchen.com/wp-content/uploads/2018/02/caramel-chocolate-chip-cookies-square-500x500.jpg",
    "correct": true
    }
    ],
    "messageCorrect": "Yes, my go-to is chocolate chip cookies -  you should ask me to bake some for you.",
    "messageIncorrect": "Incorrect, I guess this could be tricky because I do like baking all of them, but my go-to is chocolate chip cookies."
    },
    {
        "question": "What is Nada\'s favorite genre of music?",
        "answers":[
        {"text":"Hip-Hop",
        "image": "https://www.musicinafrica.net/sites/default/files/styles/article_slider_large/public/images/article/201604/zone-fam-2.jpg?itok=Uhz1c71F",
        "correct": false
    },
    {"text": "Classical",
    "image": "https://cdn.trendhunterstatic.com/thumbs/classical-music.jpeg",
    "correct": false
    },
    {"text": "Reggae",
    "image": "http://thebestofreggae.com/wp-content/uploads/2015/09/history-of-reggae-music.jpg",
    "correct": false
    },
    {"text": "Latin",
    "image": "http://www.mycrowmax.com/wp-content/uploads/2013/08/latin-songs.jpg",
    "correct": true
    }
    ],
    "messageCorrect": "Yes, Latin music always puts me in a good mood - I'd happily dance salsa anyday!",
    "messageIncorrect": "Incorrect, I actually prefer Latin music and the dancing vibe that comes with it."
    },
    {
        "question": "What is Nada\'s horoscope?",
        "answers":[
        {"text":"Leo (July 23 - Aug 22)",
        "image": "https://hips.hearstapps.com/mac.h-cdn.co/assets/15/53/768x384/landscape-1451583330-mcx-astro1-leo.gif?resize=768:*",
        "correct": false
    },
    {"text": "Taurus (April 20 - May 20)",
    "image": "https://media.women.com/images/images/000/080/864/large/gallery-1451582023-mcx-astro1-taurus.gif?1490730519",
    "correct": false
    },
    {"text": "Gemini (May 21 - June 20)",
    "image": "http://thesociallit.com/wp-content/uploads/2017/05/gallery-1451582468-mcx-astro1-gemini.gif",
    "correct": false
    },
    {"text": "Pisces (Feb 19 - Mar 20)",
    "image": "https://media.giphy.com/media/S9pRt4XWKnBQI/giphy.gif",
    "correct": true
    }
    ],
    "messageCorrect": "Yes, I\"m impressed that you know my birthday or at least birthday month!",
    "messageIncorrect": "Incorrect, my birthday is actually on March 8th so Pisces it is. "
    },
    {
        "question": "Thank you for playing Nada's game. Hope you enjoyed it and got to know Nada a little better!",
        "answers":[
        {"text":"Score 0-2: ",
        "image": "https://i.imgflip.com/s9vrk.jpg",
        "correct": false
    },
    {"text": "Score 2-4:",
    "image": "http://i.giphy.com/qXexawbjsqK88.gif",
    "correct": false
    },
    {"text": "Score 4-6:",
    "image": "https://media.makeameme.org/created/you-know-me-56ry18.jpg",
    "correct": false
    },
    {"text": "Score 6-8:",
    "image": "http://memeshappen.com/media/created/2018/06/Awesome-Job-.jpg",
    "correct": true
    }
    ],
    "messageCorrect": "GAME COMPLETE. Please refresh page if you'd like to play again",
    "messageIncorrect": "GAME COMPLETE. Please refresh page if you'd like to play again"
    }
    ];

// once the user clicks on the "start" button it clears the welcome page and gets the screen ready with the first question
    document.getElementById("start").addEventListener("click", both)

// once the user clicks on the "Next Question" button the game checks the current user answer with the correct answer, outputs message, then shows the next question
    document.getElementById("buttonCA").addEventListener("click", function(event){
        event.preventDefault()
        getInput();
        checkAnswer();
        nextQuestion();
    })

//setting these global variables for future use
    let score = 0;
    let global_index;

//this function clears everything from the welcome page to make space for the quiz
    function titleClear(){
        document.querySelector(".title").style.display = "none";
        document.querySelector(".line").style.display = "none";
        document.querySelector(".intro").style.display = "none";
        document.querySelector(".start").style.display = "none";
    }  

//this function simply shows the previously hidden quiz/form
    function start(){ 
        document.getElementById("quiz").style.display = "block";
    }

//this function calls the start and titleclear functions as well as starts the game with the first question
    function both (){
        titleClear();
        start();
        askQuestion(0);
    }

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
// this function shuffles the order in which the answers appear in so its more stimulating
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
// this function just makes sure that no radio buttons are not pre-selected when you start a new question
    function uncheck() {
        document.querySelector("#mcp1").checked = false;
        document.querySelector("#mcp2").checked = false;
        document.querySelector("#mcp3").checked = false;
        document.querySelector("#mcp4").checked = false;

    }
// this function calls on askQuestion and uncheck to make sure a new set of question and answers are outputted and all buttons are unchecked at the start of every screen   
    function nextQuestion(){
        global_index++;
        askQuestion(global_index);
        uncheck();
    }
// this function saves the text of the user's answer depending on which radio button he/she clicked
    function getInput(){
        const clicked = document.querySelectorAll('.answer');
        
        for(var x = 0; x < clicked.length; x++){
            if(clicked[x].checked){
                return clicked[x].value;
            }
        }
    }
// this function saves the text of the correct answer for each question 
    function returnCorrectAnswer(){
        const answers = array[global_index].answers    
        for(var x = 0; x < answers.length; x++){
            if(answers[x].correct === true){
                correctAnswer = answers[x].text;
            }
        }
        return correctAnswer;
    }
    
// this function compares the user answer to the correct answer to check for correctedness and return a score increment and relevant message
    function checkAnswer(){
        trueAnswer = returnCorrectAnswer();
        userAnswer = getInput();
// this if statement is stating if user inputs the right answer what happens and if not what happens
        if(userAnswer === trueAnswer){
            var messageCorrect = array[global_index].messageCorrect;
            score ++;
            swal({
                title: messageCorrect,
                text: "You got " + score + " out of 8 correct.",
              });
        }
        else{
            var messageIncorrect = array[global_index].messageIncorrect;
            swal({
                title: messageIncorrect,
                text: "You got " + score + " out of 8 correct.",
              });
        }
    }
    
    

    

   
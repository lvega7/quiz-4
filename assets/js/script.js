var body= document.body;
var container=document.querySelector("#home");


var score=0
var timer=0
var questionIndex=0

var questions= [
    {q:"What is javascript?",
    o: ["a fruit", "programming language", "an animal", "a type of house"],
    a:"programming language"},

    {q:"Which of these is not a data type?",
    o:["string", "array", "css", "numbers"],
    a:"css"
}

];

var start = document.querySelector('.btn');

start.addEventListener('click', function(){
   
    console.log(score)
    var firstQuestion= document.createElement("h2")


    container.appendChild(firstQuestion);
    start.classList.add ("hidden");
    appendQuestion();
    countdown();

    
})

// function quizTime(){
//    for (var i=0; i<questions.length; i++){
       
     

//        if(
//            (answer === questions[i].a)
//        ){
//            score++
//            alert("correct");
//        }
//        else{
//            alert("wrong");
//        }
//     }

// }

function appendQuestion(){
    var theQuestion = document.createElement("h2")
    theQuestion.textContent=questions[questionIndex].q
    container.appendChild(theQuestion)

for (var i=0; i<questions[questionIndex].o.length; i++){
    var theOptions = document.createElement("button")
    theOptions.textContent=questions[questionIndex].o [i]
// theOptions.addEventListener('click', handleAnswer
    theOptions.onclick= handleAnswer;
    
   
    
    container.appendChild(theOptions)
    
   
    
    
    
}
    
}

function handleAnswer(){
    console.log(this.textContent);
    if (this.textContent=== questions[questionIndex].a) {
        // console.log("correct")
        var correct= document.createElement("h2");
        correct.textContent=("Correct!")
        score++
        console.log(score)

        
        // this.questions[questionIndex].q++;
        container.appendChild(correct )
        

    }
}


function countdown(){
    var timeLeft = 2;
    var timer = document.querySelector (".time")

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timer.textContent = ' Time:' + timeLeft ;
      // Decrement `timeLeft` by 1
      timeLeft--;
    }  else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timer.textContent = 'Time:0';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      highScore();
    }
  }, 1000);
}

function highScore(){
    var message=document.createElement("h2")
    message.textContent="Input your initials to save your score!";
    container.appendChild(message)

    var box=document.createElement("TEXTAREA")
    // box.setAttribute("type", "text");
    // var words = box.textContent
    container.appendChild(box);


    var saveBtn=document.createElement("button")
    saveBtn.textContent=("Save");
    container.appendChild(saveBtn)

    saveBtn.addEventListener('click', function(){
        console.log(box.textContent)
    })
    // box.textContent = saveName;
    
}

var body= document.body;
var container=document.querySelector("#home");







var score=0
var timer=0
var questionIndex=0

var questions= [
    {q:"What is javascript?",
    o: ["a fruit", "programming language", "an animal", "a type of house"],
    a:"programming language"}

];

var start = document.querySelector('.btn');

start.addEventListener('click', function(){
    score++
    console.log(score)
    var words= document.createElement("h2")
    words.textContent=("hey hey hey ")

    container.appendChild(words);
    start.classList.add ("hidden");
    appendQuestion();

    
})

function quizTime(){
   for (var i=0; i<questions.length; i++){
       
     

       if(
           (answer === questions[i].a)
       ){
           score++
           alert("correct");
       }
       else{
           alert("wrong");
       }
    }

}

function appendQuestion(){
    var theQuestion = document.createElement("h2")
    theQuestion.textContent=questions[questionIndex].q
    container.appendChild(theQuestion)

for (var i=0; i<questions[questionIndex].o.length; i++){
    var theOptions = document.createElement("button")
    theOptions.textContent=questions[questionIndex].o [i]
// theOptions.addEventListener('click', handleAnswer
theOptions.onclick= handleAnswer;
    
// )

    container.appendChild(theOptions)

    
}
    
}

function handleAnswer(){
    console.log(this.textContent);
    if (this.textContent=== questions[questionIndex].a) {
        console.log("correct")
        


    }
}

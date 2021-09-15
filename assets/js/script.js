var body= document.body;

var words= document.createElement("h2")
words.textContent=("hey hey hey ")

body.appendChild(words);






var score=0
var timer=0

var start = document.querySelector('.btn');

start.addEventListener('click', function(){
    score++
    console.log(score)
    
})

function quizTime(){
   for (var i=0; i<questions.length; i++){
       
       var select = confirm(questions[i].q);

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

var questions= [
    {q:"What is javascript?"},
    {o: ["a fruit", "programming language", "an animal", "a type of house"]},
    {a:"programming language"}

];
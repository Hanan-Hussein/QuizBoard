var send_btn= document.getElementById('starttest');
var question_btn=document.getElementById('questions_btn');
var passedPanda = document.getElementById('excellently_container');
var averagePanda = document.querySelector('#fairly_container');
var failedPanda =document.querySelector('#fail_container');
var tryAgain2 = document.getElementById('tryAgain2');
var tryAgain3 = document.getElementById('tryAgain3');

send_btn.addEventListener('click',sendEvent);
question_btn.addEventListener('click',calculationsEvent);
tryAgain2.addEventListener('click',tryAgainEvent);
tryAgain3.addEventListener('click',tryAgainEvent);


var score =0;
var answers=['Three','Function','onLoad()','head','Script'];

var checked_answers =[];

/**
 * This function saves the user's name to the local storage 
 * and hides the landing page to make room for the form
 * @param {Text} e is the event listener
 */

function sendEvent(e){
    e.preventDefault();
    // console.log('Event type'+e.type);
    var welcomepage = document.getElementById('formPage');
    var question_form = document.getElementById('test_container');

    welcomepage.style.display='none';
    question_form.style.display='initial';
    var username=document.getElementById('name_edit').value;

    // localStorage.removeItem('name');

    localStorage.setItem('name', username);

}

function calculationsEvent(e){
    e.preventDefault();

    var question_one= document.getElementsByName('action');
    var question_two= document.getElementsByName('action2');
    var question_three= document.getElementsByName('action3');
    var question_four= document.getElementsByName('action4');
    var question_five= document.getElementsByName('action5');
    var quiz= [question_one, question_two,question_three,question_four,question_five];
    
    for (var h=0; h<answers.length; h++){
        for(var i=0; i<quiz.length;i++){
            for( var j=0; j<quiz[i].length;j++){
                if(quiz[i][j].checked){
                    if(quiz[i][j].value === answers[h]){
                        checked_answers.push(quiz[i][j].value)
                        score++;
                          
                    }
                }
            } 
        }
    }
var question_form = document.getElementById('test_container');
       
   question_form.style.display='none';


        var total = grading(score);
        if(total>=80){
            var name= localStorage.getItem('name');
            var passedChild=document.getElementById("passedUsername"); 
            var percentageValue=document.getElementById("percentage");        
            passedChild.textContent=name+'\'s';
            percentageValue.textContent=String(total);

            passedPanda.style.display='initial'
        } else if(total>=50){
            var name= localStorage.getItem('name');
            var passedChild=document.getElementById("averageUsername"); 
            var percentageAverage=document.getElementById("percentage_average");        
            passedChild.textContent=name+'\'s';
            percentageAverage.textContent=String(total);

            averagePanda.style.display='initial'
        }
        else{
            var name= localStorage.getItem('name');
            var passedChild=document.getElementById("failUsername"); 
            var percentagFail=document.getElementById("percentageFail");        
            passedChild.textContent=name+'\'s';
            percentagFail.textContent=String(total);

            failedPanda.style.display='initial'
        }
}


function grading (x){

 var grade= x/answers.length*100;
 return (grade);

}

function tryAgainEvent(e){
    e.preventDefault();
    var questionContainer = document.getElementById('test_container');
    var questionForm = document.getElementById('questionForm');
    questionForm.reset();
    score=0;
    questionContainer.style.display='initial';
    averagePanda.style.display='none';
    failedPanda.style.display='none'
    passedPanda.style.display='none';
}

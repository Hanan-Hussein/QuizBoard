var send_btn= document.getElementById('starttest');
var question_btn=document.getElementById('questions_btn');
send_btn.addEventListener('click',sendEvent);
question_btn.addEventListener('click',calculationsEvent);


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
    var welcomepage = document.getElementById('dd');
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
    var hey=[];
for (var h=0; h<answers.length; h++){
    // console.log("dddddddd"+answers[h]);


    for(var i=0; i<quiz.length;i++){
        for( var j=0; j<quiz[i].length;j++){

                if(quiz[i][j].checked){
                    
                    // console.log(quiz[i][j].value);
                    if(quiz[i][j].value === answers[h]){
                        // console.log(quiz[i][j].value);
                        checked_answers.push(quiz[i][j].value)
                          score++;
                          
                      }
                }
        }

        var question_form = document.getElementById('test_container');
        question_form.style.display='none';

        
        
    }
}

        console.log(score);
        console.log(answers);
        console.log(checked_answers);


}




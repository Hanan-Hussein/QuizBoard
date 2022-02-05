var send_btn= document.getElementById('starttest');
var question_btn=document.getElementById('questions_btn');
send_btn.addEventListener('click',sendEvent);
question_btn.addEventListener('click',calculationsEvent);


var score =0;
var answers=['Three','Function','onLoad()','head','Script']

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

    for(var i=0; i<question_one.length;i++){
        if(question_one[i].checked){
            console.log(question_one[i].value);
        }
        
    }



}



console.log('help');
var send_btn= document.getElementById('starttest');
send_btn.addEventListener('click',sendEvent);

/**
 * This function saves the user's name to the local storage 
 * and hides the landing page to make room for the form
 * @param {Text} e is the event listener
 */

function sendEvent(e){
    e.preventDefault();
    // console.log('Event type'+e.type);
    var ss = document.getElementById('dd');
    ss.style.display='none';
    var username=document.getElementById('name_edit').value;

    // localStorage.removeItem('name');

    localStorage.setItem('name', username);




}




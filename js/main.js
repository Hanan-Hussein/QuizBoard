console.log('help');
var send_btn= document.getElementById('starttest');
send_btn.addEventListener('click',sendEvent);



function sendEvent(e){
    e.preventDefault();
    // console.log('Event type'+e.type);
    var ss = document.getElementById('dd');
    ss.style.display='none';
    var username=document.getElementById('name_edit').value;

    // localStorage.removeItem('name');

    localStorage.setItem('name', username);




}




const init= function(){
    const injectElement=document.createElement('div');
    injectElement.className='Black-Overlay';
    injectElement.setAttribute('id', 'Black-Overlay');
    document.body.appendChild(injectElement);
}
init();

function on() {
    document.getElementById("Black-Overlay").style.display = "block";
    document.getElementById("Black-Overlay").style.opacity = 0.5;
}
on();


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message){
  document.getElementById("Black-Overlay").style.opacity = (1 - message.value); //To change opacity with slider value. Using (1 - value) for UX of lesser value being darker shade.
}
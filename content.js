const init= function(){
    const injectElement=document.createElement('div');
    injectElement.className='Black-Overlay';
    injectElement.setAttribute('id', 'Black-Overlay');
    document.body.appendChild(injectElement);
}
//Runs on pageload
init();

let overlay = document.getElementById("Black-Overlay");

// Turn on the overlay
function on(opacity) {
    overlay.style.display = "block";
    overlay.style.opacity = opacity;
}

// Turn off the overlay
function off(){
  overlay.style.display = "none";
}

// Listen to messages sent from the popup
chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message){
    
    // To know the current overlay values to render when opening the pop-up.
    if(message.title === "send-val"){
        chrome.runtime.sendMessage({
            value : overlay.style.opacity,
            displayStyle : overlay.style.display,
        });
    }

    // Check the checkbox state.
    else{
         if(message.toggle){
            //To change opacity with slider value. Using (1 - value) for UX of lesser value being darker shade.
            on((1 - message.value));
        }
    
        else if(!(message.toggle)){
            off();
        }
    }
}

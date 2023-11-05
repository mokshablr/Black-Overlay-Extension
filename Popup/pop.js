// Runs everytime the popup is opened
function init(){
    var slider = document.getElementById("popSlider");
    var output = document.getElementById("popVal");
    var check = document.getElementById("overlayToggle");

    
    let msg;
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, fetchVal);

    function fetchVal(tabs){
        msg = {
            title : "send-val",
        }

        chrome.tabs.sendMessage(tabId = tabs[0].id, message = msg);
    }

    chrome.runtime.onMessage.addListener(gotVal);
   
    // Render the UI for when popup is opened
    function gotVal(message){
        // Setting the popSlider and the popVal values
        val = 1-message.value;
        slider.value = val; 
        output.innerHTML =(Math.round(val*100)) + "%";

        // To check if the checkbox is on or not when opening the popup.
        if(message.displayStyle === "block"){
            check.checked = true;
        }
        else{
            check.checked = false;
        }
    }


    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = (Math.round(slider.value*100)) + "%"; // Display the default slider value

        let params = {
            active: true,
            currentWindow: true
        }
        chrome.tabs.query(params, gotTabs);

        function gotTabs(tabs){

            let msg = {
                value : slider.value,
                toggle : check.checked,
            }

            chrome.tabs.sendMessage(tabId = tabs[0].id, message = msg);
        }
    }

    // Sending the overlayToggle values to the content.js
    check.onchange= function() {

        let msg;
        let params = {
            active: true,
            currentWindow: true
        }
        chrome.tabs.query(params, gotTabs);

        function gotTabs(tabs){
            if( check.checked ){
                msg = {
                    value : slider.value,
                    toggle : true,
                }
            }
            else{
                msg = {
                    value : slider.value,
                    toggle : false,
                }
            }

            chrome.tabs.sendMessage(tabId = tabs[0].id, message = msg);
        }
    }
}


init();

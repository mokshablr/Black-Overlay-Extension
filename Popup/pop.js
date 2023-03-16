var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value*100 + "%"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  let val = this.value;
  let params = {
                active: true,
                currentWindow: true
            }
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs){

    let msg = {
        value : val
    }

    chrome.tabs.sendMessage(tabId = tabs[0].id, message = msg);
  }
}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var toggle = document.getElementById("overlay-toggle");
var overlay = document.getElementsByClassName("slidecontainer");
output.innerHTML = slider.value*100 + "%"; // Display the default slider value

toggle.addEventListener("click", () => {
  if(toggle.checked){
    overlay[0].style.display = "none";
  } else{
    overlay[0].style.display = "block";
  }
})

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
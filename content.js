const init= function(){
    const injectElement=document.createElement('div');
    injectElement.className='Black-Overlay';
    injectElement.setAttribute('id', 'Black-Overlay');
    document.body.appendChild(injectElement);
}
init();

function on() {
    document.getElementById("Black-Overlay").style.display = "block";
}
on();

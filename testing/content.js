const init= function(){
    const injectElement=document.createElement('div');
    injectElement.className='Black-Overlay';
    injectElement.innerHTML = "Hello!!!";
    document.body.appendChild(injectElement);

}
init();
//credit - https://huggingface.co/blog/fine-tune-wav2vec2-english (Patrick von Platen)

/* 
 To keep the session alive, 
 - On the tab with Google Colab opened, press Ctrl + Shift + I
 - CLick the console tab on the developer window pane
 - Copy the code under snippet 1 and paste it in the console tab and press enter
 
 To clear this function, 
 - Copy the code under snippet 2 and paste it in the console pane and press enter
 */
//snipet 1
function ConnectButton(){
    console.log("Connect pushed"); 
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click() 
}

var colab = setInterval(ConnectButton,60000);

//snippet 2
clearInterval(colab)

var buttons = document.querySelectorAll('button');

for(let i of buttons)
{
    i.addEventListener('click',handleClick);
}

function playSound(key){

    let filePath;

    switch (key){
        case 'w': filePath = './sounds/tom-1.mp3';
        break;
        case 'a': filePath = './sounds/tom-2.mp3';
        break;
        case 's': filePath = './sounds/tom-3.mp3';
        break;
        case 'd': filePath = './sounds/tom-4.mp3';
        break;
        case 'j': filePath = './sounds/snare.mp3';
        break;
        case 'k': filePath = './sounds/crash.mp3';
        break;
        case 'l': filePath = './sounds/kick-bass.mp3';
        break;
    }

    switch (key){
        case 'W': filePath = './sounds/tom-1.mp3';
        break;
        case 'A': filePath = './sounds/tom-2.mp3';
        break;
        case 'S': filePath = './sounds/tom-3.mp3';
        break;
        case 'D': filePath = './sounds/tom-4.mp3';
        break;
        case 'J': filePath = './sounds/snare.mp3';
        break;
        case 'K': filePath = './sounds/crash.mp3';
        break;
        case 'L': filePath = './sounds/kick-bass.mp3';
        break;
    }

    let audio = new Audio (filePath);
    audio.play();
   

}

function handleClick()
{
    let key= this.innerHTML;
    playSound(key);  
    addAnim(key);

}

function addAnim(currentKey){
	var activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},100);
}


window.addEventListener('keypress',function(event){
    let key = String.fromCharCode(event.keyCode);
    playSound(key);
    addAnim(key);
});

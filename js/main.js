const startBtn = document.querySelector('.startbtn');
let countDownTimer = 5;
const emojis = ["😍","😍","😎","😎","🥴","🥴","😡","😡","😅","😅","🤫","🤫","🫨","🫨","🤢","🤢","😮‍💨","😮‍💨","😇","😇","🤥","🤥","🤡","🤡","🤖","🤖","🥳","🥳"];


function startGame() {
    document.querySelector('#ruleTitle').innerHTM'<div id="boxes">Box1</div><div id="boxes">Box2</div><div id="boxes">Box3</div><div id="boxes">Box4</div>'L = '<div id = "countDown">'+ countDownTimer +'</div>'

    document.querySelector('#description').innerHTML = 

    document.querySelector('.startbtn').innerHTML = '<div id="resetButton">Press Enter to Reset</div>'

    timer(countDownTimer);

    
function listenForEnterKey(){
    document.addEventListener('keydown',function(event) {
        if (event.key === 'Enter') {
            resetGame();
            console.log('Game Restarting')
        }
    })
}

function timer(seconds) { //loop stops when the condition is false.
    
    let timerValue = document.querySelector('#countDown');

    let interval = setInterval(function() {
        timerValue.textContent = seconds;
        seconds--;
        if (seconds < 0) {
            document.querySelector('#ruleTitle').innerHTML = '<div id = "countDown">LOSER</div>';
            clearInterval(interval);
            setTimeout(resetGame, 3000);//settimout is awesome.. resets a function in a certain amount of time.  
        }
    }, 1000);//restarts every 1000 seconds.
}

function listenForEnterKey (){
    document.addEventListener('keydown',function(event) {
        if (event.key === 'Enter') {
            startGame();
            console.log('ENTER KEY PRESSED')
        }
    })
}

function resetGame(){
    location.reload();
}

listenForEnterKey ();

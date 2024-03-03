const emojis = ["😁","😁","😶‍🌫️","😶‍🌫️","😎","😎","🤠","🤠","🙂","🙂","🧐","🧐","😶","😶","🤥","🤥","🤗","🤗","🤓","🤓","👾","👾","🙁","🙁","😷","😷","🤕","🤕","🥲","🥲","☺","☺","👹","👹","🤡","🤡","🥳","🥳","😮‍💨","😮‍💨","😋","😋","🤪","🤪","🤐","🤐"];

let i=1;
let firstClickedEmoji = null;
let matchCount =-1;
let seconds = 120;

function Reset(){
    document.querySelector('#resetGame').addEventListener('click', function() {
        location.reload();
    });
}

function boxMatch(clickedEmoji, otherEmoji) {
    if (clickedEmoji === otherEmoji) {
        console.log("Emoji matched!");
        matchCount ++
        console.log("MatchCount is at " + matchCount)
        document.querySelectorAll('.active').forEach(function(activeItem) {
            activeItem.classList.remove('active');
            activeItem.classList.add('permaActive');
        });
        winMechanic();
    } else {
        console.log("Emoji not matched!");
    }
}
    

function winMechanic() {
    if (matchCount > 15) {
        document.querySelector('h1').innerHTML = 'You win. Press Reset To Play Again!';
    }
}


function cheatMechanic() { // Used for Demonstration
    document.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            document.querySelectorAll('.item').forEach(function(item) {
                item.classList.toggle('permaActive');
            });
        }
    });
}

function flipMechanic() {
    document.querySelectorAll('.item').forEach(function(item) {
        item.addEventListener('click', function() {
            if (this.classList.contains('active') || i >= 2) {
                return; // Don't do anything if already active or if i exceeds 2
            }
            this.classList.remove('item');
            this.classList.add('active');
            
            if (!firstClickedEmoji) {
                // First click
                firstClickedEmoji = this.innerHTML;
            } else {
                // Second click
                let secondClickedEmoji = this.innerHTML;
                boxMatch(firstClickedEmoji, secondClickedEmoji);
                firstClickedEmoji = null; // Reset for next pair
                i++; // Increment i for the next pair
                
                if (i >= 2) {
                    i = 1;
                    setTimeout(function() {
                        document.querySelectorAll('.active').forEach(function(activeItem) {
                            activeItem.classList.remove('active');
                            activeItem.classList.add('item');
                        });
                    }, 500);
                }
            }
        });
    });
}

function timer() {
    for (let i = seconds; i >= 0; i--) {
        setTimeout(function() {
            if (i === 0) {
                document.querySelector('h1').innerHTML = 'You lose. Restarting in 3 seconds.';
                setTimeout(function() {
                    location.reload();
                }, 3000);
            } else {
                console.log(i + " seconds are left");
            }
        }, (seconds - i) * 1000);
    }
}

const shuffleMechanic = emojis.sort(() => (Math.random() > .5) ? -1:1);
for (let i=0; i<emojis.length; i++){
let box = document.createElement('div')
box.className = 'item';
box.innerHTML = shuffleMechanic[i]
document.querySelector('.game').appendChild(box);
}

flipMechanic()
Reset()
boxMatch()
cheatMechanic()
winMechanic()
timer()
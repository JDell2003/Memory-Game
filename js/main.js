const emojis = ["😁","😁","😶‍🌫️","😶‍🌫️","😎","😎","🤠","🤠","🙂","🙂","🧐","🧐","😶","😶","🤥","🤥","🤗","🤗","🤓","🤓","👾","👾","🙁","🙁","😷","😷","🤕","🤕","🥲","🥲","☺","☺","👹","👹","🤡","🤡","🥳","🥳","😮‍💨","😮‍💨","😋","😋","🤪","🤪","🤐","🤐"];

function Reset(){
    document.querySelector('#resetGame').addEventListener('click', function() {
        location.reload();
    });
}


const Esort = emojis.sort(() => (Math.random() > .5) ? -1:1);
for (let i=0; i<emojis.length; i++){
let box = document.createElement('div')
box.className = 'item';
box.innerHTML = Esort[i]
document.querySelector('.game').appendChild(box);
}

Reset()
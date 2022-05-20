let player = {
    name: 'moro',
    chips: 200
}
let sum = 0;
let message = '';
let isAlive = false;
let hasBlackJack = false;
let cards = [];
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');
let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.name + ': $' + player.chips;

function startGame(){
    isAlive = true;
    hasBlackJack = false;
    console.log(isAlive)
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

function renderGame(){
    cardsEl.textContent = 'Cards: ';
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + ' ';
    }
    sumEl.textContent = 'Sum: ' + sum;
    if(sum<=20){
        message = 'Do you want to draw another card?'
    }
    else if(sum === 21){
        message = `You've got Blackjack!`;
        hasBlackJack = true;
    }
    else{
        message = `You've lost :(`
        isAlive = false;
    }
    let msgEl = document.querySelector('#display-msg');
    msgEl.textContent = message;
    $('#display-msg').css('color','white');
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card; 
        cards.push(card);
        console.log(cards);
        renderGame();
    }
    else{
        console.log('not alive')
        let errmessage = 'Please start a new game'
        let msgEl = document.querySelector('#display-msg');
        msgEl.textContent = errmessage;
        $('#display-msg').css('color','red');
    }
}

function getRandomCard(){
    let randnum =  Math.floor((Math.random() * 13) + 1);
    if(randnum > 10){
        return 10;
    }
    else if(randnum === 1){
        return 11;
    }
    else{
        return randnum;
    }
}
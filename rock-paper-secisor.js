let score = JSON.parse(localStorage.getItem('score'));
if(score === null){
score = {
win: 0,
losses: 0,
tie: 0
}

};

updateScoreElement();
function playGame(playerMove){
const computerMove = pickedcomputermove();
let result = '';
if(playerMove ==='scissors'){
if(computerMove ==='rock'){
result='you lose';
}
else if(computerMove === 'paper'){
result='you win';
}
else if(computerMove === 'scissors'){
result = 'Tie';
}
}
else if(playerMove === 'paper'){
if(computerMove ==='rock'){
result='win';
}
else if(computerMove === 'paper'){
result='Tie';
}
else if(computerMove === 'scissors'){
result = 'you lose';
}
}
else if(computerMove === 'rock'){
if(computerMove ==='rock'){
result='Tie';
}
else if(computerMove === 'paper'){
result='you lose';
}
else if(computerMove === 'scissors'){
result = 'you win';
}
}
if(result === 'you win'){
score.win +=1;
}
else if(result === 'you lose'){
score.losses +=1;
}
else if(result === 'Tie'){
score.tie +=1;
}
localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-move').innerHTML = `you 
<img src="image/${playerMove}-emoji.png"
class="move-icon">
<img src="image/${computerMove}-emoji.png"
class="move-icon">
computer`;


}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `win:${score.win}, Losses:${score.losses}, Ties:${score.tie}` ;

}

function pickedcomputermove(){
const randomNumber = Math.random();
let computerMove = '';

if(randomNumber>=0 && randomNumber<1/3){
computerMove = 'rock';
}
else if(randomNumber >= 2/3 && randomNumber < 1){
computerMove = 'paper';
}
else  if(randomNumber>=1/6 && randomNumber<1){
computerMove = 'scissors';
}
return computerMove;
}
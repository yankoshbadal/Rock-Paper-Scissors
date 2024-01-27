//computer move
let computer = '';
let commputerMove = '';
function funComputerMove(){
    let commputerMove = Math.random();
    if (commputerMove <= 1/3){
        computer = 'Rock';
    }else if (commputerMove > 1/3 && commputerMove < 2/3 ){
        computer = 'Paper';
    }else if(commputerMove > 2/3 && commputerMove < 1){
        computer = 'Scissor';
    };
};

//player move
let player = '';
function funPlayerMove(parameter1){
    if(parameter1 === 'Rock'){
        player = 'Rock';
    }else if(parameter1 === 'Paper'){
        player = 'Paper';
    }else if(parameter1 === 'Scissor'){
        player = 'Scissor';
    };
}; 
//score
let score = {
    win: 0,
    loss: 0,
    tie: 0
};

//result
let result = '';
let verdict = '';
function funResult(){
   
if (player === computer){
    score.tie +=1;
    verdict = 'Its a Tie';
}else if(player === 'Rock' && computer === 'Scissor' ){
    score.win +=1;
    verdict = 'You Won';
}else if(player === 'Scissor' && computer === 'Paper'){
    score.win +=1;
    verdict = 'You Won';
}else if(player === 'Paper' && computer === 'Rock'){
    score.win +=1;
    verdict = 'You Won';
} else{
    score.loss +=1;
    verdict = 'You lossed';
};

showScore();
showVerdict();
bothMove();
};
//Show Score
function showScore(){
let elementScore = document.querySelector('.js-score');
elementScore.innerText = `Wins ${score.win}, Loss ${score.loss}, Tie ${score.tie}`;
};
//verdict
function showVerdict(){
let elementVerdict = document.querySelector('.js-verdict');
    elementVerdict.innerText = `${verdict}`;
};
//both move
function bothMove(){
let elementBothMovie = document.querySelector('.js-both-move');
    elementBothMovie.innerHTML = `You <img src="images/${player}.png" class = "image-var"> || <img src="images/${computer}.png" class = "image-var"> Computer`;
};

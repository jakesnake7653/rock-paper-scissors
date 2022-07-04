function ComputerPick(){   
let comp = Math.floor( 1 + Math.random()*3)
if (comp=='1'){
   return 'rock'
}
 else if (comp=='2'){
   return 'paper';
}
else if (comp=='3'){
   return 'scissors';
}
}
let scorep = 0
let scorec = 0

function game1(){
   const score = document.querySelector('#score')
  
   const CC = document.querySelector('#CC')
  
   
   let ComputerChoice = ComputerPick();
   if (ComputerChoice == 'rock')
   {console.log('Draw') 
   CC.textContent="Computer chose rock, Draw"
}
   if (ComputerChoice == 'paper')
    {console.log('Lose')   
    CC.textContent="Computer chose paper, You lose";
   scorec++

}
    if (ComputerChoice == 'scissors') 
   {console.log('Win')
   CC.textContent="Computer chose scissors, You win"
   scorep++;
} score.textContent = (scorep + ' You : Computer ' +scorec)
if (scorec == 5){
   score.textContent = ('Computer wins')
}
if (scorep == 5){
   score.textContent = ('You win')
}
}
function game2(){
   const score = document.querySelector('#score')

   const CC = document.querySelector('#CC')
   let ComputerChoice = ComputerPick();
   if (ComputerChoice == 'rock') 
   {console.log('Win')
   CC.textContent=("Computer chose rock, You win")
   scorep++
   
} 
   if (ComputerChoice == 'paper') 
   {console.log('Draw')
   CC.textContent="Computer chose paper, Draw"}
   if (ComputerChoice == 'scissors')
    {console.log('Lose')
    CC.textContent="Computer chose scissors, You lose"
    scorec++
   }score.textContent = (scorep + ' You : Computer ' +scorec)
   if (scorec == 5){
      score.textContent = ('Computer wins')
   }
   if (scorep == 5){
      score.textContent = ('You win')
   }
}
function game3(){
   const score = document.querySelector('#score')

const CC = document.querySelector('#CC')
   let ComputerChoice = ComputerPick();
   if (ComputerChoice == 'rock') 
   {console.log('Lose')
   CC.textContent="Computer chose rock, You Lose"
   scorec++
   
}
   if (ComputerChoice == 'paper') 
   {console.log('Win')
   CC.textContent="Computer chose paper, You win"
   scorep++;
   
}
   if (ComputerChoice == 'scissors') 
   {console.log('Draw')
   CC.textContent="Computer chose scissors, Draw"}
   score.textContent = (scorep + ' You : Computer ' +scorec)
   if (scorec == 5){
      score.textContent = ('Computer wins')
   }
   if (scorep == 5){
      score.textContent = ('You win')
   }
}

function restart(){
   restart1()
return scorep = 0}
function restart1(){

   return scorec = 0}



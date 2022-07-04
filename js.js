let ComputerChoice = ComputerPick();
let Choice = prompt().toLowerCase();
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
function game(){
if (ComputerChoice =='rock' && Choice == 'paper'){
   console.log('You Win!')
}
if (ComputerChoice =='rock' && Choice == 'rock'){
   console.log('Draw!')
}
if (ComputerChoice =='rock' && Choice == 'scissors'){
   console.log('You Lose!')
}
if (ComputerChoice =='paper' && Choice == 'paper'){
   console.log('Draw!')
}
if (ComputerChoice =='paper' && Choice == 'rock'){
   console.log('You Lose!')
}
if (ComputerChoice =='paper' && Choice == 'scissors'){
   console.log('You Win!')
}
if (ComputerChoice =='scissors' && Choice == 'paper'){
   console.log('You Lose!')
}
if (ComputerChoice =='scissors' && Choice == 'rock'){
   console.log('You Win!')
}
if (ComputerChoice =='scissors' && Choice == 'scissors'){
   console.log('Draw!')
}
}
game()
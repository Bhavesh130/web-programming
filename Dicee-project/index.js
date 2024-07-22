
var rollDice=Math.floor(Math.random()*6)+1;
var randomDiceImage="images/dice"+rollDice+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);
var rollDice2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/dice"+rollDice2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2)

if(rollDice>rollDice2){
    document.querySelector("h1").style.color="red";
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(rollDice2>rollDice){
    document.querySelector("h1").style.color="blue";
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").style.color="green";
    document.querySelector("h1").innerHTML="Draw😳";
}
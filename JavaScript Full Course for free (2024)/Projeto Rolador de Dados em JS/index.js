// Projeto gerador de número aleatório

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 21;
let dado1;
let dado2;
let dado3;

myButton.onclick = function(){
    dado1 = Math.floor(Math.random() * (max - min)) + min;
    dado2 = Math.floor(Math.random() * (max - min)) + min;
    dado3 = Math.floor(Math.random() * (max - min)) + min;
   
    myLabel1.textContent = dado1;
    myLabel2.textContent = dado2;
    myLabel3.textContent = dado3;
}




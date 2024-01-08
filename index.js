

let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random() * 6) + 1;
let z = Math.floor(Math.random() * 6) + 1;

document.getElementById("RollDice").onclick = function() {

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;


    document.getElementById("dice1").innerHTML = x;
    document.getElementById("dice2").innerHTML = y;
    document.getElementById("dice3").innerHTML = z;



}


console.log(x);
console.log(y);
console.log(z);
const container =document.getElementsByClassName("container");
let character = "X";
const turn=document.getElementsByClassName("demo");
turn[0].innerHTML=character+"'s turn";
let restart=document.getElementById("restart");

let winingCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let attempts = 0;
let allowed_input=1;
container[0].addEventListener("click", function(event){
    if(event.target.innerHTML === "" && allowed_input === 1) {
        attempts++;
        event.target.textContent = character;
        if (character === "X") {
            character = "O";
        }
        else {
            character = "X";
        }
    }
    turn[0].innerHTML=character+"'s turn";
    if (attempts >= 9) {
        allowed_input=0;
        turn[0].innerHTML = "It's a draw!";
    }
    checkWinner();
});

let box=document.getElementsByClassName("box");
let n=winingCombinations.length;
function checkWinner() {
    for(let i=0;i<n;i++){
        a=box[winingCombinations[i][0]].textContent;
        b=box[winingCombinations[i][1]].textContent;
        c=box[winingCombinations[i][2]].textContent;
        if(a!=="" && a===b && a===c){
            allowed_input=0;
            turn[0].innerHTML=a+ " is the winner";
            box[winingCombinations[i][0]].style.backgroundColor = "red";
            box[winingCombinations[i][1]].style.backgroundColor = "red";
            box[winingCombinations[i][2]].style.backgroundColor = "red";
            return;
        }
    }
}

restart.addEventListener("click", function(event){
    for(let i=0;i<9;i++){
        box[i].textContent = "";
        box[i].style.backgroundColor = "";
    }
    attempts = 0;
    character = "X";
    allowed_input = 1;
    turn[0].innerHTML = character + "'s turn";
});
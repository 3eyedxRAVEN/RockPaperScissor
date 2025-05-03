let userScore = 0;
let compScore = 0;
let userScore1 = document.querySelector("#userScore");
let compScore1 = document.querySelector("#compScore");
let resetBtn = document.querySelector("#resetBtn");
let complbl = document.querySelector("#complbl");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const resetGame = ()=>
{
    userScore = 0;
    compScore = 0;
    userScore1.textContent = userScore;
    compScore1.textContent = compScore;
    msg.textContent = "Choose your move!";
    complbl.classList.add("hide");
};
const drawGame = ()=>{
    msg.textContent = "Game Draw!!, Try Again.";
    msg.style.backgroundColor = "#F4E439";
};

const getCompChoice = ()=>{
    let options = ["rock","paper","scissors"];
    let random = Math.floor(Math.random() * 3);
    // console.log(random);
    console.log("Computer choosed= ", options[random])
    return options[random];
};

const playGame = (userChoice)=>{
    console.log("User choice= ", userChoice);
    let compChoice = getCompChoice();
    complbl.textContent = `Computer Choose: ${compChoice.toUpperCase()}`;
    complbl.classList.remove("hide");
    if(compChoice === userChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice == "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScore1.textContent = userScore;
        msg.textContent = "Congrats!! you win.";
        msg.style.backgroundColor = "#32C1ED";
    }
    else
    {
        compScore++;
        compScore1.textContent = compScore;
        msg.textContent = "Opps!! you loose.";
        msg.style.backgroundColor = "#E05954";
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click",resetGame);

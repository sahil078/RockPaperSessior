let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll("img");

const genComptChoice = ()=>{
    let option = ["rock" , "paper" , "scisser"];
    const randomNum = Math.floor(Math.random()*3); // generates a number between 1 and 3
    return option[randomNum];
}

const play = (userChoice)=>{
    console.log("user choice " , userChoice);
    let cmptChoice = genComptChoice();
    console.log("compt choice" , cmptChoice);

    // check condition to win the game
    if(userChoice === cmptChoice){
        document.querySelector(".result").textContent="Game Draw";
    }
    else if(userChoice ==="rock"){
        // scissor , paper  
        if(cmptChoice === "paper"){
            document.querySelector(".result").textContent= `You Loose ${cmptChoice} beates ${userChoice}`;
            compScore += 5;
            document.querySelector(".c-score").textContent = compScore;
        }else{
            document.querySelector(".result").textContent = `you win ${userChoice} beates ${compChoice}`;
            userScore += 5;
            document.querySelector(".p-score").textContent = userScore;
        }
    }
    else if(userChoice ==="paper"){
        // rock , sessiors
        if(cmptChoice === "scisser"){
            document.querySelector(".result").textContent= `You Loose ${cmptChoice} beates ${userChoice}`;
            compScore += 5;
            document.querySelector(".c-score").textContent = compScore;
        }else{
            document.querySelector(".result").textContent = `you win ${userChoice} beates ${compChoice}`;
            userScore += 5;
            document.querySelector(".p-score").textContent = userScore;
        }
    }
    else{
        if(cmptChoice==="rock"){
            document.querySelector(".result").textContent= `You Loose ${cmptChoice} beates ${userChoice}`;
            compScore += 5;
            document.querySelector(".c-score").textContent = compScore;
        }else{
            document.querySelector(".result").textContent = `you win ${userChoice} beates ${compChoice}`;
            userScore += 5;
            document.querySelector(".p-score").textContent = userScore;
        }
    }

}
choice.forEach((choice) =>{
    choice.addEventListener('click' , ()=>{
        const userChoice = choice.getAttribute("id");
        play(userChoice);
    })
})

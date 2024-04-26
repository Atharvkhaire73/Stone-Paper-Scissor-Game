let youscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); // Use const for the element reference
const youparascore = document.querySelector("#you");
const comparascore = document.querySelector("#com");

const drawgame = () => {
    console.log("Game was a draw");
    msg.innerText = "Game was a draw"; // Fix typo: 'innertext' -> 'innerText'
    document.getElementById("msg").style.backgroundColor = "#003566";
};

const showwinner = (userwin) => {
    if (userwin) {
        youscore++;
        document.getElementById("msg").style.backgroundColor = "green";
        youparascore.innerText = youscore;
        console.log("You won");
        msg.innerText = "You win";
    } else {
        compscore++;
        document.getElementById("msg").style.backgroundColor = "red";
        comparascore.innerText = compscore;
        console.log("You lost");
        msg.innerText = "You lose";
    }
};

const gencomchoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
};

const playgame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compchoice = gencomchoice();
    console.log("Comp choice =", compchoice);

    if (userchoice === compchoice) { // Use '===' for strict equality
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "stone") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else if(userchoice === "scissors") { // Add extra check for robustness
            userwin = compchoice === "stone" ? false : true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id"); // Ensure valid attribute
        if (userchoice) { // Check if 'id' is not null or undefined
            playgame(userchoice);
        }
    });
});

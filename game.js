function UserChoice () {
    User = prompt ("rock, paper or scissor?");
    User = User.toLowerCase ();

    if (User == "rock") {
        User = "rock";
    }
    else if (User == "paper") {
        User = "paper";
    }
    else if (User == "scissor") {
        User = "scissor";
    }
    else {
        User = "Error"
    }
    return User
}

function ComputerChoice (min=1, max=3) {
    let PC = "";
    switch (Math.floor (Math.random() * (max - min + 1)) + min) {
        case 1:
            PC = "rock";
            return PC
        case 2:
            PC ="paper";
            return PC
        case 3:
            PC ="scissors"
            return PC
    }
}

function Game (User, PC, score,  result) {
    User = UserChoice();
    PC = ComputerChoice();

    function GameRound (result) {
        for (let i = 0; i < 5; i++) {
            function Score (Uscore, Comscore, result) {
                Uscore = 0, Comscore = 0;

                if (User == "rock" && PC == "paper") {
                    Uscore += 0;
                    Comscore += 1;
                }
                else if (User = "rock" && PC == "scissor") {
                    Uscore += 1;
                    Comscore += 0;
                }
                else if (User = "paper" && PC == "scissor") {
                    Uscore += 0;
                    Comscore += 1;
                }
                else if (User = "paper" && PC == "rock") {
                    Uscore += 1;
                    Comscore += 0;
                }
                else if (User = "scissor" && PC == "rock") {
                    Uscore += 0;
                    Comscore += 1;
                }
                else if (User = "scissor" && PC == "paper") {
                    Uscore += 1;
                    Comscore += 0;
                }
                else {
                    Uscore += 0;
                    Comscore += 0;
                }

                if (Uscore > Comscore) {
                    result = "You win :D";
                }
                else if (Uscore < Comscore) {
                    result = "You lose :("
                }
                else {
                    result = "Draw :o"
                }
            }
        }
    }
}
console.log (Game());
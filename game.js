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

function Game (Result) {
    /*User = UserChoice();
    PC = ComputerChoice();*/

    function GameRound (result) {
        for (let i = 0; i < 5; i++) {
            function Score (Uscore, Comscore, User, PC) {

                Uscore = 0, Comscore = 0;
                
                User = UserChoice();
                PC = ComputerChoice();

                if (User == "rock" && PC == "paper") {
                    Uscore += 0;
                    Comscore += 1;
                    console.log (Uscore, Comscore);
                }
                else if (User = "rock" && PC == "scissor") {
                    Uscore += 1;
                    Comscore += 0;
                    console.log (Uscore, Comscore);
                }
                else if (User = "paper" && PC == "scissor") {
                    Uscore += 0;
                    Comscore += 1;
                    console.log (Uscore, Comscore);
                }
                else if (User = "paper" && PC == "rock") {
                    Uscore += 1;
                    Comscore += 0;
                    console.log (Uscore, Comscore);
                }
                else if (User = "scissor" && PC == "rock") {
                    Uscore += 0;
                    Comscore += 1;
                    console.log (Uscore, Comscore);
                }
                else if (User = "scissor" && PC == "paper") {
                    Uscore += 1;
                    Comscore += 0;
                    console.log (Uscore, Comscore);
                }
                else {
                    Uscore += 0;
                    Comscore += 0;
                    console.log (Uscore, Comscore);
                }
                return [Uscore, Comscore]
            }

                /*if (Uscore > Comscore) {
                    result = "You win :D";
                }
                else if (Uscore < Comscore) {
                    result = "You lose :("
                }
                else {
                    result = "Draw :o"
                }
            }*/
        }
        result = Score();

        if (result[0] > result[1]) {
            return result = "You win :D"
        }
        else if (result[0] < result[1]) {
            return result = "You lose :("
        }
        else {
            return result = "Draw :o"
        }
    }
Result = GameRound();
return Result
}
console.log (Game());
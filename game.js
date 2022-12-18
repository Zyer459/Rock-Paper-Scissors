function ComputerChoice (min=1, max=3) {
    let PC = "";
    switch (Math.floor (Math.random() * (max - min + 1)) + min) {
        case 1:
            PC = "Rock";
            break;
        case 2:
            PC ="Paper";
            break;
        case 3:
            PC ="Scissors"
            break;
        default:
            PC = "Error";
    }
    return console.log (PC);
}
console.log (ComputerChoice());
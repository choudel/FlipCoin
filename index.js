class Coin {
    constructor() {
        this.coinOption = "";
        this.coinValue = ["heads", "tails"];
        let randnum = newFunction();
        this.coinOption = this.coinValue[randnum];
    }
    getCoinOption() {
        return this.coinOption;
    }
}
class Player {
    constructor(newName) {
        this.name = "";
        this.coinOption = "";
        this.coinValue = ["heads", "tails"];
        this.name = newName;
    }
    getCoinOption() {
        return this.coinOption;
    }
    setCoinOption(opponnentFlip) {
        if (opponnentFlip === 'tails') {
            this.coinOption = 'heads';
        }
        else {
            this.coinOption = 'tails';
        }
    }
    getRandCoinOption() {
        let randnum = newFunction();
        console.log(randnum);
        this.coinOption = this.coinValue[randnum];
        console.log(this.coinOption);
        return this.coinOption;
    }
    didPlayerWin(winningFlip) {
        if (this.coinOption == winningFlip) {
            console.log(this.name + " won the flip of " + this.coinOption);
        }
        else {
            console.log(this.name + " lost the flip of " + this.coinOption);
        }
    }
}
class CoinGame {
    constructor(player1Name, player2Name) {
        this.players = [new Player(""), new Player("")];
        this.theCoin = new Coin();
        this.players = [new Player(player1Name), new Player(player2Name)];
    }
    startGame() {
        console.log(this.players);
        let randindex = newFunction();
        let playersPick = this.players[randindex];
        console.log(playersPick);
        playersPick.getRandCoinOption();
        function opposit(randindex) { if (randindex == 0) {
            return 1;
        }
        else {
            return 0;
        } }
        let opponnentIndex = opposit(randindex);
        console.log(opponnentIndex);
        this.players[opponnentIndex].setCoinOption(playersPick.coinOption);
        let winningFlip = this.theCoin.getCoinOption();
        this.players[randindex].didPlayerWin(winningFlip);
        this.players[opponnentIndex].didPlayerWin(winningFlip);
    }
}
const played = new CoinGame("choudel", "john");
played.startGame();
function newFunction() {
    let randindex = Math.random();
    randindex < 0.5 ? randindex = 0 : randindex = 1;
    return randindex;
}

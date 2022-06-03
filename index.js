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
        this.coinOption = (opponnentFlip == "heads") ? "tails" : "heads";
    }
    getRandCoinOption() {
        let randnum = newFunction();
        this.coinOption = this.coinValue[randnum];
        return this.coinOption;
    }
    didPlayerWin(winningFlip) {
        if (this.coinOption == winningFlip) {
            console.log(Player.name + "won the filp of " + this.coinOption);
        }
        else {
            console.log(Player.name + "lost the filp of " + this.coinOption);
        }
    }
}
class CoinGame {
    constructor() {
        this.players = [new Player("hello"), new Player("start")];
        this.theCoin = new Coin();
    }
    CoinGame(player1Name, player2Name) {
        this.players = [new Player(player1Name), new Player(player2Name)];
    }
    startGame() {
        let randindex = newFunction();
        let playersPick = this.players[randindex].getRandCoinOption();
        let opponnentIndex = (randindex == 0) ? 1 : 0;
        this.players[opponnentIndex].setCoinOption(playersPick);
        let winningFlip = this.theCoin.getCoinOption();
        this.players[0].didPlayerWin(winningFlip);
        this.players[1].didPlayerWin(winningFlip);
    }
}
const played = new CoinGame();
played.CoinGame("choudel", "john");
played.startGame();
function newFunction() {
    let randindex = Math.random();
    randindex < 0.5 ? 0 : 1;
    return randindex;
}

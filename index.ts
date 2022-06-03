class Coin{
    public coinOption:string= "";
    public coinValue:string[]=["heads","tails"];

    constructor(){
        let randnum:number= newFunction()
        this.coinOption=this.coinValue[randnum];

    }
    public getCoinOption():string{
        return this.coinOption;
    }
}
class Player{
    public name:string="";
    public coinOption:string="";
    public coinValue:string[]=["heads","tails"];

    constructor(newName:string){
        this.name=newName;
    }
    public getCoinOption():string{
        return this.coinOption
    }
    public setCoinOption(opponnentFlip:string):void{
        this.coinOption=(opponnentFlip=="heads")?"tails":"heads";

    }
    public getRandCoinOption():string{
        let randnum:number= newFunction();
        this.coinOption=this.coinValue[randnum];
        return this.coinOption
    }
    public didPlayerWin(winningFlip:string):void{
        if (this.coinOption==winningFlip){
            console.log(Player.name+"won the filp of "+this.coinOption)
        }else{
            console.log(Player.name+"lost the filp of "+this.coinOption)
        }
    }

}
class CoinGame{
    public players:Player[]= [new Player("hello"), new Player("start")];

    public theCoin:Coin= new Coin();

    public CoinGame(player1Name:string,player2Name:string){
        this.players=[new Player(player1Name),new Player(player2Name)] 
    }
    public startGame():void{
        let randindex: number = newFunction();
        let playersPick:string = this.players[randindex].getRandCoinOption();
        let opponnentIndex:number=(randindex==0)?1:0
        this.players[opponnentIndex].setCoinOption(playersPick)
        let winningFlip= this.theCoin.getCoinOption()
        this.players[0].didPlayerWin(winningFlip)
        this.players[1].didPlayerWin(winningFlip)
    }
}

const played = new CoinGame();
played.CoinGame("choudel","john");
played.startGame()
function newFunction() {
    let randindex: number = Math.random();
    randindex < 0.5 ? 0 : 1;
    return randindex;
}


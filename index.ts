class Coin{
    private coinOption:string= "";
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
        if (opponnentFlip==='tails') { this.coinOption= 'heads'} else { this.coinOption='tails'} 
    }
    public getRandCoinOption():string{
        let randnum:number= newFunction();
        console.log(randnum)
        this.coinOption=this.coinValue[randnum];
        console.log(this.coinOption)
        return this.coinOption
    }
    public didPlayerWin(winningFlip:string):void{
        if (this.coinOption==winningFlip){
            console.log(this.name+" won the flip of " + this.coinOption)
        }else{
            console.log(this.name+" lost the flip of "+ this.coinOption)
        }
    }

}
class CoinGame{
    public players:Player[]= [new Player(""),new Player("")];

    public theCoin:Coin= new Coin();

    public constructor(player1Name:string,player2Name:string){
        this.players=[new Player(player1Name),new Player(player2Name)] 
    }
    
    public startGame():void{
        console.log(this.players)
        let randindex: number = newFunction();
        let playersPick:Player = this.players[randindex]
        console.log(playersPick)
        playersPick.getRandCoinOption()
        function opposit(randindex):number {if (randindex==0) {return 1} else {return 0} }
        let opponnentIndex:number= opposit(randindex)
        console.log (opponnentIndex)
        this.players[opponnentIndex].setCoinOption(playersPick.coinOption)
        let winningFlip= this.theCoin.getCoinOption()
        this.players[randindex].didPlayerWin(winningFlip)
        this.players[opponnentIndex].didPlayerWin(winningFlip)
    }
}

const played = new CoinGame("choudel","john");

played.startGame()
function newFunction() {
    let randindex: number = Math.random();
    randindex < 0.5 ? randindex= 0 : randindex=1;
    return randindex;
}


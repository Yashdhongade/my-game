class Player{
    constructor(){
        this.Index = null;
        this.PlayerId = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
        playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
       playerCount: count
        })
    }

 update(){
     var PlayerIndex ="player" + playerCount;
     database.ref(playerIndex).set({
         PlayerId:this.PlayerId
     });
 }

 static getPlayeInfo(){
     var playerInfoRef = database.ref('player');
     playerInfoRef.on("value",(data)=>{
     allPlayers = data.val();
     })
 }

}
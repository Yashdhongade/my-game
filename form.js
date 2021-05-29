class Form{
    constructor(){
    this.input = createInput("PlayerId");
    this.button = createButton('START');
    this.greeting = createElement('h2')

    }

    display(){
        var title = createElement('h2')
        title.html("SHOOTERS IN WAR")
        title.position(130,0)

        
        input.position(130,160);
        button.position(250,200);

       this.button.mousePressed(()=>{
        input.hide();
        button.hide();

        player.PlayerId  = this.input.value();

        playerCount+=1
        player.Index = playerCount;
        player.update(PlayerId);
        player.upateCount(playerCount);

        this.greeting.html("DO YOUR BEST" + PlayerId);
        this.greeting.position(130,100);

         }) ;
    }
}
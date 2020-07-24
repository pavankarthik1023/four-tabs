class Game{
    constructor(){

        

    }
    //read the gamestate from the database
    getState()
    {
        var gamestateRef= database.ref('gameState')
        gamestateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state)

{database.ref('/').update({
    gameState:state
})

}
start()
{
    if(gameState===0){
    player=new Player();
    player.getCount();
    form=new Form();
    form.display()
    }
}
}
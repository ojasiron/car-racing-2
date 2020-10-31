class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    player.getPlayerinfo()
    var displayPosition=200;
    if(allPlayers!==undefined){

    
    for(var i in allPlayers)
    {
     var displayPosition=displayPosition+20;
      text(allPlayers[i].name+":"+allPlayers[i].distance,200,displayPosition)
    }
  }}
}

class Player {
  constructor(){}
//playerCount is accesed from the database
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }
//playerCount is updated in the database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//playerName is updated in the database
  update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name
    });
  }
}

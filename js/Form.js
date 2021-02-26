class Form {
  constructor() {
  //writing the code  using abstraction 
  }
//A form is displayed with title,input and a button 
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);
//when the button is pressed , the input and the button are hidden and a greeting is displayed
    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      //name and the player count are updated 
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}

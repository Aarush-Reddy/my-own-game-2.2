class Game {
    constructor() 
    {
      this.resetTitle = createElement("h2");
      this.resetButton = createButton("");

      this.archer1Img = loadImage("assets/archer1.png")
      this.archer2Img = loadImage("assets/archer2.png")
    }
  
    getState() 
    {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
  
    update(state) 
    {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() 
    {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();

      archer1 = createSprite(350,430);
      archer1.addImage("archer1", this.archer1Img);
      archer1.scale = 0.11;
      archer1.visible = false;
        
    
      archer2 = createSprite(1000,430);
      archer2.addImage("archer2", this.archer2Img);
      archer2.scale = 1;
      archer2.visible = false;

      archers = [archer1, archer2];
    
    }

    play()
    {
        this.handleElements();
        this.handleResetButton();
        Player.getPlayersInfo();
        obstaclesGroup = new Group();
        powerUpgroup = new Group ();

        if(frameCount%700===0)
        {
          obstacles =createSprite (Math.round(random(400,950)),0)
          obstacles.velocity.y =1
          obstaclesGroup.add(obstacles)         
          obstacles.addImage(obstaclesimg)
          obstacles.scale =0.1
        }
        if(frameCount%800===0)
        {
          powerUp =createSprite (Math.round(random(400,950)),0)
          powerUp.velocity.y =1
          powerUpgroup.add(powerUp)         
          powerUp.addImage(powerUpimg)
          powerUp.scale =0.1;
          
        }
        
       
      
        if(allPlayers!==undefined)
        {
         // image(backGroundImg,0,0)
         
          
          var index = 0;
          for (var plr in allPlayers) 
          {
            index = index + 1;
        
            var x = archers[index - 1].position.x;
            var y = archers[index - 1].position.y;

              if (index === player.index) 
              {
                archer1.visible = true;
                archer2.visible = true;
                stroke(10);
                fill("red");
                ellipse(x, y, 60, 60);
                
               
              }
          }
          this.handlePlayerControls();
          drawSprites();
        }
        
    }
    handleElements() {
        form.hide();
        form.titleImg.position(20, 20);
        form.titleImg.class("gameTitleAfterEffect");

    
        this.resetButton.class("resetButton");
        this.resetButton.position(1100, 50);
      }
    
    
    handleResetButton() {
        this.resetButton.mousePressed(() => {
          database.ref("/").set({
            playerCount: 0,
            gameState: 0,
          });
          window.location.reload();
        });
      }


    handlePlayerControls()
     {
      if (keyIsDown("SPACE")) 
      {
        player.positionY += 100;
        player.update();
        console.log ("hi")
      }

      if (keyIsDown(DOWN_ARROW)) 
      {
        player.positionY -= 10;
        player.update();
        console.log ("hi")
      }
  
      if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) 
      {
        player.positionX -= 5;
        player.update();
        console.log ("hi")
      }
  
      if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) 
      {
        player.positionX += 5;
        player.update();
        console.log ("hi")
      }
    } 
    
    
}
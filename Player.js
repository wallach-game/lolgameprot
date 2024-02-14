class Player extends GameObject {
    constructor(x, y, symbol) {
      super(x, y, symbol);
      // Additiona player-specific properties
      this.health = 100;
      this.speed = 5;
    }
  
    move(direction) {
        let nX = this.x;
        let nY = this.y;

      // Update position based on direction and speed
      if (direction === "up") {
        nY -= 1;
      } else if (direction === "down") {
        nY += 1;
      } else if (direction === "left") {
        nX-=1;
      } else if (direction === "right") {
        nX+= 1;
      }
    
      let canMove = true;

      for (let i = 0; i < Game.gameObjects.length; i++) {
        const element = Game.gameObjects[i];
        if(element.collision == true)
        {
            if(element.x == nX && element.y == nY)
            {
                canMove=false;
            }      
        }
        
      }

      if(canMove){
        this.x = nX;
        this.y = nY;
      }
  
      // Handle edge cases or boundaries if needed
    }
}
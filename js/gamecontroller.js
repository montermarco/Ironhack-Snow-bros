
///////////////////////////////////////////////// Draw Platforms in canvas 

function drawPlatforms(){
    c.stroke();
    platforms.forEach(platform=>{
      c.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
  };
  
///////////////////////////////////////////////// CHARACTER MOTION - logic & physics  

var keys = [];

//for moving
var friction = 0.8;
//jump
var gravity = 0.98;


function startMode(){
    //jump
  if(keys[32]){
    keys[32]=false;
    if(!player.jumping){
      player.ys = player.jumpStrength;
      player.jumping = true;
    }
  }
  //left & right
  if(keys[39]){
    if(player.x  + player.width > c.canvas.width){ player.xs = 0} else { player.xs += 0.5; }
    player.isWalkingTo = "right";
  }
  if(keys[37]){
    if(player.x < 0){ player.xs = 0} else { player.xs -= 0.5;}  
    player.isWalkingTo = "left";  
  }
 
  if(keys[83]){
    keys[83]=false;
    createBullet();  
  }
}

function speedUpMode(){
    //jump
  if(keys[32]){
    keys[32]=false;
    if(!player.jumping){
      player.ys = player.jumpStrength;
      player.jumping = true;
    }
  }
  //left & right
  if(keys[39]){
    if(player.x  + player.width > c.canvas.width){ player.xs = 0} else { player.xs += 1.5; }
    player.isWalkingTo = "right";
  }
  if(keys[37]){
    if(player.x < 0){ player.xs = 0} else { player.xs -= 1.5;}  
    player.isWalkingTo = "left";  
  }
 
  if(keys[83]){
    keys[83]=false;
    createBullet();  
  }
}









function motion(){
    bgimg();
    player.draw();
    drawPlatforms();
    drawBullet();
  
  //jump
  if(keys[32]){
    keys[32]=false;
    if(!player.jumping){
      player.ys = player.jumpStrength;
      player.jumping = true;
    }
  }
  //left & right
  if(keys[39]){
    if(player.x  + player.width > c.canvas.width){ player.xs = 0} else { player.xs += 0.5; }
    player.isWalkingTo = "right";
  }
  if(keys[37]){
    if(player.x < 0){ player.xs = 0} else { player.xs -= 0.5;}  
    player.isWalkingTo = "left";  
  }
 
  if(keys[83]){
    keys[83]=false;
    createBullet();  
  }







  //jumping
  player.y += player.ys;
  player.ys += gravity;

  //lateral movement
  player.x += player.xs;
  player.xs *= friction;

  
  //collition
  player.grounded = false;

  platforms.forEach(platform=>{
    var direction = collisionCheck(player, platform);
    if(direction == "left" || direction == "right"){
      player.xs = 0;
    }else if(direction == "bottom"){
      player.jumping = false;
      player.grounded = true;
    }     
    // else if(direction == "top"){
    //   player.velY += 1;
    // }
  });
  
  if(player.grounded){
    player.ys = 0;
  }
  
} 















// 
function collitionCheck(play, plat){

    //player borders 
    var vectorX = (play.x + (play.width / 2)) - (plat.x + (plat.width / 2)); // centers player with platform x axis
    var vectorY = (play.y + (play.height / 2)) - (plat.y + (plat.height / 2));// centers player with platform y axis

    // get middle points of play & plat
    var halfWidths = (play.width / 2) + (plat.width / 2); 
    var halfHeights = (play.height / 2) + (plat.height / 2);
    
    var collitionDirection = null;
    
    if(Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights){
        var offsetX = halfWidths - Math.abs(vectorX);
        var offsetY = halfHeights - Math.abs(vectorY);

    if(offsetX < offsetY){
        if (vectorX > 0){
            collitionDirection = "left";
            play.x += offsetX;   
        } else {
            collitionDirection = "right";
            play.x -= offsetX;
        }
        } else {
            if(vectorY > 0){
            collitionDirection = "top";
            play.y += offsetY;   
        } else {
            collitionDirection = "bottom";
            play.y -= offsetY;
            }
        }
    }
    return collitionDirection; 
}

function clearCanvas() { 
    c.clearRect(0,0, c.canvas.width, c.canvas.height);
 }       




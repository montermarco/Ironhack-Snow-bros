/* -----Level setup-----*/ 

//Creating levels 

// var levelOne = platforms.filter(platform => platform.level == "one");
// var levelTwo = platforms.filter(platform => platform.level == "two");
// var levelThree = platforms.filter(platform => platform.level == "three");
// var levelFour = platforms.filter(platform => platform.level == "four");

// Drawing thelevels -  The wanted level must be passed as the function argument   

// function drawLevel(array){
//   c.fillStyle = "red";
//   array.forEach(arr =>{
//     c.fillRect(arr.x, arr.y, 20, 20)
//   });
// }

function drawPlatforms(){
  //c.fillStyle = "black";
  platforms.forEach(platform=>{
    c.fillRect(platform.x, platform.y, platform.width, 0);
  });
}


/* -----Player motion-----*/ //this part was move to draft for testing

function playerMovement() { 
   
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
      keys[39]=false;
      if(player.x  + player.width > c.canvas.width){ player.xs = 0} else { player.xs += 1; }
      player.isWalkingTo = "right";
      player.action = 1
    }
    if(keys[37]){
      keys[37]=false;
      if(player.x < 0){ player.xs = 0} else { player.xs -= 1;}  
      player.isWalkingTo = "left";
      player.cation = 2  
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
      if(direction == "bottom"){
        player.jumping = false;
        player.grounded = true;
      }     
    });

    if(player.grounded){
      player.ys = 0;
    }
}

   

function collisionCheck(char, plat){

  // this is how the player would appear, if removing widht/2 the player appears in the middle of the lines
  
  var vectorX = (char.x + (char.width/2)) - (plat.x + (plat.width/2)); // middle pints x 
  var vectorY = (char.y + (char.height/2)) - (plat.y + (plat.height/2)); // midle pints y
  
  var halfWidths = (char.width/2) + (plat.width/2); 
  var halfHeights = (char.height/2) + (plat.height/2);
  
  var collisionDirection = null;
  
  //Offset  - the amount or distance the which player is out of line.
  //Vector - determining the position of one point in space relative to another by center

  if(Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights){
    var offsetX = halfWidths - Math.abs(vectorX); 
    var offsetY = halfHeights - Math.abs(vectorY);
    if(offsetX < offsetY){
      if(vectorX > 0){
        //collisionDirection = "right";
        char.x += offsetX;
      }else{
        //collisionDirection = "left";
        char.x -= offsetX;
      }
    }else{
      if(vectorY > 0){
        //collisionDirection = "top"
        //char.y += offsetY;
      }
        collisionDirection = "bottom";
        char.y -= offsetY;
      }
  }
  return collisionDirection;
  
}



/* -----Bullets-----*/ 

function createBullet(){
  let bullet = new Bullet();
  bullets.push(bullet);
}

function drawBullet() { 
  if(player.mode == "start mode" || player.mode == "red mode"){
  
          if(player.isWalkingTo == "right"){
                  bullets.forEach(bullet =>{
                  bullet.x += bullet.xs;
                  bullet.y += bullet.ys;
                  bullet.ys += bullet.gravity;
                  bullet.draw();  // bullet 1
              })   
              } else if (player.isWalkingTo == "left") {
  
                  bullets.forEach(bullet =>{
                  bullet.x -= bullet.xs;
                  bullet.y += bullet.ys;
                  bullet.ys += bullet.gravity;
                  bullet.draw();   // bullet 1
              })
          }
  } else if (player.mode == "blue mode"){
  
              if(player.isWalkingTo == "right"){
                  bullets.forEach(bullet =>{
                  bullet.x += bullet.xs;
                  bullet.y += bullet.ys;
                  bullet.ys += bullet.gravity;
                  bullet.draw(); // bullet 2
              })   
              } else if (player.isWalkingTo == "left") {
  
                  bullets.forEach(bullet =>{
                  bullet.x -= bullet.xs;
                  bullet.y += bullet.ys;
                  bullet.ys += bullet.gravity;
                  bullet.draw();// bullet 2
              })
              }
  } else if(player.mode == "green mode"){ 
              if(player.isWalkingTo == "right"){
  
                  bullets.forEach(bullet =>{
                  bullet.x += bullet.xs;
                  bullet.y += bullet.ys;
                  bullet.ys += bullet.gravity;
                  bullet.draw(); // bullet 2 range "large"
              })   
              } else if (player.isWalkingTo == "left") {
  
                  bullets.forEach(bullet =>{
                  bullet.xs = bullet.xs * 2,
                  bullet.ys = bullet.ys * 2,
                  bullet.x -= bullet.xs;
                  bullet.y += bullet.ys;
                  bullet.ys += bullet.gravity;
                  bullet.draw();// bullet 2 range // large
              })
          }
      }
  }
  


/* -----Enemies-----*/ 


function createEnemie(){
  let enemie = new Enemie();
  enemies.push(enemie);
}


function drawEnemie(){
  enemies.forEach(enemie=>{
  enemie.draw();
});
}

function clearCanvas(){
	c.clearRect(0, 0, 900, 600);
}

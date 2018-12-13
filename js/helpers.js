/* -----Level setup-----*/ 

//Creating levels 

var levelOne = platforms.filter(platform => platform.level == "one");
var levelTwo = platforms.filter(platform => platform.level == "two");
var levelThree = platforms.filter(platform => platform.level == "three");
var levelFour = platforms.filter(platform => platform.level == "four");

// Drawing thelevels -  The wanted level must be passed as the function argument   

function drawLevel(array){
  c.fillStyle = "red";
  array.forEach(arr =>{
    c.fillRect(arr.x, arr.y, arr.width, 3)
  });
}



/* -----Player motion-----*/ 

function playerMovement(){
  //jump
  if(keys[32]){
      //keys[32]=false;
      player.jump();   
    }
    ///////////////////////////////////////////////////////MOVE RIGHT
    if(keys[39]){
      //keys[39] = false;
        player.right();
        player.accion = 1;
    }
    /////////////////////////////////////////////////////MOVE LEFT
    if(keys[37]){
      //keys[37] = false;
       player.left();
       player.accion = 1;
         
    }
    /////////////////////////////////////////////////SHOOTING
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
  
};


function isTouching (char, plat){
  return (char.x < plat.x + plat.width) &&
          (char.x + char.width  > plat.x) &&
          (char.y < plat.y + plat.height) &&
          (char.y + char.height > plat.y)  
}   

function collitionCheck(){ 
  platforms.forEach(platform => {
      if(isTouching(player, platform)){
          player.y = platform.y - player.height;
          player.grounded = true;
          player.ys = 0;
      }
  });
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

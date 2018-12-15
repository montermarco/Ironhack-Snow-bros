/* -----Level setup-----*/

function drawPlatforms(){
  //c.fillStyle = "black";
  platforms.forEach(platform=>{
    c.fillRect(platform.x, platform.y, platform.width, 0);
  });
}

function clearCanvas(){
  c.clearRect(0, 0, 900, 600);
}
//////////////////////////////////////////////////* -----Player motion-----*/

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
      if(player.mode != "start mode"){player.xs *= 2}
    }
    if(keys[37]){
      keys[37]=false;
      if(player.x < 0){ player.xs = 0} else { player.xs -= 1;}
      player.isWalkingTo = "left";
      player.cation = 2
      if(player.mode != "start mode"){player.xs *= 2}
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

  var vectorX = (char.x + (char.width/2)) - (plat.x + (plat.width/2)); // player center x with platform center x borders
  var vectorY = (char.y + (char.height/2)) - (plat.y + (plat.height/2)); // player center y with platform center y borders

  var halfWidths = (char.width/2) + (plat.width/2); // middle center
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

////////////////////////////////////////////////////////* -----Bullets-----*/

function createBullet(){
  let bullet = new Bullet();
  bullets.push(bullet);
}

function drawBullet() {
  //bullets.forEach( bullet =>{
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
                  bullet.x += bullet.xs * 1.5;
                  bullet.y += bullet.ys * 1;
                  bullet.ys += bullet.gravity;
                  bullet.draw(); // bullet 2 range "large"
              })
              } else if (player.isWalkingTo == "left") {

                  bullets.forEach(bullet =>{
                  bullet.x -= bullet.xs * 1.5;
                  bullet.y += bullet.ys * 1;
                  bullet.ys += bullet.gravity;
                  bullet.draw();// bullet 2 range // large
              })
          }
      }
  //});
}


////////////////////////////////////////////////////////* -----Enemies-----*/

var landing = [];
for(i=0; i<platforms.length; i++){
    let landy = platforms[i].y
    landing.push(landy);
}
var ri = Math.floor(Math.random() * landing.length);
console.log(landing[ri]);



function createEnemie(){
  console.log("Dentro de creacion del mostro")
    if(!(frames % 100 === 0)) return
     for(i=0;i<12; i++){

       let enemie = new Enemie(i, platforms[i]);
       enemie.wizzardmaker();
       enemies.push(enemie)
    }
}


function drawEnemies() {
    enemies.forEach(enemie=>{
    if(enemie.grounded){
        enemie.draw()
    }else
        enemie.drawInicial();
    });
}



////////////////////////////////////////////////////////* -----Collitions-----*/


this.isTouching = function (obj1, obj2) {
  return obj1.x < obj2.x + obj2.width  &&
         obj1.x + obj1.width > obj2.x  &&
         obj1.y < obj2.y + obj2.height &&
         obj1.y + obj1.height > obj2.y
}

function wizzardKiller(){
 bullets.forEach(function (bullet, bullIndex) { 
   enemies.forEach(function (enemie, enemIndex) { 
     if(isTouching(bullet, enemie)){
       enemie.health -=1
       if(enemie.health < 0){enemies.splice(enemIndex, 1);}
       bullets.splice(bullIndex, 1);
       score ++;
       console.log(score);
      }
    });
  }); 
};


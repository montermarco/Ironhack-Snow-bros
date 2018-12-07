var canvas = document.getElementById('game');
var c = canvas.getContext('2d');
var interval; // 1000/60



//////////////////////////////////////////////////////////////////PLAYER

var player = {
	x: 250,
	y: 550, //make sure to appears on the floor
	width: 30,
	height: 30,
	speed: 3,
	xs: 0,
	ys: 0,
  color: "#00cc99",
  
  //jump
  jumping:false,
  jumpStrength:-15,

  //collition
  grounded: false,

  draw: function(){
		c.fillStyle = this.color;
		c.fillRect(this.x, this.y, this.width, this.height);
	}
}

///////////////////////////////////////////////////////////////PLATFORMS

var platforms = [];

 platforms.push({
    x:115,
    y:190,
    width:115,
    height: 1 
});
 // line 1.2 | 
 platforms.push({
    x:230,
    y:145,
    height: 45,
    width: 1 
});
 // line 1.3 ___
 platforms.push({
    x:230,
    y:145,
    width:440,
    height: 1 
});
 // line 1.4 |
 platforms.push({
    x:670,
    y:145,
    height:45,
    width: 1 
});
 // line 1.5 ___
 platforms.push({
    x:675,
    y:190,
    width:110,
    height: 1
});
// line 2
platforms.push({
    x:0,
    y:285,
    width:375,
    height: 1 
});
 // line 3
 platforms.push({
    x:505,
    y:285,
    width:395,
    height: 1 
});
 // line 4
 platforms.push({
    x:165,
    y:378,
    width:565,
    height: 1 
});
 // line 5
 platforms.push({
    x:0,
    y:470,
    width:226,
    height: 1 
});
 // line 6
 platforms.push({
    x:335,
    y:470,
    width:227,
    height: 1 
});
 // line 7
 platforms.push({
    x:672,
    y:470,
    width:228,
    height: 1 
});
 // line 8 floor
 platforms.push({
    x:0,
    y:565,
    width:900,
    height: 1
});

//platforms
function drawPlatforms(){
  //c.fillStyle = "black";
  platforms.forEach(platform=>{
    c.fillRect(platform.x, platform.y, platform.width, 0);
  });
}

//////////////////////////////////////////////LISTENERS

document.body.addEventListener("keydown", function(event){
  keys[event.keyCode] = true;
});

document.body.addEventListener("keyup", function(event){
	keys[event.keyCode] = false;
});


///////////////////////////////////////////// GAME ENGINE

window.onload = function(){
    function update() { 
        clearCanvas();
        motion();
     }
    update();

     function startGame() { 
     interval = setInterval(update,1000/60)
    }
    startGame();
}

//////////////////////////////////////////// THE GAME!


var keys = [];

//for moving
var friction = 0.8;
//jump
var gravity = 0.98;


function motion(){
    bgimg();
    player.draw();
    drawPlatforms();
  
  
  //jump
  if(keys[38]){
    if(!player.jumping){
      player.ys = player.jumpStrength;
      player.jumping = true;
    }
  }
  //left & right
  if(keys[39]){
    if(player.x  + player.width > c.canvas.width){ player.xs = 0} else { player.xs += 1; }
  }
  if(keys[37]){
    if(player.x < 0){ player.xs = 0} else { player.xs -= 1;}    
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

function collisionCheck(char, plat){

  // this is how the player would appear, if removing widht/2 the player appears in the middle of the lines
  
  var vectorX = (char.x + (char.width/2)) - (plat.x + (plat.width/2));
  var vectorY = (char.y + (char.height/2)) - (plat.y + (plat.height/2));
  
  var halfWidths = (char.width/2) + (plat.width/2);
  var halfHeights = (char.height/2) + (plat.height/2);
  
  var collisionDirection = null;
  
  //Offset  - the amount or distance the which player is out of line.
  //Vector - determining the position of one point in space relative to another.

  if(Math.abs(vectorX) < halfWidths && Math.abs(vectorY) < halfHeights){
    var offsetX = halfWidths - Math.abs(vectorX); 
    var offsetY = halfHeights - Math.abs(vectorY);
    if(offsetX < offsetY){
      if(vectorX > 0){
        collisionDirection = "left";
        char.x += offsetX;
      }else{
        collisionDirection = "right";
        char.x -= offsetX;
      }
    }else{
      if(vectorY > 0){
        collisionDirection = "top"
        //char.y += offsetY;
      }
        collisionDirection = "bottom";
        char.y -= offsetY;
      }
  }
  return collisionDirection;
  
}

function clearCanvas(){
	c.clearRect(0, 0, 900, 600);
}

img = new Image(),
img.src = 'https://i.ibb.co/tPR1r17/SB-Level-1.jpg',
 
bgimg = function() { 
    c.drawImage(img, 0, 0, c.canvas.width, c.canvas.height);
 } 


 
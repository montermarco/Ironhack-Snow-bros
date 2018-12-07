

////////////////////////////////////////////////* -----DRAW PLATFORMS FOR LEVEL 1-----*/ 

var platforms = [];

 // line 1.1 ___
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


///////////////////////////////////////////////// Draw Platforms in canvas 

function drawPlatforms(){
    c.stroke();
    platforms.forEach(platform=>{
      c.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
  };
  
///////////////////////////////////////////////// CHARACTER MOTION - logic & physics  

  var keys = []; // for controlling
  var friction = 0.8; // for lateral movement
  var gravity = 0.98; // for jumping (falling)


// this function is to control the player
function motion(){

    if(keys[38] && !Player.jumping){
        Player.ys = -Player.jumpingStrenght * 2;
        Player.jumping = true;
    }
    
    if(keys[39] && Player.xs < Player.vel){
        Player.xs ++;
    }
    
    if(keys[37] && Player.xs > -Player.vel){
        Player.xs --;
    }
    
        // jumping (will fall smoothly)
        Player.y += Player.ys;
        Player.ys += gravity;
    
        // friction (will slow gradually)
        Player.x += Player.xs;
        Player.xs *= friction;
    
        // collitioning the platforms
        platforms.forEach(platform =>{
            var direction = collitionCheck(Player, platform);
            if(direction == "left" || direction == "right"){
                Player.xs = 0;
            } else if( direction == "bottom"){
                Player.jumping = false;
                Player.grounded = true;
            } else if ( direction == "top"){
                Player.ys *= -1;
            }
        });
            if (Player.grounded){
                Player.ys = 0
            };  
        
};


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




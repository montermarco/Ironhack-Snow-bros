/* -----GAMEBOARD CLASS-----*/ 

function Boardgame(a){
    this.y = 0
    this.x = 0
    this.width = c.canvas.width
    this.height = c.canvas.height
    this.level= a,
    this.bkgd = new Image()
    
    this.img.onload = function(){
      this.draw()
    }.bind(this)
    this.draw = function(){
    
      c.drawImage(this.bkgd, 0, 0, this.width, this.height);
    }
}





/* -----CHARACTER CLASS  PARENT-----*/ 


function Player() { 
    this.x = 250;
    this.y = 550;
    this.width = 50;
    this.height = 60;
    this.speed = 3;
    this.vx = 0; 
    this.vy = 0;
    
    this.grounded = false,
    this.jumping = false,
    this.jumpStrength = -15,
    this.gravity = 0.98;
    this.isWalking = true;
    this.isWalkingTo = "";
    this.friction = 0.8;
    this.mode = "start";
    
    
    this.img = new Image(),
    this.img.src = "./img/sprites/Player blue/w_right.png";

    this.draw = function(){
        c.drawImage(this.img, 0, 0, 66.75, 80, this.x, this.y, this.width, this.height);
      }

    this.img.onload = function(){}  
};


function Bullet(){
    this.active = true,
    this.x = player.x + 25,
    this.y = player.y + 0,
    this.xs = 10,
    this.ys = -10,
    this.gravity = 0.9,
    this.range = "";
    this.speed = "";
    this.shoot = "";
   
    this.draw = function(){
          c.fillStyle = "white";
          c.fillRect(this.x, this.y, 10, 10);
      }  
  }
  
  function createBullet(){
    let bullet = new Bullet();
    bullets.push(bullet);
  }
  
  function drawBullet(){
    if(player.isWalkingTo == "right"){
      bullets.forEach(bullet =>{
        bullet.x += bullet.xs;
        bullet.y += bullet.ys;
        bullet.ys += bullet.gravity;
        bullet.draw();
      })
    } else if (player.isWalkingTo == "left"){
      bullets.forEach(bullet =>{
        bullet.x -= bullet.xs;
        bullet.y += bullet.ys;
        bullet.ys += bullet.gravity;
        bullet.draw();
      })
    }
    }
  
  Bullet.prototype.sartMode = function(){
    if(player.isWalkingTo == "right"){
        bullets.forEach(bullet =>{
          bullet.x += bullet.xs;
          bullet.y += bullet.ys;
          bullet.ys += bullet.gravity;
          bullet.draw();
        })
      } else if (player.isWalkingTo == "left"){
        bullets.forEach(bullet =>{
          bullet.x -= bullet.xs;
          bullet.y += bullet.ys;
          bullet.ys += bullet.gravity;
          bullet.draw();
        })
      }
  }


 //////////////////////////////////////////////////////////////////



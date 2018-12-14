/* -----GAMEBOARD-----*/ 

function Boardgame(){
  this.y = 0
  this.x = 0
  this.width = c.canvas.width
  this.height = c.canvas.height
  this.bkgd = new Image()
  this.bkgd.src = 'https://i.ibb.co/tPR1r17/SB-Level-1.jpg'
  
  this.bkgd.onload = () => {
    this.draw()
  }
  this.draw = () => { 
    c.drawImage(this.bkgd, 0, 0, this.width, this.height);
  }
}

/* -----PLAYER-----*/

function Player(){
    this.x = 250
    this.y = 485 //make sure to appears on the floor
    this.spriteWidth = 325
    this.spriteheight = 80
    this.sprCols = 4
    this.sprRows = 1
    this.width = this.spriteWidth / this.sprCols
    this.height = this.spriteheight / this.sprRows
    this.xs = 0
    this.ys = 0
    this.curFrame = 0;
    //jump & collition
    this.jumping = false
    this.jumpStrength = -15
    
    this.grounded = false
    this.isWalkingTo = ""
    this.action; 
    this.mode = "start mode"
    
    this.img = new Image()
    this.img.src = "./img/Snow_bro/walk_and_run/snowbro_walk_right2.png"
   
    this.drawImage = function(){
      switch(this.isWalkingTo){
    case "right":
    
    this.img.src = "./img/Snow_bro/walk_and_run/snowbro_walk_right2.png"  
    if(keys[39]){
      this.curFrame++;
      }if(this.curFrame == this.sprCols){
        this.curFrame = 1
      }  
    console.log(this.y, this.x, this.width, this.height)
      break;

    case "left":
      this.img.src = "./img/Snow_bro/walk_and_run/snowbro_walk_left2.png"
      if(keys[37]){
      this.curFrame++;
      } if(this.curFrame == this.sprCols){
        this.curFrame = 1
      }
      break;
      } 
        c.drawImage(this.img, (this.spriteWidth/5) * this.curFrame, 0, 65, 80, this.x, this.y, this.width, this.height);
    }

     this.isTouching = function (enemie) {
     return (this.x < enemie.x + enemie.width)  &&
            (this.x + this.width > enemie.x)  &&
            (this.y < enemie.y + enemie.height) &&
            (this.y + this.height > enemie.y)
   }
  
}

/* -----BULLETS-----*/

function Bullet(){
  this.x = player.x + (player.width / 3)
  this.y = player.y + (player.height / 3)
  this.xs = 7
  this.ys = -7  
  this.gravity = 0.9 
  this.bullet = ""
  this.range = "short"
  this.spriteWidth = 82
  this.spriteheight = 42
  this.sprCols = 2
  this.sprRows = 1
  this.width = this.spriteWidth / this.sprCols
  this.height = this.spriteheight / this.sprRows
  this.curFrame = 0;


  // this.draw = function(){
  //       c.fillStyle = "purple";
  //       c.fillRect(this.x, this.y, 12, 12);
  // }  

   this.isTouching = function (enemie) {
     return (this.x < enemie.x + enemie.width)  &&
            (this.x + this.width > enemie.x)  &&
            (this.y < enemie.y + enemie.height) &&
            (this.y + this.height > enemie.y)
   }
  this.img = new Image() // default bullet right short b1
  this.img.src = "./img/Snow_bro/bullets/bulletone_right2.png"
  
  this.draw = function(){
    
    switch(player.isWalkingTo){
      case "right":
        this.img.src = "./img/Snow_bro/bullets/bulletone_right2.png";
        this.curFrame++;
        if(this.curFrame > this.sprCols){
           this.curFrame = 0;
        }
      break;
      case "left":
       this.img.src = "./img/Snow_bro/bullets/bulletone_left2.png";
       this.curFrame++;
      if(this.curFrame > this.sprCols){
         this.curFrame = 0;
        }  
      break;
    }    
   c.drawImage(this.img, 0+(this.spriteWidth/2*this.curFrame), 0, 42, 42, this.x, this.y, this.width, this.height);       
  }  
}


/* -----ENEMIES-----*/ 

function Enemie(number, yFinal){
  //this.type = type,
  this.x = null,
  this.y = null,
  this.yFinal = yFinal,
  this.number = number,
  this.xs = 5,
  this.ys = 5,
  this.width = 20,
  this.height = 20,
  this.gravity = 0.9,
  this.createMonster = function(){
    console.log(this.number)
    this.x = Math.random() > .5? 0:800;
    this.y = 0

  }
  // this.position = function(){
  //   console.log(this.number)
  //   switch(this.number){
  //     case 1:
  //       this.x = 25;
  //       this.y = 200;
  //   }
  // }
  this.drawInicial = function(){
    if(this.y == this.yFinal) return;
    this.y++;
    c.fillStyle = "red";
    c.fillRect(this.x, this.y, 30, 30);
    }  

  this.draw = function(){
    this.x++;
    c.fillStyle = "red";
    c.fillRect(this.x, this.y, 30, 30);
    }  

   this.isTouching = function (bullet) {
     return (this.x < bullet.x + bullet.width)  &&
            (this.x + this.width > bullet.x)  &&
            (this.y < bullet.y + bullet.height) &&
            (this.y + this.height > bullet.y)
   }

}





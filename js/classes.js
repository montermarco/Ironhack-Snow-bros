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
    this.sprCols = 5
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
        this.curFrame = -1
      }  
    console.log(this.y, this.x, this.width, this.height)
      break;

    case "left":
      this.img.src = "./img/Snow_bro/walk_and_run/snowbro_walk_left2.png"
      if(keys[37]){
      this.curFrame++;
      } if(this.curFrame == this.sprCols){
        this.curFrame = -1
      }
      break;
      } 
        c.drawImage(this.img, 0+(this.spriteWidth/5*this.curFrame), 0, 65, 80, this.x, this.y, this.width, this.height);
    }
  
}

/* -----BULLETS-----*/

function Bullet(){
  this.x = player.x + 50
  this.y = player.y + 15
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


  this.draw = function(){
        c.fillStyle = "red";
        c.fillRect(this.x, this.y, 12, 12);
    }  


  // this.img = new Image() // default bullet right short b1
  // this.img.src = "./img/Snow_bro/bullets/bulletone_right2.png"
  
  // this.draw = function(){

  //     switch(this.isWalkingTo){
  //     case "right":
  //     this.img.src = "./img/Snow_bro/bullets/bulletone_right2.png"  
      
  //     if(keys[39]){
  //     this.curFrame++;}
  //     if(this.curFrame == this.sprCols){
  //       this.curFrame = -1
  //     }  
  //     break;

  //     case "left":
  //     this.img.src = "./img/Snow_bro/bullets/bulletone_left2.png"
  //     if(keys[37]){
  //     this.curFrame++;
  //     } if(this.curFrame == this.sprCols){
  //       this.curFrame = -1
  //     }
  //     break;
  //     } 
  //       c.drawImage(this.img, 0+(this.spriteWidth/5*this.curFrame), 0, 65, 80, this.x, this.y, this.width, this.height);
  // }  
}


/* -----ENEMIES-----*/ 

function Enemie(type){
  this.type = type,
  this.x = c.canvas.width / 3,
  this.y = c.canvas.height / 3,
  this.xs = 5,
  this.ys = 5,
  this.width = 20,
  this.height = 20,
  this.gravity = 0.9,

  this.draw = function(){
  c.fillStyle = "red";
  c.fillRect(this.x, this.y, 30, 30);
    }  
}





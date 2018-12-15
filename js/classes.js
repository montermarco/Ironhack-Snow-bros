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
    this.mode = "green mode"
    
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

////////////////////////////////////////////ENEMIE 1  right BLUE
function Enemie(number, plataforma){
    //this.type = type
    this.plataforma = plataforma;
    this.spriteWidth = 726
    this.spriteheight = 86
    this.sprCols = 7
    this.sprRows = 1
    this.width = this.spriteWidth / this.sprCols
    this.height = this.spriteheight / this.sprRows
    this.y = 0;
    this.x = (plataforma.x + plataforma.width >= c.canvas.width)?c.canvas.width-this.width:0+this.width/2;
    this.yFinal = plataforma.y-this.height;
    this.xFinal = this.x
    this.number = number
    this.xs = 1
    this.ys = 0
    this.health = 5
      
    this.gravity = 0.9
    this.grounded = false
    this.curFrame = 0;

    this.wizzardmaker = function () { 
        this.x
        this.plataforma
     }

    this.img = new Image()
    this.img.src = "./img/wizz_blue/b_wizz_jump_right2.png"

    this.drawInicial = function(){

        if(this.y == this.yFinal){
            this.grounded = true;
            return;
        }
        this.y++;
        if(this.y){
          this.ys ++;
        }
        c.drawImage(this.img, this.x, this.y, 62, 90);
    }

    this.draw = function(){
        this.img.src = "./img/wizz_blue/b_wizz_right_walkcopia.png";
        if(this.x < this.plataforma.x){
            this.xs = 1;
        }else if((this.x + this.width/2) > (this.plataforma.x + this.plataforma.width)){
            this.xs = -1;
        }
        this.x += this.xs;

        this.currFrame ++;

        c.drawImage(this.img, 0+(this.spriteWidth/7) *this.curFrame, 0, 103, 86, this.x, this.y, this.width, this.height);
    }
}


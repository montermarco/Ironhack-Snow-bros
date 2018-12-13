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
    this.xsrc;
    this.ysrc = 0
    this.curFrame = 0;
    //jump & collition
    this.jumping = false
    this.jumpStrength = -15
    this.grounded = false
    this.isWalkingTo = "right"
    this.action = 1
    this.mode = "start mode"
    this.img = new Image()
    //this.img.src = "./img/sprites/snow_wr.png",
    this.img.src = "./img/Snow_bro/walk_and_run/snowbro_walk_right2.png"
    this.img.onload = function () {
      this.drawImage()
    }.bind(this);

    // this.draw = function(){
    //     c.drawImage(this.img, 0, 0, 66.75, 80, this.x, this.y, this.width, this.height )
    // }

    this.drawImage = function(){
      
      
       
        c.drawImage(this.img, 0+(this.spriteWidth/5*this.curFrame), 0, 65, 80, this.x, this.y, this.width, this.height);
        
    }

      this.jump = () => {
        if(!this.jumping){
          this.ys = this.jumpStrength;
          this.y += this.ys;
          this.jumping = true;
        }
        this.isWalkingTo = "up"
      } 

      this.right = () => {
        this.isWalkingTo ="right"
        if(this.x + this.width > c.canvas.width){
          this.xs = 0;
        } else {
          player.xs += 1;
        }
      }

      this.left = () => {
        this.isWalkingTo = "left"
        if(this.x < 0){ 
          this.x = 0;
        } else {
          this.xs -= 1;
        }
      }

     

}

/* -----BULLETS-----*/

function Bullet(){
  this.x = player.x + 50,
  this.y = player.y + 15,
  this.xs = 7,
  this.ys = -7  ,
  this.gravity = 0.9 ,
  
  this.draw = function(){
        c.fillStyle = "white";
        c.fillRect(this.x, this.y, 10, 10);
    }  
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





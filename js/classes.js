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

////////////////////////////////////////////ENEMIE 1  right BLUE
function Enemie(){
  //this.type = type,
  this.x = (Math.random() * (c.canvas.width / 4)),
  this.y = 0,
  this.yFinal = 440//landing[ri]
  this.xFinal = this.yFinal
  this.number = 1,
  this.xs = 0,
  this.ys = 0,
  //this.width = 20,
  //this.height = 20,
  this.gravity = 0.9,
  this.grounded = false

  this.spriteWidth = 726
  this.spriteheight = 86
  this.sprCols = 7
  this.sprRows = 1
  this.width = this.spriteWidth / this.sprCols
  this.height = this.spriteheight / this.sprRows
  this.curFrame = 0;
  
  this.img = new Image() // lines added
  this.img.src = "./img/wizz_blue/b_wizz_jump_right2.png"
 
  this.drawInicial = function(){
    if(this.y == this.yFinal)return;
    this.y++;
    if(this.y){
      this.ys ++;
    };
    c.drawImage(this.img, this.x, this.y, 62, 90);
    }  

  this.draw = function(){
    this.img.src = "./img/wizz_blue/b_wizz_right_walkcopia.png"
    this.x = 130
    this.x = this.x -1
    this.currFrame ++;
    //if(this.curFrame > this.sprCols){this.curFrame = 0} 
    //if(this.finalX > 900){this.finalX = 0} else if(this.this.finalX < 0){this.finalX--}
    //c.fillStyle = "black";
    //c.fillRect(this.x, this.y, 30, 30);
    c.drawImage(this.img, 0+(this.spriteWidth/7*this.curFrame), 0, 103, 86, this.x, this.y, this.width, this.height);       
    }  



  
    
   this.isTouching = function (platform) {
    return (this.x < platform.x + platform.width)  &&
           (this.x + this.width > platform.x)  &&
           (this.y < platform.y + platform.height) &&
           (this.y + this.height > platform.y)
   }
    /* -----here starts function to copy-----*/ 

  
  
  // this.draw = function(){
    
  //   switch(player.isWalkingTo){
  //     case "right":
  //       this.img.src = "./img/Snow_bro/bullets/bulletone_right2.png";
  //       this.curFrame++;
  //       if(this.curFrame > this.sprCols){
  //          this.curFrame = 0;
  //       }
  //     break;
  //     case "left":
  //      this.img.src = "./img/Snow_bro/bullets/bulletone_left2.png";
  //      this.curFrame++;
  //     if(this.curFrame > this.sprCols){
  //        this.curFrame = 0;
  //       }  
  //     break;
  //   }    
  //  c.drawImage(this.img, 0+(this.spriteWidth/2*this.curFrame), 0, 42, 42, this.x, this.y, this.width, this.height);       
  // }
}


////////////////////////////////////////////ENEMIE 2 left RED
function EnemieTwo(){
  //this.type = type,
  this.x = Math.random() * c.canvas.width,
  this.y = 0,
  this.yFinal = 535//landing[ri]
  this.xFinal = this.yFinal
  this.number = 1,
  this.xs = 0,
  this.ys = 0,
  this.width = 20,
  this.height = 20,
  this.gravity = 0.9,
  this.grounded = false
  this.createMonster = function(){
    console.log(this.number)
    this.x = Math.random() * c.canvas.width;
    this.y = 0

  }
 
  this.img = new Image() // lines added
  this.img.src = "./img/wizz_red/r_wizz_jump_left3.png"
 
  this.drawInicial = function(){
    if(this.y == this.yFinal)return;
    this.y++;
    if(this.y){
      this.ys ++;
    };
    //c.fillStyle = "blue";
    //c.fillRect(this.x, this.y, 30, 30);
    c.drawImage(this.img, this.x, this.y);
    }  

  this.draw = function(){
    this.x = 820
    this.x = this.x -1 
    //if(this.finalX > 900){this.finalX = 0} else if(this.this.finalX < 0){this.finalX--}
    c.fillStyle = "black";
    c.fillRect(this.x, this.y, 30, 30);
    }  

   this.isTouching = function (platform) {
    return (this.x < platform.x + platform.width)  &&
           (this.x + this.width > platform.x)  &&
           (this.y < platform.y + platform.height) &&
           (this.y + this.height > platform.y)
   }

}


////////////////////////////////////////////ENEMIE 3 right BLUE 
function EnemieThree(){
  //this.type = type,
  this.x = Math.random() * c.canvas.width,
  this.y = 0,
  this.yFinal = 255//landing[ri]
  this.xFinal = this.yFinal
  this.number = 1,
  this.xs = 0,
  this.ys = 0,
  this.width = 20,
  this.height = 20,
  this.gravity = 0.9,
  this.grounded = false

  this.spriteWidth = 726
  this.spriteheight = 86
  this.sprCols = 7
  this.sprRows = 1
  this.width = this.spriteWidth / this.sprCols
  this.height = this.spriteheight / this.sprRows
  this.curFrame = 0;
 
  this.img = new Image() // lines added
  this.img.src = "./img/wizz_blue/b_wizz_jump_right2.png"
 
  this.drawInicial = function(){
    if(this.y == this.yFinal)return;
    this.y++;
    if(this.y){
      this.ys ++;
    };
    //c.fillStyle = "blue";
    //c.fillRect(this.x, this.y, 30, 30);
    c.drawImage(this.img, this.x, this.y);
    }    

    this.draw = function(){
      this.img.src = "./img/wizz_blue/b_wizz_right_walkcopia.png"
      this.x = 100
      this.x = this.x -1
      this.currFrame ++;
      //if(this.curFrame > this.sprCols){this.curFrame = 0} 
      //if(this.finalX > 900){this.finalX = 0} else if(this.this.finalX < 0){this.finalX--}
      //c.fillStyle = "black";
      //c.fillRect(this.x, this.y, 30, 30);
      c.drawImage(this.img, 0+(this.spriteWidth/7*this.curFrame), 0, 103, 86, this.x, this.y, this.width, this.height);       
      }  
  

   this.isTouching = function (platform) {
    return (this.x < platform.x + platform.width)  &&
           (this.x + this.width > platform.x)  &&
           (this.y < platform.y + platform.height) &&
           (this.y + this.height > platform.y)
   }

}


////////////////////////////////////////////ENEMIE 4 left RED
function EnemieFour(){
  //this.type = type,
  this.x = Math.random() * c.canvas.width,
  this.y = 0,
  this.yFinal = 348//landing[ri]
  this.xFinal = this.yFinal
  this.number = 1,
  this.xs = 0,
  this.ys = 0,
  this.width = 20,
  this.height = 20,
  this.gravity = 0.9,
  this.grounded = false
  this.createMonster = function(){
    console.log(this.number)
    this.x = Math.random() * c.canvas.width;
    this.y = 0

  }
 
  this.img = new Image() // lines added
  this.img.src = "./img/wizz_red/r_wizz_jump_left3.png"
 
  this.drawInicial = function(){
    if(this.y == this.yFinal)return;
    this.y++;
    if(this.y){
      this.ys ++;
    };
    //c.fillStyle = "blue";
    //c.fillRect(this.x, this.y, 30, 30);
    c.drawImage(this.img, this.x, this.y);
    } 

  this.draw = function(){
    this.x = 680
    this.x = this.x -1 
    //if(this.finalX > 900){this.finalX = 0} else if(this.this.finalX < 0){this.finalX--}
    c.fillStyle = "yellow";
    c.fillRect(this.x, this.y, 30, 30);
    }  

   this.isTouching = function (platform) {
    return (this.x < platform.x + platform.width)  &&
           (this.x + this.width > platform.x)  &&
           (this.y < platform.y + platform.height) &&
           (this.y + this.height > platform.y)
   }

}


////////////////////////////////////////////ENEMIE 5 right BLUE
function EnemieFive(){
  //this.type = type,
  this.x = Math.random() * c.canvas.width,
  this.y = 0,
  this.yFinal = 115//landing[ri]
  this.xFinal = this.yFinal
  this.number = 1,
  this.xs = 0,
  this.ys = 0,
  this.width = 20,
  this.height = 20,
  this.gravity = 0.9,
  this.grounded = false
  this.createMonster = function(){
    console.log(this.number)
    this.x = Math.random() * c.canvas.width;
    this.y = 0

  }
 
  this.img = new Image() // lines added
  this.img.src = "./img/wizz_blue/b_wizz_jump_right2.png"
 
  this.drawInicial = function(){
    if(this.y == this.yFinal)return;
    this.y++;
    if(this.y){
      this.ys ++;
    };
    //c.fillStyle = "blue";
    //c.fillRect(this.x, this.y, 30, 30);
    c.drawImage(this.img, this.x, this.y);
    }    

  this.draw = function(){
    this.x = 430
    this.x = this.x -1 
    //if(this.finalX > 900){this.finalX = 0} else if(this.this.finalX < 0){this.finalX--}
    c.fillStyle = "black";
    c.fillRect(this.x, this.y, 30, 30);
    }  

   this.isTouching = function (platform) {
    return (this.x < platform.x + platform.width)  &&
           (this.x + this.width > platform.x)  &&
           (this.y < platform.y + platform.height) &&
           (this.y + this.height > platform.y)
   }

}

////////////////////////////////////////////ENEMIE 6 left RED
function EnemieSix(){
  //this.type = type,
  this.x = Math.random() * c.canvas.width,
  this.y = 0,
  this.yFinal = 165//landing[ri]
  this.xFinal = this.yFinal
  this.number = 1,
  this.xs = 0,
  this.ys = 0,
  this.width = 20,
  this.height = 20,
  this.gravity = 0.9,
  this.grounded = false
  this.createMonster = function(){
    console.log(this.number)
    this.x = Math.random() * c.canvas.width;
    this.y = 0

  }
 
  this.img = new Image() // lines added
  this.img.src = "./img/wizz_red/r_wizz_jump_left3.png"
 
  this.drawInicial = function(){
    if(this.y == this.yFinal)return;
    this.y++;
    if(this.y){
      this.ys ++;
    };
    //c.fillStyle = "blue";
    //c.fillRect(this.x, this.y, 30, 30);
    c.drawImage(this.img, this.x, this.y);
    }  

  this.draw = function(){
    this.x = 700
    this.x = this.x -1 
    //if(this.finalX > 900){this.finalX = 0} else if(this.this.finalX < 0){this.finalX--}
    c.fillStyle = "black";
    c.fillRect(this.x, this.y, 30, 30);
    }  

   this.isTouching = function (platform) {
    return (this.x < platform.x + platform.width)  &&
           (this.x + this.width > platform.x)  &&
           (this.y < platform.y + platform.height) &&
           (this.y + this.height > platform.y)
   }

}

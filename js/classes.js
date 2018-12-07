/* -----GAMEBOARD CLASS-----*/ 

function Boardgame(){
    this.x = 0,
    this.y = 0,
    this.height = canvas.height,
    this.width = canvas.width,

    this.img = new Image(),
    this.img.src = 'https://i.ibb.co/tPR1r17/SB-Level-1.jpg',
 
     
    this.draw = function() { 
        c.drawImage(this.img, this.x,this.y, this.width, this.height);
     } 
}

/* -----CHARACTER CLASS  PARENT-----*/ 


function Player(x, y, w, h) { 
    this.x = x,
    this.y = y,
    this.width = w,
    this.height = h,
    // speed
    this.xs = 0, 
    this.ys = 0;
    this.vel = 5,
    // jump
    this.jumping = false,
    this.jumpStrength = 6,
    // collition
    this.grounded = false,
    
    // this.img = new Image(),
    // this.img.src = 'https://i.ibb.co/tPR1r17/SB-Level-1.jpg',     
    // this.draw = function() { 
    //     c.drawImage(this.img, this.x,this.y, this.width, this.height);
    //  } 

    // drawing the player ------- using a square before setting sprites
    this.draw = function(){
    c.fillStyle = this.color
    c.fillRect(this.x, this.y, this.height, this.width)
    }

};

///////////////////////////// PLAYER 1 - INSTANCE OF CHARACTER ////////////////////////////////////

// function Player1() {
//     Character.call(this, x, y, w, h);

//     this.draw = function(){
//         c.fillStyle = this.color
//         c.fillRect(400, 300, 40, 40)
//         }
// };


// Player1.prototype = Object.create(Character.prototype);
// Player1.prototype.constructor = Player1;

console.log(Player.xs)
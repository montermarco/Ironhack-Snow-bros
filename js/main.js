
///////////////////////////////////////////// GAME ENGINE

window.onload = function(){
    function update() { 
        clearCanvas(); // update first call
        boardgame.draw() // 2nd call - goes directly to Boardgame class/constructor
        drawPlatforms(); // 3rd - from helpers, drawLevel
        player.drawImage(); // goes to this.action 
        drawBullet(); // goes to drawBullet which contains the bullet direction properties;
        playerMovement()
     }
    update(); // this is the first function it runs

     function startGame() { 
     interval = setInterval(update,1000/60)
    }
    startGame();
}


// window.onload = function(){
//     player.draw();
// }


//modulos %==2 para mover izq o der


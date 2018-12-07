window.onload = function(){
    function update () {
        frames ++;
        motion(); // moves the player
        clearCanvas();// 
        boardgame.draw(); // draws the level 
        playerOne.draw(); // draws the player
        drawPlatforms();  // draws the platforms  
                        
        
    }   
    update();


    function startGame(){
        interval = setInterval(update, 1000/60)
    }


    function gameOver(){
        clearInterval(interval)
        interval = 0;
        c.font = "50px Arial";
        c.fillText("GAME OVER", 450, 300);
    }
    startGame();
}
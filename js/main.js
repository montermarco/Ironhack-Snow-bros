
///////////////////////////////////////////// GAME ENGINE


window.onload = function(){
    intro_screen(); 
}

function start(){

    function update() { 
        clearCanvas(); // update first call
        boardgame.draw() // 2nd call - goes directly to Boardgame class/constructor
        drawPlatforms(); // 3rd - from helpers, drawLevel
        player.drawImage(); // goes to this.action 
        drawBullet(); // goes to drawBullet which contains the bullet direction properties;
        playerMovement()
        drawEnemies();
        wizzardKiller()
        
    } 
    update(); // this is the first function it runs

     function startGame() { 
        createEnemie();
        interval = setInterval(update,1000/60)
    }
   
    startGame();
}


function getScore(){
    var totalkills = wizzKilled;
$("strong").text(totalkills);
};


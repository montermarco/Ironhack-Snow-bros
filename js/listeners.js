//////////////////////////////////////////////LISTENERS

// document.body.addEventListener("keydown", (e) => {
//     switch(e.keyCode){

//         case keys[32] || keys[38]:
//         player.isWalkingTo = "up";
//         player.jump();
//         break;
//         case [39]:
//         player.isWalkingTo = "right";
//         player.right();
//         break;
//         case [37]:
//         player.isWalkingTo = "left";
//         player.left();
//         break;
//         case [83]:
//         createBullet();
//         break;
//     } 
//   });
  
document.body.addEventListener("keydown", function(event){
    console.log(event.keyCode + " key down");
    keys[event.keyCode] = true;
  });
  
  document.body.addEventListener("keyup", function(event){
      keys[event.keyCode] = false;
      console.log(event.keyCode + " key up");
  });
  
  



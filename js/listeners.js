// canvas.addEventListener('keydown', function(e){
//     switch(e.keyCode){
//         case 38:
//         player.jump()
//         break;
//         case 37:
//         player.left()
//         case 39:
//         player.right()
//         break;
//         case 32:
//         player.attack()
//         break;
//     }
// });


document.body.addEventListener("keydown", function(e){
    keys[event.keyCode] = true;
});

document.body.addEventListener("keyup", function(e){
    keys[event.keyCode] = false;
});


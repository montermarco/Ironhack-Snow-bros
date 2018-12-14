
/* -----CANVAS-----*/ 

var canvas = document.getElementById('game');
var c = canvas.getContext('2d');


/* -----GAME ENGINE-----*/ 

var frames = 0;
var interval = 0;

/* ----- GAME CHARACERS-----*/ 

var boardgame = new Boardgame;
var player = new Player;
var gravity = 0.98;
var friction = 0.8

var bullets = [];
var keys = [];
var enemies = [];
var wizzards = [];
/* -----PLATFORMS LEVEL ONE-----*/ 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////// -------------------------------PLATFORMS FOR ALL LEVELS-------------------------////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var platforms = [ ];

///////////////////////////////////* -----PLATFORMS LEVEL ONE-----*/ 


// line 1
platforms.push({
    level: "one",
    plat: 1,
    x: 115,
    y: 190,
    width: 115,
    height: 1
  })
  // line 2  
   platforms.push({
      level: "one",
      plat: 2,
      x:230,
      y:145,
      height: 45,
      width: 1 
  });
   // line 3
   platforms.push({
      level: "one",
      plat: 3,
      x:230,
      y:145,
      width:440,
      height: 1 
  });
   // line 4
   platforms.push({
      level: "one",
      plat: 4,
      x:670,
      y:145,
      height:45,
      width: 1 
  });
   // line 5
   platforms.push({
      level: "one",
      plat: 5,
      x:675,
      y:190,
      width:110,
      height: 1
  });
  // line 6
  platforms.push({
      level: "one",
      plat: 6,
      x:0,
      y:285,
      width:375,
      height: 1 
  });
   // line 7
   platforms.push({
      level: "one",
      plat: 7,
      x:505,
      y:285,
      width:395,
      height: 1 
  });
   // line 8
   platforms.push({
      level: "one",
      plat: 8,
      x:165,
      y:378,
      width:565,
      height: 1 
  });
   // line 9 
   platforms.push({
      level: "one",
      plat: 9,
      x:0,
      y:470,
      width:226,
      height: 1 
  });
   // line 10
   platforms.push({
      level: "one",
      plat: 10,
      x:335,
      y:470,
      width:227,
      height: 1 
  });
   // line 11
   platforms.push({
      level: "one",
      plat: 11,
      x:672,
      y:470,
      width:228,
      height: 1 
  });
   // line 12 floor
   platforms.push({
      level: "one",
      plat: 12,
      x:0,
      y:565,
      width:900,
      height: 1
  });
  
  
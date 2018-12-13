
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
console.log(keys);
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
    height: 3
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
  
  
  ///////////////////////////////////* -----PLATFORMS LEVEL TWO -----*/ 
  
  // line 1
  platforms.push({
      level: "two",
      plat: 1,
      x:172,
      y:95,
      width:388,
      height: 1 
  });
   // line 2 
   platforms.push({
      level: "two",
      plat: 2,
      x:673,
      y:95,
      height: 1,
      width: 114 
  });
   // line 3
   platforms.push({
      level: "two",
      plat: 3,
      x:673,
      y:95,
      width:1,
      height: 87 
  });
   // line 4 
   platforms.push({
      level: "two",
      plat: 4,
      x:342,
      y:188,
      height:1,
      width: 331 
  });
   // line 5 ___
   platforms.push({
      level: "two",
      plat: 5,
      x:112,
      y:188,
      width:114,
      height: 1
  });
  // line 6
  platforms.push({
      level: "two",
      plat: 6,
      x:226,
      y:188,
      width:1,
      height: 87
  });
   // line 7
   platforms.push({
      level: "two",
      plat: 7,
      x:226,
      y:280,
      width:334,
      height: 1 
  });
   // line 8
   platforms.push({
      level: "two",
      plat: 8,
      x:673,
      y:280,
      width:114,
      height: 1 
  });
   // line 9
   platforms.push({
      level: "two",
      plat: 9,
      x:673,
      y:290,
      width:1,
      height: 87 
  });
   // line 10
   platforms.push({
      level: "two",
      plat: 10,
      x:342,
      y:373,
      width:331,
      height: 1 
  });
   // line 11
   platforms.push({
      level: "two",
      plat: 11,
      x:112,
      y:373,
      width:114,
      height: 1 
  });
   // line 12
   platforms.push({
      level: "two",
      plat: 12,
      x:226,
      y:373,
      width:1,
      height: 87
  });
   // line 13
   platforms.push({
      level: "two",
      plat: 13,
      x:226,
      y:465,
      width:500,
      height: 1
  });
   // line 14 Floor
   platforms.push({
      level: "two",
      plat: 14,
      x:0,
      y:560,
      width:900,
      height: 1
  });
  
 ////////////////////////////////// /* -----PLATFORMS LEVEL THREE -----*/ 
  
  // line 1
  platforms.push({
      level: "three",
      plat: 1,
      x:170,
      y:95,
      width:555,
      height: 1 
  });
   // line 2 
   platforms.push({
      level: "three",
      plat: 2,
      x:0,
      y:190,
      width: 113,
      height: 1 
  });
   // line 3
   platforms.push({
      level: "three",
      plat: 3,
      x:222,
      y:190,
      width:452,
      height: 1 
  });
   // line 4 
   platforms.push({
      level: "three",
      plat: 4,
      x:789,
      y:190,
      width:111,
      height:1
       
  });
   // line 5 ___
   platforms.push({
      level: "three",
      plat: 5,
      x:0,
      y:285,
      width:60,
      height: 1
  });
  // line 6
  platforms.push({
      level: "three",
      plat: 6,
      x:170,
      y:285,
      width:114,
      height: 1
  });
   // line 7
   platforms.push({
      level: "three",
      plat: 7,
      x:394,
      y:285,
      width:112,
      height: 1 
  });
   // line 8
   platforms.push({
      level: "three",
      plat: 8,
      x:619,
      y:285,
      width:111,
      height: 1 
  });
   // line 9
   platforms.push({
      level: "three",
      plat: 9,
      x:844,
      y:285,
      width:56,
      height: 1 
  });
   // line 10
   platforms.push({
      level: "three",
      plat: 10,
      x:0,
      y:375,
      width:60,
      height: 1 
  });
   // line 11
   platforms.push({
      level: "three",
      plat: 11,
      x:394,
      y:375,
      width:112,
      height: 1 
  });
   // line 12
   platforms.push({
      level: "three",
      plat: 12,
      x:844,
      y:375,
      width:56,
      height: 1
  });
   // line 13
   platforms.push({
      level: "three",
      plat: 13,
      x:0,
      y:470,
      width:170,
      height: 1
  });
   // line 14
   platforms.push({
      level: "three",
      plat: 14,
      x:284,
      y:470,
      width:335,
      height: 1
  });
   // line 15
   platforms.push({
      level: "three",
      plat: 15,
      x:730,
      y:470,
      width:170,
      height: 1
  });
   // line 16
   platforms.push({
      level: "three",
      plat: 16,
      x:0,
      y:565,
      width:900,
      height: 1
  });
  
 ///////////////////////////////////* -----PLATFORMS LEVEL FOUR -----*/ 
  
  // line 1
  platforms.push({
      level: "four",
      plat: 1,
      x:0,
      y:190,
      width:390,
      height: 1 
  });
   // line 2 
   platforms.push({
      level: "four",
      plat: 2, 
      x:170,
      y:285,
      width:330,
      height: 1 
  });
   // line 3
   platforms.push({
      level: "four",
      plat: 3,
      x:0,
      y:375,
      width:390,
      height: 1 
  });
   // line 4 
   platforms.push({
      level: "four",
      plat: 4,
      x:170,
      y:467,
      width:330,
      height:1
       
  });
   // line 5 
   platforms.push({
      level: "four",
      plat: 5,
      x:620,
      y:330,
      width:280,
      height: 1
  });
  // line 6 
  platforms.push({
      level: "four",
      plat: 6,
      x:0,
      y:560,
      width:900,
      height: 1
  });
  






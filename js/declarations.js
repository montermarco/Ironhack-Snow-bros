/* -----CANVAS-----*/ 

var canvas = document.getElementById('gameboard');
var c = canvas.getContext('2d');


/* -----GAME ENGINE-----*/ 

var frames = 0;
var interval = 0;


/* ----- GAME CHARACERS-----*/ 

var boardgame = new Boardgame();
var playerOne = new Player(400,300,60,40);


/* -----PLATFORMS LEVEL ONE-----*/ 


var platforms = [];

 platforms.push({
    x:115,
    y:190,
    width:115,
    height: 1 
});
 // line 1.2 | 
 platforms.push({
    x:230,
    y:145,
    height: 45,
    width: 1 
});
 // line 1.3 ___
 platforms.push({
    x:230,
    y:145,
    width:440,
    height: 1 
});
 // line 1.4 |
 platforms.push({
    x:670,
    y:145,
    height:45,
    width: 1 
});
 // line 1.5 ___
 platforms.push({
    x:675,
    y:190,
    width:110,
    height: 1
});
// line 2
platforms.push({
    x:0,
    y:285,
    width:375,
    height: 1 
});
 // line 3
 platforms.push({
    x:505,
    y:285,
    width:395,
    height: 1 
});
 // line 4
 platforms.push({
    x:165,
    y:378,
    width:565,
    height: 1 
});
 // line 5
 platforms.push({
    x:0,
    y:470,
    width:226,
    height: 1 
});
 // line 6
 platforms.push({
    x:335,
    y:470,
    width:227,
    height: 1 
});
 // line 7
 platforms.push({
    x:672,
    y:470,
    width:228,
    height: 1 
});
 // line 8 floor
 platforms.push({
    x:0,
    y:565,
    width:900,
    height: 1
});


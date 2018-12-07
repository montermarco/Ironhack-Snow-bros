/* -----CANVAS-----*/ 

var canvas = document.getElementById('gameboard');
var c = canvas.getContext('2d');


/* -----GAME ENGINE-----*/ 

var frames = 0;
var interval = 0;


/* ----- GAME CHARACERS-----*/ 

var boardgame = new Boardgame();
var playerOne = new Player(400,300,60,40);

var userNickName = localStorage.getItem('nickName');
var nickName = document.getElementById("nickName")

if(localStorage.getItem('Pansho') != null){
    var allScores = localStorage.getItem('Pansho')
    for(i=0; i <= allScores.length; i++){
        $("#score").append(<p>$allScores[i]</p>)
    }
} else {
    var allScores = [];
}

window.onload = function (){ 
    if(localStorage.getItem('nickName') != null){
        nickName.innerHTML = userNickName;
    } 
 }

function registrarUsuario() { 
    let userName = document.getElementById("userName").value;
    if(userName != ""){
        localStorage.setItem("nickName" , userName);
        nickName.innerHTML = userName;
    } else {
        alert("Ingresa un nombre valido")
    }
 };



  function addScore() {
      let score = document.getElementById('score').value;
      allScores.push(score);
      document.getElementById('scoreInput').value = "";
      localStorage.setItem("Pansho", JSON.stringify(allScores));
  }


 function clearLs() { 
    nickName.innerHTML = '';
    localStorage.clear();
 }

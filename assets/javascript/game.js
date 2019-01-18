

var playerScore = 0;
var wins = 0;
var lose = 0;

var winNum = Math.floor(Math.random() * 101 + 19)
  $("#wingem").text(winNum);
  
//random numbers
var gem1 = Math.floor(Math.random() * 11+1);
var gem2 = Math.floor(Math.random() * 11+1);
var gem3 = Math.floor(Math.random() * 11+1);
var gem4 = Math.floor(Math.random() * 11+1);

  $("#wins").text(wins);
$("#losses").text(lose);

$("#gem1").on("click", function() {
    playerScore=playerScore + gem1;
      console.log("New playerScore=" + playerScore); //remove
  $("#playerScore").text(playerScore)
  
  if (playerScore === winNum) { 
      win();
    } else if (playerScore > winNum) { 
      loserlose(); 
    }
  });

$("#gem2").on("click", function() {
    playerScore=playerScore + gem2;
          console.log("New playerScore=" + playerScore); //remove
      $("#playerScore").text(playerScore)
    
  if (playerScore === winNum) {
      win();
    } else if (playerScore > winNum) {
      loserlose();
    }
  });

$("#gem3").on("click", function() {
    playerScore=playerScore + gem3;
      console.log("New playerScore=" + playerScore); //remove
  $("#playerScore").text(playerScore);
  
  if(playerScore === winNum) {
      win();
    } else if (playerScore > winNum) {
      loserlose();
    }
  });
  
$("#gem4").on("click", function() {
    playerScore=playerScore + gem4;
      console.log("New playerScore=" + playerScore);  //remove
  $("#playerScore").text(playerScore);
    
  if (playerScore === winNum) {
    win();
  } else if (playerScore > winNum) { 
    loserlose();
  }
});
  
function win(){
    wins++; 
    $('#wins').text(wins);
    reset();
    }
    
function loserlose(){
    lose++;
    $('#losses').text(lose);
    reset();
  }
  
  function reset() { //doesnt reset
    var winNum = Math.floor(Math.random() * 101 + 19);
    var gem1 = Math.floor(Math.random() * 11+1);
    var gem2 = Math.floor(Math.random() * 11+1);
    var gem3 = Math.floor(Math.random() * 11+1);
    var gem4 = Math.floor(Math.random() * 11+1);
    var playerScore = 0;
  };


  $("#click-me").on("click", function() {
    reset();
  });
  
  
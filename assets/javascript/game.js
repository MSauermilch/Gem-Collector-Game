     //Game numbers
 var wins = 0;
 var lose = 0;

  function reset(){

    var playerScore = 0;
    console.log("begining Score: " + playerScore)

    var gem = [];

    var winNum = Math.floor(Math.random() * 101 + 19);   //Random Number to match     
        $("#wingem").text(winNum);
          console.log("winning number: " + winNum);

      for (i=0; i<4; i++){
        gem[i] = Math.floor(Math.random() * 11+1);
        
        };
          console.log("Gem: " + gem);
      
      $("#wins").text(wins);
      $("#losses").text(lose);

    function checkWin(){
      if (playerScore === winNum) {
        alert("winner!")
        wins++; 
        $('#wins').text(wins);
        reset();
        return;
      } 
      else if (playerScore > winNum) {
        alert("loser!")
        lose++;
        $('#losses').text(lose);
        reset();
        return;
      } else { return;}
    };

  $("#gem1").on("click", function() {       // refactory playerscore retaint value and wont reset.
      playerScore = playerScore + gem[0];
    $("#playerScore").text(playerScore);
      checkWin();
        // checkLose();
          console.log(playerScore)
    });

  $("#gem2").on("click", function() {
      playerScore=playerScore + gem[1];
    $("#playerScore").text(playerScore);
      checkWin();
        // checkLose();
          console.log(playerScore)
    });

  $("#gem3").on("click", function() {
      playerScore=playerScore + gem[2];
    $("#playerScore").text(playerScore);
      checkWin();
        // checkLose();
          console.log(playerScore)
    });
    
  $("#gem4").on("click", function() {
      playerScore=playerScore + gem[3];
    $("#playerScore").text(playerScore);
      checkWin();
        // checkLose();
          console.log(playerScore)
  });

  
};

reset();
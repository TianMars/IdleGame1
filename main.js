var gameData = {
  thinks: 0,
  thinksPerClick: 1,
  thinksPerClickCost: 10
  
  }
  
  
      function gainThinks() {
          gameData.thinks += gameData.thinksPerClick
          document.getElementById("thinksGained").innerHTML = "Thinks: " + gameData.thinks 
  }
  
      function buyThinksPerClick() {
    if (gameData.thinks >= gameData.thinksPerClickCost) {
          gameData.thinks -= gameData.thinksPerClickCost
          gameData.thinksPerClick += 1;
          gameData.thinksPerClickCost *= 2
          document.getElementById("thinksGained").innerHTML = "Thinks: " + gameData.thinks 
          document.getElementById("perClickUpgrade").innerHTML = "Big Thinks (Currently Level " + gameData.thinksPerClick + ") Cost: " + gameData.thinksPerClickCost + " Thinks"
        }
        
  }

  function frisbeeTime() {
    var x = document.getElementById("frisbeeTime");
    if (thinks >= 100) and (x.style.display === "none"); {
        x.style.display = "block";
    } 
  }
  var mainGameLoop = window.setInterval(function() {
      gainThinks()
    }, 1000)
  
  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("idleGameSave", JSON.stringify(gameData))
    }, 15000)
  

var gameData = {
  money: 0,
  moneyPerClick: 1,
  moneyPerClickCost: 10
  
  }
  
  
      function gainMoney() {
          gameData.money += gameData.moneyPerClick
          document.getElementById("moneyGained").innerHTML = "$" + gameData.money + " Gained"
  }
  
      function buyMoneyPerClick() {
    if (gameData.money >= gameData.moneyPerClickCost) {
          gameData.money -= gameData.moneyPerClickCost
          gameData.moneyPerClick += 1;
          gameData.moneyPerClickCost *= 2
          document.getElementById("moneyGained").innerHTML = "$" + gameData.money + " Gained"
          document.getElementById("perClickUpgrade").innerHTML = "Fundraise (Currently Level " + gameData.moneyPerClick + ") Cost: $" + gameData.moneyPerClickCost 
        }
        
  }
  var mainGameLoop = window.setInterval(function() {
      gainMoney()
    }, 1000)
  
  var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("idleGameSave", JSON.stringify(gameData))
    }, 15000)
  

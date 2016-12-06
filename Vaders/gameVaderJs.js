function collectCoin(collision) {
    coin.destroy();
    pointscore=pointscore +1;
    point.destroy();
}
    var coins = 0;
    var deathscore=100;
    var pointscore=0;
    var player;
    var coin;
    var point;
    var barrier;
    function mathAlert() {
        var answer;
        var answerQ1 = prompt("Solve the equation: 5(-3x - 2) - (x - 3) = -4(4x + 5) + 13");
        if (isNaN(Number(answerQ1))) {
            alert("Incorrect.");
        } else {
            alert("Correct! Score: " + deathscore + " Points: " + pointscore + "/1");
         Crafty.stop();
        }
    };
    function bounceBack() {
        player.attr({x:240, y:280, w:50, h:50});
    }
    function gameInitialize() {
        Crafty.init();
        coin = Crafty.e("Coin, 2D, DOM, Image, Solid, Collision").image("coin.png");
        //coin.image("coin.png");
        coin.attr({x: 680, y: 330, w: 60, h: 60});
        //coin.onHit("Player", collectCoin);
        point = Crafty.e("Point, 2D, DOM, Solid, Collision");
        point.attr({x:700, y:340,w:20, h:20});
        point.onHit("Player", collectCoin)

        barrier = Crafty.e("Barrier, 2D, DOM, Solid, Collision");
        barrier.attr({x: 0, y: 0, w: 10, h: 1000});
        barrier.onHit("Player", restartGame);
        player = Crafty.e("Player, 2D, DOM, Image, Twoway, Gravity, Solid, Collision").image("vader.png");
        player.attr({x: 30, y: 200, w: 50, h: 50});
        player.image("vader.png");
        player.twoway();
        player.gravity("Floor", "Barrier", "Coin");
        var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
        floor.attr({x: 10, y: 300, w: 50, h: 7});
        floor.color("green");
        var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
        floor.attr({x: 140, y: 350, w: 50, h: 7});
        floor.color("green");
        var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
        floor.attr({x: 250, y: 390, w: 50, h: 7});
        floor.color("green");
        var barrier = Crafty.e("Barrier, 2D, DOM, Solid, Collision");
        barrier.attr({x:325, y:230, w:5, h:20});
        barrier.onHit("Player", bounceBack);
        var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
        floor.attr({x: 330, y: 260, w: 75, h: 7});
        floor.color("green");
        var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
        floor.attr({x: 460, y: 270, w: 55, h: 7});
        floor.color("green");
        var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
        floor.attr({x: 590, y: 480, w: 60, h: 7});
        floor.color("green");
        var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
        floor.attr({x: 680, y: 370, w: 60, h: 7});
        floor.color("green");
        var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
        floor.attr({x: 910, y: 380, w: 60, h: 7});
        floor.color("green");
        var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
        floor.attr({x: 1060, y: 300, w: 70, h: 7});
        floor.color("green");
        floor.onHit("Player",mathAlert);
        var floor = Crafty.e("Floor, 2D, DOM, Color, Collision");
        floor.attr({x: 1, y: 300, w: 70, h: 7});
        floor.attr({x: 1060, y: 300, w: 70, h: 7});
        floor.color("green");
        //floor.onHit("Player", mathAlert);
        var platform = Crafty.e("Platform, 2D, DOM, Color, Collision");
        platform.attr({x: 1060, y: 295, w: 70, h: 7});
        platform.onHit("Player", mathAlert);
        floor.onHit("Player", mathAlert);
        var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
        floor.attr({x: 1600, y: 300, w: 70, h: 7});
        floor.color("green");
        floor.onHit("Player", mathAlert);
        var goal = Crafty.e("Goal, 2D, Color, DOM, Solid, Collision");
        goal.attr({x:0, y: 700, w:2000, h: 2});
        goal.color("black");
        goal.onHit("Player", restartGame);
    }
    function restartGame() {
        // player.attr({x: 0, y: 0});
        deathscore = deathscore - 10;
        player.attr({x: 30, y: 200, w: 50, h: 50});
  player = Crafty.e("Player, 2D, DOM, Image, Twoway, Gravity, Solid, Collision").image("vader.png");
  player.attr({x: 30, y: 200, w: 50, h: 50});
  player.image("vader.png");
  player.twoway();
  player.gravity("Floor", "Barrier","Coin");
  var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
  floor.attr({x: 10, y: 300, w: 50, h: 7});
  floor.color("green");
  var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
  floor.attr({x: 140, y: 350, w: 50, h: 7});
  floor.color("green");
  var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
  floor.attr({x: 250, y: 390, w: 50, h: 7});
  floor.color("green");

  var barrier = Crafty.e("Barrier, 2D, DOM, Color, Solid, Collision");
  barrier.attr({x:325, y:230, w:5, h:20});
  barrier.color("blue");
  barrier.onHit("Player", bounceBack);
  var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
  floor.attr({x: 330, y: 260, w: 75, h: 7});
  floor.color("green");


  var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
  floor.attr({x: 460, y: 270, w: 55, h: 7});
  floor.color("green");
  var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
  floor.attr({x: 590, y: 480, w: 60, h: 7});
  floor.color("green");
  var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
  floor.attr({x: 680, y: 370, w: 60, h: 7});
  floor.color("green");
  var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
  floor.attr({x: 910, y: 380, w: 60, h: 7});
  floor.color("green");
  var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
  floor.attr({x: 1060, y: 300, w: 70, h: 7});
  floor.color("green");
  floor.onHit("Player",mathAlert);
  var floor = Crafty.e("Floor, 2D, DOM, Color, Collision");
  floor.attr({x: 1, y: 300, w: 70, h: 7});
  floor.attr({x: 1060, y: 300, w: 70, h: 7});
  floor.color("green");
  //floor.onHit("Player", mathAlert);


  var platform = Crafty.e("Platform, 2D, DOM, Color, Collision");
  platform.attr({x: 1060, y: 295, w: 70, h: 7});
  platform.onHit("Player", mathAlert);

  floor.onHit("Player", mathAlert);


  var floor = Crafty.e("Floor, 2D, DOM, Color, Solid, Collision");
  floor.attr({x: 1600, y: 300, w: 70, h: 7});
  floor.color("green");
  floor.onHit("Player", mathAlert);


  var goal = Crafty.e("Goal, 2D, Color, DOM, Solid, Collision");
  goal.attr({x:0, y: 700, w:2000, h: 2});
  goal.color("black");
  goal.onHit("Player", restartGame);
}

function restartGame() {
  // player.attr({x: 0, y: 0});
  deathscore = deathscore - 10;
  player.attr({x: 30, y: 200, w: 50, h: 50});
}
window.onload = gameInitialize;

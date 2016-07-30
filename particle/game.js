var Game = { };

Game.draw = function() { ... draw entities here ... };
Game.update = function() { ... run game logic here ... };

while (!Game.stopped) { // While the game is running
    Game.update();        // Update Entities (e.g. Position)
    Game.draw();          // Draw Entities to the Screen
}
Game.fps = 50;

Game.run = (function() {
    var loops = 0, skipTicks = 1000 / Game.fps,
        maxFrameSkip = 10,
        nextGameTick = (new Date).getTime();
  
    return function {
        loops = 0;
    
    while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
        Game.update();
        nextGameTick += skipTicks;
        loops++;
    }
    
    if (loops) Game.draw();
  };
})();

// Start the game loop
Game._intervalId = setInterval(Game.run, 1000 / Game.fps);

...

// To stop the game, use the following:
clearInterval(Game._intervalId);


//Magic function to limit FPS
(function() {
  var onEachFrame;
  if (window.webkitRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); webkitRequestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); mozRequestAnimationFrame(_cb); }
      _cb();

(function() {
  var onEachFrame;
  if (window.webkitRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); webkitRequestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(Game.run);

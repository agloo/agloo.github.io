// This script sourced from Zevan Rosser and learnsome.co
// particle draw function:
window.onload = function() {

// Initialise an empty canvas and place it on the page
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
//Stackoverflow'd way to center the canvas:
//canvas.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";
document.body.scrollTop = 0;
document.body.style.overflow = 'hidden';

width = window.innerWidth || document.body.clientWidth;
height = window.innerHeight || document.body.clientHeight;
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);

var spawnx = canvas.width/2,
    spawny = canvas.height/2,
    spawnvx = Math.random()*10-5,
    spawnvy = Math.random()*10-5;

var particles = {},
    particleIndex = 0;

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    alert(evt.clientX - rect.left);
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function Particle(){
    this.x = spawnx;
    this.y = spawny;
    this.vx = Math.random()*10 - 5;
    this.vy = Math.random()*10 - 5;
    particles[particleIndex] = this;
    this.id = particleIndex;
    this.size = 1;
    this.alpha = .5;
    particleIndex++;
}
Particle.prototype.draw = function(){
    this.x += this.vx;
    this.y += this.vy;
    this.vx -=.0001;
    this.vy -= .0001;
    this.alpha -= .0001;
    if (this.alpha <= .075) {
        delete particles[this.id];
    }

    if (this.x > canvas.width * 0.99) {
      this.vy *= 0.75;
      this.vx *= -0.6;
      this.x = canvas.width * 0.99;
    }

    if (this.x < canvas.width * 0.01) {
      this.vy *= 0.75;
      this.vx *= -0.6;
      this.x = canvas.width * 0.01;
    }
    if (this.y > canvas.height * 0.99) {
      this.vy *= -0.6;
      this.vx *= 0.75;
      this.y = canvas.height * 0.99;
    }

    if (this.y < canvas.height * 0.01) {
      this.vy *= -0.6;
      this.vx *= 0.75;
      this.y = canvas.height * 0.01;
    }

    /*
    var e = window.event;
    onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
    if (e.clientX) {
        alert(e.clientX);
        vx += 1/(e.clientX - posX);
        vy += 1/(e.clientY - posY);
    }
    */

    context.beginPath();
    context.fillStyle = "rgba(255,255,255,".concat(this.alpha.toString(),")");
    context.arc(this.x, this.y, this.size, 0, Math.PI*2, true);
    context.closePath();
    context.fill();


}
for (i = 0; i < 25; i++){
    new Particle();
}
/*cavas.addEventListener('mousemove', function(evt) {
    alert("ASDF");
    var mousePos = getMousePos(canvas, evt);
    spawnx = mousePos.x;
    spawny = mousePos.y;
}*/
//THE MAIN LOOP:
setInterval(function() {
    // Erase canvas
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width, canvas.height);

    spawnx += spawnvx;
    spawny += spawnvy;

    //WHAT IF WE MADE THE SPAWN SPEED UP
    if (spawnx > canvas.width * 0.99) {
      //spawnvy *= 0.75;
      spawnvx *= -0.6;
      spawnx = canvas.width * 0.99;
    }

    if (spawnx < canvas.width * 0.01) {
      //spawnvy *= 0.75;
      spawnvx *= -0.6;
      spawnx = canvas.width * 0.01;
    }

    if (spawny > canvas.height * 0.99) {
      //spawnvy *= -0.6;
      spawnvx *= 0.75;
      spawny = canvas.height * 0.99;
    }

    if (spawny < canvas.height * 0.01) {
      //spawnvy *= -0.6;
      spawnvx *= 0.75;
      spawny = canvas.height * 0.01;
    }

    for (var key in particles) {
        var p = particles[key];
        p.draw();
    }
    new Particle();
}, 30);
};

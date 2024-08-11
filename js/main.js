window.addEventListener('keydown',this.check,false);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width=1400; 
const height=700;
const step=10;
let x=width/2,y=height/2;

function check(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: x-=step; break; //Left key
        case 38: y-=step; break; //Up key
        case 39: x+=step; break; //Right key
        case 40: y+=step; break; //Down key
    }
    this.draw();
}

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.stroke();
}
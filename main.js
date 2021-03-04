//C-84 code starts

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var images = ["mars-img-1.jfif", "mars-img-2.jfif", "mars-img-3.jpg", "mars-img-4.jpg"];
var random = Math.floor(Math.random() * 4);
console.log(random);
var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 90;
var rover_img = "rover.png";
var bg_img = images[random];

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = bg_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_img;
}
function uploadBackground() {
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
  }
  window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
var keyPressed = e.keyCode;
console.log(keyPressed);
//ifs
if (keyPressed == '38'){
    up();
    console.log("up");
}
if (keyPressed == '40'){
    down();
    console.log("down");
}
if (keyPressed == '37'){
    left();
    console.log("left");
}
if (keyPressed == '39'){
    right();
    console.log("right");
}
}
//C-45 code ends
//C-85 code starts
function up() {
    if (rover_y >= 0){
    rover_y = rover_y - 10;
    console.log("When up arrow is pressed, x = " + rover_x + "y = " + rover_y);
    uploadBackground();
    uploadRover();
    }
}
function down() {
    if (rover_y <= 500){
    rover_y = rover_y + 10;
    console.log("When down arrow is pressed, x = " + rover_x + "y = " + rover_y);
    uploadBackground();
    uploadRover();
    }
}
function left() {
    if (rover_x >= 0){
    rover_x = rover_x - 10;
    console.log("When left arrow is pressed, x = " + rover_x + "y = " + rover_y);
    uploadBackground();
    uploadRover();
    }
}
function right() {
    if (rover_x <= 700){
    rover_x = rover_x + 10;
    console.log("When right arrow is pressed, x = " + rover_x + "y = " + rover_y);
    uploadBackground();
    uploadRover();
    }
}
//C-85 code ends
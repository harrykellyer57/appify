/* sophisticated_code.js */

// This code generates a random image collage using HTML5 Canvas.

// Function to generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Canvas setup
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

// Generate random image collage
for (var i = 0; i < 200; i++) {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var width = Math.random() * 100 + 50;
  var height = Math.random() * 100 + 50;
  var color = getRandomColor();

  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);

  // Generate random image
  var image = new Image();
  image.src = "https://picsum.photos/200"; // Random image URL
  image.addEventListener("load", function () {
    ctx.drawImage(image, x, y, width, height);
  });
}

// Save the generated collage as an image file
var link = document.createElement("a");
link.href = canvas.toDataURL("image/png");
link.download = "random_image_collage.png";
link.click();
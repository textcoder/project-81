canvas = document.getElementById("olympicCanvas");
ctx = canvas.getContext("2d");
color = "blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 2;
ctx.arc(200, 230, 40, 0, 2*Math.PI);
ctx.stroke();

color_rect = "grey";

ctx.beginPath();
ctx.strokeStyle=color_rect;
ctx.lineWidth = 2;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

color_1 = "yellow"

ctx.beginPath();
ctx.strokeStyle=color_1;
ctx.lineWidth = 2;
ctx.arc(250, 270, 40, 0, 2*Math.PI);
ctx.stroke();

color_2 = "black"

ctx.beginPath();
ctx.strokeStyle=color_2;
ctx.lineWidth = 2;
ctx.arc(300, 230, 40, 0, 2*Math.PI);
ctx.stroke();

color_3 = "green"

ctx.beginPath();
ctx.strokeStyle=color_3;
ctx.lineWidth = 2;
ctx.arc(350, 270, 40, 0, 2*Math.PI);
ctx.stroke();

color_4 = "red"

ctx.beginPath();
ctx.strokeStyle=color_4;
ctx.lineWidth = 2;
ctx.arc(400, 230, 40, 0, 2*Math.PI);
ctx.stroke();


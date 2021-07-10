canvas = document.getElementById("myCanvas");
color = "red";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;

var cx,cy,lx,ly;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouse_Event = "mousedown";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mousedown(e)
{
    mouse_Event = "mouseleave";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mousedown(e)
{
    mouse_Event = "mouseUP";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousedown(e)
{
 cx = e-clientX - canvas.offsetLeft;
 cx = e-clientY - canvas.offsetTop;

 if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveto(lx, ly);
    ctx.lineTo(cx, cy);
    ctx.stroke();
 }

 lx = cx;
 ly = cy;
}


function clearArea() 
{ 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}

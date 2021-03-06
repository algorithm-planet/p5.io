//
function setup() 
{
    createCanvas(windowWidth, windowHeight);
}
let x0  = 0 , y0 = 0;
let B = true;

let x1  = 0, y1 = 0;

function draw() 
{
  background(0);

  fill(255);
  stroke(220);
  
  if(mouseIsPressed)
  {
      if(B)
      {
        x0 = mouseX ;
        y0 = mouseY;
        B = false;
      }
      x1 = mouseX ;
      y1 = mouseY;
  }
  else
    B = true;
    
    L(x0 , y0 , x1 , y1);

    O(x0 , y0);
    O(x1 , y1);

    let nx = x1 - x0,
        ny = y1 - y0;
    let r = 2 * Math.sqrt(nx * nx + ny * ny);

    fill(255 ,100);
    O(x0 , y0 , r)
}


function O(x , y , r = 10)
{
    noStroke();
    ellipse(x ,y , r , r);
}

function L(x0 , y0 , x1 , y1)
{
    strokeWeight(2);
    line(x0 , y0 , x1 , y1);
}

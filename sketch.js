let dt;

function setup() 
{
    let s = 0.125;
    createCanvas(window.innerWidth, window.innerHeight);
    dt = 1.0/60;
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
    let r = 2 * sqrt_(nx * nx + ny * ny);

    fill(255 ,100);
    O(x0 , y0 , r)
}

function sqrt_(x)
{
    return Math.pow(2 , Math.log2(x)/2);
}

function pow_2(x)
{
    let c = Math.log(2);

    return c + c*c
}

function O(x , y , r = 10)
{
    strokeWeight(0.1);
    ellipse(x ,y , r , r);
}

function L(x0 , y0 , x1 , y1)
{
    strokeWeight(2);
    line(x0 , y0 , x1 , y1);
}

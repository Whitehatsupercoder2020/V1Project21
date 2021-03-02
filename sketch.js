var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness= random(20,80);
  bullet= createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  wall=createSprite(1300,200,thickness,height/2);
}

function draw() {
  background(0);
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor="red";
		
	}

	

	if(damage<10)
	{
		wall.shapeColor="green";
	}
	
  }
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}

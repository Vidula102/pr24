class PlayerArrow {
  constructor(x, y, width, height, 
    //archerAngle
    ) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    //this.archerAngle = archerAngle;
    //this.velocity = 0;
    World.add(world, this.body);
  }
  
  //create a shoot function
  shoot(
    //archerAngle
    ) {

    // archerAngle += 90;
    // archerAngle = archerAngle  * (3.14/180);
    // this.velocity = p5.vector.fromAngle(archerAngle);
    // velocity.mult (0.5);

    var velocity = p5.Vector.fromAngle(playerArcher.body.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }



  display() {
  
    var pos = this.body.position;
    //var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(playerArcher.body.angle + 88);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

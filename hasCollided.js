hasCollided(object1, object2)
 {
    if (object1.x - object2.x < object1.width/2 + object2.width/2)
    {
        var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;
        object2.velocityX = 0;
    if (damage > 10)
    {
        object2.shapeColor = color("red");
    }
    if (damage < 10)
    {
       object2.shapeColor = color("green");
    }
  } 
}
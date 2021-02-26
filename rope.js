class Rope{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.05,
    length:20,

}
this.pointB=pointB
this.rope=Constraint.create(options)
World.add(world,this.rope)
    }
    fly(){
        this.rope.bodyA=null
    }
    display(){
   if(this.rope.bodyA){ 
       
var pointA=this.rope.bodyA.position
var pointB=this.pointB
stroke("red")
line(pointA.x,pointA.y,pointB.x,pointB.y)

   }
  
    }
}
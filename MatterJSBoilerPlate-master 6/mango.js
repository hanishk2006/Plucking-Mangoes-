class mango {
    constructor(x, y, r){
        var options = {
            isStatic: true, 
            restitution:0, 
            friction:1, 
        } 
        this.body = Bodies.circle(x, y, r, options); 
        this.image = loadImage("mango.png");  
        this. r = r
        World.add(world, this.body); 
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        rotate(angle);
        image( this.image, 0, 0, this.r, this.r);
        pop();        
    }
}  
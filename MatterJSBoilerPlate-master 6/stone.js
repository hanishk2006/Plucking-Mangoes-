class Stone {
    constructor(x, y, r){
        var options = {
            restitution:0, 
            friction:1, 
            density:1.2
        } 
        this.body = Bodies.circle(x, y, r, options); 
        this.image = loadImage("stone.png");  
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
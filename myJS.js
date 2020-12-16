class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.ground=Bodies.rectangle(width/2,height-20,width,40,options);
        World.add(world,this.ground);
    }
    display(){
        var pos=this.ground.position;
        fill("black");
        rectMode(CENTER);
        rect(pos.x,pos.y,width,40);
    }
}

class Constrain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length:10
        }
        //this.bodyA=bodyA;
        this.pointB=pointB;
        this.constrain = Matter.Constraint.create(options);

        World.add(world, this.constrain);
    }

    fly(){
        this.constrain.bodyA=null;
    }

    attach(body){
        this.constrain.bodyA=body;
    }

    display(){
        console.log(this.constrain.bodyA.position.x);
        if(this.constrain.bodyA){
            var a = this.constrain.bodyA.position;
            var b = this.pointB;
            strokeWeight(1);
            line(a.x, a.y, b.x, b.y);
        }
    }
    
}

class Stone { 
    constructor(x,y,r) { 
        var options={ 
            isStatic:false, 
            restitution:0, 
            friction:1, 
            density:1.2 
        } 
        this.x=x; 
        this.y=y; 
        this.r=r; 
        this.image=loadImage("stone.png"); 
        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    } 
    display() { 
        var stonepos=this.body.position; 
        push() 
        translate(stonepos.x, stonepos.y); 
        // rectMode(CENTER) 
        // rotate(this.body.angle) 
        fill(255,0,255); 
        imageMode(CENTER); 
        ellipseMode(RADIUS) ;
        image(this.image, 0,0,this.r*2, this.r*2) ;
        pop();
    } 
}

class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("mango.png");
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);
    }
}
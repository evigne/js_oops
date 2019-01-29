function Circle(radius){
    
    this.radius = radius;
    this.defaultLocation = {x:0,y:0};
    this.computeLocation = function(){
        //'''
    }
    this.draw = function(){
        this.computeLocation
        console.log("This is Constructor Function");
    }
}

const another = new Circle(10);
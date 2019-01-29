function Circle(radius){
    let color = 'red' // not part of the object
    this.radius = radius;
    this.defaultLocation = {x:0,y:0};
    this.computeLocation = function(factor){
        //'''
    }
    this.draw = function(){
        this.computeLocation(0.1);
        console.log("This is Constructor Function");
    }
}

const another = new Circle(10);
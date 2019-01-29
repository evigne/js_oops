function Circle(radius){
    
    this.radius = radius;
    this.draw = function(){
        console.log("This is Constructor Function");
    }
}

const another = new Circle(1);
another.location = "location"

for (let key in another){
    console.log(key)
}
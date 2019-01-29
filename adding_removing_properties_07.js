function Circle(radius){
    //console.log('this',this)
    this.radius = radius;
    this.draw = function(){
        console.log("This is Constructor Function");
    }
}

const circle = new Circle(1); // circle object

// object in javascript are dynamic that is we can add or remove properties 

// adding properties
circle.location = {x:1}; // circle['location'] = {x:1}

// removing properties

delete circle.location;
function Circle(radius){
    
    this.radius = radius;
    this.draw = function(){
        console.log("This is Constructor Function");
    }
}

const another = new Circle(10);
another.location = {x:1}

for (let key in another){
    // console.log(typeof(another[key]), "Hello",key)
    if (typeof(another[key]) !== 'funtion'){
            console.log(key,another[key]);
    }
}

const keys = Object.keys(another);

console.log(keys);

if ('radius' in another){
    console.log("another as radius");
}

// or

if ('radius' in another)
    console.log("another as radius");
    



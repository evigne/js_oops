function Circle(radius){
    //console.log('this',this)
    this.radius = radius;
    this.draw = function(){
        console.log("This is Constructor Function");
    }
}

const another = new Circle(1);

//Functions are objects in JS

//javascript uses Function() constructor to create a object

const Circle1 = new Function('radius',`
    this.radius = radius;
    this.draw = function(){
        console.log("This is Constructor Function");
    }
`)

const circle = new Circle1(1);

// Methods of a object
// call method
Circle.call({}, 1); // same as const another = new Circle(1);
// apply method
Circle.apply({},[1,2,3]); // pass array 
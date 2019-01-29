//Constructor Function

function Circle(radius){
    //console.log('this',this)
    this.radius = radius;
    this.draw = function(){
        console.log("This is Constructor Function");
    }
}

const another = new Circle(1);// new create a empty object like {}
// console.log(another.draw())

//another.construtor
//let x = {} ==> let x; = new Object();
// new String();
// new Boolean();
// new Number();
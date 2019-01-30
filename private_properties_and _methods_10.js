// before
// function Circle(radius){
//     let color = 'red' // not part of property of the object
//     this.radius = radius;
//     this.defaultLocation = {x:0,y:0};
//     this.computeLocation = function(factor){
//         //'''
//     }
//     this.draw = function(){
//         this.computeLocation(0.1);
//         console.log("This is Constructor Function");
//     }
// }

// const another = new Circle(10);

//after

function Circle(radius){
    let color = 'red' // not part of property of the object
    this.radius = radius;
    let defaultLocation = {x:0,y:0};
    let computeLocation = function(factor){
        //'''
    }
    this.draw = function(){
        computeLocation(0.1);
        console.log("This is Constructor Function");
    }
}

const another = new Circle(10);  

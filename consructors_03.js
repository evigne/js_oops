
//factory function
// function createCircle(radius){
//     return {
//         radius:radius, // if para and key name are same we could jus "radius", instead "radius:radius"
        
//         draw:  function(){
//             console.log('This is Factory Function');
//         }
//     };

// }

// const circle = createCircle(1);
// circle.draw();

//Constructor Function

function Circle(radius){
    //console.log('this',this)
    this.radius = radius;
    this.draw = function(){
        console.log("This is Constructor Function");
    }
}

const another = new Circle(1);// new create a empty object like {}
console.log(another.draw())


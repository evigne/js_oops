// getter and setter
function Circle(radius){
    let color = 'red'; // not part of property of the object
    this.radius = radius; 
    let defaultLocation = {x:0,y:0}; //private member of Circle Object  
    //getter method
    this.getDefaultLocation = function(){ 
        return defaultLocation;
    };

    this.draw = function(){
        
        console.log("This is Constructor Function");
    };

    Object.defineProperty(this, 'defaultLocation', {  // this.getDefaultLocation can be replaced by 
        get : function(){   // getter  .....................
            return defaultLocation;
        },
        set : function(value){  // setter ...................
            //defaultLocation = value;
            if (!value.x || !value.y) // checking whether falsy
                throw new Error('This is invalid') // Error isbuild in constructor to create error objects
            defaultLocation = value    
        }

});
}

const another = new Circle(10);
x= another.getDefaultLocation();
console.log(x);
console.log(another.defaultLocation);
another.defaultLocation = {x:1, y:1};
console.log(another.defaultLocation);
another.defaultLocation = 1;
another.draw();  


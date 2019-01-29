// const circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw:  function(){
//         console.log('This is Draw');
//     }
// }

//factory function
function createCircle(radius){
    return {
        radius:radius, // if para and key name are same we could jus "radius", instead "radius:radius"
        
        draw:  function(){
            console.log('This is Factory Function');
        }
    };

}

const circle = createCircle(1);
circle.draw();
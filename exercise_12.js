//stop watch

function Stopwatch(){
    let startTime, endTime, running, duration = 0;
    this.start = function(){
        if (running)
            throw new Error ('Stopwatch has already started.')
        running = true; 
        startTime = new Date(); 
        console.log(startTime)  
    };
    this.stop = function(){
        if (!running)
            throw new Error ('Stopwatch has already stopped')
        running = false;
        endTime = new Date()
        console.log(endTime)
        const seconds = (endTime.getTime()-startTime.getTime())/1000;
        duration = duration + seconds       
    };
    this.reset = function(){   
        startTime = null;
        endTime = null;
        running = false;
        duration = 0; 

    };
    Object.defineProperty(this, 'duration', {
        get : function() {
           
            return duration;
        }
    });
    Stopwatch.prototype.duration1 = function(){
        alert(duration);
        return duration;
    } 
    
}

const watch = new Stopwatch()
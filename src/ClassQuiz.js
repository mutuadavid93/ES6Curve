

class Bird {
    constructor(name){
        this.name = name;
    }
    
    get birdName() {
        return this.name;
    }
    
    master(){
        return "King Bird";
    }
}


/*
 *  Explicit constructor in a child class.
 *  NB: Must use super keyword.
 */

class Duck extends Bird {
    constructor(name, voice){
        super(name); // invokes Bird Class's constructor A$AP on instantiation.
        this.voice = voice;
    }
    
    speak() {
        return super.master(); // Overrides Bird Class's master().
    }
};

var duck = new Duck("Big Lora", "Squirks");
// console.log(`${duck.birdName} is a ${duck.speak()}`);




/*
 *  Implicitly Using a Parent Constructor.
 */

class Hen extends Bird{
    doStuff(){
        return this.name; // RoverHen, initialized by Bird's contructor.
    }
    
    master(){
        return "Queen Bird";
    }
};

// Now inherit Everything from Bird
// including the constructor.
var hen = new Hen("RoverHen");
var bird = new Bird("Raven");

// console.log(hen.doStuff()); // RoverHen









// Perform  Test on the Instances Passed
function checkOut(...birds) {
    var rs = [];
    
    for (var i = 0; i < birds.length; i++) {
        if(birds[i] instanceof Bird) {
            rs.push(birds[i].master());
        }
    }
    
    return rs;
}

// invoke it
var newrs = checkOut(hen, bird);
console.log(newrs);
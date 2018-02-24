// Additions to Objects

/*
 * is function
 */

// Similar to "===" but Better.
// NB: "===" assumes two numbers +ve and -ve are equal.

if(0 === -0){
   // returns true
}

// is(), Considers them different.
var compare = Object.is(0, -0); // false


// They also differ in NAN comparison:
// "===" assumes they are not equal but they are. 

var comp = (NaN === NaN) ? true : false; // false

// is(), knows they are equal.
var nanEqnanTrue = Object.is(NaN, NaN); // true





/*
 * assign function
 */

// Allow you to take properties from one Object and copy them
// into another existing Object.

var shark = {
    bite: function (target) {
        target.hurt = true;
    }
};

var person = {};

// Laser is our Mixin
var laser = {
    pewpew: function (target) {
        target.exploded = true;
    }
};

// Now Copy laser mixin Properties into Shark using assign()

// NB: You can copy properties from other mixins too into shark object 
// i.e. target. e.g. Object.assign(shark, laser, mixin2, mixin3, etc)
Object.assign(shark, laser);

// Now shark{} has laser and itself's properties.
// i.e. bite and pewpew.
shark.pewpew(person); 
person.exploded; // true





/*
 * Object Shorthand and Computed Props.
 */

// Create properties from Variables.

var model = 'Ford';
var year = 1969;

// make those vars Object properties.
var Classic = {
    model, year
};

// Method initializer shorthand.
// Allows create methods on Objects easily.

var server400 = {
    getPort() {
        return 400;
    }
};

var port = server400.getPort(); // 400





/*
 * Computed Property Names
 */

// A way to support more functionality when defining the 
// property names on an Object Literal.

// The propertyName supports variables in it. i.e. it's an expression.

//@Example 1:
function createSimpleObject(propName, propVal) {
    return {
        [propName] : propVal
    };
}

var simpleObject = createSimpleObject('color', 'red');
let value = simpleObject.color; // 'red'

// A way to have Very UNIQUE Properties in an Object.

//@Example 2: 
function createTriumvirate(first, second, third) {
    return {
        ['member_'+first.name] : first,
        ['member_'+second.name] : second,
        ['member_'+third.name] : third
    };
};


// The Objects themselves:
var Joe = {name: 'Joe', beardColor: 'Brown Beard'};
var SecGen = {name: 'Fredrick'};
var Dean = {name: 'Misiko'};

var tri = createTriumvirate(Joe, SecGen, Dean);

// createTriumvirate(), returns an Object in the format below:
//
//  var tri = { 
//      member_Joe : {name: "Joe", beardColor: "Brown Beard"},
//      member_Fredrick : {name: "Fredrick"},
//      member_Misiko : {name: "Misiko"}
//  };

var res = tri.member_Fredrick.name; // 'Fredrick'
var beard = tri.member_Joe.beardColor; // 'Brown Beard'


console.log(beard);
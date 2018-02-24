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







/*
 * PROXIES
 */

// Used in Validations and Strict Property Typing.

// Allow us to intercept Operations done on Objects.

// Under the Hood: When we use Proxy Object we don't modify the original Object 
// itself instead we are creating a New Object that creates a Wrapper around 
// the original Object.

// Intercept GET:
var unicorn = {
    legs: 4,
    color: 'brown',
    horn: true
};

// Now Create our Proxy Object
//
// @Syntax: new Proxy(targetObject, {Operations})
// ProxyKey @Syntax; key : function (targetObject, ObjectProperty)
var proxyUnicorn = new Proxy(unicorn, {
    get : function (target, property) {
        if(property === 'color'){
            return 'awesome '+ target[property];
        }else{
            return target[property];
        }
    }
}); 

// var color = proxyUnicorn.color; // 'awesome brown'
// var legs = proxyUnicorn.legs; // 4


// NOTE: When Intercepting Sets using Proxy, it throws an Error in "use strict" 
// mode, due to polyfills. Babel on it's own can transpile it without an error.
//
// Solution: Inside the set function return true and you good.
// 
// i.e. 
// var yourSetProxy = new Proxy(targetObject, {
//      set : function (target, property, value) {
// 
//           // Your logic here.
// 
//           return true;
//      }
// });


// Intercept SET
var tycorn = {
    legs: 4,
    color: 'brown',
    horn: true
};

// @Syntax; set : function(targetObj, propName, valueToBeSetTo)
var aSetProxyUnicorn = new Proxy(tycorn, {
    set : function (target, property, value) {
        if(property === 'horn' && value === false) {
            console.warn("A unicorn cannot ever lose it's horn!");
        }else {
            target[property] = value;
        }
        
        return true;
    }
});

aSetProxyUnicorn.horn = false;
// console.log(aSetProxyUnicorn.horn); // true



// In Addition you can Intercept other Object Properties:
//
// 1. delete
// 2. define
// 3. freeze or seal
// 4. when in operator is used
// 5. has


// NB: You can Intercept multiple properties in one Proxy Object.


/*
 * Proxying Functions
 */


// Intercept function calls using proxies;

// @Example:
var gemUnicorn = {
    legs: 4,
    color: 'red',
    horn: true,
    hornAttack: function (target) {
        return target.name + ' was destroyed';
    }
};



// Hide the hornAttack function away from direct invokations using a Proxy.
//
// @Syntax; apply: function (targetFunction, contextThis, argsToTheFunc)
// i.e. context means the caller of the function.
gemUnicorn.hornAttack = new Proxy(gemUnicorn, {
    apply: function (target, context, args) {
        if(context !== gemUnicorn){
           console.warn("Nobody can use the gemUnicorn horn");
        }else {
            return target.apply(context, args);
        }
    }
});



// Now a thief Object tries to use/attack gemUnicorn horn using hornAttack function.
var thief = { name: 'Jaydakiss Thief' };

// Tries to make it it's own Property so it can use it;
thief.attack = gemUnicorn.hornAttack;

// Now intends to use it to steal the horn from gemUnicorn.
//
// NOTE: Now context is equal "thief" and not "gemUnicorn".
// gemUnicorn.hornAttack() Proxy denies this.
thief.attack(); // Fails and I don't know why!
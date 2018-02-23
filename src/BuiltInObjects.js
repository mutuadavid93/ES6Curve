
 function display(func) {
     console.log(func);
 }
 
/*
 * Numbers
 * @Number Method.
 */

// Octal Literals.
var octal = 0o71;

// Binary Literals
var bin = 0b1101;

// Parse the Literals with Number Function
var octalNum = Number("0o71");

// Number Function as well exposes parseInt and parseFloat
var doubleNum = Number.parseFloat("3.5"); // 3.5
var intNum = Number.parseInt("1.5"); // 1

// Detect Integers with isIntegers
var isInt = Number.isInteger(1); // true if 1.0
var isIntNow = Number.isInteger(1.5); // false

// Indicate safe Integers with isSafeInteger
// Largest Safe Int is 9007199254740991.
var safeInt = Number.isSafeInteger(9007199254740991);


var radNum = +new Date(); // radom number.
display(Number.isSafeInteger(radNum));


/*
 * Math
 * @Math Method
 */

// Cube Root
var cuberoot = Math.cbrt(27);
var logarithm = Math.log10(100); // 2


// Determine whether a value is Positive
var positveNum = Math.sign(10); // 1

// Determine whether a value is Negative
var negativeNum = Math.sign(-10); // -1

// Determine whether a value is a Zero
var zeroValue = Math.sign(0); // 0

// Truncate a Value
var truncVal = Math.trunc(2.8); // 2
var truncNegVal = Math.trunc(-2.8); // -2



var tod = new Date();



/*
 * Arrays
 * New Features added in ES6
 */

// find(), find an item in an Array the first item that meets your createria.
var ary = [1,5,6,10];
var match = ary.find(item => item > 8); // 10

// findIndex(), find the index of the first Matching item in the Array
var matchIndex = ary.findIndex(item => item > 3); // 1

// Should Create a new array from an array-like Object when from is called. 
var arrayLikeDomObject = document.querySelectorAll('div');
var fromArray = Array.from(arrayLikeDomObject);


// Should Return entries from the entries function.
// Starting with the index then value sequentially.
var a = ["Jowey", "Zoe", "James"];
var entries = a.entries();

var firstEntry = entries.next().value;
firstEntry[0]; // 0
firstEntry[1]; // Jowey


/*
 * Sets 
 * The Set Object
 */

// Allows us to diplay a Unique set of Items.

// By Default a Set Contains Zero Items when constructed.
var set = new Set();
set.size; // 0

// Add Items using the add()
set.add("SomeValue");

// Should allow objects as Keys, which other structures don't
var key = {};
set.add(key);
set.has(key); // true

// Should contain items when given an array in the constructor.
var myset = new Set([1,2,3]);
myset.has(1); // true

// Sets Don't allow duplicates, they ignore them if added and size() never 
// increases.

// Should have no items after clear is called.
var anotherset = new Set();
anotherset.add(20);
anotherset.add(25);
anotherset.clear();
anotherset.size; // 0

// NB: You can loop them using loops but it's advisable, instead use complex
// data structures e.g. Arrays.

// NB: A set can consume another set's values




/*
 * Maps
 * Collection of Value : Key Pairs, Very Similar to Objects but designed for holding
 * // collectons with Key Value Pairs.
 */

// Should Contain 1 item when one item is added.
var map = new Map();
map.set("age", 35);
map.size; // 1

// Access value from a Map;
map.get("age"); // 35

// Allow an Object to be the Key;
var ageMap = new Map();
var ralph = {'name': 'Ralphael'};
ageMap.set(ralph, 28);
ageMap.get(ralph); // 28

// Can Contain items when given an array in the constructor
var arrMap = new Map([
    ['name', 'John'], ['age', 15], ['weight', '155']
]);

arrMap.size; // 3

// Find the correct item when has is called on the key.
arrMap.has('age'); // true

// If you add a duplcate item into a Map(), it replaces the existing item.
// i.e. Never allow duplicate Keys.
var mymap = new Map();
var keyed = {};
mymap.set(keyed, 'first');
mymap.set(keyed, 'second');
mymap.get(keyed); // 'second'

// NB: Maps can be deleted
mymap.delete(keyed);
mymap.has(keyed); //false

// Call the callback function for each item when forEach is called
var iteration = 0;
arrMap.forEach(function (value, key) {
    iteration++;
    // use value and key here.
});
iteration; // 3

// Supports for of iteration
var iterate = 0;
for(var [key, value] of arrMap){
    // Consume key and value variables.
    iterate++;
}

// Can be constructed with an iterator
var map13 = new Map();
map13.set('1');
map13.set('2');

//NB: The first element becomes the key i.e. 1
// and the Second elem becomes the value i.e. 2
var map14 = new Map(map13.entries());
map14.size; // 2



/*
 * WeakMap and WeakSet
 * Defn: They are variations of Map() and Set()
 */

// Purpose for each of them;
// To Solve the Problem with garbage collector unable to reuse and discard 
// resources pointed to by a Set(), e.g. Set Pointing a DOM element.

/* @WeekSets */
// They lack:
// 1. size property.
// 2. entries method.
// 3. values method.
// 4. forEach can be used against them.

// They otherwise support:
// 1. find an item with has()
var myWeakSet = new WeakSet();
var item = {name: 'joe'};
myWeakSet.add(item);
myWeakSet.has(item); // true.

// 2. Can remove item with delete()
myWeakSet.delete(item);
myWeakSet.has(item); // false.

// 3. clear items using clear()
// myWeakSet.clear();
// Confirm the item you were targeting is cleared by checking if the WeakSet has 
// it i.e. myWeakSet.has(item);


/* @WeakMaps */
// Support Only:
// 1. get(key)
// 2. delete(key)
// 3. clear()

display(map14.size); // 10


/*
 * USE CASE: 
 *  
 *  1. Pagination.
 *  2. Not to Overwhelm the Server.
 *  
 */


function* citrusFruits(count) {
    var fruits = [
        "Banana", "Orange", "Mangoe"
    ];
    
    
    var mixed = [];
        for(let fruit of fruits) {
            mixed.push(fruit);
            
            if(mixed.length === count){
                // Yield the Array upto to that length.
                // Override count with a newCount.
                count = yield mixed; 
                
                // On iterator.next(newCount), Continue the "For Loop" where was 
                // left off previously ( at first yield ). 
                
                // Empty the initially Loaded items.
                mixed = []; 
                
                // NB: Now Restart the "for loop" with the newCount 
                // along with an Empty Array.
            }
        }
        
        // If the condtion inside the "for loop" is false
        // then yield the already pushed items' Array.
        yield mixed;
}

var citrus = citrusFruits(1); // NB: Citrus is the iterator.

// value: ["Banana"]
// Now Start the Generator Function to Call the first yield.
console.log(citrus.next()); 

console.log(citrus.next(3)); // value: ["Orange", "Mangoe"]

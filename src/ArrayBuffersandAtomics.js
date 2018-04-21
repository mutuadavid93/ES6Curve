

/*************************
 * 
 * Shared Array Buffers
 * 
 *************************/

/*
 * Web Workers
 */

// To handle Parallelism in JavaScript.

// 1) Started by Main Thread.
// 2) No coded shared between Main and Worker thread.



/*
 * ArrayBuffer
 */

// Defn: Special Arrays that can be used to Handle complex parallel 
// activities.

// Declare an ArrayBuffer;
let buffer = new ArrayBuffer(4);

// You can't access the Underlyng Bytes of an ArrayBuffer Directly.
//
// But you can Create a Typed Buffer.

// NB: 16 Bits are equal to 2 Bytes, thus the first two Bytes are used 
// to store the value 1000;
let view = new Int16Array(buffer);
view[0] = 1000;



// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //try to solve using if else chain/refactor
//i two integers
//o array of all numbers between integers
//c what if second parameter larger than first?
//e n/a

//create empty array
let arr = [];
//iterate using for loop, setting i to start and stop at end,
if(start < end){
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
}
if(start > end){
        for(let i = start; i >= end; i--){
         arr.push(i);   
        }
    }

console.log(arr)
return arr;
//conditional for if start is greater than end
//push current element to empty array
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}

// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
 function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//use a while loop
// create and set variable equal to 1
//increment by one
//stop at 100;
//how to solve with a switch statement?
// let num = 1;
// while(num < 101){
// if(num % 3 === 0 && num % 5 === 0){
//     console.log('FizzBuzz')
// } else if(num % 3 === 0){
//     console.log('Fizz')
// } else if(num % 5 === 0){
//     console.log('Buzz')
// } else {
//     console.log(num);
// }

// num++;
// }
// }


// for(let num = 1; num <= 100; num++){
//     switch(true){
//         case (num % 3 === 0 && num % 5 === 0):
//             console.log("FizzBuzz");
//             break;
//         case num % 5 === 0:
//             console.log("Buzz");
//             break;
//         case num % 3 === 0:
//             console.log("Fizz");
//             break;
//         default :
//             console.log(num);
//     }
//   }
//   // YOUR CODE GOES ABOVE HERE //

let num = 1;
let answer = '';
while(num < 101){
    switch(true){
        case (num % 3 === 0 && num % 5 === 0):
            answer = "FizzBuzz";
            break;
        case num % 3 === 0 :
            answer = "Fizz";
            break;
        case num % 5 === 0 :
            answer = "Buzz";
            break;
        default :
            answer = num;
    }
    console.log(answer);
    num++;
}
}






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
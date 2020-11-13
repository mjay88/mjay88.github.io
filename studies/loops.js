/**
 * Loops : loops are an intrinsic part of JavaScript. The primary purpose of a loop is to 
 * iterate over lists or colletions of things, mainly, objects and arrays.
 * Iterating in computer software terms simply means repeating an action multiple times.
 * 
 * There are several different types of loops in JavaScript, which one we use will depened on
 * what we are trying to accomplish and the type of data we are dealing with. Common loops 
 * are the for loop, the for...of loop, for...in loop, and the while loop. 
 * 
 * The for loop requires three statements separated by two semicolons, most loop use a similar
 * pattarn of 1) initialize counter 2)test condition/where to stop 3)increase or decrease 
 * the counter
 * 
 * For loop syntax is as follows...
 * 
 *  for(initialize; condition; increment){
 *      //statement or multiple statments
 *      }
 * 
 * For the counter, remember that arrays and strings contain a zero based indexed system, so
 * if we want to start at the beginning of an array, the counter will be set to 0, which you
 * will see quite often in JS. Lets say we wanted to print all the contents of an array to the
 * console
 * 
 * let array = [1, 2, 3, 4, 5]
 * 
 *       for(let i = 0; i < array.length; i++){
 *          console.log(array[i])
 *          }
 * will print...
 *              1
 *              2
 *              3
 *              4
 *              5
 * on line 27 we initialize our counter at 0, and at index 0 of our array is 1. Our condition
 * is i < array.length, and array.length once evaluated is 5, since there are 5 elements in 
 * our array, so the loop will stop less than 5. i++ means we increase the value of i by one
 * every loop
 * 
 * We can also loop backwards through arrays, by paying attention to our for loops parameters...
 * 
 * let array = [1, 2, 3, 4, 5]
 * 
 *          for(let i = array.length - 1; i > -1; i--){
 *              console.log(array[i])
 *              } 
 * 
 *      prints...
 *              5
 *              4
 *              3
 *              2
 *              1
 * notice that we intialize our loop at array.length - 1, once evaluated gives us a 4, which
 * since the array has a zero based index, means we are starting at the last element of the 
 * array, and the condtion, i > -1, means we will stop before -1, so we will stop at the zero
 * index, which for this particular array has a value of 1. i-- means that we will 
 * subtract 1 from the value of i every time we iterate with our loop.
 * 
 * 
 * The counter only works for lists or collections ordered by an
 * index, so for something like an object, which is iterable but does not have an index system
 * we have to use a different kind of loop, enter, the for...in loop.
 * 
 * A for...in loop iterates over all of an objects enumarble proprties, that is, anything that
 * can be looped over, or a data type that contains several different values inside of it.
 * 
 *    let object = {
 *          a : 1,
 *          b : 2,
 *          c : 3,
 *        add : (a, b) => {a + b}
 *  
 *   for(let value in object){
 *      console.log(value, object[value]);// 1
 *                                        // 2
 *                                        // 3
 *                                        //(a, b) => {a + b}
 * 
 * the syntax for the for in loop is on line 35. In english the for in loop statement would 
 * loosely translate too "loop over the values in this object" where 'value' is the individual
 * properties of the object and 'object' is actually pointing to our object variable we
 * declared on line 29. 
 * 
 * While loops will loop for an indefinite amount of times until the specified condition 
 * evaluates to false, and which point the loop will stop and the program will continue
 * executing the rest of its code. 
 * 
 *      while(condition){
 *        // do something until this condition is no longer true
 *      }
 * 
 * Once the condtion evaluates to false the loop stops automatically
 * 
 *      let a = 0; 
 *      while(a < 5){
 *        //do something until the value of a is not less then 5
 *          console.log(a)
 *          a++ //increment a by one every loop
 *       }
 *       
 *        on the console we will get
 *          1
 *          2
 *          3
 *          4
 *        because once the value of a reaches 5, the condition on line 57 is no longer true
 *        so the loop will stop.
 * 
 * */
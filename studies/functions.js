/**Functions in JavaScript
 * 
 * * Functions : In JS there are two types of functions: the function that can be defined using
 * the function key word and new since ES6 arrow function ()=>{}. Functions in JS, similar to
 * mathmatical functions, typically result in something being done to our data, whether it's 
 * changing the data or organizing it in a specific way. 
 * 
 * A functions anatomy consists of the function keyword followed by its name and then 
 * paranthesis containing a list of parameters and the function body enclosed in brackets,
 * typically ending with the keyword return, which will return our output from said
 * function.
 * 
 * function nameOfFunction(parameters){
 *  //do stuff in here, code statements    
 * 
 * return 'stuff that has been done'
 * }
 * 
 * the keyword return is optional, because a function will automatically return output
 * once all the statments have run, even if you don't use the keyword return. Our 
 * parameters for our funtion turn into arguements once we call our function. Think of
 * parameters like the bus and arguements as people on the bus. Arguements are actual values
 * that we are passing into the function to do something to those values, parameters on the 
 * other hand are just like a placeholder until we pass some real data through our function
 * 
 * Arrow functions mentioned above are a shorter sytactical way of writing functions,
 * essentially we drop the keyword function and the keyword return.
 * 
 * nameOfFunction(parameters) => {do something to something here}
 * 
 * To tell JavaScript we want to use a function, we have to call it like so...
 * 
 * nameOfFunction(data); 
 * 
 * JavaScript interperets this as, okay, time to pass this data into this function and return
 * something out of it...
 * 
 * functions can also be assigned as a value to variables...
 * 
 * let aFunction = nameOfFunction(data);
 * 
 * now, if we call our variable aFunction with an arguement, JS will execute the function on
 * those values
 * 
 * aFunction(stuff) //outputs stuff after its been modified by the function
 * 
 * Function parameters are optional, but in most cases you will find yourself defining some. 
 * You can pass anything that evaluates to a single value through a function, including other
 * functions. 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */
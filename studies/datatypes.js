/**Data Types
 * 
 * There are two data types in JavaScript, primitive types and complex types. The biggest 
 * difference between these data types could be that : Primitive data types are immutable (
 * just means they can't be changed) while complex data types are mutable, meaning they can
 * be changed, and primitive data types are copy by value where complex data types are copy
 * by refernce, we will go over the distinction between these terms in a bit...
 * 
 * Primitive Data Types
 * 
 * Numbers : numbers are pretty straight forward, much like basic algebra from grade school.
 * Numbers can be positve, negative, or decimals. The highest number that can be stored as a 
 * variable in JavaScript is 9007199254740091, so in the case that you are dealing with very 
 * large numbers, just remeber that JavaScript does have a limit, though with newer versions
 * of language there are ways to work around this. Numbers are not surrounded by quotations,
 * and if they are JS interprets them as strings.
 * 
 * //assign a number value to a variable
 * let a = 88;
 * let b = -14;
 * let c = a + b;  
 * console.log(c) // 74;
 *
 * 
 * Strings : strings in JS are can be pretty much anything: words, letters, most symbols,
 * numbers; as long as we put them between " " or '', or represented as template literals,
 * which I will touch in a moment.
 * 
 * 
 * const WORD = 'time';
 * var words = 'You never shut up do you'
 * let letters = 'oasdhfioasdhfiohasdoifbhaodfhpaidsghp'
 * var numberString = "2485";
 * 
 * You can add strings together with the "+" sign in JS, this is called string concatination
 * 
 * let firstName = "Michael";
 * let lastName = "Jarrett";
 * let fullName = firstName + " " + lastName;
 * Note the addition of the space in the above example.
 * 
 * Template literals were introduced in 2015 to JS and they help us to add variable values
 * straight into a string without having to us the traditional method of concatination, which
 * usually ends up with cleaner syntax and easier to read code.
 * 
 * Template literals start with a backtick  ` followed by ${} and finished with another
 * backtick. Below is an example...
 *  
 * let firstName = "Michael";
 * let lastName = "Jarrett";
 * let sentence = `${firstName} ${lastName} is one hell of guy am I right?`
 * console.log(sentence) // 'Michael Jarrett is one hell of a guy am I right?'
 * 
 * We can do a lot with strings with JavaScripts built in string methods, but we will save
 * that for our "string-manipulation" section.
 * 
 * 
 * 
 * Booleans : the boolean primitive data type can either be true or false, which are both
 * recognized as keywords in JS so we don't need to wrap them in quotes.
 * 
 * let answer = true;
 * const RESULT = false;
 * 
 * Think of booleans as yes or no answers to questions, or a light switch that completes a 
 * circut. Typically, if a condition resolves to true, we can move on to the next thing our 
 * code is prompting us to do, if it resolves to false, we can dictate what our code should 
 * do for that scenario
 * 
 * let answer = false;
 * 
 * if(answer is true){
 * 'do this'
 * } else if(answer is false){
 *     'do this'
 *  }
 * 
 * since on line 68 we have answer assigned a value of false, the code will the first code 
 * block on line 71 and execute the code on line 73 instead.
 * 
 * 
 * 
 * Arrays : arrays are a complex data that are used to represent an ordered list of things.
 *                      0        1       2          3          4
 * let colorsArray = ['blue', 'green', 'red', 'chartruese', 'cyan'];
 * the syntax for a arrays are brackets [], and each item in our array, refered to as 
 * elements, is seperated by a comma. Above in our colorsArray, we have several difference
 * colors as strings all seperated by commas in between brackets. Arrays can hold anything;
 * objects, other arrays, functions, numbers, booleans. Arrays use a zero counting index 
 * which means the first element is at position zero, and the second element is at position 
 * 1, take a note of the postions on line 84. Zero index counting is pretty easy to get used
 * too with a little practice. It is helpful to not that fact that even though our colorsArray
 * only goes up to postion number 4 in the array, there are actually 5 elements in our array.
 * 
 * Arrays also use bracket notation, which is a way of accessing elements at specific spots in
 * our arrays. The syntax for bracket notation, using our colorArray from above
 * as an example, is as follows...
 * 
 * console.log(colorArray[1]) //green. Green is at index 1 of colorArray
 * console.log(colorArray[4]) //cyan. Cyan is at index 4 of colorArray
 * 
 * JS interprets arrays as objects, which is something we will make more clean in the future,
 * but for now, just think of arrays as a special type of object that we can use to represent
 * on ordered list of values.
 * 
 * 
 * Objects : in JS many things are interperet as objects(more on this to come) but here we 
 * are talking about object literals, which, similar to arrays, are a complex data type that 
 * can hold many things. Objects are useful when we want to group together and independent 
 * thing in a meaning full way to dynamically access values. 
 * 
 * let carObject = {
 *   color : 'red',
 *    model :  'porsche',
 *    zeroToSixty : 4.1
 *   }
 * 
 * above we declared our objects name - carObject - and assigned it to data between the { } 
 * brackets, which is the syntax for an object. Between the curly brackets we have what are
 * called key values pairs or properties, thiink of it as dictionary terms with definintions
 * The first part of a key value pair is the key. In our carObject, color, model, and 
 * zeroToSixty are all keys, and 'red', 'porsche', and 4.1 are all values. Note that all keys
 * are interpreted by JS as stings, but we only need to surround our properties with quotes if
 * if we make it seperate words like 'zero to sixty'. Values inside of an object can be
 * anything, functions, other objects, booleans, numbers, strings, ect.
 * 
 * 
 * 
 * Functions : In JS there are two types of functions: the function that can be defined using
 * the function key word and new since ES6 arrow function ()=>{}. Functions in JS, similar to
 * mathmatical functions, typically result in something being done to our data, whether it's 
 * changing the data or organizing it in a specific way. 
 * 
 * A functions anatomy consists of the function keword followed by its name and then 
 * paranthesis containing a list of parameters and the function body enclosed in brackets,
 * typically ending with the keyword return, which shows us what our output from said
 * function will be
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
 * JavaScript interperets this as, okey, time to pass this data into this function and return
 * something out of it...
 * 
 * functions can also be assigned as value to variables...
 * 
 * let aFunction = nameOfFunction(data);
 * 
 * now, if we call our variable aFunction with an arguement, JS will execute the function on
 * those values
 * 
 * aFunction(stuff) //outputs stuff after its been modified by the function
 * 
 * 
 * 
 * Undefined : undefined is its own data type. Undefined is not error. More accurately it 
 * means that JS can't find what it is. Look at the example below...
 * 
 * var name; 
 * console.log(name);
 * 
 * here we declare a variable name but don't assign it a value, if we try to take a closer 
 * peak at that variable with console.log() we will get undefined printed to the console, 
 * because name does not have a value. JavaScript recognizes the variable name, but it can't
 * find a value assigned to name. 
 * 
 * 
 * 
 * Null : null is another type of stand alone variable, but interesting enough JS interprets
 * null an object...
 *  
 * console.log(typeof null) // 'object';
 * 
 * Null is a specific way of assignin a variable a calue of 'nothing or 'empty, if you don't
 * assign a variable to null it will be undefined by default. Null is used to assign a value
 * to a variable before it is give or assigned a value later in your code. It i always better
 * to assign a variable to null rather than undefined.
 * 
 * 
 * NaN : is another unique data type that stands for 'not a number'. NaN is interpreted in JS
 * as a number data type though. Something will return NaN if you try to use a method or
 * operator reserved for numbers or a different data type. Note that you can use the add 
 * operator to add a number and a string, because JS automatically will convert that number
 * into a string with a thing called Type Coercion.
 * 
 * 
 * let number = 9;
 * let letter = "a";
 * 
 * let neither = number * letter;
 * console.log(neither) // NaN
 * 
 * 
 * 
 * Infinity and -Infinity : infinity and -infinity are interpret in JS as numbers. Inifinity
 * and -Infinity represent a number that is greater than any other number in JavaScript, which
 * is about 1.79e+308 or 2^1024. Infinity and -Infinity are larger and smaller respectively. 
 * Mathamatically infinity acts as we would expect it. Anything multiplied by Infinity is 
 * Infinity and anything divided by Infinity is zero. Anything multiplied by -Infinity is 
 * -Infinity and anything divided by -Infinity is -zero. 
 * 
 * Primitive vs Complex Data Types: Primitive and complex data types behave differently, 
 * variable assignments, math operators, and the result of your program will all be dependant
 * on using these different data types correctly. Again, primitive data types are numbers,
 * strings, booleans, null, undefined, NaN and the Infinities. Complex data types are arrays,
 * objects, and functions. The biggest difference between primitive and complex data types 
 * occurs when we try to copy or duplicate them. Primitive data types are copy by value
 * where complex data types are copy by reference.
 * 
 * Copy by value is easy to understand enough. Lets say we have a variable with a value and we
 * want to duplicate it. We can simply do just that...without any unintended consequences. 
 * 
 * let x = 8;
 * let y = x;
 * 
 * 
 * console.log(x) // 8;
 * console.log(y + 2) // 10;
 * 
 * Easy enough right?
 * 
 * 
 * Copy by reference is a little more complicated, you just have to rememeber that once you 
 * start copying or duplicating data and values in complex types, that the original copy is
 * also mutated, unless you explicitly make a new, non-copy-by reference duplicate.
 * 
 * Below is our car from earlier... 
 * 
 * let carObject = {
 *   color : 'red',
 *    model :  'porsche',
 *    zeroToSixty : 4.1
 *   }
 * 
 * if we were do copy and our car, and change something on the copy, our original car will 
 * also change. This is because when you make a copy of a complex data type it copys that 
 * value by 'reference'. Both objects are referencing the same piece of memory in the computer.
 *   //here we create a copy, by reference, of our car. 
 * let newCar = carObject;
 *   //now our newCar object looks exactly like our orginal one
 * newCar = {
 *   color : 'red',
 *    model :  'porsche',
 *    zeroToSixty : 4.1
 *   }
 *   //but if we update something on our newCar, say like change the color...
 * newCar.color = 'purple';
 *   //now both of our car objects will be purple
 *  
 * carObject = {               newCar = { 
 *   color : 'purple',                   color : 'purple',
 *    model :  'porsche',                model : 'porsche',
 *    zeroToSixty : 4.1                  zeroToSixty : 4.1
 *   }                                   }
 *
 * 
 * If you don't want this to happen, be sure to explicitly my a copy by value copy of your 
 * complex data type. The Array.from() method and the Spread Operator "..." are both useful
 * when we are trying to make copy by value copies of complex data types.
 * 
 * 
 * 
 * 
 *
 * 
 * 
 * 
 **/
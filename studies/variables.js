/**
 * Variables
 * 
 * Variables in JavaScript act as place holders or labels for data that represents an actual
 * value, similar to basic algebra.
 * 
 * x = 5;
 * y = 6;
 * x + y = 11;
 * 
 * Above 'x' was assigned a value of 5, and 'y' was assigned a value of 6. After some basic 
 * math, we can see what adding the value of x to the value of y intuitively gives us 11.
 * We can preform the same type of operations in JavaScript by assigning values to variables.
 * 
 * There are three different keywords in JavaScript that can be used to bring our variables 
 * into existance. Var, let and const, more on these in a bit.
 * 
 * Lets check out some examples of variables in JavaScript and how to properly create them...
 * 
 * There are two key parts to creating a variable. 
 * 
 *  1.) Declaration:
 *      var number;
 * 
 *  2.) Assignment:
 *      var number = 17;
 * 
 * In the declaration we just create the label or the place holder. It doesn't have a value
 * in step on, think of it as just an empty box with a number sticker on it. If we try to 
 * peak at our variable now in the console we will see that its value is undefined, which 
 * makes sense right? 
 * 
 * console.log(number) // undefined
 * 
 * In step two, we are providing that place holder with data that represents an actual value,
 * we are putting something in our box with the number sticker on it. So now when we look 
 * at our variable in the console, it now has a value of 17
 * 
 * console.log(number) // 17
 * 
 * Besides the keyword 'var', in JavaScript we can create variables with the key words 'let'
 * and 'const', although these different key words do dictate different behavior when it 
 * comes to our variables. 
 *  
 * var number = 17;
 * let bigNumber = 124^3;
 * const smallNumber = 0.001;
 * 
 * Above we declared and assigned some variables all in the same line. 
 * 
 * var is around from older JavaScript versions, where as let and const are more recent 
 * additions. In actual practice, var shouldn't really every be used, but it will 
 * probably always be around to support legacy code, that is, code thats been around 
 * for a long time and is still used in some browsers. With var we can declare a
 * variable before we assign it, like we did in our first example. We can also do this with 
 * let but we can't do this with const.
 * 
 * 
 * 
 * need example of not being able to redeclare let and const and const variables should be capitalized
 * 
 * 
 * const num;
 * const num = 11;
 * console.log(num) // throws an error
 * 
 * Another key difference between variable types is const can not be reassigned once it is 
 * already assigned to a value. This does not mean that the value can't be mutated, but that 
 * we can't overwrite the value of const with another value just by re assigning it
 * 
 * var car = 'red';
 *     car = 'blue';
 * console.log(car) // blue;
 * 
 * let truck = '20mpg';
 *     truck = '25mpg';
 * console.log(truck) // '25mpg';
 * 
 * const coupe = '2doors';
 *       coupe = '4doors';
 * console.log(coupe) // '2doors'; the value of our coupe variable won't change because we 
 * declared it with const. 
 * 
 * But, for complex data types we can mutate variable values declared with const;
 * 
 * const coupe = {
 *     doors : 2,
 *     color : red,
 *     mpg : 35
 *    }
 * coupe.color = blue;
 * console.log(coupe) // const coupe = {
 *     doors : 2,
 *     color : blue,
 *     mpg : 35
 *    }
 * 
 * As you can see, our coupe is now blue, but we didn't reassign its value, we updated it,
 * noting the distintion between these two actions will help you better understand how your 
 * variable declared with const will behave. * 
 * 
 * 
 * The other biggest difference (argumenbly most important distinction) between our variable
 * types is there scope, which is developer vinacular for accessability or visibility of 
 * variables. 
 * 
 * 
 * Scope
 * 
 * There are 3 types of scope: global scope, block scope, and function scope. Each expects 
 * different things and have there own rules when it comes to defining variables with var,
 * let and const work. Scope is simply any area between curly brackets {}, but be sure note
 * the difference between an object literal, which uses the same curly brackets in its sytax.
 * 
 * 
 *******************************************************************************************  
 *     Global Scope                                                                        *
 *                                                                                         *                                                                                      
 *      * *****************************************************************                * 
 *      *    Block Scope                                                  *                *
 *      *                                                                 *                *
 *      *   ********************************************************      *                *
 *      *   *  Function Scope                                      *      *                * 
 *      *   *                                                      *      *                * 
 *      *   *                                                      *      *                *
 *      *   ********************************************************      *                *
 *      *                                                                 *                * 
 *      *                                                                 *                * 
 *      * *****************************************************************                *
 *                                                                                         *
 *                                                                                         * 
 * *****************************************************************************************
 * 
 * If something is declared in global scope, it is accessible in all other scopes, but this
 * does not  work the other way around, and the rules vary depending on the what key word
 * you declared your variable with. A variable declared with var is available or visible in 
 * all other scopes, unless that variable is declared inside of a function, in which  case
 * all variable types are limited to scope or code block in which they were declared. 
 * Variables declared with let and const are only visible inside of the scope in which they
 * were created. 
 * 
 * Hoisting
 * 
 * Hoisting in JavaScript is directly related to scope, and for the most part it simply means
 * 'put on top' or 'raised up to the top'. Hoisting only occurs to variables created using 
 * the var 'keyword' and fuctions defined with the keyword 'function'. Variables delcared 
 * with let and const are NOT hoisted. You can think of hoisting as a default safety feature
 * or a way of protecting variables because it happens automatically and prevents your code 
 * from throwing an error and crashing your entire program or application.
 * 
 * Scope and hoisting rules and differences will become more apparent when we start defining
 * our variables in local and function scope, but for now just try to remember a few key
 * things:
 * 
 * 1.) You really shouldn't be using var...but variables defined with var names are hoisted and 
 * variables defined with var outside of global scope are still visible from global scope,
 * unless the variable is assigned inside function scope.
 * 
 * ex. like class with console.log make in replit and copy and paste
 * 
 * 2.) Variables declared with let and const can not be redeclared, are not hoisted, and are only accesible inside
 * the scope in which they were defined.
 *example
 *
 * 3.) const can not be re-assigned to a new value once it is defined, so it is best practice
 * to use const when defining variables that we know are not going to change or that we do 
 * not want to change.
 * 
 * example 
 * 
 * 4.) For now, it is best to get into the practice of declaring all variables at the top of 
 * your code. 
 * 
 * 
 * 
 * 
 * I think I get it. So it doesn't initialize them as undefined, which is as good as not hoisting it, 
 * regardless of what's happening behind the scenes. 

 * */
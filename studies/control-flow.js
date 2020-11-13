/**Control Flow :
 * 
 * 
 * Control flow in JavaScript is the order in which your program executes the instructions 
 * you give it. JavaScript reads the your code from top to bottom, unless otherwise dictated.
 * If/else statements are a good example of control flow...
 * 
 *      if(this happens to be the case){
 *        execute this line of code
 *      } else/if(the above is not true, and this happens to be the case){
 *              execute this line of code
 *              } else {    // if none of the above is true...
 *                      execute this line of code
 *                      }
 * 
 * Above, we have a series of if/else statements chained together. When we want our code to
 * execute it will start by looking the first statment on line 8. If the condition inside 
 * the parantheses () is true, our code will execute what ever we have on line 9, between 
 * the curly brackets {}. If our first if statement is not true, the computer program will
 * move to evalute the next line, on line 10. Now, imagine that our code is 50 lines longer... 
 * this process repeats until it reaches a condition that is true, or it reaches the final
 * 'else' statement, which acts as a default in the sense that if nothing above it in our 
 * if/else statement happens to be true, execute this final else statement. 
 * 
 * A real world example maybe something simple such as age verification...
 * 
 *   function areThey21?(age){
 *            if(age >= 21){
 *              console.log('You may enter')
 *              } else {
 *                 console.log('You gotta go')
 *              }
 *              }
 * 
 * Does the above example make sense? We created a funciton that will take an age as 
 * an arguement. The first if statement on line 28 will check if the age entered is above 
 * or equal to 21.  If that condition is true, then we will execute the line of code on 
 * line 29. If the age is not 21, our control flow will take us down to the next statement
 * which prints out 'You gotta go'. 
 * 
 * Another good example of what control flow means is the switch statement. Similar to the
 * if/else statement, a switch statement is use to 'switch' between cases depending on 
 * certian conditions...below is a function containing a switch statement. From a syntatical
 * stand point, a switch statement reads a lot like english. See if you can figure out 
 * what is going on below...
 * 
 *          function animal(name){
 *
 *      switch (name){
 *      case "monkey":
 *          console.log("would you like a banana?");
 *          break;
 *      case "dog":
 *          console.log("Who's a good boy?");
 *          break;
 *      case "cat":
 *          console.log("Meow mix time");
 *          break;
 *      default:
 *          console.log("must be somekinda alien or sumpin");
 *      }
 *      }
 *      
 *      name("cat"); // "Meow mix time"
 * 
 * 
 * Control flow is omnipresent in JavaScript and all of computer science for that matter.
 * Just remember, when it comes down to it, computers are not smart. So when we are building
 * a program or application, our control flow needs to be specific and succint. Computers 
 * will only follow the instructions we you give them, so we need to make sure: our instuctions
 * are using the right variables so we don't run into scoping issues, our loops eventually end
 * or break out at a condtion so were not stuck in them forever, and our if/statements are 
 * pointing our code in the right direction depending on what we want our output to be.
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
 * 
 * */
/**String Manipulation :
 * 
 * String manipulation is all about editting string type variable with built in JavaScript
 * methods. Methods in general in JavaScript are very useful, mostly because they help us to 
 * write shorter and sweeter code, many of them coming with built in loops so we don't have 
 * to write a loop out in our code everytime we need one. Lets go over a few of the more common
 * string methods. 
 * 
 * 
 * 
 * string.split() : the .split() method takes a string and seperates into elements and puts it
 * inside of an array. The .split() method comes with an optional parameter, (whatever we put
 * inside of the paratheses), which will split our sting up one way or another. If we don't 
 * pass anything through .splits parameter, JavaScript will return an array with one element...
 * 
 * let string = 'word';
 * let array = string.split();
 * console.log(array) // ['word']
 * 
 * JavaScript will seperate the string by what ever we put in the paratheses of .split(), so
 * to seperate our word into individual letters in our array we need to pass an empty space
 * to .split(). Example below.
 * 
 * let string = 'word';
 * let array = string.split(''); // notice empty space or empty string as arguement...
 * console.log(array) // ['w', 'o', 'r', 'd'] //or sting is now seperated into an array of 
 * letters...
 * 
 * What if our sting is a sentence and we want to split it into an array of words?
 * 
 * let string = 'This is a sentence of words';
 * let array = string.split(" "); //notice the space we pass as an arguement
 * console.log(array) // ['This', 'is', 'a', 'sentence', 'of', 'words']
 * 
 * Other handy string methods in JavaScript are the .toLowerCase() and .toUpperCase() methods.
 * As implied in the name, these methods help us achieve the proper casing of our string.
 * 
 * let string = 'word'
 * let upperCase = string.toUpperCase();
 * console.log(upperCase) // 'WORD'
 * let lowerCase = upperCase.toLowerCase();
 * console.log(lowerCase) // 'word'
 * 
 * Used in conjunction with another string method, the .charAt() method, we can capitalize 
 * specific letter in our string. In JS, strings actually have an index, just like arrays...
 *               0123
 * let string = 'word' // 'w' is at index 0, 'o' is at index 1, ect... 
 * At charAt() uses this index to access a specific index in our string and only affects that 
 * index, so what if we only wanted to capitalize the first letter of our string...
 * 
 * let string = 'word'
 * let newString = string.charAt(0).toUpperCase();
 * console.log(newString) // 'W'
 * 
 * but wait, now our newString variable has a value of 'W', but our string variable still has 
 * a value of 'word', not 'Word'. We can use another string method to create another variable...
 * 
 * let firstLetterCapped = newString + string.slice(1); 
 * console.log(firstLetterCapped) // 'Word'
 * 
 * the .slice method cuts off a portion of the old string and returns a new string, without 
 * changing the original. .slice can take two parameters, the first one being the index you 
 * want to start at, and the second one, which is optional, where you want to stop cutting
 * from your word. So above on line 58, where we have string.slice(1), .slice(1) is going to
 * start cutting at the first index, which for our variable string is 'o', and finish after
 * the last index. So on line 58 we are our variable look like this...
 *       newString       string.slice(1)
 *          "W"     +     "ord"
 * resulting in our or firstLetterCapped variable having a value of 'Word'.
 * 
 * 
 * Another useful string method is the .includes(). Essentially a search method, .includes will
 * tell us whether or note a string contains whatever we pass .includes() as an arguement. The
 * .includes() method will return a boolean.
 * 
 * let string = 'This is a sentence of words.'
 * console.log(string.includes('what')) // false
 * console.log(string.includes('sentence')) //true
 * 
 * .includes() uses strict equality, so case sensitivity should be paid attention to.
 * 
 * 
 * The .reverse() method is another handy string method. Lets say we have a bug in our code
 * that keeps printing strings our in reverse order, or some files where messed up when they 
 * were downloaded and all our text is backwards. The .reverse() method essentially takes that
 * string, seperates it into an array, loops over it backwards and returns it as a new value. 
 * .reverse() highlights the convienence of methods in JavaScript, as it would take several   
 * lines of code to accomplish reversing a string without the method! The more familiar you
 * get with methods the more there utilitarian quality becomes apparent.
 * 
 * let string = 'deneppah tahw'
 * let reversedString = string.reverse()
 * console.log(reversedString) // 'what happened'
 * 
 * 
 * */
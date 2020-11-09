/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//***ONLY USE VAR FOR DATA.JS***//
var animal = {};
animal.species = 'duck';
animal['name'] = 'Daffy';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create empty array
var noises = [];
//add element with bracket notation
noises[0] = 'quack quack';
console.log(noises);
//add element to end with bracket notation
noises[noises.length] = 'sqweek';
///add element to the beggining with array method
noises.unshift('flap flap');
//add element to the end with array method
noises.push('honk honk');

console.log(noises.length);

console.log(noises, 'array');



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal.noises.unshift('growl');
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals)
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']}
animals.push(duck);
console.log(animals)

var doggo = {species: 'mutt', name: 'Ralph', noises: ['bark bark', 'woof']};
var kitty = {species: 'tabby', name: 'Fats', noises: ['meow', 'coo coo']};
animals.push(doggo, kitty);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//an array would be the best choice because its zero index counting structure helps us to dynamically access 
//information, as opposed to an object where properties are in no particular order and thus must be accessed by
//there specific key.
//create variable called friends and assign it to array
var friends = [];
console.log(animals)
//create a function that returns a random index from input array using Math.random()
function getRandom(animals){
let randomAnimal = Math.floor(Math.random() * animals.length);
return randomAnimal;
}
//assign variable to result of getRandom once called with animals array as argumenet
let getAnimal = getRandom(animals);
//push the name value from that random animal to friends array
friends.push(animals[getAnimal].name)
console.log(friends,'friends')
doggo.friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
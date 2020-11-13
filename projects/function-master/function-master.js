//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
   return Object.values(object)
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//should take an object and return all its keys with a string each seperated with a space
return Object.keys(object).join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//should take an object and return all its values that are stings each seperated with a space;
//create empty arr
let arr = [];
//loop through object
for(let key in object){
//if the current properties value is a typeof string, push to new array
if(typeof object[key] === 'string'){
//join array at the end with spaces
 arr.push(object[key])   
}

}
return arr.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
 //should take an arguement and return array if array and object if it is object
 
 if(Array.isArray(collection)){
     return 'array';
 } else if(typeof collection === "object" && !Array.isArray(collection) && collection !== null && !(collection instanceof Date)){
     return 'object';
 }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   //return input with first letter capitalized
   //turn string into an array
    return string.charAt(0).toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//map and slice and bracket notation and charAt
function capitalizeAllWords(string) {
//takes a string of words and return them as a string of words all capitalized
//change the string into and array
//console.log(`This is string inside capitalizeAllWords ${string}`)
let arrayOfWords = string.split(' ');
//console.log(arrayOfWords)
//iterate over the array
for(let i = 0; i < arrayOfWords.length; i++){
   //uppercase each element of array 
   arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
}
   //return array as sting
 //  console.log(arrayOfWords.join(" "))
   return arrayOfWords.join(" ");
}



//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//should take an object with name property and return "Welcome Name"
//i - object 
//o - string "Welcome Name"
//c - what if object properties don't contain name key?
//e - case sensitivity maybe?
//create return variable of "Welcome "
let greeting = "";
//console.log(object)
//iterate though object
    //try to solve with method Object.value?
    for(let key in object){
        //if object has a key of name
        //console.log(key)
        if(key === "name"){
        //concat name value to variable string
        greeting += `Welcome ${object[key].charAt(0).toUpperCase() + object[key].slice(1)}!` 
        }
    }
//return string
//console.log(greeting)
return greeting
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
 //   console.log(object, 'original input')
    //should take an object with a "Name" and a "species" property keys and return a string..."Name" is a "species"
//input : object
//output: string with "Name" and "species" values capitalized
//constraints: case sensitivity of property keys
//edge cases: N/A
//create variable to return
//console.log(object, '94')
//console.log(object.name, 'name')
//console.log(object.species, 'species')
let statement = "";
let propName = ""
let propSpecies = ""
 propName += object.name;
 propSpecies += object.species;
//console.log(propName, 'name', propSpecies, 'species')
//console.log(`${propName.charAt(0).toUpperCase() + propName.slice(1)} is a ${propSpecies.charAt(0).toUpperCase() + propSpecies.slice(1)}`)
statement += `${propName.charAt(0).toUpperCase() + propName.slice(1)} is a ${propSpecies.charAt(0).toUpperCase() + propSpecies.slice(1)}` 
//console.log(statement, 'statement')
return statement;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//maybeNoises() : Should take an object, if this object has a noises array
//return them as a string separated by a space, if there are no noises return 'there are no noises' 
//maybeNoises() : Should take an object, if this object has a noises array
//return them as a string separated by a space, if there are no noises return 'there are no noises' 
function maybeNoises(object) {
    console.log(object)
//check if the length of object.noises is greater than 0
console.log(object.noises.length)
let answer;
for(let key in object){
    if (!object['noises'] || object['noises'].length === 0) {answer = 'there are no noises'}; 
    if(object.noises.length > 0){
//if so return as a string seperated by a space
    console.log(object.noises.join(' '))
    answer = object.noises.join(' ');
//else answer = 'there are no noise'
    } else if(object.noises.length === 0){
    answer = 'there are no noises'
//if the object does not have any properties...answer = "there are no noises"
    } else if(!object.hasOwnProperty(key)){
    answer = 'there are no noises';
    }
    }
    return answer;
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(string, word) {
 // console.log(string)
 // console.log(word)
  //input string of words and a word
  //output true or false
  //contraints ?
  //e n/a
  let loweredString = string.toLowerCase();
  let loweredWord = word.toLowerCase();
  return loweredString.includes(loweredWord) ? true : false;
  
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object (2, 0, 2
function addFriend (name, object) {
//input name as a string, object with a friends key with an array value
//output return the updated object
//constraints ?
//edge ?
//push name to friends array?
//console.log(name, object, 'inputs')
 object.friends.push(name);
 return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, object) {
//console.log(name, object, 'inputs')
//input name as a string and an object with or without friends array as property
//output boolean
//c what if the object has no friends array? how to check if object is empty
//e n/a
//check if object is empty...if so return false
if(Object.keys(object).length === 0){return false}
//check if name is in object array
 return object.friends.includes(name) ? true : false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 //Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {
console.log(name, array, 'inputs')
//need to create an array of people?
//inputs name as a string and an array of objects
//output an array of names
//constraints accessing arrays and objects
//edge case n/a
//need to create an array of all names?
    //populate array by searching for all keys of ['name']?? //if objects have a name property but that value in our people array
//then need to compare list against friends array...with some type of search function? .includes?
//return an array of names that are not in name arguements friends array
let arrayOfPeople = []
let nonFriends = [];
//for  loop for array element access
 for(let i = 0; i < array.length; i++){
     //if element of array has a key of name...
     if(array[i].name){
         //add it to array of people
         arrayOfPeople.push(array[i].name)
     }
     //compare arrayOfPeople against friends array...
     if(array[i].friends.includes(!arrayOfPeople[i])){
        nonFriends.push(arrayOfPeople[i]); 
     }
 }
 console.log(arrayOfPeople)
 console.log(nonFriends, 'nonfriends')
 
 return nonFriends
 
 
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
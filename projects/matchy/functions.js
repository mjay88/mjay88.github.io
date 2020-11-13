/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, string){
  //iterate through animals array which is an array of objects with properties
  let answer = null;
  for(let i = 0; i < animals.length; i++){
  //if the current elements name property is the same as the string passed as an arguement
  if(animals[i].name === string){
      //reassign the variable we are going to return from this function to current element
      answer = animals[i]
   }
  }
  console.log(answer, 'answer for 1')
   return answer; 
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
 //iterate through animals array,
 for(let i = 0; i < animals.length; i++){
    //if current element name property value is the same as the name string passed as an argument, 
     if(animals[i].name === name){
         //replace the entire element (animal[i]) with replacement arguement
         animals[i] = replacement;
     }
 }
 
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    //iterate through animals array
   for(let i = 0; i < animals.length; i++){
     //if the current elements name property value is equal to the name passed as and arguement
     if(animals[i].name === name){
             //removce the current element
        animals.splice(animals[i], 1) 
     }
   }

}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
 //iterate through animals
    console.log(animal, 'animal');
    console.log(animals, 'before')
    console.log(animal.name.length, 'length')
    console.log(animal.species.length, 'spieces length')
    for(let i = 0; i < animals.length; i++){
        console.log(animals[i].species.length > 0, 'boolean')
    
    //check if the animal arguement (which is an object with properties) name property has a value length greater than 0
    //check if the animal arguement speices property has a valalue length greater than 0
    //check if the animal arguements name property is not the same as anyone elses name property in the animals array
    if(animal.name.length > 0 && animal.species.length > 0 && animal.name !== animals[i].name){
        //adds this animal object to the array if all above conditions are true
     return animals.push(animal);
    } else {
        return animals;
    }
    }
    console.log(animals, 'after')
    
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

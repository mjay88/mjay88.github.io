// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//should return object with contact information

return {
    id : id,
    nameFirst : nameFirst,
    nameLast : nameLast
}
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    let contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //takes contact object to be added to contact list
        //create key of addContact, with a value of function(contact)
        //inside funtion expression push contact to contacts array
        addContact : function(contact){
           contacts.push(contact);
        },
        //findContact(fullName) is suppose to search for a fullName string, so create full name variable, and return the contact object if found
        //or undefined if not fount
        findContact : function(fullName){
            for(let i = 0; i < contacts.length; i++){
                //set variable
               let longName = contacts[i]['nameFirst'] + " " + contacts[i]['nameLast']; 
            //if arguement matches variable
                if(fullName === longName){
                    //return variable
                    return contacts[i]
                } else {
                    //otherwise return undefined
                    return undefined;
                }
            }
        },
        
        //remove contact should take a contact to be deleted and remove it from the list
        removeContact : function(contact){
          for(let i = 0; i < contacts.length; i++){
             contacts[i] === contacts[i].id.toString();
            if(contact == contacts[i]){
             contacts.splice(contacts[i], 1)
                }
            }
        }, 
        //add a printAllContactNames() function to your factory function that should print all contact list names
        //with a line break
        printAllContactNames : function(){
            //gonna have to iterate over contact list
            //just the name not the id
            //add a line break between
            //return as a string not console.log
        //create empty array to push all contacts without id to
        //the return array.join(\n\)
        // let noIdArr = [];
        // let name = '';
        // for(let i = 0; i < contacts.length; i++){
        //     name = (contacts[i].nameFirst + " " + contacts[i].nameLast);
        //     noIdArr.push(name)
        // }
        // console.log(noIdArr.join('\n'))
        // return noIdArr.join('\n')
        
            let name = '';
            let string = '';
          for(let i = 0; i < contacts.length; i++){
            name = contacts[i].nameFirst + " " + contacts[i].nameLast;
             string += name + "\n"
             console.log(string)
             
            }
            console.log(string)
            string = string.slice(0, -1);
            console.log(string)
            return string;
    }       
}
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

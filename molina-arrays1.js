//Variables declared with let can be reassigned
//Varriables declared with the const keyword cannot be reassigned
//elements in an array declared with const remain mutable meaning we can change the contents but cannot reassign a new array.

let condiments = ['Ketchup','Mustard','Relish'];
condiments[0] = 'Mayo';
console.log(condiments.length);
condiments = 'Mayo'
console.log(condiments)

const utensils = ['Fork', 'Spoon', 'Knife'];
utensils[2] = 'Spork'
console.log(condiments)

//One of an arrays built in properties is length : returns the number of items in the array.
//Using .length-1 will always give the last number in an array
//dot notation - chaining a period with the property name to the array, to access the length property of the newYearsResolutions array
//When wanting to know how many elements are in an array we can acces the .length property

/* .push method - specifically called on arrays to make common tasks like adding and removing elements more straightforward
.push allos us to add items to the end of an array.
*/

//We access the push method by using dot notation
//.push can takr a single argument or multiple arguments separated by commas.
//.push is considered a destructive method because it modifys and mutates the original array.

const chores = ['Dishes','Trash'];
// const removed = chores.pop();
chores.push('Cat Box', 'Cleaning');
console.log(chores.unshift());
console.log(chores)


//.pop removes the last item of an array
//.pop changes the original information of an array

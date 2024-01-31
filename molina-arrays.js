// Organizing and storing data is a foundational concept of programming
// One way we organize daya in real life is by making lists.

let newYearsResloutions = ['Keep a journal','Take a falconry class', 'Learn Kubernetes'];
newYearsResloutions[0] = 'Get my money up';
newYearsResloutions[1] = 'Not my funny up';
newYearsResloutions[2] = 'Bozo';
console.log(newYearsResloutions.length);
console.log(newYearsResloutions[newYearsResloutions.length-1])

// Arrays are JavaScripts way of making lists
// Arrays can store any data types (including strings, number, and booleans)
// Arrays are ordered, meaning each item has a numbered position.
/* One way we can create an array is to use array literal
 Array literal - creates an array by wrapping items in square brackets[]
 Arrays can store any data type. */ 

 const hobbies = ['Gaming', 'Spending time with friends','Watching Bluey'];
 console.log(hobbies [0]);
 
 let listItem = hobbies[0];
 console.log(hobbies[2]);

//  Each element in an array has a numbered position known as its index
// Can access individual items using their index, similar to referencing an item in a list based on the items position
// Arrays in JS are zero-indexed - start counting from 0 rather than 1, first item in array is 0

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';
console.log(seasons);
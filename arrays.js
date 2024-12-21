// Arrays in JavaScript

// 1. What is an array?

// An array is a data structure that stores multiple values (numbers, strings, objects, etc.) in a single variable.

// Examples
const myArray = [10, 20, 30]; // An array holding numbers
const mixedArray = ["Hello", 42, { key: "value" }]; // An array with different data types

// 2. Accessing array elements

// Use square brackets with the index to access element(s) (index starts at 0).

//Examples
console.log(myArray[0]); // Access the first element (10)
console.log(myArray[2]); // Access the third element (30)

// 3. Modifying array elements
// Change value(s) of an element by assigning to its index.

//Examples
myArray[1] = 25; // Update the second element
console.log(myArray); // Output: [10, 25, 30]

// 4. Adding elements to an array

// Add to the end of the array

//Examples
myArray.push(40); // Adds 40 to the end
console.log(myArray); // Output: [10, 25, 30, 40]

// Ex. 2: Add to the beginning of the array
myArray.unshift(5); // Adds 5 to the beginning
console.log(myArray); // Output: [5, 10, 25, 30, 40]

// 5. Removing elements from an array

// Remove the last element

//Examples
myArray.pop(); // Removes 40
console.log(myArray); // Output: [5, 10, 25, 30]

// Ex. 2: Remove the element(s)
myArray.shift(); // Removes 5
console.log(myArray); // Output: [10, 25, 30]

// Ex. 3: .splice
myArray.splice(1, 1, 20, 35); // Removes 1 element at index 1 and adds 20, 35
console.log(myArray); // try it

// Ex. 4: Extract a portion of an array! (does not modify the original array) 
// Add/Remove elements at specific positions

const slicedArray = myArray.slice(1, 3); // Extracts elements at index 1 and 2
console.log(slicedArray); // try it

// 6. Combining arrays
// Create two arrays and merge them using .concat

//Example
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// 7. Other useful methods
// Convert an array to a string!

//Example
const stringArray = myArray.join(", "); // Joins elements with ", "
console.log(stringArray); // Output: "10, 25, 30"


// Practice Prompt!
// Run the code in JS command shell

const arr_p = [];
const name = prompt("Enter your name");
if (name) arr_p.push(name); // Adds name if entered

const age = prompt("Enter your age:");
if (age) arr_p.push(age); // Adds age if entered

alert("Array after adding inputs: " + arr_p);

const remove = prompt("Remove the last element? (yes/no)");
if (remove.toLowerCase() === "yes") {
    arr_p.pop(); // removes the last element
}

alert("Final array: " + arr_p);


// 9. Open-Ended Practice Problems

// Problem 1: Create an array of your favorite foods, then:
// - Add two more foods to the end of the array.
// - Remove the first food from the array.
// - Convert the array to a string with foods separated by a comma and a space.
// - Log each step to see how the array changes.


let foods = [];
console.log("Initial array: ", foods);

foods.push("falafel", "ramen", "green tea", "pho");
console.log("Favorite foods added: ", foods);

foods.shift();
console.log("Took off the chickpeas: ", foods);

foods.pop();
console.log("Popped off the pho: ", foods)

foods.join(",");
console.log("Made it into a family of strings: ", foods);


// Problem 2: Create a nested array that represents a simple to-do list. Each sub-array should have a task name and a boolean value indicating whether it's completed.
// - Add a new task to the list.
// - Update one of the tasks to mark it as completed.
// - Use a loop to log all the tasks with their completion status.


